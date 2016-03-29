// ==UserScript==
// @name        Trigger Remover
// @description Detrigger your shit.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @version     1.3.1
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==

var chatbox = document.getElementById('chatbox');
var msgTags = chatbox.getElementsByClassName('msg');

window.addEventListener('load', function()
{    
    observeDOM(chatbox, function()
    {
        for (var i = 0; i < msgTags.length; i++)
        {
            var str = msgTags[i].textContent;
            /*remove bbcode*/
            str = str.replace(/\[\/?[^\]]*\]/g, "");
            /*remove punctuation*/
            str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            str = str.replace(/\s{2,}/g, " ");
            /*remove duplicate letters "poooiii" */
            str = str.replace(/[^\w\s]|(.)(?=\1)/gi, "");            

            if (str.regexIndexOf(/\poi\b/gi) != -1 || str.regexIndexOf(/\p\soi\b/gi) != -1 || str.regexIndexOf(/\po\si\b/gi) != -1 || str.regexIndexOf(/\p\so\si\b/gi) != -1)
            {
                msgTags[i].textContent = "";
            }
        }
    });
}, false);

String.prototype.regexIndexOf = function(regex, startpos)
{
    var indexOf = this.substring(startpos || 0).search(regex);
    return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};

var observeDOM = (function()
{
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback)
    {
        if (MutationObserver)
        {
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer)
            {
                if (mutations[0].addedNodes.length || mutations[0].removedNodes.length)
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe(obj,
            {
                childList: true,
                subtree: true
            });
        }
        else if (eventListenerSupported)
        {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();