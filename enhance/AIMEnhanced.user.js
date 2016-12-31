// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds partial markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/codemirror.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/css.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/xml.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/vbscript.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/javascript.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/htmlmixed.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/bbcode.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/bbcodemixed.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/opentip-native.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/editorbuttons.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/prism.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/enhance/resources/usernamehistory.js
// @resource    codemirrorBaseCSS https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/codemirror-base.css
// @resource    codemirrorThemeCSS https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/codemirror-theme.css
// @resource    prismCSS https://github.com/HulaSamsquanch/aimgames/raw/master/enhance/prism.css
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @include     http://aimgames.forummotion.com/f*
// @include     http://aimgames.forummotion.com/
// @version     0.46
// @grant       GM_addStyle
// @grant       GM_log
// @grant       GM_info
// @grant       GM_getResourceText
// @grant       GM_setClipboard
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

'use strict';

GM_log(GM_info);

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
GM_addStyle(GM_getResourceText('prismCSS'));

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
  
  buttons.forEach(function(e) {
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


/*slight padding below post buttons for tidiness*/
.post-options {
  padding-bottom: 2.5px;
}
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
/*show IP button text*/
.post-options > a[href^="/modcp?mode=ip"]:after {
  display: initial;
  content: 'ip';
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
  
  /*transition: all 1s ease;*/
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

/*utility class for links*/
.hansenAnc {
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}
/*no underline*/
.hansenAnc:hover {
  text-decoration: none !important;
}

/*legacy syntax highlighting CSS*/
.code {
  color: #eee;
}
.hansen-literal {
  color: #CC3366 !important;
}
.hansen-keyword {
  color: #33FFFF !important;
}

/*prismjs 'bug' fix*/
/*.language-java {*/
.cont_code {
  white-space: pre !important;
}
/*style fix*/
/*.code {*/
.code:not(.spoiler) {
  background: #272822 !important;
}

/* 'image has been scaled to fit screen' msg */
/*fitimg is an anchor, that works w/ display:block*/
.h-fitimg {
	background-color: #231717;
    padding-left: 5px;
    padding-right: 5px;
    /*width: 99.093%;*/
	cursor: pointer;
	border: solid 1px #2F2929; /*chrome and shit*/
	border: solid 1px #2F2929CC; /*modern firefox*/
    display: block;
}
.h-fitimg:hover {
    text-decoration: none !important;
}
/*resize the imgs themselvers*/
.postbody > div > img {
  max-width: 100%;
}

/*remastered icons*/
img[src="https://illiweb.com/fa/extremedarkred/navfolder.gif"] {
	background-image: url('http://i.imgur.com/MCyr6Y1.png');
	object-position: -20px 20px;
	background-size: cover;
  margin-right: 2px;
}

img[src="https://illiweb.com/fa/extremedarkred/icon_minipost.gif"] {
  background-image: url('http://i.imgur.com/jat1H4q.png');
  object-position: -20px 20px;
  background-size: cover;
  /*margin-right: 2px;*/

  vertical-align: 0px;
  margin-right: 0px;
}

img[src="http://i71.servimg.com/u/f71/14/03/33/42/locked12.gif"] {
  background-image: url('http://i.imgur.com/DXwHC1o.png'); /*also url('http://i.imgur.com/u3StReB.png');*/
  object-position: -20px 20px;
  background-size: cover;
  margin-right: 2px;

  vertical-align: -1px;
}

img[src="https://illiweb.com/fa/extremedarkred/icon_minipost_new.gif"] {
    background-image: url('http://i.imgur.com/JLJvZpG.png');
    object-position: -20px 20px;
    background-size: cover;
    /*margin-right: 2px;*/

    vertical-align: 0px;
    margin-right: 0px;
}

img[title][src="http://i59.servimg.com/u/f59/14/03/33/42/catego12.png"] {
    background-image: url('http://i.imgur.com/DumidY4.png');
    object-position: -40px 20px;
    background-size: cover;
    /*margin-right: 2px;*/

    vertical-align: 0px;
    margin-right: 0px;
}

/*category title spacing fix*/
.cattitle {
    padding-left: 2px;
}
`);

// the codemirror editor
let editor;
function loadCodeMirror(org) {

  // add new cm editor
  editor = CodeMirror.fromTextArea(org, {
    mode           : 'bbcodemixed',
    tabSize        : 2,
    indentUnit     : 2,
    indentWithTabs : false,
    lineNumbers    : true,
    lineWrapping   : true,
    scrollbarStyle : 'native',
    autofocus      : false,
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

function processMarkdown(txt) {
  if (!txt || txt[0] !== '<') {
    txt = styleMin + '\n' + txt;
  }

   return txt.replace(/\[cd\]([^]+?)\[\/cd\]/g, '<pre>$1</pre>') // code block
             .replace(/`([^]+?)`/g, '<samp>$1</samp>') // inline code
             .replace(/\[gist\]([^]+?)\[\/gist\]/g, '<iframe src="http://rafa1231518.github.io/nfmm-addons/embed.html?loc=$1" name="aframe1" scrolling="auto" frameborder="no" align="left" width="100%"></iframe>'); // embedded gists
}

// add style to the beginning of every post
const textArea = document.getElementById('text_editor_textarea');
if (textArea) {
  //if (!textArea.value || textArea.value[0] !== '<') {
  //  textArea.value = styleMin + '\n' + textArea.value;
  //}

  const previewButton = document.querySelector('.liteoption[name=preview]');
  if (previewButton) {
    previewButton.addEventListener('click', () => { // TODO is this kind of event fast enough? seems like it, needs more testin'
      editor.setValue(processMarkdown(editor.getValue()));
      console.log('clicked!!!');
      //e.preventDefault();
    });
  }
  
  const postButton = document.querySelector('.mainoption[name=post]');
  if (postButton) {
    postButton.addEventListener('click', () => {
      editor.setValue(processMarkdown(editor.getValue()));
      console.log('clicked!!!');
      //e.preventDefault();
    });
  }

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
	$(opt[i]).prepend('<a href="' + document.location.origin + document.location.pathname + '#' + id + '">Link to this post</a>');
}



// user tooltip system

// parse the user page into a neat block of html
function readUser(document) {
  const advdet = document.getElementById('profile-advanced-details');
  let mass = '';
  
  try {
    //console.log(''+JSON.stringify(window._hansen));
    //console.log(''+JSON.stringify(buttons));
    //console.log(''+JSON.stringify(typeof usernameHistory));
    // conclusion from the above debugging: window_hansen works but does not export to unsafeWindow; scope works but the cache requires a few refreshes to reset
    
    const username = document.querySelectorAll('.genmed.module-title')[0].textContent.trim().replace(/ \(online\)/, '');
    mass = 'Username history: ' + (usernameHistory[username] || username) + '<br>';
  } catch(e) {mass='Username history: ' + e + '<br>';}

  Array.slice(advdet.children).forEach((e) => {
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

let lastLoadedTooltip = -1;
let lastTooltipData = null;
let timer = null;

function createMouseOverFunc(tooltip, i, url, parseFunc) {
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    timer = setTimeout(function() {
      if (lastLoadedTooltip === i && lastTooltipData) { // maybe check if content is empty or add to array of bool? since opentip doesnt unload anything ever
        tooltip.setContent(lastTooltipData);
        tooltip.show(); 
      } else {
        //console.log('mouseover');
        tooltip.setContent('Loading...');
        tooltip.show(); 

        // basically the only reason i'm using jquery right 'ere
        $.get(url, function(data) {
          //tooltip.setContent(data);

          // new thing that is widely supported in our targeted browsers (i think?)
          const parser=new DOMParser();
          const htmlDoc=parser.parseFromString(data, 'text/html');
          const cont = parseFunc(htmlDoc);
          tooltip.setContent(cont);
          lastTooltipData = cont;
          lastLoadedTooltip = i;
          
          console.log('Load was performed.');
        });
      }
    }, 1000);
    
  };
}

// both funcs hide the tooltip
function createMouseLeaveFunc(tooltip) {
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    //console.log('mouseleave');
    tooltip.hide();
  };
}

function createMouseOutFunc(tooltip) {
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    //console.log('mouseout');
    tooltip.hide();
  };
}

const usrLinks = document.querySelectorAll('a[href^="/u"]');

for (let i = 0, len = usrLinks.length; i < len; i++) {
  
  const _i = i; // static link to `i`, just in case the threading model doesnt behave like i expect it to
  const usr = usrLinks[i]; // same as above
  const tooltip = new Opentip(usr, { showOn: null, hideOn: 'mouseleave', style: 'dark' }); // hideOn doesn't actually seem to work very well here...

  usr.addEventListener('mouseover', createMouseOverFunc(tooltip, _i, usr.href, readUser));
  usr.addEventListener('mouseleave', createMouseLeaveFunc(tooltip));
  usr.addEventListener('mouseout', createMouseOutFunc(tooltip));
}

// thread preview tooltip system

function readTopic(document) {
  // get the first post
  const op = document.querySelector('tr.post > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
  
  if (op === null) {
    return '(N/A)';
  } // else
  
  // trim to fit
  // only problem with this system is that it's missing line breaks...
  const txt = op.textContent;
  if (txt.length<500)
    return txt/*.replace(/\r\n/g, '<br/>')*/;
  // else
  return txt.substr(0, 500)/*.replace(/\r\n/g, '<br/>')*/;
}

const topicLinks = document.querySelectorAll('a.topictitle');

for (let i = 0, len = topicLinks.length; i < len; i++) {
  
  const _i = i + usrLinks.length;
  
  const topic = topicLinks[i]; // same as above
  const tooltip = new Opentip(topic, { showOn: null, hideOn: 'mouseleave', style: 'dark' }); // hideOn doesn't actually seem to work very well here...

  topic.addEventListener('mouseover', createMouseOverFunc(tooltip, _i, topic.href, readTopic));
  topic.addEventListener('mouseleave', createMouseLeaveFunc(tooltip));
  topic.addEventListener('mouseout', createMouseOutFunc(tooltip));
}

// codebox select all/copy buttons

const codeboxes = document.querySelectorAll('.codebox:not(.spoiler)');

function cleanHTML(text) {
  return text
    .replace(/\&lt;/g, '<') // HTML less-than escape
    .replace(/\&gt;/g, '>') // ditto, greater-than
    .replace(/\&nbsp;/g, '') // forumotion does a lot of 'ese
    .replace(/\&amp;/g, '&') // ampersand
    .replace(/<br>/g, '\r\n') // forumotion only seems to do line breaks in this style
    .replace(/<span class=\"token [a-z]+\"( spellcheck=\"true\")?>/g, '') // both this and the one below will remove Prism styles from copied code and shouldn't actually affect the Prism highlighting
    .replace(/<\/span>/g, '');
}

function selectText(container) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(container);
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(container);
    window.getSelection().addRange(range);
  }
}

for (let i = 0, len = codeboxes.length; i < len; i++) {
  const header = codeboxes[i].children[0];
  if (header.firstChild.firstChild.firstChild.tagName=='A') continue; // UH OH! we've accidentally stumbled into a _quote_! that's not gonna work at all! TODO handle quotes without mentions
  
  const content = codeboxes[i].children[1].children[0];
  
  if (!content) continue; // if we're not working with a real codebox, just in case
  
  const selectAll = document.createElement('a');
  selectAll.appendChild(document.createTextNode(' Select All'));
  selectAll.setAttribute('class', 'genmed hansenAnc');
  selectAll.addEventListener('click', () => {
    selectText(content);
  });
  
  header.appendChild(selectAll);
  
  const copy = document.createElement('a');
  copy.appendChild(document.createTextNode(' Copy'));
  copy.setAttribute('class', 'genmed hansenAnc');
  copy.addEventListener('click', () => {
    try {
      GM_setClipboard(cleanHTML(content.innerHTML));
    } catch (e) {
      GM_setClipboard(content.textContent);
    }
  });
  
  header.appendChild(copy);
}

// syntax highlighting inside code boxes
// WARNING: EXTREMELY HACKY

function syntaxHighlight() {
  try {
    // legacy syntax highlighting code, unnecessary since prism supports web workers

    /*
    const jsLiterals = [
      [/\btrue\b/g, 'true'], [/\bfalse\b/g, 'false'], [/\bnull\b/g, 'null'], [/\bundefined\b/g, 'undefined'], [/\bNaN\b/g, 'NaN'], [/\bInfinity\b/g, 'Infinity'], [/\b\+\b/g, '\+'], [/\b\-\b/g, '\-'], [/\b\=\b/g, '\=']
    ];
    const javaKeywords = [
      [/\bfalse\b/g, 'false'], [/\bsynchronized\b/g, 'synchronized'], [/\bint\b/g, 'int'], [/\babstract\b/g, 'abstract'], [/\bfloat\b/g, 'float'], [/\bprivate\b/g, 'private'],
      [/\bchar\b/g, 'char'], [/\bboolean\b/g, 'boolean'], [/\bstatic\b/g, 'static'], [/\bnull\b/g, 'null'], [/\bif\b/g, 'if'], [/\bconst\b/g, 'const'], [/\bfor\b/g, 'for'], [/\btrue\b/g, 'true'],
      [/\bwhile\b/g, 'while'], [/\blong\b/g, 'long'], [/\bstrictfp\b/g, 'strictfp'], [/\bfinally\b/g, 'finally'], [/\bprotected\b/g, 'protected'], [/\bimport\b/g, 'import'], [/\bnative\b/g, 'native'],
      [/\bfinal\b/g, 'final'], [/\bvoid\b/g, 'void'], [/\benum\b/g, 'enum'], [/\belse\b/g, 'else'], [/\bbreak\b/g, 'break'], [/\btransient\b/g, 'transient'], [/\bcatch\b/g, 'catch'],
      [/\binstanceof\b/g, 'instanceof'], [/\bbyte\b/g, 'byte'], [/\bsuper\b/g, 'super'], [/\bvolatile\b/g, 'volatile'], [/\bcase\b/g, 'case'], [/\bassert\b/g, 'assert'], [/\bshort\b/g, 'short'],
      [/\bpackage\b/g, 'package'], [/\bdefault\b/g, 'default'], [/\bdouble\b/g, 'double'], [/\bpublic\b/g, 'public'], [/\btry\b/g, 'try'], [/\bthis\b/g, 'this'], [/\bswitch\b/g, 'switch'],
      [/\bcontinue\b/g, 'continue'], [/\bthrows\b/g, 'throws'], [/\bprotected\b/g, 'protected'], [/\bprivate\b/g, 'private'],
      
      [/\bin\b/g, 'in'], [/\bof\b/g, 'of'], [/\bif\b/g, 'if'], [/\bfor\b/g, 'for'], [/\bwhile\b/g, 'while'], [/\bfinally\b/g, 'finally'], [/\bvar\b/g, 'var'], [/\bnew\b/g, 'new'],
      [/\bfunction\b/g, 'function'], [/\bdo\b/g, 'do'], [/\breturn\b/g, 'return'], [/\bvoid\b/g, 'void'], [/\belse\b/g, 'else'], [/\bbreak\b/g, 'break'], [/\bcatch\b/g, 'catch'],
      [/\binstanceof\b/g, 'instanceof'], [/\bwith\b/g, 'with'], [/\bthrow\b/g, 'throw'], [/\bcase\b/g, 'case'], [/\bdefault\b/g, 'default'], [/\btry\b/g, 'try'], [/\bthis\b/g, 'this'],
      [/\bswitch\b/g, 'switch'], [/\bcontinue\b/g, 'continue'], [/\btypeof\b/g, 'typeof'], [/\bdelete\b/g, 'delete'], [/\blet\b/g, 'let'], [/\byield\b/g, 'yield'], [/\bconst\b/g, 'const'],
      [/\bexport\b/g, 'export'], [/\bsuper\b/g, 'super'], [/\bdebugger\b/g, 'debugger'], [/\bas\b/g, 'as'], [/\basync\b/g, 'async'], [/\bawait\b/g, 'await']
    ];
    
    const codects = document.getElementsByClassName('cont_code');
    
    for (let i = 0, len = codects.length; i < len; i++) {
      let ht = codects[i].innerHTML; // avoid rebuilding the structure every time!!!
      for (let j = 0, blen = jsLiterals.length; j < blen; j++) {
        ht = ht.replace(jsLiterals[j][0], '<span class="hansen-literal">' + jsLiterals[j][1] + '</span>');
      }
      for (let j = 0, blen = javaKeywords.length; j < blen; j++) {
        ht = ht.replace(javaKeywords[j][0], '<span class="hansen-keyword">' + javaKeywords[j][1] + '</span>');
      }
      codects[i].innerHTML = ht;
    }
    */


    const codects = document.getElementsByClassName('cont_code');

    for (let i = 0, len = codects.length; i < len; i++) {
      // dirty hack in case the dom is all fucked up
      if (!codects[i]) { // greasemonkey fucked us, lets wait and try again
        console.log('undef:' + i);
        setTimeout(syntaxHighlight, 200);//
        return;
      }

      // legacy prism integration code, basically awful
      
      /*
      // create a code element to replace the div TODO is there a better way to do this
      const d = document.createElement('code');
      d.setAttribute('class', 'language-java');
      d.textContent = cleanHTML(codects[i].innerHTML);//no way around this last lil replace

      codects[i].parentNode.insertBefore(d, codects[i]);
      codects[i].parentNode.removeChild(codects[i]);

      Prism.highlightElement(d, false); // FUCK! async won't work because of too many worker scripts!
      */
      
      codects[i].innerHTML = Prism.highlight(cleanHTML(codects[i].innerHTML), Prism.languages.java);//no way around this parsing/innerhtml
      
    }

    //// The code snippet you want to highlight, as a string
    //var code = "var data = 1;";
  //
    //// Returns a highlighted HTML string
    //var html = Prism.highlight(code, Prism.languages.javascript);
  } catch(e) {
    // chromium browsers may die here
    console.error(e);
    //console.trace(e);
    console.error(e.toString());
    //GM_log(e.toString());
  }
}

// it should run directly just fine, but this will make it run at document-idle which means the dirty hacks don't go into effect
window.addEventListener('load', function() {
  syntaxHighlight();
}, false);

// add the thingy for resize images to size and stuff
const images = document.querySelectorAll('.postbody > div > img');

for (let i = 0, len = images.length; i < len; i++) {
  if (images[i].clientWidth > 0 && images[i].naturalWidth !== images[i].clientWidth) { // if clientwidth==0 then img is not visible
    const el = document.createElement('a');
    el.setAttribute('class', 'h-fitimg');
    el.setAttribute('href', images[i].src);
    el.appendChild(document.createTextNode('Image scaled to fit screen. Click to show original size...'));
    images[i].parentElement.insertBefore(el,images[i]);
  }
}

// un-adfly links
const postLinks = document.querySelectorAll('a[href*="/http"]');

for (let i = 0, len = postLinks.length; i < len; i++) {
  const realurl = postLinks[i].href.substring(postLinks[i].href.indexOf('/http')+1);
  postLinks[i].setAttribute('href', realurl);
  postLinks[i].textContent = realurl;
}
