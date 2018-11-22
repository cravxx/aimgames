// ==UserScript==
// @name        Schemas
// @description autosaves your settings on jsonschema2pojo.org
// @namespace   wemes
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require     https://raw.githubusercontent.com/kflorence/jquery-deserialize/master/dist/jquery.deserialize.min.js
// @include     http://www.jsonschema2pojo.org/
// @version     1
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

$('form').deserialize(GM_getValue('ser', "schema=%7B%22status%22%3A%22success%22%2C%22photos%22%3A%5B%7B%22url%22%3A%22http%3A%2F%2Fi.imgur.com%2FRCPHKvC.png%22%2C%22pid%22%3A%22F%400a950db47465f7c2144f6cac6f21c841_caff71a17cacf%22%2C%22width%22%3A214%2C%22height%22%3A317%2C%22tags%22%3A%5B%7B%22uids%22%3A%5B%5D%2C%22label%22%3Anull%2C%22confirmed%22%3Afalse%2C%22manual%22%3Afalse%2C%22width%22%3A32.24%2C%22height%22%3A21.77%2C%22yaw%22%3A15%2C%22roll%22%3A-13%2C%22pitch%22%3A7%2C%22attributes%22%3A%7B%22face%22%3A%7B%22value%22%3A%22true%22%2C%22confidence%22%3A67%7D%7D%2C%22points%22%3Anull%2C%22similarities%22%3Anull%2C%22tid%22%3A%22TEMP_F%400a950db47465f7c2144f6cac005a0085_caff71a17cacf_42.06_41.96_0_1%22%2C%22recognizable%22%3Atrue%2C%22center%22%3A%7B%22x%22%3A42.06%2C%22y%22%3A41.96%7D%2C%22eye_left%22%3A%7B%22x%22%3A48.6%2C%22y%22%3A35.65%2C%22confidence%22%3A96%2C%22id%22%3A449%7D%2C%22eye_right%22%3A%7B%22x%22%3A32.71%2C%22y%22%3A38.17%2C%22confidence%22%3A93%2C%22id%22%3A450%7D%2C%22mouth_center%22%3A%7B%22x%22%3A42.99%2C%22y%22%3A49.21%2C%22confidence%22%3A90%2C%22id%22%3A615%7D%2C%22nose%22%3A%7B%22x%22%3A38.79%2C%22y%22%3A41.64%2C%22confidence%22%3A85%2C%22id%22%3A403%7D%7D%5D%7D%5D%2C%22usage%22%3A%7B%22used%22%3A2%2C%22remaining%22%3A98%2C%22limit%22%3A100%2C%22reset_time%22%3A1487192082%2C%22reset_time_text%22%3A%22Wed%2C+15+February+2017+20%3A54%3A42+%2B0000%22%7D%2C%22operation_id%22%3A%2279f95668827e42d1aa467aaf1ba109fa%22%7D&targetpackage=hula.pojo.skybiometry&classname=SkyBiometryAPIOutput&sourcetype=json&annotationstyle=gson&generatebuilders=true&useprimitives=true&uselongintegers=true&usedoublenumbers=true&usecommonslang3=true&includeconstructors=true&includetostring=true&includeadditionalproperties=true&serializable=true&propertyworddelimiters=-+_"));

setInterval(() => {
  GM_setValue('ser', $('form').serialize());
}, 5000);
