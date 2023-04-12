// ==UserScript==
// @name         9anime Bingewatcher+
// @namespace    https://greasyfork.org/en/users/10118-drhouse
// @version      5.6
// @description  Auto-fullscreen, skip intros, jump to next episode, 9anime on Vidstream and MyCloud videos (Auto-1080p in configuration panel)
// @include      https://www*.9anime.*/*
// @include      https://filemoon.sx/*
// @include      https://9anime.*/*
// @include      https://*.9anime.*/*
// @include      https://9anime.id/*
// @include      https://vidstream.pro/*
// @include      https://vidstreamz.online/*
// @include      https://vizcloud.online/*
// @include      https://vizcloud2.online/*
// @include      https://vizcloud.*/*
// @include      https://vizcloud.store/*
// @include      https://blob:vizcloud.store/*
// @include      https://mcloud.to/*
// @include      https://mcloud2.to/* 
// @include      https://storage.googleapis.com/*
// @include      https://movies7.to/*
// @include      https://*.mp4upload.com:*/*
// @include      https://*.mp4upload.com*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://greasyfork.org/scripts/439099-monkeyconfig-modern-reloaded/code/MonkeyConfig%20Modern%20Reloaded.js?version=1012538
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @author       drhouse
// @license      CC-BY-NC-SA-4.0
// @icon         https://www.google.com/s2/favicons?domain=9anime.to
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function($){

    var vPoint_launch = setTimeout(function(){
        var vPoint_work = window.location.href;
        if ( vPoint_work.indexOf('9anime') > -1 && cfg.get('Automatic Crowdsource Skip Opt-in'))
        {
            GM_setValue('toplocation', vPoint_work)
            vPoint_check()
            clearInterval(vPoint_launch)
        }
    }, 1000);

    var cfg = new MonkeyConfig({
        title: 'Configure',
        menuCommand: true,
        params: {
            'Automatic Highest Quality': {
                type: 'checkbox',
                default: true
            },
            Skip_Anime_Intro_Key: {
                type: 'text',
                default: 'v'
            },
            'Skip Anime Intro Time': {
                type: 'number',
                default: '89'
            },
            Next_Episode_Key: {
                type: 'text',
                default: 'n'
            },
            Skip_Company_ID_Key: {
                type: 'text',
                default: 'q'
            },
            'Skip Company ID Time': {
                type: 'number',
                default: '10'
            },
            'Automatic Skip Company ID': {
                type: 'checkbox',
                default: false
            },
            'Automatic Crowdsource Skip Opt-in': {
                type: 'checkbox',
                default: true
            },
        },
        // onSave: setOptions
    })



    if (cfg.get('Automatic Highest Quality')) {
        const myInterval = setInterval(myTimer, 1000);

        function myTimer() {
            var $highest_check = $('#jw-settings-submenu-quality > div:nth-child(1) > button:nth-child(2)').attr('aria-checked')
            var $auto_check = $('#jw-settings-submenu-quality > div:nth-child(1) > button:nth-child(1)').text()
            //$('div.jw-icon:nth-child(14)')[0].click()

            if ($auto_check === 'Auto'){
                if ($highest_check === "true"){
                    // $('div.jw-icon:nth-child(14)')[0].click()
                    clearInterval(myInterval);
                } else {
                    $('#jw-settings-submenu-quality > div:nth-child(1) > button:nth-child(2)').click()
                }
            } else {
                //$('div.jw-icon:nth-child(14)')[0].click()
                clearInterval(myInterval);
            }
        }
    }

    function openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE / Edge */
            elem.msRequestFullscreen();
        }
    }

    function vPoint_check(){
        $.get("https://unity.alwaysdata.net/vpoint.php?toplocation=" + GM_getValue('toplocation'), function(data){

            if(data !== 'nada'){
                GM_setValue('vPoint_exists', Number(data));
            }
            else {
                GM_setValue('vPoint_exists', 'nada');
            }

        });
    }

    function checkURLchange(){
        if(window.location.href != oldURL){
            GM_setValue('title', document.title)
            GM_setValue('toplocation', window.location.href)
            oldURL = window.location.href;
        }
    }

    var oldURL = window.location.href;
    if (cfg.get('Automatic Crowdsource Skip Opt-in'))
        setInterval(checkURLchange, 1000);

    var canOnlyFireOnce2 = once(function(current) {
        central(current)
    });

    function central(current){
        var episode = window.location.href
        var vPoint = current
        var title = GM_getValue('title')
        var toplocation = GM_getValue('toplocation')

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unity.alwaysdata.net/central.php?vPoint=" + vPoint + "&toplocation=" + toplocation);
        xhttp.send();
    }

    function once(fn, context) {
        var result;
        return function() {
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }

    var canOnlyFireOnce = once(function(player, current) {
        player.currentTime = Number(cfg.get('Skip Company ID Time'))
    });

    function waitForElementToDisplay(selector, time) {
        if(document.querySelector(selector)!=null) {
            setTimeout(function(){
                var video = $("#player").get(0);
                // var rfs = video.requestFullscreen || video.webkitRequestFullScreen || video.mozRequestFullScreen || video.msRequestFullscreen;
                // rfs.call(video);
                
                const player = $('#player')[0];

                // If the player element exists and supports fullscreen mode
                if (player && player.requestFullscreen) {
                    // Activate fullscreen mode on page load
                    // $('body').click()
                    player.requestFullscreen();
                    $(player).focus();
                }
            }, 1000);


            var newYearCountdown = setInterval(function(){

                var player = $('video').get(0);

                var duration = player.duration;
                var current = player.currentTime;

                if(cfg.get('Automatic Skip Company ID')){
                    if(player.currentTime < 1){
                        canOnlyFireOnce(player, current);
                    }
                }

                if (GM_getValue('vPoint_exists') !== 'nada' && cfg.get('Automatic Crowdsource Skip Opt-in')){
                    if (Math.round(player.currentTime) === GM_getValue('vPoint_exists')){
                        player.currentTime = GM_getValue('vPoint_exists') + Number(cfg.get('Skip Anime Intro Time'))
                        GM_setValue('vPoint_exists','nada')
                    }
                }


                $('body').keypress(function(event){
                    var key = (event.keyCode ? event.keyCode : event.which);
                    var x = String.fromCharCode(key)

                    if (x == cfg.get('Skip_Company_ID_Key')) { // Q key skip 10s
                        player.currentTime = current + Number(cfg.get('Skip Company ID Time'));
                    }
                    if (x == cfg.get('Skip_Anime_Intro_Key')) { // V key skip 89s
                        if ('Automatic Crowdsource Skip Opt-in')
                            canOnlyFireOnce2(player.currentTime);
                        player.currentTime = current + Number(cfg.get('Skip Anime Intro Time'));
                    }
                    if (x == cfg.get('Next_Episode_Key')) { // N key skip end
                        player.currentTime = player.duration;
                    }

                })
            }, 1000);
        }
        else {
            setTimeout(function() {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }

    waitForElementToDisplay('#player', 1000);

})(jQuery);