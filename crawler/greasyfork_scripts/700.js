// ==UserScript==
// @name        scenexe.io zoom+no dark
// @namespace   https://scnxwged.glitch.me/
// @description use mouse wheel or + and - keys, only works in gameplay
// @author      BZZZZ
// @license     GPLv3
// @include     /^https?\:\/\/scenexe\.io\/([?#]|$)/
// @include     /^https?\:\/\/new\-test\.scenexe\.io\/([?#]|$)/
// @include     /^https?\:\/\/test\.scenexe\.io\/([?#]|$)/
// @include     /^https?\:\/\/test2\.scenexe\.io\/([?#]|$)/
// @version     0.3
// @grant       none
// @run-at      document-end
// @inject-into content
// ==/UserScript==

'use strict'
const x=document.createElementNS('http://www.w3.org/1999/xhtml','div')
x.setAttribute('onclick',`"use strict";(${()=>{
	const obj={'__proto__':null,'passive':true},rset=Reflect.set,p=Promise,fh=x=>{
		x.cameraSizeMultiplier*=zoom/10
	}
	let zoom=10
	//use removedEntities to not conflict with tank editor
	Object.defineProperty(Object.prototype,'removedEntities',{
		'__proto__':null,
		'configurable':true,
		'enumerable':false,
		'set'(val){
			rset(obj,'removedEntities',val,this)
			p.resolve(this).then(fh)
		}
	})
	document.getElementById('game-canvas').addEventListener('wheel',event=>{
		if(event.deltaY>0)++zoom
		else if(9===--zoom)zoom=10
	},obj)
	document.body.addEventListener('keypress',event=>{
		const t=event.target.tagName
		if(t!=='INPUT'&&t!=='TEXTAREA')switch(event.key){
			case '+':
				++zoom
				return
			case '-':
				if(9===--zoom)zoom=10
		}
	},obj)
}})()`)
x.click()
document.getElementById('darkness-canvas').hidden=true