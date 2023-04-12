// ==UserScript==
// @name         stockenz.com : Auto Claim
// @namespace    stockenz.com.auto.claim
// @version      1.0
// @description  https://stockenz.com/lg9ubq8o
// @author       stealtosvra
// @match        https://stockenz.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stockenz.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
setInterval(function() {
    function hCaptcha() {
        return typeof grecaptcha !== 'undefined' && grecaptcha.getResponse().length !== 0;
    }
    if (hCaptcha()) {
        const button = document.querySelector(".button");
        if (button) {
            button.click();
        }
    }
}, 5000);

})();