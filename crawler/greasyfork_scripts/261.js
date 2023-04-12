// ==UserScript==
// @name         1v1.lol Full Auto + Instant shotgun reload!
// @version      0.1
// @description  1v1.LOL Full auto weapons and easy fats reload for your shotgun! Made by SpruzzYEET on YouTube.
// @author       SpruzzYEET (YEET)
// @match        https://1v1.lol/*
// @icon         https://www.google.com/s2/favicons?domain=1v1.lol
// @require      https://greasyfork.org/scripts/436749-wasm-patcher/code/wasm_patcher.js
// @namespace https://greasyfork.org/users/933239
// ==/UserScript==
 
const Log = function(msg) {
    console.log("1v1.www : " + msg);
};
 
const wasm = WebAssembly;
const oldInstantiate = wasm.instantiate; //
 
wasm.instantiate = async function(bufferSource, importObject) {
    const patcher = new WasmPatcher(bufferSource);
 
    patcher.aobPatchEntry({
        scan: 'B 20 1 20 1 28 ? ? 41 1 [ 6B ] 36 ? ? 41 84 D7 95 3',
        code: [
            OP.drop,
        ],
        onsuccess: () => Log('Infinite Ammo')
    });
 
    patcher.aobPatchEntry({
        scan: '2A ? ? | 38 ? ? C 2 B 20 0',
        code: [
            OP.drop,
            OP.f32.const, VAR.f32(0)
        ],
        onsuccess: () => Log('Rapid Fire')
    });
 
    const result = await oldInstantiate(patcher.patch(), importObject);
 
    if(new URLSearchParams( window.location.search ).get('TU9SRUhBQ0tT') === 'true') {
        const exports = result.instance.exports;
 
        const pressSpaceKey = exports.PRESS_SPACE_KEY;
 
        document.addEventListener('keydown', evt => evt.code === 'Space' && (pressSpaceKey.value = 1));
        document.addEventListener('keyup', evt => evt.code === 'Space' && (pressSpaceKey.value = 0));
 
        localStorage.removeItem('TU9SRUhBQ0tT');
    }
 
    return result;
};
 
if(new URLSearchParams( window.location.search ).get('TU9SRUhBQ0tT') === 'true') return;