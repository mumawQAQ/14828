// ==UserScript==
// @name             Direct Linkvertise
// @namespace    ghostrider47
// @version          0.1
// @description    All Credits to OVERLOADEDDevCenter
// @author          ghostrider47
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.link-to.net/*
// @grant             none
// ==/UserScript==
// @run-at         document-start
// @run-at         document-end
// @run-at         document-idle

document.location = document.URL.replace('','https://linkbackend2.000webhostapp.com/linkvertisebypass.php?url=');