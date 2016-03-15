// ==UserScript==
// @name        linkshrink.net bypass
// @description So dc4in got ahead of me. Fair enough. It's my move now.
// @namespace   by-mc-passer@gmail.com
// @match       http://linkshrink.net/*
// @match       https://linkshrink.net/*
// @version     1.5
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @run-at      document-start
// ==/UserScript==

// get and delete bad html (old)
/*var a = $.find('script[type="text/javascript"]');

for (var i in a) {
	if (a[i].textContent.indexOf('shipthankrecognizing') != -1) { //content check
		a[i].parentNode.removeChild(a[i]); //make node delete itself
		a[i].textContent = "";
	}
}*/
// get and delete bad html
checkForBadJavascripts([
    [false, /shipthankrecognizing/i, null],
]);

// auto show skip ad and click (setting location.href doesn't work since referer is required)

window.addEventListener("load", function load(event){ //we need this since we're running at document-start
    //window.removeEventListener("load", load, false); //remove listener, no longer needed
    $("#skip").show();
    $("#pause").hide();
    $('#skip').find('.bt')[0].click();
},false);



/////////////////////////////////



/*--- checkForBadJavascripts()
    This is a utility function, meant to be used inside a Greasemonkey script that
    has the "@run-at document-start" directive set.

    It Checks for and deletes or replaces specific <script> tags.
*/
function checkForBadJavascripts (controlArray) {
    /*--- Note that this is a self-initializing function.  The controlArray
        parameter is only active for the FIRST call.  After that, it is an
        event listener.

        The control array row is  defines like so:
        [bSearchSrcAttr, identifyingRegex, callbackFunction]
        Where:
            bSearchSrcAttr      True to search the SRC attribute of a script tag
                                false to search the TEXT content of a script tag.
            identifyingRegex    A valid regular expression that should be unique
                                to that particular script tag.
            callbackFunction    An optional function to execute when the script is
                                found.  Use null if not needed.

        Usage example:
            checkForBadJavascripts ( [
                [false, /old, evil init()/, function () {addJS_Node (init);} ],
                [true,  /evilExternalJS/i,  null ]
            ] );
    */
    if ( ! controlArray.length) return null;

    checkForBadJavascripts      = function (zEvent) {
        for (var J = controlArray.length - 1;  J >= 0;  --J) {
            var bSearchSrcAttr      = controlArray[J][0];
            var identifyingRegex    = controlArray[J][1];

            if (bSearchSrcAttr) {
                if (identifyingRegex.test (zEvent.target.src) ) {
                    stopBadJavascript (J);
                    return false;
                }
            }
            else {
                if (identifyingRegex.test (zEvent.target.textContent) ) {
                    stopBadJavascript (J);
                    return false;
                }
            }
        }

        function stopBadJavascript (controlIndex) {
            zEvent.stopPropagation ();
            zEvent.preventDefault ();

            var callbackFunction    = controlArray[J][2];
            if (typeof callbackFunction == "function")
                callbackFunction (zEvent.target);

            //--- Remove the node just to clear clutter from Firebug inspection.
            zEvent.target.parentNode.removeChild (zEvent.target);

            //--- Script is intercepted, remove it from the list.
            controlArray.splice (J, 1);
            if ( ! controlArray.length) {
                //--- All done, remove the listener.
                window.removeEventListener (
                    'beforescriptexecute', checkForBadJavascripts, true
                );
            }
        }
    }

    /*--- Use the "beforescriptexecute" event to monitor scipts as they are loaded.
        See https://developer.mozilla.org/en/DOM/element.onbeforescriptexecute
        Note seems to work on acripts that are dynamically created, despite what 
        the spec says.
    */
    window.addEventListener ('beforescriptexecute', checkForBadJavascripts, true);

    return checkForBadJavascripts;
}
