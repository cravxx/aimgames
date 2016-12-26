// zapper lets you trash event listeners and timers in a web page

// an empty function!
function noopfn() {}

// the following must be run at the start of the document, before any DOMContentLoaded events fire

// keep a reference to addEventListener you can call with Function.call, Function.apply or Function.bind
const _REAL_FUNC_ = Element.prototype.addEventListener;

// keep a reference to document.addEventListener you can just call if you need to
const _document_addEventListener = document.addEventListener.bind(document);

// disable addEventListener for all elements
Node.prototype.addEventListener = Element.prototype.addEventListener = noopfn;

// bruteforce disable addEventListener
// use this if things don't work
//Object.keys(window).forEach(k => {
//  if (window[k] && window[k].protoype && window[k].prototype.addEventListener) {
//    console.log('eventer: ' + k);
//    window[k].prototype.addEventListener = noopfn;
//  }
//})

// disable setTimeout and setInterval, keeping a reference for all your needs
const _setTimeout = window.setTimeout.bind(window);
const _setInterval = window.setInterval.bind(window);
window.setTimeout = noopfn;
window.setInterval = noopfn;

// the following can be run after the document's end, but might not be very useful

// add your own events here
var ev = ["load", "click", "mousedown", "mouseup", "mouseover", "mouseout", "unload", "resize"],
var isOpera = window.opera;
if (document.addEventListener /*MOZ*/ && !isOpera)
  ev.forEach(evt => document.addEventListener(evt, function(e) {
    e.stopPropagation();
  }, true));
else if (window.captureEvents /*NS4*/ && !isOpera) {
  document.captureEvents(-1 /*ALL*/ );
  ev.forEach(evt => if (window['on'+evt]) window["on" + evt] = noopfn);
} else /*IE*/ {
  var i, x;
  ev.forEach(evt => {
    if (document["on" + evt] /*NOT TEXTNODE*/ ) document["on" + evt] = noopfn;
  });
  for (i = 0; x = N.childNodes[i]; ++i) R(x);
}

// more bruteforce way:
var all = document.getElementsByTagName("*");

ev.forEach(evt => {
  for (var i=0, max=all.length; i < max; i++) {
    if (all[i]['on'+evt]) {
      all[i]['on'+evt] = noopfn;
    }
  }
});
