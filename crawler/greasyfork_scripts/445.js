// ==UserScript==
// @name         rekonise.com bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @license      MIT
// @description  bypasses annoying time taking rekonise links.
// @author       el0uz
// @match        *://rekonise.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

var link = window.location.href.replace("https://rekonise.com/", "");

let xhr= new XMLHttpRequest();

xhr.responseType = "";
xhr.onreadystatechange = () => {
  if (xhr.status == 200 && xhr.readyState == 4) {
    var reponse_json = JSON.parse(xhr.responseText);
    let destination = reponse_json.url;
    alert("link bypassed: " + destination);
    window.close();
  }
};

let url = `https://api.rekonise.com/unlocks/${link}`;

xhr.open('GET',url);

xhr.send();