(function _sleazyCatcher(window) {
  
  // GM_xmlhttpRequest ponyfill
  function get(url, callback) {
    if (typeof GM_xmlhttpRequest != 'undefined') {
      GM_xmlhttpRequest({
        method: "GET",
        url: url,
        onload: function(response) {
          callback(response.responseText);
        }
      });
    } else {
      const oReq = new XMLHttpRequest();
      oReq.onload = () => {
        callback(oReq.responseText);
      };
      oReq.open("get", "https://cors-anywhere.herokuapp.com/" + url, true);
      oReq.send();
    }
  }
  
  // detect and download the steamroller library and jquery + mootools
  // (not very good)
  if (!window.errorSteamroller) {
    console.error('error steamroller not detecting, downloading... (this might not work!)');
    console.error('this will also download jquery and mootools cause you probably aint got em');
    get('https://github.com/fallk/the-catch-on-the-river-try/raw/master/dist/steamroller.min.js', text => {
      console.log('loading the steamroller');
      eval(text);
      // TODO switch to .min.js
      get('https://code.jquery.com/jquery-3.1.1.js', text2 => {
        console.log('loading jquery');
        eval('(function(){' + text2 + '})();' + 
             'window._steamrollerjQuery = jQuery.noConflict(true);');
        get('https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js', textm => {
          console.log('loading mootools');
          
          const prev$ = window.$;
          const prevMoo = document.id;
          eval(textm);
          window._steamrollerMooTools = document.id;
          window.$ = prev$;
          document.id = prevMoo;

          get('https://github.com/HulaSamsquanch/aimgames/raw/master/lib/SleazyScript/sleazyProxy.js', text3 => {
            console.log('loading sleazyProxy');
            eval(text3);
            console.log('loading myself!');
            _sleazyCatcher(window);
          });
        });
      });
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
