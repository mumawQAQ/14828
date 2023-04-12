// ==UserScript==
// @name        Ammo Mod | Shell Shockers | flygOn LiTe
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Ammo Mod by flygOn LiTe
// @author       flygOn LiTe
// @match        https://shellshock.io/*
// @match        https://mathactivity.xyz/*
// @match        https://mathdrills.life/*
// @icon         https://www.berrywidgets.com/assets/health-bar2.png
// @grant        none
// @license MIT
// ==/UserScript==
(function () {
var ammoStyle = document.createElement("link");
ammoStyle.rel = "stylesheet";
ammoStyle.href = "https://berrywidgets.com/shellshockers/mods/ammo-bar/ammo.css";
document.head.appendChild(ammoStyle);

var ammoScript = document.createElement("script");
ammoScript.type = "text/javascript";
ammoScript.src = "https://berrywidgets.com/shellshockers/mods/ammo-bar/ammo.js";
document.body.appendChild(ammoScript);
})();
