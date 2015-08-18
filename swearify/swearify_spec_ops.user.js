// ==UserScript==
// @name        Swearify SpecOps 8.16
// @description Takes care of IP's temporary word filtering.
// @namespace   different_namespace
// @include     http://aimgames.forummotion.com/*                     
// @version     1.3.9
// @grant       none
// @icon        data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKUUExURf/////m5v93d/+oqP/Bwf+Dg/+cnP9FRf9eXv9RUf9qav/NzeLi4tjY2PHx8fz8/P+Pj8XExMPBwdGvr/KuruyOjtmmpuXl5fLy8snJycLCwsrDw+1ra/+1tfvk5OasrMi2ts29vfj4+P6QkNHR0elzc+np6cq9vcvHx++BgcbGxsi5udGwsOmTk/9GRtzHx8PDw8LBwcm5ufPz8+CXl8XFxdm4uPahoc7OztS6utvb2/39/dfX1/7+/vt7e9zR0dDQ0O/v78TExOvr6+ibm9/f3/7l5fx7e9SsrNLLy/54eP3BwdiUlM21tf94eNqpqcS+vtPT09apqcPAwOTk5MjIyNzc3My2tt7T0+v3++P0+N2mq+BPVOX1+epMT+qoq8q0tc3Nzc7Jyca7u93S0hbF9Aa/8QK+8AO56gK66wK97z++4LrCxMHCwsDCwsDCw7zDxb7DxcnW2dn0+9v0++L2++b3/PL7/QDK/wDL/wDH/QDJ/5LD0b7Cw7vCxLfCxV260wGx4QOv3QOt2wep1hey3ADF+gDG/ADG+x3F87XCxk662ACz5ACw4ACv3wCu3QCt3ACx4gCy4wC36YG/z319fScnJzMzM7y8vLzCxDLF7QDG/QDF+wDI/wCp1wCs2gCs2wCr2gCv3rTBxF1fYBMUFBQUFKenp7/Cw7PBxSi85QC67QC56wC87wC/8wCx4QCz4wCy4rzBwy8vLzk5Oa2trbrBwySz2gC15gCu3gC05QGr2r3Bw7/CwiOu0wCt3QCp2BGt2LnBwxas1QCm1ACo1ky206O+xgCq2ACn1QDC9wDE+VPD4bfBxJzAyhO04QC+8l/C3ZXAzA6+7wC98QDA9XK70IW+zQe04wC57AC88AC/8k0VJ2YAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVQ4y5WRZ1cTURCGZ+9ucrMbAUVRGBsqomILKhYUG/au2Huv7GIXG3ZjSSKiWDESK4pkwUpUVKwIFuztz3i3wAnhg8c5Z3fnvPPcmbn7AvwrOEIID8DzHOF5XiCCRdBkwQIWQSAWlhJiJWClBIhNtAKVqA7wlFLeIlB2loii3SraGEBFDiiVoBYAi0azCRzPKI5QamcANQHQTrOHYyXQ3yLbhvXUdBOQbMa8/4gGYeERoZp2q4bsWoR9wxtFNm4CdrYKRDVtZqJUEmxsL2256BjE5i1aihJp1To2sk1b/X9oe7KFQKJSuzhEjG3PAD6+A2LHGkDSAfaDOiUgdu7SlQN7t+4OTOzR0xzBsxEW1oH2SmIdsDcn0T59+yE6ko0OtdE/RqvjgBRu4CA9GxxynSFDNdWRnAKpSXUB07hhCZqaNHzEyFGJOjB6jGZvrXFjx0Xqclx01Hg9wfgJmr01QMTESbrqmJw6Jc0AwnR7a3yZOs1okDA9eYYxAWfq9sKs2XPmzpu/YGGaATgWLV5i1HGpbi8sW75i5arVa9JlRVcz1q4z67h+w8ZNm7dA5tbMzG3bd2TIO2Umylm7ZLOu7N6zd9/+A3DQ6XQeOnxEkc1CBpqZctTl9hzLBs/xHNeJkwrmnjp9BoNCPnvufF7eBSd4L+b7Ll1GvHL12vWgslJw42bhrcIiP6jFrhLPbcTcO3fvBQPK/QelqjvwEPIDgcCjx1g/yp541Oz8p/DM5/OVK+Ylg+P5i5de7ysvqKrqfi3L9XqUvSn3eisq3oK/sqrqnSIX1C3LyvsPH3NU1eOGan915ScF5ZAGctbnL/5q/9dvUFzqLvmuoBJCyOk/fv4qLPr95y9qjLbDWeFJXAAAAABJRU5ErkJggg==
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

////////////////////////////////
//////////////////////////////  VERSIONING: X.X.XXr
//////////////////////////////  DO NOT CHANGE
////////////////////////////////

// FOR OUR PORPUSES,
// AND BECAUSE REGEXP IS FUCKING SLOW,
// AND BECAUSE KAFF IS A RETARD,
// EVERYTHING SHOULD BE PRE-DONE

// MAKING REGEX ON THE FLY IS UNRELIABLE. DON'T DO IT.

var swear_noregex = [
  /*
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
"anus", "fu", "sex",
"anal", "disk", "slut",
"comeback", "hoe", "shirt",
"cunt", "stalker", "tofu",
"vagina", "homo", "crap",
"waifu", "douche", "prick",
"motherf", "shiznit", "turd",
"dip", "dik", "sh!t", "sht",
"shi", "stfu", "hore", "testicles",
*/
  "Shockey", "kaff", "raga", "InhumanPwnage",
  "aim", "silver", "txm", "aure", "acv", 
  "wiab", "rafa", "phy", "kaffeinated",
  "blaz", "blaze", "ben", "aim", "admin",
  "skype", "rip", "god", "evo", "rafa",
  "Phantasmagoria", "myself", "sano"
];
///////

///////EXTRA FILTERING CODE
var spec_code = [
  '/exit', '/away', '/abs', '[code]'
];
var swear_code = [
  '[b][/b]', '.'
];
var link_code = [
  'http://', 'www.', 'https://'
];
///////

///////////////////// http://stackoverflow.com/a/6969486

function escape(str) {
  var n_str = str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  return n_str;
}

/////////////////////

///////////////////// http://stackoverflow.com/a/274094

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

String.prototype.regexLastIndexOf = function(regex, startpos) {
    regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
    if(typeof (startpos) == "undefined") {
        startpos = this.length;
    } else if(startpos < 0) {
        startpos = 0;
    }
    var stringToWorkWith = this.substring(0, startpos + 1);
    var lastIndexOf = -1;
    var nextStop = 0;
    while((result = regex.exec(stringToWorkWith)) != null) {
        lastIndexOf = result.index;
        regex.lastIndex = ++nextStop;
    }
    return lastIndexOf;
}

///////////////////// MANAGES THE SWEAR FILTERING
function filter_swears_chat() {
  for (var i = 0; i < swear_noregex.length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var begin_end = '/';
    
    
    var before_char = '([';
    var after_char = ']+)';
    
    var swear_string = "";
    
    for(var x = 0; x < swear_noregex[i].length; x++){
      var low = swear_noregex[i].charAt(x).toLowerCase();
      var up = swear_noregex[i].charAt(x).toUpperCase();
      swear_string += before_char + '' + low + '' + up + after_char;      
    }
    //swear_string += begin_end;
    ///////Now we have our own shit string
    ////ok make it work nigga
    
    swear_regexp = new RegExp(swear_string, "g");
    
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    
    var spec_switch = 0;
    //special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1) {
      spec_switch = 1;
    }
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function filter_swears_bchat() { 
  for (var i = 0; i < swear_noregex.length; i++) {
    var old_msg = document.getElementById("message").value;
    var begin_end = '/';
    
    
    var before_char = '([';
    var after_char = ']+)';
    
    var swear_string = "";
    
    for(var x = 0; x < swear_noregex[i].length; x++){
      var low = swear_noregex[i].charAt(x).toLowerCase();
      var up = swear_noregex[i].charAt(x).toUpperCase();
      swear_string += before_char + '' + low + '' + up + after_char;      
    }
   // swear_string += begin_end;
    ///////Now we have our own shit string
    ////ok make it work nigga
    
    swear_regexp = new RegExp(swear_string, "g");
    //console.log(swear_regexp);
    
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    
    var spec_switch = 0;
    //special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1) {
      spec_switch = 1;
    }
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      
          switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    
    } else {
      new_msg = old_msg;
    }
    document.getElementById("message").value = new_msg;
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_noregex.length; i++) {
    var old_msg = ""; //this may not be necessary i'm not 100% sure
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    // http://stackoverflow.com/a/500459
    var begin_end = '/';
    
    
    var before_char = '([';
    var after_char = ']+)';
    
    var swear_string = "";
    
    for(var x = 0; x < swear_noregex[i].length; x++){
      var low = swear_noregex[i].charAt(x).toLowerCase();
      var up = swear_noregex[i].charAt(x).toUpperCase();
      swear_string += before_char + '' + low + '' + up + after_char;      
    }
   // swear_string += begin_end;
    ///////Now we have our own shit string
    ////ok make it work nigga
    
    swear_regexp = new RegExp(swear_string, "g");
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);    
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_regexp, "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8" + swear_code[0] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      document.getElementsByTagName("textarea")[0].value = new_msg;
    }
    else {
      document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
}
/////////////////////

window.addEventListener('load', function() {/*shit goes down in here*/
  if (is.ie() || is.safari() || is.opera()) {
   alert("This browser is unsupported by Swearify.");
  }
}, false);

$(document).keypress(function(event){
    if (event.which === 13) { /// 13 is enter
      run()
    }
 })

function run() {
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) { /// If we are either in the big chat window or on the main page. Nothing in this if statement will run if we aren't there
    if (window.location.pathname.length <= 2) { /// Figure out which of the two we are in
      filter_swears_chat(); /// These are the functions that run through the text and see what to do
    } else { /// If we're here, that means we are on big chat window
      filter_swears_bchat();
    }
  } else {
    ////////////////////////////////////////    
    var window_chk = 0; /// If we're here that means we are not on either the main screen or big chat window. So we must be posting....
    if (document.getElementsByTagName("textarea")[0] !== undefined || document.getElementsByTagName("textarea")[1] !== undefined) { /// Checks to make sure we are either browsing a topic (1) or on the preview page (0)
      if (document.getElementsByTagName("textarea")[1] !== undefined) { /// Then figures out which one it is
        window_chk = 1;
      }
      filter_swears_post(); /// Posting functions
    }
  }
}
