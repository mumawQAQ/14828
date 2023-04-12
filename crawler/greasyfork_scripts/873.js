// ==UserScript==

// @include      *cnki.net*
// @include      *cqvip.com*
// @include      *210.47.0.21/~root/search*

// @name         知网维普免费入口
// @namespace    http://tampermonkey.net/
// @version      1.02
// @description  打开知网或者维普官网会自动跳转到“上业易享”登陆窗口，借助神秘力量登陆后会自动跳转到一个新窗口，在新窗口左下角有[知网]和[维普]的免费入口，好好享受吧。如遇无法自动跳转将浏览器设置为“允许弹窗”
// @author       Ginn
// @grant        none
// @note         跳转地址：http://210.47.0.21
// @note         账号：cclglib
// @note         密码：cclglib
// @note         v1.01更新上部信息框，点击确定跳转，取消不跳转
// @note         v1.02更新包含cnki.net，cqvip.com
// ==/UserScript==

(function() {
    'use strict';
    var username = "cclglib";
    var password = "cclglib";
    if (location.host == "cnki.net" || location.host == "www.cnki.net" || location.host == "cqvip.com" || location.host == "www.cqvip.com") {
        var message = confirm("请记住以下信息" + "\n" + "账号：" + username + "   密码：" + password);

        //点击确定跳转，取消不跳转
        if(message === true) {
            window.location.href = "http://210.47.0.21/~root/user";
        }
    }else if(location.host.indexOf("210.47.0.21") > -1) {
        var a = document.createElement('input');
        a.type="button";
        a.value="知网";
        a.style.position="fixed";
        a.style.left="0px";
        a.style.bottom="180px";
        a.style.fontSize="20px";
        a.style.textDecoration="none";
        a.style.zIndex=999;
        a.style.display="none";
        a.style.backgroundColor="red";
        a.style.color="white";
        document.querySelector("body").appendChild(a);
        a.style.display = "block";
        a.addEventListener("click", function(){
            window.open('http://210.47.0.21/http/cnki.net/www/80/');
        });

        var b = document.createElement('input');
        b.type="button";
        b.value="维普";
        b.style.position="fixed";
        b.style.left="0px";
        b.style.bottom="150px";
        b.style.fontSize="20px";
        b.style.textDecoration="none";
        b.style.zIndex=999;
        b.style.display="none";
        b.style.backgroundColor="red";
        b.style.color="white";
        document.querySelector("body").appendChild(b);
        b.style.display = "block";
        b.addEventListener("click", function(){
            window.open('http://210.47.0.21/http/cqvip.com/lib/80/');
        });
    }

    // Your code here...
})();