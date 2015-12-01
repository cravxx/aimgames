// ==UserScript==
// @name        Username History
// @namespace   samsquanchhunter14@gmail.com
// @version     1.0.1
// @include     http://aimgames.forummotion.com/*
// @grant       none
// ==/UserScript==

var names = {
one: ['2000tornados', 'm0squ1t0'],
two: ['.Nickname1', 'BlueThunder'],
three: ['-Duel-', 'DuelFueler', 'Duel', 'GreatUncleLeo'],
four: ['Adrenaline', 'Dynamic'],
five: ['Adverts', 'Rage007'],
six: ['Ali-Aimer', 'ElementSe7en', 'X-Rebel', 'Shmee150', 'Pharcyde'],
seven: ['Anhilation', 'Pyxis', 'HyperVenom'],
eight: ['Aquario', 'Zone'],
nine: ['Astro7452', 'ApexNova'],
ten: ['AuraSphere', 'Resonance', 'Nebula'],
eleven: ['Aventador X', 'Vitalogy', 'KRC', 'Kinetico', 'Yes', 'Kinetico'],
twelve: ['Awesomebot4', 'TwistedTeenager', 'Chaotic'],
thirteen: ['Azri965', 'A9'],
fourteen: ['Behemoth', 'Aureus'],
fifteen: ['Ben', 'Whats-His-Face', 'Ben'],
sixteen: ['BlazeAmani', 'Blazkrillex'],
seventeen: ['BlazerX', 'BlazerX857', 'Metrophis'],
eighteen: ['Boiler', 'Logic'],
nineteen: ['burncharge', 'L-Dargo'],
twenty: ['Burner', 'SpeedyX', 'DriftBeat', 'Spineshank', '800*28', 'Rage Against The Machine', 'Amplifier']
};

function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k]
  })
}

function getTextNodesIn(node, includeWhitespaceNodes) {
  var textNodes = [
  ],
  nonWhitespaceMatcher = /\S/;
  function getTextNodes(node) {
    if (node.nodeType == 3) {
      if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
        textNodes.push(node);
      }
    } else {
      for (var i = 0, len = node.childNodes.length; i < len; ++i) {
        getTextNodes(node.childNodes[i]);
      }
    }
  }
  getTextNodes(node);
  return textNodes;
}

window.addEventListener('load', function() {/*shit goes down in here*/  
  var array = getTextNodesIn(document);
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < values(names).length; x++){     
      //console.log(values(names)[x][values(names)[x].length - 1]);
      if (array[i].nodeValue === values(names)[x][values(names)[x].length - 1]) {
        //console.log('success');
        for(var y = 0; y < values(names)[x].length - 1; y++){
          if(y < values(names)[x].length - 2){
            array[i].parentNode.title += values(names)[x][y] + ', ';
          }else{
            array[i].parentNode.title += values(names)[x][y];
          }          
        }        
      }      
    }    
  }
}, false);
