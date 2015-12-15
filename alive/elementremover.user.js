// ==UserScript==
// @name        Element Remover
// @namespace   samsquanchhunter
// @version     0.5.1
// @include     http://*
// @include     https://*
// @grant       none
// ==/UserScript==

///portions from https://github.com/pinceladasdaweb/imgur-upload and LouCypher

var child_node;

(function() {
  var body = document.body;
  body.addEventListener("contextmenu", initMenu, false);
  var menu; //define it, then apply what we need it to be below
  if (document.getElementsByTagName("menu").length === 0) {
    menu = document.createElement("menu");
    menu.id = "userscript-grease";
    menu.type = "context";
  } else {
    menu = document.getElementsByTagName("menu")[0];
  }
  var menuitem = document.createElement("menuitem");
  menuitem.id = "menu_elemr";
  menuitem.label = "Remove Element";
  menuitem.icon = "http://i.imgur.com/IeWWYDw.png";
  menu.appendChild(menuitem);
  var menuitem_reset = document.createElement("menuitem");
  menuitem_reset.id = "menu_elemr_reset";
  menuitem_reset.label = "Reset Element Remover";
  menuitem_reset.icon = "http://i.imgur.com/BN4vTKK.png";
  menu.appendChild(menuitem_reset);
  body.appendChild(menu);

  document.querySelector("#userscript-grease #menu_elemr")
    .addEventListener("click", bagItAndTagIt, false);

  document.querySelector("#userscript-grease #menu_elemr_reset")
    .addEventListener("click", spillTheHumanBeans, false);

  ///// http://stackoverflow.com/questions/9496427/get-elements-by-attribute-when-queryselectorall-is-not-available-without-using-l
  function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
      if (allElements[i].getAttribute(attribute) !== null) {
        // Element exists with attribute. Add to array.
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }

  function hideThisShit(elem) {
    elem.style.visibility = 'hidden';
    elem.style.width = '0px';
    elem.style.height = '0px';
  }

  function showThisShit(elem) {
    elem.style.visibility = 'visible';
    elem.style.width = 'auto';
    elem.style.height = 'auto';
  }

  function initMenu(aEvent) {
    // Executed when user right click on web page body
    // aEvent.target is the element you right click on
    body.setAttribute("contextmenu", "userscript-grease");
    child_node = aEvent.target;
    var item = document.querySelector("#userscript-grease #menu_elemr");
    var item_reset = document.querySelector("#userscript-grease #menu_elemr_reset");
    if(getAllElementsWithAttribute('toRemove').length !== 0){
      item_reset.disabled = false;
    }else{
      item_reset.disabled = true;
    }
  }

  function bagItAndTagIt(aEvent) {
    // Executed when user click on Remove Element
    // aEvent.target is the <menuitem> element
    child_node.setAttribute("toRemove", true);
  }

  function spillTheHumanBeans(aEvent) {
    // Executed when user click on Reset
    // aEvent.target is the <menuitem> element
    for (var t = 0; t < getAllElementsWithAttribute('toRemove').length; t++) {
      showThisShit(getAllElementsWithAttribute('toRemove')[t]);
      getAllElementsWithAttribute('toRemove')[t].setAttribute("toRemove", false);
    }
  }

  window.addEventListener('load', function() { /* shit goes down in here */
    setInterval(function() {
      for (var t = 0; t < getAllElementsWithAttribute('toRemove').length; t++) {
        if (getAllElementsWithAttribute('toRemove')[t].getAttribute('toRemove') == 'true') {
          hideThisShit(getAllElementsWithAttribute('toRemove')[t]);
        }
      }
    }, 1000);
  }, false);
})();
