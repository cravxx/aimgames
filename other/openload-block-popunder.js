// ==UserScript==
// @name        openload.co pop-under blocker
// @description Prevents pop-unders in openload.co
// @namespace   trashmchansen@gmail.com
// @include     https://openload.co/*
// @include     http://openload.co/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

// show the hidden button that links to the real download
document.getElementById("realdl").style = '';

// hide the button that creates the pop-under
document.getElementById("downloadTimer").style = "display: none;";
