// ==UserScript==
// @name         Load pictures on ODSW
// @name:zh-CN   加载ODSW网站上的图片
// @namespace    https://www.owendswang.com/
// @version      0.3.2
// @description  Load pictures from weibo.com without limitation on 'owendswang.com'.
// @description:zh-CN  跳过微博图床外链限制，加载“owendswang.com”网站上的微博外链图片。
// @icon         https://avatars.githubusercontent.com/u/9076865?s=40&v=4
// @author       OWENDSWANG
// @license      MIT
// @match        https://www.owendswang.com/
// @match        https://www.owendswang.com/?*
// @match        https://www.owendswang.com/weibo/*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @connect      sinaimg.cn
// @connect      owendswang.com
// ==/UserScript==

(function() {
    'use strict';

    const getImage = (el) => {
        const url = el.getAttribute('data-src');
        if(url.startsWith('http')) {
            GM_xmlhttpRequest({
                method: 'get',
                url,
                responseType: 'blob',
                withCredentials: false,
                headers: {
                    'Referer': 'https://weibo.com/',
                    'Origin': 'https://weibo.com/'
                },
                onload: function ({ status, response }) {
                    if(status === 200) {
                        if(el.tagName === "IMG") {
                            el.src = URL.createObjectURL(response);
                        } else if (el.tagName === "DIV") {
                            el.style.backgroundImage = 'url(\'' + URL.createObjectURL(response) + '\')';
                        } else if (el.tagName === "VIDEO") {
                            el.setAttribute('poster', URL.createObjectURL(response))
                        }
                    }
                }
            })
        }
    }
    document.querySelectorAll('.lozad').forEach((el) => {
        // console.log(el)
        getImage(el)
    });
    const weiboNotice1 = bootstrap.Alert.getOrCreateInstance('#weibo-notice-1')
    weiboNotice1.close()
})();
