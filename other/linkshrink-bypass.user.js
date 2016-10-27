// ==UserScript==
// @name        linkshrink.net bypass
// @description So dc4in got ahead of me. Fair enough. It's my move now.
// @namespace   by-mc-passer@gmail.com
// @match       http://linkshrink.net/*
// @match       https://linkshrink.net/*
// @version     1.7
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// get and delete bad html (this won't work since it's assigned very quickly)
/*var a = $.find('script[type="text/javascript"]');

for (var i in a) {
	if (a[i].textContent.indexOf('shipthankrecognizing') != -1) { //content check
		a[i].parentNode.removeChild(a[i]); //make node delete itself
	}
}*/

// auto show skip ad and click (setting location.href doesn't work since referer is required)
$('#skip').show();
$('#pause').hide();
// using click() invokes the eventlistener, so we have to outsmart it
//$('#skip').find('.bt')[0].click();

function forceGotoLink(href) {
	//var href = $('a').attr('href');
	$('<form>').attr({action: href, method: 'GET'}).appendTo($('body')).submit();
}

forceGotoLink($('#skip').find('.bt').attr('href'));
