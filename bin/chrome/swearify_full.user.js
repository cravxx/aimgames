// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     2.4.0
// @grant       none
// @icon        data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKUUExURf/////m5v93d/+oqP/Bwf+Dg/+cnP9FRf9eXv9RUf9qav/NzeLi4tjY2PHx8fz8/P+Pj8XExMPBwdGvr/KuruyOjtmmpuXl5fLy8snJycLCwsrDw+1ra/+1tfvk5OasrMi2ts29vfj4+P6QkNHR0elzc+np6cq9vcvHx++BgcbGxsi5udGwsOmTk/9GRtzHx8PDw8LBwcm5ufPz8+CXl8XFxdm4uPahoc7OztS6utvb2/39/dfX1/7+/vt7e9zR0dDQ0O/v78TExOvr6+ibm9/f3/7l5fx7e9SsrNLLy/54eP3BwdiUlM21tf94eNqpqcS+vtPT09apqcPAwOTk5MjIyNzc3My2tt7T0+v3++P0+N2mq+BPVOX1+epMT+qoq8q0tc3Nzc7Jyca7u93S0hbF9Aa/8QK+8AO56gK66wK97z++4LrCxMHCwsDCwsDCw7zDxb7DxcnW2dn0+9v0++L2++b3/PL7/QDK/wDL/wDH/QDJ/5LD0b7Cw7vCxLfCxV260wGx4QOv3QOt2wep1hey3ADF+gDG/ADG+x3F87XCxk662ACz5ACw4ACv3wCu3QCt3ACx4gCy4wC36YG/z319fScnJzMzM7y8vLzCxDLF7QDG/QDF+wDI/wCp1wCs2gCs2wCr2gCv3rTBxF1fYBMUFBQUFKenp7/Cw7PBxSi85QC67QC56wC87wC/8wCx4QCz4wCy4rzBwy8vLzk5Oa2trbrBwySz2gC15gCu3gC05QGr2r3Bw7/CwiOu0wCt3QCp2BGt2LnBwxas1QCm1ACo1ky206O+xgCq2ACn1QDC9wDE+VPD4bfBxJzAyhO04QC+8l/C3ZXAzA6+7wC98QDA9XK70IW+zQe04wC57AC88AC/8k0VJ2YAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVQ4y5WRZ1cTURCGZ+9ucrMbAUVRGBsqomILKhYUG/au2Huv7GIXG3ZjSSKiWDESK4pkwUpUVKwIFuztz3i3wAnhg8c5Z3fnvPPcmbn7AvwrOEIID8DzHOF5XiCCRdBkwQIWQSAWlhJiJWClBIhNtAKVqA7wlFLeIlB2loii3SraGEBFDiiVoBYAi0azCRzPKI5QamcANQHQTrOHYyXQ3yLbhvXUdBOQbMa8/4gGYeERoZp2q4bsWoR9wxtFNm4CdrYKRDVtZqJUEmxsL2256BjE5i1aihJp1To2sk1b/X9oe7KFQKJSuzhEjG3PAD6+A2LHGkDSAfaDOiUgdu7SlQN7t+4OTOzR0xzBsxEW1oH2SmIdsDcn0T59+yE6ko0OtdE/RqvjgBRu4CA9GxxynSFDNdWRnAKpSXUB07hhCZqaNHzEyFGJOjB6jGZvrXFjx0Xqclx01Hg9wfgJmr01QMTESbrqmJw6Jc0AwnR7a3yZOs1okDA9eYYxAWfq9sKs2XPmzpu/YGGaATgWLV5i1HGpbi8sW75i5arVa9JlRVcz1q4z67h+w8ZNm7dA5tbMzG3bd2TIO2Umylm7ZLOu7N6zd9/+A3DQ6XQeOnxEkc1CBpqZctTl9hzLBs/xHNeJkwrmnjp9BoNCPnvufF7eBSd4L+b7Ll1GvHL12vWgslJw42bhrcIiP6jFrhLPbcTcO3fvBQPK/QelqjvwEPIDgcCjx1g/yp541Oz8p/DM5/OVK+Ylg+P5i5de7ysvqKrqfi3L9XqUvSn3eisq3oK/sqrqnSIX1C3LyvsPH3NU1eOGan915ScF5ZAGctbnL/5q/9dvUFzqLvmuoBJCyOk/fv4qLPr95y9qjLbDWeFJXAAAAABJRU5ErkJggg==
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

/**
 * Countable is a script to allow for live paragraph-, word- and character-
 * counting on an HTML element.
 *
 * @author   Sacha Schmid (<https://github.com/RadLikeWhoa>)
 * @version  2.1.1
 * @license  MIT
 * @see      <http://radlikewhoa.github.io/Countable/>
 */

/**
 * Note: For the purpose of this internal documentation, arguments of the type
 * {Nodes} are to be interpreted as either {NodeList} or {Element}.
 */

;(function (global) {
  'use strict'

  /**
   * @private
   *
   * `_liveElements` holds all elements that have the live-counting
   * functionality bound to them.
   *
   * `_event` holds the event to handle the live counting, based on the
   * browser's capabilities.
   */

  var _liveElements = [],
      _event = 'oninput' in document ? 'input' : 'keyup'

  /**
   * IE9 is a special case. It does not fire an 'input' event when
   * characters are deleted (via DEL key, BACKSPACE key, and CUT).
   * If we want support for those actions we need to use the 'keyup'
   * event instead.
   * more info: http://www.matts411.com/post/internet-explorer-9-oninput/
   */

  if (navigator.userAgent.match(/MSIE 9.0/)) {
    _event = 'keyup'
  }

  /**
   * `String.trim()` polyfill for non-supporting browsers. This is the
   * recommended polyfill on MDN.
   *
   * @see     <http://goo.gl/uYveB>
   * @see     <http://goo.gl/xjIxJ>
   *
   * @return  {String}  The original string with leading and trailing
   *                    whitespace removed.
   */

  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '')
    }
  }

  /**
   * `ucs2decode` function from the punycode.js library.
   *
   * Creates an array containing the decimal code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally, this
   * function will convert a pair of surrogate halves (each of which UCS-2
   * exposes as separate characters) into a single code point, matching
   * UTF-16.
   *
   * @see     <http://goo.gl/8M09r>
   * @see     <http://goo.gl/u4UUC>
   *
   * @param   {String}  string   The Unicode input string (UCS-2).
   *
   * @return  {Array}   The new array of code points.
   */

  function _decode (string) {
    var output = [],
        counter = 0,
        length = string.length,
        value, extra

    while (counter < length) {
      value = string.charCodeAt(counter++)

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // High surrogate, and there is a next character.
        extra = string.charCodeAt(counter++)

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000)
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value, extra)
          counter--
        }
      } else {
        output.push(value)
      }
    }

    return output
  }

  /**
   * `_validateArguments` validates the arguments given to each function call.
   * Errors are logged to the console as warnings, but Countable fails
   * silently.
   *
   * @private
   *
   * @param   {Nodes}     elements  The (collection of) element(s) to
   *                                validate.
   *
   * @param   {Function}  callback  The callback function to validate.
   *
   * @return  {Boolean}   Returns whether all arguments are vaild.
   */

  function _validateArguments (elements, callback) {
    var elementsValid = elements && ((Object.prototype.toString.call(elements) === '[object NodeList]' && elements.length) || (elements.nodeType === 1)),
        callbackValid = callback && typeof callback === 'function'

    if ('console' in window && 'warn' in console) {
      if (!elementsValid) console.warn('Countable: No valid elements were found')
      if (!callbackValid) console.warn('Countable: "' + callback + '" is not a valid callback function')
    }

    return elementsValid && callbackValid
  }

  /**
   * `_extendDefaults` is a function to extend a set of default options with
   * the ones given in the function call. Available options are described
   * below.
   *
   * {Boolean}  hardReturns      Use two returns to seperate a paragraph
   *                             instead of one.
   * {Boolean}  stripTags        Strip HTML tags before counting the values.
   * {Boolean}  ignoreReturns    Ignore returns when calculating the `all`
   *                             property.
   * {Boolean}  ignoreZeroWidth  Ignore zero-width space characters.
   *
   * @private
   *
   * @param   {Object}  options  Countable allows the options described above.
   *                             They can be used in a function call to
   *                             override the default behaviour.
   *
   * @return  {Object}  The new options object.
   */

  function _extendDefaults (options) {
    var defaults = {
      hardReturns: false,
      stripTags: false,
      ignoreReturns: false,
      ignoreZeroWidth: true
    }

    for (var prop in options) {
      if (defaults.hasOwnProperty(prop)) defaults[prop] = options[prop]
    }

    return defaults
  }

  /**
   * `_count` trims an element's value, optionally strips HTML tags and counts
   * paragraphs, sentences, words, characters and characters plus spaces.
   *
   * @private
   *
   * @param   {Element}  element  The element whose value is to be counted.
   *
   * @param   {Object}   options  The options to use for the counting.
   *
   * @return  {Object}   The object containing the number of paragraphs,
   *                     sentences, words, characters and characters plus
   *                     spaces.
   */

  function _count (element, options) {
    var original = 'value' in element ? element.value : element.innerText || element.textContent,
        trimmed

    /**
     * The initial implementation to allow for HTML tags stripping was created
     * @craniumslows while the current one was created by @Rob--W.
     *
     * @see <http://goo.gl/Exmlr>
     * @see <http://goo.gl/gFQQh>
     */

    if (options.stripTags) original = original.replace(/<\/?[a-z][^>]*>/gi, '')
    if (options.ignoreZeroWidth) original = original.replace(/[\u200B]+/, '')

    trimmed = original.trim()

    /**
     * Most of the performance improvements are based on the works of @epmatsw.
     *
     * @see <http://goo.gl/SWOLB>
     */

    return {
      paragraphs: trimmed ? (trimmed.match(options.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0,
      sentences: trimmed ? (trimmed.match(/[.?!…]+./g) || []).length + 1 : 0,
      words: trimmed ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length : 0,
      characters: trimmed ? _decode(trimmed.replace(/\s/g, '')).length : 0,
      all: _decode(options.ignoreReturns ? original.replace(/[\n\r]/g, '') : original).length
    }
  }

  /**
   * `_loop` is a helper function to iterate over a collection, e.g. a NodeList
   * or an Array. The callback receives the current element as the single
   * parameter.
   *
   * @private
   *
   * @param  {Array}     which     The collection to iterate over.
   *
   * @param  {Function}  callback  The callback function to call on each
   *                               iteration.
   */

  function _loop (which, callback) {
    var len = which.length

    if (typeof len !== 'undefined') {
      while (len--) {
        callback(which[len])
      }
    } else {
      callback(which)
    }
  }

  /**
   * This is the main object that will later be exposed to other scripts. It
   * holds all the public methods that can be used to enable the Countable
   * functionality.
   */

  var Countable = {

    /**
     * The `live` method binds the counting handler to all given elements. The
     * event is either `oninput` or `onkeydown`, based on the capabilities of
     * the browser.
     *
     * @param   {Nodes}     elements   All elements that should receive the
     *                                 Countable functionality.
     *
     * @param   {Function}  callback   The callback to fire whenever the
     *                                 element's value changes. The callback is
     *                                 called with the relevant element bound
     *                                 to `this` and the counted values as the
     *                                 single parameter.
     *
     * @param   {Object}    [options]  An object to modify Countable's
     *                                 behaviour. Refer to `_extendDefaults`
     *                                 for a list of available options.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    live: function (elements, callback, options) {
      var ops = _extendDefaults(options),
          bind = function (element) {
            var handler = function () {
                  callback.call(element, _count(element, ops))
                }

            _liveElements.push({ element: element, handler: handler })

            handler()

            if (element.addEventListener) {
              element.addEventListener(_event, handler, false)
            } else if (element.attachEvent) {
              element.attachEvent('on' + _event, handler)
            }
          }

      if (!_validateArguments(elements, callback)) return

      if (elements.length) {
        _loop(elements, bind)
      } else {
        bind(elements)
      }

      return this
    },

    /**
     * The `die` method removes the Countable functionality from all given
     * elements.
     *
     * @param   {Nodes}  elements  All elements whose Countable functionality
     *                             should be unbound.
     *
     * @return  {Object}  Returns the Countable object to allow for chaining.
     */

    die: function (elements) {
      if (!_validateArguments(elements, function () {})) return

      _loop(elements, function (element) {
        var liveElement

        _loop(_liveElements, function (live) {
          if (live.element === element) liveElement = live
        })

        if (!liveElement) return

        if (element.removeEventListener) {
          element.removeEventListener(_event, liveElement.handler, false)
        } else if (element.detachEvent) {
          element.detachEvent('on' + _event, liveElement.handler)
        }

        _liveElements.splice(_liveElements.indexOf(liveElement), 1)
      })

      return this
    },

    /**
     * The `once` method works mostly like the `live` method, but no events are
     * bound, the functionality is only executed once.
     *
     * @alias   Countable.count
     *
     * @param   {Nodes}     elements   All elements that should receive the
     *                                 Countable functionality.
     *
     * @param   {Function}  callback   The callback to fire whenever the
     *                                 element's value changes. The callback is
     *                                 called with the relevant element bound
     *                                 to `this` and the counted values as the
     *                                 single parameter.
     *
     * @param   {Object}    [options]  An object to modify Countable's
     *                                 behaviour. Refer to `_extendDefaults`
     *                                 for a list of available options.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    once: function (elements, callback, options) {
      if (!_validateArguments(elements, callback)) return

      _loop(elements, function (element) {
        callback.call(element, _count(element, _extendDefaults(options)))
      })

      return this
    },

    count: function (elements, callback, options) {
      return this.once(elements, callback, options)
    },

    /**
     * The `enabled` method checks if the live-counting functionality is bound
     * to an element.
     *
     * @param   {Element}  element  A single Element.
     *
     * @return  {Boolean}  A boolean value representing whether Countable
     *                     functionality is bound to the given element.
     */

    enabled: function (element) {
      var isEnabled = false

      if (element && element.nodeType === 1) {
        _loop(_liveElements, function (live) {
          if (live.element === element) isEnabled = true
        })
      }

      return isEnabled
    }

  }

  /**
   * Expose Countable depending on the module system used across the
   * application. (Node / CommonJS, AMD, global)
   */

  if (typeof exports === 'object') {
    module.exports = Countable
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return Countable })
  } else {
    global.Countable = Countable
  }
}(this));

///////////////////thanks for the free code rafa
///////////////////

// randomColor by David Merfield under the MIT license
// https://github.com/davidmerfield/randomColor/
;(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){var randomColor=factory();if(typeof module==='object'&&module&&module.exports){exports=module.exports=randomColor;} exports.randomColor=randomColor;}else{root.randomColor=factory();};}(this,function(){var seed=null;var colorDictionary={};loadColorBounds();var randomColor=function(options){options=options||{};if(options.seed&&!seed)seed=options.seed;var H,S,B;if(options.count!=null){var totalColors=options.count,colors=[];options.count=null;while(totalColors>colors.length){colors.push(randomColor(options));} options.count=totalColors;if(options.seed)seed=options.seed;return colors;} H=pickHue(options);S=pickSaturation(H,options);B=pickBrightness(H,S,options);return setFormat([H,S,B],options);};function pickHue(options){var hueRange=getHueRange(options.hue),hue=randomWithin(hueRange);if(hue<0){hue=360+hue} return hue;} function pickSaturation(hue,options){if(options.luminosity==='random'){return randomWithin([0,100]);} if(options.hue==='monochrome'){return 0;} var saturationRange=getSaturationRange(hue);var sMin=saturationRange[0],sMax=saturationRange[1];switch(options.luminosity){case'bright':sMin=55;break;case'dark':sMin=sMax-10;break;case'light':sMax=55;break;} return randomWithin([sMin,sMax]);} function pickBrightness(H,S,options){var brightness,bMin=getMinimumBrightness(H,S),bMax=100;switch(options.luminosity){case'dark':bMax=bMin+20;break;case'light':bMin=(bMax+bMin)/2;break;case'random':bMin=0;bMax=100;break;} return randomWithin([bMin,bMax]);} function setFormat(hsv,options){switch(options.format){case'hsvArray':return hsv;case'hslArray':return HSVtoHSL(hsv);case'hsl':var hsl=HSVtoHSL(hsv);return'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';case'rgbArray':return HSVtoRGB(hsv);case'rgb':var rgb=HSVtoRGB(hsv);return'rgb('+rgb.join(', ')+')';default:return HSVtoHex(hsv);}} function getMinimumBrightness(H,S){var lowerBounds=getColorInfo(H).lowerBounds;for(var i=0;i<lowerBounds.length-1;i++){var s1=lowerBounds[i][0],v1=lowerBounds[i][1];var s2=lowerBounds[i+1][0],v2=lowerBounds[i+1][1];if(S>=s1&&S<=s2){var m=(v2-v1)/(s2-s1),b=v1-m*s1;return m*S+b;}} return 0;} function getHueRange(colorInput){if(typeof parseInt(colorInput)==='number'){var number=parseInt(colorInput);if(number<360&&number>0){return[number,number];}} if(typeof colorInput==='string'){if(colorDictionary[colorInput]){var color=colorDictionary[colorInput];if(color.hueRange){return color.hueRange}}} return[0,360];} function getSaturationRange(hue){return getColorInfo(hue).saturationRange;} function getColorInfo(hue){if(hue>=334&&hue<=360){hue-=360;} for(var colorName in colorDictionary){var color=colorDictionary[colorName];if(color.hueRange&&hue>=color.hueRange[0]&&hue<=color.hueRange[1]){return colorDictionary[colorName];}}return'Color not found';} function randomWithin(range){if(seed==null){return Math.floor(range[0]+Math.random()*(range[1]+1-range[0]));}else{var max=range[1]||1;var min=range[0]||0;seed=(seed*9301+49297)%233280;var rnd=seed/233280.0;return Math.floor(min+rnd*(max-min));}} function HSVtoHex(hsv){var rgb=HSVtoRGB(hsv);function componentToHex(c){var hex=c.toString(16);return hex.length==1?"0"+hex:hex;} var hex="#"+componentToHex(rgb[0])+componentToHex(rgb[1])+componentToHex(rgb[2]);return hex;} function defineColor(name,hueRange,lowerBounds){var sMin=lowerBounds[0][0],sMax=lowerBounds[lowerBounds.length-1][0],bMin=lowerBounds[lowerBounds.length-1][1],bMax=lowerBounds[0][1];colorDictionary[name]={hueRange:hueRange,lowerBounds:lowerBounds,saturationRange:[sMin,sMax],brightnessRange:[bMin,bMax]};} function loadColorBounds(){defineColor('monochrome',null,[[0,0],[100,0]]);defineColor('red',[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]);defineColor('orange',[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]);defineColor('yellow',[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]);defineColor('green',[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]);defineColor('blue',[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]);defineColor('purple',[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]);defineColor('pink',[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);} function HSVtoRGB(hsv){var h=hsv[0];if(h===0){h=1} if(h===360){h=359} h=h/360;var s=hsv[1]/100,v=hsv[2]/100;var h_i=Math.floor(h*6),f=h*6-h_i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),r=256,g=256,b=256;switch(h_i){case 0:r=v,g=t,b=p;break;case 1:r=q,g=v,b=p;break;case 2:r=p,g=v,b=t;break;case 3:r=p,g=q,b=v;break;case 4:r=t,g=p,b=v;break;case 5:r=v,g=p,b=q;break;} var result=[Math.floor(r*255),Math.floor(g*255),Math.floor(b*255)];return result;} function HSVtoHSL(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,k=(2-s)*v;return[h,Math.round(s*v/(k<1?k:2-k)*10000)/100,k/2*100];} return randomColor;}));
/*
RainbowVis-JS
Released under Eclipse Public License - v 1.0
*/
function Rainbow(){"use strict";function e(e){if(e.length<2)throw new Error("Rainbow must have two or more colours.");var a=(t-F)/(e.length-1),i=new ColourGradient;i.setGradient(e[0],e[1]),i.setNumberRange(F,F+a),r=[i];for(var o=1;o<e.length-1;o++){var l=new ColourGradient;l.setGradient(e[o],e[o+1]),l.setNumberRange(F+a*o,F+a*(o+1)),r[o]=l}n=e}var r=null,F=0,t=100,n=["ff0000","ffff00","00ff00","0000ff"];e(n),this.setSpectrum=function(){return e(arguments),this},this.setSpectrumByArray=function(r){return e(r),this},this.colourAt=function(e){if(isNaN(e))throw new TypeError(e+" is not a number");if(1===r.length)return r[0].colourAt(e);var n=(t-F)/r.length,a=Math.min(Math.floor((Math.max(e,F)-F)/n),r.length-1);return r[a].colourAt(e)},this.colorAt=this.colourAt,this.setNumberRange=function(r,a){if(!(a>r))throw new RangeError("maxNumber ("+a+") is not greater than minNumber ("+r+")");return F=r,t=a,e(n),this}}function ColourGradient(){"use strict";function e(e,F,t){var n=e;i>n&&(n=i),n>o&&(n=o);var a=o-i,l=parseInt(F,16),u=parseInt(t,16),s=(u-l)/a,g=Math.round(s*(n-i)+l);return r(g.toString(16))}function r(e){return 1===e.length?"0"+e:e}function F(e){var r=/^#?[0-9a-fA-F]{6}$/i;return r.test(e)}function t(e){if(F(e))return e.substring(e.length-6,e.length);var r=e.toLowerCase();if(l.hasOwnProperty(r))return l[r];throw new Error(e+" is not a valid colour.")}var n="ff0000",a="0000ff",i=0,o=100;this.setGradient=function(e,r){n=t(e),a=t(r)},this.setNumberRange=function(e,r){if(!(r>e))throw new RangeError("maxNumber ("+r+") is not greater than minNumber ("+e+")");i=e,o=r},this.colourAt=function(r){return e(r,n.substring(0,2),a.substring(0,2))+e(r,n.substring(2,4),a.substring(2,4))+e(r,n.substring(4,6),a.substring(4,6))};var l={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkgrey:"A9A9A9",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",grey:"808080",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370DB",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"DB7093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"}}"undefined"!=typeof module&&(module.exports=Rainbow);

var ColorList = Array("#FF0000", "#FF7700", "#FFFF00", "#00FF00", "#00FFFF", "#0077FF", "#9900FF");
var LastStr = "";

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
function invertColor(hexTripletColor) { /// http://stackoverflow.com/questions/9600295/automatically-change-text-color-to-assure-readability
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

function isWhitespace(char_) {
	if (char_ == ' ') return true; // space
	if (char_ == '\t') return true; // tab
	if (char_ == '\n') return true; // newline
	if (char_ == '\r') return true; // return
	return false;
}

function rainbowText(InStr) {
	var OutStr = "";
	var CurrCol = 0;
	
	for (var x = 0; x < InStr.length; x++) {
		if (isWhitespace(InStr.charAt(x))) {
			OutStr += InStr.charAt(x);
		} else {
			OutStr += "[color="+ColorList[CurrCol]+"]"+InStr.charAt(x)+"[/color]";
			CurrCol = (CurrCol+1)%ColorList.length;
		}
	}
	return OutStr;
}

function gradientText(InStr) {
	var start_color = '';
	if(getCookie('CB_color') == ''){
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
	
	var OutStr = "";
	var CurrCol = 0;
	
	for (var x = 0; x < InStr.length; x++) {
		if (isWhitespace(InStr.charAt(x))) {
			OutStr += InStr.charAt(x);
		} else {
			OutStr += "[color="+s[CurrCol]+"]"+InStr.charAt(x)+"[/color]";
			CurrCol = (CurrCol+1)%7; ///half it tho
		}
	}
	return OutStr;
}

function randomText(InStr) {
	var OutArr = InStr.split("");
	var OutStr = ""
	for (var i = 0; i < OutArr.length; i++) {
		if(isWhitespace(OutArr[i])){
			OutStr += OutArr[i];
		}else{
			OutStr += '[color=' + randomColor() + ']' + OutArr[i] + '[/color]';
		}
	}
	return OutStr;
}

// is.js 0.7.4
// Author: Aras Atasaygin

// AMD with global, Node, or global
;(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['is'], function(is) {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.is = factory(is));
        });
    } else if(typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('is_js'));
    } else {
        // Browser globals (root is window)
        root.is = factory(root.is);
    }
} (this, function(is) {

    // Baseline
    /* -------------------------------------------------------------------------- */

    var root = this || global;
    var previousIs = root.is;

    // define 'is' object and current version
    is = {};
    is.VERSION = '0.7.4';

    // define interfaces
    is.not = {};
    is.all = {};
    is.any = {};

    // cache some methods to call later on
    var toString = Object.prototype.toString;
    var arraySlice = Array.prototype.slice;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // helper function which reverses the sense of predicate result
    function not(func) {
        return function() {
            return !func.apply(null, arraySlice.call(arguments));
        };
    }

    // helper function which call predicate function per parameter and return true if all pass
    function all(func) {
        return function() {
            var parameters = arraySlice.call(arguments);
            var length = parameters.length;
            if(length === 1 && is.array(parameters[0])) {    // support array
                parameters = parameters[0];
                length = parameters.length;
            }
            for (var i = 0; i < length; i++) {
                if (!func.call(null, parameters[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // helper function which call predicate function per parameter and return true if any pass
    function any(func) {
        return function() {
            var parameters = arraySlice.call(arguments);
            var length = parameters.length;
            if(length === 1 && is.array(parameters[0])) {    // support array
                parameters = parameters[0];
                length = parameters.length;
            }
            for (var i = 0; i < length; i++) {
                if (func.call(null, parameters[i])) {
                    return true;
                }
            }
            return false;
        };
    }

    // Type checks
    /* -------------------------------------------------------------------------- */

    // is a given value Arguments?
    is.arguments = function(value) {    // fallback check is for IE
        return is.not.null(value) && (toString.call(value) === '[object Arguments]' || (typeof value === 'object' && 'callee' in value));
    };

    // is a given value Array?
    is.array = Array.isArray || function(value) {    // check native isArray first
        return toString.call(value) === '[object Array]';
    };

    // is a given value Boolean?
    is.boolean = function(value) {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
    };

    // is a given value Date Object?
    is.date = function(value) {
        return toString.call(value) === '[object Date]';
    };

    // is a given value Error object?
    is.error = function(value) {
        return toString.call(value) === '[object Error]';
    };

    // is a given value function?
    is.function = function(value) {    // fallback check is for IE
        return toString.call(value) === '[object Function]' || typeof value === 'function';
    };

    // is a given value NaN?
    is.nan = function(value) {    // NaN is number :) Also it is the only value which does not equal itself
        return value !== value;
    };

    // is a given value null?
    is.null = function(value) {
        return value === null;
    };

    // is a given value number?
    is.number = function(value) {
        return is.not.nan(value) && toString.call(value) === '[object Number]';
    };

    // is a given value object?
    is.object = function(value) {
        var type = typeof value;
        return type === 'function' || type === 'object' && !!value;
    };

    // is given value a pure JSON object?
    is.json = function(value) {
        return toString.call(value) === '[object Object]';
    };

    // is a given value RegExp?
    is.regexp = function(value) {
        return toString.call(value) === '[object RegExp]';
    };

    // are given values same type?
    // prevent NaN, Number same type check
    is.sameType = function(value1, value2) {
        if(is.nan(value1) || is.nan(value2)) {
            return is.nan(value1) === is.nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    };
    // sameType method does not support 'all' and 'any' interfaces
    is.sameType.api = ['not'];

    // is a given value String?
    is.string = function(value) {
        return toString.call(value) === '[object String]';
    };

    // is a given value Char?
    is.char = function(value) {
        return is.string(value) && value.length === 1;
    };

    // is a given value undefined?
    is.undefined = function(value) {
        return value === void 0;
    };

    // Presence checks
    /* -------------------------------------------------------------------------- */

    //is a given value empty? Objects, arrays, strings
    is.empty = function(value) {
        if(is.object(value)){
            var num = Object.getOwnPropertyNames(value).length;
            if(num === 0 || (num === 1 && is.array(value)) || (num === 2 && is.arguments(value))){
                return true;
            }
            return false;
        } else {
            return value === '';
        }
    };

    // is a given value existy?
    is.existy = function(value) {
        return value !== null && value !== undefined;
    };

    // is a given value truthy?
    is.truthy = function(value) {
        return is.existy(value) && value !== false && is.not.nan(value) && value !== "" && value !== 0;
    };

    // is a given value falsy?
    is.falsy = not(is.truthy);

    // is a given value space?
    // horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
    is.space =  function(value) {
        if(is.char(value)) {
            var characterCode = value.charCodeAt(0);
            return (characterCode >  8 && characterCode < 14) || characterCode === 32;
        } else {
            return false;
        }
    };

    // Arithmetic checks
    /* -------------------------------------------------------------------------- */

    // are given values equal? supports numbers, strings, regexps, booleans
    // TODO: Add object and array support
    is.equal = function(value1, value2) {
        // check 0 and -0 equity with Infinity and -Infinity
        if(is.all.number(value1, value2)) {
            return value1 === value2 && 1 / value1 === 1 / value2;
        }
        // check regexps as strings too
        if(is.all.string(value1, value2) || is.all.regexp(value1, value2)) {
            return '' + value1 === '' + value2;
        }
        if(is.all.boolean(value1, value2)) {
            return value1 === value2;
        }
        return false;
    };
    // equal method does not support 'all' and 'any' interfaces
    is.equal.api = ['not'];

    // is a given number even?
    is.even = function(numb) {
        return is.number(numb) && numb % 2 === 0;
    };

    // is a given number odd?
    is.odd = function(numb) {
        return is.number(numb) && numb % 2 !== 0;
    };

    // is a given number positive?
    is.positive = function(numb) {
        return is.number(numb) && numb > 0;
    };

    // is a given number negative?
    is.negative = function(numb) {
        return is.number(numb) && numb < 0;
    };

    // is a given number above minimum parameter?
    is.above = function(numb, min) {
        return is.all.number(numb, min) && numb > min;
    };
    // above method does not support 'all' and 'any' interfaces
    is.above.api = ['not'];

    // is a given number above maximum parameter?
    is.under = function(numb, max) {
        return is.all.number(numb, max) && numb < max;
    };
    // least method does not support 'all' and 'any' interfaces
    is.under.api = ['not'];

    // is a given number within minimum and maximum parameters?
    is.within = function(numb, min, max) {
        return is.all.number(numb, min, max) && numb > min && numb < max;
    };
    // within method does not support 'all' and 'any' interfaces
    is.within.api = ['not'];

    // is a given number decimal?
    is.decimal = function(numb) {
        return is.number(numb) && numb % 1 !== 0;
    };

    // is a given number integer?
    is.integer = function(numb) {
        return is.number(numb) && numb % 1 === 0;
    };

    // is a given number finite?
    is.finite = isFinite || function(numb) {
        return numb !== Infinity && numb !== -Infinity && is.not.nan(numb);
    };

    // is a given number infinite?
    is.infinite = not(is.finite);

    // Regexp checks
    /* -------------------------------------------------------------------------- */
    // Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
    // Scott Gonzalez: Email address validation

    // eppPhone match extensible provisioning protocol format
    // nanpPhone match north american number plan format
    // dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
    // time match hours, minutes, and seconds, 24-hour clock
    var regexps = {
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        hexadecimal: /^[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    };

    // create regexp checks methods from 'regexp' object
    for(var regexp in regexps) {
        if(regexps.hasOwnProperty(regexp)) {
            regexpCheck(regexp, regexps);
        }
    }

    function regexpCheck(regexp, regexps) {
        is[regexp] = function(value) {
            return regexps[regexp].test(value);
        };
    }

    // String checks
    /* -------------------------------------------------------------------------- */

    // is a given string include parameter substring?
    is.include = function(str, substr) {
        return str.indexOf(substr) > -1;
    };
    // include method does not support 'all' and 'any' interfaces
    is.include.api = ['not'];

    // is a given string all uppercase?
    is.upperCase = function(str) {
        return is.string(str) && str === str.toUpperCase();
    };

    // is a given string all lowercase?
    is.lowerCase = function(str) {
        return is.string(str) && str === str.toLowerCase();
    };

    // is string start with a given startWith parameter?
    is.startWith = function(str, startWith) {
        return is.string(str) && str.indexOf(startWith) === 0;
    };
    // startWith method does not support 'all' and 'any' interfaces
    is.startWith.api = ['not'];

    // is string end with a given endWith parameter?
    is.endWith = function(str, endWith) {
        return is.string(str) && str.indexOf(endWith) > -1 && str.indexOf(endWith) === str.length -  endWith.length;
    };
    // endWith method does not support 'all' and 'any' interfaces
    is.endWith.api = ['not'];

    // is a given string or sentence capitalized?
    is.capitalized = function(str) {
        if(is.not.string(str)) {
            return false;
        }
        var words = str.split(' ');
        var capitalized = [];
        for(var i = 0; i < words.length; i++) {
            capitalized.push(words[i][0] === words[i][0].toUpperCase());
        }
        return is.all.truthy.apply(null, capitalized);
    };

    // is a given string palindrome?
    is.palindrome = function(str) {
        return is.string(str) && str == str.split('').reverse().join('');
    };

    // Time checks
    /* -------------------------------------------------------------------------- */

    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    // is a given date indicate today?
    is.today = function(obj) {
        var now = new Date();
        var todayString = now.toDateString();
        return is.date(obj) && obj.toDateString() === todayString;
    };

    // is a given date indicate yesterday?
    is.yesterday = function(obj) {
        var now = new Date();
        var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
        return is.date(obj) && obj.toDateString() === yesterdayString;
    };

    // is a given date indicate tomorrow?
    is.tomorrow = function(obj) {
        var now = new Date();
        var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
        return is.date(obj) && obj.toDateString() === tomorrowString;
    };

    // is a given date past?
    is.past = function(obj) {
        var now = new Date();
        return is.date(obj) && obj.getTime() < now.getTime();
    };

    // is a given date future?
    is.future = not(is.past);

    // is a given dates day equal given dayString parameter?
    is.day = function(obj, dayString) {
        return is.date(obj) && dayString.toLowerCase() === days[obj.getDay()];
    };
    // day method does not support 'all' and 'any' interfaces
    is.day.api = ['not'];

    // is a given dates month equal given monthString parameter?
    is.month = function(obj, monthString) {
        return is.date(obj) && monthString.toLowerCase() === months[obj.getMonth()];
    };
    // month method does not support 'all' and 'any' interfaces
    is.month.api = ['not'];

    // is a given dates year equal given year parameter?
    is.year = function(obj, year) {
        return is.date(obj) && is.number(year) && year === obj.getFullYear();
    };
    // year method does not support 'all' and 'any' interfaces
    is.year.api = ['not'];

    // is the given year a leap year?
    is.leapYear = function(year) {
        return is.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    };

    // is a given date weekend?
    // 6: Saturday, 0: Sunday
    is.weekend = function(obj) {
        return is.date(obj) && (obj.getDay() === 6 || obj.getDay() === 0);
    };

    // is a given date weekday?
    is.weekday = not(is.weekend);

    // is date within given range?
    is.inDateRange = function(obj, startObj, endObj) {
        if(is.not.date(obj) || is.not.date(startObj) || is.not.date(endObj)) {
            return false;
        }
        var givenDate = obj.getTime();
        var start = startObj.getTime();
        var end = endObj.getTime();
        return givenDate > start && givenDate < end;
    };
    // inDateRange method does not support 'all' and 'any' interfaces
    is.inDateRange.api = ['not'];

    // is a given date in last week range?
    is.inLastWeek = function(obj) {
        return is.inDateRange(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
    };

    // is a given date in last month range?
    is.inLastMonth = function(obj) {
        return is.inDateRange(obj, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
    };

    // is a given date in last year range?
    is.inLastYear = function(obj) {
        return is.inDateRange(obj, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
    };

    // is a given date in next week range?
    is.inNextWeek = function(obj) {
        return is.inDateRange(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
    };

    // is a given date in next month range?
    is.inNextMonth = function(obj) {
        return is.inDateRange(obj, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
    };

    // is a given date in next year range?
    is.inNextYear = function(obj) {
        return is.inDateRange(obj, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
    };

    // is a given date in the parameter quarter?
    is.quarterOfYear = function(obj, quarterNumber) {
        return is.date(obj) && is.number(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
    };
    // quarterOfYear method does not support 'all' and 'any' interfaces
    is.quarterOfYear.api = ['not'];

    // is a given date in daylight saving time?
    is.dayLightSavingTime = function(obj) {
        var january = new Date(obj.getFullYear(), 0, 1);
        var july = new Date(obj.getFullYear(), 6, 1);
        var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
        return obj.getTimezoneOffset() < stdTimezoneOffset;
    };

    // Environment checks
    /* -------------------------------------------------------------------------- */

    // check if library is used as a Node.js module
    if(typeof window !== 'undefined') {

        // store navigator properties to use later
        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

        // is current browser chrome?
        is.chrome = function() {
            return /chrome|chromium/i.test(userAgent) && /google inc/.test(vendor);
        };
        // chrome method does not support 'all' and 'any' interfaces
        is.chrome.api = ['not'];

        // is current browser firefox?
        is.firefox = function() {
            return /firefox/i.test(userAgent);
        };
        // firefox method does not support 'all' and 'any' interfaces
        is.firefox.api = ['not'];

        // is current browser internet explorer?
        // parameter is optional
        is.ie = function(version) {
            if(!version) {
                return /msie/i.test(userAgent) || "ActiveXObject" in window;
            }
            if(version >= 11) {
                return "ActiveXObject" in window;
            }
            return new RegExp('msie ' + version).test(userAgent);
        };
        // ie method does not support 'all' and 'any' interfaces
        is.ie.api = ['not'];

        // is current browser opera?
        is.opera = function() {
            return /^Opera\//.test(userAgent) || // Opera 12 and older versions
                /\x20OPR\//.test(userAgent); // Opera 15+
        };
        // opera method does not support 'all' and 'any' interfaces
        is.opera.api = ['not'];

        // is current browser safari?
        is.safari = function() {
            return /safari/i.test(userAgent) && /apple computer/i.test(vendor);
        };
        // safari method does not support 'all' and 'any' interfaces
        is.safari.api = ['not'];

        // is current device ios?
        is.ios = function() {
            return is.iphone() || is.ipad() || is.ipod();
        };
        // ios method does not support 'all' and 'any' interfaces
        is.ios.api = ['not'];

        // is current device iphone?
        is.iphone = function() {
            return /iphone/i.test(userAgent);
        };
        // iphone method does not support 'all' and 'any' interfaces
        is.iphone.api = ['not'];

        // is current device ipad?
        is.ipad = function() {
            return /ipad/i.test(userAgent);
        };
        // ipad method does not support 'all' and 'any' interfaces
        is.ipad.api = ['not'];

        // is current device ipod?
        is.ipod = function() {
            return /ipod/i.test(userAgent);
        };
        // ipod method does not support 'all' and 'any' interfaces
        is.ipod.api = ['not'];

        // is current device android?
        is.android = function() {
            return /android/i.test(userAgent);
        };
        // android method does not support 'all' and 'any' interfaces
        is.android.api = ['not'];

        // is current device android phone?
        is.androidPhone = function() {
            return /android/i.test(userAgent) && /mobile/i.test(userAgent);
        };
        // androidPhone method does not support 'all' and 'any' interfaces
        is.androidPhone.api = ['not'];

        // is current device android tablet?
        is.androidTablet = function() {
            return /android/i.test(userAgent) && !/mobile/i.test(userAgent);
        };
        // androidTablet method does not support 'all' and 'any' interfaces
        is.androidTablet.api = ['not'];

        // is current device blackberry?
        is.blackberry = function() {
            return /blackberry/i.test(userAgent) || /BB10/i.test(userAgent);
        };
        // blackberry method does not support 'all' and 'any' interfaces
        is.blackberry.api = ['not'];

        // is current device desktop?
        is.desktop = function() {
            return is.not.mobile() && is.not.tablet();
        };
        // desktop method does not support 'all' and 'any' interfaces
        is.desktop.api = ['not'];

        // is current operating system linux?
        is.linux = function() {
            return /linux/i.test(appVersion);
        };
        // linux method does not support 'all' and 'any' interfaces
        is.linux.api = ['not'];

        // is current operating system mac?
        is.mac = function() {
            return /mac/i.test(appVersion);
        };
        // mac method does not support 'all' and 'any' interfaces
        is.mac.api = ['not'];

        // is current operating system windows?
        is.windows = function() {
            return /win/i.test(appVersion);
        };
        // windows method does not support 'all' and 'any' interfaces
        is.windows.api = ['not'];

        // is current device windows phone?
        is.windowsPhone = function() {
            return is.windows() && /phone/i.test(userAgent);
        };
        // windowsPhone method does not support 'all' and 'any' interfaces
        is.windowsPhone.api = ['not'];

        // is current device windows tablet?
        is.windowsTablet = function() {
            return is.windows() && is.not.windowsPhone() && /touch/i.test(userAgent);
        };
        // windowsTablet method does not support 'all' and 'any' interfaces
        is.windowsTablet.api = ['not'];

        // is current device mobile?
        is.mobile = function() {
            return is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone();
        };
        // mobile method does not support 'all' and 'any' interfaces
        is.mobile.api = ['not'];

        // is current device tablet?
        is.tablet = function() {
            return is.ipad() || is.androidTablet() || is.windowsTablet();
        };
        // tablet method does not support 'all' and 'any' interfaces
        is.tablet.api = ['not'];

        // is current state online?
        is.online = function() {
            return navigator.onLine;
        };
        // online method does not support 'all' and 'any' interfaces
        is.online.api = ['not'];

        // is current state offline?
        is.offline = not(is.online);
        // offline method does not support 'all' and 'any' interfaces
        is.offline.api = ['not'];

        // is current device supports touch?
        is.touchDevice = function() {
            return 'ontouchstart' in window ||'DocumentTouch' in window && document instanceof DocumentTouch;
        };
        // touchDevice method does not support 'all' and 'any' interfaces
        is.touchDevice.api = ['not'];
    }

    // Object checks
    /* -------------------------------------------------------------------------- */

    // has a given object got parameterized count property?
    is.propertyCount = function(obj, count) {
        if(!is.object(obj) || !is.number(count)) {
            return false;
        }
        if(Object.keys) {
            return Object.keys(obj).length === count;
        }
        var properties = [],
            property;
        for(property in obj) {
            if (hasOwnProperty.call(obj, property)) {
                properties.push(property);
            }
        }
        return properties.length === count;
    };
    // propertyCount method does not support 'all' and 'any' interfaces
    is.propertyCount.api = ['not'];

    // is given object has parameterized property?
    is.propertyDefined = function(obj, property) {
        return is.object(obj) && is.string(property) && property in obj;
    };
    // propertyDefined method does not support 'all' and 'any' interfaces
    is.propertyDefined.api = ['not'];

    // is a given object window?
    // setInterval method is only available for window object
    is.windowObject = function(obj) {
        return typeof obj === 'object' && 'setInterval' in obj;
    };

    // is a given object a DOM node?
    is.domNode = function(obj) {
        return is.object(obj) && obj.nodeType > 0;
    };

    // Array checks
    /* -------------------------------------------------------------------------- */

    // is a given item in an array?
    is.inArray = function(val, arr){
        if(is.not.array(arr)) {
            return false;
        }
        for(var i = 0; i < arr.length; i++) {
            if (arr[i] === val) return true;
        }
        return false;
    };
    // inArray method does not support 'all' and 'any' interfaces
    is.inArray.api = ['not'];

    // is a given array sorted?
    is.sorted = function(arr) {
        if(is.not.array(arr)) {
            return false;
        }
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i + 1]) return false;
        }
        return true;
    };

    // API
    // Set 'not', 'all' and 'any' interfaces to methods based on their api property
    /* -------------------------------------------------------------------------- */

    function setInterfaces() {
        var options = is;
        for(var option in options) {
            if(hasOwnProperty.call(options, option) && is.function(options[option])) {
                var interfaces = options[option].api || ['not', 'all', 'any'];
                for (var i = 0; i < interfaces.length; i++) {
                    if(interfaces[i] === 'not') {
                        is.not[option] = not(is[option]);
                    }
                    if(interfaces[i] === 'all') {
                        is.all[option] = all(is[option]);
                    }
                    if(interfaces[i] === 'any') {
                        is.any[option] = any(is[option]);
                    }
                }
            }
        }
    }
    setInterfaces();

    // Configuration methods
    // Intentionally added after setInterfaces function
    /* -------------------------------------------------------------------------- */

    // set optional regexps to methods if you think they suck
    is.setRegexp = function(regexp, regexpName) {
        for(var r in regexps) {
            if(hasOwnProperty.call(regexps, r) && (regexpName === r)) {
                regexps[r] = regexp;
            }
        }
    };

    // change namespace of library to prevent name collisions
    // var preferredName = is.setNamespace();
    // preferredName.odd(3);
    // => true
    is.setNamespace = function() {
        root.is = previousIs;
        return this;
    };

    return is;
}));


////////////////////////////////
//////////////////////////////  VERSIONING: X.X.XXr
//////////////////////////////  DO NOT CHANGE
////////////////////////////////

if (is.ie() || is.safari() || is.opera()) {
  alert("This browser is unsupported by Swearify.");
}

// FOR OUR PORPUSES,
// AND BECAUSE REGEXP IS FUCKING SLOW,
// AND BECAUSE KAFF IS A RETARD,
// EVERYTHING SHOULD BE PRE-DONE

// MAKING REGEX ON THE FLY IS UNRELIABLE. DON'T DO IT.

var swear_words = [
/([fF]+)([uU]+)([cC]+)([kK]+)/g,
/([sS]+)([hH]+)([iI]+)([tT]+)/g,
/([bB]+)([aA]+)([sS]+)([tT]+)([aA]+)([rR]+)([dD]+)/g,
/([wW]+)([hH]+)([oO]+)([rR]+)([eE]+)/g,
/([dD]+)([iI]+)([cC]+)([kK]+)/g,
/([fF]+)([aA]+)([gG]+)([gG]+)([oO]+)([tT]+)/g,
/([rR]+)([aA]+)([pP]+)([eE]+)/g,
/([aA]+)([sS]+)([sS]+)([hH]+)([oO]+)([lL]+)([eE]+)/g,
/([aA]+)([sS]+)([sS]+)/g,
/([aA]+)([rR]+)([sS]+)([eE]+)/g,
/([bB]+)([oO]+)([nN]+)([eE]+)([rR]+)/g,
/([cC]+)([uU]+)([mM]+)/g,
/([bB]+)([iI]+)([tT]+)([cC]+)([hH]+)/g,
/([lL]+)([eE]+)([sS]+)([bB]+)([iI]+)([aA]+)([nN]+)/g,
/([sS]+)([hH]+)([iI]+)([fF]+)([tT]+)/g,
/([cC]+)([oO]+)([cC]+)([kK]+)/g,
/([gG]+)([aA]+)([yY]+)/g,
/([fF]+)([aA]+)([gG]+)/g,
/([pP]+)([oO]+)([rR]+)([nN]+)/g,
/([mM]+)([iI]+)([lL]+)([fF]+)/g,
/([dD]+)([aA]+)([mM]+)([nN]+)/g,
/([sS]+)([eE]+)([mM]+)([eE]+)([nN]+)/g,
/([dD]+)([iI]+)([dD]+)([kK]+)/g,
/([tT]+)([iI]+)([tT]+)/g,
/([pP]+)([iI]+)([sS]+)([sS]+)/g,
/([pP]+)([uU]+)([sS]+)([sS]+)([yY]+)/g,
/(\:+)(3+)/g,
/([gG]+)([iI]+)([tT]+)/g,
/([dD]+)([aA]+)([aA]+)/g,
/([fF]+)([aA]+)([pP]+)/g,
/([pP]+)([eE]+)([nN]+)([iI]+)([sS]+)/g,
/([fF]+)([oO]+)([xX]+)([yY]+)/g,
/([sS]+)([cC]+)([rR]+)([eE]+)([wW]+)/g,
/([aA]+)([nN]+)([uU]+)([sS]+)/g,
/([fF]+)([uU]+)/g,
/([sS]+)([eE]+)([xX]+)/g,
/([aA]+)([nN]+)([aA]+)([lL]+)/g,
/([dD]+)([iI]+)([sS]+)([kK]+)/g,
/([sS]+)([lL]+)([uU]+)([tT]+)/g,
/([cC]+)([oO]+)([mM]+)([eE]+)([bB]+)([aA]+)([cC]+)([kK]+)/g,
/([hH]+)([oO]+)([eE]+)/g,
/([sS]+)([hH]+)([iI]+)([rR]+)([tT]+)/g,
/([cC]+)([uU]+)([nN]+)([tT]+)/g,
/([sS]+)([tT]+)([aA]+)([lL]+)([kK]+)([eE]+)([rR]+)/g,
/([tT]+)([oO]+)([fF]+)([uU]+)/g,
/([vV]+)([aA]+)([gG]+)([iI]+)([nN]+)([aA]+)/g,
/([hH]+)([oO]+)([mM]+)([oO]+)/g,
/([cC]+)([rR]+)([aA]+)([pP]+)/g,
/([wW]+)([aA]+)([iI]+)([fF]+)([uU]+)/g,
/([dD]+)([oO]+)([uU]+)([cC]+)([hH]+)([eE]+)/g,
/([pP]+)([rR]+)([iI]+)([cC]+)([kK]+)/g,
/([mM]+)([oO]+)([tT]+)([hH]+)([eE]+)([rR]+)([fF]+)/g,
/([sS]+)([hH]+)([iI]+)([zZ]+)([nN]+)([iI]+)([tT]+)/g,
/([tT]+)([uU]+)([rR]+)([dD]+)/g,
/([dD]+)([iI]+)([pP]+)/g,
/([dD]+)([iI]+)([kK]+)/g,
/([sS]+)([hH]+)(\!+)([tT]+)/g,
/([sS]+)([hH]+)([tT]+)/g,
/([sS]+)([hH]+)([iI]+)/g,
/([sS]+)([tT]+)([fF]+)([uU]+)/g,
/([hH]+)([oO]+)([rR]+)([eE]+)/g,
/([tT]+)([eE]+)([sS]+)([tT]+)([iI]+)([cC]+)([lL]+)([eE]+)([sS]+)/g
];

var swear_noregex = [
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
"shi", "stfu", "hore", "testicles"
];
///////

///////SMILY CODE, OBJECT SHIT
var emoticon = {
dolan: [':dolan:', 'http://oi62.tinypic.com/2lsk7ra.jpg', 'Dolan'],
lysf: [':lysf:', 'http://i.imgur.com/8eLDb0a.png', 'LYSF'],
bed: [':bed:', 'http://i58.tinypic.com/14tlq4g.png', 'Bed'],
buzz: [':buzz:', 'http://i61.tinypic.com/11hza0i.png', 'buzz'],
waterc: [':waterc:', 'http://i61.tinypic.com/161dc7b.png', 'waterc'],
cozy: [':cozy:', 'http://i57.tinypic.com/25tcbw9.png', 'cozy'],
ween: [':ween:', 'http://i61.tinypic.com/24c9m2x.png', 'ween'],
smoker: [':smoker:', 'http://i.imgur.com/oayZBiW.png', 'smoker'],
hug: [':hug:', 'http://i.imgur.com/2rbLxWH.png', 'hug'],
wp: [':wp:', 'http://i.imgur.com/3nGF3HF.png', 'wp'],
hide: [':hide:', 'http://i58.tinypic.com/11gjf4p.png', 'hide'],
kind: [':kind:', 'http://i.imgur.com/M2lLpSW.png', 'kind'],
frog3: [':frog3:', 'http://i57.tinypic.com/r20u3l.png', 'frog3'],
feels: [':feels:', 'http://i58.tinypic.com/a49d2h.png', 'feels'],
fly: [':fly:', 'http://i.imgur.com/GnFj20L.png', 'fly'],
frog4: [':frog4:', 'http://i58.tinypic.com/e6wsao.png', 'frog4'],
wink: [':wink:', 'http://i58.tinypic.com/29qo3vc.png', 'wink'],
dubs: [':dubs:', 'http://i62.tinypic.com/29y09br.png', 'dubs'],
oceanb: [':oceanb:', 'http://i.imgur.com/biE5mVs.png', 'oceanb'],
mollusk: [':mollusk:', 'http://i.imgur.com/EQ7H4r1.png', 'mollusk'],
hah: [':hah:', 'http://i58.tinypic.com/dxd92w.png', 'hah'],
hue: [':hue:', 'http://i57.tinypic.com/20tjpy1.png', 'hue'],
wpony: [':wpony:', 'http://i.imgur.com/OBSRlXU.png', 'wpony'],
bend: [':bend:', 'http://i.imgur.com/Rcf2aZn.png', 'bend'],
yhf: [':yhf:', 'http://i60.tinypic.com/152ozl0.png', 'yhf'],
smug: [':smug:', 'http://i61.tinypic.com/11trl93.png', 'smug'],
am: [':am:', 'http://i.imgur.com/W6b3Ojy.png', 'am'],
riot: [':riot:', 'http://i.imgur.com/exN4785.png', 'riot'],
blaze: [':blaze:', 'http://i60.tinypic.com/14ul0nd.png', 'blaze'],
afx: [':afx:', 'http://i.imgur.com/r5o9xXL.png', 'afx'],
strokes1: [':strokes1:', 'http://i.imgur.com/IhuPM4O.png', 'strokes1'],
wave: [':wave:', 'http://i61.tinypic.com/6rk6ds.gif', 'wave'],
johnny: [':johnny:', 'http://i.imgur.com/vBzuuFZ.jpg', 'johnny'],
sloth: [':sloth:', 'http://i59.tinypic.com/16idto7.gif', 'sloth'],
autobahn: [':autobahn:', 'http://i.imgur.com/7HlKkKx.png', 'autobahn'],
lmao: [':lmao:', 'http://i58.tinypic.com/jhec78.png', 'lmao'],
yup: [':yup:', 'http://i61.tinypic.com/wqr6te.png', 'yup'],
ayylmao: [':ayylmao:', 'http://i62.tinypic.com/16islyd.png', 'ayylmao'],
sip: [':sip:', 'http://i60.tinypic.com/r22k5w.png', 'sip'],
frog5: [':frog5:', 'http://i60.tinypic.com/dgkwef.png', 'frog5'],
cool: [':cool:', 'http://i62.tinypic.com/22lxmw.png', 'cool'],
whew: [':whew:', 'http://i60.tinypic.com/rsy4ck.png', 'whew'],
err: [':err:', 'http://i58.tinypic.com/23k5hme.png', 'err'],
sadfrog: [':sadfrog:', 'http://i59.tinypic.com/15yhwd0.png', 'sadfrog'],
notimpr: [':notimpr:', 'http://i.imgur.com/UJ2Pcqf.png', 'notimpr'],
murdoc: [':murdoc:', 'http://i.imgur.com/kzK8RfX.png', 'murdoc'],
notsure: [':notsure:', 'http://i57.tinypic.com/156fhnt.png', 'notsure'],
maddy: [':maddy:', 'http://i.imgur.com/FF8occF.png', 'maddy'],
dead: [':dead:', 'http://i.imgur.com/9yw2sIe.png', 'dead'],
snake: [':snake:', 'http://i59.tinypic.com/52hwf5.png', 'snake'],
thom: [':thom:', 'http://i.imgur.com/Z5Oo4IU.png', 'thom'],
snakepoo: [':snakepoo:', 'http://i59.tinypic.com/2462ln5.png', 'snakepoo'],
squid: [':squid:', 'http://i.imgur.com/Xzqc4dL.png', 'squid'],
madfrog: [':madfrog:', 'http://i60.tinypic.com/3097j1c.png', 'madfrog'],
fatsnake: [':fatsnake:', 'http://i61.tinypic.com/i3gl03.jpg', 'fatsnake'],
supa: [':supa:', 'http://i58.tinypic.com/2dsl0rb.gif', 'supa'],
sadsmile: [':sadsmile:', 'http://i60.tinypic.com/90vlw1.jpg', 'sadsmile'],
hmmfrog: [':hmmfrog:', 'http://i58.tinypic.com/351d381.png', 'hmmfrog'],
lookingin: [':lookingin:', 'http://i60.tinypic.com/veuf4.png', 'lookingin'],
froggy: [':froggy:', 'http://i57.tinypic.com/2ywy1ci.png', 'froggy'],
spurdo: [':spurdo:', 'http://i62.tinypic.com/oaqf78.png', 'spurdo'],
wat: [':wat:', 'http://i61.tinypic.com/34h7udk.png', 'wat'],
tru: [':tru:', 'http://i61.tinypic.com/2ut6u6g.png', 'tru'],
egg: [':egg:', 'http://i.imgur.com/Xro7lrY.png', 'egg'],
isay: [':isay:', 'http://i57.tinypic.com/2mouzw4.gif', 'isay'],
cute: [':cute:', 'http://i60.tinypic.com/4g3y88.png', 'cute'],
pointy: [':pointy:', 'http://i57.tinypic.com/o547r8.gif', 'pointy'],
beet: [':beet:', 'http://i59.tinypic.com/6fs300.png', 'beet'],
bacon: [':bacon:', 'http://i58.tinypic.com/8xn711.png', 'bacon'],
hangon: [':hangon:', 'http://i62.tinypic.com/2ihxrbp.png', 'hangon'],
laul: [':laul:', 'http://i61.tinypic.com/mtt4zk.png', 'laul'],
damon: [':damon:', 'http://i62.tinypic.com/343smxf.png', 'damon'],
foff: [':foff:', 'http://i58.tinypic.com/25ks8c5.png', 'foff'],
jazz: [':jazz:', 'http://i.imgur.com/YMKJdXo.png', 'jazz'],
quebec: [':quebec:', 'http://i.imgur.com/gpxdYTQ.png', 'quebec'],
gws: [':gws:', 'http://i.imgur.com/0D0VMkx.png', 'gws'],
neckbeard: [':neckbeard:', 'http://i57.tinypic.com/iqamad.png', 'neckbeard'],
troll: [':troll:', 'http://i58.tinypic.com/13zcxt1.png', 'troll'],
bunny: [':bunny:', 'http://i58.tinypic.com/6ieiqb.png', 'bunny'],
dew: [':dew:', 'http://i57.tinypic.com/sdn0ok.png', 'dew'],
doritos: [':doritos:', 'http://i62.tinypic.com/1pxno3.png', 'doritos'],
frogcry1: [':frogcry1:', 'http://i62.tinypic.com/2mniqlj.png', 'frogcry1'],
frogcry2: [':frogcry2:', 'http://i57.tinypic.com/2585ees.png', 'frogcry2'],
bshark: [':bshark:', 'http://i59.tinypic.com/2qu6qdu.png', 'bshark'],
banana: [':banana:', 'http://i60.tinypic.com/25auiky.png', 'banana'],
consider: [':consider:', 'http://i62.tinypic.com/1z20r39.png', 'consider'],
hlaugh: [':hlaugh:', 'http://i59.tinypic.com/24vnq4y.png', 'hlaugh'],
madman: [':madman:', 'http://i62.tinypic.com/2d1wbro.png', 'madman'],
eating: [':eating:', 'http://i59.tinypic.com/2962fya.png', 'eating'],
mpizza: [':mpizza:', 'http://i61.tinypic.com/w2h8p1.png', 'mpizza'],
creepsmile: [':creepsmile:', 'http://i61.tinypic.com/a40i3b.png', 'creepsmile'],
allyours: [':allyours:', 'http://i61.tinypic.com/2i1egzl.png', 'allyours'],
heythere: [':heythere:', 'http://i60.tinypic.com/vxy9sh.png', 'heythere'],
disgust: [':disgust:', 'http://i59.tinypic.com/nnjll1.png', 'disgust'],
disgust2: [':disgust2:', 'http://i57.tinypic.com/qn92rr.png', 'disgust 2'],
canteven: [':canteven:', 'http://i60.tinypic.com/abk7.png', 'canteven'],
saddance: [':saddance:', 'http://i58.tinypic.com/70gzdf.png', 'saddance'],
alienfrog: [':alienfrog:', 'http://i59.tinypic.com/2zzmcuq.png', 'alienfrog'],
sadjello: [':sadjello:', 'http://i62.tinypic.com/2lnyel1.png', 'sadjello'],
dogfrog: [':dogfrog:', 'http://i59.tinypic.com/19mg5y.png', 'dogfrog'],
edd: [':edd:', 'http://i60.tinypic.com/28bf8gj.png', 'edd'],
cfrog: [':cfrog:', 'http://i62.tinypic.com/rkq3bs.png', 'cfrog'],
weed: [':weed:', 'http://i58.tinypic.com/2rzvse1.png', 'weed'],
roku: [':roku:', 'http://i59.tinypic.com/9u8008.png', 'roku'],
nokia: [':nokia:', 'http://i57.tinypic.com/33a43z8.jpg', 'nokia'],
spidey: [':spidey:', 'http://i58.tinypic.com/2116k9s.png', 'spidey'],
winner: [':winner:', 'http://i61.tinypic.com/2l9c8g.png', 'winner'],
bird: [':bird:', 'http://i57.tinypic.com/e96iy8.png', 'bird'],
bang: [':bang:', 'http://i59.tinypic.com/zlog1v.png', 'bang'],
feelgood: [':feelgood:', 'http://i61.tinypic.com/2mx3861.png', 'feelgood'],
annoyed: [':annoyed:', 'http://i61.tinypic.com/330crw8.png', 'annoyed'],
vannoyed: [':vannoyed:', 'http://i57.tinypic.com/2psovb9.png', 'vannoyed'],
fell: [':fell:', 'http://i58.tinypic.com/rvhgg6.png', 'fell'],
usure: [':usure:', 'http://i58.tinypic.com/2z7okk5.png', 'usure'],
pipe: [':pipe:', 'http://i57.tinypic.com/3165izb.png', 'pipe'],
sip2: [':sip2:', 'http://i62.tinypic.com/2luqses.png', 'sip2'],
butt: [':butt:', 'http://i62.tinypic.com/mjb9jd.png', 'butt'],
notpleased: [':notpleased:', 'http://i61.tinypic.com/6tijao.png', 'notpleased'],
disdain: [':disdain:', 'http://i58.tinypic.com/331oc4y.png', 'disdain'],
bman: [':bman:', 'http://i61.tinypic.com/116m3i9.png', 'bman'],
smugfeel: [':smugfeel:', 'http://i62.tinypic.com/157kux5.jpg', 'smugfeel'],
head: [':head:', 'http://i59.tinypic.com/9sfekg.png', 'head'],
fack: [':fack:', 'http://i59.tinypic.com/20u8qcz.png', 'fack'],
cryin: [':cryin:', 'http://i58.tinypic.com/fdwn0o.png', 'cryin'],
cwofl: [':cwofl:', 'http://i60.tinypic.com/2gwvmts.png', 'cwofl'],
madwofl: [':madwofl:', 'http://i57.tinypic.com/insemu.png', 'madwofl'],
guilty: [':guilty:', 'http://i58.tinypic.com/2jeogtd.png', 'guilty'],
mellow: [':mellow:', 'http://i58.tinypic.com/2zqd92p.png', 'mellow'],
dealw: [':dealw:', 'http://i62.tinypic.com/31314sg.png', 'dealw'],
heman: [':heman:', 'http://i61.tinypic.com/35ivon7.png', 'heman'],
bother: [':bother:', 'http://i58.tinypic.com/2e181ap.png', 'bother'],
grin: [':grin:', 'http://i59.tinypic.com/14djdjl.png', 'grin'],
muchwow: [':muchwow:', 'http://i62.tinypic.com/2rrt8p0.png', 'muchwow'],
stepup: [':stepup:', 'http://i60.tinypic.com/x3acnn.png', 'stepup'],
zerolol: [':zerolol:', 'http://i57.tinypic.com/2llzlnl.png', 'zerolol'],
biggrin: [':biggrin:', 'http://i62.tinypic.com/sfgdqx.png', 'biggrin'],
iamworry: [':iamworry:', 'http://i62.tinypic.com/r0dn4m.png', 'iamworry'],
nope: [':nope:', 'http://i58.tinypic.com/2mg2mpk.png', 'nope'],
krabs: [':krabs:', 'http://i61.tinypic.com/353b5ht.png', 'krabs'],
feelsgood: [':feelsgood:', 'http://i61.tinypic.com/1z4v38p.png', 'feelsgood'],
sanicpepe: [':sanicpepe:', 'http://i61.tinypic.com/2hdmr2f.png', 'sanicpepe'],
normalsmug: [':normalsmug:', 'http://i58.tinypic.com/2s0k8hs.png', 'normalsmug'],
nervous: [':nervous:', 'http://i60.tinypic.com/ae1n5y.png', 'nervous'],
escalation: [':escalation:', 'http://i59.tinypic.com/148pzl2.png', 'escalation'],
terror: [':terror:', 'http://i58.tinypic.com/2uqoo0k.png', 'terror'],
rageon: [':rageon:', 'http://i57.tinypic.com/flj628.png', 'rageon'],
noclothes: [':noclothes:', 'http://i61.tinypic.com/2hh2361.png', 'noclothes'],
waifoos: [':waifoos:', 'http://i57.tinypic.com/2cehr0o.png', 'waifoos'],
hypetrain: [':hypetrain:', 'http://i61.tinypic.com/3448old.png', 'hypetrain'],
bigxd: [':bigxd:', 'http://i59.tinypic.com/154d8bd.png', 'bigxd'],
fonz: [':fonz:', 'http://i61.tinypic.com/2mnhyld.png', 'fonz'],
mrbean: [':mrbean:', 'http://i61.tinypic.com/1127csk.png', 'mr bean'],
mlady: [':mlady:', 'http://i57.tinypic.com/1zf7vpv.gif', '\'mlady'],
lick: [':lick:', 'http://i57.tinypic.com/208w9j9.png', 'lick'],
nogf: [':nogf:', 'http://i58.tinypic.com/1191f7o.png', 'nogf'],
mint: [':mint:', 'http://i60.tinypic.com/2hzkc5y.png', 'mint'],
devious: [':devious:', 'http://i61.tinypic.com/ol00h3.png', 'devious'],
babyfrogs: [':babyfrogs:', 'http://i58.tinypic.com/5zh7o7.png', 'baby frogs'],
rlpepe: [':rlpepe:', 'http://i61.tinypic.com/25sszo5.png', 'rlpepe'],
besrs: [':besrs:', 'http://i60.tinypic.com/2gtruyd.png', 'besrs'],
cri: [':cri:', 'http://i59.tinypic.com/avj1bq.png', 'cri'],
patrick: [':patrick:', 'http://i58.tinypic.com/ricfet.png', 'patrick'],
standbuy: [':standbuy:', 'http://i61.tinypic.com/2ijt75c.png', 'stand buy'],
notgood: [':notgood:', 'http://i62.tinypic.com/swtet1.jpg', 'not good'],
confident: [':confident:', 'http://i59.tinypic.com/znwqjq.jpg', 'confident'],
cripepe: [':cripepe:', 'http://i58.tinypic.com/2ldbla0.png', 'cri pepe'],
ebinpepe: [':ebinpepe:', 'http://i57.tinypic.com/2mrxj05.png', 'ebin pepe'],
greedypepe: [':greedypepe:', 'http://i59.tinypic.com/k3tcth.png', 'greedy pepe'],
disgust3: [':disgust3:', 'http://i61.tinypic.com/fa90t0.png', 'disgust 3'],
nou: [':nou:', 'http://i60.tinypic.com/n39miv.png', 'nou'],
inspace: [':inspace:', 'http://i59.tinypic.com/25uo7wy.png', 'inspace'],
disgust4: [':disgust4:', 'http://i59.tinypic.com/33aayxd.png', 'disgust 4'],
spooky: [':spooky:', 'http://i59.tinypic.com/2nali87.jpg', 'spooky skelly'],
left: [':left:', 'http://i60.tinypic.com/fjnxig.png', 'left beef'],
dance: [':bdance:', 'http://i57.tinypic.com/ilwzm1.jpg', 'balloon dance'],
froghue: [':fhue:', 'http://i58.tinypic.com/16awhog.png', 'frog hue'],
spin: [':spin:', 'http://i57.tinypic.com/73fe44.jpg', 'spinning'],
fam: [':fam:', 'http://i62.tinypic.com/343orvo.png', 'fam'],
brilliant: [':brill:', 'http://i59.tinypic.com/28h3dc8.png', 'brilliant'],
sharkfrog: [':sfrog:', 'http://i60.tinypic.com/zojamb.png', 'shark frog'],
iduck: [':iduck:', 'http://i60.tinypic.com/zstwzt.png', 'inverted duck'],
happen: [':happen:', 'http://i59.tinypic.com/2rzyzjm.jpg', 'happening'],
winner2: [':winner2:', 'http://i.imgur.com/cFwUmzM.gif', 'content aware WINNER'],
/*chuck: [':chuck:', 'http://i.imgur.com/DZ2pIWf.gif', 'chuck'],
chuck2: [':chuck2:', 'http://i.imgur.com/7WB6Gic.gif', 'chuck2'],
DOXXXXXXED: [':DOXXXXXXED:', 'http://i.imgur.com/y7eyps0.png', 'DOXXXXXXED'],
toazuka: [':toazuka:', 'http://i.imgur.com/VQ9qxQE.png', 'toazuka'],
ttfail: [':ttfail:', 'http://i.imgur.com/eWaObkM.png', 'ttfail'],*/
jew: [':jew:', 'http://i.imgur.com/jowqkg9.gif', 'jew'], //100px
//oldjew: [':oldjew:', 'http://i.imgur.com/pz0mxbA.gif', 'oldjew'], //200px
/*ttjew: [':ttjew:', 'http://i.imgur.com/xeYRU5O.gif', 'ttjew'],
samefag: [':samefag:', 'http://i.imgur.com/bLXx0AX.gif', 'samefag'],
mofo007: [':007mofo:', 'http://i.imgur.com/hr0aB6M.png', '007mofo'],*/
muricaflag: [':muricaflag:', 'http://i.imgur.com/Sy9vZNX.gif', 'muricaflag'],
virus: [':virus:', 'http://i.imgur.com/kZYR3oJ.gif', 'virus'],
/*unsettling: [':unsettling:', 'http://i.imgur.com/C5qQpQR.gif', 'unsettling'],
lennygif: [':lennygif:', 'http://i.imgur.com/D18PxsO.gif', 'lennygif'],
bummer: [':bummer:', 'http://i58.tinypic.com/2zqd92p.png', 'bummer'],*/
damit: [':damit:', 'http://i62.tinypic.com/25sx1kx.png', 'damit'],
spaghetti: [':spaghetti:', 'http://i60.tinypic.com/9vicg9.png', 'mom\'s spaghetti'],
spaghett: [':spaghett:', 'http://i60.tinypic.com/2rptelg.png', 'spaghett!'],
joker: [':joker:', 'http://i57.tinypic.com/25ji1ww.png', "joker"],
ghostpepe: [':gpepe:', 'http://i62.tinypic.com/fkqgr5.png', "ghost pepe"],
sexypepe: [':spepe:', 'http://i60.tinypic.com/2r5qpkz.jpg', "sexy pepe"],
straightd: [':sdubs:', 'http://i59.tinypic.com/6od98l.jpg', "straight outta doubles"],
uglypepe: [':upepe:', 'http://i61.tinypic.com/2qiv800.jpg', "ugly pepe"],
leetpepe: [':1337pepe:', 'http://i.imgur.com/TgrYBQP.gif', "1337 pepe"],
seizurepepe: [':seizurepepe:', 'http://i.imgur.com/Xu5UZpk.gif', "seizure pepe"],
pepeoveryou: [':pepe>you:', 'http://i.imgur.com/5fDk6Z1.gif', "rare pepe > you"],
pepesi: [':pepesi:', 'http://i.imgur.com/bPKbLTq.gif', "PEPEsi"],
pepicasso: [':pepicasso:', 'http://i.imgur.com/rFDnOk7.gif', "peekasso"],
pepe007: [':pepe007:', 'http://i.imgur.com/vRgJvjh.gif', "pepe 007"],
pepeflash: [':pepeflash:', 'http://i.imgur.com/bqGHiNG.gif', "pepe flash"],
peperun: [':peperun:', 'http://i.imgur.com/3xLRJRC.gif', "pepe run"],
pepenaked: [':pepenaked:', 'http://i.imgur.com/O9moFkn.gif', "pepe naked"]

};
///////

///////SPECIAL TEXT THAT NEEDS TO BE FORMATTED
var maymay = {
sombre: ['sombre', '[font=monospace][size=14][b][color=red]S[/color] [color=orange]O[/color] [color=yellow]M[/color] [color=blue]B[/color] [color=indigo]R[/color] [color=violet]E[/color][/b][/size][/font]'],
doors: ['the doors', '[i]the doors[/i]'],
hawk: ['cantstopthehawk', '[size=15] [i] [b] [blur] [color=#fbca33] C A N T S T O P T H E H A W K [/size] [/color] [/i] [/b] [/blur]'],
donger: ['donger', '[size=29][b][font=impact]DONGER[/font][/b][/size]'],
esca: ['that escalated', '[size=20][font=impact]THAT ESCALATED[/font][/size]'],
fast: ['gottagofast', '[color=green][font=comic sans ms][size=18][i]Gotta Go Fast !!![/i][/size][/font][/color]'],
minty: ['minty', '[img]http://i60.tinypic.com/2hzkc5y.png[/img][blur][b][color=#98FF98] MINTY[/color][/b][/blur]'],
lenny: [':lenny:', '( ͡° ͜ʖ ͡°)'], //cancer during browser edit (firefox)
dongers: [':raise:', 'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ'], // cancer
hamster: [':hamster:', '(•ω•)'],
greeneggs: [':geggs:', '[b][color=green]GREEN EGGS[/color][/b] [size=10][i]And[/i][/size] [size=16][b][i][color=black][u]THOUGHTS OF SUICIDE[/u][/color][/i][/b][/size] [size=14]( ͡° ʖ̯ ͡°)[/size]'], //cancer
rekt: [':rekt:', '[size=19][font=impact][blur][b][color=red][X] REKT [ ] NOT REKT[/color][/b][/blur][/font][/size]'],
danked: [':danked:', '[color=red][b](USER WAS BANNED FOR THIS DANK)[/b][/color]'],
blazed420: ['420 blaze it', '[b][font=Comic Sans MS][color=#FF0000]4[/color][color=#FD2A00]2[/color][color=#FC5500]0[/color] [color=#F9AA00]B[/color][color=#F8D400]L[/color][color=#F6FF00]A[/color][color=#CDFF00]Z[/color][color=#A4FF00]E[/color] [color=#52FF00]I[/color][color=#29FF00]T[/color][/font][/b]'],
checkem: [':checkem:', '[size=15][font=impact]C[/font][/size][size=20][font=impact]H[/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]C[/font][/size][size=15][font=impact]K[/font][/size][size=20][font=impact] [/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]M[/font][/size]'],
ohshit: [':ohshi:', '[b][font=Comic Sans MS][color=#665203]O[/color][color=#6B5304]O[/color][color=#715405]O[/color][color=#765506]O[/color][color=#7C5708]H[/color] [color=#87590B]S[/color][color=#765109]H[/color][color=#664808]I[/color][color=#563F06]I[/color][color=#463605]I[/color][color=#362D03]T[/color][/font][/b]'],
ieatass: [':ieat:', '[i]ケツを食ベる[/i]'],
olaf: [':olaf:', '[b][font=Courier New][size=16][color=#3BED44]h[/color][color=#1137CE]e[/color][color=#6D2645]l[/color][color=#4B20D2]o[/color] [color=#BEF7E8]m[/color][color=#66D74E]y[/color] [color=#950C47]n[/color][color=#9F65A4]a[/color][color=#196650]m[/color][color=#88DA22]e[/color] [color=#BD7B33]i[/color][color=#ED8A9F]s[/color] [color=#4BD338]o[/color][color=#6B6743]l[/color][color=#47D647]a[/color][color=#5D1908]f[/color][/size][/font][/b]'],
yes: [':yes:', '[size=6]yes,[/size] yes YES [size=26]YES[/size]'],
hitler: [':hitler:', '[IMG]http://i.imgur.com/jowqkg9.gif[/IMG] [size=26][b]ADOLF NITLER CONFIRMED FOR JEW[/b][/size] [IMG]http://i.imgur.com/jowqkg9.gif[/IMG]'],
anonymoose: [':anonymoose:', '[b][font=Comic Sans MS][color=#3BED44]A[/color][color=#1137CE]N[/color][color=#6D2645]O[/color][color=#4B20D2]N[/color][color=#C9EE35]Y[/color][color=#BEF7E8]M[/color][color=#66D74E]O[/color][color=#702B82]O[/color][color=#950C47]S[/color][color=#9F65A4]E[/color] [color=#88DA22]W[/color][color=#332E39]E[/color] [color=#ED8A9F]O[/color][color=#86306E]N[/color][color=#4BD338]L[/color][color=#6B6743]Y[/color] [color=#5D1908]S[/color][color=#3764FE]W[/color][color=#19A9D8]A[/color][color=#346143]L[/color][color=#E3A6B6]L[/color][color=#5447A3]O[/color][color=#21032A]W[/color] [color=#6183A4]N[/color][color=#0E4A2B]E[/color][color=#06790B]V[/color][color=#19B543]E[/color][color=#08930B]R[/color] [color=#B5AE1A]S[/color][color=#406842]P[/color][color=#C3F745]I[/color][color=#DC2D64]T[/color][/font][/b]'],
ripped: [':rip:', '[b][font=Impact][size=20][color=#3BED44]r[/color][color=#1137CE]i[/color][color=#6D2645]p[/color] [color=#C9EE35]i[/color][color=#BEF7E8]n[/color] [color=#702B82]p[/color][color=#950C47]i[/color][color=#9F65A4]e[/color][color=#196650]c[/color][color=#88DA22]e[/color][color=#332E39]s[/color][/size][/font][/b]'],
toa: ['toa', '[img]http://i61.tinypic.com/cmjk6.png[/img]'],
murica: ['murica', '[b][font=Comic Sans MS][color=#FF0000]M[/color][color=#FF5555]U[/color][color=#FFAAAA]R[/color][color=#FFFFFF]I[/color][color=#AAAAFF]C[/color][color=#5555FF]A[/color][/font][/b]'],
lenny2: [':lenny2:', '( ͡ຈ╭͜ʖ╮͡ຈ )'], //cancer during browser edit (firefox)
lenny3: [':lenny3:', '( ͡ಠ ʖ̯ ͡ಠ)'], //cancer during browser edit (firefox)
lenny4: [':lenny4:', '( ͡~ ͜ʖ ͡~)'], //cancer during browser edit (firefox)
lenny5: [':lenny5:', '( ͡~ ͜ʖ ͡°)'], //cancer during browser edit (firefox)
lenny6: [':lenny6:', '( ͠° ͟ʖ ͡°)'], //cancer during browser edit (firefox)
lenny7: [':lenny7:', '( ͡ʘ╭͜ʖ╮͡ʘ)'], //cancer during browser edit (firefox)
lenny8: [':lenny8:', '( ͝סּ ͜ʖ͡סּ)'], //cancer during browser edit (firefox)
lenny9: [':lenny9:', '( ͡ᵔ ͜ʖ ͡ᵔ )'], //cancer during browser edit (firefox)
lenny10: [':lenny10:', '( ͡^ ͜ʖ ͡^ )'], //cancer during browser edit (firefox)
lenny11: [':lenny11:', '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]'], //cancer during browser edit (firefox)
lenny12: [':lenny12:', '( ͡ຈ ͜ʖ ͡ຈ)'], //cancer during browser edit (firefox)
lenny13: [':lenny13:', '( ͡° ʖ̯ ͡°)'], //cancer during browser edit (firefox)
lenny14: [':lenny14:', '( ͡ ͜ʖ ͡ )'], //cancer during browser edit (firefox)
lenny15: [':lenny15:', '(☞ ͡° ͜ʖ ͡°)☞'], //cancer during browser edit (firefox)
lenny16: [':lenny16:', 'ᕕ( ͡° ͜ʖ ͡° )ᕗ'], //cancer during browser edit (firefox)
lenny17: [':lenny17:', '( ͡°╭͜ʖ╮͡° )'], //cancer during browser edit (firefox)
lenny18: [':lenny18:', '( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'], //cancer during browser edit (firefox)
lenny19: [':lenny19:', '(つ ͡° ͜ʖ ͡°)つ'], //cancer during browser edit (firefox)
lenny20: [':lenny20:', '( ͡⚆ ͜ʖ ͡⚆)'], //cancer during browser edit (firefox)
lenny21: [':lenny21:', '¯\_( ͠° ͟ʖ °͠ )_/¯'], //cancer during browser edit (firefox)
lenny22: [':lenny22:', '(▀ ͜ʖ ͡°)'], //cancer during browser edit (firefox)
raise2: [':raise2:', 'ヽ༼ຈل͜ຈ༽ﾉ гคเรє ๏г ๔เє ヽ༼ຈل͜ຈ༽ﾉ'], //cancer during browser edit (firefox)
nyan: [':nyan:', '~=[,,_,,]:3'],
woop: [':woop:', "[ \\[size=10]\\[/size][size=9]\\[/size][size=8]\\[/size][size=7]\\[/size][size=6]\\[/size][size=7]\\[/size][size=8]\\[/size][size=9]\\[/size][size=10]\\[/size]\\ ]"] //dupe the backslashes

//do not enable (bad idea) < you're a bad idea < when you were born your mom said you were a bad idea
/*
startbold: [':startbold:', '[b][img][/b][/img]'],
endbold: [':endbold:', '[img][b][/img][/b]'],
startitalic: [':startitalic:', '[i][img][/i][/img]'],
enditalic: [':enditalic:', '[img][i][/img][/i]'],
starts: [':starts:', '[u][img][/u][/img]'],
ends: [':ends:', '[img][u][/img][/u]']
*/
};
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

///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = [
  "[color=#789922]",
  "[/color]",
  "[b][color=#AA0000]",
  "[/color][/b]"
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

///////////////////// http://stackoverflow.com/a/6969486

function escape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
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
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
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
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function filter_swears_bchat() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("message").value;
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
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    document.getElementById("message").value = new_msg;
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = ""; //this may not be necessary i'm not 100% sure
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);    
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8" + swear_code[0] + "$9");
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
  if(old_msg.length >= 1){
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function redtext_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
 if(old_msg.length >= 1){
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("message").value = new_msg;
    }
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
    if(msg_ray[i].length >= 1){
      if (index_num === old_msg.length - 1) {
        msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
        if (document.getElementsByTagName("textarea")[1] === undefined) {
          document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
        }
        else {
          document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
        }
      }
    }
  }
}
/////////////////////

function leet_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    //new_msg = new_msg.replace(/b/gi, 'b');
    //new_msg = new_msg.replace(/c/gi, 'c');
    //new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, '3');
    //new_msg = new_msg.replace(/f/gi, 'f');
    new_msg = new_msg.replace(/g/gi, '6');
    //new_msg = new_msg.replace(/h/gi, 'h');
    new_msg = new_msg.replace(/i/gi, '1');
    //new_msg = new_msg.replace(/j/gi, 'j');
    //new_msg = new_msg.replace(/k/gi, 'k');
    //new_msg = new_msg.replace(/l/gi, 'l');
    //new_msg = new_msg.replace(/m/gi, 'm');
    //new_msg = new_msg.replace(/n/gi, 'n');
    new_msg = new_msg.replace(/o/gi, '0');
    //new_msg = new_msg.replace(/p/gi, 'p');
    //new_msg = new_msg.replace(/q/gi, 'q');
    //new_msg = new_msg.replace(/r/gi, 'r');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    //new_msg = new_msg.replace(/u/gi, 'u');
    //new_msg = new_msg.replace(/v/gi, 'v');
    //new_msg = new_msg.replace(/w/gi, 'w');
    //new_msg = new_msg.replace(/x/gi, 'x');
    //new_msg = new_msg.replace(/y/gi, 'y');
    //new_msg = new_msg.replace(/z/gi, 'z');
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function leet_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    //new_msg = new_msg.replace(/b/gi, 'b');
    //new_msg = new_msg.replace(/c/gi, 'c');
    //new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, '3');
    //new_msg = new_msg.replace(/f/gi, 'f');
    new_msg = new_msg.replace(/g/gi, '6');
    //new_msg = new_msg.replace(/h/gi, 'h');
    new_msg = new_msg.replace(/i/gi, '1');
    //new_msg = new_msg.replace(/j/gi, 'j');
    //new_msg = new_msg.replace(/k/gi, 'k');
    //new_msg = new_msg.replace(/l/gi, 'l');
    //new_msg = new_msg.replace(/m/gi, 'm');
    //new_msg = new_msg.replace(/n/gi, 'n');
    new_msg = new_msg.replace(/o/gi, '0');
    //new_msg = new_msg.replace(/p/gi, 'p');
    //new_msg = new_msg.replace(/q/gi, 'q');
    //new_msg = new_msg.replace(/r/gi, 'r');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    //new_msg = new_msg.replace(/u/gi, 'u');
    //new_msg = new_msg.replace(/v/gi, 'v');
    //new_msg = new_msg.replace(/w/gi, 'w');
    //new_msg = new_msg.replace(/x/gi, 'x');
    //new_msg = new_msg.replace(/y/gi, 'y');
    //new_msg = new_msg.replace(/z/gi, 'z');
    document.getElementById("message").value = new_msg;
  }
}

function leet_post() {
  var old_msg = ""; //this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  // http://stackoverflow.com/a/500459
  
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      //new_msg = new_msg.replace(/b/gi, 'b');
      //new_msg = new_msg.replace(/c/gi, 'c');
      //new_msg = new_msg.replace(/d/gi, 'd');
      new_msg = new_msg.replace(/e/gi, '3');
      //new_msg = new_msg.replace(/f/gi, 'f');
      new_msg = new_msg.replace(/g/gi, '6');
      //new_msg = new_msg.replace(/h/gi, 'h');
      new_msg = new_msg.replace(/i/gi, '1');
      //new_msg = new_msg.replace(/j/gi, 'j');
      //new_msg = new_msg.replace(/k/gi, 'k');
      //new_msg = new_msg.replace(/l/gi, 'l');
      //new_msg = new_msg.replace(/m/gi, 'm');
      //new_msg = new_msg.replace(/n/gi, 'n');
      new_msg = new_msg.replace(/o/gi, '0');
      //new_msg = new_msg.replace(/p/gi, 'p');
      //new_msg = new_msg.replace(/q/gi, 'q');
      //new_msg = new_msg.replace(/r/gi, 'r');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      //new_msg = new_msg.replace(/u/gi, 'u');
      //new_msg = new_msg.replace(/v/gi, 'v');
      //new_msg = new_msg.replace(/w/gi, 'w');
      //new_msg = new_msg.replace(/x/gi, 'x');
      //new_msg = new_msg.replace(/y/gi, 'y');
      //new_msg = new_msg.replace(/z/gi, 'z');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
///////////////////// MANAGES THE RAINBOW TEXT SYSTEM
function rainbow_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rb /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rb /i, '');
    new_msg = rainbowText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function rainbow_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rb /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rb /i, '');
    new_msg = rainbowText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function rainbow_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      
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

/////////////////////RANDOM CHARACTER COLOR
function random_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rn /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rn /i, '');
    new_msg = randomText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function random_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rn /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rn /i, '');
    new_msg = randomText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function random_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      
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

////////////////////GRADIENT MSG COLOR
function gradient_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/gd /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/gd /i, '');
    new_msg = gradientText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function gradient_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/gd /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/gd /i, '');
    new_msg = gradientText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function gradient_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}

////////////////////

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
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_bchat() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
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
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
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
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_bchat() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
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
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
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
  change_this = change_this.replace(new RegExp("_title", "gi"), smilie_code.substr(1, smilie_code.length - 2)); ////could be smilie_text
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

window.addEventListener('load', function() {/*shit goes down in here*/
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) {
    if (window.location.pathname.length <= 1) {
      edit_css_chat(); /// This is done even when you aren't pressing keys
    } else {
      edit_css_bchat();
    }
  } else {
    post_page_editor();
  }
}, false);

$(document).keypress(function(event){
    if (event.which === 13) { /// 13 is enter
      run()
    }
 })

function run() {
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) { /// If we are either in the big chat window or on the main page. Nothing in this if statement will run if we aren't there
    if (window.location.pathname.length <= 1) { /// Figure out which of the two we are in
      filter_swears_chat(); /// These are the functions that run through the text and see what to do
      greentext_chat(); ///
      emoticon_chat(); ///       
      maymay_chat(); /// 
      redtext_chat();
      leet_chat();
      rainbow_chat();
      random_chat();
      gradient_chat();
    } else { /// If we're here, that means we are on big chat window
      filter_swears_bchat();
      greentext_bchat();
      emoticon_bchat();
      maymay_bchat();
      redtext_bchat();
      leet_bchat();
      rainbow_bchat();
      random_bchat();
      gradient_bchat();
    }
  } else {
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
      filter_swears_post(); /// Posting functions
      greentext_post(); ///            
      emoticon_post(); ///
      maymay_post(); ///
      redtext_post();
      leet_post();
      rainbow_post();
      random_post();
      gradient_post();
    }
  }
}
