// ==UserScript==
// @name         Hide youtube #shorts
// @namespace    https://gist.github.com/danieloliveira117/8d129abcc5d744890c9bd55f1c122472
// @version      1.2
// @description  Remove youtube shorts from subscriptions (Only in grid view)
// @author       danieloliveira117
// @match        https://*.youtube.com/feed/subscriptions
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeShorts() {
        let count = 0;

        document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]').forEach(t => {
            if (t) {
                count++;
                const elem = t.closest('ytd-grid-video-renderer');

                if (elem) {
                    elem.remove();
                }
            }
        });

        if (count) {
            console.log('Removed ' + count + ' shorts');
        }
    }

    const observer = new MutationObserver(removeShorts);
    observer.observe(document.querySelector('#page-manager'), { childList:true, subtree:true });
})();