// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @require     https://raw.githubusercontent.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/jquery.caret.1.02.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     beta.4.4
// @icon        http://i.imgur.com/MnWNRBL.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==
/* SWEARIFY 2.0
- even though this script uses jQuery, we do not need to add a '@require' as forumotion already loads its own.

'TO IMPLEMENT' LIST

    -   Clean up what I added in a rush (non-camelcase, etc)

    -   Enabled for posting (MOSTLY DONE)

    -   Upgraded swear filter
    
    -   Redtext
    
    -   greek     text
    -   braille   text
    -   balloon   text
    -   leet      text
    -   morse     text
    -   smallcaps text
    -   rainbow   text
    -   random    text
    -   gradient  text
    
    -   sekrit mode

IDEAS:
    -   Slide the text effect buttons to the left and right instead of the sharp show/hide
        this could be accomplished by wrapping elements with the class name '.hider' in a div and calling .slide or .animate

    -   Possibly use prototype.js for... stuff?

    -   Count total messages and characters typed (NSA pls)

    -   A dedicated .css file

    -   Hashtag system? start or end a message with a hash tag and that message will get sent to my site. Clicking on the hash tag directs to a page where
        a list of the messages posted with that hashtag will be shown. Probably requires php.
*/
(function() {

    "use strict";

    var cssChkbox = 'font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;';
    var cssButton = 'font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;';
    var cssMsg = 'font-size:10px;color:white; margin-right:8px; margin-left:5px;';
    var cssLine = 'color:black;';
    var cssChat = 'overflow-x: hidden; left:141px;';
    var cssClicked = 'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
    var cssHide = 'cursor: pointer;width: 10px;background: rgb(85, 85, 85) none repeat scroll 0px 0px;color: rgb(170, 170, 170);font-size: 9px;border: 1px solid rgb(85, 85, 85);-moz-user-select: none;-webkit-user-select: none;height: 100%;line-height: 200%;';
    var cssImage = 'padding-top: 1px;';

    var postButtonNum = 0;

    var imgTag = ['[img]', '[/img]'];

    var greenText = ['[color=#789922]', '[/color]'];

    var smilieOptions = {
        '1': 'Swearify 1',
        '2': 'Swearify 2',
        '3': 'Swearify 3',
        '4': 'Twitch',
        '5': 'Memes',
        '6': 'Search'
    };

    var specialCode = ['/exit', '/away', '/abs', '[code]'];
    var filteringCode = ['[b][/b]', '.'];
    var linkCode = ['http://', 'www.', 'https://'];
    
    
    /**
     * Convenience method. Similar in functionality but not identical to String.prototype.includes.
     */
    String.prototype.contains = function(search) {
        return this.indexOf(search) !== -1;
    };

    String.prototype.regexIndexOf = function(regex, startpos) {
        var indexOf = this.substring(startpos || 0).search(regex);
        return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
    };

    function addStylesheet(url) {
        $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', url));
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

    function hijackEmoticonButton() {
        $("#divsmilies").click(function(event) {
            var scrX = (event.screenX - 270);
            var scrY = (event.screenY - 380);
            window.open('/post?categ=6&mode=smilies', 'chatbox_smilies', 'toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY);
        });
    }

    /**
     * ROUGH HACK
     * sets some css for the reply /post so controls are visible
     * what the fuck ip
     */
    function postPage() {
        var clear = '';
        var hide = 'display:none;';
        if (getCookie('post_condition') == '1') {
            postButtonNum = 1;
            $('#text_edit').css('cssText', hide);
            $('#html_edit').css('cssText', clear);
        } else {
            postButtonNum = 0;
            $('#text_edit').css('cssText', clear);
            $('#html_edit').css('cssText', hide);
        }
        $('#text_editor_cmd_switchmode').click(function() {
            if (postButtonNum === 0) {
                setCookie('post_condition', '1', 1);
                postButtonNum = 1;
                $('#text_edit').css('cssText', hide);
                $('#html_edit').css('cssText', clear);
            } else if (postButtonNum == 1) {
                setCookie('post_condition', '0', 1);
                postButtonNum = 0;
                $('#text_edit').css('cssText', clear);
                $('#html_edit').css('cssText', hide);
            }
        });
    }

    /**
     * ROUGH HACK
     * sets some css for the buttons, especially for the hide button
     */
    function buttonCss() {
        if (Cookies.get('CB_hide') === '1') {
            $('.hider').hide();
            $('#click_area_hide').text('<');
        } else {
            $('.hider').show();
            $('#click_area_hide').text('>');
        }
        $('#click_area_hide').css('cssText', cssHide);
        $('.swearIcons').css('cssText', cssImage);
    }

    /**
     * my replacement for the insert_chatboxsmilies() function in en.js
     */
    function initEmotesAsClickable(smilieLink, smilieCode, indiv) {
        $(indiv).click(function() {
            /**
             * on click, get the parent window (the chatbox) and put the smilie code into the message box
             */
            if (window.opener) {
                var msgBox = window.opener.$('#message');
                var msgBoxSplitBefore = '';
                var msgBoxSplitAfter = '';
                if ($(msgBox).caret().start < $(msgBox).val().length) {
                    msgBoxSplitBefore = msgBox.val().substr(0, $(msgBox).caret().start);
                    msgBoxSplitAfter = msgBox.val().substr($(msgBox).caret().start, $(msgBox).val().length);
                } else {
                    msgBoxSplitBefore = msgBox.val().substr(0, $(msgBox).val().length);
                    msgBoxSplitAfter = '';
                }
                msgBox.val(msgBoxSplitBefore + smilieCode + msgBoxSplitAfter);
            }
            if (parent) {
                var postBox = parent.$('textarea')[1];
                console.log(postBox);

                var postBoxVal = parent.$('textarea')[1].value;
                console.log(postBoxVal);
                var postBoxSplitBefore = '';
                var postBoxSplitAfter = '';

                postBoxSplitBefore = postBoxVal.substr(0, postBoxVal.length);
                postBoxSplitAfter = '';

                postBox.value = postBoxSplitBefore + postImgTag(smilieLink) + postBoxSplitAfter;
            }
        });
        /**
         * fixes the bug where smilies are added more than once
         */
        $(indiv).keypress(function(e) {
            e.preventDefault();
        });
    }

    /**
     * this returns a string of html based off smilieBase with inserted variables
     */
    function smilieHtml(title, link, text) {
        return `<a href="javascript:void(0)" class="emotes"><img title="${title}" src="${link}" alt="${title}" border="0"></a>`;
    }

    /**
     * this returns a post img tag
     */
    function postImgTag(link) {
        return `<img title="posted by swearify" src="${link}"></img>`;
    }

    /**
     * returns what post box is available
     */
    function getPostMode() {
        if ($('textarea')[1] === undefined)
            return 0;
        return 1;
    }

    /**
     * simulate the behaviour of a radio button (uncheck other buttons if they are checked)
     */
    function uncheckOtherButtons(buttonCookie, buttonElement) {
        var buttons = [
            'CB_random',
            'CB_rainbow'
        ];

        for (var i in buttons) { //run through every button
            if (buttonCookie !== buttons[i] && Cookies.get(buttons[i]) === '1') { //we've found a match
                $(buttonElement).prop('checked', false); //uncheck...
                $(buttonElement).css('cssText', '');
                Cookies.set('CB_' + name, '0'); //...and unset the cookie!
            }
        }
    }

    /**
     * add a text box in the window
     */
    function addSearchBox() {
        var tbody = $('td')[1];
        $(tbody).css('background', 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url("http://daffeinatek.byethost32.com/lastfm/resources/lighthole.gif")');
        $(tbody).css('background-size', '100%');
        $(tbody).prepend($('<label style="font-size: 13px; font-weight: 900;">Swear Search ™</label><input id="emoteSearchBox" style="margin: 15px;border-color: black;"><label id="emoticonNotif" style="font-size: 9px;color: red;display: block;margin-bottom: 15px;font-weight: 600;">search something, shitmongrel</label>'));
    }

    /**
     * add in the new options to the dropdown menu in the smilie window
     */
    function appendOptions() {
        $.each(smilieOptions, function(key, value) {
            $('[name="categ"]').append($('<option>', {
                value: key
            }).text(value));
        });
    }

    /**
     * this is pretty arbitrary but it works
     */
    function fitEmotesOnScreen() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth;
        return Math.floor(x / 130) - 1;
    }

    /**
     * begin non-utility functions
     */

    /**
     * moved over from e29c520
     * obviously this needs upgrading as it's awful
     */
    function swear() {
        var oldMsg = $('#message').val(); // yes, i edit this variable. lick my nipples if you disagree with that decision.
        var oldMsgLowercase = oldMsg.toLowerCase();
        
        var httpLink = oldMsg.indexOf(linkCode[0]);
        var wwwLink = oldMsg.indexOf(linkCode[1]);
        var httpsLink = oldMsg.indexOf(linkCode[2]);

        //is the message a chatbox command?
        var chatCommand = oldMsg.contains(specialCode[0]) || // /exit command
                          oldMsg.contains(specialCode[1]) || // /away command
                          oldMsg.contains(specialCode[2]) || // /abs command
                          oldMsg.contains(specialCode[3]) // [code] command
                          ;
        
        var filteringMethod = 0;

        /**
         * if the message is a chatbox command, add . . . to swears instead of [b][/b]
         */
        if (chatCommand)
            filteringMethod = 1;
        
        $.each(swears, function(index, item) {
            /**
             * define a ton of variables
             */
            var filteredItem = '';


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
                if (before_link.contains(item)) {
                    filteredItem = oldMsg.substr(before_link.indexOf(item), item.length).split("").join(filteringCode[filteringMethod]);
                }
            }

            /**
             * what to do normally
             */
            if (httpLink == -1 && httpsLink == -1 && wwwLink == -1) {
                if (oldMsgLowercase.indexOf(item) >= 0) {
                    filteredItem = oldMsg.substr(oldMsgLowercase.indexOf(item), item.length).split("").join(filteringCode[filteringMethod]);
                }
            }
            // according to how your code worked previously, this should be perfectly fine.
            // if it isn't, SHAME ON YOU, KAFF.
            oldMsg = oldMsg.replace(item, filteredItem);
        });
        
        $('#message').val(oldMsg);
    }

    function emoticonPost() {
        var oldMsg = $('textarea')[getPostMode()].value; // yes, i edit this variable. lick my nipples if you disagree with that decision.
        var massiveObj = $.extend({}, emoticon_1, emoticon_2, emoticon_3); //this could be made global.

        $.each(massiveObj, function(name, value) {
            if (oldMsg.contains(value[0])) {
                oldMsg = oldMsg.replace(value[0], postImgTag(value[1]));
            }
        });

        $.each(twitch_c, function(index, item) {
            if (oldMsg.regexIndexOf(item) !== -1) {
                oldMsg = oldMsg.replace(item, postImgTag(twitch_e[index]));
            }
        });
        
        $('textarea')[getPostMode()].value = oldMsg;
    }

    function emoticon() {
        var oldMsg = $('#message').val(); // yes, i edit this variable. lick my nipples if you disagree with that decision.
        var massiveObj = $.extend({}, emoticon_1, emoticon_2, emoticon_3); //this could be made global.

        $.each(massiveObj, function(name, value) {
            if (oldMsg.contains(value[0])) {
                oldMsg = oldMsg.replace(value[0], imgTag[0] + value[1] + imgTag[1]);
            }
        });

        $.each(twitch_c, function(index, item) {
            if (oldMsg.regexIndexOf(item) !== -1) {
                oldMsg = oldMsg.replace(item, imgTag[0] + twitch_e[index] + imgTag[1]);
            }
        });
        
        $('#message').val(oldMsg);
    }

    // TODO: should memes enforce word breaks?

    function memePost() {
        var oldMsg = $('textarea')[getPostMode()].value; // yes, i edit this variable. lick my nipples if you disagree with that decision.
        
        $.each(maymay, function(name, value) {
            if (oldMsg.contains(value[0])) {
                oldMsg = oldMsg.replace(value[0], value[1]);
            }
        });
        $('textarea')[getPostMode()].value = oldMsg;
    }

    function meme() {
        var oldMsg = $('#message').val(); // yes, i edit this variable. lick my nipples if you disagree with that decision.
        
        $.each(maymay, function(name, value) {
            if (oldMsg.contains(value[0])) {
                oldMsg = oldMsg.replace(value[0], value[1]);
            }
        });
        $('#message').val(oldMsg);
    }

    function greentextPost() {
        var msgArray = $('textarea')[getPostMode()].value.split('\n');
        for (var i = 0; i < msgArray.length; i++) {
            if (msgArray[i].indexOf('>') === 0) {
                msgArray[i] = greenText[0] + msgArray[i] + greenText[1];
                $('textarea')[getPostMode()].value = msgArray.join('<br>');
            }
        }
    }

    function greentext() {
        if ($('#message').val().indexOf('>') === 0) {
            $('#message').val(greenText[0] + $("#message").val() + greenText[1]);
        }
    }

    /**
     * This button will hide and show the rest of the buttons on click
     */
    function addHider() {
        var where = $('.text-styles tr')[0];

        $(where).prepend($('<td id="hide_button" class="fontbutton"></td>'));

        var whereTd = $(where).find('td');
        $(whereTd[0]).append(
            $('<input name="hide" id="hide-button" class="format-message" type="checkbox"><label id="click_area_hide" title="Hide" style="cursor:pointer;"></label>')
        );

        $('#click_area_hide').click(function() {
            if (!$('.hider').is(':visible')) {
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
    
    /**
     * Creates a button in the chat
     * 
     * name: the unique name of the button
     * nameStylized: a nifty title for the button
     * iconURL: a link to the image for the button
     */
    function makeButton(name, nameStylized, iconURL) {
        var where = $('.text-styles tr')[0];

        $(where).prepend($('<td id="' + name + '_button" class="fontbutton hider"></td>'));

        var whereTd = $(where).find('td');
        $(whereTd[0]).append(
            $('<input name="' + name + '" id="format-' + name + '" class="format-message" type="checkbox"><label id="click_area_' + name + '" title="' + nameStylized + '" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="' + iconURL + '"></label>')
        );

        return $('#format-' + name);
    }
    
    /**
     * Creates and handles the button you create with makeButton()
     * 
     * name: same name as makeButton()
     * buttonElement: the returned value of makeButton()
     */
    function makeButtonCookie(name, buttonElement) {
        if (Cookies.get('CB_' + name) === '1') $(buttonElement).prop('checked', true);
        else $(buttonElement).prop('checked', false);

        $('#click_area_' + name).click(function() {
            uncheckOtherButtons('CB_' + name, buttonElement);
            if (!$(buttonElement).prop('checked')) {
                $(buttonElement).prop('checked', true);
                $(buttonElement).css('cssText', cssClicked);
                Cookies.set('CB_' + name, '1');
            } else {
                $(buttonElement).prop('checked', false);
                $(buttonElement).css('cssText', '');
                Cookies.set('CB_' + name, '0');
            }
        });
    }

    /**
     * Applies the rainbow effect to the message
     */
    function rainbow() {
        $('#message').val(rainbowText($('#message').val()));
    }

    /**
     * Applies the random-color effect to the message
     */
    function random() {
        $('#message').val(randomText($('#message').val()));
    }

    function search(searchTerm) {
        var massiveObj = $.extend({}, emoticon_1, emoticon_2, emoticon_3);
        var massiveResults = [];
        var massiveResultsTemp = [];

        $('#emoticonNotif').text('');

        if (searchTerm.length > 0) {
            var searchRegExp = new RegExp(searchTerm, 'gi'); //prevent assloads of instantiations
            $.each(massiveObj, function(name, value) {
                if (value[0].regexIndexOf(searchRegExp) >= 0) {
                    if (massiveResults.length >= 104) {
                        /*
                         * if there's >= 104 elements, BREAK OUT
                         */
                        $('#emoticonNotif').text('too many results, capped at 104');
                        return false;
                    } else {
                        /*
                         * if not, push another one. and another one. and another one.
                         */
                        massiveResults.push({
                            name: name,
                            value1: value[0],
                            value2: value[1]
                        });
                    }
                }
            });
            $.each(twitch_c, function(index, item) {
                if (item.regexIndexOf(searchRegExp) >= 0) {
                    if (massiveResults.length >= 104) {
                        /*
                         * if there's >= 104 elements, BREAK OUT
                         */
                        $('#emoticonNotif').text('too many results, capped at 104');
                        return false;
                    } else {
                        /*
                         * if not, push another one. and another one. and another one.
                         */
                        massiveResults.push({
                            name: item,
                            value1: item,
                            value2: twitch_e[index]
                        });
                    }
                }
            });
        } else {
            $('#emoticonNotif').text('search something, shitmongrel');
        }
        return massiveResults;
    }

    function displayResults(massiveArray, windowWidth) {
        var table;
        /**
         * use a different table if one isn't available
         */
        if (!$('table')[2]) {
            table = $('table')[0];
        } else {
            table = $('table')[2];
        }
        $(table).empty();

        $(table).append(
            $('<tbody></tbody>')
        );
        var tbody = $(table).find('tbody')[0];

        var across = 0;
        var down = 0;
        $.each(massiveArray, function(index, item) {
            $(tbody).append($('<tr></tr>'));
            var row = $(tbody).find('tr')[down];
            $(row).append('<td></td>');
            var indiv = $(row).find('td')[across];
            $(indiv).append($(smilieHtml(item.value1, massiveArray[index].value2, item.name)));
            initEmotesAsClickable(massiveArray[index].value2, item.value1, indiv);
            across++;
            if (across >= windowWidth) {
                across = 0;
                down++;
            }
        });
    }

    function displaySmilies(i, windowWidth) {
        var table;
        /**
         * use a different table if one isn't available
         */
        if (!$('table')[2]) {
            table = $('table')[0];
            windowWidth = 1;
        } else {
            table = $('table')[2];
        }
        $(table).empty();

        $(table).append(
            $('<tbody></tbody>')
        );
        var tbody = $(table).find('tbody')[0];

        var across = 0;
        var down = 0;
        if (i == 1) {
            $.each(emoticon_1, function(name, value) {
                $(tbody).append($('<tr></tr>'));
                var row = $(tbody).find('tr')[down];
                $(row).append('<td></td>');
                var indiv = $(row).find('td')[across];
                $(indiv).append($(smilieHtml(value[0], value[1], value[2])));
                initEmotesAsClickable(value[1], value[0], indiv);
                across++;
                if (across >= windowWidth) {
                    across = 0;
                    down++;
                }
            });
        }
        if (i == 2) {
            $.each(emoticon_2, function(name, value) {
                $(tbody).append($('<tr></tr>'));
                var row = $(tbody).find('tr')[down];
                $(row).append('<td></td>');
                var indiv = $(row).find('td')[across];
                $(indiv).append($(smilieHtml(value[0], value[1], value[2])));
                initEmotesAsClickable(value[1], value[0], indiv);
                across++;
                if (across >= windowWidth) {
                    across = 0;
                    down++;
                }
            });
        }
        if (i == 3) {
            $.each(emoticon_3, function(name, value) {
                $(tbody).append($('<tr></tr>'));
                var row = $(tbody).find('tr')[down];
                $(row).append('<td></td>');
                var indiv = $(row).find('td')[across];
                $(indiv).append($(smilieHtml(value[0], value[1], value[2])));
                initEmotesAsClickable(value[1], value[0], indiv);
                across++;
                if (across >= windowWidth) {
                    across = 0;
                    down++;
                }
            });
        }
        if (i == 4) {
            $.each(twitch_c, function(index, item) {
                $(tbody).append($('<tr></tr>'));
                var row = $(tbody).find('tr')[down];
                $(row).append('<td></td>');
                var indiv = $(row).find('td')[across];
                $(indiv).append($(smilieHtml(item, twitch_e[index], item)));
                initEmotesAsClickable(twitch_e[index], ' ' + item + ' ', indiv);
                across++;
                if (across >= windowWidth) {
                    across = 0;
                    down++;
                }
            });
        }

        if (i == 5) {
            $.each(maymay, function(name, value) {
                $(tbody).append($('<tr></tr>'));
                var row = $(tbody).find('tr')[down];
                $(row).append('<td></td>');
                var indiv = $(row).find('td')[across];
                $(indiv).append($(smilieHtml(value[1], value[1], value[0])));
                initEmotesAsClickable(value[1], value[0], indiv);
                across++;
                if (across >= windowWidth) {
                    across = 0;
                    down++;
                }
            });
        }
    }

    /**
     * returns a canvas and opens a jQuery UI Dialog
     */
    function takeScreenshot() {
        html2canvas(document.body, {
            onrendered: function(canvas) {
                var dataURL = canvas.toDataURL('image/png');
                $('<div></div>').dialog({
                    modal: true,
                    title: 'View Screenshot',
                    open: function() {
                        $(this).html(`<a target='_blank' href='${dataURL}'>Click to Open</a>`);
                    },
                    buttons: {
                        Ok: function() {
                            $(this).dialog('close');
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
        $('#chatbox_screenshot').click(function() {
            takeScreenshot();
        });
    }

    /**
     * this will run after every enter and insert keypress in the message box
     */
    function runChat() {
        swear();
        emoticon();
        meme();
        greentext();
        if (Cookies.get('CB_rainbow') === '1') rainbow();
        if (Cookies.get('CB_random') === '1') random();
    }

    /**
     * this will run after every enter keypress in the texteditor
     */
    function runPost() {
        emoticonPost();
        greentextPost();
        memePost();
    }

    /**
     * this is the main function, where shit goes down and functions are called.
     * 
     */
    $.getScript('https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/swearifyVar.js', function() {
        appendOptions();
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=1&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=1&mode=smilies_frame') {
            console.log("done");
            displaySmilies(1, fitEmotesOnScreen());
            window.onresize = function(event) {
                displaySmilies(1, fitEmotesOnScreen());
            };
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=2&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=2&mode=smilies_frame') {
            displaySmilies(2, fitEmotesOnScreen());
            window.onresize = function(event) {
                displaySmilies(2, fitEmotesOnScreen());
            };
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=3&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=3&mode=smilies_frame') {
            displaySmilies(3, fitEmotesOnScreen());
            window.onresize = function(event) {
                displaySmilies(3, fitEmotesOnScreen());
            };
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=4&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=4&mode=smilies_frame') {
            displaySmilies(4, fitEmotesOnScreen());
            window.onresize = function(event) {
                displaySmilies(4, fitEmotesOnScreen());
            };
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=5&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=5&mode=smilies_frame') {
            displaySmilies(5, fitEmotesOnScreen());
            window.onresize = function(event) {
                displaySmilies(5, fitEmotesOnScreen());
            };
        }
        if (window.location.href === 'http://aimgames.forummotion.com/post?categ=6&mode=smilies' ||
            window.location.href === 'http://aimgames.forummotion.com/smilies.forum?categ=6&mode=smilies_frame') {
            addSearchBox();
    
            /*
             * add in a keyup timer so, say, if you type A S S H O L E the search method doesn't try to search for A, AS, ASS, etc.
             */
            var timeAmongUs;
            $('#emoteSearchBox').on('keyup', function() {
                if (timeAmongUs) clearTimeout(timeAmongUs)
                var passItDown = this.value;
                timeAmongUs = setTimeout(function() {
                    displayResults(search(passItDown), fitEmotesOnScreen());
                }, 250);
            });
        }
        if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' ||
            window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' ||
            window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' ||
            window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?archives' ||
            window.location.href === 'http://aimgames.forummotion.com/chatbox' ||
            window.location.href === 'http://aimgames.forummotion.com/') {
            addStylesheet('https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
            addStylesheet('https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css');
            editCss();
            /**/
            addHider();
            /**/
            makeButtonCookie('rainbow', makeButton('rainbow', 'Rainbow', 'http://i.imgur.com/F69UQGS.png'));
            makeButtonCookie('random', makeButton('random', 'Random', 'http://i.imgur.com/jHMOnyI.png'));
    
            /**/
            buttonCss();
    
            /**/
            hijackEmoticonButton();
    
            /* screenshot feature only works in chrome, so I'll add an if statement
             */
            if (navigator.userAgent.toLowerCase().contains('chrome')) {
                $.getScript('http://daffeinatek.byethost32.com/swearify/html2canvas.js', function() {
                    addScreenshot();
                });
            }
    
            /**/
            $('#message').on('keydown', function(e) {
                if (e.which === 13 || e.which === 45) runChat();
            });
        } else {
            if (window.location.href.contains('aimgames.forummotion.com/post')) postPage();
    
            /**/
            $('textarea').on('keydown', function(e) {
                if (e.which === 13) runPost();
            });
        }
    });
}());
