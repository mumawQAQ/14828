// ==UserScript==
// @name               Hide youtube google ad
// @name:zh-CN         隐藏youtube google广告
// @name:ja-JP         YouTube の Google 広告を非表示にする
// @namespace          vince.youtube
// @version            2.4.4
// @description        hide youtube google ad,auto click "skip ad"
// @description:zh-CN  隐藏youtube显示的google广告,自动点击"skip ad"
// @description:ja-JP  YouTubeに表示されるGoogle広告を非表示、自動で「広告をスキップ」をクリック
// @author             vince ding
// @match        https://*.youtube.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-start
// @connect      googlevideo.com
// @compatible   firefox >=52
// @compatible   chrome >=55
// ==/UserScript==

(function() {
    'use strict';
    var closeAd=function (){
        var css = '.video-ads,.video-ads .ad-container .adDisplay,#player-ads,.ytp-ad-module,.ytp-ad-image-overlay{ display: none!important; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    };
    var skipInt;
    var log=function(msg){
       // unsafeWindow.console.log (msg);
    };
    var skipAd=function(){
        //ytp-ad-preview-text
        //ytp-ad-skip-button
        var skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
        //var skipbtn=document.querySelector(".ytp-ad-skip-button ")||document.querySelector(".videoAdUiSkipButton ");
        if(skipbtn){
           skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
           log("skip");
           skipbtn.click();
           if(skipInt) {clearTimeout(skipInt);}
           skipInt=setTimeout(skipAd,500);
         }else{
              log("checking...");
              if(skipInt) {clearTimeout(skipInt);}
              skipInt=setTimeout(skipAd,500);
         }
    };

    closeAd();
    skipAd();

})();