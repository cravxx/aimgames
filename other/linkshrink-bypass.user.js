// ==UserScript==
// @name        linkshrink.net bypass
// @description So dc4in got ahead of me. Fair enough. It's my move now.
// @namespace   by-mc-passer@gmail.com
// @match       http://linkshrink.net/*
// @match       https://linkshrink.net/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

document.location.href = $('#skip').find('.bt').attr('href');
