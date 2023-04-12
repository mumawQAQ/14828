// ==UserScript==
// @name         Omegle semi-bot
// @namespace    https://openuserjs.org/user/burn
// @version      0.2.2
// @description  Write first message and auto-reconnect when disconnected.
// @author       Burn
// @copyright   2019, burn (https://openuserjs.org//users/burn)
// @license     MIT
// @match        https://www.omegle.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var options =  {
            greetingMessage : "Hello there!",
            disconnectOnIdle : {
                enabled: true,
                timeout: 30 * 1000,
                timeoutId : null
            }
        },
        BreakException = {},
        targetNode = document.querySelector('body'),
        observerConfig = { attributes: false, childList: true, subtree: true },
        tId = null,
        previousListLength = 0,
        getRndIntBetween = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        callback = function(mutationsList, observer) {
        try {
            mutationsList.forEach(function (mutation) {
                var entry = {
                    mutation: mutation,
                    el: mutation.target,
                    value: mutation.target.textContent,
                    oldValue: mutation.oldValue
                };
                if (entry.el.classList.contains("statuslog")) {
                    if (targetNode.classList.contains("inconversation")) {
                        var btnSubmit = document.querySelector(".sendbtn");
                        var textarea = document.querySelector(".chatmsg");
                        textarea.innerText = options.greetingMessage;
                        tId === null && (tId = window.setTimeout(function() {
                            btnSubmit != null && btnSubmit.click();
                        }, getRndIntBetween(0.8*1000, 1.2*1000)) );
                    }
                }
                if (entry.el.firstChild && entry.el.firstChild.classList) {
                    tId = null;
                    if (entry.el.firstChild.classList.contains("logitem")) {
                        var logs = document.querySelectorAll('.logitem');
                        if (logs.length > previousListLength) {
                            console.log(logs[ logs.length - 1 ].innerText);
                            if (options.disconnectOnIdle.enabled) {
                                clearTimeout(options.disconnectOnIdle.timeoutId);
                                options.disconnectOnIdle.timeoutId = null;
                            }
                            if (options.disconnectOnIdle.enabled &&
                               options.disconnectOnIdle.timeoutId === null) {
                                   options.disconnectOnIdle.timeoutId = window.setTimeout(function() {
                                       console.log("*** ESCO ***");
                                       document.querySelector(".disconnectbtn").click();
                                       document.querySelector(".disconnectbtn").click();
                                   }, options.disconnectOnIdle.timeout);
                            }
                        }
                        if (document.querySelector(".newbtn .disconnectbtn")) {
                            previousListLength = 0;
                            window.setTimeout(function() {
                                document.querySelector(".newbtn .disconnectbtn")
                                && document.querySelector(".newbtn .disconnectbtn").click();
                            }, getRndIntBetween(1.2 * 1000, 1.8 * 1000));
                        }
                    }
                }
            });
        } catch(e) {
            if (e !== BreakException) throw e;
        }
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, observerConfig);

})();