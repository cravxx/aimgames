// ==UserScript==
// @name        Dragon City Show SessionID and Facebook ID
// @description Displays Session ID and Facebook ID for Dragon City
// @namespace   jojohansen@gmail.com
// @include     https://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @include     http://dc-canvas.socialpointgames.com/dragoncity/web/fb/*
// @version     1.5
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
  document.body.appendChild(card);
  
  var thecss = document.createElement('style');
  var thecsstext = document.createTextNode('.card{box-sizing:border-box;font-family:HelveticaNeue-CondensedBold,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;position:relative;height:150px;width:350px;margin:0 auto;background:#ECECEC;border-radius:4px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.4),0 0 10px rgba(0,0,0,.55),0 2px 10px rgba(0,0,0,.6)}.card:hover img{-webkit-filter:invert(100%);filter:invert(100%);border:5px solid rgba(0,0,0,.5);box-shadow:0 0 3px rgba(255,255,255,.25)}.card article{padding:30px}.card article img{border:5px solid #fff;box-shadow:0 0 3px rgba(0,0,0,.25);float:left;margin-right:30px;width:190px;height:250px;transition:all .3s ease-in-out}.card article h2{color:#515355;float:left;margin:0 5px 15px 0;font-weight:400;padding:0 0 8px;width:450px}.card article .area{position:relative;height:170px;width:470px;float:left}.card article .area h3{margin:0;color:#5F6163;font-size:20px}.card article .area ul{margin:5px 0 30px;padding:0;list-style:none}.card article .area ul li{margin:20px 0 0;font-size:16px;color:#94957F;text-shadow:0 0 1px rgba(0,0,0,.3)}.card article .area ul li .bar{position:relative;width:280px;height:15px;display:inline-block;border-radius:50px;float:right;margin:0 15px 0 0;opacity:.9;background-color:#CACACA;box-shadow:inset 0 2px 2px rgba(0,0,0,.35)}.card article .area ul li .bar:before{position:absolute;left:0;width:0;height:15px;background:#fed579;box-shadow:inset 0 4px 4px rgba(255,255,255,.3),inset 0 -2px 3px rgba(0,0,0,.05),0 1px 0 0 #D29D40;display:inline-block;border-radius:50px;content:\'\';z-index:-1}.card article .area ul li .bar.percent-100:before{width:280px}.card article .area ul li .bar.percent-90:before{width:260px}.card article .area ul li .bar.percent-80:before{width:240px}.card article .area ul li .bar.percent-70:before{width:220px}.card article .area ul li .bar.percent-60:before{width:200px}.card article .area ul li .bar.percent-50:before{width:180px}.card article .area ul li:before{content:\'\2605\';margin-right:5px}.card article .area::-webkit-scrollbar{width:10px}.card article .area::-webkit-scrollbar-track{background-color:rgba(217,217,217,.5);border-radius:50px}.card article .area::-webkit-scrollbar-thumb{background:rgba(184,184,184,.5);box-shadow:inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);border-radius:50px}');
  thecss.appendChild(thecsstext);
  document.head.appendChild(thecss);

}

make_popup(user_id, sess_id);
