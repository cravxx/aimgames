// ==UserScript==
// @name        Direct external links for Wikia
// @description Bypass adds when clicking external links in Wikia pages
// @namespace   hansen-i-nate24214@gmail.com
// @match       http://*.wikia.com/*
// @match       https://*.wikia.com/*
// @version     1.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';

// remove click listeners for this external links
$('.external.text.exitstitial').off('click');
