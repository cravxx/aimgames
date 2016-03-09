// ==UserScript==
// @name        dc4in.com bypass
// @description Bypass the adfly links on dc4in.com
// @namespace   hansen-i-nate@gmail.com
// @match       http://*.dc4in.com/*
// @match       https://*.dc4in.com/*
// @version     1.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

//$('#loading').html('<fieldset><legend><span class="label label-primary">Result</span></legend><h4><span class="label label-success">Successfully</span></h4><h4><div id="result"></div></h4></fieldset>');
$('#adfly').children()[0].onclick = "Submit();"

window.start = window.finish;
window.error = window.finish;
window.error1 = window.finish;

/*
this is the code that the fuckfaces use:
(next time at least obfuscate your shit you dumb fucks)

function start() {
    //  $('#loading').slideUp('slow');
    $('#loading').html('<fieldset><legend><span class="label label-primary">Result</span></legend><h4>Error Please Try Again :) </h4></fieldset>');
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
    $('#adfly').html('<fieldset><a href="/start_ad.php"><i class="btn btn-danger btn-xs"><font size=3>Click Here Before Submit</font></i></a></fieldset>');

}

function finish() {
    // $('#loading').slideUp('slow');
    $('#loading').html('<fieldset><legend><span class="label label-primary">Result</span></legend><h4><span class="label label-success">Successfully</span></h4><h4><div id="result"></div></h4></fieldset>');
    ////$('#loading').html('<fieldset><legend><span class="label label-primary">Result</span></legend><h4><span class="label label-success">Successfully</span></h4><h4><div id="result"></div></h4></fieldset>');
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
}

function error() {
    //  $('#loading').slideUp('slow');
    $('#loading').html('<fieldset><legend><span class="label label-primary">Result</span></legend><h4>Error Please Try Again :) </h4></fieldset>');
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
    $('#adfly').html('<fieldset><a href="/start_ad.php"><i class="btn btn-danger btn-xs"><font size=3>Click Here Before Submit</font></i></a></fieldset>');
}

function error1() {
    //  $('#loading').slideUp('slow');
    $('#loading').html('<fieldset><legend><span class="label label-primary">Loading....</span></legend>Please Wait.........<br><img src="http://www.jayanshika.com/wp-content/themes/marriage/images/bragbrand_loading.gif"></fieldset>');
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
    //  $('#adfly').html('<h4>Processing....<img src="http://www.jayanshika.com/wp-content/themes/marriage/images/bragbrand_loading.gif"></h4>');

}
*/
