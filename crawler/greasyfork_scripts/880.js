// ==UserScript==
// @name        YouTube Shorts To Normal video
// @namespace   lii
// @description Redirects to normal YT
// @include     https://www.youtube.com/shorts/
// @version     1
// @author      BaneSRB
// @match       https://www.youtube.com/shorts/*
// @grant       none
// ==/UserScript==

window.location.href = window.location.href.replace("shorts/","watch?v=")
