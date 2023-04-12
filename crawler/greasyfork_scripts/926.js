// ==UserScript==
// @name         Youtube Ad Cleaner(Include Non-Skippable Ads- works)
// @namespace    http://tampermonkey.net/
// @version      1.50.3
// @description  (Be Tested Daily) Bypass all youtube ads (skippable and non-skippable Ads) plus download youtube video on the fly
// @ Please add youtube.com to the whitelist if you are using any adblocker to avoid reload loops
// @author       BjDanny
// @run-at          document-start
// @match        *://*.youtube.com/*
// ==/UserScript==
'use strict';
var currentTime, duration, yt;


function myWindow()
{
    let y = window.location.href.replace("youtube", "youtube5s");
    let myWin = window.open(y,"Download Youtube Video","directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800, height=900");
    myWin.onload = setInterval(clearPage,1000);
}

function clearPage()
{
    try{
        document.querySelectorAll(".col-xs-12")[8].remove();
        document.querySelector("footer").remove();
        document.querySelector("ul").remove();
        document.querySelector(".navbar-header").remove();
    }
    catch(e)
    {
        return;
    }
}


function createButton()
{
    let css = document.createElement('style');
    css.innerHTML = `
            .myButton {
            font-size: 14px;
            font-weight: bold;
            color: white;
            text-align: center;
            vertical-align: middle;
            border: 1px solid transparent;
            border-radius: 2px;
            background-color: #4CAF50;
            height:70%;
            weight:100%;
            padding: 2px 14px;
            margin: 8px;
        `;
    document.head.appendChild(css);
    let btn = document.createElement("BUTTON");
    btn.className = "myButton";
    btn.id = "mybutton";
    btn.innerHTML = "DOWNLOAD";
    btn.addEventListener("click", myWindow);
    document.querySelector("#owner").appendChild(btn);
}


function adMonitor()
{
    try
    {
        const yt = document.getElementById("movie_player");
        const keyWords = ["Your video","Video will play","Ad will end"];
        currentTime = yt.getCurrentTime();
        duration = yt.getDuration();
        if ( yt !== undefined )
        {
            keyWords.forEach(k =>{
                if (document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text")[0].textContent.includes(k) == true)
                   {
                       yt.stopVideo();
                       if ( currentTime == 0 )
                       {
                           console.log("Non-Skippable video Ad is found at the beginning of the video");
                           setTimeout(()=>{yt.seekTo(1);},500);
                           return;
                       }

                       if ( currentTime < duration && currentTime > 0)
                       {
                           console.log("Non-Skippable video Ad is found");
                           console.log("seek to:", currentTime);
                           yt.playVideo();
                           yt.pauseVideo();
                           setTimeout(()=>{yt.seekTo(currentTime);},200);
                           setTimeout(()=>{yt.playVideo();},100);
                           return;49.6
                       }

                       if ( currentTime == duration )
                       {
                           console.log("None skippable Video Ad is found at the end of the video");
                           return;
                       }
                   }});
         }
      }
    catch(e)
    {
      return;
    }
}


function setFix()
{
        setInterval(adMonitor, 1000);
}

function removeSp()
{
    try
    {
        if (document.getElementById("support").innerText.includes("Ad") == true)
        {
            document.getElementsByClassName("ytd-rich-item-renderer")[0].innerHTML = "<span style='font-size:40px;background-color:white'>Removed AD</span>"
//            console.log('Sponsor Ad removed!');
        }
    }
    catch(e)
    {
        return;
    }
}

var Ads = {
    "aId":["masthead-ad","player-ads","top-container","offer-module","pyv-watch-related-dest-url","ytd-promoted-video-renderer","sparkles-container"],
    "aClass":["style-scope ytd-search-pyv-renderer","ytd-compact-promoted-video-renderer","style-scope ytd-carousel-ad-renderer","ytp-ad-overlay-container","ytp-ad-message-container","style-scope ytd-engagement-panel-section-list-renderer"],
    "aTag":["ytd-promoted-sparkles-text-search-renderer"],
    "vdoAd":["ytp-ad-text ytp-ad-preview-text","ytp-ad-skip-button ytp-button"],
    "removeByID":function(){this.aId.forEach(i=>{ let AdId = document.getElementById(i);if(AdId) AdId.remove();})},
    "removeByClassName":function(){this.aClass.forEach(c=>{ let AdClass = document.getElementsByClassName(c);if(AdClass[0]) AdClass[0].remove();})},
    "removeByTagName":function(){this.aTag.forEach(t=>{ let AdTag = document.getElementsByTagName(t);if(AdTag[0]) AdTag[0].remove();})},
    "removeVdoAd":function(){this.vdoAd.forEach(v=>{let AdVdo = document.getElementsByClassName(v)[0];if(AdVdo) {AdVdo.click();}})} //handles skippable video Ad
}

function killAd()
{
    Ads.removeByID();
    Ads.removeByClassName();
    Ads.removeByTagName();
    Ads.removeVdoAd();
    removeSp();
}

document.addEventListener('DOMContentLoaded', ()=>{setFix();setInterval(killAd, 100); setTimeout(createButton, 5000);});