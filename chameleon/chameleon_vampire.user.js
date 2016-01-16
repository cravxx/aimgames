// ==UserScript==
// @name        Chameleon
// @description Auto color formatting for the chatbox.
// @namespace   how much grease
// @include     http://aimgames.forummotion.com/*
// @version     1.5.3
// @grant       none
// @icon        http://i.imgur.com/g8MwvQd.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o) .map(function (k) {
    return o[k];
  });
}
////// TOOLBOX
function ayyliumLanguage(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

function strangeAyylium(r,g,b)
  {
    return '#' + ayyliumLanguage(r) + ayyliumLanguage(g) + ayyliumLanguage(b);
  }

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//////

//////COLOR
var color_array = []; ///main array what we want gets moved into
var color_style = [ "Normal", "Trippy", "Patriotic", "Warm" ];
////
//
//
var patriotic = [ "#ff0000", "#ffffff", "#0000ff" ];

//needs work//var trippy = [ "#ff3300", "#0033cc", "#00cc00", "#ffcc00", "#cc00cc", "#6600ff", "#00ffff" ];
var warm = [ "#ff3300", "#0033cc", "#00cc00", "#ffcc00", "#cc00cc", "#6600ff", "#00ffff" ];

var normal=[];
var frequency = .3;
for (var i = 0; i < 32; ++i)
{
   var red   = Math.sin(frequency*i + 0) * 127 + 128;
   var green = Math.sin(frequency*i + 2) * 127 + 128;
   var blue  = Math.sin(frequency*i + 4) * 127 + 128;
normal[i] = strangeAyylium(red,green,blue);
}
///////

///////COOKIE SHIT
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}
///////

function returnOption(text){
	var option = document.createElement("option");
	option.text = text;
	option.style.dir = "rtl";
	option.style.paddingRight = "4px";
	return option;
}

function createSelectBox(){
	var new_td = document.createElement("td");
	new_td.id = "Cha";

  	document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].insertBefore(
		new_td, 
		document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].childNodes[0]
  	);

	var gen_location = document.getElementById("Cha");
        select = document.createElement('select');
        select.id = 'selectCha';        
        gen_location.appendChild(select);	

	var sel_location = document.getElementById('selectCha');	
	
	sel_location.addEventListener('change', function() {whatdo(this);}, false);
	for(var num_entries = 0; num_entries < color_style.length; num_entries++){
	   sel_location.appendChild(returnOption(color_style[num_entries]));
	}
}

var counter = 0;

function whatdo(wew){    
    var dunwan = [];
    color_array = []; //clear it
   
   if(wew.value == "Normal"){
    dunwan = normal;
   }else if(wew.value == "Patriotic"){
    dunwan = patriotic;
   }else if(wew.value == "Warm"){
    dunwan = warm;
   }
   
   for (var all = 0; all < dunwan.length; all++) {
        color_array[all] = dunwan[all];
        console.log("kek");
   }
   counter = 0;
}

window.addEventListener('load', function() {
   createSelectBox();
   for (var all = 0; all < normal.length; all++) { ////load normal at first
        color_array[all] = normal[all];
        console.log("only once pls");
   }
   
if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
  if (window.location.pathname.length <= 1) {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', color_array[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == color_array.length) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', color_array[counter], 1);
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('scolor') .value = color_array[counter];
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(color_array[counter]).r + ',' + hexToRgb(color_array[counter]).g + ',' + hexToRgb(color_array[counter]).b + ');';
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .style.color = color_array[counter];
      }
    }, false);
  } else {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', color_array[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == color_array.length) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', color_array[counter], 1);
        console.log(color_array[counter]);
        document.getElementById('scolor') .value = color_array[counter];
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(color_array[counter]).r + ',' + hexToRgb(color_array[counter]).g + ',' + hexToRgb(color_array[counter]).b + ');';
        document.getElementById('message') .style.color = color_array[counter];
      }
    }, false);
  }
}  
}, false);
