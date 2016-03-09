// ==UserScript==
// @name        Dragon City Show SessionID and Facebook ID
// @description Displays Session ID and Facebook ID for Dragon City
// @namespace   jojohansen@gmail.com
// @include     https://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @include     http://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @version     1.8
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

//alert('Your Facebook ID is: ' + user_id + '\nYour SessionID is: ' + sess_id);

console.log('Your Facebook ID is: ' + user_id + '\nYour SessionID is: ' + sess_id);
console.log('vars_split is: ' + vars_split);
console.log(vars_block);


/**
 * Makes a nifty popup
 * 
 * CSS taken from http://www.bypeople.com/css-company-id-card/
 * 
 */
function make_popup(content_a, content_b) {
    /*<body></body>
  <div class='card'>
    <article>
      <div class='area'>
        <p><span style="color:blue">Facebook ID: </span>content A</p>
        <p><span style="color:red">Session ID: </span>content B</p>
      </div>
    </article>
  </div>*/
  
  // css
  var thecss = document.createElement("link");
  thecss.href = "https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/other/dragon-city.css";
  thecss.type = "text/css";
  thecss.rel = "stylesheet";
  document.head.appendChild(thecss);
  
  // the card
  
  var card = document.createElement('div');
  card.className = 'card';
  
  var article = document.createElement('article');
  
  var area = document.createElement('div');
  area.className = 'area';
  //
  var p1 = document.createElement('p');
  var text1 = document.createTextNode(content_a);
  
  var span1 = document.createElement('span');
  span1.style = 'color:blue';
  var spantext1 = document.createTextNode('Facebook ID: ');
  span1.appendChild(spantext1);
  
  p1.appendChild(span1);
  p1.appendChild(text1);
  
  //
  
  var p2 = document.createElement('p');
  var text2 = document.createTextNode(content_b);
  
  var span2 = document.createElement('span');
  span2.style = 'color:red';
  var spantext2 = document.createTextNode('Session ID: ');
  span2.appendChild(spantext2);
  
  p2.appendChild(span2);
  p2.appendChild(text2);
  
  area.appendChild(p1);
  area.appendChild(p2);
  article.appendChild(area);
  card.appendChild(article);
  
  //document.body.insertBefore(card, document.body.firstChild);
  
  document.getElementsByClassName('top-bar')[0].insertBefore(card, document.getElementsByClassName('top-bar')[0].firstChild);
  
}

make_popup(user_id, sess_id);
