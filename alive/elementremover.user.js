// ==UserScript==
// @name        Element Remover
// @namespace   samsquanchhunter
// @version     0.1.0
// @include     http://*
// @include     https://*
// @grant       none
// ==/UserScript==

///portions from https://github.com/pinceladasdaweb/imgur-upload and LouCypher

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

if(document.getElementsByTagName("menu").length === 0){
  var menu = document.createElement("menu");
  menu.id = "userscript-grease";
  menu.type = "context";
}else{
  menu = document.getElementsByTagName("menu")[0];
}
var menuitem = document.createElement("menuitem");
menuitem.id = "menu_elemr";
menuitem.label = "Remove Element";
menuitem.icon = "http://i.imgur.com/IeWWYDw.png";
menu.appendChild(menuitem);
body.appendChild(menu);

document.querySelector("#userscript-grease menuitem")
  .addEventListener("click", rElement, false);

var child_node = null;
var parent_node = null;

var running_array = [];

function initMenu(aEvent) {
  // Executed when user right click on web page body
  // aEvent.target is the element you right click on
  child_node = aEvent.target;
  parent_node = child_node.parentNode;
  var item = document.querySelector("#userscript-grease menuitem");
  body.setAttribute("contextmenu", "userscript-grease");
}

function rElement(aEvent) {
  // Executed when user click on menuitem
  // aEvent.target is the <menuitem> element
  addElement(child_node);
}

function addElement(elem) {
  running_array.push(elem);
}

window.addEventListener('load', function() { /* shit goes down in here */
   setInterval(function(){
     for(var t = 0; t < running_array.length; t++){
       var c_node = running_array[t];
       var p_node = c_node.parentNode;
       p_node.removeChild(c_node);
     }
  }, 1000);
}, false);
