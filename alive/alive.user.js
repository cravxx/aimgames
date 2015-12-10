// ==UserScript==
// @name        Alive
// @namespace   kaff_is_one_grease
// @include     http://aimgames.forummotion.com/*
// @version     1.04
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

var cssStyle = "position: fixed;top: 0;right: 0;background-color: #1D1D1D;border-radius: 5px;width: 400px;height: 100px;opacity: .9;";

var cssStyleText = "font-weight: bold;font-size: 11px;color: #FFF;position: relative;padding-left: 9px;bottom: 4px;";

var cssStyleContent = "font-family: monospace;display: block;padding-left: 60px;position: relative;";

var first =  document.getElementsByClassName("forumline")[7].getElementsByClassName("row1")[2].getElementsByTagName("a");

var username = "Big Jilm";

var usr_ray = [ ];

var msg_ray = ["num 1", "num 2", "num 3", "num 4" ];

var online = false;

function check_text() {  
  $.each(usr_ray, function(index, value) {    
    if(value === username) {
      online = true;      
    }else if(index == (usr_ray.length - 1) && online === false){ 
      online = false;
    }
  });
  if(online){return "online!";}else{return "hidden or not online";}
}

function check_elem() {  
 $.each(first, function(index, value) {
   usr_ray[index] = value.text;       
 });    
  console.log(usr_ray);
}    

function displayOverlay() {       
  check_elem();
  
   $.each(msg_ray, function(index, value) {
     document.getElementById("overcontent").getElementsByClassName("alert")[index].innerHTML = value + "<br/>";      
   });     
   
   
   alert_me(check_text());    
}

function alert_me(text) {    
  msg_ray[0] = msg_ray[1];
  msg_ray[1] = msg_ray[2];
  msg_ray[2] = msg_ray[3];  
  msg_ray[3] = text;          
}

addEvent(window, 'load', function(){ load(); });

function addEvent(element, eventName, fn) {
    if (element.addEventListener)
        element.addEventListener(eventName, fn, false);
    else if (element.attachEvent)
        element.attachEvent('on' + eventName, fn);
}

function load() {
  var over_div = document.body;
  over_div.appendChild(document.createElement('div')).innerHTML = "<table id='overlay'><tbody><tr><td><row1 id='header'></row1><row2 id='overcontent'><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><textb id='thebox'></textb></row2></td></tr></tbody></table>";            
  document.getElementById("header").innerHTML = "Alive";
  document.getElementById("overlay").style.cssText = cssStyle;  
  document.getElementById("header").style.cssText = cssStyleText;
  document.getElementById("overcontent").style.cssText = cssStyleContent;  
  var element = document.createElement("input");
  element.setAttribute("type", text);
  element.setAttribute("value", text);
  element.setAttribute("name", text);
  var foo = document.getElementById("thebox");
  foo.appendChild(element);    
}

setInterval(displayOverlay,1000);
