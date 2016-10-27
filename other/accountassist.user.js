// ==UserScript==
// @name        Account Assist
// @description bypass bullshit username checks
// @namespace   samsquanchhunter14@gmail.com
// @include     http://multiplayer.needformadness.com/registernew.pl
// @include     https://multiplayer.needformadness.com/registernew.pl
// @include     http://multiplayer.needformadness.com/edit.pl
// @include     https://multiplayer.needformadness.com/edit.pl
// @version     1.52
// @grant       none
// ==/UserScript==

///do it out here because ima shit
var p = document.createElement('script');
p.innerHTML = 'function checkform(){return true;}function checkformL(){return true;}function checkformE(){var er = 0; return true;}function checkformN(){return true;}';
document.head.appendChild(p);

// "load" page
document.getElementById('main').style.visibility = 'visible';
document.getElementById('gamebybg').style.visibility = 'visible';
document.getElementById('gameby').style.visibility = 'visible';
document.getElementById('menubg').style.visibility = 'visible';
document.getElementById('menu').style.visibility = 'visible';
document.getElementById('cmbg').style.visibility = 'visible';
document.getElementById('cm').style.visibility = 'visible';
document.getElementById('rest').style.visibility = 'visible';

// fill
document.getElementById('user').maxLength = 251; ///no point in going beyond because it will fail

document.getElementById('pass').value = 'entershift'; //// password
document.getElementById('cpass').value = 'entershift'; ///

document.getElementById('fname').value = 'snoop'; // name obv
document.getElementById('lname').value = 'dogg'; ///

document.getElementById('email').value = 'fuck' + Math.round(Math.random() * 99999) + '@shit.com'; // email that doesnt need to be verified

// random acc button
var formPost = document.createElement('button');
formPost.textContent = 'Create random account';
formPost.style = 'font-family: Verdana;font-style: italic;font-weight: bold;';
formPost.onclick = function() {
    var i = Math.round(Math.random() * 99999);

    document.getElementById('user').value = 'chrishansen' + i;
    document.getElementById('pass').value = 'a';
    document.getElementById('cpass').value = 'a';
    document.getElementById('fname').value = 'a';
    document.getElementById('lname').value = 'a';
    document.getElementById('email').value = 'ac' + i + '@hansen.com';

    document.getElementsByName('reg')[0].submit();
};
document.getElementsByName('reg')[0].appendChild(formPost);