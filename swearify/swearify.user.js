// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     1.6.1
// @grant       none
// @icon        http://i60.tinypic.com/2vl9nr4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/swearify_data.js
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// ==/UserScript==

///////
var spec_code = [
  "/exit", "/away"
];
var swear_code = [
  '[b][/b]', '.'
];
///////

///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = [
  "[color=#789922]",
  "[/color]",
  "[color=#AA0000]"
];
///////

///////FORTICONS
var img_tag = ["[img]", "[/img]"];
///////

///////CSS STYLE STRINGS
var cssChkbox = "font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;";
var cssButton = "font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;";
var cssMsg = "color:white; margin-right:8px; margin-left:5px;";
var cssLine = "color:black;";
var cssChat = "overflow-x: hidden; left:141px;"; /// white-space: nowrap; 
///////

///////CODE FOR EXTRA SMILIE INJECT
var smilie_header_html = "<option value=''>View more Emoticons</option><option value='0'>Smilies 1</option><option value='1'>Swearify</option>";
var td_base = "<td><a href='javascript:insert_chatboxsmilie(_smilie)'><img title='_title' src='_link' alt='_title' border='0'></a></td>";
var td_array = "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";

var quote = '"';

if (document.getElementsByName("categ").length == 1) {
  document.getElementsByName("categ")[0].innerHTML = smilie_header_html; /// add the Swearify selection
}
///////

///////VAR FOR FIXING THE POST PAGE
var post_button_num = 0;
///////

///////CHARCOUNT MERGE
var cssLabel = "color: grey;font-size: 12px;";

var loc = "";
var refined_loc = "";
var cssTd = "";
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

///////////////////// MANAGES THE EMULATION OF GREENTEXT
function greentext_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function greentext_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("message").value = new_msg;
  }
}

function greentext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf(">");
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
/////////////////////

///////////////////// MANAGES THE EMULATION OF REDTEXT
function redtext_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
  if (index_num === 0) {
    var new_msg = color_code[2] + old_msg + color_code[1];
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function redtext_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
  if (index_num === 0) {
    var new_msg = color_code[2] + old_msg + color_code[1];
    document.getElementById("message").value = new_msg;
  }
}

function redtext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf("<");
    if (index_num === 0) {
      msg_ray[i] = color_code[2] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
/////////////////////

/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM

function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k]
  })
} //////////http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key

function emoticon_chat() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    //console.log(values(emoticon)[i][0]);
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var index_num = old_msg.indexOf(values(emoticon)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_bchat() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.indexOf(values(emoticon)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_post() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    var index_num = old_msg.indexOf(values(emoticon)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
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

/////////////////////MANAGES THE MAY MAY SYSTEM
function maymay_chat() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var index_num = old_msg.indexOf(values(maymay)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_bchat() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.indexOf(values(maymay)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    var index_num = old_msg.indexOf(values(maymay)[i][0]);
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
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

/////////////////////MANAGES THE EDITING OF CSS
function edit_css_chat() {
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].style.cssText = cssMsg;
  /// CSS for label that says "Message:"
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].innerHTML = "Message:";
  /// Edits innerHTML so theres no space between Message and the colon
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("submit_button").value = "SEND";
  /// CSS for Send button
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_members").style.cssText = cssLine;
  /// CSS for the line along the members and chatbox

  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").style.cssText = cssChat;
  ///  CSS to eliminate chat glitching and shift over the chat messages a bit 

  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].innerHTML = "";
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].style.width = "0px";
  /// CSS for removing a spacer; removing node diddnt work well so im just making it nonvisible        

  document.getElementById("frame_chatbox").contentWindow.document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  //// Move over the title "Chatbox" a bit
}

function edit_css_bchat() {
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].style.cssText = cssMsg;
  /// CSS for label that says "Message:"
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].innerHTML = "Message:";
  /// Edits innerHTML so theres no space between Message and the colon
  document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("submit_button").value = "SEND";
  /// CSS for Send button
  document.getElementById("chatbox_members").style.cssText = cssLine;
  /// CSS for the line along the members and chatbox

  document.getElementById("chatbox").style.cssText = cssChat;
  ///  CSS to eliminate chat glitching and shift over the chat messages a bit 

  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].innerHTML = "";
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].style.width = "0px";
  /// CSS for removing a spacer; removing node diddnt work well so im just making it nonvisible        

  document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  //// Move over the title "Chatbox" a bit
}
/////////////////////

/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW
function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp("_smilie", "gi"), smilie_code);
  change_this = change_this.replace(new RegExp("_title", "gi"), smilie_code.substr(1,smilie_code.length - 2)); ////could be smilie_text
  change_this = change_this.replace(new RegExp("_link", "gi"), smilie_url);
  return change_this;
}

function inject_smilie() {
  if(window.location.href === "http://aimgames.forummotion.com/post?categ=1&mode=smilies"){
    //window.moveTo(0, 0); 
    //window.resizeTo(screen.width, screen.height);
  }
  var get_place = document.getElementsByTagName("table")[2];
  if (get_place.innerHTML == "") {
    var the_body = document.createElement("tbody");

    get_place.appendChild(the_body);
    get_place.getElementsByTagName("tbody")[0].innerHTML = td_array;

    var counter = 0;
    var coconut = 0;

    for (var x = 0; x < Object.keys(emoticon).length; x++) {
      //console.log(counter + "   " + coconut + "   " + x);
      if (counter == 8) {
        counter = 0;
        coconut++;
        var the_tr = document.createElement("tr");
        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
      }
      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter].innerHTML = the_base(quote + values(emoticon)[x][0] + quote, values(emoticon)[x][1], values(emoticon)[x][2]);
      counter++;
    }
  }
}
/////////////////////

/////////////////////FIX POST PAGE CSS
function post_page_editor() {
  var clear = "";
  var hide = "display:none;";  
  
  if(post_button_num == 0){
    document.getElementById("text_edit").style.cssText = clear;
    document.getElementById("html_edit").style.cssText = hide;
  }else{
    document.getElementById("text_edit").style.cssText = hide;
    document.getElementById("html_edit").style.cssText = clear;
  }
  
  document.getElementById("text_editor_cmd_switchmode").addEventListener("click", function(){
    if(post_button_num == 0){
      post_button_num = 1; 
    }else if(post_button_num == 1){
      post_button_num = 0;
    }
  });
}
/////////////////////

/////////////////////RUNS SCRIPT
window.onload = function() {  
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) { /// If we are either in the big chat window or on the main page. Nothing in this if statement will run if we aren't there
    if (window.location.pathname.length <= 1) { /// Figure out which of the two we are in
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").onkeypress = function (event) { /// If we are here, that means we are on the main page. So we set up a key press for the small chatbox
        var code = (event.keyCode) ? event.keyCode : event.which; /// Gets what key has been pressed
        if (code == 13) { /// 13 is enter
          filter_swears_chat(); /// These are the functions that run through the text and see what to do
          greentext_chat(); ///
          emoticon_chat(); ///       
          maymay_chat(); /// 
          redtext_chat();
        }
      };
      edit_css_chat(); /// This is done even when you aren't pressing keys
    }
    else { /// If we're here, that means we are on big chat window
      document.getElementById("message").onkeypress = function (event) {
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          filter_swears_bchat();
          greentext_bchat();
          emoticon_bchat();
          maymay_bchat();
          redtext_bchat();
        }
      };
      edit_css_bchat();
    }
  }
  else {
    inject_smilie(); ///this has to be done b4
    /////////////////////////
    if (typeof document.getElementsByTagName("textarea")[1] === 'undefined') { ////PREVIEW PAGE
    loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];   
    refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
    }else{ //// QUICK REPLY
      loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1];  
      cssTd = "padding-top:5px;";
      var new_td = document.createElement("td");
      loc.appendChild(new_td).style.cssText = cssTd;
      refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName("td")[0];
    }    
    var element = document.createElement("label");
    refined_loc.appendChild(element).style.cssText = cssLabel;
    setInterval(function () {      
      var area = document.getElementsByTagName("textarea")[0];  ////this is preview window shit  
      if(typeof document.getElementsByTagName("textarea")[1] === 'object'){    ///if were not in preview window, we need to set some variables differently
        area.value = document.getElementsByTagName("textarea")[1].value;
      }  
      if(typeof area !== 'undefined'){    ////dont run this shit if it's undefined yo
        Countable.once(area, function (counter) {
          if(loc.getElementsByTagName("label")[0].innerHTML != values(counter)[4] + " characters"){
            loc.getElementsByTagName("label")[0].innerHTML = values(counter)[4] + " characters";
          }
          if(values(counter)[4] > 63500){ ////i dont really know the limit
            element.style.cssText += "color:red;";
          }else if(values(counter)[4] < 63500){
            element.style.cssText = cssLabel;
          }
        });  
      }
    }, 3000);
    ////////////////////////////////////////    
    var window_chk = 0; /// If we're here that means we are not on either the main screen or big chat window. So we must be posting....
    if (document.getElementsByTagName("textarea")[0] !== undefined || document.getElementsByTagName("textarea")[1] !== undefined) { /// Checks to make sure we are either browsing a topic (1) or on the preview page (0)
      if (document.getElementsByTagName("textarea")[1] !== undefined) { /// Then figures out which one it is
        window_chk = 1;
      }
      document.getElementsByTagName("textarea")[window_chk].onkeypress = function (event) { /// Another keypress 
        var code = (event.keyCode) ? event.keyCode : event.which;
        if (code == 13) {
          filter_swears_post(); /// Posting functions
          greentext_post(); ///            
          emoticon_post(); ///
          maymay_post(); ///
          redtext_post();
        }
      }
      post_page_editor();
    }
  }  
}
