// ==UserScript==
// @name         [Working] krnl and linkvertise bypasser
// @namespace    http://tampermonkey.net/
// @version      9.2
// @description  just waits 15 seconds for krnl and works fine with the other stuff 2 (it waits no time for other stuff) :)
// @author       Discord: varram#6209
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.link-to.net/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com
// @exclude      *://linkvertise.com/search*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      https://linkvertise.com/assets/vendor/thinksuggest.html
// @exclude      https://linkvertise.com/assets/vendor/*
// @exclude      https://linkvertise.com/
// @grant         GM_xmlhttpRequest
// @grant         GM.xmlHttpRequest
// @icon         https://www.google.com/s2/favicons?domain=linkvertise.com
// ==/UserScript==

/* additional copyright/license info:
© All Rights Reserved

Linkvertise Bypass © 2023 by varram#6209
*/

(async function () {
    'use strict';

    var url = "https://main-bypass-server.tk/v8?" + window.location.href;
    var oReq = new XMLHttpRequest();

    async function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    if(getCookie("useManualfa") == 'yes') {
        setCookie("useManualfa", 'no', 30)
        let response, target_token, ut, linkvertise_link, link_id, key = getCookie("BPtoke");
        setCookie("BPtoke", "", 1)
        let GAI = false
        let mBP = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function () {
            this.addEventListener('load', async (data) => {
                if (data.currentTarget.responseText.includes('tokens')) {
                    response = JSON.parse(data.currentTarget.responseText);
                    target_token = response.data.tokens['TARGET'];
                    ut = localStorage.getItem("X-LINKVERTISE-UT");
                    linkvertise_link = location.pathname.replace(/\/[0-9]$/, "");
                    if(!getCookie('permssssss')) {
                        alert('You will be asked to allow the script to make requests to the linkvertise api (to bypass linkvertise links). Please hit "always allow" it or the script wont work')
                        GM_xmlhttpRequest({
                            method: "GET",
                            url: `https://publisher.linkvertise.com/api/v1/redirect/link/static${linkvertise_link}?X-Linkvertise-UT=${ut}`,
                            onload: function(response) {
                                setCookie('permssssss', "yes", 3365)
                                window.location.reload()
                            }
                        })
                    }
                    const uagt = await httpGet('https://main-bypass-server.tk/ua')

                    GM_xmlhttpRequest({method: 'GET',
                                       url: `https://publisher.linkvertise.com/api/v1/redirect/link/static${linkvertise_link}?X-Linkvertise-UT=${ut}`,
                                       headers: {
                                           "User-Agent": uagt
                                       },
                                       onload: function (response) {
                                           var json = JSON.parse(response.responseText)
                                           var target_type = json.data.link.target_type
                                           link_id = json.data.link.id;
                                           const json_body = { serial: btoa(JSON.stringify({ timestamp: new Date().getTime(), random: "6548307", link_id: link_id })), token: target_token };
                                           GM_xmlhttpRequest({
                                               method: 'POST',
                                               url: `https://publisher.linkvertise.com/api/v1/redirect/link${linkvertise_link}${target_type == "PASTE" ? '/paste': "/target"}?X-Linkvertise-UT=${ut}`,
                                               data: JSON.stringify(json_body),
                                               headers: { "Accept": 'application/json',
                                                         "Content-Type": 'application/json',
                                                         "User-Agent": uagt
                                                        },
                                               onload: function(response) {
                                                   var json = JSON.parse(response.responseText)
                                                   httpGet(`https://main-bypass-server.tk/manual?targetToken=${encodeURIComponent(target_token)}&linkId=${encodeURIComponent(link_id)}&lvLink=${encodeURIComponent(linkvertise_link)}&ut=${encodeURIComponent(ut)}&url=${encodeURIComponent(window.location.href)}&key=${encodeURIComponent(key)}&tType=${encodeURIComponent(target_type)}&Fts=${encodeURIComponent(btoa(JSON.stringify(json)))}`)
                                                       .then((w) => {
                                                       window.location.replace(JSON.parse(w).destination)
                                                   })
                                               }
                                           });
                                           GAI = true;
                                       }
                                      })
                }
            }); mBP.apply(this, arguments);
        };
        alert('Please solve the captcha (if it shows up)')
    } else {
        if (window.location.href.includes('linkvertise.com/48193/')) {
            console.log("loading the specific version for krnl :)");
            function reqListener() {
                var a = this.responseText;
                var b = JSON.parse(a);
                setTimeout(function () {
                    window.location.replace(b.destination)
                }, 17100);
            }
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", url);
            oReq.send();
        }
        else {

            function reqListener() {
                var a = this.responseText;
                var b = JSON.parse(a);

                if(b.destination.includes("https://errorr.ml/?")) {
                    var key = b.destination.substring(19)
                    // alert(key)
                    setCookie("useManualfa","yes",1);
                    setCookie("BPtoke", key, 1)
                    window.location.reload()
                }
                else {
                    window.location.replace(b.destination)
                }
            }
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", url);
            oReq.send();
        }
    }
})();