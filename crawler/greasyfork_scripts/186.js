// ==UserScript==
// @name         Twitch - Disable automatic video downscale
// @namespace    CommanderRoot
// @copyright    CommanderRoot
// @version      1.0.4
// @description  Disables the automatic downscaling of Twitch streams while tabbed away
// @author       https://twitter.com/CommanderRoot
// @match        https://www.twitch.tv/*
// @match        https://player.twitch.tv/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
"use strict";

// Try to trick the site into thinking it's never hidden
Object.defineProperty(document, 'hidden', {value: false, writable: false});
Object.defineProperty(document, 'mozHidden', {value: false, writable: false});
Object.defineProperty(document, 'webkitHidden', {value: false, writable: false});
Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: false});
Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: false});
document.dispatchEvent(new Event('visibilitychange'));
document.hasFocus = function () { return true; };

// visibilitychange events are captured and stopped
document.addEventListener('visibilitychange', function(e) {
  e.stopImmediatePropagation();
}, true, true);

// Set the player quality to "Source"
window.localStorage.setItem('s-qs-ts', Math.floor(Date.now()));
window.localStorage.setItem('video-quality', '{"default":"chunked"}');
