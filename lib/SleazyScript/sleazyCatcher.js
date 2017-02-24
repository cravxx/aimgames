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
    }).then(textl => {
      console.log('loading lodash');
      const ld = window._;
      eval(textl);
      window._steamrollerlodash = window._;
      window._ = ld;

      return get('https://raw.githubusercontent.com/t4t5/sweetalert/master/dist/sweetalert-dev.js');
    }).then(atextl => {
      console.log('loading sweetAlert');
      const tswal = window.swal;
      eval(atextl);
      window._steamrollerSweetalert = window.swal;
      window.swal = tswal;

      return get('https://d3js.org/d3.v4.js');
    }).then(btextl => {
      console.log('loading d3');
      const td3 = window.d3;
      eval(btextl);
      window._steamrollerD3 = window.d3;
      window.d3 = td3;
      
      return get('https://github.com/JackolanternIR/WordList-JS/raw/master/src/wordList.min.js');
    }).then(ctextl => {
      console.log('loading WordList');
      eval('(function(){' + ctextl + ';window._steamrollerWordList=Word_List;})();');

      return get('https://raw.githubusercontent.com/JackolanternIR/WordList-JS/master/src/wordBank.min.js');
    }).then(dtextl => {
      console.log('loading WordList english word bank');
      eval('(function(){var Word_List=window._steamrollerWordList;' + dtextl + '})();');
      
      return get('https://wzrd.in/standalone/xml2js@latest');
    }).then(etextl => {
      console.log('loading xml2js');
      const txml2js = window.xml2js;
      eval(etextl);
      window._steamrollerxml2js = window.xml2js;
      window.xml2js = txml2js;

      return get('https://wzrd.in/standalone/jsdom@latest');
    }).then(ftextl => {
      console.log('loading jsdom');
      const tjsdom = window.jsdom;
      eval(ftextl);
      window._steamrollerjsdom = window.jsdom;
      window.jsdom = tjsdom;

      return get('https://github.com/HulaSamsquanch/aimgames/raw/master/lib/SleazyScript/sleazyProxy.js');
    }).then(text3 => {
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
