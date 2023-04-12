
// ==UserScript==
// @name         填写百度网盘密码
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description   Fill in Baidu disk password automatically
// @author       none
// @match        https://pan.baidu.com/share/*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @grant GM_xmlhttpRequest
// ==/UserScript==
 
(function() {
    'use strict';
 
    // Your code here...
    var htmlHref = window.location.href;
    var index = htmlHref .lastIndexOf("=");
    var str = htmlHref.substring(index+1, htmlHref.length);
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://ypsuperkey.meek.com.cn/api/v1/items/BDY-'+str+'?client_version=2018.12&callback=?',
        onload: function(res) {
            var code = JSON.parse(res.responseText).access_code;
            $(".QKKaIE").val(code);
            $(".g-button-right").click();
        }
    });
})();