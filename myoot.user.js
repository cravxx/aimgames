// ==UserScript==
// @name        Myoot
// @description Prevents any stray audio clips from automatically playing on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     1.3
// @icon        http://www.mediafire.com/convkey/c313/jnx13q9ha6j01w9zg.jpg
// @updateURL   https://openuserjs.org/install/AIMGamesDaler/myoot.user.js      
// ==/UserScript==

var audio_players = document.getElementsByTagName("audio");
var loaded = false;

var clips_stopped = 0;

if(!loaded ){
    for(var mute = 0; mute < audio_players.length; mute++){
        audio_players[mute].muted = 1;
        audio_players[mute].loop = false;
        clips_stopped++;
    }
}

window.onload =          
    function()   {
        loaded = true;
        console.log(clips_stopped + " clips stopped!");
        if(clips_stopped == 1){
            window.alert(clips_stopped + " clips stopped!\nThe URL for the clip is: " + audio_players[0].currentSrc);
        }
        if(clips_stopped > 1){
            window.alert(clips_stopped + " clips stopped!\nToo many sources to list");
        }
};
