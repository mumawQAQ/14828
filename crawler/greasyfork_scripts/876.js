// ==UserScript==
// @name         Telegram Photo Protection Remover
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Removes photo protection in Telegram
// @author       GooseOb
// @match        https://web.telegram.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    const v = window.location.pathname[1];
    if (v === 'k') {
        document.addEventListener('contextmenu', e => {
            const img = e.target.querySelector('img');
            if (img) img.style.pointerEvents = 'auto';
        }, {capture: true});
    } else if (v === 'z') {
        const PROTECTION_CLASS = 'is-protected';
        setInterval(() => {
            const mediaViewer = document.getElementById('MediaViewer');
            if (mediaViewer) {
                mediaViewer.querySelector('.protector')?.remove();
                Array.from(mediaViewer.getElementsByClassName(PROTECTION_CLASS)).forEach(el => {
                    el.classList.remove(PROTECTION_CLASS);
                });
            };
        }, 200)
    };
})();