//test thing
var preva = "";
function get_new_msg() {
  preva = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML;
  if (document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").innerHTML != preva) return true;
  else return false;
}
