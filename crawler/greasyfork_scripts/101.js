// ==UserScript==
// @name        Color Style - character.ai
// @namespace   An CSS user script
// @match       https://beta.character.ai/*
// @grant       none
// @license     MIT
// @version     1.1
// @author      Perberos
// @description 11/9/2022, 5:32:59 AM
// ==/UserScript==
(function () {
  var css = "em { color: gray !important; }";

  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.setAttribute("type", 'text/css');
  style.innerHTML = css;
  head.appendChild(style);
})();
