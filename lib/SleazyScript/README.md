# SleazyScript

**sleazyProxy.js** exposes to `window.aw` a javascript proxy that, when you try to access a missing property in,
returns the closest match. The return value, if it is an object, also gets proxied, thus allowing you to keep the chain going.

**sleazyCatcher.js** automatically try-catches every function or block, so your program's flow is never
interrupted by a silly error! It even provides error logging that's probably better than whatever IE gives you.

## Examples
`aw.Au.p.c.n` is exactly the same as `window.Audio.prototype.constructor.name` (Yes, exactly!)

`aw.Mat.m.a(!0, [1, 2, 3, 4])` is exactly the same as `window.Math.max.apply(null, [1, 2, 3, 4])`

### SleazyCatcher Example
SleazyCatcher exports `window.steamroll`, `window.func` and `window.f`. Give them any function as a parameter and SleazyCatcher
will execute them, _the safe way_. Use `steamroll.noConflict()` to remove conflicting global variables, or
`steamroll.fullUninstall` to trash _everything!_

NB: SleazyCatcher requires the [steamroller library](https://github.com/fallk/the-catch-on-the-river-try/blob/master/dist/steamroller.min.js ) to be installed to work.

## Pros
* Short code
* Good for golfing (if you are insane)
* Useful if you need a bad example of JavaScript code

## Cons
* Autocompletion is nearly impossible
* Extremely slow
* Completely unreadable
* Impossible to mantain (a new property, even if non-standard and browser-specific, could break the entire chain. Any subtle
  change in the standard, even if it consists of a single property being added, could break the chain)
* Potentially imprevisible results (a single misspelling could lead to a broken chain)
* No straightforward way to know if an object actually has a property (then again that's not the point)
* Unreliable equality (`aw.A != window.Attr` because the former is proxied, but `aw.und == undefined` because `undefined`
  is not an object)
* Not really designed for absolute compactness (`aw.M` is `Map` and not `Math`, since length takes precedence over how often
  it's actually used for anything)
* Proxy functions pollute the global namespace (yes, I can fix that, and no, I won't do it)
