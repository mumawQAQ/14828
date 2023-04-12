// ==UserScript==
// @name         YouTube - Non-Rounded Design
// @version      3.6.3
// @description  This script disables YouTube's new rounded corners (reverts back to the previous layout before 2022 with extra stuff included.)
// @author       Magma_Craft
// @license MIT
// @match        https://www.youtube.com/*
// @namespace    https://greasyfork.org/en/users/933798
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

// Attributes to remove from <html>
const ATTRS = [
    "darker-dark-theme",
    "darker-dark-theme-deprecate"
];

// Regular config keys.
const CONFIGS = {
    BUTTON_REWORK: false
}

// Experiment flags.
const EXPFLAGS = {
    enable_header_channel_handler_ui: false,
    kevlar_unavailable_video_error_ui_client: false,
    kevlar_refresh_on_theme_change: false,
    kevlar_watch_cinematics: false,
    kevlar_watch_metadata_refresh: false,
    kevlar_watch_modern_metapanel: false,
    web_amsterdam_playlists: false,
    web_animated_like: false,
    web_button_rework: false,
    web_button_rework_with_live: false,
    web_darker_dark_theme: false,
    web_guide_ui_refresh: false,
    web_modern_ads: false,
    web_modern_buttons: false,
    web_modern_chips: false,
    web_modern_dialogs: false,
    web_modern_playlists: false,
    web_rounded_containers: false,
    web_rounded_thumbnails: false,
    web_searchbar_style: "default",
    web_segmented_like_dislike_button: false,
    web_sheets_ui_refresh: false,
    web_snackbar_ui_refresh: false
}

// Player flags
// !!! USE STRINGS FOR VALUES !!!
// For example: "true" instead of true
const PLYRFLAGS = {
    web_rounded_containers: "false",
    web_rounded_thumbnails: "false"
}

class YTP {
    static observer = new MutationObserver(this.onNewScript);

    static _config = {};

    static isObject(item) {
        return (item && typeof item === "object" && !Array.isArray(item));
    }

    static mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }

        return this.mergeDeep(target, ...sources);
    }


    static onNewScript(mutations) {
        for (var mut of mutations) {
            for (var node of mut.addedNodes) {
                YTP.bruteforce();
            }
        }
    }

    static start() {
        this.observer.observe(document, {childList: true, subtree: true});
    }

    static stop() {
        this.observer.disconnect();
    }

    static bruteforce() {
        if (!window.yt) return;
        if (!window.yt.config_) return;

        this.mergeDeep(window.yt.config_, this._config);
    }

    static setCfg(name, value) {
        this._config[name] = value;
    }

    static setCfgMulti(configs) {
        this.mergeDeep(this._config, configs);
    }

    static setExp(name, value) {
        if (!("EXPERIMENT_FLAGS" in this._config)) this._config.EXPERIMENT_FLAGS = {};

        this._config.EXPERIMENT_FLAGS[name] = value;
    }

    static setExpMulti(exps) {
        if (!("EXPERIMENT_FLAGS" in this._config)) this._config.EXPERIMENT_FLAGS = {};

        this.mergeDeep(this._config.EXPERIMENT_FLAGS, exps);
    }

    static decodePlyrFlags(flags) {
        var obj = {},
            dflags = flags.split("&");

        for (var i = 0; i < dflags.length; i++) {
            var dflag = dflags[i].split("=");
            obj[dflag[0]] = dflag[1];
        }

        return obj;
    }

    static encodePlyrFlags(flags) {
        var keys = Object.keys(flags),
            response = "";

        for (var i = 0; i < keys.length; i++) {
            if (i > 0) {
                response += "&";
            }
            response += keys[i] + "=" + flags[keys[i]];
        }

        return response;
    }

    static setPlyrFlags(flags) {
        if (!window.yt) return;
        if (!window.yt.config_) return;
        if (!window.yt.config_.WEB_PLAYER_CONTEXT_CONFIGS) return;
        var conCfgs = window.yt.config_.WEB_PLAYER_CONTEXT_CONFIGS;
        if (!("WEB_PLAYER_CONTEXT_CONFIGS" in this._config)) this._config.WEB_PLAYER_CONTEXT_CONFIGS = {};

        for (var cfg in conCfgs) {
            var dflags = this.decodePlyrFlags(conCfgs[cfg].serializedExperimentFlags);
            this.mergeDeep(dflags, flags);
            this._config.WEB_PLAYER_CONTEXT_CONFIGS[cfg] = {
                serializedExperimentFlags: this.encodePlyrFlags(dflags)
            }
        }
    }
}

window.addEventListener("yt-page-data-updated", function tmp() {
    YTP.stop();
    for (i = 0; i < ATTRS.length; i++) {
        document.getElementsByTagName("html")[0].removeAttribute(ATTRS[i]);
    }
    window.removeEventListener("yt-page-date-updated", tmp);
});

YTP.start();

YTP.setCfgMulti(CONFIGS);
YTP.setExpMulti(EXPFLAGS);
YTP.setPlyrFlags(PLYRFLAGS);

function $(q) {
    return document.querySelector(q);
}

// Re-add 'Explore' tab in sidebar (it also replaces the 'Shorts' tab)
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

    function restoreTrending() {

        var trendingData = {
            "navigationEndpoint": {
                "clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
                "commandMetadata": {
                    "webCommandMetadata": {
                        "url": "/feed/explore",
                        "webPageType": "WEB_PAGE_TYPE_BROWSE",
                        "rootVe": 6827,
                        "apiUrl": "/youtubei/v1/browse"
                    }
                },
                "browseEndpoint": {
                    "browseId": "FEtrending"
                }
            },
            "icon": {
                "iconType": "EXPLORE"
            },
            "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
            "formattedTitle": {
                "simpleText": "Explore"
            },
            "accessibility": {
                "accessibilityData": {
                    "label": "Explore"
                }
            },
            "isPrimary": true
        };

        var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
        document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = trendingData;
 
        var miniguidetemplate = `<ytd-mini-guide-entry-renderer class="style-scope ytd-mini-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
        document.querySelector(`#items > ytd-mini-guide-entry-renderer:nth-child(2)`).data = trendingData;
 
    }
 
 
waitForElm("#items.ytd-guide-section-renderer").then((elm) => {
    restoreTrending();
});
 
waitForElm("#items.ytd-mini-guide-section-renderer").then((elm) => {
    restoreTrending();
});

// Redirect shorts to watch page (Anti-Shorts script is required for faster experience)
var oldHref = document.location.href;
if (window.location.href.indexOf('youtube.com/shorts') > -1) {
    window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
}
window.onload = function() {
    var bodyList = document.querySelector("body")
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;
                console.log('location changed!');
                if (window.location.href.indexOf('youtube.com/shorts') > -1) {
                    window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
                }
            }
        });
    });
    var config = {
        childList: true,
        subtree: true
    };
    observer.observe(bodyList, config);
};

// Fix for like and dislike ratio (Return YouTube Dislike is required)
function $(q) {
    return document.querySelector(q);
}
 
addEventListener('yt-page-data-updated', function() {
    if(!location.pathname.startsWith('/watch')) return;
    
    var lds = $('ytd-video-primary-info-renderer div#top-level-buttons-computed');
    var like = $('ytd-video-primary-info-renderer div#segmented-like-button > ytd-toggle-button-renderer');
    var share = $('ytd-video-primary-info-renderer div#top-level-buttons-computed > ytd-segmented-like-dislike-button-renderer + ytd-button-renderer');
    
    lds.insertBefore(like, share);
    
    like.setAttribute('class', like.getAttribute('class').replace('ytd-segmented-like-dislike-button-renderer', 'ytd-menu-renderer force-icon-button'));
    like.removeAttribute('is-paper-button-with-icon');
    like.removeAttribute('is-paper-button');
    like.setAttribute('style-action-button', '');
    like.setAttribute('is-icon-button', '');
    like.querySelector('a').insertBefore(like.querySelector('yt-formatted-string'), like.querySelector('tp-yt-paper-tooltip'));
    try { like.querySelector('paper-ripple').remove(); } catch(e) {}
    var paper = like.querySelector('tp-yt-paper-button');
    paper.removeAttribute('style-target');
    paper.removeAttribute('animated');
    paper.removeAttribute('elevation');
    like.querySelector('a').insertBefore(paper.querySelector('yt-icon'), like.querySelector('yt-formatted-string'));
    paper.outerHTML = paper.outerHTML.replace('<tp-yt-paper-button ', '<yt-icon-button ').replace('</tp-yt-paper-button>', '</yt-icon-button>');
    paper = like.querySelector('yt-icon-button');
    paper.querySelector('button#button').appendChild(like.querySelector('yt-icon'));
    
    var dislike = $('ytd-video-primary-info-renderer div#segmented-dislike-button > ytd-toggle-button-renderer');
    lds.insertBefore(dislike, share);
    $('ytd-video-primary-info-renderer ytd-segmented-like-dislike-button-renderer').remove();
    dislike.setAttribute('class', dislike.getAttribute('class').replace('ytd-segmented-like-dislike-button-renderer', 'ytd-menu-renderer force-icon-button'));
    dislike.removeAttribute('has-no-text');
    dislike.setAttribute('style-action-button', '');
    var dlabel = document.createElement('yt-formatted-stringx');
    dlabel.setAttribute('id', 'text');
    if(dislike.getAttribute('class').includes('style-default-active'))
        dlabel.setAttribute('class', dlabel.getAttribute('class').replace('style-default', 'style-default-active'));
    dislike.querySelector('a').insertBefore(dlabel, dislike.querySelector('tp-yt-paper-tooltip'));
    
    $('ytd-video-primary-info-renderer').removeAttribute('flex-menu-enabled');
});

// Restore old comment replies UI
var observingComments = false;
var hl;

const cfconfig = {
    unicodeEmojis: false
};

const cfi18n = {
    en: {
        viewSingular: "View reply",
        viewMulti: "View %s replies",
        viewSingularOwner: "View reply from %s",
        viewMultiOwner: "View %s replies from %s and others",
        hideSingular: "Hide reply",
        hideMulti: "Hide replies",
        replyCountIsolator: /( REPLIES)|( REPLY)/
    }
}

/**
 * Get a string from the localization strings.
 *
 * @param {string}   string  Name of string to get
 * @param {string}   hl      Language to use.
 * @param {...array} args    Strings.
 * @returns {string}
 */
 function getString(string, hl = "en", ...args) {
    if (!string) return;
    var str;
    if (cfi18n[hl]) {
        if (cfi18n[hl][string]) {
            str = cfi18n[hl][string];
        } else if (cfi18n.en[string]) {
            str = cfi18n.en[string];
        } else {
            return;
        }
    } else {
        if (cfi18n.en[string]) str = cfi18n.en[string];
    }

    for (var i = 0; i < args.length; i++) {
        str = str.replace(/%s/, args[i]);
    }

    return str;
}

/**
 * Wait for a selector to exist
 *
 * @param {string}       selector  CSS Selector
 * @param {HTMLElement}  base      Element to search inside
 * @returns {Node}
 */
async function waitForElm(selector, base = document) {
    if (!selector) return null;
    if (!base.querySelector) return null;
    while (base.querySelector(selector) == null) {
        await new Promise(r => requestAnimationFrame(r));
    };
    return base.querySelector(selector);
};

/**
 * Is a value in an array?
 *
 * @param {*}     needle    Value to search
 * @param {Array} haystack  Array to search
 * @returns {boolean}
 */
 function inArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) return true;
    }
    return false;
}

/**
 * Get text of an InnerTube string.
 *
 * @param {object} object  String container.
 */
function getSimpleString(object) {
    if (object.simpleText) return object.simpleText;

    var str = "";
    for (var i = 0; i < object.runs.length; i++) {
        str += object.runs[i].text;
    }
    return str;
}

/**
 * Format a commentRenderer.
 *
 * @param {object} comment  commentRenderer from InnerTube.
 */
function formatComment(comment) {
    if (cfconfig.unicodeEmojis) {
        var runs;
        try {
            runs = comment.contentText.runs
            for (var i = 0; i < runs.length; i++) {
                delete runs[i].emoji;
                delete runs[i].loggingDirectives;
            }
        } catch(err) {}
    }

    return comment;
}

/**
 * Format a commentThreadRenderer.
 *
 * @param {object} thread  commentThreadRenderer from InnerTube.
 */
async function formatCommentThread(thread) {
    if (thread.comment.commentRenderer) {
        thread.comment.commentRenderer = formatComment(thread.comment.commentRenderer);
    }

    var replies;
    try {
        replies = thread.replies.commentRepliesRenderer;
        if (replies.viewRepliesIcon) {
            replies.viewReplies.buttonRenderer.icon = replies.viewRepliesIcon.buttonRenderer.icon;
            delete replies.viewRepliesIcon;
        }

        if (replies.hideRepliesIcon) {
            replies.hideReplies.buttonRenderer.icon = replies.hideRepliesIcon.buttonRenderer.icon;
            delete replies.hideRepliesIcon;
        }

        var creatorName;
        try {
            creatorName = replies.viewRepliesCreatorThumbnail.accessibility.accessibilityData.label;
            delete replies.viewRepliesCreatorThumbnail;
        } catch(err) {}

        var replyCount = getSimpleString(replies.viewReplies.buttonRenderer.text);
        replyCount = +replyCount.replace(getString("replyCountIsolator", hl), "");

        var viewMultiString = creatorName ? "viewMultiOwner" : "viewMulti";
        var viewSingleString = creatorName ? "viewSingularOwner" : "viewSingular";

        replies.viewReplies.buttonRenderer.text = {
            runs: [
                {
                    text: (replyCount > 1) ? getString(viewMultiString, hl, replyCount, creatorName) : getString(viewSingleString, hl, creatorName)
                }
            ]
        }

        replies.hideReplies.buttonRenderer.text = {
            runs: [
                {
                    text: (replyCount > 1) ? getString("hideMulti", hl) :  getString("hideSingular", hl)
                }
            ]
        };
    } catch(err) {}

    return thread;
}

/**
 * Force Polymer to refresh data of an element.
 *
 * @param {Node} element  Element to refresh data of.
 */
function refreshData(element) {
    var clone = element.cloneNode();
    clone.data = element.data;
    // Let the script know we left our mark
    // in a way that doesn't rely on classes
    // because Polymer likes to cast comments
    // into the void for later reuse
    clone.data.fixedByCF = true;
    for (var i in element.properties) {
        clone[i] = element[i];
    }
    element.insertAdjacentElement("afterend", clone);
    element.remove();
}

var commentObserver = new MutationObserver((list) => {
    list.forEach(async (mutation) => {
        if (mutation.addedNodes) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var elm = mutation.addedNodes[i];
                if (elm.classList && elm.data && !elm.data.fixedByCF) {
                    if (elm.tagName == "YTD-COMMENT-THREAD-RENDERER") {
                        elm.data = await formatCommentThread(elm.data);
                        refreshData(elm);
                    } else if (elm.tagName == "YTD-COMMENT-RENDERER") {
                        if (!elm.classList.contains("ytd-comment-thread-renderer")) {
                            elm.data = formatComment(elm.data);
                            refreshData(elm);
                        }
                    }
                }
            }
        }
    });
});

document.addEventListener("yt-page-data-updated", async (e) => {
    hl = yt.config_.HL;
    commentObserver.observe(document.querySelector("ytd-app"),  { childList: true, subtree: true });
});

// CSS adjustments and UI fixes (both userstyles are required)
(function() {
ApplyCSS();
function ApplyCSS() {
var styles = document.createElement("style");
styles.innerHTML=`
    /* Disable rounded corners on search box + revert old channel UI */
    #container.ytd-searchbox {
    background-color: var(--ytd-searchbox-background) !important;
    border-radius: 2px 0 0 2px !important;
    box-shadow: inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color) !important;
    color: var(--ytd-searchbox-text-color) !important;
    padding: 2px 6px !important;
    }

    ytd-searchbox[desktop-searchbar-style="rounded_corner_dark_btn"] #searchbox-button.ytd-searchbox {
    display: none !important;
    }

    ytd-searchbox[desktop-searchbar-style="rounded_corner_light_btn"] #searchbox-button.ytd-searchbox {
    display: none !important;
    }

    #search[has-focus] #search-input {
    margin-left: 32px !important;
    }

    #search-icon-legacy.ytd-searchbox {
    display: block !important;
    border-radius: 0px 2px 2px 0px !important;
    }

    .sbsb_a {
    border-radius: 2px !important;
    }

    .sbsb_c {
    padding-left: 10px !important;
    }

    div.sbqs_c::before {
    margin-right: 10px !important;
    }

    ytd-searchbox[has-focus] #search-icon.ytd-searchbox {
    padding-left: 10px !important;
    padding-right: 10px !important;
    }

    #channel-container.ytd-c4-tabbed-header-renderer {
    height: 100px !important;
    }
    
    #contentContainer.tp-yt-app-header-layout {
    padding-top: 353px !important;
    }
    
    #channel-header-container.ytd-c4-tabbed-header-renderer {
    padding-top: 0 !important;
    }
    
    ytd-c4-tabbed-header-renderer[use-modern-style] #channel-name.ytd-c4-tabbed-header-renderer {
    margin-bottom: 0px !important;
    }

    ytd-c4-tabbed-header-renderer[use-modern-style] #avatar-editor.ytd-c4-tabbed-header-renderer {
    --ytd-channel-avatar-editor-size: 80px !important;
    }
    
    #avatar.ytd-c4-tabbed-header-renderer {
    width: 80px !important;
    height: 80px !important;
    margin: 0 24px 0 0 !important;
    flex: none !important;
    border-radius: 50% !important;
    background-color: transparent !important;
    overflow: hidden !important;
    }
    
    #wrapper > .ytd-channel-tagline-renderer.style-scope,#videos-count {
    display: none !important;
    }

    /* Disable rounded corners on watch and other pages (including inform news) */
    #cinematics.ytd-watch-flexy {
    display: none !important;
    }

    div#clarify-box.attached-message.style-scope.ytd-watch-flexy {
    margin-top: 0px !important;
    }

    ytd-clarification-renderer.style-scope.ytd-item-section-renderer {
    border: 1px solid !important;
    border-color: #0000001a !important;
    border-radius: 0px !important;
    }

    ytd-clarification-renderer.style-scope.ytd-watch-flexy {
    border: 1px solid !important;
    border-color: #0000001a !important;
    border-radius: 0px !important;
    }

    yt-formatted-string.description.style-scope.ytd-clarification-renderer {
    font-size: 1.4rem !important;
    }

    div.content-title.style-scope.ytd-clarification-renderer {
    padding-bottom: 4px !important;
    }

    ytd-rich-metadata-renderer[rounded] {
    border-radius: 0px !important;
    }

    ytd-live-chat-frame[rounded-container] {
    border-radius: 0px !important;
    }

    ytd-live-chat-frame[rounded-container] #show-hide-button.ytd-live-chat-frame ytd-toggle-button-renderer.ytd-live-chat-frame {
    border-radius: 0px !important;
    }

    iframe.style-scope.ytd-live-chat-frame {
    border-radius: 0px !important;
    }

    ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer {
    border-radius: 0px !important;
    }

    ytd-playlist-panel-renderer[modern-panels]:not([hide-header-text]) .title.ytd-playlist-panel-renderer {
    font-family: Roboto !important;
    font-size: 1.4rem !important;
    line-height: 2rem !important;
    font-weight: 500 !important;
    }

    ytd-tvfilm-offer-module-renderer[modern-panels] {
    border-radius: 0px !important;
    }

    ytd-tvfilm-offer-module-renderer[modern-panels] #header.ytd-tvfilm-offer-module-renderer {
    border-radius: 0px !important;
    font-family: Roboto !important;
    font-size: 1.6rem !important;
    line-height: 2.2rem !important;
    font-weight: 400 !important;
    }

    ytd-donation-shelf-renderer.style-scope.ytd-watch-flexy {
    border-radius: 0px !important;
    }

    ytd-donation-shelf-renderer[modern-panels] #header-text.ytd-donation-shelf-renderer {
    font-family: Roboto !important;
    font-size: 1.6rem !important;
    font-weight: 500 !important;
    }

    ytd-channel-video-player-renderer[rounded] #player.ytd-channel-video-player-renderer {
    border-radius: 0px !important;
    }

    ytd-universal-watch-card-renderer[rounded] #header.ytd-universal-watch-card-renderer {
    border-radius: 0px !important;
    }

    ytd-universal-watch-card-renderer[rounded] #hero.ytd-universal-watch-card-renderer {
    border-radius: 0px !important;
    }

    /* Disable rounded corners under the player */
    .ytp-ad-player-overlay-flyout-cta-rounded {
    border-radius: 2px !important;
    }

    .ytp-ad-overlay-container.ytp-rounded-overlay-ad .ytp-ad-overlay-image img, .ytp-ad-overlay-container.ytp-rounded-overlay-ad .ytp-ad-text-overlay, .ytp-ad-overlay-container.ytp-rounded-overlay-ad .ytp-ad-enhanced-overlay {
    border-radius: 0px !important;
    }

    .ytp-flyout-cta .ytp-flyout-cta-action-button.ytp-flyout-cta-action-button-rounded {
    border-radius: 2px !important;
    text-transform: uppercase !important;
    }

    .ytp-ad-action-interstitial-action-button.ytp-ad-action-interstitial-action-button-rounded {
    border-radius: 2px !important;
    text-transform: uppercase !important;
    }
 
    div#ytp-id-18.ytp-popup,ytp-settings-menu.ytp-rounded-menu {
    border-radius: 2px !important;
    }
 
    div.branding-context-container-inner.ytp-rounded-branding-context {
    border-radius: 2px !important;
    }
 
    div.iv-card.iv-card-video.ytp-rounded-info {
    border-radius: 0px !important;
    }
 
    div.iv-card.iv-card-playlist.ytp-rounded-info {
    border-radius: 0px !important;
    }
 
    div.iv-card.iv-card-channel.ytp-rounded-info {
    border-radius: 0px !important;
    }
 
    div.iv-card.ytp-rounded-info {
    border-radius: 0px !important;
    }
 
    .ytp-tooltip.ytp-rounded-tooltip.ytp-text-detail.ytp-preview, .ytp-tooltip.ytp-rounded-tooltip.ytp-text-detail.ytp-preview .ytp-tooltip-bg {
    border-radius: 0px !important;
    }
 
    .ytp-ce-video.ytp-ce-medium-round, .ytp-ce-playlist.ytp-ce-medium-round, .ytp-ce-medium-round .ytp-ce-expanding-overlay-background {
    border-radius: 0px !important;
    }
 
    div.ytp-autonav-endscreen-upnext-thumbnail.rounded-thumbnail {
    border-radius: 0px !important;
    }
 
    button.ytp-autonav-endscreen-upnext-button.ytp-autonav-endscreen-upnext-cancel-button.ytp-autonav-endscreen-upnext-button-rounded {
    border-radius: 2px !important;
    }
 
    a.ytp-autonav-endscreen-upnext-button.ytp-autonav-endscreen-upnext-play-button.ytp-autonav-endscreen-upnext-button-rounded {
    border-radius: 2px !important;
    }
 
    .ytp-videowall-still-image {
    border-radius: 0px !important;
    }
 
    div.ytp-sb-subscribe.ytp-sb-rounded, .ytp-sb-unsubscribe.ytp-sb-rounded {
    border-radius: 2px !important;
    }

    /* Subscribe button fix + including notification bell and other fixes */
    tp-yt-paper-button.style-scope.ytd-subscribe-button-renderer {
    display: flex !important;
    }

    .yt-spec-button-shape-next--size-m {
    background-color: transparent !important;
    padding-left: 14px !important;
    padding-right: 2px !important;
    }

    .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    background-color: transparent !important;
    }

    div.cbox.yt-spec-button-shape-next--button-text-content {
    display: none !important;
    }

    div.yt-spec-button-shape-next__secondary-icon {
    display: none !important;
    }

    #guide-section-title.ytd-guide-section-renderer {
    color: var(--yt-spec-text-secondary) !important;
    padding: 8px 24px !important;
    font-size: var(--ytd-tab-system-font-size) !important;
    font-weight: var(--ytd-tab-system-font-weight) !important;
    letter-spacing: var(--ytd-tab-system-letter-spacing) !important;
    text-transform: var(--ytd-tab-system-text-transform) !important;
    }

    /* Remove Shorts, Trending, Podcasts and Shopping in the guide menus */
    #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="Shorts"] {
    display: none !important;
    }

    #endpoint.yt-simple-endpoint.ytd-mini-guide-entry-renderer.style-scope[title="Shorts"] {
    display: none !important;
    }

    #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="Trending"] {
    display: none !important;
    }

    #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="Podcasts"] {
    display: none !important;
    }

    ytd-guide-entry-renderer > a[href*="/channel/UCkYQyvc_i9hXEo4xic9Hh2g"] {
    display: none !important;
    }`
document.head.appendChild(styles);
}
})();