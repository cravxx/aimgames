// allows you to require() a library from the browser console, like that one chrome library
(() => {
  // dash-separated to camelCase
  function toCamelCase(txt) {
    return txt.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }

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
      oReq.open("get", "https://crossorigin.me/" + url, true);
      oReq.send();
    }
  }

  window._previous_require = window.require;
  window._reqs = {};
  window._internal_require = window.require = name => {
    // Return the cached library if available
    if (window._reqs[name]) {
      return window._reqs[name];
    }

    console.log('Downloading ' + name + ', just a little bit...');

    get('https://wzrd.in/standalone/' + name + '@latest', text => {
      console.log('Download for ' + name + ' finished, require() it freely!');

      // Clean up window.require to prevent BrowserifyAPI from fucking up
      window.require = window._previous_require;
      eval(text);
      // Restore window.require... for obvious reasons
      window.require = window._internal_require;

      // Get the exported BrowserifyAPI global and cache it
      const winv = window[toCamelCase(name)];
      if (winv === undefined) {
        console.error('Could not import global for library ' + text + '!!!');
      } else {
        window._reqs[name] = winv;
      }
    });
  };

  window.requireAll = url => {
    get(url, text => {
      try {
        const package = JSON.parse(text);
        // TODO: this ignores the version declared in the package.json
        if (package.dependencies) Object.keys(package.dependencies).forEach(require);
        if (package.devDependencies) Object.keys(package.devDependencies).forEach(require);
      } catch (e) {
        console.error('Could not read package.json at `' + url + '`: ' + e);
      }
    });
  };
})();
