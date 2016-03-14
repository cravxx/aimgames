// ==UserScript==
// @name        encurtar.link bypass
// @description Bypass the ad-filled link shortener 'encurtar.link'
// @namespace   hansen-the-bypasser@gmail.com
// @match       http://encurtar.link/*
// @match       https://encurtar.link/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

var a = $.find('script[type="text/javascript"]');
var b;

for (var i in a) {
	if (a[i].textContent.indexOf('count + " segundos"') != -1) { //content check
		b = a[i];
	}
}

function chop(text, openKey, closeKey) {
	//console.log('before chop' + text);
	text = text.substring(text.indexOf(openKey) + openKey.length, text.length);
	//console.log('after chop' + text);
	return text.substring(0, text.indexOf(closeKey));
}

document.location.href = chop(b.textContent, 
';if (count < 1) {clearInterval(countdown);$("a.redirect").attr("href","', //lots of 'entropy'
'").html("Fazer Download");}count--;}');

// TODO maybe the button text changes?

/* THIS ONE ALSO WORKS:

var a = document.head.getElementsByTagName('script');
var b;

for (var i of a) {
	if (i.type === 'text/javascript' && //type check
	i.textContent !== '' && //performance reasons
	i.textContent.indexOf('count + " segundos"') != -1 //content check
	) {
		b = i;
	}
}
*/

//
