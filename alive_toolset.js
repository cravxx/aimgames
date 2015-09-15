//test thing
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
