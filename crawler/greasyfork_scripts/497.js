// ==UserScript==
// @name         F**k zhihu
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  知乎免登录
// @author       newwbbie
// @license      MIT
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var task = 2;
    let ready = setInterval(function () {
        if (document.querySelector('.Modal-closeButton')) {
            document.querySelector('.Modal-closeButton').click();
            task--;
        }
        var divs = document.querySelectorAll("body > div:not([class]):not([id]):not([style]) > div:not([class]):not([id]):not([style]) > *[class^='css-']");
        if(divs.length > 0) {
            task--;
        }
        for(var i = 0; i < divs.length; i++) {
            divs[i].remove();
        }
        if(task == 0) {
            clearInterval(ready);
        }
    }, 100);
})();