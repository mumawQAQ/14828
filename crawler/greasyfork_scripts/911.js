// ==UserScript==
// @name Canine's Dev Panel for Cookie Clicker
// @namespace Cookie
// @include https://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/
// @version 1.1
// @grant none
// @description Opens the Dev Panel for Cookie Clicker
// ==/UserScript==

javascript: (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.OpenSesame();
            clearInterval(checkReady);
        }
    }, 1000);
}());