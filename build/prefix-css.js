'use strict';

const autoprefixer = require('autoprefixer');
const postcss      = require('postcss');

let script = fs.readFileSync('./enhance/AIMEnhanced.user.js', 'utf8');

let css = script
                .match(/GM_addStyle\(`[^]`\)/)[0]
                .substring('GM_addStyle(`'.length);
css     =    css.substring(css.length - 2);

postcss([ autoprefixer ]).process(css).then(function (result) {
  result.warnings().forEach(function (warn) {
    console.warn(warn.toString());
  });
  //console.log(result.css);
  fs.writeFileString('./enhance/AIMEnhanced.user.js', script.replace(/GM_addStyle\(`[^]`\)/, 'GM_addStyle(`' + result.css + '`)'));
});