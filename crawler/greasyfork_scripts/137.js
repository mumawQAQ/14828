// ==UserScript==
// @name         Pixiv Downloader
// @namespace    https://greasyfork.org/zh-CN/scripts/432150
// @version      0.7.3
// @description:en  Download the original images of Pixiv pages with one click. Supports：multiple illustrations, ugoira(animation), and batch downloads of artists' work. Ugoira support format conversion: Gif | Apng | Webp | Webm. The downloaded images will be saved in a separate folder named after the artist (you need to adjust the tampermonkey "Download" setting to "Browser API"). A record of downloaded images is kept.
// @description  一键下载Pixiv各页面原图。支持多图下载，动图下载，按作品标签下载，画师作品批量下载。动图支持格式转换：Gif | Apng | Webp | Webm。下载的图片将保存到以画师名命名的单独文件夹（需要调整tampermonkey“下载”设置为“浏览器API”）。保留已下载图片的记录。
// @description:zh-TW  一鍵下載Pixiv各頁面原圖。支持多圖下載，動圖下載，按作品標籤下載，畫師作品批次下載。動圖支持格式轉換：Gif | Apng | Webp | Webm。下載的圖片將保存到以畫師名命名的單獨文件夾（需要調整tampermonkey“下載”設置為“瀏覽器API”）。保留已下載圖片的紀錄。
// @author       ruaruarua
// @match        https://www.pixiv.net/*
// @icon         https://www.pixiv.net/favicon.ico
// @noframes
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      i.pximg.net
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js
// @require      https://greasyfork.org/scripts/455256-toanimatedwebp/code/toAnimatedWebp.js?version=1120088
// ==/UserScript==
(function () {
  'use strict';

  const style = `
@property --pdl-progress {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}
@keyframes pdl_loading {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
[data-theme="dark"] .pdl-btn-all::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23858585' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z'%3E%3C/path%3E %3C/svg%3E");
}
[data-theme="dark"] .pdl-btn-main,
[data-theme="dark"] .pdl-btn-all:hover::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23D6D6D6' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z'%3E%3C/path%3E %3C/svg%3E");
}
[data-theme="dark"] .pdl-stop::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23858585' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E %3C/svg%3E");
}
[data-theme="dark"] .pdl-stop:hover::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23D6D6D6' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E %3C/svg%3E");
}
[data-theme="dark"] .pdl-wrap input:not(:checked):hover {
  background-color: rgba(155, 155, 155);
}
[data-theme="dark"] .pdl-btn.pdl-tag{
  background-color: rgba(255, 255, 255, 0.4);
}
[data-theme="dark"] .pdl-btn.pdl-modal-tag {
  background-color: rgba(255, 255, 255, 0.4);
}
[data-theme="dark"] .pdl-btn.pdl-modal-tag:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
[data-theme="dark"] .pdl-wrap:hover,
[data-theme="dark"] .pdl-stop.pdl-stop:hover,
[data-theme="dark"] .pdl-btn-all.pdl-btn-all:hover {
  color: rgb(214, 214, 214);
}
[data-theme="dark"] .pdl-dialog {
  background-color: rgb(31, 31, 31);
}
[data-theme="dark"] .pdl-dialog-footer button {
  background-color: rgb(245, 245, 245);
}
.pdl-btn {
  position: relative;
  border-top-right-radius: 8px;
  background: no-repeat center/85%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%233C3C3C' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z'%3E%3C/path%3E %3C/svg%3E");
  color: #01b468;
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  border: none;
  text-decoration: none!important;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: 32px;
  z-index: 1;
  cursor: pointer;
}
.pdl-btn-main {
  margin: 0 0 0 10px;
}
.pdl-btn-sub {
  bottom: 0;
  background-color: rgba(255, 255, 255, .5);
  left: 0;
  position: absolute;
}
.pdl-btn-sub.artworks{
  position: sticky;
  top: 40px;
  border-radius: 4px;
}
.pdl-btn-sub.presentation{
  position: fixed;
  top: 50px;
  right: 16px;
  border-radius: 8px;
  left: auto;
}
.pdl-btn-sub-bookmark.pdl-btn-sub-bookmark {
  left: auto;
  right: 0;
  bottom: 34px;
  border-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.pdl-error.pdl-error {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23EA0000' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E %3C/svg%3E");
}
.pdl-complete.pdl-complete {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%2301B468' d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'%3E%3C/path%3E %3C/svg%3E");
}
.pdl-progress.pdl-progress {
  background-image: none;
  cursor: default;
}
.pdl-progress:after{
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 27px;
  height: 27px;
  transform: translate(-50%, -50%);
  -webkit-mask: radial-gradient(transparent, transparent 54%, #000 57%, #000);
  mask: radial-gradient(transparent, transparent 54%, #000 57%, #000);
  border-radius: 50%;
}
.pdl-progress:not(:empty):after {
  background: conic-gradient(#01B468 0, #01B468 var(--pdl-progress), transparent var(--pdl-progress), transparent);
  transition: --pdl-progress .2s ease;
}
.pdl-progress:empty:after {
  background: conic-gradient(#01B468 0, #01B468 25%, #01B46833 25%, #01B46833);
  animation: 1.5s infinite linear pdl_loading;
}
.pdl-nav-placeholder {
  flex-grow: 1;
  height: 42px;
  line-height: 42px;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  color: rgb(133, 133, 133);
  border-top: 4px solid transparent;
  cursor: default;
  white-space: nowrap;
}
.pdl-btn-all.pdl-btn-all,
.pdl-stop.pdl-stop {
  background-color: transparent;
  border: none;
  padding: 0 10px;
}
.pdl-btn-all.pdl-btn-all:hover,
.pdl-stop.pdl-stop:hover {
  color: rgb(31, 31, 31);
}
.pdl-btn-all::before,
.pdl-stop::before {
  content: '';
  height: 24px;
  width: 24px;
  transition: background-image 0.2s ease 0s;
  background: no-repeat center/85%;
}
.pdl-btn-all::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23858585' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z'%3E%3C/path%3E %3C/svg%3E");
}
.pdl-stop::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%23858585' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E %3C/svg%3E");
}
.pdl-btn-all:hover::before{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%231F1F1F' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z'%3E%3C/path%3E %3C/svg%3E");
}
.pdl-stop:hover::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath fill='%231F1F1F' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E %3C/svg%3E");
} 
.pdl-hide {
  display: none!important;
}
.pdl-wrap {
  text-align: right;
  padding-right: 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: rgb(133, 133, 133);
  transition: color 0.2s ease 0s;
}
.pdl-wrap:hover {
  color: rgb(31, 31, 31);
}
.pdl-wrap label {
  padding-left: 8px;
  cursor: pointer;
}
.pdl-wrap input {
  vertical-align: top;
  appearance: none;
  position: relative;
  box-sizing: border-box;
  width: 28px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 14px;
  height: 14px;
  background-color: rgba(133, 133, 133);
  transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s;
}
.pdl-wrap input:hover {
  background-color: rgba(31, 31, 31);
}
.pdl-wrap input::after {
  content: "";
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 10px;
  height: 10px;
  transform: translateX(0px);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  transition: transform 0.2s ease 0s;
}
.pdl-wrap input:checked {
  background-color: rgb(0, 150, 250);
}
.pdl-wrap input:checked::after {
  transform: translateX(14px);
}
.pdl-wrap-artworks {
  position: absolute;
  right: 8px;
  top: 0px;
  bottom: 0px;
  margin-top: 40px;
}
.pdl-modal * {
  font-family: 'win-bug-omega, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif';
  line-height: 1.15;
}
.pdl-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.32);
  user-select: none;
}
.pdl-dialog {
  position: relative;
  background-color: #fff;
  border-radius: 24px;
  margin: auto;
  padding: 20px 40px 30px 40px;
  max-width: 720px;
  min-width: 500px;
  font-size: 16px;
}
.pdl-dialog-header > h3 {
  font-weight: bold;
  font-size: 1.17em;
  margin: 1em 0;
}
.pdl-dialog p {
  margin: 1em 0px;
  overflow-wrap: break-word;
}
.pdl-dialog-close {
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 0;
  padding: 0;
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  transform: rotate(45deg);
  transition: 0.25s background-color;
  background: linear-gradient(rgb(125, 125, 125) 0%, rgb(125, 125, 125) 100%) center/18px 2px no-repeat,
    linear-gradient(rgb(125, 125, 125) 0%, rgb(125, 125, 125) 100%) center/2px 18px no-repeat;
}
.pdl-dialog-close:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.pdl-dialog-content {
  user-select: text;
}
.pdl-btn.pdl-tag {
  height: auto;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  left: -1px;
  background-color: rgba(0, 0, 0, 0.12);
  transition: background-image 0.5s;
}
.pdl-btn.pdl-tag.pdl-tag-hide,
.pdl-btn.pdl-modal-tag.pdl-tag-hide{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E  %3C/svg%3E");
  pointer-events: none;
}
.pdl-btn.pdl-modal-tag {
  position: absolute;
  right: 65px;
  top: 6px;
  background-origin: content-box;
  border-radius: 4px;
  padding: 5px;
  width: 42px;
  height: 50px;
  background-color: rgba(0,0,0,0.04);
  transition: .25s background-color;
}
.pdl-btn.pdl-modal-tag:not(.pdl-tag-hide):hover {
  background-color: rgba(0,0,0,0.12);
}
`;
  function addStyle() {
    const sty = document.createElement('style');
    sty.innerHTML = style;
    document.head.appendChild(sty);
  }

  function debugLog(...msgs) {
  }

  const defaultSettings = {
    version: "0.7.3",
    ugoriaFormat: "zip",
    folderPattern: "pixiv/{artist}",
    filenamePattern: "{artist}_{title}_{id}_p{page}",
    tagLang: "ja",
    showMsg: true,
    log: false,
  };
  const regexp = {
    artworksPage: /artworks\/(\d+)$/,
    userPage: /users\/(\d+)/,
    bookmarkPage: /users\/\d+\/bookmarks\/artworks/,
    userPageTags:
      /users\/\d+\/(artworks|illustrations|manga|bookmarks(?!artworks))/,
    ppSearchPage: /\/tags\/.*\/(artworks|illustrations|manga)/,
    suscribePage: /bookmark_new_illust/,
    activityHref: /illust_id=(\d+)/,
    originSrcPageNum: /(?<=_p)\d+/,
  };
  const artworkType = {
    ILLUSTS: 0,
    MANGA: 1,
    UGOIRA: 2,
  };
  const depsUrls = {
    gifWorker:
      "https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js",
    pako: "https://cdnjs.cloudflare.com/ajax/libs/pako/2.0.4/pako.min.js",
    upng: "https://cdnjs.cloudflare.com/ajax/libs/upng-js/2.1.0/UPNG.min.js",
  };
  const creditCode = `<img style="display: block; margin: 1em auto; width: 200px"
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAADzWSURBVHhe7Z0HnBRF9sdrMyxZoiCegKCCOZ3xzKcCgp56CoqKohj+6pmznBGMGM+cQDALBgwneuZ4nieGU5KKIoqAIrCEDf1/3zddQ29vd09P2oD++BQzW93TXV316uWqLvhZUCowv8P8+OOP5uOPPzY9evQwvXr1MoWFhe6RYDiOY2bPnm2+/vprs+WWW5p27dq5R37bWCEwNTU1K6WDfvNYvny5M2LECKd58+bOjjvu6Hz77bfukXB88803zuabb+60aNHCueqqq5xVq1a5R+JB+t79tmZBnms5U7IqQWdrHhYvXmymTZvm/hWNlStXmpkzZxohMOVCcK9UKCkpMT/88INZtmyZqa6uNgUFBe6RaHzxxRdm6dKl7l9rJKqieX0Txi+//GKGDh1qhKOYs846y1RVRc+fsrIy0759eyWOyspK2Ll7JBxrr722ef31182ECRPMyJEjTXFxsXskHOeee67p27ev+b//+79Y92iqWGMJCy4yb9481YNeeOGFlBwINbNbt26qV8G94g567969lYDXWmsttyYatIM2iWqLGuLWrnlYYwmrdevWyoHATz/9ZL777jv9HgYIqmPHjqaoqEg5FmIUAsg1xo4dax588EFz/fXXm/Lycrd2zUOTIiy4CDqNKMluTThatmxpNt54YxVPiMXvv/8+JaF07dpVCYvrw1nywVHatm1rDjvsMLU64+hk6G60Jc4zNyY0GcJCPI0ePdoMGjTIiAWmXCUKDNr+++9vNthgA7PeeuupmEs1kB06dFDCgqDgcg0tqrj/zTffbAYPHmzGjRuXUk9sVJDGL5OZ3OghHMfZZpttYDmO6DXOl19+6R4JhwyEI7PdmTNnjn5PhX/9619Oq1at9B4nn3yyuiDiQvrR/ZY7VFRUOMJFtT177723s2TJEvdI44b0xZImw7FQjvv166cc5auvvjJTp05VMREFzu3UqZPp3r27fk8FxJQ9LxXH4t633Xab2XrrrVVfSsVBM0GzZs3MlVdeaf70pz+Z4cOHm+bNm7tHmgCaCscC77//vtOmTRudwZtuuqkjg+8eiQYz/7PPPnNk8N2aYMyePdvp3LmzXn+PPfZwfv31V/dIXcyfP9/Zbrvt9Ny+ffsqV4xC3DYEAU4lhOz+1fjRpDiWtNdstdVWZt9999W/P/30UzNlyhT9ngrXXHON2XHHHdWHFAUh2mRYZtGiRZEcCwcnliOAy6XyYV133XXahlGjRrk18dGiRYuU4aVGh8bAscTaiz0jZ8yYoSEUabrqWmLxuUfCIaJEzxcCcObNm+fW1gXtsHrcH/7wh0iO+MUXXzg9evTQc//4xz86QojukbrgulZXEmPCrQ0HoaFrr73WkYngiBUcW3+jD9PRC/OFRsGx3nvvPXPUUUeZ++67L5aesv7665tjjjlGvwuRmXvuuUe/R0EGXj/Ri15++WX9HgS87zvttJN+h3NFcSFcHzhhgYjPSP1HjAJ1kwARsfoZhaefflq565gxY8xTTz0Vyy1BKOqGG25QVwb6Z4OjoTnWgQce6EjHafD3zTffdGuj8c477ziiaMfiFkBEpiNEo+eLEhzKHeEMIt6cCy+8UC3EKC767rvvOq1bt9ZrCqG7tcE47rjj9DzKs88+69YGg/tvttlmei5t5j5xMHPmTGejjTbSvtxnn30y0uVyhUbBsbB40FGYccOGDdMwTCrgm8IaYyb/73//M//+97/dI8HgfOl09XSjR4VxAOrx2F922WVm1113jeQUePJFIdfv1sMfBvxjOGy32GILs+2227q1wXj44YfNl19+qd+HDBlixEjR76lAG0jd6dmzp+qhcazgvKKhORbWkrDv5Iw++OCDI60xi0cffVR1LazEl156ya0NBj6s//znP8ot0tFZoiDErHqTEIxytygsXLjQefHFF9UqTKVL3nXXXcq9hRidV155Ja22LliwQP176HQNCThWAYQlM7NBg1b//e9/zX777adcoFWrVkaIxuy99956LIxr4IV+5plnVNfBw17fPh70tY8++kitVThFrjgEz/PEE08ohxswYECsjInGBumTpQ3OsZiRzOKLLrrIKSkpUa5Fot3PP//snpFbYOkxo9PhBL8jPcCxGlzHgiPhozn99NONKPJah2ed2GBcEGT+8MMPk7E0eTb99IPcKeJuf//732OnxdQnPvnkkzUnAbChOZYX0qnO3/72N+eBBx5QX04criImv3PEEUeolYjfB+4X9jtSj+WRndLSUmfatGlubV288MILzvHHH+98+umnbk1d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"
/>`;

  const handleWorker = `
let webpApi = {};
Module.onRuntimeInitialized = () => {
  webpApi = {
    init: Module.cwrap('init', '', ['number', 'number', 'number']),
    createBuffer: Module.cwrap('createBuffer', 'number', ['number']),
    addFrame: Module.cwrap('addFrame', 'number', ['number', 'number', 'number']),
    generate: Module.cwrap('generate', 'number', []),
    freeResult: Module.cwrap('freeResult', '', []),
    getResultPointer: Module.cwrap('getResultPointer', 'number', []),
    getResultSize: Module.cwrap('getResultSize', 'number', []),
  };

  postMessage('ok');
};

onmessage = (evt) => {
  const { dataURLs, delays, lossless = 1, quality = 75, method = 4} = evt.data;
  
  webpApi.init(lossless, quality, method);
  dataURLs.forEach((dataURL, idx) => {
    const base64 = dataURL.split(',')[1];
    const binStr = atob(base64);
    const u8a = new Uint8Array(binStr.length);
    let p = binStr.length;
    while (p) {
      p--;
      u8a[p] = binStr.codePointAt(p);
    }

    const pointer = webpApi.createBuffer(u8a.length);
    Module.HEAPU8.set(u8a, pointer);
    webpApi.addFrame(pointer, u8a.length, delays[idx]);
    postMessage(idx);
  });

  webpApi.generate();
  const resultPointer = webpApi.getResultPointer();
  const resultSize = webpApi.getResultSize();
  const result = new Uint8Array(Module.HEAP8.buffer, resultPointer, resultSize);
  postMessage(result);
  webpApi.freeResult();
};`;

  function initialDeps(urls) {
    return Promise.all([
      _getGifWS(urls.gifWorker),
      _getApngWS(urls.pako, urls.upng),
      _getWebpWS(),
    ]).then(([gif, apng, webp]) => {
      this._deps.gif = URL.createObjectURL(new Blob([gif], { type: 'text/javascript' }));
      this._deps.apng = URL.createObjectURL(new Blob([apng], { type: 'text/javascript' }));
      this._deps.webp = URL.createObjectURL(new Blob([webp], { type: 'text/javascript' }));
      return this;
    });
  }
  function _fetchDeps(url) {
    return fetch(url)
      .then((res) => {
        if (res.ok) return res.text();
        throw new Error(res.status + res.statusText);
      })
      .catch((err) => {
        console.log('[Pixiv Downloader]Fetch dependency failed.', url, err);
        return '';
      });
  }
  async function _getGifWS(url) {
    let gifWS;
    if (!(gifWS = await GM_getValue('gifWS'))) {
      gifWS = await _fetchDeps(url);
      if (!gifWS) throw new Error('[Pixiv Downloader]Can not fetch gif worker script.');
      GM_setValue('gifWS', gifWS);
    }
    return gifWS;
  }
  async function _getApngWS(pakoUrl, upngUrl) {
    let apngWS;
    if (!(apngWS = await GM_getValue('apngWS'))) {
      let pako = _fetchDeps(pakoUrl);
      let upng = _fetchDeps(upngUrl);
      pako = await pako;
      upng = await upng;
      if (!pako || !upng) throw new Error('[Pixiv Downloader]Can not fetch apng script.');
      upng = upng.replace('window.UPNG', 'UPNG').replace('window.pako', 'pako');
      const workerEvt = `onmessage = (evt) => {
      const {data, width, height, delay } = evt.data;
      const png = UPNG.encode(data, width, height, 0, delay, {loop: 0});
      if (!png) console.log('Convert Apng failed.');
      postMessage(png);
    };`;
      apngWS = workerEvt + pako + upng;
      GM_setValue('apngWS', apngWS);
    }
    return apngWS;
  }
  function _getWebpWS() {
    return workerChunk + handleWorker;
  }
  function _createImgElements(zip) {
    const eles = [];
    zip.forEach((relativePath, file) => {
      eles.push(
        new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            resolve(image);
          };
          file.async('blob').then((blob) => void (image.src = URL.createObjectURL(blob)));
        })
      );
    });
    return Promise.all(eles);
  }
  function createInstance() {
    const zip = new JSZip();
    const freeApngWorkers = [];
    const freeWebpWorkers = [];
    const MAX_CONVERT = 2;
    let queue = [];
    let active = [];
    let isStop = false;
    const convertTo = {
      webp: (frames, convertMeta) => {
        return new Promise((resolve, reject) => {
          let worker;
          let reuse = false;
          if (freeWebpWorkers.length) {
            worker = freeWebpWorkers.shift();
            reuse = true;
          } else {
            worker = new Worker(this._deps.webp);
          }
          convertMeta.abort = convertMeta._baseAbort.bind(null, () => {
            reject('[Info]Convert stop manually, reject when convert webp. ' + convertMeta.id);
            worker.terminate();
          });
          const workerLoad = new Promise((resolve) => {
            if (reuse) return resolve();
            worker.onmessage = (evt) => {
              if (evt.data === 'ok') {
                resolve();
              }
            };
          });
          let dataURLs = [];
          let canvas = document.createElement('canvas');
          const width = (canvas.width = frames[0].naturalWidth);
          const height = (canvas.height = frames[0].naturalHeight);
          const context = canvas.getContext('2d', { willReadFrequently: true });
          const delays = convertMeta.framesInfo.map((frameInfo) => {
            return Number(frameInfo.delay);
          });
          dataURLs = frames.map((frame, idx) => {
            if (convertMeta.isAborted)
              throw '[Info]Convert stop manually when converting image to webp. ' + convertMeta.id;
            context.clearRect(0, 0, width, height);
            context.drawImage(frame, 0, 0, width, height);
            const dataURL = canvas.toDataURL('image/webp', 1);
            if (typeof convertMeta.onProgress === 'function') {
              debugLog('[Info]Webp convert phrase 1:', convertMeta.id);
              convertMeta.onProgress((idx / frames.length) * 0.5, 'webp');
            }
            return dataURL;
          });
          workerLoad.then(() => {
            worker.onmessage = (evt) => {
              if (typeof evt.data !== 'object') {
                if (typeof convertMeta.onProgress === 'function') {
                  debugLog('[Info]Webp convert phrase 2:', convertMeta.id, evt.data);
                  convertMeta.onProgress(0.5 + (evt.data / frames.length) * 0.5, 'webp');
                }
              } else {
                freeWebpWorkers.push(worker);
                resolve(new Blob([evt.data], { type: 'image/webp' }));
              }
            };
            worker.postMessage({ dataURLs, delays });
          });
        });
      },
      gif: (frames, convertMeta) => {
        return new Promise((resolve, reject) => {
          let gif = new GIF({
            workers: 2,
            quality: 10,
            workerScript: this._deps.gif,
          });
          convertMeta.abort = convertMeta._baseAbort.bind(null, gif.abort.bind(gif));
          debugLog('[Info]Start convert:', convertMeta.id);
          frames.forEach((frame, i) => {
            gif.addFrame(frame, { delay: convertMeta.framesInfo[i].delay });
          });
          gif.on(
            'progress',
            (() => {
              const type = 'gif';
              return (progress) => {
                debugLog('[Info]Convert progress:', convertMeta.id);
                if (typeof convertMeta.onProgress === 'function')
                  convertMeta.onProgress(progress, type);
              };
            })()
          );
          gif.on('finished', (gifBlob) => {
            gif = null;
            resolve(gifBlob);
          });
          gif.on('abort', () => {
            gif = null;
            reject('[Info]Convert stop: abort. ' + convertMeta.id);
          });
          gif.render();
        });
      },
      png: (frames, convertMeta) => {
        return new Promise((resolve, reject) => {
          let canvas = document.createElement('canvas');
          const width = (canvas.width = frames[0].naturalWidth);
          const height = (canvas.height = frames[0].naturalHeight);
          const context = canvas.getContext('2d', { willReadFrequently: true });
          const data = [];
          const delay = convertMeta.framesInfo.map((frameInfo) => {
            return Number(frameInfo.delay);
          });
          frames.forEach((frame) => {
            if (convertMeta.isAborted)
              throw '[Info]Convert stop manually, reject when drawImage. ' + convertMeta.id;
            context.clearRect(0, 0, width, height);
            context.drawImage(frame, 0, 0, width, height);
            data.push(context.getImageData(0, 0, width, height).data);
          });
          canvas = null;
          debugLog('[Info]Start convert:', convertMeta.id);
          let worker;
          if (freeApngWorkers.length) {
            worker = freeApngWorkers.shift();
          } else {
            worker = new Worker(this._deps.apng);
          }
          convertMeta.abort = convertMeta._baseAbort.bind(null, () => {
            reject('[Info]Convert stop manually, reject when convert apng. ' + convertMeta.id);
            worker.terminate();
          });
          worker.onmessage = function (e) {
            freeApngWorkers.push(worker);
            if (!e.data) {
              return reject('[Error]apng data is null. ' + convertMeta.id);
            }
            const pngBlob = new Blob([e.data], { type: 'image/png' });
            resolve(pngBlob);
          };
          const cfg = { data, width, height, delay };
          worker.postMessage(cfg);
        });
      },
      webm: (frames, convertMeta) => {
        return new Promise((resolve, reject) => {
          let canvas = document.createElement('canvas');
          const width = (canvas.width = frames[0].naturalWidth);
          const height = (canvas.height = frames[0].naturalHeight);
          const context = canvas.getContext('2d');
          const stream = canvas.captureStream();
          const recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm',
            videoBitsPerSecond: 80000000,
          });
          const delay = convertMeta.framesInfo.map((frame) => {
            return Number(frame.delay);
          });
          let data = [];
          let frame = 0;
          const displayFrame = () => {
            context.clearRect(0, 0, width, height);
            context.drawImage(frames[frame], 0, 0);
            if (convertMeta.isAborted) {
              return recorder.stop();
            }
            setTimeout(() => {
              if (typeof convertMeta.onProgress === 'function')
                convertMeta.onProgress((frame + 1) / frames.length, 'webm');
              if (frame === frames.length - 1) {
                return recorder.stop();
              } else {
                frame++;
              }
              displayFrame();
            }, delay[frame]);
          };
          recorder.ondataavailable = (event) => {
            if (event.data && event.data.size) {
              data.push(event.data);
            }
          };
          recorder.onstop = () => {
            canvas = null;
            if (convertMeta.isAborted) {
              return reject(
                '[info]Convert stop manually, reject when convert webm.' + convertMeta.id
              );
            }
            resolve(new Blob(data, { type: 'video/webm' }));
          };
          displayFrame();
          recorder.start();
        });
      },
    };
    const convert = (convertMeta) => {
      const { id, data, convertResolve, convertReject } = convertMeta;
      let frames;
      active.push(convertMeta);
      if (typeof convertMeta.onProgress === 'function') convertMeta.onProgress(0, 'zip');
      zip
        .folder(id)
        .loadAsync(data)
        .then(_createImgElements)
        .then((imgEles) => {
          zip.remove(id);
          frames = imgEles;
          if (convertMeta.isAborted) throw '[Info]Convert stop manually, reject when unzip. ' + id;
          return convertTo[convertMeta.format](frames, convertMeta);
        })
        .then(convertResolve)
        .catch(convertReject)
        .finally(() => {
          frames.forEach((frame) => URL.revokeObjectURL(frame.src));
          frames = null;
          active.splice(active.indexOf(convertMeta), 1);
          if (queue.length) convert(queue.shift());
        });
    };
    return {
      add: (convertMeta) => {
        debugLog('[Info]Converter add', convertMeta.id);
        return new Promise((convertResolve, convertReject) => {
          convertMeta.isAborted = false;
          convertMeta.convertResolve = convertResolve;
          convertMeta.convertReject = convertReject;
          convertMeta._baseAbort = (callBack) => {
            if (typeof callBack === 'function') callBack();
            convertMeta.isAborted = true;
          };
          convertMeta.abort = convertMeta._baseAbort;
          queue.push(convertMeta);
          while (active.length < MAX_CONVERT && queue.length && !isStop) {
            convert(queue.shift());
          }
        });
      },
      del: (metas) => {
        if (!metas.length) return;
        isStop = true;
        active = active.filter((convertMeta) => {
          if (metas.find((meta) => meta.id === convertMeta.id)) {
            convertMeta.abort();
          } else {
            return true;
          }
        });
        queue = queue.filter((convertMeta) => !metas.find((meta) => meta.id === convertMeta.id));
        isStop = false;
        while (active.length < MAX_CONVERT && queue.length) {
          convert(queue.shift());
        }
      },
    };
  }
  const createConverter = {
    _deps: {
      gif: '',
      apng: '',
      webp: '',
    },
    initialDeps,
    createInstance,
  };

  function getSettings() {
    let settings;
    if (!localStorage.pdlSetting) {
      settings = defaultSettings;
      saveSettings(settings);
    } else {
      settings = JSON.parse(localStorage.pdlSetting);
      if (settings.version !== defaultSettings.version) {
        settings.version = defaultSettings.version;
        settings.showMsg = true;
        for (const key in defaultSettings) {
          if (!(key in settings)) {
            settings[key] = defaultSettings[key];
          }
        }
        saveSettings(settings);
      }
    }
    return settings;
  }
  function saveSettings(settingObj) {
    settingObj = settingObj || settings;
    localStorage.pdlSetting = JSON.stringify(settingObj);
  }
  function upgradeSettings(key, value) {
    if (key in settings) {
      if (settings[key] === value) return;
      settings[key] = value;
      saveSettings();
    }
  }
  const settings = getSettings();
  function setFormatFactory(format) {
    return () => {
      if (settings.ugoriaFormat !== format) {
        upgradeSettings('ugoriaFormat', format);
      }
    };
  }

  function sleep(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  function getSelfId() {
    return document.querySelector('#qualtrics_user-id')?.textContent;
  }
  const env = {
    isViolentmonkey: GM_info.scriptHandler === 'Violentmonkey',
    isBlobDlAvaliable: !(
      navigator.userAgent.includes('Firefox') &&
      GM_info.scriptHandler === 'Tampermonkey' &&
      parseFloat(GM_info.version) > 4.17
    ),
    isSupportSubpath: GM_info.downloadMode && GM_info.downloadMode === 'browser',
  };

  const _isNeedConvert = (meta) => {
    return meta.illustType === artworkType.UGOIRA && settings.ugoriaFormat !== 'zip';
  };
  const _saveWithoutSubpath = (blob, meta) => {
    const dlEle = document.createElement('a');
    dlEle.href = URL.createObjectURL(blob);
    dlEle.download = meta.path;
    dlEle.click();
    URL.revokeObjectURL(dlEle.href);
    meta.resolve(meta);
  };
  const _saveWithSubpath = (blob, meta) => {
    const imgUrl = URL.createObjectURL(blob);
    const request = {
      url: imgUrl,
      name: meta.path,
      onerror: (error) => {
        console.log('[pixiv downloader]Error when saving', meta.path);
        URL.revokeObjectURL(imgUrl);
        meta.reject && meta.reject(error);
      },
      onload: () => {
        if (typeof meta.onLoad === 'function') meta.onLoad();
        URL.revokeObjectURL(imgUrl);
        meta.resolve(meta);
      },
    };
    meta.abort = GM_download(request).abort;
  };
  function createDownloader(converter) {
    const MAX_DOWNLOAD = 5;
    const MAX_RETRY = 3;
    let isStop = false;
    let queue = [];
    let active = [];
    let save;
    if (env.isBlobDlAvaliable && env.isSupportSubpath) {
      save = _saveWithSubpath;
    } else {
      debugLog('[Info]scriptHandler:', GM_info.scriptHandler, GM_info.version);
      save = _saveWithoutSubpath;
    }
    const download = (meta) => {
      debugLog('[Info]Start download:', meta.path);
      active.push(meta);
      let abortObj;
      if ((!env.isBlobDlAvaliable || env.isViolentmonkey) && !_isNeedConvert(meta)) {
        abortObj = GM_download({
          url: meta.src,
          name: meta.path,
          headers: {
            referer: 'https://www.pixiv.net',
          },
          ontimeout: errHandler.bind(null, meta),
          onerror: errHandler.bind(null, meta),
          onload: () => {
            debugLog('[Info]Download complete', meta.path);
            if (typeof meta.onLoad === 'function') meta.onLoad();
            active.splice(active.indexOf(meta), 1);
            if (queue.length && !isStop) download(queue.shift());
            meta.resolve(meta);
          },
        });
      } else {
        const request = {
          url: meta.src,
          timeout: 20000,
          method: 'GET',
          headers: {
            referer: 'https://www.pixiv.net',
          },
          responseType: 'blob',
          ontimeout: errHandler.bind(null, meta),
          onprogress: (e) => {
            if (e.lengthComputable && typeof meta.onProgress === 'function') {
              meta.onProgress(e.loaded / e.total);
            }
          },
          onload: (e) => {
            debugLog('[Info]Download complete', meta.id);
            if (!meta.state) return debugLog('[Warning]But download was canceled.', meta.id);
            if (_isNeedConvert(meta)) {
              const convertMeta = {
                id: meta.id,
                data: e.response,
                format: settings.ugoriaFormat,
                framesInfo: meta.ugoiraMeta.frames,
                onProgress: meta.onProgress,
              };
              converter.add(convertMeta).then((blob) => {
                save(blob, meta);
              }, meta.reject);
            } else {
              save(e.response, meta);
            }
            active.splice(active.indexOf(meta), 1);
            if (queue.length && !isStop) download(queue.shift());
          },
          onerror: errHandler.bind(null, meta),
        };
        abortObj = GM_xmlhttpRequest(request);
      }
      meta.abort = () => {
        meta.state = 0;
        abortObj.abort();
        meta.reject('[Warning]xhr abort manually. ' + meta.id);
      };
    };
    const add = (metas) => {
      if (metas.length < 1) return;
      const promises = [];
      metas.forEach((meta) => {
        promises.push(
          new Promise((resolve, reject) => {
            meta.state = 1;
            meta.resolve = resolve;
            meta.reject = reject;
          })
        );
      });
      queue = queue.concat(metas);
      while (active.length < MAX_DOWNLOAD && queue.length && !isStop) {
        download(queue.shift());
      }
      return Promise.all(promises);
    };
    const del = (metas) => {
      if (!metas.length) return;
      isStop = true;
      active = active.filter((meta) => {
        if (metas.includes(meta)) {
          meta.abort();
        } else {
          return true;
        }
      });
      queue = queue.filter((meta) => !metas.includes(meta));
      isStop = false;
      while (active.length < MAX_DOWNLOAD && queue.length) {
        download(queue.shift());
      }
    };
    const errHandler = (meta) => {
      debugLog('[Error]xmlhttpRequest timeout:', meta.src);
      if (!meta.retries) {
        meta.retries = 1;
      } else {
        meta.retries++;
      }
      if (meta.retries > MAX_RETRY) {
        meta.reject('[Error]xmlhttpRequest failed: ' + meta.src);
        console.log('[pixiv downloader]Network error:', meta.path, meta.src);
        active.splice(active.indexOf(meta), 1);
        if (queue.length && !isStop) download(queue.shift());
      } else {
        debugLog('[Warning]retry xhr:', meta.retries, meta.src);
        download(meta);
      }
    };
    return {
      add: add,
      del: del,
    };
  }

  function createParser() {
    const replaceInvalidChar = (string) => {
      if (!string) return;
      const temp = document.createElement('div');
      temp.innerHTML = string;
      return temp.textContent
        .trim()
        .replace(/^\.|\.$/g, '')
        .replace(/[\u200b-\u200f\uFEFF\u202a-\u202e\\/:*?|]/g, '')
        .replace(/"/g, "'")
        .replace(/</g, '﹤')
        .replace(/>/g, '﹥');
    };
    const getFilePath = ({ user, userId, title, tags, illustId, page, ext }) => {
      const path =
        settings.folderPattern && env.isSupportSubpath
          ? settings.folderPattern + '/' + settings.filenamePattern
          : settings.filenamePattern;
      return (
        path
          .replaceAll('{artist}', user)
          .replaceAll('{artistID}', userId)
          .replaceAll('{title}', title)
          .replaceAll('{tags}', tags)
          .replaceAll('{page}', page)
          .replaceAll('{id}', illustId) + ext
      );
    };
    const makeTagsStr = (prev, cur, index, tagsArr) => {
      const tag = settings.tagLang === 'jp' ? cur.tag : cur.translation?.['en'] || cur.tag;
      if (index < tagsArr.length - 1) {
        return prev + tag + '_';
      } else {
        return prev + tag;
      }
    };
    const getData = async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('[Error]fail to fetch:' + url + ', code:' + res.status);
      const data = await res.json();
      if (data.error) throw new Error('[Error]json return error.' + data.message);
      return data;
    };
    const fetchJson = async (url) => {
      let json;
      let retry = 0;
      do {
        try {
          debugLog('[Info]fetch url:', url);
          json = await getData(url);
        } catch (error) {
          retry++;
          if (retry === 3) throw error;
          sleep(3000);
        }
      } while (!json);
      return json;
    };
    const parseByIllust = async (illustId) => {
      let params = '';
      if (settings.tagLang !== 'jp') params = '?lang=' + settings.tagLang;
      const res = await fetch('https://www.pixiv.net/artworks/' + illustId + params);
      if (!res.ok) throw new Error(res.status);
      const htmlText = await res.text();
      const matchText = htmlText.match(/"meta-preload-data" content='(.*)'>/);
      if (!matchText) throw new Error('[Error]Fail to parse preload data.');
      const preloadData = JSON.parse(htmlText.match(/"meta-preload-data" content='(.*)'>/)[1]);
      const illustInfo = preloadData.illust[illustId];
      const user = replaceInvalidChar(illustInfo.userName) || 'userId-' + illustInfo.userId;
      const title = replaceInvalidChar(illustInfo.illustTitle) || 'illustId-' + illustInfo.illustId;
      const tags = replaceInvalidChar(illustInfo.tags.tags.reduce(makeTagsStr, ''));
      const illustType = illustInfo.illustType;
      let metas = [];
      const pathInfo = {
        user,
        title,
        tags,
        illustId,
        userId: illustInfo.userId,
        ext: '',
        page: 0,
      };
      if (illustType === artworkType.ILLUSTS || illustType === artworkType.MANGA) {
        const firstImgSrc = illustInfo.urls.original;
        const srcPrefix = firstImgSrc.slice(0, firstImgSrc.indexOf('_') + 2);
        const srcSuffix = firstImgSrc.slice(-4);
        pathInfo.ext = srcSuffix;
        for (let i = 0; i < illustInfo.pageCount; i++) {
          pathInfo.page = i;
          metas.push({
            id: illustId,
            illustType: illustType,
            path: getFilePath(pathInfo),
            src: srcPrefix + i + srcSuffix,
          });
        }
      }
      if (illustType === artworkType.UGOIRA) {
        const ugoira = await fetchJson(
          'https://www.pixiv.net/ajax/illust/' + illustId + '/ugoira_meta'
        );
        pathInfo.ext = '.' + settings.ugoriaFormat;
        metas.push({
          id: illustId,
          illustType: illustType,
          path: getFilePath(pathInfo),
          src: ugoira.body.originalSrc,
          ugoiraMeta: ugoira.body,
        });
      }
      return metas;
    };
    function _filterBookmarks(works) {
      const unavaliable = [];
      function filterFn(work) {
        if (work.isBookmarkable) {
          return true;
        } else {
          unavaliable.push(work.id);
        }
      }
      const avaliable = works.filter(filterFn).map((work) => work.id);
      return { avaliable, unavaliable };
    }
    async function* generateIds(userId, category, tag = '', rest = 'show') {
      let requestUrl;
      if (tag || category === 'bookmarks') {
        const OFFSET = 48;
        if (category !== 'bookmarks') {
          requestUrl = `https://www.pixiv.net/ajax/user/${userId}/${category}/tag?tag=${tag}&offset=0&limit=${OFFSET}&lang=ja`;
        } else {
          requestUrl = `https://www.pixiv.net/ajax/user/${userId}/illusts/bookmarks?tag=${tag}&offset=0&limit=${OFFSET}&rest=${rest}&lang=ja`;
        }
        let head = 0;
        const firstPageData = await fetchJson(requestUrl);
        const total = firstPageData.body.total;
        yield total;
        yield _filterBookmarks(firstPageData.body.works);
        head += OFFSET;
        while (head < total) {
          const data = await fetchJson(requestUrl.replace('offset=0', 'offset=' + head));
          head += OFFSET;
          await sleep(3000);
          yield _filterBookmarks(data.body.works);
        }
      } else {
        requestUrl = 'https://www.pixiv.net/ajax/user/' + userId + '/profile/all';
        const profile = await fetchJson(requestUrl);
        let illustIds;
        if (category !== 'both') {
          illustIds = Reflect.ownKeys(profile.body[category]);
        } else {
          illustIds = Reflect.ownKeys(profile.body.illusts).concat(
            Reflect.ownKeys(profile.body.manga)
          );
        }
        yield illustIds.length;
        yield { avaliable: illustIds, unavaliable: [] };
      }
    }
    return {
      id: parseByIllust,
      generateIds,
    };
  }

  let converter;
  let downloader;
  let parser;
  async function initial() {
    converter = await createConverter
      .initialDeps(depsUrls)
      .then((createConverter) => createConverter.createInstance());
    parser = createParser();
    downloader = createDownloader(converter);
  }

  const lang =
    document.documentElement.getAttribute("lang").toLowerCase() || "en";
  const i18nLib = {
    en: {
      illusts: "Illusts",
      manga: "Manga",
      illusts_manga: "Illusts & Manga",
      bookmarks: "Bookmarks",
      bookmarks_public: "Public",
      bookmarks_private: "Private",
      exclude_downloaded: "Exclude downloaded",
      stop: "Stop",
      edit_filename: "Edit filename",
      clear_history: "Clear history",
      clear_history_tips: "Do you really want to clear history?",
      feedback: "Feedback",
      modal_cancel: "Cancel",
      modal_confirm: "OK",
      tags_lang: "Tags language: ",
      tags_tips: "{artist}, {artistID}, {title}, {id}, {page}, {tags}",
      tags_tips2:
        'Note: Tags language may not be the language you selected, <a href="https://crowdin.com/project/pixiv-tags" target="_blank">some tags without translations</a> may still be in other languages.',
      folder: "Folder:",
      folder_tips: "I don't need subfolder",
      folder_tips2:
        "If you don't need a subfolder, just leave the folder name blank",
      folder_vm_tips: "VM doesn't support",
      folder_api_tips: "Need Browser Api",
      filename: "FileName:",
      filename_tips: "Your Name?",
    },
    "zh-cn": {
      illusts: "插画",
      manga: "漫画",
      illusts_manga: "插画 & 漫画",
      bookmarks: "收藏",
      bookmarks_public: "公开",
      bookmarks_private: "不公开",
      exclude_downloaded: "排除已下载图片",
      stop: "停止",
      edit_filename: "编辑文件名",
      clear_history: "清除下载历史",
      clear_history_tips: "真的要清除历史吗？",
      feedback: "有问题or想建议？这里反馈",
      modal_cancel: "取消",
      modal_confirm: "确认",
      tags_lang: "标签语言：",
      tags_tips:
        "{artist}:作者, {artistID}:作者ID, {title}:作品标题, {id}:作品pixiv ID, {page}:页码, {tags}:作品标签。",
      tags_tips2:
        '请注意：标签翻译不一定是你选择的语言，部分<a href="https://crowdin.com/project/pixiv-tags" target="_blank">无对应语言翻译的标签</a>仍可能是其他语言。',
      folder: "文件夹名：",
      folder_tips: "我不想保存到子文件夹",
      folder_tips2: "如果不想保存到画师目录，文件夹名留空即可。",
      folder_vm_tips: "Violentmonkey不支持",
      folder_api_tips: "需要Browser Api",
      filename: "文件名：",
      filename_tips: "你的名字？",
    },
  };
  i18nLib.en = Object.create(
    i18nLib["zh-cn"],
    Object.getOwnPropertyDescriptors(i18nLib.en)
  );
  i18nLib.ja = Object.create(i18nLib.en);
  i18nLib.ko = Object.create(i18nLib.en);
  i18nLib["zh-tw"] = Object.create(i18nLib["zh-cn"]);
  i18nLib.zh = i18nLib["zh-cn"];
  const i18n = (key) =>
    i18nLib[lang]?.[key] || `i18n[${lang}][${key}] not found`;
  const modalHtml = {
    upgradeMsgTitle: `<h3>Pixiv Downloader ${defaultSettings.version}</h3>`,
    upgradeMsgContent: `<p>增加导出 / 导入下载记录的功能。</p>`,
    modalCreditFooter: `<style>.pdl-dialog-footer {
    position: relative;
    font-size: 12px;
  }</style><details style="margin-top: 1.5em;">
  <summary style="display: inline-block; list-style: none; cursor: pointer; color: rgb(0, 0, 238); text-decoration: underline">脚本还行？请我喝杯可乐吧！</summary>
  ${creditCode}
  <p style="text-align: center">愿你每天都能找到对的色图，就像我每天都能喝到香草味可乐</p>
</details>`,
    modalFeedback: `<a target="_blank" style="position: absolute; right: 0px; top: 0px; color: rgb(0, 0, 238); text-decoration: underline" href="https://greasyfork.org/zh-CN/scripts/432150-pixiv-downloader/feedback">${i18n(
    "feedback"
  )}</a>`,
    filePathSettingTitle: `<h3>${i18n("edit_filename")}</h3>`,
    filePathSettingContent: `<style>.pdl-dialog-content input[type="text"] {height: auto; padding: 0.5em; line-height: 1.5; margin: 0.6em 0 0.3em 0; font-size: 16px;}.pdl-dialog-content a{color: rgb(0, 0, 238); text-decoration: underline;} .tags-option label,.tags-option input {cursor: pointer;}</style><div style="display: flex; gap: 20px; justify-content: space-between;">
  <div>
    <label style="display: block; cursor: default;" for="pdlfolder">${i18n(
      "folder"
    )}</label>
    <input type="text" id="pdlfolder" style="width: 200px;" maxlength='100'>
  </div>
  <div>
    <label style="display: block; cursor: default;" for="pdlfilename">${i18n(
      "filename"
    )}</label>
    <input type="text" id="pdlfilename" style="width: 300px;" placeholder="${i18n(
      "filename_tips"
    )}" required maxlength='100'>
  </div>
</div>
<div class="tags-option" style="margin: 0.7em 0;">
  <span>${i18n("tags_lang")}</span>
  <input type="radio" name="lang" id="lang_ja" value="ja"/>
  <label for="lang_ja">日本語(default)</label>
  <input type="radio" name="lang" id="lang_zh" value="zh" />
  <label for="lang_zh">简中</label>
  <input type="radio" name="lang" id="lang_zh_tw" value="zh_tw" />
  <label for="lang_zh_tw">繁中</label>
  <input type="radio" name="lang" id="lang_en" value="en" />
  <label for="lang_en">English</label>
</div>
<p style="font-size: 14px; margin: 0.5em 0">
  ${i18n("tags_tips")}
</p>
<p style="font-size: 14px; margin: 0.5em 0">${i18n("folder_tips2")}</p>
<p style="font-size: 14px; margin: 0.5em 0">${i18n("tags_tips2")}</p>
</div>`,
    modalOperationBar: `<style>
  .pdl-dialog-footer button {
    font-size: 16px;
    background-color: transparent;
    border: 1px solid;
    color: rgb(125,125,125);
    border-radius: 5px;
    padding: 0.5em 1.5em;
    cursor: pointer;
    transition: .2s opacity;
    line-height: 1.15;
  }
  .pdl-dialog-footer button:hover{
    opacity: 0.7;
  }
</style>
<div style="display: flex; justify-content: flex-end; margin-top: 1.5em; gap: 1.5em;">
  <button id="pdlcancel">${i18n(
    "modal_cancel"
  )}</button><button id="pdlconfirm" style="border-color: #01b468; background-color: #01b468; color: #fff;">${i18n(
    "modal_confirm"
  )}</button></div>`,
  };

  function add(pixivId) {
    this._records.add(pixivId);
    localStorage.setItem(`pdlTemp-${pixivId}`, "");
  }
  function has(pixivId) {
    return this._records.has(pixivId);
  }
  function getHistory() {
    const storage = localStorage.pixivDownloader || "[]";
    return new Set(JSON.parse(storage));
  }
  function updateHistory() {
    Object.keys(localStorage).forEach((key) => {
      const matchResult = /pdlTemp-(\d+)/.exec(key);
      if (matchResult) {
        this._records.add(matchResult[1]);
        localStorage.removeItem(matchResult[0]);
      }
    });
    this.saveHistory();
  }
  function clearHistory() {
    const isConfirm = confirm(i18n("clear_history_tips"));
    if (!isConfirm) return;
    this.updateHistory();
    this._records = new Set();
    localStorage.pixivDownloader = "[]";
  }
  function saveHistory(historyArr) {
    if (historyArr instanceof Array) {
      localStorage.pixivDownloader = JSON.stringify(historyArr);
    } else {
      localStorage.pixivDownloader = JSON.stringify([...this._records]);
    }
  }
  const pixivHistory = {
    _records: getHistory(),
    add,
    has,
    updateHistory,
    saveHistory,
    clearHistory,
  };

  function handleDownload(pdlBtn, illustId) {
    let pageCount,
      pageComplete = 0;
    const onProgress = (progress = 0, type = null) => {
      if (pageCount > 1) return;
      progress = Math.floor(progress * 100);
      switch (type) {
        case null:
          pdlBtn.style.setProperty('--pdl-progress', progress + '%');
        case 'gif':
        case 'webm':
        case 'webp':
          pdlBtn.textContent = progress;
          break;
        case 'zip':
          pdlBtn.textContent = '';
          break;
      }
    };
    const onLoad = function () {
      if (pageCount < 2) return;
      const progress = Math.floor((++pageComplete / pageCount) * 100);
      pdlBtn.textContent = progress;
      pdlBtn.style.setProperty('--pdl-progress', progress + '%');
    };
    pdlBtn.classList.add('pdl-progress');
    parser
      .id(illustId)
      .then((metas) => {
        let shouldDownloadPage;
        if ((shouldDownloadPage = pdlBtn.getAttribute('should-download'))) {
          metas = [metas[shouldDownloadPage]];
        }
        pageCount = metas.length;
        metas.forEach((meta) => {
          meta.onProgress = onProgress;
          meta.onLoad = onLoad;
        });
        return downloader.add(metas);
      })
      .then(() => {
        pixivHistory.add(illustId);
        pdlBtn.classList.remove('pdl-error');
        pdlBtn.classList.add('pdl-complete');
      })
      .catch((err) => {
        if (err) console.log(err);
        pdlBtn.classList.remove('pdl-complete');
        pdlBtn.classList.add('pdl-error');
      })
      .finally(() => {
        pdlBtn.innerHTML = '';
        pdlBtn.style.removeProperty('--pdl-progress');
        pdlBtn.classList.remove('pdl-progress');
      });
  }
  function changeDlbarDisplay() {
    document.querySelectorAll('nav [pdl-userid]').forEach((ele) => {
      ele.classList.toggle('pdl-hide');
    });
    document.querySelectorAll('section [pdl-userid]').forEach((ele) => {
      ele.classList.toggle('pdl-tag-hide');
    });
  }
  let isDownloading = false;
  let dlBarRef = {};
  async function downloadByIds(idsGenerators, abortBtn, isExcludeDled, updataStatus, onProgressCB) {
    if (!(idsGenerators instanceof Array)) idsGenerators = [idsGenerators];
    let resolve;
    const done = new Promise((r) => {
      resolve = r;
    });
    const abort = (msg) => {
      resolve();
      return Promise.reject(msg);
    };
    let total = 0,
      completed = 0,
      failed = [],
      unavaliable = [];
    let isCanceled = false;
    let metasRecord = [];
    let tooManyRequests = false;
    if (isExcludeDled) pixivHistory.updateHistory();
    abortBtn.onclick = () => {
      isCanceled = true;
      abortBtn.onclick = null;
      if (metasRecord.length) {
        downloader.del(metasRecord);
        converter.del(metasRecord);
        metasRecord = [];
      }
    };
    const afterEach = (illustId) => {
      onProgressCB({
        illustId,
        total,
        completed,
      });
      if (completed === total - failed.length - unavaliable.length) {
        resolve({ failed, unavaliable });
      }
    };
    total = await idsGenerators.reduce(async (prev, cur, index) => {
      const count = (await cur.next()).value;
      return (await prev) + count;
    }, 0);
    if (total === 0) {
      resolve();
      throw 'No Works.';
    }
    updataStatus('Downloading...');
    try {
      for (const idsGenerator of idsGenerators) {
        if (isCanceled) return abort(`Stopped. ${completed} / ${total}`);
        for await (const ids of idsGenerator) {
          debugLog('[Info]ids:', ids);
          if (isCanceled) return done;
          if (ids.unavaliable.length) {
            unavaliable.push(...ids.unavaliable);
            debugLog('[Info]unavaliable ids:', unavaliable.length);
          }
          for (const id of ids.avaliable) {
            if (isCanceled) return abort(`Stopped. ${completed} / ${total}`);
            if (isExcludeDled && pixivHistory.has(id)) {
              total--;
              afterEach(id);
              continue;
            }
            if (tooManyRequests) {
              updataStatus('Too many requests, wait 30s');
              console.log('[Pixiv Downloader]Too many requests, wait 30s');
              await sleep(30000);
              tooManyRequests = false;
              updataStatus('Downloading...');
            }
            parser
              .id(id)
              .then((metas) => {
                if (isCanceled) {
                  throw '[Warning]Download stop manually: ' + metas[0].id;
                }
                metasRecord = metasRecord.concat(metas);
                return downloader.add(metas);
              })
              .then(
                (metas) => {
                  pixivHistory.add(id);
                  if (!isCanceled) {
                    metasRecord = metasRecord.filter((meta) => !metas.includes(meta));
                    completed++;
                    afterEach(id);
                  }
                },
                (reason) => {
                  if (!isCanceled) {
                    if (reason.message && reason.message === '429') tooManyRequests = true;
                    if (reason.message && reason.message === '[Error]Fail to parse preload data.') {
                      unavaliable.push(id);
                    } else {
                      failed.push(id);
                    }
                    afterEach(id);
                  }
                }
              );
            await sleep(600);
          }
        }
      }
    } catch (error) {
      console.error(error);
      return abort('Error, see console.');
    }
    return done;
  }
  function downloadWorks(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (isDownloading) return;
    const btn = evt.target;
    const userId = btn.getAttribute('pdl-userid');
    const category = btn.getAttribute('category');
    const tag = btn.getAttribute('tag') || undefined;
    const rest = btn.getAttribute('rest') || undefined;
    const isExcludeDled = dlBarRef.filter.checked;
    function updataStatus(str) {
      dlBarRef.statusBar.textContent = str;
    }
    function onProgressCB({ illustId, total, completed }) {
      updataStatus(`Downloading: ${completed} / ${total}`);
    }
    let idsGenerators;
    if (category === 'bookmarks' && rest === 'all') {
      const idsShow = parser.generateIds(userId, category, tag, 'show');
      const idsHide = parser.generateIds(userId, category, tag, 'hide');
      idsGenerators = [idsShow, idsHide];
    } else {
      idsGenerators = parser.generateIds(userId, category, tag, rest);
    }
    function download(idsGenerators) {
      isDownloading = true;
      changeDlbarDisplay();
      return downloadByIds(
        idsGenerators,
        dlBarRef.abortBtn,
        isExcludeDled,
        updataStatus,
        onProgressCB
      )
        .then(
          ({ failed, unavaliable }) => {
            if (failed.length || unavaliable.length) {
              updataStatus(`Failed: ${failed.length + unavaliable.length}. See console.`);
              console.log('[Pixiv Downloader]Failed: ', failed.join(', '));
              console.log('[Pixiv Downloader]Unavaliable: ', unavaliable.join(', '));
              if (failed.length) return failed;
            } else {
              updataStatus('Complete');
            }
          },
          (reason) => {
            if (reason) updataStatus(reason);
          }
        )
        .finally((failed) => {
          changeDlbarDisplay();
          isDownloading = false;
          return failed;
        });
    }
    download(idsGenerators).then((failed) => {
      if (failed instanceof Array) {
        const idsGenerator = [failed.length, { avaliable: failed, unavaliable: [] }][
          Symbol.iterator
        ]();
        download(idsGenerator);
      }
    });
  }

  function createModal(
    { header, content, footer = "" },
    option = { closeOnClickModal: true }
  ) {
    const modal = document.createElement("div");
    const dialog = document.createElement("div");
    modal.classList.add("pdl-modal");
    dialog.classList.add("pdl-dialog");
    if (option.closeOnClickModal) {
      dialog.onclick = (e) => {
        e.stopPropagation();
      };
      modal.onclick = () => {
        modal.remove();
      };
    }
    dialog.innerHTML = `  <header class="pdl-dialog-header">${header}</header>
  <div class="pdl-dialog-content">${content}</div>
  <footer class="pdl-dialog-footer">${footer}</footer>`;
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("pdl-dialog-close");
    closeBtn.onclick = () => {
      modal.remove();
    };
    dialog.insertBefore(closeBtn, dialog.firstChild);
    modal.appendChild(dialog);
    return modal;
  }
  function showUpgradeMsg() {
    document.body.appendChild(
      createModal({
        header: modalHtml.upgradeMsgTitle,
        content: modalHtml.upgradeMsgContent,
        footer: modalHtml.modalCreditFooter + modalHtml.modalFeedback,
      })
    );
  }
  function showFilePathSetting() {
    if (document.querySelector("#pdlfolder")) return;
    const modal = createModal(
      {
        header: modalHtml.filePathSettingTitle,
        content: modalHtml.filePathSettingContent,
        footer: modalHtml.modalOperationBar,
      },
      { closeOnClickModal: false }
    );
    const folder = modal.querySelector("#pdlfolder");
    const filename = modal.querySelector("#pdlfilename");
    modal.querySelector("#pdlcancel").onclick = () => {
      modal.remove();
    };
    modal.querySelector("#pdlconfirm").onclick = () => {
      if (filename.value === "") return;
      const folderPattern = folder.value
        .split("/")
        .map((path) =>
          path
            .trim()
            .replace(/^\.+|\.+$|[\u200b-\u200f\uFEFF\u202a-\u202e\\:*?"|<>]/g, "")
        )
        .filter((path) => !!path)
        .join("/");
      const filenamePattern = filename.value
        .trim()
        .replace(/^\.+|[\u200b-\u200f\uFEFF\u202a-\u202e\\/:*?"|<>]/g, "");
      if (filenamePattern === "") return;
      upgradeSettings(
        "tagLang",
        modal.querySelector(".tags-option [name='lang']:checked").value
      );
      upgradeSettings("folderPattern", folderPattern);
      upgradeSettings("filenamePattern", filenamePattern);
      modal.remove();
    };
    modal.querySelector(
      `.tags-option [value="${settings.tagLang}"]`
    ).checked = true;
    filename.value = settings.filenamePattern;
    folder.value = !env.isSupportSubpath
      ? folder.setAttribute("disabled", "") || ""
      : settings.folderPattern;
    folder.placeholder = env.isViolentmonkey
      ? i18n("folder_vm_tips")
      : !env.isSupportSubpath
      ? i18n("folder_api_tips")
      : i18n("folder_tips");
    document.body.appendChild(modal);
  }
  function getIllustId(node) {
    const isLinkToArtworksPage = regexp.artworksPage.exec(node.href);
    if (isLinkToArtworksPage) {
      if (
        node.getAttribute("data-gtm-value") ||
        node.classList.contains("gtm-illust-recommend-node-node") ||
        node.classList.contains("gtm-discover-user-recommend-node") ||
        node.classList.contains("work")
      ) {
        return isLinkToArtworksPage[1];
      }
    } else {
      const isActivityThumb = regexp.activityHref.exec(node.href);
      if (isActivityThumb && node.classList.contains("work")) {
        return isActivityThumb[1];
      }
    }
    return "";
  }
  function createPdlBtn(
    attributes,
    textContent = "",
    { addEvent } = { addEvent: true }
  ) {
    const ele = document.createElement("button");
    ele.textContent = textContent;
    if (!attributes) return ele;
    const { attrs, classList } = attributes;
    if (classList && classList.length > 0) {
      for (const cla of classList) {
        ele.classList.add(cla);
      }
    }
    if (attrs) {
      for (const key in attrs) {
        ele.setAttribute(key, attrs[key]);
      }
    }
    if (addEvent) {
      ele.addEventListener("click", (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        const ele = evt.currentTarget;
        if (!evt.currentTarget.classList.contains("pdl-progress")) {
          handleDownload(ele, ele.getAttribute("pdl-id"));
        }
      });
    }
    return ele;
  }
  function createMainBtn(id) {
    if (document.querySelector(".pdl-btn-main")) return;
    const handleBar = document.querySelector("main section section");
    if (handleBar) {
      const pdlBtnWrap = handleBar.lastElementChild.cloneNode();
      const attrs = {
        attrs: { "pdl-id": id },
        classList: ["pdl-btn", "pdl-btn-main"],
      };
      if (pixivHistory.has(id)) attrs.classList.push("pdl-complete");
      pdlBtnWrap.appendChild(createPdlBtn(attrs));
      handleBar.appendChild(pdlBtnWrap);
    }
  }
  function createDownloadBar(userId) {
    const nav = document.querySelector("nav");
    if (!nav || document.querySelector(".pdl-nav-placeholder")) return;
    const fragment = document.createDocumentFragment();
    const placeholder = document.createElement("div");
    placeholder.classList.add("pdl-nav-placeholder");
    dlBarRef.statusBar = fragment.appendChild(placeholder);
    const baseClasses = nav.querySelector("a:not([aria-current])").classList;
    dlBarRef.abortBtn = fragment.appendChild(
      createPdlBtn(
        {
          attrs: { "pdl-userId": userId },
          classList: [...baseClasses, "pdl-stop", "pdl-hide"],
        },
        i18n("stop"),
        { addEvent: false }
      )
    );
    if (userId !== getSelfId()) {
      if (
        nav.querySelector("a[href$='illustrations']") &&
        nav.querySelector("a[href$='manga']")
      ) {
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userId": userId, category: "both" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("illusts_manga"),
            { addEvent: false }
          )
        );
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "illusts" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("illusts"),
            { addEvent: false }
          )
        );
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "manga" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("manga"),
            { addEvent: false }
          )
        );
      } else if (nav.querySelector("a[href$='illustrations']")) {
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "illusts" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("illusts"),
            { addEvent: false }
          )
        );
      } else if (nav.querySelector("a[href$='manga']")) {
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "manga" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("manga"),
            { addEvent: false }
          )
        );
      }
      if (nav.querySelector("a[href*='bookmarks']")) {
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "bookmarks" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("bookmarks"),
            { addEvent: false }
          )
        );
      }
    } else {
      if (nav.querySelector("a[href*='bookmarks']")) {
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: { "pdl-userid": userId, category: "bookmarks", rest: "all" },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("bookmarks"),
            { addEvent: false }
          )
        );
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: {
                "pdl-userid": userId,
                category: "bookmarks",
                rest: "show",
              },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("bookmarks_public"),
            { addEvent: false }
          )
        );
        fragment.appendChild(
          createPdlBtn(
            {
              attrs: {
                "pdl-userid": userId,
                category: "bookmarks",
                rest: "hide",
              },
              classList: [...baseClasses, "pdl-btn-all"],
            },
            i18n("bookmarks_private"),
            { addEvent: false }
          )
        );
      }
    }
    fragment.querySelectorAll(".pdl-btn-all").forEach((node) => {
      node.addEventListener("click", downloadWorks);
    });
    const wrapper = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    wrapper.classList.add("pdl-wrap");
    checkbox.id = "pdl-filter";
    checkbox.type = "checkbox";
    label.setAttribute("for", "pdl-filter");
    label.textContent = i18n("exclude_downloaded");
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    dlBarRef.filter = checkbox;
    nav.parentElement.insertBefore(wrapper, nav);
    nav.appendChild(fragment);
  }
  function createSubBtn(nodes) {
    const isBookmarkPage = regexp.bookmarkPage.test(location.pathname);
    nodes.forEach((e) => {
      if (e.childElementCount !== 0) {
        const illustId = getIllustId(e);
        if (illustId) {
          const attrs = {
            attrs: { "pdl-id": illustId },
            classList: ["pdl-btn", "pdl-btn-sub"],
          };
          if (pixivHistory.has(illustId)) attrs.classList.push("pdl-complete");
          if (isBookmarkPage) attrs.classList.push("pdl-btn-sub-bookmark");
          e.appendChild(createPdlBtn(attrs));
        }
      }
    });
  }
  function createMultyWorksBtn(id) {
    const works = document.querySelectorAll("[role='presentation'] > a");
    if (works.length < 2) return;
    const containers = Array.from(works).map(
      (node) => node.parentElement.parentElement
    );
    if (containers[0].querySelector(".pdl-btn")) return;
    containers.forEach((node, idx) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("pdl-wrap-artworks");
      const attrs = {
        attrs: { "pdl-id": id, "should-download": idx },
        classList: ["pdl-btn", "pdl-btn-sub", "artworks"],
      };
      wrapper.appendChild(createPdlBtn(attrs));
      node.appendChild(wrapper);
    });
  }
  const createPresentationBtn = (() => {
    let observer, btn;
    function cb(mutationList) {
      const newImg = mutationList[1]["addedNodes"][0];
      const [pageNum] = regexp.originSrcPageNum.exec(newImg.src);
      const containers = btn.parentElement;
      const attrs = {
        attrs: {
          "pdl-id": btn.getAttribute("pdl-id"),
          "should-download": pageNum,
        },
        classList: ["pdl-btn", "pdl-btn-sub", "presentation"],
      };
      btn.remove();
      btn = createPdlBtn(attrs);
      containers.appendChild(btn);
    }
    return (id) => {
      const containers = document.querySelector(
        "body > [role='presentation'] > div"
      );
      if (!containers) {
        if (observer) {
          observer.disconnect();
          observer = null;
          btn = null;
        }
        return;
      }
      if (containers.querySelector(".pdl-btn")) return;
      const img = containers.querySelector("img");
      const isOriginImg = regexp.originSrcPageNum.exec(img.src);
      if (!isOriginImg) return;
      const [pageNum] = isOriginImg;
      const attrs = {
        attrs: { "pdl-id": id, "should-download": pageNum },
        classList: ["pdl-btn", "pdl-btn-sub", "presentation"],
      };
      btn = createPdlBtn(attrs);
      containers.appendChild(btn);
      observer = new MutationObserver(cb);
      observer.observe(img.parentElement, { childList: true, subtree: true });
    };
  })();
  function createPreviewModalBtn() {
    const illustModalBtn = document.querySelectorAll(
      ".gtm-manga-viewer-preview-modal-open"
    );
    const mangaModalBtn = document.querySelectorAll(
      ".gtm-manga-viewer-open-preview"
    );
    let mangaViewerModalBtn = document.querySelectorAll(
      ".gtm-manga-viewer-close-icon"
    )?.[1];
    if (!illustModalBtn.length && !mangaModalBtn.length) return;
    const btns = [...illustModalBtn, ...mangaModalBtn];
    if (mangaViewerModalBtn) btns.push(mangaViewerModalBtn);
    btns.forEach((node) => {
      node.addEventListener("click", handleModalClick);
    });
  }
  function handleModalClick() {
    const timer = setInterval(() => {
      const ulList = document.querySelectorAll("ul");
      const previewList = ulList[ulList.length - 1];
      if (getComputedStyle(previewList).display !== "grid") return;
      clearInterval(timer);
      const [, id] = regexp.artworksPage.exec(location.pathname);
      previewList.childNodes.forEach((node, idx) => {
        node.style.position = "relative";
        const attrs = {
          attrs: { "pdl-id": id, "should-download": idx },
          classList: ["pdl-btn", "pdl-btn-sub"],
        };
        node.appendChild(createPdlBtn(attrs));
      });
    }, 300);
  }
  function createTagsBtn(userId, category) {
    const tagsEles = document.querySelectorAll(
      "section> div:nth-child(2) > div > div"
    );
    if (!tagsEles.length) return;
    if (category === "illustrations" || category === "artworks")
      category = "illusts";
    let rest = "show";
    if (
      userId === getSelfId() &&
      category === "bookmarks" &&
      location.search.includes("rest=hide")
    )
      rest = "hide";
    tagsEles.forEach((ele) => {
      if (ele.querySelector(".pdl-btn")) return;
      let tag;
      const tagLink = ele.querySelector("a");
      if (!tagLink) return;
      if (tagLink.getAttribute("status") !== "active") {
        if (rest === "hide") {
          tag = tagLink.href.slice(
            tagLink.href.lastIndexOf("/") + 1,
            tagLink.href.lastIndexOf("?")
          );
        } else {
          tag = tagLink.href.slice(tagLink.href.lastIndexOf("/") + 1);
        }
      } else {
        const tagTextEles = ele.querySelectorAll("div[title]");
        tag = tagTextEles[tagTextEles.length - 1].getAttribute("title").slice(1);
      }
      const attrs = {
        attrs: { "pdl-userId": userId, category, tag, rest },
        classList: ["pdl-btn", "pdl-tag"],
      };
      if (isDownloading) attrs.classList.push("pdl-tag-hide");
      const dlBtn = createPdlBtn(attrs, "", { addEvent: false });
      if (
        !(
          tagLink.href.includes("bookmarks") &&
          tagLink.getAttribute("status") !== "active"
        )
      ) {
        dlBtn.style.backgroundColor = tagLink.getAttribute("color") + "80";
      }
      dlBtn.addEventListener("click", downloadWorks);
      ele.appendChild(dlBtn);
    });
    let modalTagsEles;
    let modal;
    if (category === "bookmarks") {
      modal = document.querySelector('div[role="presentation"]');
      if (!modal) return;
      modalTagsEles = modal.querySelectorAll("a");
    } else {
      const charcoalTokens = document.querySelectorAll(".charcoal-token");
      modal = charcoalTokens[charcoalTokens.length - 1];
      modalTagsEles = modal.querySelectorAll("a");
    }
    if (!regexp.userPageTags.exec(modalTagsEles[0]?.href)) return;
    modalTagsEles.forEach((ele) => {
      if (ele.querySelector(".pdl-btn")) return;
      let tag;
      if (rest === "hide") {
        tag = ele.href.slice(
          ele.href.lastIndexOf("/") + 1,
          ele.href.lastIndexOf("?")
        );
      } else {
        tag = ele.href.slice(ele.href.lastIndexOf("/") + 1);
      }
      const attrs = {
        attrs: { "pdl-userId": userId, category, tag, rest },
        classList: ["pdl-btn", "pdl-modal-tag"],
      };
      if (isDownloading) attrs.classList.push("pdl-tag-hide");
      const dlBtn = createPdlBtn(attrs, "", { addEvent: false });
      dlBtn.addEventListener("click", (evt) => {
        modal.querySelector("svg").parentElement.click();
        downloadWorks(evt);
      });
      ele.appendChild(dlBtn);
    });
  }
  function compatPixivPreviewer(nodes) {
    const isPpSearchPage = regexp.ppSearchPage.test(location.pathname);
    if (!isPpSearchPage) return;
    nodes.forEach((node) => {
      const pdlEle = node.querySelector(".pdl-btn");
      if (!pdlEle) return false;
      pdlEle.remove();
    });
  }
  let firstRun = true;
  function observerCallback(records) {
    const addedNodes = [];
    records.forEach((record) => {
      if (!record.addedNodes.length) return;
      record.addedNodes.forEach((node) => {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName !== "BUTTON" &&
          node.tagName !== "IMG"
        ) {
          addedNodes.push(node);
        }
      });
    });
    if (!addedNodes.length) {
      return;
    }
    if (firstRun) {
      createSubBtn(document.querySelectorAll("a"));
      firstRun = false;
    } else {
      compatPixivPreviewer(addedNodes);
      const thunmnails = addedNodes.reduce((prev, current) => {
        return prev.concat(Array.from(current.querySelectorAll("a")));
      }, []);
      createSubBtn(thunmnails);
    }
    const isArtworksPage = regexp.artworksPage.exec(location.pathname);
    const isUserPage = regexp.userPage.exec(location.pathname);
    const isTagsPage = regexp.userPageTags.exec(location.pathname);
    if (isArtworksPage) {
      const id = isArtworksPage[1];
      createMainBtn(id);
      createMultyWorksBtn(id);
      createPresentationBtn(id);
      createPreviewModalBtn();
    } else if (isUserPage) {
      createDownloadBar(isUserPage[1]);
      if (isTagsPage) {
        createTagsBtn(isUserPage[1], isTagsPage[1]);
      }
    }
  }

  function getHistoryStr() {
    return JSON.stringify([...pixivHistory._records]);
  }
  function createImportModal() {
    if (document.querySelector("#pdlfolder")) return;
    const html = {
      header: "<h3>导入 / 导出</h3>",
      content: `<p>
    <p><label for="pdl-import">选择要导入的文件：</label></p>
    <input type="file" id="pdl-import" accept=".txt">
  </p>
  <p>
  <hr style="border-top:solid 1px grey">
  <p>
    <button id="pdl-output">导出记录</button>
  </p>`,
    };
    const modal = createModal(html);
    const file = modal.querySelector("#pdl-import");
    file.addEventListener("change", () => {
      const file = modal.querySelector("#pdl-import").files[0];
      if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (evt) => {
          const text = evt.target.result;
          try {
            const history = JSON.parse(text);
            if (!(history instanceof Array)) throw new Error("Invalid file");
            if (history.length) {
              if (!history.every((id) => typeof id === "string"))
                throw new Error("Invalid file");
            }
            pixivHistory.saveHistory(history);
            location.reload();
          } catch (error) {
            alert(error.message);
          }
        };
      } else {
        alert("Invalid file");
      }
    });
    const btn = modal.querySelector("#pdl-output");
    btn.addEventListener("click", () => {
      const dlEle = document.createElement("a");
      const history = getHistoryStr();
      dlEle.href = URL.createObjectURL(
        new Blob([history], { type: "text/plain" })
      );
      dlEle.download = "Pixiv Downloader " + new Date().toLocaleString();
      dlEle.click();
      URL.revokeObjectURL(dlEle.href);
    });
    document.body.appendChild(modal);
  }

  addStyle();
  pixivHistory.updateHistory();
  GM_registerMenuCommand("Apng", setFormatFactory("png"), "a");
  GM_registerMenuCommand("Gif", setFormatFactory("gif"), "g");
  GM_registerMenuCommand("Zip", setFormatFactory("zip"), "z");
  GM_registerMenuCommand("Webm", setFormatFactory("webm"), "w");
  GM_registerMenuCommand("Webp", setFormatFactory("webp"), "p");
  GM_registerMenuCommand(
    i18n("clear_history"),
    pixivHistory.clearHistory.bind(pixivHistory),
    "c"
  );
  GM_registerMenuCommand(i18n("edit_filename"), showFilePathSetting, "e");
  GM_registerMenuCommand("导入/导出", createImportModal, "i");
  initial()
    .then(() => {
      if (settings.showMsg) {
        showUpgradeMsg();
        upgradeSettings("showMsg", false);
      }
      new MutationObserver(observerCallback).observe(document.body, {
        childList: true,
        subtree: true,
      });
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "q") {
          const pdlMainBtn = document.querySelector(".pdl-btn-main");
          if (pdlMainBtn) {
            e.preventDefault();
            if (!e.repeat) {
              pdlMainBtn.dispatchEvent(new MouseEvent("click"));
            }
          }
        }
      });
    })
    .catch(console.error);

})();
