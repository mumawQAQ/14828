// ==UserScript==
// @name         Auto BTC Rotator with PTC Support
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  auto faucets
// @author       vikiweb
// @match        https://btcadspace.com/*
// @match        https://cointivert.com/*
// @match        https://faucetron.com/*
// @match        https://faucetbtcclaim.com/*
// @match        https://cryptoclicks.net/*
// @match        https://clickscoin.com/*
// @match        https://cryptowin.io/*
// @match        https://simpleads.io/*
// @match        https://firefaucet.win/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=btcadspace.com
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let sites = [
        {faucetUrl: "https://btcadspace.com/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://cointivert.com/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://faucetron.com/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://faucetbtcclaim.com/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://cryptoclicks.net/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        //{faucetUrl: "https://clickscoin.com/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://cryptowin.io/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://simpleads.io/faucet", username: "", password: "", enableFaucet:true, enableSurf:false,},
        {faucetUrl: "https://firefaucet.win/faucet/", username: "", password: "",},
    ];

    let sitesMap = [
        {
            websiteUrl:"https://btcadspace.com",
            homePageCheck : "body section.slider",
            claimPopupOpen : ".btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:".card:not(.visited-link)",
            surfStartBtn:".card-body #box .start-btn",
        },
        {
            websiteUrl:"https://cointivert.com",
            homePageCheck : "body main .slider",
            claimPopupOpen : ".btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:".card:not(.visited-link)",
            surfStartBtn:".card-body #box .start-btn",
        },
        {
            websiteUrl:"https://faucetron.com",
            homePageCheck : "body main .container .display-5.fw-bold",
            claimPopupOpen : ".btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:".card:not(.visited-link)",
            surfStartBtn:".card-body #box .start-btn",
        },
        {
            websiteUrl:"https://faucetbtcclaim.com",
            homePageCheck : "body .container .banner-text",
            claimPopupOpen : ".btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:".container .row .col-lg-4 a.card",
            surfStartBtn:".container .row .start-btn",
        },
        {
            websiteUrl:"https://cryptoclicks.net",
            homePageCheck : "body div h1",
            claimPopupOpen : ".container .gap-2 .btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:".card:not(.visited-link)",
            surfStartBtn:".card-body #box .start-btn",
        },
        {
            websiteUrl: "https://clickscoin.com",
            homePageCheck : "body .hero-area .subtitle",
            claimPopupOpen : ".signup.btn-block.mybtn1",
            loginCaptchaCheck : false,
            surfSelectors:"",
            surfStartBtn:"",
        },
        {
            websiteUrl: "https://cryptowin.io",
            homePageCheck : "body #theme-banner",
            claimPopupOpen : ".btn-block.btn-click.btn-lg",
            loginCaptchaCheck : false,
            surfSelectors:"",
            surfStartBtn:"",
            additionalFunction : "",
        },{

            websiteUrl: "https://simpleads.io",
            homePageCheck : "body .hero-area .subtitle",
            claimPopupOpen : ".btn.btn-primary.btn-lg",
            loginCaptchaCheck : true,
            surfSelectors:"",
            surfStartBtn:"",
        },
        {
            websiteUrl:"https://firefaucet.win",
            homePageCheck : "form[action='/login']",
            claimPopupOpen : "",
            loginCaptchaCheck : true,
            surfSelectors:".card.ptc-advert-card .watch-btn",
            surfStartBtn:".card-body #box .start-btn",
            additionalFunction : fireFaucet,
        },
    ]


    let check_address = window.location.origin;
    let currentFaucetUrl = new URL(window.location.href);
    let currentOrigin = currentFaucetUrl.origin;
    let currentIndex = sites.findIndex(site => site.faucetUrl.includes(currentOrigin));
    let websiteIndex = sitesMap.findIndex(website => website.websiteUrl.includes(currentOrigin));
    let oldfunction = unsafeWindow.open;
    let windowName = "";
    let interval = 2;

    function movetonext() {
        if (currentIndex === sites.length - 1) {
            currentIndex = 0;
            console.log("All sites visited. Starting from 0 again.");
        } else {
            currentIndex++;
        }
        window.location.href = sites[currentIndex].faucetUrl;
    }

    function checkWindow(params1, params2) {
        console.log(params1 + params2);
        if (!params2 || params2 == "_blank") {
            windowName = "popUpWindow";
        } else {
            windowName = params2;
        }
        console.log("WindowName is::" + windowName);
        return oldfunction(params1, windowName);
    };

    function movetosurf() {
        window.location.href = check_address +'/surf'
    }

    // Check if captcha is checked
    function isCaptchaChecked() {
        return grecaptcha && grecaptcha.getResponse().length !== 0;
    }

    // Check if on faucet page and claim button is disabled
    function isFaucetClaimButtonDisabled(claimPopup) {
        return document.querySelector(claimPopup) && document.querySelector(claimPopup).disabled;
    }

    // Check if on faucet page is fully claimed
    function isFaucetFullyClaimed() {
        return document.querySelector(".notyf-announcer") && document.querySelector(".notyf-announcer").innerText.includes('You reached the maximum')
    }

    function visibleCheck(elm) {
        if(!elm.offsetHeight && !elm.offsetWidth) { return false; }
        if(getComputedStyle(elm).visibility === 'hidden') { return false; }
        return true;
    }

    function websiteLogin(site){
        setInterval(function() {
            if (document.querySelector("#username")) {
                document.querySelector("#username").value = site.username;
            }
            if (document.querySelector("#password")) {
                document.querySelector("#password").value = site.password;
            }
            if (sitesMap[websiteIndex].loginCaptchaCheck){
                if (isCaptchaChecked()) {
                    if (document.querySelector("button[type='submit']")) {
                        document.querySelector("button[type='submit']").click();
                    }
                }
            }else{
                if (document.querySelector("button[type='submit']")) {
                    document.querySelector("button[type='submit']").click();
                }
            }

        }, 6000);
    }

    function fireFaucet(site) {
        if (document.querySelector(sitesMap[websiteIndex].homePageCheck)) {
            websiteLogin(site)
        }

        if(document.querySelector(".dashboard-action-btns")){
            if(document.querySelector("[href='/daily']") && !document.querySelector("[href='/daily']").classList.contains('disabled')){
                document.querySelector("[href='/daily']").click();
            }else if(document.querySelector(".dashboard-action-btns [href='/faucet/']") && !document.querySelector(".dashboard-action-btns [href='/faucet/']").classList.contains('disabled')){
                document.querySelector(".dashboard-action-btns [href='/faucet/']").click();
            }else{
                movetonext()
            }
        }

        if (window.location.href.includes(check_address +'/daily') || window.location.href.includes(check_address +'/faucet/')) {
            setInterval(function() {
                if (document.querySelector("button[type='submit']")) {
                    if (isCaptchaChecked()) {
                        document.querySelector("button[type='submit']").click();
                    }
                }
                if(document.querySelector(".btn.earn-btns") && document.querySelector(".btn.earn-btns").innerText.includes("Continue") || document.querySelector(".btn.earn-btns").innerText.includes("Go Home")){
                    document.querySelector(".btn.earn-btns").click();
                }
            }, 6000);
        }
    }

    // Process current site
    function processSite(site) {
        if (sitesMap[websiteIndex].additionalFunction) {
            sitesMap[websiteIndex].additionalFunction(site);
        }else{
            if(document.querySelector(sitesMap[websiteIndex].homePageCheck) && (window.location.href.includes(check_address))) {
                window.location.replace(check_address + "/login");
            }

            if (window.location.href.includes(check_address +'/login')) {
                console.log(sitesMap[websiteIndex], websiteIndex)
                websiteLogin(site)
            }

            if(window.location.href.includes(check_address +'/account')) {
                if(site.enableFaucet){
                    window.location.replace(check_address +'/faucet');
                }else{
                    window.location.replace(check_address +'/surf');
                }
            }


            if (window.location.href.includes(check_address +'/faucet')) {

                let fauceClick = false;

                setInterval(function() {
                    if (document.querySelector(sitesMap[websiteIndex].claimPopupOpen) && fauceClick === false) {
                        document.querySelector(sitesMap[websiteIndex].claimPopupOpen).click();
                        fauceClick = true;
                    }
                }, 5000);

                setInterval(function() {
                    if(document.querySelector("button[type='submit']")){
                        if (isCaptchaChecked()) {
                            document.querySelector("button[type='submit']").click();
                        }
                    }
                    if(isFaucetFullyClaimed()){
                        movetonext();
                    }
                }, 5000);
                setInterval(function() {
                    if (isFaucetClaimButtonDisabled(sitesMap[websiteIndex].claimPopupOpen) && site.enableSurf == true) {
                        movetosurf()
                    }else if(isFaucetClaimButtonDisabled(sitesMap[websiteIndex].claimPopupOpen)){
                        movetonext()
                    }
                }, interval * 60000);
            }

            if(window.location.href.includes(check_address +'/surf')){

                let surflink = document.querySelectorAll(sitesMap[websiteIndex].surfSelectors);
                let surfLinkClick = false;

                if(surflink.length || surflink.length != 0){
                    if(surflink.length >= 1 && surfLinkClick == false){
                        //surflink[0].style.backgroundColor = "red";
                        surflink[0].click()
                        surfLinkClick = true
                    }
                }else{
                    movetonext()
                }

                setTimeout(function(){
                    let surfNext = document.querySelectorAll(sitesMap[websiteIndex].surfStartBtn);
                    let surfNextClick = false;
                    if(surfNext.length){
                        if(surfNext.length >= 1 && surfNextClick == false){
                            surfNext[0].click();
                            surfNextClick = true
                        }
                    }
                }, 3000);

                unsafeWindow.open = checkWindow;

                unsafeWindow.onbeforeunload = function() {
                    unsafeWindow.open('', windowName).close();
                };

                if( document.querySelector("#timer") ){
                    setInterval(function () {
                        if (document.querySelector("#timer").innerText.includes("Great")){
                            unsafeWindow.open('', windowName).close();
                        }else if (document.querySelector("#timer").innerText.includes("Oops!")){
                            unsafeWindow.open('', windowName).close();
                            movetosurf()
                        }
                    }, 1500);
                }

                if(document.querySelector("#tryCaptcha")){
                    setInterval(function() {
                        if (isCaptchaChecked()) {
                            document.querySelector("#tryCaptcha").click();
                        }
                    }, 5000);
                }

            }
        }
    }

    // Start processing the first site
    processSite(sites[currentIndex]);
})();