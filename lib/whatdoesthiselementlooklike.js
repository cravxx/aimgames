'use strict';

// DOES HE LOOK LIKE A BITCH???
// this library provides a handy function for you to get
// the computed style of an element without the bullshit frequently associated with that.
// do not expect this to work under all browsers

function arrayUnique(array, sub) {
    var a = array.concat(sub);
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

function objectify(el) {
  const style = window.getComputedStyle(el);
  
  const oStyle = {};
  for (let i = 0; i < style.length; i++) {
    const k = style[i];
    const v = style[k];
    oStyle[k] = v;
  }
  return oStyle;
}

function getProcessedStyle($0) {

  const elLike = document.createElement($0.tagName);

  const oStyle = objectify($0);
  const baseStyle = objectify(elLike);

  const keys = arrayUnique(Object.keys(baseStyle), Object.keys(oStyle));

  keys.forEach(k => {
    if (oStyle[k] == baseStyle[k])
      delete oStyle[k];
  });

  const output = [];

  Object.keys(oStyle).forEach(k => {
    output.push('  '); output.push(k); output.push(': '); output.push(oStyle[k]); output.push(';\n');
  });
  return output.join('');
}
