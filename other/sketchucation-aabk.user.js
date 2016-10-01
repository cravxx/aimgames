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
// @version       1.0
// ==/UserScript==
(function() {var css = "/* real DL link */.download-plugin, div.inline-attachment dl.file dt, div.inline-attachment dl.file dd, dl.attachbox dd, dl.attachbox > dt, dl.attachbox dl.file, body#phpbb dl.thumbnail > dt > a > img, body#phpbb dl.thumbnail > a > img, body#phpbb dl.thumbnail > a.postlink {    display: initial !important;}/* adblock nag */div.inline-attachment:last-of-type dl.file::before, dl.attachbox::before, body#phpbb dl.thumbnail:first-of-type > a::after {    display: none !important;}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
