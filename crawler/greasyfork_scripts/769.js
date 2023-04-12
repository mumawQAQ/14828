// ==UserScript==
// @name         10 Million Robux by Minecraft And Roblox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  10 Million Free Robux To Trick Your Friends. Might Not Work.
// @author       Minecraft And Roblox
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

function start() {
    var robuxamount = document.getElementById("nav-robux-amount");
    robuxamount.innerHTML = "10M+";
    var robuxbalance = documnet.getElementById("nav-robux-amount");
  robuxbalance.innerHTML = "999,999 ROBUX"
  setTimeout(start, 0);
}
start();