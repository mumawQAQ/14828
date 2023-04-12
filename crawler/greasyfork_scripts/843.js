// ==UserScript==
// @name        YouTube - Always Theater Mode
// @namespace   r-a-y/youtube/theater
// @description Set the default viewing mode to Theater Mode.
// @include     https://www.youtube.com/*
// @version     1.4.3
// @grant       none
// @run-at      document-start
// @license     GPL v3
// ==/UserScript==

// Toggle Theater Mode after YouTube finishes loading a video.
window.addEventListener("yt-navigate-finish", function(event) {
  var newPlayer = document.querySelector('button.ytp-size-button')

  var timer = setTimeout(function() {
    if ( newPlayer && null === document.getElementById('player-theater-container').firstChild ) {
      newPlayer.click()
    }
  }, 500)
})