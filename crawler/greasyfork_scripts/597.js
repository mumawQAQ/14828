// ==UserScript==
// @name        ChatGPT Capacity Bypass
// @namespace   https://flawcra.cc/
// @match       https://chat.openai.com/auth/login
// @grant       none
// @version     1.0.1-GitHub
// @author      FlawCra
// @license     Apache License 2.0
// @description A simple script to automatically bypass the "ChatGPT is at Capacity" screen.
// @icon        https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://chat.openai.com&size=256
// ==/UserScript==

(() => {
  const content = document.body.innerHTML;
  if(!content.includes("Welcome to ChatGPT") && !content.includes("checking")) {
    location.reload();
    return;
  }
  console.log("ChatGPT Capacity bypassed!");
})();
