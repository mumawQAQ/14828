// ==UserScript==
// @name         Robux Prank
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  [UPDATE] 187K+ ROBUX appears on your screen as your total when logged into roblox.com/home
// @author       Ryoko
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

function start() {
    var robux = document.getElementById("nav-robux-amount");
    robux.innerHTML = "187K+";
      setTimeout(start, 0);
}
start();