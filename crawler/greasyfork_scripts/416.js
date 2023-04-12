// ==UserScript==
// @name         OGARio by szymy v4.00
// @namespace    ogario.v4.b
// @version      4.0.0
// @description  Unoffical Polish MOD
// @author       szymy
// @match        http://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      cdn.ogario.ovh
// ==/UserScript==

// © 2017 ogario.ovh

// Check location
if (location.host === "agar.io" && location.pathname === "/") {
    location.href = "http://agar.io/ogario" + location.hash;
    return;
}

// Inject script
window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://cdn.ogario.ovh/v4/beta/",
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});
