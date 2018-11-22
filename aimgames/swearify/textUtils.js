///////////////////thanks for the free code rafa
///////////////////

// randomColor by David Merfield under the MIT license
// https://github.com/davidmerfield/randomColor/
;(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){var randomColor=factory();if(typeof module==='object'&&module&&module.exports){exports=module.exports=randomColor;} exports.randomColor=randomColor;}else{root.randomColor=factory();};}(this,function(){var seed=null;var colorDictionary={};loadColorBounds();var randomColor=function(options){options=options||{};if(options.seed&&!seed)seed=options.seed;var H,S,B;if(options.count!=null){var totalColors=options.count,colors=[];options.count=null;while(totalColors>colors.length){colors.push(randomColor(options));} options.count=totalColors;if(options.seed)seed=options.seed;return colors;} H=pickHue(options);S=pickSaturation(H,options);B=pickBrightness(H,S,options);return setFormat([H,S,B],options);};function pickHue(options){var hueRange=getHueRange(options.hue),hue=randomWithin(hueRange);if(hue<0){hue=360+hue;} return hue;} function pickSaturation(hue,options){if(options.luminosity==='random'){return randomWithin([0,100]);} if(options.hue==='monochrome'){return 0;} var saturationRange=getSaturationRange(hue);var sMin=saturationRange[0],sMax=saturationRange[1];switch(options.luminosity){case'bright':sMin=55;break;case'dark':sMin=sMax-10;break;case'light':sMax=55;break;} return randomWithin([sMin,sMax]);} function pickBrightness(H,S,options){var brightness,bMin=getMinimumBrightness(H,S),bMax=100;switch(options.luminosity){case'dark':bMax=bMin+20;break;case'light':bMin=(bMax+bMin)/2;break;case'random':bMin=0;bMax=100;break;} return randomWithin([bMin,bMax]);} function setFormat(hsv,options){switch(options.format){case'hsvArray':return hsv;case'hslArray':return HSVtoHSL(hsv);case'hsl':var hsl=HSVtoHSL(hsv);return'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';case'rgbArray':return HSVtoRGB(hsv);case'rgb':var rgb=HSVtoRGB(hsv);return'rgb('+rgb.join(', ')+')';default:return HSVtoHex(hsv);}} function getMinimumBrightness(H,S){var lowerBounds=getColorInfo(H).lowerBounds;for(var i=0;i<lowerBounds.length-1;i++){var s1=lowerBounds[i][0],v1=lowerBounds[i][1];var s2=lowerBounds[i+1][0],v2=lowerBounds[i+1][1];if(S>=s1&&S<=s2){var m=(v2-v1)/(s2-s1),b=v1-m*s1;return m*S+b;}} return 0;} function getHueRange(colorInput){if(typeof parseInt(colorInput)==='number'){var number=parseInt(colorInput);if(number<360&&number>0){return[number,number];}} if(typeof colorInput==='string'){if(colorDictionary[colorInput]){var color=colorDictionary[colorInput];if(color.hueRange){return color.hueRange;}}} return[0,360];} function getSaturationRange(hue){return getColorInfo(hue).saturationRange;} function getColorInfo(hue){if(hue>=334&&hue<=360){hue-=360;} for(var colorName in colorDictionary){var color=colorDictionary[colorName];if(color.hueRange&&hue>=color.hueRange[0]&&hue<=color.hueRange[1]){return colorDictionary[colorName];}}return'Color not found';} function randomWithin(range){if(seed==null){return Math.floor(range[0]+Math.random()*(range[1]+1-range[0]));}else{var max=range[1]||1;var min=range[0]||0;seed=(seed*9301+49297)%233280;var rnd=seed/233280.0;return Math.floor(min+rnd*(max-min));}} function HSVtoHex(hsv){var rgb=HSVtoRGB(hsv);function componentToHex(c){var hex=c.toString(16);return hex.length==1?'0'+hex:hex;} var hex='#'+componentToHex(rgb[0])+componentToHex(rgb[1])+componentToHex(rgb[2]);return hex;} function defineColor(name,hueRange,lowerBounds){var sMin=lowerBounds[0][0],sMax=lowerBounds[lowerBounds.length-1][0],bMin=lowerBounds[lowerBounds.length-1][1],bMax=lowerBounds[0][1];colorDictionary[name]={hueRange:hueRange,lowerBounds:lowerBounds,saturationRange:[sMin,sMax],brightnessRange:[bMin,bMax]};} function loadColorBounds(){defineColor('monochrome',null,[[0,0],[100,0]]);defineColor('red',[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]);defineColor('orange',[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]);defineColor('yellow',[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]);defineColor('green',[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]);defineColor('blue',[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]);defineColor('purple',[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]);defineColor('pink',[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);} function HSVtoRGB(hsv){var h=hsv[0];if(h===0){h=1;} if(h===360){h=359;} h=h/360;var s=hsv[1]/100,v=hsv[2]/100;var h_i=Math.floor(h*6),f=h*6-h_i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),r=256,g=256,b=256;switch(h_i){case 0:r=v,g=t,b=p;break;case 1:r=q,g=v,b=p;break;case 2:r=p,g=v,b=t;break;case 3:r=p,g=q,b=v;break;case 4:r=t,g=p,b=v;break;case 5:r=v,g=p,b=q;break;} var result=[Math.floor(r*255),Math.floor(g*255),Math.floor(b*255)];return result;} function HSVtoHSL(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,k=(2-s)*v;return[h,Math.round(s*v/(k<1?k:2-k)*10000)/100,k/2*100];} return randomColor;}));
/*
RainbowVis-JS
Released under Eclipse Public License - v 1.0
*/
function Rainbow(){'use strict';function e(e){if(e.length<2)throw new Error('Rainbow must have two or more colours.');var a=(t-F)/(e.length-1),i=new ColourGradient;i.setGradient(e[0],e[1]),i.setNumberRange(F,F+a),r=[i];for(var o=1;o<e.length-1;o++){var l=new ColourGradient;l.setGradient(e[o],e[o+1]),l.setNumberRange(F+a*o,F+a*(o+1)),r[o]=l;}n=e;}var r=null,F=0,t=100,n=['ff0000','ffff00','00ff00','0000ff'];e(n),this.setSpectrum=function(){return e(arguments),this;},this.setSpectrumByArray=function(r){return e(r),this;},this.colourAt=function(e){if(isNaN(e))throw new TypeError(e+' is not a number');if(1===r.length)return r[0].colourAt(e);var n=(t-F)/r.length,a=Math.min(Math.floor((Math.max(e,F)-F)/n),r.length-1);return r[a].colourAt(e);},this.colorAt=this.colourAt,this.setNumberRange=function(r,a){if(!(a>r))throw new RangeError('maxNumber ('+a+') is not greater than minNumber ('+r+')');return F=r,t=a,e(n),this;};}function ColourGradient(){'use strict';function e(e,F,t){var n=e;i>n&&(n=i),n>o&&(n=o);var a=o-i,l=parseInt(F,16),u=parseInt(t,16),s=(u-l)/a,g=Math.round(s*(n-i)+l);return r(g.toString(16));}function r(e){return 1===e.length?'0'+e:e;}function F(e){var r=/^#?[0-9a-fA-F]{6}$/i;return r.test(e);}function t(e){if(F(e))return e.substring(e.length-6,e.length);var r=e.toLowerCase();if(l.hasOwnProperty(r))return l[r];throw new Error(e+' is not a valid colour.');}var n='ff0000',a='0000ff',i=0,o=100;this.setGradient=function(e,r){n=t(e),a=t(r);},this.setNumberRange=function(e,r){if(!(r>e))throw new RangeError('maxNumber ('+r+') is not greater than minNumber ('+e+')');i=e,o=r;},this.colourAt=function(r){return e(r,n.substring(0,2),a.substring(0,2))+e(r,n.substring(2,4),a.substring(2,4))+e(r,n.substring(4,6),a.substring(4,6));};var l={aliceblue:'F0F8FF',antiquewhite:'FAEBD7',aqua:'00FFFF',aquamarine:'7FFFD4',azure:'F0FFFF',beige:'F5F5DC',bisque:'FFE4C4',black:'000000',blanchedalmond:'FFEBCD',blue:'0000FF',blueviolet:'8A2BE2',brown:'A52A2A',burlywood:'DEB887',cadetblue:'5F9EA0',chartreuse:'7FFF00',chocolate:'D2691E',coral:'FF7F50',cornflowerblue:'6495ED',cornsilk:'FFF8DC',crimson:'DC143C',cyan:'00FFFF',darkblue:'00008B',darkcyan:'008B8B',darkgoldenrod:'B8860B',darkgray:'A9A9A9',darkgreen:'006400',darkgrey:'A9A9A9',darkkhaki:'BDB76B',darkmagenta:'8B008B',darkolivegreen:'556B2F',darkorange:'FF8C00',darkorchid:'9932CC',darkred:'8B0000',darksalmon:'E9967A',darkseagreen:'8FBC8F',darkslateblue:'483D8B',darkslategray:'2F4F4F',darkslategrey:'2F4F4F',darkturquoise:'00CED1',darkviolet:'9400D3',deeppink:'FF1493',deepskyblue:'00BFFF',dimgray:'696969',dimgrey:'696969',dodgerblue:'1E90FF',firebrick:'B22222',floralwhite:'FFFAF0',forestgreen:'228B22',fuchsia:'FF00FF',gainsboro:'DCDCDC',ghostwhite:'F8F8FF',gold:'FFD700',goldenrod:'DAA520',gray:'808080',green:'008000',greenyellow:'ADFF2F',grey:'808080',honeydew:'F0FFF0',hotpink:'FF69B4',indianred:'CD5C5C',indigo:'4B0082',ivory:'FFFFF0',khaki:'F0E68C',lavender:'E6E6FA',lavenderblush:'FFF0F5',lawngreen:'7CFC00',lemonchiffon:'FFFACD',lightblue:'ADD8E6',lightcoral:'F08080',lightcyan:'E0FFFF',lightgoldenrodyellow:'FAFAD2',lightgray:'D3D3D3',lightgreen:'90EE90',lightgrey:'D3D3D3',lightpink:'FFB6C1',lightsalmon:'FFA07A',lightseagreen:'20B2AA',lightskyblue:'87CEFA',lightslategray:'778899',lightslategrey:'778899',lightsteelblue:'B0C4DE',lightyellow:'FFFFE0',lime:'00FF00',limegreen:'32CD32',linen:'FAF0E6',magenta:'FF00FF',maroon:'800000',mediumaquamarine:'66CDAA',mediumblue:'0000CD',mediumorchid:'BA55D3',mediumpurple:'9370DB',mediumseagreen:'3CB371',mediumslateblue:'7B68EE',mediumspringgreen:'00FA9A',mediumturquoise:'48D1CC',mediumvioletred:'C71585',midnightblue:'191970',mintcream:'F5FFFA',mistyrose:'FFE4E1',moccasin:'FFE4B5',navajowhite:'FFDEAD',navy:'000080',oldlace:'FDF5E6',olive:'808000',olivedrab:'6B8E23',orange:'FFA500',orangered:'FF4500',orchid:'DA70D6',palegoldenrod:'EEE8AA',palegreen:'98FB98',paleturquoise:'AFEEEE',palevioletred:'DB7093',papayawhip:'FFEFD5',peachpuff:'FFDAB9',peru:'CD853F',pink:'FFC0CB',plum:'DDA0DD',powderblue:'B0E0E6',purple:'800080',red:'FF0000',rosybrown:'BC8F8F',royalblue:'4169E1',saddlebrown:'8B4513',salmon:'FA8072',sandybrown:'F4A460',seagreen:'2E8B57',seashell:'FFF5EE',sienna:'A0522D',silver:'C0C0C0',skyblue:'87CEEB',slateblue:'6A5ACD',slategray:'708090',slategrey:'708090',snow:'FFFAFA',springgreen:'00FF7F',steelblue:'4682B4',tan:'D2B48C',teal:'008080',thistle:'D8BFD8',tomato:'FF6347',turquoise:'40E0D0',violet:'EE82EE',wheat:'F5DEB3',white:'FFFFFF',whitesmoke:'F5F5F5',yellow:'FFFF00',yellowgreen:'9ACD32'};}'undefined'!=typeof module&&(module.exports=Rainbow);

//var ColorList = ["#FF0000", "#FF8B00", "#E7FF00", "#5CFF00", "#00FF2E", "#00FFB9", "#00B9FF", "#002EFF", "#5C00FF", "#E700FF", "#FF008B"];
var ColorList = ['red', 'orange', '#E7FF00', '#5CFF00', 'lime', 'aqua', '#00B9FF', 'blue', 'purple', 'plum', 'pink'];
var LastStr = '';

var jsKeywords = [[/\bin\b/, 'in'], [/\bof\b/, 'of'], [/\bif\b/, 'if'], [/\bfor\b/, 'for'], [/\bwhile\b/, 'while'], [/\bfinally\b/, 'finally'], [/\bvar\b/, 'var'], [/\bnew\b/, 'new'],
    [/\bfunction\b/, 'function'], [/\bdo\b/, 'do'], [/\breturn\b/, 'return'], [/\bvoid\b/, 'void'], [/\belse\b/, 'else'], [/\bbreak\b/, 'break'], [/\bcatch\b/, 'catch'],
    [/\binstanceof\b/, 'instanceof'], [/\bwith\b/, 'with'], [/\bthrow\b/, 'throw'], [/\bcase\b/, 'case'], [/\bdefault\b/, 'default'], [/\btry\b/, 'try'], [/\bthis\b/, 'this'],
    [/\bswitch\b/, 'switch'], [/\bcontinue\b/, 'continue'], [/\btypeof\b/, 'typeof'], [/\bdelete\b/, 'delete'], [/\blet\b/, 'let'], [/\byield\b/, 'yield'], [/\bconst\b/, 'const'],
    [/\bexport\b/, 'export'], [/\bsuper\b/, 'super'], [/\bdebugger\b/, 'debugger'], [/\bas\b/, 'as'], [/\basync\b/, 'async'], [/\bawait\b/, 'await']
];
var jsLiterals = [[/\btrue\b/, 'true'], [/\bfalse\b/, 'false'], [/\bnull\b/, 'null'], [/\bundefined\b/, 'undefined'], [/\bNaN\b/, 'NaN'], [/\bInfinity\b/, 'Infinity'], [/\b\+\b/, '\+'], [/\b\-\b/, '\-'], [/\b\=\b/, '\=']];
var jsBuiltIn = [[/\beval\b/, 'eval'], [/\bisFinite\b/, 'isFinite'], [/\bisNaN\b/, 'isNaN'], [/\bparseFloat\b/, 'parseFloat'], [/\bparseInt\b/, 'parseInt'],
    [/\bdecodeURI\b/, 'decodeURI'], [/\bdecodeURIComponent\b/, 'decodeURIComponent'], [/\bencodeURI\b/, 'encodeURI'], [/\bencodeURIComponent\b/, 'encodeURIComponent'],
    [/\bescape\b/, 'escape'], [/\bunescape\b/, 'unescape'], [/\bObject\b/, 'Object'], [/\bFunction\b/, 'Function'], [/\bBoolean\b/, 'Boolean'], [/\bError\b/, 'Error'],
    [/\bEvalError\b/, 'EvalError'], [/\bInternalError\b/, 'InternalError'], [/\bRangeError\b/, 'RangeError'], [/\bReferenceError\b/, 'ReferenceError'],
    [/\bStopIteration\b/, 'StopIteration'], [/\bSyntaxError\b/, 'SyntaxError'], [/\bTypeError\b/, 'TypeError'], [/\bURIError\b/, 'URIError'], [/\bNumber\b/, 'Number'],
    [/\bMath\b/, 'Math'], [/\bDate\b/, 'Date'], [/\bString\b/, 'String'], [/\bRegExp\b/, 'RegExp'], [/\bArray\b/, 'Array'], [/\bFloat32Array\b/, 'Float32Array'],
    [/\bFloat64Array\b/, 'Float64Array'], [/\bInt16Array\b/, 'Int16Array'], [/\bInt32Array\b/, 'Int32Array'], [/\bInt8Array\b/, 'Int8Array'], [/\bUint16Array\b/, 'Uint16Array'],
    [/\bUint32Array\b/, 'Uint32Array'], [/\bUint8Array\b/, 'Uint8Array'], [/\bUint8ClampedArray\b/, 'Uint8ClampedArray'], [/\bArrayBuffer\b/, 'ArrayBuffer'],
    [/\bDataView\b/, 'DataView'], [/\bJSON\b/, 'JSON'], [/\bIntl\b/, 'Intl'], [/\barguments\b/, 'arguments'], [/\brequire\b/, 'require'], [/\bmodule\b/, 'module'], [/\bconsole\b/, 'console'],
    [/\bwindow\b/, 'window'], [/\bdocument\b/, 'document'], [/\bSymbol\b/, 'Symbol'], [/\bSet\b/, 'Set'], [/\bMap\b/, 'Map'], [/\bWeakSet\b/, 'WeakSet'], [/\bWeakMap\b/, 'WeakMap'],
    [/\bProxy\b/, 'Proxy'], [/\bReflect\b/, 'Reflect'], [/\bPromise\b/, 'Promise']
];
var javaKeywords = [[/\bfalse\b/, 'false'], [/\bsynchronized\b/, 'synchronized'], [/\bint\b/, 'int'], [/\babstract\b/, 'abstract'], [/\bfloat\b/, 'float'], [/\bprivate\b/, 'private'],
    [/\bchar\b/, 'char'], [/\bboolean\b/, 'boolean'], [/\bstatic\b/, 'static'], [/\bnull\b/, 'null'], [/\bif\b/, 'if'], [/\bconst\b/, 'const'], [/\bfor\b/, 'for'], [/\btrue\b/, 'true'],
    [/\bwhile\b/, 'while'], [/\blong\b/, 'long'], [/\bstrictfp\b/, 'strictfp'], [/\bfinally\b/, 'finally'], [/\bprotected\b/, 'protected'], [/\bimport\b/, 'import'], [/\bnative\b/, 'native'],
    [/\bfinal\b/, 'final'], [/\bvoid\b/, 'void'], [/\benum\b/, 'enum'], [/\belse\b/, 'else'], [/\bbreak\b/, 'break'], [/\btransient\b/, 'transient'], [/\bcatch\b/, 'catch'],
    [/\binstanceof\b/, 'instanceof'], [/\bbyte\b/, 'byte'], [/\bsuper\b/, 'super'], [/\bvolatile\b/, 'volatile'], [/\bcase\b/, 'case'], [/\bassert\b/, 'assert'], [/\bshort\b/, 'short'],
    [/\bpackage\b/, 'package'], [/\bdefault\b/, 'default'], [/\bdouble\b/, 'double'], [/\bpublic\b/, 'public'], [/\btry\b/, 'try'], [/\bthis\b/, 'this'], [/\bswitch\b/, 'switch'],
    [/\bcontinue\b/, 'continue'], [/\bthrows\b/, 'throws'], [/\bprotected\b/, 'protected'], [/\bpublic\b/, 'public'], [/\bprivate\b/, 'private']
];
var vbsKeywords = [[/\bcall\b/, 'call'], [/\bclass\b/, 'class'], [/\bconst\b/, 'const'], [/\bdim\b/, 'dim'], [/\bdo\b/, 'do'], [/\bloop\b/, 'loop'], [/\berase\b/, 'erase'],
    [/\bexecute\b/, 'execute'], [/\bexecuteglobal\b/, 'executeglobal'], [/\bexit\b/, 'exit'], [/\bfor\b/, 'for'], [/\beach\b/, 'each'], [/\bnext\b/, 'next'], [/\bfunction\b/, 'function'],
    [/\bif\b/, 'if'], [/\bthen\b/, 'then'], [/\belse\b/, 'else'], [/\bon\b/, 'on'], [/\berror\b/, 'error'], [/\boption\b/, 'option'], [/\bexplicit\b/, 'explicit'], [/\bnew\b/, 'new'],
    [/\bprivate\b/, 'private'], [/\bproperty\b/, 'property'], [/\blet\b/, 'let'], [/\bget\b/, 'get'], [/\bpublic\b/, 'public'], [/\brandomize\b/, 'randomize'], [/\bredim\b/, 'redim'],
    [/\brem\b/, 'rem'], [/\bselect\b/, 'select'], [/\bcase\b/, 'case'], [/\bset\b/, 'set'], [/\bstop\b/, 'stop'], [/\bsub\b/, 'sub'], [/\bwhile\b/, 'while'], [/\bwend\b/, 'wend'], [/\bwith\b/, 'with'],
    [/\bend\b/, 'end'], [/\bto\b/, 'to'], [/\belseif\b/, 'elseif'], [/\bis\b/, 'is'], [/\bor\b/, 'or'], [/\bxor\b/, 'xor'], [/\band\b/, 'and'], [/\bnot\b/, 'not'],
    [/\bclass_initialize\b/, 'class_initialize'], [/\bclass_terminate\b/, 'class_terminate'], [/\bdefault\b/, 'default'], [/\bpreserve\b/, 'preserve'], [/\bin\b/, 'in'],
    [/\bme\b/, 'me'], [/\bbyval\b/, 'byval'], [/\bbyref\b/, 'byref'], [/\bstep\b/, 'step'], [/\bresume\b/, 'resume'], [/\bgoto\b/, 'goto']
];
var vbsLiterals = [[/\blcase\b/, 'lcase'], [/\bmonth\b/, 'month'], [/\bvartype\b/, 'vartype'], [/\binstrrev\b/, 'instrrev'], [/\bubound\b/, 'ubound'],
    [/\bsetlocale\b/, 'setlocale'], [/\bgetobject\b/, 'getobject'], [/\brgb\b/, 'rgb'], [/\bgetref\b/, 'getref'], [/\bstring\b/, 'string'], [/\bweekdayname\b/, 'weekdayname'],
    [/\brnd\b/, 'rnd'], [/\bdateadd\b/, 'dateadd'], [/\bmonthname\b/, 'monthname'], [/\bnow\b/, 'now'], [/\bday\b/, 'day'], [/\bminute\b/, 'minute'], [/\bisarray\b/, 'isarray'],
    [/\bcbool\b/, 'cbool'], [/\bround\b/, 'round'], [/\bformatcurrency\b/, 'formatcurrency'], [/\bconversions\b/, 'conversions'], [/\bcsng\b/, 'csng'], [/\btimevalue\b/, 'timevalue'],
    [/\bsecond\b/, 'second'], [/\byear\b/, 'year'], [/\bspace\b/, 'space'], [/\babs\b/, 'abs'], [/\bclng\b/, 'clng'], [/\btimeserial\b/, 'timeserial'], [/\bfixs\b/, 'fixs'], [/\blen\b/, 'len'],
    [/\basc\b/, 'asc'], [/\bisempty\b/, 'isempty'], [/\bmaths\b/, 'maths'], [/\bdateserial\b/, 'dateserial'], [/\batn\b/, 'atn'], [/\btimer\b/, 'timer'], [/\bisobject\b/, 'isobject'],
    [/\bfilter\b/, 'filter'], [/\bweekday\b/, 'weekday'], [/\bdatevalue\b/, 'datevalue'], [/\bccur\b/, 'ccur'], [/\bisdate\b/, 'isdate'], [/\binstr\b/, 'instr'], [/\bdatediff\b/, 'datediff'],
    [/\bformatdatetime\b/, 'formatdatetime'], [/\breplace\b/, 'replace'], [/\bisnull\b/, 'isnull'], [/\bright\b/, 'right'], [/\bsgn\b/, 'sgn'], [/\barray\b/, 'array'],
    [/\bsnumeric\b/, 'snumeric'], [/\blog\b/, 'log'], [/\bcdbl\b/, 'cdbl'], [/\bhex\b/, 'hex'], [/\bchr\b/, 'chr'], [/\blbound\b/, 'lbound'], [/\bmsgbox\b/, 'msgbox'], [/\bucase\b/, 'ucase'],
    [/\bgetlocale\b/, 'getlocale'], [/\bcos\b/, 'cos'], [/\bcdate\b/, 'cdate'], [/\bcbyte\b/, 'cbyte'], [/\brtrim\b/, 'rtrim'], [/\bjoin\b/, 'join'], [/\bhour\b/, 'hour'], [/\boct\b/, 'oct'],
    [/\btypename\b/, 'typename'], [/\btrim\b/, 'trim'], [/\bstrcomp\b/, 'strcomp'], [/\bint\b/, 'int'], [/\bcreateobject\b/, 'createobject'], [/\bloadpicture\b/, 'loadpicture'],
    [/\btan\b/, 'tan'], [/\bformatnumber\b/, 'formatnumber'], [/\bmid\b/, 'mid'], [/\bscriptenginebuildversion\b/, 'scriptenginebuildversion'],
    [/\bscriptengine\b/, 'scriptengine'], [/\bsplit\b/, 'split'], [/\bscriptengineminorversion\b/, 'scriptengineminorversion'], [/\bcint\b/, 'cint'], [/\bsin\b/, 'sin'],
    [/\bdatepart\b/, 'datepart'], [/\bltrim\b/, 'ltrim'], [/\bsqr\b/, 'sqr'], [/\bscriptenginemajorversion\b/, 'scriptenginemajorversion'], [/\btime\b/, 'time'],
    [/\bderived\b/, 'derived'], [/\beval\b/, 'eval'], [/\bdate\b/, 'date'], [/\bformatpercent\b/, 'formatpercent'], [/\bexp\b/, 'exp'], [/\binputbox\b/, 'inputbox'], [/\bleft\b/, 'left'],
    [/\bascw\b/, 'ascw'], [/\bchrw\b/, 'chrw'], [/\bregexp\b/, 'regexp'], [/\bserver\b/, 'server'], [/\bresponse\b/, 'response'], [/\brequest\b/, 'request'], [/\bcstr\b/, 'cstr'],
    [/\berr\b/, 'err'], [/\b\+\b/, '\+'], [/\b\-\b/, '\-'], [/\b\=\b/, '\=']
];
var vbsBuiltIn = ['true', 'false', 'null', 'nothing', 'empty'];


function jsText(str) {
	var outStr = str;
	var z;
	for (z in jsLiterals) {
		outStr = outStr.replace(jsLiterals[z][0], '[color=#CC3366]' + jsLiterals[z][1] + '[/color]');
	}
	for (z in jsBuiltIn) {
		outStr = outStr.replace(jsBuiltIn[z][0], '[color=#33FFFF]' + jsBuiltIn[z][1] + '[/color]');
	}
	for (z in jsKeywords) {
		outStr = outStr.replace(jsKeywords[z][0], '[color=#FFCC66]' + jsKeywords[z][1] + '[/color]');
	}
	return outStr;
}

function javaText(str) {
	var outStr = str;
	var z;
	for (z in javaKeywords) {
		outStr = outStr.replace(javaKeywords[z][0], '[color=#33FFFF]' + javaKeywords[z][1] + '[/color]');
	} //yes, JS literals not java
	for (z in jsLiterals) {
		outStr = outStr.replace(jsLiterals[z][0], '[color=#CC3366]' + jsLiterals[z][1] + '[/color]');
	}
	return outStr;
}

function vbsText(str) {
	var outStr = str;
	var z;
	for (z in vbsLiterals) {
		outStr = outStr.replace(vbsLiterals[z][0], '[color=#CC3366]' + vbsLiterals[z][1] + '[/color]');
	}
	for (z in vbsBuiltIn) {
		outStr = outStr.replace(vbsBuiltIn[z][0], '[color=#33FFFF]' + vbsBuiltIn[z][1] + '[/color]');
	}
	for (z in vbsKeywords) {
		outStr = outStr.replace(vbsKeywords[z][0], '[color=#FFCC66]' + vbsKeywords[z][1] + '[/color]');
	}
	return outStr;
}

///////COOKIE SHIT
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    expires = '';
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
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
function invertColor(hexTripletColor) { /// http://stackoverflow.com/questions/9600295/automatically-change-text-color-to-assure-readability
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ('000000' + color).slice(-6); // pad with leading zeros
    color = '#' + color;                  // prepend #
    return color;
}

function isWhitespace(char_) {
	if (char_ == ' ') return true; // space
	if (char_ == '\t') return true; // tab
	if (char_ == '\n') return true; // newline
	if (char_ == '\r') return true; // return
	return false;
}

function rainbowText(str) {
	var outStr = '';
	var CurrCol = 0;
	
	for (var x = 0; x < str.length; x++) {
		if (isWhitespace(str.charAt(x))) {
			outStr += str.charAt(x);
		} else {
			outStr += '[color='+ColorList[CurrCol]+']'+str.charAt(x)+'[/color]';
			CurrCol = (CurrCol+1)%ColorList.length;
		}
	}
	return outStr;
}

function gradientText(str) {
	var start_color = '';
	if(getCookie('CB_color') === ''){
		start_color = randomColor();
	}else{
		start_color = getCookie('CB_color');
	}
	
	var numberOfItems = 14; ////whole gradient
  	var rainbow = new Rainbow(); 
 	rainbow.setNumberRange(0, numberOfItems);
 	rainbow.setSpectrum(start_color, invertColor(start_color));
 	var s = '';
 	for (var i = 0; i < numberOfItems; i++) {
     		var hexColour = rainbow.colourAt(i);
     		s += '#' + hexColour + ',';
  	}
  	s = s.split(',');
	
	var outStr = '';
	var CurrCol = 0;
	
	for (var x = 0; x < str.length; x++) {
		if (isWhitespace(str.charAt(x))) {
			outStr += str.charAt(x);
		} else {
			outStr += '[color='+s[CurrCol]+']'+str.charAt(x)+'[/color]';
			CurrCol = (CurrCol+1)%7; ///half it tho
		}
	}
	return outStr;
}

function randomText(str) {
	var outArr = str.split('');
	var outStr = '';
	for (var i = 0; i < outArr.length; i++) {
		if(isWhitespace(outArr[i])){
			outStr += outArr[i];
		}else{
			outStr += '[color=' + randomColor() + ']' + outArr[i] + '[/color]';
		}
	}
	return outStr;
}
