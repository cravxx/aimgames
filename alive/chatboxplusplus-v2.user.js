// ==UserScript==
// @name        OH GOD
// @description OH GOD I'M DOING IT AGAIN
// @namespace   GOD@HELP.ME
// @include     http://aimgames.forummotion.com/
// @version     FUCKING CHRIST.2
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// JQuery chatbox frame document
var c$;
// DOM chatbox frame document
var chatDocument;
// JQuery chatbox element
var chat;

var css = {
  box: '<div class="box invisibox" style="position: fixed;left: 1%;top: 2%;"><div class="ribbon"><span>text will go here</span></div></div>',
  // ES6-compliant strings with newlines... aren't they beautiful?
  ribbon: `
@import url('http://fonts.googleapis.com/css?family=Noto+Sans:400,700');
.box {
    width: 0px;
    height: 0px;
    position: relative;
    border: 0px solid #BBB;
    background: #EEE;
    font-family: 'Noto Sans', sans-serif
}
.box.invisibox {
    display: none;
}
.ribbon {
    width: 200px;
    background: #e43;
    position: absolute;
    top: 0px;
    left: -10px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 1px;
    color: #ff0000;
    font-size: 18px
}
.ribbon span {
    width: 200px;
    background: #e43;
    position: absolute;
    top: 25px;
    left: -50px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 1px;
    color: #f0f0f0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    font-size: 18px
}
.ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #8F0808;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #8F0808
}
.ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #8F0808;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #8F0808
}`
};

function getNewMessages() {
  //c$.find('.chatbox_row_1.clearfix');
  //c$.find('.chatbox_row_1.clearfix');
  
  //or
  
  newMsgs = c$.find('#chatbox').children() - oldMsgs;
}

function resetNewMessages() {
    oldMsgs = newMsgs;
}

var oldMsgs = 0;
var newMsgs = 0;

var theBox = $(css.box);
// ex. boxText.text("changed")
var boxText = theBox.find('span');

function getScroll() { //// http://stackoverflow.com/questions/6691558/how-do-i-make-a-div-follow-me-as-i-scroll-down-the-page
  //simpler:
  //return window.scrollY || window.pageYOffset || ((d = document.documentElement).clientHeight && d.scrollTop) || document.body.scrollTop;
  
  //proper:
  if (window.scrollY !== undefined)
      return window.scrollY;

  if (typeof window.pageYOffset !== 'undefined') {
      // Most browsers
      return window.pageYOffset;
  }

  var d = document.documentElement;
  if (d.clientHeight) {
      // IE in standards mode
      return d.scrollTop;
  }

  // IE in quirks mode
  return document.body.scrollTop;
}

/**
 * Makes the 'new message!' box
 */
function makeBox() {
  
  console.log('is at cbox - ' + (getScroll() > 1400) + ' new msgs - ' + newMsgs);
    
  if (getScroll() <= 1400) { //are we not at cbox (doesnt work in bchat, may bug in different resolutions) --- 1700 w/ console 1400 otherwise
    getNewMessages(); //TODO put this in the mutationobserver
    if (newMsgs > 0) {
      if (newMsgs === 1)
        boxText.text('1 new msg');
      else
        boxText.text(newMsgs + ' new msgs');
      //show ribbon
      theBox.toggleClass('invisibox', false);
    } else { // there are no new messages or the archive is eating them
      //hide ribbon
      theBox.toggleClass('invisibox', true);
    }
  } else {
    // refresh msg count to 0
    resetNewMessages();
    //hide ribbon
    theBox.toggleClass('invisibox', true);
  }
}

if ($('#frame_chatbox').length > 0) { //running in forum

  // chatbox++ logo
  if ($('#i_logo').length > 0) //null in chatbox frame; not undefined, keep note
      $('#i_logo').prop('src', 'http://i.imgur.com/LjuijqL.png');
  
  chatDocument = $('#frame_chatbox')[0].contentWindow.document;
  // ex. c$.find('.chatbox_row_1.clearfix')
  c$ = $(chatDocument);
  
  chat = c$.find('#chatbox');
  
  // add the ribbon css
  $('<style type="text/css">' + css.ribbon + '</style>').appendTo('head');
  
  // add the invisible ribbon holder
  $(document.body).append(theBox);
  
  // add the listeners (TODO: add the mutationobserver as well)
  $(document).scroll(makeBox);
  
}

