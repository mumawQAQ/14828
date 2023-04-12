// ==UserScript==
// @name         Instagram Video Controls
// @namespace    https://fxzfun.com/
// @version      0.5
// @description  Adds video player controls to Instagram videos
// @author       FXZFun
// @match        https://www.instagram.com/
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        GM_addStyle
// @license      GNU GPL v3
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        document.querySelectorAll("video").forEach(el => {
            var muteBtn = document.querySelector("button[aria-label='Toggle audio'")
            if (!muteBtn) muteBtn = [...document.querySelectorAll(".xurb0ha[role='button']")].filter(_ => checkVisible(_))[0];
            muteBtn.style.top = "-100px";
            muteBtn.style.zIndex = "999999";

            if (!el.controls) el.controls="controls";

            if (!document.head.innerHTML.includes("::-webkit-media-controls")) {
                GM_addStyle('::-webkit-media-controls { z-index: 999998; position: relative; } video::-webkit-media-controls-volume-slider {display:none;} video::-webkit-media-controls-mute-button {display:none;}');
            }
        });
    }, 500);

    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
})();