// ==UserScript==
// @name         Change FOV in Shell Shockers!
// @version      0.2
// @description  Implemented slider to change fov in shell shockers!
// @match        *://shellshock.io/*
// @author       A3+++
// @run-at       document-start
// @grant        unsafeWindow
// @namespace    https://greasyfork.org/users/815159
// ==/UserScript==

(function () {
    const degToRad = (deg) => deg * (Math.PI / 180);
    let fovToRadian = 1.25;

    unsafeWindow.fixCamera = function (camera) {
        Object.defineProperty(camera, "fov", {
            get: () => fovToRadian || 1.25
        });
    }
    unsafeWindow.resetFov = function () {
        fovToRadian = 1.25;
        display.innerText = "71.62\u00B0";
        slider.value = "71.62\u00B0";
    }
    unsafeWindow.XMLHttpRequest = class extends unsafeWindow.XMLHttpRequest {
        constructor() {
            super(...arguments);
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

                let match = responseText.match(/.push\(([A-z])\),\w.maxZ=100/);
                if (match) responseText = responseText.replace(match[0], match[0] + `,window.fixCamera(${match[1]})`);
                return responseText;
            }
            return super.response;
        }
    };


    let html = [`<style>.slidecontainer{width:100%}.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:0;opacity:.7;padding:5px;-webkit-transition:.2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#04aa6d;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#04aa6d;cursor:pointer}</style>`,
    `<div class="slidecontainer"><p>FOV: <span id="fovDisplay"></span></p><input type="range" min="1" max="179.9" step="0.01" value="71.62" class="slider" id="fovSlider"></div>`,
    `<div class="btn-container"><button id='resetBtn' onclick='window.resetFov()' class="ss_button btn_small btn_pink bevel_yolk"><center>Reset FOV</center></button></div>`].join();

    let display, slider;
    let interval = setInterval(function () {
        let pauseButtons = document.getElementById("pauseButtons");
        if (pauseButtons) {
            clearInterval(interval);
            let fovDiv = document.createElement("div");
            fovDiv.innerHTML = '<br>' + html;
            pauseButtons.appendChild(fovDiv);


            display = document.getElementById("fovDisplay");
            slider = document.getElementById("fovSlider");
            display.innerText = "71.62\u00B0";
            slider.oninput = function () {
                let newFov = parseFloat(this.value);
                display.innerText = newFov + "\u00B0";
                fovToRadian = degToRad(newFov);
            }
        }

    }, 1000);
}())