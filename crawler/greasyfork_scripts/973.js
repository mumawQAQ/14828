// ==UserScript==
// @name         Reddit Auto Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Automatically toggle built-in dark mode on reddit.com
// @author       Nathaniel Wu
// @match        *://*.reddit.com/*
// @license      Apache-2.0
// @supportURL   https://gist.github.com/Nathaniel-Wu/f638b2fee2ece92742bfbf7d4db19f18
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const setDarkMode = on => {
        if ((getComputedStyle(document.getElementsByTagName("header")[0].firstElementChild).getPropertyValue('--newRedditTheme-body').trim() == "#1A1A1B"/*subject to change*/) != on) {
            let repeat_until_successful = (function_ptr, interval) => {
                if (!function_ptr())
                    setTimeout(() => {
                        repeat_until_successful(function_ptr, interval);
                    }, interval);
            }
            repeat_until_successful(() => {
                let preferences_button = document.querySelector("#USER_DROPDOWN_ID"/*subject to change*/);
                if (preferences_button == null)
                    return false;
                if (document.evaluate('/html/body/div/div[@role="menu"]'/*subject to change*/, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null) {
                    preferences_button.click();
                    return false;
                }
                let night_mode_button = document.evaluate('/html/body/div/div[@role="menu"]//button/span[.="Dark Mode"]/../button'/*subject to change*/, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (night_mode_button == null) {
                    night_mode_button = document.evaluate('/html/body/div/div[@role="menu"]//button/div[.="Dark Mode"]/../button'/*subject to change*/, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if(night_mode_button == null)
                        return false;
                }
                night_mode_button.click();
                preferences_button.click();
                return true;
            }, 10);
        }
    }
    if (window.matchMedia) {// if the browser/os supports system-level color scheme
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setDarkMode(e.matches));
    } else {// otherwise use local time to decide
        let hour = (new Date()).getHours();
        setDarkMode(hour > 18 || hour < 8);
    }
})();