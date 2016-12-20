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
'use strict';if("undefined"!=typeof GM_addStyle)GM_addStyle("#WikiaMainContent{width: 100%;}table.nowraplinks.collapsible{width: 100%;}");else if("undefined"!=typeof PRO_addStyle)PRO_addStyle("#WikiaMainContent{width: 100%;}table.nowraplinks.collapsible{width: 100%;}");else if("undefined"!=typeof addStyle)addStyle("#WikiaMainContent{width: 100%;}table.nowraplinks.collapsible{width: 100%;}");else{var a=document.createElement("style");a.type="text/css";a.appendChild(document.createTextNode("#WikiaMainContent{width: 100%;}table.nowraplinks.collapsible{width: 100%;}"));
(document.head||document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)}$(".external.text.exitstitial").a("click");