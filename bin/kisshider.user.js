// ==UserScript==
// @name        KissHider
// @namespace   what's a good space for a name
// @description Ad auto-hider for kissanime.to
// @include     http://kissanime.to/*
// @include     https://kissanime.to/*
// @version     0.0.2
// @grant       none
// ==/UserScript==
'use strict';(function(){function a(a){a.parentNode.removeChild(a)}a(document.getElementById("adsIfrme6"));a(document.getElementById("adsIfrme7"));a(document.getElementById("adsIfrme8"));a(document.getElementById("adsIfrme10"));a(document.getElementById("adsIfrme11"));for(var b=0;b<document.getElementsByClassName("divCloseBut").length;b++)a(document.getElementsByClassName("divCloseBut")[b])})();