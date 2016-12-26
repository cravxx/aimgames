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
'use strict';console.log(" ---- run start ----");console.log(" ---- run start ----");console.log(" ---- run start ----");console.log(" ---- run start ----");function e(){}var f=document.addEventListener.bind(document);Node.prototype.addEventListener=Element.prototype.addEventListener=e;window.setTimeout=e;window.setInterval=e;
f("DOMContentLoaded",function(){console.log("domcontentloaded");var d=Array.a(document.getElementsByTagName("script")),a=d.filter(function(a){return-1<a.textContent.indexOf("new IframeImageTransport")});if(a&&a[0]){a=a[0].textContent;for(a=a.substring(a.indexOf("http://image.prntscr.com/image/"),a.lastIndexOf('",'));document.body.firstChild;)document.body.removeChild(document.body.firstChild);for(var c=0;c<d.length;c++)d[c].parentElement&&d[c].parentElement.removeChild(d[c]);var b=document.createElement("img");
b.src=a;document.body.appendChild(b);g(a,function(a){console.log("data acquired");a=a.replace(/data:image\/png;base64/,"");h(a,function(a){console.log("it works");b.src=a;a=document.createElement("p");a.appendChild(document.createTextNode("uploaded to imgur!"));document.body.appendChild(a)})})}});function g(d,a){var c=new XMLHttpRequest;c.responseType="blob";c.onload=function(){var b=new FileReader;b.onloadend=function(){a(b.result)};b.readAsDataURL(c.response)};c.open("GET",d);c.send()}
function h(d,a){console.log("attempting to upload to imgur");var c=new FormData;c.append("image",d);var b=new XMLHttpRequest;b.open("POST","https://api.imgur.com/3/image.json");b.onload=function(){a(JSON.parse(b.responseText).data.link||b.responseText)};b.onerror=function(){a("error")};b.setRequestHeader("Authorization","Client-ID d8b88dd7493540b");b.send(c)};