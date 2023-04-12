// ==UserScript==
// @name         FileCR Bypass
// @namespace    james_willer
// @match        *://filecr.com/*
// @icon         https://filecr.com/favicon.png
// @version      1.1
// @description  A three-liner to bypass FileCR premium
// @author       James_willer
// @grant        none
// @license      Unlicense
// ==/UserScript==

if (!document.cookie.includes("extensionIsInstalled")) {
    document.cookie = "extensionIsInstalled=true; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/;";
}