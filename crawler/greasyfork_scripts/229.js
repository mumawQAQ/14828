// ==UserScript==
// @name         MooMoo.io Key Rebinder
// @description  F -> Hold Trap/Boost Pad  /  V -> Hold Spike
// @author       WEIRD
// @match        *://*.moomoo.io/*
// @icon         https://moomoo.io/img/favicon.png?v=1
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @run-at       document-start
// @grant        unsafeWindow
// @license      MIT
// @version      0.2.1
// @namespace    https://greasyfork.org/users/999838
// ==/UserScript==

(async () => {
	unsafeWindow.keyRebinder = true

	let items = [],
		weapons = [],
		inGame = false,
		keys = {},
		ws = await new Promise(async (resolve) => {
			let { send } = WebSocket.prototype

			WebSocket.prototype.send = function (...x) {
				send.apply(this, x)
				this.send = send
				this.iosend = function (...datas) {
					const [packet, ...data] = datas
					this.send(
						new Uint8Array(
							Array.from(msgpack.encode([packet, data]))
						)
					)
				}
				this.addEventListener("message", (e) => {
					const [packet, data] = msgpack.decode(
						new Uint8Array(e.data)
					)
					switch (packet) {
						case "1":
							inGame = true
							items = [0, 3, 6, 10]
							weapons = [0]
							break
						case "11":
							inGame = false
							break
						case "17":
							if (data[0]) {
								if (data[1]) weapons = data[0]
								else items = data[0]
							}
							break
					}
				})
				resolve(this)
			}
		})

	var observer = new MutationObserver((mutations) => {
		mutations.forEach((mutationRecord) => {
			if (
				document.getElementById("allianceMenu").style.display ==
					"block" ||
				document.getElementById("chatHolder").style.display == "block"
			) {
				keys = {}
			}
		})
	})
	observer.observe(document.getElementById("allianceMenu"), {
		attributes: true,
		attributeFilter: ["style"]
	})
	observer.observe(document.getElementById("chatHolder"), {
		attributes: true,
		attributeFilter: ["style"]
	})

	document.addEventListener("keydown", (event) => {
		if (
			inGame &&
			!keys[event.code] &&
			document.getElementById("allianceMenu").style.display != "block" &&
			document.getElementById("chatHolder").style.display != "block"
		) {
			keys[event.code] = true
			if (event.code == "KeyF") {
				ws.iosend("5", items[4])
			} else if (event.code == "KeyV") {
				ws.iosend("5", items[2])
			} else if (
				(event.which == 48 || event.keyCode == 48) &&
				items[58 - 49 - weapons.length] != undefined
			) {
				ws.iosend("5", items[58 - 49 - weapons.length])
			}
		}
	})

	document.addEventListener("keyup", (event) => {
		if (
			inGame &&
			keys[event.code] &&
			document.getElementById("allianceMenu").style.display != "block" &&
			document.getElementById("chatHolder").style.display != "block"
		) {
			keys[event.code] = false
		}
	})
})()