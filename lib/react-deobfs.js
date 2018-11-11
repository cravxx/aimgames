/*
a very overcomplicated deobfuscator for obfuscated react classes
DiscordInternals is required (this doesn't necessarily have to target discord, you can use DiscordInternals with any webpack-based
site with a few changes)

IMPLEMENTATION GUIDE
- get DiscordInternals
- run this code once the window is mostly loaded, before any of your code (i like using window.onload)
- run a mutationobserver that calls updateDeobfuscatedProperties on every added node
  - make sure to call it before you try to do anything with the added nodes, so the classes will be ready for you
  - there are cool libraries to help with this, like MutationSummary, but you can get by with the most barebones:

var observer = new MutationObserver((mutationList) => {
  for (var mutation of mutationList) {
    for (var child of mutation.addedNodes) {
      updateDeobfuscatedProperties(child);
    }
  }
});
observer.observe(document, {childList: true, subtree: true});

  - it goes without saying that if your document changes a lot, this could slow to a crawl. you can try optimizing
    for example by using code to get elements instead of `.querySelectorAll('[class]')` (MutationSummary could help
    with this)
    - the 'updated mutation deobfs in X ms' message in console should help you diagnose, but note that it's not so
      much the update process that slows things down (since not many elements are likely to be queried anyway), but
      the amount of times that the update happens.
- this library could get pretty gnarly if your webpage is listening for classname changes, or if by sheer
  coincidence it also uses `data-oclass` and `data-dclass` attributes. however, changing this is pretty trivial,
  and you can keep your selectors safe and css-only by simply using the `[data-dclass~="whatever"]` syntax. they'll
  probably be much slower, but you won't have to bring in extra code for it.
*/

// deobfuscate properties (this should come early)
var allClassNames =
[...document.querySelectorAll('[class]')]
  .map(e => e.className) // get all class names
  .filter(e => typeof e == 'string') // filter out SVGAnimatedString (we're ignoring those at least for now)
  .map(e => e.split(' ').filter(e => !!e)) // split individual class names and remove duplicate spaces
  .reduce((a, b) => a.concat(b), []); // turn arrays of arrays into a single big fat array

// maps to/from obfuscated class names *only for elements that that are present in the dom and use only a single word for obfuscated class name*
var existingMapToObfs = new Map();
var existingMapFromObfs = new Map();
// maps to/from obfuscated class names including (hopefully) elements not in the DOM and those whose obfuscated names are multiple words
var mapToObfs = new Map();
var mapFromObfs = new Map();
var safeModules = [];
//
DiscordInternals.WebpackModules.find(e => {
  const descriptors = Object.getOwnPropertyDescriptors(e);
  let safeModule = false;
  for (let [k, v] of Object.entries(descriptors)) {
    if (allClassNames.includes(k)) {
      console.info('hah', k, v);
    }
    if (v.value && allClassNames.includes(v.value)) {
      existingMapToObfs.set(k, v.value);
      existingMapFromObfs.set(v.value, k);
      if (!safeModule) {
        safeModule = true;
        safeModules.push(e);
      }
    }
  }
});
// assign all obfuscated class names properly
for (let mod of safeModules) {
  for (let [k, v] of Object.entries(mod)) {
    mapToObfs.set(k, v);
    mapFromObfs.set(v, k);
  }
}

const deobfsRegex = new RegExp([...existingMapFromObfs.keys()].sort(byLengthDescending).join('|'), 'gi');
const deobfsFunc = (matched) => {
  return existingMapFromObfs.get(matched);
};
/**
 * Called immediately once and then again on every mutation
 * @param {HTMLElement} root
 */
function updateDeobfuscatedProperties(root) {
  const startTime = new Date().getTime();
  for (let element of root.querySelectorAll('[class]')) {
    const oldClass = element.className;
    if (!oldClass.replace) { // HACK: check for svg elements, which use SVGAnimatedString
      continue; // will
    }
    const newClass = oldClass.replace(deobfsRegex, deobfsFunc);

    if (oldClass == newClass) {
      element.dataset.dclass = '!fail';
      continue;
    }

    element.dataset.oclass = oldClass;
    element.dataset.dclass = newClass;

    const splitClass = new Set([...oldClass.split(' '), ...newClass.split(' ')]);
    // TODO FUTURELY: if ever assigning className becomes problematic, such as it triggers false positives on the page,
    // and giving the class names a prefix doesn't solve it, maybe just use dataset (like we do now for other things)
    // and then write a patched selector thingy that will turn some special operator, like %class to [data-dclass~="class"].
    // (see https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
    element.className = [...splitClass].join(' ');
  }
  const endTime = new Date().getTime();
  console.info('updated mutation deobfs in', endTime - startTime, 'ms');
}
updateDeobfuscatedProperties(document);
