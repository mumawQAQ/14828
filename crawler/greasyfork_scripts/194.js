// ==UserScript==
// @name         Robux Changer 2.0
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Robux appears on your screen as your total when logged into roblox.com/home
// @author       TayTakeOff
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

function start() {
    var robux = document.getElementById("nav-robux-amount");
    robux.innerHTML = "610K+";
    var balance = document.getElementById("nav-robux-balance");
    balance.innerHTML = "610,000 Robux";
      setTimeout(start, 0);
}
start();