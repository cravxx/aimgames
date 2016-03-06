// ==UserScript==
// @name        Swearify Prototype
// @description Development test [ Prototype.js ]
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @require     https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js
// @version     7.upright.5.1.kaoliangs.1457204914.7
// @icon        http://i.imgur.com/fjgumlV.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

/* SWEARIFY PROTOTYPE.JS
- 
*/

/**
 * this will run after every keypress
 */
function run() {
    console.log('Executed with prototype.js!');
}

/**
 * this is the main function
 */
Event.observe(window, 'load', function() {
    console.log('Prototype.js observed window load');
    if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || 
        window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || 
        window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || 
        window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives' || 
        window.location.href === 'http://aimgames.forummotion.com/chatbox' || 
        window.location.href === 'http://aimgames.forummotion.com/') {
        Event.observe('message', 'keydown', function(e) {
          console.log('Prototype.js observed key press');
          if(e.keyCode == Event.KEY_RETURN || e.keyCode == Event.KEY_INSERT)
            run();
        });
    }   
}); 	





