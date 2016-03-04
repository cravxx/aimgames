// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @require     https://rawgit.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require     http://daffeinatek.byethost32.com/swearify/jquery.caret.1.02.min.js
// @require     https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     1.1
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

/* SWEARIFY 2.0 
- even though this script uses jQuery, we do not need to add a '@require' as forumotion already loads it's own.
*/

var cssChkbox = 'font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;';
var cssButton = 'font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;';
var cssMsg = 'font-size:10px;color:white; margin-right:8px; margin-left:5px;';
var cssLine = 'color:black;';
var cssChat = 'overflow-x: hidden; left:141px;';
var cssClicked = 'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
var cssHide = 'cursor: pointer;width: 10px;background: rgb(85, 85, 85) none repeat scroll 0px 0px;color: rgb(170, 170, 170);font-size: 9px;border: 1px solid rgb(85, 85, 85);-moz-user-select: none;-webkit-user-select: none;height: 100%;line-height: 200%;';
var cssImage = 'padding-top: 1px;'

var imgTag = [ '[img]', '[/img]' ];
var greenText = [ '[color=#789922]', '[/color]' ];

var smilieOptions = { 
    "1": "Swearify 1", 
    "2": "Swearify 2",
    "3": "Swearify 3",
    "4": "Twitch",
    "5": "---------",
    "6": "Memes"
};

var smilieBase = '<a href="javascript:void(0)" class="emotes"><img title=\'_title\' src=\'_link\' alt=\'_title\' border=\'0\'></a>';
var quote = '\'';

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
    $('.swearIcons').css('cssText', cssImage);
}


/* my replacement for the insert_chatboxsmilies() function in en.js */
function initEmotesAsClickable(smilie_code, indiv) {
    $(indiv).click(function(){
        /* on click, get the parent window (the chatbox) and put the smilie code into the message box */
        msgBox = window.opener.$('#message');
        var msgBoxSplitBefore = '';
        var msgBoxSplitAfter = '';
        if($(msgBox).caret().start < $(msgBox).val().length) {
            msgBoxSplitBefore = msgBox.val().substr(0,$(msgBox).caret().start);
            msgBoxSplitAfter = msgBox.val().substr($(msgBox).caret().start,$(msgBox).val().length);
        }else{
            msgBoxSplitBefore = msgBox.val().substr(0,$(msgBox).val().length);
            msgBoxSplitAfter = '';
        }        
        msgBox.val(msgBoxSplitBefore + smilie_code + msgBoxSplitAfter);        
    });    
}

/* begin non-utility functions */

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

function meme() {
    $.each(maymay, function(name, value) {
      if ($("#message").val().regexIndexOf(new RegExp(value[0], 'gi')) >= 0) {
        var new_msg = $("#message").val().replace(new RegExp(value[0], 'gi'), value[1]);
        $('#message').val(new_msg);
      }
    });    
}

function greentext() {    
    if ($("#message").val().indexOf('>') === 0) {
        $("#message").val(greenText[0] + $("#message").val() + greenText[1]);
    }
}

function rainbow() {
    $('#message').val(rainbowText($('#message').val()));
}

function addRainbow() {   
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='rainbow_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area_rainbow" title="Rainbow" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="http://i.imgur.com/F69UQGS.png"></label>')    
    );
  
    var chkboxFormat = $('#format-rainbow');
    
    if (Cookies.get('CB_rainbow') === '1') $(chkboxFormat).prop('checked', true);
    else $(chkboxFormat).prop('checked', false);
    
    $('#click_area_rainbow').click(function() {
        if (!$(chkboxFormat).prop('checked')) {
            $(chkboxFormat).prop('checked', true);     
            $(chkboxFormat).css('cssText', cssClicked);
            Cookies.set('CB_rainbow', '1');            
        } else {
            $(chkboxFormat).prop('checked', false);     
            $(chkboxFormat).css('cssText', '');
            Cookies.set('CB_rainbow', '0');
        }
    });   
}

function random_() {
    $("#message").val(randomText($("#message").val()));
}

function addRandom() {
    var where = $(".text-styles tr")[0];    
  
    $(where).prepend($("<td id='random_button' class='fontbutton hider'></td>"));
  
    var whereTd = $(where).find('td');  
    $(whereTd[0]).append(
      $('<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="http://i.imgur.com/jHMOnyI.png"></label>')    
    );
    
    var chkboxFormat = $('#format-random');
    
    if (Cookies.get('CB_random') === '1') $(chkboxFormat).prop('checked', true);
    else $(chkboxFormat).prop('checked', false);
    
    $('#click_area_random').click(function() {
        if (!$(chkboxFormat).prop('checked')) {
            $(chkboxFormat).prop('checked', true);     
            $(chkboxFormat).css('cssText', cssClicked);
            Cookies.set('CB_random', '1');            
        } else {
            $(chkboxFormat).prop('checked', false);     
            $(chkboxFormat).css('cssText', '');
            Cookies.set('CB_random', '0');
        }
    });   
}

function greek() {    
    var new_msg = $('#message').val();
    new_msg = new_msg.replace(/a/gi, 'a');
    new_msg = new_msg.replace(/b/gi, 'ß');
    new_msg = new_msg.replace(/c/gi, '?');
    new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, 'e');
    new_msg = new_msg.replace(/f/gi, 'ƒ');
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
    new_msg = new_msg.replace(/u/gi, 'µ');
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
      $('<input name="greek" id="format-greek" class="format-message" type="checkbox"><label id="click_area_greek" title="Greek" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="http://i.imgur.com/OUGQ1ik.png"></label>')    
    );
    
    var chkboxFormat = $('#format-greek');
    
    if (Cookies.get('CB_greek') === '1') $(chkboxFormat).prop('checked', true);
    else $(chkboxFormat).prop('checked', false);
    
    $('#click_area_greek').click(function() {
        if (!$(chkboxFormat).prop('checked')) {
            $(chkboxFormat).prop('checked', true);     
            $(chkboxFormat).css('cssText', cssClicked);
            Cookies.set('CB_greek', '1');            
        } else {
            $(chkboxFormat).prop('checked', false);     
            $(chkboxFormat).css('cssText', '');
            Cookies.set('CB_greek', '0');
        }
    });   
}

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
      $('<input name="smallcaps" id="format-smallcaps" class="format-message" type="checkbox"><label id="click_area_smallcaps" title="Small Caps" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="https://i.imgur.com/gmvDgDv.jpg"></label>')    
    );
    
    var chkboxFormat = $('#format-smallcaps');
    
    if (Cookies.get('CB_smallcaps') === '1') $(chkboxFormat).prop('checked', true);
    else $(chkboxFormat).prop('checked', false);
    
    $('#click_area_smallcaps').click(function() {
        if (!$(chkboxFormat).prop('checked')) {
            $(chkboxFormat).prop('checked', true);     
            $(chkboxFormat).css('cssText', cssClicked);
            Cookies.set('CB_smallcaps', '1');            
        } else {
            $(chkboxFormat).prop('checked', false);     
            $(chkboxFormat).css('cssText', '');
            Cookies.set('CB_smallcaps', '0');
        }
    });   
}

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

function appendOptions() {
    $.each(smilieOptions, function(key, value) {
        if(key == 5)
            $('[name="categ"]').append($('<option disabled>', { value : key }).text(value));            
        else
            $('[name="categ"]').append($('<option>', { value : key }).text(value));             
    });
}

function addSmilie(i) {
    var table = $('table')[2];
    $(table).append(
      $('<tbody></tbody>')    
    );
    var tbody = $(table).find('tbody')[0];
    $(tbody).append(
      $('<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>')
    );
    var across = 0;
    var down = 0;
    if (i == 1) {
         $.each(emoticon_1, function(name, value) {             
             var row = $(tbody).find('tr')[down];                
             console.log(across + " " + down);
             $(row).append('<td></td>');
             var indiv = $(row).find('td')[across];
             $(indiv).append($(smilieHtml(quote + value[0] + quote, value[1], value[2])));
             initEmotesAsClickable(value[0], indiv);
             across++;   
             if (across >= 8) {
                 across = 0;                 
                 down++;                 
             }                                                           
         });                       
    }
    if (i == 2) {
         $.each(emoticon_2, function(name, value) {             
             var row = $(tbody).find('tr')[down];                
             console.log(across + " " + down);
             $(row).append('<td></td>');
             var indiv = $(row).find('td')[across];
             $(indiv).append($(smilieHtml(quote + value[0] + quote, value[1], value[2])));
             initEmotesAsClickable(value[0], indiv);
             across++;   
             if (across >= 8) {
                 across = 0;                 
                 down++;                 
             }                                                           
         });                       
    }
    if (i == 3) {
         $.each(emoticon_5, function(name, value) {             
             var row = $(tbody).find('tr')[down];                
             console.log(across + " " + down);
             $(row).append('<td></td>');
             var indiv = $(row).find('td')[across];
             $(indiv).append($(smilieHtml(quote + value[0] + quote, value[1], value[2])));
             initEmotesAsClickable(value[0], indiv);
             across++;   
             if (across >= 8) {
                 across = 0;                 
                 down++;                 
             }                                                           
         });                       
    }
    if (i == 4) {
         $.each(twitch_c, function(index, item) {             
             var row = $(tbody).find('tr')[down];                
             console.log(across + " " + down);
             $(row).append('<td></td>');
             var indiv = $(row).find('td')[across];
             $(indiv).append($(smilieHtml(quote + item + quote, twitch_e[index], item)));
             initEmotesAsClickable(item, indiv);
             across++;   
             if (across >= 8) {
                 across = 0;                 
                 down++;                 
             }                                                           
         });                       
    }
    if (i == 6) {
         $.each(maymay, function(name, value) {             
             var row = $(tbody).find('tr')[down];                
             console.log(across + " " + down);
             $(row).append('<td></td>');
             var indiv = $(row).find('td')[across];
             $(indiv).append($(smilieHtml(value[1], value[1], value[0])));
             initEmotesAsClickable(value[0], indiv);
             across++;   
             if (across >= 8) {
                 across = 0;                 
                 down++;                 
             }                                                           
         });                       
    }        
}

function smilieHtml(smilie_code, smilie_url, smilie_text) {
    var smilieComplete = smilieBase;
    smilieComplete = smilieComplete.replace(new RegExp('_smilie', 'gi'), smilie_code);
    smilieComplete = smilieComplete.replace(new RegExp('_title', 'gi'), smilie_text + '&#13;' + " " + smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
    smilieComplete = smilieComplete.replace(new RegExp('_link', 'gi'), smilie_url);
    return smilieComplete;
}

/* the function that returns a canvas and opens a jQuery UI Dialog */
function takeScreenshot(){
    html2canvas(document.body, {        
        onrendered: function(canvas) { 
            var dataURL = canvas.toDataURL("image/png");
            $('<div></div>').dialog({
                modal: true,
                title: "View Screenshot",
                open: function () {
                    $(this).html('<a target=\'_blank\' href=' + dataURL + '>Click to Open</a>');
                },
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                },
                close: function(event, ui) {
                    $(this).dialog('destroy').remove();
                }
            });
        }
    });
}

/* add button and intialize event listener for taking a screenshot */
function addScreenshot() {
   $('.genmed').prepend('<span id="chatbox_screenshot"><a href="javascript:void(0)">Take Screenshot</a></span>&nbsp;|&nbsp;');
    $('#chatbox_screenshot').click(function(){
        takeScreenshot();
        console.log("did this");
    });
}

/* this will run after every keypress */
function run() {
    emoticon();
    meme();
    greentext();  
    if (Cookies.get('CB_rainbow') === '1') rainbow();
    if (Cookies.get('CB_random') === '1') random();
    if (Cookies.get('CB_greek') === '1') greek();
    if (Cookies.get('CB_smallcaps') === '1') smallcaps();
}

/* this is the main function, we have to use jQuery instead of $ because we do not actually load jQuery within this script */
jQuery(document).ready(function() {
	$.getScript('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/swearifyVar.js', function()	{
        appendOptions();
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=1&mode=smilies') {            
            addSmilie(1);
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=2&mode=smilies') {            
            addSmilie(2);
        }    
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=3&mode=smilies') {            
            addSmilie(3);
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=4&mode=smilies') {            
            addSmilie(4);
        }
        /*
           The separator goes here, hence +1
        */
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=6&mode=smilies') {           
            addSmilie(6);
        }
		if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives' || 
		  window.location.href === 'http://aimgames.forummotion.com/chatbox' || 
		  window.location.href === 'http://aimgames.forummotion.com/') {
			addStylesheet('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
            addStylesheet('https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css');
			editCss();                   
			/**/
			addSpacer();
			/**/
			addRainbow();
			addRandom();
			addGreek();
			addSmallcaps();
            
            /**/
            customCss();
            
            // screenshot feature only works in chrome, so I'll add an if statement
            if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                $.getScript('http://daffeinatek.byethost32.com/swearify/html2canvas.js', function()	{
                    addScreenshot();
                });
            }                     
            
            /**/
			$(document).on('keydown', function(e) {
			  if (e.which === 13 || e.which === 45) run();
			});
		}		
	});  
});