// ==UserScript==
// @name         Freeship
// @namespace    lemons
// @version      1.2
// @description  Unlock all Fireship PRO courses/lessons.
// @author       lemons
// @match        https://fireship.io/*
// @icon         https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fire_1f525.png
// @grant        none
// ==/UserScript==

setInterval(() => {
    document.querySelectorAll("[free=\"\"]").forEach(el => el.setAttribute("free", true)) // set all elements with the attribute free set to "" to true

    if (document.querySelector("if-access [slot=\"granted\"]")) { // replace HOW TO ENROLL to YOU HAVE ACCESS
        document.querySelector("if-access [slot=\"denied\"]").remove()
        document.querySelector("if-access [slot=\"granted\"]").setAttribute("slot", "denied")
    }

    if (document.querySelector("video-player")?.shadowRoot?.querySelector(".vid")?.innerHTML) return; // return if no video player
    const vimeoId = document.querySelector("global-data").vimeo; // get id for vimeo video
    const youtubeId = document.querySelector("global-data").youtube; // get id for vimeo video

    if (vimeoId) { // if there is an id,
        document.querySelector("video-player").setAttribute("free", true) // set free to true
        document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="${location.pathname.split("/")[3]}" width="426" height="240" frameborder="0"></iframe>` // set video
    }
    if (youtubeId) { // if there is an id,
        document.querySelector("video-player").setAttribute("free", true) // set free to true
        document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = `<iframe src="https://youtube.com/embed/${youtubeId}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="${location.pathname.split("/")[3]}" width="426" height="240" frameborder="0"></iframe>` // set video
    }
}, 100)