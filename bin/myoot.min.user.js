// ==UserScript==
// @name        Myoot
// @description Prevents any stray audio clips from automatically playing on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     1.9
// @icon        http://www.mediafire.com/convkey/c313/jnx13q9ha6j01w9zg.jpg
// ==/UserScript==
'use strict';var a=!1,b=[],c=0;
if(!a)for(var d=0;d<document.getElementsByTagName("audio").length;d++){document.getElementsByTagName("audio")[d].muted=1;document.getElementsByTagName("audio")[d].loop=!1;try{b[d]=document.getElementsByTagName("audio")[d].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].children[0].children[0].innerHTML}catch(g){console.log("audio "+d+
" not in post")}c++}a=!0;console.log(c+" clips stopped!");
if(1==c&&0<b.length)window.alert(c+" clips stopped!\nThe URL for the clip is: "+document.getElementsByTagName("audio")[0].currentSrc+"\nThe asshole cunt dickbag motherfucker is: "+b[0]);else if(1<c&&0<b.length){var e="",f;for(f in b)e+=b[d],f!=b.length&&(e+=", ");window.alert(c+" clips stopped!\nThe URL for the first clip is: "+document.getElementsByTagName("audio")[0].currentSrc+"\nThe asshole cunt dickbag motherfuckers are: "+e)}else 1<c&&window.alert(c+" clips stopped! Couldn't automatically identify the asshat.");