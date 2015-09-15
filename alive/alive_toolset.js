// ==UserScript==
// @name        toolset
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/
// @version     1
// @grant       none
// ==/UserScript==

//test thing

var css_string = "@import url(\'http://fonts.googleapis.com/css?family=Noto+Sans:400,700\');.box{width: 0px;height: 0px;position: relative;border: 0px solid #BBB;background: #EEE;font-family: \'Noto Sans\', sans-serif}.ribbon{width: 200px;background: #e43;position: absolute;top: 0px;left: -10px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #ff0000;font-size: 18px}.ribbon span{width: 200px;background: #e43;position: absolute;top: 25px;left: -50px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #f0f0f0;transform: rotate(-45deg);-webkit-transform: rotate(-45deg);font-size: 18px}.ribbon span::before{content: \"\";position:absolute;left:0px;top:100%;z-index:-1;border-left:3px solid #8F0808;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #8F0808}.ribbon span::after{content:\"\";position:absolute;right:0px;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #8F0808;border-bottom:3px solid transparent;border-top:3px solid #8F0808}";

var preva = "";
function get_new_msg() { //do we have a new msg
  if (document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML != preva) {
    preva = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML;
    return true;
  } else {
    preva = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML;
    return false;
  }
}

var new_msgs = 0; //how many new msgs
function get_new_msgs() {
  if (getScrollTop() < 1600) {
    if (get_new_msg()) {
      new_msgs++;
      box_div.innerHTML =  '<div class=\"box\" style=\"position: fixed;left: 1%;top: 2%;\"><div class=\"ribbon\"><span>' + new_msgs + ' new msgs</span></div></div>';
    }
  } else if (new_msgs != 0) {
    new_msgs = 0;
    box_div.innerHTML = '<div class=\"box\" style=\"position: fixed;left: 1%;top: 2%;\"></div>';
  }
  print(new_msgs);
}

function check_em() {
  document.getElementById("frame_chatbox").contentWindow.
  document.getElementById("chatbox").innerHTML = document.getElementById("frame_chatbox").contentWindow.
  document.getElementById("chatbox").innerHTML.
  replace(/\:11\]/g,
          '\:11\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:22\]/g,
          '\:22\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:33\]/g,
          '\:33\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:44\]/g,
          '\:44\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:55\]/g,
          '\:55\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:66\]/g,
          '\:66\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:77\]/g,
          '\:77\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:88\]/g,
          '\:88\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:99\]/g,
          '\:99\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  replace(/\:00\]/g,
          '\:00\]</span><span style=\"color\:red\"> CHECK \'EM</span><span class=\"date-and-time\">');
  
}

var gstyle;
function inject_css(css) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    gstyle = document.createElement('style');
    gstyle.type = 'text/css';
    gstyle.innerHTML = css;
    head.appendChild(gstyle);
}

function getScrollTop() { //// http://stackoverflow.com/questions/6691558/how-do-i-make-a-div-follow-me-as-i-scroll-down-the-page
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

var box_div; //init the box div so it can go anywhere
window.onload = function() {
  // inject our css
  inject_css(css_string);
  
  // make an empty div where the box will go
  var over_div = document.body;
  box_div = over_div.appendChild(document.createElement('div'));
  box_div.innerHTML =  '<div class=\"box\" style=\"position: fixed;left: 1%;top: 2%;\"></div>';
  
  // get the count of new msgs
  setInterval(get_new_msgs, 500);
  
  window.onscroll = function() {
    //make the box scroll with the screen
    var box = document.getElementById('box'),
        scroll = getScrollTop();

    if (box !== null) {
      if (scroll <= 28) {
        box.style.top = "30px";
      } else {
        box.style.top = (scroll + 2) + "px";
      }
    }
    
    //reset the msgs if scrolled to the cbox
    if (getScrollTop() > 1600) {
      is_at_cbox = true;
    } else {
      is_at_cbox = false;
    }
  };
  
}
// += works too
