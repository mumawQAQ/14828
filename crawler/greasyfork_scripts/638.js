// ==UserScript==
// @name         MooMoo.io Bow Insta Helper
// @description  Helps you to bow insta faster
// @author       WEIRD
// @match        *://*.moomoo.io/*
// @icon         https://moomoo.io/img/favicon.png?v=1
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @run-at       document-start
// @grant        unsafeWindow
// @license      MIT
// @version      0.6.1
// @namespace    https://greasyfork.org/users/999838
// ==/UserScript==

/*
- To activate or deactivate the helper, simply click the middle mouse button
- Adjust your position with precision by pressing the "Z" key and using your mouse as a guide
- The helper will display a circle around you, representing the maximum range of the turret gear bullet
*/

;(() => {
	unsafeWindow.bowInstaHelper = true

	let mouse = {
		x: null,
		y: null
	}
	let toggle = false
	let inGame = false

	new Promise(async (resolve) => {
		let { send } = WebSocket.prototype

		WebSocket.prototype.send = function (...x) {
			send.apply(this, x)
			this.send = send
			this.addEventListener("message", (e) => {
				const [packet, data] = msgpack.decode(new Uint8Array(e.data))
				if (packet === "1") {
					inGame = true
				} else if (packet === "11") {
					inGame = false
					if (toggle) {
						let storeHolder = unsafeWindow.customStore
							? document.getElementById("customStoreHolder")
							: document.getElementById("storeHolder")
						let gameUI = document.getElementById("gameUI")
						let upgradeHolder = document.getElementById("upgradeHolder")
						toggle = false
						gameUI.style.visibility = null

						storeHolder.style.position = null
						storeHolder.style.left = null
						storeHolder.style.top = null

						upgradeHolder.style.left = null
						upgradeHolder.style.top = null
					}
				}
			})
			resolve(this)
		}
	})

	new Promise(async (resolve) => {
		let { clearRect } = CanvasRenderingContext2D.prototype

		CanvasRenderingContext2D.prototype.clearRect = function (...x) {
			clearRect.apply(this, x)
			if (toggle) {
				let ctx = document.getElementById("gameCanvas").getContext("2d")
				let maxScreenWidth = unsafeWindow.config.maxScreenWidth
				let maxScreenHeight = unsafeWindow.config.maxScreenHeight
				ctx.beginPath()
				ctx.arc(maxScreenWidth / 2, maxScreenHeight / 2, 700, 0, 2 * Math.PI, false)
				ctx.fillStyle = "rgb(0, 0, 0, 0.1)"
				ctx.fill()
			}
			resolve(this)
		}
	})

	document.addEventListener("DOMContentLoaded", () => {
		let gameUI = document.getElementById("gameUI")
		let upgradeHolder = document.getElementById("upgradeHolder")
		upgradeHolder.style.visibility = "visible"
		document.getElementById("storeButton").style.visibility = "visible"
		document.getElementById("chatHolder").style.visibility = "visible"
		document.getElementById("mapDisplay").style.visibility = "visible"
		document.getElementById("storeMenu").style.visibility = "visible"

		document.addEventListener("keydown", (event) => {
			if (
				inGame &&
				event.code == "KeyZ" &&
				toggle &&
				document.getElementById("allianceMenu").style.display != "block" &&
				document.getElementById("chatHolder").style.display != "block"
			) {
				let storeHolder = unsafeWindow.customStore
					? document.getElementById("customStoreHolder")
					: document.getElementById("storeHolder")
				storeHolder.style.position = "absolute"
				storeHolder.style.left = mouse.x - 370 + "px"
				storeHolder.style.top = mouse.y - window.innerHeight / 2 + "px"

				upgradeHolder.style.left = mouse.x - (window.innerWidth / 1600) * 815 + "px"
				upgradeHolder.style.top = mouse.y - 33 + "px"
			}
		})

		document.addEventListener("mousedown", (event) => {
			if (
				inGame &&
				event.button == 1 &&
				document.getElementById("allianceMenu").style.display != "block" &&
				document.getElementById("chatHolder").style.display != "block"
			) {
				let storeHolder = unsafeWindow.customStore
					? document.getElementById("customStoreHolder")
					: document.getElementById("storeHolder")
				if (toggle) {
					toggle = false
					gameUI.style.visibility = null

					storeHolder.style.position = null
					storeHolder.style.left = null
					storeHolder.style.top = null

					upgradeHolder.style.left = null
					upgradeHolder.style.top = null
				} else {
					toggle = true
					gameUI.style.visibility = "hidden"

					storeHolder.style.position = "absolute"
					storeHolder.style.left = mouse.x - 370 + "px"
					storeHolder.style.top = mouse.y - window.innerHeight / 2 + "px"

					upgradeHolder.style.left = mouse.x - (window.innerWidth / 1600) * 815 + "px"
					upgradeHolder.style.top = mouse.y - 33 + "px"
				}
			}
		})

		document.getElementById("gameCanvas").addEventListener("mousemove", (event) => {
			mouse.x = event.clientX
			mouse.y = event.clientY
		})
	})
})()
