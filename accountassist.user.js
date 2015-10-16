// ==UserScript==
// @name        Account Assist
// @namespace   samsquanchhunter14@gmail.com
// @include     http://multiplayer.needformadness.com/registernew.pl
// @version     1.1
// @grant       none
// ==/UserScript==

var random_num = Math.random(); /// generate random number
var random_string = random_num.toString(); ///convert to string

random_string = random_string.substr(3, random_string.length); /// substring it so it doesnt have a dot

document.getElementById("user").maxLength = 251; ///no point in going beyond because it will fail

document.getElementById("pass").value = "entershift"; //// password
document.getElementById("cpass").value = "entershift"; ///

document.getElementById("fname").value = "snoop"; // name obv
document.getElementById("lname").value = "dogg"; ///

document.getElementById("email").value = "fuck" + random_string + "@shit.com"; // email that doesnt need to be verified