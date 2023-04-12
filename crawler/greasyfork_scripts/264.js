// ==UserScript==
// @name                 Netflix UHD
// @name:zh-CN           Netflix UHD
// @namespace            http://tampermonkey.net/
// @version              1.15
// @description          Play Netflix UHD content on any screen resolution
// @description:zh-CN    让 Netflix 在任何分辨率的显示器上播放 UHD 内容
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.cn/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_registerMenuCommand
// ==/UserScript==

(function () {
    // 'use strict';

    const forceDolbyVision = true;
    const forceHEVC = false;

    let useWindowCtx

    if (self.unsafeWindow) {
        console.log("use unsafeWindow mode");
        useWindowCtx = self.unsafeWindow;
    } else {
        console.log("use window mode");
        useWindowCtx = self.window;
    }

    // Hook

    delete useWindowCtx.screen;
    useWindowCtx.__defineGetter__('screen', function () {
        let s = [];
        s.width = 7680;
        s.height = 4320;
        s.availWidth = 7680;
        s.availHeight = 4320;
        s.availLeft = 0;
        s.availTop = 0;
        s.colorDepth = 32;
        s.isExtended = false;
        s.pixelDepth = 32;
        return s;
    });
    delete useWindowCtx.devicePixelRatio;
    useWindowCtx.devicePixelRatio = 4;

    if (useWindowCtx.MSMediaKeys) {
        useWindowCtx.MSMediaKeys.isTypeSupportedWithFeaturesOriginal = useWindowCtx.MSMediaKeys.isTypeSupportedWithFeatures;
        useWindowCtx.MSMediaKeys.isTypeSupportedWithFeatures = function (a, b) {
            const reg = /,display-res-[x|y]=\d+,display-res-[x|y]=\d+/
            b = b.replace(reg, "");
            if (forceDolbyVision == true && (b.indexOf("ext-profile=dvh") !== -1)) {
                a = a.replace("com.microsoft.playready.hardware", "com.microsoft.playready");
            }
            if (forceHEVC == true && b.indexOf("ext-profile=dvh") === -1 && (b.indexOf("hvc1") !== -1 || b.indexOf("hev1") !== -1)) {
                a = a.replace("com.microsoft.playready.hardware", "com.microsoft.playready");
            }
            let r = this.isTypeSupportedWithFeaturesOriginal(a, b);
            // if (r !== '') {
            //     console.log("Hook MSMediaKeys isTypeSupportedWithFeatures:", a, b, r !== '');
            // } else {
            //     console.debug("Hook MSMediaKeys isTypeSupportedWithFeatures:", a, b, r !== '');
            // }
            return r;
        }
    }

    if (useWindowCtx.WebKitMediaKeys) {
        useWindowCtx.WebKitMediaKeys.isTypeSupportedOriginal = useWindowCtx.WebKitMediaKeys.isTypeSupported;
        useWindowCtx.WebKitMediaKeys.isTypeSupported = function (keySystem, type) {
            let r = this.isTypeSupportedOriginal(keySystem, type);
            console.log("Hook WebKitMediaKeys", keySystem, type, r);
            return r;
        }
    }

    // WIP: Firefox not support
    // if (useWindowCtx.MediaSource) {
    //     useWindowCtx.MediaSource.isTypeSupportedOriginal = useWindowCtx.MediaSource.isTypeSupported;
    //     useWindowCtx.MediaSource.isTypeSupported = function (mimeType) {
    //         let r = this.isTypeSupportedOriginal(mimeType);
    //         console.log("Hook MSE", mimeType, r);
    //         return r;
    //     }
    // }

    if (useWindowCtx.MediaCapabilities.prototype) {
        useWindowCtx.MediaCapabilities.prototype.decodingInfoOriginal = useWindowCtx.MediaCapabilities.prototype.decodingInfo;
        useWindowCtx.MediaCapabilities.prototype.decodingInfo = function (mediaDecodingConfiguration) {
            let r = this.decodingInfoOriginal(mediaDecodingConfiguration);
            // console.log("MC", mediaDecodingConfiguration, r);
            let p = new Promise((res, rej) => {
                r.then(orir => {
                    // console.log("orir", orir);
                    orir.powerEfficient = orir.supported;
                    orir.smooth = orir.supported;
                    // console.log("orir edited", orir);
                    res(orir);
                }).catch(ex => {
                    rej(ex);
                });
            });
            return p;
        }
    }

    // Ext
    let checkHDCPAsync = async function () {
        if (self.GM_registerMenuCommand && window.MSMediaKeys) {
            // HW
            let hwhdcp0 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware", 'video/mp4; features="hdcp=0"') != '';
            let hwhdcp1 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware", 'video/mp4; features="hdcp=1"') != '';
            let hwhdcp2 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware", 'video/mp4; features="hdcp=2"') != '';
            let hwhdcp2hevc = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware", 'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"') != '';
            let hwhdcp2hevc2160p = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware", 'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"') != '';
            // SW
            let swhdcp0 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software", 'video/mp4; features="hdcp=0"') != '';
            let swhdcp1 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software", 'video/mp4; features="hdcp=1"') != '';
            let swhdcp2 = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software", 'video/mp4; features="hdcp=2"') != '';
            let swhdcp2hevc = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software", 'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"') != '';
            let swhdcp2hevc2160p = window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software", 'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"') != '';
            let bool2Status = function (booltype) {
                return booltype ? "✓" : "✕";
            };
            GM_registerMenuCommand("PlayReady DRM Info (" + (hwhdcp2hevc2160p ? "UHD Ready" : "Restricted") + ")", function () {
                // DHCP0
                let content = "PlayReady DRM (without HDCP 2.2):\n";
                content += "Hardware: " + bool2Status(hwhdcp0) + "    Software: " + bool2Status(swhdcp0) + "\n\n";
                // DHCP1
                content += "PlayReady DRM (HDCP 2.2):\n";
                content += "Hardware: " + bool2Status(hwhdcp1) + "    Software: " + bool2Status(swhdcp1) + "\n\n";
                // DHCP2
                content += "PlayReady DRM (HDCP 2.2 Type 1):\n";
                content += "Hardware: " + bool2Status(hwhdcp2) + "    Software: " + bool2Status(swhdcp2) + "\n\n";
                // DHCP2 + HEVC
                content += "PlayReady DRM (HDCP 2.2 Type 1) with HEVC:\n";
                content += "Hardware: " + bool2Status(hwhdcp2hevc) + "    Software: " + bool2Status(swhdcp2hevc) + "\n\n";
                // DHCP2 + HEVC 2160P
                content += "PlayReady DRM (HDCP 2.2 Type 1) with HEVC UHD:\n";
                content += "Hardware: " + bool2Status(hwhdcp2hevc2160p) + "    Software: " + bool2Status(swhdcp2hevc2160p) + "\n\n";
                // Display DRM Info
                alert(content);
            });
        }
    };
    checkHDCPAsync();

    let switchPlayerInfo = function () {
        console.log("switch player info");

        let evtObj = document.createEvent("UIEvents");
        let keyCode = 68; // D key

        evtObj.initUIEvent("keydown", true, true, useWindowCtx, 1);
        delete evtObj.keyCode;

        if (typeof evtObj.keyCode === "undefined") { // keycode
            Object.defineProperty(evtObj, "keyCode", { value: keyCode });
        } else {
            evtObj.key = String.fromCharCode(keyCode);
        }

        if (typeof evtObj.ctrlKey === 'undefined') { // ctrl
            Object.defineProperty(evtObj, "ctrlKey", { value: true });
        } else {
            evtObj.ctrlKey = true;
        }

        if (typeof evtObj.altKey === 'undefined') { // alt
            Object.defineProperty(evtObj, "altKey", { value: true });
        } else {
            evtObj.altKey = true;
        }

        if (typeof evtObj.shiftKey === 'undefined') { // shift
            Object.defineProperty(evtObj, "shiftKey", { value: true });
        } else {
            evtObj.shiftKey = true;
        }

        useWindowCtx.dispatchEvent(evtObj);
    }

    GM_registerMenuCommand("Player Info", switchPlayerInfo);
})();