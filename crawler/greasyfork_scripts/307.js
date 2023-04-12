// ==UserScript==
// @id           huangtc@outlook.com
// @name         [煎蛋]jandan-helper
// @namespace    https://github.com/ctgnauh
// @version      0.1
// @description  解锁煎蛋文字复制功能，让地球上信息传递没有障碍。
// @author       Tristan Huang
// @match        http://jandan.net/*/*/*/*.html
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var selected = '';

document.addEventListener('mouseup', function() {
    selected = window.getSelection().toString();
});

document.addEventListener('copy', function() {
    var selection = window.getSelection(),
        olddiv = document.createElement('div');
    olddiv.style.position = 'absolute';
    olddiv.style.left = '-99998px';

    document.body.appendChild(olddiv);
    olddiv.innerHTML = selected;
    selection.selectAllChildren(olddiv);
    window.setTimeout(function () {
        document.body.removeChild(olddiv);}, 100);
});