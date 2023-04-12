// ==UserScript==
// @name  Arras.io WORKING Septa Script FIXED
// @description THIS SCRIPT FIXES THE ORIGINALLY PATCHED SEPTA SCRIPT THAT ALLOWS 7X TRAP RELOAD ON SEPTA
// @author Cobalt 
// @match  *://arras.io/*
// @version 1.0.0
// @namespace https://greasyfork.org/users/812261
// @license MIT
// ==/UserScript==
 
/* By forcing new websocket connections the game actually begins to break due to confusion within the game's code. 
When this happens the game actually ALLOWS the septa script to pass! This needs the original script to work. */
async function breakDetection() {
    let fetchServers = await fetch('https://ak7oqfc2u4qqcu6i.uvwx.xyz:2222/status');
    let server = await fetchServers.json();
    let servers = server.status;

    for (let count in servers) {
        new WebSocket('wss:' + `${servers[count].host}`);
    }
}
breakDetection();
