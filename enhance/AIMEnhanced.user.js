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
// @require     https://github.com/enyo/opentip/raw/master/downloads/opentip-native.js
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @include     http://aimgames.forummotion.com/
// @version     0.20
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

GM_addStyle(`.opentip-container,
.opentip-container * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.opentip-container {
  position: absolute;
  max-width: 300px;
  z-index: 100;
  -webkit-transition: -webkit-transform 1s ease-in-out;
  -moz-transition: -moz-transform 1s ease-in-out;
  -o-transition: -o-transform 1s ease-in-out;
  -ms-transition: -ms-transform 1s ease-in-out;
  transition: transform 1s ease-in-out;
  pointer-events: none;
  -webkit-transform: translateX(0) translateY(0);
  -moz-transform: translateX(0) translateY(0);
  -o-transform: translateX(0) translateY(0);
  -ms-transform: translateX(0) translateY(0);
  transform: translateX(0) translateY(0);
}
.opentip-container.ot-fixed.ot-hidden.stem-top.stem-center,
.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-center,
.opentip-container.ot-fixed.ot-hiding.stem-top.stem-center {
  -webkit-transform: translateY(-5px);
  -moz-transform: translateY(-5px);
  -o-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-top.stem-right,
.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-right,
.opentip-container.ot-fixed.ot-hiding.stem-top.stem-right {
  -webkit-transform: translateY(-5px) translateX(5px);
  -moz-transform: translateY(-5px) translateX(5px);
  -o-transform: translateY(-5px) translateX(5px);
  -ms-transform: translateY(-5px) translateX(5px);
  transform: translateY(-5px) translateX(5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-right,
.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-right,
.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-right {
  -webkit-transform: translateX(5px);
  -moz-transform: translateX(5px);
  -o-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-right,
.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-right,
.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-right {
  -webkit-transform: translateY(5px) translateX(5px);
  -moz-transform: translateY(5px) translateX(5px);
  -o-transform: translateY(5px) translateX(5px);
  -ms-transform: translateY(5px) translateX(5px);
  transform: translateY(5px) translateX(5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-center,
.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-center,
.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-center {
  -webkit-transform: translateY(5px);
  -moz-transform: translateY(5px);
  -o-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-left,
.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-left,
.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-left {
  -webkit-transform: translateY(5px) translateX(-5px);
  -moz-transform: translateY(5px) translateX(-5px);
  -o-transform: translateY(5px) translateX(-5px);
  -ms-transform: translateY(5px) translateX(-5px);
  transform: translateY(5px) translateX(-5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-left,
.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-left,
.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-left {
  -webkit-transform: translateX(-5px);
  -moz-transform: translateX(-5px);
  -o-transform: translateX(-5px);
  -ms-transform: translateX(-5px);
  transform: translateX(-5px);
}
.opentip-container.ot-fixed.ot-hidden.stem-top.stem-left,
.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-left,
.opentip-container.ot-fixed.ot-hiding.stem-top.stem-left {
  -webkit-transform: translateY(-5px) translateX(-5px);
  -moz-transform: translateY(-5px) translateX(-5px);
  -o-transform: translateY(-5px) translateX(-5px);
  -ms-transform: translateY(-5px) translateX(-5px);
  transform: translateY(-5px) translateX(-5px);
}
.opentip-container.ot-fixed .opentip {
  pointer-events: auto;
}
.opentip-container.ot-hidden {
  display: none;
}
.opentip-container .opentip {
  position: relative;
  font-size: 13px;
  line-height: 120%;
  padding: 9px 14px;
  color: #4f4b47;
  text-shadow: -1px -1px 0px rgba(255,255,255,0.2);
}
.opentip-container .opentip .header {
  margin: 0;
  padding: 0;
}
.opentip-container .opentip .ot-close {
  pointer-events: auto;
  display: block;
  position: absolute;
  top: -12px;
  left: 60px;
  color: rgba(0,0,0,0.5);
  background: rgba(0,0,0,0);
  text-decoration: none;
}
.opentip-container .opentip .ot-close span {
  display: none;
}
.opentip-container .opentip .ot-loading-indicator {
  display: none;
}
.opentip-container.ot-loading .ot-loading-indicator {
  width: 30px;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;
  display: block;
}
.opentip-container.ot-loading .ot-loading-indicator span {
  display: block;
  -webkit-animation: otloading 2s linear infinite;
  -moz-animation: otloading 2s linear infinite;
  -o-animation: otloading 2s linear infinite;
  -ms-animation: otloading 2s linear infinite;
  animation: otloading 2s linear infinite;
  text-align: center;
}
.opentip-container.style-dark .opentip,
.opentip-container.style-alert .opentip {
  color: #f8f8f8;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
}
.opentip-container.style-glass .opentip {
  padding: 15px 25px;
  color: #317cc5;
  text-shadow: 1px 1px 8px rgba(0,94,153,0.3);
}
.opentip-container.ot-hide-effect-fade {
  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
  opacity: 1;
  -ms-filter: none;
  filter: none;
}
.opentip-container.ot-hide-effect-fade.ot-hiding {
  opacity: 0;
  filter: alpha(opacity=0);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
.opentip-container.ot-show-effect-appear.ot-going-to-show,
.opentip-container.ot-show-effect-appear.ot-showing {
  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;
  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
}
.opentip-container.ot-show-effect-appear.ot-going-to-show {
  opacity: 0;
  filter: alpha(opacity=0);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
.opentip-container.ot-show-effect-appear.ot-showing {
  opacity: 1;
  -ms-filter: none;
  filter: none;
}
.opentip-container.ot-show-effect-appear.ot-visible {
  opacity: 1;
  -ms-filter: none;
  filter: none;
}
@-moz-keyframes otloading {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes otloading {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes otloading {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-ms-keyframes otloading {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes otloading {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`);

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

/*anotha padding fix*/
#quick_reply > table > tbody > tr > td > .CodeMirror {
  margin-top: 5px;
}

/*tooltip font*/
.opentip-container {
  font-family: Verdana,Arial,Helvetica,sans-serif;
}

/*makes my name be rainbow-y*/
.gensmall[href="/u2548"] > span > strong{
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
        org.display = '';
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
