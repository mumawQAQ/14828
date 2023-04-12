// ==UserScript==
// @name         Voxiom.IO player count
// @namespace    http://tampermonkey.net/
// @version      69.691
// @description  Displays the number of players in Voxiom.IO by follish
// @author       FOLLISH
// @license MIT
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if user has already answered the popup
    if (localStorage.getItem('popupAnswered2') === 'yes') {
        return;
    }

    // Create popup
    var popup = confirm("Join Cheat Discord Server?");

    // If user clicks "Yes", redirect to discord.com and store the answer in local storage
    if (popup == true) {
        localStorage.setItem('popupAnswered2', 'yes');
        window.location.href = "https://discord.gg/Jzt99c6Wgj";
    } else {
        // If user clicks "No", store the answer in local storage
        localStorage.setItem('popupAnswered2', 'no');
    }
})();

// Create player count element
let playerCountElement = document.createElement('div');
playerCountElement.id = 'player-count';
playerCountElement.innerHTML = '0';
document.body.appendChild(playerCountElement);

// Create second text element
let follishElement = document.createElement('div');
follishElement.id = 'follish-text';
follishElement.innerHTML = '/ FOLLISH MOD /';
document.body.appendChild(follishElement);

// Add CSS styles for player count and follish text elements
let style = document.createElement('style');
style.innerHTML = `
#player-count {
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: white;
    z-index: 999;
}

#follish-text {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: white;
    z-index: 999;
    animation: rainbow 2s infinite;
}

@keyframes rainbow {
  0% { color: red; }
  16.67% { color: orange; }
  33.33% { color: yellow; }
  50% { color: green; }
  66.67% { color: blue; }
  83.33% { color: indigo; }
  100% { color: violet; }
}

`;
document.head.appendChild(style);

// Update player count
function updatePlayerCount() {
    let playerCount = 0;
    let enemyCount = 0;
    const allEntities = gameScene.children[5].children;
    for ( let i = 0; i < allEntities.length; i++ ) {
        const entity = allEntities[ i ];
        if (entity.children.length === 0) {
            continue;
        }
        const name = entity.children[0].name;
        if (name === 'Parachute') {
            playerCount++;
        } else {
            enemyCount++;
        }
    }

    // Set color based on player count
    let color;
    if (playerCount === 0) {
        color = '#018a1f';
    } else if (playerCount >= 1 && playerCount <= 4) {
        color = '#b0b300';
    } else if (playerCount >= 5 && playerCount <= 9) {
        color = '#cf8002';
    } else if (playerCount >= 10 && playerCount <= 14) {
        color = '#b82e00';
    } else {
        color = '#630000';
    }

    playerCountElement.innerHTML = 'Player count: ' + playerCount;
    playerCountElement.style.color = color;
}

let gameScene;
WeakMap.prototype.set = new Proxy(WeakMap.prototype.set, {apply(t, args, [scene]) {
    if(scene.type === 'Scene') {
        if(scene.children.length === 9) {
            window.scene = scene;
            gameScene = scene;
            updatePlayerCount();
        }
    }
    return Reflect.apply( ...arguments );
}});

window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {apply(target, args, args2){
    args2[0] = new Proxy(args2[0], {
        apply() {
            if(gameScene == null) { return; }
            updatePlayerCount();
            return Reflect.apply( ...arguments );
        }
    });
    return Reflect.apply( ...arguments );
}});