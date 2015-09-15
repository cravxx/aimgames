//test thing
var a = document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox");
var preva = "";
function get_new_msg() {
  if (a != preva) return true;
  else return false;
}
preva = a;
