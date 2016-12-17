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
'use strict';var a=document.head||document.getElementsByTagName("head")[0];if(a){var b=document.createElement("style");b.type="text/css";try{b.textContent="\n.video-js, #video_1 {\n    width: 100% !important;\n    height: 100% !important;\n}\n"}catch(d){b.innerHTML="\n.video-js, #video_1 {\n    width: 100% !important;\n    height: 100% !important;\n}\n"}a.appendChild(b)}var c=document.getElementsByClassName("vote-box");0<c.length&&(c[0].parentElement.style.width="100%");window.open=function(){};