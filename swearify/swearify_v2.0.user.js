// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @require     https://rawgit.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     1.1
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
var cssClicked = 'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
var cssHide = 'cursor: pointer;width: 10px;background: rgb(85, 85, 85) none repeat scroll 0px 0px;color: rgb(170, 170, 170);font-size: 9px;border: 1px solid rgb(85, 85, 85);-moz-user-select: none;-webkit-user-select: none;';

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

function customCss() {
    if (Cookies.get('CB_hide') === '1'){
        $('.hider').hide();
        $('#click_area_hide').text('<');
    }else{
        $('.hider').show();
        $('#click_area_hide').text('>');
    }     
    $('#click_area_hide').css('cssText', cssHide);    
}

///////////////
/////////      end of utility functions
///////////////

// check for emoticon codes
function emoticon() {
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

// check for memes
function meme() {
    $.each(maymay, function(name, value) {
      if ($("#message").val().regexIndexOf(new RegExp(value[0], 'gi')) >= 0) {
        var new_msg = $("#message").val().replace(new RegExp(value[0], 'gi'), value[1]);
        $('#message').val(new_msg);
      }
    });    
}

// check for greentext
function greentext() {    
    if ($("#message").val().indexOf('>') === 0) {
        $("#message").val(greenText[0] + $("#message").val() + greenText[1]);
    }
}

// rainbow text
function rainbow() {
    $('#message').val(rainbowText($('#message').val()));
}

function addRainbow() {   
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='rainbow_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area_rainbow" title="Rainbow" style="cursor:pointer;"><img src="http://i.imgur.com/F69UQGS.png"></label>')    
    );
  
    var whot = document.getElementById('format-rainbow');
    
    if (Cookies.get('CB_rainbow') === '1') whot.checked = true;
    else whot.checked = false;
    
    $('#click_area_rainbow').click(function() {
        if (!whot.checked) {
            whot.checked = true;            
            whot.style.cssText = cssClicked;
            Cookies.set('CB_rainbow', '1');            
        } else {
            whot.checked = false;            
            whot.style.cssText = '';
            Cookies.set('CB_rainbow', '0');
        }
    });   
}

// random text
function random_() {
    $("#message").val(randomText($("#message").val()));
}

function addRandom() {
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='random_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" style="cursor:pointer;"><img src="http://i.imgur.com/jHMOnyI.png"></label>')    
    );
    
    var whot = document.getElementById('format-random');
    
    if (Cookies.get('CB_random') === '1') whot.checked = true;
    else whot.checked = false;
    
    $('#click_area_random').click(function() {
        if (!whot.checked) {
            whot.checked = true;            
            whot.style.cssText = cssClicked;
            Cookies.set('CB_random', '1');            
        } else {
            whot.checked = false;            
            whot.style.cssText = '';
            Cookies.set('CB_random', '0');
        }
    });
}

// greek
function greek() {    
    var new_msg = $('#message').val();
    new_msg = new_msg.replace(/a/gi, 'a');
    new_msg = new_msg.replace(/b/gi, '�');
    new_msg = new_msg.replace(/c/gi, '?');
    new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, 'e');
    new_msg = new_msg.replace(/f/gi, '�');
    new_msg = new_msg.replace(/g/gi, 'g');
    new_msg = new_msg.replace(/h/gi, '?');
    new_msg = new_msg.replace(/i/gi, '?');
    new_msg = new_msg.replace(/j/gi, 'j');
    new_msg = new_msg.replace(/k/gi, '?');
    new_msg = new_msg.replace(/l/gi, 'l');
    new_msg = new_msg.replace(/m/gi, '?');
    new_msg = new_msg.replace(/n/gi, '?');
    new_msg = new_msg.replace(/o/gi, '?');
    new_msg = new_msg.replace(/p/gi, '?');
    new_msg = new_msg.replace(/q/gi, 'f');
    new_msg = new_msg.replace(/r/gi, '?');
    new_msg = new_msg.replace(/s/gi, 's');
    new_msg = new_msg.replace(/t/gi, 't');
    new_msg = new_msg.replace(/u/gi, '�');
    new_msg = new_msg.replace(/v/gi, 'v');
    new_msg = new_msg.replace(/w/gi, '?');
    new_msg = new_msg.replace(/x/gi, '?');
    new_msg = new_msg.replace(/y/gi, '?');
    new_msg = new_msg.replace(/z/gi, '?');
    $('#message').val(new_msg);
}

function addGreek() {
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='greek_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="greek" id="format-greek" class="format-message" type="checkbox"><label id="click_area_greek" title="Greek" style="cursor:pointer;"><img src="http://i.imgur.com/OUGQ1ik.png"></label>')    
    );
    
    var whot = document.getElementById('format-greek');
    
    if (Cookies.get('CB_greek') === '1') whot.checked = true;
    else whot.checked = false;
    
    $('#click_area_greek').click(function() {
        if (!whot.checked) {
            whot.checked = true;            
            whot.style.cssText = cssClicked;
            Cookies.set('CB_greek', '1');            
        } else {
            whot.checked = false;            
            whot.style.cssText = '';
            Cookies.set('CB_greek', '0');
        }
    });
}

// smallcaps
function smallcaps() {
    var new_msg = $('#message').val();
    new_msg = new_msg.replace(/a/gi, '?');
    new_msg = new_msg.replace(/b/gi, '?');
    new_msg = new_msg.replace(/c/gi, '?');
    new_msg = new_msg.replace(/d/gi, '?');
    new_msg = new_msg.replace(/e/gi, '?');
    new_msg = new_msg.replace(/f/gi, '?');
    new_msg = new_msg.replace(/g/gi, '?');
    new_msg = new_msg.replace(/h/gi, '?');
    new_msg = new_msg.replace(/i/gi, '?');
    new_msg = new_msg.replace(/j/gi, '?');
    new_msg = new_msg.replace(/k/gi, '?');
    new_msg = new_msg.replace(/l/gi, '?');
    new_msg = new_msg.replace(/m/gi, '?');
    new_msg = new_msg.replace(/n/gi, '?');
    new_msg = new_msg.replace(/o/gi, '?');
    new_msg = new_msg.replace(/p/gi, '?');
    new_msg = new_msg.replace(/q/gi, 'o');
    new_msg = new_msg.replace(/r/gi, '?');
    new_msg = new_msg.replace(/s/gi, 's');
    new_msg = new_msg.replace(/t/gi, '?');
    new_msg = new_msg.replace(/u/gi, '?');
    new_msg = new_msg.replace(/v/gi, '?');
    new_msg = new_msg.replace(/w/gi, '?');
    new_msg = new_msg.replace(/x/gi, 'x');
    new_msg = new_msg.replace(/y/gi, '?');
    new_msg = new_msg.replace(/z/gi, '?');
    $('#message').val(new_msg);
}

function addSmallcaps() {
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='smallcaps_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="smallcaps" id="format-smallcaps" class="format-message" type="checkbox"><label id="click_area_smallcaps" title="Small Caps" style="cursor:pointer;"><img src="https://i.imgur.com/gmvDgDv.jpg"></label>')    
    );
    
    var whot = document.getElementById('format-smallcaps');
    
    if (Cookies.get('CB_smallcaps') === '1') whot.checked = true;
    else whot.checked = false;
    
    $('#click_area_smallcaps').click(function() {
        if (!whot.checked) {
            whot.checked = true;            
            whot.style.cssText = cssClicked;
            Cookies.set('CB_smallcaps', '1');            
        } else {
            whot.checked = false;            
            whot.style.cssText = '';
            Cookies.set('CB_smallcaps', '0');
        }
    });
}

// spacer
function addSpacer() { 
    var where = $(".text-styles tr")[0];  
    
    $(where).prepend($("<td id='hide_button' class='fontbutton'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="hide" id="hide-button" class="format-message" type="checkbox"><label id="click_area_hide" title="Hide" style="cursor:pointer;"></label>')    
    );  
    
    $('#click_area_hide').click(function() {
        if (!$('.hider').is(":visible")) {
            $('.hider').show();
            $('#click_area_hide').text('>');
            Cookies.set('CB_hide', '0');            
        } else {
            $('.hider').hide();
            $('#click_area_hide').text('<');
            Cookies.set('CB_hide', '1');
        }
    });    
}

// run the functions that edit text
function run() {
    emoticon();
    meme();
    greentext();  
    if (Cookies.get('CB_rainbow') === '1') rainbow();
    if (Cookies.get('CB_random') === '1') random();
    if (Cookies.get('CB_greek') === '1') greek();
    if (Cookies.get('CB_smallcaps') === '1') smallcaps();
}

// main function
$(document).ready(function() {
	$.getScript('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/swearifyVar.js', function()	{
		if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox' || 
		  window.location.href === 'http://aimgames.forummotion.com/') {
			addStylesheet('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
			editCss();                   
			///
			addSpacer();
			///
			addRainbow();
			addRandom();
			addGreek();
			addSmallcaps();
            
            ///
            customCss();
			$(document).on('keydown', function(e) {
			  if (e.which === 13 || e.which === 45) run();
			});
		}		
	});  
});