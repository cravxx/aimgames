// ==UserScript==
// @name        No recommended videos for YouTube
// @description Disables (hides) recommended videos on youtube watch pages.
// @namespace   jojohansen420@gmail.com
// @include     https://www.youtube.com/watch?v=*
// @include     http://www.youtube.com/watch?v=*
// @version     1.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

var vCounts = document.querySelectorAll('.related-list-item-compact-video > .content-wrapper > .content-link > .view-count.stat');

for (var i of vCounts) {
  if (i.textContent.startsWith('Recommended') || i.textContent.startsWith('Recomendado')) {
    i.parentNode.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode.parentNode); //delete the video
  }
}
