// ==UserScript==
// @name        Discord.js Documentation Improved
// @namespace   this is a string of text whose convention is, interestingly, to be an email address
// @description Improves page navigation for the Discord.js 9.X.X docs.
// @include     http://hydrabolt.github.io/discord.js/#!/docs/*
// @include     https://hydrabolt.github.io/discord.js/#!/docs/*
// @include     http://discord.js.org/#!/docs/*
// @include     https://discord.js.org/#!/docs/*
// @version     1.9
// @grant       GM_openInTab
// @grant       GM_addStyle
// ==/UserScript==
'use strict';function b(a){a=a||window.event;if(2==a.which||4==a.which)a.preventDefault(),a=this.parentElement.children[0].textContent.toLowerCase(),a="classes"==a?"class":"typedefs"==a?"typedef":"file/"+a,console.log("opening: http://discord.js.org/#!/docs/tag/master/"+a+"/"+this.textContent),"undefined"!==typeof GM_openInTab?GM_openInTab("http://discord.js.org/#!/docs/tag/master/"+a+"/"+this.textContent):window.open("http://discord.js.org/#!/docs/tag/master/"+a+"/"+this.textContent,"_newtab")}GM_addStyle("\n@keyframes hansenAjaxElementLoaded {  \n    from {  \n        outline-color: #fff; \n    }\n    to {  \n        outline-color: #000;\n    }  \n}\n\n.content > ul > li {\n    animation-duration: 0.01s;\n    animation-name: hansenAjaxElementLoaded;\n}\n");
document.addEventListener("animationstart",function(a){"hansenAjaxElementLoaded"==a.animationName&&(a.target.onmousedown=b)},!0);