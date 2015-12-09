// ==UserScript==
// @name        Myoot
// @description Prevents any stray audio clips from automatically playing on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     1.9
// @icon        http://www.mediafire.com/convkey/c313/jnx13q9ha6j01w9zg.jpg
// ==/UserScript==

//var audio_players = document.getElementsByTagName("audio");
var loaded = false;
var poster = [];
var clips_stopped = 0;

if(!loaded) {
  for(var mute = 0; mute < document.getElementsByTagName("audio").length; mute++) {
    document.getElementsByTagName("audio")[mute].muted = 1; //mute
    document.getElementsByTagName("audio")[mute].loop = false; //disable loop
    try { //no way to be sure with html
      poster[mute] = document.getElementsByTagName("audio")[mute].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].children[0].children[0].innerHTML;
    } catch (err) {
        console.log('audio ' + mute + ' not in post');
    }
    clips_stopped++;
  }
}

window.addEventListener('load', function() {
  loaded = true;
  console.log(clips_stopped + " clips stopped!");
  if(clips_stopped == 1 && poster.length > 0){ // not in a preview page and audio is in a spoiler
      window.alert(clips_stopped + " clips stopped!\nThe URL for the clip is: " + document.getElementsByTagName("audio")[0].currentSrc + "\nThe asshole cunt dickbag motherfucker is: " + poster[0]);
  } else if(clips_stopped > 1 && poster.length > 0) { // not in a preview page and audio is in a spoiler
    var asshole_dickbag_cunt_motherfucker = '';
    for (var i in poster) { // add every dickbag motherfucker to the list
      asshole_dickbag_cunt_motherfucker += poster[mute];
      if (i != poster.length)
        asshole_dickbag_cunt_motherfucker += ', '; // make it look shiny
    }
    window.alert(clips_stopped + " clips stopped!\nThe URL for the first clip is: " + document.getElementsByTagName("audio")[0].currentSrc + "\nThe asshole cunt dickbag motherfuckers are: " + asshole_dickbag_cunt_motherfucker);
  } else if(clips_stopped > 1){ // in a preview page or audio isn't in a spoiler
      window.alert(clips_stopped + " clips stopped! Couldn't automatically identify the asshat.");
  }else{
    //what
  }
}, false);
