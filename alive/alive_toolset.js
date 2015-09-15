//test thing

var css_string = "@import url(http://fonts.googleapis.com/css?family=Noto+Sans:400,700);h1,h2{text-align:center;width:500px;height:100px;position:fixed;top:50%;left:50%}.corner-ribbon,h1,h2{text-align:center}*{margin:0;padding:0}body{background:#f0f0f0;font-family:\'Noto Sans\',sans-serif}h1{margin:-100px 0 0 -275px;font-size:3.2em;font-weight:700;text-transform:uppercase;line-height:100px;color:#aaa}h2{margin:0 0 0 -225px;font-size:1.6em;font-weight:400;line-height:100%;color:#bbb}.corner-ribbon{width:200px;background:#e43;position:absolute;line-height:50px;letter-spacing:1px;color:#f0f0f0;-webkit-transform:rotate(-45deg)}.corner-ribbon,.corner-ribbon.top-left{top:25px;left:-50px;transform:rotate(-45deg)}.corner-ribbon.sticky{position:fixed}.corner-ribbon.shadow{box-shadow:0 0 3px rgba(0,0,0,.3)}.corner-ribbon.top-left{-webkit-transform:rotate(-45deg)}.corner-ribbon.top-right{top:25px;right:-50px;left:auto;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.corner-ribbon.bottom-left{top:auto;bottom:25px;left:-50px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.corner-ribbon.bottom-right{top:auto;right:-50px;bottom:25px;left:auto;transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.corner-ribbon.white{background:#f0f0f0;color:#555}.corner-ribbon.black{background:#333}.corner-ribbon.grey{background:#999}.corner-ribbon.blue{background:#39d}.corner-ribbon.green{background:#2c7}.corner-ribbon.turquoise{background:#1b9}.corner-ribbon.purple{background:#95b}.corner-ribbon.red{background:#e43}.corner-ribbon.orange{background:#e82}.corner-ribbon.yellow{background:#ec0}";

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
    gstyle.type = 'text/plain';
    gstyle.innerHTML = css;
    head.appendChild(gstyle);
}

window.onload = function() {
  inject_css(css_string);
  document.body.innerHTML = '<div class=\"corner-ribbon top-left sticky red shadow\">Hello</div>' + document.body.innerHTML;
}
// += works too
