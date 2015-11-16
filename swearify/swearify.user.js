// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     3.0.58
// @grant       none
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==
//////////////////////////////VERSIONING: X.X.XX
//////////////////////////////DO NOT CHANGE
///////
///////SMILY CODE, OBJECT SHIT
var twitch_e = [
  'http://i.imgur.com/QVo1c0T.png',
  'http://i.imgur.com/dqsKGP1.png',
  'http://i.imgur.com/TMRI0Fr.png',
  'http://i.imgur.com/h0KO0ck.png',
  'http://i.imgur.com/kXQMfGN.png',
  'http://i.imgur.com/fjAF7Gn.png',
  'http://i.imgur.com/mpiB56W.png',
  'http://i.imgur.com/l9Fc8Iz.png',
  'http://i.imgur.com/jpIcJYw.png',
  'http://i.imgur.com/sFDpEnU.png',
  'http://i.imgur.com/bigSl9z.png',
  'http://i.imgur.com/xlHLty3.png',
  'http://i.imgur.com/VHgWsRP.png',
  'http://i.imgur.com/MWNByGA.png',
  'http://i.imgur.com/hZtzWe0.png',
  'http://i.imgur.com/qct9HtP.png',
  'http://i.imgur.com/T8ClRIR.png',
  'http://i.imgur.com/K6WDnj4.png',
  'http://i.imgur.com/vt1K5Yh.png',
  'http://i.imgur.com/BZniZp1.png',
  'http://i.imgur.com/RzY2enR.png',
  'http://i.imgur.com/bigoSYK.png',
  'http://i.imgur.com/IwS3woc.png',
  'http://i.imgur.com/TZzL3wm.png',
  'http://i.imgur.com/DMcq2b1.png',
  'http://i.imgur.com/SVnhzxW.png',
  'http://i.imgur.com/TqLcXCZ.png',
  'http://i.imgur.com/FgSnuUT.png',
  'http://i.imgur.com/1Oo6VOZ.png',
  'http://i.imgur.com/SixnBY7.png',
  'http://i.imgur.com/QAohBGP.png',
  'http://i.imgur.com/hV3p3vl.png',
  'http://i.imgur.com/pd76rHs.png',
  'http://i.imgur.com/48wUf5T.png',
  'http://i.imgur.com/f5JHBlE.png',
  'http://i.imgur.com/OAJgNUc.png',
  'http://i.imgur.com/mrsxszB.png',
  'http://i.imgur.com/4jtscWh.png',
  'http://i.imgur.com/gL047DW.png',
  'http://i.imgur.com/08dRykj.png',
  'http://i.imgur.com/e24fWTM.png',
  'http://i.imgur.com/eoUXwyq.png',
  'http://i.imgur.com/XkcpCH0.png',
  'http://i.imgur.com/igqf4F7.png',
  'http://i.imgur.com/1FIWAkZ.png',
  'http://i.imgur.com/QCoGbFo.png',
  'http://i.imgur.com/Oc8V6Ol.png',
  'http://i.imgur.com/1J66LEi.png',
  'http://i.imgur.com/yLhzJqE.png',
  'http://i.imgur.com/EHL1jRs.png',
  'http://i.imgur.com/sYSV1kP.png',
  'http://i.imgur.com/bYX0oVc.png',
  'http://i.imgur.com/5CKJABf.png',
  'http://i.imgur.com/R9pZnfn.png',
  'http://i.imgur.com/4jXPQ84.png',
  'http://i.imgur.com/uxiLqoD.png',
  'http://i.imgur.com/No70nqx.png',
  'http://i.imgur.com/VjrlovL.png',
  'http://i.imgur.com/IGyy3DI.png',
  'http://i.imgur.com/YaZ09wG.png',
  'http://i.imgur.com/JS85Yx4.png',
  'http://i.imgur.com/BsI34Vl.png',
  'http://i.imgur.com/HSb7j1O.png',
  'http://i.imgur.com/a6kOlYr.png',
  'http://i.imgur.com/CVxpWeP.png',
  'http://i.imgur.com/ozclJV3.png',
  'http://i.imgur.com/9F4L3Hq.png',
  'http://i.imgur.com/KrtWidY.png',
  'http://i.imgur.com/SoXddIf.png',
  'http://i.imgur.com/wvzaBMm.png',
  'http://i.imgur.com/cHYVrXc.png',
  'http://i.imgur.com/CVY93QN.png',
  'http://i.imgur.com/tprSlMd.png',
  'http://i.imgur.com/EoBsCd0.png',
  'http://i.imgur.com/ssvFnhb.png',
  'http://i.imgur.com/q8em1zI.png',
  'http://i.imgur.com/5jqBUC3.png',
  'http://i.imgur.com/Y5sq5f7.png',
  'http://i.imgur.com/sRfLcEF.png',
  'http://i.imgur.com/ZNilBPa.png',
  'http://i.imgur.com/61U9J8M.png',
  'http://i.imgur.com/hHNN1z7.png',
  'http://i.imgur.com/udZwsqT.png',
  'http://i.imgur.com/Ttcors8.png',
  'http://i.imgur.com/a4i3a8x.png',
  'http://i.imgur.com/UzBViwj.png',
  'http://i.imgur.com/ilug4HX.png',
  'http://i.imgur.com/l2IzNnS.png',
  'http://i.imgur.com/IS9i6gN.png',
  'http://i.imgur.com/qKOMsMP.png',
  'http://i.imgur.com/HLypmWH.png',
  'http://i.imgur.com/2kepGZp.png',
  'http://i.imgur.com/Cv3pJg5.png',
  'http://i.imgur.com/qeQUCEY.png',
  'http://i.imgur.com/VjeiJw0.png',
  'http://i.imgur.com/WmGRi71.png',
  'http://i.imgur.com/fKNCx6v.png',
  'http://i.imgur.com/3NJq8SI.png',
  'http://i.imgur.com/EDkvlmy.png',
  'http://i.imgur.com/aG79Kbl.png',
  'http://i.imgur.com/fQS6MA2.png',
  'http://i.imgur.com/gpEUfeO.png',
  'http://i.imgur.com/D17A8N5.png',
  'http://i.imgur.com/pFgpcvq.png',
  'http://i.imgur.com/w7Kvigh.png',
  'http://i.imgur.com/TPEATJP.png',
  'http://i.imgur.com/55cGfYj.png',
  'http://i.imgur.com/f1Vs1MD.png',
  'http://i.imgur.com/OrcloOW.png',
  'http://i.imgur.com/CJEwq5P.png',
  'http://i.imgur.com/yAJprQl.png',
  'http://i.imgur.com/PSI8Hpk.png',
  'http://i.imgur.com/8TJVMBv.png',
  'http://i.imgur.com/4i1kWww.png',
  'http://i.imgur.com/yNwGgx8.png',
  'http://i.imgur.com/bVCadnq.png',
  'http://i.imgur.com/Ktb5Sy3.png',
  'http://i.imgur.com/CdOXPXE.png',
  'http://i.imgur.com/TEuOogc.png',
  'http://i.imgur.com/8lMyQ3w.png',
  'http://i.imgur.com/BMIWpaz.png',
  'http://i.imgur.com/eUmFzGZ.png',
  'http://i.imgur.com/5U2TtdH.png',
  'http://i.imgur.com/iCTBtVU.png',
  'http://i.imgur.com/5SLjUBa.png',
  'http://i.imgur.com/YranXB5.png',
  'http://i.imgur.com/m6XkIzG.png',
  'http://i.imgur.com/DC1owIz.png',
  'http://i.imgur.com/TyJigve.png',
  'http://i.imgur.com/IuDLIal.png',
  'http://i.imgur.com/nbpdvPB.png',
  'http://i.imgur.com/ryK3KKc.png',
  'http://i.imgur.com/pdhcwWl.png',
  'http://i.imgur.com/oXGeQ6c.png',
  'http://i.imgur.com/OwYOACK.png',
  'http://i.imgur.com/hkl1gvs.png',
  'http://i.imgur.com/wyBrrnj.png',
  'http://i.imgur.com/huBREx6.png',
  'http://i.imgur.com/EfKYnHQ.png',
  'http://i.imgur.com/ft6gZrX.png',
  'http://i.imgur.com/LOYM89Y.png',
  'http://i.imgur.com/N7yQNOh.png',
  'http://i.imgur.com/1nd7RIs.png',
  'http://i.imgur.com/JKiU6YX.png',
  'http://i.imgur.com/BnUDuc5.png',
  'http://i.imgur.com/j9LoBiz.png',
  'http://i.imgur.com/LcftbNl.png',
  'http://i.imgur.com/Hr5NeYP.png',
  'http://i.imgur.com/QkviQOG.png',
  'http://i.imgur.com/JYqahlL.png',
  'http://i.imgur.com/yC3Cpt5.png',
  'http://i.imgur.com/g7P8ZYX.png',
  'http://i.imgur.com/ZtC4AQH.png',
  'http://i.imgur.com/S1Gr4Xn.png',
  'http://i.imgur.com/hQW5929.png',
  'http://i.imgur.com/th40WaF.png',
  'http://i.imgur.com/iNCxXrt.png'
];
var twitch_c = [
  'KappaHD',
  'MiniK',
  'imGlitch',
  'copyThis',
  'pastaThat',
  '4Head',
  'ANELE',
  'ArgieB8',
  'ArsonNoSexy',
  'AsianGlow',
  'AtGL',
  'AthenaPMS',
  'AtIvy',
  'AtWW',
  'BabyRage',
  'BatChest',
  'BCWarrior',
  'BibleThump',
  'BigBrother',
  'BionicBunion',
  'BlargNaut',
  'bleedPurple',
  'BloodTrail',
  'BORT',
  'BrainSlug',
  'BrokeBack',
  'BuddhaBar',
  'CoolCat',
  'CorgiDerp',
  'CougarHunt',
  'DAESuppy',
  'DansGame',
  'DatHass',
  'DatSheffy',
  'DBstyle',
  'deExcite',
  'deIlluminati',
  'DendiFace',
  'DogFace',
  'duDudu',
  'EagleEye',
  'EleGiggle',
  'EvilFetus',
  'FailFish',
  'FPSMarksman',
  'FrankerZ',
  'FreakinStinkin',
  'FUNgineer',
  'FunRun',
  'FuzzyOtterOO',
  'GasJoker',
  'GingerPower',
  'GrammarKing',
  'HassanChop',
  'HeyGuys',
  'HotPokket',
  'HumbleLife',
  'ItsBoshyTime',
  'Jebaited',
  'JKanStyle',
  'JonCarnage',
  'KAPOW',
  'Kappa',
  'KappaPride',
  'KappaRoss',
  'Keepo',
  'KevinTurtle',
  'Kippa',
  'Kreygasm',
  'KZskull',
  'Mau5',
  'mcaT',
  'MechaSupes',
  'MrDestructoid',
  'MVGame',
  'NightBat',
  'NinjaTroll',
  'NoNoSpot',
  'NotATK',
  'NotLikeThis',
  'OMGScoots',
  'OneHand',
  'OpieOP',
  'OptimizePrime',
  'OSbeaver',
  'OSbury',
  'OSdeo',
  'OSfrog',
  'OSkomodo',
  'OSrob',
  'OSsloth',
  'panicBasket',
  'PanicVis',
  'PazPazowitz',
  'PeoplesChamp',
  'PermaSmug',
  'PeteZaroll',
  'PeteZarollTie',
  'PicoMause',
  'PipeHype',
  'PJHarley',
  'PJSalt',
  'PMSTwin',
  'PogChamp',
  'Poooound',
  'PraiseIt',
  'PRChase',
  'PunchTrees',
  'PuppeyFace',
  'RaccAttack',
  'RalpherZ',
  'RedCoat',
  'ResidentSleeper',
  'riPepperonis',
  'RitzMitz',
  'RuleFive',
  'SeemsGood',
  'ShadyLulu',
  'Shazam',
  'shazamicon',
  'ShazBotstix',
  'ShibeZ',
  'SMOrc',
  'SMSkull',
  'SoBayed',
  'SoonerLater',
  'SriHead',
  'SSSsss',
  'StoneLightning',
  'StrawBeary',
  'SuperVinlin',
  'SwiftRage',
  'tbBaconBiscuit',
  'tbChickenBiscuit',
  'tbSausageBiscuit',
  'tbSriracha',
  'TF2John',
  'TheKing',
  'TheRinger',
  'TheTarFu',
  'TheThing',
  'ThunBeast',
  'TinyFace',
  'TooSpicy',
  'TriHard',
  'TTours',
  'twitchRaid',
  'UleetBackup',
  'UncleNox',
  'UnSane',
  'Volcania',
  'WholeWheat',
  'WinWaker',
  'WTRuck',
  'WutFace',
  'YouWHY',
  'afkKappa'
];
var emoticon_1 = {
  dolan: [
    ':dolan:',
    'http://oi62.tinypic.com/2lsk7ra.jpg',
    'Dolan'
  ],
  lysf: [
    ':lysf:',
    'http://i.imgur.com/8eLDb0a.png',
    'LYSF'
  ],
  bed: [
    ':bed:',
    'http://i58.tinypic.com/14tlq4g.png',
    'Bed'
  ],
  buzz: [
    ':buzz:',
    'http://i61.tinypic.com/11hza0i.png',
    'buzz'
  ],
  waterc: [
    ':waterc:',
    'http://i61.tinypic.com/161dc7b.png',
    'waterc'
  ],
  cozy: [
    ':cozy:',
    'http://i57.tinypic.com/25tcbw9.png',
    'cozy'
  ],
  ween: [
    ':ween:',
    'http://i61.tinypic.com/24c9m2x.png',
    'ween'
  ],
  smoker: [
    ':smoker:',
    'http://i.imgur.com/oayZBiW.png',
    'smoker'
  ],
  hug: [
    ':hug:',
    'http://i.imgur.com/2rbLxWH.png',
    'hug'
  ],
  wp: [
    ':wp:',
    'http://i.imgur.com/3nGF3HF.png',
    'wp'
  ],
  hide: [
    ':hide:',
    'http://i58.tinypic.com/11gjf4p.png',
    'hide'
  ],
  kind: [
    ':kind:',
    'http://i.imgur.com/M2lLpSW.png',
    'kind'
  ],
  frog3: [
    ':frog3:',
    'http://i57.tinypic.com/r20u3l.png',
    'frog3'
  ],
  feels: [
    ':feels:',
    'http://i58.tinypic.com/a49d2h.png',
    'feels'
  ],
  fly: [
    ':fly:',
    'http://i.imgur.com/GnFj20L.png',
    'fly'
  ],
  frog4: [
    ':frog4:',
    'http://i58.tinypic.com/e6wsao.png',
    'frog4'
  ],
  wink: [
    ':wink:',
    'http://i58.tinypic.com/29qo3vc.png',
    'wink'
  ],
  dubs: [
    ':dubs:',
    'http://i62.tinypic.com/29y09br.png',
    'dubs'
  ],
  oceanb: [
    ':oceanb:',
    'http://i.imgur.com/biE5mVs.png',
    'oceanb'
  ],
  mollusk: [
    ':mollusk:',
    'http://i.imgur.com/EQ7H4r1.png',
    'mollusk'
  ],
  hah: [
    ':hah:',
    'http://i58.tinypic.com/dxd92w.png',
    'hah'
  ],
  hue: [
    ':hue:',
    'http://i57.tinypic.com/20tjpy1.png',
    'hue'
  ],
  wpony: [
    ':wpony:',
    'http://i.imgur.com/OBSRlXU.png',
    'wpony'
  ],
  bend: [
    ':bend:',
    'http://i.imgur.com/Rcf2aZn.png',
    'bend'
  ],
  yhf: [
    ':yhf:',
    'http://i60.tinypic.com/152ozl0.png',
    'yhf'
  ],
  smug: [
    ':smug:',
    'http://i61.tinypic.com/11trl93.png',
    'smug'
  ],
  am: [
    ':am:',
    'http://i.imgur.com/W6b3Ojy.png',
    'am'
  ],
  riot: [
    ':riot:',
    'http://i.imgur.com/exN4785.png',
    'riot'
  ],
  blaze: [
    ':blaze:',
    'http://i60.tinypic.com/14ul0nd.png',
    'blaze'
  ],
  afx: [
    ':afx:',
    'http://i.imgur.com/r5o9xXL.png',
    'afx'
  ],
  strokes1: [
    ':strokes1:',
    'http://i.imgur.com/IhuPM4O.png',
    'strokes1'
  ],
  wave: [
    ':wave:',
    'http://i61.tinypic.com/6rk6ds.gif',
    'wave'
  ],
  johnny: [
    ':johnny:',
    'http://i.imgur.com/vBzuuFZ.jpg',
    'johnny'
  ],
  sloth: [
    ':sloth:',
    'http://i59.tinypic.com/16idto7.gif',
    'sloth'
  ],
  autobahn: [
    ':autobahn:',
    'http://i.imgur.com/7HlKkKx.png',
    'autobahn'
  ],
  lmao: [
    ':lmao:',
    'http://i58.tinypic.com/jhec78.png',
    'lmao'
  ],
  yup: [
    ':yup:',
    'http://i61.tinypic.com/wqr6te.png',
    'yup'
  ],
  ayylmao: [
    ':ayylmao:',
    'http://i62.tinypic.com/16islyd.png',
    'ayylmao'
  ],
  sip: [
    ':sip:',
    'http://i60.tinypic.com/r22k5w.png',
    'sip'
  ],
  frog5: [
    ':frog5:',
    'http://i60.tinypic.com/dgkwef.png',
    'frog5'
  ],
  cool: [
    ':cool:',
    'http://i62.tinypic.com/22lxmw.png',
    'cool'
  ],
  whew: [
    ':whew:',
    'http://i60.tinypic.com/rsy4ck.png',
    'whew'
  ],
  err: [
    ':err:',
    'http://i58.tinypic.com/23k5hme.png',
    'err'
  ],
  sadfrog: [
    ':sadfrog:',
    'http://i59.tinypic.com/15yhwd0.png',
    'sadfrog'
  ],
  notimpr: [
    ':notimpr:',
    'http://i.imgur.com/UJ2Pcqf.png',
    'notimpr'
  ],
  murdoc: [
    ':murdoc:',
    'http://i.imgur.com/kzK8RfX.png',
    'murdoc'
  ],
  notsure: [
    ':notsure:',
    'http://i57.tinypic.com/156fhnt.png',
    'notsure'
  ],
  maddy: [
    ':maddy:',
    'http://i.imgur.com/FF8occF.png',
    'maddy'
  ],
  dead: [
    ':dead:',
    'http://i.imgur.com/9yw2sIe.png',
    'dead'
  ],
  snake: [
    ':snake:',
    'http://i59.tinypic.com/52hwf5.png',
    'snake'
  ],
  thom: [
    ':thom:',
    'http://i.imgur.com/Z5Oo4IU.png',
    'thom'
  ],
  snakepoo: [
    ':snakepoo:',
    'http://i59.tinypic.com/2462ln5.png',
    'snakepoo'
  ],
  squid: [
    ':squid:',
    'http://i.imgur.com/Xzqc4dL.png',
    'squid'
  ],
  madfrog: [
    ':madfrog:',
    'http://i60.tinypic.com/3097j1c.png',
    'madfrog'
  ],
  fatsnake: [
    ':fatsnake:',
    'http://i61.tinypic.com/i3gl03.jpg',
    'fatsnake'
  ],
  supa: [
    ':supa:',
    'http://i58.tinypic.com/2dsl0rb.gif',
    'supa'
  ],
  sadsmile: [
    ':sadsmile:',
    'http://i60.tinypic.com/90vlw1.jpg',
    'sadsmile'
  ],
  hmmfrog: [
    ':hmmfrog:',
    'http://i58.tinypic.com/351d381.png',
    'hmmfrog'
  ],
  lookingin: [
    ':lookingin:',
    'http://i60.tinypic.com/veuf4.png',
    'lookingin'
  ],
  froggy: [
    ':froggy:',
    'http://i57.tinypic.com/2ywy1ci.png',
    'froggy'
  ],
  spurdo: [
    ':spurdo:',
    'http://i62.tinypic.com/oaqf78.png',
    'spurdo'
  ],
  wat: [
    ':wat:',
    'http://i61.tinypic.com/34h7udk.png',
    'wat'
  ],
  tru: [
    ':tru:',
    'http://i61.tinypic.com/2ut6u6g.png',
    'tru'
  ],
  egg: [
    ':egg:',
    'http://i.imgur.com/Xro7lrY.png',
    'egg'
  ],
  isay: [
    ':isay:',
    'http://i57.tinypic.com/2mouzw4.gif',
    'isay'
  ],
  cute: [
    ':cute:',
    'http://i60.tinypic.com/4g3y88.png',
    'cute'
  ],
  pointy: [
    ':pointy:',
    'http://i57.tinypic.com/o547r8.gif',
    'pointy'
  ],
  beet: [
    ':beet:',
    'http://i59.tinypic.com/6fs300.png',
    'beet'
  ],
  bacon: [
    ':bacon:',
    'http://i58.tinypic.com/8xn711.png',
    'bacon'
  ],
  hangon: [
    ':hangon:',
    'http://i62.tinypic.com/2ihxrbp.png',
    'hangon'
  ],
  laul: [
    ':laul:',
    'http://i61.tinypic.com/mtt4zk.png',
    'laul'
  ],
  damon: [
    ':damon:',
    'http://i62.tinypic.com/343smxf.png',
    'damon'
  ],
  foff: [
    ':foff:',
    'http://i58.tinypic.com/25ks8c5.png',
    'foff'
  ],
  jazz: [
    ':jazz:',
    'http://i.imgur.com/YMKJdXo.png',
    'jazz'
  ],
  quebec: [
    ':quebec:',
    'http://i.imgur.com/gpxdYTQ.png',
    'quebec'
  ],
  gws: [
    ':gws:',
    'http://i.imgur.com/0D0VMkx.png',
    'gws'
  ],
  neckbeard: [
    ':neckbeard:',
    'http://i57.tinypic.com/iqamad.png',
    'neckbeard'
  ],
  troll: [
    ':troll:',
    'http://i58.tinypic.com/13zcxt1.png',
    'troll'
  ],
  bunny: [
    ':bunny:',
    'http://i58.tinypic.com/6ieiqb.png',
    'bunny'
  ],
  dew: [
    ':dew:',
    'http://i57.tinypic.com/sdn0ok.png',
    'dew'
  ],
  doritos: [
    ':doritos:',
    'http://i62.tinypic.com/1pxno3.png',
    'doritos'
  ],
  frogcry1: [
    ':frogcry1:',
    'http://i62.tinypic.com/2mniqlj.png',
    'frogcry1'
  ],
  frogcry2: [
    ':frogcry2:',
    'http://i57.tinypic.com/2585ees.png',
    'frogcry2'
  ],
  bshark: [
    ':bshark:',
    'http://i59.tinypic.com/2qu6qdu.png',
    'bshark'
  ],
  banana: [
    ':banana:',
    'http://i60.tinypic.com/25auiky.png',
    'banana'
  ],
  consider: [
    ':consider:',
    'http://i62.tinypic.com/1z20r39.png',
    'consider'
  ],
  hlaugh: [
    ':hlaugh:',
    'http://i59.tinypic.com/24vnq4y.png',
    'hlaugh'
  ],
  madman: [
    ':madman:',
    'http://i62.tinypic.com/2d1wbro.png',
    'madman'
  ],
  eating: [
    ':eating:',
    'http://i59.tinypic.com/2962fya.png',
    'eating'
  ],
  mpizza: [
    ':mpizza:',
    'http://i61.tinypic.com/w2h8p1.png',
    'mpizza'
  ],
  creepsmile: [
    ':creepsmile:',
    'http://i61.tinypic.com/a40i3b.png',
    'creepsmile'
  ],
  allyours: [
    ':allyours:',
    'http://i61.tinypic.com/2i1egzl.png',
    'allyours'
  ],
  heythere: [
    ':heythere:',
    'http://i60.tinypic.com/vxy9sh.png',
    'heythere'
  ],
  disgust: [
    ':disgust:',
    'http://i59.tinypic.com/nnjll1.png',
    'disgust'
  ],
  disgust2: [
    ':disgust2:',
    'http://i57.tinypic.com/qn92rr.png',
    'disgust 2'
  ],
  canteven: [
    ':canteven:',
    'http://i60.tinypic.com/abk7.png',
    'canteven'
  ],
  saddance: [
    ':saddance:',
    'http://i58.tinypic.com/70gzdf.png',
    'saddance'
  ],
  alienfrog: [
    ':alienfrog:',
    'http://i59.tinypic.com/2zzmcuq.png',
    'alienfrog'
  ],
  sadjello: [
    ':sadjello:',
    'http://i62.tinypic.com/2lnyel1.png',
    'sadjello'
  ],
  dogfrog: [
    ':dogfrog:',
    'http://i59.tinypic.com/19mg5y.png',
    'dogfrog'
  ],
  edd: [
    ':edd:',
    'http://i60.tinypic.com/28bf8gj.png',
    'edd'
  ],
  cfrog: [
    ':cfrog:',
    'http://i62.tinypic.com/rkq3bs.png',
    'cfrog'
  ],
  weed: [
    ':weed:',
    'http://i58.tinypic.com/2rzvse1.png',
    'weed'
  ],
  roku: [
    ':roku:',
    'http://i59.tinypic.com/9u8008.png',
    'roku'
  ],
  nokia: [
    ':nokia:',
    'http://i57.tinypic.com/33a43z8.jpg',
    'nokia'
  ],
  spidey: [
    ':spidey:',
    'http://i58.tinypic.com/2116k9s.png',
    'spidey'
  ],
  winner: [
    ':winner:',
    'http://i61.tinypic.com/2l9c8g.png',
    'winner'
  ],
  bird: [
    ':bird:',
    'http://i57.tinypic.com/e96iy8.png',
    'bird'
  ],
  bang: [
    ':bang:',
    'http://i59.tinypic.com/zlog1v.png',
    'bang'
  ],
  feelgood: [
    ':feelgood:',
    'http://i61.tinypic.com/2mx3861.png',
    'feelgood'
  ],
  annoyed: [
    ':annoyed:',
    'http://i61.tinypic.com/330crw8.png',
    'annoyed'
  ],
  vannoyed: [
    ':vannoyed:',
    'http://i57.tinypic.com/2psovb9.png',
    'vannoyed'
  ],
  fell: [
    ':fell:',
    'http://i58.tinypic.com/rvhgg6.png',
    'fell'
  ],
  usure: [
    ':usure:',
    'http://i58.tinypic.com/2z7okk5.png',
    'usure'
  ],
  pipe: [
    ':pipe:',
    'http://i57.tinypic.com/3165izb.png',
    'pipe'
  ],
  sip2: [
    ':sip2:',
    'http://i62.tinypic.com/2luqses.png',
    'sip2'
  ],
  butt: [
    ':butt:',
    'http://i62.tinypic.com/mjb9jd.png',
    'butt'
  ],
  notpleased: [
    ':notpleased:',
    'http://i61.tinypic.com/6tijao.png',
    'notpleased'
  ],
  disdain: [
    ':disdain:',
    'http://i58.tinypic.com/331oc4y.png',
    'disdain'
  ],
  bman: [
    ':bman:',
    'http://i61.tinypic.com/116m3i9.png',
    'bman'
  ],
  smugfeel: [
    ':smugfeel:',
    'http://i62.tinypic.com/157kux5.jpg',
    'smugfeel'
  ],
  head: [
    ':head:',
    'http://i59.tinypic.com/9sfekg.png',
    'head'
  ],
  fack: [
    ':fack:',
    'http://i59.tinypic.com/20u8qcz.png',
    'fack'
  ],
  cryin: [
    ':cryin:',
    'http://i58.tinypic.com/fdwn0o.png',
    'cryin'
  ],
  cwofl: [
    ':cwofl:',
    'http://i60.tinypic.com/2gwvmts.png',
    'cwofl'
  ],
  madwofl: [
    ':madwofl:',
    'http://i57.tinypic.com/insemu.png',
    'madwofl'
  ],
  guilty: [
    ':guilty:',
    'http://i58.tinypic.com/2jeogtd.png',
    'guilty'
  ],
  mellow: [
    ':mellow:',
    'http://i58.tinypic.com/2zqd92p.png',
    'mellow'
  ],
  dealw: [
    ':dealw:',
    'http://i62.tinypic.com/31314sg.png',
    'dealw'
  ],
  heman: [
    ':heman:',
    'http://i61.tinypic.com/35ivon7.png',
    'heman'
  ],
  bother: [
    ':bother:',
    'http://i58.tinypic.com/2e181ap.png',
    'bother'
  ],
  grin: [
    ':grin:',
    'http://i59.tinypic.com/14djdjl.png',
    'grin'
  ],
  muchwow: [
    ':muchwow:',
    'http://i62.tinypic.com/2rrt8p0.png',
    'muchwow'
  ],
  stepup: [
    ':stepup:',
    'http://i60.tinypic.com/x3acnn.png',
    'stepup'
  ],
  zerolol: [
    ':zerolol:',
    'http://i57.tinypic.com/2llzlnl.png',
    'zerolol'
  ],
  biggrin: [
    ':biggrin:',
    'http://i62.tinypic.com/sfgdqx.png',
    'biggrin'
  ],
  iamworry: [
    ':iamworry:',
    'http://i62.tinypic.com/r0dn4m.png',
    'iamworry'
  ],
  nope: [
    ':nope:',
    'http://i58.tinypic.com/2mg2mpk.png',
    'nope'
  ],
  krabs: [
    ':krabs:',
    'http://i61.tinypic.com/353b5ht.png',
    'krabs'
  ],
  feelsgood: [
    ':feelsgood:',
    'http://i61.tinypic.com/1z4v38p.png',
    'feelsgood'
  ],
  sanicpepe: [
    ':sanicpepe:',
    'http://i61.tinypic.com/2hdmr2f.png',
    'sanicpepe'
  ],
  normalsmug: [
    ':normalsmug:',
    'http://i58.tinypic.com/2s0k8hs.png',
    'normalsmug'
  ],
  nervous: [
    ':nervous:',
    'http://i60.tinypic.com/ae1n5y.png',
    'nervous'
  ],
  escalation: [
    ':escalation:',
    'http://i59.tinypic.com/148pzl2.png',
    'escalation'
  ],
  terror: [
    ':terror:',
    'http://i58.tinypic.com/2uqoo0k.png',
    'terror'
  ],
  rageon: [
    ':rageon:',
    'http://i57.tinypic.com/flj628.png',
    'rageon'
  ],
  noclothes: [
    ':noclothes:',
    'http://i61.tinypic.com/2hh2361.png',
    'noclothes'
  ],
  waifoos: [
    ':waifoos:',
    'http://i57.tinypic.com/2cehr0o.png',
    'waifoos'
  ],
  hypetrain: [
    ':hypetrain:',
    'http://i61.tinypic.com/3448old.png',
    'hypetrain'
  ],
  bigxd: [
    ':bigxd:',
    'http://i59.tinypic.com/154d8bd.png',
    'bigxd'
  ],
  fonz: [
    ':fonz:',
    'http://i61.tinypic.com/2mnhyld.png',
    'fonz'
  ],
  mrbean: [
    ':mrbean:',
    'http://i61.tinypic.com/1127csk.png',
    'mr bean'
  ],
  mlady: [
    ':mlady:',
    'http://i57.tinypic.com/1zf7vpv.gif',
    '\'mlady'
  ],
  lick: [
    ':lick:',
    'http://i57.tinypic.com/208w9j9.png',
    'lick'
  ],
  nogf: [
    ':nogf:',
    'http://i58.tinypic.com/1191f7o.png',
    'nogf'
  ],
  mint: [
    ':mint:',
    'http://i60.tinypic.com/2hzkc5y.png',
    'mint'
  ],
  devious: [
    ':devious:',
    'http://i61.tinypic.com/ol00h3.png',
    'devious'
  ],
  babyfrogs: [
    ':babyfrogs:',
    'http://i58.tinypic.com/5zh7o7.png',
    'baby frogs'
  ],
  rlpepe: [
    ':rlpepe:',
    'http://i61.tinypic.com/25sszo5.png',
    'rlpepe'
  ],
  besrs: [
    ':besrs:',
    'http://i60.tinypic.com/2gtruyd.png',
    'besrs'
  ],
  cri: [
    ':cri:',
    'http://i59.tinypic.com/avj1bq.png',
    'cri'
  ],
  patrick: [
    ':patrick:',
    'http://i58.tinypic.com/ricfet.png',
    'patrick'
  ],
  standbuy: [
    ':standbuy:',
    'http://i61.tinypic.com/2ijt75c.png',
    'stand buy'
  ],
  notgood: [
    ':notgood:',
    'http://i62.tinypic.com/swtet1.jpg',
    'not good'
  ],
  confident: [
    ':confident:',
    'http://i59.tinypic.com/znwqjq.jpg',
    'confident'
  ],
  cripepe: [
    ':cripepe:',
    'http://i58.tinypic.com/2ldbla0.png',
    'cri pepe'
  ],
  ebinpepe: [
    ':ebinpepe:',
    'http://i57.tinypic.com/2mrxj05.png',
    'ebin pepe'
  ],
  greedypepe: [
    ':greedypepe:',
    'http://i59.tinypic.com/k3tcth.png',
    'greedy pepe'
  ],
  disgust3: [
    ':disgust3:',
    'http://i61.tinypic.com/fa90t0.png',
    'disgust 3'
  ],
  nou: [
    ':nou:',
    'http://i60.tinypic.com/n39miv.png',
    'nou'
  ],
  inspace: [
    ':inspace:',
    'http://i59.tinypic.com/25uo7wy.png',
    'inspace'
  ],
  disgust4: [
    ':disgust4:',
    'http://i59.tinypic.com/33aayxd.png',
    'disgust 4'
  ],
  spooky: [
    ':spooky:',
    'http://i59.tinypic.com/2nali87.jpg',
    'spooky skelly'
  ],
  left: [
    ':left:',
    'http://i60.tinypic.com/fjnxig.png',
    'left beef'
  ],
  dance: [
    ':bdance:',
    'http://i57.tinypic.com/ilwzm1.jpg',
    'balloon dance'
  ],
  froghue: [
    ':fhue:',
    'http://i58.tinypic.com/16awhog.png',
    'frog hue'
  ],
  spin: [
    ':spin:',
    'http://i57.tinypic.com/73fe44.jpg',
    'spinning'
  ],
  fam: [
    ':fam:',
    'http://i62.tinypic.com/343orvo.png',
    'fam'
  ],
  brilliant: [
    ':brill:',
    'http://i59.tinypic.com/28h3dc8.png',
    'brilliant'
  ],
  sharkfrog: [
    ':sfrog:',
    'http://i60.tinypic.com/zojamb.png',
    'shark frog'
  ],
  iduck: [
    ':iduck:',
    'http://i60.tinypic.com/zstwzt.png',
    'inverted duck'
  ],
  happen: [
    ':happen:',
    'http://i59.tinypic.com/2rzyzjm.jpg',
    'happening'
  ],
  winner2: [
    ':winner2:',
    'http://i.imgur.com/cFwUmzM.gif',
    'content aware WINNER'
  ],
  jew: [
    ':jew:',
    'http://i.imgur.com/jowqkg9.gif',
    'jew'
  ],
  muricaflag: [
    ':muricaflag:',
    'http://i.imgur.com/Sy9vZNX.gif',
    'muricaflag'
  ],
  virus: [
    ':virus:',
    'http://i.imgur.com/kZYR3oJ.gif',
    'virus'
  ],
  spaghetti: [
    ':spaghetti:',
    'http://i60.tinypic.com/9vicg9.png',
    'mom\'s spaghetti'
  ],
  spaghett: [
    ':spaghett:',
    'http://i60.tinypic.com/2rptelg.png',
    'spaghett!'
  ],
  joker: [
    ':joker:',
    'http://i57.tinypic.com/25ji1ww.png',
    'joker'
  ],
  ghostpepe: [
    ':gpepe:',
    'http://i62.tinypic.com/fkqgr5.png',
    'ghost pepe'
  ],
  sexypepe: [
    ':spepe:',
    'http://i60.tinypic.com/2r5qpkz.jpg',
    'sexy pepe'
  ],
  straightd: [
    ':sdubs:',
    'http://i59.tinypic.com/6od98l.jpg',
    'straight outta doubles'
  ],
  uglypepe: [
    ':upepe:',
    'http://i61.tinypic.com/2qiv800.jpg',
    'ugly pepe'
  ],
  leetpepe: [
    ':1337pepe:',
    'http://i.imgur.com/TgrYBQP.gif',
    '1337 pepe'
  ],
  seizurepepe: [
    ':seizurepepe:',
    'http://i.imgur.com/Xu5UZpk.gif',
    'seizure pepe'
  ],
  pepeoveryou: [
    ':pepe>you:',
    'http://i.imgur.com/5fDk6Z1.gif',
    'rare pepe > you'
  ],
  pepesi: [
    ':pepesi:',
    'http://i.imgur.com/bPKbLTq.gif',
    'PEPEsi'
  ],
  pepicasso: [
    ':pepicasso:',
    'http://i.imgur.com/rFDnOk7.gif',
    'peekasso'
  ],
  pepe007: [
    ':pepe007:',
    'http://i.imgur.com/vRgJvjh.gif',
    'pepe 007'
  ],
  pepeflash: [
    ':pepeflash:',
    'http://i.imgur.com/bqGHiNG.gif',
    'pepe flash'
  ]
};
var emoticon_2 = {
  peperun: [
    ':peperun:',
    'http://i.imgur.com/3xLRJRC.gif',
    'pepe run'
  ],
  pepenaked: [
    ':pepenaked:',
    'http://i.imgur.com/O9moFkn.gif',
    'pepe naked'
  ],
  triforce: [
    ':triforce:',
    'http://i.imgur.com/fT5Ennp.gif',
    'newfags can\'t triforce'
  ],
  smokofrodo: [
    ':smokofrodo:',
    'http://i.imgur.com/PMUWXEY.png',
    'SMOKO FRODO'
  ],
  fabulous: [
    ':fab:',
    'http://orig12.deviantart.net/cca2/f/2015/254/6/3/animation_fabulous_1_by_la_stockemotes-d997eb1.gif',
    'FABULOUS'
  ],
  sasqpepe: [
    ':saspepe:',
    'http://i57.tinypic.com/qzfx2t.png',
    'SASQUANCH PEPE'
  ],
  fieripepe: [
    ':guypepe:',
    'http://i60.tinypic.com/2qv5ruu.gif',
    'GUY PEPE'
  ],
  salty: [
    ':salt:',
    'https://static-cdn.jtvnw.net/emoticons/v1/36/1.0',
    'PJSalt'
  ],
  rip: [
    ':rip:',
    'https://static-cdn.jtvnw.net/emoticons/v1/59729/1.0',
    'RIP'
  ],
  triple: [
    ':triple:',
    'https://static-cdn.jtvnw.net/emoticons/v1/11535/1.0',
    'TRIPLE KILL'
  ],
  sombrero: [
    ':sombrero:',
    'https://static-cdn.jtvnw.net/emoticons/v1/18235/1.0',
    'SOMBRERO'
  ],
  illuminati: [
    ':illuminati:',
    'https://static-cdn.jtvnw.net/emoticons/v1/25927/1.0',
    'THE JOOOOOOOOOOOOOOOOOOOOOS'
  ],
  blazeskr: [
    'blaze',
    'https://static-cdn.jtvnw.net/emoticons/v1/39567/1.0',
    'B-B-B-B-B-BAKA SENPAIIII'
  ],
  gnome: [
    ':gnome:',
    'https://static-cdn.jtvnw.net/emoticons/v1/44069/1.0',
    'alohaGnome'
  ],
  yeah: [
    ':yeah:',
    'https://static-cdn.jtvnw.net/emoticons/v1/40394/1.0',
    'alohaYeah'
  ],
  rng: [
    ':rng:',
    'https://static-cdn.jtvnw.net/emoticons/v1/39440/1.0',
    'alohaRNG'
  ],
  mvp: [
    ':mvp:',
    'https://static-cdn.jtvnw.net/emoticons/v1/53102/1.0',
    'U DA REAL MVP'
  ],
  saltyrage: [
    ':rage:',
    'https://static-cdn.jtvnw.net/emoticons/v1/18998/1.0',
    'RAGEQUIT'
  ],
  saltyfire: [
    ':fire:',
    'https://static-cdn.jtvnw.net/emoticons/v1/28748/1.0',
    'BURNED'
  ],
  saltyace: [
    ':ace:',
    'https://static-cdn.jtvnw.net/emoticons/v1/17968/1.0',
    'ace of spades'
  ],
  saltyburn: [
    ':burn:',
    'https://static-cdn.jtvnw.net/emoticons/v1/28418/1.0',
    'WOULD YOU LIKE SOME WATER TO PUT OUT THAT SICK BURN'
  ],
  ggnore: [
    ':gg:',
    'https://static-cdn.jtvnw.net/emoticons/v1/55571/1.0',
    'GGnoRE'
  ],
  kappahd: [
    ':kappahd:',
    'https://static-cdn.jtvnw.net/jtv_user_pictures/emoticon-2867-src-f02f9d40f66f0840-28x28.png',
    'KappaHD'
  ],
  hulk: [
    ':hulk:',
    'http://i.picresize.com/images/2015/09/13/cqRno.png',
    'SEXY HULK COSPLAY'
  ],
  hogan: [
    ':hogan:',
    'http://i.imgur.com/ONAoat2.png',
    'RACIST MAN FROM WWE'
  ],
  walkpepe: [
    ':walkpepe:',
    'http://i.imgur.com/KCHhUel.gif',
    'SKELETON PEPE'
  ],
  windpepe: [
    ':windpepe:',
    'http://i.imgur.com/As2JYQU.gif',
    'WIND PEPE'
  ],
  sadpepe: [
    ':sadpepe:',
    'http://i.imgur.com/Nhs5e5n.gif',
    'ARTSY PEPE'
  ],
  muricapepe: [
    ':muricapepe:',
    'http://i.imgur.com/XRxndTe.gif',
    'MURICA ARTSY PEPE'
  ],
  simpsonspepe: [
    ':simpsonspepe:',
    'http://i.imgur.com/dpBS7Yj.gif',
    'SIMPSONS PEPE'
  ],
  chatpepe: [
    ':chatpepe:',
    'http://i.imgur.com/mLyuao3.gif',
    'CHAT PEPE'
  ],
  einstein: [
    ':einstein:',
    'http://i.imgur.com/zfAPfpf.gif',
    'EINSTEIN 420'
  ],
  pepewtf: [
    ':pepewtf:',
    'http://i.imgur.com/sYuoK2u.gif',
    'WTF PEPE'
  ],
  quilt: [
    ':quilt:',
    'http://i62.tinypic.com/w0jbxk.gif',
    'KAFFE QUILTS AGAIN'
  ],
  quik: [
    ':quik:',
    'http://i61.tinypic.com/ot234o.gif',
    'QUICKSCOPE'
  ],
  conan1: [
    ':conan1:',
    'http://i.imgur.com/ak3bFC1.jpg',
    'CONAN 1'
  ],
  conan2: [
    ':conan2:',
    'http://i.imgur.com/owU25CX.png',
    'FRESH APPLE PIE'
  ],
  jimjilbong: [
    ':jimjilbong:',
    'http://i.imgur.com/eO1KFC3.jpg',
    'JIMJILBONG'
  ],
  steven: [
    ':steven:',
    'http://i.imgur.com/PBGQD5b.jpg',
    'STEFEN'
  ],
  adamchk: [
    ':adamchk:',
    'http://i.imgur.com/iz64vO9.jpg',
    'ADAM CHK EM'
  ],
  fried: [
    ':fried:',
    'http://i.imgur.com/D4k11CR.jpg',
    'FRIED'
  ],
  penn: [
    ':penn2:',
    'http://i.imgur.com/RJV20Ql.jpg',
    'PENN'
  ],
  deep: [
    ':deepaw:',
    'http://i.imgur.com/qrlZMoD.jpg',
    'DEEP AWWW'
  ],
  pepelemon: [
    ':lemonpepe:',
    'http://i.imgur.com/O6sI7fZ.gif',
    'PEPE LEMON'
  ],
  why: [
    ':why:',
    'http://i.imgur.com/USyVquO.gif',
    'WHY'
  ],
  oopepe: [
    ':oopepe:',
    'http://i.imgur.com/14NwJLV.gif',
    'O.O PEPE'
  ],
  kout: [
    ':kout:',
    'https://i.imgur.com/bEKMjLi.png',
    'KOUT'
  ],
  bear: [
    ':bearaim:',
    'http://i.imgur.com/vCmrqpM.gif',
    'BEAR-LY AIM-ING'
  ],
  cryriver: [
    ':pepetears:',
    'http://i.imgur.com/O5yu2Nq.gif',
    'PEAR RIVER OF TEARS'
  ],
  blurpepe: [
    ':blurpepe:',
    'http://i.imgur.com/GFC1b2M.gif',
    'blur pepe'
  ],
  loweffort: [
    ':lowpepe:',
    'http://i.imgur.com/99tRltW.gif',
    'LOW EFFORT PEPE'
  ],
  faceswap: [
    ':faceswap:',
    'http://i.imgur.com/qyrYGlm.gif',
    'FACE SWAP'
  ],
  sponge2: [
    ':sponge2:',
    'http://i.imgur.com/qnEwSaK.gif',
    'SPONGE TWO'
  ],
  fignewton: [
    ':fig:',
    'http://i.imgur.com/NB3xqQY.gif',
    'FIG NEWTON'
  ],
  okkid: [
    ':okkid:',
    'http://i.imgur.com/ynHTHkJ.jpg',
    'OK KID'
  ],
  frogpepe: [
    ':frogpepe:',
    'http://i.imgur.com/CbbOaBz.jpg',
    'FROG PEPE'
  ],
  neet: [
    ':neet:',
    'http://i.imgur.com/DwO2W3B.jpg',
    'NEET'
  ],
  cooldog: [
    ':cooldog:',
    'http://i.imgur.com/Vi5O6TS.jpg',
    'COOL DOG'
  ],
  eatshit2: [
    ':eatshit2',
    'http://i.imgur.com/KA33r6p.jpg',
    'EAT SHIT'
  ],
  scared3: [
    ':scared3:',
    'http://i.imgur.com/dYfejmB.jpg',
    'SCARED 3'
  ],
  godwills: [
    ':godwills:',
    'http://i.imgur.com/1UWRYTX.jpg',
    'GOD WILLS IT'
  ],
  cacti: [
    ':cacti:',
    'http://i.imgur.com/3vfSA0L.png',
    'CACTI'
  ],
  anthony: [
    ':anthony:',
    'http://i.imgur.com/UAagnBt.png',
    'HEY, ANTHONY HERE'
  ],
  reflect: [
    ':reflect:',
    'http://i.imgur.com/vPYpQN3.gif',
    'REFLECTING'
  ],
  burning: [
    ':burning:',
    'http://i.imgur.com/Mk8PkoI.png',
    'BURNING'
  ],
  kingpepe: [
    ':kingpepe:',
    'http://i.imgur.com/xBangFX.png',
    'KING PEPE'
  ],
  scottip: [
    ':scottip:',
    'http://i.imgur.com/MNIXehT.png',
    'SCOTTISH TIP'
  ],
  FBPEPE: [
    ':fbpepe:',
    'http://i.imgur.com/IFJctH7.png',
    'FACEBOOK PEPE'
  ],
  ayylmaos: [
    ':ayylmaos:',
    'http://i.imgur.com/QLr8rvH.png',
    'AYY LMAO\'S :DD:D'
  ],
  dinoman: [
    ':dinoman:',
    'http://i.imgur.com/KmoEbws.png',
    'DINO MAN'
  ],
  thinkpepe: [
    ':thinkpepe:',
    'http://i.imgur.com/huzfTk2.png',
    'THINKING PEPE'
  ],
  dontgeb: [
    ':dontgeb:',
    'http://i.imgur.com/XNxeYDS.png',
    'I DONT GEB ID :DD:D'
  ],
  fuckbirb: [
    ':fuckbirb:',
    'http://i.imgur.com/uH0D0PR.png',
    'FUCK NICE THINGS'
  ],
  osnap: [
    ':osnap:',
    'http://i.imgur.com/Zdl0xsV.png',
    'O SNAP'
  ],
  wlaugh: [
    ':wlaugh:',
    'http://i.imgur.com/inUpCaV.png',
    'WORRIED LAUGHTER'
  ],
  moonface: [
    ':moonface:',
    'http://i.imgur.com/9gJYVAk.png',
    'MOON FACE'
  ],
  delsys32: [
    ':delsys32:',
    'http://i.imgur.com/FYB9CRt.gif',
    'DELETE SYSTEM32'
  ],
  falco: [
    ':falco:',
    'http://i62.tinypic.com/357n98i.png',
    'THAT MOTHERFUCKER FROM STAR FOX'
  ],
  kirby: [
    ':kirby:',
    'http://i57.tinypic.com/1589tgh.png',
    'FAT NIGGER WHO EATS PEOPLE'
  ],
  cenastruggle: [
    ':cenastruggle:',
    'http://i.imgur.com/yi44U9z.png',
    'GO JOHN CENA CENA STRONG'
  ],
  help: [
    ':help:',
    'http://i.imgur.com/xHjch8e.png',
    'PRESS F1 FOR HELP'
  ],
  shots: [
    ':shots:',
    'https://static-cdn.jtvnw.net/emoticons/v1/26388/1.0',
    'SHOTS FIRED'
  ],
  kappa: [
    ':shots:',
    'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
    'KAPPAKAPPAKAPPAKAPPAKAPPAKAPPAKAPPA'
  ],
  bitfucked: [
    ':bitfucked:',
    'http://i.imgur.com/IYRr8WH.png',
    'A BIT FUCKEED'
  ],
  pussy: [
    ':pussy:',
    'http://i.imgur.com/wVSWGsg.png',
    'PUSSY'
  ],
  benwhat: [
    ':bruh:',
    'http://i.imgur.com/GCkoBrX.png',
    'BRUUH'
  ],
  suprisedknight: [
    ':knight:',
    'http://i.imgur.com/vEeIx9G.png',
    'SUPRISED KNIGHT'
  ],
  damonhair: [
    ':damonhair:',
    'http://i.imgur.com/UX0lbz2.png',
    'DAMON ALBARNS FUCING HAIR'
  ],
  shitop: [
    ':shitop:',
    'http://i.imgur.com/uz9OmPe.png',
    'SHIT OPINION'
  ],
  reptilejesus: [
    ':jesusraptor:',
    'http://i.imgur.com/K8EeUDR.png',
    'JESUS RAPTOR'
  ],
  dankrandy: [
    ':dankrandy:',
    'http://i.imgur.com/LQJAvAr.png',
    'DANK RANDY'
  ],
  randy: [
    ':randy:',
    'http://i.imgur.com/RbUuQ1j.png',
    'JUST RANDY'
  ],
  beating: [
    ':beating:',
    'http://i.imgur.com/VEO5gme.png',
    'BEATING A SAMSQUANCH'
  ],
  shitfish: [
    ':shitfish:',
    'http://i.imgur.com/8SyKrip.png',
    'SHITFISH'
  ],
  foffdank: [
    ':foffdank:',
    'http://i.imgur.com/o6cLJHe.png',
    'F OFF DANK'
  ],
  bubbles: [
    ':fetish:',
    'http://i.imgur.com/5HxNIqF.png',
    'THATS MY FETISH'
  ],
  oreo: [
    ':oreo:',
    'http://i.imgur.com/so2i2ia.png',
    'OREO'
  ],
  bigsmug: [
    ':bigsmug:',
    'http://i.imgur.com/Kb5gkvr.png',
    'BIG SMUG'
  ],
  lahey: [
    ':lahey:',
    'http://i.imgur.com/n8U65ql.jpg',
    'LAHEY SHAVING'
  ],
  raccoon: [
    ':coon:',
    'http://i.imgur.com/K3uYrVs.gif',
    'RACCOON'
  ],
  bean: [
    ':bean:',
    'http://i.imgur.com/GYhmwKt.png',
    'BEAN oF COFFEE'
  ],
  coolc: [
    ':coolc:',
    'http://i.imgur.com/6FCMFQQ.png',
    'COOOOOOOOOOOL'
  ],
  apple: [
    ':gapple:',
    'http://i.imgur.com/oO5qxLT.png',
    'GREEN APPLE'
  ],
  jeffyeah: [
    ':jeffye:',
    'http://i.imgur.com/yUYFtX2.png',
    'JEFF TWEEDY YEAAAAAAH'
  ],
  dasit: [
    ':dasit:',
    'http://i.imgur.com/ETCFwTk.png',
    'DAS IT MANNE'
  ],
  ayyxd: [
    ':ayyxd:',
    'http://i.imgur.com/fpuYLL0.png',
    'AYYY XD'
  ],
  spoons: [
    ':spoons:',
    'http://i.imgur.com/ki91Eot.png',
    'SPOONS'
  ],
  trutbh: [
    ':trutbh:',
    'http://i.imgur.com/jsxEPmb.png',
    'TRUE TBH'
  ],
  benis: [
    ':benis:',
    'http://i.imgur.com/tiSmbwA.png',
    'BENIS'
  ],
  spooked: [
    ':spooked:',
    'http://i.imgur.com/gvh91nd.png',
    'SPOOKED'
  ],
  garfielf: [
    ':garfielf:',
    'http://i.imgur.com/UM1hzYI.png',
    'GARFILF'
  ],
  pennsneak: [
    ':pennsneak:',
    'https://i.imgur.com/mRR9F8X.png',
    'THE TRASH IS YOUR DESTINATION'
  ],
  aerooreo: [
    'aero',
    'https://i.imgur.com/cN9Ssfd.png',
    'THAT KIKE JEW WITH NO SENSE OF HUMOR'
  ],
  trashuniverse: [
    ':trashuniverse:',
    'https://i.imgur.com/6lORTmC.jpg',
    'NEXT STOP: THE TRASH'
  ],
  discarded: [
    ':discarded:',
    'https://i.imgur.com/SraD89p.jpg',
    'OPINION DISCARDED'
  ],
  pennsmile: [
    ':pennsmile:',
    'https://i.imgur.com/JIDvcym.jpg',
    'THE GRIN OF ATHEISM'
  ],
  trash2: [
    ':trashgo:',
    'https://i.imgur.com/EAM5KD3.jpg',
    'INTO THE TRASH YOU GO'
  ],
  trashman: [
    ':trashman:',
    'https://i.imgur.com/IcKN7qV.jpg',
    'I\'M THE TRASH MAN. I EAT GARBAGE.'
  ],
  onlytrash: [
    ':onlytrash:',
    'https://i.imgur.com/Kegmi0Q.jpg',
    'NOPE. THERE\'S ONLY TRASH HERE.'
  ],
  pennsmile2: [
    ':pennsmile2:',
    'https://i.imgur.com/QeNhcOa.jpg',
    'THE FACE OF TRASH'
  ],
  bill: [
    ':bill:',
    'https://i.imgur.com/ThR0GxE.jpg',
    'BILL NYE THE SCIENCE ASSHOLE'
  ],
  pennsmile3: [
    ':pennsmile3:',
    'https://i.imgur.com/8dfyAyM.jpg',
    'NO COMMENTS NEEDED. JUST TRASH.'
  ],
  penntrasher: [
    ':penntrasher:',
    'https://i.imgur.com/ZYq5crP.jpg',
    'TRASHER MAGAZINE'
  ],
  ltrash: [
    ':ltrash:',
    'https://i.imgur.com/xbaxCgO.jpg',
    'LITERALLY TRASHER'
  ],
  pepemeister: [
    ':pepemeister:',
    'https://i.imgur.com/n5xshzf.jpg',
    'THE PEPEMEISTER'
  ],
  vincewtf: [
    ':vincewtf:',
    'https://i.imgur.com/5vpTOMQ.gif',
    'YFW YOU FIND OUT YOUR CRUSH IS A FEMINIST'
  ],
  pennbat: [
    ':pennbat:',
    'https://i.imgur.com/Hb2qKNE.png',
    'I\'M JUST TAKING OUT THE TRASH'
  ],
  trashmaster: [
    ':trashmaster:',
    'https://i.imgur.com/iJGSa5j.png',
    'WE TAKE OUT THE TRASH IN 420 SECONDS OR YOUR MONEY BACK'
  ],
  alltrash: [
    ':alltrash:',
    'https://i.imgur.com/hED48aB.png',
    'INTO THE TRASH IT ALL GOES'
  ],
  smashtrash: [
    ':smashtrash:',
    'https://i.imgur.com/MTKvgGZ.png',
    'PENN TAKES OUT THE TRASH'
  ],
  couldtrash: [
    ':couldtrash:',
    'https://i.imgur.com/zxXAltg.jpg',
    'YOU COULD HAVE TRASHED IT'
  ],
  timetotrash: [
    ':timetotrash:',
    'https://i.imgur.com/ldAcjID.png',
    'GOOD HEAVENS JUST LOOK AT THE TIME'
  ],
  problematic: [
    ':problematic:',
    'https://i.imgur.com/AT6JIiP.jpg?1',
    'problematic'
  ],
  doolittle: [
    ':doolittle:',
    'http://i.imgur.com/AuTNA9o.png',
    'doolittle'
  ],
  suicide: [
    ':suicide:',
    'http://i.imgur.com/xMbfSsr.jpg?1',
    'suicide'
  ],
  benis: [
    ':benis:',
    'https://i.imgur.com/UtoJXGH.png',
    'benis'
  ],
  smoke: [
    ':smoke:',
    'http://i.imgur.com/HpcjItw.gif',
    'smoke'
  ],
  animweed: [
    ':animweed:',
    'http://i.imgur.com/OzmSTZG.gif',
    'animweed'
  ],
  feelingbad: [
    ':feelingbad:',
    'http://i.imgur.com/AUr2Ikc.jpg',
    'feeling bad'
  ],
  handpepe: [
    ':handpepe:',
    'http://i.imgur.com/tsKnHNs.png',
    'andrawn pepe'
  ],
  warning: [
    ':warning:',
    'http://i.imgur.com/0x9kI7i.png',
    'warning'
  ],
  fatty: [
    ':fatty:',
    'http://i.imgur.com/KaKdh2s.png',
    'fattbh'
  ],
  smirkcat: [
    ':smirkcat:',
    'http://i.imgur.com/2ttK2BO.png',
    'smirkcat'
  ],
  collarpull: [
    ':collarpull:',
    'http://i.imgur.com/7CZZjYQ.png',
    'pull ur collar m8'
  ],
  kappaross: [
    ':kappaross:',
    'http://i.imgur.com/1u8HBm3.png',
    'kappa ross'
  ],
  trustnoone: [
    ':trustnoone:',
    'http://i.imgur.com/pUrFCdV.png',
    'TRST NO ONE'
  ],
  spurdocry: [
    ':spurdocry:',
    'http://i.imgur.com/KVHHQRO.png',
    'LAFF SO HARD; CRI'
  ],
  george: [
    ':george:',
    'http://i.imgur.com/ZszzL91.png',
    'CONSTANTASAJSAEd'
  ],
  ohisee: [
    ':ohisee:',
    'http://i.imgur.com/omm3jAn.png',
    'o boi'
  ],
  hukhuk: [
    ':hukhuk:',
    'http://i.imgur.com/SkF8ulm.png',
    'HUKHUKHUK'
  ],
  pepecar: [
    ':pepecar:',
    'http://i.imgur.com/bQarQya.png',
    'PEEPE CAR'
  ],
  pepecarflip: [
    ':pepecarflip:',
    'http://i.imgur.com/YBpZCvj.png',
    'PEEEPE CAR FLIP'
  ],
  dankmemedrink: [
    ':dankmemedrink:',
    'http://i.imgur.com/4mLctnD.gif',
    'DANK MEME DRUNKEN TBH'
  ],
  pixelpepe: [
    ':pixelpepe:',
    'http://i.imgur.com/Z1H1QSm.gif',
    'PIXEL PEPE'
  ],
  guyfieri: [
    ':guyfieri:',
    'http://i.imgur.com/HLiW5HD.png?1',
    'HAHA HIS HAIR'
  ],
  ifarted: [
    ':ifarted:',
    'http://i.imgur.com/bNu3j6o.png',
    "I FARTED"
  ],
  ablow: [
    ':ablow:',
    'http://i.imgur.com/oe8HKq4.png',
    "GOTTA GIVE IT A BLOW"
  ],
  neatnugget: [
    ':neatnugget:',
    'http://i.imgur.com/yonyfRz.png',
    "WHAHT A NEAT NUGGET"
  ],
  bthuthu: [
    ':bthuthu:',
    'http://i.imgur.com/4GZesRe.png',
    "BUTHUTHUTHUTHU"
  ],
  cheeki: [
    ':cheeki:',
    'http://i.imgur.com/2luxDfD.png',
    "CHEEKI BREEKI"
  ],
  disgustwow: [
    ':disgustwow:',
    'http://i.imgur.com/JI4AbsR.png',
    'WHHAT THE FUCK DISGUST'
  ],
  conanuh: [
    ':conanuh:',
    'http://i.imgur.com/1TWrXNF.png',
    "CONANA UHHHHHHHHHHHHHH"
  ],
  mladypixel: [
    ':mladypixel:',
    'http://i.imgur.com/ugZVg0y.gif',
    "PIXEL ART HUE"
  ]
}


var emoticon_3 = {
  memeimgxppLwr1: [
    ':xppLwr1:',
    'http://i.imgur.com/xppLwr1.png',
    'meme imgur xppLwr1'
  ],
  memeimgQjY2Bpn: [
    ':QjY2Bpn:',
    'http://i.imgur.com/QjY2Bpn.png',
    'meme imgur QjY2Bpn'
  ],
  memeimgoPrEEfa: [
    ':oPrEEfa:',
    'http://i.imgur.com/oPrEEfa.png',
    'meme imgur oPrEEfa'
  ],
  memeimgjuRqPrv: [
    ':juRqPrv:',
    'http://i.imgur.com/juRqPrv.png',
    'meme imgur juRqPrv'
  ],
  memeimg7w6FNiX: [
    ':7w6FNiX:',
    'http://i.imgur.com/7w6FNiX.png',
    'meme imgur 7w6FNiX'
  ],
  memeimg2Susb2k: [
    ':2Susb2k:',
    'http://i.imgur.com/2Susb2k.png',
    'meme imgur 2Susb2k'
  ],
  memeimgItonPfe: [
    ':ItonPfe:',
    'http://i.imgur.com/ItonPfe.png',
    'meme imgur ItonPfe'
  ],
  memeimgGKFAB0b: [
    ':GKFAB0b:',
    'http://i.imgur.com/GKFAB0b.png',
    'meme imgur GKFAB0b'
  ],
  memeimgbITb9uo: [
    ':bITb9uo:',
    'http://i.imgur.com/bITb9uo.png',
    'meme imgur bITb9uo'
  ],
  memeimgii6pbtT: [
    ':ii6pbtT:',
    'http://i.imgur.com/ii6pbtT.png',
    'meme imgur ii6pbtT'
  ],
  memeimguDDZazd: [
    ':uDDZazd:',
    'http://i.imgur.com/uDDZazd.png',
    'meme imgur uDDZazd'
  ],
  memeimgpD6bnCB: [
    ':pD6bnCB:',
    'http://i.imgur.com/pD6bnCB.png',
    'meme imgur pD6bnCB'
  ],
  memeimgTrQBlPb: [
    ':TrQBlPb:',
    'http://i.imgur.com/TrQBlPb.png',
    'meme imgur TrQBlPb'
  ],
  memeimgWkgZHw5: [
    ':WkgZHw5:',
    'http://i.imgur.com/WkgZHw5.png',
    'meme imgur WkgZHw5'
  ],
  memeimghnhooee: [
    ':hnhooee:',
    'http://i.imgur.com/hnhooee.png',
    'meme imgur hnhooee'
  ],
  memeimg6jbD6sb: [
    ':6jbD6sb:',
    'http://i.imgur.com/6jbD6sb.png',
    'meme imgur 6jbD6sb'
  ],
  memeimgg4lozrz: [
    ':g4lozrz:',
    'http://i.imgur.com/g4lozrz.png',
    'meme imgur g4lozrz'
  ],
  memeimgiRu9fjS: [
    ':iRu9fjS:',
    'http://i.imgur.com/iRu9fjS.png',
    'meme imgur iRu9fjS'
  ],
  memeimglY64ZMZ: [
    ':lY64ZMZ:',
    'http://i.imgur.com/lY64ZMZ.png',
    'meme imgur lY64ZMZ'
  ],
  memeimgx30p68v: [
    ':x30p68v:',
    'http://i.imgur.com/x30p68v.png',
    'meme imgur x30p68v'
  ],
  memeimgl0QIlWK: [
    ':l0QIlWK:',
    'http://i.imgur.com/l0QIlWK.png',
    'meme imgur l0QIlWK'
  ],
  memeimgXn1YUJx: [
    ':Xn1YUJx:',
    'http://i.imgur.com/Xn1YUJx.png',
    'meme imgur Xn1YUJx'
  ],
  memeimgIsHR31z: [
    ':IsHR31z:',
    'http://i.imgur.com/IsHR31z.png',
    'meme imgur IsHR31z'
  ],
  memeimgegGrJ6m: [
    ':egGrJ6m:',
    'http://i.imgur.com/egGrJ6m.png',
    'meme imgur egGrJ6m'
  ],
  memeimgA0fV5kW: [
    ':A0fV5kW:',
    'http://i.imgur.com/A0fV5kW.png',
    'meme imgur A0fV5kW'
  ],
  memeimgN1DN7M4: [
    ':N1DN7M4:',
    'http://i.imgur.com/N1DN7M4.png',
    'meme imgur N1DN7M4'
  ],
  memeimgRts212F: [
    ':Rts212F:',
    'http://i.imgur.com/Rts212F.png',
    'meme imgur Rts212F'
  ],
  memeimgArdjo5y: [
    ':Ardjo5y:',
    'http://i.imgur.com/Ardjo5y.png',
    'meme imgur Ardjo5y'
  ],
  memeimgNn6sJfG: [
    ':Nn6sJfG:',
    'http://i.imgur.com/Nn6sJfG.png',
    'meme imgur Nn6sJfG'
  ],
  memeimgzuoHkyd: [
    ':zuoHkyd:',
    'http://i.imgur.com/zuoHkyd.png',
    'meme imgur zuoHkyd'
  ],
  memeimgxJ8U6mG: [
    ':xJ8U6mG:',
    'http://i.imgur.com/xJ8U6mG.png',
    'meme imgur xJ8U6mG'
  ],
  memeimgAka5lH9: [
    ':Aka5lH9:',
    'http://i.imgur.com/Aka5lH9.png',
    'meme imgur Aka5lH9'
  ],
  memeimg1vn9dzK: [
    ':1vn9dzK:',
    'http://i.imgur.com/1vn9dzK.png',
    'meme imgur 1vn9dzK'
  ],
  memeimgrkzqqV2: [
    ':rkzqqV2:',
    'http://i.imgur.com/rkzqqV2.png',
    'meme imgur rkzqqV2'
  ],
  memeimgATaphPm: [
    ':ATaphPm:',
    'http://i.imgur.com/ATaphPm.png',
    'meme imgur ATaphPm'
  ],
  memeimglPsGEfM: [
    ':lPsGEfM:',
    'http://i.imgur.com/lPsGEfM.png',
    'meme imgur lPsGEfM'
  ],
  memeimgR3Og7To: [
    ':R3Og7To:',
    'http://i.imgur.com/R3Og7To.png',
    'meme imgur R3Og7To'
  ],
  memeimgY7SgxjY: [
    ':Y7SgxjY:',
    'http://i.imgur.com/Y7SgxjY.png',
    'meme imgur Y7SgxjY'
  ],
  memeimgUwwcgFe: [
    ':UwwcgFe:',
    'http://i.imgur.com/UwwcgFe.png',
    'meme imgur UwwcgFe'
  ],
  memeimgyITYTtg: [
    ':yITYTtg:',
    'http://i.imgur.com/yITYTtg.png',
    'meme imgur yITYTtg'
  ],
  memeimg1Y2snnS: [
    ':1Y2snnS:',
    'http://i.imgur.com/1Y2snnS.png',
    'meme imgur 1Y2snnS'
  ],
  memeimgSz7Hn3R: [
    ':Sz7Hn3R:',
    'http://i.imgur.com/Sz7Hn3R.png',
    'meme imgur Sz7Hn3R'
  ],
  memeimgOOkT7ZV: [
    ':OOkT7ZV:',
    'http://i.imgur.com/OOkT7ZV.png',
    'meme imgur OOkT7ZV'
  ],
  memeimgt2saUty: [
    ':t2saUty:',
    'http://i.imgur.com/t2saUty.png',
    'meme imgur t2saUty'
  ],
  memeimgQ1g8NH5: [
    ':Q1g8NH5:',
    'http://i.imgur.com/Q1g8NH5.png',
    'meme imgur Q1g8NH5'
  ],
  memeimgSZC9l47: [
    ':SZC9l47:',
    'http://i.imgur.com/SZC9l47.png',
    'meme imgur SZC9l47'
  ],
  memeimgwt1gmL6: [
    ':wt1gmL6:',
    'http://i.imgur.com/wt1gmL6.png',
    'meme imgur wt1gmL6'
  ],
  memeimgFxzPZJY: [
    ':FxzPZJY:',
    'http://i.imgur.com/FxzPZJY.png',
    'meme imgur FxzPZJY'
  ],
  memeimgG9l1PRP: [
    ':G9l1PRP:',
    'http://i.imgur.com/G9l1PRP.png',
    'meme imgur G9l1PRP'
  ],
  memeimg2L8Rdmu: [
    ':2L8Rdmu:',
    'http://i.imgur.com/2L8Rdmu.png',
    'meme imgur 2L8Rdmu'
  ],
  memeimgrnPX2xe: [
    ':rnPX2xe:',
    'http://i.imgur.com/rnPX2xe.png',
    'meme imgur rnPX2xe'
  ],
  memeimgVBSuZld: [
    ':VBSuZld:',
    'http://i.imgur.com/VBSuZld.png',
    'meme imgur VBSuZld'
  ],
  memeimgIWxszQf: [
    ':IWxszQf:',
    'http://i.imgur.com/IWxszQf.png',
    'meme imgur IWxszQf'
  ],
  memeimgSg0Saij: [
    ':Sg0Saij:',
    'http://i.imgur.com/Sg0Saij.png',
    'meme imgur Sg0Saij'
  ],
  memeimgbrRG3YD: [
    ':brRG3YD:',
    'http://i.imgur.com/brRG3YD.png',
    'meme imgur brRG3YD'
  ],
  memeimgQunbdUi: [
    ':QunbdUi:',
    'http://i.imgur.com/QunbdUi.png',
    'meme imgur QunbdUi'
  ],
  memeimgFOKgseg: [
    ':FOKgseg:',
    'http://i.imgur.com/FOKgseg.png',
    'meme imgur FOKgseg'
  ],
  memeimgWKgtbOa: [
    ':WKgtbOa:',
    'http://i.imgur.com/WKgtbOa.png',
    'meme imgur WKgtbOa'
  ],
  memeimgSBBGizf: [
    ':SBBGizf:',
    'http://i.imgur.com/SBBGizf.png',
    'meme imgur SBBGizf'
  ],
  memeimgl0byEXM: [
    ':l0byEXM:',
    'http://i.imgur.com/l0byEXM.png',
    'meme imgur l0byEXM'
  ],
  memeimgwLHrhQv: [
    ':wLHrhQv:',
    'http://i.imgur.com/wLHrhQv.png',
    'meme imgur wLHrhQv'
  ],
  memeimgE2GX6mP: [
    ':E2GX6mP:',
    'http://i.imgur.com/E2GX6mP.png',
    'meme imgur E2GX6mP'
  ],
  memeimg3KqDIyq: [
    ':3KqDIyq:',
    'http://i.imgur.com/3KqDIyq.png',
    'meme imgur 3KqDIyq'
  ],
  memeimg11nxWUZ: [
    ':11nxWUZ:',
    'http://i.imgur.com/11nxWUZ.png',
    'meme imgur 11nxWUZ'
  ],
  memeimgZizp049: [
    ':Zizp049:',
    'http://i.imgur.com/Zizp049.png',
    'meme imgur Zizp049'
  ],
  memeimgEy24uFx: [
    ':Ey24uFx:',
    'http://i.imgur.com/Ey24uFx.png',
    'meme imgur Ey24uFx'
  ],
  memeimgBOkcCM0: [
    ':BOkcCM0:',
    'http://i.imgur.com/BOkcCM0.png',
    'meme imgur BOkcCM0'
  ],
  memeimghvB4G7F: [
    ':hvB4G7F:',
    'http://i.imgur.com/hvB4G7F.png',
    'meme imgur hvB4G7F'
  ],
  memeimgjliRy0B: [
    ':jliRy0B:',
    'http://i.imgur.com/jliRy0B.png',
    'meme imgur jliRy0B'
  ],
  memeimgl3wNVVI: [
    ':l3wNVVI:',
    'http://i.imgur.com/l3wNVVI.png',
    'meme imgur l3wNVVI'
  ],
  memeimgy7sC7r3: [
    ':y7sC7r3:',
    'http://i.imgur.com/y7sC7r3.png',
    'meme imgur y7sC7r3'
  ],
  memeimgKDhNKqP: [
    ':KDhNKqP:',
    'http://i.imgur.com/KDhNKqP.png',
    'meme imgur KDhNKqP'
  ],
  memeimg8xByCzL: [
    ':8xByCzL:',
    'http://i.imgur.com/8xByCzL.png',
    'meme imgur 8xByCzL'
  ],
  memeimgcfQazxC: [
    ':cfQazxC:',
    'http://i.imgur.com/cfQazxC.png',
    'meme imgur cfQazxC'
  ],
  memeimgJqEU7rK: [
    ':JqEU7rK:',
    'http://i.imgur.com/JqEU7rK.png',
    'meme imgur JqEU7rK'
  ],
  memeimgEXdFIdi: [
    ':EXdFIdi:',
    'http://i.imgur.com/EXdFIdi.png',
    'meme imgur EXdFIdi'
  ],
  memeimgl9tmxrL: [
    ':l9tmxrL:',
    'http://i.imgur.com/l9tmxrL.png',
    'meme imgur l9tmxrL'
  ],
  memeimgCrpPLaC: [
    ':CrpPLaC:',
    'http://i.imgur.com/CrpPLaC.png',
    'meme imgur CrpPLaC'
  ],
  memeimgI7w01ye: [
    ':I7w01ye:',
    'http://i.imgur.com/I7w01ye.png',
    'meme imgur I7w01ye'
  ],
  memeimgDFv0ubf: [
    ':DFv0ubf:',
    'http://i.imgur.com/DFv0ubf.png',
    'meme imgur DFv0ubf'
  ],
  memeimg3tgdZGM: [
    ':3tgdZGM:',
    'http://i.imgur.com/3tgdZGM.png',
    'meme imgur 3tgdZGM'
  ],
  memeimgGciqbCm: [
    ':GciqbCm:',
    'http://i.imgur.com/GciqbCm.png',
    'meme imgur GciqbCm'
  ],
  memeimguv36LpH: [
    ':uv36LpH:',
    'http://i.imgur.com/uv36LpH.png',
    'meme imgur uv36LpH'
  ],
  memeimgTSxMpZd: [
    ':TSxMpZd:',
    'http://i.imgur.com/TSxMpZd.png',
    'meme imgur TSxMpZd'
  ],
  memeimgs2C2Ws9: [
    ':s2C2Ws9:',
    'http://i.imgur.com/s2C2Ws9.png',
    'meme imgur s2C2Ws9'
  ],
  memeimgS7cup6f: [
    ':S7cup6f:',
    'http://i.imgur.com/S7cup6f.png',
    'meme imgur S7cup6f'
  ],
  memeimg3PbuCPo: [
    ':3PbuCPo:',
    'http://i.imgur.com/3PbuCPo.png',
    'meme imgur 3PbuCPo'
  ],
  memeimg3Z0wQ5A: [
    ':3Z0wQ5A:',
    'http://i.imgur.com/3Z0wQ5A.png',
    'meme imgur 3Z0wQ5A'
  ],
  memeimggywqYs7: [
    ':gywqYs7:',
    'http://i.imgur.com/gywqYs7.png',
    'meme imgur gywqYs7'
  ],
  memeimgqodcBza: [
    ':qodcBza:',
    'http://i.imgur.com/qodcBza.png',
    'meme imgur qodcBza'
  ],
  memeimgW6UbmDR: [
    ':W6UbmDR:',
    'http://i.imgur.com/W6UbmDR.png',
    'meme imgur W6UbmDR'
  ],
  memeimg0afUP1e: [
    ':0afUP1e:',
    'http://i.imgur.com/0afUP1e.png',
    'meme imgur 0afUP1e'
  ],
  memeimgjGQwD4d: [
    ':jGQwD4d:',
    'http://i.imgur.com/jGQwD4d.png',
    'meme imgur jGQwD4d'
  ],
  memeimgiy8UR5G: [
    ':iy8UR5G:',
    'http://i.imgur.com/iy8UR5G.png',
    'meme imgur iy8UR5G'
  ],
  memeimgvYdD8HM: [
    ':vYdD8HM:',
    'http://i.imgur.com/vYdD8HM.png',
    'meme imgur vYdD8HM'
  ],
  memeimgFkymxet: [
    ':Fkymxet:',
    'http://i.imgur.com/Fkymxet.png',
    'meme imgur Fkymxet'
  ],
  memeimg5nmSTPS: [
    ':5nmSTPS:',
    'http://i.imgur.com/5nmSTPS.png',
    'meme imgur 5nmSTPS'
  ],
  memeimgtr24sdA: [
    ':tr24sdA:',
    'http://i.imgur.com/tr24sdA.png',
    'meme imgur tr24sdA'
  ],
  memeimgYovZi9M: [
    ':YovZi9M:',
    'http://i.imgur.com/YovZi9M.png',
    'meme imgur YovZi9M'
  ],
  memeimg75PVeuB: [
    ':75PVeuB:',
    'http://i.imgur.com/75PVeuB.png',
    'meme imgur 75PVeuB'
  ],
  memeimg9WOKMNC: [
    ':9WOKMNC:',
    'http://i.imgur.com/9WOKMNC.png',
    'meme imgur 9WOKMNC'
  ],
  memeimgCopRowU: [
    ':CopRowU:',
    'http://i.imgur.com/CopRowU.png',
    'meme imgur CopRowU'
  ],
  memeimgVPHlPr9: [
    ':VPHlPr9:',
    'http://i.imgur.com/VPHlPr9.png',
    'meme imgur VPHlPr9'
  ],
  memeimgb2tAWnC: [
    ':b2tAWnC:',
    'http://i.imgur.com/b2tAWnC.png',
    'meme imgur b2tAWnC'
  ],
  memeimgNn5PrIE: [
    ':Nn5PrIE:',
    'http://i.imgur.com/Nn5PrIE.png',
    'meme imgur Nn5PrIE'
  ],
  memeimgbhfZhcE: [
    ':bhfZhcE:',
    'http://i.imgur.com/bhfZhcE.png',
    'meme imgur bhfZhcE'
  ],
  memeimgIYu5D2H: [
    ':IYu5D2H:',
    'http://i.imgur.com/IYu5D2H.png',
    'meme imgur IYu5D2H'
  ],
  memeimgB5kIIma: [
    ':B5kIIma:',
    'http://i.imgur.com/B5kIIma.png',
    'meme imgur B5kIIma'
  ],
  memeimgmv2Ze9J: [
    ':mv2Ze9J:',
    'http://i.imgur.com/mv2Ze9J.png',
    'meme imgur mv2Ze9J'
  ],
  memeimg6RO0ZFt: [
    ':6RO0ZFt:',
    'http://i.imgur.com/6RO0ZFt.png',
    'meme imgur 6RO0ZFt'
  ],
  memeimglAHzcPh: [
    ':lAHzcPh:',
    'http://i.imgur.com/lAHzcPh.png',
    'meme imgur lAHzcPh'
  ],
  memeimgq44on0T: [
    ':q44on0T:',
    'http://i.imgur.com/q44on0T.png',
    'meme imgur q44on0T'
  ],
  memeimgaQtov40: [
    ':aQtov40:',
    'http://i.imgur.com/aQtov40.png',
    'meme imgur aQtov40'
  ],
  memeimg8nKMfWT: [
    ':8nKMfWT:',
    'http://i.imgur.com/8nKMfWT.png',
    'meme imgur 8nKMfWT'
  ],
  memeimgGLxKPVn: [
    ':GLxKPVn:',
    'http://i.imgur.com/GLxKPVn.png',
    'meme imgur GLxKPVn'
  ],
  memeimg0rimDEX: [
    ':0rimDEX:',
    'http://i.imgur.com/0rimDEX.png',
    'meme imgur 0rimDEX'
  ],
  memeimg5Fcw6xe: [
    ':5Fcw6xe:',
    'http://i.imgur.com/5Fcw6xe.png',
    'meme imgur 5Fcw6xe'
  ],
  memeimgzLZI7KE: [
    ':zLZI7KE:',
    'http://i.imgur.com/zLZI7KE.png',
    'meme imgur zLZI7KE'
  ],
  memeimgvAUQeIt: [
    ':vAUQeIt:',
    'http://i.imgur.com/vAUQeIt.png',
    'meme imgur vAUQeIt'
  ],
  memeimgun9rY9L: [
    ':un9rY9L:',
    'http://i.imgur.com/un9rY9L.png',
    'meme imgur un9rY9L'
  ],
  memeimgsyXO9Z9: [
    ':syXO9Z9:',
    'http://i.imgur.com/syXO9Z9.png',
    'meme imgur syXO9Z9'
  ],
  memeimg2bcVj3J: [
    ':2bcVj3J:',
    'http://i.imgur.com/2bcVj3J.png',
    'meme imgur 2bcVj3J'
  ],
  memeimggKnXpeX: [
    ':gKnXpeX:',
    'http://i.imgur.com/gKnXpeX.png',
    'meme imgur gKnXpeX'
  ],
  memeimgmyyYs1e: [
    ':myyYs1e:',
    'http://i.imgur.com/myyYs1e.png',
    'meme imgur myyYs1e'
  ],
  memeimg8umBKBn: [
    ':8umBKBn:',
    'http://i.imgur.com/8umBKBn.png',
    'meme imgur 8umBKBn'
  ],
  memeimg0uLNqmp: [
    ':0uLNqmp:',
    'http://i.imgur.com/0uLNqmp.png',
    'meme imgur 0uLNqmp'
  ],
  memeimgrx7ncNt: [
    ':rx7ncNt:',
    'http://i.imgur.com/rx7ncNt.png',
    'meme imgur rx7ncNt'
  ],
  memeimgDJQlc7V: [
    ':DJQlc7V:',
    'http://i.imgur.com/DJQlc7V.png',
    'meme imgur DJQlc7V'
  ],
  memeimgbPbXGcK: [
    ':bPbXGcK:',
    'http://i.imgur.com/bPbXGcK.png',
    'meme imgur bPbXGcK'
  ],
  memeimgWqoiZru: [
    ':WqoiZru:',
    'http://i.imgur.com/WqoiZru.png',
    'meme imgur WqoiZru'
  ],
  memeimguGEbfPl: [
    ':uGEbfPl:',
    'http://i.imgur.com/uGEbfPl.png',
    'meme imgur uGEbfPl'
  ],
  memeimgjjQdPWI: [
    ':jjQdPWI:',
    'http://i.imgur.com/jjQdPWI.png',
    'meme imgur jjQdPWI'
  ],
  memeimgsUoz68B: [
    ':sUoz68B:',
    'http://i.imgur.com/sUoz68B.png',
    'meme imgur sUoz68B'
  ],
  memeimgYc3qLIz: [
    ':Yc3qLIz:',
    'http://i.imgur.com/Yc3qLIz.png',
    'meme imgur Yc3qLIz'
  ],
  memeimgu2pXXm2: [
    ':u2pXXm2:',
    'http://i.imgur.com/u2pXXm2.png',
    'meme imgur u2pXXm2'
  ],
  memeimgTNPlQkY: [
    ':TNPlQkY:',
    'http://i.imgur.com/TNPlQkY.png',
    'meme imgur TNPlQkY'
  ],
  memeimgODVOjNd: [
    ':ODVOjNd:',
    'http://i.imgur.com/ODVOjNd.png',
    'meme imgur ODVOjNd'
  ],
  memeimgCKeyNfw: [
    ':CKeyNfw:',
    'http://i.imgur.com/CKeyNfw.png',
    'meme imgur CKeyNfw'
  ],
  memeimgoPodmhx: [
    ':oPodmhx:',
    'http://i.imgur.com/oPodmhx.png',
    'meme imgur oPodmhx'
  ],
  memeimg42r8cGu: [
    ':42r8cGu:',
    'http://i.imgur.com/42r8cGu.png',
    'meme imgur 42r8cGu'
  ],
  memeimgfgV7UtW: [
    ':fgV7UtW:',
    'http://i.imgur.com/fgV7UtW.png',
    'meme imgur fgV7UtW'
  ],
  memeimgnYZNmTU: [
    ':nYZNmTU:',
    'http://i.imgur.com/nYZNmTU.png',
    'meme imgur nYZNmTU'
  ],
  memeimgTHe7PwP: [
    ':THe7PwP:',
    'http://i.imgur.com/THe7PwP.png',
    'meme imgur THe7PwP'
  ],
  memeimgdVbAnHD: [
    ':dVbAnHD:',
    'http://i.imgur.com/dVbAnHD.png',
    'meme imgur dVbAnHD'
  ],
  memeimgGD7ddfJ: [
    ':GD7ddfJ:',
    'http://i.imgur.com/GD7ddfJ.png',
    'meme imgur GD7ddfJ'
  ],
  memeimgu8kVP3V: [
    ':u8kVP3V:',
    'http://i.imgur.com/u8kVP3V.png',
    'meme imgur u8kVP3V'
  ],
  memeimg92MSzyK: [
    ':92MSzyK:',
    'http://i.imgur.com/92MSzyK.png',
    'meme imgur 92MSzyK'
  ],
  memeimgE8r3hI0: [
    ':E8r3hI0:',
    'http://i.imgur.com/E8r3hI0.png',
    'meme imgur E8r3hI0'
  ],
  memeimgabAkUGy: [
    ':abAkUGy:',
    'http://i.imgur.com/abAkUGy.png',
    'meme imgur abAkUGy'
  ],
  memeimghXhgdcj: [
    ':hXhgdcj:',
    'http://i.imgur.com/hXhgdcj.png',
    'meme imgur hXhgdcj'
  ],
  memeimgn8w8ow7: [
    ':n8w8ow7:',
    'http://i.imgur.com/n8w8ow7.png',
    'meme imgur n8w8ow7'
  ],
  memeimgKx6Zv1G: [
    ':Kx6Zv1G:',
    'http://i.imgur.com/Kx6Zv1G.png',
    'meme imgur Kx6Zv1G'
  ],
  memeimgonpH48h: [
    ':onpH48h:',
    'http://i.imgur.com/onpH48h.png',
    'meme imgur onpH48h'
  ],
  memeimgqTesWtP: [
    ':qTesWtP:',
    'http://i.imgur.com/qTesWtP.png',
    'meme imgur qTesWtP'
  ],
  memeimgD7dM2Z6: [
    ':D7dM2Z6:',
    'http://i.imgur.com/D7dM2Z6.png',
    'meme imgur D7dM2Z6'
  ],
  memeimgx4ne7Ag: [
    ':x4ne7Ag:',
    'http://i.imgur.com/x4ne7Ag.png',
    'meme imgur x4ne7Ag'
  ],
  memeimg3SPmqM8: [
    ':3SPmqM8:',
    'http://i.imgur.com/3SPmqM8.png',
    'meme imgur 3SPmqM8'
  ],
  memeimg5SfvJvW: [
    ':5SfvJvW:',
    'http://i.imgur.com/5SfvJvW.png',
    'meme imgur 5SfvJvW'
  ],
  memeimgIUgm06X: [
    ':IUgm06X:',
    'http://i.imgur.com/IUgm06X.png',
    'meme imgur IUgm06X'
  ],
  memeimg1soYosP: [
    ':1soYosP:',
    'http://i.imgur.com/1soYosP.png',
    'meme imgur 1soYosP'
  ],
  memeimgw1XDwg0: [
    ':w1XDwg0:',
    'http://i.imgur.com/w1XDwg0.png',
    'meme imgur w1XDwg0'
  ],
  memeimgXjKswRT: [
    ':XjKswRT:',
    'http://i.imgur.com/XjKswRT.png',
    'meme imgur XjKswRT'
  ],
  memeimgjEVc70l: [
    ':jEVc70l:',
    'http://i.imgur.com/jEVc70l.png',
    'meme imgur jEVc70l'
  ],
  memeimg1ZIsf0Q: [
    ':1ZIsf0Q:',
    'http://i.imgur.com/1ZIsf0Q.png',
    'meme imgur 1ZIsf0Q'
  ],
  memeimgPGF3l3w: [
    ':PGF3l3w:',
    'http://i.imgur.com/PGF3l3w.png',
    'meme imgur PGF3l3w'
  ],
  memeimgkTTV5jx: [
    ':kTTV5jx:',
    'http://i.imgur.com/kTTV5jx.png',
    'meme imgur kTTV5jx'
  ],
  memeimgdP0NrkD: [
    ':dP0NrkD:',
    'http://i.imgur.com/dP0NrkD.png',
    'meme imgur dP0NrkD'
  ],
  memeimgROJ0SCa: [
    ':ROJ0SCa:',
    'http://i.imgur.com/ROJ0SCa.png',
    'meme imgur ROJ0SCa'
  ],
  memeimg1Egm9Xj: [
    ':1Egm9Xj:',
    'http://i.imgur.com/1Egm9Xj.png',
    'meme imgur 1Egm9Xj'
  ],
  memeimga6nU1qg: [
    ':a6nU1qg:',
    'http://i.imgur.com/a6nU1qg.png',
    'meme imgur a6nU1qg'
  ],
  memeimgSsQT04Q: [
    ':SsQT04Q:',
    'http://i.imgur.com/SsQT04Q.png',
    'meme imgur SsQT04Q'
  ],
  memeimgg7lP95C: [
    ':g7lP95C:',
    'http://i.imgur.com/g7lP95C.png',
    'meme imgur g7lP95C'
  ],
  memeimgJYnm9VW: [
    ':JYnm9VW:',
    'http://i.imgur.com/JYnm9VW.png',
    'meme imgur JYnm9VW'
  ],
  memeimgWP6zUVT: [
    ':WP6zUVT:',
    'http://i.imgur.com/WP6zUVT.png',
    'meme imgur WP6zUVT'
  ],
  memeimglLqHBq7: [
    ':lLqHBq7:',
    'http://i.imgur.com/lLqHBq7.png',
    'meme imgur lLqHBq7'
  ],
  memeimgvML6uK5: [
    ':vML6uK5:',
    'http://i.imgur.com/vML6uK5.png',
    'meme imgur vML6uK5'
  ],
  memeimgw3WKzsd: [
    ':w3WKzsd:',
    'http://i.imgur.com/w3WKzsd.png',
    'meme imgur w3WKzsd'
  ],
  memeimg6lyPJXt: [
    ':6lyPJXt:',
    'http://i.imgur.com/6lyPJXt.png',
    'meme imgur 6lyPJXt'
  ],
  memeimgJ9OwGFW: [
    ':J9OwGFW:',
    'http://i.imgur.com/J9OwGFW.png',
    'meme imgur J9OwGFW'
  ],
  memeimggUO0EFw: [
    ':gUO0EFw:',
    'http://i.imgur.com/gUO0EFw.png',
    'meme imgur gUO0EFw'
  ],
  memeimglUobTLW: [
    ':lUobTLW:',
    'http://i.imgur.com/lUobTLW.png',
    'meme imgur lUobTLW'
  ],
  memeimgPR2etkb: [
    ':PR2etkb:',
    'http://i.imgur.com/PR2etkb.png',
    'meme imgur PR2etkb'
  ],
  memeimgrDjdcUQ: [
    ':rDjdcUQ:',
    'http://i.imgur.com/rDjdcUQ.png',
    'meme imgur rDjdcUQ'
  ],
  memeimgumie84p: [
    ':umie84p:',
    'http://i.imgur.com/umie84p.png',
    'meme imgur umie84p'
  ],
  memeimgN4kIXm6: [
    ':N4kIXm6:',
    'http://i.imgur.com/N4kIXm6.png',
    'meme imgur N4kIXm6'
  ],
  memeimg7OREabM: [
    ':7OREabM:',
    'http://i.imgur.com/7OREabM.png',
    'meme imgur 7OREabM'
  ],
  memeimgAMAxJyB: [
    ':AMAxJyB:',
    'http://i.imgur.com/AMAxJyB.png',
    'meme imgur AMAxJyB'
  ],
  memeimgPPnOfRX: [
    ':PPnOfRX:',
    'http://i.imgur.com/PPnOfRX.png',
    'meme imgur PPnOfRX'
  ],
  memeimgPYtY1lB: [
    ':PYtY1lB:',
    'http://i.imgur.com/PYtY1lB.png',
    'meme imgur PYtY1lB'
  ],
  memeimgDQa5Hqp: [
    ':DQa5Hqp:',
    'http://i.imgur.com/DQa5Hqp.png',
    'meme imgur DQa5Hqp'
  ],
  memeimg9p0ejrZ: [
    ':9p0ejrZ:',
    'http://i.imgur.com/9p0ejrZ.png',
    'meme imgur 9p0ejrZ'
  ],
  memeimgkhJK3GM: [
    ':khJK3GM:',
    'http://i.imgur.com/khJK3GM.png',
    'meme imgur khJK3GM'
  ],
  lool: [
    ':lool:',
    'http://i.imgur.com/uNjx0VR.png',
    'lool'
  ],
  badumtss: [
    ':badumtss:',
    'http://i.imgur.com/tzdK1B8.png',
    'ba dum tss'
  ],
  confident: [
    ':confident:',
    'http://i.imgur.com/sFpY0hd.png',
    'confident'
  ],
  genius: [
    ':genius:',
    'http://i.imgur.com/wOlp4gc.png',
    'genius'
  ],
  foreverablack: [
    ':foreverablack:',
    'http://i.imgur.com/eYozsXA.png',
    'FOREVER A NIGGER'
  ],
  ynot: [
    ':ynot:',
    'http://i.imgur.com/dfAkHaT.png',
    'ynot'
  ],
  plspls: [
    ':plspls:',
    'http://i.imgur.com/jrcH7iN.png',
    'plspls'
  ],
  megusta: [
    ':megusta:',
    'http://i.imgur.com/WBVqQah.png',
    'megusta'
  ],
  o: [
    ':o:',
    'http://i.imgur.com/rVrqYxb.png',
    'ooooooooooooooooooooooooooooooooooo'
  ],
  omgomg: [
    ':omgomg:',
    'http://i.imgur.com/UZ6oybV.png',
    'omgomg'
  ],
  memercy: [
    ':mercy:',
    'http://i.imgur.com/gg86lM7.png',
    'DOES THIS LOOK LIKE THE FACE OF MERCY'
  ],
  crymercy: [
    ':crymercy:',
    'http://i.imgur.com/oPf9qaH.png',
    'cry mercy'
  ],
  holyfuckingshit: [
    ':holyfuckingsh:',
    'http://i.imgur.com/Z4420t0.png',
    'holy fucking shit'
  ],
  revenge: [
    ':revenge:',
    'http://i.imgur.com/4SGUhMJ.png',
    'revenge'
  ],
  nowai: [
    ':nowai:',
    'http://i.imgur.com/VSD68iA.png',
    'no wai'
  ],
  disappoint: [
    ':disappoint:',
    'http://i.imgur.com/IuAhgG9.png',
    'disappoint'
  ],
  disappointok: [
    ':disappointok:',
    'http://i.imgur.com/cUyHPqs.png',
    'disappoint ok'
  ],
  actually: [
    ':actually:',
    'http://i.imgur.com/TEZaTei.png',
    'actually'
  ]
};
var emoticon_4 = {
  imgurdongY21xRGc: [
    ':dongintensifies:',
    'http://i.imgur.com/Y21xRGc.jpg',
    'dong intensifies'
  ],
  imgurdongfqgiO3C: [
    ':my3dpenis:',
    'http://i.imgur.com/fqgiO3C.jpg',
    'my 3d penis'
  ],
  imgurdongArbkDMd: [
    ':expand:',
    'http://i.imgur.com/ArbkDMd.jpg',
    'expand'
  ],
  imgurdongoeNPAcI: [
    ':expand2:',
    'http://i.imgur.com/oeNPAcI.jpg',
    'expand 2'
  ],
  imgurdongtYAbOEK: [
    ':expand3:',
    'http://i.imgur.com/tYAbOEK.jpg',
    'expand 3'
  ],
  imgurdongflLSGR0: [
    ':expand4:',
    'http://i.imgur.com/flLSGR0.jpg',
    'expand 4'
  ],
  imgurdongvuaw4uj: [
    ':donkeysdongcockreturns:',
    'http://i.imgur.com/vuaw4uj.jpg',
    'donkey\'s dong cock returns'
  ],
  imgurdongWsJjI1E: [
    ':poopscoop:',
    'http://i.imgur.com/WsJjI1E.jpg',
    'poop scoop'
  ],
  imgurdong7y1PZ44: [
    ':hugetropicalorgy:',
    'http://i.imgur.com/7y1PZ44.jpg',
    'huge tropical orgy'
  ],
  imgurdongihzpHyH: [
    ':analassault:',
    'http://i.imgur.com/ihzpHyH.jpg',
    'anal assault'
  ],
  imgurdongfjo5nmC: [
    ':kirbystripledeluxedong:',
    'http://i.imgur.com/fjo5nmC.jpg',
    'kirby\'s triple deluxe dong'
  ],
  imgurdongxIbjyrV: [
    ':erectpenis:',
    'http://i.imgur.com/xIbjyrV.jpg',
    'erect penis'
  ],
  imgurdongmRYvJI4: [
    ':analmassacre:',
    'http://i.imgur.com/mRYvJI4.jpg',
    'anal massacre'
  ],
  imgurdongLQTSFfn: [
    ':mariopoopsoutsand:',
    'http://i.imgur.com/LQTSFfn.jpg',
    'mario poops out sand'
  ],
  imgurdongme4YY9e: [
    ':rectalrampage:',
    'http://i.imgur.com/me4YY9e.jpg',
    'rectal rampage'
  ],
  imgurdong0pv0vet: [
    ':featurelength:',
    'http://i.imgur.com/0pv0vet.jpg',
    'feature length'
  ],
  imgurdongazKA6IF: [
    ':dickfreeze:',
    'http://i.imgur.com/azKA6IF.jpg',
    'dick freeze'
  ],
  imgurdongOIghJUa: [
    ':kirbydong:',
    'http://i.imgur.com/OIghJUa.jpg',
    'kirby dong'
  ],
  imgurdongiYMW6J2: [
    ':ratchetdong:',
    'http://i.imgur.com/iYMW6J2.jpg',
    'ratchet dong'
  ],
  imgurdongtHHKYVp: [
    ':ratchetdong2:',
    'http://i.imgur.com/tHHKYVp.jpg',
    'ratchet dong 2'
  ],
  //imgurdongI2dzif0: [':I2dzif0:', 'http://i.imgur.com/I2dzif0.jpg', "I2dzif0"],
  //imgurdongs1yPzBV: [':s1yPzBV:', 'http://i.imgur.com/s1yPzBV.jpg', "s1yPzBV"],
  imgurdongtTQ4gPh: [
    ':giantfurrycockblast:',
    'http://i.imgur.com/tTQ4gPh.jpg',
    'giant furry cock blast'
  ],
  imgurdongqzquWaX: [
    ':legendarynuts:',
    'http://i.imgur.com/qzquWaX.jpg',
    'legendary nuts'
  ],
  imgurdongEpFtLXq: [
    ':dongstrong:',
    'http://i.imgur.com/EpFtLXq.jpg',
    'dong strong'
  ],
  imgurdongLLG1h6k: [
    ':uwutm8:',
    'http://i.imgur.com/LLG1h6k.jpg',
    'u wut m8'
  ],
  imgurdongBbshOLd: [
    ':idiotsheroes:',
    'http://i.imgur.com/BbshOLd.jpg',
    'idiots heroes'
  ],
  imgurdonggZO4oUl: [
    ':penntrash:',
    'http://i.imgur.com/gZO4oUl.jpg',
    'penn jilette trash'
  ],
  imgurdonglRIdSx8: [
    ':fuckingcasuals:',
    'http://i.imgur.com/lRIdSx8.jpg',
    'fucking casuals'
  ],
  imgurdong0z3SmD2: [
    ':cancerdong:',
    'http://i.imgur.com/0z3SmD2.jpg',
    'cancer dong'
  ],
  imgurdongz0ii3nI: [
    ':minionsdong:',
    'http://i.imgur.com/z0ii3nI.jpg',
    'minions dong'
  ],
  //imgurdongha5rqDd: [':ha5rqDd:', 'http://i.imgur.com/ha5rqDd.jpg', "ha5rqDd"],
  //imgurdongRWom78Q: [':RWom78Q:', 'http://i.imgur.com/RWom78Q.jpg', "RWom78Q"],
  imgurdongkv965M0: [
    ':expansionpak:',
    'http://i.imgur.com/kv965M0.jpg',
    'expansion pak'
  ],
  imgurdongll5mzvy: [
    ':dongnews:',
    'http://i.imgur.com/ll5mzvy.jpg',
    'dong news'
  ],
  imgurdonggXeBqOI: [
    ':batdong:',
    'http://i.imgur.com/gXeBqOI.jpg',
    'bat dong'
  ],
  imgurdongoXxMcF0: [
    ':captainunderdong:',
    'http://i.imgur.com/oXxMcF0.jpg',
    'captain underdong'
  ],
  imgurdongPkC0sSx: [
    ':batmanrobindong:',
    'http://i.imgur.com/PkC0sSx.jpg',
    'batman robin dong'
  ],
  imgurdongd9o2Idt: [
    ':fnaf:',
    'http://i.imgur.com/d9o2Idt.jpg',
    'fnaf rape'
  ],
  imgurdong6SXNd6T: [
    ':wheresthedong:',
    'http://i.imgur.com/6SXNd6T.jpg',
    'where\'s the dong'
  ],
  imgurdongNg8P2Vv: [
    ':erection:',
    'http://i.imgur.com/Ng8P2Vv.jpg',
    'erection'
  ],
  imgurdongAScga26: [
    ':erectionrising:',
    'http://i.imgur.com/AScga26.jpg',
    'erection rising'
  ],
  imgurdongRtnXPSc: [
    ':expand5:',
    'http://i.imgur.com/RtnXPSc.jpg',
    'expand 5'
  ],
  imgurdonguFNPVMN: [
    ':expand6:',
    'http://i.imgur.com/uFNPVMN.jpg',
    'expand 6'
  ],
  //imgurdongagtHxDU: [':agtHxDU:', 'http://i.imgur.com/agtHxDU.jpg', "agtHxDU"],
  imgurdongITi1XAI: [
    ':freedankcuntclotcrunch:',
    'http://i.imgur.com/ITi1XAI.jpg',
    'free dank cunt clot crunch'
  ],
  imgurdong2aSBhVZ: [
    ':ponydong:',
    'http://i.imgur.com/2aSBhVZ.jpg',
    'pony dong'
  ],
  imgurdongak7Is71: [
    ':dongsquidward:',
    'http://i.imgur.com/ak7Is71.jpg',
    'dong squidward'
  ],
  imgurdongkXYUEc4: [
    ':suffermore:',
    'http://i.imgur.com/kXYUEc4.jpg',
    'suffer more'
  ],
  imgurdongE1HYLvI: [
    ':packingabigschlong:',
    'http://i.imgur.com/E1HYLvI.jpg',
    'packing a big schlong'
  ],
  cenasnap: [
    ':cenasnap:',
    'http://i.imgur.com/3OgWxPJ.gif',
    'OH SNAP CENA'
  ],
  cenaconfused: [
    ':cenaconfused:',
    'http://i.imgur.com/sxlGqjI.gif',
    'CONFUSED CENA'
  ],
  cenalaugh: [
    ':cenalaugh:',
    'http://i.imgur.com/uiW8eOZ.gif',
    'CENA WHEN HE IS TOLD ABOUT DEAD KIDS'
  ],
  cenashrink: [
    ':cenashrink:',
    'http://i.imgur.com/B1zcAL4.gif',
    'SHRINKING CENA'
  ],
  cenacantwrestle: [
    ':cenacantwrestle:',
    'http://i.imgur.com/lxRchNh.gif',
    'CENA CAN\'T WRESTLE'
  ],
  cenaconfused2: [
    ':cenaconfused2:',
    'http://i.imgur.com/cj4Ri1g.gif',
    'CONFUSED CENA 2'
  ],
  cenaepilepsy: [
    ':cenaepilepsy:',
    'http://i.imgur.com/UVQDNnV.gif',
    'EPILEPSY CENA'
  ],
  dongcena: [
    ':dongcena:',
    'http://i.imgur.com/tQgelof.gif',
    'IT\'S DONG CENA'
  ]
};
///////
///////SPECIAL TEXT THAT NEEDS TO BE FORMATTED
var maymay = {
  sombre: [
    'sombre',
    '[font=monospace][size=14][b][color=red]S[/color] [color=orange]O[/color] [color=yellow]M[/color] [color=blue]B[/color] [color=indigo]R[/color] [color=violet]E[/color][/b][/size][/font]'
  ],
  doors: [
    'the doors',
    '[i]the doors[/i]'
  ],
  hawk: [
    'cantstopthehawk',
    '[size=15] [i] [b] [blur] [color=#fbca33] C A N T S T O P T H E H A W K [/size] [/color] [/i] [/b] [/blur]'
  ],
  donger: [
    'donger',
    '[size=29][b][font=impact]DONGER[/font][/b][/size]'
  ],
  esca: [
    'that escalated',
    '[size=20][font=impact]THAT ESCALATED[/font][/size]'
  ],
  fast: [
    'gottagofast',
    '[color=green][font=comic sans ms][size=18][i]Gotta Go Fast !!![/i][/size][/font][/color]'
  ],
  minty: [
    'minty',
    '[img]http://i60.tinypic.com/2hzkc5y.png[/img][blur][b][color=#98FF98] MINTY[/color][/b][/blur]'
  ],
  lenny: [
    ':lenny:',
    '( ͡° ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  dongers: [
    ':raise:',
    'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ'
  ], // cancer
  hamster: [
    ':hamster:',
    '(•ω•)'
  ],
  greeneggs: [
    ':geggs:',
    '[b][color=green]GREEN EGGS[/color][/b] [size=10][i]And[/i][/size] [size=16][b][i][color=black][u]THOUGHTS OF SUICIDE[/u][/color][/i][/b][/size] [size=14]( ͡° ʖ̯ ͡°)[/size]'
  ], // cancer
  rekt: [
    ':rekt:',
    '[size=19][font=impact][blur][b][color=red]☐ Not REKT ☑ REKT ☑ REKTangle ☑ SHREKT ☑ REKT-it Ralph ☑ Total REKTall ☑ The Lord of the REKT ☑ The Usual SusREKTs ☑ North by NorthREKT ☑ REKT to the Future ☑ Once Upon a Time in the REKT ☑ The Good, the Bad, and the REKT ☑ LawREKT of Arabia ☑ Tyrannosaurus REKT ☑ eREKTile dysfunction [/color][/b][/blur][/font][/size]'
  ],
  danked: [
    ':danked:',
    '[color=red][b](USER WAS BANNED FOR THIS DANK)[/b][/color]'
  ],
  blazed420: [
    '420 blaze it',
    '[b][font=Comic Sans MS][color=#FF0000]4[/color][color=#FD2A00]2[/color][color=#FC5500]0[/color] [color=#F9AA00]B[/color][color=#F8D400]L[/color][color=#F6FF00]A[/color][color=#CDFF00]Z[/color][color=#A4FF00]E[/color] [color=#52FF00]I[/color][color=#29FF00]T[/color][/font][/b]'
  ],
  checkem: [
    ':checkem:',
    '[size=15][font=impact]C[/font][/size][size=20][font=impact]H[/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]C[/font][/size][size=15][font=impact]K[/font][/size][size=20][font=impact] [/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]M[/font][/size]'
  ],
  ohshit: [
    ':ohshi:',
    '[b][font=Comic Sans MS][color=#665203]O[/color][color=#6B5304]O[/color][color=#715405]O[/color][color=#765506]O[/color][color=#7C5708]H[/color] [color=#87590B]S[/color][color=#765109]H[/color][color=#664808]I[/color][color=#563F06]I[/color][color=#463605]I[/color][color=#362D03]T[/color][/font][/b]'
  ],
  ieatass: [
    ':ieat:',
    '[i]ケツを食ベる[/i]'
  ],
  olaf: [
    ':olaf:',
    '[b][font=Courier New][size=16][color=#3BED44]h[/color][color=#1137CE]e[/color][color=#6D2645]l[/color][color=#4B20D2]o[/color] [color=#BEF7E8]m[/color][color=#66D74E]y[/color] [color=#950C47]n[/color][color=#9F65A4]a[/color][color=#196650]m[/color][color=#88DA22]e[/color] [color=#BD7B33]i[/color][color=#ED8A9F]s[/color] [color=#4BD338]o[/color][color=#6B6743]l[/color][color=#47D647]a[/color][color=#5D1908]f[/color][/size][/font][/b]'
  ],
  yes: [
    ':yes:',
    '[size=6]yes,[/size] yes YES [size=26]YES[/size]'
  ],
  hitler: [
    ':hitler:',
    '[IMG]http://i.imgur.com/jowqkg9.gif[/IMG] [size=26][b]ADOLF NITLER CONFIRMED FOR JEW[/b][/size] [IMG]http://i.imgur.com/jowqkg9.gif[/IMG]'
  ],
  anonymoose: [
    ':anonymoose:',
    '[b][font=Comic Sans MS][color=#3BED44]A[/color][color=#1137CE]N[/color][color=#6D2645]O[/color][color=#4B20D2]N[/color][color=#C9EE35]Y[/color][color=#BEF7E8]M[/color][color=#66D74E]O[/color][color=#702B82]O[/color][color=#950C47]S[/color][color=#9F65A4]E[/color] [color=#88DA22]W[/color][color=#332E39]E[/color] [color=#ED8A9F]O[/color][color=#86306E]N[/color][color=#4BD338]L[/color][color=#6B6743]Y[/color] [color=#5D1908]S[/color][color=#3764FE]W[/color][color=#19A9D8]A[/color][color=#346143]L[/color][color=#E3A6B6]L[/color][color=#5447A3]O[/color][color=#21032A]W[/color] [color=#6183A4]N[/color][color=#0E4A2B]E[/color][color=#06790B]V[/color][color=#19B543]E[/color][color=#08930B]R[/color] [color=#B5AE1A]S[/color][color=#406842]P[/color][color=#C3F745]I[/color][color=#DC2D64]T[/color][/font][/b]'
  ],
  ripped: [
    ':rip:',
    '[b][font=Impact][size=20][color=#3BED44]r[/color][color=#1137CE]i[/color][color=#6D2645]p[/color] [color=#C9EE35]i[/color][color=#BEF7E8]n[/color] [color=#702B82]p[/color][color=#950C47]i[/color][color=#9F65A4]e[/color][color=#196650]c[/color][color=#88DA22]e[/color][color=#332E39]s[/color][/size][/font][/b]'
  ],
  toa: [
    'toa',
    '[img]http://i61.tinypic.com/cmjk6.png[/img]'
  ],
  murica: [
    'murica',
    '[b][font=Comic Sans MS][color=#FF0000]M[/color][color=#FF5555]U[/color][color=#FFAAAA]R[/color][color=#FFFFFF]I[/color][color=#AAAAFF]C[/color][color=#5555FF]A[/color][/font][/b]'
  ],
  lenny2: [
    ':lenny2:',
    '( ͡ຈ╭͜ʖ╮͡ຈ )'
  ], // cancer during browser edit
  // (firefox)
  lenny3: [
    ':lenny3:',
    '( ͡ಠ ʖ̯ ͡ಠ)'
  ], // cancer during browser edit
  // (firefox)
  lenny4: [
    ':lenny4:',
    '( ͡~ ͜ʖ ͡~)'
  ], // cancer during browser edit
  // (firefox)
  lenny5: [
    ':lenny5:',
    '( ͡~ ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny6: [
    ':lenny6:',
    '( ͠° ͟ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny7: [
    ':lenny7:',
    '( ͡ʘ╭͜ʖ╮͡ʘ)'
  ], // cancer during browser edit
  // (firefox)
  lenny8: [
    ':lenny8:',
    '( ͝סּ ͜ʖ͡סּ)'
  ], // cancer during browser edit
  // (firefox)
  lenny9: [
    ':lenny9:',
    '( ͡ᵔ ͜ʖ ͡ᵔ )'
  ], // cancer during browser edit
  // (firefox)
  lenny10: [
    ':lenny10:',
    '( ͡^ ͜ʖ ͡^ )'
  ], // cancer during browser edit
  // (firefox)
  lenny11: [
    ':lenny11:',
    '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]'
  ], // cancer during
  // browser edit
  // (firefox)
  lenny12: [
    ':lenny12:',
    '( ͡ຈ ͜ʖ ͡ຈ)'
  ], // cancer during browser edit
  // (firefox)
  lenny13: [
    ':lenny13:',
    '( ͡° ʖ̯ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny14: [
    ':lenny14:',
    '( ͡ ͜ʖ ͡ )'
  ], // cancer during browser edit
  // (firefox)
  lenny15: [
    ':lenny15:',
    '(☞ ͡° ͜ʖ ͡°)☞'
  ], // cancer during browser edit
  // (firefox)
  lenny16: [
    ':lenny16:',
    'ᕕ( ͡° ͜ʖ ͡° )ᕗ'
  ], // cancer during browser
  // edit (firefox)
  lenny17: [
    ':lenny17:',
    '( ͡°╭͜ʖ╮͡° )'
  ], // cancer during browser edit
  // (firefox)
  lenny18: [
    ':lenny18:',
    '( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'
  ], // cancer
  // during
  // browser
  // edit
  // (firefox)
  lenny19: [
    ':lenny19:',
    '(つ ͡° ͜ʖ ͡°)つ'
  ], // cancer during browser edit
  // (firefox)
  lenny20: [
    ':lenny20:',
    '( ͡⚆ ͜ʖ ͡⚆)'
  ], // cancer during browser edit
  // (firefox)
  lenny21: [
    ':lenny21:',
    '¯_( ͠° ͟ʖ °͠ )_/¯'
  ], // cancer during browser
  // edit (firefox)
  lenny22: [
    ':lenny22:',
    '(▀ ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  raise2: [
    ':raise2:',
    'ヽ༼ຈل͜ຈ༽ﾉ гคเรє ๏г ๔เє ヽ༼ຈل͜ຈ༽ﾉ'
  ], // cancer during
  // browser edit
  // (firefox)
  nyan: [
    ':nyan:',
    '~=[,,_,,]:3'
  ],
  woop: [
    ':woop:',
    '[ \\[size=10]\\[/size][size=9]\\[/size][size=8]\\[/size][size=7]\\[/size][size=6]\\[/size][size=7]\\[/size][size=8]\\[/size][size=9]\\[/size][size=10]\\[/size]\\ ]'
  ], // dupe
  // the
  // backslashes
  seed: [
    ':seed:',
    '[color=red][b]EVEN NOW... THE EVIL SEED OF WHAT YOU\'VE DONE GERMINATES WITHIN YOU[/b][/color]'
  ],
  sniper: [
    ':sniper:',
    '▄︻̷̿┻̿═━一'
  ],
  notgivinashit: [
    ':notgivinash:',
    '¯_(ツ)_/¯'
  ],
  ameno: [
    ':ameno:',
    '༼ つ ◕_◕ ༽つ'
  ],
  brickwall: [
    ':brickwall:',
    '┬┴┬┴┤(･_├┬┴┬┴'
  ],
  mac10: [
    ':mac10:',
    '⌐╦╦═─'
  ],
  faceroll: [
    ':faceroll:',
    '(._.) ( l: ) ( .-. ) ( :l ) (._.)'
  ],
  tablefix: [
    ':tablefix:',
    '┬──┬ ノ( ゜-゜ノ)'
  ],
  wellmemed: [
    ':memed',
    '[IMG]http://i58.tinypic.com/2s8o4g8.png[/IMG]'
  ],
  gottago: [
    ':gofast:',
    '[scroll][font=Comic Sans MS][size=26][blur][color=green][i]GOTTA GO FAST[/i][/color][/blur][/size][/font][list][*][/list][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][/scroll]'
  ],
  destroy: [
    ':destroy:',
    '[size=26]DESTROY[/size][size=23]DESTROY[/size][size=20]DESTROY[/size][size=17]DESTROY[/size][size=14]DESTROY[/size][size=11]DESTROY[/size][size=9]DESTROY[/size][size=6]DESTROY[/size][size=3]DESTROY[/size]'
  ],
  logout: [
    ':logout:',
    '[url=https://i.imgur.com/7XClKSN.png?1]http://superlogout.com/[/url]'
  ],
  abuse: [
    ':abuse:',
    '[img]http://i.imgur.com/cAxpwdm.gif[/img]'
  ],
  square: [
    'Square',
    '□'
  ]
};
///////
var endings = [
  ' and cant no hood fuck with death rizzow[dot]',
  ' and my money on my mind[dot]',
  ' and yo momma[dot]',
  ' aww nah[dot]',
  ' bitch ass nigga[dot]',
  ' but real niggaz don\'t give a fuck[dot]',
  ' cuz I put gangsta rap on tha map[dot]',
  ' cuz Im tha Double O G[dot]',
  ' cuz I\'m fresh out the pen[dot]',
  ' cuz its a doggy dog world[dot]',
  ' cuz its a G thang[dot]',
  ' cuz its a pimp thang[dot]',
  ' cuz this is how we do it[dot]',
  ' dogg[dot]',
  ' doggystyle[dot]',
  ' droppin hits[dot]',
  ' fo all my homies in the pen[dot]',
  ' fo gettin yo pimp on[dot]',
  ' fo my bling bling[dot]',
  ' fo\' real[dot]',
  ' fo\' sheezy[dot]',
  ' fo\' sho\'[dot]',
  ' fo yo bitch ass[dot]',
  ' from tha streets of tha L-B-C[dot]',
  ' gangsta style[dot]',
  ' hittin that booty[dot]',
  ' in all flavas[dot]',
  ' if you gots a paper stack[dot]',
  ' in tha dogg pound[dot]',
  ' in tha hood[dot]',
  ' in tha mutha fuckin club[dot]',
  ' keep\'n it real yo[dot]',
  ' like a motha fucka[dot]',
  ' like a tru playa\'[dot]',
  ' like old skool shit[dot]',
  ' like this and like that and like this and uh[dot]',
  ' mah nizzle[dot]',
  ' n shit[dot]',
  ' n we out!',
  ' now motherfuckers lemme here ya say hoe[dot]',
  ' now pass the glock[dot]',
  ' paper\'d up[dot]',
  ' puttin tha smack down[dot]',
  ' ridin\' in mah double R[dot]',
  ' sho nuff[dot]',
  ' so bow down to the bow wow!',
  ' so i can get mah pimp on[dot]',
  ' so jus\' chill[dot]',
  ' so show some love, niggaz!',
  ' so sit back relax new jacks get smacked[dot]',
  ' so you betta run and grab yo glock[dot]',
  ' spittin\' that real shit[dot]',
  ' straight from long beach nigga[dot]',
  ' ta help you tap dat ass[dot]',
  ' to increase tha peace[dot]',
  ' thats off tha hook yo[dot]',
  ' upside yo head[dot]',
  ' where the sun be shinin and I be rhymin\'[dot]',
  ' wit da big Bo$$$ Dogg[dot]',
  ' with my forty-fo\' mag[dot]',
  ' with my hoes on my side, and my strap on my back',
  ' with the gangsta shit that keeps ya hangin[dot]',
  ' with the S-N-double-O-P[dot]',
  ' ya dig?',
  ' ya feelin\' me?',
  ' yaba daba dizzle[dot]',
  ' yeah yeah baby[dot]',
  ', betta check yo self[dot]',
  ', chill yo[dot]',
  ', know what im sayin?',
  ', niggaz, better recognize[dot]',
  ', ya feel me?',
  '[dot] Aint no killin\' everybodys chillin\'[dot]',
  '[dot] Aint no L-I-M-I-to-tha-T[dot]',
  '[dot] Aint no stoppin\' this shit nigga[dot]',
  '[dot] Anotha dogg house production[dot]',
  '[dot] Boo-Yaa!',
  '[dot] Boom bam as I step in the jam, God damn[dot]',
  '[dot] Bounce wit me[dot]',
  '[dot] Bow wow wow yippee yo yipee yay[dot]',
  '[dot] Chill as I take you on a trip[dot]',
  '[dot] Death row 187 4 life[dot]',
  '[dot] Dogg House Records in the motha fuckin house[dot]',
  '[dot] Drop it like its hot[dot]',
  '[dot] Fo\'-fo\' desert eagle to your motherfuckin\' dome[dot]',
  '[dot] Freak y\'all, into the beat y\'all[dot]',
  '[dot] Holla!',
  '[dot] Hollaz to the East Side[dot]',
  '[dot] I started yo shit and i\'ll end yo\' shit[dot]',
  '[dot] I thought i told ya, nigga I\'m a soldier[dot]',
  '[dot] Ill slap tha taste out yo mouf[dot]',
  '[dot] Im a bad boy wit a lotta hos[dot]',
  '[dot] Im crazy, you can\'t phase me[dot]',
  '[dot] I\'m a mutha fuckin 2-time felon[dot]',
  '[dot] It dont stop till the wheels fall off[dot]',
  '[dot] Its just anotha homocide[dot]',
  '[dot] It\'s your homie snoop dogg from the dpg[dot]',
  '[dot] Keep the party crackin while I\'m steady rappin[dot]',
  '[dot] Keep\'n it gangsta dogg[dot]',
  '[dot] Listen to how a motherfucker flow shit[dot]',
  '[dot] Nigga get shut up or get wet up[dot]',
  '[dot] One, two three and to tha four[dot]',
  '[dot] Put ya mutha fuckin choppers up if ya feel this[dot]',
  '[dot] Real niggas recognize the realness[dot]',
  '[dot] Relax, cus I\'m bout to take my respect[dot]',
  '[dot] Slap your mutha fuckin self[dot]',
  '[dot] Snoop dogg is in this bitch[dot]',
  '[dot] Snoop heffner mixed with a little bit of doggy flint[dot]',
  '[dot] Subscribe nigga, get yo issue[dot]',
  '[dot] They call me tha black folks president[dot]',
  '[dot] Throw yo guns in the motherfuckin air[dot]',
  '[dot] Tru niggaz do niggaz[dot]',
  '[dot] Wussup to all my niggaz in the house[dot]',
  '[dot] Ya fuck with us, we gots to fuck you up[dot]',
  '[dot] Yippie yo, you can\'t see my flow[dot]',
  '[dot] You gotta check dis shit out yo[dot]',
  '[dot] You\'se a flea and I\'m the big dogg[dot]',
  ' because doggs make tha world a better place!',
  ' let me holla at u[dot]',
  ' #YaDigg !',
  '[dot] Living young n wild n free !',
  '[dot] Put your feet up n take a breath !',
  '[dot] Smells like tha good shit[dot]',
  '[dot] Snoop du jour !',
  '[dot] wat it do ??'
];
var replacements = {
  '\\babout\\b': '\'bout',
  '\\bam\\b': 'be',
  '\\band\\b': 'n',
  '\\bare\\b': 'is',
  '\\bawesome\\b': 'off tha hook',
  '\\bbecause\\b': 'coz',
  '\\bbeing\\b': 'bein',
  '\\bboy\\b': 'boi',
  '\\bcar\\b': 'ride',
  '\\bcars\\b': 'ridez',
  '\\bchurch\\b': 'chuch',
  '\\bcities\\b': 'hoodz',
  '\\bcomrades\\b': 'posse',
  '\\bcute\\b': 'skanky',
  '\\bdog\\b': 'dogg',
  '\\bdriving\\b': 'rollin\'',
  '\\eed\\b': 'ee\'',
  '\\bfor\\b': 'fo`',
  '\\bfriend\\b': 'nigga',
  '\\bfriends\\b': 'niggaz',
  '\\ged\\b': 'ge\'',
  '\\bget\\b': 'git',
  '\\bgot\\b': 'gots',
  '\\bgreat\\b': 'bootylicious',
  '\\bgun\\b': 'gat',
  '\\bguns\\b': 'gats',
  '\\bguy\\b': 'homey',
  '\\bhappy\\b': 'stoked',
  '\\head': 'heezee',
  '\\bhouse\\b': 'hizouse',
  '\\ied\\b': 'y',
  '\\bin\\b': '\'n',
  '\\binformation\\b': '411',
  '\\bis\\b': 'be',
  '\\bkilled\\b': 'iced',
  '\\bkilling\\b': 'cappin\'',
  '\\blil\\b': 'shawty',
  '\\blil\'\\b': 'shawty',
  '\\blittle\\b': 'shawty',
  '\\bmad\\b': 'buggin\'',
  '\\bman\\b': 'dawg',
  '\\bmy\\b': 'mah',
  '\\bnice\\b': 'funky ass',
  '\\bnothing\\b': 'nuttin',
  '\\ool\\b': 'oo\'',
  '\\bpeculiar\\b': 'perculiar',
  '\\bpeople\\b': 'thugz',
  '\\bplayers\\b': 'playas',
  '\\bplease\\b': 'pleaze',
  '\\bpolice\\b': 'po-po',
  '\\bsays\\b': 'sez',
  'se\\b': 'ze',
  'sed\\b': 'zed',
  'ses\\b': 'zes',
  '\\bsomething\\b': 'sum-m sum-m',
  '\\bsuper\\b': 'snoopa',
  '\\btake\\b': 'takes',
  '\\btalk\\b': 'rap',
  '\\btelevision': 'televizzle',
  '\\bthe\\b': 'tha',
  '\\btheir\\b': 'they',
  '\\bthis\\b': 'dis',
  '\\bto\\b': 'ta',
  '\\btown\\b': 'ghetto',
  '\\btv\\b': 't-vizzle',
  '\\bTV\\b': 'T-Vizzle',
  '\\bwith': 'wit',
  '\\bwomen\\b': 'bitchez',
  '\\byour\\b': 'yo\'',
  '\\byourself\\b': 'yoself',
  '\\byou\'re\\b': 'yoe',
  '\\byou\'ve\\b': 'you',
  '\\zed\\b': 'ze\'',
  '\\\'s\\b': '',
  '\\ers\\b': 'a',
  '\\er\\b': 'a',
  '\\ings\\b': '\'n',
  '\\ing\\b': '\'n',
  '\\bdo you\\b': 'd-ya',
  '\\bor anything\\b': 'or nothin\' trippin\'',
  '\\bwith a\\b': 'witta',
  '\\byou all\\b': 'y-aw',
  '\\byou\'re all\\b': 'y-aw',
  'friend': 'feminist',
  'geometry dash': 'john cena',
  'car': 'cat',
  'guy': 'lad',
  'girl': 'lady',
  'yanis': 'dickbutt',
  'kaff': 'mouth farts',
  'sex': 'shemale porn addiction',
  'fnaf': 'i\'m a faggot mods please ban me',
  'shockey': 'shockey\'s big black cock',
  'matr0xx': 'NANANANANANANANA PROXYMAN',
  'witness': 'these dudes i know',
  'shiz': 'shizzle',
  ' www\\.': ' here\'s a nice porn site www.',
  //"\\. ": "izzle. ",
  'phone': 'pokedex',
  'mortal kombat': 'moral kombat',
  'nfm': 'super columbine massacre rpg',
  'dong': 'dong cena',
  'study': 'tumblr post',
  'security': 'suicide',
  'donald trump': 'obama',
  'jv': 'my dick',
  'aim': 'gizoogle',
  'rafa': 'olaf',
  'raga': 'rafa',
  'big jilm': 'big brazilian cock',
  'dark meat': 'the jews',
  'shit': 'shizznit',
  'meme': 'weed',
  'doge': 'drugs',
  'cake': 'cocaine',
  'cloud': 'butt',
  'fuck': 'fuck a doodle doo',
  'dick': 'good man',
  '11': 'the holocaust',
  'adolf hitler': 'osama bin laden',
  'meeting': 'school shooting',
  'raped': 'visited 4chan',
  'rape': '4chan visit',
  'raping': 'wanking to ponies',
  'mlp': 'cum in my butt',
  'america': 'brazil',
  'ireland': 'africa',
  'britain': 'sorry, i\'m afraid john cena is not a planet',
  'stage maker': 'men\'s rights activist',
  'nigger': 'kike',
  'venomalix': 'niger',
  'sano': 'insano',
  'mcroger': 'dildo',
  'prayers': 'highlander',
  'avalanche': 'avalanche of dicks',
  'sinfulbliss': 'pissing fetish',
  'sin': 'pissing fetish',
  'dad': 'darth vader',
  'mom': 'rammstein',
  'isis': 'allahu akbar',
  'backflipbadger': 'big boobed',
  'reddit': 'porn site',
  'legnak': 'drunk fat trucker',
  'rad1': 'dick.rad',
  'black dragon': 'guy that pretends to be a book writer',
  'wb ': 'i wanna fuck ',
  'brown': 'ugly',
  'black': 'zebra',
  ' joined the chat on ': 'DISREGARD THAT I SUCK COCKS',
  ' has been kicked by ': 'DISREGARD THAT I SUCK COCKS',
  'whore': 'little girl that i rape every night',
  'is home': 'is locked up in my basement',
  '\'s home': '\'s locked up in my basement',
  'idiot': 'nun',
  'faggot': 'crackhead',
  'lmao': 'lemons',
  'ayy': 'yo wtf bbq',
  'ban': 'blan',
  'up in this': 'right up in ye\'',
  'don\'t know': 'are guilty and everyone knows it',
  'doesn\'t know': 'is guilty and everyone knows it',
  'spoiler': 'crankshaft',
  'chat mod': 'ip\'s sex slave',
  'motherfucker': 'foot fetishist',
  'aureus': 'aureus fucking aisling',
  'spam': ':DD:D::DD:D:D:D:DDDDD',
  'fire': 'burn',
  'trying': 'failing',
  'fuel': 'gimme fuel, gimme fire, gimme that which i desire',
  'they': 'those faggots',
  'swearify': 'virus',
  'rip': 'dick ripped',
  'minecraft': 'gay fag',
  'he ': 'this asshole ',
  'him ': 'this asshole ',
  'girlfriend': 'tumblr user',
  'username': 'schlong\'s size',
  'fucking': 'foot fucking',
  'awake': 'drunk',
  'games': 'violence',
  'going to': 'going to kill and',
  'pls': 'pls fuck me, also',
  'chatbox': 'porn home',
  'autist': 'fat autist slob',
  'best': 'worst',
  'my crush': 'jack thompson',
  'head shot': 'dick punch',
  'headshot': 'dick punch',
  'ham': 'hemp',
  'meat': 'vegan food',
  'failing': 'sucking dick',
  'New York': 'West Ham',
  'subscribe': 'eat shit',
  'read the bible': 'molest little boys',
  'tragedy': 'doom map',
  'kids': 'dead bodies',
  'hiding': 'burying the bodies',
  'god': 'lie *tips fedora*',
  'gone': 'dead',
  'a party': '9/11',
  'party': '9/11',
  'wwe': 'rape case',
  'hulk hogan': '[REDACTED]',
  'chris benoit': '[REDACTED]',
  'horrible': 'fucking amazing',
  'nuts': 'balls deep insane',
  'nut': 'nut cracker',
  'mario': 'cannibal',
  'sarcasm': 'cannibal corpse',
  'beck': 'anal cunt',
  'ween': 'afroman',
  'wee': 'willy',
  'omar waly': 'omartian willy',
  'kinetico': 'cinema',
  'animal': 'pikachu',
  'agility': 'kill bill',
  'agil': 'kill bill',
  'youtube': 'you lube',
  'lol': 'gazorpazorp',
  'number': 'numberwang',
  'vizual': 'we got a visual on the suspect',
  'viz': 'we got a visual on the suspect',
  'pie': 'pi',
  'damn': 'darn',
  'wee': 'willy',
  'ing ': 'in\' ',
  'er ': 'a\' ',
  'ers ': 'as\' ',
  'yes': 'ya yes yis',
  'your': 'yur',
  'main': 'mayy',
  'etc': 'ayyytc',
  'russia': 'glory to arstotzka',
  'http': 'here\'s a nice porn site http',
  'habbo': 'online dating sim',
  'roblox': 'cockblox',
  'java': 'ass',
  'ear rape': 'good music',
  'doxx': 'tumblr fetish',
  'var': 'yarr',
  'the ': 'ye ol\' ',
  'idiot': 'doofus',
  'offended': 'raped',
  'transexual': 'transformer',
  'pissed': 'filled with cum',
  'video game': 'crack cocaine',
  'eat': 'shit',
  'bad': '[url=https://www.youtube.com/watch?v=S7FsAgPuVwU]greasy[/url]',
  'pornstar': 'my parents',
  'chemical': 'cummical',
  '10 graves': '10 tits',
  'ten graves': 'ten tits',
  '10th': 'ten tits',
  '99': '95 + 4 pennies, add that shit up',
  'war': 'wat',
  'what': 'what fuuck',
  'football': 'rugby',
  'still': 'still dre',
  '2': 'ms-dos',
  '6': 'half',
  '13': 'baker\'s dozen',
  'tornado shark': 'stiff gaucho',
  'lead': 'karsh',
  'my country': 'kazakhstan',
  'banned': '[size=29]B&[/size]',
  'food': 'juicy steak',
  'died': 'deidhs',
  'lol': 'not funny at all',
  'bye': 'help i\'m trapped in a universe factory',
  'kappa': 'makenzy',
  'art': 'fart',
  'sneak': 'rape',
  '7': '666'
};
///////EXTRA FILTERING CODE
var spec_code = [
  '/exit',
  '/away',
  '/abs',
  '[code]',
  ':'
];
var swear_code = [
  '[b][/b]',
  '.'
];
var link_code = [
  'http://',
  'www.',
  'https://'
];
///////
///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = [
  '[color=#789922]',
  '[/color]',
  '[b][color=#AA0000]',
  '[/color][/b]'
];
///////
///////FORTICONS
var img_tag = [
  '[img]',
  '[/img]'
];
var post_img_tag = [
  '<img title=\'posted by swearify\' src=\'',
  '\'</img>'
]; //we'll use the html img tag here so I can set a title
///////
///////CSS STYLE STRINGS
var cssChkbox = 'font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;';
var cssButton = 'font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;';
var cssMsg = 'font-size:10px;color:white; margin-right:8px; margin-left:5px;';
var cssLine = 'color:black;';
var cssChat = 'overflow-x: hidden; left:141px;'; // / white-space: nowrap;
///////
///////CODE FOR EXTRA SMILIE INJECT
var smilie_header_html =
'<option value=\'\'>View more Emoticons</option><option value=\'0\'>Smilies 1</option><option value=\'1\'>Swearify 1</option><option value=\'2\'>Swearify 2</option><option value=\'5\'>Twitch Emotes</option><option value=\'3\'>Swearify Rage Faces</option><option value=\'4\'>Swearify Dongs</option>';
var td_base =
'<td><a href=\'javascript:insert_chatboxsmilie(_smilie)\'><img title=\'_title\' src=\'_link\' alt=\'_title\' border=\'0\'></a></td>';
var td_array = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
var quote = '"';
if (document.getElementsByName('categ').length == 1) document.getElementsByName('categ') [0].innerHTML =
smilie_header_html; // /
// add
// the
// Swearify
// selection
///////VAR FOR FIXING THE POST PAGE
var post_button_num = 0;
///////
///////CHARCOUNT MERGE
var cssLabel = 'color: grey;font-size: 12px;';
var loc = '';
var refined_loc = '';
var cssTd = '';
///////
///
//UTILS
///
//SWEAR
///
//EMOTICON
///
//MAYMAY
///
//GREENTEXT
///
//REDTEXT
///
//LEET
///
//RAINBOW
///
//RANDOM
///
//GRADIENT
///
//JS
///
//JAVA
///
//VBS
///
//CSS
///////UTILS
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else expires = '';
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
function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  });
}
// ////////http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key

String.prototype.regexIndexOf = function (regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0)  : indexOf;
}
String.prototype.regexLastIndexOf = function (regex, startpos) {
  regex = regex.global ? regex : new RegExp(regex.source, 'g'
  + (regex.ignoreCase ? 'i' : '') + (regex.multiLine ? 'm' : ''));
  if (typeof startpos == 'undefined')
  startpos = this.length;
   else if (startpos < 0)
  startpos = 0;
  var stringToWorkWith = this.substring(0, startpos + 1);
  var lastIndexOf = - 1;
  var nextStop = 0;
  while ((result = regex.exec(stringToWorkWith)) != null) {
    lastIndexOf = result.index;
    regex.lastIndex = ++nextStop;
  }
  return lastIndexOf;
}
/////////////////////
/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM

function emoticon_() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1) [i][0], 'gi'), img_tag[0] + values(emoticon_1) [i][1] +
      img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_2) [i][0], 'gi'), img_tag[0] + values(emoticon_2) [i][1] +
      img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_3) [i][0], 'gi'), img_tag[0] + values(emoticon_3) [i][1] +
      img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_4).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_4) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_4) [i][0], 'gi'), img_tag[0] + values(emoticon_4) [i][1] +
      img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (var i = 0; i < twitch_e.length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'), img_tag[0] + twitch_e[i] +
      img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
}
function emoticon_post() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1) [i][0], 'gi'), post_img_tag[0] + values(emoticon_1) [i][1] +
      post_img_tag[1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_2) [i][0], 'gi'), post_img_tag[0] + values(emoticon_2) [i][1] +
      post_img_tag[1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_3) [i][0], 'gi'), post_img_tag[0] + values(emoticon_3) [i][1] +
      post_img_tag[1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_4).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_4) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_4) [i][0], 'gi'), post_img_tag[0] + values(emoticon_4) [i][1] +
      post_img_tag[1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
  for (var i = 0; i < twitch_e.length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'), post_img_tag[0] + twitch_e[i] +
      post_img_tag[1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
}
/////////////////////
/////////////////////MANAGES THE MAY MAY SYSTEM

function maymay_() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay) [i][0], 'gi'), values(maymay) [i][1]);
      document.getElementById('message').value = new_msg;
    }
  }
}
function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [
    0].value;
     else old_msg = document.getElementsByTagName('textarea') [1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay) [i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay) [i][0], 'gi'), values(maymay) [i][1]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      new_msg;
       else document.getElementsByTagName('textarea') [1].value = new_msg;
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF GREENTEXT

function greentext_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.indexOf('>');
  var index_num2 = old_msg.indexOf('/greentext');
  if (index_num === 0 || index_num2 === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById('message').value = new_msg;
  }
}
function greentext_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf('>');
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF REDTEXT

function redtext_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.indexOf('<');
  if (old_msg.length >= 1)
  if (index_num === old_msg.length - 1) {
    var new_msg = color_code[2] + old_msg + color_code[3];
    document.getElementById('message').value = new_msg;
  }
}
function redtext_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf('<');
    if (msg_ray[i].length >= 1)
    if (index_num === old_msg.length - 1) {
      msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
/////////////////////LEET TEXT

function leet_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/leet /i, '');
  new_msg = new_msg.replace(/a/gi, '4');
  new_msg = new_msg.replace(/b/gi, '|3');
  new_msg = new_msg.replace(/c/gi, '(');
  new_msg = new_msg.replace(/d/gi, '|)');
  new_msg = new_msg.replace(/e/gi, '3');
  new_msg = new_msg.replace(/f/gi, '|=');
  new_msg = new_msg.replace(/g/gi, '9');
  new_msg = new_msg.replace(/h/gi, '|-|');
  new_msg = new_msg.replace(/i/gi, '1');
  new_msg = new_msg.replace(/j/gi, '_|');
  new_msg = new_msg.replace(/k/gi, '|<');
  new_msg = new_msg.replace(/l/gi, '1');
  new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
  new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
  new_msg = new_msg.replace(/o/gi, '0');
  new_msg = new_msg.replace(/p/gi, '|>');
  new_msg = new_msg.replace(/q/gi, '().');
  new_msg = new_msg.replace(/r/gi, '|2');
  new_msg = new_msg.replace(/s/gi, '5');
  new_msg = new_msg.replace(/t/gi, '7');
  new_msg = new_msg.replace(/u/gi, '|_|');
  new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
  new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
  new_msg = new_msg.replace(/x/gi, '><');
  new_msg = new_msg.replace(/y/gi, '`/');
  new_msg = new_msg.replace(/z/gi, '2');
  document.getElementById('message').value = new_msg;
}
function inject_leet() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'leet_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="leet" id="format-leet" class="format-message" type="checkbox"><label id="click_area_leet" title="Leet" style="cursor:pointer;"><img src="http://i.imgur.com/a6bziMI.png"></label>';
  var what = document.getElementById('click_area_leet');
  var whot = document.getElementById('format-leet');
  if (getCookie('CB_leet') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_leet', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_leet', '0', 1);
    }
  });
}
function leet_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      new_msg = new_msg.replace(/b/gi, '|3');
      new_msg = new_msg.replace(/c/gi, '(');
      new_msg = new_msg.replace(/d/gi, '|)');
      new_msg = new_msg.replace(/e/gi, '3');
      new_msg = new_msg.replace(/f/gi, '|=');
      new_msg = new_msg.replace(/g/gi, '9');
      new_msg = new_msg.replace(/h/gi, '|-|');
      new_msg = new_msg.replace(/i/gi, '1');
      new_msg = new_msg.replace(/j/gi, '_|');
      new_msg = new_msg.replace(/k/gi, '|<');
      new_msg = new_msg.replace(/l/gi, '1');
      new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
      new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
      new_msg = new_msg.replace(/o/gi, '0');
      new_msg = new_msg.replace(/p/gi, '|>');
      new_msg = new_msg.replace(/q/gi, '().');
      new_msg = new_msg.replace(/r/gi, '|2');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      new_msg = new_msg.replace(/u/gi, '|_|');
      new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
      new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
      new_msg = new_msg.replace(/x/gi, '><');
      new_msg = new_msg.replace(/y/gi, '`/');
      new_msg = new_msg.replace(/z/gi, '2');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BALLOON TEXT

function balloon_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/balloon /i, '');
  new_msg = new_msg.replace(/a/gi, 'ⓐ');
  new_msg = new_msg.replace(/b/gi, 'ⓑ');
  new_msg = new_msg.replace(/c/gi, 'ⓒ');
  new_msg = new_msg.replace(/d/gi, 'ⓓ');
  new_msg = new_msg.replace(/e/gi, 'ⓔ');
  new_msg = new_msg.replace(/f/gi, 'ⓕ');
  new_msg = new_msg.replace(/g/gi, 'ⓖ');
  new_msg = new_msg.replace(/h/gi, 'ⓗ');
  new_msg = new_msg.replace(/i/gi, 'ⓘ');
  new_msg = new_msg.replace(/j/gi, 'ⓙ');
  new_msg = new_msg.replace(/k/gi, 'ⓚ');
  new_msg = new_msg.replace(/l/gi, 'ⓛ');
  new_msg = new_msg.replace(/m/gi, 'ⓜ');
  new_msg = new_msg.replace(/n/gi, 'ⓝ');
  new_msg = new_msg.replace(/o/gi, 'ⓞ');
  new_msg = new_msg.replace(/p/gi, 'ⓟ');
  new_msg = new_msg.replace(/q/gi, 'ⓠ');
  new_msg = new_msg.replace(/r/gi, 'ⓡ');
  new_msg = new_msg.replace(/s/gi, 'ⓢ');
  new_msg = new_msg.replace(/t/gi, 'ⓣ');
  new_msg = new_msg.replace(/u/gi, 'ⓤ');
  new_msg = new_msg.replace(/v/gi, 'ⓥ');
  new_msg = new_msg.replace(/w/gi, 'ⓦ');
  new_msg = new_msg.replace(/x/gi, 'ⓧ');
  new_msg = new_msg.replace(/y/gi, 'ⓨ');
  new_msg = new_msg.replace(/z/gi, 'ⓩ');
  new_msg = new_msg.replace(/1/gi, '⓵');
  new_msg = new_msg.replace(/2/gi, '⓶');
  new_msg = new_msg.replace(/3/gi, '⓷');
  new_msg = new_msg.replace(/4/gi, '⓸');
  new_msg = new_msg.replace(/5/gi, '⓹');
  new_msg = new_msg.replace(/6/gi, '⓺');
  new_msg = new_msg.replace(/7/gi, '⓻');
  new_msg = new_msg.replace(/8/gi, '⓼');
  new_msg = new_msg.replace(/9/gi, '⓽');
  new_msg = new_msg.replace(/0/gi, '⓪');
  document.getElementById('message').value = new_msg;
}
function inject_balloon() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'balloon_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="balloon" id="format-balloon" class="format-message" type="checkbox"><label id="click_area_balloon" title="Balloon" style="cursor:pointer;"><img src="http://i.imgur.com/B15ir56.png"></label>';
  var what = document.getElementById('click_area_balloon');
  var whot = document.getElementById('format-balloon');
  if (getCookie('CB_balloon') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_balloon', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_balloon', '0', 1);
    }
  });
}
function balloon_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/balloon /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/balloon /i, '');
      new_msg = new_msg.replace(/a/gi, 'ⓐ');
      new_msg = new_msg.replace(/b/gi, 'ⓑ');
      new_msg = new_msg.replace(/c/gi, 'ⓒ');
      new_msg = new_msg.replace(/d/gi, 'ⓓ');
      new_msg = new_msg.replace(/e/gi, 'ⓔ');
      new_msg = new_msg.replace(/f/gi, 'ⓕ');
      new_msg = new_msg.replace(/g/gi, 'ⓖ');
      new_msg = new_msg.replace(/h/gi, 'ⓗ');
      new_msg = new_msg.replace(/i/gi, 'ⓘ');
      new_msg = new_msg.replace(/j/gi, 'ⓙ');
      new_msg = new_msg.replace(/k/gi, 'ⓚ');
      new_msg = new_msg.replace(/l/gi, 'ⓛ');
      new_msg = new_msg.replace(/m/gi, 'ⓜ');
      new_msg = new_msg.replace(/n/gi, 'ⓝ');
      new_msg = new_msg.replace(/o/gi, 'ⓞ');
      new_msg = new_msg.replace(/p/gi, 'ⓟ');
      new_msg = new_msg.replace(/q/gi, 'ⓠ');
      new_msg = new_msg.replace(/r/gi, 'ⓡ');
      new_msg = new_msg.replace(/s/gi, 'ⓢ');
      new_msg = new_msg.replace(/t/gi, 'ⓣ');
      new_msg = new_msg.replace(/u/gi, 'ⓤ');
      new_msg = new_msg.replace(/v/gi, 'ⓥ');
      new_msg = new_msg.replace(/w/gi, 'ⓦ');
      new_msg = new_msg.replace(/x/gi, 'ⓧ');
      new_msg = new_msg.replace(/y/gi, 'ⓨ');
      new_msg = new_msg.replace(/z/gi, 'ⓩ');
      new_msg = new_msg.replace(/1/gi, '⓵');
      new_msg = new_msg.replace(/2/gi, '⓶');
      new_msg = new_msg.replace(/3/gi, '⓷');
      new_msg = new_msg.replace(/4/gi, '⓸');
      new_msg = new_msg.replace(/5/gi, '⓹');
      new_msg = new_msg.replace(/6/gi, '⓺');
      new_msg = new_msg.replace(/7/gi, '⓻');
      new_msg = new_msg.replace(/8/gi, '⓼');
      new_msg = new_msg.replace(/9/gi, '⓽');
      new_msg = new_msg.replace(/0/gi, '⓪');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BRAILLE TEXT

function braille_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/braille /i, '');
  new_msg = new_msg.replace(/a/gi, '⠁');
  new_msg = new_msg.replace(/b/gi, '⠃');
  new_msg = new_msg.replace(/c/gi, '⠉');
  new_msg = new_msg.replace(/d/gi, '⠙');
  new_msg = new_msg.replace(/e/gi, '⠑');
  new_msg = new_msg.replace(/f/gi, '⠋');
  new_msg = new_msg.replace(/g/gi, '⠛');
  new_msg = new_msg.replace(/h/gi, '⠓');
  new_msg = new_msg.replace(/i/gi, '⠊');
  new_msg = new_msg.replace(/j/gi, '⠚');
  new_msg = new_msg.replace(/k/gi, '⠅');
  new_msg = new_msg.replace(/l/gi, '⠇');
  new_msg = new_msg.replace(/m/gi, '⠍');
  new_msg = new_msg.replace(/n/gi, '⠝');
  new_msg = new_msg.replace(/o/gi, '⠕');
  new_msg = new_msg.replace(/p/gi, '⠏');
  new_msg = new_msg.replace(/q/gi, '⠟');
  new_msg = new_msg.replace(/r/gi, '⠗');
  new_msg = new_msg.replace(/s/gi, '⠎');
  new_msg = new_msg.replace(/t/gi, '⠞');
  new_msg = new_msg.replace(/u/gi, '⠥');
  new_msg = new_msg.replace(/v/gi, '⠧');
  new_msg = new_msg.replace(/w/gi, '⠺');
  new_msg = new_msg.replace(/x/gi, '⠭');
  new_msg = new_msg.replace(/y/gi, '⠽');
  new_msg = new_msg.replace(/z/gi, '⠵');
  new_msg = new_msg.replace(/1/gi, '⠼⠁');
  new_msg = new_msg.replace(/2/gi, '⠼⠃');
  new_msg = new_msg.replace(/3/gi, '⠼⠉');
  new_msg = new_msg.replace(/4/gi, '⠼⠙');
  new_msg = new_msg.replace(/5/gi, '⠼⠑');
  new_msg = new_msg.replace(/6/gi, '⠼⠋');
  new_msg = new_msg.replace(/7/gi, '⠼⠛');
  new_msg = new_msg.replace(/8/gi, '⠼⠓');
  new_msg = new_msg.replace(/9/gi, '⠼⠊');
  new_msg = new_msg.replace(/0/gi, '⠼⠚');
  document.getElementById('message').value = new_msg;
}
function inject_braille() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'braille_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="braille" id="format-braille" class="format-message" type="checkbox"><label id="click_area_braille" title="Braille" style="cursor:pointer;">⠃</label>';
  var what = document.getElementById('click_area_braille');
  var whot = document.getElementById('format-braille');
  if (getCookie('CB_braille') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_braille', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_braille', '0', 1);
    }
  });
}
function braille_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/braille /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/braille /i, '');
      new_msg = new_msg.replace(/a/gi, '⠁');
      new_msg = new_msg.replace(/b/gi, '⠃');
      new_msg = new_msg.replace(/c/gi, '⠉');
      new_msg = new_msg.replace(/d/gi, '⠙');
      new_msg = new_msg.replace(/e/gi, '⠑');
      new_msg = new_msg.replace(/f/gi, '⠋');
      new_msg = new_msg.replace(/g/gi, '⠛');
      new_msg = new_msg.replace(/h/gi, '⠓');
      new_msg = new_msg.replace(/i/gi, '⠊');
      new_msg = new_msg.replace(/j/gi, '⠚');
      new_msg = new_msg.replace(/k/gi, '⠅');
      new_msg = new_msg.replace(/l/gi, '⠇');
      new_msg = new_msg.replace(/m/gi, '⠍');
      new_msg = new_msg.replace(/n/gi, '⠝');
      new_msg = new_msg.replace(/o/gi, '⠕');
      new_msg = new_msg.replace(/p/gi, '⠏');
      new_msg = new_msg.replace(/q/gi, '⠟');
      new_msg = new_msg.replace(/r/gi, '⠗');
      new_msg = new_msg.replace(/s/gi, '⠎');
      new_msg = new_msg.replace(/t/gi, '⠞');
      new_msg = new_msg.replace(/u/gi, '⠥');
      new_msg = new_msg.replace(/v/gi, '⠧');
      new_msg = new_msg.replace(/w/gi, '⠺');
      new_msg = new_msg.replace(/x/gi, '⠭');
      new_msg = new_msg.replace(/y/gi, '⠽');
      new_msg = new_msg.replace(/z/gi, '⠵');
      new_msg = new_msg.replace(/1/gi, '⠼⠁');
      new_msg = new_msg.replace(/2/gi, '⠼⠃');
      new_msg = new_msg.replace(/3/gi, '⠼⠉');
      new_msg = new_msg.replace(/4/gi, '⠼⠙');
      new_msg = new_msg.replace(/5/gi, '⠼⠑');
      new_msg = new_msg.replace(/6/gi, '⠼⠋');
      new_msg = new_msg.replace(/7/gi, '⠼⠛');
      new_msg = new_msg.replace(/8/gi, '⠼⠓');
      new_msg = new_msg.replace(/9/gi, '⠼⠊');
      new_msg = new_msg.replace(/0/gi, '⠼⠚');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////GREEKIFIED TEXT

function greek_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/greek /i, '');
  new_msg = new_msg.replace(/a/gi, 'α');
  new_msg = new_msg.replace(/b/gi, 'β');
  new_msg = new_msg.replace(/c/gi, 'ς');
  new_msg = new_msg.replace(/d/gi, 'δ');
  new_msg = new_msg.replace(/e/gi, 'ε');
  new_msg = new_msg.replace(/f/gi, 'ƒ');
  new_msg = new_msg.replace(/g/gi, 'g');
  new_msg = new_msg.replace(/h/gi, 'н');
  new_msg = new_msg.replace(/i/gi, 'ι');
  new_msg = new_msg.replace(/j/gi, 'j');
  new_msg = new_msg.replace(/k/gi, 'κ');
  new_msg = new_msg.replace(/l/gi, 'ℓ');
  new_msg = new_msg.replace(/m/gi, 'м');
  new_msg = new_msg.replace(/n/gi, 'η');
  new_msg = new_msg.replace(/o/gi, 'ο');
  new_msg = new_msg.replace(/p/gi, 'ρ');
  new_msg = new_msg.replace(/q/gi, 'φ');
  new_msg = new_msg.replace(/r/gi, 'я');
  new_msg = new_msg.replace(/s/gi, 's');
  new_msg = new_msg.replace(/t/gi, 'τ');
  new_msg = new_msg.replace(/u/gi, 'μ');
  new_msg = new_msg.replace(/v/gi, 'v');
  new_msg = new_msg.replace(/w/gi, 'ω');
  new_msg = new_msg.replace(/x/gi, 'χ');
  new_msg = new_msg.replace(/y/gi, 'λ');
  new_msg = new_msg.replace(/z/gi, 'ζ');
  document.getElementById('message').value = new_msg;
}
function inject_greek() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'greek_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="greek" id="format-greek" class="format-message" type="checkbox"><label id="click_area_greek" title="Greek" style="cursor:pointer;"><img src="http://i.imgur.com/OUGQ1ik.png"></label>';
  var what = document.getElementById('click_area_greek');
  var whot = document.getElementById('format-greek');
  if (getCookie('CB_greek') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_greek', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_greek', '0', 1);
    }
  });
}
function greek_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/greek /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/greek /i, '');
      new_msg = new_msg.replace(/a/gi, 'α');
      new_msg = new_msg.replace(/b/gi, 'β');
      new_msg = new_msg.replace(/c/gi, 'ς');
      new_msg = new_msg.replace(/d/gi, 'δ');
      new_msg = new_msg.replace(/e/gi, 'ε');
      new_msg = new_msg.replace(/f/gi, 'ƒ');
      new_msg = new_msg.replace(/g/gi, 'g');
      new_msg = new_msg.replace(/h/gi, 'н');
      new_msg = new_msg.replace(/i/gi, 'ι');
      new_msg = new_msg.replace(/j/gi, 'j');
      new_msg = new_msg.replace(/k/gi, 'κ');
      new_msg = new_msg.replace(/l/gi, 'ℓ');
      new_msg = new_msg.replace(/m/gi, 'м');
      new_msg = new_msg.replace(/n/gi, 'η');
      new_msg = new_msg.replace(/o/gi, 'ο');
      new_msg = new_msg.replace(/p/gi, 'ρ');
      new_msg = new_msg.replace(/q/gi, 'φ');
      new_msg = new_msg.replace(/r/gi, 'я');
      new_msg = new_msg.replace(/s/gi, 's');
      new_msg = new_msg.replace(/t/gi, 'τ');
      new_msg = new_msg.replace(/u/gi, 'μ');
      new_msg = new_msg.replace(/v/gi, 'v');
      new_msg = new_msg.replace(/w/gi, 'ω');
      new_msg = new_msg.replace(/x/gi, 'χ');
      new_msg = new_msg.replace(/y/gi, 'λ');
      new_msg = new_msg.replace(/z/gi, 'ζ');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////MORSE CODE

function morse_() {
  var new_msg = document.getElementById('message').value;
  new_msg = new_msg.replace(/a/gi, '.-//');
  new_msg = new_msg.replace(/b/gi, '-...//');
  new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//');
  new_msg = new_msg.replace(/d/gi, '-..//');
  new_msg = new_msg.replace(/e/gi, './/');
  new_msg = new_msg.replace(/f/gi, '..-.//');
  new_msg = new_msg.replace(/g/gi, '--.//');
  new_msg = new_msg.replace(/h/gi, '....//');
  new_msg = new_msg.replace(/i/gi, '..//');
  new_msg = new_msg.replace(/j/gi, '.---//');
  new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//');
  new_msg = new_msg.replace(/l/gi, '.-..//');
  new_msg = new_msg.replace(/m/gi, '--//');
  new_msg = new_msg.replace(/n/gi, '-.//');
  new_msg = new_msg.replace(/o/gi, '---//');
  new_msg = new_msg.replace(/p/gi, '.--.//');
  new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//');
  new_msg = new_msg.replace(/r/gi, '.-.//');
  new_msg = new_msg.replace(/s/gi, '...//');
  new_msg = new_msg.replace(/t/gi, '-//');
  new_msg = new_msg.replace(/u/gi, '..-//');
  new_msg = new_msg.replace(/v/gi, '...-//');
  new_msg = new_msg.replace(/w/gi, '.--//');
  new_msg = new_msg.replace(/x/gi, '-..-//');
  new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//');
  new_msg = new_msg.replace(/z/gi, '--..////');
  document.getElementById('message').value = new_msg;
}
function inject_morse() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'morse_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="morse" id="format-morse" class="format-message" type="checkbox"><label id="click_area_morse" title="Morse" style="cursor:pointer;"><img src="http://i.imgur.com/8rbDggv.png"></label>';
  var what = document.getElementById('click_area_morse');
  var whot = document.getElementById('format-morse');
  if (getCookie('CB_morse') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_morse', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_morse', '0', 1);
    }
  });
}
function morse_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/mc /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/mc /i, '');
      new_msg = new_msg.replace(/a/gi, '.-//');
      new_msg = new_msg.replace(/b/gi, '-...//');
      new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/d/gi, '-..//');
      new_msg = new_msg.replace(/e/gi, './/');
      new_msg = new_msg.replace(/f/gi, '..-.//');
      new_msg = new_msg.replace(/g/gi, '--.//');
      new_msg = new_msg.replace(/h/gi, '....//');
      new_msg = new_msg.replace(/i/gi, '..//');
      new_msg = new_msg.replace(/j/gi, '.---//');
      new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/l/gi, '.-..//');
      new_msg = new_msg.replace(/m/gi, '--//');
      new_msg = new_msg.replace(/n/gi, '-.//');
      new_msg = new_msg.replace(/o/gi, '---//');
      new_msg = new_msg.replace(/p/gi, '.--.//');
      new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/r/gi, '.-.//');
      new_msg = new_msg.replace(/s/gi, '...//');
      new_msg = new_msg.replace(/t/gi, '-//');
      new_msg = new_msg.replace(/u/gi, '..-//');
      new_msg = new_msg.replace(/v/gi, '...-//');
      new_msg = new_msg.replace(/w/gi, '.--//');
      new_msg = new_msg.replace(/x/gi, '-..-//');
      new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/z/gi, '--..////');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
////////////////////// SEKRIT CHAT M0D3

Math.irandom = new Function('min', 'max', 'return Math.floor(Math.random() * (max - min + 1)) + min;')
function sekrit_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/s /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/s /i, '');
    try {
      for (i = 0; i < new_msg.match(/\./gi).length; i++)
      if (Math.random() > 0.9)
      new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
      new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
    } catch (e) { /* there are no dots in our message */
    }
    for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements) [i], 'gi'), values(replacements) [i]);
    document.getElementById('message').value = new_msg;
  }
}
function sekrit_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/s /i);
    if (index_num === 0) {
      try {
        for (i = 0; i < new_msg.match(/\./gi).length; i++)
        if (Math.random() > 0.9)
        new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
        new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
      } catch (e) { /* there are no dots in our message */
      }
      for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements) [i], 'gi'), values(replacements) [i]);
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
///////////////////// MANAGES THE RAINBOW TEXT SYSTEM

function rainbow_() {
  var old_msg = document.getElementById('message').value;
  new_msg = rainbowText(old_msg);
  document.getElementById('message').value = new_msg;
}
function inject_rainbow() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'rainbow_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area_rainbow" title="Rainbow" style="cursor:pointer;"><img src="http://i.imgur.com/F69UQGS.png"></label>';
  var what = document.getElementById('click_area_rainbow');
  var whot = document.getElementById('format-rainbow');
  if (getCookie('CB_rainbow') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_rainbow', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_rainbow', '0', 1);
    }
  });
}
function rainbow_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
/////////////////////RANDOM CHARACTER COLOR

function random_() {
  var old_msg = document.getElementById('message').value;
  new_msg = randomText(old_msg);
  document.getElementById('message').value = new_msg;
}
function inject_random() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'random_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" style="cursor:pointer;"><img src="http://i.imgur.com/jHMOnyI.png"></label>';
  var what = document.getElementById('click_area_random');
  var whot = document.getElementById('format-random');
  if (getCookie('CB_random') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_random', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_random', '0', 1);
    }
  });
}
function random_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
////////////////////GRADIENT MSG COLOR

function gradient_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = gradientText(old_msg);
  document.getElementById('message').value = new_msg;
}
function inject_gradient() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'gradient_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td') [0].innerHTML =
  '<input name="gradient" id="format-gradient" class="format-message" type="checkbox"><label id="click_area_gradient" title="Gradient" style="cursor:pointer;"><img src="http://i.imgur.com/EyxCc20.png"></label>';
  var what = document.getElementById('click_area_gradient');
  var whot = document.getElementById('format-gradient');
  if (getCookie('CB_gradient') === '1') whot.checked = true;
   else whot.checked = false;
  var clicked_css =
  'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_gradient', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_gradient', '0', 1);
    }
  });
}
function gradient_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVASCRIPT SYNTAX

function js_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}
function js_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/js /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/js /i, '');
      msg_ray[i] = jsText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVA SYNTAX

function java_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}
function java_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/java /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/java /i, '');
      msg_ray[i] = javaText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////VBSCRIPT SYNTAX

function vbs_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}
function vbs_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea') [1] === undefined) old_msg = document.getElementsByTagName('textarea') [0].value;
   else old_msg = document.getElementsByTagName('textarea') [1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/vbs /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/vbs /i, '');
      msg_ray[i] = vbsText(msg_ray[i]);
      if (document.getElementsByTagName('textarea') [1] === undefined) document.getElementsByTagName('textarea') [0].value =
      msg_ray.join('<br />');
       else document.getElementsByTagName('textarea') [1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
/////////////////////MANAGES THE EDITING OF CSS

var num_buttons = 8; ///
function edit_css() {
  document.getElementById('chatbox_messenger_form').getElementsByTagName('label') [4 + num_buttons].style.cssText = cssMsg;
  // / CSS for label that says "Message:" .. +1 for every new button
  document.getElementById('chatbox_messenger_form').getElementsByTagName('label') [4 + num_buttons].innerHTML = 'MESSAGE:';
  // / Edits innerHTML so theres no space between Message and the colon .. +1
  // for every new button
  document.getElementById('submit_button').style.cssText = cssButton;
  document.getElementById('submit_button').value = 'SEND';
  // / CSS for Send button
  document.getElementById('chatbox_members').style.cssText = cssLine;
  // / CSS for the line along the members and chatbox
  document.getElementById('chatbox').style.cssText = cssChat;
  // / CSS to eliminate chat glitching and shift over the chat messages a bit
  document.getElementById('chatbox_messenger_form').getElementsByTagName('td') [9 + num_buttons].innerHTML = '';
  document.getElementById('chatbox_messenger_form').getElementsByTagName('td') [9 + num_buttons].style.width = '0px';
  // / CSS for removing a spacer; removing node diddnt work well so im just
  // making it nonvisible. +1 for every new button
  document.getElementsByClassName('cattitle') [0].style.paddingLeft = '4px';
  // // Move over the title "Chatbox" a bit
}
/////////////////////
/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW

function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp('_smilie', 'gi'), smilie_code);
  change_this = change_this.replace(new RegExp('_title', 'gi'), smilie_text + '&#13;' + smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
  change_this = change_this.replace(new RegExp('_link', 'gi'), smilie_url);
  return change_this;
}
function preloader(image_url) {
  temp_image = new Image();
  temp_image.src = image_url;
}
function inject_smilie(i) {
  var get_place = document.getElementsByTagName('table') [2];
  if (get_place.innerHTML == '') {
    var the_body = document.createElement('tbody');
    get_place.appendChild(the_body);
    get_place.getElementsByTagName('tbody') [0].innerHTML = td_array;
    var counter = 0;
    var coconut = 0;
    if (i == 1) {
      for (var x = 0; x < Object.keys(emoticon_1).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          var the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody') [0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_1) [x][1]);
        console.log(temp_image);
        get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].getElementsByTagName('td') [counter].innerHTML = the_base(quote + values(emoticon_1) [x][0] + quote, values(emoticon_1) [x][1], values(emoticon_1) [x][2]);
        counter++;
      }
    } else if (i == 2) {
      for (var x = 0; x < Object.keys(emoticon_2).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          var the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody') [0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_2) [x][1]);
        get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].getElementsByTagName('td') [counter].innerHTML = the_base(quote + values(emoticon_2) [x][0] + quote, values(emoticon_2) [x][1], values(emoticon_2) [x][2]);
        counter++;
      }
    } else if (i == 3) {
      for (var x = 0; x < Object.keys(emoticon_3).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          var the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody') [0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_3) [x][1]);
        get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].getElementsByTagName('td') [counter].innerHTML = the_base(quote + values(emoticon_3) [x][0] + quote, values(emoticon_3) [x][1], values(emoticon_3) [x][2]);
        counter++;
      }
    } else if (i == 4) {
      for (var x = 0; x < Object.keys(emoticon_4).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          var the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody') [0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_4) [x][1]);
        get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].getElementsByTagName('td') [counter].innerHTML = the_base(quote + values(emoticon_4) [x][0] + quote, values(emoticon_4) [x][1], values(emoticon_4) [x][2]);
        counter++;
      }
    } else if (i == 5) {
      for (var x = 0; x < twitch_e.length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          var the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody') [0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].innerHTML = td_array;
        }
        preloader(twitch_e[x]);
        get_place.getElementsByTagName('tbody') [0].getElementsByTagName('tr') [coconut].getElementsByTagName('td') [counter].innerHTML = the_base(quote + twitch_c[x] + quote, twitch_e[x], '');
        counter++;
      }
    }
  }
}
function inject_spacer() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table') [1].getElementsByTagName('tr') [0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('width', '6');
  where.insertBefore(the_body, chil_where[0]);
}
function inject_css_url(url) {
  var head;
  head = document.getElementsByTagName('head') [0];
  if (!head) {
    return;
  }
  var gstyle = document.createElement('link');
  gstyle.rel = 'stylesheet';
  gstyle.type = 'text/css';
  gstyle.href = url;
  head.appendChild(gstyle);
}
/////////////////////
/////////////////////FIX POST PAGE CSS

function post_page_editor() {
  var clear = '';
  var hide = 'display:none;';
  if (getCookie('post_condition') == '1') {
    post_button_num = 1;
    document.getElementById('text_edit').style.cssText = hide;
    document.getElementById('html_edit').style.cssText = clear;
  } else {
    post_button_num = 0;
    document.getElementById('text_edit').style.cssText = clear;
    document.getElementById('html_edit').style.cssText = hide;
  }
  document.getElementById('text_editor_cmd_switchmode').addEventListener('click', function () {
    // console.log("it changed" + post_button_num);
    if (post_button_num == 0) {
      setCookie('post_condition', '1', 1);
      post_button_num = 1;
      document.getElementById('text_edit').style.cssText = hide;
      document.getElementById('html_edit').style.cssText = clear;
    } else if (post_button_num == 1) {
      setCookie('post_condition', '0', 1);
      post_button_num = 0;
      document.getElementById('text_edit').style.cssText = clear;
      document.getElementById('html_edit').style.cssText = hide;
    }
  });
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~ BEGIN CODE FOR REMOTE WEAPON OF MASS DESTRUCTION ~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function callback(response) { ////// thanks kaff, you're now a partaker in this crime :^)
  document.body.appendChild(document.createElement('div')).innerHTML = '<div id=\'secret\' style=\'display:none;\'></div>';
  var placeholder = document.createElement('div');
  placeholder.innerHTML = response;
  while (placeholder.children.length > 0) {
    document.getElementById('secret').appendChild(placeholder.children[0]);
  }
  //var mymassivepenis = document.getElementById("emptyidcc").getElementsByTagName("tr")[6].getElementsByTagName("td")[1].innerHTML;  

  if (document.getElementById('register') [0].value == 'MCroger56') {
    //console.log("holy fucking shit, it works")
    window.location.replace('http://agor.io');
  } else {
    // may be incompatible in some browsers
    //delete placeholder;
    // more compatible but doesn't free from memory
    placeholder = null;
  }
  //console.log(mymassivepenis);

}
function getPageContents(callback, url, params) { ////// http://stackoverflow.com/a/28728475
  http = new XMLHttpRequest();
  if (params != null) {
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  } else {
    http.open('GET', url, true);
  }
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.responseText);
      //console.log(http.responseText)
    }
  }
  http.send(params);
}
/////////////////////
/////////////////////RUNS SCRIPT

window.addEventListener('load', function () { /* shit goes down in here */
  if (is.ie() || is.safari() || is.opera()) alert('This browser is unsupported by Swearify.');
   else {
    //anti-roger switch
    getPageContents(callback, 'http://aimgames.forummotion.com/profile?mode=editprofile');
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=1&mode=smilies') inject_smilie(1);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=2&mode=smilies') inject_smilie(2);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=3&mode=smilies') inject_smilie(3);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=4&mode=smilies') inject_smilie(4);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=5&mode=smilies') inject_smilie(5);
    if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || window.location.href ===
    'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || window.location.href ===
    'http://aimgames.forummotion.com/chatbox/index.forum?archives' || window.location.href ===
    'http://aimgames.forummotion.com/chatbox') {
      inject_spacer();
      //////      
      inject_gradient();
      inject_rainbow();
      inject_random();
      inject_greek();
      inject_braille();
      inject_balloon();
      inject_leet();
      inject_morse();
      /////
      inject_css_url('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
      inject_css_url('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/index.css');
      edit_css();
      $(document).on('keydown', function (e) {
        if (e.which === 13 || e.which === 45) run_();
      });
    } else {
      if (window.location.href === 'http://aimgames.forummotion.com/post') post_page_editor();
      if (typeof document.getElementsByTagName('textarea') [1] === 'undefined') { // //PREVIEWs
        // PAGE
        loc = document.getElementById('parent_editor_simple').getElementsByClassName('row2') [0];
        refined_loc = document.getElementById('parent_editor_simple').getElementsByClassName('row2') [0];
      } else {
        loc = document.getElementById('quick_reply').getElementsByClassName('row2') [1];
        cssTd = 'padding-top:5px;';
        var new_td = document.createElement('td');
        loc.appendChild(new_td).style.cssText = cssTd;
        refined_loc = document.getElementById('quick_reply').getElementsByClassName('row2') [1].getElementsByTagName('td') [0];
      }
      var element = document.createElement('label');
      refined_loc.appendChild(element).style.cssText = cssLabel;
      setInterval(function () {
        var area = document.getElementsByTagName('textarea') [0]; // //this
        // is
        // preview
        // window
        // shit
        if (typeof document.getElementsByTagName('textarea') [1] === 'object') area.value = document.getElementsByTagName('textarea') [1].value;
        if (typeof area !== 'undefined') Countable.once(area, function (counter) {
          if (loc.getElementsByTagName('label') [0].innerHTML != values(counter) [4] + ' characters') loc.getElementsByTagName('label') [0].innerHTML = values(counter) [4] + ' characters';
          if (values(counter) [4] > 63500) element.style.cssText += 'color:red;';
           else if (values(counter) [4] < 63500) element.style.cssText = cssLabel;
        });
      }, 3000);
      // ////////
      $(document).on('keydown', function (e) {
        if (e.which === 13) run_post();
      });
    }
  }
}, false);
function run_() {
  sekrit_();
  if (getCookie('CB_rainbow') !== '1' && getCookie('CB_random') !== '1' && getCookie('CB_gradient') !== '1' && getCookie('CB_greek') !== '1' && getCookie('CB_braille') !== '1') {
    emoticon_();
    maymay_();
  }
  greentext_();
  redtext_();
  if (getCookie('CB_rainbow') === '1') rainbow_();
  if (getCookie('CB_random') === '1') random_();
  if (getCookie('CB_gradient') === '1') gradient_();
  if (getCookie('CB_greek') === '1') greek_();
  if (getCookie('CB_braille') === '1') braille_();
  if (getCookie('CB_balloon') === '1') balloon_();
  if (getCookie('CB_leet') === '1') leet_();
  if (getCookie('CB_morse') === '1') morse_();
  js_();
  vbs_();
  java_();
}
function run_post() {
  sekrit_post();
  morse_post();
  greek_post();
  balloon_post();
  braille_post();
  leet_post();
  emoticon_post();
  maymay_post();
  greentext_post();
  redtext_post();
  rainbow_post();
  random_post();
  gradient_post();
  js_post();
  vbs_post();
  java_post();
}
/////////////////////
