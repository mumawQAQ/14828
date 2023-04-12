// ==UserScript==
// @owner        GamesFame
// @name         FLUXUS KEY BYPASSER
// @namespace    http://tampermonkey.net/
// @version      5.3
// @description  just waits 15 seconds for FLUXUS works fine :)
// @author       @GAMERWORLD
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.link-to.net/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com
// @exclude      *://linkvertise.com/search*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      https://linkvertise.com/assets/vendor/thinksuggest.html
// @exclude      https://linkvertise.com/
// @grant        GM.xmlHttpRequest
// @icon         https://www.google.com/s2/favicons?domain=linkvertise.com
// @grant        none
// ==/UserScript==

(async function () {
    'use strict';
      var url = "https://discord-bot-enjy.herokuapp.com/?" + window.location.href;
      var oReq = new XMLHttpRequest();
      var location = window.location.href;

      if (location.includes('https://fluxteam.xyz/ks/checkpoint/checkpoint.php')) {
          console.log("loading the specific version for FLUXUS :)");
          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              setTimeout(function () {
                  window.location = b.destination;
              }, 15100);
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
      else {

          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              window.location = b.destination;
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
})();