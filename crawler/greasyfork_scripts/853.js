// ==UserScript==
// @name        Instagram Video Player Controls
// @namespace   jvbf Userscripts
// @match       *://*.instagram.com/*
// @grant       none
// @version     1.2
// @author      jvbf
// @license     MIT
// @description Enable video control on Instagram Web
// ==/UserScript==

// evawrap by jvbf
// a wrapper for easier use of document.evaluate
class evawrap {
    static evaluate(root, path) {
        return document.evaluate(path, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    static evaluateAll = function (root, path) {
        var evl = document.evaluate(path, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var result = [];
        var node = evl.iterateNext();
        while (node) {
            result.push(node);
            node = evl.iterateNext();
        }
        return result;
    }
}

var rateLimit = false;

var polling = setInterval(() => {
    var main = document.querySelector("main[role='main']")
    if (main) {
        var observer = new MutationObserver(() => {
            if (!rateLimit) {
                evawrap.evaluateAll(document, '//video').forEach((el) => { el.setAttribute("controls", ""); })
                evawrap.evaluateAll(document, '//div[contains(@aria-label,"Control")]/../*[not(position()=1)]').forEach((el)=>{el.remove()})
                console.log("trigger")
                rateLimit = true
                setTimeout(() => { rateLimit = false }, 100)
            }
        })

        observer.observe(main, { childList: true });
        clearInterval(polling)
    }
}, 100)
