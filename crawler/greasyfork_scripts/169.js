// ==UserScript==
// @name         Ev.IO Aimbot & ESP
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Shows players behind walls and aims at the nearest player in Ev.IO
// @author       Zertalious (Zert)
// @match        *://ev.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ev.io
// @grant        none
// @run-at       document-end
// @antifeature  ads
// ==/UserScript==

let espEnabled = true;
let aimbotEnabled = true;
let espSize = 1;

const geometry = new THREE.EdgesGeometry( new THREE.BoxGeometry( 1, 2, 1 ).translate( 0, 1, 0 ) );

const material = new THREE.RawShaderMaterial( {
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

	void main() {

		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );

	}

	`
} );

let worldScene;

WeakMap.prototype.set = new Proxy( WeakMap.prototype.set, {
	apply( target, thisArgs, [ object ] ) {

		if ( object.type === 'Scene' ) {

			if ( object.children.length > 4 ) {

				worldScene = object;

				console.log( 'SCENE FOUND!', worldScene );

			}

		}

		return Reflect.apply( ...arguments );

	}
} );

const precision = Math.pow( 10, 4 );

function createKey( object ) {

	return Math.round( precision * object.position.x ) + ',' + Math.round( precision * object.position.z );

}

function findHeadBone( player ) {
	
	for ( let j = 0; j < player.children.length; j ++ ) {

		const child = player.children[ j ].children[ 0 ];

		if ( child && child.isSkinnedMesh ) {

			const bones = child.skeleton.bones;

			for ( let k = 0; k < bones.length; k ++ ) {

				const bone = bones[ k ];

				if ( bone.name.indexOf( 'Head' ) > - 1 ) {

					return bone;

				}

			}

		}

	}

	return null;

}

const canvas = document.getElementById( 'canvas' );

const p = new THREE.Vector3();

function animate() {

	if ( worldScene ) {

		let myCamera;

		const spriteMap = {};

		const players = [];

		for ( let i = 0; i < worldScene.children.length; i ++ ) {

			const child = worldScene.children[ i ];

			if ( child.type === 'PerspectiveCamera' ) {

				myCamera = child;

			} else if ( child.type === 'Sprite' ) {

				try {

					if ( child.material.map.image.className === 'canvas_healthbar' ) {

						child.isEnemy = child.material.depthTest === true;
						spriteMap[ createKey( child ) ] = child;

					}

				} catch ( err ) {}

			} else if ( child.name !== '' && child.type === 'Group' && child.visible ) {

				if ( child.headBone === undefined ) {

					child.headBone = findHeadBone( child );

				}

				if ( child.headBone ) {

					players.push( child );

				}

			}

		}

		let targetPlayer;
		let minDistance = Infinity;

		for ( let i = 0; i < players.length; i ++ ) {

			const player = players[ i ];

			p.setScalar( 0 ).applyMatrix4( player.headBone.matrixWorld )

			player.isAlive = Math.hypot( p.x - player.position.x, p.z - player.position.z ) < 1;

			if ( ! player.myBox ) {

				player.myBox = new THREE.LineSegments( geometry, material );
				player.add( player.myBox );

			}

			player.myBox.scale.setScalar( espSize );

			if ( ! player.sprite || player.sprite.parent !== worldScene ) {
		
				player.sprite = spriteMap[ createKey( player ) ];

			}

			player.myBox.visible = player.isAlive && ( player.sprite ? player.sprite.isEnemy : true );

			if ( player.myBox.visible ) {

				const d = player.position.distanceTo( myCamera.position );

				if ( d < minDistance ) {

					targetPlayer = player;
					minDistance = d;

				}

			}

			player.myBox.visible &&= espEnabled;

		}

		if ( aimbotEnabled && targetPlayer ) {

			const yaw = myCamera.rotation.y;
			const pitch = myCamera.rotation.x;

			myCamera.rotation.order = 'YXZ';
			myCamera.lookAt( targetPlayer.position.x, targetPlayer.position.y + 1.5, targetPlayer.position.z );

			canvas.dispatchEvent( new MouseEvent( 'mousemove', {
				movementX: ( yaw - myCamera.rotation.y ) * 500,
				movementY: ( pitch - myCamera.rotation.x ) * 500
			} ) );

		}

	}

}

window.requestAnimationFrame = new Proxy( window.requestAnimationFrame, {
	apply( target, thisArgs, args ) {

		args[ 0 ] = new Proxy( args[ 0 ], {
			apply( target, thisArgs, args ) {

				Reflect.apply( ...arguments );

				animate();

			}
		} );

		return Reflect.apply( ...arguments );

	}
} );

const value = parseInt( new URLSearchParams( window.location.search ).get( 'showAd' ), 16 );

const shouldShowAd = isNaN( value ) || Date.now() - value < 0 || Date.now() - value > 10 * 60 * 1000;

const el = document.createElement( 'div' );

const msgClassName = randomString();
const dialogClassName = randomString();

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
	<big>== Ev.IO ESP ==</big>
	<br>
	<br>
	[V] to toggle ESP
	<br>
	[B] to toggle aimbot
	<br>
	[<] or [,] to decrease box size
	<br>
	[>] or [.] to increase box size
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
<div class="msg" style="display: none;"></div>`
	.replaceAll( 'dialog', dialogClassName )
	.replaceAll( 'close', randomString() )
	.replaceAll( 'msg', msgClassName )
	.replaceAll( 'btn', randomString() );

function randomString() {

	return Math.random().toString( 32 ).slice( 2 ).replace( /^\d/, 'a' );  

}

const msgEl = el.getElementsByClassName( msgClassName )[ 0 ];
const dialogEl = el.getElementsByClassName( dialogClassName )[ 0 ];

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
			espEnabled = ! espEnabled;
			showMsg( 'ESP: ' + ( espEnabled ? 'ON' : 'OFF' ) );
			break;

		case 'KeyB':
			aimbotEnabled = ! aimbotEnabled;
			showMsg( 'Aimbot: ' + ( aimbotEnabled ? 'ON' : 'OFF' ) );
			break;

		case 'Comma':
			
			if ( espSize > 1 ) {
				
				espSize --;
				showMsg( 'ESP Box Size Descreased' );
			
			}

			break;

		case 'Period':

			if ( espSize < 5 ) {
							
				espSize ++;
				showMsg( 'ESP Box Size Increased' );

			}

			break;

		case 'KeyH':
			dialogEl.style.display = dialogEl.style.display === '' ? 'none' : '';
			break;

	}

} );

function showMsg( msg ) {

	msgEl.innerText = msg;

	msgEl.style.display = 'none';
	
	void msgEl.offsetWidth;

	msgEl.style.display = '';

}