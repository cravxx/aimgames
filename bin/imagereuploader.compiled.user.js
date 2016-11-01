// ==UserScript==
// @name            Swearify - Image Reuploader
// @namespace       samsquanchhunter
// @description     Special utility to quickly prepare images for insertion into Swearify.
// @version         1.4.4
// @include         http://*
// @include         https://*
// @grant           none
// ==/UserScript==
'use strict';var c=document.body;c.addEventListener("contextmenu",d,!1);if(0===document.getElementsByTagName("menu").length){var e=document.createElement("menu");e.id="userscript-grease";e.type="context"}else e=document.getElementsByTagName("menu")[0];var g=document.createElement("menuitem");g.id="menu_imgre";g.label="Resize and Upload";g.icon="http://i.imgur.com/F2wghzO.png";e.appendChild(g);c.appendChild(e);document.querySelector("#userscript-grease #menu_imgre").addEventListener("click",h,!1);function d(a){c.setAttribute("contextmenu","userscript-grease");a=a.target;var b=document.querySelector("#userscript-grease #menu_imgre");"img"==a.localName?(b.disabled=!1,b.setAttribute("imageURL",a.src)):b.disabled=!0}function h(a){a=a.target.getAttribute("imageURL");var b=new XMLHttpRequest,f=new FormData;f.append("image",a);b.open("POST","https://api.imgur.com/3/image");b.setRequestHeader("Authorization","Client-ID d8b88dd7493540b");b.onreadystatechange=function(){if(200===b.status&&4===b.readyState){var a=JSON.parse(b.responseText).data.link;window.prompt("Direct Link",a.slice(0,a.length-(a.length-a.lastIndexOf(".")))+"s"+a.slice(a.length-(a.length-a.lastIndexOf("."))))}};b.send(f)};