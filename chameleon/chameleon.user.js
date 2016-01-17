// ==UserScript==
// @name        Chameleon
// @description Customizable message coloring for the AIM Chatbox.
// @namespace   samsquanchhunter14@gmail.com
// @include     https://aimgames.forummotion.com/*
// @include     http://aimgames.forummotion.com/*
// @version     4.fine.4.1.frostbiting.1453002991.7
// @grant       none
// @icon        http://i.imgur.com/jCJgorp.gif
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

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
//////

function createRainbow(center, width, f_r, f_g, f_b, phase1, phase2, phase3, cutoff) {
var a= [];
var frequency_r = f_r;
var frequency_g = f_g;
var frequency_b = f_b;
for (var i = 0; i < cutoff; ++i)
{
   var red   = Math.sin(frequency_r*i + phase1) * width + center;
   var green = Math.sin(frequency_g*i + phase2) * width + center;
   var blue  = Math.sin(frequency_b*i + phase3) * width + center;
   a[i] = strangeAyylium(red,green,blue);

}
return a;
}
//////

//////COLOR
var color_array = []; ///main array what we want gets moved into
////
//
//
var color_hex = {
    normal: createRainbow(128,127, 0.3, 0.3, 0.3, 0, 2, 4, 32),
    ///trippy needs work
    trippy: [ "#ff3300", "#0033cc", "#00cc00", "#ffcc00", "#cc00cc", "#6600ff", "#00ffff" ],
    patriotic: [ "#ff0000", "#ffffff", "#0000ff" ],
    warm: [ "#ff3300", "#0033cc", "#00cc00", "#ffcc00", "#cc00cc", "#6600ff", "#00ffff" ],
    light: createRainbow(200,55, 0.3, 0.3, 0.3, 0, 2, 4, 32),
    different: createRainbow(128, 127, 0.1, 0.2, 0.3, 0, 2, 4, 27),
    yellow: createRainbow(128, 127, 0.3, 0.3, 0.46, 1.8, 1.8, 3.18, 22),
    vast: createRainbow(128, 127, 0.24, 0.36, 0.46, 0.9, 1.99, 2.89, 106),
    toxic: createRainbow(128, 127, 0.3, 0.34, 0.3, 2.32, 3.6, 1.8, 22),
    isabelle: createRainbow(128, 127, 1, 1, 1, 3.6, 2.14, 2.21, 19),
    blazing: createRainbow(128, 127, 1, 1, 1, 1.61, 0.43, 2.81, 19),
    pastel: createRainbow(128, 127, 0, 0.3, 0.3, 2.62, 2.23, 1.8, 38),
    fruity: createRainbow(128, 127, 0.29, 0, 0.3, 1.73, 2.01, 3.6, 43),
    minty: createRainbow(128, 127, 0.29, 0, 0.3, 3.6, 2.01, 3.6, 43),
    strobe: createRainbow(128, 127, 0.42, 0, 0, 1.86, 3.6, 3.6, 43),
    lemon: createRainbow(128, 127, 1, 0, 0, 1.86, 1.07, 3.6, 38),
    cotton: createRainbow(128, 127, 0.73, 0, 0, 2.7, 3.03, 1.09, 32),
    peaches: createRainbow(128, 127, 0, 0, 0.35, 2.14, 0, 0, 35),
    honey: createRainbow(128, 127, 0, 0, 0.42, 1.73, 1.86, 1.68, 15)
};
//

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
	new_td.style.paddingRight = "5px";

  	document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].insertBefore(
		new_td, 
		document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].childNodes[0]
  	);

	var gen_location = document.getElementById("Cha");
	
	label = document.createElement('label');
    label.id = 'labelCha';
    gen_location.appendChild(label);

	select = document.createElement('select');
    select.id = 'selectCha';        
    gen_location.appendChild(select);	

	var sel_location = document.getElementById('selectCha');	
	
	sel_location.addEventListener('change', function() {whatdo(this);}, false);
	var keys = [];
    for(var k in color_hex) keys.push(k);    
	for(var num_entries = 0; num_entries < keys.length; num_entries++){
	   sel_location.appendChild(returnOption(capitalizeFirstLetter(keys[num_entries])));
	}
}

var counter = 0;

function whatdo(wew){    
    var dunwan = [];
    color_array = []; //clear it
    counter = 0;
    
    var keys = [];
    for(var k in color_hex) keys.push(k);
    
    for(var t = 0; t < values(color_hex).length; t++) {    
    //console.log(wew.value.toLowerCase() + "   " + keys[t]);
        if(wew.value.toLowerCase() == keys[t]){ 
            dunwan = color_hex[keys[t]];  
        }        
    }
   setCookie('chameleon_color_style', wew.value.toLowerCase(), 1);
   
   for (var all = 0; all < dunwan.length; all++) {
        color_array[all] = dunwan[all];
   } 
   
   document.getElementById("labelCha").innerHTML = dunwan.length;
   
   setCookie('chameleon_counter', counter, 1);
   setCookie('CB_color', color_array[counter], 1);
   document.getElementById('scolor') .value = color_array[counter];
   document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(color_array[counter]).r + ',' + hexToRgb(color_array[counter]).g + ',' + hexToRgb(color_array[counter]).b + ');';
   document.getElementById('message') .style.color = color_array[counter];
}

window.addEventListener('load', function() {
   createSelectBox();
   
   if (getCookie('chameleon_color_style') === "") {
      setCookie('chameleon_color_style', color_hex['normal'], 1);
    } else{
      document.getElementById('selectCha').value = capitalizeFirstLetter(getCookie('chameleon_color_style'));
    }
    //console.log(getCookie('chameleon_color_style'));
    for (var all = 0; all < color_hex[getCookie('chameleon_color_style')].length; all++) { ////load normal at first
        color_array[all] = values(color_hex[getCookie('chameleon_color_style')])[all];
        //console.log("only once pls");
    }
   
    document.getElementById("labelCha").style.cssText = "font-size: 10px; color: white; margin-right: 8px; margin-left: 5px;";
    document.getElementById("labelCha").innerHTML = color_hex[getCookie('chameleon_color_style')].length;
         
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
        //console.log(color_array[counter]);
        document.getElementById('scolor') .value = color_array[counter];
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(color_array[counter]).r + ',' + hexToRgb(color_array[counter]).g + ',' + hexToRgb(color_array[counter]).b + ');';
        document.getElementById('message') .style.color = color_array[counter];
      }
    }, false);
  }
}  
}, false);

