'use strict';
function leveshtein(a, b){
  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

function getSmallestIndex(arr) {
  var i = 0, l = arr.length;
  var min = Number.MAX_VALUE;
  var mi = -1;
  for (; i < l; i++) {
    if (arr[i] < min) {
      min = arr[i];
      mi = i;
    }
  }
  return mi;
}

// TODO not very fast at all
function getAllProperties(t) {
  let prop = [];
  function acq(obj) {
    if (obj === null || obj === undefined) return; // recursive approach
    const p = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < p.length; i++) {
      const a = p[i];
      if (!prop.includes(a)) {
        prop.push(a);
      }
    }
    acq(Object.getPrototypeOf(obj));
  }
  acq(t);
  return prop;
}
function getClosest(target, name) {
  const rankings = [];
  // getOwnPropertyNames does not return inherited properties, but .keys does not return non-enumerable properties; discussion needed
  const targ = getAllProperties(target);

  // sort the array, for fast-tracking (the best match should be the shortest one, right?)
  // for verifying: aw.clear === clearTimeout, not clearInterval
  // longest string first:
  //targ.sort((a, b) => b.length - a.length);
  // shortest string first:
  targ.sort((a, b) => a.length - b.length);

  console.log('targ: ' + targ);

  for (let i = 0; i < targ.length; i++) {
    const t = targ[i];
    // FAST-TRACK if any key in the object starts with the requested name. without this, aw.clo === aw.clc rather than aw.close
    if (t.startsWith(name)) {
      //return target[t];
      console.log('1:'+t);
      return tryProxy(target[t]);
    }

    rankings.push(leveshtein(name, t));
  }

  const res = target[targ[getSmallestIndex(rankings)]];
  // debugging purposes, get the name of the real key being returned:
  console.log('2:'+res);

  // return a new proxy on the object using window._proxyHandler
  //return target[targ[getSmallestIndex(rankings)]];
  return tryProxy(res);
}

function tryProxy(res) {
  console.log('the RES ' + res);
  // Proxy will only accept non-null, non-undefined 'object' (and apparently 'function')
  return res !== undefined && res !== null && (typeof res == 'object' || typeof res == 'function') ? new Proxy(res, window._proxyHandler) : res;
}

{
  // proxyHandler is mirrored to window so we can call it recursively
  const proxyHandler = window._proxyHandler = {
    get: function(target, name) {
      // side note: zZçÇyYx (only the lowercase form of x) are all fairly unused in the global namespace
      // ones i've used: qQ$
      // ones i haven't used yet: _ (lodash)
      
      // fast-track if we've got jQuery/moo business
      if (name == '$' && '_steamrollerjQuery' in target) {
        return target._steamrollerjQuery;
      }
      if (name == 'Q' && '_steamrollerMooTools' in target) {
        return target._steamrollerMooTools;
      }
      //
      return name in target ? 
        tryProxy(target[name]) :
        getClosest(target, name);
    }
  };
  
  let aw = new Proxy(window, proxyHandler);
  window.aw = aw;
  
  // expose jQuery from SleazyCatcher if it's available
  if (window._steamrollerjQuery) {
    if (window.$) {
      console.error('you have two jquery installed. gonna expose to window.q instead; you can still use aw.$');
      window.q = new Proxy(window._steamrollerjQuery, proxyHandler);
    } else {
      window.$ = new Proxy(window._steamrollerjQuery, proxyHandler);
    }
  }
  // the same for mootools
  if (window._steamrollerMooTools) {
    window.oo = new Proxy(window._steamrollerMooTools, proxyHandler);
  }
}
