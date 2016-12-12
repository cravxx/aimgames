// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds partial markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @require     http://codemirror.net/lib/codemirror.js
// @require     http://codemirror.net/mode/css/css.js
// @require     http://codemirror.net/mode/xml/xml.js
// @require     http://codemirror.net/mode/vbscript/vbscript.js
// @require     http://codemirror.net/mode/javascript/javascript.js
// @require     http://codemirror.net/mode/htmlmixed/htmlmixed.js
// @require     https://github.com/rosmanov/CodeMirror-modes/raw/master/bbcode/bbcode.js
// @require     https://github.com/rosmanov/CodeMirror-modes/raw/master/bbcodemixed/bbcodemixed.js
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @version     0.16
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// not yet: lets work around it until we really have to @grant something
// @require     https://code.jquery.com/jquery-3.1.1.min.js



'use strict';

// GM_addStyle polyfill. Since @grant none allows us to directly interact with `window`,
// let's avoid using the greasemonkey crap unless necessary
function GM_addStyle(css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    document.head.appendChild(style);
}

GM_addStyle(`/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}

.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: -20px;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3 {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 30px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -30px; margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 30px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -30px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
}
.CodeMirror-wrap pre {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  overflow: auto;
}

.CodeMirror-widget {}

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background: #ffa;
  background: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }

/*HUGE FIX*/
.CodeMirror {
  text-align: left;
}
`);

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

const buttons = [
{
  id: 'text_editor_cmd_bold',
  accesskey: 'b',
  src: 'https://illiweb.com/fa/wysiwyg/text_bold.png',
  tag: 'b'
},
{
  id: 'text_editor_cmd_italic',
  accesskey: 'i',
  src: 'https://illiweb.com/fa/wysiwyg/text_italic.png',
  tag: 'i'
},
{
  id: 'text_editor_cmd_underline',
  accesskey: 'u',
  src: 'https://illiweb.com/fa/wysiwyg/text_underline.png',
  tag: 'u'
},
{
  id: 'text_editor_cmd_strikethrough',
  accesskey: 'x',
  src: 'https://illiweb.com/fa/wysiwyg/text_strikethrough.png',
  tag: 'strike'
},

'https://illiweb.com/fa/wysiwyg/separator.png',

{
  id: 'text_editor_cmd_justifyleft',
  accesskey: 'm',
  src: 'https://illiweb.com/fa/wysiwyg/text_align_left.png',
  tag: 'left'
},
{
  id: 'text_editor_cmd_justifycenter',
  accesskey: 't',
  src: 'https://illiweb.com/fa/wysiwyg/text_align_center.png',
  tag: 'center'
},
{
  id: 'text_editor_cmd_justifyright',
  accesskey: 'g',
  src: 'https://illiweb.com/fa/wysiwyg/text_align_right.png',
  tag: 'right'
},
{
  id: 'text_editor_cmd_justifyfull',
  accesskey: 'jt',
  src: 'https://illiweb.com/fa/wysiwyg/text_align_justify.png',
},

'https://illiweb.com/fa/wysiwyg/separator.png',

{
  id: 'text_editor_cmd_insertunorderedlist',
  accesskey: 'l',
  src: 'https://illiweb.com/fa/wysiwyg/text_list_bullets.png',
  tag: 'list'
},
{
  id: 'text_editor_cmd_insertorderedlist',
  accesskey: 'o',
  src: 'https://illiweb.com/fa/wysiwyg/text_list_numbers.png',
  tag: 'list'
},
{
  id: 'text_editor_cmd_inserthorizontalrule',
  accesskey: '',
  src: 'https://illiweb.com/fa/wysiwyg/text_horizontalrule.png',
  tag: 'hr'
},

'https://illiweb.com/fa/wysiwyg/separator.png',

{
  id: 'text_editor_cmd_wrap0_quote',
  accesskey: 'q',
  src: 'https://illiweb.com/fa/wysiwyg/comments.png',
  tag: 'quote'
},
{
  id: 'text_editor_cmd_wrap0_code',
  accesskey: 'c',
  src: 'https://illiweb.com/fa/wysiwyg/page_white_code.png',
  tag: 'code'
},

'https://illiweb.com/fa/wysiwyg/separator.png',

{
  id: 'bbcodewimg',
  accesskey: 'p',
  src: 'https://illiweb.com/fa/wysiwyg/picture.png',
  tag: 'img'
},
{
  id: 'addbbcode16',
  accesskey: 'w',
  src: 'https://illiweb.com/fa/wysiwyg/link.png',
  tag: 'url'
},

];

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
        btn.onclick = () => {
          insertTextAtCursor(editor, '[' + e.tag + ']');
        };
      } else {
        btn.onclick = () => {
          if (toggledBBcodes[id]) {
            toggledBBcodes[id] = false;
            insertTextAtCursor(editor, '[/' + e.tag + ']');
          } else {
            toggledBBcodes[id] = true;
            insertTextAtCursor(editor, '[' + e.tag + ']');
          }
        };
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
  btn.accesskey = accesskey;
  btn.type = 'button';
  btn.id = id;
  btn.title = title;
  btn.className = 'button2';
  //btn.onclick = onclick;
  
  // internal image
  const tImg = document.createElement('img');
  tImg.src = img;
  
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
}

// 'link to this post' shortcut
const opt = document.getElementsByClassName('post-options');
for (let i = 0, il = opt.length; i < il; i++) {
	let id = opt[i].querySelector('img').id;
	id = id.substring(id.lastIndexOf('_') + 1);
	//console.log(id);
	$(opt[i]).prepend('<a style="font-size: 60%; font-style: italic; text-align: center;" href="' + document.location.origin + document.location.pathname + '#' + id + '">Link to this post</a>')
}

if (window.$.sceditor) {
  console.log('sceditor');
  delete $.sceditor;
  //try {
  //  $("#text_editor_textarea").height(450).sceditor("instance").destroy();
  //} catch (e) {
  //  console.error(e);
  //}
  loadCodeMirror(document.getElementById('text_editor_textarea'));
} else if (window.editor) {
  console.log('cmeditor');
  editor.toTextArea();
  loadCodeMirror(document.getElementById('text_editor_textarea'));
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
      org.display = '';
      loadCodeMirror(org);
    } else console.log('org is ' + org);
  });
}
