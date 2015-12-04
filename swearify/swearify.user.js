// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     beta 0.trash.6
// @grant       none
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

window.addEventListener('load', function() { /* shit goes down in here */
  if (is.ie() || is.safari() || is.opera()) alert('This browser is unsupported by Swearify.');
  else {
    var chatFrame = document.getElementById('frame_chatbox').contentWindow.document.getElementsByTagName('script');
    var chatScript;
    for (var i = 0; i < chatFrame.length; i++)
    	if (chatFrame[i].src == 'http://illiweb.com/rsc/18/frm/chatbox/chatbox8.js')
    		chatScript = chatFrame[i];
    console.log(chatScript);
    //remove old script since we can't edit src directly
    var chatScriptParent = chatScript.parentNode;
    chatScriptParent.removeChild(chatScript);
    //make a new script with the right src
    chatScript = document.createElement('script');
    chatScript.type = 'text/javascript';
    chatScript.src = 'https://cdn.rawgit.com/HulaSamsquanch/aimgames/hijack-cbox/swearify/hchat.js';
    chatScriptParent.appendChild(chatScript);
    console.log(chatScript);
    console.log(chatScriptParent);
  }
  //debugg(); // get info and shit
}, false);
