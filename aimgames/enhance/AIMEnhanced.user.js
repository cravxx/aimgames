// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds partial markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/codemirror.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/css.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/xml.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/vbscript.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/javascript.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/htmlmixed.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/bbcode.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/bbcodemixed.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/opentip-native.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/editorbuttons.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/prism.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/usernamehistory.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/aimgames/enhance/resources/swearifyLite.js
// @require     https://raw.githubusercontent.com/less/less.js/3.x/dist/less.min.js
// @resource    codemirrorBaseCSS https://github.com/HulaSamsquanch/aimgames/raw/master/aimgames/enhance/codemirror-base.css
// @resource    codemirrorThemeCSS https://github.com/HulaSamsquanch/aimgames/raw/master/aimgames/enhance/codemirror-theme.css
// @resource    prismCSS https://github.com/HulaSamsquanch/aimgames/raw/master/aimgames/enhance/prism.css
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @include     http://aimgames.forummotion.com/f*
// @include     http://aimgames.forummotion.com/u*
// @include     http://aimgames.forummotion.com/
// @version     0.63
// @grant       GM_addStyle
// @grant       GM_log
// @grant       GM_info
// @grant       GM_getResourceText
// @grant       GM_setClipboard
// @grant       unsafeWindow
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @noframes
// ==/UserScript==

/*

Please add the following lines to your ad blocker's filter list

||illiweb.com/rsc/48/frm/SCEditor/src/instance-sceditor.js$important
||illiweb.com/rsc/48/frm/SCEditor/src/sceditor-commands.js$important
||illiweb.com/rsc/48/frm/SCEditor/src/sceditor-commands-bbcode.js$important
||illiweb.com/rsc/48/frm/SCEditor/src/sceditor-custom-bbcode.js$important
||illiweb.com/rsc/48/frm/SCEditor/src/jquery.sceditor.js$important
||illiweb.com/rsc/48/frm/SCEditor/src/plugins/bbcode.js$important
||aimgames.forummotion.com/13840.js$important

*/

// INFO: getResourceURL
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

//GM_log(Object.keys(this));
//GM_log(Object.keys(window));

//const buttons = _hansen.buttons;

// INFO: GM_addStyle polyfill.
//function GM_addStyle(css) {
//    const style = document.createElement('style');
//    style.type = 'text/css';
//    style.textContent = css;
//    document.head.appendChild(style);
//}

// NOTE: I can't make this remote
GM_addStyle(GM_getResourceText('codemirrorBaseCSS'));
GM_addStyle(GM_getResourceText('codemirrorThemeCSS'));
GM_addStyle(GM_getResourceText('prismCSS'));

/**
 * Compile Less CSS code and add it to the page using GM_addStyle
 */
function addLess(string) {
  less.render(string, function(e, output) {
    if (e) {
      alert('Error compiling Less: ' + e);
    } else {
      GM_addStyle(output.css);
    }
  });
}

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

addLess(`
/*less*/

@monofonts: Courier,"Courier New","Source Code Pro",monospace;

pre {
    max-height: 200px;
    overflow: auto;
    /**/
    color: #ff6913;
    font-family: @monofonts;
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
    font-family: @monofonts;
}

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
  -webkit-animation: hansencolorRotate 6s linear 0s infinite;
          animation: hansencolorRotate 6s linear 0s infinite;
}

/* function declaration here means it won't parse the nesting stuff */
.hansen-color-setup() {
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

@-webkit-keyframes hansencolorRotate {
  .hansen-color-setup;
}

@keyframes hansencolorRotate {
  .hansen-color-setup;
}

.hansen-post-options-button(@content) {
  display: initial;
  content: @content;
}

/*slight padding below post buttons for tidiness*/
.post-options {
  padding-bottom: 2.5px;

  > a {
    line-height: 18px;
  }
  /*hovering over post buttons*/
  > a:hover {
    background-color: #fbfbfb !important;
    
    background: -webkit-linear-gradient(top, rgb(201, 31, 31) 0%,rgb(140, 14, 14) 100%) !important;
    
    background: linear-gradient(to bottom, rgb(201, 31, 31) 0%,rgb(140, 14, 14) 100%) !important;
    -o-border-image: linear-gradient(to bottom, rgb(47, 47, 47) 0%,rgb(87, 87, 87) 100%) 1 !important;
       border-image: -webkit-linear-gradient(top, rgb(47, 47, 47) 0%,rgb(87, 87, 87) 100%) 1 !important;
       border-image: linear-gradient(to bottom, rgb(47, 47, 47) 0%,rgb(87, 87, 87) 100%) 1 !important;
  }
  /*remove default button imgs*/
  > a > img,
  /*remove broken multiquote button*/
  > img {
    display: none;
  }

  /*post buttons*/
  > a {
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
    background: -webkit-linear-gradient(top, rgb(163, 22, 22) 0%,rgb(105, 10, 10) 100%);
    background: linear-gradient(to bottom, rgb(163, 22, 22) 0%,rgb(105, 10, 10) 100%);
    -o-border-image: linear-gradient(to bottom, rgb(20, 20, 20) 0%,rgb(62, 62, 62) 100%) 1;
       border-image: -webkit-linear-gradient(top, rgb(20, 20, 20) 0%,rgb(62, 62, 62) 100%) 1;
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
  /*edit button text*/
  > a[href$="mode=editpost"]:after {
    .hansen-post-options-button('edit');
  }
  /*delete button text*/
  > a[href$="mode=delete"]:after {
    .hansen-post-options-button('x');
  }
  /*quote button text*/
  > a[href$="mode=quote"]:after {
    .hansen-post-options-button('quote');
  }
  /*show IP button text*/
  > a[href^="/modcp?mode=ip"]:after {
    .hansen-post-options-button('ip');
  }
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

  /*no underline*/
  &:hover {
    text-decoration: none !important;
  }
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
  &:hover {
    text-decoration: none !important;
  }
}
/*resize the imgs themselvers*/
.postbody > div > img {
  max-width: 100%;
}

/*remastered icons*/
.hansen-remastered-icon(@image, @offx: -40px, @offy: -40px) {
  background-image: url(@image);
  -o-object-position: @offx @offy;
     object-position: @offx @offy;
  background-size: cover;
}

img[src="https://illiweb.com/fa/extremedarkred/navfolder.gif"] {
	.hansen-remastered-icon('http://i.imgur.com/MCyr6Y1.png');
  margin-right: 2px;
}

img[src="https://illiweb.com/fa/extremedarkred/icon_minipost.gif"] {
  .hansen-remastered-icon('http://i.imgur.com/jat1H4q.png');
  vertical-align: 0px;
  margin-right: 0px;
}

img[src="http://i71.servimg.com/u/f71/14/03/33/42/locked12.gif"] {
  .hansen-remastered-icon('http://i.imgur.com/DXwHC1o.png'); /*also url('http://i.imgur.com/u3StReB.png');*/
  margin-right: 2px;
  vertical-align: -1px;
}

img[src="https://illiweb.com/fa/extremedarkred/icon_minipost_new.gif"] {
  .hansen-remastered-icon('http://i.imgur.com/JLJvZpG.png');
  vertical-align: 0px;
  margin-right: 0px;
}

img[title][src="http://i59.servimg.com/u/f59/14/03/33/42/catego12.png"] {
  .hansen-remastered-icon('http://i.imgur.com/DumidY4.png');
  vertical-align: 0px;
  margin-right: 0px;
}

img[src="http://i71.servimg.com/u/f71/14/03/33/42/folder10.png"] {
  .hansen-remastered-icon('http://i.imgur.com/HdY6NFK.png');
  margin-right: 2px;
  width: 16px;
  height: 15px;
  vertical-align: -3px;
}

/*category title spacing fix*/
.cattitle {
  padding-left: 2px;
}

/*post header size fix*/
.post > td:last-child > table > tbody > tr:first-child {
	height: 23px;
}
.inline-code {
  display: inline !important;
}

/*bbcode button gradient bg*/
button.button2, input.button2 {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,d3d3d3+7,efefef+100 */
  background: rgb(255,255,255) !important; /* Old browsers */ /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(211,211,211,1) 7%,rgba(239,239,239,1) 100%) !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(211,211,211,1) 7%,rgba(239,239,239,1) 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=0 ) !important; /* IE6-9 */

  &:hover {
    background: #f00 !important;
    background: -webkit-linear-gradient(top, #ffffff 0%, #f39595 7%, #fce4e4 100%) !important;
    background: linear-gradient(to bottom, #ffffff 0%, #f39595 7%, #fce4e4 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#fce4e4', GradientType=0) !important;
  }
}

/*
user status and contact buttons in pure css
*/

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

/*
td.row2.messaging.gensmall > table > tbody > tr > td.user-is-online::after(2) {
  content: "meta";
  display: block;
}*/

.i_icon_pm, .i_icon_online, [title="Send e-mail"], img[src="http://hitsk.in/t/15/83/39/i_icon_www.png"], td[valign="middle"] > a[href^="https://m.facebook.com/"], td[valign="middle"] > a[href^="https://mobile.twitter.com/"], img[src="http://hitsk.in/t/15/83/39/i_icon_skype.png"], img[src="https://illiweb.com/fa/subsilver/icon_fb.gif"], img[src="https://illiweb.com/fa/subsilver/icon_twitter.gif"], img[src="http://hitsk.in/t/15/83/39/i_icon_aim.png"], img[src="http://hitsk.in/t/15/83/39/i_icon_msnm.png"] {
  display: none;
}

.hansen-base-profile-button {
  color: #eee;
  content: "FIX ME";
  font-family: 'Open Sans', Arial, sans-serif;
  
  /*font-weight: bold;*/
  letter-spacing: 0px;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0,0,0,.01) 0 0 1px;
  
  background: -webkit-linear-gradient(top, rgb(85, 85, 85) 0%, rgb(39, 39, 39) 42%, rgb(11, 11, 11) 96%);
  background: linear-gradient(to bottom, rgb(85, 85, 85) 0%, rgb(39, 39, 39) 42%, rgb(11, 11, 11) 96%);
  
  display: inline;
  
  height: 25px !important;
  width: 70px !important;
  
  vertical-align: 0%;
  padding: 4.5px 8.5px 5px 8.5px;
  text-align: center;
  border: 1px solid #555555;
  /*line-height: 200%;*/
  border-radius: 4px;
  
  margin-right: 0;
  margin-left: 0;
}

td.row2.messaging.gensmall > table > tbody > tr > td.user-is-online:after {
  .hansen-base-profile-button;
  content: "ONLINE";
  padding: 4.5px 16px 5px 16px;
}

[title="Send private message"]:after {
  .hansen-base-profile-button;
  content: "PM";
  padding: 4.5px 9.5px 5px 9.5px;
}


[href^="/profile?mode=email&"]:after {
  .hansen-base-profile-button;
  content: "EMAIL";
}


[title="Visit poster's website"]:after {
  .hansen-base-profile-button;
  content: "WEBSITE";
}

a[href^="skype:"]:after {
  .hansen-base-profile-button;
  content: "SKYPE";
}


td > a[href^="https://www.facebook.com/"]:after {
  .hansen-base-profile-button;
  content: "FACEBOOK";
}

td > a[href^="https://twitter.com/"]:after {
  .hansen-base-profile-button;
  content: "TWITTER";
}

td > a[href^="http://edit.yahoo.com/"]:after {
  .hansen-base-profile-button;
  content: "YAHOO";
}

td > a[href^="aim:goim?screenname="]:after {
  .hansen-base-profile-button;
  content: "AIM";
}

td > a[href^="msnim:chat?contact="]:after {
  .hansen-base-profile-button;
  content: "MSN";
}

/*td > a[title="View user profile"]:after {
  .hansen-base-profile-button;
  content: "PROFILE";
}*/

td > a[href^="http://www.icq.com/people/"]:after {
  .hansen-base-profile-button;
  content: "ICQ";
}

td > a[href^="https://pinterest.com/"]:after {
  .hansen-base-profile-button;
  content: "PINTEREST";
}

.ajax-profil_edit {
  left: -10px !important;
}

.three-col > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) {
  /* merge the header rows in the profile */
  > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) {
    position: relative !important;

    > tr:last-child {
      position: absolute !important;
      bottom: 0 !important;
      /*height: 0;
      max-height: 0;
      min-height: 0;
      float: right;*/
      width: 100% !important;
      > td {
        float: right !important;
      }
    }
  }

  /* main page footer spacing fix */
  > table:nth-child(18) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) {
    width: 11.27px;
  }
}

/* pure CSS submit/preview buttons */
input[type="submit"] {
  background-color: #0e0e0e;
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 204, 204);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(204, 204, 204);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: white;
  display: inline-block;
  font-family: Verdana,sans-serif;
  font-size: 11px;
  /*height: 34px;*/
  outline-color: rgb(33, 33, 33);
  padding-bottom: 1px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 1px;
  perspective-origin: 38px 17px;
  text-decoration-color: white;
  text-emphasis-color: white;
  transform-origin: 38px 17px;
  /*vertical-align: middle;*/
  white-space: nowrap;
  /*width: 76px;*/
  -moz-column-gap: 14px;
  -moz-column-rule-color: white;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-color: white;
  transition: all 0.1s;
  border-color: #3b3b3b;

  &:hover {
    background-color: #777;
    border-bottom-color: rgb(173, 173, 173);
    border-left-color: rgb(173, 173, 173);
    border-right-color: rgb(173, 173, 173);
    border-top-color: rgb(173, 173, 173);
  }
}

/* pure-css separator icon */
img[src="https://illiweb.com/fa/wysiwyg/separator.png"] {
  vertical-align: middle;
  -o-object-position: -40px 20px;
  object-position: -40px 20px;
  background: #9c9c9c;
  height: 21px;
  padding: 0;
  margin: 0;
  -webkit-clip-path: polygon(60% 0, 60% 100%, 40% 100%, 40% 0);
          clip-path: polygon(60% 0, 60% 100%, 40% 100%, 40% 0);
}

/* 'remastered' header icon */

#i_icon_mini_index {
  display: none;
}
img[src="http://i71.servimg.com/u/f71/14/03/33/42/clock10.png"] {
  .hansen-remastered-icon('http://i.imgur.com/D5QPEOL.png');
}

/* remastered main icon */
#i_logo {
  .hansen-remastered-icon('http://i.imgur.com/qifhFyz.png', -9999px, -9999px);
}

/* fix nav links not changing color on hover */
a.nav:hover {
  color: #cf0000;
}

/*better table header font*/
th[nowrap="nowrap"] {
  font-family: Helvetica,Arial,sans-serif;
}
`);

// the codemirror editor
let editor;
function loadCodeMirror(org) {

  org.value = undoMarkdown(org.value);
  
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

function processMarkdown(txt) {
  txt = (window._hansen ? window._hansen.swearifyLite : swearifyLite)(txt);
  
  return txt.replace(/\[cd\]([^]+?)\[\/cd\]/g, '[code]$1[/code]') // code block
            .replace(/`([^]+?)`/g, '[code]Inline: $1[/code]') // inline code
            .replace(/\[gist\]([^]+?)\[\/gist\]/g, '[url]http://fallk.github.io/nfmm-addons/embed.html?loc=$1[/url]'); // embedded gists
}

function undoMarkdown(txt) {
  return txt.replace(/\[code]Inline: (.*?)\[\/code]/g, '`$1`')
            .replace(/\[(\/)?code]/g, '[$1cd]')
            .replace(/\[url]http:\/\/fallk\.github\.io\/nfmm-addons\/embed\.html?loc=(.*?)\[\/url]/g, '[gist]$1[/gist]');
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
  
  console.log(!!unsafeWindow.$.sceditor, !!unsafeWindow.editor, !!unsafeWindow.$, !!window.$, !!window.$.sceditor, !!window.editor);
  
  unsafeWindow.$.sceditor = exportFunction(() => {}, unsafeWindow.$);
  // load our new editor (replacing the existing one)
  
  const org = document.getElementById('text_editor_textarea');
  if (org) {
    //org.style.display = '';
    loadCodeMirror(org);
  } else console.log('org is ' + org);
  
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
  } catch(e) {
    mass='Username history: ' + e + '<br>';
  }

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
    const range = document.body.createTextRange();
    range.moveToElementText(container);
    range.select();
  } else if (window.getSelection) {
    const range = document.createRange();
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
  selectAll.addEventListener('click', () => { // jshint ignore:line
    selectText(content);
  });
  
  header.appendChild(selectAll);
  
  const copy = document.createElement('a');
  copy.appendChild(document.createTextNode(' Copy'));
  copy.setAttribute('class', 'genmed hansenAnc');
  copy.addEventListener('click', () => { // jshint ignore:line
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
      const code = codects[i];
      
      // dirty hack in case the dom is all fucked up
      if (!code) { // greasemonkey fucked us, lets wait and try again
        console.log('undef:' + i);
        setTimeout(syntaxHighlight, 200);//
        return;
      }
      
      if (code.childNodes[0].nodeValue.startsWith('Inline: ')) {
        // hey look, inline code! let's give it the attrs so the CSS knows what to do!
        code.setAttribute('class', 'cont_code inline-code');
        code.parentNode.setAttribute('class', 'code inline-code');
        code.parentNode.parentNode.setAttribute('class', 'codebox inline-code');
        code.parentNode.parentNode.firstChild.setAttribute('class', 'invisible');
        code.childNodes[0].nodeValue = code.childNodes[0].nodeValue.substring(8); // 'Inline: '.length
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
      
      code.innerHTML = Prism.highlight(cleanHTML(code.innerHTML), Prism.languages.java);//no way around this parsing/innerhtml
      
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
  if (images[i].clientWidth > 0 && images[i].naturalWidth !== images[i].clientWidth && images[i].naturalWidth > 1321) { // if clientwidth==0 then img is not visible
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

// selector to help out the CSS
const onlineUsers = document.getElementsByClassName('i_icon_online');
for (let i = 0, len = onlineUsers.length; i < len; i++) {
  onlineUsers[i].parentElement.setAttribute('class', 'user-is-online');
}

// root forum stuff
if (document.location.pathname == '/') {
  // add nbsp to birthdays
  const sel = document.querySelector('table.forumline:nth-child(13) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > span:nth-child(1)');
  const nbsp = '\u00a0';
  for (let i = 0, len = sel.childNodes.length; i < len; i++) {
    const n = sel.childNodes[i];
    if (n.nodeType == 3 && n.nodeValue[0] == ' ') {
      //console.log(n);
      n.nodeValue = nbsp + n.nodeValue.substring(1);
    }
  }

  // replace ' : ' with ': '
  const nodes = document.querySelectorAll('table.forumline:nth-child(13) > tbody > tr > td > .gensmall');
  for (let i = 0, len = nodes.length; i < len; i++) {
    for (let j = 0, alen = nodes[i].childNodes.length; j < alen; j++) {
      const n = nodes[i].childNodes[j];
      if (n.nodeType == 3 && n.nodeValue.indexOf(' : ') > -1) {
        n.nodeValue = n.nodeValue.replace(/ +: +/, ': ');
      }
    }
  }

  // trim large post numbers with 'k'
  const numbers = document.querySelectorAll('.row2 > .gensmall'); //('table.forumline > tbody:nth-child(1) > tr > td:nth-child(4) > span:nth-child(1)');
  for (let i = 0, len = numbers.length; i < len; i++) {
    const n = numbers[i].childNodes[0];
    const bn = n.nodeValue;
    if (bn.length >= 4) {
      n.nodeValue = bn.substring(0, bn.length - 3) + 'k';
    }
  }
}
