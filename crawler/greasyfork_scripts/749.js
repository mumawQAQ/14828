// ==UserScript==
// @name               Discord Token Fetcher
// @name:ar            Discord Token Fetcher
// @name:bg            Discord Token Fetcher
// @name:cs            Discord Token Fetcher
// @name:da            Discord Token Fetcher
// @name:de            Discord Token Fetcher
// @name:el            Discord Token Fetcher
// @name:en            Discord Token Fetcher
// @name:eo            Discord Token Fetcher
// @name:es            Discord Token Fetcher
// @name:fi            Discord Token Fetcher
// @name:fr            Discord Token Fetcher
// @name:fr-CA         Discord Token Fetcher
// @name:he            Discord Token Fetcher
// @name:hu            Discord Token Fetcher
// @name:id            Discord Token Fetcher
// @name:it            Discord Token Fetcher
// @name:ko            Discord Token Fetcher
// @name:ja            Discord Token Fetcher
// @name:nb            Discord Token Fetcher
// @name:nl            Discord Token Fetcher
// @name:pl            Discord Token Fetcher
// @name:pt-BR         Discord Token Fetcher
// @name:ro            Discord Token Fetcher
// @name:ru            Discord Token Fetcher
// @name:sk            Discord Token Fetcher
// @name:sr            Discord Token Fetcher
// @name:sv            Discord Token Fetcher
// @name:th            Discord Token Fetcher
// @name:tr            Discord Token Fetcher
// @name:uk            Discord Token Fetcher
// @name:ug            Discord Token Fetcher
// @name:vi            Discord Token Fetcher
// @name:zh-CN         Discord Token Fetcher
// @name:zh-TW         Discord Token Fetcher
// @description        See your Discord token
// @description:ar     See your Discord token
// @description:bg     See your Discord token
// @description:cs     See your Discord token
// @description:da     See your Discord token
// @description:de     See your Discord token
// @description:el     See your Discord token
// @description:en     See your Discord token
// @description:eo     See your Discord token
// @description:es     See your Discord token
// @description:fi     See your Discord token
// @description:fr     See your Discord token
// @description:fr-CA  See your Discord token
// @description:he     See your Discord token
// @description:hu     See your Discord token
// @description:id     See your Discord token
// @description:it     See your Discord token
// @description:ja     See your Discord token
// @description:ko     See your Discord token
// @description:nb     See your Discord token
// @description:nl     See your Discord token
// @description:pl     See your Discord token
// @description:pt-BR  See your Discord token
// @description:ro     See your Discord token
// @description:ru     See your Discord token
// @description:sk     See your Discord token
// @description:sr     See your Discord token
// @description:sv     See your Discord token
// @description:th     See your Discord token
// @description:tr     See your Discord token
// @description:uk     See your Discord token
// @description:ug     See your Discord token
// @description:vi     See your Discord token
// @description:zh-CN  See your Discord token
// @description:zh-TW  See your Discord token
// @author             fir4tozden
// @version            1.0
// @namespace          https://greasyfork.org/users/821317
// @match              *://*.discord.com/channels/*
// @icon               https://www.google.com/s2/favicons?domain=discord.com
// @require            https://code.jquery.com/jquery-3.6.0.min.js
// @run-at             document-start
// ==/UserScript==

$(function() {
  let o = localStorage.getItem("token").split('"').join("");
  if (!0 === confirm("Do you want to see your Discord token? 1/3")) {
    if (!0 === confirm("Do you want to see your Discord token? 2/3")) {
      !0 === confirm("Do you want to see your Discord token? 3/3") ? (prompt("Your Discord token:", o), o = "") : o = ""
    } else o = ""
  } else o = ""
});