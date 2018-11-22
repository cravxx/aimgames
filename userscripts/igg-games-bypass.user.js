// ==UserScript==
// @name        (redacted) Games Bypass
// @namespace   Call of Duty: Namespace Warfare
// @description Saves you a few seconds every visit to (redacted)-Games. Please don't DMCA me
// @include     http://igg-games.com/*
// @include     https://igg-games.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

[].slice.call(document.querySelectorAll('a')).filter(el => el.href.indexOf('xurl=')>-1).forEach(el => el.href = 'http' + el.href.substring(el.href.lastIndexOf('xurl=') + 'xurl='.length));
