// ==UserScript==
// @name        Awayinator
// @namespace   up_and_away
// @description Makes sure you never go AFK in the chat.
// @include     http://aimgames.forummotion.com/*
// @version     1.1
// @grant       none
// ==/UserScript==

var where = '';
var cookie_names = 'username';

function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = '; expires=' + date.toGMTString();
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
  
//console.log(getCookie(cookie_names));
window.addEventListener('load', function() {
  if (document.getElementById("frame_chatbox") != null) {
    where = document.getElementById('frame_chatbox').contentWindow.document.getElementsByClassName('away-users') [0].getElementsByClassName('chatbox-username chatbox-user-username');
    var username = _userdata['username'];
    var note = '!';
    if (typeof _userdata['username'] !== 'string') {
      note = '! ...but something went wrong.';
    } else if(getCookie(cookie_names) === '' || getCookie(cookie_names) === 'blank'){
      setCookie(cookie_names, username, 1);
      setInterval(function () {
        for (var i = 0; i < where.length; i++) {
          if (where[i].innerHTML == getCookie(cookie_names)) {
            document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .value = '.';
            document.getElementById('frame_chatbox') .contentWindow.chatbox.send();        
            where = document.getElementById('frame_chatbox') .contentWindow.document.getElementsByClassName('away-users') [0].getElementsByClassName('chatbox-username chatbox-user-username');
          }
        }
      }, 100); 
      note = ' and set a cookie (we\'ll need that later).';
    }
    alert('You visited the main page' + note);
  } else if(document.getElementById("message") != null){
    where = document.getElementsByClassName('away-users') [0].getElementsByClassName('chatbox-username chatbox-user-username');
    if (getCookie(cookie_names) === '') { ////why do i have to check for this again...
      alert('You need to visit the main page!');
      setCookie(cookie_names, 'blank', 1);
    }else{
      setInterval(function () {
        for (var i = 0; i < where.length; i++) {
          if (where[i].innerHTML == getCookie(cookie_names)) {
            document.getElementById('message') .value = '.';
            chatbox.send();
            where = document.getElementsByClassName('away-users') [0].getElementsByClassName('chatbox-username chatbox-user-username')
          }
        }
      }, 100); 
    }
  }else{alert("where the fuck are you");}
}, false);
