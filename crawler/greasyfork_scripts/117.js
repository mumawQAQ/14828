// ==UserScript==
// @name        Twitterᴾˡᵘˢ (View Twitter Origin Images)
// @name:zh-TW  Twitterᴾˡᵘˢ
// @name:zh-CN  Twitterᴾˡᵘˢ
// @name:ja     Twitterᴾˡᵘˢ
// @namespace   https://greasyfork.org
// @version     0.2.5
// @description         Enhance Twitter user experience. Load images in original quality, allow download video from tweets, remove tweets that contain specific hashtags or exceed the maximum limit.
// @description:zh-TW   增強Twitter使用者體驗。讀取原始畫質的圖片，允許從推文下載影片，移除包含特定Hashtag或超過最大限制的推文。
// @description:zh-CN   增强Twitter使用者体验。读取原始画质的图片，允许从推文下载影片，移除包含特定Hashtag或超过最大限制的推文。
// @description:ja      Twitterのユーザー体験を向上させます。元の品質で画像をロードし、ツイートから動画をダウンロードできるようにし、特定のハッシュタグを含むまたは最大限度を超えるツイートを非表示にします。
// @author      Pixmi
// @icon        https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @match       https://twitter.com/*
// @match       https://mobile.twitter.com/*
// @match       https://pbs.twimg.com/media/*
// @license     AGPL-3.0-or-later
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// ==/UserScript==
// Hide the post if the hashtag exceeds the set number. (If set to 0, it will not be enabled)
if (GM_getValue('MAX_HASHTAGS') == undefined) { GM_setValue('MAX_HASHTAGS', 20); }
// Hide the post if it contains the following hashtag. (Please include "#" and separate using commas)
if (GM_getValue('OUT_HASHTAGS') == undefined) { GM_setValue('OUT_HASHTAGS', '#tag1,#tag2'); }
// Change OUT_HASHTAGS type to string
if (typeof GM_getValue('OUT_HASHTAGS') == 'object') { GM_setValue('OUT_HASHTAGS', GM_getValue('OUT_HASHTAGS').join(',')); }
// Custom style.
GM_addStyle(`
.video-link-icon:hover {
    color: rgba(240, 181, 5, 1) !important;
}
.video-link-icon:hover::after {
    background: rgba(240, 181, 5, .1);
    border-radius: 50%;
    content: " ";
    width: 38.5px;
    height: 38.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.video-link-icon > svg {
    width: 1.2em;
    height: 1.2em
}`);

(function () {
    'use strict';
    let URL = window.location.href;
    // If browsing an image URL, change it to obtain the original quality.
    if (URL.match(/https:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9\-\_]+)(\?format=|.)(jpg|jpeg|png)/) && !URL.includes('?name=orig')) {
        if (URL.indexOf('?format=') > 0) {
            URL = URL.replace('?format=', '.');
        }
        if (URL.match(/\&name=(\w+)/)) {
            URL = URL.replace(/\&name=(\w+)/g, '?name=orig');
        } else {
            URL = `${URL}?name=orig`;
        }
        window.location.replace(URL);
    }
    // If browsing tweets, activate the observer.
    if (URL.includes('twitter.com')) {
        const rootmatch = document.evaluate('//div[@id="react-root"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const rootnode = rootmatch.singleNodeValue;
        const MAX_HASHTAGS = GM_getValue('MAX_HASHTAGS');
        const OUT_HASHTAGS = GM_getValue('OUT_HASHTAGS').split(',');
        if (rootnode) {
            let getVidoLink = (element) => {
                let react = Object.entries(element).find(el => el[0].startsWith("__reactFiber"))[1];
                if (!react) return false;
                let tweet = react.memoizedProps.children.filter(el => (el || {})._owner).map(el => el._owner.memoizedProps.focalTweet).filter(el => el)[0];
                if (!tweet) return false;
                let video = tweet.extended_entities.media[0].video_info.variants.filter(v => v.content_type == "video/mp4").sort((a, b) => b.bitrate - a.bitrate)[0].url.replace(new RegExp("\\?tag=.*"), "");
                if (!video) return false;
                return video;
            };

            let createPopupLink = (link, group) => {
                let button = document.createElement('a');
                button.classList.add('video-link-icon', 'css-18t94o4', 'css-1dbjc4n', 'r-1777fci', 'r-bt1l66', 'r-1ny4l3l', 'r-bztko3', 'r-lrvibr', 'r-1bwzh9t', 'r-115tad6', 'r-14j79pv');
                button.title = 'Open the video link or right-click to save the file.';
                button.target= '_blank';
                button.href = link;
                button.innerHTML = '<svg class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288ZM500,0H364a12,12,0,0,0-8.48,20.48l48.19,48.21L131.51,340.89a12,12,0,0,0,0,17l22.63,22.63a12,12,0,0,0,17,0l272.2-272.21,48.21,48.2A12,12,0,0,0,512,148V12A12,12,0,0,0,500,0Z"/></svg>';
                let colorItem = group.firstChild.querySelector('div[style*="color"]') || false;
                if (colorItem) button.style.color = colorItem.style.color;
                return button;
            };

            let callback = (mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    let target = mutation.target;
                    if (target.className.includes('css-1dbjc4n')) {
                        let hashtags = Array.from(target.querySelectorAll('.css-901oao > .r-18u37iz'), tag => tag.textContent);
                        let hideCheck = [];
                        if (hashtags.length && target.nodeName == 'ARTICLE') {
                            if (MAX_HASHTAGS > 0) hideCheck.push(hashtags.length >= MAX_HASHTAGS);
                            hideCheck.push(hashtags.some(tag => OUT_HASHTAGS.find(item => item == tag)));
                            if (hideCheck.some(item => item === true)) {
                                target.closest('div[data-testid="cellInnerDiv"] > div').style.display = 'none';
                                target.remove();
                                continue;
                            }
                        }
                        let images = target.getElementsByTagName('img');
                        if (!images.length) continue;
                        for (let i = 0; i < images.length; i++) {
                            let image = images[i];
                            // Image url change to original quality.
                            if (image.src.includes('https://pbs.twimg.com/media/') && !image.src.match(/name=orig/)) {
                                image.src = image.src.replace('?format=', '.').replace(/&name=(\w+)/g, '?name=orig');
                            } else
                            // Create download video button
                            if (image.src.includes('video_thumb') && URL.includes('/status/')) {
                                if ('link' in image.dataset) continue;
                                let group = target.closest('article').querySelector('div[id^="id"][role="group"]');
                                if (!group || group.lastChild.nodeName == 'A') continue;
                                let link = getVidoLink(target.closest('section[role="region"]').parentElement);
                                if (!link) continue;
                                image.dataset.link = link;
                                group.append(createPopupLink(link, group));
                            }
                        }
                    }
                }
            };
            const observeConfig = {
                attributes: true,
                childList: true,
                subtree: true
            };
            const observer = new MutationObserver(callback);

            observer.observe(document.body, observeConfig);
        }
    }
})();