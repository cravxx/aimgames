// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     2.6.10
// @grant       none
// @icon        data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKUUExURf/////m5v93d/+oqP/Bwf+Dg/+cnP9FRf9eXv9RUf9qav/NzeLi4tjY2PHx8fz8/P+Pj8XExMPBwdGvr/KuruyOjtmmpuXl5fLy8snJycLCwsrDw+1ra/+1tfvk5OasrMi2ts29vfj4+P6QkNHR0elzc+np6cq9vcvHx++BgcbGxsi5udGwsOmTk/9GRtzHx8PDw8LBwcm5ufPz8+CXl8XFxdm4uPahoc7OztS6utvb2/39/dfX1/7+/vt7e9zR0dDQ0O/v78TExOvr6+ibm9/f3/7l5fx7e9SsrNLLy/54eP3BwdiUlM21tf94eNqpqcS+vtPT09apqcPAwOTk5MjIyNzc3My2tt7T0+v3++P0+N2mq+BPVOX1+epMT+qoq8q0tc3Nzc7Jyca7u93S0hbF9Aa/8QK+8AO56gK66wK97z++4LrCxMHCwsDCwsDCw7zDxb7DxcnW2dn0+9v0++L2++b3/PL7/QDK/wDL/wDH/QDJ/5LD0b7Cw7vCxLfCxV260wGx4QOv3QOt2wep1hey3ADF+gDG/ADG+x3F87XCxk662ACz5ACw4ACv3wCu3QCt3ACx4gCy4wC36YG/z319fScnJzMzM7y8vLzCxDLF7QDG/QDF+wDI/wCp1wCs2gCs2wCr2gCv3rTBxF1fYBMUFBQUFKenp7/Cw7PBxSi85QC67QC56wC87wC/8wCx4QCz4wCy4rzBwy8vLzk5Oa2trbrBwySz2gC15gCu3gC05QGr2r3Bw7/CwiOu0wCt3QCp2BGt2LnBwxas1QCm1ACo1ky206O+xgCq2ACn1QDC9wDE+VPD4bfBxJzAyhO04QC+8l/C3ZXAzA6+7wC98QDA9XK70IW+zQe04wC57AC88AC/8k0VJ2YAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVQ4y5WRZ1cTURCGZ+9ucrMbAUVRGBsqomILKhYUG/au2Huv7GIXG3ZjSSKiWDESK4pkwUpUVKwIFuztz3i3wAnhg8c5Z3fnvPPcmbn7AvwrOEIID8DzHOF5XiCCRdBkwQIWQSAWlhJiJWClBIhNtAKVqA7wlFLeIlB2loii3SraGEBFDiiVoBYAi0azCRzPKI5QamcANQHQTrOHYyXQ3yLbhvXUdBOQbMa8/4gGYeERoZp2q4bsWoR9wxtFNm4CdrYKRDVtZqJUEmxsL2256BjE5i1aihJp1To2sk1b/X9oe7KFQKJSuzhEjG3PAD6+A2LHGkDSAfaDOiUgdu7SlQN7t+4OTOzR0xzBsxEW1oH2SmIdsDcn0T59+yE6ko0OtdE/RqvjgBRu4CA9GxxynSFDNdWRnAKpSXUB07hhCZqaNHzEyFGJOjB6jGZvrXFjx0Xqclx01Hg9wfgJmr01QMTESbrqmJw6Jc0AwnR7a3yZOs1okDA9eYYxAWfq9sKs2XPmzpu/YGGaATgWLV5i1HGpbi8sW75i5arVa9JlRVcz1q4z67h+w8ZNm7dA5tbMzG3bd2TIO2Umylm7ZLOu7N6zd9/+A3DQ6XQeOnxEkc1CBpqZctTl9hzLBs/xHNeJkwrmnjp9BoNCPnvufF7eBSd4L+b7Ll1GvHL12vWgslJw42bhrcIiP6jFrhLPbcTcO3fvBQPK/QelqjvwEPIDgcCjx1g/yp541Oz8p/DM5/OVK+Ylg+P5i5de7ysvqKrqfi3L9XqUvSn3eisq3oK/sqrqnSIX1C3LyvsPH3NU1eOGan915ScF5ZAGctbnL/5q/9dvUFzqLvmuoBJCyOk/fv4qLPr95y9qjLbDWeFJXAAAAABJRU5ErkJggg==
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

////////////////////////////////
//////////////////////////////  VERSIONING: X.X.XXr
//////////////////////////////  DO NOT CHANGE
////////////////////////////////

// FOR OUR PORPUSES,
// AND BECAUSE REGEXP IS FUCKING SLOW,
// AND BECAUSE KAFF IS A RETARD,
// EVERYTHING SHOULD BE PRE-DONE

// MAKING REGEX ON THE FLY IS UNRELIABLE. DON'T DO IT.

var swear_words = [
/([fF]+)([uU]+)([cC]+)([kK]+)/g,
/([sS]+)([hH]+)([iI]+)([tT]+)/g,
/([bB]+)([aA]+)([sS]+)([tT]+)([aA]+)([rR]+)([dD]+)/g,
/([wW]+)([hH]+)([oO]+)([rR]+)([eE]+)/g,
/([dD]+)([iI]+)([cC]+)([kK]+)/g,
/([fF]+)([aA]+)([gG]+)([gG]+)([oO]+)([tT]+)/g,
/([rR]+)([aA]+)([pP]+)([eE]+)/g,
/([aA]+)([sS]+)([sS]+)([hH]+)([oO]+)([lL]+)([eE]+)/g,
/([aA]+)([sS]+)([sS]+)/g,
/([aA]+)([rR]+)([sS]+)([eE]+)/g,
/([bB]+)([oO]+)([nN]+)([eE]+)([rR]+)/g,
/([cC]+)([uU]+)([mM]+)/g,
/([bB]+)([iI]+)([tT]+)([cC]+)([hH]+)/g,
/([lL]+)([eE]+)([sS]+)([bB]+)([iI]+)([aA]+)([nN]+)/g,
/([sS]+)([hH]+)([iI]+)([fF]+)([tT]+)/g,
/([cC]+)([oO]+)([cC]+)([kK]+)/g,
/([gG]+)([aA]+)([yY]+)/g,
/([fF]+)([aA]+)([gG]+)/g,
/([pP]+)([oO]+)([rR]+)([nN]+)/g,
/([mM]+)([iI]+)([lL]+)([fF]+)/g,
/([dD]+)([aA]+)([mM]+)([nN]+)/g,
/([sS]+)([eE]+)([mM]+)([eE]+)([nN]+)/g,
/([dD]+)([iI]+)([dD]+)([kK]+)/g,
/([tT]+)([iI]+)([tT]+)/g,
/([pP]+)([iI]+)([sS]+)([sS]+)/g,
/([pP]+)([uU]+)([sS]+)([sS]+)([yY]+)/g,
/(\:+)(3+)/g,
/([gG]+)([iI]+)([tT]+)/g,
/([dD]+)([aA]+)([aA]+)/g,
/([fF]+)([aA]+)([pP]+)/g,
/([pP]+)([eE]+)([nN]+)([iI]+)([sS]+)/g,
/([fF]+)([oO]+)([xX]+)([yY]+)/g,
/([sS]+)([cC]+)([rR]+)([eE]+)([wW]+)/g,
/([aA]+)([nN]+)([uU]+)([sS]+)/g,
/([fF]+)([uU]+)/g,
/([sS]+)([eE]+)([xX]+)/g,
/([aA]+)([nN]+)([aA]+)([lL]+)/g,
/([dD]+)([iI]+)([sS]+)([kK]+)/g,
/([sS]+)([lL]+)([uU]+)([tT]+)/g,
/([cC]+)([oO]+)([mM]+)([eE]+)([bB]+)([aA]+)([cC]+)([kK]+)/g,
/([hH]+)([oO]+)([eE]+)/g,
/([sS]+)([hH]+)([iI]+)([rR]+)([tT]+)/g,
/([cC]+)([uU]+)([nN]+)([tT]+)/g,
/([sS]+)([tT]+)([aA]+)([lL]+)([kK]+)([eE]+)([rR]+)/g,
/([tT]+)([oO]+)([fF]+)([uU]+)/g,
/([vV]+)([aA]+)([gG]+)([iI]+)([nN]+)([aA]+)/g,
/([hH]+)([oO]+)([mM]+)([oO]+)/g,
/([cC]+)([rR]+)([aA]+)([pP]+)/g,
/([wW]+)([aA]+)([iI]+)([fF]+)([uU]+)/g,
/([dD]+)([oO]+)([uU]+)([cC]+)([hH]+)([eE]+)/g,
/([pP]+)([rR]+)([iI]+)([cC]+)([kK]+)/g,
/([mM]+)([oO]+)([tT]+)([hH]+)([eE]+)([rR]+)([fF]+)/g,
/([sS]+)([hH]+)([iI]+)([zZ]+)([nN]+)([iI]+)([tT]+)/g,
/([tT]+)([uU]+)([rR]+)([dD]+)/g,
/([dD]+)([iI]+)([pP]+)/g,
/([dD]+)([iI]+)([kK]+)/g,
/([sS]+)([hH]+)(\!+)([tT]+)/g,
/([sS]+)([hH]+)([tT]+)/g,
/([sS]+)([hH]+)([iI]+)/g,
/([sS]+)([tT]+)([fF]+)([uU]+)/g,
/([hH]+)([oO]+)([rR]+)([eE]+)/g,
/([tT]+)([eE]+)([sS]+)([tT]+)([iI]+)([cC]+)([lL]+)([eE]+)([sS]+)/g/*,
/([jJ])([eE])([sS])([uU])([sS])/g,
/([yY])([aA])([nN])([iI])([sS])/g,
/([gG])([oO])([dD])/g,
/([iI])([pP])/g*/
];

var swear_noregex = [
"fuck", "shit", "bastard",
"whore", "dick", "faggot",
"rape", "asshole", "ass",
"arse", "boner", "cum",
"bitch", "lesbian", "shift",
"cock", "gay", "fag",
"porn", "milf", "damn",
"semen", "didk", "tit",
"piss", "pussy", ":3",
"git", "daa", "fap",
"penis", "foxy", "screw",
"anus", "fu", "sex",
"anal", "disk", "slut",
"comeback", "hoe", "shirt",
"cunt", "stalker", "tofu",
"vagina", "homo", "crap",
"waifu", "douche", "prick",
"motherf", "shiznit", "turd",
"dip", "dik", "sh!t", "sht",
"shi", "stfu", "hore", "testicles"/*,
"jesus", "yanis", "god", "ip"*/
];
///////

///////SMILY CODE, OBJECT SHIT
var emoticon = {
dolan: [':dolan:', 'http://oi62.tinypic.com/2lsk7ra.jpg', 'Dolan'],
lysf: [':lysf:', 'http://i.imgur.com/8eLDb0a.png', 'LYSF'],
bed: [':bed:', 'http://i58.tinypic.com/14tlq4g.png', 'Bed'],
buzz: [':buzz:', 'http://i61.tinypic.com/11hza0i.png', 'buzz'],
waterc: [':waterc:', 'http://i61.tinypic.com/161dc7b.png', 'waterc'],
cozy: [':cozy:', 'http://i57.tinypic.com/25tcbw9.png', 'cozy'],
ween: [':ween:', 'http://i61.tinypic.com/24c9m2x.png', 'ween'],
smoker: [':smoker:', 'http://i.imgur.com/oayZBiW.png', 'smoker'],
hug: [':hug:', 'http://i.imgur.com/2rbLxWH.png', 'hug'],
wp: [':wp:', 'http://i.imgur.com/3nGF3HF.png', 'wp'],
hide: [':hide:', 'http://i58.tinypic.com/11gjf4p.png', 'hide'],
kind: [':kind:', 'http://i.imgur.com/M2lLpSW.png', 'kind'],
frog3: [':frog3:', 'http://i57.tinypic.com/r20u3l.png', 'frog3'],
feels: [':feels:', 'http://i58.tinypic.com/a49d2h.png', 'feels'],
fly: [':fly:', 'http://i.imgur.com/GnFj20L.png', 'fly'],
frog4: [':frog4:', 'http://i58.tinypic.com/e6wsao.png', 'frog4'],
wink: [':wink:', 'http://i58.tinypic.com/29qo3vc.png', 'wink'],
dubs: [':dubs:', 'http://i62.tinypic.com/29y09br.png', 'dubs'],
oceanb: [':oceanb:', 'http://i.imgur.com/biE5mVs.png', 'oceanb'],
mollusk: [':mollusk:', 'http://i.imgur.com/EQ7H4r1.png', 'mollusk'],
hah: [':hah:', 'http://i58.tinypic.com/dxd92w.png', 'hah'],
hue: [':hue:', 'http://i57.tinypic.com/20tjpy1.png', 'hue'],
wpony: [':wpony:', 'http://i.imgur.com/OBSRlXU.png', 'wpony'],
bend: [':bend:', 'http://i.imgur.com/Rcf2aZn.png', 'bend'],
yhf: [':yhf:', 'http://i60.tinypic.com/152ozl0.png', 'yhf'],
smug: [':smug:', 'http://i61.tinypic.com/11trl93.png', 'smug'],
am: [':am:', 'http://i.imgur.com/W6b3Ojy.png', 'am'],
riot: [':riot:', 'http://i.imgur.com/exN4785.png', 'riot'],
blaze: [':blaze:', 'http://i60.tinypic.com/14ul0nd.png', 'blaze'],
afx: [':afx:', 'http://i.imgur.com/r5o9xXL.png', 'afx'],
strokes1: [':strokes1:', 'http://i.imgur.com/IhuPM4O.png', 'strokes1'],
wave: [':wave:', 'http://i61.tinypic.com/6rk6ds.gif', 'wave'],
johnny: [':johnny:', 'http://i.imgur.com/vBzuuFZ.jpg', 'johnny'],
sloth: [':sloth:', 'http://i59.tinypic.com/16idto7.gif', 'sloth'],
autobahn: [':autobahn:', 'http://i.imgur.com/7HlKkKx.png', 'autobahn'],
lmao: [':lmao:', 'http://i58.tinypic.com/jhec78.png', 'lmao'],
yup: [':yup:', 'http://i61.tinypic.com/wqr6te.png', 'yup'],
ayylmao: [':ayylmao:', 'http://i62.tinypic.com/16islyd.png', 'ayylmao'],
sip: [':sip:', 'http://i60.tinypic.com/r22k5w.png', 'sip'],
frog5: [':frog5:', 'http://i60.tinypic.com/dgkwef.png', 'frog5'],
cool: [':cool:', 'http://i62.tinypic.com/22lxmw.png', 'cool'],
whew: [':whew:', 'http://i60.tinypic.com/rsy4ck.png', 'whew'],
err: [':err:', 'http://i58.tinypic.com/23k5hme.png', 'err'],
sadfrog: [':sadfrog:', 'http://i59.tinypic.com/15yhwd0.png', 'sadfrog'],
notimpr: [':notimpr:', 'http://i.imgur.com/UJ2Pcqf.png', 'notimpr'],
murdoc: [':murdoc:', 'http://i.imgur.com/kzK8RfX.png', 'murdoc'],
notsure: [':notsure:', 'http://i57.tinypic.com/156fhnt.png', 'notsure'],
maddy: [':maddy:', 'http://i.imgur.com/FF8occF.png', 'maddy'],
dead: [':dead:', 'http://i.imgur.com/9yw2sIe.png', 'dead'],
snake: [':snake:', 'http://i59.tinypic.com/52hwf5.png', 'snake'],
thom: [':thom:', 'http://i.imgur.com/Z5Oo4IU.png', 'thom'],
snakepoo: [':snakepoo:', 'http://i59.tinypic.com/2462ln5.png', 'snakepoo'],
squid: [':squid:', 'http://i.imgur.com/Xzqc4dL.png', 'squid'],
madfrog: [':madfrog:', 'http://i60.tinypic.com/3097j1c.png', 'madfrog'],
fatsnake: [':fatsnake:', 'http://i61.tinypic.com/i3gl03.jpg', 'fatsnake'],
supa: [':supa:', 'http://i58.tinypic.com/2dsl0rb.gif', 'supa'],
sadsmile: [':sadsmile:', 'http://i60.tinypic.com/90vlw1.jpg', 'sadsmile'],
hmmfrog: [':hmmfrog:', 'http://i58.tinypic.com/351d381.png', 'hmmfrog'],
lookingin: [':lookingin:', 'http://i60.tinypic.com/veuf4.png', 'lookingin'],
froggy: [':froggy:', 'http://i57.tinypic.com/2ywy1ci.png', 'froggy'],
spurdo: [':spurdo:', 'http://i62.tinypic.com/oaqf78.png', 'spurdo'],
wat: [':wat:', 'http://i61.tinypic.com/34h7udk.png', 'wat'],
tru: [':tru:', 'http://i61.tinypic.com/2ut6u6g.png', 'tru'],
egg: [':egg:', 'http://i.imgur.com/Xro7lrY.png', 'egg'],
isay: [':isay:', 'http://i57.tinypic.com/2mouzw4.gif', 'isay'],
cute: [':cute:', 'http://i60.tinypic.com/4g3y88.png', 'cute'],
pointy: [':pointy:', 'http://i57.tinypic.com/o547r8.gif', 'pointy'],
beet: [':beet:', 'http://i59.tinypic.com/6fs300.png', 'beet'],
bacon: [':bacon:', 'http://i58.tinypic.com/8xn711.png', 'bacon'],
hangon: [':hangon:', 'http://i62.tinypic.com/2ihxrbp.png', 'hangon'],
laul: [':laul:', 'http://i61.tinypic.com/mtt4zk.png', 'laul'],
damon: [':damon:', 'http://i62.tinypic.com/343smxf.png', 'damon'],
foff: [':foff:', 'http://i58.tinypic.com/25ks8c5.png', 'foff'],
jazz: [':jazz:', 'http://i.imgur.com/YMKJdXo.png', 'jazz'],
quebec: [':quebec:', 'http://i.imgur.com/gpxdYTQ.png', 'quebec'],
gws: [':gws:', 'http://i.imgur.com/0D0VMkx.png', 'gws'],
neckbeard: [':neckbeard:', 'http://i57.tinypic.com/iqamad.png', 'neckbeard'],
troll: [':troll:', 'http://i58.tinypic.com/13zcxt1.png', 'troll'],
bunny: [':bunny:', 'http://i58.tinypic.com/6ieiqb.png', 'bunny'],
dew: [':dew:', 'http://i57.tinypic.com/sdn0ok.png', 'dew'],
doritos: [':doritos:', 'http://i62.tinypic.com/1pxno3.png', 'doritos'],
frogcry1: [':frogcry1:', 'http://i62.tinypic.com/2mniqlj.png', 'frogcry1'],
frogcry2: [':frogcry2:', 'http://i57.tinypic.com/2585ees.png', 'frogcry2'],
bshark: [':bshark:', 'http://i59.tinypic.com/2qu6qdu.png', 'bshark'],
banana: [':banana:', 'http://i60.tinypic.com/25auiky.png', 'banana'],
consider: [':consider:', 'http://i62.tinypic.com/1z20r39.png', 'consider'],
hlaugh: [':hlaugh:', 'http://i59.tinypic.com/24vnq4y.png', 'hlaugh'],
madman: [':madman:', 'http://i62.tinypic.com/2d1wbro.png', 'madman'],
eating: [':eating:', 'http://i59.tinypic.com/2962fya.png', 'eating'],
mpizza: [':mpizza:', 'http://i61.tinypic.com/w2h8p1.png', 'mpizza'],
creepsmile: [':creepsmile:', 'http://i61.tinypic.com/a40i3b.png', 'creepsmile'],
allyours: [':allyours:', 'http://i61.tinypic.com/2i1egzl.png', 'allyours'],
heythere: [':heythere:', 'http://i60.tinypic.com/vxy9sh.png', 'heythere'],
disgust: [':disgust:', 'http://i59.tinypic.com/nnjll1.png', 'disgust'],
disgust2: [':disgust2:', 'http://i57.tinypic.com/qn92rr.png', 'disgust 2'],
canteven: [':canteven:', 'http://i60.tinypic.com/abk7.png', 'canteven'],
saddance: [':saddance:', 'http://i58.tinypic.com/70gzdf.png', 'saddance'],
alienfrog: [':alienfrog:', 'http://i59.tinypic.com/2zzmcuq.png', 'alienfrog'],
sadjello: [':sadjello:', 'http://i62.tinypic.com/2lnyel1.png', 'sadjello'],
dogfrog: [':dogfrog:', 'http://i59.tinypic.com/19mg5y.png', 'dogfrog'],
edd: [':edd:', 'http://i60.tinypic.com/28bf8gj.png', 'edd'],
cfrog: [':cfrog:', 'http://i62.tinypic.com/rkq3bs.png', 'cfrog'],
weed: [':weed:', 'http://i58.tinypic.com/2rzvse1.png', 'weed'],
roku: [':roku:', 'http://i59.tinypic.com/9u8008.png', 'roku'],
nokia: [':nokia:', 'http://i57.tinypic.com/33a43z8.jpg', 'nokia'],
spidey: [':spidey:', 'http://i58.tinypic.com/2116k9s.png', 'spidey'],
winner: [':winner:', 'http://i61.tinypic.com/2l9c8g.png', 'winner'],
bird: [':bird:', 'http://i57.tinypic.com/e96iy8.png', 'bird'],
bang: [':bang:', 'http://i59.tinypic.com/zlog1v.png', 'bang'],
feelgood: [':feelgood:', 'http://i61.tinypic.com/2mx3861.png', 'feelgood'],
annoyed: [':annoyed:', 'http://i61.tinypic.com/330crw8.png', 'annoyed'],
vannoyed: [':vannoyed:', 'http://i57.tinypic.com/2psovb9.png', 'vannoyed'],
fell: [':fell:', 'http://i58.tinypic.com/rvhgg6.png', 'fell'],
usure: [':usure:', 'http://i58.tinypic.com/2z7okk5.png', 'usure'],
pipe: [':pipe:', 'http://i57.tinypic.com/3165izb.png', 'pipe'],
sip2: [':sip2:', 'http://i62.tinypic.com/2luqses.png', 'sip2'],
butt: [':butt:', 'http://i62.tinypic.com/mjb9jd.png', 'butt'],
notpleased: [':notpleased:', 'http://i61.tinypic.com/6tijao.png', 'notpleased'],
disdain: [':disdain:', 'http://i58.tinypic.com/331oc4y.png', 'disdain'],
bman: [':bman:', 'http://i61.tinypic.com/116m3i9.png', 'bman'],
smugfeel: [':smugfeel:', 'http://i62.tinypic.com/157kux5.jpg', 'smugfeel'],
head: [':head:', 'http://i59.tinypic.com/9sfekg.png', 'head'],
fack: [':fack:', 'http://i59.tinypic.com/20u8qcz.png', 'fack'],
cryin: [':cryin:', 'http://i58.tinypic.com/fdwn0o.png', 'cryin'],
cwofl: [':cwofl:', 'http://i60.tinypic.com/2gwvmts.png', 'cwofl'],
madwofl: [':madwofl:', 'http://i57.tinypic.com/insemu.png', 'madwofl'],
guilty: [':guilty:', 'http://i58.tinypic.com/2jeogtd.png', 'guilty'],
mellow: [':mellow:', 'http://i58.tinypic.com/2zqd92p.png', 'mellow'],
dealw: [':dealw:', 'http://i62.tinypic.com/31314sg.png', 'dealw'],
heman: [':heman:', 'http://i61.tinypic.com/35ivon7.png', 'heman'],
bother: [':bother:', 'http://i58.tinypic.com/2e181ap.png', 'bother'],
grin: [':grin:', 'http://i59.tinypic.com/14djdjl.png', 'grin'],
muchwow: [':muchwow:', 'http://i62.tinypic.com/2rrt8p0.png', 'muchwow'],
stepup: [':stepup:', 'http://i60.tinypic.com/x3acnn.png', 'stepup'],
zerolol: [':zerolol:', 'http://i57.tinypic.com/2llzlnl.png', 'zerolol'],
biggrin: [':biggrin:', 'http://i62.tinypic.com/sfgdqx.png', 'biggrin'],
iamworry: [':iamworry:', 'http://i62.tinypic.com/r0dn4m.png', 'iamworry'],
nope: [':nope:', 'http://i58.tinypic.com/2mg2mpk.png', 'nope'],
krabs: [':krabs:', 'http://i61.tinypic.com/353b5ht.png', 'krabs'],
feelsgood: [':feelsgood:', 'http://i61.tinypic.com/1z4v38p.png', 'feelsgood'],
sanicpepe: [':sanicpepe:', 'http://i61.tinypic.com/2hdmr2f.png', 'sanicpepe'],
normalsmug: [':normalsmug:', 'http://i58.tinypic.com/2s0k8hs.png', 'normalsmug'],
nervous: [':nervous:', 'http://i60.tinypic.com/ae1n5y.png', 'nervous'],
escalation: [':escalation:', 'http://i59.tinypic.com/148pzl2.png', 'escalation'],
terror: [':terror:', 'http://i58.tinypic.com/2uqoo0k.png', 'terror'],
rageon: [':rageon:', 'http://i57.tinypic.com/flj628.png', 'rageon'],
noclothes: [':noclothes:', 'http://i61.tinypic.com/2hh2361.png', 'noclothes'],
waifoos: [':waifoos:', 'http://i57.tinypic.com/2cehr0o.png', 'waifoos'],
hypetrain: [':hypetrain:', 'http://i61.tinypic.com/3448old.png', 'hypetrain'],
bigxd: [':bigxd:', 'http://i59.tinypic.com/154d8bd.png', 'bigxd'],
fonz: [':fonz:', 'http://i61.tinypic.com/2mnhyld.png', 'fonz'],
mrbean: [':mrbean:', 'http://i61.tinypic.com/1127csk.png', 'mr bean'],
mlady: [':mlady:', 'http://i57.tinypic.com/1zf7vpv.gif', '\'mlady'],
lick: [':lick:', 'http://i57.tinypic.com/208w9j9.png', 'lick'],
nogf: [':nogf:', 'http://i58.tinypic.com/1191f7o.png', 'nogf'],
mint: [':mint:', 'http://i60.tinypic.com/2hzkc5y.png', 'mint'],
devious: [':devious:', 'http://i61.tinypic.com/ol00h3.png', 'devious'],
babyfrogs: [':babyfrogs:', 'http://i58.tinypic.com/5zh7o7.png', 'baby frogs'],
rlpepe: [':rlpepe:', 'http://i61.tinypic.com/25sszo5.png', 'rlpepe'],
besrs: [':besrs:', 'http://i60.tinypic.com/2gtruyd.png', 'besrs'],
cri: [':cri:', 'http://i59.tinypic.com/avj1bq.png', 'cri'],
patrick: [':patrick:', 'http://i58.tinypic.com/ricfet.png', 'patrick'],
standbuy: [':standbuy:', 'http://i61.tinypic.com/2ijt75c.png', 'stand buy'],
notgood: [':notgood:', 'http://i62.tinypic.com/swtet1.jpg', 'not good'],
confident: [':confident:', 'http://i59.tinypic.com/znwqjq.jpg', 'confident'],
cripepe: [':cripepe:', 'http://i58.tinypic.com/2ldbla0.png', 'cri pepe'],
ebinpepe: [':ebinpepe:', 'http://i57.tinypic.com/2mrxj05.png', 'ebin pepe'],
greedypepe: [':greedypepe:', 'http://i59.tinypic.com/k3tcth.png', 'greedy pepe'],
disgust3: [':disgust3:', 'http://i61.tinypic.com/fa90t0.png', 'disgust 3'],
nou: [':nou:', 'http://i60.tinypic.com/n39miv.png', 'nou'],
inspace: [':inspace:', 'http://i59.tinypic.com/25uo7wy.png', 'inspace'],
disgust4: [':disgust4:', 'http://i59.tinypic.com/33aayxd.png', 'disgust 4'],
spooky: [':spooky:', 'http://i59.tinypic.com/2nali87.jpg', 'spooky skelly'],
left: [':left:', 'http://i60.tinypic.com/fjnxig.png', 'left beef'],
dance: [':bdance:', 'http://i57.tinypic.com/ilwzm1.jpg', 'balloon dance'],
froghue: [':fhue:', 'http://i58.tinypic.com/16awhog.png', 'frog hue'],
spin: [':spin:', 'http://i57.tinypic.com/73fe44.jpg', 'spinning'],
fam: [':fam:', 'http://i62.tinypic.com/343orvo.png', 'fam'],
brilliant: [':brill:', 'http://i59.tinypic.com/28h3dc8.png', 'brilliant'],
sharkfrog: [':sfrog:', 'http://i60.tinypic.com/zojamb.png', 'shark frog'],
iduck: [':iduck:', 'http://i60.tinypic.com/zstwzt.png', 'inverted duck'],
happen: [':happen:', 'http://i59.tinypic.com/2rzyzjm.jpg', 'happening'],
winner2: [':winner2:', 'http://i.imgur.com/cFwUmzM.gif', 'content aware WINNER'],
/*chuck: [':chuck:', 'http://i.imgur.com/DZ2pIWf.gif', 'chuck'],
chuck2: [':chuck2:', 'http://i.imgur.com/7WB6Gic.gif', 'chuck2'],
DOXXXXXXED: [':DOXXXXXXED:', 'http://i.imgur.com/y7eyps0.png', 'DOXXXXXXED'],
toazuka: [':toazuka:', 'http://i.imgur.com/VQ9qxQE.png', 'toazuka'],
ttfail: [':ttfail:', 'http://i.imgur.com/eWaObkM.png', 'ttfail'],*/
jew: [':jew:', 'http://i.imgur.com/jowqkg9.gif', 'jew'], //100px
//oldjew: [':oldjew:', 'http://i.imgur.com/pz0mxbA.gif', 'oldjew'], //200px
/*ttjew: [':ttjew:', 'http://i.imgur.com/xeYRU5O.gif', 'ttjew'],
samefag: [':samefag:', 'http://i.imgur.com/bLXx0AX.gif', 'samefag'],
mofo007: [':007mofo:', 'http://i.imgur.com/hr0aB6M.png', '007mofo'],*/
muricaflag: [':muricaflag:', 'http://i.imgur.com/Sy9vZNX.gif', 'muricaflag'],
virus: [':virus:', 'http://i.imgur.com/kZYR3oJ.gif', 'virus'],
/*unsettling: [':unsettling:', 'http://i.imgur.com/C5qQpQR.gif', 'unsettling'],
lennygif: [':lennygif:', 'http://i.imgur.com/D18PxsO.gif', 'lennygif'],
bummer: [':bummer:', 'http://i58.tinypic.com/2zqd92p.png', 'bummer'],*/
damit: [':damit:', 'http://i62.tinypic.com/25sx1kx.png', 'damit'],
spaghetti: [':spaghetti:', 'http://i60.tinypic.com/9vicg9.png', 'mom\'s spaghetti'],
spaghett: [':spaghett:', 'http://i60.tinypic.com/2rptelg.png', 'spaghett!'],
joker: [':joker:', 'http://i57.tinypic.com/25ji1ww.png', "joker"],
ghostpepe: [':gpepe:', 'http://i62.tinypic.com/fkqgr5.png', "ghost pepe"],
sexypepe: [':spepe:', 'http://i60.tinypic.com/2r5qpkz.jpg', "sexy pepe"],
straightd: [':sdubs:', 'http://i59.tinypic.com/6od98l.jpg', "straight outta doubles"],
uglypepe: [':upepe:', 'http://i61.tinypic.com/2qiv800.jpg', "ugly pepe"],
leetpepe: [':1337pepe:', 'http://i.imgur.com/TgrYBQP.gif', "1337 pepe"],
seizurepepe: [':seizurepepe:', 'http://i.imgur.com/Xu5UZpk.gif', "seizure pepe"],
pepeoveryou: [':pepe>you:', 'http://i.imgur.com/5fDk6Z1.gif', "rare pepe > you"],
pepesi: [':pepesi:', 'http://i.imgur.com/bPKbLTq.gif', "PEPEsi"],
pepicasso: [':pepicasso:', 'http://i.imgur.com/rFDnOk7.gif', "peekasso"],
pepe007: [':pepe007:', 'http://i.imgur.com/vRgJvjh.gif', "pepe 007"],
pepeflash: [':pepeflash:', 'http://i.imgur.com/bqGHiNG.gif', "pepe flash"],
peperun: [':peperun:', 'http://i.imgur.com/3xLRJRC.gif', "pepe run"],
pepenaked: [':pepenaked:', 'http://i.imgur.com/O9moFkn.gif', "pepe naked"]

};
///////

///////SPECIAL TEXT THAT NEEDS TO BE FORMATTED
var maymay = {
sombre: ['sombre', '[font=monospace][size=14][b][color=red]S[/color] [color=orange]O[/color] [color=yellow]M[/color] [color=blue]B[/color] [color=indigo]R[/color] [color=violet]E[/color][/b][/size][/font]'],
doors: ['the doors', '[i]the doors[/i]'],
hawk: ['cantstopthehawk', '[size=15] [i] [b] [blur] [color=#fbca33] C A N T S T O P T H E H A W K [/size] [/color] [/i] [/b] [/blur]'],
donger: ['donger', '[size=29][b][font=impact]DONGER[/font][/b][/size]'],
esca: ['that escalated', '[size=20][font=impact]THAT ESCALATED[/font][/size]'],
fast: ['gottagofast', '[color=green][font=comic sans ms][size=18][i]Gotta Go Fast !!![/i][/size][/font][/color]'],
minty: ['minty', '[img]http://i60.tinypic.com/2hzkc5y.png[/img][blur][b][color=#98FF98] MINTY[/color][/b][/blur]'],
lenny: [':lenny:', '( ͡° ͜ʖ ͡°)'], //cancer during browser edit (firefox)
dongers: [':raise:', 'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ'], // cancer
hamster: [':hamster:', '(•ω•)'],
greeneggs: [':geggs:', '[b][color=green]GREEN EGGS[/color][/b] [size=10][i]And[/i][/size] [size=16][b][i][color=black][u]THOUGHTS OF SUICIDE[/u][/color][/i][/b][/size] [size=14]( ͡° ʖ̯ ͡°)[/size]'], //cancer
rekt: [':rekt:', '[size=19][font=impact][blur][b][color=red][X] REKT [ ] NOT REKT[/color][/b][/blur][/font][/size]'],
danked: [':danked:', '[color=red][b](USER WAS BANNED FOR THIS DANK)[/b][/color]'],
blazed420: ['420 blaze it', '[b][font=Comic Sans MS][color=#FF0000]4[/color][color=#FD2A00]2[/color][color=#FC5500]0[/color] [color=#F9AA00]B[/color][color=#F8D400]L[/color][color=#F6FF00]A[/color][color=#CDFF00]Z[/color][color=#A4FF00]E[/color] [color=#52FF00]I[/color][color=#29FF00]T[/color][/font][/b]'],
checkem: [':checkem:', '[size=15][font=impact]C[/font][/size][size=20][font=impact]H[/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]C[/font][/size][size=15][font=impact]K[/font][/size][size=20][font=impact] [/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]M[/font][/size]'],
ohshit: [':ohshi:', '[b][font=Comic Sans MS][color=#665203]O[/color][color=#6B5304]O[/color][color=#715405]O[/color][color=#765506]O[/color][color=#7C5708]H[/color] [color=#87590B]S[/color][color=#765109]H[/color][color=#664808]I[/color][color=#563F06]I[/color][color=#463605]I[/color][color=#362D03]T[/color][/font][/b]'],
ieatass: [':ieat:', '[i]ケツを食ベる[/i]'],
olaf: [':olaf:', '[b][font=Courier New][size=16][color=#3BED44]h[/color][color=#1137CE]e[/color][color=#6D2645]l[/color][color=#4B20D2]o[/color] [color=#BEF7E8]m[/color][color=#66D74E]y[/color] [color=#950C47]n[/color][color=#9F65A4]a[/color][color=#196650]m[/color][color=#88DA22]e[/color] [color=#BD7B33]i[/color][color=#ED8A9F]s[/color] [color=#4BD338]o[/color][color=#6B6743]l[/color][color=#47D647]a[/color][color=#5D1908]f[/color][/size][/font][/b]'],
yes: [':yes:', '[size=6]yes,[/size] yes YES [size=26]YES[/size]'],
hitler: [':hitler:', '[IMG]http://i.imgur.com/jowqkg9.gif[/IMG] [size=26][b]ADOLF NITLER CONFIRMED FOR JEW[/b][/size] [IMG]http://i.imgur.com/jowqkg9.gif[/IMG]'],
anonymoose: [':anonymoose:', '[b][font=Comic Sans MS][color=#3BED44]A[/color][color=#1137CE]N[/color][color=#6D2645]O[/color][color=#4B20D2]N[/color][color=#C9EE35]Y[/color][color=#BEF7E8]M[/color][color=#66D74E]O[/color][color=#702B82]O[/color][color=#950C47]S[/color][color=#9F65A4]E[/color] [color=#88DA22]W[/color][color=#332E39]E[/color] [color=#ED8A9F]O[/color][color=#86306E]N[/color][color=#4BD338]L[/color][color=#6B6743]Y[/color] [color=#5D1908]S[/color][color=#3764FE]W[/color][color=#19A9D8]A[/color][color=#346143]L[/color][color=#E3A6B6]L[/color][color=#5447A3]O[/color][color=#21032A]W[/color] [color=#6183A4]N[/color][color=#0E4A2B]E[/color][color=#06790B]V[/color][color=#19B543]E[/color][color=#08930B]R[/color] [color=#B5AE1A]S[/color][color=#406842]P[/color][color=#C3F745]I[/color][color=#DC2D64]T[/color][/font][/b]'],
ripped: [':rip:', '[b][font=Impact][size=20][color=#3BED44]r[/color][color=#1137CE]i[/color][color=#6D2645]p[/color] [color=#C9EE35]i[/color][color=#BEF7E8]n[/color] [color=#702B82]p[/color][color=#950C47]i[/color][color=#9F65A4]e[/color][color=#196650]c[/color][color=#88DA22]e[/color][color=#332E39]s[/color][/size][/font][/b]'],
toa: ['toa', '[img]http://i61.tinypic.com/cmjk6.png[/img]'],
murica: ['murica', '[b][font=Comic Sans MS][color=#FF0000]M[/color][color=#FF5555]U[/color][color=#FFAAAA]R[/color][color=#FFFFFF]I[/color][color=#AAAAFF]C[/color][color=#5555FF]A[/color][/font][/b]'],
lenny2: [':lenny2:', '( ͡ຈ╭͜ʖ╮͡ຈ )'], //cancer during browser edit (firefox)
lenny3: [':lenny3:', '( ͡ಠ ʖ̯ ͡ಠ)'], //cancer during browser edit (firefox)
lenny4: [':lenny4:', '( ͡~ ͜ʖ ͡~)'], //cancer during browser edit (firefox)
lenny5: [':lenny5:', '( ͡~ ͜ʖ ͡°)'], //cancer during browser edit (firefox)
lenny6: [':lenny6:', '( ͠° ͟ʖ ͡°)'], //cancer during browser edit (firefox)
lenny7: [':lenny7:', '( ͡ʘ╭͜ʖ╮͡ʘ)'], //cancer during browser edit (firefox)
lenny8: [':lenny8:', '( ͝סּ ͜ʖ͡סּ)'], //cancer during browser edit (firefox)
lenny9: [':lenny9:', '( ͡ᵔ ͜ʖ ͡ᵔ )'], //cancer during browser edit (firefox)
lenny10: [':lenny10:', '( ͡^ ͜ʖ ͡^ )'], //cancer during browser edit (firefox)
lenny11: [':lenny11:', '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]'], //cancer during browser edit (firefox)
lenny12: [':lenny12:', '( ͡ຈ ͜ʖ ͡ຈ)'], //cancer during browser edit (firefox)
lenny13: [':lenny13:', '( ͡° ʖ̯ ͡°)'], //cancer during browser edit (firefox)
lenny14: [':lenny14:', '( ͡ ͜ʖ ͡ )'], //cancer during browser edit (firefox)
lenny15: [':lenny15:', '(☞ ͡° ͜ʖ ͡°)☞'], //cancer during browser edit (firefox)
lenny16: [':lenny16:', 'ᕕ( ͡° ͜ʖ ͡° )ᕗ'], //cancer during browser edit (firefox)
lenny17: [':lenny17:', '( ͡°╭͜ʖ╮͡° )'], //cancer during browser edit (firefox)
lenny18: [':lenny18:', '( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'], //cancer during browser edit (firefox)
lenny19: [':lenny19:', '(つ ͡° ͜ʖ ͡°)つ'], //cancer during browser edit (firefox)
lenny20: [':lenny20:', '( ͡⚆ ͜ʖ ͡⚆)'], //cancer during browser edit (firefox)
lenny21: [':lenny21:', '¯\_( ͠° ͟ʖ °͠ )_/¯'], //cancer during browser edit (firefox)
lenny22: [':lenny22:', '(▀ ͜ʖ ͡°)'], //cancer during browser edit (firefox)
raise2: [':raise2:', 'ヽ༼ຈل͜ຈ༽ﾉ гคเรє ๏г ๔เє ヽ༼ຈل͜ຈ༽ﾉ'], //cancer during browser edit (firefox)
nyan: [':nyan:', '~=[,,_,,]:3'],
woop: [':woop:', "[ \\[size=10]\\[/size][size=9]\\[/size][size=8]\\[/size][size=7]\\[/size][size=6]\\[/size][size=7]\\[/size][size=8]\\[/size][size=9]\\[/size][size=10]\\[/size]\\ ]"], //dupe the backslashes
seed: [':seed:', "[color=red][b]EVEN NOW... THE EVIL SEED OF WHAT YOU'VE DONE GERMINATES WITHIN YOU[/b][/color]"],
/*filter1: ['shockey', "Phantasmagoria, the malformation"],
filter2: ['jesus', "dad"],
filter3: ['god', "steve"],
filter4: ['inhumanpwnage', "IP is gay"],
filter5: ['Aureus', "incest"],
filter6: ['rafa', "Dr. Feelgood"],
filter7: ['Kaffeinated', "Walter White"],
filter8: ['Big Jilm', "DARK MEAT"],
filter9: ['tyx', "Tyàrkrellik, the atheist sex steve"],
filter10: ['aim', "mahboi"],
filter11: ['TechnologicalTerror', "Biological Error"],
filter12: ['tech', "Biological Error"],
filter13: ['Aero', "that guy nobody gives half a shit about"],
filter14: ['JV', "Gosh, so Many - Posts !"],
filter15: ['xx', "MODS PLEASE BAN ME I SUCK C[b][/b]O[b][/b]C[b][/b]K[b][/b]S"],
filter16: ['Aisling', "pegging fetishist"],
filter17: ['hasher', "Mr Dacker himself"],
filter18: ['blaze', "porn artist"],
filter19: ['vine', "autism"],
filter20: ['bbc', "Big Black Cock"],
filter21: ['Ultimato', "The Mongolian Moob Monster"],
filter22: ['wiab', "D[b][/b]i[b][/b]c[b][/b]kInABox"],
filter23: ['WolfInABox', "D[b][/b]i[b][/b]c[b][/b]kInABox"],
filter24: ['Mercenary', "dick mongler"],
filter25: ['penis', "gadonkadonk"],
filter26: ['dick', "gadonkadonk"],
filter27: ['Black Dragon', "Big Dick"],
filter28: ['ACV', "KKK"],
filter29: ['leo', "Soulja Boy"],
filter30: ['omar waly', "Omar \"Run with the cash\" Waly"]/*,
filter31: ['JV', "Gosh, so Many - Posts !"],
filter32: ['JV', "Gosh, so Many - Posts !"],
filter33: ['JV', "Gosh, so Many - Posts !"],
filter34: ['JV', "Gosh, so Many - Posts !"]*/

//do not enable (bad idea) < you're a bad idea < when you were born your mom said you were a bad idea
/*
startbold: [':startbold:', '[b][img][/b][/img]'],
endbold: [':endbold:', '[img][b][/img][/b]'],
startitalic: [':startitalic:', '[i][img][/i][/img]'],
enditalic: [':enditalic:', '[img][i][/img][/i]'],
starts: [':starts:', '[u][img][/u][/img]'],
ends: [':ends:', '[img][u][/img][/u]']
*/
};
///////

///////EXTRA FILTERING CODE
var spec_code = [
  '/exit', '/away', '/abs', '[code]'
];
var swear_code = [
  '[b][/b]', '.'
];
var link_code = [
  'http://', 'www.', 'https://'
];
///////

///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = [
  "[color=#789922]",
  "[/color]",
  "[b][color=#AA0000]",
  "[/color][/b]"
];
///////

///////FORTICONS
var img_tag = ["[img]", "[/img]"];
///////

///////CSS STYLE STRINGS
var cssChkbox = "font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;";
var cssButton = "font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;";
var cssMsg = "color:white; margin-right:8px; margin-left:5px;";
var cssLine = "color:black;";
var cssChat = "overflow-x: hidden; left:141px;"; /// white-space: nowrap; 
///////

///////CODE FOR EXTRA SMILIE INJECT
var smilie_header_html = "<option value=''>View more Emoticons</option><option value='0'>Smilies 1</option><option value='1'>Swearify</option>";
var td_base = "<td><a href='javascript:insert_chatboxsmilie(_smilie)'><img title='_title' src='_link' alt='_title' border='0'></a></td>";
var td_array = "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";

var quote = '"';

if (document.getElementsByName("categ").length == 1) {
  document.getElementsByName("categ")[0].innerHTML = smilie_header_html; /// add the Swearify selection
}
///////

///////VAR FOR FIXING THE POST PAGE
var post_button_num = 0;
///////

///////CHARCOUNT MERGE
var cssLabel = "color: grey;font-size: 12px;";

var loc = "";
var refined_loc = "";
var cssTd = "";
///////

///////////////////// http://stackoverflow.com/a/6969486

function escape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/////////////////////

///////////////////// http://stackoverflow.com/a/274094

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

String.prototype.regexLastIndexOf = function(regex, startpos) {
    regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
    if(typeof (startpos) == "undefined") {
        startpos = this.length;
    } else if(startpos < 0) {
        startpos = 0;
    }
    var stringToWorkWith = this.substring(0, startpos + 1);
    var lastIndexOf = -1;
    var nextStop = 0;
    while((result = regex.exec(stringToWorkWith)) != null) {
        lastIndexOf = result.index;
        regex.lastIndex = ++nextStop;
    }
    return lastIndexOf;
}

///////////////////// MANAGES THE SWEAR FILTERING
function filter_swears_chat() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    
    var spec_switch = 0;
    //special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1) {
      spec_switch = 1;
    }
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function filter_swears_bchat() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("message").value;
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    
    var spec_switch = 0;
    //special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1) {
      spec_switch = 1;
    }
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[spec_switch] + "$2"+ swear_code[spec_switch] + "$3" + swear_code[spec_switch] + "$4" + swear_code[spec_switch] + "$5" + swear_code[spec_switch] + "$6" + swear_code[spec_switch] + "$7" + swear_code[spec_switch] + "$8" + swear_code[spec_switch] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    document.getElementById("message").value = new_msg;
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = ""; //this may not be necessary i'm not 100% sure
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    // http://stackoverflow.com/a/500459
    
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);    
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
      switch (swear_noregex[i].length) {
        default:
          new_msg = old_msg;
          break;
        case 2:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2");
          break;
        case 3:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3");
          break;
        case 4:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4");
          break;
        case 5:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5");
          break;
        case 6:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6");
          break;
        case 7:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7");
          break;
        case 8:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8");
          break;
        case 9:
          new_msg = old_msg.replace(swear_words[i], "$1" + swear_code[0] + "$2"+ swear_code[0] + "$3" + swear_code[0] + "$4" + swear_code[0] + "$5" + swear_code[0] + "$6" + swear_code[0] + "$7" + swear_code[0] + "$8" + swear_code[0] + "$9");
          break;
      }
    } else {
      new_msg = old_msg;
    }
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      document.getElementsByTagName("textarea")[0].value = new_msg;
    }
    else {
      document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
}
/////////////////////

///////////////////// MANAGES THE EMULATION OF GREENTEXT
function greentext_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function greentext_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("message").value = new_msg;
  }
}

function greentext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf(">");
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
/////////////////////

///////////////////// MANAGES THE EMULATION OF REDTEXT
function redtext_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
  if(old_msg.length >= 1){
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function redtext_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
 if(old_msg.length >= 1){
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("message").value = new_msg;
    }
  }
}

function redtext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf("<");
    if(msg_ray[i].length >= 1){
      if (index_num === old_msg.length - 1) {
        msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
        if (document.getElementsByTagName("textarea")[1] === undefined) {
          document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
        }
        else {
          document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
        }
      }
    }
  }
}
/////////////////////

function leet_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    //new_msg = new_msg.replace(/b/gi, 'b');
    //new_msg = new_msg.replace(/c/gi, 'c');
    //new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, '3');
    //new_msg = new_msg.replace(/f/gi, 'f');
    new_msg = new_msg.replace(/g/gi, '6');
    //new_msg = new_msg.replace(/h/gi, 'h');
    new_msg = new_msg.replace(/i/gi, '1');
    //new_msg = new_msg.replace(/j/gi, 'j');
    //new_msg = new_msg.replace(/k/gi, 'k');
    //new_msg = new_msg.replace(/l/gi, 'l');
    //new_msg = new_msg.replace(/m/gi, 'm');
    //new_msg = new_msg.replace(/n/gi, 'n');
    new_msg = new_msg.replace(/o/gi, '0');
    //new_msg = new_msg.replace(/p/gi, 'p');
    //new_msg = new_msg.replace(/q/gi, 'q');
    //new_msg = new_msg.replace(/r/gi, 'r');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    //new_msg = new_msg.replace(/u/gi, 'u');
    //new_msg = new_msg.replace(/v/gi, 'v');
    //new_msg = new_msg.replace(/w/gi, 'w');
    //new_msg = new_msg.replace(/x/gi, 'x');
    //new_msg = new_msg.replace(/y/gi, 'y');
    //new_msg = new_msg.replace(/z/gi, 'z');
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function leet_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    //new_msg = new_msg.replace(/b/gi, 'b');
    //new_msg = new_msg.replace(/c/gi, 'c');
    //new_msg = new_msg.replace(/d/gi, 'd');
    new_msg = new_msg.replace(/e/gi, '3');
    //new_msg = new_msg.replace(/f/gi, 'f');
    new_msg = new_msg.replace(/g/gi, '6');
    //new_msg = new_msg.replace(/h/gi, 'h');
    new_msg = new_msg.replace(/i/gi, '1');
    //new_msg = new_msg.replace(/j/gi, 'j');
    //new_msg = new_msg.replace(/k/gi, 'k');
    //new_msg = new_msg.replace(/l/gi, 'l');
    //new_msg = new_msg.replace(/m/gi, 'm');
    //new_msg = new_msg.replace(/n/gi, 'n');
    new_msg = new_msg.replace(/o/gi, '0');
    //new_msg = new_msg.replace(/p/gi, 'p');
    //new_msg = new_msg.replace(/q/gi, 'q');
    //new_msg = new_msg.replace(/r/gi, 'r');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    //new_msg = new_msg.replace(/u/gi, 'u');
    //new_msg = new_msg.replace(/v/gi, 'v');
    //new_msg = new_msg.replace(/w/gi, 'w');
    //new_msg = new_msg.replace(/x/gi, 'x');
    //new_msg = new_msg.replace(/y/gi, 'y');
    //new_msg = new_msg.replace(/z/gi, 'z');
    document.getElementById("message").value = new_msg;
  }
}

function leet_post() {
  var old_msg = ""; //this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  // http://stackoverflow.com/a/500459
  
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      //new_msg = new_msg.replace(/b/gi, 'b');
      //new_msg = new_msg.replace(/c/gi, 'c');
      //new_msg = new_msg.replace(/d/gi, 'd');
      new_msg = new_msg.replace(/e/gi, '3');
      //new_msg = new_msg.replace(/f/gi, 'f');
      new_msg = new_msg.replace(/g/gi, '6');
      //new_msg = new_msg.replace(/h/gi, 'h');
      new_msg = new_msg.replace(/i/gi, '1');
      //new_msg = new_msg.replace(/j/gi, 'j');
      //new_msg = new_msg.replace(/k/gi, 'k');
      //new_msg = new_msg.replace(/l/gi, 'l');
      //new_msg = new_msg.replace(/m/gi, 'm');
      //new_msg = new_msg.replace(/n/gi, 'n');
      new_msg = new_msg.replace(/o/gi, '0');
      //new_msg = new_msg.replace(/p/gi, 'p');
      //new_msg = new_msg.replace(/q/gi, 'q');
      //new_msg = new_msg.replace(/r/gi, 'r');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      //new_msg = new_msg.replace(/u/gi, 'u');
      //new_msg = new_msg.replace(/v/gi, 'v');
      //new_msg = new_msg.replace(/w/gi, 'w');
      //new_msg = new_msg.replace(/x/gi, 'x');
      //new_msg = new_msg.replace(/y/gi, 'y');
      //new_msg = new_msg.replace(/z/gi, 'z');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
///////////////////// MANAGES THE RAINBOW TEXT SYSTEM
function rainbow_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  
    new_msg = rainbowText(old_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  
}

function rainbow_bchat() {
  var old_msg =document.getElementById("message").value;
  
    new_msg = rainbowText(old_msg);
    document.getElementById("message").value = new_msg;
}

function rainbow_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
/////////////////////

/////////////////////RANDOM CHARACTER COLOR
function random_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rn /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rn /i, '');
    new_msg = randomText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function random_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/rn /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/rn /i, '');
    new_msg = randomText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function random_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}
/////////////////////

////////////////////GRADIENT MSG COLOR
function gradient_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/gd /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/gd /i, '');
    new_msg = gradientText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function gradient_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/gd /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/gd /i, '');
    new_msg = gradientText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function gradient_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}

////////////////////

////////////////////JAVASCRIPT SYNTAX HIGHLIGHTING

function js_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function js_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function js_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/js /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/js /i, '');
      msg_ray[i] = jsText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}

////////////////////

////////////////////JAVA SYNTAX HIGHLIGHTING

function java_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function java_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function java_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/java /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/java /i, '');
      msg_ray[i] = javaText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}

////////////////////

////////////////////VBSCRIPT SYNTAX HIGHLIGHTING

function vbs_chat() {
  var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
  }
}

function vbs_bchat() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function vbs_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) {
    old_msg = document.getElementsByTagName("textarea")[0].value;
  }
  else {
    old_msg = document.getElementsByTagName("textarea")[1].value;
  }
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/vbs /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/vbs /i, '');
      msg_ray[i] = vbsText(msg_ray[i]);
      
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = msg_ray.join('<br />');
      }
      else {
        document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
    }
  }
}

////////////////////

/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM
function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k]
  })
} //////////http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key

function emoticon_chat() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    //console.log(values(emoticon)[i][0]);
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_bchat() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_post() {
  for (var i = 0; i < Object.keys(emoticon).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon)[i][0], "gi"), img_tag[0] + values(emoticon)[i][1] + img_tag[1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = new_msg;
      }
      else {
        document.getElementsByTagName("textarea")[1].value = new_msg;
      }
    }
  }
}
/////////////////////

/////////////////////MANAGES THE MAY MAY SYSTEM
function maymay_chat() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_bchat() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) {
      old_msg = document.getElementsByTagName("textarea")[0].value;
    }
    else {
      old_msg = document.getElementsByTagName("textarea")[1].value;
    }
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) {
        document.getElementsByTagName("textarea")[0].value = new_msg;
      }
      else {
        document.getElementsByTagName("textarea")[1].value = new_msg;
      }
    }
  }
}
/////////////////////

/////////////////////MANAGES THE EDITING OF CSS
function edit_css_chat() {
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].style.cssText = cssMsg;
  /// CSS for label that says "Message:"
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].innerHTML = "Message:";
  /// Edits innerHTML so theres no space between Message and the colon
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("submit_button").value = "SEND";
  /// CSS for Send button
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_members").style.cssText = cssLine;
  /// CSS for the line along the members and chatbox

  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox").style.cssText = cssChat;
  ///  CSS to eliminate chat glitching and shift over the chat messages a bit 

  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].innerHTML = "";
  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].style.width = "0px";
  /// CSS for removing a spacer; removing node diddnt work well so im just making it nonvisible        

  document.getElementById("frame_chatbox").contentWindow.document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  //// Move over the title "Chatbox" a bit
}

function edit_css_bchat() {
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].style.cssText = cssMsg;
  /// CSS for label that says "Message:"
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[4].innerHTML = "Message:";
  /// Edits innerHTML so theres no space between Message and the colon
  document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("submit_button").value = "SEND";
  /// CSS for Send button
  document.getElementById("chatbox_members").style.cssText = cssLine;
  /// CSS for the line along the members and chatbox

  document.getElementById("chatbox").style.cssText = cssChat;
  ///  CSS to eliminate chat glitching and shift over the chat messages a bit 

  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].innerHTML = "";
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[8].style.width = "0px";
  /// CSS for removing a spacer; removing node diddnt work well so im just making it nonvisible        

  document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  //// Move over the title "Chatbox" a bit
}
/////////////////////

/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW
function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp("_smilie", "gi"), smilie_code);
  change_this = change_this.replace(new RegExp("_title", "gi"), smilie_code.substr(1, smilie_code.length - 2)); ////could be smilie_text
  change_this = change_this.replace(new RegExp("_link", "gi"), smilie_url);
  return change_this;
}

function inject_smilie() {
  if(window.location.href === "http://aimgames.forummotion.com/post?categ=1&mode=smilies"){
    //window.moveTo(0, 0); 
    //window.resizeTo(screen.width, screen.height);
  }
  var get_place = document.getElementsByTagName("table")[2];
  if (get_place.innerHTML == "") {
    var the_body = document.createElement("tbody");

    get_place.appendChild(the_body);
    get_place.getElementsByTagName("tbody")[0].innerHTML = td_array;

    var counter = 0;
    var coconut = 0;

    for (var x = 0; x < Object.keys(emoticon).length; x++) {
      //console.log(counter + "   " + coconut + "   " + x);
      if (counter == 8) {
        counter = 0;
        coconut++;
        var the_tr = document.createElement("tr");
        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
      }
      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter].innerHTML = the_base(quote + values(emoticon)[x][0] + quote, values(emoticon)[x][1], values(emoticon)[x][2]);
      counter++;
    }
  }
}
/////////////////////

/////////////////////FIX POST PAGE CSS
function post_page_editor() {
  var clear = "";
  var hide = "display:none;";  
  
  if(post_button_num == 0){
    document.getElementById("text_edit").style.cssText = clear;
    document.getElementById("html_edit").style.cssText = hide;
  }else{
    document.getElementById("text_edit").style.cssText = hide;
    document.getElementById("html_edit").style.cssText = clear;
  }
  
  document.getElementById("text_editor_cmd_switchmode").addEventListener("click", function(){
    if(post_button_num == 0){
      post_button_num = 1; 
    }else if(post_button_num == 1){
      post_button_num = 0;
    }
  });
}
/////////////////////

function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = '; expires=' + date.toGMTString();
  } 
  else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}
  

/////////////////////INJECT BUTTON
function inject_button(){
  var where =  document.getElementById("frame_chatbox").contentWindow.document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName("tr")[0];
  var chil_where = where.children;
  
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "rainbow_button");
  where.insertBefore(the_body, chil_where[0]);
    
  where.getElementsByTagName("td")[0].innerHTML = '<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area" title="Rainbow" class="fontbutton" style="font-size: 14px;">Rb</label>';
 
  var what = document.getElementById("frame_chatbox").contentWindow.document.getElementById("click_area");
  var whot = document.getElementById("frame_chatbox").contentWindow.document.getElementById("format-rainbow");
  
  if(getCookie('CB_rainbow') === '1'){
    whot.checked = true;
  }else{
    whot.checked = false;
  }
  
  var clicked_css = 'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = ''; 
  
  what.addEventListener("click", function(){
    if(!whot.checked){
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_rainbow', '1', 1);
    }else{
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_rainbow', '0', 1);
    }
  });
}
////////////////////

/////////////////////RUNS SCRIPT

window.addEventListener('load', function() {/*shit goes down in here*/
  if (is.ie() || is.safari() || is.opera()) {
   alert("This browser is unsupported by Swearify.");
  }  
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) {
    if (window.location.pathname.length <= 1) {
      edit_css_chat(); /// This is done even when you aren't pressing keys            
    } else {
      edit_css_bchat();      
    }
    inject_button();
  } else {
    post_page_editor();
  }
}, false);

$(document).keypress(function(event){
    if (event.which === 13) { /// 13 is enter
      run()
    }
 })

function run() {
  if (document.getElementById("frame_chatbox") !== null || document.getElementById("message") !== null) { /// If we are either in the big chat window or on the main page. Nothing in this if statement will run if we aren't there
    if (window.location.pathname.length === 1) { /// Figure out which of the two we are in
      filter_swears_chat(); /// These are the functions that run through the text and see what to do
      greentext_chat(); ///
      emoticon_chat(); ///       
      maymay_chat(); /// 
      redtext_chat();
      leet_chat();
       if(getCookie('CB_rainbow') === '1'){
        rainbow_chat();
       }
      
      random_chat();
      gradient_chat();
      js_chat();
      vbs_chat();
      java_chat();
    } else { /// If we're here, that means we are on big chat window
      filter_swears_bchat();
      greentext_bchat();
      emoticon_bchat();
      maymay_bchat();
      redtext_bchat();
      leet_bchat();
       if(getCookie('CB_rainbow') === '1'){
        rainbow_bchat();
       }
      
      random_bchat();
      gradient_bchat();
      js_bchat();
      vbs_bchat();
      java_bchat();
    }
  } else {
    inject_smilie(); ///this has to be done b4
    /////////////////////////
    if (typeof document.getElementsByTagName("textarea")[1] === 'undefined') { ////PREVIEW PAGE
    loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];   
    refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
    }else{ //// QUICK REPLY
      loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1];  
      cssTd = "padding-top:5px;";
      var new_td = document.createElement("td");
      loc.appendChild(new_td).style.cssText = cssTd;
      refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName("td")[0];
    }    
    var element = document.createElement("label");
    refined_loc.appendChild(element).style.cssText = cssLabel;
    setInterval(function () {      
      var area = document.getElementsByTagName("textarea")[0];  ////this is preview window shit  
      if(typeof document.getElementsByTagName("textarea")[1] === 'object'){    ///if were not in preview window, we need to set some variables differently
        area.value = document.getElementsByTagName("textarea")[1].value;
      }  
      if(typeof area !== 'undefined'){    ////dont run this shit if it's undefined yo
        Countable.once(area, function (counter) {
          if(loc.getElementsByTagName("label")[0].innerHTML != values(counter)[4] + " characters"){
            loc.getElementsByTagName("label")[0].innerHTML = values(counter)[4] + " characters";
          }
          if(values(counter)[4] > 63500){ ////i dont really know the limit
            element.style.cssText += "color:red;";
          }else if(values(counter)[4] < 63500){
            element.style.cssText = cssLabel;
          }
        });  
      }
    }, 3000);
    ////////////////////////////////////////    
    var window_chk = 0; /// If we're here that means we are not on either the main screen or big chat window. So we must be posting....
    if (document.getElementsByTagName("textarea")[0] !== undefined || document.getElementsByTagName("textarea")[1] !== undefined) { /// Checks to make sure we are either browsing a topic (1) or on the preview page (0)
      if (document.getElementsByTagName("textarea")[1] !== undefined) { /// Then figures out which one it is
        window_chk = 1;
      }
      filter_swears_post(); /// Posting functions
      greentext_post(); ///            
      emoticon_post(); ///
      maymay_post(); ///
      redtext_post();
      leet_post();
      rainbow_post();
      random_post();
      gradient_post();
      js_post();
      vbs_post();
      java_post();
    }
  }
}
