// ==UserScript==
// @name        Rate Bot
// @description Rating bot for BestEverAlbums.com
// @namespace   kaffeinition@gmail.com
// @include     http://www.besteveralbums.com/*
// @version     1.3
// @grant       none
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEC0lEQVRYw+3XW4iVVRQH8J8HZ9RUcryUN0xQMAgq0gpLghEfspSQMh8Us4sRQogX6CErFcQQL1GiGSpBCWVampZBmUWUSmlJmogWmqR4F9TRcY5n9/Cto9/oQdSkenC/zKz9rb322mv913+tw411dasLluLOkEdgJdqhJT7CmPjWF/0xEXNjr13ojwj52cJVOlCH7bgt5P54Hk/hSUzC7WiGQdiCJXg89J8L/f4h39s095KheAZn8C7WYV68pAXuQXf8jtbxkiKOoxY9MRCbw2YNjsT/5Yd2CP3dIW8vXMNLEgaEfs+Qb8UyPIGbw7FUIYKnY79FyK3KH16Ly6Yu4etESqQSdavYOpkmu2l2ilIi7aS+Dc0LrK/jbFk/kRo4t4TeC/kmv3+O0hgG4x3MjnvL2DAd1Xi5wMREGs7MUzycSHV0hsc4fpqNJzm9j35tmV2ivifT4szCIr+9zsgCfRJpLQ/t45UGdoWdtqiKe6vLKWge3nxV4lPYS9cdtCxSWpflbcIQSsv4+TCrf2D+qSy3H+7Kwq4HqwqsHsu6Ej9Fbr/txNQSg25iH46iIe49W45AVXhGlqTzodvC21F/HRo4mAv1/ruztEF1ItVnuJG3c5a7SnxWYvre7KGXr+1qRibSdwxoYMMOjrVhbJH+x9jelYGdmXSGYpHaatp3Yk041beK0fi4PTWx1/swrcLBXpUcqMEUGUAsYHMibWNbP8af4a8f+aPI3kTawagDvBUg/XMy7+UjtoCN6LacFfn9EsUzWRlXXOPKDuQrApMjNaNib17uzIH4OzO+vRry2CivKVfCbE0vpMu5HCAT6oOUmlxjbdddiQOFYLfaYMFGFYFVmBGkVIOTcWYCDmMYPgn9MiA7YQ7WXCm/V6F90OQlFREXN8V96B17d2BF0DS8EM62C/2VV9mUrno1Ai4WBx2Px9MytL8ZUZkWF3bC/tB/KfQXF67RgWPRVMprT8htolMeqtCU9ldqSk3/wWxwXYBbMQIN9CnxZelCOz2/SuyZyP0XA/cQR4bySx6466jdyqNh53LAbcyIJ7llFm+kzMtG004ivchwDAnOmIuqROrD2gBWDUZ34fv3mRR22oat1nFfvildCqy+LI+DjYCVSLVZf2gErET6gAcDkGQ63QYzJVVOQ6NJ5RJgRedyMbDOceRoFpFGwDrB6V4czE87OHoqK3FX4sB5YC2l0DoYrV22d6IMrCKzBtHxYkPLWd+DB/KM2JFChwDqwczpy67uQQ7LSszJN5Ivsg63CPPr2bSJnTlG3IZhx9m6IXv9+WlnGb/m7RR55Hoz4uWAVR1nbvw4+f/2gUpV8K/2gfxA8p/0gWt1oDzA9MPnuQFmUURnRozb+QFmXIU+cBL+BqwwuY0/o2EGAAAAAElFTkSuQmCC
// ==/UserScript==

var cssLabel = "font-size: 9px;";

var album_page = false;
var artist_page = false;
var track_page = false;
var chart_page = false;

var track_num = 0;
var album_num = 0;

var rating = -1;

///////ETC
function resetLabel(){
  document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("label")[0].innerHTML = "rate everything";
  document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("label")[0].style.cssText = cssLabel;
}

/*function isNumber(event) {///http://stackoverflow.com/questions/20682707/how-to-allow-numbers-backspace-delete-left-and-right-arrow-keys-in-the-html-t
  var key = window.event ? event.keyCode : event.which;

  if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
      return true;
  }
  else if ( key < 48 || key > 57 ) {
      return false;
  }
  else return true;
};*/
///////

window.addEventListener('load', function() {
  var page_id = window.location.href;
  page_id = page_id.substr((page_id.lastIndexOf("?") + 1), 1);
  if(page_id === "a"){
    album_page = true;
    track_num = document.getElementsByClassName('tracks') [0].getElementsByTagName('tbody') [0].getElementsByTagName('tr') .length;
  }else if(page_id === "b"){
    artist_page = true;
    track_num = document.getElementsByClassName('tracks') [0].getElementsByTagName('tbody') [0].getElementsByTagName('tr') .length;
    album_num = document.getElementsByClassName("chart")[0].getElementsByClassName("user").length;
  }else if(page_id === "c"){
    chart_page = true;
    album_num = document.getElementsByClassName("chart")[0].getElementsByClassName("user").length;
  }else if(page_id === "t"){
    track_page = true;
  }
  //console.log("this far");

  var first_pass = document.getElementsByClassName("objectinteractionpanel")[0];
  var second_pass = first_pass.children;
  var third_pass = second_pass[0].children;

  var new_td = document.createElement("td");
  var button_label = document.createElement("label");
  var button = document.createElement("input");
  var rate = document.createElement('input');
  button.setAttribute("type", "button");
  button.setAttribute("value", "Rate-Bot");
  rate.setAttribute("id", "rate-amount");
  rate.setAttribute("type", "text");
  rate.setAttribute("value", "100");
  rate.setAttribute("maxlength", "3");
  //rate.setAttribute("onkeypress", "return isNumber(event);");
  //rate.addEventListener("keypress", function(){return isNumber(event);});
  rate.addEventListener("focus", function(){resetLabel();}, true);

  button_label.innerHTML = "rate everything";
  third_pass[0].appendChild(new_td);
  var where = third_pass[0].getElementsByTagName("td")[0];

  where.appendChild(button_label).style.cssText = cssLabel;
  where.appendChild(rate).style.cssText = "width:20px;font-size:10px;";
  where.appendChild(button).addEventListener("click", function(){
    rating = document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("input")[0].value;
    if(rating <= 100){
      if(album_page)
      {
        album_page_rate(track_num);
        //console.log("album page rate");
      }
    if(artist_page)
      {
        artist_page_rate(track_num, album_num);
        //console.log("artist page rate");
      }
    if(chart_page)
      {
        chart_page_rate(album_num);
        //console.log("chart page rate");
      }
    if(track_page)
      {
        track_page_rate();
        //console.log("track page rate");
      }
    }else{
      button_label.innerHTML = "must be <= 100";
      button_label.style.cssText += "color:red;";
    }
  });
}, false);

///////RUNNING SHIT
function album_page_rate(track_num){
  rate_album();
  rate_tracks(track_num);
}

function artist_page_rate(track_num, album_num){
  rate_albums(album_num);
  rate_tracks(track_num);
  rate_band();
}

function chart_page_rate(album_num){
  rate_albums(album_num);
  rate_chart();
}

function track_page_rate(){
  rate_track();
}
////////

////////TRACK
function rate_tracks(track_num){
  for (var i = 0; i < track_num; i++) {
    var track_id = document.getElementsByClassName('tracks') [0].getElementsByTagName('tbody') [0].getElementsByTagName('tr') [i].getElementsByClassName('user') [0].getAttribute('id');
    var real_id = track_id.split('_');
    track_id = real_id[2];
    var objecttype = 'track';
    var rate = rating.toString();
    createRequest();
    var url = 'AJAXRate.php?oid=' + track_id + '&o=' + objecttype + '&r=' + rate;
    request.open('GET', url, true);
    request.onreadystatechange = updatePage;
    request.send(null);
  }
}

function rate_track(){
  var track_id = document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute('id');
  var real_id = track_id.split('_');
  track_id = real_id[2];
  var objecttype = 'track';
  var rate = rating.toString();
  createRequest();
  var url = 'AJAXRate.php?oid=' + track_id + '&o=' + objecttype + '&r=' + rate;
  request.open('GET', url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
}
///////

///////ALBUM
function rate_albums(album_num){
  for (var i = 0; i < album_num; i++) {
    var album_id = document.getElementsByClassName("chart")[0].getElementsByClassName("user")[i].getAttribute('id');
    var real_id = album_id.split('_');
    album_id = real_id[2];
    var objecttype = 'album';
    var rate = rating.toString();
    createRequest();
    var url = 'AJAXRate.php?oid=' + album_id + '&o=' + objecttype + '&r=' + rate;
    request.open('GET', url, true);
    request.onreadystatechange = updatePage;
    request.send(null);
  }
}

function rate_album(){
  var album_id = document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute('id');
  var real_id = album_id.split('_');
  album_id = real_id[2];
  var objecttype = 'album';
  var rate = rating.toString();
  createRequest();
  var url = 'AJAXRate.php?oid=' + album_id + '&o=' + objecttype + '&r=' + rate;
  request.open('GET', url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
}
///////

///////CHART
function rate_chart(){
  var chart_id = document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute('id');
  var real_id = chart_id.split('_');
  chart_id = real_id[2];
  var objecttype = 'chart';
  var rate = rating.toString();
  createRequest();
  var url = 'AJAXRate.php?oid=' + chart_id + '&o=' + objecttype + '&r=' + rate;
  request.open('GET', url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
}
///////

///////BAND
function rate_band(){
  var band_id = document.getElementsByClassName("objectinteractionpanel")[0].getElementsByTagName("ul")[0].getAttribute('id');
  var real_id = band_id.split('_');
  band_id = real_id[2];
  var objecttype = 'band';
  var rate = rating.toString();
  createRequest();
  var url = 'AJAXRate.php?oid=' + band_id + '&o=' + objecttype + '&r=' + rate;
  request.open('GET', url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
}
///////
