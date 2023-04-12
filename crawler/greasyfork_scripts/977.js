// ==UserScript==
// @name                ScienceDirect Download
// @name:zh-CN          ScienceDirect下载
// @namespace      tampermonkey.com
// @version        3.1.3
// @license MIT
// @description         Avoid jumping to online pdf,and directly download ScienceDirect literature to local,Support custom file names.
// @description:zh-CN   避免跳转在线pdf，可直接下载ScienceDirect文献到本地,支持自定义文件名
// @match        *://www.sciencedirect.com/*
// @match        *://pdf.sciencedirectassets.com/*
// @match        *://sci-hub.ee/*
// @match         *://scholar.cnki.net/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM.xmlHttpRequest
// @grant        GM_registerMenuCommand
// @connect      sciencedirectassets.com
// @connect      bban.top
// @run-at document-start
// ==/UserScript==

// global variables
var defaultBaseURL = 'https://sci-hub.ee';

// Initialize configuration page

function getBlob(url, cb) {
    GM.xmlHttpRequest({
        method: "GET",
        url: url,
        responseType: 'blob',
        onload: function (response) {
            cb(response.response);
        }
    })
}

function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        let link = document.createElement('a');
        let body = document.querySelector('body');
        console.log(blob)
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        // fix Firefox
        link.style.display = 'none';
        body.appendChild(link);
        link.click();
        body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
    }
}

function download(url, filename) {
    getBlob(url, function (blob) {
        saveAs(blob, filename);
    });
}

function pdf_scihub_ee() {
    let doi = document.title.split(' | ')[document.title.split(' | ').length - 1]
    try { doi = doi.replace('(', '%2528').replace(')', '%2529') } catch (err) { }
    let title = document.title.split('Sci-Hub | ')[1].replace(' | ', ' _ ');
    let ret = prompt('Type your filename and click confirm to download!', title);
    let url = "https://sci.bban.top/pdf/" + doi + ".pdf?download=true"
    if (ret !== null && ret != '') {
        let filename = ret + '.pdf';
        download(url, filename);
    }
}

function pdf_scidirect() {
    let url = document.URL + '&download=true';
    console.log(url);
    let title = document.URL.split("/")[5].split("-")[2];
    try {
        var id = document.URL.split("/")[5].split("-")[2]
        title = GM_getValue(id)
    } catch (err) {
        console.log("err_message" + err.message);
    }
    // var html_url = "https://www.sciencedirect.com/science/article/pii/" + document.URL.split("/")[5].split("-")[2]
    let ret = prompt('Type your filename and click confirm to download!', title);
    if (ret !== null && ret != '') {
        let filename = ret + '.pdf';
        download(url, filename);
    }
}


(function () {
    'use strict';
    if (GM_getValue('userDefinedBaseURL') == null) {
        GM_setValue('userDefinedBaseURL', defaultBaseURL)
    }
    var userDefinedBaseURL = GM_getValue('userDefinedBaseURL')
    GM_registerMenuCommand(`Customize your scihub address`, () => {
        userDefinedBaseURL = prompt("customize scihub address,e.g.>>" + defaultBaseURL, defaultBaseURL);
        if (userDefinedBaseURL) {
            GM_setValue('userDefinedBaseURL', userDefinedBaseURL);
            location.reload();
        }
    });
    var domain = document.domain;
    if (domain == 'www.sciencedirect.com') {
        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM加载完成.');
            let linkid = document.head.getElementsByTagName('meta')[0].content;
            let titile = document.title.replace(' - ScienceDirect', '');
            GM_setValue(linkid, titile);
            let access = document.querySelector("#mathjax-container > div.sticky-outer-wrapper > div > div.accessbar > ul > li:nth-child(1) > a").href.split('login')[1];
            let doi = document.getElementsByClassName('doi')[0].href.split('org')[1];
            GM_setValue('access', access);
            let types = 'download';
            let new_url = "https://www.sciencedirect.com/science/article/pii/" + linkid + "/pdfft?isDTMRedir=true"
            if (GM_getValue('access')) {
                userDefinedBaseURL = GM_getValue('userDefinedBaseURL');
                new_url = userDefinedBaseURL + doi;
                types = 'scihub'
            }
            let Container = document.createElement('div');
            let s = window.screen.width / 1920;
            let left = "250px";
            let top = "28px";
            if (s < 0.5) {
                left = (100 * s).toString() + "px";
                top = (18 + 10 / s).toString() + "px";
            }
            console.log(left);
            Container.id = "sp-ac-container";
            Container.style.position = "fixed";
            Container.style.left = left;
            Container.style.top = top;
            Container.style['z-index'] = "2";
            Container.innerHTML = `<button title="Click to download" class="button1" onclick="window.open('${new_url}')">${types}</button>
                                        <style>
                                        .button1 {
                                        -webkit-transition-duration: 0.4s;
                                        transition-duration: 0.4s;
                                        padding: 1.5px 6px;
                                        text-align: center;
                                        background-color: #f5f5f5;
                                        color: rgb(243, 109, 33);
                                        border: 0.5px rgb(134, 218, 209);
                                        border-radius: 9px;
                                        font-family: NexusSans,Arial,Helvetica,Lucida Sans Unicode,Microsoft Sans Serif,Segoe UI Symbol,STIXGeneral,Cambria Math,Arial Unicode MS,sans-serif!important;
                                        }
                                        .button1:hover {
                                        background-color: rgb(134, 218, 209);;;
                                        color: red;
                                        }
                                        </style>`;
            document.body.appendChild(Container);

        });
    }
    if (domain == 'scholar.cnki.net') {
        window.onload = function () {
            if (document.URL.includes('/Detail/index/')) {
                let doi2 = document.querySelector("#__next > div > div.detail_detail-main__11Hij > div.detail_content__3IojM > div.detail_content-left__2vUAX > div > div.detail_doc__20q8z > div:nth-child(1) > div.detail_doc-doi__VX6o2.detail_doc-item__2l-2B").textContent.replace('DOI: ', '')
                let new_url2 = userDefinedBaseURL + '/' + doi2
                console.log(userDefinedBaseURL)
                let Container2 = document.createElement('p');
                Container2.style.position = "fixed";
                Container2.id = "sp-ac-container";
                Container2.style.top = "120px";
                Container2.style['z-index'] = "2";
                Container2.innerHTML = `<button title="Click to download" class="button1" onclick="window.open('${new_url2}')">scihub</button>
                                            <style>
                                            .button1 {
                                            -webkit-transition-duration: 0.4s;
                                            -webkit-text-size-adjust: 100%;
                                            transition-duration: 0.4s;
                                            width:80px;
                                            height:50px;
                                            padding: 1.5px 6px;
                                            text-align: center;
                                            background-color: #506698;
                                            color: white;
                                            border: 0.5px rgb(134, 218, 209);
                                            border-radius: 8px;
                                            font-family: NexusSans,Arial,Helvetica,Lucida Sans Unicode,Microsoft Sans Serif,Segoe UI Symbol,STIXGeneral,Cambria Math,Arial Unicode MS,sans-serif!important;
                                            }
                                            .button1:hover {
                                            background-color: rgb(134, 218, 209);;;
                                            color: rgb(243, 109, 33);
                                            }
                                            </style>`;
                document.getElementsByClassName('detail_detail-main__11Hij')[0].append(Container2)
            }
        }
    }
    if (domain == 'pdf.sciencedirectassets.com') {
        pdf_scidirect()
    }
    if (domain == 'sci-hub.ee') {
        pdf_scihub_ee()
    }
})();
