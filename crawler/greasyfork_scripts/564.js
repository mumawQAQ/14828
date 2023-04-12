// ==UserScript==
// @name           Free kinopoisk
// @namespace      https://github.com/eCxb3/cps
// @version        2077v.1.2.3
// @description    Allows you to watch movies/series on kinopoisk.ru for free.  |  Use with Tampermonkey
// @description:ru Позволяет вам смотреть фильмы/сериалы на kinopoisk.ru бесплатно.  | Использование с Tampermonkey
// @author         ezX {cps};
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @include        https://www.kinopoisk.ru/*
// @include        https://flicksbar.*/*
// @connect        www.kinopoisk.ru
// @icon           https://www.google.com/s2/favicons?sz=64&domain=kinopoisk.ru
// @grant          GM_xmlhttpRequest
// ==/UserScript==

/*
_________        ___.                                     __
\_   ___ \___.__.\_ |__   _________________  __ __  ____ |  | __
/    \  \<   |  | | __ \_/ __ \_  __ \____ \|  |  \/    \|  |/ /
\     \___\___  | | \_\ \  ___/|  | \/  |_> >  |  /   |  \    <
 \______  / ____| |___  /\___  >__|  |   __/|____/|___|  /__|_ \
        \/\/          \/     \/      |__|              \/     \/
                                             _________ __
                                            /   _____//  |_  ____   ___________  ______
                                            \_____  \\   __\/ __ \_/ __ \_  __ \/  ___/
                                            /        \|  | \  ___/\  ___/|  | \/\___ \
                                           /_______  /|__|  \___  >\___  >__|  /____  >
                                                   \/           \/     \/           \/
*/


(function() {
    'use strict';
    const $ = jQuery.noConflict(true);

    function addGlobalStyle(css) {
        let $head = $('head');
        if (!$head) return
        $('<style>', {type: 'text/css', text: css}).appendTo($head)
    }

    console.log('Start ezX 😎');
    const kinopoisk = function() {
        $(document).ready(function() {
            const $oldButton = $('button.kinopoisk-watch-online-button.styles_root__EZXGw');

            if ($oldButton.length) {
                $oldButton.remove();

                const $newButton = $('<button>', {
                    class: $oldButton.attr('class'),
                    text: 'Смотреть'
                }).click(function() {
                    const site = window.location.href.split('kino');
                    window.location.href = `${site[0]}ss${site[1]}`;
                });

                $('div.watch-online-button.styles_containerRoot__cCC6E').prepend($newButton);
            } else {
                const $newButton = $('<button>', {
                    class: 'kinopoisk-watch-online-button styles_root__EZXGw styles_rootPlus__bBjkI styles_rootDesktop__fGTTz styles_rootSizeH52__4QXvi styles_isRounded__fiuxG styles_watchOnlineButton__ruFtI',
                    html: '<span class="styles_defaultText__PgVb9 undefined" data-tid="6cb8d12f">Смотреть</span>'
                }).click(function() {
                    const site = window.location.href.split('kino');
                    window.location.href = `${site[0]}ss${site[1]}`;
                });

                $('<div>', {
                    class: 'styles_button__tQYKG'
                }).append($newButton)
                    .prependTo($('div.styles_buttonsContainer__HREZO').length ? 'div.styles_buttonsContainer__HREZO' : 'div.styles_buttonsContainer__r_AHo');
            }

            setInterval(function() {
                $('a.styles_posterLink__Xjqyr').filter(':not(.processed)').each(function() {
                    $(this).addClass('processed');
                    $(this).replaceWith($(this).clone());
                });
            }, 500);

            console.log('Готов к работе');
       });
    };


    const watching = function() {
        $('div#TopAdMb:eq(0)').remove();
        $('div.topAdPad:eq(0)').remove();
        $('div#tgWrapper:eq(0)').remove();

        $('head').append('<link rel="icon" href="https://kinopoisk-ru.clstorage.net/1jl61k131/6c3b11mr2/oyV_OzKp_0NaznH5OZz57SD7x2LyqJdTr3wYd-9BcXe3lxk8jFuIBeHTZKMalF3QZMVSHXwthDxVt3oAmlLOLg_Z-vaTMSMbSsNNhTmp_ZUIjrcCh9zvi2pAcGf7qRQPj3MhiMgbNIgJlwgrJoy48Ii55hEUpPh8XQ6awMqGCuav9VoWQw3fBypWETmhwZHJOALfl6_Aq0O7cPCXCzX447PXMWxMA4Colf94d7qkYFj0wRbZ5LxwuOkKIqwGvmp-kzXyws91gy8ygj0RPQ31vZAOS2cXuNtnk_yMV69dBHsP0_VATO8kPGkHBH9K9LwwAMne1WxoHBTtGpLctr7WEks1FhpvCUuH1qY9wU1JxZ0wckf_67CH38sAANMTGcwfZ9OVjFT7dLgVn7yrphzgfJwxihVwOJAAtcqSmPIy2jIzbTa65wHP49qG_YH1-d0N9HpfSxPEq3sLeJCTh1FMc0tvKdQAc7gowUPwUxIwVNyI_WYBxLQsoL3KFqTSevIekyHWDicNVxOSPp2dsTl1BTDyc8-j0Cd7o0SIewNRYNc_jxWgxKt4jAmfdCcCDPhcnAni1fjkiPzpamKcujIOlntt-gar9Z-XBtrJ4cm9EZmoiudzk8BTxy8U_IvTEYhLy9v5HOAriIRpQ7DbJrhUoJz9Fu3UeBRwSc6GnL7GhoK70YI6M1H7o8LOwaWJPV2VlM7T85ssC6efGEDXd5XoG8fnmSDMc1Qofb_IGz50cOC8iTZ5_GSs2MX6kvS2avq2Qz1yYqvF__tGokH9RbmlWQDif6sTBO8ju3zEmx9teCcbA0G8WJ-sxAnjlF-W5LR84CVSYXyQFKCJutKsDo7GLpNhPsILwc-Tmk5hFQEB7YU8YkvrJ_R_L6dgeBdXSdTjN4fxqMDnuHR5R-BP7gCsvIjJFtXU9JwQpTLqvEKW_sbjIeZ-OykT1wJOXQ0ZCYFFCGZnI_dUfzc_XODzwzHEl6NDQQAYB2A4tQuc90boBHQ0OWZldPgA_PGCwpTOzmq-b0maiusF-yOutk29mS1xSbAOz3_vmAtHSwTwkwMxmM-PixGc7MdsLJEL_JOekIA8uFXOceQ4tJwhrpIs3gaSDlP5Iu5nPUPnJhZVYd1FXWlQ4ncTL1wr66tokEdDVRDrZ-spMJwPhDgF8xArKvxwzHih5lGIqHDQXf7eZELilp5fXapCKzXHw07-te1NVVmxDO73o_egc6fLSDhPw01gnwObdWyA2_x09QvEw-Z8rCygkQbFdDg8_NWigjzSflqCL4W-ykOFE2sOGl09NfkZDZCWT89rGIM_ywQwR0dNbOu7c0UQdPtkKE3n4KtqkEhEjN3aLTwY8MzJYvI0uuJWmjOt9tprkUdDmvrZQTFd3TUwzvcHk3zvv7vYsONzbZCL78NlvIArlAzVt-DbzixUuDzJhn3IyPgk_WrutLpaVvoXcTbGG1XTmy7GwQnFGXUB7LJPtw-Mn6MH4FQr_0lgA2_zCZiAl-gQZfeY8-oAKCgURXItXBDwoPHOFhyOsgJmo0FiEhedwwtWCl0FVR2ZlZTOZ4ff3AMzEwDgaxNBDNO_O-0wjHeAkBW37KvmjEgAAP1ywfCkCNTB7nrUItJubkOxWp4XHSNvuhK1JcWlWe0wYv-Li0R7O48o8GPnWWSDexNBqGQvHKDZz9SDTiDovBTN6nHQLOwQfYqGLHJGhnpvdT5KB0nfr9reKTmpSXn9vBIn7_eII1_HzERbkxXgI7P7gSjga6hMZctoM0r4hFzMuQbFaPgwQN1mEiAOSkb6e80ixpOxB5s-ml35rZUZiaju8yMbdCu7CwTU068JjBu_D-GcmJNozMGXHDNOEDTYkAlaYQisCFTtvla0pk7ehu8plvqfnUdTpsLxpbUx-W3Utp_3O0wPXwtYlIt7mRDnAwcZ1BDjpFDFFzAzBpS8NMz1flFEYJQAcfJauEJ2kpqncY46Z8kDC_a2lTFVAenFPJpf4zv8gx8n7PjHAznEB3_nzQD855RM8ftwA_r8tDgguZp5sOTw0F2yTmx2ToYew72mWpOp3xuKOjm1lRWlbZR-v7-3XK-3m2D4V2fdnE8b5820fO-0pJEPdM_2vOzQ4InGbYjA2JRtYp70ptoucuvBYvI_uavXPia57UUpzW04ehP3nwS_b1fsFCtXpdgrOwvtOMBTpKyFlwArsnTc6AAlipHcCJhE8SZi7Oq2iiqjsZ7Cz1krTzaS7WkJScUBaGor4xvQqz8z0HgDWynUCydL7WTEd5C88eP4Q2IcxIQATTbF9BSULL22DtxaWs6iWzH-jj-RIxd2Ws0ltd0N-VTOp-vbVIcn8_hoH-dpWEvvt52gdBcAoIlbdDtqmMyMFKHGhQyIYLTxFl5MBp6Ost9NEkLPudvncpqR8a2VWZ2cLrd_h7gvL0vcZGerLXAnj9e5ZFADgNT5Y9Rf9vRAtAQxQpX0lHAgNbJWpHKe4i5bdQI2n0Ev74o2La2lASUReK53J6eMKxOnEMwjK8VIR7uHzUjsnwQIyZsIzwZ4bDAUdU4NzDTogP1ypsgCEsL2Jy32ike9l2MCmunN0cWFHWC-NyvzdAsnS-x0m_u5lHfPy5VImJ_o0B0fXKd-4EzIsPWKATiMgFTtsiaoVsryQpMNVm5DDYeDNrbdpUG9-eWA8jOHL7jjH1fU6F_r7YRv92MVmJALUHBh-4C7Kjz4BAytQpkEKPj4xcJCxErmWp4b9b5uO9l7owJ2OQ0ZrU3FaBI39x98H_9zbMijxx18W8dbLeRAD7SY-c9c_yLsSMzkUVppBPDYCOluCkByTv62S23Wtot9y9M-CiWFXYXVGWS6twuv8KPH_9gAK08ZCCfHv6mICMv0EFVvXJvm_Dzs7CXSWXhonEgJjopcssraqjMF_vqLGd8Tdtoh9YU96Vl8ft-3ByBz309w1NPjIZRbI_vxVGhDiESJk_BTkrDcIDgNPvVgtByM3WIA/projector-favicon/favicon-16.svg" type="image/svg+xml">');
        let $Video_pleer = $('div.wrapper').css('width', '70%').wrap('<div style="display: flex; align-items: center"></div>').parent();
        $Video_pleer.css('display', 'none')
        $('body').append('<div class="spinner"></div>');
        addGlobalStyle(`@keyframes spinner {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}} @-webkit-keyframes spinner {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}} .spinner {display: block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 50px;height: 50px;border-radius: 50%;border: 4px solid rgba(0, 0, 0, 0.1);border-width: 6px;border-top-color: #b5b5b5;animation: spinner 0.6s linear infinite;}`)

        GM_xmlhttpRequest({
            method: "GET",
            url: 'https://www.kinopoisk.ru'+window.location.pathname,
            onload: function(response) {
                let $NameFilm = $(response.responseText).find('h1.styles_title___itJ6.styles_root__QSToS').children().first().text(); if ($NameFilm === '') {$NameFilm = $(response.responseText).find('h1.styles_title__65Zwx.styles_root__l9kHe').children().first().text()}
                let alt_name = $(response.responseText).find('span.styles_originalTitle__JaNKM').text();
                let url = $(response.responseText).find('img.film-poster').attr('src');

                $('title').text(`Кинопоиск. ${$NameFilm}`);
                $('<section>').append(
                    $('<div>', {class: 'united_el', style: 'max-width: 1200px; min-width: 300px; margin-left: auto; margin-right: auto'}).append(
                        $('<div>', {style: 'background-color: #222a33; border-radius: 12px; box-shadow: -2px 3px 6px 2px rgba(0, 0, 0, 0.3); margin: 40px auto 15px;'}).append(
                            $('<div>', {style: 'padding: 10px 15px'}).append(
                                $('<header>', {class: 'NameFilm_head'}).append(
                                    $('<h2>', {style: 'margin-bottom: 10px; display: inline-block; font: 20px normal tahoma, verdana, arial, sans-serif; color: #b5b5b5'}).append(
                                        $('<i>', {style: 'margin-top: 15px; margin-bottom: 16px; margin-left: 15px; margin-right: 20px', class: 'back-arrow'}).click(function() {window.location.host = 'www.kinopoisk.ru'})
                                    ).append(function() {
                                        $(this).append(alt_name == 0 ? $NameFilm : `${$NameFilm} / ${alt_name}`);
                                    })
                                )
                            )
                        )
                    )
                ).appendTo($('body'))
                $Video_pleer.appendTo($('div.united_el').find('div div'));
                $Video_pleer.append($('<img>', {style: 'margin-left: 10px; height: 25%; width: 25%; border-radius: 4px', class: 'poster', src: url}))
                $('.spinner').remove();
                $Video_pleer.css('display', 'flex');
            }
        })

        addGlobalStyle(`@media (max-width: 50rem) {.poster {display: none} .wrapper, .NameFilm_head {width: 80% !important; margin-left: auto; margin-right: auto}} [class*="back-arrow"] {color: #888 !important; width: 0; height: 0; border-width: 6px; border-style: solid; border-bottom-color: transparent; border-left-color: transparent; margin: 10px; transform: rotate(-135deg)} [class*="back-arrow"]:hover {color: #aaa !important} [class*="back-arrow"]:before {right: 0; top: -3px; position: absolute; height: 4px; box-shadow: inset 0 0 0 32px; transform: rotate(-45deg); width: 15px; transform-origin: right top} [class*="back"] {position: relative; display: inline-block; vertical-align: middle; color: #666; box-sizing: border-box} [class*="back"]:after, [class*="back"]:before {content: ""; box-sizing: border-box}`);
        console.log('END.:.i;');
    };

    if (window.location.host === 'www.kinopoisk.ru') {
        if (!window.location.pathname.includes('/film') && !window.location.pathname.includes('/series')) {
            setInterval(function() {
                let $replace_elements = $('.styles_root__ti07r, .styles_root__H9wyL, .styles_root__NqHb1, .styles_titleWrapper__tjhUr, .styles_root__LNqvp');
                $replace_elements.filter(':not(.processed)').replaceWith(function() {
                    $(this).addClass('processed');
                    return $(this).clone();
                });
                $('a:contains("Смотреть")').filter(':not(.processed)').each(function() {
                    let $WatchButtons = $(this);
                    let $WatchButtons_link = $WatchButtons.attr('href');
                    $WatchButtons.attr('href', `https://sspoisk.ru/${$WatchButtons_link.split('/')[1]}/${$WatchButtons_link.split('/')[2]}/`);
                    $WatchButtons.addClass('processed');
                });
                $("a[href*='/watch/']").filter(':not(.processed):not(:contains("Смотреть"))').each(function() {
                    $(this).attr('href', $(this).attr('href').replace(/\/watch\/.*/, ''));
                    $(this).addClass('processed');
                });
            }, 200);
        } else {
            kinopoisk();
        }
    } else if (window.location.host.includes('flicksbar')) {
        watching();
    }
})();
