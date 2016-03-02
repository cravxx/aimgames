// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/swearifyVar.js
// @version     1
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

var cssChkbox = 'font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;';
var cssButton = 'font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;';
var cssMsg = 'font-size:10px;color:white; margin-right:8px; margin-left:5px;';
var cssLine = 'color:black;';
var cssChat = 'overflow-x: hidden; left:141px;';

var imgTag = [ '[img]', '[/img]' ];
var greenText = [ '[color=#789922]', '[/color]' ];

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};

function addStylesheet(url) {
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', url) );
}

function editCss() {
    $('label:contains("Message")').css('cssText', cssMsg);
    // Edit CSS for the Message label
    $('label:contains("Message")').text('MESSAGE:');
    // New text for Message label
    $('#submit_button').css('cssText', cssButton);
    $('#submit_button').val('SEND');
    // Edit the Send button
    $('#chatbox_members').css('cssText', cssLine);
    // Recolor the divider
    $('#chatbox').css('cssText', cssChat);
    // Eliminate chat glitching and prettify the text
    $('[width="10"]').text('');
    $('[width="10"]').attr('width', '0px');
    // Remove the spacer to the left of the "Message" label
    $('[src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif"]').attr('src', 'http://i.imgur.com/47NbRiV.gif');
    // Replace the old smilie image with a new one
}

///////////////
/////////      end of utility functions
///////////////

// check for emoticon codes
function emoticon() {
    var index_num;
    var new_msg;
    var massiveObj = $.extend({}, emoticon_1, emoticon_2, emoticon_3, emoticon_4, emoticon_5);
  
    $.each(massiveObj, function(name, value) {
      if ($("#message").val().regexIndexOf(new RegExp(value[0], 'gi')) >= 0) {
        new_msg = $("#message").val().replace(new RegExp(value[0], 'gi'), imgTag[0] + value[1] + imgTag[1]);
        $('#message').val(new_msg);
      }
    });
  
    $.each(twitch_c, function(index, item) {
        if ($("#message").val().regexIndexOf(new RegExp('\\b' + item + '\\b', 'g')) >= 0) {
            new_msg = $("#message").val().replace(new RegExp('\\b' + item + '\\b', 'g'), imgTag[0] + twitch_e[index] + imgTag[1]);
            $("#message").val(new_msg);
        }
    });
}

// check for greentext
function greentext() {    
    if ($("#message").val().indexOf('>') === 0) {
        $("#message").val(greenText[0] + $("#message").val() + greenText[1]);
    }
}

// run the functions that edit text
function run() {
    emoticon();
    greentext();  
}

// main function
$(document).ready(function() {
  if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || 
      window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || 
      window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || 
      window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives' || 
      window.location.href === 'http://aimgames.forummotion.com/chatbox' || 
      window.location.href === 'http://aimgames.forummotion.com/')
  {
    addStylesheet('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
    editCss();        
    ///
    
    $(document).on('keydown', function(e) {
      console.log("something");
      if (e.which === 13 || e.which === 45) run();
    });
  }
});