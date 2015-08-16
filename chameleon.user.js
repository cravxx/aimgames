// ==UserScript==
// @name        Chameleon
// @description Auto color formatting for the chatbox.
// @namespace   how much grease
// @include     http://aimgames.forummotion.com/*
// @version     1.5.2
// @grant       none
// @icon        data:image/png;base64,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
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
/*RainbowVis-JS Released under Eclipse Public License - v 1.0*/
function Rainbow(){"use strict";function e(e){if(e.length<2)throw new Error("Rainbow must have two or more colours.");var a=(t-F)/(e.length-1),i=new ColourGradient;i.setGradient(e[0],e[1]),i.setNumberRange(F,F+a),r=[i];for(var o=1;o<e.length-1;o++){var l=new ColourGradient;l.setGradient(e[o],e[o+1]),l.setNumberRange(F+a*o,F+a*(o+1)),r[o]=l}n=e}var r=null,F=0,t=100,n=["ff0000","ffff00","00ff00","0000ff"];e(n),this.setSpectrum=function(){return e(arguments),this},this.setSpectrumByArray=function(r){return e(r),this},this.colourAt=function(e){if(isNaN(e))throw new TypeError(e+" is not a number");if(1===r.length)return r[0].colourAt(e);var n=(t-F)/r.length,a=Math.min(Math.floor((Math.max(e,F)-F)/n),r.length-1);return r[a].colourAt(e)},this.colorAt=this.colourAt,this.setNumberRange=function(r,a){if(!(a>r))throw new RangeError("maxNumber ("+a+") is not greater than minNumber ("+r+")");return F=r,t=a,e(n),this}}function ColourGradient(){"use strict";function e(e,F,t){var n=e;i>n&&(n=i),n>o&&(n=o);var a=o-i,l=parseInt(F,16),u=parseInt(t,16),s=(u-l)/a,g=Math.round(s*(n-i)+l);return r(g.toString(16))}function r(e){return 1===e.length?"0"+e:e}function F(e){var r=/^#?[0-9a-fA-F]{6}$/i;return r.test(e)}function t(e){if(F(e))return e.substring(e.length-6,e.length);var r=e.toLowerCase();if(l.hasOwnProperty(r))return l[r];throw new Error(e+" is not a valid colour.")}var n="ff0000",a="0000ff",i=0,o=100;this.setGradient=function(e,r){n=t(e),a=t(r)},this.setNumberRange=function(e,r){if(!(r>e))throw new RangeError("maxNumber ("+r+") is not greater than minNumber ("+e+")");i=e,o=r},this.colourAt=function(r){return e(r,n.substring(0,2),a.substring(0,2))+e(r,n.substring(2,4),a.substring(2,4))+e(r,n.substring(4,6),a.substring(4,6))};var l={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkgrey:"A9A9A9",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",grey:"808080",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370DB",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"DB7093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"}}"undefined"!=typeof module&&(module.exports=Rainbow);
///////////////////////////

////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o) .map(function (k) {
    return o[k];
  });
}
//////

//////COLOR
var rainbow = new Rainbow();
var s = '';
for (var i = 0; i < 100; i += 5) {
  var hexColour = rainbow.colourAt(i);
  s += '#' + hexColour + ',';
}
s = s.split(',');

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
///////

///////COOKIE SHIT
function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    var expires = '';
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } 
  else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}
///////

var counter = 0;

if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
  if (window.location.pathname.length <= 1) {    
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', s[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == 19) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', s[counter], 1);
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('scolor') .value = s[counter];
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(s[counter]).r + ',' + hexToRgb(s[counter]).g + ',' + hexToRgb(s[counter]).b + ');';
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .style.color = s[counter];
      }
    }, false);
  } else {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', s[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == 19) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {        
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', s[counter], 1);
        console.log(s[counter]);
        document.getElementById('scolor') .value = s[counter];
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(s[counter]).r + ',' + hexToRgb(s[counter]).g + ',' + hexToRgb(s[counter]).b + ');';
        document.getElementById('message') .style.color = s[counter];
      }
    }, false);
  }
}
