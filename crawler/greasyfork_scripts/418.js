// ==UserScript==
// @name         Nitro Type and Math Gold For Free
// @namespace    https://singdevelopmentsblog.wordpress.com
// @version      4.0
// @description  Gives you NT Gold look on Nitro Type and Math garage page! Sometimes, it only works for a second.
// @author       Sing Developments
// @match        https://www.nitrotype.com/* 
// @match.       https://www.nitromath.com/*
// @license MIT
// @icon         https://singdevelopmentsblog.files.wordpress.com/2022/11/nitrotype-logo.jpg      
// ==/UserScript==
(function() {
    'use strict';
    setInterval(function(){
        var a = JSON.parse(localStorage["persist:nt"]);
        var b = JSON.parse(a.user);
        b.membership = "gold";
        abuser = JSON.stringify(b);
        localStorage["persist:nt"] = JSON.stringify(a);
     }, 8000);
})();
//Credit: Sing.Dev.Coding @sidastuff
