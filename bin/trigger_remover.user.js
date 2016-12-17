// ==UserScript==
// @name        Trigger Remover
// @description Detrigger your shit.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @version     1.3.1
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==
'use strict';var d=document.getElementById("chatbox"),e=d.getElementsByClassName("msg");window.addEventListener("load",function(){g(d,function(){for(var b=0;b<e.length;b++){var a=e[b].textContent,a=a.replace(/\[\/?[^\]]*\]/g,""),a=a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""),a=a.replace(/\s{2,}/g," "),a=a.replace(/[^\w\s]|(.)(?=\1)/gi,"");if(-1!=h(a,/\poi\b/gi)||-1!=h(a,/\p\soi\b/gi)||-1!=h(a,/\po\si\b/gi)||-1!=h(a,/\p\so\si\b/gi))e[b].textContent=""}})},!1);
function h(b,a){var c=b.substring(0).search(a);return 0<=c?c+0:c}var g=function(){var b=window.MutationObserver||window.WebKitMutationObserver,a=window.addEventListener;return function(c,f){b?(new b(function(a){(a[0].addedNodes.length||a[0].removedNodes.length)&&f()})).observe(c,{childList:!0,subtree:!0}):a&&(c.addEventListener("DOMNodeInserted",f,!1),c.addEventListener("DOMNodeRemoved",f,!1))}}();