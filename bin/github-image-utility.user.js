// ==UserScript==
// @name        GitHub Image Utility
// @namespace   samsquanch gets the dong
// @include     *
// @version     1.6
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @require     https://unpkg.com/github-api/dist/GitHub.bundle.min.js
// ==/UserScript==
'use strict';var d=void 0,e=void 0;
if(document.body){document.addEventListener("contextmenu",f,!1);var l=void 0,m=document.getElementsByTagName("menu");0===m.length?(l=document.createElement("menu"),l.id="userscript-grease",l.type="context"):l=m[0];d=document.createElement("menuitem");d.id="menu_imgre";d.label="Upload to GitHub";d.icon="http://i.imgur.com/F2wghzO.png";d.addEventListener("click",n,!1);l.appendChild(d);e=document.createElement("menuitem");e.id="menu_imgold";e.label="Upload to Imgur";e.icon="http://i.imgur.com/F2wghzO.png";
e.addEventListener("click",p,!1);l.appendChild(e);document.body.appendChild(l)}function f(a){document.body.setAttribute("contextmenu","userscript-grease");a=a.target;q(a,d);q(a,e)}function q(a,c){"img"==a.localName?(c.disabled=!1,c.setAttribute("imageURL",a.src)):c.disabled=!0}function p(){var a=e.getAttribute("imageURL");console.log(a);r(a)}function n(){var a=window.location.origin,c=d.getAttribute("imageURL");console.log(a+" "+c);t(c)}
function r(a){console.log("attempting to upload to imgur");var c=new FormData;c.append("image",a);var b=new XMLHttpRequest;b.open("POST","https://api.imgur.com/3/image.json");b.onload=function(){alert(JSON.parse(b.responseText).data.link||b.responseText)};b.onerror=function(){alert("error")};b.setRequestHeader("Authorization","Client-ID d8b88dd7493540b");b.send(c)}
function u(a,c){GM_xmlhttpRequest({method:"GET",url:a,headers:{},overrideMimeType:"plain/text; charset=x-user-defined",onload:function(a){a=a.responseText;for(var g=a.length,k=new Uint8Array(g),h=0;h<g;h++)k[h]=a.charCodeAt(h)&255;c(btoa(String.fromCharCode.apply(null,k)))}})}var v=void 0,w=!1;function x(a){a=a.split("/");return a[a.length-1]}
function y(a,c){w||(w=!0,v=(new GitHub({c:GM_getValue("gh_username"),b:GM_getValue("gh_pword")})).a("rafa1231518","nfmm-addons"));var b="uploads/"+x(a);u(a,function(a){console.log("sending file (length "+a.length+")");v.f("gh-pages",b,a,"Auto-uploaded image at "+(new Date).toString(),{encode:!1},function(a,h,g){c(b,a,h,g)})})}
function t(a){y(a,function(a,b,g,k){b?alert("done: "+(b?JSON.stringify(b):g?g:JSON.stringify(k))):alert("Uploaded to https://github.com/rafa1231518/nfmm-addons/raw/gh-pages/"+a)})}GM_registerMenuCommand("Set GitHub username",function(){var a=window.prompt("Set GitHub username\nWarning: will be stored in plain text",GM_getValue("gh_username"));null!==a&&GM_setValue("gh_username",a)});
GM_registerMenuCommand("Set GitHub password",function(){var a=window.prompt("Set GitHub password\nWarning: will be stored in plain text",GM_getValue("gh_pword"));null!==a&&GM_setValue("gh_pword",a)});