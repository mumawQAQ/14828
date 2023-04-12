// ==UserScript==
// @name         PTC Surf : Vie Faucet Website Rotator . Auto PTC
// @version      1.9.7
// @description  Automatically views all PTC ads and Rotate websites
// @author       stealtosvra
// @match        https://888satoshis.com/*
// @match        https://123faucet.com/*
// @match        https://accessonto.com/*
// @match        https://autolitecoin.xyz/*
// @match        https://bazadecrypto.com/*
// @match        https://bifaucet.com/*
// @match        https://bitcoinpayu.com/*
// @match        https://bitcointrophy.com/*
// @match        https://bdfaucet.com/*
// @match        https://bitefaucet.com/*
// @match        https://bitfaucet.pw/*
// @match        https://bithub.win/*
// @match        https://bits.re/*
// @match        https://bitsfree.net/*
// @match        https://btcad24.com/*
// @match        https://btcbunch.com/*
// @match        https://buxcoin.io/*
// @match        https://claimcash.cc/*
// @match        https://claimercorner.xyz/*
// @match        https://claimprocoin.com/*
// @match        https://claimro.com/*
// @match        https://claimsatoshi.xyz/*
// @match        https://claimtoro.net/*
// @match        https://claimtrx.com/*
// @match        https://claimvip.com/*
// @match        https://coin-4u.com/*
// @match        https://coinmb.com/*
// @match        https://coinoto.net/*
// @match        https://coinpayz.xyz/*
// @match        https://coinpayu24.com/*
// @match        https://coinpayufree.com/*
// @match        https://coinpot.in/*
// @match        https://coinsnopy.com/*
// @match        https://coinfaucet.top/*
// @match        https://contentos.one/*
// @match        https://criptoshark.com/*
// @match        https://cryptask.xyz/*
// @match        https://crypto-farms.site/*
// @match        https://crypto143.site/*
// @match        https://cryptoaffiliates.store/*
// @match        https://cryptobigpay.online/*
// @match        https://cryptoearn.fun/*
// @match        https://cryptoflare.net/*
// @match        https://cryptomaker.in/*
// @match        https://cryptojunkie.net/*
// @match        https://cryptospaying.com/*
// @match        https://cryptoukr.in.ua/*
// @match        https://cryptoflare.net/*
// @match        https://dinofaucet.com/*
// @match        https://earnbtc.pw/*
// @match        https://earncrypto.co.in/*
// @match        https://earnmoney.24payu.net/*
// @match        https://earnsolana.xyz/*
// @match        https://earnviv.com/*
// @match        https://etcoin.site/*
// @match        https://ezimg.co/*
// @match        https://faucet-satoushi.com/ptc/*
// @match        https://faucet4u.com/*
// @match        https://faucetbazzar.com/*
// @match        https://faucetclub.net/*
// @match        https://faucetcrypto.net/*
// @match        https://faucetcryptos.com/*
// @match        https://faucetenb.com/
// @match        https://faucetinstant.com/*
// @match        https://faucetltc.com/*
// @match        https://faucetspeedbtc.com/*
// @match        https://faucetoshi.com/*
// @match        https://faucet.pk/*
// @match        https://feyorra.top/*
// @match        https://flashfaucet.xyz/*
// @match        https://flycrypto.tn/*
// @match        https://forexfiter.top/*
// @match        https://freebinance.top/*
// @match        https://freebitcoin.top/*
// @match        https://freebitcoingroup.com/*
// @match        https://freecryptoss.com/*
// @match        https://freeshib.biz/*
// @match        https://freesolana.top/*
// @match        https://freetron.top/*
// @match        https://furyfaucet.com/*
// @match        https://ganarbitcoindesdecuba.com/*
// @match        https://goldsurferfaucet.de/*
// @match        https://gpflix.in/*
// @match        https://hatecoin.me/*
// @match        https://ignite-blockchain.com/*
// @match        https://james-trussy.com/*
// @match        https://kiddyearner.com/*
// @match        https://landofbits.com/*
// @match        https://litecoinline.com/*
// @match        https://ltc24.com/*
// @match        https://miner-sim.com/*
// @match        https://mixfaucet.com/*
// @match        https://multicoins.net/*
// @match        https://myfaucet.pro/*
// @match        https://nightfaucet.me/*
// @match        https://nobitafc.com/*
// @match        https://paidbucks.xyz/*
// @match        https://pinoyfaucet.com/*
// @match        https://poearn.com/*
// @match        https://ptc4btc.com/*
// @match        https://ptcbits.com/*
// @match        https://satoshiadview.com/*
// @match        https://shiba.arbweb.info/*
// @match        https://spaceshooter.net/*
// @match        https://starcrypto.io/*
// @match        https://takeclicks.com/*
// @match        https://tikiearn.com/*
// @match        https://titansbrand.com/*
// @match        https://tron-free.com/*
// @match        https://usdtsurf.com/*
// @match        https://vivofaucet.com/*
// @match        https://viefaucet.com/*
// @match        https://wincrypt2.com/*
// @match        https://xfaucet.org/*
// @match        https://xtrabits.click/*
// @match        https://yfaucet.com/*
// @match        https://ziifaucet.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png
// @grant        GM_xmlhttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @license      MIT
// @namespace    VengeanceXBT
// ==/UserScript==
//TEMP
// match        https://satoshi-win.xyz/*

(function() {
    'use strict';

    // INSERT YOUR CREDENTIALS
    const email = "";
    const password = "";

    const website = window.location.hostname;
    const domainParts = website.split(".");
    const tld = domainParts.pop();
    const domain = domainParts.pop();
    const key = `${domain}.${tld}`.replace(/^www\./, "");
    const currentUrl = window.location.href;
    const targetUrl = `https://${key}`;

    const dropdown = document.createElement('div');
    dropdown.style.position = 'fixed';
    dropdown.style.bottom = '-100px';
    dropdown.style.right = '25px';
    dropdown.style.padding = '25px';
    dropdown.style.backgroundColor = 'rgba(255, 0, 0)';
    dropdown.style.zIndex = '99999';
    dropdown.style.borderRadius = '25px';
    dropdown.style.cursor = 'pointer';

    dropdown.style.opacity = '0';
    dropdown.style.transition = 'opacity 3s ease, bottom 3s ease';

    requestAnimationFrame(() => {
        dropdown.style.opacity = '1';
        dropdown.style.bottom = '25px';
    });

    const button = document.createElement('button');
    button.textContent = 'Select Rotation';
    button.style.border = 'none';
    button.style.backgroundColor = 'transparent';
    button.style.color = '#fff';
    button.style.fontWeight = 'bold';
    button.style.textTransform = 'uppercase';
    button.addEventListener('click', toggleDropdown);

    const options = document.createElement('ul');
    options.style.listStyle = 'none';
    options.style.margin = '0';
    options.style.padding = '0';
    options.style.display = 'none';

    const hcaptcha = document.createElement('li');
    hcaptcha.style.cursor = 'crosshair';
    hcaptcha.style.color = '#fff';
    hcaptcha.style.fontSize = '14px';
    hcaptcha.addEventListener('click', () => {
        window.location.href = 'https://accessonto.com/ptc';
    });
    const hcaptchaIcon = document.createElement('img');
    hcaptchaIcon.src = 'https://cdn.worldvectorlogo.com/logos/hcaptcha-2.svg';
    hcaptchaIcon.width = '16';
    hcaptchaIcon.height = '16';
    hcaptcha.appendChild(hcaptchaIcon);
    hcaptcha.appendChild(document.createTextNode(' hCaptcha'));

    const recaptcha = document.createElement('li');
    recaptcha.style.cursor = 'crosshair';
    recaptcha.style.color = '#fff';
    recaptcha.style.fontSize = '14px';
    recaptcha.addEventListener('click', () => {
        window.location.href = 'https://123faucet.net/ptc';
    });
    const recaptchaIcon = document.createElement('img');
    recaptchaIcon.src = 'https://seeklogo.com/images/R/recaptcha-logo-B20692A07D-seeklogo.com.png';
    recaptchaIcon.width = '16';
    recaptchaIcon.height = '16';
    recaptcha.appendChild(recaptchaIcon);
    recaptcha.appendChild(document.createTextNode(' reCaptcha'));

    const mooncaptcha = document.createElement('li');
    mooncaptcha.style.cursor = 'crosshair';
    mooncaptcha.style.color = '#fff';
    mooncaptcha.style.fontSize = '14px';
    mooncaptcha.addEventListener('click', () => {
        window.location.href = 'https://bits.re/ptc';
    });
    const mooncaptchaIcon = document.createElement('img');
    mooncaptchaIcon.src = 'https://i.imgur.com/sbEker1.png';
    mooncaptchaIcon.width = '16';
    mooncaptchaIcon.height = '16';
    mooncaptcha.appendChild(mooncaptchaIcon);
    mooncaptcha.appendChild(document.createTextNode(' Moon Captcha'));

    options.appendChild(hcaptcha);
    options.appendChild(recaptcha);
    options.appendChild(mooncaptcha);

    dropdown.appendChild(button);
    dropdown.appendChild(options);

    document.body.appendChild(dropdown);

    function toggleDropdown() {
        if (options.style.display === 'none') {
            options.style.display = 'block';
            options.style.bottom = `${button.offsetHeight}px`;
        } else {
            options.style.display = 'none';
        }
    }

    window.addEventListener('resize', () => {
        options.style.bottom = `${button.offsetHeight}px`;
    });

    if (currentUrl === targetUrl + '/' || currentUrl === targetUrl + '/web') {
        window.location.replace(targetUrl + '/login');}

    else if (currentUrl.includes(targetUrl + '/dashboard') || currentUrl.includes(targetUrl + '/faucet')) {
        window.location.replace(targetUrl + '/ptc');
    }

    function hCaptcha() {return grecaptcha && grecaptcha.getResponse().length !== 0;}

    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#password");
    const submitButton = document.querySelector("button[type='submit']");
    const selectElement = document.querySelector('.form-control');

    if (emailField) {emailField.value = email;}
    if (passwordField) {passwordField.value = password;}

    setInterval(() => {if (hCaptcha() && submitButton) {submitButton.click();}}, 6000);

    if(window.location.href.includes(`https://${key}/ptc/view`) || window.location.href.includes(`https://${key}/login`) || window.location.href.includes(`https://${key}/web/login`)) {
        const hcaptchaOption = selectElement.querySelector('option[value="hcaptcha"]');
        setTimeout(function() {
            hcaptchaOption.selected = true;
            selectElement.dispatchEvent(new Event('change'));
        }, 3000);

    }
    if(window.location.href.includes(`https://${key}/ptc`) || window.location.href.includes(`https://${key}/web/ptc`)) {
        setInterval(function() {
            if (
                document.querySelector("button.btn.btn-primary.btn-block")) {
                document.querySelector("button.btn.btn-primary.btn-block").click();}})}

    if(window.location.href === "https://coinpot.in/ptc") {
        setInterval(function() {
            document.querySelector("button.btn.bgc.w-100").click();}, 5000);}

    if (window.location.href === "https://claimercorner.xyz/web/") {
        window.location.href = ("https://claimercorner.xyz/web/login");
    }

    if (window.location.href === "https://claimercorner.xyz/web/dashboard") {
        window.location.href = ("https://claimercorner.xyz/web/ptc");
    }

    if (window.location.href.includes("https://criptoshark.com/ptc")) {
        setInterval(function() {
            if (
                document.querySelector("button.btn.btn-success.text-uppercase.w-100.mb-10")) {
                document.querySelector("button.btn.btn-success.text-uppercase.w-100.mb-10").click();}
        }, 5000);
    }


    const ptcLinks = [
        ["https://accessonto.com/ptc", "https://bdfaucet.com/ptc"],
        ["https://bdfaucet.com/ptc", "https://bitfaucet.pw/ptcc"],
        ["https://bitfaucet.pw/ptcc", "https://btcbunch.com/ptc"],
        ["https://btcbunch.com/ptc", "https://claimcash.cc/ptc"],
        ["https://claimcash.cc/ptc", "https://claimercorner.xyz/web/ptc"],
        ["https://claimercorner.xyz/web/ptc", "https://coinfaucet.top/ptc"],
        ["https://coinfaucet.top/ptc", "https://coinmb.com/ptc"],
        ["https://coinmb.com/ptc", "https://contentos.one/ptc"],
        ["https://contentos.one/ptc", "https://cryptask.xyz/ptc"],
        ["https://cryptask.xyz/ptc", "https://cryptobigpay.online/ptc"],
        ["https://cryptobigpay.online/ptc", "https://cryptojunkie.net/ptc"],
        ["https://cryptojunkie.net/ptc", "https://criptoshark.com/ptc"],
        ["https://criptoshark.com/ptc", "https://earnbtc.pw/ptc"],
        ["https://earnbtc.pw/ptc", "https://ezimg.co/ptc"],
        ["https://ezimg.co/ptc", "https://faucet-satoushi.com/ptc"],
        ["https://faucet-satoushi.com/ptc", "https://faucet4u.com/ptc"],
        ["https://faucet4u.com/ptc", "https://faucetbazzar.com/ptc"],
        ["https://faucetbazzar.com/ptc", "https://faucetclub.net/ptc"],
        ["https://faucetclub.net/ptc", "https://faucetcryptos.com/ptc"],
        ["https://faucetcryptos.com/ptc", "https://faucetltc.com/ptc"],
        ["https://faucetltc.com/ptc", "https://faucet.pk/ptc"],
        ["https://faucet.pk/ptc", "https://hatecoin.me/ptc"],
        ["https://hatecoin.me/ptc", "https://mixfaucet.com/ptc"],
        ["https://mixfaucet.com/ptc", "https://myfaucet.pro/ptc"],
        ["https://myfaucet.pro/ptc", "https://nobitafc.com/ptc"],
        ["https://nobitafc.com/ptc", "https://satoshi-win.xyz/ptc"],
        ["https://satoshi-win.xyz/ptc", "https://tikiearn.com/ptc"],
        ["https://tikiearn.com/ptc", "https://vivofaucet.com/ptc"],
        ["https://vivofaucet.com/ptc", "https://xfaucet.org/ptc"],
        ["https://xfaucet.org/ptc", "https://xtrabits.click/ptc"],
        ["https://xtrabits.click/ptc", "https://accessonto.com/ptc"],
        ["https://123faucet.net/ptc", "https://bitfaucet.pw/ptc"],
        ["https://bitfaucet.pw/ptc", "https://bitsfree.net/ptc"],
        ["https://bitsfree.net/ptc", "https://coin-4u.com/ptc"],
        ["https://coin-4u.com/ptc", "https://claimtoro.net/ptc"],
        ["https://claimtoro.net/ptc", "https://claimvip.com/ptc"],
        ["https://claimvip.com/ptc", "https://freebitcoin.top/ptc"],
        ["https://freebitcoin.top/ptc", "https://titansbrand.com/ptc"],
        ["https://titansbrand.com/ptc", "https://takeclicks.com/ptc"],
        ["https://takeclicks.com/ptc", "https://wincrypt2.com/ptc"],
        ["https://wincrypt2.com/ptc", "https://123faucet.net/ptc"],
        ["https://888satoshis.com/ptc", "https://autolitecoin.xyz/ptc"],
        ["https://autolitecoin.xyz/ptc", "https://banfaucet.com/ptc"],
        ["https://banfaucet.com/ptc", "https://bitcoinpayu.com/ptc"],
        ["https://bitcoinpayu.com/ptc", "https://bifaucet.com/ptc"],
        ["https://bifaucet.com/ptc", "https://bitsfree.net/ptc"],
        ["https://bitsfree.net/ptc", "https://btcad24.com/ptc"],
        ["https://btcad24.com/ptc", "https://buxcoin.io/ptc"],
        ["https://buxcoin.io/ptc", "https://claimcoin.in/ptc"],
        ["https://claimcoin.in/ptc", "https://coincet.com/ptc"],
        ["https://coincet.com/ptc", "https://coinpayu24.com/ptc"],
        ["https://coinpayu24.com/ptc", "https://crypto-farms.site/ptc"],
        ["https://crypto-farms.site/ptc", "https://crypto143.site/ptc"],
        ["https://coinpayufree.com/ptc", "https://crypto143.site/ptc"],
        ["https://crypto143.site/ptc", "https://cryptofaucts.com/ptc"],
        ["https://cryptofaucts.com/ptc", "https://cryptoflare.net/"],
        ["https://cryptoflare.net/ptc", "https://cryptomaker.in/ptc"],
        ["https://cryptomaker.in/ptc", "https://cryptospaying.com/ptc"],
        ["https://cryptospaying.com/ptc", "https://earnviv.com/ptc"],
        ["https://earnviv.com/ptc", "https://dinofaucet.com/ptc"],
        ["https://dinofaucet.com/ptc", "https://faucetcrypto.net/ptc"],
        ["https://faucetcrypto.net/ptc", "https://faucetinstant.com/ptc"],
        ["https://faucetinstant.com/ptc", "https://faucetoshi.com/ptc"],
        ["https://faucetoshi.com/ptc", "https://flashfaucet.xyz/ptc"],
        ["https://flashfaucet.xyz/ptc", "https://forexfiter.top/ptc"],
        ["https://forexfiter.top/ptc", "https://freebitcoingroup.com/ptc"],
        ["https://freebitcoingroup.com/ptc", "https://freecryptoss.com/ptc"],
        ["https://freecryptoss.com/ptc", "https://freesolana.top/ptc"],
        ["https://freesolana.top/ptc", "https://freeshib.biz/ptc"],
        ["https://freeshib.biz/ptc", "https://furyfaucet.com/ptc"],
        ["https://furyfaucet.com/ptc", "https://ignite-blockchain.com/ptc"],
        ["https://ignite-blockchain.com/ptc", "https://ganarbitcoindesdecuba.com/ptc"],
        ["https://ganarbitcoindesdecuba.com/ptc", "https://gpflix.in/ptc"],
        ["https://goldsurferfaucet.de/ptc", "https://gpflix.in/ptc"],
        ["https://gpflix.in/ptc", "https://james-trussy.com/ptc"],
        ["https://james-trussy.com/ptc", "https://litecoinline.com/ptc"],
        ["https://litecoinline.com/ptc", "https://ltc24.com/ptc"],
        ["https://ltc24.com/ptc", "https://miner-sim.com/ptc"],
        ["https://miner-sim.com/ptc", "https://multicoins.net/ptc"],
        ["https://multicoins.net/ptc", "https://nightfaucet.me/ptc"],
        ["https://nightfaucet.me/ptc", "https://paidbucks.xyz/ptc"],
        ["https://paidbucks.xyz/ptc", "https://poearn.com/ptc"],
        ["hhttps://poearn.com/ptc", "https://ptc4btc.com/ptc"],
        ["https://ptc4btc.com/ptc", "https://shiba.arbweb.info/ptc"],
        ["https://shiba.arbweb.info/ptc", "https://spaceshooter.net/ptc"],
        ["https://spaceshooter.net/ptc", "https://starcrypto.io/ptc"],
        ["https://starcrypto.io/ptc", "https://autolitecoin.xyz/ptc"],
        ["https://bits.re/ptc", "https://coinpayz.xyz/ptc"],
        ["https://coinpayz.xyz/ptc", "https://coinpot.in/ptc"],
        ["https://coinpot.in/ptc", "https://claimtrx.com/ptc"],
        ["https://claimtrx.com/ptc", "https://feyorra.top/ptc"],
        ["https://feyorra.top/ptc", "https://bits.re/ptc"]
    ];

    const currentUrlptc = window.location.href;
    const nextLink = ptcLinks.find(link => link[0] === currentUrlptc);

    if (nextLink) {
        let redirectTimer = setTimeout(() => {
            window.location.href = nextLink[1];
        }, 30000);

        window.addEventListener('beforeunload', () => {
            clearTimeout(redirectTimer);
        });
    }


    if (location.origin + location.pathname === 'https://viefaucet.com/app/ptc') {
        console.log('The current URL is https://viefaucet.com/app/ptc');
        const el = document.querySelector('.el-tag__content');
        if (el && el.textContent === '0') {
            console.log('The span inner text is 0');

            const els = document.getElementsByClassName('el-tabs__item is-top');
            if (els.length > 0) {
                els[1].click();
            }
        }
    }

    if(window.location.href.includes("https://claimercorner.xyz/web/ptc")) {
        setInterval(function() {
            if (
                document.querySelector("button.btn.btn-success.text-uppercase.w-100.mb-10")) {
                document.querySelector("button.btn.btn-success.text-uppercase.w-100.mb-10").click();}})}


    if(window.location.href === "https://xtrabits.click/ptc") {
        document.querySelector("button.btn-one.w-100").click();}

    if(window.location.href === "https://bazadecrypto.com/ptc") {
        document.querySelector("button.claim-btn.w-100.text-white").click();}

        if(window.location.href === "https://bitcointrophy.com/ptc") {
        document.querySelector("button.default-btn.w-100.mb-2").click();}

   if(window.location.href === "https://kiddyearner.com/ptc") {
        document.querySelector("button.btn.btnc.btn-block.w-100").click();}

    if(window.location.href === "https://spaceshooter.net/ptc") {
        document.querySelector("button.btn.btn-info.btn-block").click();}

    if(window.location.href === "https://earnbtc.pw/ptc") {
        document.querySelector("button.btn-relief-primary").click();}

    if(window.location.href === "https://cryptojunkie.net/ptc") {
        document.querySelector("button.btn.btn-success.btn-block").click();}

    if(window.location.href === "https://autolitecoin.xyz/ptc") {
        setTimeout(function() {
            document.querySelector("button.btn.btn-danger").click();}
                   , 5000);}

    if(window.location.href === "https://titansbrand.com/ptc") {
        document.querySelector("button.btn.btn-success.btn-block").click();}

    if(window.location.href === "https://earnmoney.24payu.net/ptc") {
        document.querySelector("button.btn.btn-primary.btn-block").click();}

    if(window.location.href === "https://shiba.arbweb.info/ptc") {
        document.querySelector("button.btn.btn-primary.btn-block").click();}

    if(window.location.href === "https://bits.re/ptc") {
        setTimeout(function() {
            document.querySelector("button.btn.btn-primary.btn-style-light.flex-grow-1.m-l-xxs").click();}, 5000);}

    if(window.location.href === "https://coinpayz.xyz/ptc") {
        setTimeout(function() {
            document.querySelector("button.btn.btn-info.btn-block").click();}, 5000);}

    if(window.location.href === "https://freebinance.top/ptc") {
        document.querySelector("button.btn.btn-primary").click();}

    if(window.location.href === "https://claimtoro.net/ptc") {
        document.querySelector("button.btn.btn-dark.waves-effect.waves-light").click();}

    if(window.location.href === "https://claimvip.com/ptc") {
        document.querySelector("button.btn.btn-dark.waves-effect.waves-light").click();}

    if(window.location.href === " https://freesolana.top/matic/ptc") {
        document.querySelector("button.btn.btn-primary").click();}

    if(window.location.href === "https://feyorra.top/ptc") {
        document.querySelector("button.btn-one.w-100").click();}

    if(window.location.href === "https://ezimg.co/ptc") {
        setTimeout(function(){
            document.querySelector("button.btn-one.w-100").click();}, 5000);}

    if(window.location.href === "https://cryptoflare.net/ads") {
        document.querySelector("button.claim-btn").click();}

    if(window.location.href === "https://faucetoshi.com/login") {
        setTimeout(function(){
            document.querySelector('button[type="submit"]').click();}, 20000);}

    if(window.location.href === "https://faucetoshi.com/login") {
        setTimeout(function(){document.querySelector('button[type="submit"]').click();}, 20000);}

    if (window.location.href === "https://viefaucet.com/app/ptc") {
        function clickButtonAfterDelay() {
            setTimeout(() => {const button = document.querySelector('button.el-button.el-button--primary.claim-button');
                              button.click();
                              clickButtonAfterDelay();}, 15000);}clickButtonAfterDelay();}

    if(window.location.href === "https://faucetoshi.com/ptc/view/") {
        $("iframe").remove();
        var verify = setInterval( function() {if( $("#verify").is(":visible") ) {
            clearInterval( verify );
            setTimeout( function() { $("form:first").submit();}, ( 2000 ) );}}, 2000 );}

    if(window.location.href.includes("https://coinpayz.xyz/ptc/view") || window.location.href.includes("https://claimtrx.com/ptc/view") || window.location.href.includes("https://feyorra.top/ptc/view")  || window.location.href.includes("https://bits.re/ptc/view")  || window.location.href.includes("https://coinpot.io/ptc/view")) {

        const countdown = document.getElementById("ptcCountdown");
        const interval = setInterval(() => {if (countdown.innerText === "0 second") {
            clearInterval(interval);
            setTimeout(() => {const verifyButton = document.getElementById("verify");
                              verifyButton.click();}, 5000);}}, 1000);}

    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    if(window.location.href === `https://${key}/ptc/view/`) {
        setInterval(function() {if (hCaptcha()) {document.getElementById('verify').click();}}, 5000);}

})();