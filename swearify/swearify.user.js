// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     3.0.23
// @grant       none
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/my-robot-schlong/swearify/megavars.js
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

//////////////////////////////VERSIONING: X.X.XX
//////////////////////////////DO NOT CHANGE
///////
///
//UTILS
///
//SWEAR
///
//EMOTICON
///
//MAYMAY
///
//GREENTEXT
///
//REDTEXT
///
//LEET
///
//RAINBOW
///
//RANDOM
///
//GRADIENT
///
//JS
///
//JAVA
///
//VBS
///
//CSS
///////UTILS

///////////////////// MANAGES THE SWEAR FILTERING
function filter_swears() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("awc_message").value;
    var old_msg_low = document.getElementById("awc_message").value.toLowerCase();
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    var semi_code = old_msg.indexOf(spec_code[3]);
    var spec_switch = 0;
    // special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1 || semi_code != -1) spec_switch = 1;
    
    if(http_link > 0 || www_link > 0 || https_link > 0) {
      var which = 0;
      if(http_link != -1){
        which = http_link;        
      }else if(www_link != -1){
        which = www_link;  
      }else{
        which = https_link;  
      }
      var before_link = old_msg_low.substr(0, which);
      var link = old_msg_low.substr(which, old_msg_low.length);
      if(before_link.indexOf(swear_words[i]) >= 0)   {
        var edi_msg = old_msg.substr(before_link.indexOf(swear_words[i]), swear_words[i].length);
        var par_msg = edi_msg.split("").join(swear_code[spec_switch]);
        new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);
        document.getElementById("awc_message").value = new_msg;
      }      
    }    
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
        if(old_msg_low.indexOf(swear_words[i]) >= 0)   {
            var edi_msg = old_msg.substr(old_msg_low.indexOf(swear_words[i]), swear_words[i].length);
            var par_msg = edi_msg.split("").join(swear_code[spec_switch]);
            new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);     
            document.getElementById("awc_message").value = new_msg;
        }    	
    }    	   
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = ""; // this may not be necessary i'm not 100% sure
    var old_msg_low = "";
    if (document.getElementsByTagName("textarea")[1] === undefined){
    	old_msg = document.getElementsByTagName("textarea")[0].value;
    	old_msg_low = document.getElementsByTagName("textarea")[0].value.toLowerCase();
    }else{
    	old_msg = document.getElementsByTagName("textarea")[1].value;
    	old_msg_low = document.getElementsByTagName("textarea")[1].value.toLowerCase();
    }
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    if (http_link == -1 && https_link == -1 && www_link == -1){
    	if(old_msg_low.indexOf(swear_words[i]) >= 0)   {
            var edi_msg = old_msg.substr(old_msg_low.indexOf(swear_words[i]), swear_words[i].length);
            var par_msg = edi_msg.split("").join(swear_code[0]);
            new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);     
            if (document.getElementsByTagName("textarea")[1] === undefined){
            	document.getElementsByTagName("textarea")[0].value = new_msg;
            }else{
            	document.getElementsByTagName("textarea")[1].value = new_msg;
            }
        }  
    }   
  }
}
/////////////////////
/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM
function emoticon_() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = document.getElementById("awc_message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], "gi"), img_tag[0] + values(emoticon_1)[i][1] +
        img_tag[1]);
      document.getElementById("awc_message").value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
    var old_msg = document.getElementById("awc_message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], "gi"), img_tag[0] + values(emoticon_2)[i][1] +
                                               img_tag[1]);
      document.getElementById("awc_message").value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
    var old_msg = document.getElementById("awc_message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], "gi"), img_tag[0] + values(emoticon_3)[i][1] +
                                               img_tag[1]);
      document.getElementById("awc_message").value = new_msg;
    }
  }
}

function emoticon_post() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
      0].value;
    else old_msg = document.getElementsByTagName("textarea")[1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], "gi"), img_tag[0] + values(emoticon_1)[i][1] +
        img_tag[1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        new_msg;
      else document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
	    var old_msg = "";
	    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
	      0].value;
	    else old_msg = document.getElementsByTagName("textarea")[1].value;
	    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], "gi"));
	    if (index_num >= 0) {
	      var new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], "gi"), img_tag[0] + values(emoticon_2)[i][1] +
	        img_tag[1]);
	      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
	        new_msg;
	      else document.getElementsByTagName("textarea")[1].value = new_msg;
	    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
	    var old_msg = "";
	    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
	      0].value;
	    else old_msg = document.getElementsByTagName("textarea")[1].value;
	    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], "gi"));
	    if (index_num >= 0) {
	      var new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], "gi"), img_tag[0] + values(emoticon_3)[i][1] +
	        img_tag[1]);
	      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
	        new_msg;
	      else document.getElementsByTagName("textarea")[1].value = new_msg;
	    }
  }
}
/////////////////////
/////////////////////MANAGES THE MAY MAY SYSTEM
function maymay_() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("awc_message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("awc_message").value = new_msg;
    }
  }
}

function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
      0].value;
    else old_msg = document.getElementsByTagName("textarea")[1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        new_msg;
      else document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF GREENTEXT
function greentext_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("awc_message").value = new_msg;
  }
}

function greentext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf(">");
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF REDTEXT
function redtext_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.indexOf("<");
  if (old_msg.length >= 1)
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("awc_message").value = new_msg;
    }
}

function redtext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf("<");
    if (msg_ray[i].length >= 1)
      if (index_num === old_msg.length - 1) {
        msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
        if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
          msg_ray.join('<br />');
        else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
  }
}
/////////////////////
/////////////////////LEET TEXT
function leet_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    new_msg = new_msg.replace(/b/gi, '|3');
    new_msg = new_msg.replace(/c/gi, '(');
    new_msg = new_msg.replace(/d/gi, '|)');
    new_msg = new_msg.replace(/e/gi, '3');
    new_msg = new_msg.replace(/f/gi, '|=');
    new_msg = new_msg.replace(/g/gi, '9');
    new_msg = new_msg.replace(/h/gi, '|-|');
    new_msg = new_msg.replace(/i/gi, '1');
    new_msg = new_msg.replace(/j/gi, '_|');
    new_msg = new_msg.replace(/k/gi, '|<');
    new_msg = new_msg.replace(/l/gi, '1');
    new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
    new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
    new_msg = new_msg.replace(/o/gi, '0');
    new_msg = new_msg.replace(/p/gi, '|>');
    new_msg = new_msg.replace(/q/gi, '().');
    new_msg = new_msg.replace(/r/gi, '|2');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    new_msg = new_msg.replace(/u/gi, '|_|');
    new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
    new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
    new_msg = new_msg.replace(/x/gi, '><');
    new_msg = new_msg.replace(/y/gi, '`/');
    new_msg = new_msg.replace(/z/gi, '2');
    document.getElementById("awc_message").value = new_msg;
  }
}

function leet_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      new_msg = new_msg.replace(/b/gi, '|3');
      new_msg = new_msg.replace(/c/gi, '(');
      new_msg = new_msg.replace(/d/gi, '|)');
      new_msg = new_msg.replace(/e/gi, '3');
      new_msg = new_msg.replace(/f/gi, '|=');
      new_msg = new_msg.replace(/g/gi, '9');
      new_msg = new_msg.replace(/h/gi, '|-|');
      new_msg = new_msg.replace(/i/gi, '1');
      new_msg = new_msg.replace(/j/gi, '_|');
      new_msg = new_msg.replace(/k/gi, '|<');
      new_msg = new_msg.replace(/l/gi, '1');
      new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
      new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
      new_msg = new_msg.replace(/o/gi, '0');
      new_msg = new_msg.replace(/p/gi, '|>');
      new_msg = new_msg.replace(/q/gi, '().');
      new_msg = new_msg.replace(/r/gi, '|2');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      new_msg = new_msg.replace(/u/gi, '|_|');
      new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
      new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
      new_msg = new_msg.replace(/x/gi, '><');
      new_msg = new_msg.replace(/y/gi, '`/');
      new_msg = new_msg.replace(/z/gi, '2');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BALLOON TEXT
function balloon_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/balloon /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/balloon /i, '');
    new_msg = new_msg.replace(/a/gi, 'ⓐ');
    new_msg = new_msg.replace(/b/gi, 'ⓑ');
    new_msg = new_msg.replace(/c/gi, 'ⓒ');
    new_msg = new_msg.replace(/d/gi, 'ⓓ');
    new_msg = new_msg.replace(/e/gi, 'ⓔ');
    new_msg = new_msg.replace(/f/gi, 'ⓕ');
    new_msg = new_msg.replace(/g/gi, 'ⓖ');
    new_msg = new_msg.replace(/h/gi, 'ⓗ');
    new_msg = new_msg.replace(/i/gi, 'ⓘ');
    new_msg = new_msg.replace(/j/gi, 'ⓙ');
    new_msg = new_msg.replace(/k/gi, 'ⓚ');
    new_msg = new_msg.replace(/l/gi, 'ⓛ');
    new_msg = new_msg.replace(/m/gi, 'ⓜ');
    new_msg = new_msg.replace(/n/gi, 'ⓝ');
    new_msg = new_msg.replace(/o/gi, 'ⓞ');
    new_msg = new_msg.replace(/p/gi, 'ⓟ');
    new_msg = new_msg.replace(/q/gi, 'ⓠ');
    new_msg = new_msg.replace(/r/gi, 'ⓡ');
    new_msg = new_msg.replace(/s/gi, 'ⓢ');
    new_msg = new_msg.replace(/t/gi, 'ⓣ');
    new_msg = new_msg.replace(/u/gi, 'ⓤ');
    new_msg = new_msg.replace(/v/gi, 'ⓥ');
    new_msg = new_msg.replace(/w/gi, 'ⓦ');
    new_msg = new_msg.replace(/x/gi, 'ⓧ');
    new_msg = new_msg.replace(/y/gi, 'ⓨ');
    new_msg = new_msg.replace(/z/gi, 'ⓩ');
    new_msg = new_msg.replace(/1/gi, '⓵');
    new_msg = new_msg.replace(/2/gi, '⓶');
    new_msg = new_msg.replace(/3/gi, '⓷');
    new_msg = new_msg.replace(/4/gi, '⓸');
    new_msg = new_msg.replace(/5/gi, '⓹');
    new_msg = new_msg.replace(/6/gi, '⓺');
    new_msg = new_msg.replace(/7/gi, '⓻');
    new_msg = new_msg.replace(/8/gi, '⓼');
    new_msg = new_msg.replace(/9/gi, '⓽');
    new_msg = new_msg.replace(/0/gi, '⓪');
    document.getElementById("awc_message").value = new_msg;
  }
}

function balloon_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/balloon /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/balloon /i, '');
      new_msg = new_msg.replace(/a/gi, 'ⓐ');
      new_msg = new_msg.replace(/b/gi, 'ⓑ');
      new_msg = new_msg.replace(/c/gi, 'ⓒ');
      new_msg = new_msg.replace(/d/gi, 'ⓓ');
      new_msg = new_msg.replace(/e/gi, 'ⓔ');
      new_msg = new_msg.replace(/f/gi, 'ⓕ');
      new_msg = new_msg.replace(/g/gi, 'ⓖ');
      new_msg = new_msg.replace(/h/gi, 'ⓗ');
      new_msg = new_msg.replace(/i/gi, 'ⓘ');
      new_msg = new_msg.replace(/j/gi, 'ⓙ');
      new_msg = new_msg.replace(/k/gi, 'ⓚ');
      new_msg = new_msg.replace(/l/gi, 'ⓛ');
      new_msg = new_msg.replace(/m/gi, 'ⓜ');
      new_msg = new_msg.replace(/n/gi, 'ⓝ');
      new_msg = new_msg.replace(/o/gi, 'ⓞ');
      new_msg = new_msg.replace(/p/gi, 'ⓟ');
      new_msg = new_msg.replace(/q/gi, 'ⓠ');
      new_msg = new_msg.replace(/r/gi, 'ⓡ');
      new_msg = new_msg.replace(/s/gi, 'ⓢ');
      new_msg = new_msg.replace(/t/gi, 'ⓣ');
      new_msg = new_msg.replace(/u/gi, 'ⓤ');
      new_msg = new_msg.replace(/v/gi, 'ⓥ');
      new_msg = new_msg.replace(/w/gi, 'ⓦ');
      new_msg = new_msg.replace(/x/gi, 'ⓧ');
      new_msg = new_msg.replace(/y/gi, 'ⓨ');
      new_msg = new_msg.replace(/z/gi, 'ⓩ');
      new_msg = new_msg.replace(/1/gi, '⓵');
      new_msg = new_msg.replace(/2/gi, '⓶');
      new_msg = new_msg.replace(/3/gi, '⓷');
      new_msg = new_msg.replace(/4/gi, '⓸');
      new_msg = new_msg.replace(/5/gi, '⓹');
      new_msg = new_msg.replace(/6/gi, '⓺');
      new_msg = new_msg.replace(/7/gi, '⓻');
      new_msg = new_msg.replace(/8/gi, '⓼');
      new_msg = new_msg.replace(/9/gi, '⓽');
      new_msg = new_msg.replace(/0/gi, '⓪');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BRAILLE TEXT
function braille_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/braille /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/braille /i, '');
    new_msg = new_msg.replace(/a/gi, '⠁');
    new_msg = new_msg.replace(/b/gi, '⠃');
    new_msg = new_msg.replace(/c/gi, '⠉');
    new_msg = new_msg.replace(/d/gi, '⠙');
    new_msg = new_msg.replace(/e/gi, '⠑');
    new_msg = new_msg.replace(/f/gi, '⠋');
    new_msg = new_msg.replace(/g/gi, '⠛');
    new_msg = new_msg.replace(/h/gi, '⠓');
    new_msg = new_msg.replace(/i/gi, '⠊');
    new_msg = new_msg.replace(/j/gi, '⠚');
    new_msg = new_msg.replace(/k/gi, '⠅');
    new_msg = new_msg.replace(/l/gi, '⠇');
    new_msg = new_msg.replace(/m/gi, '⠍');
    new_msg = new_msg.replace(/n/gi, '⠝');
    new_msg = new_msg.replace(/o/gi, '⠕');
    new_msg = new_msg.replace(/p/gi, '⠏');
    new_msg = new_msg.replace(/q/gi, '⠟');
    new_msg = new_msg.replace(/r/gi, '⠗');
    new_msg = new_msg.replace(/s/gi, '⠎');
    new_msg = new_msg.replace(/t/gi, '⠞');
    new_msg = new_msg.replace(/u/gi, '⠥');
    new_msg = new_msg.replace(/v/gi, '⠧');
    new_msg = new_msg.replace(/w/gi, '⠺');
    new_msg = new_msg.replace(/x/gi, '⠭');
    new_msg = new_msg.replace(/y/gi, '⠽');
    new_msg = new_msg.replace(/z/gi, '⠵');
    new_msg = new_msg.replace(/1/gi, '⠼⠁');
    new_msg = new_msg.replace(/2/gi, '⠼⠃');
    new_msg = new_msg.replace(/3/gi, '⠼⠉');
    new_msg = new_msg.replace(/4/gi, '⠼⠙');
    new_msg = new_msg.replace(/5/gi, '⠼⠑');
    new_msg = new_msg.replace(/6/gi, '⠼⠋');
    new_msg = new_msg.replace(/7/gi, '⠼⠛');
    new_msg = new_msg.replace(/8/gi, '⠼⠓');
    new_msg = new_msg.replace(/9/gi, '⠼⠊');
    new_msg = new_msg.replace(/0/gi, '⠼⠚');
    document.getElementById("awc_message").value = new_msg;
  }
}

function braille_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/braille /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/braille /i, '');
      new_msg = new_msg.replace(/a/gi, '⠁');
      new_msg = new_msg.replace(/b/gi, '⠃');
      new_msg = new_msg.replace(/c/gi, '⠉');
      new_msg = new_msg.replace(/d/gi, '⠙');
      new_msg = new_msg.replace(/e/gi, '⠑');
      new_msg = new_msg.replace(/f/gi, '⠋');
      new_msg = new_msg.replace(/g/gi, '⠛');
      new_msg = new_msg.replace(/h/gi, '⠓');
      new_msg = new_msg.replace(/i/gi, '⠊');
      new_msg = new_msg.replace(/j/gi, '⠚');
      new_msg = new_msg.replace(/k/gi, '⠅');
      new_msg = new_msg.replace(/l/gi, '⠇');
      new_msg = new_msg.replace(/m/gi, '⠍');
      new_msg = new_msg.replace(/n/gi, '⠝');
      new_msg = new_msg.replace(/o/gi, '⠕');
      new_msg = new_msg.replace(/p/gi, '⠏');
      new_msg = new_msg.replace(/q/gi, '⠟');
      new_msg = new_msg.replace(/r/gi, '⠗');
      new_msg = new_msg.replace(/s/gi, '⠎');
      new_msg = new_msg.replace(/t/gi, '⠞');
      new_msg = new_msg.replace(/u/gi, '⠥');
      new_msg = new_msg.replace(/v/gi, '⠧');
      new_msg = new_msg.replace(/w/gi, '⠺');
      new_msg = new_msg.replace(/x/gi, '⠭');
      new_msg = new_msg.replace(/y/gi, '⠽');
      new_msg = new_msg.replace(/z/gi, '⠵');
      new_msg = new_msg.replace(/1/gi, '⠼⠁');
      new_msg = new_msg.replace(/2/gi, '⠼⠃');
      new_msg = new_msg.replace(/3/gi, '⠼⠉');
      new_msg = new_msg.replace(/4/gi, '⠼⠙');
      new_msg = new_msg.replace(/5/gi, '⠼⠑');
      new_msg = new_msg.replace(/6/gi, '⠼⠋');
      new_msg = new_msg.replace(/7/gi, '⠼⠛');
      new_msg = new_msg.replace(/8/gi, '⠼⠓');
      new_msg = new_msg.replace(/9/gi, '⠼⠊');
      new_msg = new_msg.replace(/0/gi, '⠼⠚');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////GREEKIFIED TEXT
function greek_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/greek /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/greek /i, '');
    new_msg = new_msg.replace(/a/gi, 'α');
    new_msg = new_msg.replace(/b/gi, 'β');
    new_msg = new_msg.replace(/c/gi, 'ς');
    new_msg = new_msg.replace(/d/gi, 'δ');
    new_msg = new_msg.replace(/e/gi, 'ε');
    new_msg = new_msg.replace(/f/gi, 'ƒ');
    new_msg = new_msg.replace(/g/gi, 'g');
    new_msg = new_msg.replace(/h/gi, 'н');
    new_msg = new_msg.replace(/i/gi, 'ι');
    new_msg = new_msg.replace(/j/gi, 'j');
    new_msg = new_msg.replace(/k/gi, 'κ');
    new_msg = new_msg.replace(/l/gi, 'ℓ');
    new_msg = new_msg.replace(/m/gi, 'м');
    new_msg = new_msg.replace(/n/gi, 'η');
    new_msg = new_msg.replace(/o/gi, 'ο');
    new_msg = new_msg.replace(/p/gi, 'ρ');
    new_msg = new_msg.replace(/q/gi, 'φ');
    new_msg = new_msg.replace(/r/gi, 'я');
    new_msg = new_msg.replace(/s/gi, 's');
    new_msg = new_msg.replace(/t/gi, 'τ');
    new_msg = new_msg.replace(/u/gi, 'μ');
    new_msg = new_msg.replace(/v/gi, 'v');
    new_msg = new_msg.replace(/w/gi, 'ω');
    new_msg = new_msg.replace(/x/gi, 'χ');
    new_msg = new_msg.replace(/y/gi, 'λ');
    new_msg = new_msg.replace(/z/gi, 'ζ');
    document.getElementById("awc_message").value = new_msg;
  }
}

function greek_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/greek /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/greek /i, '');
      new_msg = new_msg.replace(/a/gi, 'α');
      new_msg = new_msg.replace(/b/gi, 'β');
      new_msg = new_msg.replace(/c/gi, 'ς');
      new_msg = new_msg.replace(/d/gi, 'δ');
      new_msg = new_msg.replace(/e/gi, 'ε');
      new_msg = new_msg.replace(/f/gi, 'ƒ');
      new_msg = new_msg.replace(/g/gi, 'g');
      new_msg = new_msg.replace(/h/gi, 'н');
      new_msg = new_msg.replace(/i/gi, 'ι');
      new_msg = new_msg.replace(/j/gi, 'j');
      new_msg = new_msg.replace(/k/gi, 'κ');
      new_msg = new_msg.replace(/l/gi, 'ℓ');
      new_msg = new_msg.replace(/m/gi, 'м');
      new_msg = new_msg.replace(/n/gi, 'η');
      new_msg = new_msg.replace(/o/gi, 'ο');
      new_msg = new_msg.replace(/p/gi, 'ρ');
      new_msg = new_msg.replace(/q/gi, 'φ');
      new_msg = new_msg.replace(/r/gi, 'я');
      new_msg = new_msg.replace(/s/gi, 's');
      new_msg = new_msg.replace(/t/gi, 'τ');
      new_msg = new_msg.replace(/u/gi, 'μ');
      new_msg = new_msg.replace(/v/gi, 'v');
      new_msg = new_msg.replace(/w/gi, 'ω');
      new_msg = new_msg.replace(/x/gi, 'χ');
      new_msg = new_msg.replace(/y/gi, 'λ');
      new_msg = new_msg.replace(/z/gi, 'ζ');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////MORSE CODE
function morse_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/mc /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/mc /i, '');
    new_msg = new_msg.replace(/a/gi, '.-//');
    new_msg = new_msg.replace(/b/gi, '-...//');
    new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//');
    new_msg = new_msg.replace(/d/gi, '-..//');
    new_msg = new_msg.replace(/e/gi, './/');
    new_msg = new_msg.replace(/f/gi, '..-.//');
    new_msg = new_msg.replace(/g/gi, '--.//');
    new_msg = new_msg.replace(/h/gi, '....//');
    new_msg = new_msg.replace(/i/gi, '..//');
    new_msg = new_msg.replace(/j/gi, '.---//');
    new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//');
    new_msg = new_msg.replace(/l/gi, '.-..//');
    new_msg = new_msg.replace(/m/gi, '--//');
    new_msg = new_msg.replace(/n/gi, '-.//');
    new_msg = new_msg.replace(/o/gi, '---//');
    new_msg = new_msg.replace(/p/gi, '.--.//');
    new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//');
    new_msg = new_msg.replace(/r/gi, '.-.//');
    new_msg = new_msg.replace(/s/gi, '...//');
    new_msg = new_msg.replace(/t/gi, '-//');
    new_msg = new_msg.replace(/u/gi, '..-//');
    new_msg = new_msg.replace(/v/gi, '...-//');
    new_msg = new_msg.replace(/w/gi, '.--//');
    new_msg = new_msg.replace(/x/gi, '-..-//');
    new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//');
    new_msg = new_msg.replace(/z/gi, '--..////');
    document.getElementById("awc_message").value = new_msg;
  }
}

function morse_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/mc /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/mc /i, '');
      new_msg = new_msg.replace(/a/gi, '.-//');
      new_msg = new_msg.replace(/b/gi, '-...//');
      new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/d/gi, '-..//');
      new_msg = new_msg.replace(/e/gi, './/');
      new_msg = new_msg.replace(/f/gi, '..-.//');
      new_msg = new_msg.replace(/g/gi, '--.//');
      new_msg = new_msg.replace(/h/gi, '....//');
      new_msg = new_msg.replace(/i/gi, '..//');
      new_msg = new_msg.replace(/j/gi, '.---//');
      new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/l/gi, '.-..//');
      new_msg = new_msg.replace(/m/gi, '--//');
      new_msg = new_msg.replace(/n/gi, '-.//');
      new_msg = new_msg.replace(/o/gi, '---//');
      new_msg = new_msg.replace(/p/gi, '.--.//');
      new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/r/gi, '.-.//');
      new_msg = new_msg.replace(/s/gi, '...//');
      new_msg = new_msg.replace(/t/gi, '-//');
      new_msg = new_msg.replace(/u/gi, '..-//');
      new_msg = new_msg.replace(/v/gi, '...-//');
      new_msg = new_msg.replace(/w/gi, '.--//');
      new_msg = new_msg.replace(/x/gi, '-..-//');
      new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/z/gi, '--..////');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////

////////////////////// SEKRIT CHAT M0D3

Math.irandom = new Function('min', 'max', 'return Math.floor(Math.random() * (max - min + 1)) + min;')

function sekrit_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/s /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/s /i, '');
    try {
      for (i = 0; i < new_msg.match(/\./gi).length; i++)
        if (Math.random() > 0.9)
          new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
      new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
    } catch(e) { /* there are no dots in our message */ }
    for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], "gi"), values(replacements)[i]);
    document.getElementById("awc_message").value = new_msg;
  }
}

function sekrit_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/s /i);
    if (index_num === 0) {
      try {
        for (i = 0; i < new_msg.match(/\./gi).length; i++)
          if (Math.random() > 0.9)
            new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
        new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
      } catch(e) { /* there are no dots in our message */ }
      for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], "gi"), values(replacements)[i]);
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}

///////////////////// MANAGES THE RAINBOW TEXT SYSTEM
function rainbow_() {
  var old_msg = document.getElementById("awc_message").value;
  new_msg = rainbowText(old_msg);
  document.getElementById("awc_message").value = new_msg;
}

function inject_rainbow() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "rainbow_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area" title="Rainbow" class="fontbutton" style="font-size: 14px;">Rb</label>';
  var what = document.getElementById("click_area");
  var whot = document.getElementById("format-rainbow");
  if (getCookie('CB_rainbow') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_rainbow', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_rainbow', '0', 1);
    }
  });
}

function rainbow_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
/////////////////////RANDOM CHARACTER COLOR
function random_() {
  var old_msg = document.getElementById("awc_message").value;
  new_msg = randomText(old_msg);
  document.getElementById("awc_message").value = new_msg;
}

function inject_random() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "random_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" class="fontbutton" style="font-size: 14px;">Rn</label>';
  var what = document.getElementById("click_area_random");
  var whot = document.getElementById("format-random");
  if (getCookie('CB_random') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_random', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_random', '0', 1);
    }
  });
}

function random_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
////////////////////GRADIENT MSG COLOR
function gradient_() {
  var old_msg = document.getElementById("awc_message").value;
  var new_msg = gradientText(old_msg);
  document.getElementById("awc_message").value = new_msg;
}

function inject_gradient() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "gradient_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="gradient" id="format-gradient" class="format-message" type="checkbox"><label id="click_area_gradient" title="Gradient" class="fontbutton" style="font-size: 14px;">Gd</label>';
  var what = document.getElementById("click_area_gradient");
  var whot = document.getElementById("format-gradient");
  if (getCookie('CB_gradient') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_gradient', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_gradient', '0', 1);
    }
  });
}

function gradient_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVASCRIPT SYNTAX
function js_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById("awc_message").value = new_msg;
  }
}

function js_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/js /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/js /i, '');
      msg_ray[i] = jsText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVA SYNTAX
function java_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById("awc_message").value = new_msg;
  }
}

function java_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/java /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/java /i, '');
      msg_ray[i] = javaText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////VBSCRIPT SYNTAX
function vbs_() {
  var old_msg = document.getElementById("awc_message").value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById("awc_message").value = new_msg;
  }
}

function vbs_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/vbs /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/vbs /i, '');
      msg_ray[i] = vbsText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
/////////////////////MANAGES THE EDITING OF CSS
function edit_css() {
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[7].style.cssText = cssMsg;
  // / CSS for label that says "Message:" .. +1 for every new button
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[7].innerHTML = "Message:";
  // / Edits innerHTML so theres no space between Message and the colon .. +1
  // for every new button
  document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("submit_button").value = "SEND";
  // / CSS for Send button
  document.getElementById("chatbox_members").style.cssText = cssLine;
  // / CSS for the line along the members and chatbox
  document.getElementById("chatbox").style.cssText = cssChat;
  // / CSS to eliminate chat glitching and shift over the chat messages a bit
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[11].innerHTML = "";
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[11].style.width = "0px";
  // / CSS for removing a spacer; removing node diddnt work well so im just
  // making it nonvisible. +1 for every new button
  document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  // // Move over the title "Chatbox" a bit
}
/////////////////////
/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW
function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp("_smilie", "gi"), smilie_code);
  change_this = change_this.replace(new RegExp("_title", "gi"), smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
  change_this = change_this.replace(new RegExp("_link", "gi"), smilie_url);
  return change_this;
}

function inject_smilie(i) {
  var get_place = document.getElementsByTagName("table")[2];
  if (get_place.innerHTML == "") {
    var the_body = document.createElement("tbody");
    get_place.appendChild(the_body);
    get_place.getElementsByTagName("tbody")[0].innerHTML = td_array;
    var counter = 0;
    var coconut = 0;
    if(i == 1){
    	for (var x = 0; x < Object.keys(emoticon_1).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_1)[x][0] + quote, values(emoticon_1)[x][1], values(emoticon_1)[x][2]);
    	      counter++;
    	    }
    }else if(i == 2){
    	for (var x = 0; x < Object.keys(emoticon_2).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_2)[x][0] + quote, values(emoticon_2)[x][1], values(emoticon_2)[x][2]);
    	      counter++;
    	    }
    }else if(i == 3){
    	for (var x = 0; x < Object.keys(emoticon_3).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_3)[x][0] + quote, values(emoticon_3)[x][1], values(emoticon_3)[x][2]);
    	      counter++;
    	    }
    }
  }
}
/////////////////////
/////////////////////FIX POST PAGE CSS
function post_page_editor() {
  var clear = "";
  var hide = "display:none;";
  if (getCookie('post_condition') == '1') {
    post_button_num = 1;
    document.getElementById("text_edit").style.cssText = hide;
    document.getElementById("html_edit").style.cssText = clear;
  } else {
    post_button_num = 0;
    document.getElementById("text_edit").style.cssText = clear;
    document.getElementById("html_edit").style.cssText = hide;
  }
  document.getElementById("text_editor_cmd_switchmode").addEventListener("click", function () {
    // console.log("it changed" + post_button_num);
    if (post_button_num == 0) {
      setCookie('post_condition', '1', 1);
      post_button_num = 1;
      document.getElementById("text_edit").style.cssText = hide;
      document.getElementById("html_edit").style.cssText = clear;
    } else if (post_button_num == 1) {
      setCookie('post_condition', '0', 1);
      post_button_num = 0;
      document.getElementById("text_edit").style.cssText = clear;
      document.getElementById("html_edit").style.cssText = hide;
    }
  });
}
/////////////////////
/////////////////////RUNS SCRIPT
window.addEventListener('load', function () { /* shit goes down in here */
  if (is.ie() || is.safari() || is.opera()) alert("This browser is unsupported by Swearify.");
  else {
    avacwebChat();
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=1&mode=smilies") inject_smilie(1);
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=2&mode=smilies") inject_smilie(2);
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=3&mode=smilies") inject_smilie(3);
    if (window.location.href === "http://aimgames.forummotion.com/chatbox/index.forum?page=front&" || window.location
      .href === "http://aimgames.forummotion.com/chatbox/index.forum" || window.location.href ===
      "http://aimgames.forummotion.com/chatbox/index.forum?archives=1" || window.location.href ===
      "http://aimgames.forummotion.com/chatbox/index.forum?archives") {
      inject_rainbow();
      inject_random();
      inject_gradient();
      edit_css();
      $(document).on("keydown", function (e) {
        if (e.which === 13 || e.which === 45) run_();
      });
    } else {
      if (window.location.href === "http://aimgames.forummotion.com/post") post_page_editor();
      if (typeof document.getElementsByTagName("textarea")[1] === 'undefined') { // //PREVIEW
        // PAGE
        loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
        refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
      } else {
        loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1];
        cssTd = "padding-top:5px;";
        var new_td = document.createElement("td");
        loc.appendChild(new_td).style.cssText = cssTd;
        refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName(
          "td")[0];
      }
      var element = document.createElement("label");
      refined_loc.appendChild(element).style.cssText = cssLabel;
      setInterval(function () {
        var area = document.getElementsByTagName("textarea")[0]; // //this
        // is
        // preview
        // window
        // shit
        if (typeof document.getElementsByTagName("textarea")[1] === 'object') area.value = document.getElementsByTagName(
          "textarea")[1].value;
        if (typeof area !== 'undefined') Countable.once(area, function (counter) {
          if (loc.getElementsByTagName("label")[0].innerHTML != values(counter)[4] + " characters") loc.getElementsByTagName(
            "label")[0].innerHTML = values(counter)[4] + " characters";
          if (values(counter)[4] > 63500) element.style.cssText += "color:red;";
          else if (values(counter)[4] < 63500) element.style.cssText = cssLabel;
        });
      }, 3000);
      // ////////
      $(document).on("keydown", function (e) {
        if (e.which === 13) run_post();
      });
    }
  }
}, false);

function inject_css(css) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('style');
    gstyle.type = 'text/css';
    gstyle.innerHTML = css;
    head.appendChild(gstyle);
}

function inject_css_url(url) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('link');
    gstyle.rel = 'stylesheet';
    gstyle.type = 'text/css';
    gstyle.href = url;
    head.appendChild(gstyle);
}

function inject_js(megaid, megastring) {
	var scr = document.createElement('script');
	scr.type = "text/javascript";
	scr.id = megaid;
	scr.innerHTML = megastring;
	document.getElementsByTagName('head')[0].appendChild(scr);
	//document.body.appendChild(scr);
}

function inject_js_url(megaid, url) {
	var scr = document.createElement('script');
	scr.type = "text/javascript";
	scr.id = megaid;
	scr.src = url;
	document.getElementsByTagName('head')[0].appendChild(scr);
	//document.body.appendChild(scr);
}

//  Copyright © 2015 Avacweb. All Rights Reserved.
function avacwebChat() {
	inject_css_url("https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/megachat.css");
	inject_js_url("achat_script", "https://rawgit.com/HulaSamsquanch/aimgames/my-robot-schlong/swearify/megavars.js");
	inject_js_url("achat_script", "http://code.jquery.com/jquery-2.1.4.min.js");
	inject_js_url("achat_script", "https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/megachat.js");
	// hide the existing chatbox
	document.getElementsByClassName("forumline")[document.getElementsByClassName("forumline").length-1].hidden = true;
}

function run_() {
  sekrit_();
  morse_();
  greek_();
  leet_();
  balloon_();
  braille_();
  if (getCookie('CB_rainbow') !== '1' && getCookie('CB_random') !== '1' && getCookie('CB_gradient') !== '1') {
    filter_swears();
    emoticon_();
    maymay_();
  }
  greentext_();
  redtext_();
  if (getCookie('CB_rainbow') === '1') rainbow_();
  if (getCookie('CB_random') === '1') random_();
  if (getCookie('CB_gradient') === '1') gradient_();
  js_();
  vbs_();
  java_();
}

function run_post() {
  sekrit_post();
  morse_post();
  greek_post();
  balloon_post();
  braille_post();
  leet_post();
  filter_swears_post();
  emoticon_post();
  maymay_post();
  greentext_post();
  redtext_post();
  rainbow_post();
  random_post();
  gradient_post();
  js_post();
  vbs_post();
  java_post();
}
/////////////////////
