'use strict';

const fs = require('fs');
const uglifyJS = require('uglify-js');
const http = require('http');
const https = require('https');

const files = {
  "codemirror.js": "http://codemirror.net/lib/codemirror.js",
  "css.js": "http://codemirror.net/mode/css/css.js",
  "xml.js": "http://codemirror.net/mode/xml/xml.js",
  "vbscript.js": "http://codemirror.net/mode/vbscript/vbscript.js",
  "javascript.js": "http://codemirror.net/mode/javascript/javascript.js",
  "htmlmixed.js": "http://codemirror.net/mode/htmlmixed/htmlmixed.js",
  "bbcode.js": "https://raw.githubusercontent.com/rosmanov/CodeMirror-modes/master/bbcode/bbcode.js",
  "bbcodemixed.js": "https://raw.githubusercontent.com/rosmanov/CodeMirror-modes/master/bbcodemixed/bbcodemixed.js",
  "opentip-native.js": "https://raw.githubusercontent.com/enyo/opentip/master/downloads/opentip-native.js",
  "editorbuttons.js": "./enhance/editorbuttons.js",
  "prism.js": "./enhance/prism.js",
};

const keys = Object.keys(files);
function iterate(i, k) {
  
  console.log(i, k, files[k]);

  const file = fs.createWriteStream("./enhance/resources/" + k);
  const respHandler = (response) => {
    const stream = response.pipe(file);
    stream.on('finish', () => {
      const result = uglifyJS.minify([ "./enhance/resources/" + k ]);
      
      fs.writeFile("./enhance/resources/" + k, result.code, err => {
        if (err) console.error(err);
        
        if (++i < keys.length) {
          iterate(i, keys[i]);
        }
      })
      
    });
  }
  if (files[k].startsWith('http'))
    (files[k].startsWith('https')?https:http).get(files[k], respHandler);
  else
    respHandler(fs.createReadStream(files[k]));

}

iterate(0, keys[0]);
