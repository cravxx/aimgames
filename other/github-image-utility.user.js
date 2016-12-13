// ==UserScript==
// @name        GitHub Image Utility
// @namespace   samsquanch gets the dong
// @include     *
// @version     1.5
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @require     https://unpkg.com/github-api/dist/GitHub.bundle.min.js
// ==/UserScript==
'use strict';

// this isnt the version i use

// jshint browser:true
/* globals console:true, window:true, alert:true, GitHub:true,GM_getValue:true, GM_setValue:true, GM_registerMenuCommand:true */

/**
 * load it up
 */
if (document.body) // we don't want to run this in a document such as a text file
  createStuff();

let menu_imgre;
let menu_imgold;

/**
 * create the context item
 */
function createStuff() {
  // create menu
  document.addEventListener('contextmenu', onRightClick, false);
  let menu;
  const mtags = document.getElementsByTagName('menu');

  if (mtags.length === 0) {
    menu = document.createElement('menu');
    menu.id = 'userscript-grease';
    menu.type = 'context';
  } else {
    menu = mtags[0];
  }
  
  // create menu items
  menu_imgre = document.createElement('menuitem');
  menu_imgre.id = 'menu_imgre';
  menu_imgre.label = 'Upload to GitHub';
  menu_imgre.icon = 'http://i.imgur.com/F2wghzO.png';
  menu_imgre.addEventListener('click', checkImageOrigin_GitHub, false);
  menu.appendChild(menu_imgre);

  menu_imgold = document.createElement('menuitem');
  menu_imgold.id = 'menu_imgold';
  menu_imgold.label = 'Upload to Imgur';
  menu_imgold.icon = 'http://i.imgur.com/F2wghzO.png';
  menu_imgold.addEventListener('click', checkImageOrigin_Imgur, false);
  menu.appendChild(menu_imgold);
  
  document.body.appendChild(menu);
}

/**
 * Executed when user right click on web page body
 */
function onRightClick(e) {
  // aEvent.target is the element you right click on
  document.body.setAttribute('contextmenu', 'userscript-grease'); // the fuck does this have to do with anything?
  const node = e.target;
  //let link = e.target.getAttribute("imageURL");
  enableItem(node, menu_imgre);
  enableItem(node, menu_imgold);
}

/**
 * enable context menu item
 */
function enableItem(node, item) {
  if (node.localName == 'img') {
    item.disabled = false;
    item.setAttribute('imageURL', node.src);
  } else {
    item.disabled = true;
  }
}

/**
 * upload it to imgur
 */
function checkImageOrigin_Imgur(){
  //let pageOrigin = window.location.origin;
  const imageOrigin = menu_imgold.getAttribute('imageURL');
  
  console.log(imageOrigin);
  
  uploadImage_Imgur(imageOrigin);
}

/**
 * upload it to github
 */
function checkImageOrigin_GitHub(){
  const pageOrigin = window.location.origin;
  const imageOrigin = menu_imgre.getAttribute('imageURL');
  
  console.log(pageOrigin + ' ' + imageOrigin);
  
  uploadImage_GitHub(pageOrigin, imageOrigin);
}

/////// IMGUR UPLOAD 

function uploadImage_Imgur(dataIn) {
  console.log('attempting to upload to imgur');    
  /* */

  const fd = new FormData();
  fd.append('image', dataIn); // Append the file

  const xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
  xhr.open('POST', 'https://api.imgur.com/3/image.json'); // Boooom!
  xhr.onload = function() {
    alert(JSON.parse(xhr.responseText).data.link);
  };
  xhr.onerror = function() { alert('error'); };
  xhr.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b'); // imgur key
  xhr.send(fd);
}

/////// GITHUB UPLOADING

//https://unpkg.com/github-api/dist/GitHub.bundle.min.js

function wipeHeader(str) {
  return str.replace(/data:image\/(.*?);base64,/, '');
}

function toDataUrl(src, callback, outputFormat) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    const canvas = document.createElement('canvas'); // was 'CANVAS'
    const ctx = canvas.getContext('2d');
    let dataURL;
    canvas.height = this.height;
    canvas.width = this.width;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  // dunno what all this does, probably onload trickery
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    img.src = src;
  }
}

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
  repo = gh.getRepo('rafa1231518', 'nfmm-addons'); // change it to what you want
}

function getUrlPath(url) {
  const spl = url.split('/');
  return spl[spl.length - 1];
}

function write(url, callback) { // callback(error, result, request)
  authenticate();
  const tpath = 'uploads/' + getUrlPath(url);
  toDataUrl(url, function(b64) {
    console.log('sending file (length ' + b64.length + ')');
    repo.writeFile('gh-pages', tpath, wipeHeader(b64), 'Auto-uploaded image at ' + new Date().toString(), {encode:false}, function(error, result, request) {
      callback(tpath, error, result, request);
    });
  });
}

function uploadImage_GitHub(page, image) {
  write(image, function(tpath, error, result, request) {
    if (!error) {
      alert('Uploaded to https://github.com/rafa1231518/nfmm-addons/raw/gh-pages/' + tpath);
    } else {
      alert('done: ' + (error ? JSON.stringify(error) : result ? result : JSON.stringify(request)));
    }
  });
}

GM_registerMenuCommand('Set GitHub username', function() {
  const val = window.prompt('Set GitHub username\nWarning: will be stored in plain text', GM_getValue('gh_username'));
  if (val !== null) {
    GM_setValue('gh_username', val);
  }
});

GM_registerMenuCommand('Set GitHub password', function() {
  const val = window.prompt('Set GitHub password\nWarning: will be stored in plain text', GM_getValue('gh_pword'));
  if (val !== null) {
    GM_setValue('gh_pword', val);
  }
});
