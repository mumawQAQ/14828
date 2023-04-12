// ==UserScript==
// @name         NoAds For ShellShockers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A Script To Hide Ads On ShellShockers.IO ShellShock.io
// @author       Taco
// @match        https://shellshock.io/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://biologyclass.club/*
// @match        https://egghead.institute/*
// @match        https://egg.dance/*
// @match        https://eggisthenewblack.com/*
// @match        https://mathfun.rocks/*
// @match        https://hardboiled.life/*
// @match        https://overeasy.club/*
// @match        https://zygote.cafe/*
// @match        https://eggsarecool.com/*
// @match        https://deadlyegg.com/*
// @match        https://mathgames.world/*
// @match        https://hardshell.life/*
// @match        https://violentegg.club/*
// @match        https://yolk.life/*
// @match        https://softboiled.club/*
// @match        https://scrambled.world/*
// @match        https://algebra.best/*
// @match        https://scrambled.today/*
// @match        https://deathegg.world/*
// @match        https://violentegg.fun/*
// @grant        none
// ==/UserScript==

console.log("Join My Discord: https://discord.gg/vSExwxrkRk");

(function() {
    "use strict";

    Object.defineProperty(Object, "hideAds", {
        enumerable: false,
        get() {
            return true;
        },
        set(v) {
            return v.hideAds;
        }
    });

})();