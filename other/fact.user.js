// ==UserScript==
// @name        Fact Provider
// @description provides daily facts
// @namespace   a@nus.avi
// @include     http://mods.factorio.com/*
// @include     https://mods.factorio.com/*
// @version     1.6
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// ==/UserScript==

// <iframe id="iframe"></iframe>

const msg = window.alert.bind(window);//msg function

let globalIncrement=0;

function downloadMod(modUrl, callback) {
  if (modUrl.trim().length == 0) {
    msg('Input cannot be empty');
    callback(false);
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
          msg('Could not contact API' + ' url: ' + param);
          callback(false);
        } else if (!data.success) {
          msg('[failed] ' + data.error + ' url: ' + param);
          callback(false);
        } else if (!data.url) {
          msg('Unexpected error' + ' url: ' + param);
          callback(false);
        } else {
          const tframe = document.createElement('iframe');
          tframe.setAttribute('id', 'tiframe-'+(globalIncrement++));
          tframe.setAttribute('src', data.url);
          document.body.appendChild(tframe);
          callback(true);
        }
      }
    });
  }
}

function handleNode(f) {
  
  const but1 = document.createElement('div');
  but1.setAttribute('class', 'mod-card-buttons');
  but1.setAttribute('style', 'margin-right: 5px;');
  const but2 = document.createElement('div');
  but2.setAttribute('class', 'btn mod-download-button btn-download btn-disabled');
  const but3 = document.createElement('a');
  but3.setAttribute('href', 'javascript:void(0)');
  const but4 = document.createElement('span');
  but4.appendChild(document.createTextNode('DOWNLOAD THROUGH API'));

  // years of javascript on top of javascript teaches you this kind of sync-async stuff
  const staticref = f.children[1].firstChild.firstChild.href;
  but1.addEventListener("click", () => {
    but4.textContent = 'DOWNLOADING...';
    downloadMod(staticref, b => {
      but4.textContent = b?"DOWNLOADED!":"DOWNLOAD FAILED!";
    });
  }); 

  but3.appendChild(but4);
  but2.appendChild(but3);
  but1.appendChild(but2);
  
  f.insertBefore(but1, f.children[1]);
}

GM_addStyle(`
@keyframes cccnodeInserted {  
    from {  
        outline-color: #fff; 
    }
    to {  
        outline-color: #000;
    }  
}
.mod-card-footer {
    animation-duration: 0.01s;
    animation-name: cccnodeInserted;
}
`);

document.addEventListener('animationstart', function(event){
  if (event.animationName == 'cccnodeInserted'){
    handleNode(event.target);
  }
}, true);
