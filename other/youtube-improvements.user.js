// ==UserScript==
// @name        YouTube Improvements
// @description Make your youtube experience (slightly) less cancerous.
// @namespace   notareal@em.ail
// @include     https://www.youtube.com/feed/subscriptions/
// @include     http://www.youtube.com/feed/subscriptions/
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @version     1.21
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_info
// @grant       GM_listValues
// @grant       GM_deleteValue
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

/*
globals GM_addStyle,GM_setValue,GM_getValue,GM_info,GM_listValues,console
*/

'use strict';

// side-by-side caching
function newGetValue(str, def) {
    let i = localStorage.getItem('hs#' + str);
    if (i !== null) {
        GM_setValue(str, i);
        return i;
    }
    return GM_getValue(str, def);
}
function newSetValue(str, val) {
    localStorage.setItem('hs#' + str, val);
    GM_setValue(str, val);
    return val;
}
/*function newListValues() {
  const allValues = Object.keys(localStorage).filter(e => e.startsWith('hs#')).map(e => e.slice('hs#'.length)); // get hansen keys and remove hansen_ prefix
  GM_listValues().forEach(e => {
    if (allValues.indexOf(e) == -1) allValues.push(e);
  });
  return allValues;
}
function newDeleteValue(str) {
  localStorage.removeItem('hs#' + str);
  GM_deleteValue(str);
}*/

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
  'disq.us', // scam
  'adf.ly', // just in case
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

function handleCommentText(csi) {
  const origcontent = csi.textContent;
  if (processComment(origcontent)) {
    // grab topmost element to remove
    let el = csi.parentElement.parentElement.parentElement;

    // remove all child elements
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    // add the 'Comment removed. Be proud!' text
    const asp = document.createElement('span');
    asp.setAttribute('data-hansen-originalContent', origcontent);
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
  const vCounts = document.querySelectorAll('ytd-video-meta-block > #metadata > #metadata-line');

  for (let i of vCounts) {
    if (i.textContent.includes('Recommended') || i.textContent.includes('Recomendado')) {
      i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode.parentNode.parentNode.parentNode); //delete the video
    }
  }
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

// VID LINK STRUCTURE:
// /watch?v=_y3jCecdYfk

//
function handleThumbnail(el) {
  let vidLink = el.children[0].getAttribute('href').replace(/(\&|\&amp;)t=.*/, '');
  vidLink = vidLink.slice(vidLink.indexOf('?v=') + '?v='.length); // futureproofing

  const vidProgress = newGetValue(vidLink+'#p', null);
  const vidDuration = newGetValue(vidLink+'#d', null);

  console.log('detected thumb', el.toString(), vidLink, vidProgress, vidDuration);

  if (vidProgress!==null && vidDuration!==null) {
    console.log(el);
    console.log(vidLink);

    const progBack = document.createElement('span');
    progBack.setAttribute('class', 'hansen-resume-playback-background');
    const progFore = document.createElement('span');
    progFore.setAttribute('class', 'hansen-resume-playback-progress-bar');
    progFore.setAttribute('style', 'width:' + Math.floor((vidProgress / vidDuration)*100) + '%;');
    progFore.setAttribute('data-hansen-vidProgress', vidProgress);
    progFore.setAttribute('data-hansen-vidDuration', vidDuration);

    el.insertBefore(progBack, el.children[2]);
    el.insertBefore(progFore, el.children[2]);
  }
}

// restore video to loaded time when opening a new one
let madeInterval = false;
function handleVideo(el) {

  let videoId = window.location.href;
  const amp = videoId.indexOf('&');
  videoId = videoId.substring(videoId.indexOf('/watch?v=')+'/watch?v='.length, amp == -1 ? videoId.length : amp);

  if (el.currentTime <= 1) el.currentTime = newGetValue(videoId+'#p', 0);

  if (el.duration && !isNaN(el.duration)) newSetValue(videoId+'#d', el.duration);

  console.log('detected video', el, videoId);

  function updateValue() {
    const prevValue = newGetValue(videoId+'#p', false);
    if (!prevValue || isNaN(prevValue) || prevValue < el.currentTime) {
      newSetValue(videoId+'#p', el.currentTime);
    }
    //
    const prevDuration = newGetValue(videoId+'#d', null);
    if (!prevDuration || isNaN(prevDuration)) {
      newSetValue(videoId+'#d', el.duration);
    }
  }

  window.addEventListener('beforeunload', updateValue);

  // onbeforeunload is not brilliantly reliable so let's keep ticking it every 30s
  if (!madeInterval) {
    madeInterval = true;
    setInterval(updateValue, 30*1000);
  }
}

// debug log
const notifs = document.getElementById('yt-masthead-notifications-button');
if (notifs !== null) {
  notifs.addEventListener('click', e=> {
    e.preventDefault();
    alert(JSON.stringify(GM_info, null, 2)+'\n'+JSON.stringify(GM_listValues(), null, 2));
  });
}

// dirty hack to check for an inserted node from http://stackoverflow.com/a/10343915
GM_addStyle(`
@keyframes ccccommentText {
    from {
        outline-color: #fff;
    }
    to {
        outline-color: #000;
    }
}

#content-text.ytd-comment-renderer {
    animation-duration: 0.01s;
    animation-name: ccccommentText;
}

@keyframes cccvideoTitle {
    from {
        outline-color: #fff;
    }
    to {
        outline-color: #000;
    }
}

#video-title {
    animation-duration: 0.01s;
    animation-name: cccvideoTitle;
}

@keyframes cccvideoThumbnail {
    from {
        outline-color: #fff;
    }
    to {
        outline-color: #000;
    }
}

ytd-thumbnail {
    animation-duration: 0.01s;
    animation-name: cccvideoThumbnail;
}

@keyframes cccvideoElement {
    from {
        outline-color: #fff;
    }
    to {
        outline-color: #000;
    }
}

video {
    animation-duration: 0.01s;
    animation-name: cccvideoElement;
}

/*replaces the 'WATCHED' video thing*/
.hansen-resume-playback-progress-bar {
  background-color: green;
  /*bottom: 0px;*/
  font-family: Roboto,arial,sans-serif;
  font-size: 13px;
  height: 4px;
  left: 0px;
  line-height: 16.1px;
  list-style-type: none;
  overflow-wrap: break-word;
  perspective-origin: 84px 2px;
  position: absolute;
  right: 0px;
  text-align: left;
  /*top: 90px;*/
  transform-origin: 84px 2px;
  /*width: 168px;*/
  -moz-column-gap: 13px;

  top: auto;
bottom: 4px;
  z-index: 1;/*doesnt need to be 99999 or whatever :)*/
}

.hansen-resume-playback-background {
  background-color: rgb(238, 238, 238);
  /*bottom: 0px;*/
  font-family: Roboto,arial,sans-serif;
  font-size: 13px;
  height: 4px;
  left: 0px;
  line-height: 16.1px;
  list-style-type: none;
  opacity: 0.6;
  overflow-wrap: break-word;
  perspective-origin: 84px 2px;
  position: absolute;
  right: 0px;
  text-align: left;
  /*top: 90px;*/
  transform-origin: 84px 2px;
  /*width: 168px;*/
  -moz-column-gap: 13px;

  width: 100%;
  top: auto;
  bottom: 4px;
}

.html5-video-player, #player, #player-container, #player-theater-container, .html5-video-container > video {
    height: calc(100vh - 55px) !important;
    min-height: calc(100vh - 55px) !important;
    width: 100vw !important;
    left: 0 !important;
}
`);

document.addEventListener('animationstart', function(event){
  if (event.animationName == 'ccccommentText'){
    handleCommentText(event.target);
  } else if (event.animationName == 'cccvideoTitle') {
    handleCase(event.target);
  } else if (event.animationName == 'cccvideoThumbnail') {
    handleThumbnail(event.target);
  } else if (event.animationName == 'cccvideoElement') {
    handleVideo(event.target);
  }
}, true);
