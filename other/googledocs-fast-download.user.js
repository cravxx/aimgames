// ==UserScript==
// @name        Google Docs quick download
// @description Skips the "this file could not be checked for viruses" prompt when downloading files from Google Docs
// @namespace   trashihansen@gmail.com
// @include     https://docs.google.com/uc?id=*&export=download
// @include     http://docs.google.com/uc?id=*&export=download
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

var u = document.location.href;
document.location.href = 'https://docs.google.com/uc?export=download&confirm=sULL&id=' + u.substring(u.indexOf('uc?id=') + 'uc?id='.length, u.indexOf('&export=download'));
