// ==UserScript==
// @name          Sketchucation Anti-Adblock killer
// @description   Download files from sketchucation.com without disabling adblock.
// @namespace     http://userstyles.org
// @author        chrishansen69
// @include       http://sketchucation.com*
// @include       https://sketchucation.com*
// @grant         GM_addStyle
// @grant         PRO_addStyle
// @grant         addStyle
// @run-at        document-start
// @version       1.1
// ==/UserScript==
'use strict';if("undefined"!=typeof GM_addStyle)GM_addStyle("/* real DL link */.download-plugin, div.inline-attachment dl.file dt, div.inline-attachment dl.file dd, dl.attachbox dd, dl.attachbox > dt, dl.attachbox dl.file, body#phpbb dl.thumbnail > dt > a > img, body#phpbb dl.thumbnail > a > img, body#phpbb dl.thumbnail > a.postlink {    display: initial !important;}/* adblock nag */div.inline-attachment:last-of-type dl.file::before, dl.attachbox::before, body#phpbb dl.thumbnail:first-of-type > a::after {    display: none !important;}");
else if("undefined"!=typeof PRO_addStyle)PRO_addStyle("/* real DL link */.download-plugin, div.inline-attachment dl.file dt, div.inline-attachment dl.file dd, dl.attachbox dd, dl.attachbox > dt, dl.attachbox dl.file, body#phpbb dl.thumbnail > dt > a > img, body#phpbb dl.thumbnail > a > img, body#phpbb dl.thumbnail > a.postlink {    display: initial !important;}/* adblock nag */div.inline-attachment:last-of-type dl.file::before, dl.attachbox::before, body#phpbb dl.thumbnail:first-of-type > a::after {    display: none !important;}");
else if("undefined"!=typeof addStyle)addStyle("/* real DL link */.download-plugin, div.inline-attachment dl.file dt, div.inline-attachment dl.file dd, dl.attachbox dd, dl.attachbox > dt, dl.attachbox dl.file, body#phpbb dl.thumbnail > dt > a > img, body#phpbb dl.thumbnail > a > img, body#phpbb dl.thumbnail > a.postlink {    display: initial !important;}/* adblock nag */div.inline-attachment:last-of-type dl.file::before, dl.attachbox::before, body#phpbb dl.thumbnail:first-of-type > a::after {    display: none !important;}");
else{var a=document.createElement("style");a.type="text/css";a.appendChild(document.createTextNode("/* real DL link */.download-plugin, div.inline-attachment dl.file dt, div.inline-attachment dl.file dd, dl.attachbox dd, dl.attachbox > dt, dl.attachbox dl.file, body#phpbb dl.thumbnail > dt > a > img, body#phpbb dl.thumbnail > a > img, body#phpbb dl.thumbnail > a.postlink {    display: initial !important;}/* adblock nag */div.inline-attachment:last-of-type dl.file::before, dl.attachbox::before, body#phpbb dl.thumbnail:first-of-type > a::after {    display: none !important;}"));
var b=document.getElementsByTagName("head");0<b.length?b[0].appendChild(a):document.documentElement.appendChild(a)};