// ==UserScript==
// @name:pl UploadHEaven
// @description:pl Omiń restrykcję Uploadhaven za darmo!
// @name         UploadHEaven
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Bypasses Uploadhaven time restriction.
// @author       Teala24k#1413
// @match      https://uploadhaven.com/download/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uploadhaven.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('load', function() {
        function inject(func) {
            var source = func.toString();
            var script = document.createElement('script');
            document.title = "UploadHEaven";
            // Put parenthesis after source so that it will be invoked.
            script.innerHTML = "("+ source +")()";
            document.body.appendChild(script);
        }
        function bypass_time() {
            seconds = 0;
        }
        var text = document.createElement("p");
        text.innerHTML = "UploadHEaven by Teala24k#1413 active!";
        document.body.appendChild(text);
        inject(bypass_time);
        document.querySelector("#submitFree").click();
    }, false);
})();