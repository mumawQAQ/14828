// ==UserScript==
// @name         Beta adapter Ping/Fps!
// @name:ru      Бета адаптер Ping/Fps!
// @namespace    none
// @version      2.1.0
// @description  This is a beta adapter for your ping/FPS in MooMoo.io! + Remove Ad
// @description:ru Это бета-адаптер для вашего ping/FPS в MooMoo.io! + Удалить Объявление
// @author       00100110#6361
// @match        *://sandbox.moomoo.io/*
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @icon         https://beginpc.ru/images/internet/js_logo.jpg
// @grant        none
// ==/UserScript==
(function() {
'use strict'; // Okay, let's use strict mode
class Main {
constructor(status) {
this.status = status
}
RemoveAd() { // Ad
try {
console.log("Ad!")
setTimeout(() => ($('#ot-sdk-btn-floating').remove(), $('#pre-content-container').remove()), 3000) // Remove cookie
document.getElementById("moomooio_728x90_home").style.display = "none"
jQuery("#moomooio_728x90_home").parent().css("display", "none")
jQuery('#adCard').remove()
jQuery("#adBlock").remove()
} catch (e) {}
}
AdapterPing() { // Ping
try {
console.log("Ping!")
jQuery("#errorNotification").remove()
jQuery("#youtuberOf").remove()
jQuery("#followText").remove()
jQuery("#promoImgHolder").remove()
jQuery("#twitterFollow").remove()
jQuery("#joinPartyButton").remove()
jQuery("#linksContainer2").remove()
jQuery("#partyButton").remove()
jQuery("#youtubeFollow").remove()
jQuery("#mobileInstructions").remove()
jQuery("#altServer").remove()
jQuery("#downloadButtonContainer").remove()
jQuery("#mobileDownloadButtonContainer").remove()
jQuery(".downloadBadge").remove()
} catch (e) {}
}
AdapterFPS() { // FPS
try {
console.log("Fps!")
window.location.native_resolution = true
} catch (e) {}
}
}
const MAIN = new Main("Work")
console.log("Status: " + MAIN.status)
queueMicrotask(MAIN.AdapterPing)
queueMicrotask(MAIN.AdapterFPS)
queueMicrotask(MAIN.RemoveAd)
const $el_PING = jQuery("#pingDisplay")
$el_PING.css("display", "block")
$("body").append($el_PING)
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
window.setTimeout(e, 1e3 / 40)
}
requestAnimFrame(MAIN)
})()