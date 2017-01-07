'use strict';

const autoprefixer = require('autoprefixer');
const postcss      = require('postcss');
const fs           = require('fs');

let script = fs.readFileSync('./enhance/AIMEnhanced.user.js', 'utf8');

let css = script
                .match(/GM_addStyle\(`[^]*?`\)/)[0]
                .substring('GM_addStyle(`'.length);
css     =    css.substring(0, css.length - 2);

//console.log(css);

const result = postcss([ autoprefixer ]).process(css);

result.warnings().forEach(function (warn) {
  console.warn(warn.toString());
});
fs.writeFileSync('./enhance/AIMEnhanced.user.js', script.replace(/GM_addStyle\(`[^]*?`\)/, 'GM_addStyle(`' + result.css + '`)'));