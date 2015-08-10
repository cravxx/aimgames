// ==UserScript==
// @name        SCREAM
// @description IT BEGINS
// @namespace   dicks@penis.fuck
// @include     http://aimgames.forummotion.com/*                     
// @version     0.0.0
// @grant       none
// @updateURL   https://github.com/HulaSamsquanch/aimgames/raw/master/scream.user.js      
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

//allahu akbar
function getPageContents(callback,url,params) {
    http=new XMLHttpRequest();
    if(params!=null) {
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    } else {
        http.open("GET", url, true);
    }
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        }
    }
    http.send(params);
}
function callback(response) {
    mymassivepenis = response.getElementById("") // WHAT DO I DO NOW
}
getPageContents(callback,'http://aimgames.forummotion.com/profile?mode=editprofile')
