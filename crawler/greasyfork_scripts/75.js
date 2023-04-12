// ==UserScript==
// @name         Login WHU SSL VPN without plugin
// @version      1.0
// @description  免插件访问 WHU SSL VPN
// @author       864907600cc
// @icon         https://secure.gravatar.com/avatar/147834caf9ccb0a66b2505c753747867
// @include      /^https://(vpn\.whu\.(edu\.)?cn|218\.197\.157\.2|58\.19\.127\.1)/por/login_psw\.csp/
// @namespace    http://ext.ccloli.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(window, 'checkEdge', {
    value: false,
    configurable: false,
    writable: false
});