// ==UserScript==
// @name        Chatbox++
// @description Adds a number of 'universal' enhancements for the AIM Games chatbox. Warning: This script is still in active development and may contain bugs!
// @namespace   the_thrasher@gmail.com
// @include     http://aimgames.forummotion.com/
// @version     1.42
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==


//this script won't work in big chat/archives (yet)
//it is only runs on the page, not the chat frame (errors in chat frame)
//changing chatboxFrame to document should be enough to fix
//debug using https://developer.mozilla.org/pt-BR/docs/Tools/Browser_Toolbox

var chatboxElement;

var messages;

/**
 * Returns the user who posted 'msgDOM' chatbox message
 */
function msgSender(msgDOM) {
	if (msgDOM.getElementsByClassName('user-msg')[0] !== undefined) //if this is not a "user joined"/"user dc'ed"/"user left" message
		return msgDOM.getElementsByClassName('user-msg')[0].getElementsByClassName('chatbox-username')[0].innerHTML;
	else
		return null;
}

/**
 * Returns the timestamp of 'msgDOM' chatbox message in HH:MM:SS format
 */
function msgTimestamp(msgDOM) {
	return msgDOM.getElementsByClassName('date-and-time')[0].innerHTML.substring(1, msgDOM.getElementsByClassName('date-and-time')[0].innerHTML.length-1);
}

/**
 * Returns true if 'strg' is dubs and in HH:MM:SS format
 */
function isDubs(strg) {
	strg = strg.substring(6,8); // HH:MM:SS format
	if (strg == "11")
		return true;
	if (strg == "22")
		return true;
	if (strg == "33")
		return true;
	if (strg == "44")
		return true;
	if (strg == "55")
		return true;
	if (strg == "66")
		return true;
	if (strg == "77")
		return true;
	if (strg == "88")
		return true;
	if (strg == "99")
		return true;
	if (strg == "00")
		return true;
	return false;
}

var oldMessagesAmount;
/**
 * Returns the amount of new messages since the last time this function was called
 */
function newMsgs() {
	return messages.length - oldMessagesAmount;
}
function resetNewMsgs() {
	oldMessagesAmount = messages.length;
}

/**
 * CHECK 'EM (call this once every chat update)
 */
function checkDubs() {
	for (var i = 0; i < messages.length; i++) { //DON'T DO A FOREACH (VAR X IN Y) IN HTMLCOLLECTIONS IT WILL THROW AN ERROR
		if (isDubs(msgTimestamp(messages[i]))) {
			var dubsSpan = document.createElement('span');
			dubsSpan.style = "color: red; text-align: right; display: block; float: right;";
			dubsSpan.innerHTML = ' CHECK \'EM';
			messages[i].appendChild(dubsSpan);
		}
	}
}

var boxElement; //box element that holds the new msg ribbon
var ribbonElement; //new msg ribbon
var ribbonText; //new msg string (X new msgs)

/**
 * Makes the 'new message!' box
 */
function makeBox() {
  console.log('is at cbox - ' + getScrollTop() + ' new msgs - ' + newMsgs());
  if (getScrollTop() <= 1400) { //are we not at cbox (doesnt work in bchat, may bug in different resolutions) --- 1700 in console 1400 otherwise
    ////// QUESTION >>>> IS THIS SLOW? THIS SEEMS TO UPDATE THE DOM EVERY TIME THE FUNCTION IS CALLED; IS IT FASTER TO CHECK IF THE INNERHTML NEEDS TO BE CHANGED?
    if (newMsgs() === 1)
    	ribbonText.innerHTML = '1 new msg';
    else
    	ribbonText.innerHTML = newMsgs() + ' new msgs';
    if (newMsgs() > 0) { //note MSG NUMBER CAN BE UNDER 0!!! since the non-archive chat removes old messages or something... this may be a problem (if someone posts 1 msg and 1 is removed the new msg counter is not displayed)
      if (boxElement.children[0] === undefined) //if the box element doesnt already exist
        boxElement.appendChild(ribbonElement);
    }
    else if (boxElement.children[0] !== undefined) //if the box element wasnt added or was removed before
      boxElement.removeChild(ribbonElement);
  }/* else {
    remBox();
  }*/
}
/**
 * Removes the box (faster-ish than doing it 2x a second - do it onscroll)
 */
function remBox() {
  if (getScrollTop() > 1400) {
    resetNewMsgs(); //resets the new msgs counter; you shouldnt do this once newMsgs() is called since this function is called 2x a second so the "new msg" ribbon would only appear for half a second then disappear as the new msg counter would be 0....
    if (boxElement.children[0] !== undefined) //if the box element wasnt added or was removed before
      boxElement.removeChild(ribbonElement);
  }
}


// css for the 'new msg' ribbon
var ribbonCSS = "@import url(\'http://fonts.googleapis.com/css?family=Noto+Sans:400,700\');.box{width: 0px;height: 0px;position: relative;border: 0px solid #BBB;background: #EEE;font-family: \'Noto Sans\', sans-serif}.ribbon{width: 200px;background: #e43;position: absolute;top: 0px;left: -10px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #ff0000;font-size: 18px}.ribbon span{width: 200px;background: #e43;position: absolute;top: 25px;left: -50px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #f0f0f0;transform: rotate(-45deg);-webkit-transform: rotate(-45deg);font-size: 18px}.ribbon span::before{content: \"\";position:absolute;left:0px;top:100%;z-index:-1;border-left:3px solid #8F0808;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #8F0808}.ribbon span::after{content:\"\";position:absolute;right:0px;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #8F0808;border-bottom:3px solid transparent;border-top:3px solid #8F0808}";



function injectCSS(css) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('style');
    gstyle.type = 'text/css';
    gstyle.innerHTML = css;
    head.appendChild(gstyle);
}

function injectCSSURL(url) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('link');
    gstyle.rel = 'stylesheet';
    gstyle.type = 'text/css';
    gstyle.href = url;
    head.appendChild(gstyle);
}
/* doesnt work wtf
function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (getScrollTop() >= window.scrollY) && (elemBottom <= window.innerHeight);
    return isVisible;
}
*/
function getScrollTop() { //// http://stackoverflow.com/questions/6691558/how-do-i-make-a-div-follow-me-as-i-scroll-down-the-page
    if (window.scrollY !== undefined)
      return window.scrollY;
    
    if (typeof window.pageYOffset !== 'undefined' ) {
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
 * Returns all a href tags that redirect to /uXXXX
 */
function getUserTagsOnDocument() {
  var atags = document.getElementsByTagName('a');
  var utags = [ ];
  for (var i = 0; i < atags.length; i++) {
  	if (atags[i] && atags[i].href && atags[i].href.match(/\/u/))
  		utags[utags.length] = atags[i];
  }
  return utags;
}


/**
 * Calls function 'callback' with the page 'url''s contents
 */
function getPageContents(callback, url, params) { ////// http://stackoverflow.com/a/28728475
  var http = new XMLHttpRequest();
  if (params !== undefined) {
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  } else {
    http.open('GET', url, true);
  }
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.responseText);
      //console.log(http.responseText)
    }
  };
  http.send(params);
}

/**
 * Profile details from the last time getProfileDetails() (actually getProfileDetailsCallback) was called (profile-advanced-details element)
 */
var lastHoveredProfileDetails;
/**
 * Temporary doc stuff that i can browse in browser console (allan please remove eventually)
 */
var tempdoc;
/**
 * used for getProfileDetails
 */
function getProfileDetailsCallback(response) {
  //errors for some reason
  //var parser = new DOMParser();
  //tempdoc = parser.parseFromString(response, "text/xml");
  
  //unsafe or whatever
  //if (document.implementation.createHTMLDocument) //new browsers
  	tempdoc = document.implementation.createHTMLDocument();
  //else //ie8 and below
  //	tempdoc = new ActiveXObject("htmlfile");
  
  //really fucked but works
  //console.log('resp' + response);
  tempdoc.body.innerHTML = response;
  
  lastHoveredProfileDetails = tempdoc.getElementById('profile-advanced-details');
}

/**
 * Makes 'lastHoveredProfileDetails' contain profile details from an user's profile link. (e.g http://aimgames.forummotion.com/u1426)
 */
function getProfileDetails(profileLink) {
  getPageContents(getProfileDetailsCallback, profileLink);
}

/**
 * Moves chat timestamps to the right of the screen (call once every chat update)
 */
function reorganizeTimestamps() {
  for (var i = 0; i < messages.length; i++) {
    var cArray = messages[i].children;
    var spTimeDate = document.createElement('span');
    spTimeDate.innerHTML = cArray[0].innerHTML;
    spTimeDate.className = 'date-and-time';
    spTimeDate.style = 'text-align: right;display:block;float:right;margin-left:10px;';
    var spMsg = document.createElement('span');
    spMsg.innerHTML = cArray[1].innerHTML;
    spMsg.className = 'user-msg';
    messages[i].removeChild(messages[i].firstChild);
    messages[i].removeChild(messages[i].firstChild);
    messages[i].appendChild(spMsg);
    messages[i].appendChild(spTimeDate);
  }
}

/**
 * Removes that annoying prick aileron owl's spammy messages
 */
function annoyingPrick() {
  for (var i = 0; i < messages.length; i++) {
    try { //this causes errors sometimes. I HAVE NO IDEA WHY.
      var msgText = messages[i].getElementsByClassName('msg')[0].children[0];
      if (msgText.children.length > 0) { //message is bold
        if (msgText.children[0].innerHTML.toLowerCase() == 'hoo' || msgText.children[0].innerHTML.toLowerCase() == 'cookie' || msgText.children[0].innerHTML.toLowerCase() == 'hoo cookie' || msgText.children[0].innerHTML.toLowerCase() == 'cookie hoo')
          messages[i].parentNode.removeChild(messages[i]);
      } else { //message isn't bold
        if (msgText.innerHTML.toLowerCase() == 'hoo' || msgText.innerHTML.toLowerCase() == 'cookie' || msgText.innerHTML.toLowerCase() == 'hoo cookie' || msgText.innerHTML.toLowerCase() == 'cookie hoo')
          messages[i].parentNode.removeChild(messages[i]);
      }
    } catch (e) {
    }
  }
}

/**
 * adds a manual refresh button argh i lost the code for this once aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 */
function addRefreshButton() {
  var s = document.createElement('span');
  s.innerHTML = ' | ';
  var a = document.createElement('a');
  a.href = 'javascript:void(0)';
  var r = document.createElement('span');
  r.id =  'alive-refreshbutton';
  r.style = '';
  r.onclick = 'chatbox.refresh()';
  r.innerHTML = 'Refresh';
  a.appendChild(r);
  var b = chatboxFrame.getElementById('chatbox_display_archives');
  b.appendChild(a);
  b.appendChild(s);
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    //chat has changed
    annoyingPrick();
    // looks bad
    //reorganizeTimestamps();
    checkDubs();
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
    subtree: true,
    attributes: false,
    childList: true,
    characterData: true,
    attributeOldValue: false,
    characterDataOldValue: false
});

var chatboxFrame;
  
// chatbox++ logo
if ($('#i_logo').length > 0) //null in chatbox frame; not undefined, keep note
    $('#i_logo').prop('src', 'http://i.imgur.com/LjuijqL.png');

// init vars
if ($('#frame_chatbox').length > 0) { //running in forum
    // ribbon is only here since we don't need it in big chat
  chatboxFrame = $('#frame_chatbox')[0].contentWindow.document;
  chatboxElement = $(chatboxFrame).find('#chatbox');
  messages = chatboxElement.children();
  oldMessagesAmount = 1; //workaround for "you are disconnected" "1 new msg" bug (proper fix in other branch)
  
  chatboxFrame = $('#frame_chatbox')[0]
  
  // init elements
  var boxHTML = '<div class="box" style="position: fixed;left: 1%;top: 2%;"></div>'
  
  ribbonElement = document.createElement('div'); //new msg ribbon
  ribbonElement.className = 'ribbon'; //not element.class
  ribbonText = document.createElement('span'); //new msg string (X new msgs)
  ribbonElement.appendChild(ribbonText);
  
  // inject our css
  injectCSS(ribbonCSS);
  
  // make an empty div where the box will go
  boxElement = $(document.body).append(boxHTML);
  
  // get the count of new msgs and apply dubs etc
  setInterval(function() {
  	makeBox();
  }, 1000); //too slow? too fast?
  
  ////KEEPS BOX AT THE TOP OF THE SCREEN
  $(document).scroll(function() {
    remBox();
    //make the box scroll with the screen
    var box = $('#box'),
    scroll = getScrollTop();    

    if (box.length > 0) {
      if (scroll <= 28) {
        box.prop('style', "top: 30px;");
      } else {
        box.prop('style', "top: " + (scroll + 2) + "px;");
      }
    }
  });
  
  addRefreshButton();
} else { //running in bchat (frame)
  return;
}

// += works too
