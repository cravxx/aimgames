// ==UserScript==
// @name        Fact Provider
// @description provides daily facts
// @namespace   a@nus.avi
// @include     http://mods.factorio.com/*
// @include     https://mods.factorio.com/*
// @version     1.0
// @grant       GM_xmlhttpRequest
// ==/UserScript==

// <iframe id="iframe"></iframe>

const msg = window.alert;//msg function

const tframe = document.createElement('iframe');
tframe.setAttribute('id', 'tiframe');
document.body.appendChild(tframe);

function downloadMod(modUrl) {
  if (modUrl.trim().length == 0) {
    msg('Input cannot be empty');
  } else {
    const param = 'mod=' + encodeURI(modUrl);
    
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'http://solus.site/factorio/api.php',
      data: param,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      onload: function(response) {
        const data = JSON.parse(response.responseText);
        if (data === null) {
          msg('Could not contact API');
        } else if (!data.success) {
          msg('[failed] ' + data.error);
        } else if (!data.url) {
          msg('Unexpected error');
        } else {
          tframe.setAttribute(src, data.url);
        }
      }
    });
  }
}

const footers = document.getElementsByClassName('mod-card-footer');

for (let i = 0, len = footers.length; i < len; i++) {
  const f = footers[i];
  
  const but1 = document.createElement('div');
  but1.setAttribute('class', 'mod-card-buttons');
  const but2 = document.createElement('div');
  but2.setAttribute('class', 'btn mod-download-button btn-download btn-disabled');
  const but3 = document.createElement('a');
  but3.setAttribute('href', 'javascript:void(0)');
  const but4 = document.createElement('span');
  but4.appendChild(document.createTextNode('DOWNLOAD THROUGH API'));

  but1.addEventListener("click", () => {
    downloadMod(f.children[1].firstChild.firstChild.href);
  }); 

  but3.appendChild(but4);
  but2.appendChild(but3);
  but1.appendChild(but2);
  
  f.insertBefore(but1, f.children[1]);
}
