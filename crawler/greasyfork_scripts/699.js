// ==UserScript==
// @name        Pandabuy Best Agent
// @namespace   https://github.com/earthplusthree/userscripts
// @license     MIT
// @match       *://www.reddit.com/r/FashionReps/*
// @grant       none
// @version     1.0
// @author      earthplusthree
// @description Converts Taobao and Weidan links on r/FashionReps to Pandabuy links, because Pandabuy best agent, ok? I pull up at the afterparty
// ==/UserScript==

window.onload = () => {
  Array.from(document.getElementsByTagName("a"))
    .filter((link) => link.href.includes("://item.taobao.com/item.htm") || link.href.includes("://weidian.com/item.html"))
    .forEach((link) => {
      link.href = "https://www.pandabuy.com/product?url=" + encodeURIComponent(link.href);
      link.innerText = link.innerText + " (PANDABUY)";
    });
};
