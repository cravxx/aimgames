// ==UserScript==
// @name        Dragon City Show SessionID and Facebook ID
// @description Displays Session ID and Facebook ID for Dragon City
// @namespace   jojohansen@gmail.com
// @include     https://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @include     http://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @version     1.4
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

// this script runs in the frame, since the parent can't access it
// and no, no jQuery

var i = 0;
var vars_block = document.getElementsByClassName('vars')[i];
while (vars_block.textContent.indexOf('SocialPoint.get(') === -1) { //check if the vars block has valid content
  vars_block = document.getElementsByClassName('vars')[i];
  i++;
}

var vars_split = vars_block.textContent.substring(
  vars_block.textContent.indexOf('({') + '({'.length, //from the start
  vars_block.textContent.indexOf('});') //to the end
);

/**
 * Chop JSON... or anything that you don't have to worry about escaping or dupes, pretty much
 * 
 */
function chop(to_chop, key, after_key) {
  var after_chop = to_chop.substring(
    to_chop.indexOf(key) + key.length //find the key and remove it as well
  );
  after_chop = after_chop.substring(
    0, after_chop.indexOf(after_key) //find the end of the key
  );
  return after_chop;
}

// could properly parse json, but don't have to so fuck it
var user_id = chop(vars_split, '"userId":"', '","'); // dc userid
var sess_id = chop(vars_split, '"sessionId":', ',"'); // dc sessionid

alert('Your Facebook ID is: ' + user_id + '\nYour SessionID is: ' + sess_id);

console.log('Your Facebook ID is: ' + user_id + '\nYour SessionID is: ' + sess_id);
console.log('vars_split is: ' + vars_split);
console.log(vars_block);
