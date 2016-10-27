// ==UserScript==
// @name        KissHider
// @namespace   what's a good space for a name
// @description Ad auto-hider for kissanime.to
// @include     http://kissanime.to/*
// @include     https://kissanime.to/*
// @version     0.0.2
// @grant       none
// ==/UserScript==
(function () {
  'use strict';
  function remove(id) {
    id.parentNode.removeChild(id);
  }
  remove(document.getElementById('adsIfrme6'));
  remove(document.getElementById('adsIfrme7'));
  remove(document.getElementById('adsIfrme8'));
  remove(document.getElementById('adsIfrme10'));
  remove(document.getElementById('adsIfrme11'));
  for (var i = 0; i < document.getElementsByClassName('divCloseBut').length; i++) {
    remove(document.getElementsByClassName('divCloseBut') [i]);
  }
}());
