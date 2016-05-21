// ==UserScript==
// @name        Classic AIM
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @version     1
// @grant       none
// ==/UserScript==

function inject_css_url(url) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('link');
    gstyle.rel = 'stylesheet';
    gstyle.type = 'text/css';
    gstyle.href = url;
    head.appendChild(gstyle);
}

inject_css_url("https://hulasamsquanch.github.io/aimgames/swearify/ancientAIM.css");
document.getElementById("i_logo").src = "http://i.imgur.com/l2o5hsj.gif"
document.getElementsByClassName("bodyline")[0].getElementsByClassName("gen")[0].innerHTML = "The Official Forums of the Gaming Company AIM<br>&nbsp; ";
