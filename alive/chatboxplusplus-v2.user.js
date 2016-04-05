// ==UserScript==
// @name        OH GOD
// @description OH GOD I'M DOING IT AGAIN
// @namespace   GOD@HELP.ME
// @include     http://aimgames.forummotion.com/
// @version     FUCKING CHRIST
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// JQuery chatbox frame document
var c$;
var chatDocument;

if ($('#frame_chatbox').length > 0) { //running in forum

  // chatbox++ logo
  if ($('#i_logo').length > 0) //null in chatbox frame; not undefined, keep note
      $('#i_logo').prop('src', 'http://i.imgur.com/LjuijqL.png');
  
  chatDocument = $('#frame_chatbox')[0].contentWindow.document;
  // ex. c$.find('.chatbox_row_1.clearfix')
  c$ = $(chatDocument);
}
