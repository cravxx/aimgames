// ==UserScript==
// @name        Nexus input fix
// @namespace   wemes
// @description Fix nexusmods input field clicking being crap 
// @include     http://www.nexusmods.com/*
// @version     1
// @grant       none
// ==/UserScript==

var a = [...document.getElementsByClassName('std_txt')];

a.forEach($0 => {
  $0.onclick = () => {
    $0.value = "";
    $0.select();
  }
});
