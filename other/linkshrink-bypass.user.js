// ==UserScript==
// @name        linkshrink.net bypass
// @description So dc4in got ahead of me. Fair enough. It's my move now.
// @namespace   by-mc-passer@gmail.com
// @match       http://linkshrink.net/*
// @match       https://linkshrink.net/*
// @version     1.2
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

$("#skip").show();
$("#pause").hide();
$('#skip').find('.bt')[0].click();
