// ==UserScript==
// @name        Discord.js Documentation Improved
// @namespace   this is a string of text whose convention is, interestingly, to be an email address
// @description Improves page navigation for the Discord.js 9.X.X docs.
// @include     http://hydrabolt.github.io/discord.js/#!/docs/*
// @include     http://discord.js.org/#!/docs/*
// @version     1.8
// @grant       GM_openInTab
// @grant       GM_addStyle
// ==/UserScript==

function detectButton(e) {
  e = e || window.event;

  if (e.which == 2 || e.which == 4) {
    e.preventDefault();
    //alert('middle');
    
    let sectionTitle = this.parentElement.children[0].textContent.toLowerCase();
    // there's no easy catchall here
    if (sectionTitle == 'classes') {
      sectionTitle = 'class';
    } else if (sectionTitle == 'typedefs') {
      sectionTitle = 'typedef';
    } else {
      sectionTitle = 'file/' + sectionTitle;
    }
    console.log('opening: ' + 'http://discord.js.org/#!/docs/tag/master/' + sectionTitle + '/' + this.textContent);
    
    if (typeof GM_openInTab !== 'undefined')
      GM_openInTab('http://discord.js.org/#!/docs/tag/master/' + sectionTitle + '/' + this.textContent); // pass second argument as 'true' to activate the opened tab
    else
      window.open('http://discord.js.org/#!/docs/tag/master/' + sectionTitle + '/' + this.textContent, '_newtab'); // _empty in chrome i think?
  }
}

// not needed
//if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);

GM_addStyle(`
@keyframes hansenAjaxElementLoaded {  
    from {  
        outline-color: #fff; 
    }
    to {  
        outline-color: #000;
    }  
}

.content > ul > li {
    animation-duration: 0.01s;
    animation-name: hansenAjaxElementLoaded;
}
`);

document.addEventListener('animationstart', function(event){
  if (event.animationName == 'hansenAjaxElementLoaded'){
    event.target.onmousedown = detectButton;
  }
}, true);
