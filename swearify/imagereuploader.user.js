// ==UserScript==
// @name            Swearify - Image Reuploader
// @namespace       samsquanchhunter
// @description     Special utility to quickly prepare images for insertion into Swearify.
// @version         1.4
// @include         http://*
// @include         https://*
// @grant           none
// ==/UserScript==

///portions from https://github.com/pinceladasdaweb/imgur-upload and LouCypher

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

if(document.getElementsByTagName("menu") === null){
  var menu = document.createElement("menu");
}else{
  menu = document.getElementsByTagName("menu")[0];
}
var menuitem = document.createElement("menuitem_imgre");
menuitem.label = "Resize and Upload";
/*jshint multistr: true */
menuitem.icon = "http://i.imgur.com/F2wghzO.png";
/*jshint multistr: false */
menu.appendChild(menuitem);
body.appendChild(menu);

document.querySelector("#userscript-grease menuitem_imgre")
  .addEventListener("click", uploadImage, false);

function initMenu(aEvent) {
  // Executed when user right click on web page body
  // aEvent.target is the element you right click on
  var node = aEvent.target;
  var item = document.querySelector("#userscript-grease menuitem_imgre");
  if (node.localName == "img") {
    body.setAttribute("contextmenu", "userscript-grease");
    item.setAttribute("imageURL", node.src);
  }
}

///http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(directlink) {
  window.prompt("Direct Link", directlink);
}

///should work okay
function fileTypeLength(file){
  return file.length - file.lastIndexOf(".");
}

function uploadImage(aEvent) {
  // Executed when user click on menuitem
  // aEvent.target is the <menuitem> element

  var imageURL = aEvent.target.getAttribute("imageURL");

  var xhttp = new XMLHttpRequest();
  var status = document.querySelector('.status');
  var formdata = new FormData();

  formdata.append('image', imageURL);
  xhttp.open('POST', 'https://api.imgur.com/3/image');
  xhttp.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b'); //Get yout Client ID here: http://api.imgur.com/
  xhttp.onreadystatechange = function() {
    if (xhttp.status === 200 && xhttp.readyState === 4) {
      var response = JSON.parse(xhttp.responseText);
      var response_deeper = response.data.link;
      var dirty_resize = response_deeper.slice(0, response_deeper.length - fileTypeLength(response_deeper)) + "s" + response_deeper.slice(response_deeper.length - fileTypeLength(response_deeper));
      copyToClipboard(dirty_resize);
    }
  };
  xhttp.send(formdata);
}
