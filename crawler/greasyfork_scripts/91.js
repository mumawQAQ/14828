// ==UserScript==
// @name         NEW!! Krnl Key Bypass
// @namespace    http://tampermonkey.net/
// @version      1.4.3
// @description  Read the greasyfork desc. Script made at: dd/mm/yy 21/10/22
// @author       ! Asuna#0001 (ID: 527476422542098442)
// @match        https://*/*
// @match        http://*/*
// @icon         https://styles.redditmedia.com/t5_2pnnrv/styles/communityIcon_2bmo16vrnb251.jpeg
// @grant        none
// @license MIT
// ==/UserScript==
// IMPORTANT: ENABLE THIS SCRIPT ONLY WHEN YOU'RE GETTING A KRNL KEY.
// IMPORTANT 2: OPEN LINKVERTISE.COM FIRST BEFORE GETTING THE KEY AS THIS IS REQUIRED. THIS WILL REDIRECT YOU TO KRNL'S GET KEY SITE.
(function () {
  "use strict";
  let Location = window.location.href;
  let storage = localStorage.getItem("Bypass");
  function addstorage() {
    return parseInt(`${storage}`) + 1;
  }
  const txt = document.createElement("label");
  const note = document.createElement("h2");
  if (
    Location === "https://cdn.krnl.place/getkey" ||
    Location === "https://cdn.krnl.place/getkey_scripts" ||
    Location === "https://cdn.krnl.place/getkey.php" ||
    Location === "https://cdn.krnl.place/getkey_games" ||
    Location === "https://cdn.krnl.place/getkey_interface"
  ) {
    txt.innerText =
      "Bypasser loaded! Please solve the captcha and click submit. Wait for at least 15 secs in the linkvertise! Ducky if you're reading this your key system sucks so is mine lol";
      note.innerText = "BEFORE GETTING A KEY, MAKE SURE YOU OPENED https://linkvertise.com FIRST AND IT SHOULD REDIRECT YOU TO THIS SITE - DO NOT FORGET TO TURN OFF THIS USERSCRIPT AFTER GETTING THE KEY - Made by ID: 527476422542098442 :)";
    document.body.appendChild(txt);
    document.body.appendChild(note);
  } else if (Location.includes("48193")) {
    if (parseInt(`${storage}`) === 0) { // checkpoint 2
      localStorage.setItem("Bypass", `${addstorage()}`);
      setTimeout(function () {
        window.location.href = "https://cdn.krnl.place/getkey_games";
      }, 20123);
    } else if (parseInt(`${storage}`) === 1) { // checkpoint 3
      localStorage.setItem("Bypass", `${addstorage()}`);
      setTimeout(function () {
        window.location.href = "https://cdn.krnl.place/getkey_interface";
      }, 20123);
    } else if (parseInt(`${storage}`) === 2) { // checkpoint 4
      localStorage.setItem("Bypass", `${addstorage()}`);
      setTimeout(function () {
        window.location.href = "https://cdn.krnl.place/getkey_scripts";
      }, 20123);
    } else if (parseInt(`${storage}`) === 3) { //KEY
      localStorage.setItem("Bypass", `${addstorage()}`);
      setTimeout(function () {
        window.location.href = "https://cdn.krnl.place/getkey.php";
      }, 20123);
    }
  } else if (Location === "https://linkvertise.com/") {
    if (parseInt(`${storage}` === 4)) {
    localStorage.removeItem('Bypass');
    location.reload()
    } else {
    localStorage.setItem("Bypass", "0");
    window.location.href = "https://cdn.krnl.place/getkey"; // checkpoint 1
    }
  }
})();
