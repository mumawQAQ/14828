// ==UserScript==
// @name         Instagram: 图片，视频批量下载器
// @name:en      Instagram: pictures, video batch downloader
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Instagram下载器，支持图片和视频批量下载
// @description:en  Downloader for Instagram, support batch download pictures and videos
// @author       jaywang
// @match        https://www.instagram.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @run-at       document-idle
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    /** 更多选项列表的选择器 */
    const selectionListSelector = 'div.RnEpo.Yx5HN > div > div > div > div';
    /** 当前post下的用户名称选择器 */
    const usernameASelector = 'header.Ppjfr  a.ZIAjV';
    /** 复制图片按钮选择器 */
    const copyURLSelector = `${selectionListSelector} > button:nth-last-child(3)`;
    /** 打开帖子按钮选择器 */
    const openPostSelector = `${selectionListSelector} > button:nth-last-child(2)`;
    /** 单个下载按钮 */
    const singleDownloadBtn = '<button jaywangdownload="single" class="aOOlW" tabindex="0" style="color: #58c322">下载</button>';
    /** 批量下载图片按钮 */
    const batchDownloadBtn = '<button jaywangdownload="batch" class="aOOlW" tabindex="0" style="color: #58c322">下载合集</button>';
    /**
     * 当前post的下标
     * -1: 代表单图
     */
    let currentIndex = -1;
    /**
     * 当前post
     */
    let currentPost;
    /**
     * 下载图片按钮事件
     * 点击三个小点更多按钮
     */
    $('body').click(async (el) => {
        /** 下载按钮事件 */
        if (el.target.getAttribute('jaywangdownload') === 'single') {
            const index = currentIndex;
            const post = currentPost;
            const username = post.querySelector(usernameASelector).text;

            const isPrivate = isPrivateUser();
            let initSrc;
            let src;
            if (isPrivate) {
                const container = post.querySelector('._97aPb');
                src = getPrivateSrc(container, index);
            } else {
                $(copyURLSelector).click();
                initSrc = await navigator.clipboard.readText();
                src = await getResource(initSrc, index);
            }
            save(src, getName(username, index));
        }

        /** 下载合集按钮事件 */
        if (el.target.getAttribute('jaywangdownload') === 'batch') {
            let initSrc;
            if (isPrivateUser() && withoutOpenPostBtn()) {
                //console.log(`location`, location)
            } else {
                $(`${selectionListSelector} > button:nth-last-child(${getOpenPostLastLocation()})`).click();
            }
            initSrc = location.href;
            const data = await fetchPostInformation(initSrc);
            const batchInfo = getBatchInformation(data);
            batchSaveAs(batchInfo);
        }

        /** 点击三个小点更多按钮 */
        if (el.target.closest('button.wpO6b')) {
            /** 获取当前post */
            currentPost = el.target.closest('article');
            /** 容纳点点点的容器 */
            const container = currentPost.querySelector('._97aPb');
            const dots = currentPost.querySelector('._3eoV-');
            const isMulti = isMultiplePost(container);
            currentIndex = isMulti ? getPostIndex(dots) : 0;
        }
    });
    /**  */

    /** DOM变动的回调函数 */
    const callback = function (mutationRecord) {
        for (const record of mutationRecord) {
            const nodeList = record.addedNodes;
            if (nodeList.length === 1 && isMoreOptionButton(nodeList[0])) {
                $(selectionListSelector).prepend(singleDownloadBtn);
                $(selectionListSelector).prepend(batchDownloadBtn);
                return;
            }
        }
    };
    /** 检测DOM变动 */
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {
        childList: true,
        subtree: false
    });

    /**
     * 判断是否是更多选项按钮
     * @param {Node} node
     * @return {boolean}
     */
    function isMoreOptionButton(node) {
        return node.querySelector('.mt3GC');
    }

    /**
     * 获取Post信息
     * @param uri
     * @returns {Promise<any>}
     */
    async function fetchPostInformation(uri) {
        let formatedUri = uri;
        if (uri.includes('?utm_source')) {
            formatedUri = uri.match(/.*(?=\?utm_source)/);
        }
        formatedUri += '?__a=1';
        const result = await fetch(formatedUri);
        const data = await result.json();
        return data;
    }

    /**
     * 获取资源链接
     * @param {string} uri
     * @param {number} index
     */
    async function getResource(uri, index) {
        const data = await fetchPostInformation(uri);
        const isSingle = data.graphql.shortcode_media.edge_sidecar_to_children === undefined;
        const node = isSingle
            ? data.graphql.shortcode_media
            : data.graphql.shortcode_media.edge_sidecar_to_children.edges[index].node;

        const isVideo = node.is_video;
        const src = isVideo
            ? node.video_url
            : node.display_resources[node.display_resources.length - 1].src;
        return src;

    }

    /**
     * 获取第i个信息
     * @param data
     * @param index
     * @returns {*|string}
     */
    function getBatchInformation(data) {
        const isSingle = data.graphql.shortcode_media.edge_sidecar_to_children === undefined;
        let edges;
        if (isSingle) {
            edges = [
                {
                    node: data.graphql.shortcode_media
                }
            ];
        } else {
            edges = data.graphql.shortcode_media.edge_sidecar_to_children.edges;
        }
        const username = data.graphql.shortcode_media.owner.username;
        const infoList = [];
        for (const i in edges) {
            const node = edges[i].node;
            const isVideo = node.is_video;
            const src = isVideo
                ? node.video_url
                : node.display_resources[node.display_resources.length - 1].src;
            infoList.push({
                name: getName(username, i),
                src,
                suffix: isVideo ? 'mp4' : 'jpg'
            });
        }
        return infoList;
    }

    /**
     * 在浏览器里面打开
     * @param {string} src
     */
    function openInBrowser(src) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = src;
        document.body.append(a);
        a.click();
        a.remove();
    }

    /**
     * 另存为图片或视频
     * @param {string} src 下载源
     * @param {string} name 图片名称
     */
    async function save(src, name) {
        const data = await fetch(src);
        const blob = await data.blob();
        downloadBlob(blob, name);
    }

    /**
     * 下载blob
     * @param {blob} blob
     */
    function downloadBlob(blob) {
        const domString = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = domString;
        a.setAttribute('download', name);
        a.click();
    }

    /**
     * 批量下载
     */
    async function batchSaveAs(fileList) {
        let promiseList = [];
        let filenameList = [];
        let filename;
        for (const { src, name, suffix } of fileList) {
            filename = name;
            const promise = fetch(src);
            promiseList.push(promise);
            filenameList.push(`${name}.${suffix}`);
        }
        const resultList = await Promise.all(promiseList);
        const blobList = resultList.map((result) => result.blob());
        const zip = new JSZip();
        const folder = zip.folder(filename);
        for(let i = 0; i < filenameList.length; i++) {
            folder.file(filenameList[i], blobList[i]);
        }
        const content = await folder.generateAsync({type:"blob"});
        saveAs(content, `${filename}.zip`);
    }

    /**
     * 定位当前图片下标
     * 多个元素_97aPb内有一个rQDP3，内有_3eoV-
     * 单个元素_97aPb内没有rQDP3
     * @param {Element} node
     */
    function getPostIndex(node) {
        const nodeList = node.childNodes;
        for (let i = 0; i < nodeList.length; i++) {
            const classList = nodeList[i].classList;
            if (classList && classList.contains('XCodT')) {
                return i;
            }
        }
        return 0;
    }

    /**
     * 判断post图片/视频数量是多个还是单个
     * @param {Element} el container
     * @return {boolean}
     */
    function isMultiplePost(el) {
        return el.querySelector('._3eoV-') !== null;
    }

    /**
     * 格式化的日期
     * @returns {string}
     */
    function getFormatedDate() {
        const d = new Date();
        return '' + d.getHours() + d.getMinutes() + d.getSeconds();
    }

    /**
     * 判断是否是私人用户
     * @returns {boolean}
     */
    function isPrivateUser() {
        const nodeList = document.querySelector(selectionListSelector).querySelectorAll('.HoLwm');
        return nodeList.length <= 3;
    }

    /**
     * 判断是否有打开帖子按钮
     * @returns {boolean}
     */
    function withoutOpenPostBtn() {
        const nodeList = document.querySelector(selectionListSelector).querySelectorAll('.HoLwm');
        return nodeList.length === 1;
    }

    /**
     * 获取打开帖子按钮倒数的位置
     * @returns {number}
     */
    function getOpenPostLastLocation() {
        const nodeList = document.querySelector(selectionListSelector).querySelectorAll('.HoLwm');
        return nodeList.length;
    }


    /**
     * 获取图片，视频资源链接
     * @param {Element} container
     * @param {number} index
     * @returns {string}
     */
    function getPrivateSrc(container, index) {
        let resourceContainer = container;
        if (isMultiplePost(container)) {
            /**
             * 图片在post开始是第一个有效的li
             * post结尾是第二个li
             * post中间是中间一个li（中间）
             */
            const hasPrevBtn = container.querySelectorAll('.POSa_').length !== 0;
            const hasNextBtn = container.querySelectorAll('._6CZji').length !== 0;

            let nth = 3;
            if (hasNextBtn && !hasPrevBtn) {
                nth = 2;
            }
            resourceContainer = container.querySelector(`ul.vi798 li:nth-child(${nth})`);
        }
        const video = resourceContainer.querySelector('video');
        const img = resourceContainer.querySelector('img');
        if (video) {
            return video.src;
        }
        if (img) {
            const sets = img.srcset.split(',');
            const lastSet = sets[0];
            return lastSet.split(' ')[0];
        }
    }

    /**
     * 根据名称获取下标
     * @param {string} username
     * @param {number} index
     * @returns {string}
     */
    function getName(username, index) {
        return `${username.split('.').join('')}_${index + 1}_${getFormatedDate()}`;
    }
})();