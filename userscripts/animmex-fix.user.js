// ==UserScript==
// @name        Animmex video width fix
// @description Sets the player size to 100% on animmex
// @namespace   hansen-i-nate24215@gmail.com
// @include     https://amx.*.xyz/*
// @include     http://amx.*.xyz/*
// @include     https://www.animmex.net/*
// @include     http://www.animmex.net/*
// @version     1.4
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';

const _unsafeWindow = typeof unsafeWindow != 'undefined' ? unsafeWindow : window.wrappedJSObject;

if (typeof GM_addStyle == 'undefined') {
  var GM_addStyle = function(css) {//not let or const
    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    const style = document.createElement('style');
    style.type = 'text/css';

    try {
      style.textContent = css;
    } catch(e) {
      style.innerHTML = css;
    }

    head.appendChild(style);
  };
}


// only has effect under amx.*.xyz
GM_addStyle(`
.video-js, #video_1 {
    width: 100% !important;
    height: 100% !important;
}
`);

// we can't use a CSS selector here because it might bugger up!
const voteBox = document.getElementsByClassName('vote-box');
if (voteBox.length > 0) { // will only be true under animmex.net
  voteBox[0].parentElement.style.width = '100%';
}

const videos = document.getElementsByTagName('video');

if (videos.length!==0){
  const videoId = videos[0].getAttribute('poster');
  videos[0].currentTime=GM_getValue(videoId, 0);
  
  window.addEventListener('beforeunload', function() {
    GM_setValue(videoId, videos[0].currentTime);
  });
}

function browserContext() {
  /***** DO NOT REFERENCE EXTERNAL VARIABLES FROM THIS FUNCTION *****/
  'use strict';
  const noopfn = function(){};
  window.open = noopfn;
  
  window.init = noopfn;//not native; animmex thing
  try{
  Object.defineProperty(window, 'init', {
    configurable:true,
    set:noopfn,
    get:()=>noopfn
  });
  }catch(e){}
}

window.eval(browserContext.toSource() +';browserContext()');

