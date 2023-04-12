// ==UserScript==
// @name    夸克网盘直链下载|去广告精简版
// @name:en    quark cloud direct link download | remove ads
// @namespace          niyugwyttftrd
// @version            1.3.3
// @description        无需夸克网盘客户端，直接在浏览器中下载。
// @description:en        Download directly without quark cloud client.
// @author             harry


// @license           GPL License
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      tool.manmanbuy.com
// @connect      xbeibeix.com
// @connect     	  azkou.cn
// @connect     	  idey.cn
// @connect     	  localhost
// @connect           baidu.com
// @connect           *
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM.addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @license           AGPL
// @antifeature  membership
// @match        https://pan.quark.cn/list*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quark.cn
// @grant        GM_log
// @grant window.onurlchange
// ==/UserScript==
(function () {

    'use strict';

        (function () {
            'use strict';
            GM_log('quark download is running.');

            setInterval(gmMain, 250);
            const fidAttrName = 'data-row-key';

            function gmMain() {
                const checkboxes = document.getElementsByClassName('ant-checkbox-input');
                if (checkboxes === undefined || checkboxes.length <= 1) {
                    console.log('document element not loaded yet');
                    return;
                }

                // checkboxes.length > 1
                console.log('document element loaded, start dealing download btn');
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            addDownloadBtnListener();
                        }
                    })
                }

                // flow download btn
                addFlowDownloadBtnListener();
            }

            function addDownloadBtnListener() {
                let downloadBtn = getDownloadBtn();
                downloadBtn.replaceWith(downloadBtn.cloneNode(true));   // remove all event listener
                downloadBtn = getDownloadBtn();

                downloadBtn.addEventListener('click', () => {
                    let fids = getSelectedFids();
                    download(fids);
                })
            }

            function addFlowDownloadBtnListener() {
                for (const btn of getFlowDownloadBtns()) {
                    btn.replaceWith(btn.cloneNode(true));   // remove all event listener
                }

                for (const btn of getFlowDownloadBtns()) {
                    btn.addEventListener('click', () => {
                        const fid = btn.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(fidAttrName);
                        download([fid]);
                    })
                }
            }

            function download(fids) {
                GM_xmlhttpRequest({
                    method: "POST",
                    url: "https://drive.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc&ve=2.1.5",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    data: JSON.stringify({ "fids": fids }),
                    onload: function (res) {
                        console.log('get real download url, fids: %o, res: ', fids, res.responseText);
                        let resData = JSON.parse(res.responseText).data;
                        if (resData === undefined || resData.length === 0) {
                            console.log('error!, data is empty. request fids: ', fids);
                            alert('获取直链失败, 请尝试刷新页面！注意，文件夹不支持直链下载！')
                            return;
                        } else {
                            console.log('get real download url, size: ', resData.length)
                        }

                        resData.forEach(o => window.open(o.download_url));
                    }
                });
            }

            function getDownloadBtn() {
                let btnGroup = document.getElementsByClassName('ant-btn btn-file');
                let downloadBtn;
                for (let i = 0; i < btnGroup.length; i++) {
                    if ('下载' === btnGroup[i].firstElementChild.innerText) {
                        downloadBtn = btnGroup[i];
                    }
                }
                return downloadBtn;
            }

            function getFlowDownloadBtns() {
                return document.getElementsByClassName('hover-oper-item hoitem-down');
            }

            function getSelectedFids() {
                const checkboxes = document.getElementsByClassName('ant-checkbox-input');
                let fids = [];
                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        const fid = checkboxes[i].parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-row-key');
                        if (fid !== undefined && fid !== '') {
                            fids.push(fid);
                        }
                    }
                }
                return fids;
            }
        })();
})()