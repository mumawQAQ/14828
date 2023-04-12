// ==UserScript==
// @name         1v1.lol Rapid Fire
// @version      0.4
// @description  1v1.LOL hack script Rapid Fire
// @author       Babboon
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

    patcher.aobPatchEntry({
        scan: '5 20 0 20 0 28 ? ? ? 20 1 [ 6B ] 36 ? ? ?',
        code: [
            OP.drop,
        ],
        onsuccess: () => Log('Infinite Armor')
    });

    if(new URLSearchParams( window.location.search ).get('TU9SRUhBQ0tT') === 'true') {

        alert('[FreeFly] is added');

        const pressSpaceKeyIndex = patcher.addGlobalVariableEntry({
            type: 'u32',
            value: 0,
            mutability: true,
            exportName: 'PRESS_SPACE_KEY'
        });

        patcher.aobPatchEntry({
            scan: '4 40 20 B 20 1D 38 2 0 20 F 20 1E [ 38 2 0 ]',
            code: [
                OP.global.get, pressSpaceKeyIndex,
                OP.i32.const, VAR.s32(1),
                OP.i32.eq,
                OP.if,
                    OP.local.get, VAR.u32(15),
                    OP.f32.const, VAR.f32(2.5),
                    OP.f32.store, VAR.u32(2), VAR.u32(0),
                OP.end
            ],
            onsuccess: () => Log('Free Fly (offline)')
        });

        patcher.aobPatchEntry({
            scan: '4 40 20 6 21 3 B 20 1A 20 21 38 2 0 20 F 20 22 [ 38 2 0 ]',
            code: [
                OP.drop,
                OP.drop,
                OP.global.get, pressSpaceKeyIndex,
                OP.i32.const, VAR.s32(1),
                OP.i32.eq,
                OP.if,
                    OP.local.get, VAR.u32(15),
                    OP.f32.const, VAR.f32(2.5),
                    OP.f32.store, VAR.u32(2), VAR.u32(0),
                OP.end
            ],
            onsuccess: () => Log('Free Fly (online)')
        });
    }

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