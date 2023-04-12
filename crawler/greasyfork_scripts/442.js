// ==UserScript==
// @name        FileCR Assistant Bypass
// @namespace   lemons
// @license     Unlicense
// @match       *://filecr.com/*
// @icon        https://filecr.com/favicon.png
// @grant       none
// @version     1.1
// @author      lemons
// @description A simple script to bypass FileCR Assistant.
// ==/UserScript==

if (!document.cookie.includes("extensionIsInstalled")) {
  document.cookie = "extensionIsInstalled=1;";
}