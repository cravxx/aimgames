// ==UserScript==
// @name        Google Docs quick download
// @description Skips the "this file could not be checked for viruses" prompt when downloading files from Google Docs
// @namespace   trashihansen@gmail.com
// @match       https://docs.google.com/uc?id=*&export=download
// @match       http://docs.google.com/uc?id=*&export=download
// @version     1.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

document.location.href = document.getElementById('uc-download-link').href;
