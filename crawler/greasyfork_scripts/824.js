// ==UserScript==
// @name         Win Every Nitro Type Race You play.
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Sing Developments has created this script for you to use for personal use. This script should help you to win every Nitro Type race you play. Make sure to go to the link below to use this correctly. Enjoy! https://singdevelopmentsblog.wordpress.com/2022/11/01/win-every-nitro-type-race-you-play/
// @author       Sing Developments
// @match        https://www.nitrotype.com/race
// @match        https://www.nitrotype.com/race/*
// @icon         https://singdevelopmentsblog.files.wordpress.com/2022/11/nitrotype-logo.jpg
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
const findReact = (dom, traverseUp = 0) => {
	const key = Object.keys(dom).find((key) => key.startsWith("__reactFiber$"))
	const domFiber = dom[key]
	if (domFiber == null) return null
	const getCompFiber = (fiber) => {
		let parentFiber = fiber?.return
		while (typeof parentFiber?.type == "string") {
			parentFiber = parentFiber?.return
		}
		return parentFiber
	}
	let compFiber = getCompFiber(domFiber)
	for (let i = 0; i < traverseUp && compFiber; i++) {
		compFiber = getCompFiber(compFiber)
	}
	return compFiber?.stateNode
}
    setInterval(function(){findReact(raceContainer)['state']['lessonContent']='a  akakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakaakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakak'},10);;
                          })();