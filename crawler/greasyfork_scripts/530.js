// ==UserScript==
// @name            Skipper for ouo.io
// @name:ja         ouo.ioで楽をするためのスクリプト
// @namespace       http://hogehoge/
// @version         1.*
// @description     You can bypass countdown after reCAPTCHA
// @description:ja  reCAPTCHA認証後のカウントダウン(3秒)をスキップします
// @author          H. Amami
// @match           http://ouo.io/go/*
// @match           http://ouo.press/go/*
// @run-at          document-end
// @grant           none
// ==/UserScript==

(function() {
    'use strict';
    if (document.getElementById("form-captcha") === null) {
        document.getElementsByTagName("form")[0].submit();
    }
})();