//	<>--DISCLAIMER--<>
/*
This autoplayer JavaScript script is intended for educational purposes only. It is not intended to be used for cheating or exploiting gameplay in any way. By downloading and using this script, you understand and agree that you are solely responsible for your actions.
We do not endorse the use of this script on public servers, as it may violate the terms of service of the game and could result in consequences such as account bans or legal action. We recommend that you only use this script on private servers where you have permission to do so.
Please note that while this script is designed to mimic the behavior of a real player, we cannot guarantee that it will not be detected by the game's anti-cheat measures. Using this script on public servers may result in your account being flagged or banned.
We are not responsible for any consequences that may arise from the use of this script. By downloading and using it, you agree to assume all risks and liabilities associated with its use.
Thank you for your understanding and for using this script responsibly.
*/

// ==UserScript==
// @name         SHELLSHOCKER AUTOPLAYER
// @namespace    http://tampermonkey.net/
// @version      1
// @description  It uses autoaim to move to the closest player, then start shooting while turning around him if he is close enough. There are a lot of small features, for example, if he dosen't have any bullets left he will fight with his hands.
// @author       KRAKENMIGHT
// @license MIT
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
// @require https://code.jquery.com/jquery-latest.min.js

var bullets = 40;
var dynamite =80;
var x = 0;
var y = 0;
var z = 0;
var pas = 300;
var real = 0;
var distance = 0;

//distance de rechargement
var DR0 = 18;
var DRJ = 18;

//session var
var totalDeath = 0;
var totalKill = 0;

//game var
var Death = 0;
var Kill = 0;

//var to prevent false data
var confirmKill=1;
var confirmDeath=1;

//var used to prevent data problems
var alive =0;

window.XMLHttpRequest = class extends window.XMLHttpRequest {

	open( method, url ) {

		if ( url.indexOf( 'shellshock.js' ) > - 1 ) {

			this.isScript = true;

		}

		return super.open( ...arguments );

	}

	get response() {

		if ( this.isScript ) {

			const code = super.response;

			let babylonVarName,
				playersVarName,
				myPlayerVarName,
				sceneVarName,
				cullFuncName;

			try {

				babylonVarName = /this\.origin=new ([a-zA-Z]+)\.Vector3/.exec( code )[ 1 ];
				playersVarName = /([^,]+)=\[\],{}/.exec( code )[ 1 ];
				myPlayerVarName = /"fire":document.pointerLockElement&&([^&]+)&&/.exec( code )[ 1 ];
				sceneVarName = /createMapCells\(([^,]+),/.exec( code )[ 1 ];
				cullFuncName = /=([a-zA-Z_$]+)\(this\.mesh,\.[0-9]+\)/.exec( code )[ 1 ];

			} catch ( error ) {

				alert( 'Script failed to inject. Report the issue to the script developer.\n' + JSON.stringify( getVars(), undefined, 2 ) );

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

			console.log( '%cInjecting code...', 'color: red; background: black; font-size: 2em;', getVars() );

			return code.replace( sceneVarName + '.render()', `
					window[ '${onUpdateFuncName}' ](
						${babylonVarName},
						${playersVarName},
						${myPlayerVarName}
					);
				${sceneVarName}.render()` )
				.replace( `function ${cullFuncName}`, `
					function ${cullFuncName}() {
						return true;
					}
				function someFunctionWhichWillNeverBeUsedNow` );

		}

		return super.response;

	}

};

let espEnabled = true;
let aimbotEnabled = true;
let showLines = true;
let aimbotOnRightMouse = false;


//to delete
const value = parseInt( new URLSearchParams( window.location.search ).get( 'showAd' ), 16 );
const shouldShowAd = isNaN( value ) || Date.now() - value < 0 || Date.now() - value > 10 * 60 * 1000;

const temp = document.createElement( 'div' );

temp.innerHTML = `<style>
.info {
	position: absolute;
	left: 50%;
	top: 5%;
	padding: 20px;
	background: rgba(0, 0, 0, 0.8);
	border: 6px solid rgba(0, 0, 0, 0.2);
	color: #fff;
	transform: translate(-50%, -50%);
	text-align: center;
	z-index: 999999;
	font-weight: bolder;
}
.info * {
	color: #fff;
}
.close-icon {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 20px;
	height: 20px;
	opacity: 0.5;
	cursor: pointer;
}
.close-icon:before, .close-icon:after {
	content: ' ';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: 20%;
	transform: translate(-50%, -50%) rotate(-45deg);
	background: #fff;
}
.close-icon:after {
	transform: translate(-50%, -50%) rotate(45deg);
}
.close-icon:hover {
	opacity: 1;
}
.btn {
	cursor: pointer;
	padding: 0.5em;
	background: red;
	border: 3px solid rgba(0, 0, 0, 0.2);
}
.btn:active {
	transform: scale(0.8);
}
.msg {
	position: absolute;
	left: 10px;
	bottom: 10px;
	color: #fff;
	background: rgba(0, 0, 0, 0.6);
	font-weight: bolder;
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
<div class="msg" style="display: none;"></div>
<div class="info">${shouldShowAd ? `<big>Created by KRAKENMIGHT</big>` : `<div class="close-icon" onclick="this.parentNode.style.display='none';"></div>
	<big>== Aimbot & ESP ==</big>
	<br>
	<br>
	[B] to toggle aimbot
	<br>
	[V] to toggle ESP
	<br>
	[N] to toggle ESP Lines
	<br>
	[L] to toggle aimbot on <br>right mouse hold
	<br>
	[H] to show/hide help
	<br>
	<br>
	By KRAKENMIGHT
	<br>
	<br>
	<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5px;">
		<div class="btn" onclick="window.open('https://discord.gg/', '_blank')">Discord</div>
		<div class="btn" onclick="window.open('https://www.instagram.com/that_one_gnome_user/', '_blank')">Instagram</div>
		<div class="btn" onclick="window.open('https://twitter.com/', '_blank')">Twitter</div>
		<div class="btn" onclick="window.open('https://greasyfork.org/en/users', '_blank')">More scripts</div>
	</div>
	` }
</div>`;

const msgEl = temp.querySelector( '.msg' );
const infoEl = temp.querySelector( '.info' );

window.addEventListener( 'DOMContentLoaded', async function () {

	while ( temp.children.length > 0 ) {

		document.body.appendChild( temp.children[ 0 ] );
        const onUpdateFuncName = btoa( Math.random().toString( 32 ) );

	}

	if ( !shouldShowAd ) {

		const url = new URL( window.location.href );

		url.searchParams.set( 'showAd', Date.now().toString( 16 ) );
		url.searchParams.set( 'scriptVersion', GM.info.script.version );

	}

} );

let rightMouseDown = false;

function handleMouse( event ) {

	if ( event.button === 2 ) {

		rightMouseDown = event.type === 'pointerdown' ? true : false;

	}

}

window.addEventListener( 'pointerdown', handleMouse );
window.addEventListener( 'pointerup', handleMouse );

window.addEventListener( 'keyup', function ( event ) {

	if ( document.activeElement && document.activeElement.tagName === 'INPUT' ) {

		return;

	}

	switch ( event.code ) {

		case 'KeyB' :

			aimbotEnabled = ! aimbotEnabled;

			showMsg( 'Aimbot', aimbotEnabled );

			break;

		case 'KeyV' :

			espEnabled = ! espEnabled;

			showMsg( 'ESP', espEnabled );

			break;

		case 'KeyN' :

			showLines = ! showLines;

			showMsg( 'ESP Lines', showLines );

			break;

		case 'KeyH' :

			infoEl.style.display = infoEl.style.display === '' ? 'none' : '';

			break;

		case 'KeyL' :

			aimbotOnRightMouse = ! aimbotOnRightMouse;

			showMsg( 'Aimbot On Right Mouse Hold', aimbotOnRightMouse );

			break;

	}

} );

function showMsg( name, bool ) {

	msgEl.innerText = name + ': ' + ( bool ? 'ON' : 'OFF' );

	msgEl.style.display = 'none';

	void msgEl.offsetWidth;

	msgEl.style.display = '';

}

let lineOrigin, lines;

const onUpdateFuncName = btoa( Math.random().toString( 32 ) );

window[ onUpdateFuncName ] = function ( BABYLON, players, myPlayer ) {


	if ( !shouldShowAd !== false ) {

		return;

	}

	if ( ! myPlayer ) {

		return;

	}

	if ( ! lineOrigin ) {

		lineOrigin = new BABYLON.Vector3();
		linesArray = [];

	}

	lineOrigin.copyFrom( myPlayer.actor.mesh.position );

	const yaw = myPlayer.actor.mesh.rotation.y;

	lineOrigin.x += Math.sin( yaw );
	lineOrigin.z += Math.cos( yaw );
	lineOrigin.y += Math.sin( - myPlayer.pitch );

	for ( let i = 0; i < linesArray.length; i ++ ) {

		linesArray[ i ].playerExists = false;

	}

	for ( let i = 0; i < players.length; i ++ ) {

		const player = players[ i ];

		if ( ! player || player === myPlayer ) {

			continue;

		}

		if ( player.sphere === undefined ) {

			console.log( 'Adding sphere...' );

			const material = new BABYLON.StandardMaterial( 'myMaterial', player.actor.scene );
			material.emissiveColor = material.diffuseColor = new BABYLON.Color3( 1, 0, 1 );
			material.wireframe = true;

			const sphere = BABYLON.MeshBuilder.CreateBox( 'mySphere', { width: 0.5, height: 0.75, depth: 0.5 }, player.actor.scene );
			sphere.material = material;
			sphere.position.y = 0.3;

			sphere.parent = player.actor.mesh;

			player.sphere = sphere;

		}

		if ( player.lines === undefined ) {

			const options = {
				points: [ lineOrigin, player.actor.mesh.position ],
				updatable: true
			};

			const lines = options.instance = BABYLON.MeshBuilder.CreateLines( 'lines', options, player.actor.scene );
			lines.color = new BABYLON.Color3( 1, 0, 1 );
			lines.alwaysSelectAsActiveMesh = true;
			lines.renderingGroupId = 1;

			player.lines = lines;
			player.lineOptions = options;

			linesArray.push( lines );

			console.log( '%cAdding line...', 'color: green; background: black; font-size: 2em;' );

		}

		player.lines.playerExists = true;
		player.lines = BABYLON.MeshBuilder.CreateLines( 'lines', player.lineOptions );

		player.sphere.renderingGroupId = espEnabled ? 1 : 0;
		player.sphere.visibility = ( aimbotEnabled || espEnabled ) && myPlayer !== player && ( myPlayer.team === 0 || myPlayer.team !== player.team );

		player.lines.visibility = player.playing && player.sphere.visibility && showLines;

	}

	for ( let i = 0; i < linesArray.length; i ++ ) {

		if ( ! linesArray[ i ].playerExists ) {

			console.log( '%cRemoving line...', 'color: red; background: black; font-size: 2em;' );

			linesArray[ i ].dispose();
			linesArray.splice( i, 1 );

		}

	}

	//custom

	const k_space = new KeyboardEvent('keydown', {
    	key: ' ',
    	code: 'Space',
    	which: 32,
    	keyCode: 32,
    	charCode: 32,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_spaceBis = new KeyboardEvent('keyup', {
    	key: ' ',
    	code: 'Space',
    	which: 32,
    	keyCode: 32,
    	charCode: 32,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_q = new KeyboardEvent('keydown', {
    	key: 'q',
    	code: 'q',
    	which: 81,
    	keyCode: 81,
    	charCode: 81,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_qBis = new KeyboardEvent('keyup', {
    	key: 'q',
    	code: 'q',
    	which: 81,
    	keyCode: 81,
    	charCode: 81,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_d = new KeyboardEvent('keydown', {
    	key: 'd',
    	code: 'd',
    	which: 68,
    	keyCode: 68,
    	charCode: 68,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_dBis = new KeyboardEvent('keyup', {
    	key: 'd',
    	code: 'd',
    	which: 68,
    	keyCode: 68,
    	charCode: 68,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_y = new KeyboardEvent('keydown', {
    	key: 'y',
    	code: 'y',
    	which: 89,
    	keyCode: 89,
    	charCode: 89,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_yBis = new KeyboardEvent('keyup', {
    	key: 'y',
    	code: 'y',
    	which: 89,
    	keyCode: 89,
    	charCode: 89,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_z = new KeyboardEvent('keydown', {
    	key: 'z',
    	code: 'z',
    	which: 90,
    	keyCode: 90,
    	charCode: 90,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_zBis = new KeyboardEvent('keyup', {
    	key: 'z',
    	code: 'z',
    	which: 90,
    	keyCode: 90,
    	charCode: 90,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_s = new KeyboardEvent('keydown', {
    	key: 's',
    	code: 's',
    	which: 83,
    	keyCode: 83,
    	charCode: 83,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_sBis = new KeyboardEvent('keyup', {
    	key: 's',
    	code: 's',
    	which: 83,
    	keyCode: 83,
    	charCode: 83,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_r = new KeyboardEvent('keydown', {
    	key: 'r',
    	code: 'r',
    	which: 82,
    	keyCode: 82,
    	charCode: 82,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_rBis = new KeyboardEvent('keyup', {
    	key: 'r',
    	code: 'r',
    	which: 82,
    	keyCode: 82,
    	charCode: 82,
    	bubbles: true,
    	cancelable: true,
  	});
    const k_w = new KeyboardEvent('keydown', {
    	key: 'w',
    	code: 'w',
    	which: 87,
    	keyCode: 87,
    	charCode: 87,
    	bubbles: true,
    	cancelable: true,
  	});
  	const k_wBis = new KeyboardEvent('keyup', {
    	key: 'w',
    	code: 'w',
    	which: 87,
    	keyCode: 87,
    	charCode: 87,
    	bubbles: true,
    	cancelable: true,
  	});



    //end custom

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function randomInRange(x) {
        return Math.floor(Math.random() * (2 * x + 1)) - x;
    }


    function isElementVisibleByXPath(xpath) {
        var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    }

    //function to count number of death and kills
    var isDeathBoxVisible = isElementVisibleByXPath('//*[@id="deathBox"]');
    if (isDeathBoxVisible && confirmDeath==1) {
        confirmDeath=0;
        setTimeout(function() {
            console.log('Fin de la pause de 5 secondes');
            totalDeath++;
            Death++;
            console.log('Player just died nb of deaths :'+totalDeath);
            confirmDeath=1;
            alive=0;
            //machine learning part
            if(kill>3){
                DR0=DR0+(DRJ*0.1);
            }else{
                DR0=DR0-(DRJ*0.05);
            }
            console.log('DDDDDDDDDDDDDDDDDDDDRRRRRRRRRRRRRRRRRRRRRR0000000000'+DR0);
            kill=0;
        }, 5000);
    }
    var isKillBoxVisible = isElementVisibleByXPath('//*[@id="killBox"]');
    if (isKillBoxVisible && confirmKill==1) {
        confirmKill=0;
        setTimeout(function() {
            console.log('Fin de la pause de 5 secondes');
            totalKill++;
            Kill++;
            console.log('Player just killed someone nb of kills :'+totalKill);
            confirmKill=1;
        }, 5000);
    }else{
        console.log('Total kills :'+totalKill+' Total deaths :'+totalDeath);
    }

    if(!myPlayer.playing && alive==0){
        alive=1
        DRJ = DRJ + randomInRange(DRJ);
    }




    //button jouer, dosen't work for the moment
    /*
    var button = document.evaluate('/html/body/div[7]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/button[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // Créer un nouvel événement de clic de souris
    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    // Simuler le clic de souris sur le bouton
    if (button) {
        button.dispatchEvent(event);
    }
    var button = document.evaluate('/html/body/div[7]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/button[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // Cliquer sur le bouton
    if (button) {
        button.click();
    }
    */
    /*
    var buttons = document.getElementsByTagName('button');
    // Parcourir tous les boutons et cliquer sur celui qui contient le texte 'Jouer'
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === 'Jouer') {
            buttons[i].click();
            console.log("---------NEW GAME---------");
            break; // Sortir de la boucle après avoir cliqué sur le bouton
        }
        else{
            console.log('IIIIII : '+i+ buttons[i].textContent);
        }
    }
    */

	if ( aimbotEnabled && ( aimbotOnRightMouse ? rightMouseDown : true ) && myPlayer.playing) {

		let minDistance = Infinity;
		let targetPlayer;
		var tempvar = 0;
		var walk = 0;
        var kill = 0;
        var last_distance=0;

        if(3<2){
            var buttons = document.getElementsByTagName('button');

            // Parcourir tous les boutons et cliquer sur celui qui contient le texte 'Jouer'
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].textContent === 'Jouer') {
                    buttons[i].click();
                    console.log("---------NEW GAME---------");
                    break; // Sortir de la boucle après avoir cliqué sur le bouton
                }
                else{
                    console.log('IIIIII : '+i);
                }
            }



            // Trouver le bouton par son sélecteur de classe
            /*
            try {
                var button = document.querySelector('.ss_button.btn_big.btn-respawn.ss_button.btn_yolk.bevel_yolk');
                button.click();
            }
            catch(err) {
                document.getElementById("demo").innerHTML = err.message;
            }
            */
            // Simuler un clic sur le bouton

            //document.querySelector('div[onclick^="window.location.href=\'running.asp"]').click();
            //document.getElementsByClassName("ss_button btn_big btn-respawn ss_button btn_yolk bevel_yolk").click();
            //document.getElementsByClassName("ss_button btn_big btn-respawn ss_button btn_yolk bevel_yolk").click();

        }

		for ( let i = 0; i < players.length; i ++ ) {

			const player = players[ i ];

			if ( player && player !== myPlayer && player.playing && ( myPlayer.team === 0 || player.team !== myPlayer.team ) ) {



				distance = Math.hypot( player.x - myPlayer.x, player.y - myPlayer.y, player.z - myPlayer.z );
                last_distance = distance;
                //console.log( 'BULLETS :'+bullets );

                showMsg( 'DISTANCE :'+distance, aimbotOnRightMouse );
                //check if player is near or not to reload

                if(distance>DRJ){
                    //reloading
                    if(2<3){
                        showMsg( 'REALODING AND DISTANCE :'+distance);
                        document.dispatchEvent(k_r);
                        document.dispatchEvent(k_rBis);
                        kill=0;
                    }
                }

				if ( distance < minDistance ) {
					minDistance = distance;
					targetPlayer = player;


					if(distance<=2 && y!=0){
                        //document.dispatchEvent(k_w);
                        //document.dispatchEvent(k_wBis);
						kill=1;
						document.dispatchEvent(k_d);
						document.dispatchEvent(k_y);
                        //bullets--;
                        //dynamite--;
						document.dispatchEvent(k_space);

                        if(dynamite==0){
                            console.log( 'DYNAMITE!!!' );
                            dynamite=80;
                        }
                        else{
                            if(distance<=1){
                                walk=1;
                                document.dispatchEvent(k_w);
                                document.dispatchEvent(k_wBis);
                                //document.dispatchEvent(k_q);
                                document.dispatchEvent(k_zBis);
                                document.dispatchEvent(k_s);
                                //document.dispatchEvent(k_qBis);
                            }
                            else{
                                document.dispatchEvent(k_sBis);
                                document.dispatchEvent(k_z);
                                document.dispatchEvent(k_space);
                                walk=0;
                            }
                        }

					}
					else{
                        document.dispatchEvent(k_sBis);
                        document.dispatchEvent(k_z);
                        document.dispatchEvent(k_space);
                        walk=0;
						document.dispatchEvent(k_yBis);
						//document.dispatchEvent(k_spaceBis);
						document.dispatchEvent(k_dBis);
						//document.dispatchEvent(k_r);
						//document.dispatchEvent(k_rBis);
						tempvar=0;
					}




				}

			}

		}

		if ( targetPlayer ) {
            pas--;
            if(pas==0){
                real=(Math.random()* 0.2 - 0.2);
                //+distance*0.2-1.2
                pas=75;
                console.log('CHANGED ANTI-AIMBOT VALUE : '+real);
            }

			x = targetPlayer.actor.mesh.position.x - myPlayer.actor.mesh.position.x + real;
            if((targetPlayer.actor.mesh.position.y-myPlayer.actor.mesh.position.y)<-1.2 || (targetPlayer.actor.mesh.position.y-myPlayer.actor.mesh.position.y)>1.2){
                console.log('2 high 4 this');
                y = 0;
            }
            else{
                y = targetPlayer.actor.mesh.position.y - myPlayer.actor.mesh.position.y + real;
            }
			z = targetPlayer.actor.mesh.position.z - myPlayer.actor.mesh.position.z + real;

			myPlayer.yaw = Math.radAdd( Math.atan2( x, z ), 0 );
            myPlayer.pitch = - Math.atan2( y, Math.hypot( x, z ) ) % 1.5;
            //console.log('YAW'+myPlayer.yaw);
            //console.log('pitch'+myPlayer.pitch);
            console.log('X :'+x+' Y :'+y+' Z :'+z);


		}

	}

}

delete localStorage[ 'lastVersionPlayed' ];