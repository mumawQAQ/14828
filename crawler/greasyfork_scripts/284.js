// ==UserScript==
// @name         Get better FPS in shell shockers!
// @version      0.2
// @author       A3+++
// @description  May or may not improve your fps in shell shockers.
// @match        *://shellshock.io/*
// @run-at       document-start
// @grant        unsafeWindow
// @namespace    https://greasyfork.org/users/815159
// ==/UserScript==
(function () {
    unsafeWindow.hookScene = function () {
        BABYLON.Scene = new Proxy(BABYLON.Scene, {
            construct: function (func, args) {
                const product = new func(...args);

                ["probesEnabled", "particlesEnabled", "texturesEnabled", "fogEnabled", "lightsEnabled", "postProcessesEnabled", "lensFlaresEnabled", "renderTargetsEnabled", "shadowsEnabled", "proceduralTexturesEnabled"].forEach(a => Object.defineProperty(product, a, {
                    get: () => false
                }));

                return product;
            },
        })
    }
    unsafeWindow.XMLHttpRequest = class extends XMLHttpRequest {
        constructor() {
            super(...arguments)
        }
        open() {
            if (arguments[1] && arguments[1].includes("js/shellshock.js")) {
                this.scriptMatch = true;
            }

            super.open(...arguments);
        }
        get response() {

            if (this.scriptMatch) {
                let responseText = super.response;

                let match = responseText.match(/else console.log\(window\),"undefined"==typeof window\?(\w).BABYLON=(\w\(\w,\w,\w\)).(\w)=\w\(\w,\w,\w\)/);
                if (match) {
                    responseText = responseText.replace(match[0], `else{${match[1]}.BABYLON=${match[2]};${match[3]}=${match[1]}.BABYLON,window.hookScene()}`);
                }
                return responseText;
            }
            return super.response;
        }
    };
}())