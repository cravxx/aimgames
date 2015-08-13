// ==UserScript==
// @name        LoginLogout
// @namespace   greasy_af
// @include     http://aimgames.forummotion.com/chatbox/index.forum
// @version     1
// @grant       none
// ==/UserScript==

setInterval( function() {           
  if(chatbox.connected){
    document.getElementById('message') .onkeypress = function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        chatbox.disconnect();        
      }      
    };
  }else{
    chatbox.connect();
  }
}, 100);
