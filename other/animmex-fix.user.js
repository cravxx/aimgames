// ==UserScript==
// @name        Animmex video width fix
// @description Sets the player size to 100% on animmex
// @namespace   hansen-i-nate24215@gmail.com
// @include     https://amx.*.xyz/*
// @include     http://amx.*.xyz/*
// @include     https://www.animmex.net/*
// @include     http://www.animmex.net/*
// @version     1.0
// @grant       GM_addStyle
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';

// only has effect under amx.*.xyz
GM_addStyle(`
.video-js {
    width: 100% !important;
    height: 100% !important;
}
`);

// we can't use a CSS selector here because it might bugger up!
const voteBox = document.getElementsByClassName('vote-box');
if (voteBox.length > 0) { // will only be true under animmex.net
  voteBox[0].parentElement.style.width = '100%';
}
