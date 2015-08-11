var swear_words = [
  "fuck", "shit", "bastard",
  "whore", "dick", "faggot",
  "rape", "asshole", "ass",
  "arse", "boner", "cum",
  "bitch", "lesbian", "shift",
  "cock", "gay", "fag",
  "porn", "milf", "damn",
  "semen", "didk", "tit",
  "piss", "pussy", ":3",
  "git", "daa", "fap",
  "penis", "foxy", "screw",
  "anus", "fu ", "sex",
  "anal", "disk", "slut",
  "comeback", "hoe", "shirt",
  "cunt", "stalker", "tofu",
  "vagina", "homo", "crap",
  "waifu", "douche", "prick",
  "motherf", "shiznit", "turd",
  "dip", "dik", "sh!t", 
];

var spec_code = [
  "/exit", "/away"
];
var swear_code = [
  '[b][/b]', '.'
];
///////

///////////////////// MANAGES THE SWEAR FILTERING
function unique_char(string) { /// http://stackoverflow.com/questions/13868043/showing-unique-characters-in-a-string-only-once
  var str_length = string.length;
  var unique = '';
  for (var i = 0; i < str_length; i++) {
    var foundIt = false;
    for (var j = 0; j < unique.length; j++) {
      if (string[i] == unique[j]) {
        foundIt = true;
        break;
      }
    }
    if (!foundIt) {
      unique += string[i];
    }
  }
  return unique;
}

function filter_swears_chat() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value.toLowerCase();
    var old_msg_reg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var index_num = old_msg.indexOf(swear_words[i]);           
    
    var exit_num = old_msg.indexOf(spec_code[0]);
    var away_num = old_msg.indexOf(spec_code[1]);
    
    var spec_switch = 0;
    if (exit_num === 0 || away_num === 0) {
      spec_switch = 1;
    }
    
    var edi_msg = "";
    var par_msg = "";
    var new_msg = "";
    
    if (index_num >= 0) {
      edi_msg = old_msg_reg.substr(old_msg.indexOf(swear_words[i]), swear_words[i].length);                
      par_msg = edi_msg.split("").join(swear_code[spec_switch]);            
      new_msg = old_msg_reg.replace(new RegExp(swear_words[i], "gi"), par_msg);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
    else {
      var words = old_msg.split(" ");
      var letter_ray = old_msg.split(" ");
      for (var j = 0; j < words.length; j++) {
        letter_ray[j] = unique_char(words[j]);
      }
      for (var k = 0; k < letter_ray.length; k++) {
        if (letter_ray[k] === swear_words[i]) {
          edi_msg = old_msg_reg.substr(old_msg.indexOf(words[k]), words[k].length);
          par_msg = edi_msg.split("").join(swear_code[exit_switch]);
          new_msg = old_msg_reg.replace(new RegExp(words[k], "gi"), par_msg);
          document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
        }
      }
    }
  }
}

function filter_swears_bchat() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("message").value.toLowerCase();
    var old_msg_reg = document.getElementById("message").value;
    var index_num = old_msg.indexOf(swear_words[i]);           
    var exit_num = old_msg.indexOf(spec_code[0]);
    var away_num = old_msg.indexOf(spec_code[1]);
    
    var spec_switch = 0;
    if (exit_num === 0 || away_num === 0) {
      spec_switch = 1;
    }
    
    var edi_msg = "";
    var par_msg = "";
    var new_msg = "";
    
    if (index_num >= 0) {
      edi_msg = old_msg_reg.substr(old_msg.indexOf(swear_words[i]), swear_words[i].length);
      par_msg = edi_msg.split("").join(swear_code[spec_switch]);
      new_msg = old_msg_reg.replace(new RegExp(swear_words[i], "gi"), par_msg);
      document.getElementById("message").value = new_msg;
    }
    else {
      var words = old_msg.split(" ");
      var letter_ray = old_msg.split(" ");
      for (var j = 0; j < words.length; j++) {
        letter_ray[j] = unique_char(words[j]);
      }
      for (var k = 0; k < letter_ray.length; k++) {
        if (letter_ray[k] === swear_words[i]) {
          edi_msg = old_msg_reg.substr(old_msg.indexOf(words[k]), words[k].length);
          par_msg = edi_msg.split("").join(swear_code[exit_switch]);
          new_msg = old_msg_reg.replace(new RegExp(words[k], "gi"), par_msg);
          document.getElementById("message").value = new_msg;
        }
      }
    }
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = "";
    var old_msg_reg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value.toLowerCase();
      old_msg_reg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value.toLowerCase();
      old_msg_reg = document.getElementsByTagName("textarea")[1].value;
    }
    var edi_msg = "";
    var par_msg = "";
    var new_msg = "";
    var index_num = old_msg.indexOf(swear_words[i]);
    if (index_num >= 0) {
      edi_msg = old_msg_reg.substr(old_msg.indexOf(swear_words[i]), swear_words[i].length);
      par_msg = edi_msg.split("").join(swear_code[0]);
      new_msg = old_msg_reg.replace(new RegExp(swear_words[i], "gi"), par_msg);
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = new_msg;
      }
      else {
        document.getElementsByTagName("textarea")[1].value = new_msg;
      }
    }
  }
}
/////////////////////
