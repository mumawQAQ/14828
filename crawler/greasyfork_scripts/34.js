// ==UserScript==
// @name         SearchJumper
// @name:zh-CN   搜索酱
// @name:zh-TW   搜尋醬
// @name:ja      検索ちゃん - SearchJumper
// @namespace    hoothin
// @version      1.6.6.55.58
// @description  Assistant for switching search engines. Jump to any search engine quickly, can also search anything (selected text / image / link) on any engine with a simple right click or a variety of menus and shortcuts.
// @description:zh-CN  高效搜索引擎辅助增强，在搜索时一键切换各大搜索引擎，支持任意页面右键划词搜索与全面自定义
// @description:zh-TW  高效搜尋引擎輔助增强，在搜尋時一鍵切換各大搜尋引擎，支持任意頁面右鍵劃詞搜尋與全面自定義
// @description:ja  任意の検索エンジンにすばやく簡単にジャンプします！
// @author       hoothin
// @license      MPL License
// @match        *://*/*
// @icon         data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM.deleteValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @grant        GM.openInTab
// @grant        GM_openInTab
// @grant        GM.info
// @grant        GM_info
// @grant        unsafeWindow
// @supportURL   https://github.com/hoothin/SearchJumper/issues
// @homepage     https://github.com/hoothin/SearchJumper
// @connect      global.bing.com
// @connect      suggestqueries.google.com
// @connect      api.bing.com
// @connect      suggestion.baidu.com
// @connect      *
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    if (window.name === 'pagetual-iframe' || (window.frameElement && window.frameElement.name === 'pagetual-iframe')) return;
    const configPage = 'https://hoothin.github.io/SearchJumper';
    const importPageReg = /^https:\/\/github\.com\/hoothin\/SearchJumper\/issue|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i;
    const isAllPage = /^https:\/\/hoothin\.github\.io\/SearchJumper\/all\.html/.test(location.href);
    const mobileUa = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";

    var searchData = {};
    searchData.sitesConfig = [
        {
            type: "翻译",
            icon: "language",
            sites: [ {
                name: "百度翻译",
                url: "http://fanyi.baidu.com/#auto/zh/%s"
            }, {
                name: "DeepL",
                url: "https://www.deepl.com/translator#zh/en/%s",
                icon: "https://www.deepl.com/img/favicon/favicon_96.png"
            }, {
                name: "谷歌翻译",
                url: "https://translate.google.com/?text=%s",
                match: "translate\\.google\\.com.*\\btext="
            }, {
                name: "有道词典",
                url: "http://dict.youdao.com/search?q=%s",
                icon: "https://shared.ydstatic.com/images/favicon.ico"
            }, {
                name: "必应翻译",
                url: "http://www.bing.com/dict/search?q=%s"
            } ]
        },
        {
            type: "影视",
            icon: "video",
            sites: [ {
                name: "bilibili",
                url: "http://search.bilibili.com/all?keyword=%s"
            }, {
                name: "腾讯视频",
                url: "https://v.qq.com/x/search/?q=%s"
            }, {
                name: "爱奇艺",
                url: "http://so.iqiyi.com/so/q_%s",
                icon: "https://www.iqiyi.com/favicon.ico"
            }, {
                name: "youtube",
                url: "https://www.youtube.com/results?search_query=%s"
            }, {
                name: "优酷",
                url: "http://www.soku.com/search_video/q_%s",
                icon: "https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png"
            }, {
                name: "AcFun",
                url: "https://www.acfun.cn/search?keyword=%s"
            }, {
                name: "搜狐",
                url: "http://so.tv.sohu.com/mts?wd=%s"
            }, {
                name: "niconico",
                url: "http://www.nicovideo.jp/search/%s"
            } ]
        },
        {
            type: "音乐",
            icon: "music",
            sites: [ {
                name: "网易音乐",
                url: "http://music.163.com/#/search/m/?s=%s",
                icon: "https://s1.music.126.net/style/favicon.ico"
            }, {
                name: "一听",
                url: "https://so.1ting.com/all.do?q=%s"
            }, {
                name: "QQ音乐",
                url: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%s"
            }, {
                name: "百度音乐",
                url: "https://music.91q.com/search?ie=utf-8&oe=utf-8&key=%s"
            }, {
                name: "酷我音乐",
                url: "https://www.kuwo.cn/search/list?key=%s"
            }, {
                name: "酷狗",
                url: "http://search.5sing.kugou.com/?keyword=%s"
            } ]
        },
        {
            type: "社交",
            icon: "users",
            sites: [ {
                name: "知乎",
                url: "https://www.zhihu.com/search?q=%s&type=content"
            }, {
                name: "推特",
                url: "https://twitter.com/search/%s"
            }, {
                name: "豆瓣",
                url: "https://www.douban.com/search?source=suggest&q=%s"
            }, {
                name: "百度贴吧",
                url: "https://tieba.baidu.com/f?kw=%s&ie=utf-8"
            }, {
                name: "新浪微博",
                url: "https://s.weibo.com/weibo?q=%s"
            }, {
                name: "脸书",
                url: "https://www.facebook.com/search/results.php?q=%s"
            }, {
                name: "微信搜索",
                url: "http://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s"
            } ]
        },
        {
            type: "图片",
            icon: "image",
            sites: [ {
                name: "谷歌图片",
                url: "https://www.google.com/search?q=%s&tbm=isch",
                match: "www\\.google\\..*tbm=isch"
            }, {
                name: "百度图片",
                url: "http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s"
            }, {
                name: "必应图片",
                url: "https://www.bing.com/images/search?q=%s"
            }, {
                name: "搜狗图片",
                url: "https://pic.sogou.com/pics?query=%s"
            }, {
                name: "pixiv",
                url: "http://www.pixiv.net/search.php?word=%s"
            }, {
                name: "flickr",
                url: "http://www.flickr.com/search/?q=%s"
            }, {
                name: "花瓣",
                url: "http://huaban.com/search/?q=%s"
            }, {
                name: "Pinterest",
                url: "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta"
            }, {
                name: "yandex",
                url: "https://yandex.com/images/search?text=%s"
            }, {
                name: "pixabay",
                url: "https://pixabay.com/images/search/%s/",
                icon: "https://pixabay.com/favicon-32x32.png"
            }, {
                name: "unsplash",
                url: "https://unsplash.com/s/photos/%s"
            } ]
        },
        {
            type: "新闻",
            icon: "newspaper",
            sites: [ {
                name: "谷歌新闻",
                url: "https://news.google.com/search?q=%s&hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
                icon: "https://www.google.com/favicon.ico"
            }, {
                name: "百度新闻",
                url: "http://news.baidu.com/ns?word=%s&tn=news&from=news&cl=2&rn=20&ct=1",
                icon: "https://www.baidu.com/favicon.ico"
            }, {
                name: "网易-百度",
                url: "https://www.baidu.com/s?wd=%s%20site%3Anews.163.com%20",
                icon: "https://news.163.com/favicon.ico",
                match: "site%3Anews\\.163\\.com"
            }, {
                name: "腾讯新闻",
                url: "https://www.sogou.com/sogou?site=news.qq.com&query=%s",
                icon: "https://news.qq.com/favicon.ico"
            }, {
                name: "凤凰新闻",
                url: "https://so.ifeng.com/?q=%s&c=1"
            }, {
                name: "CNN",
                url: "https://edition.cnn.com/search/?q=%s"
            }, {
                name: "BBC",
                url: "https://www.bbc.co.uk/search?q=%s"
            }, {
                name: "今日头条",
                url: "https://www.toutiao.com/search/?keyword=%s"
            } ]
        },
        {
            type: "搜索",
            icon: "search",
            sites: [ {
                name: "Google",
                url: "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
                match: "https://www\\.google\\..*/search"
            }, {
                name: "百度",
                url: "https://www.baidu.com/s?wd=%s&ie=utf-8",
                keywords: "wd|word",
                match: "https://(www|m)\\.baidu\\.com/.*(wd|word)="
            }, {
                name: "头条搜索",
                url: "https://so.toutiao.com/search/?dvpf=%c&keyword=%s"
            }, {
                name: "必应",
                url: "https://www.bing.com/search?q=%s",
                match: "^https://(www|cn|global)\\.bing\\.com/search"
            }, {
                name: "360",
                url: "https://www.so.com/s?ie=utf-8&q=%s",
                match: "(www|m)\\.so\\.com/s\\?.*[&\?]q="
            }, {
                name: "搜狗",
                url: "https://www.sogou.com/web?query=%s",
                keywords: "query|keyword",
                match: "(www|wap|m)\\.sogou\\.com/(web|web/searchList\\.jsp).*(query|keyword)="
            }, {
                name: "谷歌高级搜索",
                url: "https://www.google.com/search?q=%s%input{请输入限制文件类型, filetype:doc}%input{请输入结果限制语言,&lr=lang_zh-CN|lang_zh-TW}%input{请输入限制日期,&as_qdr=w1}&ie=utf-8&oe=utf-8",
                nobatch: true
            } ]
        },
        {
            type: "划词搜索",
            icon: "sitemap",
            selectTxt: true,
            openInNewTab: true,
            sites: [ {
                name: "Google ",
                url: "[\"Google\"]"
            }, {
                name: "📄  复制",
                url: "c:%sr",
                nobatch: true
            }, {
                name: "🔗  打开文字链接",
                url: "%sr.replace(/(点|。)/g,\".\").replace(/[^ \\w\\-_\\.~!\\*'\\(\\);:@&=\\+\\$,\\/\\?#\\[\\]%]/g,\"\").replace(/.*(1[a-z0-9]{22,}).*?\\b([a-z0-9]{4}\\b|$).*/i,\"https://pan.baidu.com/s/$1?pwd=$2\").replace(/ /g,\"\").replace(/^/,\"http://\").replace(/^http:\\/\\/(https?:)/,\"$1\")",
                kwFilter: "\\w.*[\\.点。].*\\w|1[a-zA-Z0-9]{22,}",
                description: "支持类似“pan点baidu。com😄河蟹”以及“1bP23pzUpIV4CMuoMjOfxFA提取码:prt4”的分享链接",
                nobatch: true
            }, {
                name: "百度 ",
                url: "[\"百度\"]"
            }, {
                name: "谷歌站内搜",
                url: "https://www.google.com/search?q=%s%20site%3A%h&ie=utf-8&oe=utf-8",
            }, {
                name: "头条站内搜",
                url: "https://so.toutiao.com/search/?dvpf=%c&keyword=%s%20site%3A%h"
            }, {
                name: "百度站内搜",
                url: "https://www.baidu.com/s?wd=%s%20site%3A%h&ie=utf-8"
            }, {
                name: "必应站内搜",
                url: "https://www.bing.com/search?q=%s%20site%3A%h"
            }, {
                name: "鸭鸭站内搜",
                url: "https://duckduckgo.com/?q=%s%20site%3A%h"
            }, {
                name: "360站内搜",
                url: "https://www.so.com/s?ie=utf-8&q=%s%20site%3A%h"
            }, {
                name: "文字转二维码-草料",
                url: "https://cli.im/text#p{#text-content=%s&click(#click-create)}"
            }, {
                name: "雅虎站内搜",
                url: "https://search.yahoo.com/search;?p=%s%20site%3A%h"
            }, {
                name: "搜狗站内搜",
                url: "https://www.sogou.com/web?query=%s%20site%3A%h"
            }, {
                name: "Yandex站内搜",
                url: "https://yandex.com/search/?text=%s%20site%3A%h"
            }, {
                name: "Startpage站内搜",
                url: "https://www.startpage.com/sp/search?query=%s%20site%3A%h",
                icon: "https://www.startpage.com/sp/cdn/favicons/favicon-16x16--default.png"
            } ]
        },
        {
            type: "以图搜图",
            icon: "eye",
            selectImg: true,
            openInNewTab: true,
            sites: [ {
                name: "谷歌搜图",
                url: "https://www.google.com/searchbyimage?sbisrc=cr_1_0_0&image_url=%T"
            }, {
                name: "Yandex搜图",
                url: "https://yandex.com/images/search?source=collections&rpt=imageview&url=%t"
            }, {
                name: "SauceNAO",
                url: "https://saucenao.com/search.php?db=999&url=%t"
            }, {
                name :"IQDB",
                url: "https://iqdb.org/?url=%t"
            }, {
                name: "3D IQDB",
                url: "https://3d.iqdb.org/?url=%t"
            }, {
                name: "Lunapic",
                url: "https://www.lunapic.com/editor/index.php?action=url&url=%t",
                description: "使用 Lunapic 编辑图片"
            }, {
                name: "Pixlr easy",
                url: "https://pixlr.com/x/#p{click(#home-open-url)&#image-url=%t&click(.dialog>.buttons>a.button.positive)}",
                description: "使用 Pixlr easy 编辑图片"
            }, {
                name: "百度搜图",
                url: "https://graph.baidu.com/details?isfromtusoupc=1&tn=pc&carousel=0&promotion_name=pc_image_shituindex&extUiData%5bisLogoShow%5d=1&image=%t"
            }, {
                name: "Bing搜图",
                url: "https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:%t"
            }, {
                name: "TinEye",
                url: "https://www.tineye.com/search?url=%t"
            }, {
                name: "搜狗搜图",
                url: "https://pic.sogou.com/ris?query=%t"
            }, {
                name: "360搜图",
                url: "http://st.so.com/stu?imgurl=%t"
            }, {
                name: "WhatAnime",
                url: "https://trace.moe/?url=%t"
            }, {
                name: "Ascii2D",
                url: "https://ascii2d.net/search/url/%t"
            }, {
                name: "Trace Moe",
                url: "https://trace.moe/?url=%t"
            }, {
                name: "KarmaDecay",
                url: "http://karmadecay.com/%t"
            }, {
                name: "ZXing二维码解码",
                url: "https://zxing.org/w/decode?full=true&u=%t"
            }, {
                name: "ImgOps",
                url: "https://imgops.com/%b"
            } ]
        },
        {
            type: "VIP",
            icon: "key",
            match: "://v\\.qq\\.com/x/",
            sites: []
        },
        {
            type: "视频",
            icon: "circle-play",
            selectVideo: true,
            sites: [ {
                name: "M3u8播放器",
                url: "https://players.akamai.com/players/hlsjs?streamUrl=%t"
            }, {
                name: "去视频水印",
                url: "https://parse.bqrdh.com/smart/#p{.ant-input=%u&click(.ant-input-search-button)}"
            } ]
        },
        {
            type: "学术",
            icon: "graduation-cap",
            sites: [ {
                name: "百度学术",
                url: "http://xueshu.baidu.com/s?wd=%s"
            }, {
                name: "Scholar",
                url: "http://scholar.google.com/scholar?hl=zh-CN&q=%s"
            }, {
                name: "Google Book",
                url: "https://www.google.com/search?q=%s&btnG=搜索图书&tbm=bks&tbo=1&hl=zh-CN&gws_rd=ssl"
            }, {
                name: "中国知网",
                url: "https://kns.cnki.net/KNS8/DefaultResult/Index?dbcode=CFLS&kw=%s"
            }, {
                name: "爱学术",
                url: "https://www.ixueshu.com/search/index.html?search_type=&q=%s",
                icon: "https://www.ixueshu.com/static/favicon.ico"
            }, {
                name: "维普",
                url: "http://lib.cqvip.com/Qikan/Search/Index?from=Qikan_Search_Index/%p{isNoteHistory=1&isLog=1&indexIdentifier=U&indexKey=%s}"
            }, {
                name: "krugle",
                url: "http://opensearch.krugle.org/document/search/#query=%s",
                icon: "https://opensearch.krugle.org/media/images/favicon.ico"
            }, {
                name: "npm",
                url: "https://www.npmjs.org/search?q=%s",
                icon: "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
            }, {
                name: "中国大学MOOC",
                url: "https://www.icourse163.org/search.htm?search=%s"
            }, {
                name: "读秀知识",
                url: "http://qw.duxiu.com/getPage?sw=%s&ecode=utf-8",
                icon: "https://mycroftproject.com/updateos.php/id0/duxiu.ico"
            }, {
                name: "读秀书籍",
                url: "http://book.duxiu.com/search?Field=all&channel=search&sw=%s&ecode=utf-8&edtype=&searchtype=1&view=0",
                icon: "https://mycroftproject.com/updateos.php/id0/duxiu.ico"
            } ]
        },
        {
            type: "开发",
            icon: "code",
            sites: [ {
                name: "MDN",
                url: "https://developer.mozilla.org/zh-CN/search?q=%s"
            }, {
                name: "stackoverflow",
                url: "https://stackoverflow.com/search?q=%s"
            }, {
                name: "掘金",
                url: "https://juejin.im/search?query=%s&type=all"
            }, {
                name: "Can I Use",
                url: "http://caniuse.com/#search=%s",
                icon: "https://caniuse.com/img/favicon-128.png"
            }, {
                name: "GitHub",
                url: "https://github.com/search?utf8=✓&q=%s",
                match: "https://github\\.com/search\\?.*[&\?]q="
            }, {
                name: "w3c",
                url: "http://www.runoob.com/?s=%s"
            }, {
                name: "GreasyFork",
                url: "https://greasyfork.org/zh-CN/scripts?q=%s&utf8=✓",
                icon: "https://greasyfork.org/packs/media/images/blacklogo96-b2384000fca45aa17e45eb417cbcbb59.png"
            } ]
        },
        {
            type: "百科",
            icon: "book-open-reader",
            sites: [ {
                name: "维基",
                url: "http://zh.wikipedia.org/wiki/%s"
            }, {
                name: "百度百科",
                url: "http://baike.baidu.com/search/word?pic=1&sug=1&word=%s"
            }, {
                name: "百度文库",
                url: "http://wenku.baidu.com/search?word=%s&ie=utf-8"
            }, {
                name: "豆丁文档",
                url: "http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s"
            }, {
                name: "爱问知识",
                url: "http://iask.sina.com.cn/search?searchWord=%s"
            }, {
                name: "果壳",
                url: "http://www.guokr.com/search/all/?wd=%s"
            }, {
                name: "Quora",
                url: "https://www.quora.com/search?q=%s"
            } ]
        },
        {
            type: "网盘",
            icon: "cloud-download",
            sites: [ {
                name: "百度网盘",
                url: "https://pan.baidu.com/disk/main?#/search?key=%s"
            }, {
                name: "大力盘",
                url: "https://www.dalipan.com/search?keyword=%s"
            }, {
                name: "大圣盘",
                url: "https://www.dashengpan.com/search?keyword=%s"
            } ]
        },
        {
            type: "购物",
            icon: "shopping-cart",
            sites: [ {
                name: "淘宝",
                url: "http://s.taobao.com/search?q=%s",
                icon: "https://www.taobao.com/favicon.ico"
            }, {
                name: "京东",
                url: "http://search.jd.com/search?keyword=%s&enc=utf-8",
                icon: "https://www.jd.com/favicon.ico"
            }, {
                name: "苏宁",
                url: "https://search.suning.com/%s/"
            }, {
                name: "亚马逊",
                url: "http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s",
                icon: "https://www.amazon.cn/favicon.ico"
            }, {
                name: "天猫",
                url: "http://list.tmall.com/search_product.htm?q=%s"
            }, {
                name: "值得买",
                url: "http://search.smzdm.com/?c=home&s=%s"
            }, {
                name: "当当网",
                url: "http://search.dangdang.com/?key=%s"
            } ]
        },
        {
            type: "Github",
            icon: "fa-brands fa-github",
            match: "github\\.com",
            selectLink: true,
            selectPage: true,
            openInNewTab: true,
            sites: [ {
                name: "页面镜像 - Fastgit",
                url: "%u.replace(/https:\\/\\/github\\.com/,\"https://hub.fastgit.xyz\")",
                match: "https:\\/\\/github\\.com",
                hideNotMatch: true
            }, {
                name: "Raw镜像 - Fastgit",
                url: "%u.replace(/raw\\.githubusercontent\\.com/,\"raw.fastgit.org\").replace(/github.com(.*)\\/blob\\/(.*)/,\"raw.fastgit.org$1/$2\")",
                match: "github.com.*\\/blob\\/",
                hideNotMatch: true
            }, {
                name: "Assets镜像 - Fastgit",
                url: "%u.replace(/github\\.githubassets\\.com/,\"assets.fastgit.orgz\")",
                match: "github\\.githubassets\\.com",
                hideNotMatch: true
            }, {
                name: "Download镜像- Fastgit",
                url: "%u.replace(/github\\.com(.*\\/download\\/)/,\"download.fastgit.org$1\")",
                match: "github\\.com.*\\/download\\/",
                hideNotMatch: true
            }, {
                name: "Archive镜像- Fastgit",
                url: "%u.replace(/github\\.com(.*\\/archive\\/)/,\"download.fastgit.org$1\")",
                match: "github\\.com.*\\/archive\\/",
                hideNotMatch: true
            }, {
                name: "Ghproxy镜像加速",
                url: "https://ghproxy.com/%u"
            } ]
        },
        {
            type: "辅助工具",
            icon: "list-alt",
            selectTxt: true,
            selectImg: true,
            selectAudio: true,
            selectVideo: true,
            selectLink: true,
            selectPage: true,
            openInNewTab: true,
            sites: [ {
                name: "生成二维码",
                url: "https://hoothin.github.io/SearchJumper/qrcode.html#%U"
            }, {
                name: "分享到微博",
                url: "https://service.weibo.com/share/share.php?url=%t&title=%n"
            }, {
                name: "分享到推特",
                url: "https://twitter.com/intent/tweet?url=%T"
            }, {
                name: "使用Gmail发送",
                url: "https://mail.google.com/mail/u/0/?tf=cm&source=mailto&body=%n %T"
            }, {
                name: "分享到Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u=%T&t=%n"
            }, {
                name: "手机号码聚合搜索",
                url: "[\"360\",\"搜狗\"]",
                icon: "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCABAAEADASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMIAgcBBQYE/8QAMxAAAQMDAgIIBAYDAAAAAAAAAQIDBAAFEQYSByEIEzFBUWFxgRQyUmIVIzNCkbFyoeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsPSlKBSlKBSo2X2pDfWR3UPI+ptYUP5FSUClKUCo33kRo7j7ytrbSCtZxnAAyf8AQqSsHWkPtLacGUOJKFehGD/dBU2+9JPV0nVZmWFbUK0tL/Kgusoc61Hi4rGcn7SMd3jVotPXpjUel7deY6drU+KiQEZzt3JyU+xyPaqFXSzvWvUsuzyilp6NKVGWpw4CSle3JPh31efQ2mjo/QtrsJkiUuExtU8OxaiSo4+3KiB5YoNbWXTvC3VE5Y4cXuTp2+N5KfgH3WHQR4su8lp8QO6vWaT1beIepTozXoZ/GOrL0C4sJ2s3NodpA/a4O9Pr79XJjwuLFsukOdZ3dPaxsTiercKwXojpG5paHU43IVjs/wCGun1FepWqeAto10W+rvtifbmBSU7T1rboaeH+Khzx2dlBuqlRsPIkR232vkdQFp9CMj+6koFKUoKxdJPh29DvA1pbGSqJL2t3AJH6ToGErPkoADP1D7hXp+CfGy33GzxdNatmIiXGKgMxpT6tqJKBySkqPILA5c/m5d9bvmQ41whPRJzDciM+gtutOp3JWk8iCO8VWriJ0bJ8OS7cNAH4yIolRtzqwHmvJCjyWPI4V60G/NSa40zo8sDUl4jQFyRlpC8qUseOEgnHn2V9tl1BZdRRS/YbnDuLKcbjGdSvbnxA5j3FUKvFrvNrkiPfYc2I80OrCJba0FIHcN3d6VtLo22K+yuIyLzBS41aYbbiJrx5Id3IIS0PqO7ary258MhbalKUClKUClKUGDrTb7ex9CXUH9riQofwa4ZYajtBqO0hptPYhtISB7CpKUClKUH/2Q=="
            }, {
                name: "🧮  计算器",
                url: "calculator://"
            }, {
                name: "🔎  Everything搜索",
                url: "ES://%s"
            }, {
                name: "货币转换",
                url: "javascript:fetch(`https://api.exchangerate.host/convert?from=%input{转换货币/美元/欧元/日元/人民币,USD/EUR/JPY/CNY}&to=%input{目标货币/美元/欧元/日元/人民币,USD/EUR/JPY/CNY}&amount=%sr.replace(/\\D/g,\"\")`).then(r=>r.json()).then(r=>prompt(`${r.date} 当日汇率引用自 European Central Bank\\n${r.query.amount.toLocaleString()} ${r.query.from} =`,`${r.result.toLocaleString()} ${r.query.to}`)).catch(alert);"
            } ]
        },
        {
            type: "当前网页",
            icon: "list",
            selectLink: true,
            selectPage: true,
            openInNewTab: true,
            sites: [ {
                name: "SEO查询",
                url: "http://seo.chinaz.com/?q=%h"
            }, {
                name: "打开链接",
                url: "%t",
                openInNewTab: true
            }, {
                name: "网页快照查询",
                url: "https://2tool.top/kuaizhao.php?k=%u",
                icon: "data:image/svg+xml,%3Csvg xmlns=\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\" width=\"1em\" height=\"1em\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 256 256\"%3E%3Cg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"%3E%3Cpath d=\"M 239.98507%2C55.993592 A 111.98507%2C39.994664 0 0 1 128%2C95.988256 111.98507%2C39.994664 0 0 1 16.01493%2C55.993592 111.98507%2C39.994664 0 0 1 128%2C15.998927 111.98507%2C39.994664 0 0 1 239.98507%2C55.993592 Z\"%2F%3E%3Cpath d=\"m 239.98507%2C199.97441 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.63639 111.98507%2C39.994664 0 0 1 -111.985079%2C0 111.98507%2C39.994664 0 0 1 -55.992531%2C-34.6364\"%2F%3E%3Cpath d=\"m 239.98507%2C151.9808 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.6364 111.98507%2C39.994664 0 0 1 -111.985079%2C-1e-5 A 111.98507%2C39.994664 0 0 1 16.01493%2C151.9808\"%2F%3E%3Cpath d=\"m 239.98507%2C103.9872 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.6364 111.98507%2C39.994664 0 0 1 -111.985079%2C0 111.98507%2C39.994664 0 0 1 -55.992531%2C-34.6364\"%2F%3E%3Cpath d=\"M 16.01493%2C55.99377 V 199.97441\"%2F%3E%3Cpath d=\"M 239.98507%2C55.993592 V 199.97441\"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            }, {
                name: "网页存档查询",
                url: "https://web.archive.org/web/*/%u",
                icon: "https://web.archive.org/_static/images/archive.ico"
            }, {
                name: "存档当前网页",
                url: "https://web.archive.org/save/%u",
                icon: "https://web.archive.org/_static/images/archive.ico"
            }, {
                name: "编辑当前网页",
                url: "javascript:(function(){document.body.setAttribute('contenteditable', 'true');alert('已开启网页编辑，按ESC键取消');document.onkeydown = function (e) {e = e || window.event;if(e.keyCode==27){document.body.setAttribute('contenteditable', 'false');}}})();"
            }, {
                name: "万能命令",
                url: "https://wn.run/%u"
            }, {
                name: "当前网址-草料",
                url: "https://cli.im/url#p{#url_content=%u&click(#click-create)}"
            } ]
        }
    ];
    searchData.prefConfig = {
        position: {
            x: "left",
            y: "top"
        },
        offset: {
            x: "0",
            y: "0"
        },
        openInNewTab: false,
        enableInPage: true,
        altKey: false,
        ctrlKey: true,
        shiftKey: false,
        metaKey: false,
        autoClose: false,
        autoDelay: 1000,
        shortcut: true,
        initShow: false,
        alwaysShow: false,
        customSize: 100,
        typeOpenTime: 250,
        longPressTime: 500,
        noIcons: false,
        showSiteLists: true,
        alwaysShowSiteLists: false,
        cacheSwitch: false,
        noAni: false,
        quickAddRule: true,
        multiline: 2,//0 关闭 1 开启 2 询问
        multilineGap: 1000,
        historyLength: 0,
        dragToSearch: true,
        hideDragHistory: false,
        sortType: false,
        autoHide: false,
        autoHideAll: false,
        showCurrent: true,
        shortcutKey: 'Backquote',
        showInSearchEngine: false,
        showInSearchJumpPage: true,
        limitInPageLen: 1,
        limitPopupLen: 1,
        ignoreWords: ["a", "in", "into", "the", "to", "on", "among", "between", "and", "an", "of", "by", "with", "about", "under", "or", "at", "as"],
        inPageRule: {},
        firstFiveWordsColor: [],
        inPageWordsStyles: [],
        altToHighlight: true,
        defaultPicker: false,
        disableInputOnWords: false,
        callBarAlt: false,
        callBarCtrl: false,
        callBarShift: false,
        callBarMeta: false,
        defaultFindTab: false,
        disableAutoOpen: false,
        hideOnSearchEngine: false,
        minSizeMode: false,
        hidePopup: false,
        minPopup: 0,
        selectToShow: true,
        expandType: false,
        rightMouse: true,
        shiftLastUsedType: true,
        mouseLeaveToHide: true,
        currentTypeFirst: true,
        switchSitesPreKey: 'ArrowLeft',
        switchSitesNextKey: 'ArrowRight',
        switchSitesCtrl: true,
        switchSitesAlt: false,
        switchSitesShift: true,
        switchSitesMeta: false
    };
    function run() {
        let lang = navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage;
        let config = {};
        function setLang() {
            switch (lang) {
                case "zh-CN":
                case "zh-SG":
                    config = {
                        scriptName: '搜索酱',
                        import: '导入',
                        filter: '筛选',
                        selectAll: '全选',
                        importOrNot: '是否导入配置？',
                        settings: '配置脚本',
                        batchOpen: '批量打开',
                        batchOpenConfirm: '确定要批量打开吗？',
                        postOver: '发送成功：',
                        postError: '发送失败：',
                        keywords: '请输入搜索词',
                        targetUrl: '请输入搜索URL',
                        siteName: '站名',
                        siteDesc: '描述',
                        siteUrl: '地址',
                        siteIcon: '图标',
                        siteTest: '测试',
                        siteCancel: '取消',
                        siteAdd: '添加',
                        siteType: '分类',
                        siteExist: '已存在相同规则，是否添加为克隆项？',
                        siteAddOver: '站点添加成功',
                        multiline: '是否以换行符分隔多行搜索？',
                        multilineTooMuch: '行数超过10行，是否继续搜索？',
                        inputPlaceholder: '输入关键词筛选站点，支持 * ? 通配符，$代表末尾，^代表开头，分组**站点 可筛选指定分组，例如【图片**baidu】，tab 下一项',
                        inputKeywords: '输入搜索关键词',
                        inPageTips: '自定义分隔符：$c 加分隔符，例如 $c| search | jumper，默认空格作为分隔符\n原始文本不分隔：$o 加文本，例如$oopai liked by hero\n正则表达式：/re/，例如 $c, /google/i , /aPPle/\n添加提示文本：搜索文本$t{提示文本}，例如 linux$t{linux is not unix}\n添加自定义样式：搜索文本$s{背景;其他}，例如 google$s{#333333;color:red;}\n左键点击关键词跳转至下一个，右键点击关键词跳转至上一个',
                        inPagePlaceholder: '输入文字，按下回车进行页内查找',
                        pickerBtn: '抓取元素',
                        editBtn: '编辑查找文字',
                        emptyBtn: '清空查找文字',
                        copyInPageBtn: '复制查找文字',
                        copyEleBtn: '复制选中元素',
                        maxEleBtn: '展开选中元素',
                        minEleBtn: '收起选中元素',
                        expandAll: '全部展开',
                        collapseAll: '全部合起',
                        rename: '重命名',
                        recoverBtn: '恢复查找文字',
                        pinBtn: '固定查找文字，在所有标签页中搜索',
                        locBtn: '定位侧边栏',
                        filterSites: '筛选搜索引擎',
                        searchInPage: '页内查找',
                        removeBtn: '移除搜索词',
                        saveRuleBtn: '保存当前站点的搜索词',
                        wordContent: '搜索词内容',
                        wordHide: '隐藏父级元素',
                        wordHideTips: '元素深度，0为当前父级',
                        wordStyle: '搜索词样式',
                        wordTitle: '搜索词注释',
                        modify: '修改',
                        cancel: '取消',
                        modifyWord: '修改页内搜索词',
                        addSearchEngine: '添加搜索引擎',
                        noValidItemAsk: '未找到有效元素，是否手动编辑规则并添加？',
                        expand: '展开剩余站点',
                        add: '添加',
                        addWord: '添加新词语',
                        wordRange: '生效范围',
                        customInputFrame: '自定义搜索参数',
                        customSubmit: '提交搜索',
                        finalSearch: '目标搜索字串',
                        search: '搜索此项',
                        siteKeywords: '关键词(多个关键词以|分隔)',
                        siteMatch: '站点 URL 匹配正则',
                        openSelect: '打开选项',
                        openInDefault: '默认',
                        openInNewTab: '新标签页打开',
                        openInCurrent: '当前页打开',
                        currentType: '当前分类',
                        maxAddSiteBtn: '最大化',
                        minAddSiteBtn: '还原',
                        addAction: '添加操作',
                        crawlInfo: '模拟输入搜索',
                        inputAction: '输入',
                        clickAction: '点击',
                        sleepAction: '等待',
                        submitCrawl: '完成操作',
                        inputOutput: '在元素<span title="#t1#" class="element">#t1#</span>内输入<span title="#t2#">#t2#</span>',
                        clickOutput: '点击元素<span title="#t#" class="element">#t#</span>',
                        sleepOutpus: '休眠<span title="#t#">#t#</span>毫秒',
                        inputNewValue: '请输入新值',
                        deleteConfirm: '确定要删除此项吗？',
                        sleepPrompt: '等待时间（毫秒）'
                    };
                    break;
                case "zh-TW":
                case "zh-HK":
                    config = {
                        scriptName: "搜索醬",
                        import: '導入',
                        filter: '篩選',
                        selectAll: '全選',
                        importOrNot: '是否導入配置？',
                        settings: '配置脚本',
                        batchOpen: '批量打開',
                        batchOpenConfirm: '確定要批量打開嗎？',
                        postOver: '發送成功：',
                        postError: '發送失敗：',
                        keywords: '請輸入搜索詞',
                        targetUrl: '請輸入搜索URL',
                        siteName: '站名',
                        siteDesc: '描述',
                        siteUrl: '地址',
                        siteIcon: '圖標',
                        siteTest: '測試',
                        siteCancel: '取消',
                        siteAdd: '添加',
                        siteType: '分類',
                        siteExist: '已存在相同規則，是否添加為克隆項？',
                        siteAddOver: '站點添加成功',
                        multiline: '是否以換行符分隔多行搜索？',
                        multilineTooMuch: '行數超過10行，是否繼續搜索？',
                        inputPlaceholder: '輸入關鍵詞篩選站點，支持 * ? 通配符，$代表末尾，^代表開頭，分組**站點 可篩選指定分組，例如【圖片**goo】，tab 下一項',
                        inputKeywords: '輸入搜索關鍵詞',
                        inPageTips: '自定義分隔符：$c 加分隔符，例如 $c| search | jumper，默認空格作為分隔符\n原始文本不分隔：$o 加文本，例如$oopai liked by hero\n正則表達式：/re/，例如 $c, /google/i , /aPPle/\n添加提示文本：搜索文本$t{提示文本}，例如 linux$t{linux is not unix}\n添加自定義樣式：搜索文本$s{背景;其他}，例如 google$s{#333333;color:red;}\n左鍵點擊關鍵詞跳轉至下一個，右鍵點擊關鍵詞跳轉至上一個',
                        inPagePlaceholder: '輸入文字，按下回車進行頁內查找',
                        pickerBtn: '抓取元素',
                        editBtn: '編輯查找文字',
                        emptyBtn: '清空查找文字',
                        copyInPageBtn: '複製查找文字',
                        copyEleBtn: '複製選中元素',
                        maxEleBtn: '展開選中元素',
                        minEleBtn: '收起選中元素',
                        expandAll: '全部展開',
                        collapseAll: '全部合起',
                        rename: '重命名',
                        recoverBtn: '恢復查找文字',
                        pinBtn: '固定查找文字，在所有標籤頁中搜索',
                        locBtn: '定位側邊欄',
                        filterSites: '篩選搜尋引擎',
                        searchInPage: '頁內查找',
                        removeBtn: '移除搜索詞',
                        saveRuleBtn: '保存當前站點的搜索詞',
                        wordContent: '搜索詞內容',
                        wordHide: '隱藏父級元素',
                        wordHideTips: '元素深度，0為當前父級',
                        wordStyle: '搜索詞樣式',
                        wordTitle: '搜索詞注釋',
                        modify: '修改',
                        cancel: '取消',
                        modifyWord: '修改頁內搜索詞',
                        addSearchEngine: '添加搜尋引擎',
                        noValidItemAsk: '未找到有效元素，是否手動編輯規則並添加？',
                        expand: '展開剩餘站點',
                        add: '添加',
                        addWord: '添加新詞語',
                        wordRange: '生效範圍',
                        customInputFrame: '自定義搜索參數',
                        customSubmit: '提交搜索',
                        finalSearch: '目標搜尋字串',
                        search: '搜索此項',
                        siteKeywords: '關鍵詞(多個關鍵詞以|分隔)',
                        siteMatch: '站點 URL 匹配正則',
                        openSelect: '打開選項',
                        openInDefault: '默認',
                        openInNewTab: '新標籤頁打開',
                        openInCurrent: '當前頁打開',
                        currentType: '當前分類',
                        maxAddSiteBtn: '最大化',
                        minAddSiteBtn: '還原',
                        addAction: '添加操作',
                        crawlInfo: '模擬輸入搜索',
                        inputAction: '輸入',
                        clickAction: '點擊',
                        sleepAction: '等待',
                        submitCrawl: '完成操作',
                        inputOutput: '在元素<span title="#t1#" class="element">#t1#</span>內輸入<span title="#t2#">#t2#</span>',
                        clickOutput: '點擊元素<span title="#t#" class="element">#t#</span>',
                        sleepOutpus: '休眠<span title="#t#">#t#</span>毫秒',
                        inputNewValue: '請輸入新值',
                        deleteConfirm: '確定要刪除此項嗎？ ',
                        sleepPrompt: '等待時間（毫秒）'
                    };
                    break;
                default:
                    config = {
                        scriptName: "SearchJumper",
                        import: 'Import',
                        filter: 'Filter',
                        selectAll: 'SelectAll',
                        importOrNot: 'Do you want to import this config?',
                        settings: 'Settings',
                        batchOpen: 'Batch open',
                        batchOpenConfirm: 'Batch open urls?',
                        postOver: 'Post over: ',
                        postError: 'Post fail: ',
                        keywords: 'Input keywords',
                        targetUrl: 'Input URL',
                        siteName: 'Site Name',
                        siteDesc: 'Description',
                        siteUrl: 'Site Url',
                        siteIcon: 'Site Icon',
                        siteTest: 'Test',
                        siteCancel: 'Cancel',
                        siteAdd: 'Add',
                        siteType: 'Category',
                        siteExist: 'Site is already exist, add it as clone?',
                        siteAddOver: 'Site added successfully',
                        multiline: 'Search as multilines?',
                        multilineTooMuch: 'The number of lines exceeds 10, do you want to continue searching?',
                        inputPlaceholder: 'Enter keywords to filter sites, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next ',
                        inputKeywords: 'Enter search keywords',
                        inPageTips: 'Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default\nOriginal text without delimited: $o + text, such as $oopai liked by hero\nRegular expression: /re/, such as $c, /google/i , /aPPle/\nTips text: search text$t{tips text}, such as linux$t{linux is not unix}\nCustom style: Search text$s{background;other}, such as google$s{#333333;color:red;}\nLeft-click keyword to jump to the next, right-click keyword to jump to the previous',
                        inPagePlaceholder: 'Input text, press Enter to find in the page',
                        pickerBtn: 'Pick a element',
                        editBtn: 'Edit search text',
                        emptyBtn: 'Empty search text',
                        copyInPageBtn: 'Copy search text',
                        copyEleBtn: 'Copy selected elements',
                        maxEleBtn: 'Expand selected elements',
                        minEleBtn: 'Collapse selected elements',
                        expandAll: 'Expand All',
                        collapseAll: 'Collapse All',
                        rename: 'Rename',
                        recoverBtn: 'Recover find text',
                        pinBtn: 'Pin search text to search in all tabs',
                        locBtn: 'Sidebar to locate',
                        filterSites: 'Filter search engines',
                        searchInPage: 'Find in page',
                        removeBtn: 'Remove search term',
                        saveRuleBtn: 'Save the search term of the current site',
                        wordContent: 'Search word content',
                        wordHide: 'Hide parent element',
                        wordHideTips: 'Element depth, 0 means the current',
                        wordStyle: 'Search word style',
                        wordTitle: 'Search word annotation',
                        modify: 'Modify',
                        cancel: 'Cancel',
                        modifyWord: 'Modify search word',
                        addSearchEngine: 'Add search engine',
                        noValidItemAsk: 'No valid element found, do you want to manually edit the rule and add it?',
                        expand: 'Expand other sites',
                        add: 'Add',
                        addWord: 'Add new word',
                        wordRange: 'Effective range',
                        customInputFrame: 'Custom search parameters',
                        customSubmit: 'Submit',
                        finalSearch: 'Target search string',
                        search: 'Search this',
                        siteKeywords: 'Keywords(split by |)',
                        siteMatch: 'Regexp to match site URL',
                        openSelect: 'Open option',
                        openInDefault: 'Default',
                        openInNewTab: 'Open a new tab',
                        openInCurrent: 'Open in current',
                        currentType: 'Current',
                        maxAddSiteBtn: 'Maximize',
                        minAddSiteBtn: 'Restore',
                        addAction: 'Add Actions',
                        crawlInfo: 'Analog input search',
                        inputAction: 'Input',
                        clickAction: 'Click',
                        sleepAction: 'Wait',
                        submitCrawl: 'Complete operation',
                        inputOutput: 'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',
                        clickOutput: 'Click on element <span title="#t#" class="element">#t#</span>',
                        sleepOutpus: 'Sleep for <span title="#t#">#t#</span> milliseconds',
                        inputNewValue: 'Please enter a new value',
                        deleteConfirm: 'Are you sure you want to delete this item? ',
                        sleepPrompt: 'Wait time (milliseconds)'
                    };
                    break;
            }
        }
        function i18n(name, param) {
            return config[name] ? (param ? config[name].replace(/#t#/g, param).replace(/#t1#/g, param[0]).replace(/#t2#/g, param[1]) : config[name]) : name;
        };
        const isMobile = ('ontouchstart' in document.documentElement);
        var enableDebug = true;
        var debug = (str, title) => {
            if(enableDebug) {
                console.log(
                    `%c【SearchJumper v.${_GM_info.script.version}】 ${title ? title : 'debug'}`,
                    'color: yellow;font-size: large;font-weight: bold;',
                    str
                );
            }
        };
        var disabled = false;

        var _GM_xmlhttpRequest, _GM_registerMenuCommand, _GM_notification, _GM_setClipboard, _GM_openInTab, _GM_addStyle, _GM_info;
        if (typeof GM_xmlhttpRequest != 'undefined') {
            _GM_xmlhttpRequest = GM_xmlhttpRequest;
        } else if (typeof GM != 'undefined' && typeof GM.xmlHttpRequest != 'undefined') {
            _GM_xmlhttpRequest = GM.xmlHttpRequest;
        } else {
            _GM_xmlhttpRequest = (f) => {fetch(f.url).then(response => response.text()).then(data => {let res = {response: data};f.onload(res)}).catch(f.onerror())};
        }
        if (typeof GM_registerMenuCommand != 'undefined') {
            _GM_registerMenuCommand = GM_registerMenuCommand;
        } else if (typeof GM != 'undefined' && typeof GM.registerMenuCommand != 'undefined') {
            _GM_registerMenuCommand = GM.registerMenuCommand;
        } else {
            _GM_registerMenuCommand = (s, f) => {};
        }
        if (typeof GM_openInTab != 'undefined') {
            _GM_openInTab = GM_openInTab;
        } else if (typeof GM != 'undefined' && typeof GM.openInTab != 'undefined') {
            _GM_openInTab = GM.openInTab;
        } else {
            _GM_openInTab = (s, t) => {window.open(s)};
        }
        if (typeof GM_notification != 'undefined') {
            _GM_notification = s => GM_notification({text: s, onclick: e => _GM_openInTab(configPage, {active: true})});
        } else if (typeof GM != 'undefined' && typeof GM.notification != 'undefined') {
            _GM_notification = s => GM.notification({text: s, onclick: e => _GM_openInTab(configPage, {active: true})});
        } else {
            _GM_notification = (s) => {alert(s)};
        }
        if (typeof GM_setClipboard != 'undefined') {
            _GM_setClipboard = GM_setClipboard;
        } else if (typeof GM != 'undefined' && typeof GM.setClipboard != 'undefined') {
            _GM_setClipboard = GM.setClipboard;
        } else {
            _GM_setClipboard = (s, i) => {};
        }
        if (typeof GM_addStyle != 'undefined') {
            _GM_addStyle = GM_addStyle;
        } else if (typeof GM != 'undefined' && typeof GM.addStyle != 'undefined') {
            _GM_addStyle = GM.addStyle;
        } else {
            _GM_addStyle = cssStr => {
                let styleEle = document.createElement("style");
                styleEle.innerHTML = cssStr;
                document.head.appendChild(styleEle);
                return styleEle;
            };
        }
        if (typeof GM_info != 'undefined') {
            _GM_info = GM_info;
        } else if (typeof GM != 'undefined' && typeof GM.info != 'undefined') {
            _GM_info = GM.info;
        } else {
            _GM_info = { script: {} };
        }
        var _unsafeWindow = (typeof unsafeWindow == 'undefined') ? window : unsafeWindow;
        if (_unsafeWindow.searchJumperInited) return;
        _unsafeWindow.searchJumperInited = true;
        var storage = {
            supportGM: typeof GM_getValue == 'function' && typeof GM_getValue('a', 'b') != 'undefined',
            supportGMPromise: typeof GM != 'undefined' && typeof GM.getValue == 'function' && typeof GM.getValue('a','b') != 'undefined',
            mxAppStorage: (function() {
                try {
                    return window.external.mxGetRuntime().storage;
                } catch(e) {
                }
            })(),
            operaUJSStorage: (function() {
                try {
                    return window.opera.scriptStorage;
                } catch(e) {
                }
            })(),
            setItem: function (key, value) {
                if (this.supportGMPromise) {
                    GM.setValue(key, value);
                    if(value === "" && typeof GM != 'undefined' && typeof GM.deleteValue != 'undefined'){
                        GM.deleteValue(key);
                    }
                } else if (this.supportGM) {
                    GM_setValue(key, value);
                    if(value === "" && typeof GM_deleteValue != 'undefined'){
                        GM_deleteValue(key);
                    }
                } else if (this.operaUJSStorage) {
                    this.operaUJSStorage.setItem(key, value);
                } else if (this.mxAppStorage) {
                    this.mxAppStorage.setConfig(key, value);
                } else if (window.localStorage) {
                    window.localStorage.setItem(key, value);
                }
            },
            getItem: function (key, cb) {
                var value;
                if (this.supportGMPromise) {
                    value = GM.getValue(key).then(v=>{cb(v)});
                    return;
                } else if (this.supportGM) {
                    value = GM_getValue(key);
                } else if (this.operaUJSStorage) {
                    value = this.operaUJSStorage.getItem(key);
                } else if (this.mxAppStorage) {
                    value = this.mxAppStorage.getConfig(key);
                } else if (window.localStorage) {
                    value = window.localStorage.getItem(key);
                };
                cb(value);
            }
        };
        var escapeHTMLPolicy;
        if (_unsafeWindow.trustedTypes && _unsafeWindow.trustedTypes.createPolicy) {
            escapeHTMLPolicy = _unsafeWindow.trustedTypes.createPolicy('searchjumper_default', {
                createHTML: (string, sink) => string
            });
        }

        if (typeof String.prototype.replaceAll != 'function') {
            String.prototype.replaceAll = function(search, replacement) {
                var target = this;
                return target.split(search).join(replacement);
            };
        }
        if (typeof String.prototype.endsWith != 'function') {
            String.prototype.endsWith = function(search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
            };
        }
        if (typeof String.prototype.startsWith != 'function') {
            String.prototype.startsWith = function(search, pos){
                return this.slice(pos || 0, search.length) === search;
            };
        }

        function getBody(doc) {
            return doc.body || doc.querySelector('body');
        }

        function createHTML(html = "") {
            return escapeHTMLPolicy ? escapeHTMLPolicy.createHTML(html) : html;
        }

        function getElementByXpath(xpath, contextNode, doc) {
            doc = doc || document;
            contextNode = contextNode || doc;
            try {
                var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                return result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
            } catch (err) {
                throw new Error(`Invalid xpath: ${xpath}`);
            }
        }

        function isXPath(xpath) {
            if (!xpath) return false;
            return /^\(*(descendant::|\.\/|\/\/|id\()/.test(xpath);
        }

        function getElement(sel, doc) {
            if (!doc) doc = document;
            try {
                if (!isXPath(sel)) {
                    return doc.querySelector(sel);
                }
            } catch(e) {
                debug(e);
            }
            return getElementByXpath(sel, doc, doc);
        }

        function getElementTop(ele) {
            var actualTop = ele.offsetTop;
            var current = ele.offsetParent;
            while (current) {
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            if (ele.ownerDocument != document) {
                let iframes = document.getElementsByTagName("iframe");
                for (let i = 0; i < iframes.length; i++) {
                    let iframe = iframes[i];
                    let iframeDoc;
                    try {
                        iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    } catch(e) {
                        break;
                    }
                    if (iframeDoc == ele.ownerDocument) {
                        current = iframe;
                        while (current) {
                            actualTop += current.offsetTop;
                            current = current.offsetParent;
                        }
                        break;
                    }
                }
            }
            return actualTop;
        }

        function getElementLeft(ele) {
            var actualLeft = ele.offsetLeft;
            var current = ele.offsetParent;
            while (current) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            if (ele.ownerDocument != document) {
                let iframes = document.getElementsByTagName("iframe");
                for (let i = 0; i < iframes.length; i++) {
                    let iframe = iframes[i];
                    let iframeDoc;
                    try {
                        iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    } catch(e) {
                        break;
                    }
                    if (iframeDoc == ele.ownerDocument) {
                        current = iframe;
                        while (current) {
                            actualLeft += current.offsetLeft;
                            current = current.offsetParent;
                        }
                        break;
                    }
                }
            }
            return actualLeft;
        }

        function waitForFontAwesome(callback) {
            var retries = 50;
            var text = '\uf0c8';
            var checkReady = function() {
                var canvas, context;
                retries -= 1;
                canvas = document.createElement('canvas');
                canvas.width = 20;
                canvas.height = 20;
                context = canvas.getContext('2d', { willReadFrequently: true });
                context.fillStyle = 'rgba(0,0,0,1.0)';
                context.fillRect( 0, 0, 20, 20 );
                context.font = '16pt FontAwesome';
                context.textAlign = 'center';
                context.fillStyle = 'rgba(255,255,255,1.0)';
                context.fillText(text, 10, 18 );
                var data = context.getImageData( 2, 10, 1, 1 ).data;
                if ( data[0] == 0 && data[1] == 0 && data[2] == 0 ) {
                    context.font = '16pt "Font Awesome 6 Free"';
                    context.fillText(text, 10, 18 );
                    data = context.getImageData( 2, 10, 1, 1 ).data;
                    if ( data[0] == 0 && data[1] == 0 && data[2] == 0 ) {
                        if ( retries > 0 ) {
                            setTimeout( checkReady, 150 );
                        }
                    } else if ( typeof callback === 'function' ) {
                        callback();
                    }
                } else {
                    if ( typeof callback === 'function' ) {
                        callback();
                    }
                }
            }

            setTimeout( checkReady, 100 );
        }

        var logoBtn, searchBar, searchTypes = [], currentSite = false, cacheKeywords, localKeywords, lastSign, inPagePostParams, cacheIcon, historySites, historyType, sortTypeNames, cachePool = [], cacheFontPool = [], currentFormParams, globalInPageWords, navEnable, referrer, lastAddType;
        const logoBtnSvg = `<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${i18n("scriptName")}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`;
        const logoBase64 = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==";
        const noImgBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+";
        var targetElement, cssText, mainStyleEle;
        var inMinMode = false;

        class SearchBar {
            constructor() {
                this.scale = searchData.prefConfig.customSize / 100;
                cssText = `
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper.search-jumper-showall {
                     overflow-y: hidden;
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     flex-direction: unset;
                     max-width: unset;
                     max-height: unset;
                     text-align: center;
                     top: 0;
                     bottom: unset;
                     height: 100%;
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-searchBar {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #filterSites {
                     background-color: #2a282c;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: #ddd 0px 0px 3px;
                     outline: none;
                     box-sizing: border-box;
                     cursor: default;
                     user-select: none;
                     -webkit-user-select: none;
                     -moz-user-select: none;
                     -khtml-user-select: none;
                     -ms-user-select: none;
                     position: fixed;
                     width: 50%;
                     left: 25%;
                     top: 1%;
                     border-radius: 10px;
                     pointer-events: all;
                 }
                 #search-jumper.search-jumper-showall #filterSites>input {
                     background-color: #000000;
                     color: white;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 20px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 120px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon>p {
                     pointer-events: all;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon a {
                     display: flex!important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall.search-jumper-searchBarCon {
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                     overflow: hidden;
                 }
                 #search-jumper-alllist {
                     display: none;
                     top: 101px;
                     position: absolute;
                     width: 100%;
                     overflow-x: scroll;
                     overflow-y: hidden;
                     height: calc(100% - 101px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper-alllist>.search-jumper-btn {
                     position: fixed;
                     top: 1%;
                     right: 25%;
                     filter: drop-shadow(1px 1px 3px #00000060);
                     cursor: pointer;
                     pointer-events: all;
                     z-index: 1;
                 }
                 #search-jumper-alllist>.search-jumper-btn>svg {
                     cursor: pointer;
                 }
                 .search-jumper-showallBg {
                     display: none;
                     position: fixed;
                     left: 0;
                     top: 0;
                     width: 100%;
                     height: 100%;
                     z-index: -1;
                     transform: translateZ(0);
                     ${searchData.prefConfig.noAni ? "background-color: rgba(0, 0, 0, 0.1);" : (
                    "background-color: rgba(0, 0, 0, 0.1);" +
                    //"backdrop-filter: blur(5px);" +
                    //"-webkit-backdrop-filter: blur(5px);" +
                    "transition:background-color .6s ease;")}
                 }
                 #search-jumper.search-jumper-showall:hover>.search-jumper-showallBg,
                 body:hover+#search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     display: block;
                 }
                 .search-jumper-historylist {
                     display: flex;
                     position: fixed;
                     width: 100%;
                     justify-content: center;
                     left: 0;
                     top: 60px;
                     background: #f5f5f5e0;
                     border-bottom: 1px solid #ddd;
                     pointer-events: all;
                     min-height: 40px;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist {
                     display: block;
                 }
                 #search-jumper-alllist>.sitelistBox {
                     display: flex;
                     min-width: 100%;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                 }
                 .search-jumper-searchBarCon {
                     all: unset;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     z-index: 2147483646;
                     pointer-events: none;
                     text-align: center;
                     overflow: scroll;
                     display: block;
                     -ms-overflow-style: none;
                     scrollbar-width: none;
                     box-sizing: border-box;
                     z-index: 2147483647;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483647;
                     overflow-wrap: break-word;
                     background: #505050;
                     border-radius: ${this.scale * 21}px!important;
                     border: 1px solid #b3b3b3;
                     display: inline-flex;
                     pointer-events: all;
                     margin-top: -${this.scale * 25}px;
                     vertical-align: top;
                     ${searchData.prefConfig.noAni ? "" : "opacity: 0.3;"}
                     ${searchData.prefConfig.noAni ? "" : "transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;"}
                     user-select: none;
                     text-align: center;
                     position: relative;
                     box-sizing: border-box;
                 }
                 .hideAll>.search-jumper-searchBar {
                     margin-top: -${this.scale * 40}px;
                 }
                 .search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll {
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-scroll.search-jumper-bottom {
                     overflow-y: hidden;
                 }
                 .search-jumper-scroll>.search-jumper-searchBar {
                     position: static !important;
                 }
                 .search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
                     position: absolute !important;
                     top: 0;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-searchBar:hover {
                     margin-top: 0;
                     opacity: 1;
                     ${searchData.prefConfig.noAni ? "" : "transition:margin-top 0.1s ease, margin-left 0.1s, right 0.1s, opacity 0.1s, transform 0.1s;"}
                 }
                 .search-jumper-searchBar.initShow,
                 .resizePage>.search-jumper-searchBar {
                     margin-top: 0;
                     ${searchData.prefConfig.noAni ? "" : "opacity: 0.8;"}
                     ${searchData.prefConfig.noAni ? "" : "transition:margin-top 0.25s ease, margin-left 0.25s, right 0.25s, opacity 0.25s, transform 0.25s;"}
                 }
                 .funcKeyCall>.search-jumper-searchBar.initShow {
                     ${searchData.prefConfig.noAni ? "" : "transition:opacity 0.5s ease-out;"}
                 }
                 #search-jumper.funcKeyCall {
                     overflow: visible;
                     position: absolute;
                     max-width: 100%;
                     top: 0;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     position: absolute!important;
                     background: none;
                     border: none;
                     max-width: unset!important;
                     margin: unset;
                     ${searchData.prefConfig.minPopup && !searchData.prefConfig.noAni ? 'transition: transform 0.25s ease;' : ''}
                     ${searchData.prefConfig.minPopup ? 'transform: scale(0.7);' : ''}
                 }
                 .funcKeyCall>.search-jumper-searchBar:hover {
                     ${searchData.prefConfig.minPopup ? 'transform: scale(1);' : ''}
                 }
                 .in-input>.search-jumper-searchBar,
                 .funcKeyCall>.search-jumper-searchBar {
                     opacity: 1;
                     display: inline-flex!important;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     flex-direction: column;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type {
                     height: ${searchData.prefConfig.minPopup ? '24px' : 'auto'}!important;
                     width: ${searchData.prefConfig.minPopup ? 24 : (280 * this.scale)}px!important;
                     max-width: unset;
                     max-height: ${108 * this.scale + 10}px;
                     flex-wrap: wrap!important;
                     flex-direction: row;
                     padding: 5px;
                     box-shadow: #000000 0px 0px 10px;
                     overflow: auto;
                     scrollbar-width: none;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     transition: none;
                     background: #d0d0d0d0;
                     box-sizing: content-box;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist {
                     display: none;
                 }
                 ${searchData.prefConfig.minPopup ? `
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     visibility: hidden;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     visibility: visible;
                 }
                 ` : ''}
                 ${searchData.prefConfig.minPopup == 2 ? `
                 .funcKeyCall:not(.targetInput)>.search-jumper-searchBar {
                     transform: scale(1);
                 }
                 #search-jumper.funcKeyCall:not(.targetInput)>.search-jumper-searchBar>.search-jumper-type {
                     height: auto!important;
                     width: ${280 * this.scale}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     visibility: visible;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     visibility: hidden;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     visibility: visible;
                 }
                 ` : ''}
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
                     height: auto!important;
                     width: ${280 * this.scale}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-left,
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right .search-jumper-type,
                 .search-jumper-right>.search-jumper-searchBar {
                     flex-direction: column;
                     max-width: ${42 * this.scale}px;
                     max-height: unset;
                 }
                 .search-jumper-left {
                     height: 100%;
                     text-align: initial;
                 }
                 .search-jumper-right {
                     left: unset;
                     right: 0;
                     height: 100%;
                 }
                 .searchJumperExpand {
                     opacity: 0.8;
                 }
                 .searchJumperExpand:hover {
                     opacity: 1;
                 }
                 .searchJumperExpand>svg {
                     transform: rotate(-90deg);
                     border-radius: 20px;
                     filter: drop-shadow(0px 0px 2px black);
                     width: unset;
                     height: unset;
                     color: black;
                 }
                 .search-jumper-type.search-jumper-open>span.search-jumper-word {
                     filter: drop-shadow(0px 0px 2px black);
                 }
                 .search-jumper-left .searchJumperExpand>svg,
                 .search-jumper-right .searchJumperExpand>svg {
                     transform: unset;
                 }
                 .search-jumper-bottom {
                     top: unset;
                     bottom: 0;
                     height: ${this.scale * 42}px;
                     max-height: ${this.scale * 43}px;
                     overflow-y: hidden;
                 }
                 .search-jumper-left>.search-jumper-searchBar {
                     margin-top: 0;
                     margin-left: -${this.scale * 20}px;
                 }
                 .hideAll.search-jumper-left>.search-jumper-searchBar {
                     margin-left: -${this.scale * 40}px;
                 }
                 .search-jumper-right>.search-jumper-searchBar {
                     margin-top: 0;
                     right: -${this.scale * 20}px;
                     position: fixed;
                 }
                 .hideAll.search-jumper-right>.search-jumper-searchBar {
                     right: -${this.scale * 40}px;
                 }
                 .search-jumper-left>.search-jumper-searchBar:hover,
                 .search-jumper-left>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-left.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
                     margin-top: unset;
                     margin-left: 0;
                     opacity: 1;
                 }
                 .search-jumper-right>.search-jumper-searchBar:hover,
                 .search-jumper-right>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-right>.search-jumper-searchBar,
                 .search-jumper-right.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
                     margin-top: unset;
                     right: 0;
                     opacity: 1;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar {
                     position: relative;
                     margin-top: 0px;
                 }
                 .hideAll.search-jumper-bottom>.search-jumper-searchBar {
                     opacity: 0;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                     opacity: 1;
                 }
                 .search-jumper-btn {
                     position: relative;
                     display: grid;
                     padding: ${1 * this.scale}px;
                     margin: ${3 * this.scale}px;
                     cursor: pointer;
                     box-sizing: content-box;
                     ${searchData.prefConfig.noAni ? "" : "transition:margin-left 0.25s ease, width 0.25s, height 0.25s, transform 0.25s, background 0.25s;"}
                     width: ${32 * this.scale}px;
                     height: ${32 * this.scale}px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     text-decoration:none;
                     min-width: ${32 * this.scale}px;
                     min-height: ${32 * this.scale}px;
                 }
                 .search-jumper-btn>img {
                     width: ${32 * this.scale}px;
                     height: ${32 * this.scale}px;
                 }
                 .search-jumper-btn>b {
                     line-height: ${32 * this.scale}px;
                     letter-spacing: 0;
                     color: white;
                 }
                 .search-jumper-btn.noIcon>b {
                     color: #f6e9d2;
                 }
                 .search-jumper-btn.noIcon:hover>b {
                     color: wheat;
                 }
                 .search-jumper-btn>div {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     line-height: ${32 * this.scale}px;
                     background: black;
                     border-radius: ${20 * this.scale}px;
                     font-size: ${30 * this.scale}px;
                     color: wheat;
                     display: none;
                 }
                 .search-jumper-isInPage .search-jumper-btn>div,
                 .search-jumper-isTargetImg .search-jumper-btn>div,
                 .search-jumper-isTargetAudio .search-jumper-btn>div,
                 .search-jumper-isTargetVideo .search-jumper-btn>div,
                 .search-jumper-isTargetLink .search-jumper-btn>div,
                 .search-jumper-isTargetPage .search-jumper-btn>div {
                     animation-name: changeOpacity;
                     animation-duration: 2s;
                     animation-iteration-count: 3;
                     animation-delay: 0.1s;
                     display: block;
                     opacity: 0;
                 }
                 @keyframes changeOpacity {
                     0%   {opacity: 0;}
                     10%  {opacity: 0;}
                     50%  {opacity: 0.75;}
                     80%  {opacity: 0;}
                     100% {opacity: 0;}
                 }
                 .searchJumper-loading {
                     animation-name: changeScale;
                     animation-duration: 2.5s;
                     animation-iteration-count: infinite;
                 }
                 @keyframes changeScale {
                     0% {
                         -webkit-transform:rotate(0deg) scale(1);
                         -moz-transform:rotate(0deg) scale(1);
                         transform:rotate(0deg) scale(1);
                     }
                     50% {
                         -webkit-transform:rotate(180deg) scale(1.5);
                         -moz-transform:rotate(180deg) scale(1.5);
                         transform:rotate(180deg) scale(1.5);
                     }
                     100% {
                         -webkit-transform:rotate(360deg) scale(1);
                         -moz-transform:rotate(360deg) scale(1);
                         transform:rotate(360deg) scale(1);
                     }
                 }
                 .search-jumper-logoBtnSvg {
                     width: ${32 * this.scale}px;
                     height: ${32 * this.scale}px;
                     overflow: hidden;
                     vertical-align: top;
                     cursor: grab;
                 }
                 .search-jumper-type.search-jumper-needInPage,
                 .search-jumper-type.search-jumper-targetImg,
                 .search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-type.search-jumper-targetLink,
                 .search-jumper-type.search-jumper-targetPage,
                 .search-jumper-isTargetImg>.search-jumper-type,
                 .search-jumper-isTargetAudio>.search-jumper-type,
                 .search-jumper-isTargetVideo>.search-jumper-type,
                 .search-jumper-isTargetLink>.search-jumper-type,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
                     display: none;
                 }
                 #search-jumper.in-input .search-jumper-type.search-jumper-open {
                     width: auto!important;
                     height: auto!important;
                 }
                 #search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
                     display: flex!important;
                 }
                 #search-jumper .input-hide,
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist.input-hide {
                     display: none!important;
                 }
                 #search-jumper.in-input .search-jumper-type:not(.input-hide) {
                     display: inline-flex!important;
                     flex-wrap: nowrap!important;
                 }
                 #search-jumper.in-input .search-jumper-btn:not(.input-hide) {
                     display: grid!important;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-logo {
                     display: inline-flex;
                     background: unset;
                     padding: 0px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
                     display: none;
                 }
                 .search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
                     display: inline-flex;
                 }
                 .search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-isTargetPage>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
                     display: inline-flex;
                 }
                 .search-jumper-type,
                 .search-jumper-logo {
                     display: inline-flex;
                     box-sizing: border-box;
                     background: #d0d0d0;
                     border-radius: ${20 * this.scale}px!important;
                     overflow: hidden;
                     padding: 0.2px;
                     height: ${40 * this.scale}px;
                     width: ${40 * this.scale}px;
                     max-height: ${this.scale * 40}px;
                     min-height: ${this.scale * 40}px;
                     min-width: ${this.scale * 40}px;
                     ${searchData.prefConfig.noAni ? "" : `transition:width ${searchData.prefConfig.typeOpenTime}ms ease, height ${searchData.prefConfig.typeOpenTime}ms;`}
                 }
                 .search-jumper-right>.searchJumperNavBar {
                     right: unset;
                     left: 0;
                 }
                 .search-jumper-right>.searchJumperNavBar>#navMarks>div.navPointer {
                     right: unset;
                     left: 20px;
                     transform: rotate(180deg);
                 }
                 .search-jumper-bottom>.search-jumper-input {
                     bottom: unset;
                     top: 5%;
                 }
                 .search-jumper-type.not-expand>a:nth-of-type(${searchData.prefConfig.expandTypeLength || 12})~a {
                     display: none;
                 }
                 #search-jumper .sitelist {
                     position: fixed;
                     text-align: left;
                     background: #00000000;
                     max-height: calc(100vh - 20px);
                     overflow: scroll;
                     border: 0;
                     pointer-events: none;
                     opacity: 0;
                     ${searchData.prefConfig.noAni ? "" : "transition:opacity 0.25s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                     padding: 0 0 10px 0;
                     background: #ffffffe0;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                 }
                 #search-jumper .sitelist>.sitelistCon>div:hover {
                     background: #f5f7fa;
                 }
                 #search-jumper .sitelist a {
                     display: flex;
                     align-items: center;
                     text-decoration: none;
                     cursor: pointer;
                 }
                 #search-jumper .sitelist a>img {
                     width: 20px;
                     height: 20px;
                     margin-right: 10px;
                     margin-top: unset;
                     max-width: unset;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a>p {
                     display: inline-block;
                     font-size: 15px;
                     font-family: Arial,sans-serif;
                     line-height: 25px;
                     margin: 5px auto;
                     color: #6b6e74;
                     flex: 1;
                     text-align: left;
                     white-space: nowrap;
                     transform-origin: left;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a.dragTarget>img {
                     -webkit-transform:scale(1.5);
                     -moz-transform:scale(1.5);
                     transform:scale(1.5);
                 }
                 #search-jumper .sitelist a.dragTarget>p {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform: scale(1.2);
                 }
                 #search-jumper .sitelist a * {
                     pointer-events: none;
                 }
                 #search-jumper .sitelist>.sitelistCon>p {
                     color: #565656;
                     margin: 0;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif;
                     font-weight: bold;
                     background: #f6f6f6;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     margin: 0 auto;
                     text-overflow: ellipsis;
                     padding: 3px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                 }
                 .search-jumper-searchBar.disable-pointer>.search-jumper-type {
                     pointer-events: none;
                 }
                 .search-jumper-word {
                     background: black;
                     color: #ffffff!important;
                     font-family: Arial, sans-serif;
                     font-weight: 500;
                     border-radius: ${20 * this.scale}px!important;
                     font-size: ${15 * this.scale}px;
                     line-height: ${32 * this.scale}px;
                     width: ${32 * this.scale}px;
                     height: ${32 * this.scale}px;
                     min-width: ${32 * this.scale}px;
                     min-height: ${32 * this.scale}px;
                     letter-spacing: 0px;
                     text-shadow: unset;
                 }
                 .search-jumper-word:hover {
                     font-weight: bold;
                     text-shadow: 0px 0px 5px #d0d0d0;
                 }
                 a.search-jumper-word {
                     text-decoration: none;
                     background: white;
                     color: #111111!important;
                     filter: drop-shadow(1px 1px 3px #00000060);
                 }
                 .funcKeyCall a.search-jumper-word {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-word>span {
                     color: #222!important;
                     border-radius: 20px;
                     line-height: unset;
                 }
                 .search-jumper-type img {
                     width: ${32 * this.scale}px;
                     height: ${32 * this.scale}px;
                     margin-top: unset;
                 }
                 .funcKeyCall>.search-jumper-tips {
                     position: absolute;
                 }
                 .search-jumper-tips {
                     z-index: 2147483647;
                     pointer-events: none;
                     position: fixed;
                     font-size: xx-large;
                     background: #f5f5f5e0;
                     border-radius: 10px!important;
                     padding: 5px;
                     box-shadow: 0px 0px 10px 0px #000;
                     font-weight: bold;
                     ${searchData.prefConfig.noAni ? "" : "transition: all 0.2s ease;"}
                     color: black;
                     white-space: nowrap;
                     line-height: 35px;
                 }
                 .search-jumper-searchBar>.search-jumper-type {
                     padding: 0px;
                     ${searchData.prefConfig.minSizeMode ? 'display: none;' : ''}
                 }
                 .search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     background: unset;
                     border-radius: unset!important;
                 }
                 .search-jumper-searchBar:hover>.search-jumper-type {
                     ${searchData.prefConfig.minSizeMode ? 'display: inline-flex;' : ''}
                 }
                 .funcKeyCall>.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                     border-radius: ${20 * this.scale}px!important;
                 }
                 span.search-jumper-word>img {
                     width: ${20 * this.scale}px;
                     height: ${20 * this.scale}px;
                     margin: auto;
                 }
                 .search-jumper-searchBar .search-jumper-btn.search-jumper-word:hover {
                     background: black;
                 }
                 .search-jumper-searchBar a.search-jumper-btn.search-jumper-word:hover {
                     background: white;
                 }
                 .search-jumper-btn:hover {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     color: white;
                     text-decoration:none;
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-btn:active {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     transition:unset;
                     filter: drop-shadow(1px 1px 5px #000000a0);
                 }
                 .search-jumper-searchBar .search-jumper-btn.current {
                     overflow: visible;
                 }
                 .search-jumper-searchBar .search-jumper-btn.current::before {
                     content: '';
                     position: absolute;
                     right: -2px;
                     top: -2px;
                     border: 1px solid #00000099;
                     display: inline-block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: white;
                     box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
                     ${searchData.prefConfig.noAni ? "" : "opacity: 0.8;"}
                 }
                 .in-input .search-jumper-input {
                     display: block;
                     box-sizing: content-box;
                 }
                 .lock-input .search-jumper-lock-input {
                     float: left;
                     font-size: 20px;
                     top: 14px;
                     left: 25px;
                     color: darkgrey;
                     position: absolute;
                     border-right: 2px solid #32373a;
                     padding-right: 10px;
                     display: block;
                 }
                 .search-jumper-input {
                     width: 80%;
                     min-width: 500px;
                     bottom: 3%;
                     left: 50%;
                     margin: 0 0 0 -40%;
                     position: fixed;
                     font-family: sans-serif;
                     background: #F1F1F1;
                     text-align: left;
                     box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 70%);
                     border-radius: 28px;
                     background-color: rgb(51 56 59 / 90%);
                     padding: 10px;
                     display: none;
                     z-index: 2139999999;
                     font-size: 20px;
                     height: 36px;
                     touch-action: none;
                 }
                 .inputGroup {
                     cursor: grab;
                     display: flex;
                 }
                 .inputGroup * {
                     cursor: default;
                 }
                 .search-jumper-input input {
                     background-color: #212022;
                     color: white;
                     border: none;
                     font-size: 20px;
                     height: 35px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     border-radius: 3px;
                     box-shadow: #333 0px 0px 2px;
                     width: calc(100% - 20px);
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                 }
                 #searchJumperInput,
                 #searchJumperInputKeyWords {
                     width: calc(100% - 11px);
                     float: left;
                     transition: 0.25s width ease;
                 }
                 #searchJumperInput {
                     margin: 0 1px 0 10px;
                 }
                 #searchJumperInputKeyWords {
                     margin: 0 10px 0 1px;
                 }
                 #searchJumperInputKeyWords:disabled {
                     opacity: 0.5;
                     max-width: 20%;
                     min-width: 20%;
                 }
                 #filterSites>input:focus {
                     width: calc(400% - 20px);
                 }
                 .search-jumper-input * {
                     box-sizing: border-box;
                 }
                 .search-jumper-input input[type="radio"] {
                     display: none;
                 }
                 .search-jumper-input input:checked + label {
                     background: #3a444add;
                     color: white;
                     font-size: 18px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .line {
                     left: 25px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .line {
                     left: 231px;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input label {
                     display: inline-block;
                     font-size: 18px;
                     height: 36px;
                     line-height: 36px;
                     width: 200px;
                     text-align: center;
                     background: #2a343acc;
                     color: #959595;
                     position: relative;
                     transition: 0.25s background ease;
                     cursor: pointer;
                     position: relative;
                     top: -46px;
                     left: 15px;
                     border-radius: 5px 5px 0 0;
                     user-select: none;
                     pointer-events: all;
                     max-width: 40%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 .search-jumper-input label::after {
                     content: "";
                     height: 1px;
                     width: 100%;
                     position: absolute;
                     display: block;
                     background: #ccc;
                     bottom: 0;
                     opacity: 0;
                     left: 0;
                     transition: 0.25s ease;
                 }
                 .search-jumper-input label:hover::after {
                     opacity: 1;
                 }
                 .search-jumper-input .line {
                     background: #1E88E5;
                     width: 200px;
                     height: 1px;
                     top: -1px;
                     left: 0;
                     transition: 0.25s ease;
                     position: absolute;
                 }
                 .inputGroup>.svgBtns {
                     right: 21px;
                     top: 11px;
                     height: 33px;
                     position: absolute;
                     user-select: none;
                     background: rgb(0 0 0 / 50%);
                     white-space: nowrap;
                     overflow: hidden;
                     display: flex;
                     align-items: center;
                 }
                 .inputGroup>.svgBtns:hover {
                     width: auto;
                 }
                 .inputGroup>.svgBtns>svg {
                     margin: 0 2px;
                 }
                 .inputGroup svg.checked {
                     fill: #1E88E5;
                 }
                 @media screen and (max-width: 800px) {
                     .search-jumper-input .line {
                         display: none;
                     }
                     .search-jumper-input {
                         min-width: 300px;
                     }
                     .inputGroup>.svgBtns {
                         width: 25px;
                     }
                 }
                 .search-jumper-input .content-container {
                     background: #eee;
                     position: static;
                     font-size: 16px;
                 }
                 .search-jumper-input .content-container .inputGroup {
                     position: absolute;
                     padding: 10px;
                     width: 100%;
                     top: 0;
                     left: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s ease;
                     color: #333;
                 }
                 .search-jumper-input svg,
                 .searchJumperNavBar svg {
                     width: 25px;
                     height: 25px;
                     fill: white;
                     cursor: pointer;
                     opacity: 0.8;
                     transition: 0.25s all ease;
                     font-size: 0px;
                 }
                 .search-jumper-input .inputGroup:hover svg,
                 .searchJumperNavBar.show svg {
                     pointer-events: all;
                 }
                 .search-jumper-input svg *,
                 .searchJumperNavBar svg * {
                     cursor: pointer;
                 }
                 .search-jumper-input svg:hover,
                 .searchJumperNavBar svg:hover {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform:scale(1.2);
                     opacity: 1;
                 }
                 #search-jumper.selectedEle #filterSites>.svgBtns>svg {
                     display: inline-block!important;
                 }
                 .search-jumper-input>.closeBtn {
                     position: absolute;
                     right: 0px;
                     top: -39px;
                     width: 35px;
                     height: 35px;
                     vertical-align: middle;
                     fill: #454a4b;
                     overflow: hidden;
                     background: white;
                     border-radius: 20px;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords {
                     max-width: 50%;
                     position: absolute;
                     bottom: 8px;
                     left: 20px;
                     color: white;
                     font-size: 18px;
                     display: flex;
                     flex-wrap: wrap-reverse;
                     max-height: 38px;
                     overflow: hidden;
                 }
                 #searchInPage>.lockWords:hover {
                     overflow-y: auto;
                     height: auto;
                     max-height: 90vh;
                 }
                 #searchInPage>.lockWords>span {
                     position: relative;
                     padding: 5px;
                     cursor: alias;
                     user-select: none;
                     background: yellow;
                     color: black;
                     border: 1px solid;
                     margin: 2px;
                     display: flex;
                     align-items: center;
                     white-space: nowrap;
                     max-width: 100%;
                 }
                 #searchInPage>.lockWords .removeWord {
                     position: absolute;
                     right: 0;
                     top: 0;
                     display: none;
                     opacity: 0.3;
                 }
                 #searchInPage>.lockWords .removeWord:hover {
                     opacity: 1;
                 }
                 #searchInPage>.lockWords>span:hover .removeWord {
                     display: block;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords .removeWord>svg {
                     width: 15px;
                     height: 15px;
                     fill: black;
                     color: black;
                     border: 1px solid white;
                     border-radius: 10px;
                     background: white;
                 }
                 #searchInPage>.lockWords>span>em {
                     font-size: 12px;
                     margin-right: 5px;
                     color: unset;
                 }
                 .searchJumperNavBar {
                     all: unset;
                     top: 0px;
                     bottom: 0px;
                     right: 0px;
                     position: fixed;
                     width: 20px;
                     z-index: 2147483647;
                     background: #00000066;
                     text-align: center;
                     pointer-events: none;
                     font-size: 0px;
                     opacity: 0;
                 }
                 .searchJumperNavBar.show {
                     pointer-events: all;
                     opacity: 1;
                 }
                 .search-jumper-showall > .searchJumperNavBar.show {
                     opacity: 0;
                 }
                 .searchJumperNavBar>.closeNavBtn {
                     width: 16px;
                     height: 16px;
                     fill: white;
                     cursor: pointer;
                 }
                 #navMarks>div.navPointer {
                     pointer-events: none;
                     position: absolute;
                     right: 20px;
                     text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
                     font-size: 30px;
                     line-height: 0px;
                     border: 0;
                     margin-top: 2px;
                     opacity: 0.8;
                     color: black;
                 }
                 #navMarks {
                     height: 100%;
                     width: 100%;
                     position: absolute;
                 }
                 #navMarks>span {
                     height: 0.5vh;
                     width: 100%;
                     position: absolute;
                     border: 1px solid #999999;
                     min-height: 3px;
                     box-sizing: border-box;
                     left: 0;
                     border-radius: 0px!important;
                 }
                 mark.searchJumper {
                     visibility: visible;
                     font-style: normal;
                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
                     border-radius: 3px;
                     text-decoration: none;
                     padding: 1px 0;
                 }
                 mark.searchJumper[data-current=true] {
                     border-bottom: 0.2em solid;
                     border-bottom-left-radius: 0;
                     border-bottom-right-radius: 0;
                     animation: 0.5s linear 0s 5 normal none running currentMark;
                 }
                 .searchJumperPosBar {
                     background: rgba(29, 93, 163, 0.3);
                     position: absolute;
                     min-height: 10px;
                     min-width: 10px;
                     animation-duration: 3s;
                     z-index: 2147483647;
                     margin: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s all ease;
                 }
                 .searchJumperPosBar.searchJumperPosW {
                     width: 100%;
                     left: 0;
                 }
                 .searchJumperPosBar.searchJumperPosH {
                     height: 100%;
                     top: 0;
                     position: fixed;
                 }
                 @keyframes fadeit {
                     from {opacity: 1;}
                     to {opacity: 0;}
                 }
                 @keyframes currentMark {
                     from {border-color: unset}
                     to {border-color: transparent;}
                 }
                 #rightSizeChange {
                     top: 0;
                     opacity: 0;
                     height: 55px;
                     width: 5px;
                     position: absolute;
                     cursor: e-resize;
                     right: 0;
                 }
                 .searchJumper-hide {
                     display: none!important;
                 }
                 .search-jumper-historylist>a.search-jumper-btn {
                     filter: drop-shadow(0px 0px 3px #00000050);
                 }
                 #search-jumper .listArrow {
                     width: 0;
                     height: 0;
                     border: 10px solid transparent;
                     pointer-events: none;
                     border-bottom-color: white;
                     position: fixed;
                     opacity: 0;
                     visibility: hidden;
                     z-index: 2147483647;
                     transition: opacity .3s ease, top .15s, bottom .15s, left .15s, right .15s;
                 }
                 #search-jumper.search-jumper-left .listArrow {
                     border-bottom-color: transparent;
                     border-right-color: white;
                 }
                 #search-jumper.search-jumper-right .listArrow {
                     border-bottom-color: transparent;
                     border-left-color: white;
                 }
                 #search-jumper.search-jumper-bottom .listArrow {
                     border-bottom-color: transparent;
                     border-top-color: white;
                 }
                 @media (prefers-color-scheme: dark) {
                     /* 站点列表 */
                     #search-jumper .sitelist > .sitelistCon > p {
                         background-color: #252B32 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127e0 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #DADADA !important;
                     }
                     #search-jumper .listArrow {
                         border-bottom-color: #1C2127;
                     }
                     #search-jumper.search-jumper-left .listArrow {
                         border-bottom-color: transparent;
                         border-right-color: #1C2127;
                     }
                     #search-jumper.search-jumper-right .listArrow {
                         border-bottom-color: transparent;
                         border-left-color: #1C2127;
                     }
                     #search-jumper.search-jumper-bottom .listArrow {
                         border-bottom-color: transparent;
                         border-top-color: #1C2127;
                     }

                     /* 历史列表 */
                     .search-jumper-historylist {
                         background-color: #181C20e0 !important;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 3px #ffffff50);
                     }

                     .search-jumper-showall a.search-jumper-word,
                     .search-jumper-showall a.search-jumper-word > span {
                         background-color: #292A2D !important;
                     }

                     .search-jumper-tips {
                         background-color: #3F4042 !important;
                     }

                     .search-jumper-showall a.search-jumper-word > span,
                     .search-jumper-tips {
                         color: #DADADA !important;
                     }

                     .search-jumper-showall .search-jumper-word:hover {
                         text-shadow: 0px 0px 5px #2374FF !important;
                     }

                     /* 类别 */
                     .search-jumper-showall .search-jumper-type,
                     .search-jumper-showall .search-jumper-logo {
                         background-color: #181C20 !important;
                     }
                 }
                 `;
                if (searchData.prefConfig.cssText) cssText += searchData.prefConfig.cssText;
                mainStyleEle = _GM_addStyle(cssText);

                let logoCon = document.createElement("span");
                logoCon.className = "search-jumper-logo";
                logoBtn = document.createElement("span");
                logoBtn.innerHTML = createHTML(logoBtnSvg);
                logoBtn.className = "search-jumper-btn";
                logoCon.addEventListener('mouseenter', e => {
                    if (this.preList) {
                        this.preList.style.visibility = "hidden";
                        this.listArrow.style.cssText = "";
                    }
                });

                logoCon.appendChild(logoBtn);

                let bar = document.createElement("span");
                bar.className = "search-jumper-searchBar";
                bar.appendChild(logoCon);

                let searchBarCon = document.createElement("div");
                searchBarCon.id = "search-jumper";
                searchBarCon.className = "search-jumper-searchBarCon";
                searchBarCon.appendChild(bar);
                searchBarCon.setAttribute("translate", "no");

                let alllist = document.createElement("div");
                alllist.id = "search-jumper-alllist";
                searchBarCon.appendChild(alllist);
                this.alllist = alllist;

                let showallBg = document.createElement("div");
                showallBg.className = "search-jumper-showallBg";
                searchBarCon.appendChild(showallBg);

                let sitelistBox = document.createElement("div");
                sitelistBox.className = "sitelistBox";
                alllist.appendChild(sitelistBox);
                this.sitelistBox = sitelistBox;

                alllist.addEventListener(getSupportWheelEventName(), e => {
                    if (e.target != alllist && e.target != showallBg && e.target != sitelistBox) return;
                    var deltaX, deltaY;
                    if(e.type !== 'wheel'){
                        var x = 0, y = 0;
                        if (typeof e.axis == 'number') {
                            if (e.axis == 2) {
                                y = e.detail;
                            } else {
                                x = e.detail;
                            }
                        } else {
                            if (typeof e.wheelDeltaY == 'undefined' || e.wheelDeltaY != 0) {
                                y = -e.wheelDelta / 40;
                            } else {
                                x = -e.wheelDelta / 40;
                            };
                        };
                        deltaY = y;
                        deltaX = x;

                    } else {
                        deltaX = e.deltaX;
                        deltaY = e.deltaY;
                    }
                    e.preventDefault();
                    e.stopPropagation();

                    alllist.scrollLeft += deltaY;
                }, { passive: false, capture: false });


                let logoConfigBtn = document.createElement("span");
                logoConfigBtn.innerHTML = createHTML(logoBtnSvg);
                logoConfigBtn.className = "search-jumper-btn";
                logoConfigBtn.addEventListener('click', e => {
                    _GM_openInTab(configPage, {active: true});
                });
                alllist.appendChild(logoConfigBtn);

                let historylist = document.createElement("div");
                historylist.className = "search-jumper-historylist";
                alllist.appendChild(historylist);
                this.historylist = historylist;

                bar.addEventListener('mouseenter', e => {
                    if (bar.classList.contains("grabbing")) return;
                    if (this.hideTimeout) {
                        clearTimeout(this.hideTimeout);
                    }
                    this.checkScroll(true);
                    if (searchData.prefConfig.mouseLeaveToHide) {
                        bar.classList.remove("initShow");
                    }
                }, false);
                if (searchData.prefConfig.mouseLeaveToHide) {
                    bar.addEventListener('mouseleave', e => {
                        if (bar.classList.contains("grabbing")) return;
                        this.waitForHide();
                    }, false);
                }

                if (searchData.prefConfig.initShow) {
                    bar.classList.add("initShow");
                } else {
                    let touched = false;
                    let touchBodyHandler = e => {
                        touched = false;
                        getBody(document).removeEventListener('touchstart', touchBodyHandler, { passive: true, capture: false });
                    };
                    let touchHandler = e => {
                        if (touched) return;
                        touched = true;
                        bar.classList.add('disable-pointer');
                        setTimeout(() => {
                            bar.classList.remove('disable-pointer');
                        }, 250);
                        getBody(document).addEventListener("touchstart", touchBodyHandler, { passive: true, capture: false });
                    };
                    bar.addEventListener('touchstart', touchHandler, { passive: true, capture: true });
                }

                this.bar = bar;
                this.con = searchBarCon;

                let tips = document.createElement("span");
                tips.className = "search-jumper-tips";
                tips.style.opacity = 0;
                searchBarCon.appendChild(tips);
                this.tips = tips;

                //this.appendBar();

                let searchJumperNavBar = document.createElement("div");
                searchJumperNavBar.className = "searchJumperNavBar";
                searchJumperNavBar.style.display = "none";
                searchJumperNavBar.innerHTML = createHTML(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                  <div id="navMarks"></div>
                `);
                searchBarCon.appendChild(searchJumperNavBar);

                let searchJumperExpand = document.createElement("span");
                searchJumperExpand.title = i18n('expand');
                searchJumperExpand.className = "searchJumperExpand search-jumper-btn";
                searchJumperExpand.innerHTML = createHTML(`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `);
                this.searchJumperExpand = searchJumperExpand;

                this.navMarks = searchJumperNavBar.querySelector("#navMarks");
                this.closeNavBtn = searchJumperNavBar.querySelector(".closeNavBtn");
                this.searchJumperNavBar = searchJumperNavBar;

                let searchInputDiv = document.createElement("div");
                searchInputDiv.className = "search-jumper-input";
                searchInputDiv.innerHTML = createHTML(`
                <svg class="closeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close search input</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                <input type="radio" id="filterSitesTab" name="tab" ${searchData.prefConfig.defaultFindTab? "" : "checked=\"checked\""} />
                <label for="filterSitesTab">${i18n("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${searchData.prefConfig.defaultFindTab? "checked=\"checked\"" : ""} />
                <label for="searchInPageTab">${i18n("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" title="${i18n("inputPlaceholder")}" placeholder="${i18n("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" placeholder="${i18n("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" title="${i18n("inPageTips")}" placeholder="${i18n("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `);
                searchBarCon.appendChild(searchInputDiv);
                this.searchInputDiv = searchInputDiv;
                this.searchInput = searchInputDiv.querySelector("#searchJumperInput");
                this.searchJumperInputKeyWords = searchInputDiv.querySelector("#searchJumperInputKeyWords");
                this.searchLockInput = searchInputDiv.querySelector(".search-jumper-lock-input");
                this.searchJumperInPageInput = searchInputDiv.querySelector("#searchJumperInPageInput");
                this.pickerBtn = searchInputDiv.querySelector("#pickerBtn");
                this.minEleBtn = searchInputDiv.querySelector("#minEleBtn");
                this.maxEleBtn = searchInputDiv.querySelector("#maxEleBtn");
                this.copyEleBtn = searchInputDiv.querySelector("#copyEleBtn");
                this.editBtn = searchInputDiv.querySelector("#editBtn");
                this.addWord = searchInputDiv.querySelector("#addWord");
                this.recoverBtn = searchInputDiv.querySelector("#recoverBtn");
                this.saveRuleBtn = searchInputDiv.querySelector("#saveRuleBtn");
                this.pinBtn = searchInputDiv.querySelector("#pinBtn");
                this.locBtn = searchInputDiv.querySelector("#locBtn");
                this.emptyBtn = searchInputDiv.querySelector("#emptyBtn");
                this.copyInPageBtn = searchInputDiv.querySelector("#copyInPageBtn");
                this.closeBtn = searchInputDiv.querySelector(".closeBtn");
                this.filterSites = searchInputDiv.querySelector("#filterSites");
                this.filterSitesTab = searchInputDiv.querySelector("#filterSitesTab");
                this.searchInPageTab = searchInputDiv.querySelector("#searchInPageTab");
                this.searchInPageLockWords = searchInputDiv.querySelector("#searchInPage>.lockWords");
                this.contentContainer = searchInputDiv.querySelector(".content-container");
                this.rightSizeChange = searchInputDiv.querySelector("#rightSizeChange");
                this.filterGlob = searchInputDiv.querySelector("#filterGlob");
                this.suggestDatalist = searchInputDiv.querySelector("#suggest");
            }

            showInPageSearch() {
                this.searchInPageTab.checked = true;
                this.showSearchInput();
                this.initSetInPageWords();
            }

            initSetInPageWords() {
                if (this.searchInPageTab.checked && !this.searchJumperInPageInput.value) {
                    let words = this.searchJumperInputKeyWords.value.replace(/^\*/, "") || getKeywords();
                    if (words) {
                        try {
                            words = decodeURIComponent(words);
                        } catch (e) {}
                    }
                    if (this.lockWords && this.lockWords.indexOf(words) !== -1) return;
                    this.searchJumperInPageInput.value = words || globalInPageWords;
                    if (!this.lockWords) {
                        this.submitIgnoreSpace(this.searchJumperInPageInput.value);
                        this.submitInPageWords();
                    }
                }
            }

            anylizeInPageWords(words, add, init) {
                if (!words) return [];
                let self = this;
                let result = [];
                if (!add) {
                    if (words.indexOf("$c") === 0 && words.length > 2) {
                        this.splitSep = words.substr(2, 1);
                        words = words.substr(3).trim();
                    } else if (words.indexOf("$o") === 0) {
                        this.splitSep = null;
                        words = words.substr(2).trim();
                    } else this.splitSep = " ";
                    this.curWordIndex = 0;
                }
                if (this.splitSep) {
                    words.split(this.splitSep).forEach(word => {
                        let oriWord = word;
                        word = word.trim();
                        if (!word) return;
                        if (init) {
                            if (word.length < (searchData.prefConfig.limitInPageLen || 1)) return;
                            if ((searchData.prefConfig.ignoreWords || []).includes(word.toLowerCase())) return;
                        }
                        let title = "";
                        let style = "";
                        let hideParent;
                        let inRange;
                        let isRe = false;
                        let reCase = "";
                        let titleReg = /\$t{(.*?)}($|\$)/;
                        let titleMatch = word.match(titleReg);
                        if (titleMatch) {
                            title = titleMatch[1];
                            word = word.replace(titleReg, "$2");
                        }
                        let hideParentReg = /\$p{(.*?)}($|\$)/;
                        let hideParentMatch = word.match(hideParentReg);
                        if (hideParentMatch) {
                            hideParent = parseInt(hideParentMatch[1]) || 0;
                            word = word.replace(hideParentReg, "$2");
                        }
                        let inRangeReg = /\$in{(.*?)}($|\$)/;
                        let inRangeMatch = word.match(inRangeReg);
                        if (inRangeMatch) {
                            inRange = inRangeMatch[1] || '';
                            word = word.replace(inRangeReg, "$2");
                        }
                        let styleReg = /\$s{(.*?)}($|\$)/;
                        let styleMatch = word.match(styleReg);
                        if (styleMatch) {
                            styleMatch = styleMatch[1].match(/(.*?);(.*)/);
                            style = self.getHighlightStyle(self.curWordIndex, styleMatch[1], styleMatch[2]);
                            word = word.replace(styleReg, "$2");
                        } else {
                            style = self.getHighlightStyle(self.curWordIndex, "", "");
                        }
                        let reMatch = word.match(/^\/(.*)\/(i?)($|\$)/);
                        if (reMatch) {
                            isRe = true;
                            word = reMatch[1];
                            reCase = reMatch[2];
                        }
                        result.push({content: word, isRe: isRe, reCase: reCase, title: title, style: style, oriWord: oriWord, hideParent: hideParent, inRange: inRange});
                        self.curWordIndex++;
                    });
                } else {
                    this.curWordIndex = 0;
                    let word = (add || "").replace(/^\$o/, "") + words;
                    result = [{content: word, isRe: false, reCase: "", title: "", style: ""}];
                }
                return result;
            }

            submitInPageWords(init) {
                let self = this;
                let words = this.searchJumperInPageInput.value;
                let wordSpans = [];
                if (!words) {
                    if (!this.lockWords) {
                        this.highlight("");
                        this.highlightSpans = {};
                    } else {
                        this.highlight("insert");
                        for (let i in this.highlightSpans) {
                            let span = this.highlightSpans[i];
                            let curList = this.marks[i];
                            this.setHighlightSpan(span, 0, curList ? curList.length : 1);
                        }
                    }
                    return wordSpans;
                }
                let targetWords = this.anylizeInPageWords(words, this.lockWords, !!init);
                if (!targetWords || targetWords.length == 0) return wordSpans;
                if (this.lockWords) {
                    this.lockWords += this.splitSep + words;
                } else this.lockWords = words;
                this.searchJumperInPageInput.value = "";
                if (!this.splitSep) {
                    this.searchInPageLockWords.innerHTML = createHTML();
                    this.highlight("");
                }
                this.highlight(targetWords);
                targetWords.forEach(word => {
                    if (!word) return;
                    let wordSpan = document.createElement("span");
                    wordSpan.innerHTML = word.content;
                    wordSpan.title = word.title ? JSON.parse('"' + word.title + '"') : word.content;
                    let background = word.style.match(/background: *(#?\w+)/);
                    if (background) wordSpan.style.background = background[1];
                    let color = word.style.match(/color: *(#?\w+)/);
                    if (color) wordSpan.style.color = color[1];

                    wordSpan.addEventListener("click", e => {
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    });
                    wordSpan.oncontextmenu = e => {
                        e.preventDefault();
                    };
                    wordSpan.addEventListener('dblclick', e => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (e.target.tagName.toUpperCase() === 'EM') return;
                        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
                        this.showModifyWindow(word, wordSpan);
                    }, true);
                    wordSpan.addEventListener("mousedown", e => {
                        if (e.button === 0) {
                            this.focusHighlightByText(word.content, true, wordSpan);
                        } else if (e.button === 2){
                            this.focusHighlightByText(word.content, false, wordSpan);
                        }
                    });
                    let removeBtn = document.createElement("div");
                    removeBtn.addEventListener("mousedown", e => {
                        wordSpan.parentNode.removeChild(wordSpan);
                        this.removeHighlightWord(word);
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    removeBtn.className = "removeWord";
                    removeBtn.innerHTML = createHTML(`<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("removeBtn")}</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>`);
                    wordSpan.appendChild(removeBtn);

                    let curList = this.marks[word.content];
                    this.setHighlightSpan(wordSpan, -1, curList ? curList.length : 1);
                    this.highlightSpans[word.content] = wordSpan;

                    this.searchInPageLockWords.appendChild(wordSpan);
                    wordSpans.push(wordSpan);
                });
                if (this.searchInPageLockWords.scrollTop <= 0) this.searchInPageLockWords.scrollTop = this.searchInPageLockWords.scrollHeight;
                this.searchJumperInPageInput.style.paddingLeft = this.searchInPageLockWords.clientWidth + 3 + "px";
                return wordSpans;
            }

            showCustomInputWindow(url, callback) {
                this.customInputCallback = callback;
                if (!this.customInputFrame) {
                    this.customInputCssText = `
                    .customInputFrame-body {
                        width: 300px;
                        min-height: 200px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 50%;
                        margin-top: -160px;
                        margin-left: -150px;
                        z-index: 2147483647;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        font-size: initial;
                    }
                    .customInputFrame-title {
                        background: #458bd1!important;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px;
                        border-radius: 10px 10px 0 0;
                    }
                    .customInputFrame-title>img {
                        margin: 5px;
                    }
                    .customInputFrame-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif;
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                        word-break: break-all;
                        max-width: 85%;
                    }
                    .customInputFrame-body input[type=text],
                    .customInputFrame-body input[type=number],
                    .customInputFrame-body textarea,
                    .customInputFrame-body select {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                    }
                    .customInputFrame-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .customInputFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                    }
                    .customInputFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    @media (prefers-color-scheme: dark) {
                      .customInputFrame-body,
                      .customInputFrame-input-title,
                      .customInputFrame-body input,
                      .customInputFrame-body textarea,
                      .customInputFrame-body select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .customInputFrame-body input:focus,
                      .customInputFrame-body textarea:focus,
                      .customInputFrame-body select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .customInputFrame-body input,
                      .customInputFrame-body textarea,
                      .customInputFrame-body select {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .customInputFrame-title,
                      .customInputFrame-buttons>button {
                        background: #245d8f!important;
                      }
                    }
                    `;
                    this.customInputCssEle = _GM_addStyle(this.customInputCssText);
                    let customInputFrame = document.createElement("div");
                    this.customInputFrame = customInputFrame;
                    customInputFrame.innerHTML = createHTML(`
                     <div class="customInputFrame-body">
                         <a href="${configPage}" class="customInputFrame-title" target="_blank">
                             <img width="32px" height="32px" src="${logoBase64}" />${i18n("customInputFrame")}
                         </a>
                         <div id="customGroup">
                         </div>
                         <div class="customInputFrame-input-title">${i18n("finalSearch")}</div>
                         <textarea name="finalSearch" type="text"></textarea>
                         <div class="customInputFrame-buttons">
                             <button id="cancel" type="button">${i18n("cancel")}</button>
                             <button id="customSubmit" type="button">${i18n("customSubmit")}</button>
                         </div>
                     </div>
                    `);
                    let cancelBtn = customInputFrame.querySelector("#cancel");
                    cancelBtn.addEventListener("click", e => {
                        if (customInputFrame.parentNode) {
                            customInputFrame.parentNode.removeChild(customInputFrame);
                        }
                    });
                    let customGroup = this.customInputFrame.querySelector("#customGroup");
                    this.customGroup = customGroup;
                    let finalSearch = this.customInputFrame.querySelector("[name='finalSearch']");
                    this.finalSearch = finalSearch;
                    finalSearch.addEventListener("click", e => {
                        let finalValue = finalSearch.dataset.url;
                        [].forEach.call(customGroup.children, ele => {
                            if (ele.tagName.toUpperCase() === 'DIV') return;
                            finalValue = finalValue.replace('◎', ele.value || '');
                        });
                        finalSearch.value = finalValue;
                    });
                    let customSubmit = customInputFrame.querySelector("#customSubmit");
                    customSubmit.addEventListener("click", e => {
                        if (finalSearch.value) {
                            this.customInputCallback(finalSearch.value);
                        }
                    });
                }
                this.customGroup.innerHTML = createHTML();
                let tempUrl = url;
                let inputMatch = tempUrl.match(/%input{(.*?)}/);
                while (inputMatch) {
                    let param = inputMatch[1];
                    if (param.indexOf("\"") === 0 && param.indexOf("\",\"") !== -1) {
                        param = param.substr(1, param.length - 2).split("\",\"");
                    } else {
                        param = param.split(",");
                    }
                    if (param.length === 2) {//select
                        let titleSplit = param[0];
                        if (titleSplit.indexOf("'") === 0 && titleSplit.indexOf("'/'") !== -1) {
                            titleSplit = titleSplit.substr(1, titleSplit.length - 2).split("'/'");
                        } else {
                            titleSplit = titleSplit.split("/");
                        }
                        let optionSplit = param[1];
                        if (optionSplit.indexOf("'") === 0 && optionSplit.indexOf("'/'") !== -1) {
                            optionSplit = optionSplit.substr(1, optionSplit.length - 2).split("'/'");
                        } else {
                            optionSplit = optionSplit.split("/");
                        }
                        let singleTitle = titleSplit.length === optionSplit.length + 1;
                        let inputTitle = document.createElement('div');
                        inputTitle.className = 'customInputFrame-input-title';
                        inputTitle.innerText = titleSplit[0];
                        this.customGroup.appendChild(inputTitle);
                        let paramSelect = document.createElement('select');

                        let option = document.createElement("option");
                        option.value = '';
                        option.innerText = '';
                        paramSelect.appendChild(option);

                        for (let i = 0; i < optionSplit.length; i++) {
                            let value = optionSplit[i];
                            let option = document.createElement("option");
                            option.value = value;
                            option.innerText = singleTitle ? titleSplit[i + 1] : value;
                            paramSelect.appendChild(option);
                        }
                        paramSelect.addEventListener("change", e => {
                            this.finalSearch.click();
                        });
                        this.customGroup.appendChild(paramSelect);
                    } else if (param.length === 1) {//input
                        let inputTitle = document.createElement('div');
                        inputTitle.className = 'customInputFrame-input-title';
                        inputTitle.innerText = param[0];
                        this.customGroup.appendChild(inputTitle);
                        let paramInput = document.createElement('input');
                        paramInput.type = 'text';
                        paramInput.addEventListener("change", e => {
                            this.finalSearch.click();
                        });
                        this.customGroup.appendChild(paramInput);
                    }
                    tempUrl = tempUrl.replace(inputMatch[0], '◎');
                    inputMatch = tempUrl.match(/%input{(.*?)}/);
                }
                this.finalSearch.dataset.url = tempUrl;
                this.finalSearch.value = tempUrl.replace(/◎/g, '');
                if (!this.customInputCssEle || !this.customInputCssEle.parentNode) this.customInputCssEle = _GM_addStyle(this.customInputCssText);
                document.documentElement.appendChild(this.customInputFrame);
            }

            showModifyWindow(word, wordSpan) {
                let oriWord;
                this.modifyWord = {};
                this.addNew = !word && !wordSpan;
                if (!this.addNew) {
                    oriWord = word.oriWord;
                    if (!oriWord) return;
                    this.modifyWord = word;
                    this.modifySpan = wordSpan;
                }
                if (!this.modifyFrame) {
                    this.modifyCssText = `
                    .searchJumperModify-body {
                        width: 300px;
                        min-height: 200px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 50%;
                        margin-top: -160px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                    }
                    .searchJumperModify-title {
                        background: #458bd1!important;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px;
                        border-radius: 10px 10px 0 0;
                    }
                    .searchJumperModify-title>img {
                        margin: 5px;
                    }
                    .searchJumperModify-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif;
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperModify-body>input[type=text],
                    .searchJumperModify-body>input[type=number],
                    .searchJumperModify-body>textarea {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                    }
                    .searchJumperModify-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperModify-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                    }
                    .searchJumperModify-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    #rangePickerBtn {
                        width: 28px;
                        float: right;
                        margin-top: -33px;
                        margin-right: 6px;
                        position: sticky;
                        display: block;
                        cursor: pointer;
                        background: rgb(255 255 255 / 80%);
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperModify-body,
                      .searchJumperModify-input-title,
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea,
                      .searchJumperModify-body>select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperModify-body>input:focus,
                      .searchJumperModify-body>textarea:focus,
                      .searchJumperModify-body>select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .searchJumperModify-title,
                      .searchJumperModify-buttons>button {
                        background: #245d8f!important;
                      }
                      #rangePickerBtn {
                        background: rgb(0 0 0 / 80%);
                        fill: white;
                      }
                    }
                    `;
                    this.modifyCssEle = _GM_addStyle(this.modifyCssText);
                    let modifyFrame = document.createElement("div");
                    this.modifyFrame = modifyFrame;
                    modifyFrame.id = "searchJumperModifyWord";
                    modifyFrame.innerHTML = createHTML(`
                     <div class="searchJumperModify-body">
                         <a href="${configPage}" class="searchJumperModify-title" target="_blank">
                             <img width="32px" height="32px" src="${logoBase64}" />${i18n("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${i18n("wordContent")}</div>
                         <input name="wordContent" type="text" />
                         <div class="searchJumperModify-input-title">${i18n("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${i18n("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${i18n("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${i18n("wordStyle")}</div>
                         <input name="wordStyle" placeholder="#333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${i18n("wordTitle")}</div>
                         <textarea name="wordTitle" type="text"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${i18n("cancel")}</button>
                             <button id="modify" type="button">${i18n("modify")}</button>
                         </div>
                     </div>
                    `);
                    let cancelBtn = modifyFrame.querySelector("#cancel");
                    cancelBtn.addEventListener("click", e => {
                        if (modifyFrame.parentNode) {
                            modifyFrame.parentNode.removeChild(modifyFrame);
                        }
                    });
                    let rangePickerBtn = modifyFrame.querySelector("#rangePickerBtn");
                    rangePickerBtn.addEventListener("click", e => {
                        Picker.getInstance().getSelector(selector => {
                            wordRange.value = selector;
                            modifyFrame.style.display = '';
                        });
                        modifyFrame.style.display = 'none';
                    });
                    let modifyBtn = modifyFrame.querySelector("#modify");
                    this.modifyBtn = modifyBtn;
                    modifyBtn.addEventListener("click", e => {
                        let newWord = wordContent.value;
                        if (!newWord) return;
                        let contentChange = newWord !== this.modifyWord.content;
                        let hide = wordHide.value;
                        if (hide) {
                            if (this.splitSep) hide = hide.replaceAll(this.splitSep, "");
                            hide = hide >= 0 ? hide : 0;
                            newWord += `$p{${hide}}`;
                        }
                        let style = wordStyle.value;
                        if (style) {
                            if (this.splitSep) style = style.replaceAll(this.splitSep, "");
                            newWord += `$s{${style}}`;
                        }
                        let title = JSON.stringify(wordTitle.value).replace(/^"|"$/g, "");
                        if (title) {
                            if (this.splitSep) title = title.replaceAll(this.splitSep, "");
                            newWord += `$t{${title}}`;
                        }
                        let range = wordRange.value;
                        if (range) {
                            if (this.splitSep) range = range.replaceAll(this.splitSep, "");
                            if (range !== this.modifyWord.inRange) contentChange = true;
                            newWord += `$in{${range}}`;
                        }
                        if (this.addNew) {
                            this.searchJumperInPageInput.value = newWord;
                            this.submitInPageWords();
                        } else {
                            this.replaceWord(this.modifyWord, newWord, this.modifySpan, contentChange);
                        }
                        if (modifyFrame.parentNode) {
                            modifyFrame.parentNode.removeChild(modifyFrame);
                        }
                    });
                }
                let wordContent = this.modifyFrame.querySelector("[name='wordContent']"),
                wordStyle = this.modifyFrame.querySelector("[name='wordStyle']"),
                wordTitle = this.modifyFrame.querySelector("[name='wordTitle']"),
                wordRange = this.modifyFrame.querySelector("[name='wordRange']"),
                wordHide = this.modifyFrame.querySelector("[name='wordHide']");

                if (this.addNew) {
                    wordContent.value = "";
                    wordStyle.value = "";
                    wordRange.value = "";
                    wordHide.value = "";
                    wordTitle.value = "";
                    this.modifyBtn.innerText = i18n('add');
                } else {
                    this.modifyBtn.innerText = i18n('modify');
                    let style = "";
                    let styleReg = /\$s{(.*?)}($|\$)/;
                    let styleMatch = oriWord.match(styleReg);
                    if (styleMatch) {
                        style = styleMatch[1];
                    }

                    wordContent.value = word.content || "";
                    wordStyle.value = style || "";
                    wordRange.value = word.inRange || "";
                    if (typeof word.hideParent !== 'undefined') wordHide.value = word.hideParent;
                    try {
                        wordTitle.value = word.title !== word.content ? JSON.parse('"' + word.title + '"') : "";
                    } catch (e) {
                        debug(e);
                    }
                }
                if (!this.modifyCssEle || !this.modifyCssEle.parentNode) this.modifyCssEle = _GM_addStyle(this.modifyCssText);
                getBody(document).appendChild(this.modifyFrame);
            }

            replaceWord(word, newWord, modifySpan, contentChange) {
                if (contentChange) {
                    if (modifySpan.parentNode) modifySpan.parentNode.removeChild(modifySpan);
                    this.removeHighlightWord(word);
                    this.searchJumperInPageInput.value = newWord;
                    this.submitInPageWords();
                } else {
                    let title = "";
                    let style = "";
                    let hideParent = -1;
                    let titleReg = /\$t{(.*?)}($|\$)/;
                    let titleMatch = newWord.match(titleReg);
                    if (titleMatch) {
                        title = titleMatch[1];
                        title = JSON.parse('"' + title + '"');
                    }
                    word.title = title;
                    modifySpan.title = title;
                    let styleReg = /\$s{(.*?)}($|\$)/;
                    let styleMatch = newWord.match(styleReg);
                    if (styleMatch) {
                        styleMatch = styleMatch[1].match(/(.*?);(.*)/);
                        style = self.getHighlightStyle(this.curWordIndex, styleMatch[1], styleMatch[2]);
                        word.style = style;
                        modifySpan.style = style;
                    }
                    let hideChange = false;
                    let hideParentReg = /\$p{(.*?)}($|\$)/;
                    let hideParentMatch = newWord.match(hideParentReg);
                    if (hideParentMatch) {
                        hideParent = parseInt(hideParentMatch[1]) || 0;
                        hideChange = hideParent != word.hideParent;
                    } else hideChange = typeof word.hideParent !== 'undefined';

                    if (hideChange) {
                        [].forEach.call(document.querySelectorAll(".searchJumper-hide"), hide => {
                            if (hide.dataset.content === word.content) {
                                hide.classList.remove("searchJumper-hide");
                                hide.style.display = "";
                                hide.removeAttribute('data-content');
                            }
                        });
                    }

                    this.marks[word.content].forEach(mark => {
                        if (mark) {
                            mark.title = title;
                            if (style) mark.style = style;

                            if (hideChange && hideParent != -1) {
                                let parentDepth = hideParent;
                                let parent = mark.parentElement;
                                while(parentDepth-- > 0 && parent) {
                                    parent = parent.parentElement;
                                }
                                if (parent) {
                                    parent.dataset.content = word.content;
                                    parent.classList.add("searchJumper-hide");
                                    parent.innerHTML = createHTML("");
                                }
                            }
                        }
                    });
                    if (hideParent == -1) {
                        delete word.hideParent;
                    } else word.hideParent = hideParent;
                    this.lockWords = this.lockWords.replace(word.oriWord, newWord);
                    word.oriWord = newWord;
                }
            }

            removeHighlightWord(word) {
                if (!this.lockWords) return;
                if (!this.splitSep) this.emptyInPageWords();
                if (!word.oriWord) return;
                if (this.lockWords.indexOf(word.oriWord) === -1) return;
                let preStr = this.lockWords.match(/^\$(c.|o)/);
                preStr = preStr ? preStr[0] : "";
                let targetArr = this.lockWords.replace(preStr, "").split(this.splitSep);
                let findIndex = targetArr.indexOf(word.oriWord);
                if (findIndex < 0) return;
                targetArr.splice(findIndex, 1);
                this.lockWords = preStr + targetArr.join(this.splitSep);
                delete this.highlightSpans[word.content];
                findIndex = this.curHighlightWords.indexOf(word);
                if (findIndex < 0) return;
                this.curHighlightWords.splice(findIndex, 1);

                this.marks[word.content].forEach(mark => {
                    if (mark.parentNode) {
                        let newNode = document.createTextNode(mark.innerText);
                        mark.parentNode.replaceChild(newNode, mark);
                        newNode.parentNode.normalize();
                    }
                });
                delete this.marks[word.content];
                let targetNav = this.navMarks.querySelector(`[data-content="${word.content}"]`);
                if (targetNav) targetNav.parentNode.removeChild(targetNav);
                this.searchJumperInPageInput.style.paddingLeft = this.searchInPageLockWords.clientWidth + 3 + "px";
            }

            emptyInPageWords() {
                this.searchInPageLockWords.innerHTML = createHTML();
                this.highlight("");
            }

            focusHighlightByText(text, fw, span) {
                let curList = this.marks[text];
                if (!curList || curList.length === 0) return;
                if (text != this.focusText) {
                    this.focusIndex = 0;
                    this.focusText = text;
                } else {
                    if (fw) {
                        if (this.focusIndex != curList.length - 1) {
                            this.focusIndex = this.focusIndex + 1;
                        } else this.focusIndex = 0;
                    } else {
                        if (this.focusIndex != 0) {
                            this.focusIndex = this.focusIndex - 1;
                        } else this.focusIndex = curList.length - 1;
                    }
                }
                this.focusHighlight(curList[this.focusIndex]);
                this.setHighlightSpan(span, this.focusIndex, curList.length);
            }

            focusHighlight(ele) {
                if (!ele) return;
                if (this.focusMark) this.focusMark.removeAttribute('data-current');
                setTimeout(() => {
                    ele.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                    ele.dataset.current=true;
                }, 0);
                this.focusMark = ele;
                if (!this.wPosBar) {
                    this.wPosBar = document.createElement("div");
                    this.hPosBar = document.createElement("div");
                    this.wPosBar.className = "searchJumperPosBar searchJumperPosW";
                    this.hPosBar.className = "searchJumperPosBar searchJumperPosH";
                }
                if (!this.wPosBar.parentNode) {
                    getBody(document).appendChild(this.wPosBar);
                    getBody(document).appendChild(this.hPosBar);
                }

                this.wPosBar.style.top = getElementTop(ele) + "px";
                this.wPosBar.style.height = ele.offsetHeight + "px";

                this.hPosBar.style.left = getElementLeft(ele) + "px";
                this.hPosBar.style.width = ele.offsetWidth + "px";

                this.wPosBar.style.animationName = "";
                this.hPosBar.style.animationName = "";
                setTimeout(() => {
                    this.wPosBar.style.animationName = "fadeit";
                    this.hPosBar.style.animationName = "fadeit";
                }, 0);

            }

            getHighlightSpanByText(text) {
                return this.highlightSpans[text];
            }

            setHighlightSpan(span, index, len) {
                if (!span) return;
                let numEle = span.querySelector("em");
                if (!numEle) {
                    numEle = document.createElement("em");
                    span.insertBefore(numEle, span.firstChild);
                }
                index++;
                numEle.innerHTML = createHTML("[" + index + "/" + len + "]");
            }

            getHighlightStyle(index, background, addCssText) {
                if (!background && !addCssText) {
                    let setCss = searchData.prefConfig.inPageWordsStyles[index];
                    if (setCss) return setCss;
                }
                addCssText = addCssText || "";
                function geneRandomColor() {
                    let r, g, b;
                    r = Math.floor(256 * Math.random());
                    g = Math.floor(256 * Math.random());
                    b = Math.floor(256 * Math.random());
                    r = r.toString(16);
                    if (r.length === 1) r = "0" + r;
                    g = g.toString(16);
                    if (g.length === 1) g = "0" + g;
                    b = b.toString(16);
                    if (b.length === 1) b = "0" + b;
                    return "#" + r + g + b;
                }

                function getWordColor(bg) {
                    if (bg.indexOf("#") !== 0) return "";
                    if (bg === "#ffff00") return "black";
                    bg = bg.substr(1);
                    let r, g, b;
                    r = parseInt(bg.substr(0, 2), 16);
                    g = parseInt(bg.substr(2, 2), 16);
                    b = parseInt(bg.substr(4, 2), 16);
                    let bgBrightness = r * 0.299 + g * 0.587 + b * 0.114;
                    r = 255 - r;
                    g = 255 - g;
                    b = 255 - b;

                    let wordBrightness = r * 0.299 + g * 0.587 + b * 0.114;
                    let diff = Math.abs(wordBrightness - bgBrightness);
                    if (diff <= 128) {
                        if (bgBrightness > 158) {
                            return "#000000";
                        } else {
                            return "#FFFFFF";
                        }
                    }
                    r = r.toString(16);
                    if (r.length === 1) r = "0" + r;
                    g = g.toString(16);
                    if (g.length === 1) g = "0" + g;
                    b = b.toString(16);
                    if (b.length === 1) b = "0" + b;
                    return "#" + r + g + b;
                }
                if (!background) {
                    background = searchData.prefConfig.firstFiveWordsColor[index];
                }
                if (!background) {
                    switch (index) {
                        case 0:
                            background = "#ffff00";
                            break;
                        case 1:
                            background = "#e91e63";
                            break;
                        case 2:
                            background = "#00bcd4";
                            break;
                        case 3:
                            background = "#008000";
                            break;
                        case 4:
                            background = "#800080";
                            break;
                        default:
                            background = geneRandomColor();
                            break;
                    }
                }
                if (background) {
                    let color = getWordColor(background);
                    if (color) color = "color:" + color + ";";
                    background = `background:${background};${color}`;
                }
                return `${background}${addCssText}`;
            }

            highlight(words, ele, root) {
                if (!words && (!this.curHighlightWords || this.curHighlightWords.length === 0)) return;
                if (!ele) {
                    this.highlight(words, getBody(document), root);
                    [].forEach.call(document.getElementsByTagName("iframe"), iframe => {
                        let iframeDoc;
                        try {
                            iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                        } catch(e) {
                            return;
                        }
                        if (iframeDoc && getBody(iframeDoc)) {
                            this.highlight(words, getBody(iframeDoc), root);
                        }
                    });
                    return;
                }
                ele = ele || getBody(document);
                if (ele.contentEditable == 'true' || (
                    ele.parentNode && ele.parentNode.contentEditable == 'true'
                )) return;
                let preEles = [];
                let searchingPre = false;
                let self = this;
                if (words === "") {
                    Object.values(this.marks).forEach(markList => {
                        if (!markList) return;
                        markList.forEach(mark => {
                            if (!mark.parentNode) return;
                            let newNode = document.createTextNode(mark.innerText);
                            mark.parentNode.replaceChild(newNode, mark);
                            newNode.parentNode.normalize();
                        });
                    });
                    [].forEach.call(ele.querySelectorAll(".searchJumper-hide"), hide => {
                        hide.classList.remove("searchJumper-hide");
                        hide.style.display = "";
                        hide.removeAttribute('data-content');
                    });
                    this.navMarks.innerHTML = createHTML();
                    this.marks = {};
                    this.curHighlightWords = [];
                    return;
                }
                if (words === "insert") {
                    words = this.curHighlightWords;
                    this.refreshNavMarks();
                } else {
                    this.curHighlightWords = (this.curHighlightWords || []).concat(words);
                }
                function searchWithinNode(node, word) {
                    let len, pos = -1, skip, spannode, middlebit, middleclone;
                    skip = 0;
                    if (node.nodeType == 3 && (typeof word.hideParent !== 'undefined' || node.parentNode.tagName.toUpperCase() == "BODY" || node.parentNode.offsetParent || (node.parentNode.scrollHeight && node.parentNode.scrollWidth))) {
                        if (word.isRe) {
                            let wordMatch = node.data.match(new RegExp(word.content, word.reCase));
                            if (wordMatch) {
                                let content = wordMatch[0] || wordMatch;
                                len = content.length;
                                pos = node.data.indexOf(content);
                            }
                        } else {
                            len = word.content.length;
                            pos = node.data.toUpperCase().indexOf(word.content.toUpperCase());
                            if (pos >= 0 && /^[a-z]+$/i.test(word.content)) {
                                if (pos !== 0 && /[a-z]/i.test(node.data[pos - 1])) {
                                    pos = -1;
                                }
                                if (pos + word.content.length !== node.data.length && /[a-z]/i.test(node.data[pos + word.content.length])) {
                                    pos = -1;
                                }
                            }
                        }
                        if (pos >= 0) {
                            if (typeof word.hideParent !== 'undefined') {
                                let parentDepth = word.hideParent;
                                let parent = node.parentElement;
                                while(parentDepth-- > 0 && parent) {
                                    parent = parent.parentElement;
                                }
                                if (parent) {
                                    parent.innerHTML = createHTML("");
                                    parent.dataset.content = word.content;
                                    parent.classList.add("searchJumper-hide");
                                    return;
                                }
                            }
                            let curList = self.marks[word.content];
                            let index = curList.length;
                            spannode = document.createElement("mark");
                            spannode.className = "searchJumper";
                            if (word.title) spannode.title = JSON.parse('"' + word.title + '"');
                            spannode.style.cssText = word.style;
                            spannode.addEventListener("click", e => {
                                if (!e.altKey) return;
                                e.stopPropagation();
                                e.preventDefault();
                                return false;
                            });
                            spannode.dataset.content = word.content;
                            spannode.addEventListener("mousedown", e => {
                                if (!e.altKey) return;
                                let target;
                                if (e.button === 0) {
                                    if (index != curList.length - 1) {
                                        self.focusIndex = index + 1;
                                    } else self.focusIndex = 0;
                                } else if (e.button === 2){
                                    if (index != 0) {
                                        self.focusIndex = index - 1;
                                    } else self.focusIndex = curList.length - 1;
                                }
                                target = curList[self.focusIndex];
                                self.focusHighlight(target);
                                self.setHighlightSpan(self.getHighlightSpanByText(word.content), self.focusIndex, curList.length);
                                self.focusText = word.content;
                            });
                            middlebit = node.splitText(pos);
                            middlebit.splitText(len);
                            middleclone = middlebit.cloneNode(true);
                            spannode.appendChild(middleclone);
                            middlebit.parentNode.replaceChild(spannode, middlebit);
                            self.marks[word.content].push(spannode);

                            let navMark = document.createElement("span");
                            let top = getElementTop(spannode);
                            navMark.dataset.top = top;
                            navMark.dataset.content = word.content;
                            navMark.style.top = top / document.documentElement.scrollHeight * 100 + "vh";
                            navMark.style.background = spannode.style.background || "yellow";
                            navMark.addEventListener("click", e => {
                                e.stopPropagation();
                                e.preventDefault();
                                self.focusIndex = index;
                                self.focusHighlight(spannode);
                                self.setHighlightSpan(self.getHighlightSpanByText(word.content), index, curList.length);
                                self.navMarks.appendChild(self.navPointer);
                                self.navPointer.style.top = navMark.style.top;
                                return false;
                            }, true);
                            self.navMarks.appendChild(navMark);

                            skip = 1;
                        }
                    } else if ((!root || node === ele) &&
                               node.nodeType == 1 &&
                               node.childNodes &&
                               node.tagName.toUpperCase() != "SCRIPT" &&
                               node.tagName.toUpperCase() != "STYLE" &&
                               node.tagName.toUpperCase() != "TEXTAREA" &&
                               node.contentEditable != 'true' &&
                               node.ariaHidden != 'true' &&
                               (!node.hasAttribute || node.hasAttribute('jsname') == false) &&
                               node.tagName.toUpperCase() != "MARK") {
                        if (!searchingPre && (node.tagName.toUpperCase() === "PRE" || node.tagName.toUpperCase() === "CODE")) {
                            preEles.push(node);
                        } else {
                            for (var child = 0; child < node.childNodes.length; ++child) {
                                child = child + searchWithinNode(node.childNodes[child], word);
                            }
                        }
                    }
                    return skip;
                }
                words.forEach(w => {
                    if (!self.marks[w.content]) {
                        self.marks[w.content] = [];
                    }
                    if (w.inRange) {
                        [].forEach.call(ele.querySelectorAll(w.inRange), e => {
                            searchWithinNode(e, w);
                        })
                    } else searchWithinNode(ele, w);
                });
                setTimeout(() => {
                    searchingPre = true;
                    words.forEach(w => {
                        preEles.forEach(e => {
                            searchWithinNode(e, w);
                        });
                    });
                }, 1000);
                if (this.navMarks.innerHTML != "") {
                    this.searchJumperNavBar.classList.add("show");
                }
            }

            refreshPageWords() {
                this.lockWords = "";
                this.searchJumperInPageInput.value = "";
                this.searchInPageLockWords.innerHTML = createHTML();
                this.searchJumperInPageInput.style.paddingLeft = "";
                this.submitInPageWords();
                if (globalInPageWords) {
                    this.searchJumperInPageInput.value = globalInPageWords;
                    this.submitInPageWords();
                    this.appendBar();
                }
            }

            refreshNav() {
                this.setNav(navEnable);
            }

            refreshNavMarks() {
                if (this.refreshNavMarksTimer) clearTimeout(this.refreshNavMarksTimer);
                this.refreshNavMarksTimer = setTimeout(() => {
                    [].forEach.call(this.navMarks.querySelectorAll("span"), m => {
                        m.style.top = m.dataset.top / document.documentElement.scrollHeight * 100 + "vh";
                    });
                }, 500);
            }

            checkCharacterData(target) {
                setTimeout(() => {
                    this.highlight("insert", target, true);
                }, 0);
            }

            removeMark(removedNode) {
                let content = removedNode.dataset.content;
                let markList = this.marks[content];
                if (!markList) return;
                var index = markList.indexOf(removedNode);
                if (index === -1) return;
                markList.splice(index, 1);
                this.marks[content] = markList;
                let navMark = this.navMarks.querySelectorAll(`span[data-content="${content}"]`)[index];
                if (navMark) this.navMarks.removeChild(navMark);
            }

            submitIgnoreSpace(value) {
                if (!value) return;
                if (!this.lockWords && value.indexOf("$c") !== 0 && value.indexOf("$o") !== 0 && value.indexOf(" ") !== -1) {
                    this.splitSep = "◎";
                    value = "$c" + this.splitSep + value;
                }
                this.searchJumperInPageInput.value = value;
                this.submitInPageWords();
            }

            siteBtnReturnHome(btn) {
                for (let i = 0; i < searchTypes.length; i++) {
                    let typeBtn = searchTypes[i];
                    if (typeBtn.dataset.type == btn.dataset.type) {
                        if (btn.dataset.id) {
                            let curIndex = parseInt(btn.dataset.id);
                            for (let j = 1; j < typeBtn.children.length; j++) {
                                let targetIndex = parseInt(typeBtn.children[j].dataset.id);
                                if (isNaN(targetIndex) || curIndex < targetIndex) {
                                    typeBtn.insertBefore(btn, typeBtn.children[j]);
                                    break;
                                } else if (j == typeBtn.children.length - 1) {
                                    typeBtn.appendChild(btn);
                                    break;
                                }
                            }
                            //typeBtn.insertBefore(btn, typeBtn.children[parseInt(btn.dataset.id) - parseInt(typeBtn.dataset.id) + 1]);
                        } else typeBtn.insertBefore(btn, typeBtn.children[1]);
                        break;
                    }
                }
            }

            closeShowAll() {
                if (!this.con.classList.contains("search-jumper-showall") || isAllPage) return;
                this.clearInputHide();
                document.removeEventListener("mousedown", self.showAllMouseHandler);
                document.removeEventListener("keydown", self.showAllKeydownHandler);
                this.con.classList.remove("search-jumper-showall");
                this.searchJumperInputKeyWords.value = "";
                this.historySiteBtns.slice(0, 10).forEach(btn => {
                    this.siteBtnReturnHome(btn);
                });
                this.bar.style.display = "";
                this.initPos();
            }

            showAllSites() {
                if (!this.con || !this.con.parentNode || this.con.classList.contains("search-jumper-showall")) return;
                this.clearInputHide();
                this.alllist.appendChild(this.filterSites);
                this.filterGlob.innerHTML = createHTML();
                let self = this;
                this.setFuncKeyCall(false);
                this.hideSearchInput();
                this.con.classList.add("search-jumper-showall");
                searchTypes.forEach(type => {
                    if (type.style.display != 'none') {
                        let sitelist = type.querySelector('.sitelist');
                        if (sitelist) {
                            self.sitelistBox.appendChild(sitelist);
                            self.initList(sitelist);
                        }
                    }
                });
                this.historySiteBtns.slice(0, 10).forEach(btn => {
                    self.historylist.appendChild(btn);
                });
                let targetKw = "";
                if (targetElement &&
                    (targetElement.tagName.toUpperCase() == 'A' ||
                     (targetElement.parentNode && targetElement.parentNode.tagName.toUpperCase() == 'A'))) {
                    targetKw = targetElement.textContent.trim();
                }
                let kw = getKeywords() || targetKw || cacheKeywords;
                this.searchJumperInputKeyWords.value = kw;
                setTimeout(() => {
                    if (!self.showAllMouseHandler) {
                        self.showAllMouseHandler = e => {
                            if (e.isTrusted == false || e.target.className === 'sitelistBox' || e.target.className === 'search-jumper-showallBg' || e.target.className === 'search-jumper-historylist') {
                                self.closeShowAll();
                            }
                        };
                    }
                    document.addEventListener("mousedown", self.showAllMouseHandler);

                    if (!self.showAllKeydownHandler) {
                        self.showAllKeydownHandler = e => {
                            if (e.keyCode == 27) {
                                self.closeShowAll();
                            }
                        };
                    }
                    document.addEventListener("keydown", self.showAllKeydownHandler);
                    if (this.searchJumperInputKeyWords.value) this.searchJumperInputKeyWords.focus();
                }, 0);
            }

            switchSite(next) {
                if (!currentSite || this.bar.style.display == "none") return;
                let siteEle = this.con.querySelector(".search-jumper-btn.current");
                if (next) {
                    siteEle = siteEle.nextElementSibling;
                    while(siteEle) {
                        if (!siteEle.classList.contains("notmatch") && siteEle.style.display != "none" && siteEle.dataset.current != "true" && siteEle.dataset.isPage == "true") {
                            break;
                        }
                        siteEle = siteEle.nextElementSibling;
                    }
                } else {
                    siteEle = siteEle.previousElementSibling;
                    while(siteEle) {
                        if (!siteEle.classList.contains("notmatch") && siteEle.style.display != "none" && siteEle.dataset.current != "true" && siteEle.dataset.isPage == "true") {
                            break;
                        }
                        siteEle = siteEle.previousElementSibling;
                    }
                }
                if (siteEle) {
                    this.openSiteBtn(siteEle, "_self");
                }
            }

            clearInputHide() {
                searchTypes.forEach(type => {
                    type.classList.remove("input-hide");
                });
                this.allSiteBtns.forEach(btn => {
                    btn[0].classList.remove("input-hide");
                });
                this.allListBtns.forEach(listItem => {
                    listItem.classList.remove("input-hide");
                });
                this.allLists.forEach(listCon => {
                    listCon.classList.remove("input-hide");
                });
            }

            showSearchInput() {
                if (this.con && this.con.classList.contains("search-jumper-showall")) return;
                let selectStr = getSelectStr();
                this.recoveHistory();
                this.con.classList.add("in-input");
                this.searchInput.value = "";
                this.contentContainer.appendChild(this.filterSites);
                if (this.filterSitesTab.checked) {
                    this.searchInput.focus();
                    if (!this.initShowPicker && searchData.prefConfig.defaultPicker) {
                        this.initShowPicker = true;
                        this.togglePicker();
                    }
                    if (this.bar.classList.contains("search-jumper-isInPage")) {
                        //this.lockSearchInput("*");
                        this.searchJumperInputKeyWords.value = selectStr;
                        //this.searchJumperInputKeyWords.focus();
                    } else if (!this.searchJumperInputKeyWords.value && currentSite) {
                        this.searchJumperInputKeyWords.value = getKeywords() || cacheKeywords;
                        this.searchJumperInputKeyWords.focus();
                    }
                    let firstType = this.bar.querySelector('.search-jumper-needInPage:not(.notmatch)>span');
                    if (firstType && !firstType.parentNode.classList.contains('search-jumper-open')) {
                        firstType.onmousedown();
                    }
                } else if (this.searchInPageTab.checked) {
                    this.searchJumperInPageInput.focus();
                    if (!this.searchJumperInPageInput.value) {
                        this.submitIgnoreSpace(selectStr);
                    }
                }
                this.inInput = true;
                this.clearInputHide();
                if (this.lockWords) this.searchJumperInPageInput.style.paddingLeft = this.searchInPageLockWords.clientWidth + 3 + "px";
                if (searchData.prefConfig.altToHighlight) {
                    document.removeEventListener("mouseup", this.checkSelHandler);
                    document.addEventListener("mouseup", this.checkSelHandler);
                }
            }

            togglePicker() {
                this.pickerBtn.classList.toggle("checked");
                this.searchJumperInputKeyWords.disabled = !this.searchJumperInputKeyWords.disabled;
                Picker.getInstance().toggle();
            }

            hideSearchInput() {
                this.inInput = false;
                this.clearInputHide();
                this.con.classList.remove("in-input");
                this.con.classList.remove("lock-input");
                this.searchInput.value = "";
                this.searchJumperInputKeyWords.value = "";
                this.pickerBtn.classList.remove("checked");
                this.searchJumperInputKeyWords.disabled = false;
                Picker.getInstance().close();
                document.removeEventListener("mouseup", this.checkSelHandler);
                let openType = this.bar.querySelector('.search-jumper-type.search-jumper-open>span');
                if (openType) {
                    openType.onmousedown();
                }
            }

            removeBar() {
                if (this.con.parentNode) {
                    this.con.parentNode.removeChild(this.con);
                }
            }

            appendBar() {
                if (!this.con.parentNode) {
                    document.documentElement.appendChild(this.con);
                    setTimeout(() => {
                        if (getComputedStyle(this.con).zIndex != "2147483647") {
                            disabled = true;
                            this.removeBar();
                        } else disabled = false;
                    }, 1);
                }
            }

            searchBySiteName(siteName, e) {
                for (let i = 0; i < this.allSiteBtns.length; i++) {
                    let siteBtn = this.allSiteBtns[i][0];
                    if (siteBtn.dataset.name == siteName) {
                        let mouseDownEvent = new PointerEvent("mousedown", {altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, metaKey: e.metaKey})
                        siteBtn.dispatchEvent(mouseDownEvent);
                        let isPage = /^(https?|ftp):/.test(siteBtn.href);
                        if (isPage) {
                            siteBtn.setAttribute("target", "_blank");
                        }
                        if (!this.customInput) {
                            if (siteBtn.onclick || !isPage) {
                                siteBtn.click();
                            } else {
                                _GM_openInTab(siteBtn.href, {active: true});
                            }
                        }
                        if (isPage) {
                            siteBtn.setAttribute("target", siteBtn.dataset.target == 1 ? "_blank" : "_self");
                        }
                        return;
                    }
                }
            }

            autoGetFirstType() {
                if (!targetElement || !targetElement.tagName) targetElement = getBody(document);
                let firstType;
                switch (targetElement.tagName.toUpperCase()) {
                    case 'IMG':
                        firstType = this.bar.querySelector('.search-jumper-targetImg:not(.notmatch)');
                        break;
                    case 'AUDIO':
                        firstType = this.bar.querySelector('.search-jumper-targetAudio:not(.notmatch)');
                        break;
                    case 'VIDEO':
                        firstType = this.bar.querySelector('.search-jumper-targetVideo:not(.notmatch)');
                        break;
                    case 'A':
                        if (getSelectStr()) {
                            firstType = this.bar.querySelector('.search-jumper-needInPage:not(.notmatch)');
                        } else {
                            firstType = this.bar.querySelector('.search-jumper-targetLink:not(.notmatch)');
                        }
                        break;
                    default:
                        if (getSelectStr()) {
                            firstType = this.bar.querySelector('.search-jumper-needInPage:not(.notmatch)');
                        } else if (targetElement.parentNode.tagName.toUpperCase() === 'A') {
                            firstType = this.bar.querySelector('.search-jumper-targetLink:not(.notmatch)');
                        } else {
                            firstType = this.bar.querySelector('.search-jumper-targetPage:not(.notmatch)');
                        }
                        break;
                }
                if (!firstType) firstType = this.bar.querySelector('.search-jumper-targetAll:not(.notmatch)') || this.bar.querySelector('.search-jumper-type');
                return firstType;
            }

            searchAuto(index, e) {
                if (!index) index = 0;
                let firstType = this.autoGetFirstType();
                if (!firstType) return;
                let targetSites = firstType.querySelectorAll('a.search-jumper-btn:not(.notmatch)');
                if (index < targetSites.length) {
                    let targetSite = targetSites[index];
                    this.searchBySiteName(targetSite.dataset.name, e);
                }
            }

            setNav(enable, noSave) {
                if (!noSave && navEnable != enable) {
                    storage.setItem("navEnable", enable || "");
                    navEnable = enable;
                }
                if (enable) {
                    this.locBtn.classList.add("checked");
                    this.searchJumperNavBar.style.display = "";
                } else {
                    this.locBtn.classList.remove("checked");
                    this.searchJumperNavBar.style.display = "none";
                    if (this.navPointer.parentNode) this.navPointer.parentNode.removeChild(this.navPointer);
                }
            }

            lockSearchInput(lockWords) {
                this.lockSiteKeywords = true;
                this.searchLockInput.innerText = lockWords;
                this.con.classList.add("lock-input");
                this.searchInput.value = "";
                this.searchInput.style.paddingLeft = `${15 + this.searchLockInput.scrollWidth}px`;
                this.searchInput.placeholder = i18n("inputKeywords");
            }

            async initRun() {
                let self = this;
                this.siteIndex = 1;
                this.customInput = false;
                this.fontPool = [];
                this.allSiteBtns = [];
                this.allListBtns = [];
                this.allLists = [];
                this.bar.style.visibility = "hidden";
                let sitesNum = 0;
                let bookmarkTypes = [];
                this.checkSelHandler = e => {
                    if (!e.altKey) return;
                    if (this.searchInPageTab.checked && window.getSelection().toString()) {
                        this.showSearchInput();
                    }
                };

                //Search in page
                this.splitSep = " ";
                this.lockWords = "";
                this.marks = {};
                this.initInPageWords = [];
                this.highlightSpans = {};
                this.curHighlightWords = [];
                this.curWordIndex = 0;
                this.navPointer = document.createElement("div");
                this.navPointer.className = "navPointer";
                this.navPointer.innerHTML = createHTML(">");
                let editFunc = () => {
                    this.searchJumperInPageInput.focus();
                    this.highlight("");
                    let words = this.lockWords.trim();
                    if (!words) {
                        this.submitInPageWords();
                        return;
                    }
                    if (this.searchJumperInPageInput.value) words += this.splitSep + this.searchJumperInPageInput.value;
                    this.lockWords = "";
                    this.searchJumperInPageInput.value = words;
                    this.searchInPageLockWords.innerHTML = createHTML();
                    this.searchJumperInPageInput.style.paddingLeft = "";
                };
                document.addEventListener("keydown", e => {
                    if (e.keyCode === 27) {
                        if (this.inInput) {
                            this.hideSearchInput();
                        } else {
                            this.highlight("");
                        }
                    }
                });
                this.searchJumperInPageInput.addEventListener("keydown", e => {
                    switch(e.keyCode) {
                        case 8://退格
                            if (!this.searchJumperInPageInput.value) {
                                editFunc();
                            }
                            break;
                        case 9://tab
                            e.stopPropagation();
                            e.preventDefault();
                            this.filterSitesTab.checked = true;
                            this.searchInput.focus();
                            break;
                        case 13://回车
                            {
                                let spans = this.submitInPageWords();
                                if (spans && spans.length > 0) {
                                    let lastSpan = spans.pop();
                                    var mouseEvent = new PointerEvent("mousedown", {which: 1});
                                    lastSpan.dispatchEvent(mouseEvent);
                                }
                            }
                            break;
                        default:
                            break;
                    }
                });
                this.editBtn.addEventListener("click", e => {
                    editFunc();
                });
                this.addWord.addEventListener("click", e => {
                    this.showModifyWindow();
                });
                this.searchInPageTab.addEventListener("change", e => {
                    this.initSetInPageWords();
                    this.searchJumperInPageInput.focus();
                });
                this.filterSitesTab.addEventListener("change", e => {
                    this.searchInput.focus();
                });
                if (globalInPageWords) {
                    this.recoverBtn.addEventListener("click", e => {
                        this.lockWords = "";
                        this.searchJumperInPageInput.value = globalInPageWords;
                        this.searchInPageLockWords.innerHTML = createHTML();
                        this.highlight("");
                        this.submitInPageWords();
                        this.searchJumperInPageInput.focus();
                    });
                    this.pinBtn.classList.add("checked");
                } else {
                    this.recoverBtn.style.display = "none";
                }
                this.pinBtn.addEventListener("click", e => {
                    this.submitInPageWords();
                    if (this.pinBtn.classList.contains("checked")) {
                        storage.setItem("globalInPageWords", "");
                        this.pinBtn.classList.remove("checked");
                    } else if (this.lockWords) {
                        storage.setItem("globalInPageWords", this.lockWords);
                        this.pinBtn.classList.add("checked");
                    }
                });
                this.saveRuleBtn.addEventListener("click", e => {
                    if (!this.lockWords) return;
                    let inPageRule = searchData.prefConfig.inPageRule || {};
                    inPageRule[location.href] = this.lockWords;
                    searchData.prefConfig.inPageRule = inPageRule;
                    searchData.lastModified = new Date().getTime();
                    storage.setItem("searchData", searchData);
                    _GM_notification(i18n("save completed"));
                });
                this.emptyBtn.addEventListener("click", e => {
                    this.lockWords = "";
                    this.searchJumperInPageInput.value = "";
                    this.searchInPageLockWords.innerHTML = createHTML();
                    this.searchJumperInPageInput.style.paddingLeft = "";
                    this.submitInPageWords();
                    this.searchJumperInPageInput.focus();
                });
                this.copyInPageBtn.addEventListener("click", e => {
                    if (!this.lockWords) return;
                    _GM_setClipboard(this.lockWords);
                    _GM_notification('Copied successfully!');
                });
                this.setNav(navEnable);
                this.locBtn.addEventListener("click", e => {
                    this.setNav(!this.locBtn.classList.contains("checked"));
                });
                this.closeNavBtn.addEventListener("click", e => {
                    if (this.lockWords) {
                        this.lockWords = "";
                        this.searchJumperInPageInput.value = "";
                        this.searchInPageLockWords.innerHTML = createHTML();
                        this.searchJumperInPageInput.style.paddingLeft = "";
                        this.submitInPageWords();
                        this.searchJumperInPageInput.focus();
                        this.setNav(false, true);
                    } else {
                        this.setNav(false);
                    }
                });
                this.navMarks.addEventListener("click", e => {
                    let topPercent = e.offsetY / this.navMarks.clientHeight * 100;
                    let sortedMarks = [].slice.call(this.navMarks.querySelectorAll("span"));
                    sortedMarks.sort((a, b) => {
                        a = parseFloat(a.style.top);
                        b = parseFloat(b.style.top);
                        if (a > b) return 1;
                        if (a < b) return -1;
                        return 0;
                    });
                    let mark;
                    for (let i = 0; i < sortedMarks.length; i++) {
                        mark = sortedMarks[i];
                        let markTop = parseFloat(mark.style.top);
                        if (markTop > topPercent) {
                            if (i > 0) {
                                let preMark = sortedMarks[i - 1];
                                let preMarkTop = parseFloat(preMark.style.top);
                                if (markTop - topPercent > topPercent - preMarkTop) {
                                    mark = preMark;
                                }
                            }
                            break;
                        }
                    }
                    if (mark) {
                        mark.click();
                    }
                });
                //Search in page

                let expandTypeHandler = e => {
                    let typeEle = this.searchJumperExpand.parentNode;
                    if (!typeEle || !typeEle.classList.contains('not-expand')) return;
                    typeEle.classList.remove('not-expand');
                    let leftRight = this.con.classList.contains("search-jumper-left") ||
                        this.con.classList.contains("search-jumper-right");
                    typeEle.removeChild(this.searchJumperExpand);
                    let scrollSize = Math.max(typeEle.scrollWidth, typeEle.scrollHeight) + 5 + "px";
                    if (leftRight) {
                        typeEle.style.height = scrollSize;
                        typeEle.style.width = "";
                    } else {
                        typeEle.style.width = scrollSize;
                        typeEle.style.height = "";
                    }
                    setTimeout(() => {
                        self.checkScroll();
                    }, 251);
                }, showTimer;
                this.searchJumperExpand.addEventListener("click", expandTypeHandler);
                if (searchData.prefConfig.overOpen) {
                    this.searchJumperExpand.addEventListener('mouseenter', e => {
                        clearTimeout(showTimer);
                        showTimer = setTimeout(() => {
                            expandTypeHandler(e);
                        }, 500);
                    }, false);
                    this.searchJumperExpand.addEventListener('mouseleave', e => {
                        clearTimeout(showTimer);
                    }, false);
                }
                this.pickerBtn.addEventListener("click", e => {
                    this.searchJumperInputKeyWords.value = "";
                    this.togglePicker();
                });
                this.maxEleBtn.addEventListener("click", e => {
                    Picker.getInstance().expand();
                });
                this.minEleBtn.addEventListener("click", e => {
                    Picker.getInstance().collapse();
                });
                this.copyEleBtn.addEventListener("click", e => {
                    Picker.getInstance().copy();
                });
                let listArrow = document.createElement("div");
                listArrow.className = "listArrow";
                this.listArrow = listArrow;
                this.con.appendChild(listArrow);
                for (let siteConfig of searchData.sitesConfig) {
                    let isBookmark = siteConfig.bookmark || siteConfig.sites.length > 100 || (/^BM/.test(siteConfig.type) && siteConfig.icon === "bookmark");
                    if (isBookmark) {
                        bookmarkTypes.push(siteConfig);
                        continue;
                    }
                    await this.createType(siteConfig);
                    sitesNum += siteConfig.sites.length;
                    if (sitesNum > 500) {
                        await sleep(1);
                        sitesNum = 0;
                    }
                }
                this.initHistorySites();
                this.initSort();
                this.bar.style.visibility = "";
                this.bar.style.display = "none";
                this.searchInPageRule();
                if (currentSite && /%s[lur]?\b/.test(currentSite.url)) {
                    this.inSearchEngine();
                } else if (searchData.prefConfig.alwaysShow) {
                    this.bar.style.display = "";
                    this.initPos();
                    this.appendBar();
                }
                if (this.fontPool.length > 0 || isInConfigPage()) {
                    let linkEle = document.createElement("link");
                    linkEle.rel="stylesheet";
                    linkEle.href = searchData.prefConfig.fontAwesomeCss || "https://lib.baomitu.com/font-awesome/6.1.2/css/all.css";
                    document.documentElement.insertBefore(linkEle, document.documentElement.children[0]);
                    waitForFontAwesome(() => {
                        let hasFont = false;
                        this.fontPool.forEach(font => {
                            font.innerText = '';
                            font.style.fontSize = '';
                            font.style.color = '';
                            hasFont = true;
                            cacheFontPool.unshift(font);
                        });
                        if (hasFont) {
                            setTimeout(() => {cacheFontManager()}, 5000);
                        }
                    });
                }
                cacheImgManager();

                if (lastSign) {
                    targetElement = lastSign.target;
                    this.batchOpen(lastSign.sites, {which: 3});
                }
                lastSign = false;
                let inputTimer;
                this.inInput = false;
                this.searchInput.addEventListener("input", e => {
                    clearTimeout(inputTimer);
                    inputTimer = setTimeout(() => {
                        self.searchSiteBtns(self.searchInput.value)
                    }, 500);
                });
                this.searchInput.addEventListener("keydown", e => {
                    switch(e.keyCode) {
                        case 9:
                            if (e.shiftKey) {
                                e.stopPropagation();
                                e.preventDefault();
                                this.searchInPageTab.checked = true;
                                this.searchJumperInPageInput.focus();
                                this.initSetInPageWords();
                            }
                            break;
                        case 13://回车
                            if (this.searchJumperInputKeyWords.disabled) {
                                clearTimeout(inputTimer);
                                let siteEle, forceTarget = "";
                                if (currentSite && !self.searchInput.value) {
                                    siteEle = self.con.querySelector(".search-jumper-btn.current");
                                    forceTarget = "_self";
                                } else {
                                    siteEle = self.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)") || self.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)") || self.con.querySelector("a.search-jumper-btn:not(.input-hide)");
                                    forceTarget = "_blank";
                                }
                                if (siteEle) {
                                    self.openSiteBtn(siteEle, forceTarget);
                                }
                            } else this.searchJumperInputKeyWords.focus();
                            break;
                        case 8://退格
                            /*if (self.lockSiteKeywords && !self.searchInput.value) {
                                self.searchInput.value = self.searchLockInput.innerText;
                                self.searchLockInput.innerText = "";
                                self.lockSiteKeywords = false;
                                self.con.classList.remove("lock-input");
                                self.searchInput.style.paddingLeft = "";
                                self.searchInput.placeholder = i18n("inputPlaceholder");
                            }*/
                            break;
                        default:
                            break;
                    }
                });
                this.searchJumperInputKeyWords.addEventListener("input", e => {
                    clearTimeout(inputTimer);
                    inputTimer = setTimeout(() => {
                        self.getSuggest(self.searchJumperInputKeyWords.value)
                    }, 500);
                });
                this.searchJumperInputKeyWords.addEventListener("keydown", e => {
                    switch(e.keyCode) {
                        case 9:
                            if (!this.inInput) {
                                e.stopPropagation();
                                e.preventDefault();
                                this.searchInput.focus();
                            } else if (!e.shiftKey) {
                                e.stopPropagation();
                                e.preventDefault();
                                this.searchInPageTab.checked = true;
                                this.searchJumperInPageInput.focus();
                                this.initSetInPageWords();
                            }
                            break;
                        case 13://回车
                            {
                                clearTimeout(inputTimer);
                                let siteEle, forceTarget = "";
                                if (currentSite && !self.searchInput.value) {
                                    siteEle = self.con.querySelector(".search-jumper-btn.current");
                                    forceTarget = "_self";
                                } else {
                                    siteEle = self.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)") || self.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)") || self.con.querySelector("a.search-jumper-btn:not(.input-hide)");
                                    forceTarget = "_blank";
                                }
                                if (siteEle) {
                                    self.openSiteBtn(siteEle, forceTarget);
                                }
                            }
                            break;
                        default:
                            break;
                    }
                });
                this.closeBtn.addEventListener("mousedown", e => {
                    self.hideSearchInput();
                });

                let startLeft = window.innerWidth / 2;
                let startBottom;
                let halfContainerWidth = 0.4 * window.innerWidth;
                let currentGroup, startX, startY;

                let clientX = e => {
                    if (e.type.indexOf('mouse') === 0) {
                        return e.clientX;
                    } else {
                        return e.changedTouches[0].clientX;
                    }
                };

                let clientY = e => {
                    if (e.type.indexOf('mouse') === 0) {
                        return e.clientY;
                    } else {
                        return e.changedTouches[0].clientY;
                    }
                };


                let grabMouseupHandler = e => {
                    document.removeEventListener("mouseup", grabMouseupHandler);
                    document.removeEventListener("mousemove", grabMousemoveHandler);
                    document.removeEventListener("touchend", grabMouseupHandler);
                    document.removeEventListener("touchmove", grabMousemoveHandler);
                    currentGroup.style.cursor = "";
                    startLeft += clientX(e) - startX;
                    startBottom -= clientY(e) - startY;
                };
                let grabMousemoveHandler = e => {
                    let left = startLeft + clientX(e) - startX;
                    self.searchInputDiv.style.top = 'unset';
                    self.searchInputDiv.style.left = left + "px";
                    self.searchInputDiv.style.bottom = startBottom - (clientY(e) - startY) + "px";
                    if (left > window.innerWidth / 2) {
                        let maxWidth = window.innerWidth - left + halfContainerWidth - 50;
                        self.searchInputDiv.style.maxWidth = maxWidth + "px";
                    } else {
                        let maxWidth = left + halfContainerWidth;
                        if (left < halfContainerWidth) {
                            left += halfContainerWidth - left;
                            self.searchInputDiv.style.left = left + "px";
                        }
                        self.searchInputDiv.style.maxWidth = maxWidth + "px";
                    }
                    e.stopPropagation();
                    e.preventDefault();
                };

                let setStartBottom = () => {
                    if (!startBottom) startBottom = self.con.classList.contains('search-jumper-bottom') ? window.innerHeight * 0.95 - 60 : window.innerHeight * 0.03;
                };

                let touchStart = false;
                this.searchInputDiv.addEventListener("touchstart", e => {
                    touchStart = true;
                    if (e.target.className === 'inputGroup' || e.target.tagName.toUpperCase() === 'LABEL') {
                        setStartBottom();
                        currentGroup = e.target;
                        currentGroup.style.cursor = "grabbing";
                        startX = clientX(e);
                        startY = clientY(e);
                        document.addEventListener("touchend", grabMouseupHandler);
                        document.addEventListener("touchmove", grabMousemoveHandler);
                    }
                }, { passive: true, capture: false });

                this.searchInputDiv.addEventListener("mousedown", e => {
                    if (touchStart) {
                        touchStart = false;
                        return;
                    }
                    if (e.target.className === 'inputGroup' || e.target.tagName.toUpperCase() === 'LABEL') {
                        setStartBottom();
                        currentGroup = e.target;
                        currentGroup.style.cursor = "grabbing";
                        startX = e.clientX;
                        startY = e.clientY;
                        document.addEventListener("mouseup", grabMouseupHandler);
                        document.addEventListener("mousemove", grabMousemoveHandler);
                    }
                });
                let initWidth, initX;
                let sizeChangeMouseMove = e => {
                    let width = e.clientX - initX + initWidth + 20;
                    this.searchInputDiv.style.width = width + "px";
                };
                let sizeChangeMouseUp = e => {
                    document.removeEventListener("mousemove", sizeChangeMouseMove);
                    document.removeEventListener("mouseup", sizeChangeMouseUp);
                };
                this.rightSizeChange.addEventListener("mousedown", e => {
                    initX = e.clientX;
                    initWidth = this.searchInput.clientWidth * 2 + 2;
                    document.addEventListener("mousemove", sizeChangeMouseMove);
                    document.addEventListener("mouseup", sizeChangeMouseUp);
                    e.stopPropagation();
                    e.preventDefault();
                });

                let dragSiteBtn;
                let dragOpenDropHandler = e => {
                    if (!this.bar.contains(e.target)){
                        let isPage = /^(https?|ftp):/.test(dragSiteBtn.href);
                        if (isPage) {
                            dragSiteBtn.setAttribute("target", "_blank");
                        }
                        if (!this.customInput || this.batchOpening) {
                            if (dragSiteBtn.onclick || !isPage) {
                                dragSiteBtn.click();
                            } else {
                                _GM_openInTab(dragSiteBtn.href, {active: false});
                            }
                        }
                        if (isPage) {
                            dragSiteBtn.setAttribute("target", dragSiteBtn.dataset.target == 1 ? "_blank" : "_self");
                        }
                    }
                    getBody(document).removeEventListener('dragover', dragOpenOverHandler);
                    document.removeEventListener('drop', dragOpenDropHandler);
                    document.removeEventListener('dragover', dragOpenOverHandler);
                };
                let dragOpenOverHandler = e => {
                    e.preventDefault();
                };
                let dragOpenEndHandler = e => {
                    getBody(document).removeEventListener('dragover', dragOpenOverHandler);
                    document.removeEventListener('drop', dragOpenDropHandler);
                    document.removeEventListener('dragover', dragOpenOverHandler);
                };
                this.bar.addEventListener("dragstart", e => {
                    let target = e.target;
                    let parentNode = target.parentNode;
                    if (target.tagName.toUpperCase() !== 'IMG' && target.tagName.toUpperCase() !== 'A') return;
                    if (target.classList && target.classList.contains('search-jumper-btn')) {
                        dragSiteBtn = target;
                        getBody(document).addEventListener('dragover', dragOpenOverHandler);
                        document.addEventListener('drop', dragOpenDropHandler);
                        document.addEventListener('dragend', dragOpenEndHandler);
                    } else if (parentNode && parentNode.classList && parentNode.classList.contains('search-jumper-btn')) {
                        dragSiteBtn = parentNode;
                        getBody(document).addEventListener('dragover', dragOpenOverHandler);
                        document.addEventListener('drop', dragOpenDropHandler);
                        document.addEventListener('dragend', dragOpenEndHandler);
                    }
                }, true);

                sitesNum = 0;
                let hasCurrent = currentSite !== false;
                for (let siteConfig of bookmarkTypes) {
                    await this.createType(siteConfig);
                    sitesNum += siteConfig.sites.length;
                    if (sitesNum > 200) {
                        await sleep(1);
                        sitesNum = 0;
                    }
                }
                let foundKeyword = currentSite && /%s[lur]?\b/.test(currentSite.url);
                if (!hasCurrent && foundKeyword) {
                    this.inSearchEngine();
                } else if (!foundKeyword && window.top == window.self) {
                    this.checkSearchJump();
                }
                let hasHighlightWords = this.initInPageWords && this.initInPageWords.length;
                if (inMinMode || (this.bar.style.display === "none" && (!navEnable || !hasHighlightWords))) {
                    this.removeBar();
                }
            }

            waitForHide(delay) {
                let self = this;
                if (this.bar.classList.contains("grabbing")) return;
                var hideHandler = () => {
                    //self.bar.classList.remove("search-jumper-isInPage");
                    self.bar.classList.remove("search-jumper-isTargetImg");
                    self.bar.classList.remove("search-jumper-isTargetAudio");
                    self.bar.classList.remove("search-jumper-isTargetVideo");
                    self.bar.classList.remove("search-jumper-isTargetLink");
                    //self.bar.classList.remove("search-jumper-isTargetPage");
                    self.bar.classList.remove("initShow");
                    //self.recoveHistory();
                    if (self.funcKeyCall) {
                        self.setFuncKeyCall(false);
                        if (currentSite && !currentSite.hideNotMatch) {
                            self.initPos();
                            let firstType = self.bar.querySelector('.search-jumper-type:nth-child(1)>span');
                            if (firstType && !firstType.classList.contains("search-jumper-open")) {
                                firstType.onmousedown();
                            }
                            self.bar.style.display = 'none';
                            setTimeout(() => {
                                self.bar.style.display = '';
                            }, 250);
                        } else {
                            self.bar.style.display = 'none';
                        }
                    }
                    if (searchData.prefConfig.autoClose) {
                        let openType = self.bar.querySelector('.search-jumper-type.search-jumper-open>span');
                        if (openType) {
                            openType.onmousedown();
                        }
                    }
                    this.hideTimeout = null;
                };
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                }
                let delayTime = delay || (this.funcKeyCall ? 500 : (searchData.prefConfig.autoDelay || 1000));

                this.hideTimeout = setTimeout(hideHandler, delayTime);
                if (this.preList) {
                    this.preList.style.visibility = "hidden";
                    this.listArrow.style.cssText = "";
                }
            }

            setInPageWords(inPageWords) {
                this.initInPageWords.push(inPageWords);
                this.searchInPageTab.checked = true;
                if (document.readyState != "complete") {
                    let loadHandler = e => {
                        if (document.readyState != "complete") return;
                        document.removeEventListener("readystatechange", loadHandler);
                        setTimeout(() => {
                            if (getBody(document).style.display === "none") getBody(document).style.display = "";
                            let word = this.initInPageWords.shift();
                            while (word) {
                                this.searchJumperInPageInput.value = word;
                                this.submitInPageWords(true);
                                word = this.initInPageWords.shift();
                            }
                        }, 600);
                    };
                    document.addEventListener("readystatechange", loadHandler);
                } else {
                    setTimeout(() => {
                        if (getBody(document).style.display === "none") getBody(document).style.display = "";
                        let word = this.initInPageWords.shift();
                        while (word) {
                            this.searchJumperInPageInput.value = word;
                            this.submitInPageWords(true);
                            word = this.initInPageWords.shift();
                        }
                    }, 600);
                }
            }

            searchInPageRule() {
                if (searchData.prefConfig.inPageRule) {
                    let href = location.href.slice(0, 250);
                    let keys = Object.keys(searchData.prefConfig.inPageRule);
                    for (let i = 0; i < keys.length; i++) {
                        let key = keys[i];
                        if (!key) continue;
                        if (this.globMatch(key, href)) {
                            let rule = searchData.prefConfig.inPageRule[key];
                            if (!rule) continue;
                            this.setInPageWords(rule);
                            break;
                        }
                    }
                }
            }

            checkSearchJump() {
                let inPageWords;
                if (searchData.prefConfig.showInSearchJumpPage && referrer) {
                    if (document.referrer.indexOf(referrer) != -1) {
                        inPageWords = cacheKeywords;
                        try {
                            inPageWords = decodeURIComponent(inPageWords);
                        } catch (e) {}
                        //storage.setItem("referrer", location.hostname);
                    } else {
                        //storage.setItem("referrer", "");
                    }
                }
                inPageWords = inPageWords || globalInPageWords;
                if (inPageWords) {
                    this.appendBar();
                    this.setInPageWords(inPageWords);
                }
            }

            inSearchEngine() {
                if (!this.currentType || !currentSite) return;
                if (!/#p{/.test(currentSite.url) || currentSite.keywords) {
                    this.appendBar();
                    if (this.currentType.classList.contains("search-jumper-needInPage")) {
                        this.bar.classList.add("search-jumper-isTargetPage");
                    } else if (this.currentType.classList.contains("search-jumper-targetAll") ||
                               this.currentType.classList.contains("search-jumper-targetImg") ||
                               this.currentType.classList.contains("search-jumper-targetAudio") ||
                               this.currentType.classList.contains("search-jumper-targetVideo") ||
                               this.currentType.classList.contains("search-jumper-targetLink") ||
                               this.currentType.classList.contains("search-jumper-targetPage")) {
                        return;
                    }
                    if (!searchData.prefConfig.hideOnSearchEngine) {
                        this.bar.style.display = "";
                        this.initPos();
                    }
                }
                this.insertHistory(this.currentType, true);
                let inPageWords = searchData.prefConfig.showInSearchEngine ? localKeywords : globalInPageWords;
                if (inPageWords) {
                    this.setInPageWords(inPageWords.replace(/['";]/g, ' '));
                }
            }

            getSuggest(searchWords) {
                let suggestDatalist = this.suggestDatalist;
                suggestDatalist.innerHTML = createHTML();
                if (!searchWords) return;
                let requestSuggest = (api, cb) => {
                    _GM_xmlhttpRequest({
                        method: 'GET',
                        url: api,
                        headers: {
                            referer: api,
                            origin: api
                        },
                        onload: function(d) {
                            let response = d.response;
                            if (d.status >= 400 || !response) return;
                            cb(response);
                        },
                        onerror: function(e){
                            debug(e);
                        },
                        ontimeout: function(e){
                            debug(e);
                        }
                    });
                };
                switch (searchData.prefConfig.suggestType) {
                    case "google":
                        requestSuggest("http://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s", searchWords), res => {
                            res = res.match(/window.google.ac.h\((.*)\)$/, "$1");
                            if (res) {
                                res = JSON.parse(res[1])[1];
                                for (let i in res) {
                                    let option = document.createElement('option');
                                    option.value = res[i][0];
                                    suggestDatalist.appendChild(option);
                                }
                            }
                        });
                        break;
                    case "baidu":
                        requestSuggest("http://suggestion.baidu.com/su?wd=%s&cb=".replace("%s", searchWords), res => {
                            res = res.match(/.*,s:(.*)}\);$/, "$1");
                            if (res) {
                                res = JSON.parse(res[1]);
                                for (let i in res) {
                                    let option = document.createElement('option');
                                    option.value = res[i];
                                    suggestDatalist.appendChild(option);
                                }
                            }
                        });
                        break;
                    case "bing":
                        requestSuggest("http://api.bing.com/qsonhs.aspx?type=cb&q=%s".replace("%s", searchWords), res => {
                            if (res) {
                                res = JSON.parse(res).AS.Results;
                                for (let i in res) {
                                    let result = res[i].Suggests;
                                    for (let j in result) {
                                        let option = document.createElement('option');
                                        option.value = result[j].Txt;
                                        suggestDatalist.appendChild(option);
                                    }
                                }
                            }
                        });
                        break;
                    default:
                        break;
                }
            }

            searchSiteBtns(inputWords) {
                let checkIndex = inputWords.indexOf('**'), checkType = "", accurate = false;
                if (checkIndex > 0) {
                    checkType = inputWords.slice(0, checkIndex);
                    inputWords = inputWords.slice(checkIndex + 2);
                }
                if (inputWords.indexOf('^') === 0) {
                    accurate = true;
                } else {
                    checkType = checkType.toLowerCase();
                    inputWords = inputWords.toLowerCase();
                }
                let canCheckHost = !/[^\w\.\/\:\*\?\^\$]/.test(inputWords);
                this.allListBtns.forEach(listItem => {
                    listItem.classList.add("input-hide");
                });
                searchTypes.forEach(type => {
                    type.classList.add("input-hide");
                });
                let optionNum = 0;
                this.filterGlob.innerHTML = createHTML();
                this.allSiteBtns.forEach(arr => {
                    let btn = arr[0];
                    let data = arr[1];
                    let typeNode = btn.parentNode;
                    let targetType = btn.dataset.type;
                    let targetName = btn.dataset.name;
                    let targetTitle = btn.title;
                    if (!accurate) {
                        targetType = targetType.toLowerCase();
                        targetName = targetName.toLowerCase();
                        targetTitle = targetTitle.toLowerCase();
                    }
                    let globMatchName = "";
                    if (checkType) {
                        let typeMatch = this.globMatch(checkType, targetType);
                        if (!typeMatch) return;
                        globMatchName = btn.dataset.type + "**";
                    }
                    let canMatch = false;
                    if (!btn.dataset.clone) {
                        if (this.globMatch(inputWords, targetName)) {
                            canMatch = true;
                            globMatchName += '^' + btn.dataset.name + '$';
                        } else if (btn.title && this.globMatch(inputWords, targetTitle)) {
                            canMatch = true;
                            globMatchName += '^' + btn.title + '$';
                        }
                    }
                    if (!canMatch) {
                        if (canCheckHost) {
                            if (!btn.dataset.host) {
                                let hostReg = /^https?:\/\/([^\/]*)\/.*$/;
                                let href = data.url;
                                btn.dataset.host = hostReg.test(href) ? href.replace(hostReg, "$1") : href;
                            }
                            canMatch = this.globMatch(inputWords, btn.dataset.host);
                        }
                        if (!canMatch) {
                            btn.classList.add("input-hide");
                        } else {
                            globMatchName += '^' + btn.dataset.host + '$';
                        }
                    }
                    if (canMatch) {
                        btn.classList.remove("input-hide");
                        if (typeNode) typeNode.classList.remove("input-hide");
                        let listItem;
                        for (let i = 0; i < this.allListBtns.length; i++) {
                            if (this.allListBtns[i].id == "list" + btn.dataset.id) {
                                listItem = this.allListBtns[i];
                                break;
                            }
                        }
                        if (listItem) listItem.classList.remove("input-hide");
                        if (optionNum < 50 && inputWords && this.searchInput.value !== globMatchName) {
                            optionNum++;
                            let option = document.createElement('option');
                            option.value = globMatchName;
                            this.filterGlob.appendChild(option);
                        }
                    }
                });
                searchTypes.forEach(type => {
                    let targetList;
                    for (let i = 0; i < this.allLists.length; i++) {
                        if (this.allLists[i].dataset.type == type.dataset.type) {
                            targetList = this.allLists[i];
                            break;
                        }
                    }
                    if (!targetList) return;
                    if (type.classList.contains("input-hide")) {
                        targetList.classList.add("input-hide");
                    } else targetList.classList.remove("input-hide");
                });
                let showType = this.bar.querySelector(".search-jumper-type:not(.input-hide)");
                if (showType && !showType.classList.contains("search-jumper-open")) showType.querySelector("span.search-jumper-btn").onmousedown();
            }

            globMatch(glob, target, inner) {
                if (glob.length == 0 || glob === '*') {
                    return true;
                }

                if (glob.length === 1 && glob[0] === '$') {
                    return !target || target.length === 0;
                }

                if (glob.length > 1 && glob[0] === '*' &&
                    (!target || target.length === 0)) {
                    return false;
                }

                if (!inner) {
                    inner = true;
                    if (glob.length > 1 && glob[0] === '^' &&
                        target && target.length !== 0) {
                        glob = glob.substring(1);
                        if (glob[0] !== target[0]) {
                            return false;
                        }
                    } else if (glob[0] !== '*') {
                        glob = '*' + glob;
                    }
                }

                if ((glob.length > 1 && glob[0] === '?') ||
                    (glob.length != 0 && target && target.length !== 0 &&
                     glob[0] === target[0])) {
                    return this.globMatch(glob.substring(1),
                                     target.substring(1), !!inner);
                }

                if (glob.length > 0 && glob[0] === '*') {
                    return this.globMatch(glob.substring(1), target, !!inner) ||
                        this.globMatch(glob, target && target.substring(1), !!inner);
                }

                return false;
            }

            setCurrentSite(data, siteEle) {
                currentSite = data;
                siteEle.classList.add('current');
                localKeywords = "";
                if (!/#p{/.test(data.url) && /%s[lur]?\b/.test(data.url)) {
                    let keywords = getKeywords();
                    if (keywords && keywords != cacheKeywords) {
                        cacheKeywords = keywords;
                        storage.setItem("cacheKeywords", keywords);
                    }
                    storage.setItem("referrer", location.hostname);
                }
            }

            refresh() {
                if (this.refreshInPageTimer) {
                    clearTimeout(this.refreshInPageTimer);
                }
                this.refreshInPageTimer = setTimeout(() => {
                    let oldWords = this.curHighlightWords;
                    this.highlight("");
                    this.highlight(oldWords);
                    if (!currentSite && this.bar.style.display == "none") {
                        let typeData;
                        for (let i in searchData.sitesConfig) {
                            if (currentSite) break;
                            typeData = searchData.sitesConfig[i];
                            if (!typeData) {
                                continue;
                            }
                            let sites = typeData.sites;
                            for (let j in sites) {
                                if (currentSite) break;
                                let data = sites[j];
                                if (!data || !data.url) {
                                    continue;
                                }
                                let currentData;
                                if (data.match === '0') {
                                } else if (data.match) {
                                    if (new RegExp(data.match).test(location.href)) {
                                        currentData = data;
                                    }
                                } else if (data.url.indexOf(location.hostname) != -1) {
                                    if (data.url.indexOf("site") != -1) {
                                        let siteMatch = data.url.match(/site(%3A|:)(.+?)[\s%]/);
                                        if (siteMatch && location.href.indexOf(siteMatch[2]) != -1 && data.url.replace(siteMatch[0], "").indexOf(location.hostname) != -1) {
                                            currentData = data;
                                        }
                                    } else if (!currentSite && data.url.replace(/^https?:\/\//, "").replace(location.host, "").replace(/\/?[\?#].*/, "") == location.pathname.replace(/\/$/, "")) {
                                        let urlReg = data.url.match(/[^\/\?&]+(?=%[stb])/g);
                                        if (urlReg) {
                                            urlReg = urlReg.join('.*');
                                            if (new RegExp(urlReg).test(location.href)) {
                                                currentData = data;
                                            }
                                        }
                                    }
                                }
                                if (currentData) {
                                    let siteEle = this.getTargetSitesByName([currentData.name])[0];
                                    this.setCurrentSite(currentData, siteEle);
                                }
                            }
                        }
                        if (currentSite) {
                            this.appendBar();
                            this.bar.style.display = "";
                            this.initPos();
                            let typeBtn = this.bar.querySelector(`.search-jumper-type[data-type="${typeData.type}"]>span`);
                            if (typeBtn && !typeBtn.classList.contains("search-jumper-open")) {
                                this.bar.insertBefore(typeBtn.parentNode, this.bar.children[0]);
                                if (!searchData.prefConfig.disableAutoOpen) {
                                    typeBtn.onmousedown();
                                }
                            }
                        }
                    }
                }, 500);
            }

            initSort() {
                if (searchData.prefConfig.shiftLastUsedType && this.historyTypeEle) {
                    if (currentSite) {
                        this.bar.insertBefore(this.historyTypeEle, this.bar.children[1]);
                    } else {
                        this.bar.insertBefore(this.historyTypeEle, this.bar.children[0]);
                    }
                }
                if (!searchData.prefConfig.sortType) return;
                let self = this;
                searchTypes.sort((a, b) => {
                    let aTypeValue = sortTypeNames[a.dataset.type] || 0;
                    let bTypeValue = sortTypeNames[b.dataset.type] || 0;
                    return bTypeValue - aTypeValue;
                });
                let changed = false;
                let allHide = !self.bar.children[0].classList.contains("search-jumper-open");
                for (let i = searchTypes.length - 1; i >= 0; i--) {
                    let typeEle = searchTypes[i];
                    let curValue = sortTypeNames[typeEle.dataset.type] || 0;
                    if (i == searchTypes.length - 1) {
                        if (curValue > 0) {
                            changed = true;
                            sortTypeNames[typeEle.dataset.type] = 0;
                        }
                    } else {
                        let preValue = sortTypeNames[searchTypes[i + 1].dataset.type] || 0;
                        if (curValue - preValue > 50) {
                            changed = true;
                            sortTypeNames[typeEle.dataset.type] = preValue + 50;
                        }
                    }
                    self.bar.insertBefore(typeEle, self.bar.children[allHide ? 0 : 1]);
                }
                if (changed) storage.setItem("sortTypeNames", sortTypeNames);
            }

            initHistorySites() {
                this.historySiteBtns = [];
                let self = this;
                historySites.forEach(n => {
                    for (let i = 0; i < self.allSiteBtns.length; i++) {
                        let siteBtn = self.allSiteBtns[i][0];
                        if (siteBtn.dataset.name == n) {
                            let siteImg = siteBtn.querySelector('img');
                            if (siteImg && siteImg.dataset.src) {
                                siteImg.src = siteImg.dataset.src;
                                siteImg.dataset.src = '';
                            }
                            self.historySiteBtns.push(siteBtn);
                            break;
                        }
                    }
                });
            }

            insertHistory(typeEle, init) {
                if (searchData.prefConfig.disableAutoOpen) return;
                if (!searchData.prefConfig.historyLength) return;
                typeEle.style.width = "auto";
                typeEle.style.height = "auto";
                let self = this;
                this.historyInserted = true;
                let num = 0;
                for (let i = 0; i < this.historySiteBtns.length; i++) {
                    let btn = this.historySiteBtns[i];
                    if (btn.parentNode != typeEle) {
                        let sites = typeEle.querySelectorAll("a.search-jumper-btn");
                        let findSame = false;
                        for (let j = 0; j < sites.length; j++) {
                            let site = sites[j];
                            if (site.name == btn.dataset.name) {
                                findSame = true;
                                break;
                            }
                        }
                        if (findSame) continue;
                        btn.classList.add("historySite");
                        if (!init && searchData.prefConfig.historyInsertFirst) {
                            if (typeEle.children.length > 1) {
                                typeEle.insertBefore(btn, typeEle.children[1]);
                            } else typeEle.appendChild(btn);
                        } else {
                            if (self.searchJumperExpand.parentNode == typeEle) {
                                typeEle.insertBefore(btn, self.searchJumperExpand);
                            } else typeEle.appendChild(btn);
                        }
                        if (++num >= searchData.prefConfig.historyLength) break;
                    }
                }
                typeEle.style.width = typeEle.scrollWidth + "px";
                typeEle.style.height = typeEle.scrollHeight + "px";
            }

            recoveHistory() {
                if (!searchData.prefConfig.historyLength) return;
                if (!this.historyInserted) return;
                this.historyInserted = false;
                let self = this;
                let curParent;
                for (let i = 0; i < this.historySiteBtns.length; i++) {
                    let btn = this.historySiteBtns[i];
                    if (!btn.classList.contains("historySite")) continue;
                    btn.classList.remove("historySite");
                    curParent = btn.parentNode;
                    this.siteBtnReturnHome(btn);
                }
                if (curParent && curParent.classList.contains("search-jumper-open")) {
                    curParent.style.width = "auto";
                    curParent.style.height = "auto";
                    curParent.style.width = curParent.scrollWidth + "px";
                    curParent.style.height = curParent.scrollHeight + "px";
                }
            }

            bindSite(a, siteEle) {
                if (a.getAttribute("bind")) return;
                a.setAttribute("bind", true);
                let self = this;
                if (siteEle.href) a.href = siteEle.href;
                a.style.display = siteEle.style.display;
                a.addEventListener('mousedown', e => {
                    siteEle.dispatchEvent(new PointerEvent("mousedown", {altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, metaKey: e.metaKey}));
                    a.setAttribute("target", siteEle.target);
                    a.href = siteEle.href || "#";
                    if (!a.onclick && siteEle.onclick) {
                        a.onclick = e => {
                            siteEle.onclick(e);
                            e.stopPropagation();
                            e.preventDefault();
                            return false;
                        }
                    }
                }, false);
                a.addEventListener("dragover", e => {
                    e.preventDefault();
                }, true);
                a.addEventListener("dragenter", e => {
                    if (self.dragTarget) {
                        self.dragTarget.classList.remove("dragTarget");
                    }
                    self.dragTarget = a;
                    self.dragTarget.classList.add("dragTarget");
                    clearTimeout(self.dragTimer);
                    self.dragTimer = setTimeout(() => {
                        a.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                    }, 1000);
                }, true);
                a.addEventListener("dragleave", e => {
                    a.classList.remove("dragTarget");
                }, true);
                a.addEventListener("drop", e => {
                    clearTimeout(self.dragTimer);
                    if (self.dragTarget) {
                        self.dragTarget.classList.remove("dragTarget");
                    }
                    self.searchBySiteName(siteEle.dataset.name, e);
                }, true);
            }

            async createList(sites, type, batchSiteNames) {
                let self = this;
                let list = document.createElement("div");
                list.className = "sitelist";
                let con = document.createElement("div");
                con.className = "sitelistCon";
                list.appendChild(con);
                let title = document.createElement("p");
                title.innerText = type.dataset.title;
                title.title = i18n('batchOpen');
                title.addEventListener('click', e => {
                    self.batchOpen(batchSiteNames, {ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, which: (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) ? 1 : 3});
                });
                list.dataset.type = type.dataset.type;
                con.appendChild(title);
                function createItem(siteEle, index) {
                    let li = document.createElement("div");
                    li.id = "list" + index;
                    let icon = siteEle.querySelector("img");
                    let a = document.createElement("a");
                    a.setAttribute("ref", "noopener noreferrer");
                    self.bindSite(a, siteEle);
                    li.appendChild(a);
                    self.allListBtns.push(li);
                    con.appendChild(li);
                    if (icon && !searchData.prefConfig.noIcons) {
                        let iconSrc = icon.src || icon.dataset.src;
                        let img = document.createElement("img");
                        a.appendChild(img);
                        img.onload = e => {
                            img.style.width = "";
                            img.style.height = "";
                            img.style.display = "";
                        };
                        img.style.width = "1px";
                        img.style.height = "1px";
                        img.style.display = "none";
                        if (iconSrc) {
                            if (!/^data:/.test(iconSrc)) {
                                img.οnerrοr = e => {
                                    img.src = noImgBase64;
                                    img.onerror = null;
                                    img.style.width = "";
                                    img.style.height = "";
                                    img.style.display = "";
                                };
                                img.dataset.src = iconSrc;
                            } else {
                                img.dataset.src = iconSrc;
                            }
                        } else {
                            img.dataset.src = noImgBase64;
                        }
                    }
                    let p = document.createElement("p");
                    p.innerText = siteEle.dataset.name;
                    li.title = siteEle.title;
                    li.dataset.name = siteEle.dataset.name;
                    a.appendChild(p);
                }
                try {
                    for (let [index, siteEle] of sites.entries()) {
                        createItem(siteEle, siteEle.dataset.id);
                        if (index%50 === 49) await sleep(1);
                    }
                } catch(e) {
                    for (let index = 0; index < sites.length; index++) {
                        let siteEle = sites[index];
                        createItem(siteEle, siteEle.dataset.id);
                    }
                }
                this.allLists.push(list);
                return list;
            }

            initList(list) {
                if (!list.dataset.inited) {
                    list.dataset.inited = true;
                    [].forEach.call(list.querySelectorAll("div>a>img"), img => {
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.dataset.src = "";
                        }
                    });
                }
            }

            listPos(ele, list) {
                //if (this.preList) {
                    //this.preList.style.visibility = "hidden";
                //}
                this.initList(list);
                list.style = "";
                this.preList = list;
                let ew = ele.clientWidth;
                let eh = ele.clientHeight;
                let clientX = ele.offsetLeft + ew / 2 - this.con.scrollLeft;
                let clientY = ele.offsetTop + eh / 2 - this.con.scrollTop;
                let current = ele.offsetParent;

                while (current !== null){
                    clientX += current.offsetLeft;
                    clientY += current.offsetTop;
                    current = current.offsetParent;
                }
                let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                let arrowStyle = this.listArrow.style;
                arrowStyle.visibility = "visible";
                arrowStyle.opacity = 1;
                if (this.bar.clientWidth > this.bar.clientHeight) {
                    //横
                    let arrowX = clientX;
                    if (clientX < 30) {
                        arrowX = 30;
                    } else if (clientX > viewWidth - 40) {
                        arrowX = viewWidth - 40;
                    }
                    arrowStyle.left = arrowX - 10 + "px";
                    if (clientY - eh / 2 < 100) {
                        list.style.top = this.bar.clientHeight + "px";
                        arrowStyle.top = this.bar.clientHeight - 10 + "px";
                    } else {
                        list.style.bottom = this.bar.clientHeight + "px";
                        arrowStyle.bottom = this.bar.clientHeight - 10 + "px";
                    }
                    clientX -= list.scrollWidth / 2;
                    if (clientX > viewWidth - list.scrollWidth - 10) clientX = viewWidth - list.scrollWidth - 10;
                    if (clientX < 0) clientX = 0;
                    list.style.left = clientX + "px";
                } else {
                    //竖
                    let arrowY = clientY;
                    if (clientY < 30) {
                        arrowY = 30;
                    } else if (clientY > viewHeight - 30) {
                        arrowY = viewHeight - 30;
                    }
                    arrowStyle.top = arrowY - 10 + "px";
                    if (clientX - ew / 2 < 100) {
                        list.style.left = this.bar.clientWidth + "px";
                        arrowStyle.left = this.bar.clientWidth - 9 + "px";
                    } else {
                        list.style.right = this.bar.clientWidth + "px";
                        arrowStyle.right = this.bar.clientWidth - 9 + "px";
                    }
                    clientY -= list.scrollHeight / 2;
                    if (clientY > viewHeight - list.scrollHeight) clientY = viewHeight - list.scrollHeight;
                    if (clientY < 0) clientY = 0;
                    list.style.top = clientY + "px";
                }
            }

            clingPos(clingEle, target, close) {
                //if (this.preList) {
                    //this.preList.style.visibility = "hidden";
                //}
                let ew = clingEle.clientWidth;
                let eh = clingEle.clientHeight;
                let clientX = clingEle.offsetLeft + ew / 2 - this.con.scrollLeft;
                let clientY = clingEle.offsetTop + eh / 2 - this.con.scrollTop - clingEle.parentNode.scrollTop;
                let current = clingEle.offsetParent;
                let showall = this.con && this.con.classList.contains("search-jumper-showall");

                while (current !== null){
                    clientX += current.offsetLeft;
                    clientY += current.offsetTop;
                    current = current.offsetParent;
                }
                let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                if (showall) {
                    clientX -= target.scrollWidth / 2 - this.con.scrollLeft;
                    clientY += this.con.scrollTop;
                    if (clientY > viewHeight / 2) clientY -= (target.scrollHeight / 2 + eh / 2 + 30);
                    else clientY += (eh / 2 + 10);
                    target.style.right = "";
                    target.style.bottom = "";
                    target.style.left = clientX + "px";
                    target.style.top = clientY + "px";
                } else if (this.funcKeyCall) {
                    clientX -= target.scrollWidth / 2;
                    if (clientY > viewHeight / 2) clientY -= (target.scrollHeight / 2 + eh / 2 + 30);
                    else clientY += (eh / 2 + 10);
                    target.style.right = "";
                    target.style.bottom = "";
                    target.style.left = clientX + "px";
                    target.style.top = clientY + "px";
                } else if (clientY < eh) {
                    clientX -= target.scrollWidth / 2;
                    clientY += target.scrollHeight / 2;
                    if (clientX < 5) {
                        clientX = 5;
                        target.style.left = "5px";
                        target.style.right = "";
                        target.style.bottom = "";
                    } else if (clientX > viewWidth - target.scrollWidth) {
                        target.style.left = "";
                        target.style.right = "5px";
                        target.style.bottom = "";
                    } else {
                        target.style.left = clientX + "px";
                        target.style.right = "";
                        target.style.bottom = "";
                    }
                    target.style.top = (close ? eh : eh + 20) + "px";
                } else if (clientY > viewHeight - eh) {
                    clientX -= target.scrollWidth / 2;
                    if (clientX < 5) {
                        target.style.left = "5px";
                        target.style.right = "";
                        target.style.top = "";
                    } else if (clientX > viewWidth - target.scrollWidth) {
                        target.style.left = "";
                        target.style.right = "5px";
                        target.style.top = "";
                    } else {
                        target.style.left = clientX + "px";
                        target.style.right = "";
                        target.style.top = "";
                    }
                    target.style.bottom = (close ? eh : eh + 20) + "px";
                } else if (clientX > viewWidth - ew - 10) {
                    target.style.left = "";
                    target.style.bottom = "";
                    clientY -= target.scrollHeight / 2;
                    if (clientY < 5) clientY = 5;
                    target.style.right = (close ? ew : ew + 20) + "px";
                    target.style.top = clientY + "px";
                } else if (clientX < ew) {
                    target.style.right = "";
                    target.style.bottom = "";
                    clientY -= target.scrollHeight / 2;
                    if (clientY < 5) clientY = 5;
                    target.style.left = (close ? ew : ew + 20) + "px";
                    target.style.top = clientY + "px";
                } else {
                    target.style.right = "";
                    target.style.bottom = "";
                    target.style.left = clientX + "px";
                    target.style.top = clientY + "px";
                }
            }

            tipsPos(ele, type) {
                this.tips.innerText = type;
                this.tips.style.opacity = 1;
                this.clingPos(ele, this.tips);
            }

            async createType(data) {
                let self = this;
                let type = data.type;
                let icon = data.icon;
                let inPage = data.selectTxt;
                let selectImg = data.selectImg;
                let selectAudio = data.selectAudio;
                let selectVideo = data.selectVideo;
                let selectLink = data.selectLink;
                let selectPage = data.selectPage;
                let sites = data.sites;
                let match = false;
                let openInNewTab = typeof data.openInNewTab === 'undefined' ? searchData.prefConfig.openInNewTab : data.openInNewTab;
                let siteEles = [];
                let ele = document.createElement("span");
                ele.className = "search-jumper-type";
                if (!searchData.prefConfig.expandType && sites.length > 10) ele.classList.add("not-expand");
                if (data.match === '0') {
                    ele.style.display = 'none';
                    ele.classList.add("notmatch");
                } else if (data.match) {
                    if (new RegExp(data.match).test(location.href) == false) {
                        ele.style.display = 'none';
                        ele.classList.add("notmatch");
                    } else {
                        match = true;
                    }
                }
                if (typeof data.description !== 'undefined') {
                    ele.dataset.title = type + " - " + data.description;
                } else {
                    ele.dataset.title = type;
                }
                ele.dataset.type = type;
                let typeBtn = document.createElement("span");
                let img = document.createElement("img");
                let iEle = document.createElement("b");
                if (type.length >= 3) {
                    iEle.innerText = type.substr(0, 3).trim();
                    if (!/^\w+$/.test(iEle.innerText)) iEle.innerText = iEle.innerText.substr(0, 2);
                } else iEle.innerText = type;
                iEle.style.fontSize = 14 * this.scale + 'px';
                //iEle.style.color = 'wheat';
                typeBtn.appendChild(iEle);
                img.style.display = "none";
                ele.appendChild(typeBtn);
                typeBtn.classList.add("search-jumper-word");
                typeBtn.classList.add("search-jumper-btn");
                typeBtn.classList.add("noIcon");
                let isBookmark = /^BM/.test(type) && data.icon === "bookmark";//書簽就不緩存了
                if (icon) {
                    typeBtn.classList.remove("noIcon");
                    img.onload = e => {
                        img.style.display = "";
                        iEle.innerText = '';
                        iEle.style.fontSize = '';
                        iEle.style.color = '';
                    };
                    if (/^[a-z\- ]+$/.test(icon)) {
                        let cache = searchData.prefConfig.cacheSwitch && cacheIcon[icon.trim().replace(/ /g, '_')];
                        if (cache === 'fail') {
                        } else if (cache) {
                            img.src = cache;
                            img.style.width = '100%';
                            img.style.height = '100%';
                            typeBtn.appendChild(img);
                        } else {
                            iEle.className = icon.indexOf("fa") === 0 ? icon : "fa fa-" + icon;
                            this.fontPool.push(iEle);
                        }
                    } else {
                        let isBase64 = /^data:/.test(icon);
                        if (isBase64) {
                            img.src = icon;
                        } else {
                            let cache = searchData.prefConfig.cacheSwitch && cacheIcon[icon];
                            if (cache === 'fail') {
                            } else if (cache) {
                                img.src = cache;
                            } else {
                                img.src = icon;
                                if (!cacheIcon[icon] && !isBookmark) cachePool.push(img);
                            }
                        }
                        typeBtn.appendChild(img);
                    }
                }
                ele.addEventListener('mouseleave', e => {
                    self.listArrow.style.opacity = "";
                });
                let batchSiteNames = [];
                let batchOpenConfirm = (e) => {
                    switch (searchData.prefConfig.batchOpenConfirm) {
                        case 1:
                            if (window.confirm(i18n('batchOpenConfirm'))) {
                                self.batchOpen(batchSiteNames, e);
                            }
                            break;
                        case 2:
                            self.batchOpen(batchSiteNames, e);
                            break;
                        default:
                            if (ele.classList.contains("search-jumper-open") || (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) || window.confirm(i18n('batchOpenConfirm'))) {
                                self.batchOpen(batchSiteNames, e);
                            }
                            break;
                    }
                };
                if (searchData.prefConfig.shortcut && data.shortcut) {
                    let shortcurStr = data.shortcut.replace('Key', '').toUpperCase();
                    if (shortcurStr.length == 1) ele.dataset.title += ` (${shortcurStr})`;
                    document.addEventListener('keydown', e => {
                        if (e.target.id === "searchJumperInput") return;
                        if ((!data.ctrl == e.ctrlKey) ||
                            (!data.alt == e.altKey) ||
                            (!data.shift == e.shiftKey) ||
                            (!data.meta == e.metaKey)) {
                            return;
                        }
                        if (!searchData.prefConfig.enableInInput) {
                            if (document.activeElement &&
                                (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                                 document.activeElement.tagName.toUpperCase() == 'TEXTAREA' ||
                                 document.activeElement.contentEditable == 'true')) {
                                return;
                            } else {
                                let contentEditable = false;
                                let parent = document.activeElement;
                                while (parent && parent.tagName) {
                                    contentEditable = parent.contentEditable == 'true';
                                    if (contentEditable || parent.tagName.toUpperCase() == 'BODY') {
                                        break;
                                    }
                                    parent = parent.parentNode;
                                }
                                if (contentEditable) return;
                            }
                        }
                        var key = (e.key || String.fromCharCode(e.keyCode)).toLowerCase();
                        if (data.shortcut == e.code || data.shortcut == key) {
                            batchOpenConfirm(e);
                            e.stopPropagation();
                        }
                    });
                }
                let baseSize = this.scale * 40;
                let typeAction = e => {
                    if (e) {
                        if (e.button === 2) {
                            batchOpenConfirm(e);
                            return false;
                        } if (e.button === 0 && (e.shiftKey || e.altKey || e.ctrlKey)) {
                            return false;
                        }
                    }
                    if (self.funcKeyCall) {
                        self.showAllSites();
                        /*self.bar.style.display = "none";
                        setTimeout(() => {
                            self.bar.style.display = "";
                            self.initPos(
                                searchData.prefConfig.position.x,
                                searchData.prefConfig.position.y,
                                searchData.prefConfig.offset.x,
                                searchData.prefConfig.offset.y
                            );
                        }, 0);*/
                        return false;
                    }
                    ele.style.width = "";
                    ele.style.height = "";
                    let leftRight = self.con.classList.contains("search-jumper-left") ||
                        self.con.classList.contains("search-jumper-right");
                    if (self.preList) {
                        self.preList.style.visibility = "hidden";
                        self.listArrow.style.cssText = "";
                    }
                    if (!ele.classList.contains("search-jumper-open")) {
                        self.recoveHistory();
                        ele.classList.add("search-jumper-open");
                        if (sites.length > (searchData.prefConfig.expandTypeLength || 12) && !searchData.prefConfig.expandType) {
                            ele.classList.add("not-expand");
                            ele.appendChild(self.searchJumperExpand);
                        }
                        let scrollSize = Math.max(ele.scrollWidth, ele.scrollHeight) + 5 + "px";
                        if (leftRight) {
                            ele.style.height = scrollSize;
                            ele.style.width = "";
                        } else {
                            ele.style.width = scrollSize;
                            ele.style.height = "";
                        }
                        setTimeout(() => {
                            if (ele.classList.contains("search-jumper-open")) {
                                ele.style.flexWrap = "nowrap";
                            }
                        }, searchData.prefConfig.typeOpenTime);
                        searchTypes.forEach(type => {
                            if (ele != type) {
                                type.classList.remove("search-jumper-open");
                                type.style.width = baseSize + "px";
                                type.style.height = baseSize + "px";
                                type.style.flexWrap = "";
                            }
                        });
                        let href = (targetElement && (targetElement.href || targetElement.src)) || location.href;
                        let keyWords = getKeywords();
                        siteEles.forEach((se, i) => {
                            let si = se.querySelector("img");
                            if (si && !si.src && si.dataset.src) {
                                si.src = si.dataset.src;
                                si.dataset.src = "";
                            }
                            let data = sites[i];
                            if (data.match && data.hideNotMatch) {
                                if (new RegExp(data.match).test(href)) {
                                    se.style.display = '';
                                } else {
                                    se.style.display = 'none';
                                }
                            }
                            if (keyWords && data.kwFilter) {
                                if (new RegExp(data.kwFilter).test(keyWords)) {
                                    se.style.display = '';
                                    if (ele.children.length > 1) ele.insertBefore(se, ele.children[1]);
                                } else {
                                    se.style.display = 'none';
                                    if (self.searchJumperExpand.parentNode == ele) {
                                        ele.insertBefore(se, self.searchJumperExpand);
                                    } else ele.appendChild(se);
                                }
                            }
                        });
                    } else {
                        ele.classList.remove("search-jumper-open");
                        if (leftRight) {
                            ele.style.height = baseSize + "px";
                        } else {
                            ele.style.width = baseSize + "px";
                        }
                        ele.style.flexWrap = "";
                    }
                    setTimeout(() => {
                        self.checkScroll();
                    }, 500);
                };
                typeBtn.onmousedown = typeAction;
                typeBtn.oncontextmenu = function (event) {
                    event.preventDefault();
                };

                typeBtn.addEventListener('click', e => {
                    self.batchOpen(batchSiteNames, e);
                    return false;
                }, false);
                typeBtn.addEventListener('dblclick', e=>{
                    e.stopPropagation();
                    e.preventDefault();
                }, true);

                let showTimer, siteList;
                typeBtn.addEventListener('mouseenter', e => {
                    if (!self.funcKeyCall && searchData.prefConfig.showSiteLists && (searchData.prefConfig.alwaysShowSiteLists || !ele.classList.contains("search-jumper-open"))) {
                        ele.appendChild(siteList);
                        self.listPos(ele.children[0], siteList);
                    } else {
                        self.tipsPos(typeBtn, ele.dataset.title);
                    }
                    if (searchData.prefConfig.overOpen) {
                        if (ele.classList.contains("search-jumper-open")) return;
                        clearTimeout(showTimer);
                        showTimer = setTimeout(() => {
                            typeAction(e);
                        }, 500);
                    }
                }, false);
                typeBtn.addEventListener('mouseleave', e => {
                    self.tips.style.opacity = 0;
                    if (searchData.prefConfig.overOpen) {
                        clearTimeout(showTimer);
                    }
                }, false);
                let isCurrent = false;
                let tooLoog = sites && sites.length > 200;
                ele.dataset.id = self.siteIndex;
                async function createItem(site, i) {
                    let siteEle = await self.createSiteBtn((tooLoog || searchData.prefConfig.noIcons ? 0 : site.icon), site, openInNewTab, isBookmark, data);
                    siteEle.dataset.type = type;
                    siteEle.dataset.id = self.siteIndex;
                    self.siteIndex++;
                    self.allSiteBtns.push([siteEle, site]);
                    ele.appendChild(siteEle);
                    siteEles.push(siteEle);
                    if (!site.nobatch) batchSiteNames.push(site.name);
                    if (!currentSite && (siteEle.dataset.current || match) && !ele.classList.contains("notmatch")) {
                        isCurrent = true;
                        if (!searchData.prefConfig.showCurrent) {
                            siteEle.style.display = 'none';
                        }
                        self.setCurrentSite(site, siteEle);
                        self.currentType = ele;
                    }
                }
                try {
                    for (let [i, site] of sites.entries()) {
                        await createItem(site, i);
                        if (i % 50 === 49) await sleep(1);
                    }
                } catch(e) {
                    for (let i = 0; i < sites.length; i++) {
                        createItem(sites[i], i);
                    }
                    await sleep(1);
                }
                siteEles.forEach(siteEle => {
                    if (siteEle.classList.contains("notmatch")) {
                        ele.appendChild(siteEle);
                    }
                });
                siteList = await self.createList(siteEles, ele, batchSiteNames);
                if (isCurrent) {
                    if (searchData.prefConfig.currentTypeFirst) {
                        self.bar.insertBefore(ele, self.bar.children[0]);
                    } else {
                        self.bar.insertBefore(ele, self.bar.children[self.bar.children.length - 1]);
                    }
                    if (!searchData.prefConfig.disableAutoOpen) {
                        ele.classList.add("search-jumper-open");
                        if (sites.length > (searchData.prefConfig.expandTypeLength || 12) && !searchData.prefConfig.expandType) {
                            ele.classList.add("not-expand");
                            ele.appendChild(self.searchJumperExpand);
                        }
                        siteEles.forEach((se, i) => {
                            let si = se.querySelector("img");
                            if (si && !si.src && si.dataset.src) {
                                si.src = si.dataset.src;
                            }
                            let data = sites[i];

                            if (localKeywords && data.kwFilter) {
                                if (new RegExp(data.kwFilter).test(localKeywords)) {
                                    se.style.display = '';
                                } else {
                                    se.style.display = 'none';
                                    if (self.searchJumperExpand.parentNode == ele) {
                                        ele.insertBefore(se, self.searchJumperExpand);
                                    } else ele.appendChild(se);
                                }
                            }
                        });
                    }
                } else {
                    if (!self.historyTypeEle) {
                        if (historyType == type) {
                            self.historyTypeEle = ele;
                        }
                    }
                    self.bar.insertBefore(ele, self.bar.children[self.bar.children.length - 1]);
                }

                ele.style.width = ele.scrollHeight + "px";
                ele.style.height = ele.scrollHeight + "px";
                siteList.style.display = "none";
                ele.appendChild(siteList);
                if (inPage && selectImg && selectAudio && selectVideo && selectLink && selectPage) {
                    ele.classList.add("search-jumper-targetAll");
                } else {
                    if (inPage) {
                        ele.classList.add("search-jumper-needInPage");
                    }
                    if (selectImg) {
                        ele.classList.add("search-jumper-targetImg");
                    }
                    if (selectAudio) {
                        ele.classList.add("search-jumper-targetAudio");
                    }
                    if (selectVideo) {
                        ele.classList.add("search-jumper-targetVideo");
                    }
                    if (selectLink) {
                        ele.classList.add("search-jumper-targetLink");
                    }
                    if (selectPage) {
                        ele.classList.add("search-jumper-targetPage");
                    }
                }
                searchTypes.push(ele);
                return ele;
            }

            openSiteBtn(siteEle, forceTarget) {
                let isPage = siteEle.dataset.isPage;
                if (!forceTarget) forceTarget = "_blank";
                if (isPage) {
                    siteEle.setAttribute("target", forceTarget);
                }
                let mouseDownEvent = new PointerEvent("mousedown");
                siteEle.dispatchEvent(mouseDownEvent);
                if (!this.customInput || this.batchOpening) {
                    if (siteEle.onclick || !isPage) {
                        siteEle.click();
                    } else {
                        if (forceTarget == "_blank") {
                            _GM_openInTab(siteEle.href, {active: true});
                        } else location.href = siteEle.href;
                    }
                }
                if (isPage) siteEle.setAttribute("target", siteEle.dataset.target == 1 ? "_blank" : "_self");
            }

            batchOpen(siteNames, e) {
                let self = this;
                self.batchOpening = true;
                self.customInput = false;
                let targetSites = self.getTargetSitesByName(siteNames);
                if (e.button === 0 && e.altKey && e.shiftKey) {
                    let html = '<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>';
                    let c = window.open("", "_blank");
                    for (let i = 0;i < targetSites.length;i++) {
                        let siteEle = targetSites[i];
                        if (siteEle.dataset.isPage && !siteEle.onclick) {
                            let mouseDownEvent = new PointerEvent("mousedown");
                            siteEle.dispatchEvent(mouseDownEvent);
                            if (self.stopInput) return;
                            let iframe = document.createElement('iframe');
                            iframe.width = targetSites.length <= 2 ? '50%' : '33%';
                            iframe.height = '100%';
                            iframe.frameBorder = '0';
                            iframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
                            iframe.id = "searchJumper" + i;
                            iframe.style.display = "none";
                            html += iframe.outerHTML;
                            _GM_xmlhttpRequest({
                                method: 'GET',
                                url: siteEle.href,
                                headers: {
                                    referer: siteEle.href,
                                    origin: siteEle.href
                                },
                                onload: function(d) {
                                    let curIframe = c.document.querySelector('iframe#' + iframe.id);
                                    let waitReady = () => {
                                        let doc = curIframe.contentDocument || (curIframe.contentWindow && curIframe.contentWindow.document);
                                        if (doc) {
                                            curIframe.style.display = "";
                                            curIframe.src = siteEle.href;
                                            let base = `<base href="${siteEle.href.replace(/[^\/]*$/, "")}">`;
                                            let docContent = d.response.indexOf("<head>") !== -1 ? d.response.replace("<head>", "<head>" + base) : base + d.response;
                                            doc.write(docContent);
                                        } else {
                                            setTimeout(() => {
                                                waitReady();
                                            }, 500);
                                        }
                                    };
                                    if (curIframe) {
                                        waitReady();
                                    }
                                },
                                onerror: function(e){
                                    debug(e);
                                },
                                ontimeout: function(e){
                                    debug(e);
                                }
                            });
                        }
                    }
                    c.document.write(html);
                    c.document.close();
                } else if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                    for (let i = 0;i < targetSites.length;i++) {
                        let siteEle = targetSites[i];
                        let mouseDownEvent = new PointerEvent("mousedown");
                        siteEle.dispatchEvent(mouseDownEvent);
                        if (self.stopInput) return;
                        if (siteEle.dataset.isPage && !siteEle.onclick) {
                            let target = {};
                            if (targetElement) {
                                target = {src: targetElement.src || targetElement.href || '', title: targetElement.title || targetElement.alt};
                            }
                            storage.setItem("lastSign", {target: target, sites: siteNames});
                            _GM_openInTab(siteEle.href, {incognito: true});
                            setTimeout(() => {
                                storage.setItem("lastSign", false);
                            }, 2000);
                            break;
                        }
                    }
                } else if (e.altKey) {
                    let urls=[];
                    for (let i = 0;i < targetSites.length;i++) {
                        let siteEle = targetSites[i];
                        if (siteEle.dataset.isPage && !siteEle.onclick) {
                            let mouseDownEvent = new PointerEvent("mousedown");
                            siteEle.dispatchEvent(mouseDownEvent);
                            if (self.stopInput) return;
                            urls.push(siteEle.href);
                        }
                    }
                    let viewWidth = window.screen.availWidth || window.innerWidth || document.documentElement.clientWidth;
                    let viewHeight = window.screen.availHeight || window.innerHeight || document.documentElement.clientHeight;
                    let numPerLine = parseInt(viewWidth / 800);
                    if (numPerLine > urls.length) numPerLine = urls.length;
                    let _width = parseInt(viewWidth / numPerLine);
                    let _height = viewHeight / (parseInt((urls.length - 1) / numPerLine) + 1) - 65;
                    for (let i = 0; i< urls.length; i++) {
                        let left = (i % numPerLine) * _width;
                        let top = parseInt(i / numPerLine) * (_height + 70);
                        window.open(urls[i] + "#searchJumperMin", "_blank", `width=${_width-10}, height=${_height}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${left}, top=${top}`);
                    }
                } else if (e.shiftKey) {
                    for (let i = 0;i < targetSites.length;i++) {
                        let siteEle = targetSites[i];
                        let mouseDownEvent = new PointerEvent("mousedown");
                        siteEle.dispatchEvent(mouseDownEvent);
                        if (self.stopInput) return;
                        if (siteEle.dataset.isPage && !siteEle.onclick) {
                            let target = {};
                            if (targetElement) {
                                target = {src: targetElement.src || targetElement.href || '', title: targetElement.title || targetElement.alt};
                            }
                            storage.setItem("lastSign", {target: target, sites: siteNames});
                            window.open(siteEle.href, '_blank');
                            setTimeout(() => {
                                storage.setItem("lastSign", false);
                            }, 2000);
                            break;
                        }
                    }
                } else if (e.ctrlKey || e.metaKey) {
                    for (let i = 0;i < targetSites.length;i++) {
                        let siteEle = targetSites[i];
                        let isPage = siteEle.dataset.isPage;
                        if (isPage) {
                            siteEle.setAttribute("target", "_blank");
                        }
                        let mouseDownEvent = new PointerEvent("mousedown");
                        siteEle.dispatchEvent(mouseDownEvent);
                        if (self.stopInput) return;
                        siteEle.click();
                        if (isPage) {
                            siteEle.setAttribute("target", siteEle.dataset.target == 1 ? "_blank" : "_self");
                        }
                    }
                } else if (e.button === 2) {
                    targetSites.forEach(siteEle => {
                        if (siteEle.dataset.current) return;
                        self.openSiteBtn(siteEle);
                    });
                }
                self.batchOpening = false;
            }

            getTargetSitesByName(siteNames) {
                let self = this;
                let targetSites = [];
                siteNames.forEach(n => {
                    for (let i = 0; i < self.allSiteBtns.length; i++) {
                        let siteBtn = self.allSiteBtns[i][0];
                        if (siteBtn.dataset.pointer) continue;
                        if (siteBtn.dataset.name == n) {
                            targetSites.push(siteBtn);
                            break;
                        }
                    }
                });
                return targetSites;
            }

            async submitAction(params) {
                params = params.slice();
                if (document.readyState !== 'complete') {
                    await sleep(500);
                    this.submitAction(params);
                    return;
                }
                let form, input, clicked = false;

                for (let param of params) {
                    if (param[0] === "sleep" || param[0] === "@sleep") {
                        await sleep(param[1]);
                        debug(`sleep ${param[1]}`);
                    } else if (param[0] === "@click") {
                        clicked = true;
                        await emuClick(param[1]);
                    } else if (param[1] === 'click' && param[0].indexOf('@') === 0) {
                        clicked = true;
                        await emuClick(param[0].substr(1));
                    } else if (param[0] === '@call') {
                        let func = window[param[1]] || Function('"use strict";' + param[1]);
                        if (func) await func();
                    } else {
                        if (!localKeywords) localKeywords = param[1];
                        await emuInput(param[0], param[1]);
                        input = getElement(param[0]);
                    }
                    if (inPagePostParams) {
                        inPagePostParams.shift();
                        storage.setItem("inPagePostParams_" + location.hostname, inPagePostParams && inPagePostParams.length ? inPagePostParams : "");
                    }
                }

                if (!clicked && input) {
                    form = input.parentNode;
                    while (form.tagName.toUpperCase() != 'FORM') {
                        form = form.parentNode;
                        if (!form) break;
                    }
                    if (form) {
                        let submitBtn = form.querySelector("[type=submit]");
                        if (submitBtn) submitBtn.click();
                        else form.submit();
                    } else {
                        emuPress();
                    }
                }
            }

            async createSiteBtn(icon, data, openInNewTab, isBookmark, typeData) {
                let self = this;
                let ele = document.createElement("a");
                ele.setAttribute("ref", "noopener noreferrer");
                let name = data.name;
                let urlMatch = data.match;
                let pointer = !isBookmark && /^\[/.test(data.url);
                if (pointer) {
                    ele.dataset.pointer = true;
                    let siteNames = JSON.parse(data.url);
                    if (siteNames.length === 1) {
                        ele.dataset.clone = true;
                        let findSite = false;
                        for (let i = 0; i < searchData.sitesConfig.length; i++) {
                            if (findSite) break;
                            let typeConfig = searchData.sitesConfig[i];
                            for (let j = 0; j < typeConfig.sites.length; j++) {
                                let siteData = typeConfig.sites[j];
                                if (/^\[/.test(siteData.url)) continue;
                                if (siteData.name == siteNames[0]) {
                                    findSite = true;
                                    data = siteData;
                                    break;
                                }
                            }
                        }
                    }
                } else if (/^d:/.test(data.url)) {
                    ele.setAttribute('download', '');
                    data.url = data.url.replace(/^d:/, '');
                }
                if (typeof data.openInNewTab !== 'undefined') {
                    openInNewTab = data.openInNewTab;
                }
                let isPage = /^(https?|ftp):/.test(data.url);
                if (isPage) ele.dataset.isPage = isPage;
                ele.className = "search-jumper-btn";
                if (typeof data.description !== 'undefined') ele.title = name + " - " + data.description;
                ele.dataset.name = name;
                ele.classList.add("search-jumper-word");
                let word = document.createElement("span");
                if (!isBookmark && name.length >= 3) {
                    word.innerText = name.substr(0, 3).trim();
                    if (!/^\w+$/.test(word.innerText)) word.innerText = word.innerText.substr(0, 2);
                } else word.innerText = name;
                ele.appendChild(word);
                let img = document.createElement("img");
                img.style.display = "none";
                ele.appendChild(img);
                if (data.nobatch) ele.dataset.nobatch = 1;
                self.stopInput = false;
                if (searchData.prefConfig.shortcut && data.shortcut && !ele.dataset.clone) {
                    let shortcutCover = document.createElement("div");
                    let shortcurStr = data.shortcut.replace('Key', '').toUpperCase();
                    if (shortcurStr.length == 1) shortcutCover.innerText = shortcurStr;
                    ele.appendChild(shortcutCover);
                    document.addEventListener('keydown', e => {
                        if (e.target.id === "searchJumperInput") return;
                        if (!self.hideTimeout) {
                            if ((!data.ctrl == e.ctrlKey) ||
                                (!data.alt == e.altKey) ||
                                (!data.shift == e.shiftKey) ||
                                (!data.meta == e.metaKey)) {
                                return;
                            }
                        }
                        if (!searchData.prefConfig.enableInInput) {
                            if (document.activeElement &&
                                (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                                 document.activeElement.tagName.toUpperCase() == 'TEXTAREA' ||
                                 document.activeElement.contentEditable == 'true')) {
                                return;
                            } else {
                                let contentEditable = false;
                                let parent = document.activeElement;
                                while (parent && parent.tagName) {
                                    contentEditable = parent.contentEditable == 'true';
                                    if (contentEditable || parent.tagName.toUpperCase() == 'BODY') {
                                        break;
                                    }
                                    parent = parent.parentNode;
                                }
                                if (contentEditable) return;
                            }
                        }
                        var key = (e.key || String.fromCharCode(e.keyCode)).toLowerCase();
                        if (data.shortcut == e.code || data.shortcut == key) {
                            if (action() !== false && !self.customInput) {
                                ele.click();
                            }
                            e.stopPropagation();
                        }
                    });
                }
                ele.dataset.inPagePost = (data.url.indexOf("#p{") != -1) ? 't' : 'f';
                let inPagePost = ele.dataset.inPagePost === 't';
                if (urlMatch === '0') {
                    ele.style.display = 'none';
                    ele.classList.add("notmatch");
                } else if (!isBookmark && (!currentSite || data.hideNotMatch) && window.top == window.self) {
                    if (urlMatch) {
                        if (new RegExp(urlMatch).test(location.href)) {
                            ele.dataset.current = true;
                        }
                    } else if (!pointer && location.hostname && data.url.indexOf(location.hostname) != -1) {
                        if (!this.inSiteMatch) this.inSiteMatch = /site(%3A|:)(.+?)[\s%]/;
                        let match = data.url.match(this.inSiteMatch);
                        if (match) {
                            if (location.href.indexOf(match[2]) != -1 && data.url.replace(match[0], "").indexOf(location.hostname) != -1) {
                                ele.dataset.current = true;
                            }
                        } else {
                            if (!this.pathMatch) this.pathMatch = new RegExp("^https?://" + location.host + location.pathname + "?([\\?#].*|[%:#]p{|$)");
                            if (this.pathMatch.test(data.url)) {
                                if (!this.postMatch) this.postMatch = /[#:%]p{/;
                                if (this.postMatch.test(data.url)) {
                                    ele.dataset.current = true;
                                } else {
                                    if (!this.paramMatch) this.paramMatch = /[^\/\?&]+(?=%[stb])/g;
                                    let urlReg = data.url.match(this.paramMatch);
                                    if (urlReg) {
                                        urlReg = urlReg.join('.*');
                                        if (new RegExp(urlReg).test(location.href)) {
                                            ele.dataset.current = true;
                                        }
                                    } else {
                                        ele.dataset.current = true;
                                    }
                                }
                            } else if (data.url.indexOf("javascript") !== 0 && data.url.indexOf("?") === -1) {
                                if (!this.keywordMatch) this.keywordMatch = /%[stb][a-z]?\b/g;
                                if (new RegExp(data.url.replace(/^https?/, "").replace(/[#%]\w+{.*/, "").replace(/\./g, "\\.").replace(this.keywordMatch, ".*")).test(location.href)) {
                                    ele.dataset.current = true;
                                }
                            }
                        }
                    }
                    if (ele.dataset.current) {
                        if (!currentSite && inPagePostParams) {
                            if (inPagePost) {
                                await this.submitAction(inPagePostParams);
                            } else {
                                //storage.setItem("inPagePostParams", false);
                            }
                        }
                    } else if (data.hideNotMatch) {
                        ele.style.display = 'none';
                        ele.classList.add("notmatch");
                    }
                }
                let imgSrc;
                if (icon == 0) {
                } else if (icon) {
                    imgSrc = icon;
                } else if (!isBookmark && isPage) {
                    imgSrc = data.url.replace(/^(https?:\/\/[^\/]*\/).*$/, "$1favicon.ico");
                }
                if (imgSrc) {
                    img.onload = e => {
                        ele.classList.remove("search-jumper-word");
                        ele.removeChild(word);
                        img.style.display = "";
                    };
                    let isBase64 = /^data:/.test(imgSrc);
                    if (isBase64) {
                        img.dataset.src = imgSrc;
                    } else {
                        let cache = searchData.prefConfig.cacheSwitch && cacheIcon[imgSrc];
                        if (cache === 'fail') {
                            if (ele.dataset.current && imgSrc.indexOf(location.host) != -1) {
                                img.dataset.src = imgSrc;
                                cacheIcon[imgSrc] = '';
                                if (!isBookmark && !cacheIcon[imgSrc]) cachePool.push(img);
                            }
                        } else if (cache) {
                            img.dataset.src = cache;
                        } else {
                            img.dataset.src = imgSrc;
                            if (!isBookmark && !cacheIcon[imgSrc]) cachePool.push(img);
                        }
                    }
                }
                if (isPage) {
                    if (openInNewTab) {
                        ele.setAttribute("target", "_blank");
                        ele.dataset.target = 1;
                    } else ele.setAttribute("target", "_self");
                }
                let getUrl = () => {
                    self.customInput = false;
                    let keywords;
                    if (self.searchJumperInputKeyWords.value) {
                        keywords = self.searchJumperInputKeyWords.value;
                    } else {
                        keywords = getKeywords();
                    }
                    if (keywords && keywords != cacheKeywords) {
                        cacheKeywords = keywords;
                        storage.setItem("cacheKeywords", keywords);
                    }
                    let postMatch;
                    if (inPagePost) {
                        postMatch = data.url.match(/#p{(.*[^\\])}/);
                    }
                    let host = location.host;
                    let href = location.href;
                    let keyToReg = (key, sign, more) => {
                        if (!more) {
                            if (/\w$/.test(key)) {
                                more = '(\\b|$)';
                            } else more = '';
                        }
                        return new RegExp(key.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g, "\\$1") + more, sign);
                    }
                    let customReplaceSingle = (str, key, value, after) => {
                        if (str.indexOf(key + ".replace(/") !== -1) {
                            let replaceMatch = str.match(keyToReg(key, "", "\\.replace\\(/(.*?[^\\\\])/(.*?),\s*[\"'](.*?[^\\\\])??[\"']\\)"));
                            if (!replaceMatch) return str.replace(keyToReg(key, "g"), (after ? after(value) : value));
                            value = value.replace(new RegExp(replaceMatch[1], replaceMatch[2]), replaceMatch[3] || '');
                            str = str.replace(replaceMatch[0], key);
                            return customReplaceSingle(str, key, value, after);
                        } else {
                            return str.replace(keyToReg(key, "g"), (after ? after(value) : value));
                        }
                    };
                    let needDecode = (/^c(opy)?:|[#:%]P{|^javascript:/i.test(data.url));
                    let keywordsU, keywordsL, keywordsR;
                    let customReplaceKeywords = str => {
                        let _str = str;
                        _str = customReplaceSingle(_str, "%su", keywordsU);
                        _str = customReplaceSingle(_str, "%sl", keywordsL);
                        _str = customReplaceSingle(_str, "%sr", keywordsR);
                        _str = customReplaceSingle(_str, "%se", escape ? escape(keywordsR) : keywordsR);
                        if (_str == str) {
                            _str = customReplaceSingle(_str, "%s", keywordsR, v => {
                                return (needDecode ? v : encodeURIComponent(v));
                            });
                        }
                        return _str;
                    };
                    let customVariable = str => {
                        let customMatch = str.match(/%element{(.*?)}(\.prop\((.*?)\))?/);
                        let runTimes = 0;
                        while (customMatch) {
                            if (runTimes++ > 100) break;
                            let selector = customMatch[1];
                            let prop = customMatch[3];
                            let value = "";
                            let ele = getElement(selector);
                            if (ele) {
                                if (prop) {
                                    value = ele.getAttribute(prop) || ele[prop];
                                } else {
                                    value = ele.innerText;
                                }
                            }
                            str = customReplaceSingle(str, customMatch[0], value);
                            customMatch = str.match(/%element{(.*?)}(\.prop\((.*?)\))?/);
                        }
                        customMatch = str.match(/%date({(.*?)})?/);
                        runTimes = 0;
                        let curTime = new Date().getTime();
                        while (customMatch) {
                            if (runTimes++ > 100) break;
                            let timeEval = customMatch[2];
                            let value = curTime;
                            if (timeEval) {
                                timeEval = timeEval.replace(/\s/g, '');
                                let mathEval = timeEval.match(/(\D*)?(\d+)/);
                                while (mathEval) {
                                    switch (mathEval[1]) {
                                        case "-":
                                            value -= parseInt(mathEval[2]);
                                            break;
                                        case "*":
                                            value *= parseInt(mathEval[2]);
                                            break;
                                        case "/":
                                            if (mathEval[2] && mathEval[2] != '0') {
                                                value = parseInt(value / parseInt(mathEval[2]));
                                            }
                                            break;
                                        default:
                                            value += parseInt(mathEval[2]);
                                            break;
                                    }
                                    timeEval = timeEval.replace(mathEval[0], "");
                                    mathEval = timeEval.match(/(\D*)?(\d+)/);
                                }
                            } else {
                                value = curTime;
                            }
                            str = str.replace(customMatch[0], value);
                            customMatch = str.match(/%date({(.*?)})?/);
                        }
                        return str;
                    }
                    if (!ele.dataset.url) {
                        let tempUrl = data.url;
                        if (inPagePost) {
                            tempUrl = tempUrl.replace(postMatch[0], "");
                        }
                        ele.dataset.url = tempUrl.replace(/%e\b/g, document.characterSet).replace(/%c\b/g, (isMobile?"mobile":"pc")).replace(/%h\b/g, host);
                    }
                    let selStr = getSelectStr();
                    let targetUrl = '';
                    let targetName = selStr || document.title;
                    let imgBase64 = '', resultUrl = customVariable(ele.dataset.url);
                    let hasWordParam = /%s[lure]?\b/.test(data.url);
                    if (targetElement && targetElement.tagName) {
                        targetUrl = (typeData.selectImg || typeData.selectAudio || typeData.selectVideo) ? (targetElement.src || '') : (targetElement.href || (targetElement.parentNode && targetElement.parentNode.href) || '');
                        if (targetElement.tagName.toUpperCase() == "VIDEO" || targetElement.tagName.toUpperCase() == "AUDIO") {
                            if (!targetUrl) {
                                let source = targetElement.querySelector("source");
                                if (source) targetUrl = source.src;
                            }
                            if (targetUrl) targetUrl = targetUrl.replace(/^blob:/, "");
                        }
                        targetName = targetElement.title || targetElement.alt || document.title;
                        if (targetElement.tagName.toUpperCase() == 'IMG' && /%i\b/.test(ele.dataset.url)) {
                            if (targetElement.src) {
                                if (/^data/.test(targetElement.src)) {
                                    resultUrl = resultUrl.replace(/%i\b/g, targetElement.src);
                                } else {
                                    imgBase64 = image2Base64(targetElement);
                                    resultUrl = resultUrl.replace(/%i\b/g, imgBase64);
                                }
                            }
                        } else if ((targetElement.tagName.toUpperCase() == 'A' || (targetElement.parentNode && targetElement.parentNode.tagName.toUpperCase() == 'A')) && hasWordParam && !keywords) {
                            if (targetElement.textContent.trim()) keywords = targetElement.textContent.trim();
                        }
                    }
                    while (resultUrl.indexOf('%input{') !== -1) {
                        let inputMatch = resultUrl.match(/%input{(.*?)}/);
                        if (!inputMatch) return false;
                        self.customInput = true;
                        if (self.stopInput) return false;
                        if (self.batchOpening) {
                            let promptStr;
                            if (inputMatch[1].indexOf("\"") === 0 && inputMatch[1].indexOf("\",\"") !== -1) {
                                promptStr = inputMatch[1].substr(1, inputMatch[1].length - 2).split("\",\"");
                            } else {
                                promptStr = inputMatch[1].split(",");
                            }
                            if (promptStr.length === 2) {
                                promptStr = window.prompt(promptStr[0], promptStr[1]);
                            } else {
                                promptStr = window.prompt(inputMatch[1]);
                            }
                            if (promptStr === null) return false;
                            resultUrl = resultUrl.replace(inputMatch[0], promptStr);
                        } else break;
                    }
                    let targetBaseUrl = targetUrl.replace(/^https?:\/\//i, "");
                    if (!keywords) keywords = (currentSite && cacheKeywords);
                    if (!keywords && hasWordParam) {
                        self.customInput = true;
                        if (self.stopInput) return false;
                        let promptStr = window.prompt(i18n("keywords"));
                        if (promptStr === null) return false;
                        localKeywords = promptStr;
                        setTimeout(() => {localKeywords = ''}, 1);
                        keywords = promptStr;
                        keywordsR = keywords;
                        keywordsU = keywordsR.toUpperCase();
                        keywordsL = keywordsR.toLowerCase();
                        if (!needDecode) keywords = encodeURIComponent(keywords);
                        resultUrl = customReplaceKeywords(resultUrl);
                    }
                    if (keywords && (!keywordsU && !keywordsL && !keywordsR)) {
                        keywordsR = keywords;
                        keywordsU = keywordsR.toUpperCase();
                        keywordsL = keywordsR.toLowerCase();
                        if (!needDecode) keywords = encodeURIComponent(keywords);
                    }
                    if (targetUrl === '') {
                        let canBeUrl = getSelectStr() || self.searchJumperInputKeyWords.value;
                        if (canBeUrl && !hasWordParam) {
                            targetUrl = canBeUrl;
                        } else {
                            let promptStr = false;
                            let getTargetUrl = () => {
                                if (self.stopInput) return false;
                                if (promptStr === false) {
                                    promptStr = window.prompt(i18n("targetUrl"), "https://www.google.com/favicon.ico");
                                    if (promptStr) {
                                        targetElement = {src: promptStr};
                                    }
                                }
                                if (promptStr === null) return false;
                                return true;
                            };
                            if (/%t\b/.test(resultUrl)) {
                                self.customInput = true;
                                if (getTargetUrl() === false) return false;
                                resultUrl = customReplaceSingle(resultUrl, "%t", promptStr);
                            }
                            if (/%T\b/.test(resultUrl)) {
                                self.customInput = true;
                                if (getTargetUrl() === false) return false;
                                resultUrl = resultUrl.replace(/%T\b/g, encodeURIComponent(promptStr));
                            }
                            if (/%b\b/.test(resultUrl)) {
                                self.customInput = true;
                                if (getTargetUrl() === false) return false;
                                resultUrl = resultUrl.replace(/%b\b/g, promptStr.replace(/^https?:\/\//i, ""));
                            }
                            if (/%B\b/.test(resultUrl)) {
                                self.customInput = true;
                                if (getTargetUrl() === false) return false;
                                resultUrl = resultUrl.replace(/%B\b/g, encodeURIComponent(promptStr.replace(/^https?:\/\//i, "")));
                            }
                        }
                    }
                    if (targetUrl && !/%t\b/i.test(ele.dataset.url)) {
                        href = targetUrl;
                    }
                    if (inPagePost) {
                        let postParams = [];
                        postMatch[1].replace(/([^\\])&/g, "$1SJ^PARAM").split("SJ^PARAM").forEach(pair => {//ios不支持零宽断言，哭唧唧
                            pair = pair.trim();
                            if (pair.startsWith("click(") && pair.endsWith(')')) {
                                let click = pair.slice(6, pair.length - 1);
                                if (click) {
                                    postParams.push(['@click', click.replace(/\\([\=&])/g, "$1").trim()]);
                                }
                            } else if (pair.startsWith("call(") && pair.endsWith(')')) {
                                let func = pair.slice(5, pair.length - 1);
                                if (func) {
                                    postParams.push(['@call', func.replace(/\\([\=&])/g, "$1").trim()]);
                                }
                            } else if (/^sleep\(\d+\)$/.test(pair)) {
                                let sleep = pair.match(/sleep\((.*)\)/);
                                if (sleep) {
                                    postParams.push(['@sleep', sleep[1]]);
                                }
                            } else {
                                pair = pair.replace(/([^\\])\=/g, "$1SJ^PARAM").replace(/\\([\=&])/g, "$1");
                                let pairArr = pair.split("SJ^PARAM");
                                if (pairArr.length === 2) {
                                    let k = pairArr[0];
                                    let v = customReplaceKeywords(pairArr[1].replace(/\\([\=&])/g, "$1").replace(/%e\b/g, document.characterSet).replace(/%c\b/g, (isMobile?"mobile":"pc")).replace(/%U\b/g, encodeURIComponent(href)).replace(/%h\b/g, host).replace(/%T\b/g, encodeURIComponent(targetUrl)).replace(/%b\b/g, targetBaseUrl).replace(/%B\b/g, encodeURIComponent(targetBaseUrl)).replace(/%n\b/g, targetName).replace(/%S\b/g, (cacheKeywords || keywords)));
                                    v = customReplaceSingle(v, "%t", targetUrl);
                                    v = customReplaceSingle(v, "%u", href);
                                    postParams.push([k, v]);
                                } else if (pair.endsWith('.click()') || pair.endsWith('.click')) {
                                    postParams.push(['@' + pair.replace(/\.click(\(\))?$/, ''), 'click']);
                                }
                            }
                        });
                        if (resultUrl === "" || resultUrl === location.href) {
                            inPagePostParams = postParams;
                            this.submitAction(postParams);
                            return false;
                        } else {
                            storage.setItem("inPagePostParams_" + resultUrl.replace(/^https?:\/\/([^\/:]+).*/, "$1"), postParams);
                        }
                    }
                    resultUrl = customReplaceKeywords(resultUrl.replace(/%U\b/g, encodeURIComponent(href)).replace(/%T\b/g, encodeURIComponent(targetUrl)).replace(/%b\b/g, targetBaseUrl).replace(/%B\b/g, encodeURIComponent(targetBaseUrl)).replace(/%n\b/g, targetName).replace(/%S\b/g, (cacheKeywords || keywords)));
                    resultUrl = customReplaceSingle(resultUrl, "%t", targetUrl);
                    resultUrl = customReplaceSingle(resultUrl, "%u", href);
                    if (openInNewTab && /^(https?|ftp):/.test(resultUrl)) {
                        ele.setAttribute("target", "_blank");
                        ele.dataset.target = 1;
                    } else {
                        ele.dataset.target = 0;
                    }
                    return resultUrl;
                };
                let action = e => {
                    if (!self.batchOpening && !isBookmark) {
                        let historyLength = Math.max(searchData.prefConfig.historyLength, 20);
                        let isCurrent = ele.dataset.current;
                        if (!data.hideNotMatch && !data.kwFilter && !ele.dataset.clone && urlMatch !== '0' && historyLength && !isCurrent) {
                            storage.getItem("historySites", data => {
                                historySites = (data || []);
                                historySites = historySites.filter(site => {return site && site != name});
                                historySites.unshift(name);
                                if (historySites.length > historyLength) {
                                    historySites = historySites.slice(0, historyLength);
                                }
                                storage.setItem("historySites", historySites);
                                self.initHistorySites();
                            });
                        }
                        if (searchData.prefConfig.shiftLastUsedType && !isCurrent) {
                            let parent = ele.parentNode;
                            let dismissHistory = parent && (parent.classList.contains("search-jumper-isInPage") ||
                                                            parent.classList.contains("search-jumper-isTargetImg") ||
                                                            parent.classList.contains("search-jumper-isTargetAudio") ||
                                                            parent.classList.contains("search-jumper-isTargetVideo") ||
                                                            parent.classList.contains("search-jumper-isTargetLink") ||
                                                            parent.classList.contains("search-jumper-isTargetPage"));
                            if (!dismissHistory && historyType != ele.dataset.type) {
                                historyType = ele.dataset.type;
                                storage.setItem("historyType", historyType);
                            }
                        }
                        if (searchData.prefConfig.sortType) {
                            storage.getItem("sortTypeNames", data => {
                                sortTypeNames = (data || {});
                                if (!sortTypeNames[ele.dataset.type]) {
                                    sortTypeNames[ele.dataset.type] = 1;
                                } else {
                                    sortTypeNames[ele.dataset.type] = sortTypeNames[ele.dataset.type] + 1;
                                }
                                storage.setItem("sortTypeNames", sortTypeNames);
                            });
                        }
                    }
                    if (/^c(opy)?:/.test(data.url)) {
                        let url = getUrl();
                        if (!url) {
                            ele.href = "#";
                            return false;
                        } else if (url.indexOf('%input{') !== -1) {
                            self.showCustomInputWindow(url, _url => {
                                _GM_setClipboard(_url.replace(/^c(opy)?:/, ""));
                                //_GM_notification('Copied successfully!');
                            });
                        } else {
                            _GM_setClipboard(url.replace(/^c(opy)?:/, ""));
                            //_GM_notification('Copied successfully!');
                        }
                    } else if (/^\[/.test(data.url)) {
                        if (!ele.onclick) {
                            let siteNames = JSON.parse(data.url);
                            ele.onclick = e => {
                                self.batchOpen(siteNames, {button: 2, altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, metaKey: e.metaKey});
                                return false;
                            };
                        }
                    } else if (/[:%]P{/.test(data.url)) {
                        if (!ele.onclick) {
                            ele.onclick = e => {
                                e.stopPropagation();
                                e.preventDefault();

                                let url = getUrl();
                                if (url === false) return false;
                                let postHandler = _url => {
                                    let postBody = _url.match(/[:%]P{(.*?)}/), postParam = {};
                                    if (postBody) {
                                        _url = _url.replace(postBody[0], '');
                                        postBody = postBody[1];
                                        postBody = new URLSearchParams(postBody);
                                        postBody.forEach((v, k) => {
                                            postParam[k] = v;
                                        });
                                    }
                                    _GM_xmlhttpRequest({
                                        method: "POST", url: _url, data: JSON.stringify(postParam),
                                        onload: (d) => {
                                            _GM_notification(i18n("postOver") + d.statusText);
                                        },
                                        onerror: (e) => {
                                            _GM_notification(i18n("postError") + (e.statusText || e.error));
                                        },
                                        ontimeout: (e) => {
                                            _GM_notification(i18n("postError") + (e.statusText || e.error));
                                        }
                                    });
                                }
                                if (url.indexOf('%input{') !== -1) {
                                    self.showCustomInputWindow(url, _url => {
                                        postHandler(_url);
                                    });
                                } else {
                                    postHandler(url);
                                }
                                return false;
                            };
                        }
                    } else {
                        let url = getUrl();
                        if ((data.charset && data.charset != 'utf-8') || /[:%]p{/.test(data.url)) {
                            if (url === false) return false;
                            let jumpFrom = data.url.match(/#(j(umpFrom|f)?|from){(.*?)}/);
                            let processPostUrl = _url => {
                                storage.setItem("postUrl", [_url, data.charset]);
                                if (jumpFrom) {
                                    jumpFrom = jumpFrom[3];
                                    if (jumpFrom.indexOf("http") !== 0) {
                                        jumpFrom = _url.replace(/(:\/\/.*?\/).*/, "$1" + jumpFrom);
                                    }
                                    _url = jumpFrom;
                                } else {
                                    _url = _url.replace(/(:\/\/.*?)\/.*/, "$1").replace(/[:%]p{.*/, '');
                                }
                                return _url;
                            };
                            if (url.indexOf('%input{') !== -1) {
                                self.showCustomInputWindow(url, _url => {
                                    _url = processPostUrl(_url);
                                    ele.href = _url;
                                    if (ele.target === '_blank') {
                                        _GM_openInTab(ele.href, {active: true});
                                    } else {
                                        location.href = ele.href;
                                    }
                                });
                                return;
                            } else {
                                url = processPostUrl(url);
                            }
                        }
                        let alt = e && e.altKey;
                        let ctrl = e && (e.ctrlKey || e.metaKey);
                        let shift = e && e.shiftKey;
                        if (!url) {
                            //wait for all input stoped
                            if (!self.stopInput) {
                                self.stopInput = true;
                                setTimeout(() => {
                                    self.stopInput = false;
                                }, 1);
                            }
                            //disable click
                            ele.onclick = e => {
                                ele.onclick = null;
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            };
                        } else {
                            ele.href = url;
                            if (!self.batchOpening) {
                                let isPage = /^(https?|ftp):/.test(url);
                                let checkAlt = () => {
                                    if (shift && !ctrl && !alt && e.isTrusted) return false;
                                    if ((alt || ctrl || shift) && isPage) {
                                        ele.onclick = e => {
                                            ele.onclick = null;
                                            if (ctrl && shift) {
                                                _GM_openInTab(url, {incognito: true});
                                            } else if (ctrl) {
                                                _GM_openInTab(url);
                                            } else if (alt) {
                                                if (data.match) {
                                                    let match = data.match.replace(/\\/g, "");
                                                    let mobileMatch = match.match(/\((www)\|([^\)\|]+)/);
                                                    while (mobileMatch) {
                                                        url = url.replace(mobileMatch[1], mobileMatch[2]);
                                                        match = match.replace(mobileMatch[0], "");
                                                        mobileMatch = match.match(/\(([^\)\|]+)\|([^\)\|]+)/);
                                                    }
                                                }
                                                let viewWidth = window.screen.availWidth || window.innerWidth || document.documentElement.clientWidth;
                                                let viewHeight = window.screen.availHeight || window.innerHeight || document.documentElement.clientHeight;
                                                let left = viewWidth - 450;
                                                let top = (viewHeight - 800) / 2;
                                                window.open(url + "#searchJumperMin" + (/#p{/.test(data.url) ? 'Post' : ''), "_blank", `width=450, height=800, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${left}, top=${top}`);
                                            } else if (shift) {
                                                _GM_openInTab(url, {active: true});
                                            }
                                            if (e.preventDefault) e.preventDefault();
                                            if (e.stopPropagation) e.stopPropagation();
                                            return false;
                                        };
                                        return true;
                                    }
                                    return false;
                                };
                                if (self.customInput) {
                                    //lose click, click one more time
                                    let checkCustomHandler = _url => {
                                        ele.href = _url;
                                        if (checkAlt() || !isPage) {
                                            ele.click();
                                        } else {
                                            if (ele.dataset.target == "1") {
                                                _GM_openInTab(_url, {active: true});
                                            } else location.href = _url;
                                        }
                                    };
                                    if (url.indexOf('%input{') !== -1) {
                                        ele.onclick = e => {
                                            ele.onclick = null;
                                            if (e.preventDefault) e.preventDefault();
                                            if (e.stopPropagation) e.stopPropagation();
                                            return false;
                                        };
                                        self.showCustomInputWindow(url, _url => {
                                            checkCustomHandler(_url);
                                        });
                                        return false;
                                    } else {
                                        checkCustomHandler(url);
                                    }
                                } else {
                                    if (!checkAlt()) {
                                        if (searchData.prefConfig.multiline == 1 || searchData.prefConfig.multiline == 2) {
                                            let selStr = getSelectStr();
                                            if (selStr &&
                                                /%s\b/.test(ele.dataset.url) &&
                                                selStr.indexOf("\n") !== -1) {
                                                if (searchData.prefConfig.multiline == 1 ||
                                                    confirm(i18n("multiline"))) {
                                                    let selStrArr = selStr.split("\n");
                                                    if (selStrArr.length > 10 && !confirm(i18n("multilineTooMuch"))) return;
                                                    let encodeSelStr = encodeURIComponent(selStr);
                                                    let searchIndex = 0;
                                                    let searchByLine = () => {
                                                        _GM_openInTab(url.replace(encodeSelStr, encodeURIComponent(selStrArr[searchIndex++])));
                                                        if (searchIndex < selStrArr.length) {
                                                            setTimeout(() => {
                                                                searchByLine();
                                                            }, searchData.prefConfig.multilineGap || 1000);
                                                        }
                                                    };
                                                    searchByLine();
                                                    if (searchData.prefConfig.multiline == 1) {
                                                        ele.onclick = e => {
                                                            ele.onclick = null;
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            return false;
                                                        };
                                                    }
                                                } else {
                                                    ele.click();
                                                }
                                                return false;
                                            }
                                        }
                                        ele.onclick = null;
                                    }
                                }
                            }
                        }
                    }
                };
                //ele.href = data.url;
                ele.addEventListener('mousedown', action, false);

                ele.addEventListener('mouseenter', e => {
                    self.tipsPos(ele, ele.dataset.name);
                }, false);
                ele.addEventListener('mouseleave', e => {
                    self.tips.style.opacity = 0;
                }, false);
                return ele;
            }

            checkScroll(noIntoView, noSmooth) {
                if (this.funcKeyCall) return;
                let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                if (this.bar.scrollWidth > viewWidth || this.bar.scrollHeight > viewHeight) {
                    if (!this.con.classList.contains("search-jumper-scroll")) {
                        this.bar.style.cssText = "";
                        this.con.classList.add("search-jumper-scroll");
                    }
                } else {
                    if (this.con.classList.contains("search-jumper-scroll")) {
                        this.bar.style.cssText = "";
                        this.con.classList.remove("search-jumper-scroll");
                    }
                }
                if (noIntoView) return;
                let firstType = this.bar.querySelector(".search-jumper-type.search-jumper-open");
                if (firstType) {
                    if (firstType.style.width === "0px") {
                        firstType.style.width = "auto";
                    }
                    if (firstType.style.height === "0px") {
                        firstType.style.height = "auto";
                    }
                    if (firstType != this.bar.firstElementChild) {
                        firstType.scrollIntoView(noSmooth ? {} : {behavior: "smooth"});
                    }
                }
            }

            showInPage(_funcKeyCall, e) {
                if (this.bar.contains(targetElement) || this.inInput || (!_funcKeyCall && this.funcKeyCall)) {
                    return;
                }
                let selectStr = getSelectStr();
                if (_funcKeyCall && selectStr && selectStr.length < (searchData.prefConfig.limitPopupLen || 1)) return;
                if (this.con && this.con.classList.contains("search-jumper-showall")) return;
                if (searchData.prefConfig.hidePopup) _funcKeyCall = false;
                if (!targetElement || !targetElement.tagName) targetElement = getBody(document);
                else if (targetElement != getBody(document)) {
                    let _targetElement = targetElement, children;
                    while (_targetElement && _targetElement.tagName) {
                        if (_targetElement.tagName.toUpperCase() == 'IMG' || _targetElement.tagName.toUpperCase() == 'AUDIO' || _targetElement.tagName.toUpperCase() == 'VIDEO' || _targetElement.tagName.toUpperCase() == 'A') break;
                        if (_targetElement.parentNode) {
                            children = _targetElement.parentNode.querySelectorAll("img,audio,video,a");
                            if (children && children.length === 1 && children[0].clientHeight && _targetElement.clientHeight / children[0].clientHeight < 2) {
                                _targetElement = children[0];
                                break;
                            }
                        }
                        _targetElement = _targetElement.parentNode;
                    }
                    if (_targetElement && _targetElement.tagName) targetElement = _targetElement;
                }
                this.appendBar();
                //this.recoveHistory();
                let firstType, targetSiteImgs;
                let self = this;
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                }
                var delay = searchData.prefConfig.autoDelay || 1000;
                var hideHandler = () => {
                    self.bar.classList.remove("search-jumper-isInPage");
                    self.bar.classList.remove("search-jumper-isTargetImg");
                    self.bar.classList.remove("search-jumper-isTargetAudio");
                    self.bar.classList.remove("search-jumper-isTargetVideo");
                    self.bar.classList.remove("search-jumper-isTargetLink");
                    self.bar.classList.remove("search-jumper-isTargetPage");
                    self.bar.classList.remove("initShow");
                    self.hideTimeout = null;
                };
                if (searchData.prefConfig.autoHide) this.hideTimeout = setTimeout(hideHandler, delay);
                this.bar.classList.remove("search-jumper-isInPage");
                this.bar.classList.remove("search-jumper-isTargetImg");
                this.bar.classList.remove("search-jumper-isTargetAudio");
                this.bar.classList.remove("search-jumper-isTargetVideo");
                this.bar.classList.remove("search-jumper-isTargetLink");
                this.bar.classList.remove("search-jumper-isTargetPage");
                this.bar.classList.remove("initShow");
                setTimeout(() => {this.bar.classList.add("initShow");}, 10);
                if (selectStr) {
                    this.bar.classList.add("search-jumper-isInPage");
                    if (this.bar.style.display == "none" || _funcKeyCall) {
                        firstType = this.bar.querySelector('.search-jumper-needInPage:not(.notmatch)>span');
                        targetSiteImgs = this.bar.querySelectorAll('.search-jumper-needInPage:not(.notmatch)>a>img');
                    } else {
                        let openType = this.bar.querySelector(".search-jumper-type.search-jumper-open");
                        if (!openType || openType.classList.contains('notmatch') ||
                            openType.classList.contains('search-jumper-targetPage') ||
                            openType.classList.contains('search-jumper-targetImg') ||
                            openType.classList.contains('search-jumper-targetAudio') ||
                            openType.classList.contains('search-jumper-targetVideo') ||
                            openType.classList.contains('search-jumper-targetLink')) {
                            firstType = this.bar.querySelector('.search-jumper-needInPage:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-needInPage:not(.notmatch)>a>img');
                        }
                    }
                } else {
                    switch (targetElement.tagName.toUpperCase()) {
                        case 'IMG':
                            this.bar.classList.add("search-jumper-isTargetImg");
                            firstType = this.bar.querySelector('.search-jumper-targetImg:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetImg:not(.notmatch)>a>img');
                            break;
                        case 'AUDIO':
                            this.bar.classList.add("search-jumper-isTargetAudio");
                            firstType = this.bar.querySelector('.search-jumper-targetAudio:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetAudio:not(.notmatch)>a>img');
                            break;
                        case 'VIDEO':
                            this.bar.classList.add("search-jumper-isTargetVideo");
                            firstType = this.bar.querySelector('.search-jumper-targetVideo:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetVideo:not(.notmatch)>a>img');
                            break;
                        case 'A':
                            this.bar.classList.add("search-jumper-isTargetLink");
                            firstType = this.bar.querySelector('.search-jumper-targetLink:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetLink:not(.notmatch)>a>img');
                            break;
                        default:
                            break;
                    }
                    let parentNode = targetElement.parentNode;
                    if (parentNode && parentNode.tagName.toUpperCase() === 'A') {
                        this.bar.classList.add("search-jumper-isTargetLink");
                        if (!firstType) {
                            firstType = this.bar.querySelector('.search-jumper-targetLink:not(.notmatch)>span');
                            targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetLink:not(.notmatch)>a>img');
                        }
                    }
                    if (!firstType) {
                        this.bar.classList.add("search-jumper-isTargetPage");
                        firstType = this.bar.querySelector('.search-jumper-targetPage:not(.notmatch)>span');
                        targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetPage:not(.notmatch)>a>img');
                    }
                    if (!firstType) {
                        firstType = this.bar.querySelector('.search-jumper-targetAll:not(.notmatch)>span');
                        targetSiteImgs = this.bar.querySelectorAll('.search-jumper-targetAll:not(.notmatch)>a>img');
                    }
                }
                if (this.bar.style.display == "none") {
                    this.bar.style.display = "";
                }
                self.setFuncKeyCall(false);
                if (firstType) {
                    if (!searchData.prefConfig.disableAutoOpen || _funcKeyCall) {
                        if (firstType.parentNode.classList.contains('search-jumper-open')) {
                            firstType.onmousedown();
                        }
                        firstType.onmousedown();
                        self.insertHistory(firstType.parentNode);
                    }
                }
                self.setFuncKeyCall(_funcKeyCall);
                if (_funcKeyCall) {
                    if (targetSiteImgs) {
                        [].forEach.call(targetSiteImgs, siteImg => {
                            if (siteImg.dataset.src) {
                                siteImg.src = siteImg.dataset.src;
                                siteImg.dataset.src = '';
                            }
                        });
                    }
                    self.con.classList.remove("search-jumper-scroll");
                    self.bar.style.cssText = "";
                    self.con.style.cssText = "";
                    let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                    let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                    let clientX = e.pageX - self.bar.clientWidth / 2 - document.documentElement.offsetLeft;
                    if (clientX < 0) clientX = 5;
                    else if (clientX + self.bar.clientWidth > viewWidth) clientX = viewWidth - self.bar.clientWidth - 20;
                    let clientY = e.pageY;
                    if (e.clientY > viewHeight / 5) clientY -= (self.bar.clientHeight + 20);
                    else clientY += 20;
                    if (clientX < viewWidth / 2) {
                        self.bar.style.left = clientX + "px";
                        self.bar.style.transformOrigin = '0 0';
                    } else {
                        self.bar.style.right = viewWidth - clientX - self.bar.clientWidth - 15 + "px";
                        self.bar.style.transformOrigin = '100% 0';
                    }
                    self.bar.style.top = clientY + "px";
                    self.removeBar();
                    self.bar.style.opacity = 0;
                    setTimeout(() => {
                        self.appendBar();
                        setTimeout(() => {
                            self.bar.style.opacity = 1;
                        }, 10);
                    }, 1);
                } else {
                    self.bar.style.display = "";
                    self.initPos();
                }
            }

            setFuncKeyCall(value) {
                this.funcKeyCall = value;
                if (value) {
                    this.con.classList.add("funcKeyCall");
                } else {
                    this.con.classList.remove("funcKeyCall");
                }
            }

            initPos(relX, relY, posX, posY) {
                if (this.preList) {
                    this.preList.style.visibility = "hidden";
                    this.listArrow.style.cssText = "";
                }
                relX = relX || searchData.prefConfig.position.x;
                relY = relY || searchData.prefConfig.position.y;
                posX = posX || searchData.prefConfig.offset.x;
                posY = posY || searchData.prefConfig.offset.y;
                let self = this;
                let setClass = className => {
                    self.bar.style.cssText = "";
                    self.con.style.cssText = "";
                    self.con.className = "search-jumper-searchBarCon " + className;
                    if (searchData.prefConfig.resizePage) {
                        if (typeof self.initBodyStyle == 'undefined') self.initBodyStyle = getBody(document).style.cssText;
                        else getBody(document).style.cssText = self.initBodyStyle;
                        self.con.classList.add("resizePage");
                        getBody(document).style.position = "absolute";
                        switch (className) {
                            case "search-jumper-left":
                                getBody(document).style.width = `calc(100% - ${self.scale * 42}px)`;
                                getBody(document).style.right = "0px";
                                break;
                            case "search-jumper-right":
                                getBody(document).style.width = `calc(100% - ${self.scale * 42}px)`;
                                getBody(document).style.left = "0px";
                                break;
                            case "search-jumper-bottom":
                                getBody(document).style.width = "100%";
                                getBody(document).style.height = `calc(100% - ${self.scale * 42}px)`;
                                getBody(document).style.top = "0px";
                                getBody(document).style.overflow = "auto";
                                break;
                            default:
                                getBody(document).style.width = "100%";
                                getBody(document).style.height = `calc(100% - ${self.scale * 42}px)`;
                                getBody(document).style.bottom = "0px";
                                getBody(document).style.overflow = "auto";
                                break;
                        }
                    } else if (searchData.prefConfig.autoHideAll) {
                        self.con.classList.add("hideAll");
                    }
                    let baseSize = self.scale * 40;
                    setTimeout(() => {
                        let leftRight = self.con.classList.contains("search-jumper-left") ||
                            self.con.classList.contains("search-jumper-right");
                        searchTypes.forEach(ele => {
                            let scrollSize = Math.max(ele.scrollWidth, ele.scrollHeight) + "px";
                            if (!ele.classList.contains("search-jumper-open")) {
                                if (leftRight) {
                                    ele.style.width = "";
                                    ele.style.height = baseSize + "px";
                                } else {
                                    ele.style.width = baseSize + "px";
                                    ele.style.height = "";
                                }
                            } else {
                                if (leftRight) {
                                    ele.style.width = "";
                                    ele.style.height = scrollSize;
                                } else {
                                    ele.style.width = scrollSize;
                                    ele.style.height = "";
                                }
                            }
                        });
                    }, 1);
                };
                let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                var maxSize = Math.max(self.bar.scrollWidth, self.bar.scrollHeight);

                if (posX > viewWidth - maxSize) {
                    posX = viewWidth - maxSize;
                }
                if (posX < 0) {
                    posX = 0;
                }

                if (posY > viewHeight - maxSize) {
                    posY = viewHeight - maxSize;
                }
                if (posY < 0) {
                    posY = 0;
                }
                if (relX == "center" && relY == "top") {
                    //上中
                    setClass("");
                    self.bar.style.position = "relative";
                } else if (relX == "left" && relY == "top") {
                    if (posX > posY) {
                        //上左
                        setClass("");
                        self.bar.style.position = "fixed";
                        self.bar.style.left = posX + "px";
                    } else {
                        //左上
                        setClass("search-jumper-left");
                        self.bar.style.position = "fixed";
                        self.bar.style.top = posY + "px";
                    }
                } else if (relX == "right" && relY == "top") {
                    if (posX > posY) {
                        //上右
                        setClass("");
                        self.bar.style.position = "fixed";
                        self.bar.style.right = posX + "px";
                    } else {
                        //右上
                        setClass("search-jumper-right");
                        self.bar.style.position = "fixed";
                        self.bar.style.top = posY + "px";
                    }
                } else if (relX == "center" && relY == "bottom") {
                    //下中
                    setClass("search-jumper-bottom");
                    self.bar.style.position = "relative";
                } else if (relX == "left" && relY == "bottom") {
                    if (posX > posY) {
                        //下左
                        setClass("search-jumper-bottom");
                        self.bar.style.position = "fixed";
                        self.bar.style.left = posX + "px";
                    } else {
                        //左下
                        setClass("search-jumper-left");
                        self.bar.style.position = "fixed";
                        self.bar.style.bottom = posY + "px";
                    }
                } else if (relX == "right" && relY == "bottom") {
                    if (posX >= posY) {
                        //下右
                        setClass("search-jumper-bottom");
                        self.bar.style.position = "fixed";
                        self.bar.style.right = posX + "px";
                    } else {
                        //右下
                        setClass("search-jumper-right");
                        self.bar.style.position = "fixed";
                        self.bar.style.bottom = posY + "px";
                    }
                } else if (relX == "left" && relY == "center") {
                    //左中
                    setClass("search-jumper-left");
                    self.bar.style.position = "absolute";
                    self.bar.style.marginTop = posY + "px";
                    self.con.style.display = "flex";
                    self.con.style.justifyContent = "center";
                } else if (relX == "right" && relY == "center") {
                    //右中
                    setClass("search-jumper-right");
                    self.bar.style.position = "absolute";
                    self.bar.style.marginTop = posY + "px";
                    self.con.style.display = "flex";
                    self.con.style.justifyContent = "center";
                    self.con.style.alignItems = "flex-end";
                }
                searchData.prefConfig.position.x = relX;
                searchData.prefConfig.position.y = relY;
                searchData.prefConfig.offset.x = posX;
                searchData.prefConfig.offset.y = posY;
                self.checkScroll(false, true);
                setTimeout(() => {
                    if (!searchData.prefConfig.disableAutoOpen) {
                        if (self.currentType && self.currentType.classList.contains('search-jumper-open')) {
                            self.currentType.style.width = self.currentType.scrollWidth + "px";
                            self.currentType.style.height = self.currentType.scrollHeight + "px";
                        }
                    }
                    self.checkScroll(false, true);
                }, 251);
            }
        }

        class Picker {
            static picker;
            constructor() {
                this.init();
            }

            static getInstance() {
                if (!Picker.picker) {
                    Picker.picker = new Picker();
                }
                return Picker.picker;
            }

            getSelector(callback) {
                this.close();
                this.toggle();
                this.callback = callback;
            }

            init() {
                let self = this;
                this.clickedIndex = 0;
                this.signList = [];//所有标记
                this.clickedEles = {};//点击的元素
                let cssText = `
                 body.searchJumper-picker,
                 body.searchJumper-picker *:hover,
                 body.searchJumper-picker a:hover {
                  cursor: crosshair !important;
                 }
                `;
                _GM_addStyle(cssText);
                this.mainSignDiv = this.createSignDiv();
                this.setImportant(this.mainSignDiv, "pointer-events", "none");
                this.moveHandler = e => {
                    if (e.target === document) return;
                    self.adjustSignDiv(self.mainSignDiv, self.getTarget(e.target));
                };
                this.leaveHandler = e => {
                    if (this.mainSignDiv.parentNode) this.mainSignDiv.parentNode.removeChild(this.mainSignDiv);
                };
                this.enterHandler = e => {
                    getBody(document).appendChild(this.mainSignDiv);
                };
                this.clickHandler = e => {
                    if (self.inPicker) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    let target = self.getTarget(e.target);
                    if (self.callback) {
                        if (target) {
                            let sel = self.geneSelector(target, true);
                            self.callback(sel);
                            self.close();
                        }
                        return;
                    }
                    let sign = self.createSignDiv();
                    self.clickedEles[self.clickedIndex] = target;
                    self.appendSign(sign, target, self.clickedIndex);
                    self.clickedIndex++;
                    searchBar.con.classList.add("selectedEle");
                };
            }

            appendSign(sign, target, index) {
                target.dataset.signNum = parseInt(target.dataset.signNum || 0) + 1;
                sign.dataset.target = index;
                getBody(document).appendChild(sign);
                this.adjustSignDiv(sign, target);
                this.signList.push([sign, target]);
            }

            removeSign(sign) {
                getBody(document).removeChild(sign);
                for (let i = 0; i < this.signList.length; i++) {
                    let signArr = this.signList[i];
                    if (signArr[0] === sign) {
                        this.signList.splice(i, 1);
                        break;
                    }
                }
                let targetIndex = sign.dataset.target;
                let target = this.clickedEles[targetIndex];
                if (!target) return;
                let signNum = parseInt(target.dataset.signNum || 0) - 1;
                target.dataset.signNum = signNum;
                if (signNum <= 0) {
                    delete this.clickedEles[targetIndex];
                }
            }

            getTarget(ele) {
                while (ele.parentNode && (ele.offsetWidth === 0 || ele.offsetHeight === 0)) {
                    ele = ele.parentNode;
                }
                return ele;
            }

            close() {
                this.callback = null;
                this.clearSigns();
                this.clickedEles = {};
                if (this.mainSignDiv.parentNode) this.mainSignDiv.parentNode.removeChild(this.mainSignDiv);
                getBody(document).classList.remove("searchJumper-picker");
                searchBar.con.classList.remove("selectedEle");
                searchBar.con.removeEventListener("mouseenter", this.leaveHandler, true);
                getBody(document).removeEventListener("mousemove", this.moveHandler, true);
                getBody(document).removeEventListener("mouseenter", this.enterHandler, true);
                getBody(document).removeEventListener("click", this.clickHandler, true);
                this.inPicker = false;
            }

            setImportant(ele, prop, value) {
                ele.style.setProperty(prop, value, "important");
            }

            createSignDiv() {
                let signDiv = document.createElement("div");
                this.setImportant(signDiv, "position", "absolute");
                this.setImportant(signDiv, "z-index", "2147483647");
                this.setImportant(signDiv, "background", "rgba(120, 170, 210, 0.6)");
                this.setImportant(signDiv, "transition", "all 0.15s ease-out");
                this.setImportant(signDiv, "box-shadow", "rgb(0 0 0) 0px 0px 3px 0px");
                this.setImportant(signDiv, "cursor", "pointer");
                signDiv.addEventListener("mouseenter", e => {
                    if (this.mainSignDiv.parentNode) this.mainSignDiv.parentNode.removeChild(this.mainSignDiv);
                }, true);
                signDiv.addEventListener("mouseleave", e => {
                    getBody(document).appendChild(this.mainSignDiv);
                }, true);
                signDiv.addEventListener("mousedown", e => {
                    e.stopPropagation();
                    e.preventDefault();
                    this.removeSign(signDiv);
                    getBody(document).appendChild(this.mainSignDiv);
                }, true);
                return signDiv;
            }

            adjustSignDiv(div, target) {
                let rect = target.getBoundingClientRect();
                this.setImportant(div, "width", rect.width + "px");
                this.setImportant(div, "height", rect.height + "px");
                this.setImportant(div, "left", rect.left + window.scrollX + "px");
                this.setImportant(div, "top", rect.top + window.scrollY + "px");
            }

            geneSelector(ele, id) {
                let selector = ele.tagName.toLowerCase();
                if (selector !== "html" && selector !== "body") {
                    if (id && ele.id) selector = '#' + ele.id;
                    else {
                        if (ele.className) {
                            let classLen = ele.classList.length;
                            selector += [].map.call(ele.classList, d => /^[\w]+$/.test(d) || (classLen < 3 && /^[\w\-_]+$/.test(d)) ? ('.' + d) : "").join('');
                        }
                        let parent = ele.parentElement;
                        if (parent) {
                            selector = this.geneSelector(parent, !!id) + ' > ' + selector;
                        }
                    }
                }
                return selector;
            }

            copy() {
                let self = this;
                let html = "", text = "";
                this.signList.forEach(sign => {
                    text += "\n" + sign[1].innerText;
                    html += sign[1].outerHTML;
                });
                text = text.trim();
                const htmlData = new Blob([html], {type: 'text/html'})
                const textData = new Blob([text], {type: 'text/plain'})
                try {
                    const item = new ClipboardItem({'text/html': htmlData, 'text/plain': textData});
                    navigator.clipboard.write([item]).then(
                        () => {
                            _GM_notification('Copied successfully!');
                        },
                        (e) => {
                            _GM_setClipboard(text);
                            console.log(e);
                        }
                    );
                } catch(e) {
                    _GM_setClipboard(text);
                }
            }

            getPickerStr() {
                if (!this.inPicker) return "";
                let resultStr = "";
                this.signList.forEach(sign => {
                    resultStr += "\n" + sign[1].innerText;
                });
                return resultStr.trim();
            }

            expand() {
                let self = this;
                this.clearSigns();
                Object.keys(this.clickedEles).forEach(index => {
                    let target = self.clickedEles[index];
                    let sel = self.geneSelector(target);
                    target.dataset.signNum = 0;
                    [].forEach.call(document.querySelectorAll(sel), ele => {
                        let sign = self.createSignDiv();
                        getBody(document).appendChild(sign);
                        self.appendSign(sign, ele, index);
                    });
                });
            }

            collapse() {
                let self = this;
                this.clearSigns();
                Object.keys(this.clickedEles).forEach(index => {
                    let target = self.clickedEles[index];
                    target.dataset.signNum = 0;
                    let sign = self.createSignDiv();
                    getBody(document).appendChild(sign);
                    self.appendSign(sign, target, index);
                });
            }

            clearSigns() {
                this.signList.forEach(sign => {
                    sign = sign[0];
                    if (sign.parentNode) sign.parentNode.removeChild(sign);
                });
                this.signList = [];
            }

            toggle() {
                if (this.inPicker) {
                    this.close();
                    return;
                }
                this.inPicker = true;
                getBody(document).appendChild(this.mainSignDiv);
                getBody(document).classList.add("searchJumper-picker");

                searchBar.con.addEventListener("mouseenter", this.leaveHandler, true);
                getBody(document).addEventListener("mousemove", this.moveHandler, true);
                getBody(document).addEventListener("mouseenter", this.enterHandler, true);
                getBody(document).addEventListener("click", this.clickHandler, true);
            }
        }

        function emuPress(v) {
            if (!targetElement) return;
            let eventParam = v || { key: "Enter", keyCode: 13, bubbles: true };
            let event = new KeyboardEvent('keydown', eventParam);
            targetElement.dispatchEvent(event);
            event = new KeyboardEvent('keyup', eventParam);
            targetElement.dispatchEvent(event);
            event = new KeyboardEvent('keypress', eventParam);
            targetElement.dispatchEvent(event);
            debug(targetElement, `press ${v}`);
        }

        async function emuInput(sel, v) {
            await new Promise((resolve) => {
                let checkInv = setInterval(() => {
                    let input = getElement(sel);
                    if (input) {
                        targetElement = input;
                        let event = new Event('focus', { bubbles: true });
                        input.dispatchEvent(event);
                        let lastValue = input.value;
                        if (input.tagName.toUpperCase() == "INPUT") {
                            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                            nativeInputValueSetter.call(input, v);
                        } else if (input.tagName.toUpperCase() == "TEXTAREA") {
                            var nativeTextareaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
                            nativeTextareaValueSetter.call(input, v);
                        }
                        event = new Event('input', { bubbles: true });
                        let tracker = input._valueTracker;
                        if (tracker) {
                            tracker.setValue(lastValue);
                        }
                        input.dispatchEvent(event);
                        event = new Event('change', { bubbles: true });
                        input.dispatchEvent(event);

                        clearInterval(checkInv);
                        resolve();
                        debug(input, `input ${sel}, ${v}`);
                    }
                }, 100);
            });
        }

        async function emuClick(sel) {
            await new Promise((resolve) => {
                let checkInv = setInterval(() => {
                    let btn = getElement(sel);
                    if (btn) {
                        targetElement = btn;
                        clearInterval(checkInv);
                        if(!PointerEvent) return btn.click();
                        let eventParam = {
                            isTrusted: true,
                            altKey: false,
                            azimuthAngle: 0,
                            bubbles: true,
                            button: 0,
                            buttons: 0,
                            clientX: 1,
                            clientY: 1,
                            cancelBubble: false,
                            cancelable: true,
                            composed: true,
                            ctrlKey: false,
                            defaultPrevented: false,
                            detail: 1,
                            eventPhase: 2,
                            fromElement: null,
                            height: 1,
                            isPrimary: false,
                            metaKey: false,
                            pointerId: 1,
                            pointerType: "mouse",
                            pressure: 0,
                            relatedTarget: null,
                            returnValue: true,
                            shiftKey: false,
                            toElement: null,
                            twist: 0,
                            which: 1
                        };
                        btn.focus();
                        var mouseEvent = new PointerEvent("mouseover",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        mouseEvent = new PointerEvent("pointerover",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        mouseEvent = new PointerEvent("mousedown",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        mouseEvent = new PointerEvent("pointerdown",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        mouseEvent = new PointerEvent("mouseup",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        mouseEvent = new PointerEvent("pointerup",eventParam);
                        btn.dispatchEvent(mouseEvent);
                        let dispatchTouchEvent = (ele, type) => {
                            let touchEvent;
                            try {
                                touchEvent = document.createEvent('TouchEvent')
                                touchEvent.initTouchEvent(type, true, true)
                            } catch (err) {
                                try {
                                    touchEvent = document.createEvent('UIEvent')
                                    touchEvent.initUIEvent(type, true, true)
                                } catch (err) {
                                    touchEvent = document.createEvent('Event')
                                    touchEvent.initEvent(type, true, true)
                                }
                            }
                            try {
                                touchEvent.targetTouches = [{
                                    pageX: 1,
                                    pageY: 1,
                                    clientX: 1,
                                    clientY: 1,
                                    target: btn
                                }];
                                touchEvent.touches = [{
                                    pageX: 1,
                                    pageY: 1,
                                    clientX: 1,
                                    clientY: 1,
                                    target: btn
                                }];
                                touchEvent.changedTouches = [{
                                    pageX: 1,
                                    pageY: 1,
                                    clientX: 1,
                                    clientY: 1,
                                    target: btn
                                }];
                            } catch (err) {}
                            ele.dispatchEvent(touchEvent);
                        }
                        dispatchTouchEvent(btn, "touchstart");
                        dispatchTouchEvent(btn, "touchend");
                        btn.click();
                        resolve();
                        debug(btn, `click ${sel}`);
                    }
                }, 100);
            });
        }

        function submitByForm(charset, url, target) {
            url = url.replace(/#(j(umpFrom|f)?|from){(.*?)}/, "");
            currentFormParams = {charset: charset, url: url, target: target};
            if (url.indexOf("#submitBySearchJumper") !== -1) {
                currentFormParams = {charset: charset, url: url.replace("#submitBySearchJumper", ""), target: target};
                jumpBySearchJumper();
                return;
            }
            const formId ="searchJumper_form";
            var form = document.getElementById(formId);
            if (!form) {
                form = document.createElement("form");
                form.id = formId;
                form.style.display = "none";
                document.documentElement.appendChild(form);
            }
            var params;
            let postBody = url.match(/[:%]p{(.*?)}/);
            let targetUrl = url;
            if (postBody) {
                targetUrl = url.replace(postBody[0], '');
                postBody = postBody[1];
                form.method = 'post';
                params = new URLSearchParams(postBody);
            } else {
                form.method = 'get';
                params = new URLSearchParams(new URL(targetUrl).search);
            }
            if (charset) {
                form.acceptCharset = charset;
            }
            form.innerHTML = createHTML();
            form.target = target;
            form.action = targetUrl;
            params.forEach((v, k) => {
                let input = document.createElement("input");
                input.name = k;
                input.value = v;
                form.appendChild(input);
            });
            return form.submit();
        }

        async function image2Base64(img) {
            if (!img || !img.src) return null;
            let urlSplit=img.src.split("/");
            if (urlSplit[2] == document.domain) {
                let imgStyle = getComputedStyle(img);
                var canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth || img.width || parseInt(imgStyle.width);
                canvas.height = img.naturalHeight || img.height || parseInt(imgStyle.height);
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                return (canvas.toDataURL("image/png"));
            } else {
                return new Promise((resolve) => {
                    _GM_xmlhttpRequest({
                        method: 'GET',
                        url: img.src,
                        responseType:'arraybuffer',
                        headers: {
                            origin: urlSplit[0] + "//" + urlSplit[2],
                            referer: img.src,
                            accept: "*/*"
                        },
                        onload: function(d) {
                            var binary = '';
                            var bytes = new Uint8Array(d.response);
                            for (var len = bytes.byteLength, i = 0; i < len; i++) {
                                binary += String.fromCharCode(bytes[i]);
                            }
                            resolve(`data:image/jpeg;base64,${window.btoa(binary)}`);
                        },
                        onerror: function(){
                            resolve(null);
                        },
                        ontimeout: function(){
                            resolve(null);
                        }
                    });
                });
            }
        }

        function icon2Base64(icon) {
            let iconStyle = getComputedStyle(icon);
            let content = getComputedStyle(icon,':before').content.replace(/"/g, '');
            if (!content) return false;
            var canvas = document.createElement("canvas");
            canvas.width = icon.clientWidth || parseInt(iconStyle.lineHeight);
            canvas.height = icon.clientHeight || parseInt(iconStyle.lineHeight);
            var ctx = canvas.getContext("2d");
            ctx.font = iconStyle.font;
            ctx.strokeStyle = iconStyle.color || "black";
            ctx.fillStyle = iconStyle.color || "black";
            ctx.textBaseline = "top";
            let metrics = ctx.measureText(content);
            ctx.fillText(content, (canvas.width - metrics.width) / 2, (canvas.height - parseInt(iconStyle.fontSize)) / 2);
            return canvas.toDataURL("image/png");
        }

        async function cacheImg(img) {
            if (cacheIcon[img.src]) return;
            let cache = await image2Base64(img);
            if (cache == 'data:,' || !cache) cache = 'fail';
            cacheIcon[img.src] = cache;
            storage.setItem("cacheIcon", cacheIcon);
        }

        function cacheFontIcon(icon) {
            let iconName = icon.className.trim().replace('fa fa-', '').replace(/ /g, '_');
            if (cacheIcon[iconName]) return;
            let cache = icon2Base64(icon);
            if (cache == 'data:,' || !cache) return;
            cacheIcon[iconName] = cache;
            storage.setItem("cacheIcon", cacheIcon);
        }

        async function cacheAction(target) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 1);
            });
            if (!searchData.prefConfig.cacheSwitch) return;
            if (target.tagName.toUpperCase() == 'IMG') {
                if (!target.src && target.dataset.src) target.src = target.dataset.src;
                let cache;
                if (target.complete) {
                    if (target.naturalHeight && target.naturalWidth) {
                        await cacheImg(target);
                    } else {
                        cacheIcon[target.src] = 'fail';
                        storage.setItem("cacheIcon", cacheIcon);
                    }
                } else {
                    let loaded = await new Promise((resolve) => {
                        target.addEventListener('load', e => {
                            resolve(true);
                        }, true);
                        target.addEventListener('error', e => {
                            resolve(false);
                        }, true);
                    });
                    if (loaded) await cacheImg(target);
                    else {
                        cacheIcon[target.src] = 'fail';
                        storage.setItem("cacheIcon", cacheIcon);
                    }
                }
            } else {
                cacheFontIcon(target);
            }
        }

        async function cacheImgManager(noti) {
            if (searchData.prefConfig.cacheSwitch) {
                let needCache = cachePool.length > 0;
                while (cachePool.length > 0) {
                    await cacheAction(cachePool.shift());
                }
                if (needCache) {
                    let str = 'All img icons cached!';
                    debug(str);
                    if (noti) _GM_notification(str);
                }
            }
        }

        async function cacheFontManager(noti) {
            if (searchData.prefConfig.cacheSwitch) {
                let needCache = cacheFontPool.length > 0;
                while (cacheFontPool.length > 0) {
                    await cacheAction(cacheFontPool.shift());
                }
                if (needCache) {
                    let str = 'All font icons cached!';
                    debug(str);
                    if (noti) _GM_notification(str);
                }
            }
        }

        function getSelectStr() {
            let selStr = Picker.getInstance().getPickerStr() || window.getSelection().toString();
            if (selStr) {
                selStr = selStr.trim();
                if (selStr) {
                    return selStr;
                }
            }
            return "";
        }

        function getKeywords() {
            let selStr = getSelectStr();
            if (selStr) {
                return selStr;
            }
            if (!currentSite) return localKeywords || '';
            //if (localKeywords === '' && cacheKeywords) return cacheKeywords;

            let keywordsMatch, keywords = '', isUtf8 = !currentSite.charset || currentSite.charset == 'UTF-8';
            if (currentSite.keywords) {
                if (isUtf8) {
                    if (/^[\w\|]+$/.test(currentSite.keywords)) {
                        let keywordsList = currentSite.keywords.split("|");
                        let urlParams = new URLSearchParams(location.search);
                        for (let i = 0; i < keywordsList.length; i++) {
                            keywords = urlParams.get(keywordsList[i]);
                            if (keywords) break;
                        }
                    } else if (/\(.+\)/.test(currentSite.keywords)) {
                        try {
                            keywordsMatch = location.href.match(new RegExp(currentSite.keywords));
                            if (keywordsMatch) {
                                keywords = keywordsMatch[1];
                            }
                            if (keywords) {
                                keywords = decodeURIComponent(keywords);
                            }
                        } catch (e) {
                            keywords = '';
                        }
                    }
                }
                if (!keywords && getBody(document)) {
                    try {
                        let targetEle = getElement(currentSite.keywords);
                        if (targetEle) {
                            keywords = targetEle.value || targetEle.innerText;
                        }
                    } catch (e) {
                        keywords = '';
                    }
                }
            } else if (isUtf8 && /%s[lur]?\b/.test(currentSite.url) && !/[#:%]p{/.test(currentSite.url)) {
                if (location.href.indexOf("?") != -1) {
                    keywordsMatch = currentSite.url.match(/[\?&]([^&]*?)=%s[lur]?\b.*/);
                    if (keywordsMatch) {
                        keywords = new URLSearchParams(location.search).get(keywordsMatch[1]);
                    }
                }
                if (!keywords) {
                    keywordsMatch = currentSite.url.match(/https?:\/\/[^\/]*\/(.*)%s[lur]?\b/);
                    if (keywordsMatch) {
                        keywordsMatch = location.href.match(new RegExp((keywordsMatch[1] || (location.host.replace(/\./g, "\\.") + "/")) + "(.*?)(\/|$)"));
                        if (keywordsMatch) {
                            keywords = keywordsMatch[1];
                        }
                        if (keywords) {
                            try {
                                keywords = decodeURIComponent(keywords);
                            } catch (e) {
                                keywords = '';
                            }
                        }
                    }
                }
            }
            if (keywords == '' && getBody(document)) {
                let firstInput = getBody(document).querySelector('input[type=text]:not([readonly]),input:not([type])');
                if (firstInput) keywords = firstInput.value;
            }
            if (keywords) localKeywords = keywords;
            return localKeywords;//!localKeywords ? cacheKeywords : localKeywords;
        }

        function eventSupported(eventName, elem) {
            elem = elem || document.createElement("div");
            eventName = "on" + eventName;
            var isSupported = (eventName in elem);
            if (!isSupported) {
                if (!elem.setAttribute) {
                    elem = document.createElement("div");
                };
                var setAttr;
                if (!elem.hasAttribute(eventName)) {
                    setAttr = true;
                    elem.setAttribute(eventName, "return;");
                };
                isSupported = typeof elem[eventName] == "function";
                if (setAttr) elem.removeAttribute(eventName);
            }
            return isSupported;
        }

        function getSupportWheelEventName() {
            var ret = 'DOMMouseScroll';
            if (eventSupported('wheel')) {
                ret = 'wheel';
            } else if (eventSupported('mousewheel')) {
                ret = 'mousewheel';
            }
            return ret;
        }

        let draging = false;
        function initListener() {
            _GM_registerMenuCommand(i18n('settings'), () => {
                _GM_openInTab(configPage, {active: true});
            });
            _GM_registerMenuCommand(i18n('searchInPage'), () => {
                searchBar.showInPage();
                searchBar.showInPageSearch();
            });
            _GM_registerMenuCommand(i18n('search'), () => {
                searchBar.searchAuto(0, {});
            });
            _GM_registerMenuCommand(i18n('addSearchEngine'), () => {
                let openSearch = document.head.querySelector('[rel="search"]');
                if (openSearch) {
                    showSiteAddFromOpenSearch(openSearch.href, (type, e) => {
                        if (type != 'load') {
                            if (e) debug(e.statusText || e.error || e.response || e);
                            let firstInput = getBody(document).querySelector('input[type=text]:not([readonly]),input:not([type])');
                            quickAddByInput(firstInput);
                        }
                    });
                } else {
                    let firstInput = getBody(document).querySelector('input[type=text]:not([readonly]),input:not([type])');
                    quickAddByInput(firstInput);
                }
            });
            let logoSvg = logoBtn.children[0];
            let grabState = 0;//0 未按下 1 已按下 2 已拖动
            let hideTimer;
            let touchStart = false;

            let clientX = e => {
                if (e.type.indexOf('mouse') === 0) {
                    return e.clientX;
                } else {
                    return e.changedTouches[0].clientX;
                }
            };

            let clientY = e => {
                if (e.type.indexOf('mouse') === 0) {
                    return e.clientY;
                } else {
                    return e.changedTouches[0].clientY;
                }
            };

            let mouseUpHandler = e => {
                clearTimeout(hideTimer);
                searchBar.bar.classList.remove("grabbing");
                document.removeEventListener('mouseup', mouseUpHandler, false);
                document.removeEventListener('mousemove', mouseMoveHandler, false);
                document.removeEventListener('touchend', mouseUpHandler, false);
                document.removeEventListener('touchmove', mouseMoveHandler, false);
                searchBar.bar.style.marginLeft = "";
                searchBar.bar.style.marginTop = "";
                searchBar.bar.style.transform = "";
                if (grabState === 1) {
                    grabState = 0;
                    searchBar.showAllSites();
                    //_GM_openInTab(configPage, {active: true});
                    return;
                }
                grabState = 0;
                let viewWidth = window.innerWidth || document.documentElement.clientWidth;
                let viewHeight = window.innerHeight || document.documentElement.clientHeight;
                let baseWidth = viewWidth / 3;
                let baseHeight = viewHeight / 3;
                let relX, relY, posX, posY;
                let curX = clientX(e);
                let curY = clientY(e);
                if (curX < baseWidth) {
                    relX = "left";
                    posX = parseInt(searchBar.bar.style.left) > 0 ? parseInt(searchBar.bar.style.left) : "0";
                } else if (curX < baseWidth * 2) {
                    relX = "center";
                    posX = parseInt(searchBar.bar.style.left) - viewWidth / 2;
                } else {
                    relX = "right";
                    posX = viewWidth - parseInt(searchBar.bar.style.left) - searchBar.bar.scrollWidth;
                }
                if (curY < viewHeight / 2) {
                    relY = "top";
                    posY = parseInt(searchBar.bar.style.top);
                } else {
                    relY = "bottom";
                    posY = viewHeight - parseInt(searchBar.bar.style.top) - searchBar.bar.scrollHeight;
                    if (posY < 0) {
                        posY = 0;
                    }
                }
                logoSvg.style.cursor = "";
                let firstType = searchBar.bar.querySelector('.search-jumper-type.search-jumper-open>span');
                if (firstType) firstType.onmousedown();
                searchBar.initPos(relX, relY, posX, posY);
                storage.setItem("searchData", searchData);
            };

            let startPos = {x: 0, y: 0};
            let mouseMoveHandler = e => {
                let curX = clientX(e);
                let curY = clientY(e);
                if (Math.abs(startPos.x - curX) + Math.abs(startPos.y - curY) < 50) return;
                if (grabState === 1) {
                    clearTimeout(hideTimer);
                    logoSvg.style.cursor = "grabbing";
                    searchBar.bar.style.position = "fixed";
                    searchBar.bar.style.marginLeft = "0";
                    searchBar.bar.style.marginTop = "0";
                    searchBar.bar.style.right = "";
                    searchBar.bar.style.bottom = "";
                    searchBar.bar.style.transform = "unset";
                    searchBar.con.classList.remove("search-jumper-scroll");
                    searchBar.bar.className = "search-jumper-searchBar grabbing";
                }
                grabState = 2;
                searchBar.bar.style.left = curX - searchBar.bar.scrollWidth + 20 + "px";
                searchBar.bar.style.top = curY - searchBar.bar.scrollHeight + 20 + "px";
            };

            logoBtn.oncontextmenu = function (event) {
                searchBar.bar.style.display = 'none';
                event.preventDefault();
            };

            logoBtn.addEventListener('mousedown', e => {
                if (touchStart) {
                    touchStart = false;
                    return;
                }
                if (e.button === 2) {
                    if (searchData.prefConfig.resizePage) {
                        if (typeof searchBar.initBodyStyle != "undefined") getBody(document).style.cssText = searchBar.initBodyStyle;
                    }
                    document.removeEventListener('mouseup', mouseUpHandler, false);
                    document.removeEventListener('mousemove', mouseMoveHandler, false);
                    document.removeEventListener('touchend', mouseUpHandler, false);
                    document.removeEventListener('touchmove', mouseMoveHandler, false);
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                if (searchBar.inInput || e.button === 1 || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                    _GM_openInTab(configPage, {active: true});
                    return;
                }
                grabState = 1;
                startPos = {x: clientX(e), y: clientY(e)};
                document.addEventListener('mouseup', mouseUpHandler, false);
                setTimeout(() => {
                    if (grabState === 1) {
                        document.addEventListener('mousemove', mouseMoveHandler, false);
                    }
                }, 100);
                hideTimer = setTimeout(() => {
                    searchBar.bar.style.display = 'none';
                    document.removeEventListener('mouseup', mouseUpHandler, false);
                    document.removeEventListener('mousemove', mouseMoveHandler, false);
                }, 2000);
            }, false);

            logoBtn.addEventListener('touchstart', e => {
                e.preventDefault();
                e.stopPropagation();
                touchStart = true;
                grabState = 1;
                startPos = {x: clientX(e), y: clientY(e)};
                document.addEventListener('touchend', mouseUpHandler, false);
                setTimeout(() => {
                    if (grabState === 1) {
                        document.addEventListener('touchmove', mouseMoveHandler, false);
                    }
                }, 100);
                hideTimer = setTimeout(() => {
                    searchBar.bar.style.display = 'none';
                    document.removeEventListener('touchend', mouseUpHandler, false);
                    document.removeEventListener('touchmove', mouseMoveHandler, false);
                }, 2000);
            }, { passive: false, capture: false });

            searchBar.bar.addEventListener(getSupportWheelEventName(), e => {
                if (e.target.parentNode && (e.target.parentNode.className == "sitelistCon" ||
                    (e.target.parentNode.parentNode && e.target.parentNode.parentNode.className == "sitelistCon"))) return;
                let targetClassList = searchBar.con.classList;
                if (!targetClassList.contains('search-jumper-scroll')) return;
                if (targetClassList.contains('search-jumper-left') ||
                    targetClassList.contains('search-jumper-right')) return;
                var deltaX, deltaY;
                if(e.type !== 'wheel'){
                    var x = 0, y = 0;
                    if (typeof e.axis == 'number') {
                        if (e.axis == 2) {
                            y = e.detail;
                        } else {
                            x = e.detail;
                        }
                    } else {
                        if (typeof e.wheelDeltaY == 'undefined' || e.wheelDeltaY != 0) {
                            y = -e.wheelDelta / 40;
                        } else {
                            x = -e.wheelDelta / 40;
                        };
                    };
                    deltaY = y;
                    deltaX = x;

                } else {
                    deltaX = e.deltaX;
                    deltaY = e.deltaY;
                }
                e.preventDefault();
                e.stopPropagation();

                searchBar.con.scrollLeft += deltaY;
            }, { passive: false, capture: false });

            document.addEventListener('searchJumper', e => {
                switch (e.detail.action) {
                    case "search":
                        if (e.detail.name) {
                            searchBar.searchBySiteName(e.detail.name, e.detail.key || {});
                        } else {
                            searchBar.searchAuto(e.detail.index, e.detail.key || {});
                        }
                        break;
                    case "show":
                        searchBar.showInPage();
                        break;
                }
            });
            if (searchData.prefConfig.switchSitesPreKey ||
               searchData.prefConfig.switchSitesNextKey ||
               searchData.prefConfig.shortcutKey ||
               searchData.prefConfig.showAllShortcutKey) {
                let inputing = -1, key = false;
                let checkShortcutEnable = (e, _alt, _ctrl, _shift, _meta, _key) => {
                    if ((_alt && !e.altKey) ||
                        (_ctrl && !e.ctrlKey) ||
                        (_shift && !e.shiftKey) ||
                        (_meta && !e.metaKey)) {
                        return false;
                    }
                    if (!key) key = (e.key || String.fromCharCode(e.keyCode)).toLowerCase();
                    if (_key != key && _key != e.code) {
                        return false;
                    }
                    if (!searchData.prefConfig.enableInInput && inputing == -1) {
                        inputing = 1;
                        if (document.activeElement &&
                            (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                             document.activeElement.tagName.toUpperCase() == 'TEXTAREA' ||
                             document.activeElement.contentEditable == 'true')) {
                            return false;
                        } else {
                            let contentEditable = false;
                            let parent = document.activeElement;
                            while (parent && parent.tagName) {
                                contentEditable = parent.contentEditable == 'true';
                                if (contentEditable || parent.tagName.toUpperCase() == 'BODY') {
                                    break;
                                }
                                parent = parent.parentNode;
                            }
                            if (contentEditable) {
                                return false;
                            }
                        }
                    }
                    inputing = 0;
                    e.preventDefault();
                    e.stopPropagation();
                    return true;
                };
                document.addEventListener('keydown', e => {
                    if (e.target.id === "searchJumperInput") return;
                    inputing = -1;
                    key = false;
                    if (searchData.prefConfig.shortcutKey) {
                        if (checkShortcutEnable(e, searchData.prefConfig.callBarAlt, searchData.prefConfig.callBarCtrl, searchData.prefConfig.callBarShift, searchData.prefConfig.callBarMeta, searchData.prefConfig.shortcutKey)) {
                            searchBar.setFuncKeyCall(false);
                            searchBar.showInPage();
                            if (!searchData.prefConfig.disableInputOnWords || searchBar.inInput || !getSelectStr()) {
                                searchBar.showSearchInput();
                            }
                        }
                    }
                    if (inputing == 1) return;
                    if (searchData.prefConfig.showAllShortcutKey) {
                        if (checkShortcutEnable(e, searchData.prefConfig.showAllAlt, searchData.prefConfig.showAllCtrl, searchData.prefConfig.showAllShift, searchData.prefConfig.showAllMeta, searchData.prefConfig.showAllShortcutKey)) {
                            searchBar.appendBar();
                            searchBar.showAllSites();
                        }
                    }
                    if (searchData.prefConfig.switchSitesPreKey) {
                        if (checkShortcutEnable(e, searchData.prefConfig.switchSitesAlt, searchData.prefConfig.switchSitesCtrl, searchData.prefConfig.switchSitesShift, searchData.prefConfig.switchSitesMeta, searchData.prefConfig.switchSitesPreKey)) {
                            searchBar.switchSite();
                            return;
                        }
                    }
                    if (searchData.prefConfig.switchSitesNextKey) {
                        if (checkShortcutEnable(e, searchData.prefConfig.switchSitesAlt, searchData.prefConfig.switchSitesCtrl, searchData.prefConfig.switchSitesShift, searchData.prefConfig.switchSitesMeta, searchData.prefConfig.switchSitesNextKey)) {
                            searchBar.switchSite(true);
                        }
                    }
                });
            }
            if (searchData.prefConfig.enableInPage) {
                let shown = false;
                let showToolbarTimer;

                let clientRect;
                if (searchData.prefConfig.leftMouse) {
                    document.addEventListener('selectionchange', (e) => {
                        if (window.getSelection().toString()) {
                            const selection = window.getSelection();
                            const range = selection.getRangeAt(0);
                            clientRect = range.getBoundingClientRect();
                        } else {
                            clientRect = null;
                        }
                    });
                }
                let waitForMouse = false;
                let clickHandler = e => {
                    if (shown) {
                        e.preventDefault();
                    }
                    shown = false;
                    document.removeEventListener('click', clickHandler, true);
                };
                let mouseDownHandler = e => {
                    if ((waitForMouse && e.type === 'mousedown' && e.button === 0) ||
                        e.target.tagName.toUpperCase() === 'CANVAS' ||
                        e.target.tagName.toUpperCase() === 'HTML' ||
                        (e.target.classList && e.target.classList.contains('search-jumper-btn')) ||
                        searchBar.bar.contains(e.target)) {
                        return;
                    }
                    if (searchBar.bar.classList.contains("grabbing")) return;
                    let targetInput = false;
                    if (e.target.tagName.toUpperCase() == 'INPUT' ||
                        e.target.tagName.toUpperCase() == 'TEXTAREA' ||
                        e.target.contentEditable == 'true') {
                        targetInput = true;
                    } else {
                        let contentEditable = false;
                        let parent = e.target;
                        while (parent && parent.tagName) {
                            contentEditable = parent.contentEditable == 'true';
                            if (contentEditable || parent.tagName.toUpperCase() == 'BODY') {
                                break;
                            }
                            parent = parent.parentNode;
                        }
                        if (contentEditable) {
                            targetInput = true;
                        }
                    }
                    let inputSign = false;
                    if (!searchData.prefConfig.enableInInput) {
                        inputSign = targetInput;
                    }
                    if (inputSign && e.type === 'dblclick') return;
                    if (searchData.prefConfig.minPopup == 2) {
                        if (targetInput) {
                            searchBar.con.classList.add("targetInput");
                        } else searchBar.con.classList.remove("targetInput");
                    }
                    waitForMouse = true;
                    setTimeout(() => {
                        waitForMouse = false;
                    }, 500);
                    shown = false;
                    targetElement = e.target;
                    let matchKey = false;
                    if ((searchData.prefConfig.altKey ||
                         searchData.prefConfig.ctrlKey ||
                         searchData.prefConfig.shiftKey ||
                         searchData.prefConfig.metaKey) &&
                        !((searchData.prefConfig.altKey && !e.altKey) ||
                          (searchData.prefConfig.ctrlKey && !e.ctrlKey) ||
                          (searchData.prefConfig.shiftKey && !e.shiftKey) ||
                          (searchData.prefConfig.metaKey && !e.metaKey))) {
                        matchKey = true;
                    }
                    if (!searchData.prefConfig.selectToShow &&
                        (e.button === 0 || e.button === 1) && !searchData.prefConfig.leftMouse) {
                        return;
                    }
                    let startX = e.clientX;
                    let startY = e.clientY;
                    let moved = false;
                    let inpageMouseMoveHandler = e => {
                        if (Math.abs(startX - e.clientX) + Math.abs(startY - e.clientY) > 2) {
                            clearTimeout(showToolbarTimer);
                            document.removeEventListener('mousemove', inpageMouseMoveHandler, true);
                            e.target.removeEventListener('scroll', scrollHandler);
                            moved = true;
                        }
                    };
                    let scrollHandler = e => {
                        clearTimeout(showToolbarTimer);
                        document.removeEventListener('mousemove', inpageMouseMoveHandler, true);
                        e.target.removeEventListener('scroll', scrollHandler);
                    };
                    let inpageMouseUpHandler = e => {
                        draging = false;
                        if (searchBar.bar.contains(e.target) || shown) {
                            e.preventDefault();
                        } else if (!inputSign) {
                            setTimeout(() => {
                                if (shown) return;
                                if ((matchKey && e.button !== 0) || (moved && e.button === 0 && searchData.prefConfig.selectToShow && getSelectStr())) {
                                    searchBar.showInPage(true, e);
                                } else {
                                    waitForMouse = false;
                                    searchBar.waitForHide(1);
                                }
                            }, 0);
                        }
                        clearTimeout(showToolbarTimer);
                        document.removeEventListener('mouseup', inpageMouseUpHandler, true);
                        document.removeEventListener('mousemove', inpageMouseMoveHandler, true);
                        e.target.removeEventListener('scroll', scrollHandler);
                    };
                    if (e.type === 'dblclick') {
                        if (getSelectStr() !== '') {
                            shown = true;
                            draging = false;
                            document.removeEventListener('mouseup', inpageMouseUpHandler, true);
                            document.removeEventListener('mousemove', inpageMouseMoveHandler, true);
                            e.target.removeEventListener('scroll', scrollHandler);
                            clearTimeout(showToolbarTimer);
                            searchBar.showInPage(true, e);
                        }
                        return;
                    }
                    if ((e.button === 0 && clientRect && !inputSign &&
                         e.clientX > clientRect.left && e.clientX < clientRect.left + clientRect.width &&
                         e.clientY > clientRect.top && e.clientY < clientRect.top + clientRect.height) ||
                        (matchKey && e.button !== 0)) {
                        setTimeout(() => {
                            if (!draging) {
                                searchBar.showInPage(true, e);
                            }
                            document.removeEventListener('mousemove', inpageMouseMoveHandler, true);
                            e.target.removeEventListener('scroll', scrollHandler);
                        }, 200);
                        shown = true;
                        clearTimeout(showToolbarTimer);
                        document.addEventListener('mouseup', inpageMouseUpHandler, true);
                        document.addEventListener('click', clickHandler, true);
                        return false;
                    }
                    if (showToolbarTimer) clearTimeout(showToolbarTimer);
                    showToolbarTimer = setTimeout(() => {
                        if (draging) return;
                        if (targetElement != e.target) return;
                        if (e.button === 2 && !searchData.prefConfig.rightMouse) return;
                        if ((e.button === 0 || e.button === 1) && !searchData.prefConfig.leftMouse) return;
                        if (e.button === 0 && getSelectStr() !== '') return;
                        searchBar.setFuncKeyCall(false);
                        searchBar.showInPage();
                        shown = true;
                    }, parseInt(searchData.prefConfig.longPressTime));
                    document.addEventListener('mousemove', inpageMouseMoveHandler, true);
                    document.addEventListener('mouseup', inpageMouseUpHandler, true);
                    e.target.addEventListener('scroll', scrollHandler);
                };
                document.addEventListener('mousedown', mouseDownHandler);
                document.addEventListener('dblclick', mouseDownHandler);
                document.addEventListener('contextmenu', e => {
                    if (shown) e.preventDefault();
                    shown = false;
                });
                if (searchData.prefConfig.dragToSearch && !isInConfigPage()) {
                    getBody(document).addEventListener('dragstart', e => {
                        if ((searchData.prefConfig.dragAlt && !e.altKey) ||
                            (searchData.prefConfig.dragCtrl && !e.ctrlKey) ||
                            (searchData.prefConfig.dragShift && !e.shiftKey) ||
                            (searchData.prefConfig.dragMeta && !e.metaKey)) {
                            return;
                        }
                        targetElement = e.target;
                        if (targetElement.getAttribute && targetElement.getAttribute("draggable") == "true") return;
                        showDragSearch(e.clientX, e.clientY);
                        searchBar.waitForHide(1);
                        document.removeEventListener('click', clickHandler, true);
                        draging = true;
                    });
                }
            }
            if (searchData.prefConfig.quickAddRule) {
                document.addEventListener('click', e => {
                    if (!(((e.ctrlKey || e.metaKey) && e.shiftKey) || ((e.ctrlKey || e.metaKey) && e.altKey) || (e.altKey && e.shiftKey))) return;
                    if (e.target.tagName.toUpperCase() !== 'INPUT' && e.target.tagName.toUpperCase() !== 'TEXTAREA') return;
                    quickAddByInput(e.target);
                }, true);
            }
            let changeHandler = e => {
                setTimeout(()=>{
                    searchBar.refresh();
                },0);
            }
            document.addEventListener("fullscreenchange", e => {
                if (document.fullscreenElement) {
                    searchBar.bar.style.display = 'none';
                }
            })
            let _wr = function(type) {
                var orig = history[type];
                return function() {
                    var rv = orig.apply(this, arguments);
                    var e = new Event('sj_' + type);
                    e.arguments = arguments;
                    window.dispatchEvent(e);
                    return rv;
                };
            };
            history.pushState = _wr('pushState');
            history.replaceState = _wr('replaceState');
            window.addEventListener('sj_pushState', changeHandler);
            window.addEventListener('sj_replaceState', changeHandler);
            window.addEventListener('yt-navigate-finish', changeHandler);
            window.addEventListener("securitypolicyviolation", (e) => {
                if (e.violatedDirective === 'form-action') {
                    jumpBySearchJumper();
                }
            });

            let headObserverOptions = {
                childList: true
            };
            let checkCssEle = ele => {
                if (ele === mainStyleEle) {
                    mainStyleEle = _GM_addStyle(cssText);
                }
            };
            let headObserver = new MutationObserver((mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList' && mutation.removedNodes.length) {
                        [].forEach.call(mutation.removedNodes, removedNode => {
                            checkCssEle(removedNode);
                        });
                    }
                }
            });
            headObserver.observe(document.head, headObserverOptions);

            let removeMark = node => searchBar.removeMark(node);
            let highlight = (words, node) => searchBar.highlight(words, node);
            let bodyObserverOptions = {
                childList: true,
                characterData: true,
                subtree: true
            };
            let bodyObserver = new MutationObserver((mutationsList, observer) => {
                let lockWords = searchBar.lockWords;
                if (lockWords) {
                    for (let mutation of mutationsList) {
                        if (mutation.type === "characterData") {
                            let parentNode = mutation.target.parentNode;
                            if (!parentNode ||
                                (mutation.target.previousElementSibling && mutation.target.previousElementSibling.className === "searchJumper") ||
                                (mutation.target.nextElementSibling && mutation.target.nextElementSibling.className === "searchJumper")) {
                                return;
                            }
                            searchBar.checkCharacterData(parentNode);
                        }
                        if (mutation.removedNodes.length) {
                            [].forEach.call(mutation.removedNodes, removedNode => {
                                let target = removedNode.nodeType === 1 ? removedNode : mutation.target;
                                if (target.className === "searchJumper") {
                                    removeMark(target);
                                } else if (target.children.length) {
                                    [].forEach.call(target.querySelectorAll("mark.searchJumper"), node => {
                                        removeMark(node);
                                    });
                                }
                            });
                        }
                        if (mutation.addedNodes.length) {
                            [].forEach.call(mutation.addedNodes, addedNode => {
                                let target = addedNode.nodeType === 1 ? addedNode : mutation.target;
                                if (target.className !== "searchJumper") {
                                    setTimeout(() => {
                                        highlight("insert", target)
                                    }, 0);
                                }
                            });
                        }
                    }
                }
            });
            bodyObserver.observe(getBody(document), bodyObserverOptions);
        }

        function quickAddByInput(input) {
            let parentForm, url = location.href, showCrawl = false;
            if (input && input.name) {
                parentForm = input.parentNode;
                while (parentForm) {
                    if (parentForm.tagName.toUpperCase() === "FORM") {
                        let target = parentForm.target;
                        if (target && target != '_blank' && target != '_self' && target != '_parent' && target != '_top') {
                            let targetIframe = getBody(document).querySelector(target);
                            if (!targetIframe) {
                                parentForm = null;
                                break;
                            }
                        }
                        break;
                    }
                    parentForm = parentForm.parentNode;
                }
            }
            let fail = () => {
                if (window.confirm(i18n("noValidItemAsk"))) {
                    showCrawl = true;
                    return false;
                }
                return true;
            }
            if (parentForm) {
                url = parentForm.action;
                let params = [];
                let formData = new FormData(parentForm);
                for (let [key, value] of formData) {
                    if (input.name === key) {
                        value = "%s";
                    } else value = encodeURIComponent(value);
                    params.push(key + "=" + value);
                }
                if (parentForm.method.toLowerCase() == "post") {
                    url += "%p{" + params.join("&") + "}";
                    if (parentForm.action.indexOf(location.origin) == 0 && location.pathname && location.pathname !== "/") url += `#from{${location.pathname.slice(1)}}`;
                } else {
                    if (url.indexOf("?") === -1) {
                        url += "?";
                    }
                    url += params.join("&");
                }
            } else if (input && input.value) {
                if (location.href.indexOf(input.value) !== -1) {
                    url = location.href.replace(input.value, "%s");
                } else {
                    let encodeValue = encodeURIComponent(input.value);
                    if (location.pathname.indexOf(encodeValue) !== -1 || location.search.indexOf(encodeValue) !== -1) {
                        url = location.origin + location.pathname.replace(encodeValue, "%s") + location.search.replace(encodeValue, "%s");
                    } else {
                        encodeValue = escape && escape(input.value);
                        if (encodeValue && location.pathname.indexOf(encodeValue) !== -1 || location.search.indexOf(encodeValue) !== -1) {
                            url = location.origin + location.pathname.replace(encodeValue, "%se") + location.search.replace(encodeValue, "%se");
                        } else {
                            if (fail()) return;
                        }
                    }
                }
            } else {
                if (fail()) return;
            }
            let icons = [];
            [].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon']"), link => {
                icons.push(link.href);
            });
            showSiteAdd(document.title.replace(input ? input.value : "", "").replace(/^\s*[-_]\s*/, ""), "", url, icons, document.characterSet, true);
        }

        const jumpHtml = "https://hoothin.github.io/SearchJumper/jump.html";
        function jumpBySearchJumper() {
            let jumpTo = `${jumpHtml}#jump{url=${encodeURIComponent(currentFormParams.url)}&charset=${currentFormParams.charset}}`;
            if (currentFormParams.target == '_self') {
                location.href = jumpTo;
            } else {
                _GM_openInTab(jumpTo, {active: true});
            }
        }

        function preAction() {
            if (location.href.indexOf(jumpHtml) != -1) {
                let submitParams = location.href.match(/#jump{url=(.*)&charset=(.*)}/);
                if (submitParams) {
                    submitByForm(submitParams[2], decodeURIComponent(submitParams[1]), '_self');
                }
            }
        }

        function isInConfigPage() {
            if (location.href.indexOf(configPage) === 0) {
                return true;
            }
            if ((location.hostname === "localhost" || location.href.indexOf("SearchJumper") != -1) && document.title === "SearchJumper Settings") {
                return true;
            }
            return false;
        }

        function initConfig() {
            if (isInConfigPage() && !isAllPage) {
                let sendMessageTimer, received = false;
                let loadConfig = () => {
                    sendMessageTimer = setTimeout(() => {
                        if (!received) {
                            loadConfig();
                        }
                    }, 50);
                    window.postMessage({
                        searchData: searchData,
                        version: _GM_info.script.version || 0,
                        command: 'loadConfig'
                    }, '*');
                }

                document.addEventListener('received', e => {
                    received = true;
                    clearTimeout(sendMessageTimer);
                });

                loadConfig();

                let sendVerifyResult = (url, name, status, finalUrl) => {
                    window.postMessage({
                        url: url,
                        name: name,
                        status: status,
                        finalUrl: finalUrl,
                        command: 'verifyResult'
                    }, '*');
                };
                document.addEventListener('verifyUrl', e => {
                    let targetUrl = (e.detail ? e.detail.url : e.url);
                    let name = (e.detail ? e.detail.name : e.name);
                    _GM_xmlhttpRequest({
                        method: 'GET',
                        url: targetUrl,
                        headers: {
                            referer: targetUrl,
                            'User-Agent': navigator.userAgent
                        },
                        onload: function(e) {
                            sendVerifyResult(targetUrl, name, e && e.status, e && e.finalUrl);
                        },
                        onerror: function(e){
                            sendVerifyResult(targetUrl, name, 'error', '');
                        },
                        ontimeout: function(e){
                            sendVerifyResult(targetUrl, name, 'timeout', '');
                        }
                    });
                });

                let preSwitch = searchData.prefConfig.cacheSwitch;
                document.addEventListener('saveConfig', e => {
                    searchData = (e.detail ? e.detail.searchData : e.searchData) || _unsafeWindow.searchData;
                    storage.setItem("searchData", searchData);
                    let newCache = {}, oldCacheLength = cacheIcon ? Object.keys(cacheIcon).length : 0;
                    if (preSwitch == searchData.prefConfig.cacheSwitch) {
                        searchData.sitesConfig.forEach(type => {
                            if (/^[a-z\- ]+$/.test(type.icon) || /^http/.test(type.icon)) {
                                let icon = type.icon.trim().replace(/ /g, '_');
                                let typeCache = cacheIcon[icon];
                                if (typeCache) {
                                    newCache[icon] = typeCache;
                                }
                            }
                            type.sites.forEach(site => {
                                let icon = site.icon;
                                if (!icon) icon = site.url.replace(/^(https?:\/\/[^\/]*\/).*$/, "$1favicon.ico");
                                if (/^http/.test(icon)) {
                                    let siteCache = cacheIcon[icon];
                                    if (siteCache) {
                                        newCache[icon] = siteCache;
                                    }
                                }
                            });
                        });
                        if (oldCacheLength !== Object.keys(newCache).length) {
                            cacheIcon = newCache;
                            storage.setItem("cacheIcon", newCache);
                        }
                    } else {
                        searchData.sitesConfig.forEach(type => {
                            if (/^http/.test(type.icon)) {
                                let typeCache = cacheIcon[type.icon];
                                if (typeCache && typeCache !== 'fail') {
                                    newCache[type.icon] = typeCache;
                                }
                            }
                            type.sites.forEach(site => {
                                let icon = site.icon;
                                if (!icon) icon = site.url.replace(/^(https?:\/\/[^\/]*\/).*$/, "$1favicon.ico");
                                if (/^http/.test(icon)) {
                                    let siteCache = cacheIcon[icon];
                                    if (siteCache && siteCache !== 'fail') {
                                        newCache[icon] = siteCache;
                                    }
                                }
                            });
                        });
                        storage.setItem("cacheIcon", newCache);
                        if (searchData.prefConfig.cacheSwitch) {
                            let str = 'SearchJumper start cache!';
                            debug(str);
                            _GM_notification(str);
                            searchBar.appendBar();
                            setTimeout(() => {
                                cacheFontManager(true);
                            }, 2000);
                            cacheImgManager(true);
                        }
                    }
                    preSwitch = searchData.prefConfig.cacheSwitch;
                    if (e.notification || (e.detail && e.detail.notification)) {
                        _GM_notification('Configuration imported successfully!');
                    }
                });
                document.addEventListener('copyConfig', e => {
                    let copyTarget = searchData.sitesConfig.filter(type => {return type && !(/^BM/.test(type.type) && type.icon === "bookmark")});
                    _GM_setClipboard(JSON.stringify(copyTarget, null, 2));
                    _GM_notification('Configuration copied successfully!');
                });
            } else if (importPageReg.test(location.href)) {
                let targetPre;
                let importBtn = document.createElement("button");
                let filterBtn = document.createElement("button");
                importBtn.innerText = i18n("import");
                importBtn.style.position = "absolute";
                importBtn.style.display = "block";
                importBtn.style.fontSize = "20px";
                importBtn.style.right = "35px";
                importBtn.style.opacity = "0.8";
                importBtn.addEventListener("click", e => {
                    if (targetPre) {
                        if (window.confirm(i18n("importOrNot"))) {
                            if (importBtn.parentNode) {
                                importBtn.parentNode.removeChild(importBtn);
                                filterBtn.parentNode.removeChild(filterBtn);
                            }
                            let configTxt = targetPre.innerText.trim(), configData;
                            if (!configTxt || configTxt.indexOf('[') !== 0) return;
                            try {
                                configData = JSON.parse(configTxt);
                                searchData.sitesConfig = configData;
                                searchData.lastModified = new Date().getTime();
                                storage.setItem("searchData", searchData);
                                _GM_notification('Over!');
                            } catch (e) {
                                _GM_notification(e.toString());
                            }
                        }
                    }
                });

                filterBtn.innerText = i18n("filter");
                filterBtn.style.position = "absolute";
                filterBtn.style.display = "block";
                filterBtn.style.fontSize = "20px";
                filterBtn.style.right = "115px";
                filterBtn.style.opacity = "0.8";
                filterBtn.addEventListener("click", e => {
                    if (targetPre) {
                        if (importBtn.parentNode) {
                            importBtn.parentNode.removeChild(importBtn);
                            filterBtn.parentNode.removeChild(filterBtn);
                        }
                        let configTxt = targetPre.innerText.trim(), configData;
                        if (!configTxt || configTxt.indexOf('[') !== 0) return;
                        try {
                            configData = JSON.parse(configTxt);
                            ImportFilter.getInstance().open(configData);
                        } catch (e) {
                            _GM_notification(e.toString());
                        }
                    }
                });
                let bindPre = () => {
                    let top = `${targetPre.offsetTop + 40}px`;
                    importBtn.style.top = top;
                    targetPre.parentNode.appendChild(importBtn);
                    filterBtn.style.top = top;
                    targetPre.parentNode.appendChild(filterBtn);
                };
                window.addEventListener("load", e => {
                    if (!targetPre) {
                        targetPre = document.querySelector('pre');
                        if (targetPre) {
                            bindPre();
                        }
                    }
                });

                document.addEventListener("mouseover", e => {
                    if (e.target.tagName.toUpperCase() === "PRE" && importPageReg.test(location.href)) {
                        targetPre = e.target;
                        bindPre();
                    }
                });
            }
        }

        class ImportFilter {
            static importFilter;
            constructor() {
                this.init();
            }

            static getInstance() {
                if (!ImportFilter.importFilter) {
                    ImportFilter.importFilter = new ImportFilter();
                }
                return ImportFilter.importFilter;
            }

            init() {
                let self = this;
                this.openList = [];
                this.filterCss = `
                    #searchJumperFilter {
                        width: 100%;
                        height: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 100000;
                        background-color: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(5px);
                        transform: translateZ(0);
                    }
                    .searchJumperFrame-body {
                        width: 350px;
                        text-align: left;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px;
                        border-radius: 10px 10px 0 0;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-body>.sitesCon {
                        max-height: 70vh;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                        padding: 5px;
                        user-select: none;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>span,
                    .searchJumperFrame-body>.sitesCon>details>div>span {
                        line-height: 25px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 180px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>button {
                        display: none;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary:hover>button {
                        display: inline-block;
                    }
                    .searchJumperFrame-body>.sitesCon input {
                        margin: 2px 5px;
                        width: 20px;
                        height: 20px;
                        vertical-align: sub;
                    }
                    .searchJumperFrame-body>.sitesCon div {
                        margin-left: 32px;
                    }
                    .searchJumperFrame-body>.sitesCon div.exist {
                        text-decoration:line-through;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black;
                        color: #d5d5d5;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                    }
                `;
                this.filterCssEle = _GM_addStyle(this.filterCss);
                this.filterFrame = document.createElement("div");
                this.filterFrame.id = "searchJumperFilter";
                this.filterFrame.innerHTML = createHTML(`
                <div class="searchJumperFrame-body">
                    <a href="${configPage}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${logoBase64}" />${i18n("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${i18n("expandAll")}</button>
                        <button id="collapseAll" type="button">${i18n("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${i18n("siteCancel")}</button>
                        <button id="selectAll" type="button">${i18n("selectAll")}</button>
                        <button id="add" type="button">${i18n("import")}</button>
                    </div>
                </div>
                `);
                this.sitesCon = this.filterFrame.querySelector(".sitesCon");
                let add = this.filterFrame.querySelector("#add");
                let selectAll = this.filterFrame.querySelector("#selectAll");
                let expandAll = this.filterFrame.querySelector("#expandAll");
                let collapseAll = this.filterFrame.querySelector("#collapseAll");
                let checkMark = false;
                expandAll.addEventListener("click", e => {
                    [].forEach.call(this.filterFrame.querySelectorAll("details"), details => {
                        details.setAttribute("open", "open");
                    });
                });
                collapseAll.addEventListener("click", e => {
                    [].forEach.call(this.filterFrame.querySelectorAll("details"), details => {
                        details.removeAttribute("open");
                    });
                });
                selectAll.addEventListener("click", e => {
                    checkMark = !checkMark;
                    [].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"), checkbox => {
                        checkbox.checked = checkMark;
                    });
                });
                add.addEventListener("click", e => {
                    let canImport = false;
                    [].forEach.call(this.filterFrame.querySelectorAll("details"), details => {
                        let typeName = details.children[0].children[0];
                        let typeData = self.typeDict[typeName.title];
                        typeData.type = typeName.innerText.trim();
                        typeData.sites = [];
                        [].forEach.call(details.querySelectorAll('div>[type="checkbox"]'), checkSite => {
                            if (checkSite.checked) {
                                canImport = true;
                                let curData = self.siteDict[checkSite.parentNode.title];
                                let otherType = checkSite.nextElementSibling;
                                if (!curData || !otherType) return;
                                if (otherType.value === "0") {
                                    typeData.sites.push(curData);
                                } else {
                                    let typeIndex = self.searchType(otherType.value);
                                    searchData.sitesConfig[typeIndex].sites.push(curData);;
                                }
                            }
                        });
                        if (typeData.sites.length) {
                            let typeIndex = self.searchType(typeData.type);
                            if (typeIndex === false) {
                                searchData.sitesConfig.push(typeData);
                            } else {
                                searchData.sitesConfig[typeIndex].sites = searchData.sitesConfig[typeIndex].sites.concat(typeData.sites);
                            }
                        }
                    });
                    if (canImport) {
                        searchData.lastModified = new Date().getTime();
                        storage.setItem("searchData", searchData);
                        _GM_notification('Over!');
                        this.close();
                    }
                });
                this.filterFrame.addEventListener("click", e => {
                    if (e.target.id == "searchJumperFilter" || e.target.id == "cancel") {
                        this.close();
                    }
                });
            }

            searchType(type) {
                for (let i = 0; i < searchData.sitesConfig.length; i++) {
                    let typeData = searchData.sitesConfig[i];
                    if (typeData.type == type) return i;
                }
                return false;
            }

            searchUrl(url) {
                for (let i = 0; i < searchData.sitesConfig.length; i++) {
                    let sites = searchData.sitesConfig[i].sites;
                    for (let j = 0; j < sites.length; j++) {
                        if (sites[j].url.replace(/^https?/, "") == url.replace(/^https?/, "")) return true;
                    }
                }
                return false;
            }

            searchName(name) {
                for (let i = 0; i < searchData.sitesConfig.length; i++) {
                    let sites = searchData.sitesConfig[i].sites;
                    for (let j = 0; j < sites.length; j++) {
                        if (sites[j].name == name) {
                            let newName = name + "_1";
                            return this.searchName(newName);
                        }
                    }
                }
                return name;
            }

            anylizeType(typeData) {
                let self = this;
                let details = document.createElement("details");
                let summary = document.createElement("summary");
                let typeName = document.createElement("span");
                typeName.title = typeData.type;
                typeName.innerText = typeData.type;
                summary.appendChild(typeName);
                let checkType = document.createElement("input");
                checkType.type = 'checkbox';
                summary.appendChild(checkType);
                let renameBtn = document.createElement("button");
                renameBtn.innerText = i18n("rename");
                renameBtn.addEventListener("click", e => {
                    let newName = window.prompt(i18n('rename'), typeName.innerText);
                    if (newName) typeName.innerText = newName;
                });
                summary.appendChild(renameBtn);
                details.appendChild(summary);
                for (let i = 0; i < this.openList.length; i++) {
                    if (this.openList[i] == typeData.type) {
                        details.setAttribute("open", "open");
                        break;
                    }
                }
                let sites = [];
                this.typeDict[typeData.type] = typeData;
                if (typeData.sites) {
                    typeData.sites.forEach(siteData => {
                        let siteCon = document.createElement("div");
                        let siteName = document.createElement("span");
                        siteName.innerText = siteData.name;
                        siteData.name = self.searchName(siteData.name);
                        siteCon.appendChild(siteName);
                        siteCon.title = siteData.url;
                        details.appendChild(siteCon);
                        if (self.searchUrl(siteData.url)) {
                            siteCon.classList.add("exist");
                            return;
                        }
                        let checkSite = document.createElement("input");
                        checkSite.type = 'checkbox';
                        checkSite.onclick = e => {
                            if (!checkSite.checked) {
                                checkType.checked = false;
                            } else {
                                let allchecked = true;
                                for (let i = 0; i < sites.length; i++) {
                                    if (!sites[i].checked) {
                                        allchecked = false;
                                        break;
                                    }
                                }
                                if (allchecked) checkType.checked = true;
                            }
                        };
                        siteCon.appendChild(checkSite);
                        siteCon.addEventListener("click", e => {
                            if (e.target.tagName.toUpperCase() == 'SPAN') {
                                checkSite.click();
                            }
                        });
                        let typeSelect = document.createElement("select");
                        let option = document.createElement("option");
                        option.value = 0;
                        option.innerText = i18n("currentType");
                        typeSelect.appendChild(option);
                        for (let i = 0; i < searchData.sitesConfig.length; i++) {
                            let _type = searchData.sitesConfig[i];
                            if (_type.type != typeData.type) {
                                let option = document.createElement("option");
                                option.value = _type.type;
                                option.innerText = _type.type;
                                typeSelect.appendChild(option);
                            }
                        }
                        siteCon.appendChild(typeSelect);
                        self.siteDict[siteData.url] = siteData;
                        sites.push(checkSite);
                    });
                }
                if (sites.length == 0) {
                    checkType.style.display = "none";
                    renameBtn.style.display = "none";
                }
                checkType.addEventListener("click", e => {
                    sites.forEach(checkSite => {
                        checkSite.checked = checkType.checked;
                    });
                });
                this.sitesCon.appendChild(details);
            }

            close() {
                this.openList = [];
                [].forEach.call(this.sitesCon.querySelectorAll("details"), details => {
                    if (details.hasAttribute("open")) {
                        this.openList.push(details.querySelector("summary").innerText);
                    }
                });
                if (this.filterFrame.parentNode) {
                    this.filterFrame.parentNode.removeChild(this.filterFrame);
                }
            }

            open(configData) {
                let self = this;
                this.siteDict = {};
                this.typeDict = {};
                if (!this.filterCssEle || !this.filterCssEle.parentNode) this.filterCssEle = _GM_addStyle(this.filterCss);
                document.documentElement.appendChild(this.filterFrame);
                this.sitesCon.innerHTML = createHTML('');
                configData.forEach(type => {
                    self.anylizeType(type);
                });
                //storage.setItem("searchData", searchData);
                //_GM_notification('Over!');
            }
        }

        var dragRoundFrame, dragCon, dragSiteCurSpans, dragSiteHistorySpans, dragEndHandler, dragenterHandler, dragCssEle, dragCssText, openAllTimer;
        function showDragSearch(left, top) {
            if (!searchBar || !searchBar.bar) return;
            let removeFrame = () => {
                document.removeEventListener('dragend', dragEndHandler, true);
                document.removeEventListener('dragenter', dragenterHandler, true);
                if (dragCon.parentNode) {
                    dragCon.parentNode.removeChild(dragCon);
                    dragRoundFrame.style.opacity = "";
                    dragRoundFrame.style.transform = '';
                }
                draging = false;
                clearTimeout(openAllTimer);
            };
            if (!dragRoundFrame) {
                dragCssText = `
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${searchBar.scale});
                      z-index: 2147483647;
                    }
                    #searchJumperWrapper * {
                      margin: 0;
                      padding: 0;
                      border: none;
                      outline: none;
                      user-select: none;
                      box-sizing: content-box;
                      font-size: 12px;
                      line-height: normal;
                      overflow: visible;
                    }
                    #searchJumperWrapper {
                      position: fixed;
                      height: 300px;
                      width: 300px;
                      padding: 20px;
                      margin: 20px;
                      background-color: #000000${searchData.prefConfig.hideDragHistory ? "10" : "9e"};
                      box-shadow: #000000 0px 0px 10px;
                      border-radius: 50%;
                      z-index: 2147483647;
                      box-sizing: content-box;
                      opacity: 0;
                      transform: scale(.5);
                      -moz-transition:opacity 0.3s ease, transform 0.3s;
                      -webkit-transition:opacity 0.3s ease, transform 0.3s;
                      transition:opacity 0.3s ease, transform 0.3s;
                    }
                    #searchJumperWrapper>.panel {
                      position: relative;
                    }
                    #searchJumperWrapper .sector:nth-child(2n+1) .sector-inner {
                      background: #454545;
                      color: white;
                    }
                    #searchJumperWrapper .sector:nth-child(2n) .sector-inner {
                      background: #ffffff;
                      color: black;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n+1) .sector-inner {
                      background: #353535;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n) .sector-inner {
                      background: #eeeeee;
                    }
                    #searchJumperWrapper .sector {
                      position: absolute;
                      left: 150px;
                      top: 50px;
                      width: 100px;
                      height: 200px;
                      font-size: 14px;
                      border-radius: 0px 100px 100px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 1;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                      pointer-events: none;
                    }
                    #searchJumperWrapper .sector.out {
                      left: 150px;
                      top: 0px;
                      width: 150px;
                      height: 300px;
                      font-size: 14px;
                      border-radius: 0px 150px 150px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 0;
                      ${searchData.prefConfig.hideDragHistory ? "display: none;" : ""}
                    }
                    #searchJumperWrapper .sector-inner {
                      text-align: center;
                      display: block;
                      width: 40px;
                      padding: 5px 3px 0 57px;
                      height: 195px;
                      transform: translateX(-100px) rotate(60deg);
                      transform-origin: right center;
                      border-radius: 100px 0 0 100px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner {
                      text-align: center;
                      display: block;
                      width: 90px;
                      height: 295px;
                      transform: translateX(-150px) rotate(36deg);
                      transform-origin: right center;
                      border-radius: 150px 0 0 150px;
                    }
                    #searchJumperWrapper .sector-inner span {
                      transform-origin: center;
                      padding: 20px 0;
                      pointer-events: all;
                      opacity: 0.8;
                      word-break: break-word;
                      height: 55px;
                      font-size: 12px;
                      font-weight: bold;
                      font-family: Arial, sans-serif;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                    }
                    #searchJumperWrapper .sector-inner span {
                      width: 70px;
                      margin-left: -15px;
                    }
                    #searchJumperWrapper .sector-inner span>p {
                      max-width: 58px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner span {
                      width: unset;
                      margin-left: unset;
                    }
                    #searchJumperWrapper .over>.sector-inner span {
                      opacity: 1;
                    }
                    #searchJumperWrapper .sector-inner span>img {
                      width: 25px;
                      height: 25px;
                    }
                    #searchJumperWrapper .sector-inner span:hover {
                      opacity: 1;
                    }
                    #searchJumperWrapper .dragLogo {
                      position: absolute;
                      left: 150px;
                      top: 150px;
                      border-radius: 50%;
                      box-shadow: #000000 0px 0px 10px;
                      z-index: 10;
                      font-size: 0;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                    }
                    .dragLogo>svg {
                      width: 40px;
                      height: 40px;
                      pointer-events: none;
                    }
                `;
                dragCssEle = _GM_addStyle(dragCssText);
                dragSiteCurSpans = [];
                dragSiteHistorySpans = [];
                dragRoundFrame = document.createElement("div");
                dragRoundFrame.id = "searchJumperWrapper";
                dragRoundFrame.innerHTML = createHTML(`
                <div class="panel"></div>
                <div class="dragLogo">${logoBtnSvg}</div>
                `);
                const sector1Num = 6;
                const sector2Num = 10;
                let sectorCon = dragRoundFrame.querySelector(".panel");
                let sector1Gap = 360 / sector1Num;
                let sector2Gap = 360 / sector2Num;
                let sector1Start = -sector1Gap / 2;
                let sector2Start = -sector2Gap / 2;
                let dragSector;
                let dragLogo = dragRoundFrame.querySelector(".dragLogo");
                dragLogo.addEventListener("dragover", e => {
                    e.preventDefault();
                }, true);
                dragLogo.addEventListener("dragenter", e => {
                    if (dragSector) {
                        dragSector.style.transform = `rotate(${dragSector.dataset.deg}deg) ${searchData.prefConfig.hideDragHistory ? 'scale(1.2)' : ''}`;
                        dragSector.classList.remove("over");
                    }
                    dragSector = null;
                    dragLogo.style.transform = `scale(1.35)`;
                    e.preventDefault();
                    clearTimeout(openAllTimer);
                    openAllTimer = setTimeout(() => {
                        removeFrame();
                        searchBar.appendBar();
                        searchBar.showAllSites();
                    }, 800);
                }, true);
                let geneSector = (className, deg, spanTransform) => {
                    let sector = document.createElement("div");
                    sector.className = className;
                    let sectorInner = document.createElement("div");
                    sectorInner.className = "sector-inner";
                    let sectorSpan = document.createElement("span");
                    sectorInner.appendChild(sectorSpan);
                    sector.appendChild(sectorInner);
                    let transform = `rotate(${deg}deg)`;
                    sectorSpan.style.transform = spanTransform;
                    sector.style.transform = transform + (searchData.prefConfig.hideDragHistory ? 'scale(1.2)' : '');
                    sector.dataset.deg = deg;
                    sectorCon.appendChild(sector);
                    sectorSpan.addEventListener("dragover", e => {
                        e.preventDefault();
                    }, true);
                    sectorSpan.addEventListener("dragenter", e => {
                        if (!sectorSpan.innerText) return;
                        if (dragSector) {
                            dragSector.style.transform = `rotate(${dragSector.dataset.deg}deg) ${searchData.prefConfig.hideDragHistory ? 'scale(1.2)' : ''}`;
                            dragSector.classList.remove("over");
                        }
                        dragLogo.style.transform = "";
                        sector.style.transform = `scale(${searchData.prefConfig.hideDragHistory ? '1.6' : '1.35'}) ${transform}`;
                        sector.classList.add("over");
                        dragSector = sector;
                        clearTimeout(openAllTimer);
                    }, true);
                    return sectorSpan;
                };
                for (let i = 0; i < sector1Num; i++) {
                    let sectorSpan = geneSector("sector", sector1Start + sector1Gap * i, `translateX(-10px) translateY(-10px) rotate(${sector1Start - sector1Gap * i}deg)`);
                    dragSiteCurSpans.push(sectorSpan);
                }
                for (let i = 0; i < sector2Num; i++) {
                    let sectorSpan = geneSector("sector out", sector2Start + sector2Gap * i, `translateX(12px) translateY(-15px) rotate(${sector2Start - sector2Gap * i}deg)`);
                    dragSiteHistorySpans.push(sectorSpan);
                }
                dragEndHandler = e => {
                    removeFrame();
                }
                dragRoundFrame.addEventListener('click', e => {
                    removeFrame();
                });
                dragRoundFrame.addEventListener('drop', e => {
                    if (e.target === dragLogo) {
                        searchBar.setFuncKeyCall(false);
                        searchBar.showInPage();
                    } else if (dragSector) {
                        searchBar.searchBySiteName(dragSector.children[0].dataset.name, e);
                        dragSector.style.transform = `rotate(${dragSector.dataset.deg}deg)`;
                        dragSector.classList.remove("over");
                        dragSector = null;
                    }
                    e.preventDefault();
                });
                let minClientX, maxClientX, minClientY, maxClientY;
                dragenterHandler = e => {
                    if (!dragRoundFrame.contains(e.target)){
                        removeFrame();
                        return;
                    }
                };
                dragCon = document.createElement("div");
                dragCon.id = "dragCon";
                dragCon.appendChild(dragRoundFrame);
            }
            if (!dragCssEle || !dragCssEle.parentNode) dragCssEle = _GM_addStyle(dragCssText);
            searchBar.recoveHistory();
            let firstType = searchBar.autoGetFirstType();
            let siteBtns = firstType.querySelectorAll("a.search-jumper-btn:not(.notmatch)");
            dragSiteCurSpans.forEach((span, i) => {
                span.innerHTML = createHTML();
                span.parentNode.parentNode.style.filter = 'contrast(0.5)';
                let targetSite = siteBtns[i];
                if (!targetSite) return;
                span.parentNode.parentNode.style.filter = '';
                span.parentNode.dataset.name = targetSite.dataset.name;
                let word = document.createElement("p");
                word.innerText = targetSite.dataset.name.substr(0, 10).trim();
                if (!/^\w+$/.test(word.innerText)) word.innerText = word.innerText.substr(0, 6);
                let img = document.createElement("img");
                img.style.display = "none";
                span.appendChild(img);
                span.appendChild(word);
                img.onload = e => {
                    img.style.display = "";
                };
                let targetIcon = targetSite.querySelector("img");
                if (targetIcon) {
                    let src = targetIcon.src || targetIcon.dataset.src;
                    if (src) img.src = src;
                }
            });
            let findIndex = 0;
            let getHistorySiteBtn = () => {
                let result = null;
                for (let i = findIndex; i < searchBar.historySiteBtns.length; i++) {
                    let btn = searchBar.historySiteBtns[i];
                    if (btn.style.display !== 'none') {
                        result = btn;
                        findIndex = i + 1;
                        break;
                    }
                }
                return result;
            };
            dragSiteHistorySpans.forEach((span, i) => {
                let dragleaveEvent = new DragEvent("dragleave");
                span.dispatchEvent(dragleaveEvent);
                span.innerHTML = createHTML();
                span.parentNode.parentNode.style.opacity = 0.6;
                let targetSite = getHistorySiteBtn();
                if (!targetSite) return;
                span.parentNode.parentNode.style.opacity = 1;
                span.parentNode.dataset.name = targetSite.dataset.name;
                let word = document.createElement("p");
                word.innerText = targetSite.dataset.name.substr(0, 10).trim();
                if (!/^\w+$/.test(word.innerText)) word.innerText = word.innerText.substr(0, 6);
                let img = document.createElement("img");
                img.style.display = "none";
                span.appendChild(img);
                span.appendChild(word);
                img.onload = e => {
                    img.style.display = "";
                };
                let targetIcon = targetSite.querySelector("img");
                if (targetIcon) {
                    let src = targetIcon.src || targetIcon.dataset.src;
                    if (src) img.src = src;
                }
            });
            let scaleWidth = searchBar.scale * 190;
            let scaleHeight = searchBar.scale * 190;

            if (left - scaleWidth < 0) {
                left = scaleWidth;
            } else if (document.documentElement.clientWidth - left - scaleWidth < 0) {
                left = document.documentElement.clientWidth - scaleWidth;
            }
            if (top - scaleHeight < 0) {
                top = scaleHeight;
            } else if (document.documentElement.clientHeight - top - scaleHeight < 0) {
                top = document.documentElement.clientHeight - scaleHeight;
            }
            dragCon.style.left = left - scaleWidth + "px";
            dragCon.style.top = top - scaleHeight + "px";
            dragRoundFrame.style.opacity = "";
            dragRoundFrame.style.transform = '';
            setTimeout(() => {
                document.addEventListener('dragend', dragEndHandler, true);
                document.documentElement.appendChild(dragCon);
                setTimeout(() => {
                    dragRoundFrame.style.opacity = 1;
                    dragRoundFrame.style.transform = 'scale(1)';
                }, 10);
                setTimeout(() => {
                    if (getComputedStyle(dragRoundFrame).zIndex != "2147483647") {
                        removeFrame();
                    } else {
                        document.addEventListener('dragenter', dragenterHandler, true);
                    }
                }, 100);
            }, 0);
        }

        var addFrame, nameInput, descInput, urlInput, iconInput, iconShow, iconsCon, typeSelect, testBtn, cancelBtn, addBtn, addFrameCssText, addFrameCssEle, siteKeywords, siteMatch, openSelect, crawlBtn;
        function showSiteAdd(name, description, url, icons, charset, showCrawl) {
            if (!addFrame) {
                addFrameCssText = `
                    .searchJumperFrame-body,
                    .searchJumperFrame-crawlBody {
                        width: 300px;
                        min-height: 300px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 45%;
                        margin-top: -250px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition:all 0.25s ease;
                        border: 0;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px;
                        border-radius: 10px 10px 0 0;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                    }
                    .searchJumperFrame-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif;
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperFrame-inputs>input,
                    .searchJumperFrame-inputs>textarea,
                    .searchJumperFrame-inputs>select,
                    .searchJumperFrame-body select {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        min-width: calc(100% - 8px);
                        max-width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                        height: auto;
                    }
                    .searchJumperFrame-inputs>input:focus,
                    .searchJumperFrame-inputs>textarea:focus,
                    .searchJumperFrame-inputs>select:focus,
                    .searchJumperFrame-body select:focus {
                        background-color: #FFF;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-inputs>.sideIcon {
                        float: right;
                        margin-top: -40px;
                        position: relative;
                        right: 20px;
                        opacity: 0.8;
                        background: rgb(0 0 0 / 50%);
                        border-radius: 5px;
                        pointer-events: none;
                        width: 27px;
                        height: 27px;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon {
                        fill: white;
                        pointer-events: all;
                        cursor: pointer;
                        transition: transform 0.25s ease;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon:hover {
                        transform: scale(1.2);
                        opacity: 1;
                        background: rgb(0 0 0);
                    }
                    .searchJumperFrame-body>.iconsCon {
                        max-height: 150px;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                    }
                    .searchJumperFrame-body>.iconsCon>img {
                        margin: 5px;
                        cursor: pointer;
                        max-width: 120px;
                        border: 2px solid #ffffff;
                        box-sizing: border-box;
                    }
                    .searchJumperFrame-body>.iconsCon>img:hover {
                        border: 2px solid #4e91d3;
                        background: gray;
                    }
                    .maxContent .searchJumperFrame-inputs {
                        width: 50%;
                        float: left;
                    }
                    .searchJumperFrame-body>.moreItem {
                        display: none;
                    }
                    .maxContent>.searchJumperFrame-body>.moreItem {
                        display: block;
                    }
                    .maxContent>.searchJumperFrame-body {
                        width: 600px;
                        margin-left: -300px;
                    }
                    .searchJumperFrame-maxBtn,
                    .searchJumperFrame-closeBtn {
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: white;
                        width: 25px;
                        cursor: pointer;
                        transition:transform 0.25s ease;
                    }
                    .searchJumperFrame-maxBtn:hover,
                    .searchJumperFrame-closeBtn:hover {
                        transform: scale(1.2);
                    }
                    .searchJumperFrame-maxBtn>#maxBtn {
                        display: block;
                    }
                    .searchJumperFrame-maxBtn>#minBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#maxBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#minBtn {
                        display: block;
                    }
                    .crawling>.searchJumperFrame-body {
                        display: none;
                    }
                    .searchJumperFrame-crawlBody {
                        display: none;
                    }
                    .crawling>.searchJumperFrame-crawlBody {
                        display: block;
                    }
                    .searchJumperFrame-buttons>button#submitCrawl {
                        width: 99%;
                    }
                    .searchJumperFrame-crawlBody>.actionCon {
                        height: 200px;
                        background: gray;
                        border-radius: 10px;
                        margin: 10px;
                        padding: 0 10px 10px 10px;
                        resize: auto;
                        box-sizing: border-box;
                        overflow: auto;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div {
                        width: 100%;
                        font-size: 16px;
                        background: #000000cc;
                        border-radius: 8px;
                        color: white;
                        margin: 3px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div>span {
                        background: #275f90;
                        border-radius: 5px;
                        max-width: 40px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        margin: 0 3px;
                        white-space: nowrap;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperFrame-inputs>input:focus,
                      .searchJumperFrame-inputs>textarea:focus,
                      .searchJumperFrame-inputs>select:focus,
                      .searchJumperFrame-body select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                      .searchJumperFrame-body>.iconsCon>img {
                        border: 2px solid #000000;
                      }
                    }
                `;
                addFrameCssEle = _GM_addStyle(addFrameCssText);
                addFrame = document.createElement("div");
                addFrame.innerHTML = createHTML(`
                <div class="searchJumperFrame-body">
                    <a href="${configPage}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${logoBase64}" />${i18n("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${i18n("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${i18n("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${i18n("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${i18n("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${i18n("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${i18n("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${i18n("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${i18n("openInDefault")}</option>
                            <option value="true">${i18n("openInNewTab")}</option>
                            <option value="false">${i18n("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${i18n("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${i18n("siteTest")}</button>
                        <button id="cancel" type="button">${i18n("siteCancel")}</button>
                        <button id="add" type="button">${i18n("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${configPage}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${logoBase64}" />${i18n("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button">${i18n("inputAction")}</button>
                        <button id="click" type="button">${i18n("clickAction")}</button>
                        <button id="sleep" type="button">${i18n("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button">${i18n("submitCrawl")}</button>
                    </div>
                </div>
                `);
                nameInput = addFrame.querySelector("[name='siteName']");
                descInput = addFrame.querySelector("[name='description']");
                urlInput = addFrame.querySelector("[name='url']");
                iconInput = addFrame.querySelector("[name='icon']");
                iconShow = addFrame.querySelector(".searchJumperFrame-inputs>img");
                iconsCon = addFrame.querySelector(".iconsCon");
                testBtn = addFrame.querySelector("#test");
                cancelBtn = addFrame.querySelector("#cancel");
                addBtn = addFrame.querySelector("#add");
                typeSelect = addFrame.querySelector("select[name='typeSelect']");
                siteKeywords = addFrame.querySelector("[name='siteKeywords']");
                siteMatch = addFrame.querySelector("[name='siteMatch']");
                openSelect = addFrame.querySelector("select[name='openSelect']");
                let maxBtn = addFrame.querySelector("#maxBtn");
                maxBtn.addEventListener("click", e => {
                    addFrame.classList.add("maxContent");
                });
                let minBtn = addFrame.querySelector("#minBtn");
                minBtn.addEventListener("click", e => {
                    addFrame.classList.remove("maxContent");
                });
                for (let i = 0; i < searchData.sitesConfig.length; i++) {
                    let typeConfig = searchData.sitesConfig[i];
                    let option = document.createElement("option");
                    option.value = i;
                    if (lastAddType !== "" && lastAddType == i) {
                        option.selected = "selected";
                    }
                    option.innerText = typeConfig.type;
                    typeSelect.appendChild(option);
                }
                testBtn.addEventListener("click", e => {
                    if (/#p{/.test(urlInput.value)) {
                        let actionParams = urlInput.value.match(/#p{(.*)}/);
                        if (!actionParams) return;
                        let postParams = [];
                        actionParams[1].replace(/([^\\])&/g, "$1SJ^PARAM").split("SJ^PARAM").forEach(pair => {//ios不支持零宽断言，哭唧唧
                            pair = pair.trim();
                            if (pair.startsWith("click(") && pair.endsWith(')')) {
                                let click = pair.slice(6, pair.length - 1);
                                if (click) {
                                    postParams.push(['@click', click.replace(/\\([\=&])/g, "$1").trim()]);
                                }
                            } else if (pair.startsWith("call(") && pair.endsWith(')')) {
                                let func = pair.slice(5, pair.length - 1);
                                if (func) {
                                    postParams.push(['@call', func.replace(/\\([\=&])/g, "$1").trim()]);
                                }
                            } else if (/^sleep\(\d+\)$/.test(pair)) {
                                let sleep = pair.match(/sleep\((.*)\)/);
                                if (sleep) {
                                    postParams.push(['@sleep', sleep[1]]);
                                }
                            } else {
                                pair = pair.replace(/([^\\])\=/g, "$1SJ^PARAM").replace(/\\([\=&])/g, "$1");
                                let pairArr = pair.split("SJ^PARAM");
                                if (pairArr.length === 2) {
                                    let k = pairArr[0];
                                    let v = pairArr[1].replace(/\\([\=&])/g, "$1");
                                    postParams.push([k, v]);
                                } else if (pair.endsWith('.click()') || pair.endsWith('.click')) {
                                    postParams.push(['@' + pair.replace(/\.click(\(\))?$/, ''), 'click']);
                                }
                            }
                        });
                        inPagePostParams = postParams;
                        searchBar.submitAction(postParams);
                    } else if (/[:%]p{/.test(urlInput.value) || (charset && charset.toLowerCase() != 'utf-8')) {
                        submitByForm(charset, urlInput.value.replace(/%se?\b/g, "searchJumper"), "_blank");
                    } else {
                        _GM_openInTab(urlInput.value.replace(/%se?\b/g, "searchJumper"), {active: true});
                    }
                });
                cancelBtn.addEventListener("click", e => {
                    if (addFrame.parentNode) {
                        addFrame.parentNode.removeChild(addFrame);
                    }
                });
                addBtn.addEventListener("click", e => {
                    let siteObj = null;
                    for (let i = 0; i < searchData.sitesConfig.length; i++) {
                        let typeConfig = searchData.sitesConfig[i];
                        for (let j = 0; j < typeConfig.sites.length; j++) {
                            let curSite = typeConfig.sites[j];
                            if (curSite.url == urlInput.value) {
                                if (i == parseInt(typeSelect.value)) return;
                                if (window.confirm(i18n("siteExist"))) {
                                    siteObj = {
                                        name: curSite.name + " - " + typeConfig.type,
                                        url: `["${curSite.name}"]`
                                    };
                                } else return;
                            }
                        }
                    }
                    if (siteObj == null) {
                        siteObj = {
                            name: nameInput.value,
                            url: urlInput.value
                        };
                        if (iconInput.value && iconInput.value != urlInput.value.replace(/^(https?:\/\/[^\/]*\/).*$/, "$1favicon.ico")) {
                            siteObj.icon = iconInput.value;
                        }
                        if (descInput.value && descInput.value != nameInput.value) {
                            siteObj.description = descInput.value;
                        }
                        if (siteKeywords.value) {
                            siteObj.keywords = siteKeywords.value;
                        }
                        if (siteMatch.value) {
                            siteObj.match = siteMatch.value;
                        }
                        if (openSelect.value && openSelect.value != '-1') {
                            siteObj.openInNewTab = openSelect.value === 'true';
                        }
                        if (charset && charset.toLowerCase() != 'utf-8') {
                            siteObj.charset = charset;
                        }
                    }
                    searchData.sitesConfig[typeSelect.value].sites.push(siteObj);
                    searchData.lastModified = new Date().getTime();
                    storage.setItem("lastAddType", typeSelect.value);
                    storage.setItem("searchData", searchData);
                    _GM_notification(i18n("siteAddOver"));
                    if (addFrame.parentNode) {
                        addFrame.parentNode.removeChild(addFrame);
                    }
                });

                crawlBtn = addFrame.querySelector("#crawlBtn");
                let closeCrawlBtn = addFrame.querySelector(".searchJumperFrame-closeBtn");
                let actionCon = addFrame.querySelector(".actionCon");
                let inputAction = addFrame.querySelector("#input");
                let clickAction = addFrame.querySelector("#click");
                let sleepAction = addFrame.querySelector("#sleep");
                let submitCrawl = addFrame.querySelector("#submitCrawl");
                let dragDiv;
                let addAction = (type, params) => {
                    let div = document.createElement("div");
                    let words = "";
                    switch(type) {
                        case "input":
                            words = i18n('inputOutput', params);
                            break;
                        case "click":
                            words = i18n('clickOutput', params[0]);
                            break;
                        case "sleep":
                            words = i18n('sleepOutpus', params[0]);
                            break;
                        default:
                            break;
                    }
                    if (words) {
                        div.innerHTML = createHTML(words);
                        div.dataset.type = type;
                        div.dataset.params = params;
                        div.draggable = "true";
                        div.ondragover = e => {
                            e.preventDefault();
                        };
                        div.ondragstart = e => {
                            dragDiv = div;
                        }
                        div.ondrop = e => {
                            actionCon.insertBefore(dragDiv, div);
                        }
                        div.onclick = e => {
                            if (e.target.tagName.toUpperCase() == 'SPAN') {
                                if (e.target.className == 'element') {
                                    Picker.getInstance().getSelector(selector => {
                                        e.target.innerText = selector;
                                        e.target.title = selector;
                                        addFrame.style.display = '';
                                    });
                                    addFrame.style.display = 'none';
                                } else {
                                    let newValue = prompt(i18n('inputNewValue'), e.target.innerText);
                                    if (newValue) e.target.innerText = newValue;
                                }
                            } else if (confirm(i18n('deleteConfirm'))) {
                                actionCon.removeChild(div);
                            }
                        }
                        actionCon.appendChild(div);
                    }
                };
                let anylizeEmuUrl = () => {
                    actionCon.innerHTML = createHTML();
                    let actionParams = urlInput.value.match(/#p{(.*)}/);
                    if (!actionParams) return;
                    actionParams[1].replace(/([^\\])&/g, "$1SJ^PARAM").split("SJ^PARAM").forEach(pair => {
                        pair = pair.trim();
                        if (pair.startsWith("click(") && pair.endsWith(')')) {
                            let click = pair.slice(6, pair.length - 1);
                            if (click) {
                                addAction('click', [click.replace(/\\([\=&])/g, "$1").trim()]);
                            }
                        } else if (pair.startsWith("call(") && pair.endsWith(')')) {
                            let func = pair.slice(5, pair.length - 1);
                            if (func) {
                                addAction('call', [func.replace(/\\([\=&])/g, "$1").trim()]);
                            }
                        } else if (/^sleep\(\d+\)$/.test(pair)) {
                            let sleep = pair.match(/sleep\((.*)\)/);
                            if (sleep) {
                                addAction('sleep', [sleep[1]]);
                            }
                        } else {
                            pair = pair.replace(/([^\\])\=/g, "$1SJ^PARAM").replace(/\\([\=&])/g, "$1");
                            let pairArr = pair.split("SJ^PARAM");
                            if (pairArr.length === 2) {
                                addAction('input', [pairArr[0], pairArr[1].replace(/\\([\=&])/g, "$1")]);
                            } else if (pair.endsWith('.click()') || pair.endsWith('.click')) {
                                addAction('click', [pair.replace(/\.click(\(\))?$/, '')]);
                            }
                        }
                    });


                };
                let geneUrl = () => {
                    let actions = [];
                    [].forEach.call(actionCon.children, action => {
                        if (!action) return;
                        let params = action.dataset.params;
                        if (!params) return;
                        switch(action.dataset.type) {
                            case "click":
                                actions.push(`click(${params.replace(/([=&])/g, '\\$1')})`);
                                break;
                            case "input":
                                params = params.split(',');
                                if (params.length != 2) return;
                                actions.push(`${params[0].replace(/([=&])/g, '\\$1')}=${params[1]}`);
                                break;
                            case "sleep":
                                actions.push(`sleep(${params})`);
                                break;
                            default:
                                break;
                        }
                    });
                    return actions.join('&');
                };
                crawlBtn.addEventListener("click", e => {
                    anylizeEmuUrl();
                    addFrame.classList.add("crawling");
                });
                closeCrawlBtn.addEventListener("click", e => {
                    addFrame.classList.remove("crawling");
                });
                inputAction.addEventListener("click", e => {
                    Picker.getInstance().getSelector(selector => {
                        addAction('input', [selector, '%s']);
                        addFrame.style.display = '';
                    });
                    addFrame.style.display = 'none';
                });
                clickAction.addEventListener("click", e => {
                    Picker.getInstance().getSelector(selector => {
                        addAction('click', [selector]);
                        addFrame.style.display = '';
                    });
                    addFrame.style.display = 'none';
                });
                sleepAction.addEventListener("click", e => {
                    let sleepTime = prompt(i18n('sleepPrompt'), 1000);
                    sleepTime = sleepTime && parseInt(sleepTime);
                    if (sleepTime) addAction('sleep', [sleepTime]);
                });
                submitCrawl.addEventListener("click", e => {
                    urlInput.value = location.href.replace(/\?.*/, '') + '#p{' + geneUrl() + '}';
                    addFrame.classList.remove("crawling");
                });
            }
            if (!addFrameCssEle || !addFrameCssEle.parentNode) addFrameCssEle = _GM_addStyle(addFrameCssText);
            crawlBtn.style.display = showCrawl ? '' : 'none';
            getBody(document).appendChild(addFrame);
            siteKeywords.value = "";
            siteMatch.value = "";
            nameInput.value = name;
            descInput.value = description;
            urlInput.value = url;
            if (icons[0]) {
                iconShow.style.display = "";
                iconInput.value = icons[0];
                iconShow.src = icons[0];
            } else {
                iconShow.style.display = "none";
            }
            iconsCon.innerHTML = createHTML();
            if (icons && icons.length > 1) {
                iconsCon.style.opacity = "";
                icons.forEach(iconSrc => {
                    let curIcon = document.createElement("img");
                    curIcon.src = iconSrc;
                    curIcon.addEventListener("click", e => {
                        iconInput.value = iconSrc;
                        iconShow.src = iconSrc;
                    });
                    curIcon.onload = e => {
                        curIcon.title = curIcon.naturalWidth + " x " + curIcon.naturalHeight + "\n" + iconSrc.replace(/.*\/([^\/]+)/, "$1");
                    };
                    iconsCon.appendChild(curIcon);
                });
            } else {
                iconsCon.style.opacity = 0;
            }
        }

        function showSiteAddFromOpenSearch(url, callback) {
            _GM_xmlhttpRequest({
                method: "GET",
                url: url,
                headers: {
                    referer: url,
                    origin: url
                },
                onload: (d) => {
                    let urlparam = d && d.responseXML && d.responseXML.querySelector('Url[type="text/html"]');
                    if (!urlparam) {
                        callback('error', d);
                        return;
                    }
                    let shortName = d.responseXML.querySelector("ShortName");
                    let description = d.responseXML.querySelector("Description");
                    let image = d.responseXML.querySelector("Image");
                    let inputEncoding = d.responseXML.querySelector("InputEncoding");
                    let postParams = urlparam.querySelectorAll("Param");
                    let name = shortName && shortName.textContent;
                    let desc = description && description.textContent;
                    let url = urlparam.getAttribute("template");
                    let ico = image && image.textContent;
                    let charset = inputEncoding && inputEncoding.textContent;
                    if (postParams.length > 0) {
                        let params = [];
                        [].forEach.call(postParams, postParam => {
                            params.push(`${postParam.getAttribute("name")}=${postParam.getAttribute("value")}`);
                        });
                        url += `%p{${params.join("&")}}`;
                    }
                    showSiteAdd(name, desc, url.replace(/{searchTerms\??}/g, "%s").replace(/{startPage\??}/g, '1').replace(/{count\??}/g, '10').replace(/{startIndex\??}/g, '1').replace(/{startPage\??}/g, '1').replace(/{language\??}/g, '*').replace(/{inputEncoding\??}/g, 'UTF-8').replace(/{outputEncoding\??}/g, 'UTF-8'), [ico], charset);
                    callback('load', d);
                },
                onerror: (e) => {
                    callback('error', e);
                },
                ontimeout: (e) => {
                    callback('error', e);
                }
            });
        }

        function initMycroft() {
            if (location.hostname !== "mycroftproject.com") return;
            let checkLinks = () => {
                let installLinks = document.querySelectorAll("img.icon+a");
                if (installLinks.length <= 0) return;
                let isLoading = false;
                [].forEach.call(installLinks, installLink => {
                    if (installLink.previousElementSibling && installLink.previousElementSibling.classList.contains("searchJumperIcon")) return;
                    if (installLink.previousElementSibling && installLink.previousElementSibling.previousElementSibling && installLink.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon")) return;
                    let urlMatch = installLink.href.match(/\?id=(\d+)&basename=(.+?)&/);
                    if (urlMatch === null) {
                        return;
                    }
                    let icon = document.createElement("img");
                    icon.className = "icon searchJumperIcon";
                    icon.style.cssText = "border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;";
                    icon.title = "Add to SearchJumper";
                    icon.src = logoBase64;
                    installLink.parentNode.insertBefore(icon, installLink);
                    icon.onclick = e => {
                        if (isLoading) return;
                        isLoading = true;
                        icon.classList.add("searchJumper-loading");
                        showSiteAddFromOpenSearch(`https://mycroftproject.com/installos.php/${urlMatch[1]}/${urlMatch[2]}.xml`, (type, e) => {
                            isLoading = false;
                            icon.classList.remove("searchJumper-loading");
                            if (type != 'load') {
                                _GM_notification(e.statusText || e.error);
                            }
                        });
                    };
                });
            };
            checkLinks();
            let checkInterval = setInterval(() => {
                checkLinks();
            }, 1000);
            window.addEventListener("load", e => {
                clearInterval(checkInterval);
                checkLinks();
            });
        }

        function initView() {
            searchBar = new SearchBar();
        }

        function initAllPage() {
            if (isAllPage) {
                searchBar.appendBar();
                searchBar.showAllSites();
                if (location.hash) {
                    let hash = location.hash.slice(1);
                    try {
                        hash = decodeURIComponent(hash);
                    } catch (e) {}
                    searchBar.searchJumperInputKeyWords.value = hash;
                }
                getBody(document).style.cssText = `
                    zoom: 1;
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                    height: 100vh;
                    background-position: center 0;
                    background-repeat: no-repeat;
                    background-size: cover;
                    -webkit-background-size: cover;
                    -o-background-size: cover;
                `;
                storage.getItem("allPageBg", allPageBg => {
                    if (allPageBg) {
                        getBody(document).style.backgroundImage = `url("${allPageBg.base64}")`;
                    } else allPageBg = {url: ""};
                    _GM_xmlhttpRequest({
                        method: 'GET',
                        url: "http://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",
                        onload: function(result) {
                            var jsonData = null;
                            try {
                                jsonData = JSON.parse(result.responseText);
                                var bgUrl = jsonData.images[0].url;
                                if (!/^https?:\/\//.test(bgUrl)) {
                                    bgUrl = "https://global.bing.com" + bgUrl;
                                }
                                if (bgUrl == allPageBg.url) return;
                                _GM_xmlhttpRequest({
                                    method: 'GET',
                                    url: bgUrl,
                                    responseType: "blob",
                                    onload: function(r) {
                                        var blob = r.response;
                                        var fr = new FileReader();
                                        fr.readAsDataURL(blob);
                                        fr.onload = function (e) {
                                            var base64ImgData = e.target.result;
                                            allPageBg = {url: bgUrl, base64: base64ImgData};
                                            storage.setItem("allPageBg", allPageBg);
                                        };
                                    }
                                });
                                if (!allPageBg.base64) getBody(document).style.backgroundImage = `url("${bgUrl}")`;
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    });
                });
            }
        }

        async function initRun() {
            await searchBar.initRun();
            initListener();
            initAllPage();
        }

        async function sleep(time) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, time);
            })
        }

        async function initData() {
            let _searchData = await new Promise((resolve) => {
                storage.getItem("searchData", data => {
                    resolve(data);
                });
            });
            cacheKeywords = await new Promise((resolve) => {
                storage.getItem("cacheKeywords", data => {
                    resolve(data || '');
                });
            });
            lastSign = await new Promise((resolve) => {
                storage.getItem("lastSign", data => {
                    resolve(data || false);
                });
            });
            storage.setItem("lastSign", false);
            inPagePostParams = await new Promise((resolve) => {
                storage.getItem("inPagePostParams_" + location.hostname, data => {
                    resolve(data || false);
                });
            });
            cacheIcon = await new Promise((resolve) => {
                storage.getItem("cacheIcon", data => {
                    resolve(data || {});
                });
            });
            historySites = await new Promise((resolve) => {
                storage.getItem("historySites", data => {
                    resolve(data || []);
                });
            });
            historyType = await new Promise((resolve) => {
                storage.getItem("historyType", data => {
                    resolve(data || '');
                });
            });
            sortTypeNames = await new Promise((resolve) => {
                storage.getItem("sortTypeNames", data => {
                    resolve(data || {});
                });
            });
            globalInPageWords = await new Promise((resolve) => {
                storage.getItem("globalInPageWords", data => {
                    resolve(data || '');
                });
            });
            navEnable = await new Promise((resolve) => {
                storage.getItem("navEnable", data => {
                    resolve(typeof data === "undefined" ? true : data);
                });
            });
            referrer = await new Promise((resolve) => {
                storage.getItem("referrer", data => {
                    resolve(data || "");
                });
            });
            lastAddType = await new Promise((resolve) => {
                storage.getItem("lastAddType", data => {
                    resolve(data || "");
                });
            });
            if (_searchData) {
                searchData = _searchData;
            }
            if (searchData.prefConfig.lang && searchData.prefConfig.lang != '0') {
                lang = searchData.prefConfig.lang;
            }
            setLang();
            //旧版兼容
            if (typeof searchData.prefConfig.customSize === "undefined") {
                searchData.prefConfig.customSize = 100;
            }
            if (typeof searchData.prefConfig.typeOpenTime === "undefined") {
                searchData.prefConfig.typeOpenTime = 250;
            }
            if (typeof searchData.prefConfig.longPressTime === "undefined") {
                searchData.prefConfig.longPressTime = 500;
            }
            if (typeof searchData.prefConfig.cacheSwitch === "undefined") {
                searchData.prefConfig.cacheSwitch = false;
            }
            if (typeof searchData.prefConfig.noIcons === "undefined") {
                searchData.prefConfig.noIcons = false;
            }
            if (typeof searchData.prefConfig.noAni === "undefined") {
                searchData.prefConfig.noAni = false;
            }
            if (typeof searchData.prefConfig.quickAddRule === "undefined") {
                searchData.prefConfig.quickAddRule = true;
            }
            if (typeof searchData.prefConfig.multiline === "undefined") {
                searchData.prefConfig.multiline = 2;
            }
            if (typeof searchData.prefConfig.multilineGap === "undefined") {
                searchData.prefConfig.multilineGap = 1000;
            }
            if (typeof searchData.prefConfig.historyLength === "undefined") {
                searchData.prefConfig.historyLength = 0;
            }
            if (typeof searchData.prefConfig.dragToSearch === "undefined") {
                searchData.prefConfig.dragToSearch = true;
            }
            if (typeof searchData.prefConfig.firstFiveWordsColor === "undefined") {
                searchData.prefConfig.firstFiveWordsColor = [];
            }
            if (typeof searchData.prefConfig.inPageWordsStyles === "undefined") {
                searchData.prefConfig.inPageWordsStyles = [];
            }
            if (typeof searchData.prefConfig.rightMouse === "undefined") {
                searchData.prefConfig.rightMouse = true;
            }
            if (typeof searchData.prefConfig.mouseLeaveToHide === "undefined") {
                searchData.prefConfig.mouseLeaveToHide = true;
            }
            if (typeof searchData.prefConfig.currentTypeFirst === "undefined") {
                searchData.prefConfig.currentTypeFirst = true;
            }
            if (typeof searchData.prefConfig.suggestType === "undefined") {
                if (lang === "zh-CN") {
                    searchData.prefConfig.suggestType = "baidu";
                } else searchData.prefConfig.suggestType = "google";
            }
        }

        if (location.href.indexOf("#searchJumperMin") != -1) {
            inMinMode = true;
            if (location.href.indexOf("#searchJumperMinPost") != -1) {
                window.history.replaceState(null, '', location.href.replace(/#searchJumperMin(Post)?/, ""));
            } else {
                if (location.href.indexOf("#searchJumperMinMobile") != -1) {
                    Object.defineProperty(Object.getPrototypeOf(navigator), 'userAgent', { get:function() { return mobileUa }});
                    _GM_xmlhttpRequest({
                        method: 'GET',
                        url: location.href,
                        headers: {
                            referer: location.href,
                            "User-Agent": mobileUa
                        },
                        onload: function(d) {
                            document.open();
                            document.write(d.response);
                            document.close();
                        },
                        onerror: function(){
                        },
                        ontimeout: function(){
                        }
                    });
                    return;
                }
                window.history.replaceState(null, '', location.href.replace(/#searchJumperMin(Mobile)?/, ""));
            }
        }
        if (document.title == 'SearchJumper Multi') return;

        var inited = false;
        async function init(cb) {
            if (window.top != window.self && getBody(document).clientHeight < 100 && getBody(document).clientWidth < 100) {
                return;
            }
            if (inited) {
                if (cb) cb();
                return;
            }
            if (!document.hidden) {
                inited = true;
                preAction();
                await initData();
                initView();
                initConfig();
                initMycroft();
                initRun();
                if (cb) cb();
            }
            document.addEventListener('visibilitychange', visibilitychangeHandler);
        }

        function checkVisibility() {
            if (document.hidden) {
                if (searchBar) searchBar.closeShowAll();
                return;
            }
            init(() => {
                let oldGlobalInPageWords = globalInPageWords;
                storage.getItem("globalInPageWords", data => {
                    globalInPageWords = (data || '');
                    if (oldGlobalInPageWords != globalInPageWords) {
                        searchBar.refreshPageWords();
                    }
                });
                let oldNavEnable = navEnable;
                storage.getItem("navEnable", data => {
                    navEnable = (typeof data === "undefined" ? true : data);
                    if (oldNavEnable != navEnable) {
                        searchBar.refreshNav();
                    }
                });
            });
        }

        var waiting = false;
        function visibilitychangeHandler() {
            if (waiting) return;
            waiting = true;
            setTimeout(() => {
                checkVisibility();
                waiting = false;
            }, 500);
        }

        storage.getItem("postUrl", postUrl => {
            if (postUrl && postUrl[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/, "$1")) != -1) {
                storage.setItem("postUrl", '');
                submitByForm(postUrl[1], postUrl[0], '_self');
            } else {
                if (document.head && getBody(document)) {
                    init();
                } else {
                    let checkReady = () => {
                        if (document.head && getBody(document)) {
                            init();
                        } else {
                            setTimeout(() => {
                                checkReady();
                            }, 10);
                        }
                    };
                    checkReady();
                }
            }
        });
    }

    if (document && document.documentElement) {
        run();
    } else {
        let checkReady = () => {
            if (document && document.documentElement) {
                run();
            } else {
                setTimeout(() => {
                    checkReady();
                }, 10);
            }
        };
        checkReady();
    }
})();