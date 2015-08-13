// ==UserScript==
// @name        chameleon
// @namespace   how much grease
// @include     http://aimgames.forummotion.com/*
// @version     1
// @grant       none
// ==/UserScript==
////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o) .map(function (k) {
    return o[k]
  })
}
//////
var color_ = {
  red: [
    'background-color: rgb(255, 0, 0);',
    '#ff0000'
  ],
  orange: [
    'background-color: rgb(255, 165, 0);',
    '#FFA500'
  ],
  yellow: [
    'background-color: rgb(255, 255, 0);',
    '#FFFF00'
  ],
  green: [
    'background-color: rgb(0, 255, 0);',
    '#00FF00'
  ],
  blue: [
    'background-color: rgb(0, 0, 255);',
    '#0000FF'
  ],
  indigo: [
    'background-color: rgb(75, 0, 130);',
    '#4B0082'
  ],
  indigo: [
    'background-color: rgb(127, 0, 255);',
    '#7F00FF'
  ],
  psy_pink: [
    'background-color: rgb(253, 0, 255);',
    '#fd00ff'
  ],
  psy_yelo: [
    'background-color: rgb(253, 255, 0);',
    '#fdff00'
  ],
  psy_green: [
    'background-color: rgb(0, 255, 56);',
    '#00ff38'
  ],
  psy_teal: [
    'background-color: rgb(0, 249, 255);',
    '#00f9ff'
  ],
  psy_blue: [
    'background-color: rgb(60, 0, 255);',
    '#3c00ff'
  ]
};
function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    var expires = '';
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } 
  else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}
var counter = 0;
setInterval(function () {
  if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
    if (window.location.pathname.length <= 1) { /// Figure out which of the two we are in
      if (counter == 0 || getCookie('CB_color') != values(color_) [counter][1]) {
        setCookie('CB_color', values(color_) [counter][1], 1);
      }
      //document.getElementById("frame_chatbox").contentWindow.document.getElementById('scolor') .value = values(color_) [counter][1];
      //document.getElementById("frame_chatbox").contentWindow.document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
      //document.getElementById("frame_chatbox").contentWindow.document.getElementById('message') .style.color = values(color_) [counter][1];
      document.getElementById("frame_chatbox").contentWindow.document.getElementById('message') .onkeypress = function (event) {
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          counter++;
          if (counter == (values(color_) .length)) {
            counter = 0;
          }
        }
      };
      document.getElementById("frame_chatbox").contentWindow.document.getElementById('message') .onkeyup = function (event) {
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          setCookie('CB_color', values(color_) [counter][1], 1);
          document.getElementById("frame_chatbox").contentWindow.document.getElementById('scolor') .value = values(color_) [counter][1];
          document.getElementById("frame_chatbox").contentWindow.document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
          document.getElementById("frame_chatbox").contentWindow.document.getElementById('message') .style.color = values(color_) [counter][1];
        }
      };
    }else{
      if (counter == 0 || getCookie('CB_color') != values(color_) [counter][1]) {
        setCookie('CB_color', values(color_) [counter][1], 1);
      }
      document.getElementById('scolor') .value = values(color_) [counter][1];
      document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
      document.getElementById('message') .style.color = values(color_) [counter][1];
      document.getElementById('message') .onkeypress = function (event) {
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          counter++;
          if (counter == (values(color_) .length)) {
            counter = 0;
          }
        }
      };
      document.getElementById('message') .onkeyup = function (event) {
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          setCookie('CB_color', values(color_) [counter][1], 1);
          document.getElementById('scolor') .value = values(color_) [counter][1];
          document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
          document.getElementById('message') .style.color = values(color_) [counter][1];
        }
      };      
    }
  }
}, 100);
