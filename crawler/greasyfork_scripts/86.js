// ==UserScript==
// @name         New Steam Workshop Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Downloads Steam Workshop items using steam-workshop-downloader.com
// @author       Zertalious (Zert)
// @match        *://steamcommunity.com/workshop/filedetails/?id=*
// @match        *://steamcommunity.com/sharedfiles/filedetails/?id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

const header = document.querySelector( '.workshopItemDetailsHeader' );

const a = document.createElement( 'a' );

a.innerText = 'Download';

a.href = 'https://steam-workshop-downloader.com/?link=' + encodeURI( window.location.href ) + '#downloader';
a.target = '_blank';

a.className = 'btn_green_white_innerfade btn_border_2px btn_medium';

a.style.padding = '10px';

header.appendChild( a );