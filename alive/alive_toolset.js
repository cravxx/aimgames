// ==UserScript==
// @name        toolset
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/
// @version     1
// @grant       none
// ==/UserScript==

//test thing

var css_string = ".box{width:300px;height:100px;position:relative;border:1px solid #BBB;background:#EEE}.ribbon{position:absolute;left:-5px;top:-5px;z-index:1;overflow:hidden;width:75px;height:75px;text-align:right}.ribbon span{font-size:10px;font-weight:bold;color:#FFF;text-transform:uppercase;text-align:center;line-height:20px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);width:100px;display:block;background:#79A70A;background:linear-gradient(#F70505 0%, #8F0808 100%);box shadow:0 3px 10px -5px rgba(0, 0, 0, 1);position:absolute;top:19px;left:-21px}.ribbon span::before{content:\"\";position:absolute;left:0px;top:100%;z-index:-1;border-left:3px solid #8F0808;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #8F0808}.ribbon span::after{content:\"\";position:absolute;right:0px;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #8F0808;border-bottom:3px solid transparent;border-top:3px solid #8F0808}";

var preva = "";
function get_new_msg() {
  if (document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML != preva) {
    preva = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML;
    return true;
  }
  else {
    preva = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML;
    return false;
  }
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

window.onload = function() {
  inject_css(css_string);
  var over_div = document.body;
  over_div.appendChild(document.createElement('div')).innerHTML =  '<div class=\"box\" style=\"position: fixed;right: 1%;top: 2%;\"><div class=\"ribbon\"><span>MY 12 INCH DICK</span></div></div>';
  
}
// += works too
