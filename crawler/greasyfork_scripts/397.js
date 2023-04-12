// ==UserScript==
// @name         YouTube - Stay Active and Play Forever
// @namespace    q1k
// @version      3.1.0
// @description  Tired of Youtube pausing playback asking you to click 'yes' to continue playing? This script will make the popup never appear, music will never stop. Never pause, never inactive, never worry. The script will keep you active and keep playing music FOREVER. Enables playing in background on mobile.
// @author       q1k
// @match        *://*.youtube.com/*
// @run-at       document-start
// ==/UserScript==

Object.defineProperties(document, { 'hidden': {value: false}, 'webkitHidden': {value: false}, 'visibilityState': {value: 'visible'}, 'webkitVisibilityState': {value: 'visible'} });

setInterval(function(){
    document.dispatchEvent( new KeyboardEvent( 'keyup', { bubbles: true, cancelable: true, keyCode: 143, which: 143 } ) );
}, 60000);

