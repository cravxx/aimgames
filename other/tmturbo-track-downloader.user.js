// ==UserScript==
// @name        TMTurbo Track Download Link converter
// @description Converts track downloads for Trackmania Turbo to direct links. DISCLAIMER: I do not endorse or condone piracy. This is merely a tool for convenience.
// @namespace   jsthehansen@gmail.com
// @include     https://players.turbo.trackmania.com/pc/maps/*
// @include     http://players.turbo.trackmania.com/pc/maps/*
// @version     1.0
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
"use strict";

var permalink = document.getElementById('page_permalink').value;
permalink = permalink.substring(permalink.indexOf('/pc/maps/') + '/pc/maps/'.length);

document.getElementById('page_permalink').value = 'https://s3-eu-west-1.amazonaws.com/tmturbo-prod-pc-maps/' + permalink + '.Map.Gbx';
