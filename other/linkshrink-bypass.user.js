// ==UserScript==
// @name        linkshrink.net bypass
// @description So dc4in got ahead of me. Fair enough. It's my move now.
// @namespace   by-mc-passer@gmail.com
// @match       http://linkshrink.net/*
// @match       https://linkshrink.net/*
// @version     1.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

var _goto = $('#skip').find('.bt').attr('href');
delete window.document.referrer;
window.document.__defineGetter__('referrer', function () {
	return _goto;
});
document.location.href = _goto;
