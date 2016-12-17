// ==UserScript==
// @name        Chatbox++ 2.0
// @description IT WORKS
// @namespace   GOD@HELP.ME
// @include     http://aimgames.forummotion.com/
// @version     beta.5
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// ==/UserScript==
'use strict';var a,b,c,d=0,e=0,f=$('<div class="box invisibox" style="position: fixed;left: 1%;top: 2%;"><div class="ribbon"><span>text will go here</span></div></div>'),g=f.find("span");function h(){if(void 0!==window.scrollY)return window.scrollY;if("undefined"!==typeof window.pageYOffset)return window.pageYOffset;var k=document.documentElement;return k.clientHeight?k.scrollTop:document.body.scrollTop}
function l(){console.log("is at cbox - "+(1400<h())+" new msgs - "+e);e=c.children().length-d;1400>=h()?0<e?(1===e?g.text("1 new msg"):g.text(e+" new msgs"),f.a("invisibox",!1)):f.a("invisibox",!0):(d=c.children().length,f.a("invisibox",!0))}
0<$("#frame_chatbox").length&&(0<$("#i_logo").length&&$("#i_logo").c("src","http://i.imgur.com/LjuijqL.png"),b=$("#frame_chatbox")[0].contentWindow.document,a=$(b),c=a.find("#chatbox"),$('<style type="text/css">\n@import url(\'http://fonts.googleapis.com/css?family=Noto+Sans:400,700\');\n.box {\n    width: 0px;\n    height: 0px;\n    position: relative;\n    border: 0px solid #BBB;\n    background: #EEE;\n    font-family: \'Noto Sans\', sans-serif\n}\n.box.invisibox {\n    display: none;\n}\n.ribbon {\n    width: 200px;\n    background: #e43;\n    position: absolute;\n    top: 0px;\n    left: -10px;\n    text-align: center;\n    line-height: 50px;\n    letter-spacing: 1px;\n    color: #ff0000;\n    font-size: 18px\n}\n.ribbon span {\n    width: 200px;\n    background: #e43;\n    position: absolute;\n    top: 25px;\n    left: -50px;\n    text-align: center;\n    line-height: 50px;\n    letter-spacing: 1px;\n    color: #f0f0f0;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    font-size: 18px\n}\n.ribbon span::before {\n    content: "";\n    position: absolute;\n    left: 0px;\n    top: 100%;\n    z-index: -1;\n    border-left: 3px solid #8F0808;\n    border-right: 3px solid transparent;\n    border-bottom: 3px solid transparent;\n    border-top: 3px solid #8F0808\n}\n.ribbon span::after {\n    content: "";\n    position: absolute;\n    right: 0px;\n    top: 100%;\n    z-index: -1;\n    border-left: 3px solid transparent;\n    border-right: 3px solid #8F0808;\n    border-bottom: 3px solid transparent;\n    border-top: 3px solid #8F0808\n}</style>').b("head"),$(document.body).append(f),
$(document).scroll(l));