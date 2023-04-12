// ==UserScript==
// @name         GR8 Faucets : Auto Claim
// @namespace    gr8.auto.faucet
// @version      1.0
// @description  Auto claims Faucets with GR8 Template
// @author       stealtosvra
// @match        https://bestbitcoinfaucets.net/*
// @match        https://cheezo.gq/*
// @match        https://kedch.com/*
// @match        https://treaw.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bestbitcoinfaucets.net
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const btc = "1Eb61tXssstGmTjkCBzK8x4MKuuR4WTyrV";
    const doge = "DLtH8LwRsMsdy3GhqjA36BzBMQHzKYuNSN";
    const ltc = "ltc1qm2mmjhy0jjewt86auhlc0899zzzkw4ge4nygn0";

    const loginButton = document.querySelector('.btn-primary');
    const successAlert = document.querySelector('div.alert.alert-success.fade.show');
    const dangerAlert = document.querySelector('div.alert.alert-danger.fade.show');
    const button = document.querySelector('.btn.btn-block.btn-primary.my-2');

    const urls = ["https://bestbitcoinfaucets.net/bitcoin-faucet/",
                  "https://bestbitcoinfaucets.net/dogecoin-faucet/",
                  "https://claimfreesatoshi.online/"];

    function hCaptcha() {return grecaptcha && grecaptcha.getResponse().length !== 0;}
    setInterval(function() {
        if (hCaptcha()) {
            document.querySelector('input[type="submit"][name="login"][id="login"][class="btn btn-block btn-primary my-2"][value="Verify Captcha"]').click();
        }
    }, 5000);

    setTimeout(function() {
        if (window.location.href === "https://bestbitcoinfaucets.net/bitcoin-faucet/" ||
            window.location.href === "https://crypto.mundoby.xyz/btc/" ||
            window.location.href === "https://claimfreesatoshi.online/") {
            if (document.getElementById("address")){
                document.getElementById("address").value = btc;}

            if (loginButton) {
                loginButton.click();
            }}

        if (window.location.href === "https://bestbitcoinfaucets.net/dogecoin-faucet/" ||
            window.location.href.includes("https://treaw.com") ||
            window.location.href.includes("https://cheezo.gq")) {
            if (document.getElementById("address")){
                document.getElementById("address").value = doge;}

            if (loginButton) {
                loginButton.click();
            }}

        if (window.location.href.includes("https://kedch.com")) {
            if (document.getElementById("address")){
                document.getElementById("address").value = ltc;}
            if (loginButton) {
                loginButton.click();
            }}

        setInterval(function() {
            if (successAlert && successAlert.textContent.includes('satoshi was sent')) {
                location.reload();
            } }, 5000);

        setInterval(function() {
            if (dangerAlert && dangerAlert.textContent.includes('You have to wait')) {
                let currentUrlIndex = -1;
                for (let i = 0; i < urls.length; i++) {
                    if (window.location.href === urls[i]) {
                        currentUrlIndex = i;
                        break;}}

                if (currentUrlIndex >= 0 && currentUrlIndex < urls.length - 1) {
                    window.location.href = urls[currentUrlIndex + 1];}}}, 5000);

    }, 5000);


    if(button) {
        button.click();
    }


    if (document.querySelector('.alert-success')) {
        const alertText = document.querySelector('.alert-success').textContent;
        const searchText = 'satoshi was sent to your';
        setTimeout(function() {
            if (alertText.includes(searchText)) {
                if (loginButton) {
                    loginButton.click();}
            }}, 5000);}

})();