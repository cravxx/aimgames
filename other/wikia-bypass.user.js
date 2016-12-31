// ==UserScript==
// @name          Wikia width fix / direct external links
// @description   Fixes page width for wikia.com and bypasses ads for external links
// @namespace     http://userstyles.org
// @author        chrishansen69
// @include       http://wikia.com/*
// @include       https://wikia.com/*
// @include       http://*.wikia.com/*
// @include       https://*.wikia.com/*
// @grant         none
// @run-at        document-end
// @version       1.2
// ==/UserScript==

// document-start w/ timeout or document-end???
'use strict';

const css = '#WikiaMainContent{width: 100%;}table.nowraplinks.collapsible{width: 100%;}';
if (typeof GM_addStyle != 'undefined') {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != 'undefined') {
	PRO_addStyle(css);
} else if (typeof addStyle != 'undefined') {
	addStyle(css);
} else {
	var node = document.createElement('style');
	node.type = 'text/css';
	node.appendChild(document.createTextNode(css));
	var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
	head.appendChild(node);
}


//setTimeout(function() { // remove click listeners for this external links
	$('.external.text.exitstitial').off('click');
//}, 1500); // wait a bit because ????
