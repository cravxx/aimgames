// ==UserScript==
// @name        printscr auto-imgur-mirror
// @namespace   printscr bypass / automatically uploads image to imgur
// @description wemes
// @include     http://prnt.sc/*
// @include     https://prnt.sc/*
// @run-at      document-start
// @version     some
// @grant       none
// ==/UserScript==

'use strict';

console.log(' ---- run start ----');
console.log(' ---- run start ----');
console.log(' ---- run start ----');
console.log(' ---- run start ----');

// disable addEventListener but keep a backup just in case
function noopfn() {}

const _REAL_FUNC_ = Element.prototype.addEventListener;
const _document_addEventListener = document.addEventListener.bind(document);

Node.prototype.addEventListener = Element.prototype.addEventListener = noopfn;

// bruteforce disable addEventListener
//Object.keys(window).forEach(k => {
//  if (window[k] && window[k].protoype && window[k].prototype.addEventListener) {
//    console.log('eventer: ' + k);
//    window[k].prototype.addEventListener = noopfn;
//  }
//})

const _setTimeout = window.setTimeout.bind(window);
const _setInterval = window.setInterval.bind(window);
window.setTimeout = noopfn;
window.setInterval = noopfn;

_document_addEventListener('DOMContentLoaded', e => {
  console.log('domcontentloaded');

  const first = Array.from(document.getElementsByTagName('script'));//so we can remove the script elements later on
  const filt = first/*.filter(e=>!e.src)*/.filter(e=>e.textContent.indexOf('new IframeImageTransport')>-1);//at least in the meanwhile this hack works
  if (filt&&filt[0]) {
    let str = filt[0].textContent;
    str=str.substring(str.indexOf('http://image.prntscr.com/image/'), str.lastIndexOf('",'));//acquire the image url!
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    for (let i = 0; i < first.length; i++) {
      if (first[i].parentElement) first[i].parentElement.removeChild(first[i])
    }
    const el = document.createElement('img');
    el.src=str;
    document.body.appendChild(el);
    
    //upload to imgur
    toDataUrl(str, url => {//we need to upload base64, since giving the url will simply not work
      console.log('data acquired');
      url = url.replace(/data:image\/png;base64/, '');
      uploadImage_Imgur(url, lstr => {
        console.log('it works');
        el.src = lstr;
        const p = document.createElement('p');
        p.appendChild(document.createTextNode('uploaded to imgur!'));
        document.body.appendChild(p);
        //alert(str);
      });
    });
  }

});

/*
const el =document.getElementById('image-img');
console.log('page acquired', document);
if (el!==null) {
  console.log('element acquired');
  toDataUrl(el.src, url => {
    console.log('data acquired');
    url = url.replace(/data:image\/png;base64/, '');
    uploadImage_Imgur(url, str => {
      console.log('it works');
      alert(str);
    });
  });
}*/

// since its same origin i think:
function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.send();
}

function uploadImage_Imgur(dataIn, callback) {
  console.log('attempting to upload to imgur');    
  
  const fd = new FormData();
  fd.append('image', dataIn); // Append the file

  const xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
  xhr.open('POST', 'https://api.imgur.com/3/image.json'); // Boooom!
  xhr.onload = function() {
    callback(JSON.parse(xhr.responseText).data.link || xhr.responseText);
  };
  xhr.onerror = function() { callback('error'); };
  xhr.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b'); // imgur key
  xhr.send(fd);
}
