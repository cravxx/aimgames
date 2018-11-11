
/* eslint strict: "off" */
/* exported Multimap */

/*!
https://github.com/villadora/multi-map

(The MIT License)

Copyright (c) 2013, Villa.Gao jky239@gmail.com; All rights reserved.
*/

function mapEach(map, operation){
  var keys = map.keys();
  var next;
  while(!(next = keys.next()).done) {
    operation(map.get(next.value), next.value, map);
  }
}

var Multimap = (function() {
  var mapCtor;
  if (typeof Map !== 'undefined') {
    mapCtor = Map;

    if (!Map.prototype.keys) {
      Map.prototype.keys = function() {
        var keys = [];
        this.forEach(function(item, key) {
          keys.push(key);
        });
        return keys;
      };
    }
  }

  class Multimap {
    constructor(iterable) {
      var self = this;
      self._map = mapCtor;
      if (Multimap.Map) {
        self._map = Multimap.Map;
      }
      self._ = self._map ? new self._map() : {};
      if (iterable) {
        iterable.forEach(function (i) {
          self.set(i[0], i[1]);
        });
      }
    }
    /**
       * @param {Object} key
       * @return {Array} An array of values, undefined if no such a key;
       */
    get(key) {
      return this._map ? this._.get(key) : this._[key];
    }
    /**
       * @param {Object} key
       * @param {Object} val...
       */
    set(key, ...values) {
      var entry = this.get(key);
      if (!entry) {
        entry = [];
        if (this._map)
          this._.set(key, entry);
        else
          this._[key] = entry;
      }
      Array.prototype.push.apply(entry, values);
      return this;
    }
    /**
       * @param {Object} key
       * @param {Object=} val
       * @return {boolean} true if any thing changed
       */
    delete(key, val) {
      if (!this.has(key))
        return false;
      if (arguments.length == 1) {
        this._map ? (this._.delete(key)) : (delete this._[key]);
        return true;
      }
      var entry = this.get(key);
      var idx = entry.indexOf(val);
      if (idx != -1) {
        entry.splice(idx, 1);
        return true;
      }
      return false;
    }
    /**
       * @param {Object} key
       * @param {Object=} val
       * @return {boolean} whether the map contains 'key' or 'key=>val' pair
       */
    has(key, val) {
      var hasKey = this._map ? this._.has(key) : this._.hasOwnProperty(key);
      if (arguments.length == 1 || !hasKey)
        return hasKey;
      var entry = this.get(key) || [];
      return entry.indexOf(val) != -1;
    }
    /**
       * @return {Array} all the keys in the map
       */
    keys() {
      if (this._map)
        return makeIterator(this._.keys());
      return makeIterator(Object.keys(this._));
    }
    /**
       * @return {Array} all the values in the map
       */
    values() {
      var vals = [];
      this.forEachEntry(function (entry) {
        Array.prototype.push.apply(vals, entry);
      });
      return makeIterator(vals);
    }
    /**
       *
       */
    forEachEntry(iter) {
      mapEach(this, iter);
    }
    forEach(iter) {
      var self = this;
      self.forEachEntry(function (entry, key) {
        entry.forEach(function (item) {
          iter(item, key, self);
        });
      });
    }
    clear() {
      if (this._map) {
        this._.clear();
      } else {
        this._ = {};
      }
    }
    get size() {
      var total = 0;

      mapEach(this, function(value){
        total += value.length;
      });

      return total;
    }
  }

  var safariNext;

  try{
    safariNext = new Function('iterator', 'makeIterator', 'var keysArray = []; for(var key of iterator){keysArray.push(key);} return makeIterator(keysArray).next;');
  }catch(error){
    // for of not implemented;
  }

  function makeIterator(iterator){
    if(Array.isArray(iterator)){
      var nextIndex = 0;

      return {
        next: function(){
          return nextIndex < iterator.length
            ? {value: iterator[nextIndex++], done: false}
            : {done: true};
        }
      };
    }

    // Only an issue in safari
    if(!iterator.next && safariNext){
      iterator.next = safariNext(iterator, makeIterator);
    }

    return iterator;
  }

  return Multimap;
})();
