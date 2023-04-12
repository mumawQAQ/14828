// ==UserScript==
// @name         FLY INC walkthrough - Need captcha solver!
// @description  Automatically walk through FLY INC link sites
// @author       WXC
// @version      1.03
// @match        https://thumb9.net/*
// @match        https://shinbhu.net/*
// @match        https://crewus.net/*
// @match        https://crewbase.net/*
// @match        https://topcryptoz.net/*
// @match        https://allcryptoz.net/*
// @match        https://ultraten.net/*
// @match        https://uniqueten.net/*
// @match        https://thumb8.net/*
// @match        https://shinchu.net/*
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-latest.min.js
// @run-at document-idle
// @noframes
// @namespace https://greasyfork.org/users/713625
// ==/UserScript==


this.$ = this.jQuery = jQuery.noConflict(true);

(function() {
    'use strict';

    // focus page
    setInterval(function() { window.focus(); }, 100);
    document.hasFocus = function () {return true;};


    var $ = window.jQuery;
    $(document).ready(function() {

        // damn captcha
        $("#overlay").remove();
        $("#click").css("display","none");
        $("#"+ $(".g-recaptcha:first").closest("form>div").attr("id") ).css("display","block");


        if( $("#count").is(":visible") ) {

            var check = setInterval( function() {

                if( $("#count").text() == "0" ) {
                    clearInterval( check );

                    setTimeout( function() {
                        $("button[class^='btn-']").click();
                    }, ( 2 * 1000 ) ); // slow down


                }


            }, ( 1 * 1000 ) ); // check for counter

        }
        else {

            setTimeout( function() {

                if( $(".g-recaptcha").is(":visible") ) {

                    document.title = "CAPTCHA!";

                    var r_timer = setInterval( function() {

                        if( $("#g-recaptcha-response").val().length > 32 ) { 

                            clearInterval( r_timer );
                            $("button[class^='btn-']").click();

                        }

                    }, 3 * 1000 ); // check for captcha response

                }
                else {

                    location.reload();

                }

            }, ( 5 * 1000 ) ); // wait to load captcha

        }

    });


    setTimeout( function() {
        location.reload
    }, ( 120 * 1000 ) ); // global reload if stucked 120sec = recaptcha expiry


})();