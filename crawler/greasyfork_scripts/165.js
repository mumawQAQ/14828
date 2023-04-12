// ==UserScript==
// @name                RIP HLTV BET
// @name:zh-CN          HLTV 广告去除插件
// @namespace           https://github.com/wolfcon/RIP-HLTV-BET
// @version             1.10
// @description         Remove hltv.org Annoy AD
// @description:zh-cn   清除那些🤮背景赌博广告.
// @author              Frank
// @require             https://code.jquery.com/jquery-3.6.0.min.js
// @match               https://*.hltv.org/*
// @icon                https://www.hltv.org/img/static/favicon/favicon-32x32.png
// @license             MIT
// @run-at              document-body
// ==/UserScript==

const filters = [
    '[class*="yabo"]',
    //'[id*="betting"]',
    '[href*="bet"]:not([href^="/"])',
    '[class*="regional"]',
    '[class*="world"]',
    '[class*="accumulator"]',
    //'a:not([href^="/"]):not([href^="https://www.hltv.org/"]):not([href^="http://www.hltv.org/"])',
    '[data-link-tracking-page="Widget"]'
];

// Use ADBlock way to block some annoy element
(function removeFilters() {
    var $hiddenStyle = $('<style type="text/css"></style>');
    $($('head')[0]).append($hiddenStyle);
    $hiddenStyle.append(filters + "{display: none !important; visibility: hidden !important;}");
})();

// removeBackgroundAd
document.body.removeAttribute("data-href");
document.body.removeAttribute("style");

// set background to bar Color
$(document.body).css("background-color", $(".navbar").css("background-color"));

(function removeTopAds() {
    var topDiv = document.getElementsByClassName("logoCon")[0];
    if (topDiv == null) return;
    var adCount = topDiv.children.length - 1;

    while (adCount > 0) {
        topDiv.removeChild(topDiv.lastElementChild);
        adCount--;
    }
})();

(function removeBettingTableInMatchDetail() {
    setTimeout(function() {
        var bettingDiv = document.getElementById("betting");
        if (bettingDiv == null) return;
        bettingDiv.removeChild(bettingDiv.firstElementChild);
    }, 50);
})();
