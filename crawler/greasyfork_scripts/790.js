// ==UserScript==
// @name         MooMoo right click auto feed
// @namespace    http://tampermonkey.net/
// @version      1.091
// @description  Uses food when right clicked
// @author       meatman2tasty
// @match        http://moomoo.io/*
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(a) {
    if (a.keyCode == 16) {
 document.getElementById("actionBarItem9").click();
    }
}, false);

document.addEventListener("keydown", function(a) {
    if (a.keyCode == 16) {
 document.getElementById("actionBarItem10").click();
    }
}, false);

window.oncontextmenu = function () {
   return false;
};