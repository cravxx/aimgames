// ==UserScript==
// @name        Animmex video width fix
// @description Sets the player size to 100% on animmex
// @namespace   hansen-i-nate24215@gmail.com
// @include     https://amx.*.xyz/*
// @include     http://amx.*.xyz/*
// @include     https://www.animmex.net/*
// @include     http://www.animmex.net/*
// @version     1.4
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';if("undefined"==typeof d)var d=function(b){var e=document.head||document.getElementsByTagName("head")[0];if(e){var c=document.createElement("style");c.type="text/css";try{c.textContent=b}catch(k){c.innerHTML=b}e.appendChild(c)}};d("\n.video-js, #video_1 {\n    width: 100% !important;\n    height: 100% !important;\n}\n");var f=document.getElementsByClassName("vote-box");0<f.length&&(f[0].parentElement.style.width="100%");var g=document.getElementsByTagName("video");
if(0!==g.length){var h=g[0].getAttribute("poster");g[0].currentTime=GM_getValue(h,0);window.addEventListener("beforeunload",function(){GM_setValue(h,g[0].currentTime)})}window.eval(function(){function b(){}window.open=b;window.a=b;try{Object.defineProperty(window,"init",{configurable:!0,set:b,get:function(){return b}})}catch(e){}}.toSource()+";browserContext()");