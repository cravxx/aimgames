// ==UserScript==
// @name        HRK bypass
// @description No countdown for HRK drop key
// @namespace   hansenspace
// @include     https://www.hrkgame.com/giveaway/dropkey/today/
// @version     1.6
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

window.countdownBtnRefresh = function() {
	$('#rfrbtn').html('<i class="fa fa-refresh"></i> Take Your Chance For Free');
	$('#rfrbtn').prop('disabled', false);
}
