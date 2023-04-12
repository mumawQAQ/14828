// ==UserScript==
// @name         RobuxChanger by ModderOP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script by ModderOP
// @author       You
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

function start() {
    var robux = document.getElementById("nav-robux-amount");
    robux.innerHTML = "900";
      setTimeout(start, 900);
}
start();
