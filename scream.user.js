// ==UserScript==
// @name SCREAM
// @description IT BEGINS
// @namespace dicks@penis.fuck
// @include http://aimgames.forummotion.com/*
// @version 0.0.1
// @grant none
// @updateURL https://github.com/HulaSamsquanch/aimgames/raw/master/scream.user.js
// @license MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
//allahu akbar

function callback(response) {
  document.body.appendChild(document.createElement('div')).innerHTML = "<div id='secret' style='display:none;'></div>";  
  var placeholder = document.createElement('div');  
  placeholder.innerHTML = response;
  while (placeholder.children.length > 0) {
    document.getElementById("secret").appendChild(placeholder.children[0]);
  }  
  
  var mymassivepenis = document.getElementById("emptyidcc").getElementsByTagName("tr")[6].getElementsByTagName("td")[1].innerHTML;  
  console.log(mymassivepenis);
}

function getPageContents(callback, url, params) {
  http = new XMLHttpRequest();
  if (params != null) {
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  } else {
    http.open('GET', url, true);
  }
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.responseText);
      //console.log(http.responseText)
    }
  }
  http.send(params);
}

window.onload = function() {
  getPageContents(callback, 'http://aimgames.forummotion.com/profile?mode=editprofile');
};
