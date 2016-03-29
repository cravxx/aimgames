// ==UserScript==
// @name        Trigger Remover
// @description Detrigger your shit.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @version     1.1
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

var chatbox = document.getElementById('chatbox');
var aTags = chatbox.getElementsByTagName('span');
var searchText = 'poi';
var found;

window.addEventListener('load', function () {
  observeDOM( document.getElementById('chatbox') ,function(){ 
      for (var i = 0; i < aTags.length; i++) {
      //console.log('fuck' + aTags.length);
      if (aTags[i].textContent.regexIndexOf(searchText) != -1) {
        found = aTags[i];
      }
      if(found){
        found.getElementsByClassName("msg")[0].textContent = "";
        //console.log("content");
      }
    }
  });  
}, false);

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};

var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();
