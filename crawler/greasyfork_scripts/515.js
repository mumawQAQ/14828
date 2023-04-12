// ==UserScript==
// @name         Katana + Musket
// @author       t0xic Gaming
// @namespace    -
// @description  p
// @match        moomoo.io
// @match        sandbox.moomoo.io
// @match        dev.moomoo.io
// @version      0.2
// @require      https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @grant        none
// ==/UserScript==      
 
(function () {
    var ws;
    var msgpack5 = msgpack;
 
    WebSocket.prototype.oldSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(m) {
        if (!ws){
            ws = this;
        }
        this.oldSend(m);
    };
 
    document.dns = function(s) {
        ws.send(new Uint8Array(Array.from(msgpack5.encode(s))));
    };
    
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 46) {
            document.dns(["6", [4]]);
            document.dns(["6", [25]]);
            document.dns(["6", [25]]);
            document.dns(["6", [28]]);
            
            console.log('<Tried to get katana, spinning spikes and powermill>');
        }
    });
})();