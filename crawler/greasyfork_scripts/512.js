// ==UserScript==
// @name         DevFactory Kerio VPN Two-step Auth Auto-Close
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically close DevFactory Kerio VPN Two-step Auth window on successful connection
// @author       Vladimir Chernyshkov
// @match        http://keriovpn.devfactory.local/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var el = document.getElementById('customMessage');
    var inp = document.getElementsByTagName('input');
    var frm = document.getElementsByTagName('form');

    if ((el !== null) && (inp.length == 0) && (frm.length == 0)) {
        window.close();
    }
})();
