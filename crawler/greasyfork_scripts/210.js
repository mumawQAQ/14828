// ==UserScript==
// @name         Remove Char Limit for Bing Chat AI
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This Tampermonkey script enhances your search experience on Bing Chat by removing the character limit from the search input. Enjoy unrestricted search queries and explore endless possibilities with ease, as the script displays an infinity symbol (∞) in place of the character counter.
// @author       RomainC-lab
// @match        *://www.bing.com/*
// @grant        none
// @icon         https://raw.githubusercontent.com/RomainC-lab/Tampermonkey-Scripts-Collection/master/remove-char-limit-bing-chat.user.png

// ==/UserScript==

(function () {
	"use strict";

	async function waitForElement(root, selector) {
		return new Promise((resolve, reject) => {
			if (root.querySelector(selector)) {
				resolve(root.querySelector(selector));
			} else {
				const observer = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						if (mutation.type === "childList") {
							if (root.querySelector(selector)) {
								resolve(root.querySelector(selector));
								observer.disconnect();
								clearTimeout(timeout);
							}
						}
					});
				});
				observer.observe(root, { childList: true, subtree: true });
				const timeout = setTimeout(() => {
					observer.disconnect();
					reject(new Error("Timeout"));
				}, 10000);
			}
		});
	}

	async function removeCharLimit() {
		const serp = await waitForElement(
			document,
			"cib-serp[serp-slot='none']"
		);
		const serpShadowRoot = serp.shadowRoot;
		const actionBar = await waitForElement(
			serpShadowRoot,
			"cib-action-bar"
		);
		const actionBarShadowRoot = actionBar.shadowRoot;
		const textarea = await waitForElement(
			actionBarShadowRoot,
			"textarea[maxlength]"
		);
		textarea.removeAttribute("maxlength");
		const letterCounter = await waitForElement(
			actionBarShadowRoot,
			".letter-counter"
		);
		letterCounter.childNodes[
			letterCounter.childNodes.length - 1
		].textContent = "∞";
	}

	window.addEventListener("load", removeCharLimit);
	window.addEventListener("popstate", removeCharLimit);
})();
