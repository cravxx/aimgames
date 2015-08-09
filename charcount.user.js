// ==UserScript==
// @name        Charcount
// @namespace   kaff_is_one_grease
// @include     http://aimgames.forummotion.com/*
// @version     1.1
// @grant       none
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// ==/UserScript==
var cssLabel = "color: grey;font-size: 12px;";

var location = "";
var refined_loc = "";
var cssTd = "";

////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k]
  })
}
//////

//////INITIALIZE THIS
window.onload = function()   {
  if (typeof document.getElementsByTagName("textarea")[1] === 'undefined') { ////PREVIEW PAGE
    location = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];   
    refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
  }else{ //// QUICK REPLY
    location = document.getElementById("quick_reply").getElementsByClassName("row2")[1];  
    cssTd = "padding-top:5px;";
    var new_td = document.createElement("td");
    location.appendChild(new_td).style.cssText = cssTd;
    refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName("td")[0];
  }    
  var element = document.createElement("label");
  refined_loc.appendChild(element).style.cssText = cssLabel;
};

setInterval(function () {      
  var area = document.getElementsByTagName("textarea")[0];  ////this is preview window shit  
  if(!typeof document.getElementsByTagName("textarea")[1] === 'undefined'){    ///if were not in preview window, we need to set some variables differently
    document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[1].value;
    area = document.getElementsByTagName("textarea")[0];     
  }  
  
  if(typeof area !== 'undefined'){    ////dont run this shit if it's undefined yo
    Countable.once(area, function (counter) {
      location.getElementsByTagName("label")[0].innerHTML = values(counter)[4] + " characters";
      console.log(values(counter)[4]);
      if(values(counter)[4] > 32000){
        console.log("got here");
        element.style.cssText += "color:red;";
      }else if(values(counter)[4] < 32000){
        element.style.cssText = cssLabel;
      }
    });  
  }
}, 3000);
