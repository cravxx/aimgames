'use strict';var b=document.getElementsByClassName("forumline")[7].getElementsByClassName("row1")[2].getElementsByTagName("a"),d=[],e=["num 1","num 2","num 3","num 4"],f=!1;function g(){$.a(d,function(a,c){"Big Jilm"===c?f=!0:a==d.length-1&&!1===f&&(f=!1)});return f?"online!":"hidden or not online"}function h(){$.a(b,function(a,c){d[a]=c.text});console.log(d)}function k(){var a=g();e[0]=e[1];e[1]=e[2];e[2]=e[3];e[3]=a}
function l(){document.body.appendChild(document.createElement("div")).innerHTML="<table id='overlay'><tbody><tr><td><row1 id='header'></row1><row2 id='overcontent'><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><textb id='thebox'></textb></row2></td></tr></tbody></table>";document.getElementById("header").innerHTML="Alive";document.getElementById("overlay").style.cssText="position: fixed;top: 0;right: 0;background-color: #1D1D1D;border-radius: 5px;width: 400px;height: 100px;opacity: .9;";
document.getElementById("header").style.cssText="font-weight: bold;font-size: 11px;color: #FFF;position: relative;padding-left: 9px;bottom: 4px;";document.getElementById("overcontent").style.cssText="font-family: monospace;display: block;padding-left: 60px;position: relative;";var a=document.createElement("input");a.setAttribute("type",text);a.setAttribute("value",text);a.setAttribute("name",text);document.getElementById("thebox").appendChild(a)}var m=window;
m.addEventListener?m.addEventListener("load",l,!1):m.attachEvent&&m.attachEvent("onload",l);setInterval(function(){h();$.a(e,function(a,c){document.getElementById("overcontent").getElementsByClassName("alert")[a].innerHTML=c+"<br/>"});k()},1E3);
'use strict';var b=document.getElementsByClassName("forumline")[7].getElementsByClassName("row1")[2].getElementsByTagName("a"),d=[],e=["num 1","num 2","num 3","num 4"],f=!1;function g(){$.a(d,function(a,c){"Big Jilm"===c?f=!0:a==d.length-1&&!1===f&&(f=!1)});return f?"online!":"hidden or not online"}function h(){$.a(b,function(a,c){d[a]=c.text});console.log(d)}function k(){var a=g();e[0]=e[1];e[1]=e[2];e[2]=e[3];e[3]=a}
function l(){document.body.appendChild(document.createElement("div")).innerHTML="<table id='overlay'><tbody><tr><td><row1 id='header'></row1><row2 id='overcontent'><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><inner class='alert'></inner><textb id='thebox'></textb></row2></td></tr></tbody></table>";document.getElementById("header").innerHTML="Alive";document.getElementById("overlay").style.cssText="position: fixed;top: 0;right: 0;background-color: #1D1D1D;border-radius: 5px;width: 400px;height: 100px;opacity: .9;";
document.getElementById("header").style.cssText="font-weight: bold;font-size: 11px;color: #FFF;position: relative;padding-left: 9px;bottom: 4px;";document.getElementById("overcontent").style.cssText="font-family: monospace;display: block;padding-left: 60px;position: relative;";var a=document.createElement("input");a.setAttribute("type",text);a.setAttribute("value",text);a.setAttribute("name",text);document.getElementById("thebox").appendChild(a)}var m=window;
m.addEventListener?m.addEventListener("load",l,!1):m.attachEvent&&m.attachEvent("onload",l);setInterval(function(){h();$.a(e,function(a,c){document.getElementById("overcontent").getElementsByClassName("alert")[a].innerHTML=c+"<br/>"});k()},1E3);