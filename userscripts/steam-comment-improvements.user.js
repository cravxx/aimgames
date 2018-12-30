// ==UserScript==
// @name         Steam Comment Improvements
// @namespace    hansen-i-nate
// @version      0.2
// @description  advanced steam trash removal
// @author       You
// @include      https://steamcommunity.com/*
// ==/UserScript==

'use strict';
/* globals CCommentThread, g_rgCommentThreads */

function $cl(classes, root = document) {
  if (typeof classes === 'string') {
    return [...root.getElementsByClassName(classes)];
  }

  return classes.flatMap(e => root.getElementsByClassName(e));
}

function run() {
  for (const el of $cl('commentthread_comment')) {
    if (el.dataset.hansen) continue;
    el.dataset.hansen = 'true';
    el.style.minHeight = 0;
    try {
      const text = $cl('commentthread_comment_text', el)[0].textContent;
      if (/[░▄█▐▀▌]/.test(text)) {
        removeComment(el, text);
      }
    } catch (e) {
      console.error('Steam Comment Improvements', e);
      //debugger;
    }
  }
}

function removeComment(el, origcontent) {
  // remove all child elements
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }

  // add the 'Comment removed. Be proud!' text
  const asp = document.createElement('span');
  asp.setAttribute('data-hansen-originalContent', origcontent);
  asp.setAttribute('style', 'color: rgb(170, 170, 170);');
  asp.title = origcontent;
  const it = document.createElement('i');
  it.textContent = 'Comment removed. Be proud!';
  asp.appendChild(it);
  el.appendChild(asp);
}

const patched = {
  after() {
    run();
    return;
  }
};

fastPatch(CCommentThread.prototype, 'DoTransitionToNewPosts', patched);

for (const thread of Object.values(g_rgCommentThreads)) {
  fastPatch(thread, 'DoTransitionToNewPosts', patched);
}

run();

function fastPatch(obj, key, { before, instead, after }) {
  const existing = instead || obj[key];
  obj[key] = function(...args) {
    try {
      if (before) {
        const { stopExecuting, insteadResult, newArgs } = before.apply(this, args) || {};
        if (stopExecuting) return insteadResult;
        if (newArgs) args = newArgs;
      }
    } catch (e) {
      //debugger;
      console.error(`In ${obj}.${key}:before: ${e}`);
    }
    const retval = existing.apply(this, args);
    try {
      if (after) {
        const { useNewRetval, newRetval } = after.call(this, retval, ...args) || {};
        if (useNewRetval) return newRetval;
      }
    } catch (e) {
      //debugger;
      console.error(`In ${obj}.${key}:after: ${e}`);
    }
    return retval;
  };
}

// Steam Community link unremover (Displays real link after 'LINK REMOVED' text)
var a = document.getElementsByClassName('bb_removedlink');
for (var i = 0, len = a.length; i < len; i++) {
  a[i].firstChild.nodeValue += ' <' + a[i].nextSibling.firstChild.nodeValue + '>';
}
