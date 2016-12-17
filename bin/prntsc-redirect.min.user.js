// ==UserScript==
// @name        printscr redirect
// @description redirects you to image on http://prnt.sc
// @namespace   trashphotographer@gmail.com
// @include     https://prnt.sc/*
// @include     http://prnt.sc/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';document.location.href=document.getElementById("screenshot-image").src.substr(31);