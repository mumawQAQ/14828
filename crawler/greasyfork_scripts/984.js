// ==UserScript==
// @name         ✨Roblox Game Filter
// @version      1.0.1
// @run-at       document-start
// @namespace    game
// @author       levisurely
// @license      Apache-2.0
// @description  Enable the 'Old-School' Game Filter, decent for finding the perfect game.
// @match        *://*.roblox.com/games/?SortFilter*
// ==/UserScript==
 
//lev#9999 On Discord
//discord.gg/tmYQr99wTa

function loadEvent() {
    new MutationObserver(function() {
        let getFilter = document.getElementsByClassName('filter-hidden');
        if(getFilter[0]) {
            Array.from(getFilter).forEach(function(GameFilter) {
                GameFilter.style.visibility = 'unset';
                GameFilter.style.height = 'unset';
            })
        };

    }) .observe(document, {
        subtree: true,
        childList: true
    });
};

window.onload = loadEvent;