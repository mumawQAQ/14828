// ==UserScript==
// @name         NyTimes Never bother me plz!
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  no subcribe popover to bother reader on nytimes.com
// @author        etng
// @match        *://www.nytimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("wait script")
    window.setInterval(function(){
        try{
        document.querySelector('.css-mcm29f').style.position='initial';
        document.querySelector('#gateway-content, .css-1bd8bfl').remove();
         console.log("done script")
        }catch(e){
        }
    }, 1000)
})();