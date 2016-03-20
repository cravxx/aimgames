// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @require     https://cdn.rawgit.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require     https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/jquery.caret.1.02.min.js
// @require     https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     alpha.2.4
// @icon        http://i.imgur.com/MnWNRBL.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

/* SWEARIFY 2.0 
- even though this script uses jQuery, we do not need to add a '@require' as forumotion already loads it's own.

'TO IMPLEMENT' LIST
    -   Enabled for posting

    -   Dynamic reorder smilie window on window resize     

    -   Upgraded swear filter

IDEAS:
    -   Slide the text effect buttons to the left and right instead of the sharp show/hide
        this could be accomplished by wrapping elements with the class name '.hider' in a div and calling .slide or .animate 
    
    -   Possibly use prototype.js for... stuff? 

    -   Count total messages and characters typed (NSA pls)

    -   Smilie window:  1. default window that opens up has a search bar, automagic update list (don't load the images, obviously)
                        2. extend all the custom features (like window resizing) to the default smilie page

    -   A dedicated .css file 

    -   Hashtag system? start or end a message with a hash tag and that message will get sent to my site. Clicking on the hash tag directs to a page where
        a list of the messages posted with that hashtag will be shown. Probably requires php.
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

var specialCode = [ '/exit', '/away', '/abs', '[code]' ];
var filteringCode = [ '[b][/b]', '.' ];
var linkCode = [ 'http://', 'www.', 'https://' ];

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

/** ROUGH HACK
 * sets some css for the buttons, especially for the hide button
 */
function buttonCss() {
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


/**
 * my replacement for the insert_chatboxsmilies() function in en.js
 */
function initEmotesAsClickable(smilie_code, indiv) {
    $(indiv).click(function(){
        /**
         * on click, get the parent window (the chatbox) and put the smilie code into the message box
         */
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
    /**
     * fixes the bug where smilies are added more than once
     */
    $(indiv).keypress(function(e) {
        e.preventDefault();
    });
}

/**
 * add in the new options to the dropdown menu in the smilie window
 */
function appendOptions() {
    $.each(smilieOptions, function(key, value) {
        if(key == 5)
            $('[name="categ"]').append($('<option disabled>', { value : key }).text(value));            
        else
            $('[name="categ"]').append($('<option>', { value : key }).text(value));             
    });
}

/**
 * this returns a string of html based off smilieBase with inserted variables
 */
function smilieHtml(smilie_code, smilie_url, smilie_text) {
    var smilieComplete = smilieBase;
    smilieComplete = smilieComplete.replace(new RegExp('_smilie', 'gi'), smilie_code);
    smilieComplete = smilieComplete.replace(new RegExp('_title', 'gi'), smilie_text + '&#13;' + " " + smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
    smilieComplete = smilieComplete.replace(new RegExp('_link', 'gi'), smilie_url);
    return smilieComplete;
}

/**
 * begin non-utility functions
 */

/**
 * moved over from e29c520
 * obviously this needs upgrading as it's awful
 */
function swear() {
    $.each(swears, function(index, item) {
        /**
         * define a ton of variables
         */
        var oldMsg = $('#message').val();
        var oldMsgLowercase = $('#message').val().toLowerCase();
        var newMsg = '';

        var httpLink = oldMsg.indexOf(linkCode[0]);
        var wwwLink = oldMsg.indexOf(linkCode[1]);
        var httpsLink = oldMsg.indexOf(linkCode[2]);

        var exitCode = oldMsg.indexOf(specialCode[0]);
        var awayCode = oldMsg.indexOf(specialCode[1]);
        var absentCode = oldMsg.indexOf(specialCode[2]);
        var codeCode = oldMsg.indexOf(specialCode[3]);

        var filteringMethod = 0;

        /**
         * is the message a chatbox command
         */
        if (exitCode != -1 || awayCode != -1 || absentCode != -1 || codeCode != -1) 
            filteringMethod = 1;
        
        /**
         * what to do if the message has a link 
         */
        if (httpLink > 0 || wwwLink > 0 || httpsLink > 0) {
            var which = 0;
            if (httpLink != -1) {
                which = httpLink;        
            } else if (wwwLink != -1) {
                which = wwwLink;  
            } else {
                which = httpsLink;
            }

            var before_link = oldMsgLowercase.substr(0, which);
            var link = oldMsgLowercase.substr(which, oldMsgLowercase.length);
            if (before_link.indexOf(item) >= 0) {
                newMsg = oldMsg.substr(before_link.indexOf(item),item.length).split("").join(filteringCode[filteringMethod]);
            } 
        }    
        
        /**
         * what to do normally
         */
        if (httpLink == -1 && httpsLink == -1 && wwwLink == -1) {
            if (oldMsgLowercase.indexOf(item) >= 0) {
                newMsg = oldMsg.substr(oldMsgLowercase.indexOf(item), item.length).split("").join(filteringCode[filteringMethod]);                
            }    	
        }
        $('#message').val(oldMsg.replace(new RegExp(item, "gi"), newMsg));        
    });  
}

function emoticon() {
    var newMsg;
    var massiveObj = $.extend({}, emoticon_1, emoticon_2, emoticon_3);
  
    $.each(massiveObj, function(name, value) {
      if ($("#message").val().regexIndexOf(new RegExp(value[0], 'gi')) >= 0) {
        newMsg = $("#message").val().replace(new RegExp(value[0], 'gi'), imgTag[0] + value[1] + imgTag[1]);
        $('#message').val(newMsg);
      }
    });
  
    $.each(twitch_c, function(index, item) {
        if ($("#message").val().regexIndexOf(new RegExp('\\b' + item + '\\b', 'g')) >= 0) {
            newMsg = $("#message").val().replace(new RegExp('\\b' + item + '\\b', 'g'), imgTag[0] + twitch_e[index] + imgTag[1]);
            $("#message").val(newMsg);
        }
    });
}

function meme() {
    $.each(maymay, function(name, value) {
      if ($("#message").val().regexIndexOf(new RegExp(value[0], 'gi')) >= 0) {
        var newMsg = $("#message").val().replace(new RegExp(value[0], 'gi'), value[1]);
        $('#message').val(newMsg);
      }
    });    
}

function greentext() {    
    if ($("#message").val().indexOf('>') === 0) {
        $("#message").val(greenText[0] + $("#message").val() + greenText[1]);
    }
}

/**
 *      begin button functions
 */

/**
 * This button will hide and show the rest of the buttons on click
 */
function addHider() { 
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

function addSmilie(i) {
    var table = $('table')[2];
    $(table).append(
      $('<tbody></tbody>')    
    );
    var tbody = $(table).find('tbody')[0];                 
	
	$(tbody).append($('<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>'));
 
    var across = 0;
    var down = 0;
    if (i == 1) {
         $.each(emoticon_1, function(name, value) {             
             var row = $(tbody).find('tr')[down];   
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
         $.each(emoticon_3, function(name, value) {             
             var row = $(tbody).find('tr')[down];    
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
     /*
       The separator goes here, hence +1
    */
    if (i == 6) {
         $.each(maymay, function(name, value) {             
             var row = $(tbody).find('tr')[down]; 
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

/**
 * returns a canvas and opens a jQuery UI Dialog
 */
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

/**
 * add button and intialize event listener for taking a screenshot
 */
function addScreenshot() {
   $('.genmed').prepend('<span id="chatbox_screenshot"><a href="javascript:void(0)">Take Screenshot</a></span>&nbsp;|&nbsp;');
    $('#chatbox_screenshot').click(function(){
        takeScreenshot();
    });
}

/**
 * this will run after every keypress
 */
function run() {
    swear();
    emoticon();
    meme();
    greentext();  
    if (Cookies.get('CB_rainbow') === '1') rainbow();
    if (Cookies.get('CB_random') === '1') random();    
}

/**
 * this is the main function, we have to use jQuery instead of $ because we do not actually load jQuery within this script
 */
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
			addHider();
			/**/
			addRainbow();
			addRandom();
            
            /**/
            buttonCss();
            
            /* screenshot feature only works in chrome, so I'll add an if statement
             */
            if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                $.getScript('http://daffeinatek.byethost32.com/swearify/html2canvas.js', function()	{
                    addScreenshot();
                });
            }                     
            
            /**/
			$('#message').on('keydown', function(e) {
			  if (e.which === 13 || e.which === 45) run();
			});
		}		
	});  
});
