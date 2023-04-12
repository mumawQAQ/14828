// ==UserScript==
// @name         "Free" Spotify Premium
// @namespace    http://tampermonkey.net/
// @version      ALPHA
// @description  Run Open Spotify on mobile!
// @run-at       document-start
// @author       samueleex
// @include      http*://open.spotify.com/*
// @license      MIT; https://it.wikipedia.org/wiki/Licenza_MIT
// @copyright    samueleex
// @grant        none
// @namespace    https://greasyfork.org/en/users/974900-ethical-hacker-forum
// ==/UserScript==

(function () {
    'use strict';
    let _scr = {};
    for (const key in window.screen) {
        _scr[key] = window.screen[key];
    }
    Object.setPrototypeOf(_scr, Object.getPrototypeOf(window.screen));

    _scr.width = 1080;
    _scr.height = 1920;

    window.screen = _scr;
})();