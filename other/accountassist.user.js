// ==UserScript==
// @name        Account Assist
// @description bypass bullshit username checks
// @namespace   samsquanchhunter14@gmail.com
// @include     http://multiplayer.needformadness.com/registernew.pl
// @include     https://multiplayer.needformadness.com/registernew.pl
// @version     1.5
// @grant       none
// ==/UserScript==

//var random_num = Math.random(); /// generate random number
//var random_string = random_num.toString(); ///convert to string

//random_string = random_string.substr(3, random_string.length); /// substring it so it doesnt have a dot

function go() {
   // "load" page
    document.getElementById('main').style.visibility = "visible";
    document.getElementById('gamebybg').style.visibility = "visible";
    document.getElementById('gameby').style.visibility = "visible";
    document.getElementById('menubg').style.visibility = "visible";
    document.getElementById('menu').style.visibility = "visible";
    document.getElementById('cmbg').style.visibility = "visible";
    document.getElementById('cm').style.visibility = "visible";
    document.getElementById('rest').style.visibility = "visible";
    
    // fill
    document.getElementById("user").maxLength = 251; ///no point in going beyond because it will fail
    
    document.getElementById("pass").value = "entershift"; //// password
    document.getElementById("cpass").value = "entershift"; ///
    
    document.getElementById("fname").value = "snoop"; // name obv
    document.getElementById("lname").value = "dogg"; ///
    
    document.getElementById("email").value = "fuck" + Math.round(Math.random()*99999) + "@shit.com"; // email that doesnt need to be verified
    
    // remove special chars filter
    var p = document.createElement('script');
    p.innerHTML = "function checkform(){return true;}function checkformL(){return true;}function checkformE(){return true;}";
    document.head.appendChild(p);
    
    // random acc button
    var formPost = document.createElement('button');
    formPost.textContent = "Create random account";
    formPost.style = 'font-family: Verdana;font-style: italic;font-weight: bold;';
    formPost.onclick = function() {
    	var i = Math.round(Math.random()*99999);
    
    	document.getElementById('user').value = 'chrishansen' + i;
    	document.getElementById('pass').value = 'a';
    	document.getElementById('cpass').value = 'a';
    	document.getElementById('fname').value = 'a';
    	document.getElementById('lname').value = 'a';
    	document.getElementById('email').value = 'ac' + i + '@hansen.com';
    
    	document.getElementsByName('reg')[0].submit()
    }
    document.getElementsByName('reg')[0].appendChild(formPost);
}

// Dean Edwards/Matthias Miller/John Resig

function init() {
  // quit if this function has already been called
  if (arguments.callee.done) return;

  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;

  // kill the timer
  if (_timer) clearInterval(_timer);

  // do stuff
  go();
};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      init(); // call the onload handler
    }
  };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
  var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
      init(); // call the onload handler
    }
  }, 10);
}

/* for other browsers */
window.onload = init;
