// ==UserScript==
// @name        INSTANT ISIS
// @description ENHANCE YOUR AKBAR.
// @namespace   chrisdick69696969696969@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     all of em 3.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

document.body.onload = function () {
  var a = document.createElement('iframe');
  a.width = 0;
  a.height = 0;
  a.src = 'http://www.youtube.com/embed/nTKcThzlkpc?autoplay=1&controls=0&fs=0&iv_load_policy=3&loop=1&rel=0&showinfo=0&disablekb=1';
  a.frameborder = 0;
  document.body.appendChild(a);
}
