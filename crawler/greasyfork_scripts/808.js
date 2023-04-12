// ==UserScript==
// @name         HLS(m3u8) Ad Remover
// @name:zh-CN   HLS(m3u8) 去广告
// @namespace    http://tampermonkey.net/
// @license      GNU AGPLv3
// @version      0.4
// @description  Remove HLS.js-based(m3u8) ad stream
// @description:zh-cn   基于HLS.js(m3u8)播放器的去视频流内插广告插件，大部分视频网站都是基于这个库的，欢迎提交视频网址的匹配规则
// @author       douniwan6
// @match        http*://xiaoheimi.net/player*
// @match        http*://www.yhpdm.net/yxsf/player*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @supportURL   https://greasyfork.org/en/scripts/463326-hls-m3u8-ad-remover/feedback
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /*global Hls*/
    // alert(“HLS Ad Remover”);
    //debugger

    // special playlist post processing function
    function process(playlist) {
        // ad stream usually surrounded by #EXT-X-DISCONTINUITY
        let adExp = /#EXT-X-DISCONTINUITY\n(?<ad>#EXTINF:.*\n.*\n){1,10}#EXT-X-DISCONTINUITY/g;

        let around = new RegExp(`(?<before>(?:.*\n){0,6})(?<ads>${adExp.source})(?<after>(?:.*\n){0,6})`, adExp.flags);

        for (let match of playlist.matchAll(around)) {
            console.log(match.groups.before);
            console.log("*********************REMOVED*********************");
            console.log(match.groups.ads);
            console.log("*********************REMOVED*********************");
            console.log(match.groups.after);
            console.log(match);
        }

        playlist = playlist.replace(adExp, "");

        return playlist;
    }
    class pLoader extends Hls.DefaultConfig.loader {
        constructor(config) {
            super(config);
            var load = this.load.bind(this);
            this.load = function (context, config, callbacks) {
                if (context.type == 'manifest' || context.type == 'level') {
                    var onSuccess = callbacks.onSuccess;
                    callbacks.onSuccess = function (response, stats, context) {
                        response.data = process(response.data);
                        onSuccess(response, stats, context);
                    };
                }
                load(context, config, callbacks);
            };
        }
    }

    console.log(Hls.DefaultConfig.pLoader);
    Hls.DefaultConfig.pLoader = pLoader
    var loadSource = Hls.prototype.loadSource;
    Hls.prototype.loadSource = function(src) {
        console.log(src);
        loadSource.call(this, src);
    }
    console.log(Hls.DefaultConfig.pLoader);
})();