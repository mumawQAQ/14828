// ==UserScript==
// @name			moomoo.io AutoFood
// @version			asokaosako
// @description		Auto heal (Cookie only) [P] Key ON/OFF
// @author			IDK xD
// @match			*://sandbox.moomoo.io/*
// @grant			none
// @namespace		https://greasyfork.org/en/scripts/29156-moomoo-io-autoFood
// ==/UserScript==

(function() {
	'use strict';

	var socket;
	var SID;
	var heal = true;

	setTimeout(function () {
		var c = setInterval(function () {
			if (typeof io !== 'undefined' && io !== null &&
				typeof storeBuy === 'function' && typeof Object.keys(io.managers) [0] !== 'undefined'
			) {
				socket = io.managers[Object.keys(io.managers) [0]].nsps['/'];
				socket.on('1', function (a) {
					SID = a;
				});
				var c2 = setInterval(function () {
					if (typeof SID !== 'undefined' && SID !== null) {
						socket.on('10', function (a, b) {
							if (a === SID && b < 80) {
								if (heal) p(1);
							}
						});
						clearInterval(c2);
					}
				}, 200);
				clearInterval(c);
			}
		}, 200);
	}, 1000);

	function send(n, v) {
		io.managers[Object.keys(io.managers) [0]].nsps['/'].emit(n, v);
	}

	function p(a) {
		send('5', a);
		send('4', 1);
	}

	document.addEventListener('keydown', function (e) {
		if (document.activeElement.id == 'chatBox') return;
		// [P] key : AutoHeal ON/OFF
		if (e.keyCode == 80) {
			heal = !heal;
		}
	});
})();