// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds partial markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @include     http://aimgames.forummotion.com/t*
// @version     0.10
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

'use strict';

// GM_addStyle polyfill. Since @grant none allows us to directly interact with `window`,
// let's avoid using the greasemonkey crap unless necessary
function GM_addStyle(css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    document.head.appendChild(style);
}

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
