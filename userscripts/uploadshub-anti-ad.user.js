// ==UserScript==
// @name        uploadshub.com Download Manager unchcker
// @description Unchecks the "Download Manager" tick box in uploadshub.com
// @namespace   hansen-the-unchecker@gmail.com
// @match       http://uploadshub.com/*
// @match       https://uploadshub.com/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

$('#chkIsAdd').attr('checked', false);
