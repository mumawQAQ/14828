// ==UserScript==
// @name         BrainlyBypassPaywall
// @namespace    https://github.com/Dwyriel
// @version      1.3
// @description  Clears brainly's local storage to reset daily count to bypass the paywall
// @author       Dwyriel
// @license      MIT
// @match        *://*brainly.in/*
// @match        *://*brainly.com/*
// @match        *://*brainly.it/*
// @match        *://*brainly.co.id/*
// @match        *://*brainly.ro/*
// @match        *://*brainly.ph/*
// @match        *://*brainly.lat/*
// @match        *://*brainly.pl/*
// @match        *://*brainly.com.br/*
// @grant        none
// @run-at       document-start
// @homepageURL  https://github.com/Dwyriel/Greasyfork-Scripts
// ==/UserScript==

(function () {
    'use strict';
    localStorage.clear();
    //Uncomment to also clear sessionStorage in case they move from localStorage to it
    //sessionStorage.clear();
})();