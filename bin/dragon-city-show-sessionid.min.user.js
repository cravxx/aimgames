// ==UserScript==
// @name        Dragon City Show SessionID and Facebook ID
// @description Displays Session ID and Facebook ID for Dragon City
// @namespace   jojohansen@gmail.com
// @include     https://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @include     http://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @version     1.12
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
'use strict';for(var a=0,b=document.getElementsByClassName("vars")[a];-1===b.textContent.indexOf("SocialPoint.get(");)b=document.getElementsByClassName("vars")[a],a++;var c=b.textContent.substring(b.textContent.indexOf("({")+2,b.textContent.indexOf("});"));function d(q,v){var f=c.substring(c.indexOf(q)+q.length);return f=f.substring(0,f.indexOf(v))}var e=d('"userId":"','","'),g=d('"sessionId":',',"');console.log("Your Facebook ID is: "+e+"\nYour SessionID is: "+g);console.log("vars_split is: "+c);
console.log(b);var h=document.createElement("link");h.href="https://hulasamsquanch.github.io/aimgames/other/dragon-city.css";h.type="text/css";h.rel="stylesheet";document.head.appendChild(h);var k=document.createElement("div");k.className="card-holder";var l=document.createElement("div");l.className="card";var m=document.createElement("article"),n=document.createElement("div");n.className="area";var p=document.createElement("p"),r=document.createTextNode(e),t=document.createElement("span");
t.style="color:blue";t.appendChild(document.createTextNode("Facebook ID: "));p.appendChild(t);p.appendChild(r);var u=document.createElement("p"),w=document.createTextNode(g),x=document.createElement("span");x.style="color:red";x.appendChild(document.createTextNode("Session ID: "));u.appendChild(x);u.appendChild(w);n.appendChild(p);n.appendChild(u);m.appendChild(n);l.appendChild(m);k.appendChild(l);document.getElementsByClassName("top-bar")[0].insertBefore(k,document.getElementsByClassName("top-bar")[0].firstChild);