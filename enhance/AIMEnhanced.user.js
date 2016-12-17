// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds partial markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @require     http://codemirror.net/lib/codemirror.js
// @require     http://codemirror.net/mode/css/css.js
// @require     http://codemirror.net/mode/xml/xml.js
// @require     http://codemirror.net/mode/vbscript/vbscript.js
// @require     http://codemirror.net/mode/javascript/javascript.js
// @require     http://codemirror.net/mode/htmlmixed/htmlmixed.js
// @require     https://github.com/rosmanov/CodeMirror-modes/raw/master/bbcode/bbcode.js
// @require     https://github.com/rosmanov/CodeMirror-modes/raw/master/bbcodemixed/bbcodemixed.js
// @require     https://github.com/enyo/opentip/raw/master/downloads/opentip-native.js
// @require     https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/editorbuttons.js
// @resource    codemirrorBaseCSS https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/codemirror-base.css
// @resource    codemirrorThemeCSS https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/codemirror-theme.css
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @include     http://aimgames.forummotion.com/
// @version     0.25
// @grant       GM_addStyle
// @grant       GM_log
// @grant       GM_info
// @grant       GM_getResourceText
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// TODO: getResourceURL
// https://wiki.greasespot.net/Metadata_Block#.40resource
// https://wiki.greasespot.net/GM_getResourceText

// TODO check for errors
// https://wiki.greasespot.net/UnsafeWindow
// arantius.info/gm/security/gm-escalate-getter.html
// http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Getting_Started#Pitfall_.231:_Auto-eval_Strings
// https://wiki.greasespot.net/XPCNativeWrapper
// https://wiki.greasespot.net/Expando_Properties

GM_log(GM_info);

'use strict';

// TODO: this...
//const buttons = _hansen.buttons;

// GM_addStyle polyfill. Since @grant none allows us to directly interact with `window`,
// let's avoid using the greasemonkey crap unless necessary
//function GM_addStyle(css) {
//    const style = document.createElement('style');
//    style.type = 'text/css';
//    style.textContent = css;
//    document.head.appendChild(style);
//}

// i cant make this remote for some reason... gah
GM_addStyle(GM_getResourceText('codemirrorBaseCSS'));
GM_addStyle(GM_getResourceText('codemirrorThemeCSS'));

// custom code styles
const style = `<style type="text/css">
pre {
    max-height: 200px;
    overflow: auto;
    /**/
    color: #ff6913;
    font-family: Courier,"Courier New","Source Code Pro",monospace;
    font-size: 11px;
    /* box */
    background-color: #000;
    border: solid 1px #1c1c1c;
    margin: 0;
    /* possibly? */
    margin-left: 60px;
}
/* inline code, shit that isnt deprecated in html5 */
samp {
    color: #ff6913;
    font-family: Courier,"Courier New","Source Code Pro",monospace;
}
</style>`;

const toggledBBcodes = {};

function insertTextAtCursor(editor, text) {
  const doc = editor.getDoc();
  const cursor = doc.getCursor();
  doc.replaceRange(text, cursor);
}

function createButtons(editor) {
  const mast = document.createElement('span');
  
  buttons.forEach(function(e, i) {
    if (typeof e == 'string') {
      // add a separator!
      const el = document.createElement('img');
      el.src = e;
      el.style = 'vertical-align:middle';
      mast.appendChild(el);
    } else {
      // add a button!
      const id = e.id;
      const btn = createButton(id, e.src, e.accesskey, '');
      if (e.dontToggle) {
        btn.addEventListener('click', () => {
          insertTextAtCursor(editor, '[' + e.tag + ']');
        });
      } else {
        btn.addEventListener('click', () => {
          if (toggledBBcodes[id]) {
            toggledBBcodes[id] = false;
            insertTextAtCursor(editor, '[/' + e.tag + ']');
          } else {
            toggledBBcodes[id] = true;
            insertTextAtCursor(editor, '[' + e.tag + ']');
          }
        });
      }
      mast.appendChild(btn);
    }
    // append breaker
    mast.appendChild(document.createTextNode('\u00A0'));
  });
  
  return mast;
}

function createButton(id, img, accesskey, title/*, onclick*/) {
  /*<button class="button2" ondblclick="helpline('b')" type="button" id="text_editor_cmd_bold" accesskey="b" title="">
    <img src="https://illiweb.com/fa/wysiwyg/text_bold.png" alt="">
  </button>&nbsp;*/
  
  const btn = document.createElement('button');
  btn.setAttribute('accesskey', accesskey);
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', id);
  btn.setAttribute('title', title);
  btn.setAttribute('class', 'button2'); // class or className?
  //btn.onclick = onclick;
  
  // internal image
  const tImg = document.createElement('img');
  tImg.setAttribute('src', img);
  
  btn.appendChild(tImg);
    
  return btn;
}

GM_addStyle(`

/* clear default bbcode buttons */
#text_edit, #html_edit, #text_editor_cmd_switchmode, #format-buttons > img, #format-buttons > wbr {
  display: none !important;
}
#format-buttons {
  padding-bottom: 5px;
}

/*anotha padding fix*/
#quick_reply > table > tbody > tr > td > .CodeMirror {
  margin-top: 5px;
}

/*tooltip font*/
.opentip-container {
  font-family: Verdana,Arial,Helvetica,sans-serif;
}

/*makes my name be rainbow-y*/
[href="/u2548"] > span > strong{
    animation: hansencolorRotate 6s linear 0s infinite;
}

@keyframes hansencolorRotate {
    from {
        color: rgb(255, 0, 0);
    }
    16.6% {
        color: rgb(255, 0, 255);
    }
    33.3% {
        color: rgb(0, 0, 255);
    }
    50% {
        color: rgb(0, 255, 255);
    }
    66.6% {
        color: rgb(0, 255, 0);
    }
    83.3% {
        color: rgb(255, 255, 0);
    }
    to {
        color: rgb(255, 0, 0);
    }
}


/*
.i_icon_quote {
}*/
/*hovering over post buttons*/
.post-options > a:hover {
  background-color: #fbfbfb !important;
  
  background: linear-gradient(to bottom, rgb(201, 31, 31) 0%,rgb(140, 14, 14) 100%) !important;
  border-image: linear-gradient(to bottom, rgb(47, 47, 47) 0%,rgb(87, 87, 87) 100%) 1 !important;
}
/*remove default button imgs*/
.post-options > a > img {
  display: none;
}
/*remove broken multiquote button*/
.post-options > img {
  display: none; 
}
/*edit button text*/
.post-options > a[href$="mode=editpost"]:after {
  display: initial;
  content: 'edit';
}
/*delete button text*/
.post-options > a[href$="mode=delete"]:after {
  display: initial;
  content: 'x';
}
/*quote button text*/
.post-options > a[href$="mode=quote"]:after {
  display: initial;
  content: 'quote';
}
/*post buttons*/
.post-options > a {
  font: 11px Arial, Helvetica, sans-serif;
  
  /*! a-shadow: inset 0 1px 0 rgba(255,255,255,.3), 0 1px 0 rgba(0,0,0,.1); */

  position: relative;
  vertical-align: middle;
  margin: 0 2px 5px 0;
  background-color: #940b0b;
  border: solid 3px #272727;

  background-repeat: no-repeat;
  background-position: center center;
  text-indent: -900em;
  color: #333;
  text-decoration: none;
  line-height: 100%;
  white-space: nowrap;

  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;


  width: 26px;
  height: 26px;
  font-size: 90%;

  visibility: initial;
  display: initial;
  padding: 2px 5px;
  text-align: center;
  font-size: 75%;
  /*! margin-bottom: 0; */
  /*! margin-top: 100px; */
  
  transition: all 1s ease;
  color: #d0b2b2;
  text-transform: uppercase;
  font-weight: bold;
  background: linear-gradient(to bottom, rgb(163, 22, 22) 0%,rgb(105, 10, 10) 100%);
  border-image: linear-gradient(to bottom, rgb(20, 20, 20) 0%,rgb(62, 62, 62) 100%) 1;
  /*! border-style: solid; */
  /*! border-width: 10px; */
  /*! -webkit-font-smoothing: antialiased; */
  text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /*could remove i suppose?*/
  font-size: 60%;
}

/*tiny fix for bottom categories bar*/
.catBottom {
  padding-left: 5px;
  padding-right: 5px;
}

/*hide the text-footer at the bottom of the screen*/
#page-footer {
  display:none;
}
`);

function loadCodeMirror(org) {
  // add new cm editor
  const editor = CodeMirror.fromTextArea(org, {
    mode           : "bbcodemixed",
    tabSize        : 2,
    indentUnit     : 2,
    indentWithTabs : false,
    lineNumbers    : true,
    lineWrapping   : true,
    scrollbarStyle : "native",
    autofocus      : true,
  });
  editor.setSize(700, 250);
  
  const bbControls = document.getElementById('text_editor_controls');
  if (bbControls) {
    const fmtButtons = document.getElementById('format-buttons');
    
    // this is now done thru CSS
    
    //// hide all children
    //for (let i = 0, len = fmtButtons.children.length; i < len; i++) {
    //  fmtButtons.children[i].style.display = 'none';
    //}
    //// slight padding
    //fmtButtons.style.paddingBottom = '5px';
    
    fmtButtons.appendChild(createButtons(editor));
  } else {
    let previewDetect = document.getElementById('text_editor_textarea');
    if (previewDetect) {
      previewDetect = previewDetect.parentElement;
      previewDetect.insertBefore(createButtons(editor), previewDetect.firstChild);
    }
  }
}

const styleMin = style
  .replace(/^\s+/gm, '') // remove whitespace
  .replace(/(\r\n|\n)/g, '') // remove newlines
  .replace(/\/\*([^]+?)\*\//g, ''); // remove comments

// add style to the beginning of every post
const textArea = document.getElementById('text_editor_textarea');
if (textArea) {
  if (!textArea.value || textArea.value[0] !== '<') {
    textArea.value = styleMin + '\n' + textArea.value;
  }

  document.addEventListener('keydown', function(e) {
    if (e.which == 13) { // key is 'enter'
      textArea.value = textArea.value
        .replace(/\[cd\]([^]+?)\[\/cd\]/g, '<pre>$1</pre>') // code block
        .replace(/`([^]+?)`/g, '<samp>$1</samp>'); // inline code
    }
  }, false);

  // load our new editor (replacing the existing one)
  if (window.$.sceditor) {
    console.log('sceditor');
    delete $.sceditor;
    //try {
    //  $("#text_editor_textarea").height(450).sceditor("instance").destroy();
    //} catch (e) {
    //  console.error(e);
    //}
    loadCodeMirror(textArea);
  } else if (window.editor) {
    console.log('cmeditor');
    editor.toTextArea();
    loadCodeMirror(textArea);
  } else {
    console.log('?? editor');
    window.addEventListener('load', () => { // the event listener here gives the editor time to load b4 we trash it
      // remove default editor
      const cl = document.getElementsByClassName('sceditor-container');
      if (cl && cl[0]) cl[0].remove(); // TODO see https://github.com/baivong/Userscript/blob/master/Forumotion/removeSCEditorCodeMirror.user.js
      else console.log('cl is ' + cl);

      // restore original editor (invisible)
      const org = document.getElementById('text_editor_textarea');
      if (org) {
        //org.style.display = '';
        loadCodeMirror(org);
      } else console.log('org is ' + org);
    });
  }
  
}

// 'link to this post' shortcut
const opt = document.getElementsByClassName('post-options');
for (let i = 0, il = opt.length; i < il; i++) {
	let id = opt[i].querySelector('img').id;
	id = id.substring(id.lastIndexOf('_') + 1);
	//console.log(id);
	$(opt[i]).prepend('<a href="' + document.location.origin + document.location.pathname + '#' + id + '">Link to this post</a>')
}



// user tooltip system

function readUser(document) {
  const advdet = document.getElementById('profile-advanced-details')
  let mass = '';

  Array.slice(advdet.children).forEach((e, i) => {
    if (e.tagName == 'DL') {
      mass+=(e.children[0].textContent + e.children[1].textContent) + '\n';
    }
  });

  return mass.replace(/Male.*$/m, (document.querySelector('.ajax-profil_parent > .field_uneditable > img') || {alt:'Unknown'}).alt)
             .replace(/\*/g, '') // remove 'this thing is not optional' thing
             .replace(/\s*:\s*/gm, ': ') // remove unnecessary whitespace
             .replace(/Birthday: (....-..-..).*$/m, 'Birthday: $1') // fix birthday format
             .trim()
             .replace(/\n/g, '<br>') // turn newlines into breaks
             .replace(/([A-Za-z \/]+): ([A-Za-z \/]+): /g, '$1: -<br>$2: ') // fixes missing newlines
             .replace(/([A-Za-z \/]+): ([A-Za-z \/]+): /g, '$1: -<br>$2: '); // they say second time's the charm... when you don't wanna lookback, i suppose
}


const usrLinks = document.querySelectorAll('a[href^="/u"]');
let lastLoadedUsr = -1;
let lastUserData = null;
let timer = null;

for (let i = 0, len = usrLinks.length; i < len; i++) {
  
  const _i = i;
  const usr = usrLinks[i];
  const tooltip = new Opentip(usr, { showOn: null, hideOn: 'mouseleave', style: 'dark' });

  // Hide the tooltip on focus so we don't bother the user while editing.
  usr.addEventListener("mouseover", function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    timer = setTimeout(function() {
      if (lastLoadedUsr === _i && lastUserData) { // maybe check if content is empty or add to array of bool? since opentip doesnt unload anything ever
        tooltip.setContent(lastUserData);
        tooltip.show(); 
      } else {
        console.log('mouseover');
        tooltip.setContent('Loading...');
        tooltip.show(); 

        $.get(usr.href, function(data) {
          //tooltip.setContent(data);

          const parser=new DOMParser();
          const htmlDoc=parser.parseFromString(data, "text/html");
          const cont = readUser(htmlDoc);
          tooltip.setContent(cont);
          lastUserData = cont;
          lastLoadedUsr = _i;
          
          console.log("Load was performed.");
        });
      }
    }, 1000);
    
  });
  usr.addEventListener("mouseleave", function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    console.log('mouseleave');
    tooltip.hide();
  });
  usr.addEventListener("mouseout", function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    console.log('mouseout');
    tooltip.hide();
  });
}
