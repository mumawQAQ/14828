// ==UserScript==
// @name         CSDN免登录复制
// @namespace    zhouql8485
// @version      0.1
// @description  monkey hello world!
// @author       王子周棋洛
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("code").forEach(c => { c.contentEditable = "true" });
})();