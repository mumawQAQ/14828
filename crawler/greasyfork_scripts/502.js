// ==UserScript==
// @name        Health-Bar Mod | Shell Shockers | flygOn LiTe
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Health-Bar Mod by flygOn LiTe
// @author       flygOn LiTe
// @match        https://shellshock.io/*
// @match        https://mathactivity.xyz/*
// @match        https://mathdrills.life/*
// @icon         https://www.berrywidgets.com/assets/health-bar2.png
// @grant        none
// @license MIT
// ==/UserScript==
(function () {
var style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://berrywidgets.com/shellshockers/mods/health-bar/health-bar.css";
document.head.appendChild(style);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://berrywidgets.com/shellshockers/mods/health-bar/health-bar.js";
document.body.appendChild(script);
})();

