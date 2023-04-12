// ==UserScript==
// @name 百度网盘直链
// @version      1.1
// @description 本版适用于最新百度网盘！
// @match        *://pan.baidu.com/disk/home*
// @match        *://yun.baidu.com/disk/home*
// @match        *://pan.baidu.com/s/*
// @match        *://yun.baidu.com/s/*
// @match        *://pan.baidu.com/share/link*
// @match        *://yun.baidu.com/share/link*
// @run-at       document-start
// @include        *://pan.baidu.com/disk/home*
// @include        *://yun.baidu.com/disk/home*
// @include        *://pan.baidu.com/s/*
// @include        *://yun.baidu.com/s/*
// @include        *://pan.baidu.com/share/link*
// @include        *://yun.baidu.com/share/link*
// @run-at       document-start
// @namespace @Kenzson
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    try{Object.defineProperty(navigator,'platform',{get:function(){return 'Android';}});}catch(e){}
    if(navigator.platform!='Android'){
        try{navigator.__defineGetter__('platform',function(){return 'Android';});}catch(e){}
        if(navigator.platform!='Android'){
        }
    }
})();