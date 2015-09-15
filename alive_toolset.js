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
