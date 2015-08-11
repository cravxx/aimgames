// ==UserScript==
// @name        Charcount
// @description Uses Countable.js to display character count below post box
// @namespace   greasy_character
// @include     http://aimgames.forummotion.com/*
// @version     1.2.2
// @grant       none
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @icon        http://i62.tinypic.com/mkg51f.png
// ==/UserScript==
var cssLabel = "color: grey;font-size: 12px;";

var loc = "";
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
    loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];   
    refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
  }else{ //// QUICK REPLY
    loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1];  
    cssTd = "padding-top:5px;";
    var new_td = document.createElement("td");
    loc.appendChild(new_td).style.cssText = cssTd;
    refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName("td")[0];
  }    
  var element = document.createElement("label");
  refined_loc.appendChild(element).style.cssText = cssLabel;
  setInterval(function () {      
    var area = document.getElementsByTagName("textarea")[0];  ////this is preview window shit  
    if(typeof document.getElementsByTagName("textarea")[1] === 'object'){    ///if were not in preview window, we need to set some variables differently
      area.value = document.getElementsByTagName("textarea")[1].value;
    }  
    if(typeof area !== 'undefined'){    ////dont run this shit if it's undefined yo
      Countable.once(area, function (counter) {
        if(loc.getElementsByTagName("label")[0].innerHTML != values(counter)[4] + " characters"){
          loc.getElementsByTagName("label")[0].innerHTML = values(counter)[4] + " characters";
        }
        if(values(counter)[4] > 63500){ ////i dont really know the limit
          element.style.cssText += "color:red;";
        }else if(values(counter)[4] < 63500){
          element.style.cssText = cssLabel;
        }
      });  
    }
  }, 3000);
};
