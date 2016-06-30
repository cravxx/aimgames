// ==UserScript==
// @name        YouTube Comment Filter
// @description Make your youtube comment section less cancerous.
// @namespace   jojo42hansen@gmail.com
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

/**

let i = $('#comment-section-renderer-items'); // get comments

i.getElementsByClassName('comment-renderer-text'); // get comment text

i.getElementsByClassName('comment-renderer-text')[0] // find what you want
.children[0].textContent // actual comment text

.parentElement.parentElement.parentElement // get el to be removed (class="comment-thread-renderer")
.remove() // built into yt (remove element)

*/

'use strict';

/* globals $: true */

const blacklistedKeywords = [
  'bit.ly', // scams
  'dislike', // WOW 2 MINUTES 5 DISLIKES SUCH MEME
  'first', //  first
  'my channel', // adcunts
  'turn subtitles', // 7 year olds
  //'😂', // emoji
  'cyka blyat', // cancer
  'fat', // cancer
  'kys', // cancer
  'I\'m early', // early cancer
  'this early' // early cancer
];
const blacklistedRegexes = [
  /\bXD\b/, // cancer
];
const blacklistAllcaps = true;


function processComment(str) {
  const lostr = str.toLowerCase();
  for (let i = 0; i < blacklistedKeywords.length; i++) {
    if (lostr.indexOf(blacklistedKeywords[i]) > -1) {
      return true; // unsafe
    }
  }
  for (let i = 0; i < blacklistedRegexes.length; i++) {
    if (blacklistedRegexes[i].test(str)) {
      return true; // unsafe
    }
  }
  if (blacklistAllcaps && (str.toUpperCase() === str)) {
    return true;
  }

  return false; // safe
}

//if (!$) window.$ = function(a) { return document.querySelectorAll(a) };

function handleComments(is) {
  const cs = is.getElementsByClassName('comment-renderer-text');
  for (let i = 0; i < cs.length; i++) {
    const origcontent = cs[i].children[0].textContent;
    if (processComment(origcontent)) {
      const el = cs[i].parentElement.parentElement.parentElement;

      while (el.firstChild) {
          el.removeChild(el.firstChild);
      }
      const asp = document.createElement('span');
      asp.setAttribute('style', 'color: rgb(170, 170, 170);');
      asp.title = origcontent;
      const it = document.createElement('i');
      it.textContent = 'Comment removed. Be proud!';
      asp.appendChild(it);
      el.appendChild(asp);
      //el.textContent = '<span style="color: aaaaaa;"><i>Comment removed. Be proud!</i></span>'
    }
  }
}

// set up the mutation observer
const observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  const c = document.getElementById('comment-section-renderer-items');
  if (c) {
    handleComments(c);
    me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
