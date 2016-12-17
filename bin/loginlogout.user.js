// ==UserScript==
// @name        LoginLogout
// @namespace   greasy_af
// @include     http://aimgames.forummotion.com/chatbox/index.forum
// @version     1
// @grant       none
// ==/UserScript==
'use strict';setInterval(function(){chatbox.a?document.getElementById("message").onkeypress=function(a){13==(a.keyCode?a.keyCode:a.which)&&chatbox.disconnect()}:chatbox.connect()},100);