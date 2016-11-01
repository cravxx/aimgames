// ==UserScript==
// @name        AIM Enhanced
// @description Improves posting on AIM. Adds markdown support and other fun stuff.
// @namespace   notareal@em.ail
// @include     http://aimgames.forummotion.com/post
// @include     http://aimgames.forummotion.com/post*
// @version     0.1
// @grant       GM_addStyle
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

'use strict';

// custom code styles
const style = `<style type="text/css">
pre {
    max-height: 200px;
    overflow: auto;
	/**/
    color: #ff6913;
    font-family: Courier,"Courier New","Source Code Pro",sans-serif;
    font-size: 11px;
	/* box */
    background-color: #000;
    border: solid 1px #1c1c1c;
    margin: 0;
	/* possibly? */
	margin-left: 60px;
}
</style>`;

const styleMin = style.replace(/^\s+/gm, '').replace(/(\r\n|\n)/g, '');

// add style to the beginning of every post
const textArea = document.getElementById('text_editor_textarea');
if (textArea) {
  textArea.value = styleMin + '\n' + textArea.value;
}
