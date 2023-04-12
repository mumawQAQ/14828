// ==UserScript==
// @name         Voxiom.IO ESP & X-Ray
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Let's you see players and items behind walls in voxiom.io. Also shows names of the items that are far far away.
// @author       Zertalious (Zert)
// @match        *://voxiom.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
// @grant        none
// @run-at       document-end
// @antifeature  ads
// @require      https://unpkg.com/three@latest/build/three.min.js
// ==/UserScript==

const THREE = window.THREE;

Object.defineProperty( window, 'THREE', {
	get() {

		return undefined;

	}
} );

let showPlayers = true;
let showItems = true;
let showItemNames = true;
let showBlocks = false;

const geometry = new THREE.EdgesGeometry( new THREE.BoxGeometry( 1, 1, 1 ).translate( 0, 0.5, 0 ) );

function MyMaterial( color ) {

	return new THREE.RawShaderMaterial( {
		vertexShader: `

		attribute vec3 position;

		uniform mat4 projectionMatrix;
		uniform mat4 modelViewMatrix;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = 1.0;

		}

		`,
		fragmentShader: `

		precision mediump float;

		uniform vec3 color;

		void main() {

			gl_FragColor = vec4( color, 1.0 );

		}

		`,
		uniforms: {
			color: { value: new THREE.Color( color ) }
		}
	} );

}

let worldScene;

WeakMap.prototype.set = new Proxy( WeakMap.prototype.set, {
	apply( target, thisArgs, [ scene ] ) {

		if ( scene.type === 'Scene' && scene.children.length === 9 ) {

			worldScene = scene;

			window.scene = scene; 

		}

		return Reflect.apply( ...arguments );

	}
} );

function animate() {

	if ( worldScene ) {

		const entities = worldScene.children[ 5 ].children;

		for ( let i = 0; i < entities.length; i ++ ) {

			const entity = entities[ i ];

			if ( entity.children.length === 0 ) {

				continue;

			}

			if ( ! entity.myBox ) {

				const box = new THREE.LineSegments( geometry );

				const name = entity.children[ 0 ].name;

				if ( name === 'Parachute' ) {

					entity.isPlayer = true;

					box.material = MyMaterial( 'red' );

					console.log( entity );

					box.scale.set( 0.5, 1.25, 0.5 );

				} else {

					entity.isBlock = name === 'BlockModel';

					box.material = MyMaterial( 'gold' );
					box.scale.setScalar( 0.25, 0.1, 0.25 );

					if ( entity.isBlock === false ) {

						const fontSize = 40;
						const strokeSize = 8;
						const font = 'bolder ' + fontSize + 'px Arial';

						const canvas = document.createElement( 'canvas' );

						const ctx = canvas.getContext( '2d' );

						ctx.font = font;

						canvas.width = ctx.measureText( name ).width + strokeSize * 2;
						canvas.height = fontSize + strokeSize * 2;

						ctx.font = font;

						ctx.fillStyle = 'white';
						ctx.textBaseline = 'top';
						ctx.textAlign = 'left';

						ctx.lineWidth = strokeSize;
						ctx.strokeText( name, strokeSize, strokeSize );

						ctx.fillText( name, strokeSize, strokeSize );

						const sprite = new THREE.Sprite( new THREE.SpriteMaterial( {
							map: new THREE.CanvasTexture( canvas ), 
							sizeAttenuation: false,
							fog: false, 
							depthTest: false, 
							depthWrite: false
						} ) );

						sprite.scale.y = 0.035;
						sprite.scale.x = sprite.scale.y * canvas.width / canvas.height;

						sprite.position.y = sprite.scale.y + 0.1;

						entity.add( sprite );

						entity.mySprite = sprite;

					}

				}
				
				entity.add( box );

				entity.myBox = box;

			}

			if ( entity.isPlayer ) {

				entity.myBox.visible = showPlayers;

			} else if ( entity.isBlock ) {

				entity.myBox.visible = showBlocks;

			} else {

				entity.myBox.visible = showItems;
				entity.mySprite.visible = showItemNames;

			}

		}
	
	}

}

window.requestAnimationFrame = new Proxy( window.requestAnimationFrame, {
	apply( target, thisArgs, args ) {

		args[ 0 ] = new Proxy( args[ 0 ], {
			apply() {

				if ( typeof shouldShowAd === 'boolean' && shouldShowAd === false ) {

					animate();

				}

				return Reflect.apply( ...arguments );

			}
		} );

		return Reflect.apply( ...arguments );

	}
} );

const value = parseInt( new URLSearchParams( window.location.search ).get( 'showAd' ), 16 );

const shouldShowAd = isNaN( value ) || Date.now() - value < 0 || Date.now() - value > 10 * 60 * 1000;

const el = document.createElement( 'div' );

el.innerHTML = `<style>

.dialog {
	position: absolute;
	left: 50%;
	top: 50%;
	padding: 20px;
	background: rgba(50, 0, 0, 0.8);
	border: 6px solid rgba(0, 0, 0, 0.2);
	color: #fff;
	transform: translate(-50%, -50%);
	box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.3);
	text-align: center;
	z-index: 999999;
}

.dialog * {
	color: #fff;
}

.close {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 20px;
	height: 20px;
	opacity: 0.5;
	cursor: pointer;
}

.close:before, .close:after {
	content: ' ';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: 20%;
	transform: translate(-50%, -50%) rotate(-45deg);
	background: #fff;
}

.close:after {
	transform: translate(-50%, -50%) rotate(45deg);
}

.close:hover {
	opacity: 1;
}

.dialog .btn {
	cursor: pointer;
	padding: 0.5em;
	background: hsla(0, 67%, 44%, 0.7);
	border: 3px solid rgba(0, 0, 0, 0.2);
}

.dialog .btn:active {
	transform: scale(0.8);
}

.msg {
	position: absolute;
	left: 10px;
	bottom: 10px;
	background: rgba(50, 0, 0, 0.8);
	color: #fff;
	padding: 15px;
	animation: msg 0.5s forwards, msg 0.5s reverse forwards 3s;
	z-index: 999999;
	pointer-events: none;
}

.msg, .dialog {
	font-family: cursive;
}

@keyframes msg {
	from {
		transform: translate(-120%, 0);
	}

	to {
		transform: none;
	}
}

</style>
<div class="dialog">${shouldShowAd ? `<big>Loading ad...</big>` : `<div class="close" onclick="this.parentNode.style.display='none';"></div>
	<big>Voxiom.IO ESP & X-Ray</big>
	<br>
	<br>
	Keys:
	<br>
	[V] to show/hide players
	<br>
	[I] to show/hide items
	<br>
	[N] to show/hide item names
	<br>
	[L] to show/hide blocks
	<br>
	[H] to show/hide help
	<br>
	<br>
	By Zertalious
	<br>
	<br>
	<div style="display: grid; grid-gap: 8px; grid-template-columns: 1fr 1fr;">
		<div class="btn" onclick="window.open('https://discord.gg/K24Zxy88VM', '_blank')">Discord</div>
		<div class="btn" onclick="window.open('https://www.instagram.com/zertalious/', '_blank')">Instagram</div>
		<div class="btn" onclick="window.open('https://twitter.com/Zertalious', '_blank')">Twitter</div>
		<div class="btn" onclick="window.open('https://greasyfork.org/en/users/662330-zertalious', '_blank')">More scripts</div>
	</div>
	` }
</div>
<div class="msg" style="display: none;"></div>`;

const msgEl = el.querySelector( '.msg' );
const dialogEl = el.querySelector( '.dialog' );

while ( el.children.length > 0 ) {

	document.body.appendChild( el.children[ 0 ] );

}

if ( shouldShowAd ) {

	const url = new URL( window.location.href );

	url.searchParams.set( 'showAd', Date.now().toString( 16 ) );
	url.searchParams.set( 'scriptVersion', GM.info.script.version );

	window.location.href = 'https://zertalious.xyz?ref=' + new TextEncoder().encode( url.href ).toString();

}

window.addEventListener( 'keyup', function ( event ) {

	switch ( event.code ) {

		case 'KeyV':
			showPlayers = ! showPlayers;
			showMsg( 'Show Players', showPlayers );
			break;

		case 'KeyI':
			showItems = ! showItems;
			showMsg( 'Show Items', showItems );
			break;

		case 'KeyN':
			showItemNames = ! showItemNames;
			showMsg( 'Item Names', showItemNames );
			break;

		case 'KeyL':
			showBlocks = ! showBlocks;
			showMsg( 'Show Blocks', showBlocks );
			break;

		case 'KeyH':
			dialogEl.style.display = dialogEl.style.display === '' ? 'none' : '';
			break;

	}

} );

function showMsg( name, bool ) {

	msgEl.innerText = name + ': ' + ( bool ? 'ON' : 'OFF' );
 
	msgEl.style.display = 'none';
	
	void msgEl.offsetWidth;

	msgEl.style.display = '';

}