// ==UserScript==
// @name        dc4in.com bypass
// @description Bypass the adfly links on dc4in.com
// @namespace   hansen-i-nate@gmail.com
// @match       http://*.dc4in.com/*
// @match       https://*.dc4in.com/*
// @version     1.4
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';$("#adfly").children().remove();$("#adfly").append('<button class="btn btn-info btn-lg" onclick="Submit();">Submit</button>');window.start=window.finish;window.error=window.finish;window.a=window.finish;