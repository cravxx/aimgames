// ==UserScript==
// @name        Rate Bot
// @description Rating bot for BestEverAlbums.com
// @namespace   kaffeinition@gmail.com
// @include     http://www.besteveralbums.com/*
// @version     1.3
// @grant       none
// @icon        http://i.imgur.com/0ns9tKG.png
// ==/UserScript==
var cssLabel="font-size: 9px;",album_page=!1,artist_page=!1,track_page=!1,chart_page=!1,track_num=0,album_num=0,rating=-1;function resetLabel(){document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("label")[0].innerHTML="rate everything";document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("label")[0].style.cssText=cssLabel}var page_id=window.location.href,page_id=page_id.substr(page_id.lastIndexOf("?")+1,1);"a"===page_id?(album_page=!0,track_num=document.getElementsByClassName("tracks")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr").length):"b"===page_id?(artist_page=!0,track_num=document.getElementsByClassName("tracks")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr").length,album_num=document.getElementsByClassName("chart")[0].getElementsByClassName("user").length):"c"===page_id?(chart_page=!0,album_num=document.getElementsByClassName("chart")[0].getElementsByClassName("user").length):"t"===page_id&&(track_page=!0);var first_pass=document.getElementsByClassName("objectinteractionpanel")[0],second_pass=first_pass.children,third_pass=second_pass[0].children,new_td=document.createElement("td"),button_label=document.createElement("label"),button=document.createElement("input"),rate=document.createElement("input");button.setAttribute("type","button");button.setAttribute("value","Rate-Bot");rate.setAttribute("id","rate-amount");rate.setAttribute("type","text");rate.setAttribute("value","100");rate.setAttribute("maxlength","3");rate.addEventListener("focus",function(){resetLabel()},!0);button_label.innerHTML="rate everything";third_pass[0].appendChild(new_td);var where=third_pass[0].getElementsByTagName("td")[0];where.appendChild(button_label).style.cssText=cssLabel;where.appendChild(rate).style.cssText="width:20px;font-size:10px;";where.appendChild(button).addEventListener("click",function(){rating=document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("input")[0].value;100>=rating?(album_page&&album_page_rate(track_num),artist_page&&artist_page_rate(track_num,album_num),chart_page&&chart_page_rate(album_num),track_page&&track_page_rate()):(button_label.innerHTML="must be <= 100",button_label.style.cssText+="color:red;")});function album_page_rate(a){rate_album();rate_tracks(a)}function artist_page_rate(a,b){rate_albums(b);rate_tracks(a);rate_band()}function chart_page_rate(a){rate_albums(a);rate_chart()}function track_page_rate(){rate_track()}function rate_tracks(a){for(var b=0;b<a;b++){var c=document.getElementsByClassName("tracks")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[b].getElementsByClassName("user")[0].getAttribute("id"),c=c.split("_")[2],d=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+c+"&o=track&r="+d,!0);request.onreadystatechange=updatePage;request.send(null)}}function rate_track(){var a=document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute("id"),a=a.split("_")[2],b=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+a+"&o=track&r="+b,!0);request.onreadystatechange=updatePage;request.send(null)}function rate_albums(a){for(var b=0;b<a;b++){var c=document.getElementsByClassName("chart")[0].getElementsByClassName("user")[b].getAttribute("id"),c=c.split("_")[2],d=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+c+"&o=album&r="+d,!0);request.onreadystatechange=updatePage;request.send(null)}}function rate_album(){var a=document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute("id"),a=a.split("_")[2],b=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+a+"&o=album&r="+b,!0);request.onreadystatechange=updatePage;request.send(null)}function rate_chart(){var a=document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute("id"),a=a.split("_")[2],b=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+a+"&o=chart&r="+b,!0);request.onreadystatechange=updatePage;request.send(null)}function rate_band(){var a=document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute("id"),a=a.split("_")[2],b=rating.toString();createRequest();request.open("GET","AJAXRate.php?oid="+a+"&o=band&r="+b,!0);request.onreadystatechange=updatePage;request.send(null)};