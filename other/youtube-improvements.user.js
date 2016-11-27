// ==UserScript==
// @name        YouTube Improvements
// @description Make your youtube experience (slightly) less cancerous.
// @namespace   notareal@em.ail
// @include     https://www.youtube.com/feed/subscriptions/
// @include     http://www.youtube.com/feed/subscriptions/
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @version     1.17
// @grant       GM_addStyle
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

// comment filter
const blacklistedKeywords = [
  // advertisements and shit
  'bit.ly', // scams
  'goo.gl', // scams
  'dl.dropbox.com/s/', //scam
  'my channel', // adcunts

  // general cancer
  'turn subtitles', // 7 year olds
  //'\ud83d\ude02', // emoji
  'cyka blyat',
  'insert obligatory ', // metacancer
  '\ud83c\udd7e', // such unicode
  '\ud83c\udd70', // much cancer
  '1051541451431641621571721571511441234567881234567812345678123678326470547', // eaugh

  // early cancer
  'i\'m early',
  'im early',
  'i\'m so early',
  'this early',
  'notification', // new variation of the 'first' bullshit

  // likespam
  '1 like', // possibly too broad
  '1 sub', // possibly too broad
  '1 comment', // possibly too broad
  'dislike', // WOW 2 MINUTES 5 DISLIKES SUCH MEME
  'let\'s do the alphabet', // why..
  'lets do the alphabet', // just why....
  'likes for no reason',
  'like and in ',
  'can i get likes',
];
const blacklistedRegexes = [
  // early cancer
  /\b\d view\b/i, // only [n] view(s)?!?!?
  /first$/i, // slightly paranoid safe variant of the old 'first' filter
  /frist$/i, // literally hitler
  /[0-9]+ likes and ([0-9]+|no|zero) views/i, // YUTUB BOOG GUISE?
  /under [0-9]+ (club|views)/i,
  /^[A-Za-z]$/, // match single-word comments. don't use \w+ because it'd match any letter in any language

  // general cancer
  /\b[Xx]D+\b/,
  /\bfat\b/i,
  /\bkys\b/i,
  /^I have a request/, // siivagunner meme that got stale

  // likespam
  /^like if/i, // doesn't match "it's like if [...]"
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
  if (blacklistAllcaps && (str.toUpperCase() === str) && /[A-Z]/.test(str)) { // if string is uppercase and contains at least one letter (/g not needed)
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

if (!document.location.href.startsWith('https://www.youtube.com/feed/subscriptions/')) { // isn't the sub box

  // remove recommended videos
  const vCounts = document.querySelectorAll('.stat.view-count');

  for (let i of vCounts) {
    if (i.textContent.startsWith('Recommended') || i.textContent.startsWith('Recomendado')) {
      i.parentNode.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode.parentNode); //delete the video
    }
  }

  // comment CSS fix
  GM_addStyle(`.comment-renderer-text-content > b {
      font-weight: bold;
  }
  /*space after comma for tags*/
  .watch-meta-item .watch-info-tag-list li::after {
      content: ", ";
  }`);

}

// convert vid titles to titlecase if theyre uppercase

const lowers = [/\sA\s/g, /\sAn\s/g, /\sThe\s/g, /\sAnd\s/g, /\sBut\s/g, /\sOr\s/g, /\sFor\s/g, /\sNor\s/g, /\sAs\s/g, /\sAt\s/g, 
  /\sBy\s/g, /\sFor\s/g, /\sFrom\s/g, /\sIn\s/g, /\sInto\s/g, /\sNear\s/g, /\sOf\s/g, /\sOn\s/g, /\sOnto\s/g, /\sTo\s/g, /\sWith\s/g];
const lowered = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'as', 'at', 
  'by', 'for', 'from', 'in', 'into', 'near', 'of', 'on', 'onto', 'to', 'with'];
const lowersLen = lowers.length;

const uppers  = ['ID', 'TV'];

function titleCase(str) {
  str = str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return (uppers.indexOf(txt) != -1) ? txt : (txt[0].toUpperCase() + txt.substr(1).toLowerCase());
  });

  // Certain minor words should be left lowercase unless  they are the first -- or last words in the string -- TODO: why the last words as well?

  for (let i = 0; i < lowersLen; i++) {
    str = str.replace(lowers[i], ' ' + lowered[i] + ' ');
  }

  return str;
}

function handleCase(el) {
  if (el.textContent.toUpperCase() === el.textContent) {
    el.textContent = titleCase(el.textContent);
  }
}

// dirty hack to check for an inserted node from http://stackoverflow.com/a/10343915
GM_addStyle(`
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

@keyframes cccvideoTitle {  
    from {  
        outline-color: #fff; 
    }
    to {  
        outline-color: #000;
    }  
}

.yt-lockup-title > a {
    animation-duration: 0.01s;
    animation-name: cccvideoTitle;
}
`);

document.addEventListener('animationstart', function(event){
  if (event.animationName == 'cccnodeInserted'){
    handleNode(event.target);
  } else if (event.animationName == 'cccvideoTitle') {
    handleCase(event.target);
  }
}, true);
