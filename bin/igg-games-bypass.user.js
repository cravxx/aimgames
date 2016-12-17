// ==UserScript==
// @name        (redacted) Games Bypass
// @namespace   Call of Duty: Namespace Warfare
// @description Saves you a few seconds every visit to (redacted)-Games. Please don't DMCA me
// @include     http://igg-games.com/*
// @include     https://igg-games.com/*
// @version     0.1
// @grant       none
// ==/UserScript==
'use strict';[].slice.call(document.querySelectorAll("a")).filter(function(a){return-1<a.href.indexOf("xurl=")}).forEach(function(a){return a.href="http"+a.href.substring(a.href.lastIndexOf("xurl=")+5)});