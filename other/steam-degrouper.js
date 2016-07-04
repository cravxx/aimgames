/**
 * This small script can be executed in
 * the browser console and will remove
 * you from all steam groups except the
 * first one.
 */
'use strict';

let bloks = document.getElementsByClassName('groupLeftBlock');

function leaveGroupPrompt(groupId, groupName) {
  let leaveURL = processURL + '?action=leaveGroup&groupId=' + groupId + '&sessionID=' + escape( $('sessionID').value );

  window.open(leaveURL);
}

for (let i = 1; i < bloks.length; i++) {
  eval(bloks[i].children[0].href);
}
