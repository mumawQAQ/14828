// ==UserScript==
// @name         教师研修网免十分钟点击继续计时
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  中国教师研修网十分钟自动单击继续计时
// @author       断点李
// @match        *://i.yanxiu.com/uft/course/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //code here...
    var limingClick=setInterval(function(){
    document.querySelector(".clock-tip p").click();
},60*1000*10);
})();