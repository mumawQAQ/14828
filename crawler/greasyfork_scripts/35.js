// ==UserScript==
// @name         Shellshock.IO Aimbot, Free Items And Many More
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @license      MIT
// @description  This is a shell shockers hack script that gives you all items, vip, no ads, aimbot, esp, lines, rainbow crosshair, custom ski and fog density all roled into one easy to use gui.
// @author       Zertalious (Zert)
// @match        *://shellshock.io/*
// @match        *://algebra.best/*
// @match        *://algebra.vip/*
// @match        *://biologyclass.club/*
// @match        *://deadlyegg.com/*
// @match        *://deathegg.world/*
// @match        *://eggcombat.com/*
// @match        *://egg.dance/*
// @match        *://eggfacts.fun/*
// @match        *://egghead.institute/*
// @match        *://eggisthenewblack.com/*
// @match        *://eggsarecool.com/*
// @match        *://geometry.best/*
// @match        *://geometry.monster/*
// @match        *://geometry.pw/*
// @match        *://geometry.report/*
// @match        *://hardboiled.life/*
// @match        *://hardshell.life/*
// @match        *://humanorganising.org/*
// @match        *://mathdrills.info/*
// @match        *://mathfun.rocks/*
// @match        *://mathgames.world/*
// @match        *://math.international/*
// @match        *://mathlete.fun/*
// @match        *://mathlete.pro/*
// @match        *://overeasy.club/*
// @match        *://scrambled.best/*
// @match        *://scrambled.tech/*
// @match        *://scrambled.today/*
// @match        *://scrambled.us/*
// @match        *://scrambled.world/*
// @match        *://shellshockers.club/*
// @match        *://shellshockers.site/*
// @match        *://shellshockers.us/*
// @match        *://shellshockers.world/*
// @match        *://softboiled.club/*
// @match        *://violentegg.club/*
// @match        *://violentegg.fun/*
// @match        *://yolk.best/*
// @match        *://yolk.life/*
// @match        *://yolk.rocks/*
// @match        *://yolk.tech/*
// @match        *://zygote.cafe/*
// @icon         https://www.google.com/s2/favicons?domain=shellshock.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

let espEnabled = false
let aimbotEnabled = false
let showLines = false
let aimbotOnRightMouse = false;
let isguiopen = false

function buttonesp(bool) {
	espEnabled = bool
    if(bool) {
        showlines.container.disabled = false
    } else {
        showlines.container.disabled = true
    }
}

function buttonaimbot(bool) {
	aimbotEnabled = bool
}

function buttonlines(bool) {
	showLines = bool
}

function buttonaimbotright(bool) {
	aimbotOnRightMouse = bool
}

(function() {

	const shellMod = {
		interval: null,
		gui: null,
		storedData: {
			scene: null,
			camera: null,
			reticle: null,
			rainbowCrosshairEnabled: false,
			colorDelta: 0.89,
			colorIdx: 0,
			colors: [
				[],
				[],
				[]
			],
			skyColor: "#FFFFFF",
			skyBoxAlpha: 1,
			useSkyColor: false,
			fogDensity: 0.01,
			fogColor: "#FFFFFF",
		},
		replacements: {
			unlockSkins: {
				regex: /inventory\[[A-z]\].id===[A-z].id\)return!0;return!1/,
				replace: "rep = `${match[0]}||true`"
			},
			camera: {
				regex: /.push\(([A-z])\),\w.maxZ=100/,
				replace: "rep = `${match[0]},window.modHelper.camera=${match[1]}`"
			},
			scene: {
				regex: /([A-z][A-z])\.fogDensity=.01\);/,
				replace: "rep = `${match[0]}window.modHelper.scene=${match[1]};`"
			},
			crosshairs: {
				regex: /document.getElementById\("dotReticle"\)/,
				replace: "rep = `${match[0]};window.modHelper.reticle=this;${atob('ZG9jdW1lbnQudGl0bGU=')}=atob('U2hlbGwgU2hvY2tlcnMgfCBNb2RkZWQgYnkgQTMgfCBieSBCbHVlIFdpemFyZCBEaWdpdGFs');`"
			}
		},
		updateSky: function() {
			if (!this.storedData.scene) return;
			let skyMesh = this.storedData.scene.getMeshByID("skyBox");
			if (skyMesh) {
				if (!skyMesh.oldTexture) skyMesh.oldTexture = skyMesh.material.reflectionTexture;

				if (this.storedData.useSkyColor) {
					skyMesh.material.emissiveColor.set(...this.hexToRgb(this.storedData.skyColor));
					skyMesh.material.reflectionTexture = null;
					skyMesh.material.alpha = this.storedData.skyBoxAlpha;

				} else {
					skyMesh.material.emissiveColor.set(...this.hexToRgb("#000000"));
					skyMesh.material.reflectionTexture = skyMesh.oldTexture;
					skyMesh.material.alpha = 1;

				}
			}
		},
		updateFog: function() {
			if (!this.storedData.scene) return;

			this.storedData.scene.fogColor.set(...this.hexToRgb(this.storedData.fogColor));
			this.storedData.scene.fogDensity = this.storedData.fogDensity;
		},
		hexToRgb: function(hex) {
			let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255] : [];
		},
		doHooks: function() {
			window.XMLHttpRequest = class extends window.XMLHttpRequest {
				constructor() {
					super(...arguments);
				}
				open() {
					if (arguments[1] && arguments[1].includes("shellshock.js")) this.scriptMatch = true;

					super.open(...arguments);
				}
				get response() {

					if (this.scriptMatch) {
						let responseText = super.response;


						let rep;
						for (let key of Object.keys(shellMod.replacements)) {

							let replacement = shellMod.replacements[key];
							let match = responseText.match(replacement.regex);
							if (match) responseText = responseText.replace(match[0], eval(replacement.replace));
						}

						return responseText;
					}
					return super.response;
				}
			};

		},

		createGUI: function() {
			this.gui = new guify({
				title: "<b>Mod Panel</b>",
				theme: "dark",
				align: "left",
				width: 300,
				barMode: "none",
				panelMode: "none",
				opacity: 0.90,
				root: window.container,
				open: isguiopen,
				components: {
					SetVisible: {
						type: "button",
						label: "Set Visible",
						onClick: () => this.gui.toggle()
					}
				}
			});


			this.gui.Register([{
				type: "folder",
				label: "Fog Controls",
				open: false
			}, {
				type: "folder",
				label: "Sky Color",
				open: false
			}, {
				type: "folder",
				label: "Aimbot Hacks",
				open: false
			}, {
				type: "folder",
				label: "Rainbow Crosshair",
				open: false
			}, {
                type: "folder",
				label: "Credit",
				open: false
            }]);

			this.gui.Register([{
				type: "checkbox",
				label: "Use Sky Color:",
				object: this.storedData,
				property: "useSkyColor",
				onChange: () => this.updateSky()
			}, {
				type: "color",
				label: "Sky Color:",
				format: "hexColor",
				object: this.storedData,
				property: "skyColor",
				onChange: () => this.updateSky()
			}, {
				type: "range",
				label: "Alpha:",
				min: 0,
				max: 1,
				object: this.storedData,
				property: "skyBoxAlpha",
				onChange: () => this.updateSky()
			}], {
				folder: "Sky Color"
			});

			this.gui.Register([{
				type: "checkbox",
				label: "Aimbot",
				property: "aimbot12",
				onChange: (buttonaimbot)
			}, {
				type: "checkbox",
				label: 'Aimbot On Right Click(Aimbot Must Be Enabled)',
				property: "aimbot12",
				onChange: (buttonaimbotright)
			}, {
				type: "checkbox",
				label: "ESP",
				property: "esp12",
				onChange: (buttonesp)
			}, {
				type: "checkbox",
				label: 'Show Lines(ESP must be enabled)',
				property: "esp12",
				onChange: (buttonlines)
			}],{
				folder: "Aimbot Hacks"
			});

			this.gui.Register([{
				type: "range",
				label: "Fog Density:",
				min: 0,
				max: 1,
				object: this.storedData,
				property: "fogDensity",
				onChange: () => this.updateFog()
			}, {
				type: "color",
				label: "Fog Color:",
				format: "hexColor",
				object: this.storedData,
				property: "fogColor",
				onChange: () => this.updateFog()
			}], {
				folder: "Fog Controls"
			});


			this.gui.Register([{
				type: "checkbox",
				label: "Use Rainbow Crosshair:",
				object: this.storedData,
				property: "rainbowCrosshairEnabled",
			}, {
				type: "range",
				label: "Delta:",
				min: 0,
				max: 2.5,
				object: this.storedData,
				property: "colorDelta",
			}], {
				folder: "Rainbow Crosshair"
			});

            var credit1 = "https://greasyfork.org/en/scripts/436330-shellshock-io-aimbot-esp"
            var credit2 = "https://greasyfork.org/en/scripts/434224-mod-panel-for-shell-shockers"

            this.gui.Register([{
                type: 'display',
                label: "Zertalious (Zert)",
                property: 'credit1'
            }, {
                type: 'display',
                label: "A3+++",
                property: "credit2",
            }], {
                folder: "Credit"
            });

			if (this.gui.panel.menuButton) {
				this.gui.panel.menuButton.style.opacity = 0.3;
			}

		},
		loadMod: function() {
			const addScript = function() {
				let script = document.createElement('script');
				script.onload = function() {
					shellMod.createGUI()
				};
				script.src = "https://unpkg.com/guify@0.12.0/lib/guify.min.js";
				document.body.appendChild(script);
			}
			document.body ? addScript() : document.addEventListener("DOMContentLoaded", addScript);

			this.doHooks();

			function HSVtoRGB(h, s, v) {
				var r, g, b, i, f, p, q, t;
				i = Math.floor(h * 6);
				f = h * 6 - i;
				p = v * (1 - s);
				q = v * (1 - f * s);
				t = v * (1 - (1 - f) * s);
				switch (i % 6) {
					case 0:
						r = v, g = t, b = p;
						break;
					case 1:
						r = q, g = v, b = p;
						break;
					case 2:
						r = p, g = v, b = t;
						break;
					case 3:
						r = p, g = q, b = v;
						break;
					case 4:
						r = t, g = p, b = v;
						break;
					case 5:
						r = v, g = p, b = q;
						break;
				}
				return {
					r: Math.round(r * 255),
					g: Math.round(g * 255),
					b: Math.round(b * 255)
				};
			}

			for (let wl = 0; wl < 100; wl++) {
				const {
					r,
					g,
					b
				} = HSVtoRGB(wl / 100.0 * 0.85, 1.0, 1.0);

				this.storedData.colors[0].push(r);
				this.storedData.colors[1].push(g);
				this.storedData.colors[2].push(b);
			}

			if (!this.interval) {
				this.interval = setInterval(function() {
					if (shellMod.storedData.rainbowCrosshairEnabled && typeof extern !== "undefined" && extern.inGame) {
						for (let i = 0; i < 4; i++) {

							let ch = shellMod.storedData.reticle.crosshairs[i];
							const idx = Math.mod(Math.floor(shellMod.storedData.colorIdx + 30 * i), 100);

							const rgbString = `rgb(${shellMod.storedData.colors[0][idx]}, ${shellMod.storedData.colors[1][idx]}, ${shellMod.storedData.colors[2][idx]})`;
							ch.style.backgroundColor = rgbString;
							ch.style.color = rgbString;

						}

						shellMod.storedData.colorIdx += shellMod.storedData.colorDelta;
						if (shellMod.storedData.colorIdx >= 100) shellMod.storedData.colorIdx = 0;
					}
					if (typeof extern !== "undefined" && typeof vueApp !== "undefined") {
						if (!vueApp.isUpgraded || !extern.account.isSubscriber) {
							vueApp.setAccountUpgraded(true, "");
							extern.account.isSubscriber = true;
						}
					}
				}, 33);
			}
		}

	}

	window.modHelper = {
		set scene(c) {
			shellMod.storedData.scene = c
		},
		set camera(c) {
			shellMod.storedData.camera = c
		},
		set reticle(c) {
			shellMod.storedData.reticle = c
		}
	}

	shellMod.loadMod();
}())


window.XMLHttpRequest = class extends window.XMLHttpRequest {

	open(method, url) {

		if (url.indexOf('shellshock.js') > -1) {

			this.isScript = true;

		}

		return super.open(...arguments);

	}

	get response() {

		if (this.isScript) {

			const code = super.response;

			let babylonVarName,
				playersVarName,
				myPlayerVarName,
				sceneVarName,
				cullFuncName;

			try {

				babylonVarName = /this\.origin=new ([a-zA-Z]+)\.Vector3/.exec(code)[1];
				playersVarName = /([^,]+)=\[\],{}/.exec(code)[1];
				myPlayerVarName = /"fire":document.pointerLockElement&&([^&]+)&&/.exec(code)[1];
				sceneVarName = /createMapCells\(([^,]+),/.exec(code)[1];
				cullFuncName = /=([a-zA-Z_$]+)\(this\.mesh,\.[0-9]+\)/.exec(code)[1];

			} catch (error) {

				alert('Script failed to inject. Report the issue to the script developer.\n' + JSON.stringify(getVars(), undefined, 2));

				return code;

			}

			function getVars() {

				return {
					babylonVarName,
					playersVarName,
					myPlayerVarName,
					playersVarName,
					sceneVarName,
					cullFuncName
				};

			}

			console.log('%cInjecting code...', 'color: red; background: black; font-size: 2em;', getVars());

			return code.replace(sceneVarName + '.render()', `

					window[ '${onUpdateFuncName}' ](
						${babylonVarName},
						${playersVarName},
						${myPlayerVarName}
					);

				${sceneVarName}.render()`)
				.replace(`function ${cullFuncName}`, `

					function ${cullFuncName}() {

						return true;

					}

				function someFunctionWhichWillNeverBeUsedNow`);

		}

		return super.response;

	}

};

const value = parseInt(new URLSearchParams(window.location.search).get('showAd'), 16);
const shouldShowAd = false

const temp = document.createElement('div');

temp.innerHTML = '';

const msgEl = temp.querySelector('.msg');
const infoEl = temp.querySelector('.info');

window.addEventListener('DOMContentLoaded', async function() {

	while (temp.children.length > 0) {

		document.body.appendChild(temp.children[0]);

	}

	if (shouldShowAd) {

		const url = new URL(window.location.href);

		url.searchParams.set('showAd', Date.now().toString(16));
		url.searchParams.set('scriptVersion', GM.info.script.version);

		window.location.href = 'https://zertalious.xyz?ref=' + new TextEncoder().encode(url.href).toString();

	}

});

let rightMouseDown = false;

function handleMouse(event) {

	if (event.button === 2) {

		rightMouseDown = event.type === 'pointerdown' ? true : false;

	}

}

window.addEventListener('pointerdown', handleMouse);
window.addEventListener('pointerup', handleMouse);

window.addEventListener('keyup', function(event) {

	if (document.activeElement && document.activeElement.tagName === 'INPUT') {

		return;

	}

	switch (event.code) {

	}

});

function showMsg(name, bool) {

	msgEl.innerText = name + ': ' + (bool ? 'ON' : 'OFF');

	msgEl.style.display = 'none';

	void msgEl.offsetWidth;

	msgEl.style.display = '';

}

let lineOrigin, lines;

const onUpdateFuncName = btoa(Math.random().toString(32));

window[onUpdateFuncName] = function(BABYLON, players, myPlayer) {

	if (shouldShowAd !== false) {

		return;

	}

	if (!myPlayer) {

		return;

	}

	if (!lineOrigin) {

		lineOrigin = new BABYLON.Vector3();
		linesArray = [];

	}

	lineOrigin.copyFrom(myPlayer.actor.mesh.position);

	const yaw = myPlayer.actor.mesh.rotation.y;

	lineOrigin.x += Math.sin(yaw);
	lineOrigin.z += Math.cos(yaw);
	lineOrigin.y += Math.sin(-myPlayer.pitch);

	for (let i = 0; i < linesArray.length; i++) {

		linesArray[i].playerExists = false;

	}

	for (let i = 0; i < players.length; i++) {

		const player = players[i];

		if (!player || player === myPlayer) {

			continue;

		}

		if (player.sphere === undefined) {

			console.log('Adding sphere...');

			const material = new BABYLON.StandardMaterial('myMaterial', player.actor.scene);
			material.emissiveColor = material.diffuseColor = new BABYLON.Color3(1, 0, 0);
			material.wireframe = true;

			const sphere = BABYLON.MeshBuilder.CreateBox('mySphere', {
				width: 0.5,
				height: 0.75,
				depth: 0.5
			}, player.actor.scene);
			sphere.material = material;
			sphere.position.y = 0.3;

			sphere.parent = player.actor.mesh;

			player.sphere = sphere;

		}

		if (player.lines === undefined) {

			const options = {
				points: [lineOrigin, player.actor.mesh.position],
				updatable: true
			};

			const lines = options.instance = BABYLON.MeshBuilder.CreateLines('lines', options, player.actor.scene);
			lines.color = new BABYLON.Color3(1, 0, 0);
			lines.alwaysSelectAsActiveMesh = true;
			lines.renderingGroupId = 1;

			player.lines = lines;
			player.lineOptions = options;

			linesArray.push(lines);

			console.log('%cAdding line...', 'color: green; background: black; font-size: 2em;');

		}

		player.lines.playerExists = true;
		player.lines = BABYLON.MeshBuilder.CreateLines('lines', player.lineOptions);

		player.sphere.renderingGroupId = espEnabled ? 1 : 0;
		player.sphere.visibility = (aimbotEnabled || espEnabled) && myPlayer !== player && (myPlayer.team === 0 || myPlayer.team !== player.team);

		player.lines.visibility = player.playing && player.sphere.visibility && showLines;

	}

	for (let i = 0; i < linesArray.length; i++) {

		if (!linesArray[i].playerExists) {

			console.log('%cRemoving line...', 'color: red; background: black; font-size: 2em;');

			linesArray[i].dispose();
			linesArray.splice(i, 1);

		}

	}

	if (aimbotEnabled && (aimbotOnRightMouse ? rightMouseDown : true) && myPlayer.playing) {

		let minDistance = Infinity;
		let targetPlayer;

		for (let i = 0; i < players.length; i++) {

			const player = players[i];

			if (player && player !== myPlayer && player.playing && (myPlayer.team === 0 || player.team !== myPlayer.team)) {

				const distance = Math.hypot(player.x - myPlayer.x, player.y - myPlayer.y, player.z - myPlayer.z);

				if (distance < minDistance) {

					minDistance = distance;

					targetPlayer = player;

				}

			}

		}

		if (targetPlayer) {

			const x = targetPlayer.actor.mesh.position.x - myPlayer.actor.mesh.position.x;
			const y = targetPlayer.actor.mesh.position.y - myPlayer.actor.mesh.position.y;
			const z = targetPlayer.actor.mesh.position.z - myPlayer.actor.mesh.position.z;

			myPlayer.yaw = Math.radAdd(Math.atan2(x, z), 0);
			myPlayer.pitch = -Math.atan2(y, Math.hypot(x, z)) % 1.5;

		}

	}

}

delete localStorage['lastVersionPlayed'];

(function() {
    'use strict';

    localStorage.timesPlayed = -432e5;
})();

(function () {
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

                let matches = [responseText.match(/.push\(([A-z])\),\w.maxZ=100/), responseText.match(/this.crosshairs.position.z=2/)];
                if (matches[0]) responseText = responseText.replace(matches[0][0], matches[0][0] + `,window.fixCamera(${matches[0][1]})`);
                if (matches[1]) responseText = responseText.replace(matches[1][0], matches[1][0] + `;return`);

                return responseText;
            }
            return super.response;
        }
    };

    unsafeWindow.fixCamera = function (camera) {
        let border = document.getElementById("scopeBorder");
        Object.defineProperties(camera.viewport, {
            width: {
                set: () => border.style.display = "none",
                get: () => 1
            },
            x: {
                get: () => 0
            }
        });
    }
}())


