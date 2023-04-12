// ==UserScript==
// @name:zh-CN     华尔街日报付费墙移除、全文显示
// @description:zh-CN     用户在访问华尔街日报网站时移除付费墙，让您免费阅读文章。
// @name:zh-TW     華爾街日報付費牆移除、全文顯示
// @description:zh-TW     用戶在訪問華爾街日報網站時移除付費牆，讓您免費閱讀文章。
// @name            The Wall Street Journal Full Text Articles
// @name:it         The Wall Street Journal - Articoli con testo completo
// @namespace       iamfredchu
// @version         0.0.4
// @description     Fetch the full text of The Wall Street Journal articles from the AMP version
// @description:it  Mostra il testo completo degli articoli su The Wall Street Journal
// @author          Fred Chu
// @match           https://www.wsj.com/articles/*
// @match           https://cn.wsj.com/articles/*
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @inject-into     content
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @run-at       document-end
// @license         GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==

function fetch(params) {
    return new Promise(function(resolve, reject) {
        params.onload = resolve;
        params.onerror = reject;
        GM.xmlHttpRequest(params);
    });
}

(function() {
    'use strict';
    var $body = $(document.body);
    var paywalled = $body.find("#cx-snippet-promotion");

    if (!paywalled) {
        return;
    }

    fetch({
        method: 'GET',
        url: location.protocol + '//' + location.host + '/amp' + location.pathname,
    }).then(function(responseDetails) {
        var r = responseDetails.responseText;
        r = r.replace(/<script/gi, '<div').replace(/script>/gi, 'div>');
        r = r.replace(/\?width=/gi, '?__=').replace(/<amp-img/gi, '<img').replace(/<.amp-img>/, '').replace(/amp-iframe/gi, 'iframe');

        var data = $(r);

        setTimeout(function(){
            let hasSnippet = $body.find('.wsj-snippet-body');
            let $preview = $body.find('.wsj-snippet-body').length ?
                $body.find('.wsj-snippet-body') :
                $body.find('[aria-label*="Listen"]').next('section');

                $preview.replaceWith(data.find('section[subscriptions-section="content"]')
                                     .css('margin-bottom', '5rem')
                                     .css('color', 'var(--primary-text-color)')
                                     .css('font-family', 'var(--article-font-family)')
                                     .css('font-size', 'calc((17 / var(--article-base-font-size)) * var(--article-text-size-scale) * 1rem)')
                                     .css('font-weight', 'var(--article-font-weight)')
                                     .css('line-height', 'calc(27 / 17)')
                                    );

        }, 3000);

        $body.find('[aria-label*="Listen"]').next().next().remove();
        $body.find('[aria-label*="What"]').remove();
        $body.find('.snippet-promotion, #cx-what-to-read-next').remove();
        $body.find('.responsive-media').css('height', 'auto');
        $body.find('.responsive-media img').css({
            'height': 'auto',
            'width': 'auto',
            'max-width': '100%',
            'display': 'block',
            'position': 'relative',
        });
        $body.find('.media-object-video iframe').addClass('video-wrapper').wrap('<div class="video-container"></div>');
        $body.find('.imageCaption').each(function() {
            var element = $(this);
            var parent = element.parent();
            var wrapper = $('<div class="wsj-article-caption"></div>');
            wrapper.append(element.html()).appendTo(parent);
            element.remove();
        }).find('.imageCredit').addClass('wsj-article-credit').prepend(' ');
        $body.find('.media-object').addClass('media-object-image');
        $body.find('.media-object img').css('height', 'auto');
    }).catch(error => {
        console.error(arguments);
    });
})();