// ==UserScript==
// @name        Myoot
// @description Prevents any stray audio clips from automatically playing on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     1.4
// @icon        http://www.mediafire.com/convkey/c313/jnx13q9ha6j01w9zg.jpg
// ==/UserScript==

window.onload = function() {
  for (var i in document.getElementsByTagName('audio'))
    document.getElementsByTagName('audio')[i].autoplay = null
}
