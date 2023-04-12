// ==UserScript==
// @name        Chegg Search Always See All
// @namespace   Chegg Search Always See All
// @run-at      start
// @match       *://www.chegg.com/search?*
// @match       *://www.chegg.com/search/*
// @exclude     *://www.chegg.com/*contentType=study*
// @version     1.4
// @author      uJZk
// @description Automatically add "contentType=study" to show all result of Solutions in search page.
// @license     MIT
// ==/UserScript==

if (document.location.href.indexOf("search?") > 0) {
  window.location.replace(document.location.href.replace(/(&trackid=\w+&strackid=\w+|$)/,"&contentType=study"));
} else {
  window.location.replace(document.location.href.replace(/$/,"?contentType=study"));
}
