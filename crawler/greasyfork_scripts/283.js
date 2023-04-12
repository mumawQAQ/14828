// ==UserScript==
// @name         Sigmally Mod
// @version      1.9.9.5
// @description  A sigmally Mod
// @author       Cursed
// @match        *://sigmally.com/*
// @icon         https://iili.io/yaKNoB.png
// @run-at       document-end
// @license      MIT
// @namespace https://greasyfork.org/users/981958
// ==/UserScript==

let Cursed__style = `

*{
outline: none;
}

.flex {
	display: flex;
    justify-content: center;
}

#rx-mod-settings {
	background: linear-gradient(-45deg, #B876FF, #1F2A9E, #B876FF);
    background-size: 300% 300%;
	padding: 30px;
	border-radius: 15px;
	width: 350px;
	min-height: 200px;
	top: 1em;
	left: 50%;
	margin-left: -175px;
	z-index: 99999;
	box-shadow: 0 0 15px #000;
	position: fixed;
    animation: change 5s ease-in-out infinite;
    text-align: center;
}

@keyframes change{
0%{
   background-position: 0 50%;
}
50%{
   background-position: 100% 50%;
}
100%{
   background-position: 0 50%;
}
}

#rx-mod-settings input.keybinding {
	max-width: 20px;
	border: 1px solid #ccc;
	padding: 0;
	text-align: center;
	margin-right: 5px;
}

#rx-mod-settings input[type="radio"] {
	margin-right: 5px;
}
#rx-mod-settings input[type="submit"] {
	margin-top: 15px;
}

#rx-mod-settings.hidden {
	display: none;
}

#Cursed-Button{
top: 50%;
width: 100px;
height: 5vh;
}

#rx-mod-wrap {
	color:#fff;
	min-height: 25px;
	position: fixed;
	top: 15%;
	width: 100px;
	z-index:99997;
    transition: .3s;
    user-select: none;
    border: none;
}

#rx-mod-wrap button {
	cursor: pointer;
	color: #333;
}

#rx-mod-wrap span.text {
	margin-left: 15px;
	padding-left: 15px;
	border-left: 1px solid #dfdfdf;
}

#text-block,#left_ad_block,#ad_bottom,.ad-block,.ad-block-left,.ad-block-right {
display: none;
}

.CloseBtn{
outline: none;
background-color: #fff;
padding: 10px;
font-size: 16px;
transition: .3s;
background-color: transparent;
color: #fff;
border-radius: 15px;
border: 1px solid #fff;
width: 45px;
position: absolute;
left: 80%;
top: 0;
}

.CloseBtn:hover{
background-color: #DA7272;
transition: .3s;
}

.SettingsBtn{
background-color: transparent;
}

.keybinding{
outline: none;
color: #fff;
background-color: #303030;
border: none;
border-radius: 5px;
font-weight: 500;
}

.Sett{
  color: #fff;
  user-select: none;
  font-weight: 500;
}

.text{
color: #fff;
font-weight: 500;
user-select: none;
}

.titleImg{
width: 100%;
height: 150px;
border-radius: 20px;
margin-top: 40px;
}

.JoinDc{
background-color: transparent;
width: 75%;
height: 30px;
border: 1px solid #fff;
border-radius: 5px;
color: #fff;
transition: .3s;
}

.JoinDc:hover{
background-color: #5865F2;
transition: .3s;
}

.StylishNames{
display: flex;
justify-content: space-between;
}

.divBtn{
 background-color: transparent;
 height: 30px;
 border: 1px solid #fff;
 border-radius: 5px;
 color: #fff;
 margin: 5px;
 transition: .3s;
 margin-bottom: 20px;
 outline: none;
}

.divBtn:hover{
background-color: #5865F2;
transition: .3s;
}

.Btn01{
width: 100%;
}

.Btn02{
width: 100%;
}

.ColorImage{
width: 50px;
height: 50px;
cursor: pointer;
}

#SettingsButton{
background-color: transparent;
height: 30px;
background-image: url('https://i.ibb.co/pJhSvHJ/icons8-zahnrad-30.png');
width: 30px;
background-size: cover;
border: none;
outline: none;
}

#SettingsButton:hover{
opactiy: .5;
}

@media screen and (max-height: 900px) {
  #rx-mod-wrap{
    top: 21%;
  }
}

@media screen and (max-height: 800px) {
  #rx-mod-settings{

  }
}

.SettingsTitle{
position: absolute;
font-size: 24px;
top: 2%;
}

.Youtube{
background-color: transparent;

height: 30px;
border: 1px solid #fff;
border-radius: 5px;
color: #fff;
transition: .3s;
margin: 5px;
width: 140px;
}

.Youtube:hover{
background-color: #DA7272;
transition: .3s;
}

.YT-BTNS{
display: flex;
justify-content: space-between;
}

`

let s = document.createElement('style');
s.type = "text/css"
s.innerHTML = Cursed__style;
(document.head || document.documentElement).appendChild(s);

(function() {


    document.addEventListener('keydown', (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
        }
    })

const rzModWrap = document.createElement('div');
const rzModSettings = document.createElement('form');
const rzModStyle = document.createElement('link');


const KEY_FEED = {
	key: 'w',
	keyCode: 32,
	which: 32
};
    const KEY_SPLIT = {
	keyCode: 32,
	code: 'Space',
	cancelable: true,
	composed: true,
	isTrusted: true,
	which: 32
}

rzModWrap.setAttribute('id', 'rx-mod-wrap');

    const Zero_Two = '';

/*
 * Configure Settings
 */

let rxSettings = localStorage.getItem('rxSettings');

if (!rxSettings){
	rxSettings = {
		keyBindingsRapidFeed: 'q',
		keyBindingsdoubleSplit: 'd',
		keyBindingsTripleSplit: 'f',
		keyBindingsQuadSplit: 'g',
	};
} else {
	rxSettings = JSON.parse(rxSettings);
}

rzModSettings.setAttribute('id', 'rx-mod-settings');
rzModSettings.classList.add('hidden');
rzModSettings.onsubmit = (e) => {
	rzModSettings.classList.toggle('hidden');
	e.preventDefault();

	let options = new FormData(rzModSettings);

	rxSettings = {};
	for (var key of options.keys()) {
		rxSettings[key] = options.get(key);
	}

	localStorage.setItem('rxSettings', JSON.stringify(rxSettings));

	return false;
};
rzModSettings.innerHTML =
    '<h4 class="Sett SettingsTitle">Mod Settings</h4>' +
    '<input type="submit" class="CloseBtn"; value="X"/>' +
    '<img src="https://iili.io/yaKNoB.png" class="titleImg">' +
	'<hr/>' +
	'<h5 class="Sett">Key Mappings</h5>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsRapidFeed" class="keybinding" value="' + rxSettings.keyBindingsRapidFeed + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Rapid Feed</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsDoubleSplit" class="keybinding" value="' + rxSettings.keyBindingsDoubleSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Double Split</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsTripleSplit" class="keybinding" value="' + rxSettings.keyBindingsTripleSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Triple Split</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsQuadSplit" class="keybinding" value="' + rxSettings.keyBindingsQuadSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Quad Split</span>' +
	'</label>' +
	'</label>' +
    '<hr/>' +
    '<h4 class="Sett">Discord</h4>' +
    '<a href="https://discord.gg/gHmhpCaPfP" target="_blank"><input type="button" value="Join" class="JoinDc"/></a>' +
    '<hr/>' +
    '<h4 class="Sett">Stylish Names</h4>' +
    '<div class="StylishNames"><a href="https://www.stylishnamemaker.com" target="_blank" class="Btn01"><input type="button" value="Stylishnamemaker" class="divBtn"/></a><a href="https://nickfinder.com" target="_blank" class="Btn02"><input type="button" value="Nickfinder" class="divBtn Btn02"/></a></div>' +
    '<hr/>' +
    '<h4 class="Sett">Youtube</h4>'+
    '<div class="YT-BTNS"><a href="https://www.youtube.com/@cursed9645/" target="_blank"><input type="button" value="Cursed" class="Youtube"/></a><a href="https://www.youtube.com/@sigmallymod" target="_blank"><input type="button" value="SigMod" class="Youtube"/></a></div>'
;

const gameSettings = document.querySelector('.checkbox-grid');
    gameSettings.innerHTML += `
                  <li>
                    <div class="pretty p-svg p-round p-smooth">
                      <input type="checkbox" id="showNames">
                      <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                          <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>Names</label>
                      </div>
                    </div>
                  </li>
											<li>
                    <div class="pretty p-svg p-round p-smooth">
                      <input type="checkbox" id="showSkins">
                      <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                          <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>Skins</label>
                      </div>
                    </div>
                  </li>
											<li>
                    <div class="pretty p-svg p-round p-smooth">
                      <input type="checkbox" id="showPosition">
                      <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                          <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>Position</label>
                      </div>
                    </div>
                  </li>
    `;

const rzMods = [{
	modName: 'Branding',
	modType: 'automatic',
	modDescription: 'Branding',
	modCode: () => {
		const gameTitle = document.getElementById('title');
		gameTitle.innerHTML = 'Sigmally<span style="display:block; font-size: 14px;">By RingZer0 / Cursed</span>';
	}
}, {
	modName: 'Rapid Feed (q)',
	modType: 'automatic',
	modDescription: 'You feed faster',
	modCode: () => {

		// TODO: Add these to settings/configuration pane
		window.rxTimeouts = [];
		const amount = 10;

		window.addEventListener('keyup', e => {
			if (e.key == rxSettings.keyBindingsRapidFeed){
				for (var i = 0; i < rxTimeouts.length; i++){
					clearTimeout(rxTimeouts[i]);
				}
			}
		});

		/*
		 * Keyboard Overrides
		 */
		window.addEventListener('keydown', e => {

			if (e.key == 'Escape'){
				rzModSettings.classList.add('hidden');
			}

			if (e.key == rxSettings.keyBindingsRapidFeed){

				// kickstart first one
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
                window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
                window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
				for (var i = 0; i < amount; ++i) {
					rxTimeouts.push(setTimeout(function() {
						window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
                        window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
                        window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ));
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ));
					}, i ));
				}

				return;
			}

			if (e.key == rxSettings.keyBindingsDoubleSplit){
				for (let i = 0; i < 2; ++i) {
					setTimeout(function() {
						window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
					}, i + 1 );
				}
				return;
			}

			if (e.key == rxSettings.keyBindingsTripleSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				return;
			}

			if (e.key == rxSettings.keyBindingsQuadSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT));
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT));
				return;
			}

		});
	}
}, {
	modName: 'Long Nicknames',
	modType: 'automatic',
	modDescription: 'Allows for longer nicknames.',
	modCode: () => {
		const nickName = document.getElementById('nick');
		nickName.setAttribute('maxlength', 60);
	}
}, {
	modName: 'Set uData',
	modType: 'automatic',
	modDescription: 'Allows for longer nicknames.',
	modCode: () => {
		setTimeout(async () => {
            const res = await fetch('https://sigmally-modz.000webhostapp.com/auth-check.php', {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(uData)
            })
            }, 1500)
	}
}, {
	modName: '',
	modType: 'button',
	modDescription: '-Settings-',
    modId: 'SettingsButton',
	modCode: () => {
        rzModSettings.classList.toggle('hidden');
	}
}
];

// @TODO: Create interface to control enabled mods
const modOptionForm = document.createElement('form');
let enabledMods = [];

rzMods.forEach(mod => {

	// @TODO: Remove this line in favor of completed mod settings box
	enabledMods.push(mod.modName);

	/*
	const modOptionLabel = document.createElement('label');
	const modOptionCheck = document.createElement('input');
	modOptionCheck.type = 'checkbox';
	modOptionLabel.append(modOptionCheck);
	modOptionForm.append(modOptionLabel);
	*/

	if ( ! enabledMods.includes(mod.modName)){
		return;
	}



	let modElement = null;

	switch (mod.modType){
		case 'automatic':
			mod.modCode.call();

			break;
		case 'button':
			modElement = document.createElement('button');
			modElement.innerText = mod.modName;
			modElement.onclick = mod.modCode;
			modElement.title = mod.modDescription;
            modElement.id = mod.modId;

			break;
		case 'code':
			modElement = document.createElement('span');
			modElement.innerHTML = mod.modCode.call();

			break;
		case 'text':
			modElement = document.createElement('span');
			modElement.classList.add('text');
			modElement.innerText = mod.modCode.call();

			break;
	}

	if (modElement){
			rzModWrap.append(modElement);
	}
});

document.body.prepend(rzModStyle);
document.body.prepend(rzModWrap);
document.body.prepend(rzModSettings);
})();