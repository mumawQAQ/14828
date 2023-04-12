// ==UserScript==
// @name         Voxiom.IO RAINBOW BOX ESP
// @namespace    http://tampermonkey.net/
// @version      0.69696969
// @description  vixiom.io 3d box rainbow esp by PR3DATOR
// @author       PR3DATOR
// @match        *://voxiom.io/*
// @license MIT
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://unpkg.com/three@latest/build/three.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Check if user has already answered the popup
    if (localStorage.getItem('popupAnswered3') === 'yes') {
        return;
    }

    // Create popup
    var popup = confirm("Join Cheat Discord Server?");

    // If user clicks "Yes", redirect to discord.com and store the answer in local storage
    if (popup == true) {
        localStorage.setItem('popupAnswered3', 'yes');
        window.location.href = "https://discord.gg/Jzt99c6Wgj";
    } else {
        // If user clicks "No", store the answer in local storage
        localStorage.setItem('popupAnswered3', 'no');
    }
})();

let playersVisible = true;

window.addEventListener( 'keyup', function ( event ) {
    if(event.code === 'KeyV') {
        playersVisible = ! playersVisible;
    }
});

const THREE = window.THREE;
const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.0, 1.0, 1.0).translate(0, 0.5, 0));

//Prevents items from getting dropped when detected
Object.defineProperty( window, 'THREE', {get() {return undefined;}});

let currentColor = 0;

function makeHitbox() {
    let hitbox = new THREE.LineSegments(geo);
    hitbox.material = new THREE.RawShaderMaterial({
        vertexShader: `attribute vec3 position;uniform mat4 projectionMatrix;uniform mat4 modelViewMatrix;void main() {gl_Position = projectionMatrix*modelViewMatrix*vec4( position, 1.0 );gl_Position.z = 1.0;}`,
        fragmentShader: `precision mediump float;uniform vec3 color;void main() {gl_FragColor = vec4( color, 1.0 );}`,
        uniforms: {color: {value: new THREE.Color(`hsl(${currentColor}, 100%, 50%)`)}}
    });
    hitbox.scale.set(0.4, 1.2, 0.4);
    return hitbox;
}

let gameScene;
WeakMap.prototype.set = new Proxy(WeakMap.prototype.set, {apply(t, args, [scene]) {
    if(scene.type === 'Scene') {
        if(scene.children.length === 9) {
            window.scene = scene;
            gameScene = scene;
        }
    }
    return Reflect.apply( ...arguments );
}});

window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {apply(target, args, args2){
    args2[0] = new Proxy(args2[0], {
        apply() {
            if(gameScene == null) { return; }

            currentColor = (currentColor + 1) % 360; // Erhöht den Wert von currentColor um 1 und setzt ihn auf 0, wenn er 360 erreicht hat

            const allEntities = gameScene.children[5].children;
            for ( let i = 0; i < allEntities.length; i++ ) {
                const entity = allEntities[ i ];
                if (entity.children.length === 0) {
                    continue;
                }
                if (!entity.HitBox) {
                    const name = entity.children[0].name;
                    //Game scene saves name as parachute, hence can be used to recognize a player
                    if (name === 'Parachute') {
                        entity.isPlayer = true;
                        //Generates a hitbox for the player
                        let hitbox = makeHitbox();
                        entity.add(hitbox);
                        entity.HitBox = hitbox;
                    }
                }
                if (entity.HitBox != null) {
                    entity.HitBox.material.uniforms.color.value = new THREE.Color(`hsl(${currentColor}, 100%, 50%)`); // Aktualisiert die Farbe der Hitbox
                    entity.HitBox.visible = playersVisible;
                }
            }
            return Reflect.apply( ...arguments );
        }
    });
    return Reflect.apply( ...arguments );
}});