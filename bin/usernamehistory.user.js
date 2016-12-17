// ==UserScript==
// @name        Username History
// @namespace   samsquanchhunter14@gmail.com
// @version     1.0.1
// @include     http://aimgames.forummotion.com/*
// @grant       none
// ==/UserScript==
'use strict';var a={m:["2000tornados","m0squ1t0"],F:[".Nickname1","BlueThunder"],B:["-Duel-","DuelFueler","Duel","GreatUncleLeo"],h:["Adrenaline","Dynamic"],g:["Adverts","Rage007"],u:["Ali-Aimer","ElementSe7en","X-Rebel","Shmee150","Pharcyde"],o:["Anhilation","Pyxis","HyperVenom"],a:["Aquario","Zone"],j:["Astro7452","ApexNova"],w:["AuraSphere","Resonance","Nebula"],c:"Aventador X;Vitalogy;KRC;Kinetico;Yes;Kinetico".split(";"),C:["Awesomebot4","TwistedTeenager","Chaotic"],A:["Azri965","A9"],i:["Behemoth",
"Aureus"],f:["Ben","Whats-His-Face","Ben"],v:["BlazeAmani","Blazkrillex"],s:["BlazerX","BlazerX857","Metrophis"],b:["Boiler","Logic"],l:["burncharge","L-Dargo"],D:"Burner;SpeedyX;DriftBeat;Spineshank;800*28;Rage Against The Machine;Amplifier".split(";")};function b(){return Object.keys(a).map(function(c){return a[c]})}
for(var d=function(c,m){function k(f){if(3==f.nodeType)(m||n.test(f.nodeValue))&&l.push(f);else for(var c=0,p=f.childNodes.length;c<p;++c)k(f.childNodes[c])}var l=[],n=/\S/;k(c);return l}(document),e=0;e<d.length;e++)for(var g=0;g<b().length;g++)if(d[e].nodeValue===b()[g][b()[g].length-1])for(var h=0;h<b()[g].length-1;h++)h<b()[g].length-2?d[e].parentNode.title+=b()[g][h]+", ":d[e].parentNode.title+=b()[g][h];