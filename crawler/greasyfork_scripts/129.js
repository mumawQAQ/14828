// ==UserScript==
// @name         Geoguessr Blink Mode
// @description  Shows the round briefly, then screen goes black and you have unlimited time to make your guess.
// @version      1.2.4
// @author       macca#8949
// @license      MIT
// @match        https://www.geoguessr.com/*
// @require      https://unpkg.com/@popperjs/core@2.11.5/dist/umd/popper.min.js
// @run-at       document-start
// @grant        none
// @namespace    https://greasyfork.org/en/scripts/438579-geoguessr-blink-mode
// @icon         https://www.svgrepo.com/show/40039/eye.svg
// ==/UserScript==


const guiEnabled = true
//                 ^^^^ Set to false (all lowercase) if you want to hide the GUI and manually enable the script/set the time, otherwise true

let timeLimit = 1.5
//              ^^^ Modify this number above to change the time

let roundDelay = 0
//               ^ Modify this number above to change the length of time the round is delayed for



// --------- DON'T MODIFY ANYTHING BELOW THIS LINE -------- //



const classicGameGuiHTML = `
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK"><div class="bars_root___G89E bars_center__vAqnw"><div class="bars_before__xAA7R bars_lengthLong__XyWLx"></div><span class="bars_content__UVGlL"><h3>Blink Mode settings</h3></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Enabled</span>
      <input type="checkbox" id="enableScript" onclick="toggleBlinkMode(this)" class="toggle_toggle__hwnyw">
    </div>

    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Time (Seconds)</span>
      <input type="text" id="blinkTime" onchange="changeBlinkTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
    </div>
  </div>
  <div style="margin-top: 10px">
    <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Round Delay (Seconds)</span>
    <input type="text" id="delayTime" onchange="changeDelayTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
  </div>
</div>
`

const friendLobbyGuiHTML = `
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK" style="margin-top: 10px"><div class="bars_root___G89E"><span class="bars_content__UVGlL"><h2>Blink Mode Settings</h2></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU" style="margin-top: 8px">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Enabled</span>
      <input type="checkbox" id="enableScript" onclick="toggleBlinkMode(this)" class="toggle_toggle__hwnyw">
    </div>

    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Time (Seconds)</span>
      <input type="text" id="blinkTime" onchange="changeBlinkTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
    </div>

    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Round Delay (Seconds)</span>
      <input type="text" id="delayTime" onchange="changeDelayTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
    </div>
  </div>
</div>
`

const guiHTMLHeader = `
<div id="blinkHeaderToggle" class="header_item__8_Ol1">
  <div class="quick-search_wrapper__SP8ZI">
    <div class="slanted-wrapper_root__2eaEs slanted-wrapper_variantGrayTransparent__aufaF">
      <div class="slanted-wrapper_start__Kl7rv slanted-wrapper_right__G0JWR"></div>
      <div class="quick-search_searchInputWrapper__WWuRE">
        <div id="popup" style="background: rgba(26, 26, 46, 0.9); padding: 15px; width: 200px; border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="game-options_optionLabel__dJ_Cy">Enabled</span>
            <input type="checkbox" id="enableScriptHeader" class="toggle_toggle__hwnyw" onclick="toggleBlinkMode(this)">
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span class="game-options_optionLabel__dJ_Cy">Time (Seconds)</span>
            <input type="text" id="blinkTimeHeader" onchange="changeBlinkTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Round Delay (Seconds)</span>
            <input type="text" id="delayTimeHeader" onchange="changeDelayTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
          </div>
        </div>
        <button style="width: 59.19px" id="headerGuiToggle" class="quick-search_searchInputButton__kK9Hz"><picture style="justify-content: center" class="quick-search_iconSection__3Wdfr"><img src="https://www.svgrepo.com/show/40039/eye.svg" style="width: 15px; filter: brightness(0) invert(1); opacity: 60%;"></picture></button>
      </div>
      <div class="slanted-wrapper_end__cD1Qu slanted-wrapper_right__G0JWR"></div>
    </div>
  </div>
</div>
`

const guiPartyHeader = `
<div id="blinkHeaderToggle" class="header_item__8_Ol1" style="margin-right: 1rem;">
  <div id="popup" style="background: rgba(26, 26, 46, 0.9); padding: 15px; width: 200px; border-radius: 10px; z-index: 999;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy">Enabled</span>
      <input type="checkbox" id="enableScriptHeader" class="toggle_toggle__hwnyw" onclick="toggleBlinkMode(this)">
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
      <span class="game-options_optionLabel__dJ_Cy">Time (Seconds)</span>
      <input type="text" id="blinkTimeHeader" onchange="changeBlinkTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Round Delay (Seconds)</span>
      <input type="text" id="delayTimeHeader" onchange="changeDelayTime(this)" style="background: rgba(255,255,255,0.1); color: white; border: none; border-radius: 5px; width: 60px;">
    </div>
  </div>
  <div class="quick-search_wrapper__SP8ZI">
    <div class="slanted-wrapper_root__2eaEs slanted-wrapper_variantGrayTransparent__aufaF">
      <div class="slanted-wrapper_start__Kl7rv slanted-wrapper_right__G0JWR"></div>
      <div>
        <button id="headerGuiToggle" style="width: 59.19px; background-color: inherit;border: initial;cursor: pointer;min-height: 2rem;min-width: 2rem;padding: var(--padding-y) var(--padding-x);"><picture style="justify-content: center" class="quick-search_iconSection__3Wdfr"><img src="https://www.svgrepo.com/show/40039/eye.svg" style="width: 15px; filter: brightness(0) invert(1); opacity: 60%;"></picture></button>
      </div>
      <div class="slanted-wrapper_end__cD1Qu slanted-wrapper_right__G0JWR"></div>
    </div>
  </div>
</div>
`

if (localStorage.getItem('blinkEnabled') == null) {
    localStorage.setItem('blinkEnabled', 'disabled');
}

if (!guiEnabled) {
    localStorage.setItem('blinkEnabled', 'enabled');
}

if (localStorage.getItem('blinkTime') == null || isNaN(localStorage.getItem('blinkTime'))) {
    localStorage.setItem('blinkTime', timeLimit);
}
if (localStorage.getItem('delayTime') == null || isNaN(localStorage.getItem('delayTime'))) {
    localStorage.setItem('delayTime', roundDelay);
}

if (guiEnabled) {
    timeLimit = parseFloat(localStorage.getItem('blinkTime'));
    roundDelay = parseFloat(localStorage.getItem('delayTime'));
}

window.toggleBlinkMode = (e) => {
    localStorage.setItem('blinkEnabled', e.checked ? 'enabled' : 'disabled');
    if (!e.checked) {
        try { showPanoramaCached(); } catch {}
    }

    if (document.querySelector('#enableScript')) {
        document.querySelector('#enableScript').checked = e.checked;
    }
    if (document.querySelector('#enableScriptHeader')) {
        document.querySelector('#enableScriptHeader').checked = e.checked;
    }
}

window.changeBlinkTime = (e) => {
    if (!isNaN(e.value)) {
        localStorage.setItem('blinkTime', parseFloat(e.value));
        timeLimit = parseFloat(e.value);

        if (document.querySelector('#blinkTime')) {
            document.querySelector('#blinkTime').value = e.value;
        }
        if (document.querySelector('#blinkTimeHeader')) {
            document.querySelector('#blinkTimeHeader').value = e.value;
        }
    }
}

window.changeDelayTime = (e) => {
    if (!isNaN(e.value)) {
        localStorage.setItem('delayTime', parseFloat(e.value));
        roundDelay = parseFloat(e.value);

        if (document.querySelector('#delayTime')) {
            document.querySelector('#delayTime').value = e.value;
        }
        if (document.querySelector('#delayTimeHeader')) {
            document.querySelector('#delayTimeHeader').value = e.value;
        }
    }
}

const insertHeaderGui = (header, gui) => {
    header.insertAdjacentHTML('afterbegin', gui);
    const showButton = document.querySelector('#headerGuiToggle');
    const popup = document.querySelector('#popup');
    popup.style.display = 'none';

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target == popup || popup.contains(target)) return;
        if (target.matches('#headerGuiToggle, #headerGuiToggle *')) {
            e.preventDefault();

            popup.style.display = 'block';
            Popper.createPopper(showButton, popup, {
                placement: 'bottom',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
            });
        } else {
            popup.style.display = 'none';
        }

        if (document.querySelector('#enableScriptHeader')) {
            if (localStorage.getItem('blinkEnabled') === 'enabled') {
                document.querySelector('#enableScriptHeader').checked = true;
            }
            document.querySelector('#blinkTimeHeader').value = timeLimit;
            document.querySelector('#delayTimeHeader').value = roundDelay;
        }
    });
}

const checkInsertGui = () => {
    // Play page for classic games
    if (document.querySelector('.radio-box_root__ka_9S') && document.querySelector('#enableScript') === null) {
        document.querySelector('.section_sectionMedium__yXgE6').insertAdjacentHTML('beforeend', classicGameGuiHTML);
        if (localStorage.getItem('blinkEnabled') === 'enabled') {
            document.querySelector('#enableScript').checked = true;
        }
        document.querySelector('#blinkTime').value = timeLimit;
        document.querySelector('#delayTime').value = roundDelay;
    }

    // Lobby for friends party games
    if (document.querySelector('.game-options_root__ppDoQ') && document.querySelector('#enableScript') === null) {
        document.querySelector('.game-options_optionGroup__qNKx1').insertAdjacentHTML('beforeend', friendLobbyGuiHTML);
        if (localStorage.getItem('blinkEnabled') === 'enabled') {
            document.querySelector('#enableScript').checked = true;
        }
        document.querySelector('#blinkTime').value = timeLimit;
        document.querySelector('#delayTime').value = roundDelay;
    }

    // Header
    if (document.querySelector('.header_header___qZAn') && document.querySelector('#blinkHeaderToggle') === null) {
        insertHeaderGui(document.querySelector('.header_context__UqsBa'), guiHTMLHeader)
    } else if (document.querySelector('.party-header_root__EQbn1') && document.querySelector('#blinkHeaderToggle') === null) {
        insertHeaderGui(document.querySelector('.party-header_right__qHcU4'), guiPartyHeader)
    }
}

let mapRoot = null;
function hidePanorama() {
    mapRoot = document.querySelector('.mapsConsumerUiSceneInternalCoreScene__root') || mapRoot;
    hidePanoramaCached();
}

function hidePanoramaCached() {
    mapRoot.style.filter = 'brightness(0%)';
}

function showPanorama() {
    mapRoot = document.querySelector('.mapsConsumerUiSceneInternalCoreScene__root') || mapRoot;
    showPanoramaCached();
}

function showPanoramaCached() {
    mapRoot.style.filter = 'brightness(100%)';
}

function isLoading() {
    return document.querySelector('.fullscreen-spinner_root__IwRRr') || !document.querySelector('.widget-scene-canvas');
}

let wasBackdropThereOrLoading = false;
function isBackdropThereOrLoading() {
    return isLoading() // loading
        || document.querySelector('.result-layout_root__NfX12') // classic
        || document.querySelector('.overlay_backdrop__Rh_QC') // duels / team duels
        || document.querySelector('.game_backdrop__A_Ze9') || document.querySelector('.overlays_backdrop__sIb35') // live challenges
        || document.querySelector('.popup_backdrop__R52hP') // BR
        || document.querySelector('.game-starting_container__TMoWC') || document.querySelector('.round-score_container__avps2') // bullseye
        || document.querySelector('.overlay-modal_backlight__Ekx7t'); // city streaks
}

let showTimeoutID = null
let hideTimeoutID = null
function triggerBlink() {
    hidePanorama();
    clearTimeout(showTimeoutID);
    showTimeoutID = setTimeout(showPanorama, roundDelay * 1000);
    clearTimeout(hideTimeoutID);
    hideTimeoutID = setTimeout(hidePanorama, (timeLimit + roundDelay) * 1000);
}

let observer = new MutationObserver((mutations) => {
    if (guiEnabled) {
        checkInsertGui();
    }

    if (localStorage.getItem('blinkEnabled') === 'enabled') {
        if (isBackdropThereOrLoading()) {
            wasBackdropThereOrLoading = true;
            if (!isLoading()) hidePanorama();
        } else if (wasBackdropThereOrLoading) {
            wasBackdropThereOrLoading = false;
            triggerBlink();
        }
    }

});

observer.observe(document.body, {
  characterDataOldValue: false,
  subtree: true,
  childList: true,
  characterData: false
});
