// ==UserScript==
// @name            Swearify - Image Reuploader
// @namespace       samsquanchhunter
// @description     Special utility to quickly prepare images for insertion into Swearify.
// @version         1.1
// ==/UserScript==

///portions from https://github.com/pinceladasdaweb/imgur-upload and LouCypher

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

var menu = body.appendChild(document.createElement("menu"));
menu.outerHTML = '<menu id="userscript-search-by-image" type="context">\
                    <menuitem label="Resize and Upload"\
                              icon="data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlz\
AAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAEl\
SURBVDiNY/z//z8DJYCRkIKsthv/kRX9Z2BgmFalARdiIcaGKZXqcH5O+01U+ay2G3MYGBiSiXUm\
mofnsBDSjEUTMkiBe2Eq1JnZ7TcZBHhZGNythBl0lLkZODmYGX7++sdw/sZnhl3H3zF8+voHwwsY\
FkR5ijNICLMzTF31hOHnr38MHGxMDJlhMgwv3vxkWL7jJYpaJmzu0lTigWtmYGBg+PHrH8P0VU8Y\
tJV5MNRiNYCfmxmuGQZ+/PrHwMmOqRyrAX///WfgYEOV4mBjwjAUpwHHL31iyA6XgRvCwcbEkBUm\
w3DuxmcMtVgDkYONicHLVoTBSJOXgYONieHHz38Ml+98Ydh88DXDtx//CBtACmBiYGCYS4H+OYyU\
5kasgUgKAADN8WLFzlj9rgAAAABJRU5ErkJggg=="></menuitem>\
                  </menu>';

document.querySelector("#userscript-search-by-image menuitem")
  .addEventListener("click", uploadImage, false);

function initMenu(aEvent) {
  // Executed when user right click on web page body
  // aEvent.target is the element you right click on
  var node = aEvent.target;
  var item = document.querySelector("#userscript-search-by-image menuitem");
  if (node.localName == "img") {
    body.setAttribute("contextmenu", "userscript-search-by-image");
    item.setAttribute("imageURL", node.src);
  } else {
    body.removeAttribute("contextmenu");
    item.removeAttribute("imageURL");
  }
}

///http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(directlink) {
  window.prompt("Direct Link", directlink);
}

function fileTypeLength(file){
  return file.length - file.lastIndexOf(".");
}

function uploadImage(aEvent) {
  // Executed when user click on menuitem
  // aEvent.target is the <menuitem> element

  var imageURL = aEvent.target.getAttribute("imageURL");

  var xhttp = new XMLHttpRequest();
  var status = document.querySelector('.status');
  var formdata = new FormData();

  formdata.append('image', imageURL);
  xhttp.open('POST', 'https://api.imgur.com/3/image');
  xhttp.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b'); //Get yout Client ID here: http://api.imgur.com/
  xhttp.onreadystatechange = function() {
    if (xhttp.status === 200 && xhttp.readyState === 4) {
      var response = JSON.parse(xhttp.responseText);
      var response_deeper = response.data.link;
      var dirty_resize = response_deeper.slice(0, response_deeper.length - fileTypeLength(response_deeper)) + "s" + response_deeper.slice(response_deeper.length - fileTypeLength(response_deeper));
      copyToClipboard(dirty_resize);
    }
  };
  xhttp.send(formdata);
}
