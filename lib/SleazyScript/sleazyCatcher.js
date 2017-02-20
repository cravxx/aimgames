(function(window) {
  if (!window.errorSteamroller) {
    throw 'install the error steamroller lib from https://github.com/fallk/the-catch-on-the-river-try/blob/master/dist/steamroller.min.js !!!!';
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
