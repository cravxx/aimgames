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
  const altaw = {};
  
  // proxyHandler is mirrored to window so we can call it recursively
  const proxyHandler = window._proxyHandler = {
    get: function(target, name) {
      // side note: ZyY (only the lowercase form of x) are all fairly unused in the global namespace
      // ones i've used: qQ$çÇx
      // ones i haven't used yet: _ (lodash)
      
      // fast-track if we've got jQuery/moo business (TODO: proxy these)
      if (name == '$' && '_steamrollerjQuery' in target) {
        return target._steamrollerjQuery;
      }
      if (name == 'Q' && '_steamrollerMooTools' in target) {
        return target._steamrollerMooTools;
      }
      if (name in altaw) {
        return altaw[name];
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
    altaw.oo = new Proxy(window._steamrollerMooTools, proxyHandler);
  }
  // and other libs
  if (window._steamroller_) {
    altaw._ = new Proxy(window._steamroller_, proxyHandler);
  }
  if (window._steamrollerswal) {
    altaw.sw = new Proxy(window._steamrollerswal, proxyHandler);
  }
  if (window._steamrollerd3) {
    altaw.ç = new Proxy(window._steamrollerd3, proxyHandler);
  }
  if (window._steamrollerWordList) {
    altaw.z = new Proxy(window._steamrollerWordList, proxyHandler);
  }
  if (window._steamrollerxml2js) {
    altaw.x = new Proxy(window._steamrollerxml2js, proxyHandler);
  }
  if (window._steamrollerjsdom) {
    altaw.jd = new Proxy(window._steamrollerjsdom, proxyHandler);
  }
  if (window._steamrollerSugar) {
    altaw.sg = new Proxy(window._steamrollerSugar, proxyHandler);
  }
  if (window._steamrollerR) {
    altaw.Ç = new Proxy(window._steamrollerR, proxyHandler);
  }
  if (window._steamrollerBoiler) {
    altaw.bl = new Proxy(window._steamrollerBoiler, proxyHandler);
  }
  if (window._steamrollerparse5) {
    altaw.p5 = new Proxy(window._steamrollerparse5, proxyHandler);
  }
  if (window._steamrollerjshint) {
    altaw.jh = new Proxy(window._steamrollerjshint, proxyHandler);
  }
  if (window._steamrolleranime) {
    altaw.ame = new Proxy(window._steamrolleranime, proxyHandler);
  }
  if (window._steamrollerzxcvbn) {
    altaw.zx = new Proxy(window._steamrollerzxcvbn, proxyHandler);
  }
  if (window._steamrolleris) {
    altaw.is = new Proxy(window._steamrolleris, proxyHandler);
  }
  
  // now we get to the fun stuff!
  function getInfinity() {
    return typeof Infinity !== 'undefined' ? Infinity : 'Infinity' in window ? window['Infinity'] : 9e999;
  }
  window.ƒ = {
      π: Math.PI,
      ø: [],
      Ø: NaN,
      e: 2.7182818284590452353602874713527,
      root2: 2.7182818284590452353602874713527,
      rt2: 2.7182818284590452353602874713527,
      sqrt2: 2.7182818284590452353602874713527,
      α: 2.5029,
      δ: 4.6692,
      ζ: 1.2020569,
      φ: 1.61803398874,
      γ: 1.30357,
      K: 2.6854520010,
      oo: getInfinity(),
      A: 1.2824271291,
      C10: 0.12345678910111213141516171819202122232425252728293031323334353637,
      c: 299792458
  };
}
