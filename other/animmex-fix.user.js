// ==UserScript==
// @name        Animmex video width fix
// @description Sets the player size to 100% on animmex
// @namespace   hansen-i-nate24215@gmail.com
// @include     https://amx.*.xyz/*
// @include     http://amx.*.xyz/*
// @include     https://www.animmex.net/*
// @include     http://www.animmex.net/*
// @version     1.2
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';

function addStyle(css) {
  const head = document.head || document.getElementsByTagName('head')[0];
  if (!head) return;
  
  const style = document.createElement('style');
  style.type = 'text/css';
  
  try {
    style.textContent = css;
  } catch(e) {
    style.innerHTML = css;
  }
  
  head.appendChild(style);
};


// only has effect under amx.*.xyz
addStyle(`
.video-js, #video_1 {
    width: 100% !important;
    height: 100% !important;
}
`);

// we can't use a CSS selector here because it might bugger up!
const voteBox = document.getElementsByClassName('vote-box');
if (voteBox.length > 0) { // will only be true under animmex.net
  voteBox[0].parentElement.style.width = '100%';
}

// we want @grant none so we can assign this to `window` and block ze popups
window.open = function(){};
