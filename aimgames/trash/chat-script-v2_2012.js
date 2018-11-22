// this is the code for the chat that was used one day by ip in 2012/2013
// data from http://aimgames.forummotion.com/h1-
// original is from http://help.forumotion.com/t88458-how-to-create-a-pop-out-chat-box-v20 (archived: http://web.archive.org/web/20111102082151/https://help.forumotion.com/t88458-how-to-create-a-pop-out-chat-box-v20 )
var cb_new = 1;
var cbmp3 = 'http://bit.ly/rupblD';
jQuery(document).ready(function() {
    jQuery('body').append('');
});
jQuery('body').append('') if (parseInt(my_getcookie('chatbox_ret')) == 1) document.getElementById('chatbox_ret').style.display = 'block';
if (!document.getElementById('i_icon_mini_login')) {
    var oldCCB;
    var oldDCB;
    var pageTitle = document.title;
    var INTCB;

    function stopINT() {
        if (INTCB != undefined) {
            clearInterval(INTCB);
            document.title = pageTitle;
        }
        return true;
    }

    function checkCB() {
        if (parent.chatbox_ret.connected) {
            if (parent.chatbox_ret.document.getElementById('chatbox_members').childNodes.length == 2) {
                if (parent.chatbox_ret.document.getElementById('chatbox_members').childNodes[0].className == 'member-title away') {
                    document.getElementById('chat1').innerHTML = "Chat";
                    document.getElementById('chat2').innerHTML = "Box";
                } else {
                    document.getElementById('chat2').innerHTML = "Box";
                    document.getElementById('chat1').innerHTML = "Chat";
                }
            } else if (parent.chatbox_ret.document.getElementById('chatbox_members').childNodes.length > 2) {
                document.getElementById('chatbox_ret_online').innerHTML = parent.chatbox_ret.document.getElementById('chatbox_members').childNodes[1].childNodes.length;
                document.getElementById('chatbox_ret_offline').innerHTML = parent.chatbox_ret.document.getElementById('chatbox_members').childNodes[5].childNodes.length;
            }
            parent.chatbox_ret.document.getElementById('refresh_auto').checked = true;
            var newDCB = parent.chatbox_ret.document.getElementById('chatbox').childNodes[parent.chatbox_ret.document.getElementById('chatbox').childNodes.length - 1].firstChild.innerHTML;
            if (newDCB != oldDCB) {
                oldDCB = newDCB;
                var newCCB = parent.chatbox_ret.document.getElementById('chatbox').childNodes[parent.chatbox_ret.document.getElementById('chatbox').childNodes.length - 1].childNodes[2].innerHTML;
                stopINT();
                if (newCCB != oldCCB) {
                    oldCCB = newCCB;
                    jQuery('#cbalarm').html('');
                    INTCB = setInterval("document.title=(document.title==pageTitle)?'!!! New Message !!!':pageTitle;", 500);
                    setTimeout('stopINT()', 300000);
                }
            }
        } else {
            stopINT();
        }
    }

    function cb_start() {
        if (parent.chatbox_ret.connected) {
            oldDCB = parent.chatbox_ret.document.getElementById('chatbox').childNodes[parent.chatbox_ret.document.getElementById('chatbox').childNodes.length - 1].firstChild.innerHTML;
            oldCCB = parent.chatbox_ret.document.getElementById('chatbox').childNodes[parent.chatbox_ret.document.getElementById('chatbox').childNodes.length - 1].childNodes[2].innerHTML;
        } else {
            oldDCB = '';
            oldCCB = '';
        }
        setInterval('checkCB()', 1000);
        parent.chatbox_ret.onfocus = parent.chatbox_ret.onkeypress = parent.chatbox_ret.onclick = parent.chatbox_ret.onblur = stopINT;
    }
}
