// ==UserScript==
// @name         1.6M roblox prank to trick your friends
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  1.6M roblox prank to trick your friends!
// @author       iHasLag
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

function start() {
    var robux = document.getElementById("nav-robux-amount");
    robux.innerHTML = "1.6M";
      setTimeout(start, 0);
}
start();