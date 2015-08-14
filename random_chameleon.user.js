// ==UserScript==
// @name        Random Chameleon
// @description Auto color formatting for the chatbox.
// @namespace   too much grease
// @include     http://aimgames.forummotion.com/*
// @version     1
// @grant       none
// ==/UserScript==

// randomColor by David Merfield under the MIT license
// https://github.com/davidmerfield/randomColor/
;(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){var randomColor=factory();if(typeof module==='object'&&module&&module.exports){exports=module.exports=randomColor;} exports.randomColor=randomColor;}else{root.randomColor=factory();};}(this,function(){var seed=null;var colorDictionary={};loadColorBounds();var randomColor=function(options){options=options||{};if(options.seed&&!seed)seed=options.seed;var H,S,B;if(options.count!=null){var totalColors=options.count,colors=[];options.count=null;while(totalColors>colors.length){colors.push(randomColor(options));} options.count=totalColors;if(options.seed)seed=options.seed;return colors;} H=pickHue(options);S=pickSaturation(H,options);B=pickBrightness(H,S,options);return setFormat([H,S,B],options);};function pickHue(options){var hueRange=getHueRange(options.hue),hue=randomWithin(hueRange);if(hue<0){hue=360+hue} return hue;} function pickSaturation(hue,options){if(options.luminosity==='random'){return randomWithin([0,100]);} if(options.hue==='monochrome'){return 0;} var saturationRange=getSaturationRange(hue);var sMin=saturationRange[0],sMax=saturationRange[1];switch(options.luminosity){case'bright':sMin=55;break;case'dark':sMin=sMax-10;break;case'light':sMax=55;break;} return randomWithin([sMin,sMax]);} function pickBrightness(H,S,options){var brightness,bMin=getMinimumBrightness(H,S),bMax=100;switch(options.luminosity){case'dark':bMax=bMin+20;break;case'light':bMin=(bMax+bMin)/2;break;case'random':bMin=0;bMax=100;break;} return randomWithin([bMin,bMax]);} function setFormat(hsv,options){switch(options.format){case'hsvArray':return hsv;case'hslArray':return HSVtoHSL(hsv);case'hsl':var hsl=HSVtoHSL(hsv);return'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';case'rgbArray':return HSVtoRGB(hsv);case'rgb':var rgb=HSVtoRGB(hsv);return'rgb('+rgb.join(', ')+')';default:return HSVtoHex(hsv);}} function getMinimumBrightness(H,S){var lowerBounds=getColorInfo(H).lowerBounds;for(var i=0;i<lowerBounds.length-1;i++){var s1=lowerBounds[i][0],v1=lowerBounds[i][1];var s2=lowerBounds[i+1][0],v2=lowerBounds[i+1][1];if(S>=s1&&S<=s2){var m=(v2-v1)/(s2-s1),b=v1-m*s1;return m*S+b;}} return 0;} function getHueRange(colorInput){if(typeof parseInt(colorInput)==='number'){var number=parseInt(colorInput);if(number<360&&number>0){return[number,number];}} if(typeof colorInput==='string'){if(colorDictionary[colorInput]){var color=colorDictionary[colorInput];if(color.hueRange){return color.hueRange}}} return[0,360];} function getSaturationRange(hue){return getColorInfo(hue).saturationRange;} function getColorInfo(hue){if(hue>=334&&hue<=360){hue-=360;} for(var colorName in colorDictionary){var color=colorDictionary[colorName];if(color.hueRange&&hue>=color.hueRange[0]&&hue<=color.hueRange[1]){return colorDictionary[colorName];}}return'Color not found';} function randomWithin(range){if(seed==null){return Math.floor(range[0]+Math.random()*(range[1]+1-range[0]));}else{var max=range[1]||1;var min=range[0]||0;seed=(seed*9301+49297)%233280;var rnd=seed/233280.0;return Math.floor(min+rnd*(max-min));}} function HSVtoHex(hsv){var rgb=HSVtoRGB(hsv);function componentToHex(c){var hex=c.toString(16);return hex.length==1?"0"+hex:hex;} var hex="#"+componentToHex(rgb[0])+componentToHex(rgb[1])+componentToHex(rgb[2]);return hex;} function defineColor(name,hueRange,lowerBounds){var sMin=lowerBounds[0][0],sMax=lowerBounds[lowerBounds.length-1][0],bMin=lowerBounds[lowerBounds.length-1][1],bMax=lowerBounds[0][1];colorDictionary[name]={hueRange:hueRange,lowerBounds:lowerBounds,saturationRange:[sMin,sMax],brightnessRange:[bMin,bMax]};} function loadColorBounds(){defineColor('monochrome',null,[[0,0],[100,0]]);defineColor('red',[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]);defineColor('orange',[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]);defineColor('yellow',[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]);defineColor('green',[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]);defineColor('blue',[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]);defineColor('purple',[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]);defineColor('pink',[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);} function HSVtoRGB(hsv){var h=hsv[0];if(h===0){h=1} if(h===360){h=359} h=h/360;var s=hsv[1]/100,v=hsv[2]/100;var h_i=Math.floor(h*6),f=h*6-h_i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),r=256,g=256,b=256;switch(h_i){case 0:r=v,g=t,b=p;break;case 1:r=q,g=v,b=p;break;case 2:r=p,g=v,b=t;break;case 3:r=p,g=q,b=v;break;case 4:r=t,g=p,b=v;break;case 5:r=v,g=p,b=q;break;} var result=[Math.floor(r*255),Math.floor(g*255),Math.floor(b*255)];return result;} function HSVtoHSL(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,k=(2-s)*v;return[h,Math.round(s*v/(k<1?k:2-k)*10000)/100,k/2*100];} return randomColor;}));

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
///////

///////
function hexToRGB(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
   : null;
}
///////

if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
  if (window.location.pathname.length <= 1) {
    new_col = '#ffffff';    
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        new_col = randomColor();      
        setCookie('CB_color', new_col, 1);
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('scolor') .value = new_col;
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRGB(new_col) .r + ', ' + hexToRGB(new_col) .g + ', ' + hexToRGB(new_col) .b + ');';
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .style.color = new_col;
      }
    }, false);
  } else {
    new_col = '#ffffff';    
    document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        new_col = randomColor();      
        setCookie('CB_color', new_col, 1);
        document.getElementById('scolor') .value = new_col;
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRGB(new_col) .r + ', ' + hexToRGB(new_col) .g + ', ' + hexToRGB(new_col) .b + ');';
        document.getElementById('message') .style.color = new_col;
      }
    }, false);
  }
}
