// ==UserScript==
// @name            Swearify - Image Reuploader
// @namespace       samsquanchhunter
// @description     Special utility to quickly prepare images for insertion into Swearify.
// @version         1.4.3
// @include         http://*
// @include         https://*
// @grant           none
// ==/UserScript==
'use strict';var body=document.body;body.addEventListener("contextmenu",initMenu,!1);if(0===document.getElementsByTagName("menu").length){var menu=document.createElement("menu");menu.id="userscript-grease";menu.type="context"}else menu=document.getElementsByTagName("menu")[0];var menuitem=document.createElement("menuitem");menuitem.id="menu_imgre";menuitem.label="Resize and Upload";menuitem.icon="http://i.imgur.com/F2wghzO.png";menu.appendChild(menuitem);body.appendChild(menu);document.querySelector("#userscript-grease #menu_imgre").addEventListener("click",uploadImage,!1);function initMenu(a){body.setAttribute("contextmenu","userscript-grease");a=a.target;var b=document.querySelector("#userscript-grease #menu_imgre");"img"==a.localName?(b.disabled=!1,b.setAttribute("imageURL",a.src)):b.disabled=!0}function copyToClipboard(a){window.prompt("Direct Link",a)}function fileTypeLength(a){return a.length-a.lastIndexOf(".")}function uploadImage(a){a=a.target.getAttribute("imageURL");var b=new XMLHttpRequest;document.querySelector(".status");var c=new FormData;c.append("image",a);b.open("POST","https://api.imgur.com/3/image");b.setRequestHeader("Authorization","Client-ID d8b88dd7493540b");b.onreadystatechange=function(){if(200===b.status&&4===b.readyState){var a=JSON.parse(b.responseText).data.link,a=a.slice(0,a.length-fileTypeLength(a))+"s"+a.slice(a.length-fileTypeLength(a));copyToClipboard(a)}};b.send(c)};