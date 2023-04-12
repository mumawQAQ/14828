// ==UserScript==
// @name 【稳定】全网VIP视频解析
// @namespace    https://zhangwenbing.com/
// @version      4.1.4
// @description    优酷、爱奇艺、腾讯、芒果等全网VIP视频免费破解去广告
// @author       bing
// @match        *://*.iqiyi.com/*
// @match        *://*.youku.com/*
// @match        *://*.le.com/*
// @match        *://*.letv.com/*
// @match        *://v.qq.com/*
// @match        *://*.tudou.com/*
// @match        *://*.mgtv.com/*
// @match        *://film.sohu.com/*
// @match        *://tv.sohu.com/*
// @match        *://*.acfun.cn/v/*
// @match        *://*.bilibili.com/*
// @match        *://vip.1905.com/play/*
// @match        *://*.pptv.com/*
// @match        *://v.yinyuetai.com/video/*
// @match        *://v.yinyuetai.com/playlist/*
// @match        *://*.fun.tv/vplay/*
// @match        *://*.wasu.cn/Play/show/*
// @exclude      *://*.bilibili.com/blackboard/*
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    function addJQuery(callback) {
        var script = document.createElement("script");
        script.setAttribute("src", "//libs.baidu.com/jquery/2.0.0/jquery.min.js");
        script.addEventListener('load', function () {
            var script = document.createElement("script");
            script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
            document.body.appendChild(script);
        }, false);
        document.body.appendChild(script);
    }

    // the guts of this userscript
    function main() {
        var bind = () => {
            jQ(() => {
                // 腾讯正确选集
                if (document.location.href.includes("qq.com")) {
                    jQ('.mod_episode').unbind();
                    jQ('.mod_episode').on('click', (e) => { e.stopPropagation(); document.location.href = e.target.href });
                }
            });

            // 爱奇艺 正确选集
            /*if (document.location.href.includes("iqiyi.com")) {
                jQ('body').unbind();
                jQ('body').on('click', (e) => {
                    if (e.target.href == undefined || e.target.getAttribute('class') != 'select-link') {
                        return;
                    };
                    e.stopPropagation();
                    document.location.href = e.target.href;
                });
            }*/
        }

        bind();

        var div = document.createElement("div");
        div.innerHTML = '<div id="analysis"><a style="color:#008000;font-size:28px" href="javascript:window.open(\'http://www.zhangwenbing.com/plugin/tools/video#url=\'+location.href)">▷</a></div>';
        document.body.appendChild(div);
        document.getElementById('analysis').style.cssText = 'z-index:99999;position: fixed;top:200px;left:0';

    }

    // load jQuery and execute the main function
    addJQuery(main);
})();