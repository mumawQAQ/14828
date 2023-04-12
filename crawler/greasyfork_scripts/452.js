// ==UserScript==
// @name         Paper.io Debug Menu + Hacks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Working in : Small map , Fast speed , Classic mode
// @author       You
// @license MIT
// @match        https://paper-io.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paper-io.com
// @grant        none
// ==/UserScript==

(function() {
    'use scrict'
    var debug = true;

alert ('Press t to activate Debug menu')
alert ('Press x to activate Debug view , Press z to deactivate Debug view')


document.addEventListener('keydown', (event) => {
    if (event.key === 't') {
paper2.game.debug = true
paper2.game.debugGraph = true

    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'x') {
paper2.game.debugView = true
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'z') {
paper2.game.debugView = false
    }
})
})();
