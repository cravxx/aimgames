// ==UserScript==
// @name        Chameleon
// @description Auto color formatting for the chatbox.
// @namespace   how much grease
// @include     http://aimgames.forummotion.com/*
// @version     1.4.1
// @grant       none
// ==/UserScript==

////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o) .map(function (k) {
    return o[k];
  });
}
//////

//////COLOR
var color_ = {
  white: [
    'background-color: rgb(255, 255, 255);',
    '#ffffff'
  ],
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
  violet: [
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
  ],
  viz_custom: [
    'background-color: rgb(51,51,102);',
    '#333366'
  ]
  
};
///////

///////COOKIE SHIT
function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    var expires = '';
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } 
  else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}
///////

var counter = 0;

if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
  if (window.location.pathname.length <= 1) {    
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', values(color_) [counter][1], 1);
    }    
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == (values(color_) .length)) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', values(color_) [counter][1], 1);
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('scolor') .value = values(color_) [counter][1];
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .style.color = values(color_) [counter][1];
      }
    }, false);
  } else {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', values(color_) [counter][1], 1);
    }
    document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == (values(color_) .length)) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', values(color_) [counter][1], 1);
        document.getElementById('scolor') .value = values(color_) [counter][1];
        document.getElementById('divcolor-preview') .style.cssText = values(color_) [counter][0];
        document.getElementById('message') .style.color = values(color_) [counter][1];
      }
    }, false);
  }
}
