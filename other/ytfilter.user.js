// ==UserScript==
// @name        YouTube Comment Filter
// @description Make your youtube comment section less cancerous.
// @namespace   jojo42hansen@gmail.com
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @version     1.11
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

const blacklistedKeywords = [
  'bit.ly', // scams
  'goo.gl', // scams
  'dislike', // WOW 2 MINUTES 5 DISLIKES SUCH MEME
  'my channel', // adcunts
  'turn subtitles', // 7 year olds
  //'😂', // emoji
  'cyka blyat', // cancer
  'fat', // cancer
  'kys', // cancer
  'i\'m early', // early cancer
  'im early', // early cancer
  'this early', // early cancer
  'like if', // like if watching in {{CURRENT_YEAR}}
  'notification ', // new variation of the 'first' bullshit
];
const blacklistedRegexes = [
  /\bXD\b/, // cancer
  /\b\d view\b/i, // only [n] view(s)?!?!?
  /first$/i, // slightly paranoid safe variant of the old 'first' filter
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

function handleNode(csi) {
    const origcontent = csi.children[0].textContent;
    if (processComment(origcontent)) {
      // grab topmost element to remove
      let el = csi.parentElement.parentElement.parentElement;
      if (el.parentElement.parentElement.className.startsWith('comment-replies-renderer') || // is[is.length-1].parentElement.parentElement.parentElement.parentElement.parentElement
      el.className.startsWith('comment-replies-renderer') // already in view for whatever reason
      ) { // reply thread (startswith for vve-check workaround)
        el = csi.parentElement.parentElement;
      }

      // remove all child elements
      while (el.firstChild) {
          el.removeChild(el.firstChild);
      }
      
      // add the 'Comment removed. Be proud!' text
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

//if (!$) window.$ = function(a) { return document.querySelectorAll(a) };


// old comment observer -- not AJAX-safe
/*
function handleComments(is) {
  const cs = is.getElementsByClassName('comment-renderer-text');
  for (let i = 0; i < cs.length; i++) {
    handleNode(cs[i]);
  }
  
  // TODO: handle 'show more' button
  // document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more comment-section-renderer-paginator yt-uix-sessionlink')
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
*/

// dirty hack to check for an inserted node from http://stackoverflow.com/a/10343915

const stl = document.createElement('style');
stl.textContent = `
@keyframes cccnodeInserted {  
    from {  
        outline-color: #fff; 
    }
    to {  
        outline-color: #000;
    }  
}

.comment-renderer-text {
    animation-duration: 0.01s;
    animation-name: cccnodeInserted;
}
`;
document.head.appendChild(stl);

document.addEventListener('animationstart', function(event){
  if (event.animationName == 'cccnodeInserted'){
    handleNode(event.target);
  }
}, true);
