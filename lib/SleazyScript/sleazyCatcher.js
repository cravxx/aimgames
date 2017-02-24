(function _sleazyCatcher(window) {
  
  // GM_xmlhttpRequest ponyfill
  function get(url, callback) {
    return new Promise((resolve, reject) => {
      if (typeof GM_xmlhttpRequest != 'undefined') {
        GM_xmlhttpRequest({
          method: "GET",
          url: url,
          onload: function(response) {
            resolve(response.responseText);
          }
        });
      } else {
        const oReq = new XMLHttpRequest();
        oReq.onload = () => {
          resolve(oReq.responseText);
        };
        oReq.open("get", "https://cors-anywhere.herokuapp.com/" + url, true);
        oReq.send();
      }
    });
  }
  
  function getLib(libname, conflictables, nexturl) {
    return text => {
      console.log('loading ' + libname);
      const confarr = {};
      conflictables.forEach(e => {
        confarr[e] = window[e];
      });
      eval(text);
      conflictables.forEach(e => {
        window['_steamroller' + e] = window[e];
        window[e] = confarr[e];

      });

      return get(nexturl);
    };
  }
  
  // detect and download the steamroller library and jquery + mootools
  // (not very good)
  if (!window.errorSteamroller) {
    console.error('error steamroller not detecting, downloading... (this might not work!)');
    console.error('this will also download jquery and mootools cause you probably aint got em');
    get('https://github.com/fallk/the-catch-on-the-river-try/raw/master/dist/steamroller.min.js').then(text => {
      console.log('loading the steamroller');
      eval(text);
      // TODO switch to .min.js
      return get('https://code.jquery.com/jquery-3.1.1.js');
    }).then(text2 => {
      console.log('loading jquery');
      eval('(function(){' + text2 + '})();' + 
           'window._steamrollerjQuery = jQuery.noConflict(true);');
      return get('https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js');
    }).then(textm => {
      console.log('loading mootools');

      const prev$ = window.$;
      const prevMoo = document.id;
      eval(textm);
      window._steamrollerMooTools = document.id;
      window.$ = prev$;
      document.id = prevMoo;
      return get('https://raw.githubusercontent.com/lodash/lodash/4.17.4/dist/lodash.js');
    }).then(
      getLib('lodash', ['_'], 'https://raw.githubusercontent.com/t4t5/sweetalert/master/dist/sweetalert-dev.js')
    ).then(
      getLib('sweetAlert', ['swal'], 'https://d3js.org/d3.v4.js')
    ).then(
      getLib('d3', ['d3'], 'https://raw.githubusercontent.com/andrewplummer/Sugar/2.0.4/dist/sugar.min.js')
    ).then(
      getLib('Sugar', ['Sugar'], 'http://cdn.jsdelivr.net/ramda/0.23.0/ramda.min.js')
    ).then(
      getLib('Ramda', ['R'], 'https://raw.githubusercontent.com/fallk/boiler/master/boiler.js')
    ).then(
      getLib('Boiler', ['Boiler'], 'https://wzrd.in/standalone/parse5@latest')
    ).then(
      getLib('parse5', ['parse5'], 'https://wzrd.in/standalone/jshint@latest')
    ).then(
      getLib('jshint', ['jshint'], 'https://raw.githubusercontent.com/juliangarnier/anime/master/anime.min.js')
    ).then(
      getLib('anime.js', ['anime'], 'https://wzrd.in/standalone/zxcvbn@latest')
    ).then(
      getLib('zxcvbn', ['zxcvbn'], 'https://github.com/arasatasaygin/is.js/raw/master/is.min.js')
    ).then(
      getLib('is.js', ['is'], 'https://github.com/mudcube/MIDI.js/raw/master/build/MIDI.min.js')
    ).then(
      getLib('Midi.js', ['MIDI'], 'https://wzrd.in/standalone/csso@latest')
    ).then(
      getLib('Csso', ['csso'], 'https://raw.githubusercontent.com/stealjs/steal/master/steal.production.js')
    ).then(
      getLib('Steal', ['steal'], 'https://raw.githubusercontent.com/jakesgordon/javascript-state-machine/master/state-machine.min.js')
    ).then(
      getLib('JS State Machine', ['StateMachine'], 'https://raw.githubusercontent.com/chancejs/chancejs/master/dist/chance.min.js')
    ).then(
      getLib('Chance', ['chance'], 'https://raw.githubusercontent.com/processing-js/processing-js/master/processing.min.js')
    ).then(
      getLib('Processing.js', ['Processing'], 'https://wzrd.in/standalone/knwl.js@latest')
    ).then(
      getLib('Knwl.js', ['knwl'], 'https://wzrd.in/standalone/urijs@latest')
    ).then(
      getLib('URI.js', ['urijs'], 'https://raw.githubusercontent.com/showdownjs/showdown/master/dist/showdown.min.js')
    ).then(
      getLib('Showdown', ['showdown'], 'https://raw.githubusercontent.com/bgrins/TinyColor/master/tinycolor.js')
    ).then(
      getLib('Tiny Color', ['tinycolor'], 'https://cdn.rawgit.com/jprichardson/string.js/master/dist/string.min.js')
    ).then(
      getLib('String.js', ['S'], 'https://raw.githubusercontent.com/firstopinion/formatter.js/master/dist/formatter.min.js')
    ).then(
      getLib('Formatter.js', ['Formatter'], 'https://raw.githubusercontent.com/pieroxy/lz-string/master/libs/lz-string.min.js')
    ).then(
      getLib('LZ String', ['LZString'], 'https://raw.githubusercontent.com/jnordberg/gif.js/master/dist/gif.js')
    ).then(
      getLib('Gif.js', ['GIF'], 'https://github.com/JackolanternIR/WordList-JS/raw/master/src/wordList.min.js')
    ).then(ctextl => {
      console.log('loading WordList');
      eval('(function(){' + ctextl + ';window._steamrollerWordList=Word_List;})();');
      
      return get('http://www.collectionsjs.com/script/collections.js');
    }).then(ctextl => {
      console.log('loading Collections');
      eval('var _awindow = window;(function(){const window = _awindow;' + ctextl + ';_awindow.Collections = window;})();window._steamrollerCollections = _awindow.Collections');
      
      return get('https://raw.githubusercontent.com/JackolanternIR/WordList-JS/master/src/wordBank.min.js');
    }).then(dtextl => {
      console.log('loading WordList english word bank');
      eval('(function(){var Word_List=window._steamrollerWordList;' + dtextl + '})();');
      
      return get('https://wzrd.in/standalone/xml2js@latest');
    }).then(
      getLib('xml2js', ['xml2js'], 'https://wzrd.in/standalone/jsdom@latest')
    ).then(
      getLib('jsdom', ['jsdom'], 'https://github.com/HulaSamsquanch/aimgames/raw/master/lib/SleazyScript/sleazyProxy.js')
    ).then(text3 => {
      console.log('loading sleazyProxy');
      eval(text3);
      console.log('loading myself!');
      _sleazyCatcher(window);
    });

    return;
  }
    
  const _steamroll = window.steamroll;
  const _func = window.func;
  const _f = window.f;
  
  function func(sleazy) {
    if (!sleazy) return ()=>{};
    if (typeof sleazy == 'string') {
      try {
        sleazy = eval(sleazy);
      } catch (e) {}
    }
    if (typeof sleazy != 'function') return ()=>{};
    
    // ass fucking workaround for a bug in The Catch on the River Try
    const m = `(try {
  } catch (_citt) {
      console.error('Error caught! ' + _citt);
  }`;
    
    let asfunc = ('(' + errorSteamroller.wrapSrc(sleazy.toString()) + ')()');
    if (asfunc.startsWith(m)) {
      asfunc = '(' + asfunc.substring(m.length)
    }
    //console.log(asfunc);
    eval(asfunc);
  }
  func.noConflict = () => {
    if (_f !== undefined) window.f = _f;
    if (_func !== undefined) window.func = _func;
  };
  func.fullUninstall = () => {
    window.f = _f;
    window.func = _func;
    window.steamroll = _steamroll;
  };
  window.steamroll = window.f = window.func = func;
})(window);
