// ==UserScript==
// @name        Element Remover
// @namespace   samsquanchhunter
// @version     0.5.2
// @include     http://*
// @include     https://*
// @grant       none
// ==/UserScript==
'use strict';var g;
(function(){function d(){for(var b=[],e=document.getElementsByTagName("*"),a=0,d=e.length;a<d;a++)null!==e[a].getAttribute("toRemove")&&b.push(e[a]);return b}var f=document.body;f.addEventListener("contextmenu",function(b){f.setAttribute("contextmenu","userscript-grease");g=b.target;b=document.querySelector("#userscript-grease #menu_elemr_reset");0!==d().length?b.disabled=!1:b.disabled=!0},!1);var c;0===document.getElementsByTagName("menu").length?(c=document.createElement("menu"),c.id="userscript-grease",
c.type="context"):c=document.getElementsByTagName("menu")[0];var a=document.createElement("menuitem");a.id="menu_elemr";a.label="Remove Element";a.icon="http://i.imgur.com/IeWWYDw.png";c.appendChild(a);a=document.createElement("menuitem");a.id="menu_elemr_reset";a.label="Reset Element Remover";a.icon="http://i.imgur.com/BN4vTKK.png";c.appendChild(a);f.appendChild(c);document.querySelector("#userscript-grease #menu_elemr").addEventListener("click",function(){g.setAttribute("toRemove",!0)},!1);document.querySelector("#userscript-grease #menu_elemr_reset").addEventListener("click",
function(){for(var b=0;b<d().length;b++){var a=d()[b];a.style.visibility="visible";a.style.width="auto";a.style.height="auto";d()[b].setAttribute("toRemove",!1)}},!1);setInterval(function(){for(var a=0;a<d().length;a++)if("true"==d()[a].getAttribute("toRemove")){var c=d()[a];c.style.visibility="hidden";c.style.width="0px";c.style.height="0px"}},1E3)})();