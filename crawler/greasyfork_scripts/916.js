// ==UserScript==
// @name         TWITTER DOWNLOAD GIF&VIDEO
// @namespace    http://tampermonkey.net/
// @version      1.41
// @description  Helps you download gifs, videos and original images from Twitter.
// @copyright 2021, Trixille/Vitaminiser (https://twitter.com/vitaminiser)
// @license      Artistic-2.0
// @author       https://twitter.com/vitaminiser
// @match        https://twitter.com/*
// @match        https://giphy.com/upload*
// @match        https://ezgif.com/video-to-gif*
// @match        https://imgflip.com/gif-maker*
// @match        https://gifs.com/*
// @iconURL      https://pbs.twimg.com/media/Exfa98aWEAQ2Lmk?format=png
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      ezgif.com
// @run-at       document-end
// ==/UserScript==


(function () {
    'use strict';

    const DEBUG_SCRIPT = false;

    const script = {
        default_filenames: '[(giftitle)][(user)][_status_(id)][_(size)]'
    };

    const GIFUploader = {
        'giphy': {
            title: 'GIPHY',
            url: 'https://giphy.com/upload',
            selector: 'input[type="url"]',
            trigger: function triggerChange(value, sel) {
                let input = document.querySelector(sel);
                input.value = value;
                let event = document.createEvent('HTMLEvents');
                event.initEvent('input', true, false);
                input.dispatchEvent(event);
            }
        },
        'ezgif': {
            title: 'EzGif',
            url: 'https://ezgif.com/video-to-gif',
            selector: 'form.form input[name="new-image-url"]',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                document.querySelector('form.form').submit();
            }
        },
        /*
        'tenor' : {
            title: 'Tenor',
            url: 'https://tenor.com/gif-maker',
            selector: 'input#upload_url',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                let event = new Event('change', { bubbles: true });
                input.dispatchEvent( event );
            }
        },*/
        'imgflip': {
            title: 'ImgFlip',
            url: 'https://imgflip.com/gif-maker',
            selector: 'div#vgif-upload-panel input#url',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                const w = (typeof unsafeWindow === "undefined") ? window : unsafeWindow;
                let event = new w.Event('change', { bubbles: true });
                input.dispatchEvent(event);
            }
        },
        'gifs.com': {
            title: 'Gifs.com',
            url: 'https://gifs.com/',
            selector: 'div#editor-input input#home-input',
            trigger: function triggerChange(value, sel) {
                debug(value, sel);
                const input = document.querySelector(sel);
                input.value = value;
                document.querySelector('button#home-create').click();
            }
        },
        get: function (name) {
            return this[name.toLowerCase()];
        },
        props: function () {
            let o = {};
            for (let p in this) {
                if (this[p].url) o[p] = this[p];
            }
            return o;
        },
        propNames: function () {
            let o = {};
            for (let p in this) {
                if (this[p].url) o[p] = true;
            }
            return o;
        },
        setEnabled: function (name, bool) {
            this.get(name).enabled = bool;
        },
        testURL: function (url) {
            for (let o in this) {
                if (this[o].url && url.startsWith(this[o].url))
                    return true;
            }
            return false;
        }
    }

    function debug() {
        const DEBUG_ = (isExtension()) ? DEBUG : DEBUG_SCRIPT;
        if (DEBUG_) {
            console.log.apply(null, arguments);
        }
    }

    function yell(str) {
        const DEBUG_ = (isExtension()) ? DEBUG : DEBUG_SCRIPT;
        if (DEBUG_) {
            if (typeof str === "object") {
                str = JSON.stringify(str);
            }
            alert(str);
        }
    }

    function isExtension() {
        if (window.chrome && chrome.runtime && chrome.runtime.id)
            return true;
        else return false;
    }

    async function sleepUntil(selector, changefn, media, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeWas = new Date();
            let wait = setInterval(function () {
                if (document.querySelector(selector)) {
                    console.log("resolved after", new Date() - timeWas, "ms");
                    clearInterval(wait);
                    changefn(media, selector);
                    resolve();
                } else if (new Date() - timeWas > timeoutMs) { // Timeout
                    console.log("rejected after", new Date() - timeWas, "ms");
                    clearInterval(wait);
                    reject();
                }
            }, 10);
        });
    }

    if (window.location.hostname !== "twitter.com" &&
        GIFUploader.testURL(window.location.href) &&
        window.location.href.indexOf('?media_url=') > -1) {

        const url = new URL(window.location);
        const media_url = url.searchParams.get('media_url');
        const type = url.searchParams.get('type');
        if (!media_url || !type) return;
        const site = GIFUploader.get(type);
        sleepUntil(site.selector, site.trigger, media_url, 5000);

    }

    //Start
    else if (window.location.hostname === "twitter.com") {

        const CSS = `

        div.download-panel {
        display:none;
        flex-direction: column;
        flex-wrap: nowrap;
        position: absolute;
        pointer-events: auto !important;
        z-index: 60000;
        right: 0px;
        top: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 10px !important;
        color:white;
        width:80px;
        backdrop-filter:blur(3px);
        border-top-right-radius: 15px;
        }
        
        div.download-panel > div.download-init-button {
        cursor: pointer;
        background-color: transparent;
        font-size: 10px !important;
        width: 100%;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items:center;
        border: 1px solid rgba(255, 255, 255, 0.5);
        user-select: none;
        }
        
        div.download-panel * {
        cursor: pointer;
        }
        
        article div[data-testid="videoPlayer"]:hover div.download-panel-wrapper,
        article div[data-testid="videoPlayer"]:hover div.download-panel,
        img:hover + div.download-panel,
        div.download-panel:hover{
        display: flex;
        }

        div.download-panel-wrapper:hover div.download-panel {
        display: flex;
        }
        
        div[data-download_image_button="true"]:hover >div>div>div>div{
        background-color: rgba(255, 255, 255, 0.1);
        }
        
        div[data-download_image_button="true"]{
        margin-left: 23px;
        }
        
        div[data-download_image_button="true"] * {
        pointer-events: none;
        }
        
        div[data-has_panel] div.download-image-original {
        display: none;
        position:absolute;
        bottom:0px;
        right:0px;
        background-color: rgba(0, 0, 0, 0.5);
        color:white;
        min-width: 20px;
        min-height: 20px;
        font-size: 16px !important;
        align-items: baseline;
        justify-content: flex-end;
        border-top-left-radius: 20px;
        border:1px solid white;
        border-bottom-width: 0px;
        border-right-width: 0px;
        }
        div[data-has_panel] div.download-image-original:after {
        content: '⭳';
        color:white;
        }
        
        div[data-has_panel]:hover div.download-image-original {
        display: flex;
        }
        
        img + div.download-panel{
        bottom:0px;
        right:0px;
        }

        div.download-panel .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        div.download-panel .row button.button {
           width: 50%;
        }
        
        div.download-panel span {
        font-size: 10px !important;
        display: flex;
        justify-content: center;
        width: 16px;
        pointer-events:none;
        }
        
        div.download-panel>div.download-init-button>button {
        cursor: pointer;
        background-color: transparent;
        --status-color:white;
        color: var( --status-color );
        border: 1px solid transparent;
        font-size: 10px;
        width: 58px;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        pointer-events: none;
        }
        
        div.download-panel[data-collapsed="true"] div.download-links,
        div.download-panel>div.download-init-button>a.download-video-link {
        display: none;
        }
        
        article div[data-testid="videoPlayer"]:hover div.download-panel {
        display: flex;
        }
        
        div.download-panel div.download-links {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        }
        
        div.download-panel button {
        cursor: pointer;
        background-color: transparent;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items: center;
        color: var(--status-color, white);
        font-size: 10px;
        border: 1px solid var(--status-color, rgba(255, 255, 255, 0.5));
        padding: 1px;
        margin-top: 1px;
        text-decoration: none;
        /*Firefox hover fix*/
        max-height:15px;
        overflow:hidden;
        --label: "";
        min-height: 15px;
        }

        progress.progress-meter {
            appearance: none;
            display: var(--meter-display, none);
            width: 95%;
            height: 5px;
        }

        div.download-panel button:hover > div.label:after {
            content: var(--label-hover, var(--label));
        }

        div.download-panel button  div.label,
        div.download-panel button  div.label:after {
            pointer-events: none !important;
        }

        div.download-panel button[data-status="pending"] {
            --status-color: lime;
        }

        div.download-panel button[data-status="error"] {
            --label: "Error" !important;
            --label-hover: "Error" !important;
            --status-color: orange;
        }

        progress.progress-meter::-webkit-progress-bar {
            background-color: transparent;
        }

        progress.progress-meter::-webkit-progress-value {
            background-color: var(--status-color, white);
        }

        div.download-panel button[data-meter][data-status="pending"]{
            --meter-display:inline-block;
        }

        div.download-panel button[data-meter][data-status="pending"] .label{
            display:none;
        }

        div.download-panel button > div.label:after {
            /*content:attr(data-label);*/
            content: var(--label, "");
            display:flex;
            width:100%;
            background:transparent;
            /*outline: 1px solid rgba(255, 255, 255, 0.1);*/
            padding-left: 5px;
            justify-content: center;
            align-items: center;
            padding-left: 0px;
        }
    
        div.download-panel button[data-label_hover]:hover:after {
            content:attr(data-label_hover);
        }
        
        div.download-links button[class*='upload-']:after,
        div.download-links button[data-label='as MP4']:after{
        justify-content: center;
        align-items: center;
        padding-left: 0px;
        }
        
        div.download-panel div.download-links button:not([data-status="pending"]):hover{
            --status-color: red;
        }
        
        div.download-panel button.download-mp4:not([data-status="pending"])[data-best_quality="true"] {
            font-weight: bold;
            border: 1px solid var(--status-color, white);
        }

        div.download-panel div.download-links button[data-best_quality="true"]:hover{
            --label-hover:'BEST BITRATE';
            text-shadow: 0px 0px 1px 0px red;
        }
    
        .media-downloader-settings-panel,
        .media-downloader-links-panel {
            display: none;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            position: fixed;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            z-index: 30000000;
            background-color:transparent;
            pointer-events:none;
        }

        .media-downloader-settings-panel span.explain {
            font-size: 12px;
            line-height: 0.8;
            padding: 20px 10px 0px 10px;
        }
    
        .media-downloader-settings-panel > div,
        .media-downloader-links-panel > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: fit-content;
            background-color: rgba(0,0,0,0.8);
            pointer-events: all;
            color: white;
            border: 1px solid white;
            backdrop-filter: blur(5px);
            font-family: sans-serif;
            padding: 25px;
        }
    
        .media-downloader-settings-panel fieldset {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            width: 100%;
            box-sizing: border-box;
            padding: 20px 10px 20px 10px;
        }

        .media-downloader-links-panel .fieldset{
            flex-grow: 1;
            margin: 20px 20px 0px 20px;
            width: 80%;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .media-downloader-links-panel li {
            display: flex;
            flex-direction: column;
            list-style: none;
        }

        .media-downloader-links-panel .fieldset textarea{
            background-color: transparent;
            border: 1px solid white;
            color: white;
            font-size: 12px;
            flex-grow: 1;
            padding: 4px;
            height: fit-content;
            resize: none;
        }
    
        .media-downloader-settings-panel li {
            list-style: none;
            font-size: 12px;
            padding: 4px 0px 4px 0px;
        }
    
        .media-downloader-settings-panel button,
        .media-downloader-links-panel button{
            background-color: transparent;
            border: 1px dashed;
            color: white;
            width: 150px;
            height: 40px;
            margin: 20px;
            cursor: pointer;
        }
    
        `;

        let SETTINGS = {};

        //Load Settings
        try {
            loadSettings().then(settings => {
                SETTINGS = settings;
                debug(SETTINGS);
            });

        }
        catch (e) {
            debug('Error loading settings ' + e);
        }


        //GM_addStyle(CSS);
        sleepUntil('head', () => {
            const style = $id('download-panel-style') || el('style', document.head);
            style.id = 'download-panel-style';
            style.type = 'text/css';
            style.appendChild(document.createTextNode(CSS));
        }, '', 5000);
        document.addEventListener('mouseover', function (e) {
            const t = e.target;
            let parent;
            if (t.tagName === "IMG") {
                const regexp = /https:\/\/pbs.twimg.com\/media\/(.+)\?format=([a-z]+)[\z]?&*/;
                if (t.src.match(regexp)) {
                    const p = t.parentElement.parentElement;
                    if (!p.dataset.has_panel) {
                        //'\u2B73'
                        const div = el('div', p, 'download-image-original', '');
                        div.dataset.src = t.src;
                        p.dataset.has_panel = true;
                        div.onclick = imageButtonClick;
                    }
                }
            }
            else if (e.target.classList == "css-1dbjc4n r-1p0dtai r-1loqt21 r-1d2f490 r-u8s1d r-zchlnj r-ipm5af") {
                if (t.parentElement.dataset.has_panel) return;
                if (videoEl(e.target) && !e.target.firstChild) {
                    parent = t.parentElement;
                    parent.dataset.download_panel_container = true;
                    let panel = el('div', parent, 'download-panel', '', panelClick);
                    //const d = el('div', panel, 'download-init-button');
                    const d = el2("div", "class:download-init-button;data-action:loadTweet;", panel);
                    el('span', d, 'download-icon', '\u2B73');
                    el('button', d, 'download', 'Download');
                    parent.dataset.has_panel = true;
                }
            }
        }, false);


        function loadSettings() {
            if (!isExtension()) {
                let gif_hosts = {};
                for (let p in GIFUploader) {
                    gif_hosts[p] = true;
                }
                let value = GM_getValue('gif_hosts', JSON.stringify(gif_hosts));
                value = JSON.parse(value);
                return Promise.resolve(value);
            }
            else {
                return new Promise((resolve, reject) => {
                    chrome.storage.local.get('gif_hosts', function (result) {
                        debug('loadSettings result  ', result);
                        resolve(result.gif_hosts);
                    });
                });
            }
        }

        const LinksPanel = {

            init: function () {

                this.elem = el2("div", "id:LinksPanel;class:media-downloader-links-panel d-panel", document.body);

                const inner = el2('div', "", this.elem);
                this.fieldset = el2('div', "class:fieldset", inner);

                const btn = el2("button", "text:Close", inner);
                btn.onclick = e => this.elem.style.display = "none";

                this.fieldset.onclick = function (e) {
                    if (e.target.tagName === "TEXTAREA") {
                        e.target.focus(); e.target.select();
                    }
                };

                return this.elem;
            },

            show: function (p) {
                this.elem = this.elem || this.init();
                const newch = [];
                this.texts = [];

                p.info.vars.forEach(vid => {
                    const li = el2("li");
                    let txt = vid.size_str + " / " + Mbps(vid.bitrate);
                    if (vid.is_original_size) txt = txt + " (original)";
                    const label = el2("label", `text:${txt}`, li);
                    const text = el2("textarea", "", li);
                    text.value = vid.url;
                    this.texts.push(text);
                    newch.push(li);
                });

                this.fieldset.replaceChildren(...newch);
                this.elem.style.display = "flex";
                this.texts.forEach(text => text.style.height = text.scrollHeight + "px");
                Event("Links Panel", "Open Links Panel " + p.info.media_type.toUpperCase());
            }

        }

        const SettingsPanel = {

            event: function (e) {
                const t = e.target.dataset.action;

                const actions = {
                    setDefault: () => {
                        this.textarea.value = script.default_filenames;
                        this.save(e);
                    },
                    close: () => {
                        //document.querySelector('.media-downloader-settings-panel').style.display = 'none';
                        this.elem.style.display = "none";
                        this.save(e);
                    },
                    switchTab: () => {
                        this.setTab(e.target.dataset.tab);
                    }
                }

                if (actions[t]) actions[t]();
            },

            init: function () {
                this.elem = el2("class:media-downloader-settings-panel d-panel;id:SettingsPanel", document.body);
                this.inner = el2("div", "class:inner", this.elem);
                this.tabbox = el2("div", "class:tab-box;", this.inner);

                const tabs = {
                    "gifs": "GIF Hosts & Converters",
                    "files": "File Names"
                }

                this.tabs = {};
                this.buttons = {};

                $(this.tabbox).append(
                    el2("div", "class:tab-buttons;"),
                    el2("div", "class:tab-panels;"),
                );

                addCSS(`
                #SettingsPanel .inner {
                    padding: 25px 25px 5px 25px;
                    width: 450px;
                }
                #SettingsPanel .tab-buttons {
                    border: 1px dashed white;
                    display: flex;
                    flex-direction: row;
                    height: 30px;
                    justify-content: space-evenly;
                    align-items: center;
                }
                #SettingsPanel .tab-button{
                    border-right: 1px dashed white;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    flex-wrap: nowrap;
                    word-wrap: break-word;
                    width: fit-content;
                    flex-grow: 1;
                }
                #SettingsPanel .tab-button.active{
                    font-weight: bold;
                }
                #SettingsPanel textarea {
                    margin: 10px 10px 0px 10px;
                }
                #SettingsPanel .tab-panels {
                    min-height: 317px;
                    min-width: 420px;
                    border: 1px dashed white;
                    margin-top: 10px;
                }
                #SettingsPanel .tab-panel {
                    display: flex;
                    flex-direction: column;
                }
                #SettingsPanel .close-btn {
                    margin: 10px 10px 10px 10px;
                }
                #SettingsPanel .explain {
                    display:flex;
                    flex-direction:column;
                    height: 180px;
                    overflow-y: auto;
                }
                ` );

                for (let tab in tabs) {
                    this.tabs[tab] = el2("div", `class:tab-panel;data-id:${tab}`, ".tab-panels");
                    this.buttons[tab] = el2("div", `class:tab-button;data-action:switchTab;data-tab:${tab};text:${tabs[tab]}`, ".tab-buttons");
                }


                $(this.tabs.files).append(
                    this.textarea = el2("textarea", "id:downloader-file-names"),
                    this.span = el2("span", "class:explain;"),
                    el2('button', 'class:default-btn;data-action:setDefault;text:Default;')
                );

                let str = `How to use:\n\n
                [(user)] = name of twitter user\n
                [(id)] = tweet id\n
                [(size)] = pixel dimension of the video\n
                [(giftitle)] = only for gifs - title of the gif as it appear on twitter\n
                [(date)] = date\n
                [(original)] = original file name\n\n
                You can also add a prefix behind the [ bracket: [username_(user)].\n
                E.g. username_Vitaminiser`;

                this.span.innerText = str;

                let ul = el2("ul", "class:gif-list", this.tabs.gifs);

                this.inputs = [];

                for (let o in GIFUploader) {
                    if (GIFUploader[o].url) {
                        const li = el2("li", "", ul);
                        const radio = el2("input", `type:checkbox;value:${o};name:${o}`, li);
                        radio.onchange = this.save.bind(this);
                        this.inputs.push(radio);
                        const label = el2("label", `for:${o};text:${o}`, li);
                    }
                }

                const btm = el2('div', 'class:bottom', this.inner);
                el2('button', 'text:Close;data-action:close;class:close-btn;', btm);
                this.setTab("gifs");
                //this.elem = panel;
                this.elem.onclick = this.event.bind(this);
                return this.elem;

            },

            show: function () {
                this.elem = this.elem || this.init();
                this.elem.style.display = "flex";
                const filenames = GM_getValue("filenames");
                this.textarea.value = (typeof filenames === "string") ? filenames : script.default_filenames;
                this.inputs.forEach((input) => {
                    input.checked = (SETTINGS && SETTINGS[input.value] == false) ? false : true;
                });
                Event('Settings Panel', 'Show Settings Panel');
            },

            setTab: function (name) {
                for (let tab in this.tabs) {
                    if (tab === name) {
                        this.tabs[tab].style.display = "flex";
                        this.buttons[tab].classList.add("active");
                    }
                    else {
                        this.tabs[tab].style.display = "none";
                        this.buttons[tab].classList.remove("active");
                    }
                }
            },

            save: function () {
                debug("SettingsPanel.save");
                const propnames = GIFUploader.propNames();
                SETTINGS = SETTINGS || {};

                this.inputs.forEach((input) => {
                    if (propnames[input.name]) {
                        SETTINGS[input.name] = Boolean(input.checked);
                    }
                });

                if (!isExtension()) {
                    GM_setValue('gif_hosts', JSON.stringify(SETTINGS));

                    const filenames = this.textarea.value.trim();
                    if (typeof (filenames) === "string")
                        GM_setValue("filenames", filenames);

                    debug('new_settings', SETTINGS);
                }
                else {
                    chrome.storage.local.set({ 'gif_hosts': SETTINGS }, function () {
                        chrome.storage.local.get('gif_hosts', res => {
                            console.log('Value is set to ', res);
                        })
                    });
                }

                $all('div.download-links button[class*="upload-"]').forEach((btn) =>
                    btn.style.display = (SETTINGS[btn.dataset.type] == false) ? 'none' : 'block');
            },
        }

        function addCSS(css) {
            const style = $id('download-panel-style');
            if (style.textContent.indexOf(css) < 0) {
                style.textContent = style.textContent + "\n" + css;
            }
        }

        function imageButtonClick(e) {
            e.preventDefault();
            e.stopPropagation();

            const t = e.target;

            function downloadImg(filename) {
                if (!filename) return;
                const url = 'https://pbs.twimg.com/media/' + filename;
                getBlob(url + ':orig').then(blob => {
                    createDownloadLink(blob, filename, 'image');
                    Event('Image', 'Download Image');
                });
            }

            if (e.target.dataset.filename) {
                debug('DOWNLOADING FROM PRESAVED');
                downloadImg(e.target.dataset.filename);
                return;
            }

            const imgmatch = /https:\/\/pbs\.twimg\.com\/media\/(.+)\?format=([a-z]+).?/;

            const res = t.dataset.src.match(imgmatch);
            debug('SRC MARTCH', res);
            if (res && res[1] && res[2]) {
                const id = res[1];
                const form = res[2];
                debug('ID & FORMAT FOUND', id, form);
                const filename = id + '.' + form;

                e.target.dataset.filename = filename;
                downloadImg(filename);
                return;
            }
        }

        async function fetchTweetInfo(tweetId) {
            const url = "https://api.twitter.com/1.1/statuses/show.json?include_profile_interstitial_type=1&include_blocking=1&" +
                "include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&skip_status=1" +
                "&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_reply_count=1" +
                "&tweet_mode=extended&trim_user=false&include_ext_media_color=true&id=" + tweetId;
            const headers = new Headers({
                'Content-Type': 'application/json',
                "Accept": '*/*',
                "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                "x-csrf-token": getCookie("ct0")
            });
            const json =
                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: headers
                }).then(response => response.json());
            debug('TWEET JSON', json);
            return json;
        }

        function createDownloadLink(url, fileName, type) {
            type = type || 'video';
            fileName = fileName || type;

            var a = $id('download-video') || el2("a", "id:download-video;target:_blank;", document.body);

            const types = {
                "image": {
                    ext: "",
                    default: "image"
                },
                "gif": {
                    ext: ".gif",
                    default: "converted"
                },
                "video": {
                    ext: ".mp4",
                    default: "video"
                }
            }

            fileName = (fileName.length < 1) ? types[type].default : fileName;
            a.setAttribute("download", fileName + types[type].ext);
            a.setAttribute('href', url);
            a.click();
            setTimeout(() => {
                URL.revokeObjectURL(url);
                console.log('Object URL ' + url + ' released.');
            }, 5000);
        }

        function panelClick(e) {
            e.preventDefault();
            const t = e.target;
            const panel = Panel(t);
            const action = t.dataset.action;

            if(panel[action]) {
                Promise.resolve(panel[action](t))
                .then(result => {
                    debug("***ACTION RESULT***", result);
                    panel.setStatus("done", true);
                }).catch(e => {
                    console.log("Error in Panel." + action, e);
                    panel.setStatus("error");
                });
            }
            else if( action  === "openLinksPanel") {
                LinksPanel.show(panel);
            }
            e.stopPropagation();
        }

        function Panel(panelelem) {
            const p = new PanelWrapper(panelelem);
            debug("***PANEL***", p, panelelem);
            return p;
        }

        function PanelWrapper(el) {
            this.elem = (!el.classList.contains('download-panel')) ? el.closest('div.download-panel') : el;
            if (!this.elem) return;
            this.article = this.elem.closest('article').querySelector('a[href*="/status/"]');
            this.video = this.elem.closest('div[data-testid="videoPlayer"]').querySelector('video');
            if (el.classList.contains("button")) {
                this.btn = el;
                this.size = this.btn.dataset.size_str;
                this.info = this.json();
                if (this.info && this.size) this.vid = this.info.vars.find(x => x.size_str === this.size);
            }
        }

        PanelWrapper.prototype = {

            data: function (key, value) {
                if (!value) return this.elem.dataset[key];
                if (typeof value === "object")
                    value = JSON.stringify(value);
                this.elem.dataset[key] = value;
                return this;
            },

            getVid: function (size) {
                const vars = this.json().vars;
                const video = vars.find(vid => vid.size_str === size);
                debug("video found", video);
                return video.url;
            },

            loadTweet: async function () {

                if (this.elem.children.length > 1) {
                    this.elem.dataset.collapsed = (this.elem.dataset.collapsed === 'true') ? false : true;
                    return;
                }
                const json = await fetchTweetInfo(this.getTweetId());

                let VIDEOS;
                let TWEET = json;
                let o = {};

                const isQuote = this.isQuote();

                if (isQuote && json.is_quote_status) {
                    debug('Quote', json.quoted_status.extended_entities);
                    VIDEOS = json.quoted_status.extended_entities.media[0].video_info.variants;
                    TWEET = json.quoted_status;

                }
                else if (!isQuote) {
                    debug('Not A Quote', json.extended_entities);
                    VIDEOS = json.extended_entities.media[0].video_info.variants;
                }

                this.tweet = TWEET;

                let MEDIA = TWEET.extended_entities.media[0];

                debug('MEDIA', MEDIA);

                if (MEDIA.type != 'video' && MEDIA.type != 'animated_gif') return 'Media is not a video';

                o.media_type = MEDIA.type.replace("animated_", "");


                o.original_size = MEDIA.original_info;
                o.original_str = o.original_size.width + 'x' + o.original_size.height;
                o.id = MEDIA.id_str;

                o.user = TWEET.user.screen_name;

                o.orig_vars = MEDIA.video_info.variants;
                o.vars = [];

                const regexp = /\/vid\/([\dx]+)\//;

                o.orig_vars.forEach((video, index) => {
                    const m = video.url.match(regexp);
                    if (video.content_type == "video/mp4") {
                        let v = {};
                        v.url = video.url.split('?')[0];
                        if (m && m[1]) {
                            v.size_str = m[1];
                            v.size = {};
                            v.size.w = parseInt(m[1].split('x')[0]);
                            v.size.h = parseInt(m[1].split('x')[1]);
                        }
                        else v.size_str = o.original_str;
                        v.is_original_size = false;
                        if (v.size_str == o.original_str) v.is_original_size = true;
                        v.bitrate = video.bitrate;
                        v.id = o.id;
                        v.user = o.user;
                        v.index = index;
                        o.vars.push(v);
                    }
                });

                debug('vars', o.vars);

                o.vars =
                    o.vars.sort((x, y) => {
                        if (x.bitrate < y.bitrate) return -1;
                        if (x.bitrate > y.bitrate) return 1;
                        return 0;
                    });
                o.vars[o.vars.length - 1].best_quality = true;

                delete o.orig_vars;
                o.date = json.created_at;
                this.o = o;
                this.info = o;
                this.data("json", o);
                this.data("media_type", o.media_type);
                this.data("tweet_id", o.id);
                this.data("user", o.user);
                this.data("date", json.created_at);
                this.createLinks(o);
                this.data("done", true);

                debug("***Panel JSON***", this, this.json());

                Event('Video&Gif Panel', 'Load Variants ' + this.o.media_type.toUpperCase());

                return this;

            },

            createLinks: function (o) {
                const div = el('div', this.elem, 'download-links');
                let gifable;
                const vids = o.vars;
                vids.forEach(vid => {
                    const label = (o.media_type === "video") ? vid.size_str + ' MP4' : 'as MP4';
                    let b = btn2('download-mp4', label, div, true);
                    b.dataset.action = "downloadVideo";
                    debug("button", b);
                    b.dataset.size_str = vid.size_str;
                });
                //find smallest for gifs
                o.vars.sort((a, b) => {
                    if (a.size.height < b.size.height) return -1;
                });
                //createGIFLinks(o.vars[0].url, div);
                gifable = o.vars[0].url;
                //}
                this.data("gifable", gifable);
                this.createGIFLinks(gifable, div);
            },

            createGIFLinks: function (url, div) {
                const buttons = [];
                const names = GIFUploader.propNames();
                for (let prop in names) {
                    buttons.push(GIFUploader[prop].title);
                }

                if (url && div) {

                    const ez = btn('download-ezgif', '', div, true);
                    ez.dataset.url = url;
                    ez.dataset.action = "getInstaGIF";
                    setLabel(ez, 'Convert to GIF', "With EzGif");

                    buttons.forEach(b => {
                        const el = btn('upload-' + b, '', div);
                        el.dataset.url = url;
                        el.dataset.type = b.toLowerCase();
                        el.dataset.action = "uploadGIF";
                        setLabel(el, b);
                        if (SETTINGS && SETTINGS[b.toLowerCase()] == false)
                            el.style.display = 'none';
                    });

                    const row = el2("div","class:row",div);

                    const links_btn = btn('download-links-button', '', row);
                    links_btn.dataset.action = "openLinksPanel";
                    setLabel(links_btn, "Links");

                    const settings_btn = btn2('download-settings-button', '⚙', row, '⚙ Settings');
                    settings_btn.onclick = e => SettingsPanel.show();

                    return div;
                }
            },

            downloadVideo: async function (btn) {
                if (this.status() === "pending") {
                    alert('This video is downloading.');
                    return;
                }
                this.setStatus("pending");
                const meter = btn.querySelector('progress');
                meter.value = 10;
                const url = this.getVid(btn.dataset.size_str);

                try {
                    const f = await fetch(url);
                    meter.value = 30;
                    let blob = await f.blob();
                    meter.value = 70;
                    blob = blob.slice(0, blob.size, "application/octet-stream");
                    const bloburl = URL.createObjectURL(blob);
                    meter.value = 100;
                    setStatus(btn, "done", true);
                    const m = getMatch(url, /https:\/\/video.twimg.com\/ext_tw_video\/\d+\/pu\/vid\/.+\/([^\/]+).mp4/);
                    const title = this.createTitle(btn, m);
                    createDownloadLink(bloburl, title, 'video');
                    Event('Download', 'Download MP4 ' + btn.dataset.size_str);
                }
                catch (e) {
                    setStatus(btn, "error");
                    console.log(e);
                }
            },

            uploadGIF: function (btn) {
                const type = btn.dataset.type;
                const url = this.data("gifable");
                // t.dataset.url, t);

                const obj = GIFUploader.get(type);
                //If Using Extension Version
                if (isExtension()) {
                    // Code running in a Chrome extension (content script, background page, etc.)
                    const selector = GIFUploader.get(type).selector;
                    const trigger = GIFUploader.get(type).trigger.toString();

                    let fn = 'sleepUntil( site.selector , site.trigger, media_url, 5000 )';
                    fn = fn.replace('site.selector', '\'' + selector + '\'');
                    fn = fn.replace('site.trigger', trigger);
                    fn = fn.replace('media_url', '\'' + url + '\'');

                    const sleep = sleepUntil.toString() + '\n\n' + fn;

                    debug(sleep);

                    const data = {
                        url: GIFUploader.get(type).url,
                        text: sleep
                    }
                    //fn.replace( )

                    // + '\n\n(' + initSleep.toString() + ')();'
                    chrome.runtime.sendMessage({ action: "uploadGIF", data: data });
                    Event('GIF', 'Upload GIF to ' + type);
                }
                else {
                    //Using GreaseMonkey Version

                    window.open(obj.url + '?media_url=' + url + '&type=' + type);

                }
            },

            getInstaGIF: async function (btn) {

                const t = btn;

               /*if (t.dataset.status === "pending") {
                    alert('This GIF is being processed.');
                    return;
                }*/

                //t.dataset.status = "pending";

                if( this.status() === "pending" ) {
                    alert('This GIF is being processed.');
                    return;
                }

                this.setStatus("pending");

                const meter = btn.querySelector('progress');
                meter.value = 10;

                const url = t.dataset.url;
                const upload_url = "https://ezgif.com/video-to-gif?url=" + url;

                // const video = videoEl(t);
                const video = this.video;
                let duration = parseFloat(video.duration);

                const fps = {
                    10: 25,
                    15: 20,
                    25: 12,
                    30: 10,
                    10: 7,
                    60: 5
                }

                let maxfps = 5;
                let categ = 60;

                duration = (duration <= 60) ? duration : 60;

                let a = Object.keys(fps);

                for (let i = 0; i < a.length; i++) {
                    if (duration < a[i]) {
                        maxfps = fps[a[i]];
                        categ = a[i];
                        break;
                    }
                }

                debug('duration', duration, "category", categ, "max fps", maxfps);
                const resp = await req({ url: upload_url });
                meter.value = 20;

                const filename = resp.finalUrl.replace("https://ezgif.com/video-to-gif/", "");
                const token = getMatch(resp.responseText, /\<input type\=\"hidden\" value\=\"([^<>]+)\" name\=\"token\">/);
                //https://ezgif.com/video-to-gif/ezgif-7-xxxxxxxxxxx.mp4
                const gifUrl = getMatch(resp.responseText, /<form class="form ajax-form" action="(https:[^<>]+.mp4)" method="POST">/) + "?ajax=true";

                const f = {
                    file: filename,
                    token: token,
                    start: 0,
                    end: duration,
                    size: 'original',
                    fps: maxfps,
                    method: 'ffmpeg'
                }

                meter.value = 50;
                if (gifUrl && token) {
                    const form = await req({ method: 'POST', url: gifUrl, data: f });
                    meter.value = 70;
                    const outfile = getMatch(form.responseText, /\<p class\=\"outfile\"\>\<img src\=\"([^<>]+\.gif)\"/);
                    //debug('outfile', outfile);
                    if (outfile) {
                        const outGif = await req({ method: "GET", url: "https:" + outfile, responseType: "blob", mode: "cors" });
                        meter.value = 100;
                        //debug("response", outGif);
                        const match = outGif.finalUrl.match(/https:\/\/.+.ezgif.com\/tmp\/([^\/]+).gif/);
                        let title = (match) ? match[1] : null;
                        title = this.createTitle(t, title);
                        title = (typeof title === "string") ? title : "file";
                        //debug("BLOB", outGif.response, outGif.createObjectURL);
                        const src = window.URL.createObjectURL(outGif.response);
                        createDownloadLink(src, title, 'gif');
                        setStatus(t, "done", true);
                        Event('Download', 'Download GIF Coverted with EzGIF');
                        return true;
                    }
                }
            },

            status: function() {
                if( !this.btn ) return;
                return this.btn.dataset.status;
            },

            setStatus: function(status, timeout) {
                if( !this.btn ) return;
                if (timeout) {
                    setTimeout(() => {
                        this.btn.dataset.status = status;
                        debug("status set to "+status);
                    }, 4000);
                }
                else {
                    this.btn.dataset.status = status;
                    debug("status set to "+status);
                    if (status === "error") {
                        setTimeout(() => {
                            delete this.btn.dataset.status;
                            debug("status set to "+status);
                        }, 5000);
                    }
                }
            },

            json: function () {
                if (typeof this.elem.dataset.json === "string")
                    return JSON.parse(this.elem.dataset.json);
                else return {};
            },

            isQuote: function () {
                return this.video.closest('div[role="link"]') ? true : false;
            },

            getVideoType: function () {
                const video = this.video;
                if (!video || video.tagName !== 'VIDEO')
                    return false;
                let type;
                if (video.src.includes('.mp4')) {
                    type = 'gif';
                }
                else if (video.src.includes('blob:')) {
                    type = 'video';
                }
                return type;
            },

            getVideoElement: function () {
                return this.elem.closest('div[data-testid="videoPlayer"]').querySelector('video');
            },

            getTweetId: function () {
                return getMatch(this.article.href, /\/status\/(\d+)/);
            },

            createTitle: function (button, original) {
                let title = original || "video";
                try {
                    const video = this.video; //videoEl(button);
                    let giflabel = '';

                    title = GM_getValue("filenames") || script.default_filenames;

                    if (giflabel) title = giflabel + " " + title;

                    const els = {
                        user: this.info.user,
                        id: this.info.id,
                        size: this.size,
                        giftitle: (this.info.media_type === 'gif') ? video.getAttribute('aria-label') : '',
                        original: original,
                        date: new Date(this.info.date).toLocaleDateString()
                    }

                    const REG = new RegExp(/\[([^\[\]]*)\(me\)\]/, "g");

                    for (let e in els) {
                        const reg = new RegExp(REG.source.replace("me", e), "g");
                        let str = els[e];
                        title = title.replaceAll(reg, (match, p1, p2) => {
                            debug({ match: match, p1: p1 });
                            let newstr = "";
                            if (typeof str === "string" && str.length > 0) {
                                newstr = p1 + str;
                            }
                            return newstr;
                        });

                    }
                    title = title.replaceAll(/[<>:"\/\\|?*]/g, "");
                    debug('createTitle', title, els);
                }
                catch (e) {
                    debug("Error creating file name", e);
                }

                return title;
            }

        }

        function Mbps(fileSizeInBytes) {
            let i = -1;
            const byteUnits = [
                " kbps",
                " Mbps",
                " Gbps",
                " Tbps",
                "Pbps",
                "Ebps",
                "Zbps",
                "Ybps"
            ];
            do {
                fileSizeInBytes = fileSizeInBytes / 1024;
                i++;
            } while (fileSizeInBytes > 1024);

            return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
        }

        function setStatus(btn, status, timeout) {
            if (timeout) {
                setTimeout(() => {
                    btn.dataset.status = status;
                }, 4000);
            }
            else {
                btn.dataset.status = status;
                if (status === "error") {
                    setTimeout(() => {
                        delete btn.dataset.status;
                    }, 5000);
                }
            }
        }

        // String base 64 to blob 
        function base64ToBlob(dataURI) {

            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ab], { type: mimeString });

            return blob;
        }


        function req(o) {
            const ext = isExtension();

            if (ext) {
                return new Promise((resolve, reject) => {
                    debug("Data for Fetch", o);
                    chrome.runtime.sendMessage({ action: "fetch", data: o },
                        res => {
                            debug("fetch response", res);
                            if (o.responseType === "blob") res.response = base64ToBlob(res.response);
                            resolve(res);
                        });
                });
            }
            else {
                return new Promise((resolve, reject) => {
                    o.onload = res => {
                        if (res && res.status === 200) {
                            resolve(res);
                        }
                        else
                            reject(res);
                    }
                    o.ontimeout = res => {
                        reject(res);
                    }
                    if (o.data) {
                        const formData = new FormData();
                        for (let i in o.data)
                            formData.append(i, o.data[i]);
                        o.data = formData;
                    }

                    GM_xmlhttpRequest(o);
                });
            }
        }

        function getMatch(str, regex) {
            const match = str.match(regex);
            if (match && match[1]) {
                return match[1];
            }
            return false;
        }


        function setLabel(btn, label, hover) {
            const lab = `"${label}"`;
            btn.style.setProperty("--label", lab);
            if (hover) btn.style.setProperty("--label-hover", `"${hover}"`);
            return btn;
        }

        async function getBlob(url, meter) {
            let blob = await fetch(url).then(r => r.blob());
            if (meter) meter.value = 50;
            blob = blob.slice(0, blob.size, "application/octet-stream");
            const bloburl = URL.createObjectURL(blob);
            return bloburl;
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function el(tag, parent, cls, text, click) {
            let e = document.createElement(tag);
            if (cls) e.setAttribute('class', cls);
            if (parent) parent.appendChild(e);
            if (text) e.innerText = text;
            if (click) e.addEventListener('click', click, false);
            return e;
        }

        function btn(cls, text, parent, meter) {
            var btn = document.createElement('button');
            if (cls) btn.setAttribute('class', cls);
            btn.classList.add("button");
            const label = el("div", btn, 'label');
            /*if (text) label.innerText = text;*/
            btn.dataset.label = text || "";
            btn.style.setProperty("--label", text || "");
            if (parent) parent.appendChild(btn);

            if (meter) {
                meter = el('progress', btn, 'progress-meter');
                meter.max = 100; meter.min = 0;
                meter.value = 0;
                btn.dataset.meter = true;
            }
            return btn;
        }

        function btn2(cls, text, parent, meter, hover) {

            var btn = document.createElement('button');
            if (cls) btn.setAttribute('class', cls);

            btn.classList.add("button");

            el("div", btn, 'label');
            if (text) btn.style.setProperty("--label", `"${text}"`);

            if (hover) btn.style.setProperty("--label-hover", `"${hover}"`);
            if (parent) parent.appendChild(btn);

            if (meter) {
                meter = el2('progress', 'class:progress-meter;min:0;max:100;value:0;', btn);
                btn.dataset.meter = true;
            }
            return btn;
        }

        function el2(tag, attrs, parent, click) {

            if (typeof tag === "string" && tag.indexOf(":") > -1) {
                const last = arguments[arguments.length - 1];
                Array.prototype.push.call(arguments, last);
                Array.prototype.unshift.call(arguments, 'div');

                console.log("args", arguments, tag, attrs, parent);
                tag = arguments[0];
                attrs = arguments[1];
                parent = arguments[2];
            }

            const elem = document.createElement(tag || "div");

            if (attrs) {
                attrs = attrs.split(";");
                attrs = attrs.filter(x => x.length > 1);
                const attrs_ = {};
                for (let a of attrs) {
                    a = a.split(":");
                    attrs_[a[0]] = a[1];
                }
                el2.setAttributes(elem, attrs_);
            }

            if (parent) {
                if (typeof parent === "string")
                    parent = document.querySelector(parent);
                parent.appendChild(elem);
            }
            return elem;
        }

        el2.setAttributes = function (el, attrs) {
            for (let a in attrs) {
                if (a === "text") el.textContent = attrs[a];
                else el.setAttribute(a, attrs[a]);
            }
        }

        function $id(id) {
            return document.getElementById(id);
        }

        function $all(sel, el) {
            el = el || document;
            return el.querySelectorAll(sel);
        }

        function $(elem) {
            return new ElementWrapper(elem);
        }

        function ElementWrapper(node) {
            this.elem = node;
        }

        ElementWrapper.prototype = {
            append: function (child) {
                for (let ch of arguments)
                    this.elem.appendChild(ch);
            }
        }

        function videoEl(elem) {
            return elem.closest('div[data-testid="videoPlayer"]').querySelector('video');
        }

        function Event(category, name) {
            if (window.chrome && chrome.runtime && chrome.runtime.id) {
                chrome.runtime.sendMessage({ action: "trackEvent", data: Array.from(arguments) });
            }
        }
    }

})();




