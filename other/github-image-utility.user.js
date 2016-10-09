// ==UserScript==
// @name        GitHub Image Utility
// @namespace   samsquanch gets the dong
// @include     *
// @version     1.2
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @require     https://unpkg.com/github-api/dist/GitHub.bundle.min.js
// ==/UserScript==
'use strict';

// this isnt the version i use

// jshint browser:true
/* globals console:true, window:true, alert:true, GitHub:true,GM_getValue:true, GM_setValue:true, GM_registerMenuCommand:true */

/*
 * these arent actually used..
 */
//if (!Element.prototype.remove)
//  Element.prototype.remove = function() {
//    this.parentElement.removeChild(this);
//  };
//
//const listRemove = function() {
//  for (let i = this.length - 1; i >= 0; i--) {
//    if (this[i] && this[i].parentElement) {
//      this[i].parentElement.removeChild(this[i]);
//    }
//  }
//};
//if (!NodeList.prototype.remove)
//  NodeList.prototype.remove = listRemove;
//if (!HTMLCollection.prototype.remove)
//  HTMLCollection.prototype.remove = listRemove;

/**
 * create the context item
 */
function createStuff() {
  // create menu
  document.addEventListener("contextmenu", onRightClick, false);
  let menu;

  if (document.getElementsByTagName("menu").length === 0) {
    menu = document.createElement("menu");
    menu.id = "userscript-grease";
    menu.type = "context";
  } else {
    menu = document.getElementsByTagName("menu")[0];
  }
  
  // create menu items
  let menuitem = document.createElement("menuitem");
  menuitem.id = "menu_imgre";
  menuitem.label = "Upload to GitHub";
  menuitem.icon = "http://i.imgur.com/F2wghzO.png";
  menu.appendChild(menuitem);
  document.body.appendChild(menu);

  document.getElementById("menu_imgre")
    .addEventListener("click", checkImageOrigin, false);

  menuitem = document.createElement("menuitem");
  menuitem.id = "menu_imgold";
  menuitem.label = "Upload to Imgur";
  menuitem.icon = "http://i.imgur.com/F2wghzO.png";
  menu.appendChild(menuitem);
  document.body.appendChild(menu);

  document.getElementById("menu_imgold")
    .addEventListener("click", checkImageOrigin_Imgur, false);
}

/**
 * enable context menu item
 */
function _enable(node, item) {
  if (node.localName == "img") {
    item.disabled = false;
    item.setAttribute("imageURL", node.src);
  } else {
    item.disabled = true;
  }
}

/**
 * Executed when user right click on web page body
 */
function onRightClick(e) {
  // aEvent.target is the element you right click on
  document.body.setAttribute("contextmenu", "userscript-grease");
  let node = e.target;
  //let link = e.target.getAttribute("imageURL");
  _enable(node, document.getElementById("menu_imgre"));
  _enable(node, document.getElementById("menu_imgold"));
}

/**
 * upload it to imgur
 */
function checkImageOrigin_Imgur(){
  //let pageOrigin = window.location.origin;
  let imageOrigin = document.getElementById('menu_imgold').getAttribute('imageurl');
  
  console.log(pageOrigin + " " + imageOrigin);
  
  uploadImage_Imgur(imageOrigin);
}

/**
 * upload it to github
 */
function checkImageOrigin(){
  let pageOrigin = window.location.origin;
  let imageOrigin = document.getElementById('menu_imgre').getAttribute('imageurl');
  
  console.log(pageOrigin + " " + imageOrigin);
  
  uploadImage(pageOrigin, imageOrigin);
}

/**
 * lode it up
 */
/*if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", */createStuff();//, false);

//https://unpkg.com/github-api/dist/GitHub.bundle.min.js

function toDataUrl(src, callback, outputFormat) {
  let img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
  let canvas = document.createElement('canvas'); // was 'CANVAS'
  let ctx = canvas.getContext('2d');
  let dataURL;
  canvas.height = this.height;
  canvas.width = this.width;
  ctx.drawImage(this, 0, 0);
  dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

function wipeHeader(str) {
  return str.replace(/data:image\/(.*?);base64,/, '');
}

/////// IMGUR UPLOAD 

function uploadImage_Imgur(dataIn) {
  console.log('attempting to upload to imgur');    
  /* */

  var fd = new FormData();
  fd.append("image", dataIn); // Append the file

  var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
  xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!
  xhr.onload = function() {
      var link = JSON.parse(xhr.responseText).data.link;
      alert(link);
  }
  xhr.onerror = function() { alert('error'); };
  xhr.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b'); // imgur key
  xhr.send(fd);
}

/////// GITHUB UPLOADING

// basic auth

let repo; // only auths once, and only if actually needed so no memory waste
let authed = false;

function authenticate() {
  if (authed) return;
  authed = true;
  const gh = new GitHub({
    username: GM_getValue('gh_username'),
    password: GM_getValue('gh_pword')
  });
  repo = gh.getRepo('rafa1231518', 'nfmm-addons');
}

function getUrlPath(url) {
  let spl = url.split('/');
  return spl[spl.length - 1];
}

function write(url, callback) { // callback(error, result, request)
  authenticate();
  let tpath = 'uploads/' + getUrlPath(url);
  toDataUrl(url, function(b64) {
    console.log('sending file (length ' + b64.length + ')');
    repo.writeFile('gh-pages', tpath, wipeHeader(b64), 'Auto-uploaded image at ' + new Date().toString(), {encode:false}, function(error, result, request) {
      callback(tpath, error, result, request);
    });
  });
}

function uploadImage(page, image) {
  write(image, function(tpath, error, result, request) {
    if (!error) {
      alert('Uploaded to https://github.com/rafa1231518/nfmm-addons/raw/gh-pages/' + tpath);
    } else {
      alert('done: ' + (error ? JSON.stringify(error) : result ? result : JSON.stringify(request)));
    }
  });
}

GM_registerMenuCommand("Set GitHub username", function() {
  let val = window.prompt("Set GitHub username\nWarning: will be stored in plain text", GM_getValue('gh_username'));
  if (val !== null) {
    GM_setValue('gh_username', val);
  }
});

GM_registerMenuCommand("Set GitHub password", function() {
  let val = window.prompt("Set GitHub password\nWarning: will be stored in plain text", GM_getValue('gh_pword'));
  if (val !== null) {
    GM_setValue('gh_pword', val);
  }
});
