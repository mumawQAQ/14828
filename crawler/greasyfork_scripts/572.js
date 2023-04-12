// ==UserScript==
// @name         ChatGPT width
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  increase chat gpt box width
// @author       bitmunja
// @license MIT
// @match        https://chat.openai.com/chat/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Convenience function to execute your callback only after an element matching readySelector has been added to the page.
    // Example: runWhenReady('.search-result', augmentSearchResults);
    // Gives up after 1 minute.
    function runWhenReady(readySelector, callback) {
        var numAttempts = 0;
        var tryNow = function() {
            var elem = document.querySelector(readySelector);
            if (elem) {
                callback(elem);
            } else {
                numAttempts++;
                if (numAttempts >= 34) {
                    console.warn(`ChatGPT-width: giving up after 34 attempts. Could not find: ${readySelector}`);
                } else {
                    setTimeout(tryNow, 250 * Math.pow(1.1, numAttempts));
                }
            }
        };
        tryNow();
    }

    function applyElementWidth() {
        // console.debug(`ChatGPT-width: ready to process after content loaded...`);
        function doWork() {
            const elements = document.querySelectorAll('.text-base');
            // console.debug(`ChatGPT-width: have ${elements.length} elements to process...`);
            for (let i = 0; i < elements.length; i++) {
                // console.debug(`ChatGPT-width: processing element: ${elements[i]}`);
                elements[i].style.setProperty('max-width', '98%', 'important');
            }
        }
        doWork();
        const observer = new MutationObserver(function(mutations) {
            let eventRegistrationCount = 0;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    eventRegistrationCount++;
                }
            });
            if(eventRegistrationCount > 0) {
                // console.debug('ChatGPT-width: mutation event, applying width adjustments...');
                doWork();
            }
        });
        // console.debug('ChatGPT-width: ready to observe mutations...');
        observer.observe(document.documentElement, { childList: true, subtree: true });

    };

    // dynamic page events
    runWhenReady('.text-base', applyElementWidth, false);

})();