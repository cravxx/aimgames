// ==UserScript==
// @name        Steam Community link unremover
// @namespace   hansendog
// @description Displays real link after 'LINK REMOVED' text
// @include     https://steamcommunity.com/*
// @version     1
// @grant       none
// ==/UserScript==

//function addCss(cssCode) {
//  var styleElement = document.createElement("style");
//  styleElement.type = "text/css";
//  if (styleElement.styleSheet) {
//    styleElement.styleSheet.cssText = cssCode;
//  } else {
//    styleElement.appendChild(document.createTextNode(cssCode));
//  }
//  document.getElementsByTagName("head")[0].appendChild(styleElement);
//}

var a = document.getElementsByClassName('bb_removedlink');
for (var i = 0, len = a.length; i < len; i++) {
  a[i].firstChild.nodeValue += ' <' + a[i].nextSibling.firstChild.nodeValue + '>';
}
