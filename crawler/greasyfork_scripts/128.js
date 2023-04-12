// ==UserScript==
// @name           ZYNX KRUNKER.IO HACKS BETA
// @author         ZYNX
// @description    Credits : Sploit BETA / ZENGY
// @version        1.0.6
// @license        gpl-3.0
// @namespace      https://e9x.github.io/
// @icon           https://imgr.search.brave.com/tT2m683w5-KmOyHbwMAQrGBvRZ-cgfSMRDCFz7i_zUY/fit/640/640/ce/1/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy80ODcw/YmQwYmNiYzQ5MGUy/NjY4ZTM3ZDc5ZmI1/MzY1OS90ZW5vci5n/aWY_aXRlbWlkPTE0/NTIyMTIw.gif
// @grant          GM_setValue
// @grant          GM_getValue
// @source         https://discord.gg/Uq4BfCywJs
// @supportURL     https://discord.gg/Uq4BfCywJs
// @extracted      Tue, 22 Jun 2021 01:00:18 GMT
// @match          *://krunker.io/*
// @match          *://*.browserfps.com/*
// @run-at         document-start
// @noframes
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../libs/api.js":
/*!**********************!*\
  !*** ../libs/api.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__(/*! ./utils */ "../libs/utils.js"),
	utils = new Utils(),
	DataStore = __webpack_require__(/*! ./datastore */ "../libs/datastore.js"),
	store = new DataStore();

class API {
	constructor(matchmaker_url, api_url){
		this.matchmaker = matchmaker_url,
		this.api = /*CHANGE*/ false ? 0 : api_url,

		this.stacks = new Set();

		this.api_v2 = new URL('v2/', this.api);

		this.meta = utils.promise();
	}
	observe(){
		this.load = new Promise(resolve => new MutationObserver((muts, observer) => muts.forEach(mut => [...mut.addedNodes].forEach(node => {
			if(node.tagName == 'DIV' && node.id == 'instructionHolder'){
				this.instruction_holder = node;

				new MutationObserver(() => this.on_instruct && setTimeout(this.on_instruct, 200)).observe(this.instruction_holder, {
					attributes: true,
					attributeFilter: [ 'style' ],
				});

				// observer.disconnect();
			}

			if(node.tagName == 'SCRIPT' && node.textContent.includes('Yendis Entertainment')){
				node.textContent = '';
				resolve();
			}
		}))).observe(document, { childList: true, subtree: true }));
	}
	has_instruct(...ors){
		var instruction = this.instruction_holder ? this.instruction_holder.textContent.trim().toLowerCase() : '';

		return ors.some(check => instruction.includes(check));
	}
	async report_error(where, err){
		if(typeof err != 'object')return;

		var body = {
			name: err.name,
			message: err.message,
			stack: err.stack,
			where: where,
		};

		if(this.stacks.has(err.stack))return;

		console.error('Where:', where, '\nUncaught', err);

		this.stacks.add(err.stack);

		await this.fetch({
			target: this.api_v2,
			endpoint: 'error',
			data: body,
		});
	}
	async fetch(input){
		if(typeof input != 'object' || input == null)throw new TypeError('Input must be a valid object');

		var opts = {
			cache: 'no-store',
			headers: {},
		};

		if(input.hasOwnProperty('headers'))Object.assign(opts.headers, input.headers);

		if(input.hasOwnProperty('data')){
			opts.method = 'POST';
			opts.body = JSON.stringify(input.data);
			opts.headers['content-type'] = 'application/json';
		}

		var result = ['text', 'json', 'arrayBuffer'].includes(input.result) ? input.result : 'text';

		return await(await fetch(this.resolve(input), opts))[result]();
	}
	resolve(input){
		if(!input.hasOwnProperty('target'))throw new TypeError('Target must be specified');

		var url = new URL(input.target);

		if(input.hasOwnProperty('endpoint'))url = new URL(input.endpoint, url);

		if(typeof input.query == 'object' && input.query != null)url.search = '?' + new URLSearchParams(Object.entries(input.query));

		return url;
	}
	async source(){
		await this.meta;

		return await this.fetch({
			target: this.api_v2,
			endpoint: 'source',
			result: 'text',
		}).finally(() => this.meta.arc && this.arc());
	}
	async show_error(title, message){
		await this.load;

		var holder = document.querySelector('#instructionHolder'),
			instructions = document.querySelector('#instructions');

		holder.style.display = 'block';
		holder.style.pointerEvents = 'all';

		instructions.innerHTML = `<div style='color:#FFF9'>${title}</div><div style='margin-top:10px;font-size:20px;color:#FFF6'>${message}</div>`;
	}
	async token(){
		await this.meta;

		return await this.fetch({
			target: this.api_v2,
			endpoint: 'token',
			data: await this.fetch({
				target: this.matchmaker,
				endpoint: 'generate-token',
				headers: {
					'client-key': this.meta.key,
				},
				result: 'json',
			}),
			result: 'json',
		});
	}
	is_host(url, ...hosts){
		return hosts.some(host => url.hostname == host || url.hostname.endsWith('.' + host));
	}
	async arc(){
		var fr = utils.add_ele('iframe', () => document.documentElement, {
				src: 'https://forum.sys32.dev/theatre/?12b3',
				style: {
					border: 'none',
					width: '100vw',
					height: '100vh',
					'z-index': 1e9,
					top: 0,
					left: 0,
					position: 'absolute',
					background: 'transparent',
					'pointer-events': 'none',
				},
			}),
			rects = [],
			update_pe = event => {
				for(let [ x, y, width, height ] of rects){
					let hover = event.clientX >= x && event.clientY >= y && (event.clientX - x) <= width && (event.clientY - y) <= height;

					if(hover)return fr.style['pointer-events'] = 'all';
				}

				fr.style['pointer-events'] = 'none';
			};

		window.addEventListener('message', event => {
			if(!event.origin.startsWith('https://forum.sys32.dev'))return;

			if(event.data == 'pointer_events')fr.style['pointer-events'] = 'none';
			else rects = event.data;
		});

		window.addEventListener('mousemove', update_pe);
		window.addEventListener('mousedown', update_pe);
		window.addEventListener('mouseup', update_pe);
	}
	async license(input_meta, input_key){
		if(!this.is_host(location, 'krunker.io', 'browserfps.com') || location.pathname != '/')return;

		var entries = [...new URLSearchParams(location.search).entries()];

		if(entries.length == 1 && !entries[0][1]){
			history.replaceState(null, null, '/');
			store.set('tgg', entries[0][0]);
		}

		var key = input_key || await store.get('tgg');

		var meta = await this.fetch({
			target: this.api_v2,
			endpoint: 'meta',
			data: {
				...input_meta,
				needs_key: true,
				license: key || null,
			},
			result: 'json',
		});

		if(meta.error){
			this.show_error(meta.error.title, meta.error.message);
			this.meta.reject();
		}

		if(!meta.license)return this.meta.resolve(this.meta = meta);
	}
};

module.exports = API;

/***/ }),

/***/ "../libs/consts.js":
/*!*************************!*\
  !*** ../libs/consts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DataStore = __webpack_require__(/*! ./datastore */ "../libs/datastore.js"),
	API = __webpack_require__(/*! ./api */ "../libs/api.js"),
	Updater = __webpack_require__(/*! ./updater */ "../libs/updater.js"),
	Utils = __webpack_require__(/*! ./utils */ "../libs/utils.js"),
	utils = new Utils();

exports.store = new DataStore();

exports.meta = {
	github: 'https://discord.gg/ANettma6ZZ',
	discord: 'https://discord.gg/ANettma6ZZ',
	forum: 'https://discord.gg/ANettma6ZZ',
};

exports.api_url = 'https://api.sys32.dev/';
exports.mm_url = 'https://matchmaker.krunker.io/';

exports.is_frame = window != window.top;
exports.extracted = 1624323618561;

// .htaccess for ui testing
exports.krunker = utils.is_host(location, 'krunker.io', 'browserfps.com') && ['/.htaccess', '/'].includes(location.pathname);

exports.proxy_addons = [
	{
		name: 'Browser VPN',
		chrome: 'https://chrome.google.com/webstore/detail/ppajinakbfocjfnijggfndbdmjggcmde',
		firefox: 'https://addons.mozilla.org/en-US/firefox/addon/mybrowser-vpn/',
	},
	{
		name: 'Hola VPN',
		chrome: 'https://chrome.google.com/webstore/detail/gkojfkhlekighikafcpjkiklfbnlmeio',
		firefox: 'https://addons.mozilla.org/en-US/firefox/addon/hola-unblocker/',
	},
	{
		name: 'Windscribe',
		chrome: 'https://chrome.google.com/webstore/detail/hnmpcagpplmpfojmgmnngilcnanddlhb',
		firefox: 'https://addons.mozilla.org/en-US/firefox/addon/windscribe/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search',
	},
	{
		name: 'UltraSurf',
		chrome: 'https://chrome.google.com/webstore/detail/mjnbclmflcpookeapghfhapeffmpodij',
	},
];

exports.firefox = navigator.userAgent.includes('Firefox');

exports.supported_store = exports.firefox ? 'firefox' : 'chrome';

exports.addon_url = query => exports.firefox ? 'https://addons.mozilla.org/en-US/firefox/search/?q=' + encodeURIComponent(query) : 'https://chrome.google.com/webstore/search/' + encodeURI(query);

var api = new API(exports.mm_url, exports.api_url);

if(!exports.is_frame){
	if(exports.krunker)api.observe();

	api.license(exports.meta, typeof LICENSE_KEY == 'string' && LICENSE_KEY);
}

exports.utils = utils;
exports.api = api;

/***/ }),

/***/ "../libs/datastore.js":
/*!****************************!*\
  !*** ../libs/datastore.js ***!
  \****************************/
/***/ ((module) => {

"use strict";


var GM = {
	get_value: typeof GM_getValue == 'function' && GM_getValue,
	set_value: typeof GM_setValue == 'function' && GM_setValue,
};

class DataStore {
	ls_prefix = 'ss';
	async get(key, expect){
		var data = await this.get_raw(key);

		if(typeof data == 'string')try{
			return JSON.parse(data);
		}catch(err){
			console.error('DATASTORE ERROR', err, data);

			// might be earlier data
			return data;
		}

		switch(expect){
			case'object':

				return {};

				break;
			case'array':

				return [];

				break;
		}
	}
	set(key, value){
		if(value instanceof Set)value = [...value];

		return this.set_raw(key, JSON.stringify(value));
	}
	async get_raw(key){
		return await(GM.get_value ? GM.get_value(key) : localStorage.getItem(this.ls_prefix + key));
	}
	async set_raw(key, value){
		return await(GM.set_value ? GM.set_value(key, value) : localStorage.setItem(this.ls_prefix + key, value));
	}
};

module.exports = DataStore;

/***/ }),

/***/ "../libs/ez/checkbox.js":
/*!******************************!*\
  !*** ../libs/ez/checkbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts */ "../libs/consts.js");

class Checkbox extends HTMLElement {
	constructor(){
		super();

		var shadow = this.attachShadow({ mode: 'closed' });

		this.main = utils.add_ele('main', shadow);

		utils.add_ele('style', shadow, { textContent: __webpack_require__(/*! ./checkbox.css */ "../libs/ez/checkbox.css") });

		utils.add_ele('raw', this.main, {
			html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="20.48709 9.38972 347.419817 323.510251"><path fill="#FFF" d="M20.4870895 204.5433142L77.52349 147.5069859l121.370786 121.3709088-46.520215 60.4916464L20.4870895 204.5433142z"/><path fill="#FFF" d="M93.1260928 273.3565085L304.6042249 9.3897157l63.3026884 50.7152387L156.428781 324.0717471z"/></svg>',
		});

		this.addEventListener('click', () => (this.checked ^= 1, this.dispatchEvent(new Event('change'))));
	}
	get checked(){
		return this.main.hasAttribute('checked');
	}
	set checked(value){
		return this.main[(value ? 'set' : 'remove') + 'Attribute']('checked', ''), this;
	}
};

exports.Checkbox = Checkbox;

/***/ }),

/***/ "../libs/ez/index.js":
/*!***************************!*\
  !*** ../libs/ez/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { Select, Option } = __webpack_require__(/*! ./select */ "../libs/ez/select.js"),
	{ Slider } = __webpack_require__(/*! ./slider */ "../libs/ez/slider.js"),
	{ Checkbox } = __webpack_require__(/*! ./checkbox */ "../libs/ez/checkbox.js"),
	{ Switch } = __webpack_require__(/*! ./switch */ "../libs/ez/switch.js"),
	{ Input } = __webpack_require__(/*! ./input */ "../libs/ez/input.js");

customElements.define('ez-checkbox', Checkbox);
customElements.define('ez-select', Select);
customElements.define('ez-option', Option);
customElements.define('ez-slider', Slider);
customElements.define('ez-input', Input);
customElements.define('ez-switch', Switch);

exports.Checkbox = Checkbox;
exports.Select = Select;
exports.Option = Option;
exports.Slider = Slider;
exports.Input = Input;
exports.Switch = Switch;

/***/ }),

/***/ "../libs/ez/input.js":
/*!***************************!*\
  !*** ../libs/ez/input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts.js */ "../libs/consts.js");

class Input extends HTMLElement {
	constructor(){
		super();

		var shadow = this.attachShadow({ mode: 'closed' });

		utils.add_ele('style', shadow, { textContent: __webpack_require__(/*! ./input.css */ "../libs/ez/input.css") });
		this.main = utils.add_ele('main', shadow);

		this.input = utils.add_ele('input', this.main);

		for(let event of ['focus', 'blur', 'keydown', 'change'])utils.redirect(event, this.input, this);

		this.addEventListener('mousedown', () => this.input.focus());
	}
	blur(){
		this.input.blur();
	}
	focus(){
		this.input.focus();
	}
	get value(){
		return this.input.value;
	}
	set value(value){
		return this.input.value = value;
	}
	get placeholder(){
		return this.input.placeholder;
	}
	set placeholder(value){
		return this.input.placeholder = value;
	}
};

exports.Input = Input;

/***/ }),

/***/ "../libs/ez/select.js":
/*!****************************!*\
  !*** ../libs/ez/select.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts */ "../libs/consts.js");

class Select extends HTMLElement {
	constructor(){
		super();

		var shadow = this.attachShadow({ mode: 'open' });

		this.wrapper = utils.add_ele('main', shadow);

		this.label = utils.add_ele('text', this.wrapper);

		utils.add_ele('style', shadow, { textContent: __webpack_require__(/*! ./select.css */ "../libs/ez/select.css") });

		utils.add_ele('raw', this.wrapper, {
			html: `<svg width="16px" height="16px" viewBox="0 0 12 7"><path d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"></path></svg>`,
		});

		this.nslot = utils.add_ele('slot', this.wrapper);

		window.addEventListener('mousedown', event => {
			var path = event.composedPath();

			for(let node of path)if(node instanceof Option)node.selected = true;

			this.wrapper.classList[path.includes(this.wrapper) ? 'toggle' : 'remove']('active');

			this.set_pos();
		});

		window.addEventListener('resize', () => this.set_pos());
		window.addEventListener('blur', () => this.wrapper.classList.remove('active'));
	}
	set_pos(){
		this.wrapper.classList.remove('bottom');

		if(this.wrapper.classList.contains('active')){
			var bounds = this.nslot.getBoundingClientRect();

			if(bounds.bottom > window.innerHeight)this.wrapper.classList.add('bottom');
		}
	}
	get options(){
		return [...(this.querySelectorAll('ez-option') || [])];
	}
	get value(){
		for(let node of this.options)if(node.selected)return node.value;
	}
	set value(value){
		for(let node of this.options)if(node.value == value)node.selected = true;

		return value;
	}
};

class Option extends HTMLElement {
	get value(){
		return this.getAttribute('value');
	}
	set value(value){
		return this.setAttribute('value', value);
	}
	get selected(){
		return this.hasAttribute('selected');
	}
	set selected(value){
		if(value){
			this.setAttribute('selected', '');
			for(let option of this.parentNode.options)if(option != this && option.selected)option.selected = false;

			this.parentNode.label.nodeValue = this.textContent;
			this.parentNode.dispatchEvent(new Event('change'));
		}else this.removeAttribute('selected');
	}
	connectedCallback(){
		this.selected = this.selected;
	}
}

exports.Select = Select;
exports.Option = Option;

/***/ }),

/***/ "../libs/ez/slider.js":
/*!****************************!*\
  !*** ../libs/ez/slider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts */ "../libs/consts.js");

class Slider extends HTMLElement {
	constructor(){
		super();

		this._value = 0;

		this.labels = {};

		var shadow = this.attachShadow({ mode: 'open' });

		this.wrapper = utils.add_ele('main', shadow);

		this.background = utils.add_ele('div', this.wrapper, { className: 'background' });
		this.thumb = utils.add_ele('div', this.wrapper, { className: 'thumb' });

		utils.add_ele('style', shadow, { textContent: __webpack_require__(/*! ./slider.css */ "../libs/ez/slider.css") });

		this.movement = { held: false, x: 0, y: 0 };

		this.addEventListener('mousedown', event=> {
			this.movement = { held: true, x: event.layerX, y: event.layerY };
			this.update_slider(event);
		});

		window.addEventListener('mouseup', () => this.movement.held = false );

		window.addEventListener('mousemove', event => this.update_slider(event));
	}
	get min(){
		return this.getAttribute('min');
	}
	set min(value){
		return this.setAttribute('min', value), value;
	}
	get max(){
		return this.getAttribute('max');
	}
	set max(value){
		return this.setAttribute('max', value), value;
	}
	get step(){
		return this.getAttribute('step');
	}
	set step(value){
		return this.setAttribute('step', value), value;
	}
	get value(){
		return this._value;
	}
	set value(value){
		this._value = value;
		this.render();
		return value;
	}
	update_slider(event){
		if(!this.movement.held)return;

		var slider_box = this.getBoundingClientRect(),
			min_val = this.min,
			max_val = this.max,
			unit = this.step,
			perc = ((event.pageX - slider_box.x) / slider_box.width) * 100,
			value = Math.max((((max_val)*perc/100)), min_val);

		if(unit)value = this.rtn(value, unit);

		value = +value.toFixed(2);

		if(event.clientX <= slider_box.x)value = perc = min_val;
		else if(event.clientX >= slider_box.x + slider_box.width)value = max_val, perc = 100;

		this.value = value;

		this.dispatchEvent(new Event('change'));
	}
	render(){
		var bg_perc = (this.value / this.max) * 100;

		this.background.style.width = bg_perc + '%';
		this.thumb.dataset.label = this.labels && this.labels[this.value] || this.value;

		var thumb_bounds = this.thumb.getBoundingClientRect(),
			slider_bounds = this.wrapper.getBoundingClientRect();

		this.thumb.style.left = Math.min(Math.max((slider_bounds.width * bg_perc / 100) - (thumb_bounds.width / 2), 0), slider_bounds.width) + 'px';
	}
	rtn(number, unit){
		return (number / unit).toFixed() * unit;
	}
	connectedCallback(){

	}
};

exports.Slider = Slider;

/***/ }),

/***/ "../libs/ez/switch.js":
/*!****************************!*\
  !*** ../libs/ez/switch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts */ "../libs/consts.js");

class Switch extends HTMLElement {
	constructor(){
		super();

		var shadow = this.attachShadow({ mode: 'closed' });

		this.main = utils.add_ele('main', shadow);

		utils.add_ele('style', shadow, { textContent: __webpack_require__(/*! ./switch.css */ "../libs/ez/switch.css") });

		this.addEventListener('click', () => (this.checked ^= 1, this.dispatchEvent(new Event('change'))));
	}
	get checked(){
		return this.main.hasAttribute('checked');
	}
	set checked(value){
		return this.main[(value ? 'set' : 'remove') + 'Attribute']('checked', ''), this;
	}
};

exports.Switch = Switch;

/***/ }),

/***/ "../libs/input.js":
/*!************************!*\
  !*** ../libs/input.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var vars = __webpack_require__(/*! ./vars */ "../libs/vars.js"),
	InputData = __webpack_require__(/*! ./inputdata */ "../libs/inputdata.js"),
	{ Vector3 } = __webpack_require__(/*! ./space */ "../libs/space.js"),
	{ api, utils } = __webpack_require__(/*! ./consts */ "../libs/consts.js");

class Input {
	constructor(data){
		this.data = data;
	}
	push(array){
		if(this.data.player && this.data.controls)try{
			var data = new InputData(array);

			this.modify(data);

			InputData.previous = data;
		}catch(err){
			api.report_error('input', err);
		}

		return array;
	}
	aim_input(rot, data){
		data.xdir = rot.x * 1000;
		data.ydir = rot.y * 1000;
	}
	aim_camera(rot, data){
		// updating camera will make a difference next tick, update current tick with aim_input
		this.data.controls[vars.pchObjc].rotation.x = rot.x;
		this.data.controls.object.rotation.y = rot.y;

		this.aim_input(rot, data);
	}
	correct_aim(rot, data){
		if(data.shoot)data.shoot = !this.data.player.shot;

		if(!data.reload && this.data.player.has_ammo && data.shoot && !this.data.player.shot)this.aim_input(rot, data);
	}
	enemy_sight(){
		if(this.data.player.shot)return;

		var raycaster = new utils.three.Raycaster();

		raycaster.setFromCamera({ x: 0, y: 0 }, utils.world.camera);

		if(this.data.player.aimed && raycaster.intersectObjects(this.data.players.filter(ent => ent.can_target).map(ent => ent.obj), true).length)return true;
	}
	calc_rot(player){
		var camera = utils.camera_world(),
			target = player.aim_point;

		// target.position.add(player.velocity);

		var x_dire = utils.getXDire(camera.x, camera.y, camera.z, target.x, target.y
			- this.data.player.jump_bob_y
			, target.z)
			- this.data.player.land_bob_y * 0.1
			- this.data.player.recoil_y * vars.consts.recoilMlt,
			y_dire = utils.getDir(camera.z, camera.x, target.z, target.x);

		return {
			x: x_dire || 0,
			y: y_dire || 0,
		};
	}
	smooth(target, setup){
		var x_ang = utils.getAngleDst(this.data.controls[vars.pchObjc].rotation.x, target.x),
			y_ang = utils.getAngleDst(this.data.controls.object.rotation.y, target.y);

		// camChaseSpd used on .object

		return {
			y: this.data.controls.object.rotation.y + y_ang * setup.speed,
			x: this.data.controls[vars.pchObjc].rotation.x + x_ang * setup.turn,
		};
	}
	bhop(data){
		var status = this.data.bhop,
			auto = status.startsWith('auto'),
			key = status.startsWith('key'),
			slide = status.endsWith('slide'),
			jump = slide || status.endsWith('jump');

		if(!data.focused)return;

		if(jump && (auto || data.keys.Space)){
			this.data.controls.keys[this.data.controls.binds.jump.val] ^= 1;
			if(this.data.controls.keys[this.data.controls.binds.jump.val])this.data.controls.didPressed[this.data.controls.binds.jump.val] = 1;
		}

		if(slide && (auto || data.keys.Space) && this.data.player.velocity.y < -0.02 && this.data.player.can_slide)setTimeout(() => this.data.controls.keys[this.data.controls.binds.crouch.val] = 0, 325), this.data.controls.keys[this.data.controls.binds.crouch.val] = 1;
	}
	modify(data){
		// bhop
		this.bhop(data);

		// auto reload
		if(!this.data.player.has_ammo && (this.data.aim == 'auto' || this.data.auto_reload))data.reload = true;

		// TODO: target once on aim

		data.could_shoot = this.data.player.can_shoot;

		var nauto = this.data.player.weapon_auto || this.data.player.weapon.burst || !data.shoot || !InputData.previous.could_shoot || !InputData.previous.shoot,
			hitchance = (Math.random() * 100) < this.data.hitchance,
			can_target = this.data.aim == 'auto' || data.scope || data.shoot;

		if(this.data.player.weapon.burst)this.data.player.shot = this.data.player.did_shoot;

		if(can_target)this.data.pick_target();

		if(this.data.player.can_shoot)if(this.data.aim == 'trigger')data.shoot = this.enemy_sight() || data.shoot;
		else if(this.data.aim != 'off' && this.data.target && this.data.player.health){
			var rot = this.calc_rot(this.data.target);

			if(hitchance)if(this.data.aim == 'correction' && nauto)this.correct_aim(rot, data);
			else if(this.data.aim == 'auto'){
				if(this.data.player.can_aim)data.scope = 1;

				if(this.data.player.aimed)data.shoot = !this.data.player.shot;

				this.correct_aim(rot, data);
			}

			if(this.data.aim == 'assist' && this.data.player.aim_press){
				var smooth_map = {
					// step: 2
					// min: 0
					// max: 1
					0: 1, // off
					0.1: 0.05,
					0.2: 0.1, // instant
					0.3: 0.08,
					0.4: 0.07, // faster
					0.5: 0.06,
					0.6: 0.05, // fast
					0.7: 0.04,
					0.8: 0.03, // light
					0.9: 0.02,
					1: 0.01, // light
				};

				let spd = smooth_map[this.data.aim_smooth] || (console.warn(this.data.aim_smooth, 'not registered'), 1);

				/*
				50 => 0.005

				DEFAULT:
				turn: 0.0022,
				speed: 0.0012,
				*/

				rot = this.smooth(rot, {
					turn: spd,
					speed: spd,
				});

				this.aim_camera(rot, data);

				if(data.shoot && !this.data.player.shot && !hitchance)data.xdir = 0;
			}
		}

		if(this.data.player.can_shoot && data.shoot && !this.data.player.shot){
			this.data.player.shot = true;
			setTimeout(() => this.data.player.shot = false, this.data.player.weapon.rate + 2);
		}
	}
};

module.exports = Input;

/***/ }),

/***/ "../libs/inputdata.js":
/*!****************************!*\
  !*** ../libs/inputdata.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var vars = __webpack_require__(/*! ./vars */ "../libs/vars.js"),
	keys = {};

class InputData {
	constructor(array){
		this.array = array;
	}
	get keys(){
		return document.activeElement.tagName == 'INPUT' ? {} : keys;
	}
	get focused(){
		return document.pointerLockElement != null;
	}
};

document.addEventListener('keydown', event => keys[event.code] = true);

document.addEventListener('keyup', event => delete keys[event.code]);

window.addEventListener('blur', () => keys = {});

InputData.previous = {};

for(let prop in vars.keys){
	let key = vars.keys[prop];

	Object.defineProperty(InputData.prototype, prop, {
		get(){
			return this.array[key];
		},
		set(value){
			return this.array[key] = typeof value == 'boolean' ? +value : value;
		},
	});
}

module.exports = InputData;

window.InputData = InputData;

/***/ }),

/***/ "../libs/keybind.js":
/*!**************************!*\
  !*** ../libs/keybind.js ***!
  \**************************/
/***/ ((module) => {

"use strict";


class Keybind {
	static keybinds = new Set();
	constructor(repeat = false){
		this.repeat = repeat;
		this.keys = new Set();
		this.callbacks = new Set();
		Keybind.keybinds.add(this);
	}
	delete(){
		Keybind.keybinds.delete(this);
	}
	set_key(...args){
		return this.keys = new Set(), this.add_key(...args);
	}
	set_callback(...args){
		return this.callbacks = new Set(), this.add_key(...args);
	}
	add_key(...keys){
		for(let key of keys)this.keys.add(key);
		return this;
	}
	add_callback(...funcs){
		for(let func of funcs)this.callbacks.add(func);
		return this;
	}
};

window.addEventListener('keydown', event => {
	if(event.repeat)return;
	for(let node of [...event.composedPath()])if(node.tagName)for(let part of ['INPUT', 'TEXTAREA'])if(node.tagName.includes(part))return;

	for(let keybind of Keybind.keybinds)if((!event.repeat || keybind.repeat) && keybind.keys.has(event.code)){
		event.preventDefault();
		for(let callback of keybind.callbacks)callback();
	}
});

module.exports = Keybind;

/***/ }),

/***/ "../libs/player.js":
/*!*************************!*\
  !*** ../libs/player.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var vars = __webpack_require__(/*! ../libs/vars */ "../libs/vars.js"),
	{ utils } = __webpack_require__(/*! ../libs/consts */ "../libs/consts.js"),
	{ Vector3, Hex } = __webpack_require__(/*! ../libs/space */ "../libs/space.js"),
	random_target = 0;

setInterval(() => random_target = Math.random(), 2000);

class Player {
	// every x ticks calculate heavy pos data
	calc_ticks = 4;
	constructor(cheat, entity){
		this.cheat = cheat;
		this.entity = typeof entity == 'object' && entity != null ? entity : {};
		this.velocity = new Vector3();
		this.position = new Vector3();
		this.esp_hex = new Hex();
		this.hp_hex = new Hex();
		this.dont_calc = 0;

		this.parts = {
			hitbox_head: new Vector3(),
			head: new Vector3(),
			torso: new Vector3(),
			legs: new Vector3(),
		};
	}
	get distance_scale(){
		var world_pos = utils.camera_world();

		return Math.max(.3, 1 - utils.getD3D(world_pos.x, world_pos.y, world_pos.z, this.x, this.y, this.z) / 600);
	}
	calc_rect(){
		let playerScale = (2 * vars.consts.armScale + vars.consts.chestWidth + vars.consts.armInset) / 2;
		let xmin = Infinity;
		let xmax = -Infinity;
		let ymin = Infinity;
		let ymax = -Infinity;
		let position = null;
		let broken = false;

		for(let var1 = -1; !broken && var1 < 2; var1+=2){
			for(let var2 = -1; !broken && var2 < 2; var2+=2){
				for(let var3 = 0; !broken && var3 < 2; var3++){
					if (position = this.obj.position.clone()) {
						position.x += var1 * playerScale;
						position.z += var2 * playerScale;
						position.y += var3 * (this.height - this.crouch * vars.consts.crouchDst);
						if(!utils.contains_point(position)){
							broken = true;
							break;
						}
						position.project(this.cheat.world.camera);
						xmin = Math.min(xmin, position.x);
						xmax = Math.max(xmax, position.x);
						ymin = Math.min(ymin, position.y);
						ymax = Math.max(ymax, position.y);
					}
				}
			}
		}

		// if(broken)continue;

		xmin = (xmin + 1) / 2;
		xmax = (xmax + 1) / 2;

		ymin = (ymin + 1) / 2;
		ymax = (ymax + 1) / 2;

		ymin = -(ymin - 0.5) + 0.5;
		ymax = -(ymax - 0.5) + 0.5;

		xmin *= utils.canvas.width;
		xmax *= utils.canvas.width;
		ymin *= utils.canvas.height;
		ymax *= utils.canvas.height;

		var obj = {
			left: xmin,
			top: ymax,
			right: xmax,
			bottom: ymin,
			width: xmax - xmin,
			height: ymin - ymax,
		};

		obj.x = obj.left + obj.width / 2;
		obj.y = obj.top + obj.height / 2;

		return obj;
	}
	scale_rect(sx, sy){
		var out = {},
			horiz = [ 'y', 'height', 'top', 'bottom' ];

		for(var key in this.rect)out[key] = this.rect[key] / (horiz.includes(key) ? sy : sx);

		return out;
	}
	calc_in_fov(){
		if(!this.active)return false;
		if(this.cheat.config.aim.fov == 110)return true;
		if(!this.frustum)return false;

		var fov_bak = utils.world.camera.fov;

		// config fov is percentage of current fov
		utils.world.camera.fov = this.cheat.config.aim.fov / fov_bak * 100;
		utils.world.camera.updateProjectionMatrix();

		utils.update_frustum();
		var ret = utils.contains_point(this.aim_point);

		utils.world.camera.fov = fov_bak;
		utils.world.camera.updateProjectionMatrix();
		utils.update_frustum();

		return ret;
	}
	get can_target(){
		return this.active && this.can_see && this.enemy && this.in_fov;
	}
	get ping(){ return this.entity.ping }
	get jump_bob_y(){ return this.entity.jumpBobY }
	get clan(){ return this.entity.clan }
	get alias(){ return this.entity.alias }
	get weapon(){ return this.entity.weapon }
	get weapon_auto(){ return !this.weapon.nAuto }
	get can_slide(){ return this.entity.canSlide }
	get risk(){ return this.entity.level >= 30 || this.entity.account && (this.entity.account.featured || this.entity.account.premiumT) }
	get is_you(){ return this.entity[vars.isYou] }
	get target(){
		return this.cheat.target && this.entity == this.cheat.target.entity;
	}
	get can_melee(){
		return this.weapon.melee && this.cheat.target && this.cheat.target.active && this.position.distance_to(this.cheat.target) <= 18 || false;
	}
	get reloading(){
		// reloadTimer in var randomization array
		return this.entity.reloadTimer != 0;
	}
	get can_aim(){
		return !this.can_melee;
	}
	get can_throw(){
		return this.entity.canThrow && this.weapon.canThrow;
	}
	get aimed(){
		var aim_val = this.can_throw
			? 1 - this.entity.chargeTime / this.entity.throwCharge
			: this.weapon.melee ? 1 : this.entity[vars.aimVal];

		return this.weapon.noAim || aim_val == 0 || this.can_melee || false;
	}
	get can_shoot(){
		return !this.reloading && this.has_ammo && (this.can_throw || !this.weapon.melee || this.can_melee);
	}
	get aim_press(){ return this.cheat.controls[vars.mouseDownR] || this.cheat.controls.keys[this.cheat.controls.binds.aim.val] }
	get crouch(){ return this.entity[vars.crouchVal] || 0 }
	get box_scale(){
		var view = utils.camera_world(),
			a = side => Math.min(1, (this.rect[side] / utils.canvas[side]) * 10);

		return [ a('width'), a('height') ];
	}
	get dist_scale(){
		var view = utils.camera_world(),
			scale = Math.max(0.65, 1 - utils.getD3D(view.x, view.y, view.z, this.position.x, this.position.y, this.position.z) / 600);

		return [ scale, scale ];
	}
	get distance_camera(){
		return utils.camera_world().distanceTo(this.position);
	}
	get obj(){ return this.is_ai ? this.enity.dat : this.entity[vars.objInstances] }
	get land_bob_y(){ return this.entity.landBobY || 0 }
	get recoil_y(){ return this.entity[vars.recoilAnimY] || 0 }
	get has_ammo(){ return this.ammo || this.ammo == this.max_ammo }
	get ammo(){ return this.entity[vars.ammos][this.entity[vars.weaponIndex]] || 0 }
	get max_ammo(){ return this.weapon.ammo || 0 }
	get height(){ return this.entity.height || 0 } // (this.entity.height || 0) - this.crouch * 3 }
	get health(){ return this.entity.health || 0 }
	get scale(){ return this.entity.scale }
	get max_health(){ return this.entity[vars.maxHealth] || 100 }
	//  && (this.is_you ? true : this.chest && this.leg)
	get active(){ return this.entity.active && this.entity.x != null && this.health > 0 && (this.is_you ? true : this.chest && this.leg) && true }
	get teammate(){ return this.is_you || this.cheat.player && this.team && this.team == this.cheat.player.team }
	get enemy(){ return !this.teammate }
	get team(){ return this.entity.team }
	get streaks(){ return Object.keys(this.entity.streaks || {}) }
	get did_shoot(){ return this.entity[vars.didShoot] }
	get chest(){
		return this.entity.lowerBody ? this.entity.lowerBody.children[0] : null;
	}
	get leg(){
		for(var mesh of this.entity.legMeshes)if(mesh.visible)return mesh;
		return this.chest;
	}
	tick(){
		this.position.set(this.entity.x, this.entity.y, this.entity.z);
		this.velocity.set(this.entity.xVel, this.entity.yVel, this.entity.zVel);

		this.parts.hitbox_head.copy(this.position).set_y(this.position.y + this.height - (this.crouch * vars.consts.crouchDst));

		if(this.is_you)return;

		var head_size = 1.5,
			chest_box = new utils.three.Box3().setFromObject(this.chest),
			chest_size = chest_box.getSize(),
			chest_pos = chest_box.getCenter();

		// parts centered
		this.parts.torso.copy(chest_pos).translate_quaternion(this.chest.getWorldQuaternion(), new Vector3().copy({
			x: 0,
			y: -head_size / 2,
			z: 0,
		}));

		this.parts.torso_height = chest_size.y - head_size;

		this.parts.head.copy(chest_pos).translate_quaternion(this.chest.getWorldQuaternion(), new Vector3().copy({
			x: 0,
			y: this.parts.torso_height / 2,
			z: 0,
		}));

		var leg_pos = this.leg[vars.getWorldPosition](),
			leg_scale = this.leg.getWorldScale();

		this.parts.legs = new Vector3().copy(leg_pos).translate_quaternion(this.leg.getWorldQuaternion(), new Vector3().copy({
			x: -leg_scale.x / 2,
			y: -leg_scale.y / 2,
			z: 0,
		}));

		var keys = [ 'head', 'torso', 'legs' ];

		var part = this.cheat.config.aim.offset == 'random' ? keys[~~(random_target * keys.length)] : this.cheat.config.aim.offset;

		this.aim_point = part == 'head' ? this.parts.hitbox_head : (this.parts[part] || (console.error(part, 'not registered'), Vector3.Blank));

		// every 4 ticks
		if((this.dont_calc++) % (this.calc_ticks + 1) == 0){
			this.frustum = utils.contains_point(this.aim_point);
			this.in_fov = this.calc_in_fov();

			this.world_pos = this.active ? this.obj[vars.getWorldPosition]() : { x: 0, y: 0, z: 0 };

			this.can_see = this.cheat.player &&
				utils.obstructing(utils.camera_world(), this.aim_point, (!this.cheat.player || this.cheat.player.weapon && this.cheat.player.weapon.pierce) && this.cheat.config.aim.wallbangs)
			== null ? true : false;
		}

		if(this.frustum)this.rect = this.calc_rect();

		this.esp_hex.set_style(this.cheat.config.esp.rainbow ? this.cheat.overlay.rainbow.col : this.cheat.config.color[this.enemy ? this.risk ? 'risk' : 'hostile' : 'friendly']);

		if(!this.can_see)this.esp_hex.sub_scalar(0x77);


		this.esp_color = this.esp_hex.toString();

		var hp_perc = (this.health / this.max_health) * 100,
			hp_red = hp_perc < 50 ? 255 : Math.round(510 - 5.10 * hp_perc),
			hp_green = hp_perc < 50 ? Math.round(5.1 * hp_perc) : 255,
			hp_blue = 0;

		this.hp_hex.set(hp_red, hp_green, hp_blue);

		this.hp_color = this.hp_hex.toString();
	}
};

module.exports = Player;

/***/ }),

/***/ "../libs/segoe/index.js":
/*!******************************!*\
  !*** ../libs/segoe/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__(/*! ../utils */ "../libs/utils.js"),
	utils = new Utils();

utils.add_ele('style', () => document.documentElement, { textContent: __webpack_require__(/*! ./index.css */ "../libs/segoe/index.css") });

/***/ }),

/***/ "../libs/socket.js":
/*!*************************!*\
  !*** ../libs/socket.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var msgpack = __webpack_require__(/*! msgpack-lite */ "../node_modules/msgpack-lite/lib/browser.js"),
	data = Symbol();

module.exports = inter => {
	var socket_id, skin_cache;

	class HWebSocket extends WebSocket {
		constructor(url, proto){
			super(url, proto);

			this.addEventListener('message', event => {
				var [ label, ...data ] = msgpack.decode(new Uint8Array(event.data)),
					client;

				if(label == 'io-init')socket_id = data[0];
				else if(inter.unlock_skins && label == 0 && skin_cache && socket_id && (client = data[0].indexOf(socket_id)) != -1){
					// loadout
					data[0][client + 12] = skin_cache[2];

					// hat
					data[0][client + 13] = skin_cache[3];

					// body
					data[0][client + 14] = skin_cache[4];

					// knife
					data[0][client + 19] = skin_cache[9];

					// dye
					data[0][client + 24] = skin_cache[14];

					// waist
					data[0][client + 33] = skin_cache[17];

					// event.data is non-writable but configurable
					// concat message signature ( 2 bytes )
					var encoded = msgpack.encode([ label, ...data ]),
						final = new Uint8Array(encoded.byteLength + 2);

					final.set(encoded, 0);
					final.set(event.data.slice(-2), encoded.byteLength);

					Object.defineProperty(event, 'data', { value: final.buffer });
				}
			});
		}
		send(data){
			var [ label, ...sdata ] = msgpack.decode(data.slice(0, -2));

			if(label == 'en')skin_cache = sdata[0];

			super.send(data);
		}
	};

	return HWebSocket;
};

/***/ }),

/***/ "../libs/space.js":
/*!************************!*\
  !*** ../libs/space.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class Vector3 {
	constructor(x = 0, y = 0, z = 0){
		this.x = x;
		this.y = y;
		this.z = z;
	}
	clone(){
		return new Vector3(this.x, this.y, this.z);
	}
	set(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;

		return this;
	}
	set_x(x){
		this.x = x;
		return this;
	}
	set_y(y){
		this.y = y;
		return this;
	}
	set_z(z){
		this.z = z;
		return this;
	}
	copy(vector){
		this.x = vector.x;
		this.y = vector.y;
		this.z = vector.z;

		return this;
	}
	add(vector){
		this.x += vector.x;
		this.y += vector.y;
		this.z += vector.z;

		return this;
	}
	add_vectors(x = 0, y = 0, z = 0){
		this.x += x;
		this.y += y;
		this.z += z;

		return this;
	}
	add_scalar(scalar){
		this.x += scalar;
		this.y += scalar;
		this.z += scalar;

		return this;
	}
	sub(vector){
		this.x += vector.x;
		this.y += vector.y;
		this.z += vector.z;

		return this;
	}
	sub_vectors(x = 0, y = 0, z = 0){
		this.x -= x;
		this.y -= y;
		this.z -= z;

		return this;
	}
	sub_scalar(scalar){
		this.x -= scalar;
		this.y -= scalar;
		this.z -= scalar;

		return this;
	}
	multiply(vector){
		this.x *= vector.x;
		this.y *= vector.y;
		this.z *= vector.z;

		return this;
	}
	multiply_vectors(x = 0, y = 0, z = 0){
		this.x *= x;
		this.y *= y;
		this.z *= z;

		return this;
	}
	multiply_scalar(scalar){
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;
	}
	divide(vector){
		this.x /= vector.x;
		this.y /= vector.y;
		this.z /= vector.z;

		return this;
	}
	divide_vectors(x = 0, y = 0, z = 0){
		this.x /= x;
		this.y /= y;
		this.z /= z;

		return this;
	}
	divide_scalar(scalar){
		this.x /= scalar;
		this.y /= scalar;
		this.z /= scalar;

		return this;
	}
	apply_quaternion(q) {
		const x = this.x, y = this.y, z = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
		const ix = qw * x + qy * z - qz * y;
		const iy = qw * y + qz * x - qx * z;
		const iz = qw * z + qx * y - qy * x;
		const iw = -qx * x - qy * y - qz * z;
		this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		return this;
	}
	translate_quaternion(quaternion, vector){
		for(var axis in vector){
			var vec = new Vector3();

			vec[axis] = 1;

			var pos = vec.apply_quaternion(quaternion).multiply_scalar(vector[axis]);

			this.add(pos);
		}

		return this;
	}
	distance_to(point){
		return Math.hypot(this.x - point.x, this.y - point.y, this.z - point.z)
	}
};

Vector3.Blank = new Vector3();

class Hex {
	constructor(string = '#000'){
		this.hex = [ 0, 0, 0 ];
		this.set_style(string);
	}
	add_scalar(scalar){
		for(let ind in this.hex)this.hex[ind] += scalar;
		return this.normalize();
	}
	sub_scalar(scalar){
		for(let ind in this.hex)this.hex[ind] -= scalar;
		return this.normalize();
	}
	normalize(){
		for(let ind in this.hex)this.hex[ind] = Math.max(Math.min(this.hex[ind], 255), 0);
		return this;
	}
	set(r, g, b){
		this.hex[0] = r;
		this.hex[1] = g;
		this.hex[2] = b;

		return this;
	}
	set_style(string){
		let hex_index = 0,
			offset = string[0] == '#' ? 1 : 0,
			chunk = string.length - offset < 5 ? 1 : 2;

		for(let index = offset; index < string.length; index += chunk){
			let part = string.substr(index, chunk);

			if(chunk == 1)part += part;

			this.hex[hex_index++] = parseInt(part, 16);
		}

		return this;
	}
	toString(){
		var string = '#';

		for(let color of this.hex)string += color.toString(16).padStart(2, 0);

		return string;
	}
};

exports.Hex = Hex;
exports.Vector3 = Vector3;

/***/ }),

/***/ "../libs/ui/actions.js":
/*!*****************************!*\
  !*** ../libs/ui/actions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Panel = __webpack_require__(/*! ./panel */ "../libs/ui/panel.js"),
	{ utils, frame } = __webpack_require__(/*! ./consts */ "../libs/ui/consts.js");

utils.add_ele('style', frame, { textContent: __webpack_require__(/*! ./actions.css */ "../libs/ui/actions.css") });

exports.alert = desc => {
	var panel = new Panel('prompt');

	utils.add_ele('div', panel.node, { innerHTML: desc, className: 'description' });

	var form = utils.add_ele('form', panel.node);

	utils.add_ele('button', form, { textContent: 'OK', className: 'submit single' });

	panel.show();

	panel.focus();

	return new Promise(resolve => form.addEventListener('submit', event => (event.preventDefault(), panel.remove(), resolve()), { once: true }));
};

exports.prompt = (desc, default_text = '') => {
	var panel = new Panel('prompt');

	utils.add_ele('div', panel.node, { textContent: desc, className: 'description' });

	var form = utils.add_ele('form', panel.node),
		input = utils.add_ele('input', form, {
			className: 'input',
			value: default_text,
		});

	utils.add_ele('button', form, { textContent: 'OK', className: 'submit' });

	var cancel = utils.add_ele('button', form, { textContent: 'Cancel', className: 'cancel' });

	panel.show();

	panel.focus();

	input.focus();
	input.select();

	return new Promise((resolve, reject) => form.addEventListener('submit', event => {
		event.preventDefault();

		(event.submitter == cancel ? reject : resolve)(input.value);

		panel.remove();
	}));
};

exports.options = (title, options) => {
	var panel = new Panel({}, 'options'),
		title = utils.add_ele('div', panel.node, { textContent: title, className: 'title' });

	panel.focus();

	return new Promise(resolve => {
		options.forEach((option, index) => utils.add_ele('div', panel.node, { className: 'control', textContent: option[0] }).addEventListener('click', () => (panel.hide(), resolve(option[1]))));
	});
};

/***/ }),

/***/ "../libs/ui/config/control.js":
/*!************************************!*\
  !*** ../libs/ui/config/control.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ../../ez */ "../libs/ez/index.js");

var { keybinds, utils } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	EventLite  = __webpack_require__(/*! event-lite */ "../node_modules/event-lite/event-lite.js");

class Control {
	static content_tag = 'div';
	constructor(name, data, section){
		this.name = name;
		this.data = data;
		this.panel = section.panel;
		this.section = section;
		this.content = utils.add_ele(this.constructor.content_tag, this.section.node, { className: 'control' });
		this.label = utils.add_ele('text', this.content);

		this.create();
	}
	create(){}
	remove(){
		this.content.remove();
	}
	get key(){
		if(!this.data.key)return null;

		var walked = this.walk(this.data.key);
		return walked[0][walked[1]];
	}
	walk(data){
		var state = this.panel.config,
			last_state,
			last_key;

		data.split('.').forEach(key => state = ((last_state = state)[last_key = key] || {}));

		return [ last_state, last_key ];
	}
	get value(){
		if(!this.data.walk || this.data.value && typeof this.data.value != 'object')return this.data.value;

		var walked = this.walk(this.data.walk);

		return walked[0][walked[1]];
	}
	set value(value){
		var walked = this.walk(this.data.walk);

		walked[0][walked[1]] = value;

		this.panel.save_config();

		this.emit('change', value);

		return value;
	}
	interact(){
		console.warn('No defined interaction for', this);
	}
	update(){}
	label_text(){
		this.label.nodeValue = this.name;
	}
};

EventLite.mixin(Control.prototype);

class BooleanControl extends Control {
	static id = 'boolean';
	static content_tag = 'label';
	create(){
		this.input = utils.add_ele('ez-checkbox', this.content);
		this.input.addEventListener('change', () => this.value = this.input.checked);
	}
	interact(){
		this.value = !this.value;
	}
	update(init){
		super.label_text(this.name);
		if(init)this.input.checked = this.value;
	}
};

class RotateControl extends Control {
	static id = 'rotate';
	create(){
		this.select = utils.add_ele('ez-select', this.content);

		this.select.addEventListener('change', () => this.value = this.select.value);

		for(let value in this.data.value)utils.add_ele('ez-option', this.select, {
			textContent: this.data.value[value],
			value: value,
		});
	}
	interact(){
		var keys = Object.keys(this.data.value),
			ind = keys.indexOf(this.value);

		this.select.value = this.value = keys[ind + 1] || keys[0];
	}
	update(init){
		this.label_text(this.name);
		if(init)this.select.value = this.value;
	}
};

class LinkControl extends Control {
	static id = 'link';
	static content_tag = 'a';
	interact(){
		this.content.click();
	}
	update(){
		super.label_text(this.name);
		this.content.href = this.value;
	}
};

class FunctionControl extends Control {
	static id = 'function';
	static content_tag = 'a';
	create(){
		this.content.addEventListener('click', () => this.interact());
	}
	interact(){
		this.value();
	}
	update(){
		super.label_text(this.name);
	}
};

class KeybindControl extends Control {
	static id = 'keybind';
	create(){
		this.input = utils.add_ele('ez-input', this.content, { placeholder: 'Press a key' });

		this.input.addEventListener('focus', () => {
			this.input.value = '';
		});

		this.input.addEventListener('blur', () => {
			this.update();
		});

		this.input.addEventListener('keydown', event => {
			event.preventDefault();
			this.value = event.code == 'Escape' ? null : event.code;
			this.input.blur();
		});
	}
	update(init){
		this.label_text(this.name);
		this.input.value = this.value ? utils.string_key(this.value) : 'Unset';
	}
};

class TextBoxControl extends Control {
	static id = 'textbox';
	update(){
		this.button.style.display = 'none';
		this.input.value = ('' + this.value).substr(0, this.data.max_length);
	}
};

class SliderControl extends Control {
	static id = 'slider';
	create(){
		this.input = utils.add_ele('ez-slider', this.content, {
			min: this.data.min,
			max: this.data.max,
			step: this.data.step,
		});

		this.input.labels = this.data.labels;

		this.input.addEventListener('change', () => this.value = this.input.value);
	}
	update(init){
		this.label_text(this.name);
		if(init)this.input.value = this.value;
		else this.input.render();
	}
};

Control.Types = [
	KeybindControl,
	RotateControl,
	BooleanControl,
	FunctionControl,
	LinkControl,
	TextBoxControl,
	SliderControl,
];

module.exports = Control;

/***/ }),

/***/ "../libs/ui/config/index.js":
/*!**********************************!*\
  !*** ../libs/ui/config/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { utils, store } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	DataStore = __webpack_require__(/*! ../../datastore */ "../libs/datastore.js"),
	PanelDraggable = __webpack_require__(/*! ../paneldraggable */ "../libs/ui/paneldraggable.js"),
	Control = __webpack_require__(/*! ./control */ "../libs/ui/config/control.js"),
	clone_obj = obj => JSON.parse(JSON.stringify(obj)),
	assign_deep = (target, ...objects) => {
		for(let ind in objects)for(let key in objects[ind]){
			if(typeof objects[ind][key] == 'object' && objects[ind][key] != null && key in target)assign_deep(target[key], objects[ind][key]);
			else if(typeof target == 'object' && target != null)Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(objects[ind], key))
		}

		return target;
	};

class Section {
	constructor(name, panel){
		this.panel = panel;

		this.node = utils.add_ele('section', this.panel.sections_con);

		this.name = name;

		this.controls = new Set();

		this.button = utils.add_ele('div', this.panel.sidebar_con, { className: 'open', textContent: this.name });

		this.button.addEventListener('click', () => this.interact());

		this.hide();
	}
	interact(){
		this.show();

		for(let section of this.panel.sections)if(section != this)section.hide();
	}
	get visible(){
		return !this.node.classList.contains('hidden');
	}
	update(init){
		for(let control of this.controls)try{
			control.emit('change', control.value, init);

			control.update(init);
		}catch(err){
			console.error(err);
		}
	}
	show(init){
		this.button.classList.add('active');

		this.node.classList.remove('hidden');
		this.update(init);

		this.panel.config.section = this.name;
		if(!init)this.panel.save_config();
	}
	hide(){
		this.button.classList.remove('active');

		this.node.classList.add('hidden');
	}
};

class ControlSection extends Section {
	static id = 'control';
	add_control(name, data){
		for(let type of Control.Types)if(type.id == data.type){
			let control = new type(name, data, this);

			this.controls.add(control);

			return control;
		}

		throw new TypeError('Unknown type: ' + data.type);
	}
};

class FunctionSection extends Section {
	static id = 'function';
	interact(){
		this.data.value();
	}
};

Section.Types = [
	ControlSection,
	FunctionSection,
];

class Config extends PanelDraggable {
	constructor(title, key, store = new DataStore()){
		super('config');

		this.store = store;

		this.config_key = key;

		this.presets = new Map();

		this.sections = new Set();

		this.title = this.listen_dragging(utils.add_ele('div', this.node, { textContent: title, className: 'title' }));

		this.title_right = utils.add_ele('div', this.title, { className: 'right' });

		this.sidebar_con = utils.add_ele('div', this.node, { className: 'tabs' });
		this.sections_con = utils.add_ele('div', this.node, { className: 'sections' });

		this.apply_bounds();
	}
	get default_section(){
		var first;

		for(let section of this.sections){
			if(section.visible)return section;
			if(!first)first = section;
			if(section.name == this.config.section)return section;
		}

		return first;
	}
	update(init){
		this.apply_bounds();

		for(let section of this.sections){
			section.update(init);

			if(section == this.default_section)section.show();
			else section.hide();
		}

		this.title_right.textContent = [ 'F1', this.config.binds.toggle ].map(utils.string_key).join(' / ');
	}
	add_tab(name){
		var tab = new ControlSection(name, this);

		this.sections.add(tab);

		return tab;
	}
	add_preset(label, value){
		this.presets.set(label, value);
	}
	async insert_config(data, save = false){
		this.config = utils.assign_deep(utils.clone_obj(this.presets.get('Default')), data);

		if(save)await this.save_config();

		this.update(true);
	}
	async load_preset(preset){
		if(!this.presets.has(preset))throw new Error('Invalid preset:', preset);

		this.insert_config(this.presets.get(preset), true);
	}
	async save_config(){
		await this.store.set(this.config_key, this.config);
	}
	async load_config(){
		this.insert_config(await this.store.get(this.config_key, 'object'));

		this.pos = { x: 1, y: this.center_side('height') };
		this.apply_bounds();
		this.load_ui_data();
	}
};

module.exports = Config;

/***/ }),

/***/ "../libs/ui/consts.js":
/*!****************************!*\
  !*** ../libs/ui/consts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DataStore = __webpack_require__(/*! ../datastore */ "../libs/datastore.js"),
	Utils = __webpack_require__(/*! ../utils */ "../libs/utils.js"),
	utils = new Utils();

exports.utils = utils;

exports.content = utils.add_ele('div', () => document.documentElement, { style: {
	top: 0,
	left: 0,
	'z-index': 9999999999,
	border: 'none',
	position: 'absolute',
	background: '#0000',
	width: '100vw',
	height: '100vh',
} });

exports.frame = exports.content.attachShadow({ mode: 'open' });

exports.store = new DataStore();

/***/ }),

/***/ "../libs/ui/editor/index.js":
/*!**********************************!*\
  !*** ../libs/ui/editor/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { utils, store, frame } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	PanelDraggable = __webpack_require__(/*! ../paneldraggable */ "../libs/ui/paneldraggable.js"),
	Tab = __webpack_require__(/*! ./tab */ "../libs/ui/editor/tab.js"),
	svg = __webpack_require__(/*! ./svg */ "../libs/ui/editor/svg.js"),
	Write = __webpack_require__(/*! ./write */ "../libs/ui/editor/write.js"),
	{ alert, prompt } = __webpack_require__(/*! ../actions */ "../libs/ui/actions.js");

utils.add_ele('style', frame, { textContent: __webpack_require__(/*! ./index.css */ "../libs/ui/editor/index.css") });

class Editor extends PanelDraggable {
	constructor(data){
		super('editor');

		this.data = data;

		// user stylesheets
		this.sheet = utils.add_ele('style', document.documentElement);

		this.title = utils.add_ele('div', this.node, { textContent: this.data.title, className: 'bar' });

		this.scroll_by = 0;

		setInterval(() => {
			if(this.scroll_by)this.tab_con.scrollBy(25 * this.scroll_by, 0), this.update_overflow();
		}, 50);

		window.addEventListener('blur', () => this.scroll_by = 0);
		window.addEventListener('mouseup', () => this.scroll_by = 0);

		this.back = utils.add_ele('button', this.title, {
			className: 'scroll back',
			textContent: '<',
			events: {
				mousedown: () => this.scroll_by = -1,
			},
		});

		this.tab_con = utils.add_ele('div', this.title, { className: 'files' });

		this.forward = utils.add_ele('button', this.title, {
			className: 'scroll forward',
			textContent: '>',
			events: {
				mousedown: () => this.scroll_by = 1,
			},
		});

		this.actions = this.listen_dragging(utils.add_ele('div', this.title, { className: 'actions' }));

		utils.add_ele('button', this.actions, { className: 'new' }).addEventListener('click', async () => this.new_tab());

		this.saven = utils.add_ele('button', this.actions, {
			innerHTML: svg.save,
			className: 'save',
			events: {
				click: () => this.save_doc(),
			},
		});

		utils.add_ele('button', this.actions, {
			innerHTML: svg.web,
			className: 'web',
			events: {
				click: () => prompt('Enter a CSS link', 'https://').then(async input => {
					try{
						var style = await(await fetch(new URL(input, location))).text(),
							name = input.split('/').slice(-1)[0],
							tab = new Tab({ id: Tab.ID(), name: name, active: true }, this);

						await tab.set_value(style);
						await tab.save();

						tab.focus();

						await this.load();
					}catch(err){
						if(err.message == "Failed to construct 'URL': Invalid URL")alert('Invalid URL');
						else alert('Loading failed: ' + err.message);
					}
				}).catch(() => {}),
			},
		});

		this.data.help = this.data.help.replace(/svg\.(\w+)/g, (match, prop) => svg[prop]);

		utils.add_ele('button', this.actions, {
			textContent: '?',
			events: {
				click: event => alert(this.data.help),
			},
		});

		utils.add_ele('button', this.actions, {
			innerHTML: svg.close,
			className: 'hide',
			events: {
				click: event => this.hide(),
			},
		});

		this.tabs = new Set();

		this.editor = new Write(this.node);

		this.editor.on('ctrl+s', () => this.save_doc());
		this.editor.on('ctrl+r', () => this.load());

		this.editor.on('change', () => {
			this.saved = false;
			this.update();
		});

		this.footer = utils.add_ele('footer', this.node);
		this.footer_text = utils.add_ele('div', this.footer, {
			className: 'text',
		});

		var holder = utils.add_ele('div', this.footer, {
			className: 'file-opt',
			textContent: 'Name:',
		});

		this.filename = utils.add_ele('ez-input', holder, {
			spellcheck: false,
			events: {
				change: async () => {
					(await this.focused_tab()).rename(this.filename.value);
				},
				focus: async () => {
					var range = document.createRange();

					range.selectNodeContents(this.filename.main);

					var selection = window.getSelection();

					selection.removeAllRanges();

					selection.addRange(range);
				},
			},
		});

		var holder1 = utils.add_ele('div', this.footer, {
			className: 'file-opt',
			textContent: 'Active:',
		});

		this.fileactive = utils.add_ele('ez-checkbox', holder1, {
			events: {
				change: async () => (await this.focused_tab()).toggle_active(),
			},
		});

		this.update();

		this.load_config();

		this.pos = { x: this.center_side('width'), y: this.center_side('height') };
		this.apply_bounds();
		this.load_ui_data();

		this.hide();
	}
	update_overflow(){
		var overflow = this.tab_con.scrollWidth > this.tab_con.offsetWidth;

		if(overflow){
			this.title.classList.add('overflow');

			this.back.disabled = this.tab_con.scrollLeft == 0;
			this.forward.disabled = this.tab_con.scrollLeft + this.tab_con.offsetWidth == this.tab_con.scrollWidth;
		}else this.title.classList.remove('overflow');
	}
	async new_tab(){
		var tab = await new Tab({ id: Tab.ID(), name: 'New Style', active: true, value: '' }, this);

		await tab.save();

		tab.focus();

		return tab;
	}
	async focused_tab(){
		for(let tab of this.tabs)if(tab.focused)return tab;

		return (await this.new_tab()).focus();
	}
	async first_tab(){
		for(let tab of this.tabs)return tab;

		return await this.new_tab();
	}
	update(){
		this.saven.classList[this.saved ? 'add' : 'remove']('saved');

		this.footer_text.innerHTML = this.saved == null ? 'Editor loaded' : this.saved ? 'All changes saved' : `Unsaved changes, press ${svg.save}`;

		this.apply_bounds();
	}
	async save_doc(){
		for(let tab of this.tabs)if(tab.focused)await store.set_raw(tab.id, this.editor.getValue());

		this.saved = true;
		await this.update();
		await this.load();
	}
	async load(){
		this.update_overflow();
		this.sheet.textContent = '';
		for(let tab of this.tabs)if(tab.active)this.sheet.textContent += await tab.get_value();
	}
	async load_config(){
		for(let data of await store.get('css', 'array')){
			let tab = new Tab(data, this);

			if(tab.active)this.sheet.textContent += await tab.get_value();
		}

		(await this.first_tab()).focus();
	}
	async save_config(){
		await store.set('css', [...this.tabs].map(tab => ({
			id: tab.id,
			name: tab.name,
			active: tab.active,
		})));
	}
};

module.exports = Editor;

/***/ }),

/***/ "../libs/ui/editor/svg.js":
/*!********************************!*\
  !*** ../libs/ui/editor/svg.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.rename = `<svg xmlns="http://www.w3.org/2000/svg" class="rename" viewBox="0 0 226 226"><path fill="currentColor" stroke="#ccc" stroke-linejoin="round" stroke-width=".996" d="M149.0505288 34.524144c2.3905494 1.1540553 4.3414544 2.582897 6.1549712 3.9567694 1.8135168-1.3738724 3.7644218-2.8027041 6.1549712-3.9567693C168.4771602 31.0619784 178.1767261 28.589 190.37675 28.589v14.0685c-10.3040782 0-18.0252694 2.033344-22.8613075 4.3964038-2.4180191 1.1815348-4.2590155 2.500458-5.0558653 3.2973078-.164858.1648678-.164858.1099086-.2198172.2198172v124.8579424c.0549592.1099086.0549592.0549593.2198172.2198172.7968498.7968498 2.6378462 2.115773 5.0558653 3.2973078 4.8360481 2.3630698 12.5572293 4.3964038 22.8613175 4.3964038v14.0685c-12.200024 0-21.8995998-2.4729784-29.0162788-5.935144-2.3905494-1.1540553-4.3414445-2.582887-6.1549712-3.9567694-1.8135168 1.3738824-3.7644219 2.802714-6.1549713 3.9567693C141.9338498 194.9380316 132.234284 197.411 120.03426 197.411v-14.0685c10.3040781 0 18.0252693-2.033334 22.8613174-4.3964038 2.4180191-1.1815348 4.2590156-2.500458 5.0558654-3.2973078.1648678-.1648579.1648678-.1099086.2198172-.2198172V50.5710387c-.0549494-.1099086-.0549494-.0549493-.2198172-.2198172-.7968498-.7968498-2.6378463-2.1157729-5.0558654-3.2973078-4.836048-2.3630697-12.5572293-4.3964037-22.8613075-4.3964037v-14.0685c12.200024 0 21.8995998 2.4729783 29.0162788 5.935144zM134.10275 70.7945V84.863h-112.548v56.274h112.548v14.0685H7.48625v-84.411zm84.411 0v84.411h-42.2055V141.137h28.137V84.863h-28.137V70.7945zm-126.6165 28.137v28.137h-56.274v-28.137z"/><path fill="none" d="M.452 225.548V.452h225.096v225.096z"/><path fill="currentColor" d="M120.03425 28.589v14.0685c10.3040782 0 18.0252694 2.033344 22.8613175 4.3964038 2.418019 1.1815348 4.2590155 2.500458 5.0558653 3.2973078.1648679.1648678.1648679.1099086.2198172.2198172v124.8579424c-.0549493.1099086-.0549493.0549593-.2198172.2198172-.7968498.7968498-2.6378462 2.115773-5.0558653 3.2973078-4.8360481 2.3630698-12.5572294 4.3964038-22.8613075 4.3964038v14.0685c12.2000239 0 21.8995998-2.4729784 29.0162787-5.935144 2.3905494-1.1540553 4.3414545-2.582887 6.1549713-3.9567694 1.8135168 1.3738824 3.7644218 2.802714 6.1549712 3.9567693 7.116689 3.4621757 16.8162548 5.9351441 29.0162788 5.9351441v-14.0685c-10.3040782 0-18.0252694-2.033334-22.8613076-4.3964038-2.418019-1.1815348-4.2590155-2.500458-5.0558653-3.2973078-.1648579-.1648579-.1648579-.1099086-.2198172-.2198172V50.5710387c.0549593-.1099086.0549593-.0549493.2198172-.2198172.7968498-.7968498 2.6378463-2.1157729 5.0558653-3.2973078 4.8360482-2.3630697 12.5572294-4.3964037 22.8613175-4.3964037v-14.0685c-12.2000239 0-21.8995998 2.4729783-29.0162787 5.935144-2.3905494 1.1540553-4.3414445 2.582897-6.1549713 3.9567694-1.8135168-1.3738724-3.7644218-2.8027042-6.1549712-3.9567694-7.116689-3.4621657-16.8162549-5.935144-29.0162788-5.935144zM7.48625 70.7945v84.411h126.6165V141.137h-112.548V84.863h112.548V70.7945zm168.822 0V84.863h28.137v56.274h-28.137v14.0685h42.2055v-84.411zm-140.685 28.137v28.137h56.274v-28.137z"/></svg>`;

exports.close = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M 3.726563 3.023438 L 3.023438 3.726563 L 7.292969 8 L 3.023438 12.269531 L 3.726563 12.980469 L 8 8.707031 L 12.269531 12.980469 L 12.980469 12.269531 L 8.707031 8 L 12.980469 3.726563 L 12.269531 3.023438 L 8 7.292969 Z"></path></svg>`;

exports.save = `<svg xmlns="http://www.w3.org/2000/svg" class="save button" viewBox="0 0 226 226"><g fill="none" stroke-linejoin="none" stroke-miterlimit="10" font-family="none" font-size="none" font-weight="none" style="mix-blend-mode:normal" text-anchor="none"><path fill="currentColor" d="M156.2876938 78.369847h-25.9726123V17.7670814h25.9726123zM225.548 52.3972345v147.178153c0 14.3390436-11.6335688 25.9726124-25.9726123 25.9726124H26.4246223C12.0855788 225.548.45201 213.9144312.45201 199.5753877V26.4246223C.45201 12.0855788 12.0855788.45201 26.4246223.45201h147.178153c7.1695268 0 11.1262862.372006 31.3497574 20.5954672C225.175994 41.2709485 225.548 45.2277178 225.548 52.3972346zM43.7396938 78.3698469c0 4.7684098 3.889131 8.6575408 8.6575408 8.6575408h112.548c4.7684098 0 8.6575408-3.889131 8.6575408-8.6575408V17.7670815c0-4.7684097-3.889131-8.6575407-8.6575408-8.6575407h-112.548c-4.7684098 0-8.6575408 3.889131-8.6575408 8.6575407zm155.8356939 43.2876939c0-4.7684098-3.889131-8.6575408-8.6575408-8.6575408H35.0821531c-4.7684098 0-8.6575408 3.889131-8.6575408 8.6575408v86.5753876c0 4.7684098 3.889131 8.6575408 8.6575408 8.6575408h155.8356938c4.7684098 0 8.6575408-3.889131 8.6575408-8.6575408z"/><path d="M.452 225.548V.452h225.096v225.096z"/><path fill="currentColor" d="M156.2876938 78.369847h-25.9726123V17.7670814h25.9726123zM225.548 52.3972345v147.178153c0 14.3390436-11.6335688 25.9726124-25.9726123 25.9726124H26.4246223C12.0855788 225.548.45201 213.9144312.45201 199.5753877V26.4246223C.45201 12.0855788 12.0855788.45201 26.4246223.45201h147.178153c7.1695268 0 11.1262862.372006 31.3497574 20.5954672C225.175994 41.2709485 225.548 45.2277178 225.548 52.3972346zM43.7396938 78.3698469c0 4.7684098 3.889131 8.6575408 8.6575408 8.6575408h112.548c4.7684098 0 8.6575408-3.889131 8.6575408-8.6575408V17.7670815c0-4.7684097-3.889131-8.6575407-8.6575408-8.6575407h-112.548c-4.7684098 0-8.6575408 3.889131-8.6575408 8.6575407zm155.8356939 43.2876939c0-4.7684098-3.889131-8.6575408-8.6575408-8.6575408H35.0821531c-4.7684098 0-8.6575408 3.889131-8.6575408 8.6575408v86.5753876c0 4.7684098 3.889131 8.6575408 8.6575408 8.6575408h155.8356938c4.7684098 0 8.6575408-3.889131 8.6575408-8.6575408z"/></g></svg>`;

exports.web = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-size="none" font-weight="none" style="mix-blend-mode:normal" text-anchor="none"><path d="M0 172V0h172v172z"/><path fill="currentColor" d="M86 0C47.80649 0 15.32392 25.04026 4.13462 59.53846h14.05769c1.86058-4.75481 4.23798-9.22536 7.02885-13.4375.41346.07753.80108.20673 1.24038.20673h12.40385c-1.31791 4.1863-2.40324 8.65685-3.30769 13.23077h13.64423c1.03365-4.6256 2.22236-9.09615 3.72115-13.23077h66.15385c1.4988 4.13462 2.6875 8.60517 3.72115 13.23077h13.64423c-.90445-4.57392-1.98978-9.04447-3.30769-13.23077h12.40385c.4393 0 .82692-.12921 1.24038-.20673 2.76503 4.21214 5.16827 8.68269 7.02885 13.4375h14.05769C156.67609 25.04026 124.19352 0 86.00001 0zm0 13.23077c10.25901 0 19.74279 7.6232 26.875 19.84615h-53.75C66.25721 20.85396 75.74099 13.23077 86 13.23077zm-36.38462 9.71635c-2.04147 3.10096-3.8762 6.53786-5.58173 10.12981h-7.85577c4.08294-3.85036 8.55349-7.28726 13.4375-10.12981zm72.76924 0c4.88401 2.84255 9.35457 6.27945 13.4375 10.12981h-7.85577c-1.70553-3.59195-3.54026-7.02885-5.58173-10.12981zM1.65385 72.14904c-.25841.12921-.4393.41346-.62019.62019-.33594.4393-.41346.95613-.20673 1.44712l10.33654 25.01442c.25842.62019.87861 1.03365 1.65385 1.03365h5.58173c.72356 0 1.36959-.4393 1.65385-1.03365l5.58173-11.78365c.49099-1.08533.95613-2.27404 1.44712-3.51442.4393 1.11118.93029 2.11899 1.44712 3.30769l5.16827 11.99038c.25842.62019.90445 1.03365 1.65385 1.03365h5.78846c.7494 0 1.39544-.41346 1.65385-1.03365l10.95673-25.01442c.20673-.49099.15505-1.00781-.20673-1.44712-.33594-.4393-.85276-.62019-1.44712-.62019h-6.20192c-.77524 0-1.39543.38762-1.65385 1.03365l-4.96154 12.61058c-.4393 1.11118-.69772 1.96394-1.03365 2.89423-.38762-.98197-.77524-1.96394-1.24038-3.10096l-5.375-12.40385c-.25841-.62019-.90445-1.03365-1.65385-1.03365h-5.16827c-.7494 0-1.60216.41346-1.86058 1.03365l-5.58173 12.61058c-.46514 1.08534-.85276 2.14483-1.24038 3.10096-.33594-.95613-.64603-2.04147-1.03365-3.10096L10.5433 73.18269c-.23257-.67187-.85276-1.03365-1.65385-1.03365H2.4808c-.3101 0-.56851-.12921-.82692 0zm59.125 0c-.25841.12921-.64603.41346-.82692.62019-.33594.4393-.41346.95613-.20673 1.44712l10.33654 25.01442c.25842.62019.87861 1.03365 1.65385 1.03365h5.78846c.7494 0 1.36959-.4393 1.65385-1.03365l5.58173-11.78365c.49099-1.08533.95613-2.27404 1.44712-3.51442.4393 1.11118.72356 2.11899 1.24038 3.30769l5.375 11.99038c.25842.62019.90445 1.03365 1.65385 1.03365h5.58173c.7494 0 1.39544-.41346 1.65385-1.03365l11.16346-25.01442c.20673-.49099.15505-1.00781-.20673-1.44712-.33594-.4393-1.03365-.62019-1.65385-.62019h-5.99519c-.77524 0-1.60216.38762-1.86058 1.03365l-4.75481 12.61058c-.4393 1.11118-.90445 1.96394-1.24038 2.89423-.38762-.98197-.77524-1.96394-1.24038-3.10096l-5.16827-12.40385c-.25841-.62019-1.11118-1.03365-1.86058-1.03365h-5.16827c-.7494 0-1.39543.41346-1.65385 1.03365L76.4904 85.79327c-.46514 1.08534-.85276 2.14483-1.24038 3.10096-.33594-.95613-.64603-2.04147-1.03365-3.10096l-4.54808-12.61058c-.23257-.67187-1.05949-1.03365-1.86058-1.03365h-6.20192c-.28426 0-.56851-.12921-.82692 0zm58.91827 0c-.25841.12921-.4393.41346-.62019.62019-.33594.4393-.38762.95613-.20673 1.44712l10.33654 25.01442c.25842.62019.87861 1.03365 1.65385 1.03365h5.58173c.72356 0 1.36959-.4393 1.65385-1.03365l5.58173-11.78365c.49099-1.08533.95613-2.27404 1.44712-3.51442.4393 1.11118.93029 2.11899 1.44712 3.30769l5.16827 11.99038c.25842.62019.90445 1.03365 1.65385 1.03365h5.78846c.7494 0 1.36959-.41346 1.65385-1.03365l10.95673-25.01442c.20673-.49099.12921-1.00781-.20673-1.44712-.33594-.4393-.82692-.62019-1.44712-.62019h-6.20192c-.77524 0-1.42128.38762-1.65385 1.03365l-4.96154 12.61058c-.4393 1.11118-.69772 1.96394-1.03365 2.89423-.38762-.98197-.77524-1.96394-1.24038-3.10096l-5.375-12.40385c-.25841-.62019-.90445-1.03365-1.65385-1.03365h-5.375c-.7494 0-1.39543.41346-1.65385 1.03365l-5.58173 12.61058c-.46514 1.08534-.85276 2.14483-1.24038 3.10096-.33594-.95613-.64603-2.04147-1.03365-3.10096l-4.54808-12.61058c-.23257-.67187-.85276-1.03365-1.65385-1.03365h-6.40865c-.3101 0-.56851-.12921-.82692 0zm-115.5625 40.3125C15.32392 146.95974 47.8065 172 86 172c38.19351 0 70.67608-25.04026 81.86538-59.53846h-14.05769c-1.86058 4.75481-4.26382 9.22536-7.02885 13.4375-.41346-.07753-.80108-.20673-1.24038-.20673h-12.40385c1.31791-4.18629 2.19651-8.65685 3.10096-13.23077h-13.4375c-1.00781 4.6256-2.22235 9.12199-3.72115 13.23077H52.92307c-1.49879-4.10878-2.6875-8.60517-3.72115-13.23077h-13.4375c.90445 4.57392 1.78305 9.04447 3.10096 13.23077H26.46153c-.4393 0-.82692.12921-1.24038.20673-2.76503-4.21214-5.16827-8.68269-7.02885-13.4375zm32.04326 26.46154h7.85577c1.70553 3.59195 3.54026 7.02885 5.58173 10.12981-4.88401-2.84254-9.35456-6.27945-13.4375-10.12981zm22.94712 0h53.75c-7.13221 12.22296-16.61599 19.84615-26.875 19.84615s-19.74279-7.6232-26.875-19.84615zm68.84135 0h7.85577c-4.08293 3.85036-8.55349 7.28726-13.4375 10.12981 2.04147-3.10096 3.87621-6.53786 5.58173-10.12981z"/></g></svg>`;

exports.reload = `<svg xmlns="http://www.w3.org/2000/svg" class="new button" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.963 0-9 4.038-9 9h2c0-3.86 3.141-7 7-7 2.185097 0 4.125208 1.0167955 5.408203 2.5917969L15 10h6V4l-2.166016 2.1660156C17.184843 4.2316704 14.736456 3 12 3zm7 9c0 3.859-3.141 7-7 7-2.1850969 0-4.1252078-1.016796-5.4082031-2.591797L9 14H3v6l2.1660156-2.166016C6.8151574 19.76833 9.263544 21 12 21c4.963 0 9-4.037 9-9h-2z"/></svg>`;

/***/ }),

/***/ "../libs/ui/editor/tab.js":
/*!********************************!*\
  !*** ../libs/ui/editor/tab.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { utils, store } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	svg = __webpack_require__(/*! ./svg */ "../libs/ui/editor/svg.js");

class Tab {
	static ID(){
		return Math.random().toString();
	}
	constructor(data, panel){
		this.panel = panel;

		this.panel.tabs.add(this);

		this.name = data.name;
		this.id = data.id;
		this.active = data.active;

		this.focused = false;

		this.node = utils.add_ele('div', panel.tab_con, { className: 'tab' });

		this.namen = utils.add_ele('div', this.node, { className: 'name' });

		utils.add_ele('raw', this.node, {
			html: svg.close,
			className: 'close button',
			events: {
				click: event => {
					event.stopImmediatePropagation();
					this.remove();
				},
			},
		});

		this.node.addEventListener('click', () => this.focus());

		this.update();
	}
	async save(){
		await this.panel.save_config();

		return this;
	}
	async get_value(){
		return await store.get_raw(this.id) || '';
	}
	async set_value(data = this.panel.editor.getValue()){
		await store.set_raw(this.id, data);
	}
	async rename(name){
		if(!name.replace(/\s/g, '').length)return;

		this.name = this.namen.textContent = name;

		await this.save();

		this.update();
	}
	update(){
		this.namen.textContent = this.name;
		this.panel.update_overflow();
		// this.activen.className = 'active ' + this.active;
	}
	async focus(){
		if(this.focused)return this;

		for(let tab of this.panel.tabs)tab.blur();
		this.focused = true;
		this.node.classList.add('active');
		this.panel.editor.setValue(await this.get_value());
		this.panel.filename.value = this.name;
		this.panel.fileactive.checked = this.active;
		this.panel.saved = true;
		this.panel.update();

		return this;
	}
	blur(){
		this.focused = false;
		this.node.classList.remove('active');
	}
	async remove(){
		this.node.remove();
		this.panel.tabs.delete(this);
		await store.set_raw(this.id, '');
		await this.save();
		await this.panel.load();
		(await this.panel.first_tab()).focus();
	}
	async toggle_active(){
		this.active = !this.active;

		await this.save();

		this.update();

		this.panel.load();
	}
};

module.exports = Tab;

/***/ }),

/***/ "../libs/ui/editor/write.js":
/*!**********************************!*\
  !*** ../libs/ui/editor/write.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { utils } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	EventLite  = __webpack_require__(/*! event-lite */ "../node_modules/event-lite/event-lite.js");

class Write {
	constructor(parent){
		this.container = utils.add_ele('div', parent, { className: 'write' });
		this.linenums = utils.add_ele('div', this.container, { className: 'linenums' });
		this.node = utils.add_ele('textarea', this.container, {
			className: 'text',
			spellcheck: false,
		});

		utils.add_ele('style', parent, { textContent: __webpack_require__(/*! ./write.css */ "../libs/ui/editor/write.css") });

		this.node.addEventListener('input', () => {
			this.update();
			this.emit('change');
		});

		this.node.addEventListener('keydown', event => {
			var prevent_default = [ 's', 'w', 'r' ],
				key = event.key.toLowerCase();

			if(event.ctrlKey){
				if(prevent_default.includes(key))event.preventDefault();

				this.emit('ctrl+' + key);
			}

			if(key == 'tab')this.insertAtCaret('\t'), event.preventDefault();
		});

		this.update();
	}
	getValue(){
		return this.node.value;
	}
	setValue(value){
		this.node.value = value;
		this.update();
	}
	get line_count(){
		return this.node.value.split('\n').length;
	}
	update(){
		this.node.style.width = '5px';
		this.node.style.height = '5px';
		this.node.style.width = this.node.scrollWidth + 4 + 'px';
		this.node.style.height = this.node.scrollHeight + 'px';

		var lines = this.line_count;

		if(this.prev_line_count != lines){
			this.prev_line_count = lines;
			this.linenums.textContent = [...Array(lines)].map((x, index) => index + 1).join('\n');
		}
	}
	insertAtCaret(text = ''){
		if(this.node.selectionStart || this.node.selectionStart == 0){
			var startPos = this.node.selectionStart;
			var endPos = this.node.selectionEnd;
			this.node.value = this.node.value.substring(0, startPos) + text + this.node.value.substring(endPos, this.node.value.length);
			this.node.selectionStart = startPos + text.length;
			this.node.selectionEnd = startPos + text.length;
		}else this.node.value += text;

		this.emit('change');
	}
}

EventLite.mixin(Write.prototype);

module.exports = Write;

/***/ }),

/***/ "../libs/ui/index.js":
/*!***************************!*\
  !*** ../libs/ui/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var { utils, frame, content } = __webpack_require__(/*! ./consts.js */ "../libs/ui/consts.js"),
	Panel = __webpack_require__(/*! ./panel */ "../libs/ui/panel.js"),
	update_pe = event => {
		for(let panel of Panel.panels){
			if(!panel.visible)continue;

			let rect = panel.node.getBoundingClientRect(),
				hover = event.clientX >= rect.x && event.clientY >= rect.y && (event.clientX - rect.x) <= rect.width && (event.clientY - rect.y) <= rect.height;

			if(hover)return content.style['pointer-events'] = 'all';
		}

		content.style['pointer-events'] = 'none';

		if(event.type == 'mousedown')for(let panel of Panel.panels)panel.blur();
	},
	resize_canvas = () => {
		exports.canvas.width = window.innerWidth;
		exports.canvas.height = window.innerHeight;
	};

window.addEventListener('mousemove', update_pe);
window.addEventListener('mousedown', update_pe);
window.addEventListener('mouseup', update_pe);

__webpack_require__(/*! ../segoe */ "../libs/segoe/index.js");

exports.canvas = utils.add_ele('canvas', frame);

exports.ctx = exports.canvas.getContext('2d', { alpha: true });

resize_canvas();

window.addEventListener('contextmenu', event => !(event.target != null && event.target instanceof HTMLTextAreaElement) && event.preventDefault());

window.addEventListener('resize', resize_canvas);

var actions = __webpack_require__(/*! ./actions */ "../libs/ui/actions.js");

exports.alert = actions.alert;
exports.prompt = actions.prompt;
exports.options = actions.options;
exports.frame = frame;
exports.Loading = __webpack_require__(/*! ./loading/ */ "../libs/ui/loading/index.js");
exports.Config = __webpack_require__(/*! ./config/ */ "../libs/ui/config/index.js");
exports.Editor = __webpack_require__(/*! ./editor/ */ "../libs/ui/editor/index.js");

/***/ }),

/***/ "../libs/ui/loading/index.js":
/*!***********************************!*\
  !*** ../libs/ui/loading/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { frame, utils } = __webpack_require__(/*! ../consts */ "../libs/ui/consts.js"),
	Panel = __webpack_require__(/*! ../panel */ "../libs/ui/panel.js");

utils.add_ele('style', frame, { textContent: __webpack_require__(/*! ./loading.css */ "../libs/ui/loading/loading.css") });

class Loading extends Panel {
	constructor(discord, icon){
		super('loading');

		utils.add_ele('img', this.node, { src: icon });

		utils.add_ele('a', this.node, { href: discord, draggable: false, target: '_blank' });

		this.show();
	}
	update(){
		this.node.classList[this.visible ? 'remove' : 'add']('hidden');
	}
};

module.exports = Loading;

/***/ }),

/***/ "../libs/ui/panel.js":
/*!***************************!*\
  !*** ../libs/ui/panel.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { frame, utils, store } = __webpack_require__(/*! ./consts */ "../libs/ui/consts.js");

utils.add_ele('style', frame, { textContent: __webpack_require__(/*! ./panel.css */ "../libs/ui/panel.css") });

class Panel {
	static panels = new Set();
	constructor(type = ''){
		this.type = type;
		this.visible = true;
		this.hover = true;
		this.node = utils.add_ele('main', frame, { className: this.type });

		Panel.panels.add(this);

		this.node.addEventListener('mousedown', () => this.focus());
	}
	focus(){
		for(let panel of Panel.panels)if(panel != this)panel.blur();
		this.node.classList.add('focus');
		this.node.style['z-index'] = 3;
	}
	blur(){
		this.node.classList.remove('focus');
		this.node.style['z-index'] = 2;
	}
	show(){
		this.focus();
		this.visible = true;
		this.node.classList.add('visible');
	}
	hide(){
		this.visible = false;
		this.node.classList.remove('visible');
	}
	remove(){
		Panel.panels.delete(this);
		this.hide();
		this.node.remove();
	}
};

module.exports = Panel;

/***/ }),

/***/ "../libs/ui/paneldraggable.js":
/*!************************************!*\
  !*** ../libs/ui/paneldraggable.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { frame, panels, utils, store } = __webpack_require__(/*! ./consts */ "../libs/ui/consts.js"),
	Panel = __webpack_require__(/*! ./panel */ "../libs/ui/panel.js");

class PanelDraggable extends Panel {
	constructor(type){
		super(type);

		this.pos = { x: 0, y: 0 };

		window.addEventListener('resize', () => this.apply_bounds());

		window.addEventListener('mousemove', event => {
			var pos = { x: event.pageX, y: event.pageY };

			if(this.prev_pos && this.dragging){
				this.pos.x += (pos.x - this.prev_pos.x)/this.bounds().width*100;
				this.pos.y += (pos.y - this.prev_pos.y)/this.bounds().height*100;
				this.save_ui();
				this.apply_bounds();
			}

			this.prev_pos = pos;
		});

		window.addEventListener('mouseup', () => {
			if(!this.dragging)return;
			this.pos = this.within_bounds();
			this.apply_bounds();
			this.dragging = false;
		});
	}
	async load_ui_data(){
		var data = await this.load_ui();

		this.pos = data.pos;
		this.visible = data.visible;

		if(this.visible)this.show();
		else this.hide();

		this.apply_bounds();
	}
	async save_ui(only_visible){
		if(!(['editor', 'config'].includes(this.type)))return;

		var pos = only_visible ? (await this.load_ui().catch(err => this)).pos : this.pos;

		return store.set_raw(this.type + '-ui', +this.visible + ',' + this.pos.x + ',' + this.pos.y);
	}
	async load_ui(){
		var data = await store.get_raw(this.type + '-ui');

		if(!data)return this;

		var arr = data.split(',');

		return {
			pos: { x: +arr[1], y: +arr[2] },
			visible: !!+arr[0],
		};
	}
	listen_dragging(node){
		node.addEventListener('mousedown', () => this.dragging = true);

		return node;
	}
	center_side(side){
		var rect = this.node.getBoundingClientRect();

		return 50-rect[side]/this.bounds()[side]*50;
	}
	bounds(){
		return { width: window.innerWidth, height: window.innerHeight };
	}
	within_bounds(){
		var rect = this.node.getBoundingClientRect();

		return {
			x: Math.min(
				Math.max(this.pos.x, 0),
				100-(rect.width/this.bounds().width*100)
			),
			y: Math.min(
				Math.max(this.pos.y, 0),
				100-(rect.height/this.bounds().height*100)
			),
		};
	}
	apply_bounds(){
		var bounds = this.within_bounds();

		this.node.style.left = bounds.x.toFixed(1) + '%';
		this.node.style.top = bounds.y.toFixed(1) + '%';
	}
	show(){
		// this.focus();

		super.show();

		this.save_ui(true);
	}
	hide(){
		super.hide();

		this.save_ui(true);
	}
};

module.exports = PanelDraggable;

/***/ }),

/***/ "../libs/updater.js":
/*!**************************!*\
  !*** ../libs/updater.js ***!
  \**************************/
/***/ ((module) => {

"use strict";


class Updater {
	constructor(script, extracted, show_logs = false){
		this.script = script;
		this.extracted = extracted;
		this.show_logs = show_logs;
		this.halted = false;

		this.log('Initialized');
	}
	pause(){
		this.halted = true;
	}
	resume(){
		this.halted = false;
	}
	log(...args){
		if(this.show_logs)console.info('[UPDATER]', ...args);
	}
	warn(...args){
		if(this.show_logs)console.warn('[UPDATER]', ...args);
	}
	parse_headers(script){
		var out = {},
			close = '==/UserScript==',
			header = script.slice(0, script.indexOf(close));

		header.replace(/@(\S+)(?: +(.*))?$/gm, (match, label, value) => {
			out[label] = label in out ? [].concat(out[label], value) : value;
		});

		return out;
	}
	async update(){
		location.assign(this.script);
	}
	async check(){
		if(this.halted)return this.log('Updater halted, skipping check'), false;

		var script = await(await fetch(this.script)).text();

		this.log('Latest script fetched from', this.script);

		var parsed = this.parse_headers(script),
			latest = new Date(parsed.extracted).getTime();

		this.log(parsed);

		this.log('Parsed headers:', parsed, '\nCurrent script:', this.extracted, '\nLatest script:', latest);

		var will_update = this.extracted < latest;

		if(will_update)this.log('Script will update, current script is', latest - this.extracted, ' MS behind latest');
		else this.warn('Script will NOT update');

		// if updated, wait 3 minutes
		return will_update;
	}
	watch(callback, interval = 60e3 * 3){
		this.log('Polling at an interval of', interval, 'MS');

		var run = async () => {
			if(await this.check())callback();
			else setTimeout(run, interval);
		};

		run();
	}
}

module.exports = Updater;

/***/ }),

/***/ "../libs/utils.js":
/*!************************!*\
  !*** ../libs/utils.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var vars = __webpack_require__(/*! ./vars */ "../libs/vars.js");

class Utils {
	constructor(canvas, three, game, world){
		this.canvas = canvas;
		this.three = three;
		this.game = game;
		this.world = world;

		this.pi2 = Math.PI * 2;
		this.halfpi = Math.PI / 2;

		this.mobile_uas = [ 'android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'iemobile', 'opera mini' ];
	}
	get mobile(){
		if(typeof navigator == 'object' && navigator != null)for(let ua of this.mobile_uas)if(navigator.userAgent.includes(ua))return true;
		return false;
	}
	dist_center(pos){
		return Math.hypot((window.innerWidth / 2) - pos.x, (window.innerHeight / 2) - pos.y);
	}
	is_host(url, ...hosts){
		return hosts.some(host => url.hostname == host || url.hostname.endsWith('.' + host));
	}
	normal_radian(radian){
		radian = radian % this.pi2;

		if(radian < 0)radian += this.pi2;

		return radian;
	}
	distanceTo(vec1, vec2){
		return Math.hypot(vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
	}
	applyMatrix4(pos, t){var e=pos.x,n=pos.y,r=pos.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return pos.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*a,pos.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*a,pos.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*a,pos}
	project3d(pos, camera){
		return this.applyMatrix4(this.applyMatrix4(pos, camera.matrixWorldInverse), camera.projectionMatrix);
	}
	update_frustum(){
		this.world.frustum.setFromProjectionMatrix(new this.three.Matrix4().multiplyMatrices(this.world.camera.projectionMatrix, this.world.camera.matrixWorldInverse));
	}
	update_camera(){
		this.world.camera.updateMatrix();
		this.world.camera.updateMatrixWorld();
	}
	pos2d(pos, offset_y = 0){
		if(isNaN(pos.x) || isNaN(pos.y) || isNaN(pos.z))return { x: 0, y: 0 };

		pos = { x: pos.x, y: pos.y, z: pos.z };

		pos.y += offset_y;

		this.update_camera();

		this.project3d(pos, this.world.camera);

		return {
			x: (pos.x + 1) / 2 * this.canvas.width,
			y: (-pos.y + 1) / 2 * this.canvas.height,
		}
	}
	obstructing(player, target, wallbangs, offset = 0){
		var d3d = this.getD3D(player.x, player.y, player.z, target.x, target.y, target.z),
			dir = this.getDir(player.z, player.x, target.z, target.x),
			dist_dir = this.getDir(this.getDistance(player.x, player.z, target.x, target.z), target.y, 0, player.y),
			ad = 1 / (d3d * Math.sin(dir - Math.PI) * Math.cos(dist_dir)),
			ae = 1 / (d3d * Math.cos(dir - Math.PI) * Math.cos(dist_dir)),
			af = 1 / (d3d * Math.sin(dist_dir)),
			view_y = player.y + (player.height || 0) - 1.15; // 1.15 = config.cameraHeight

		// iterate through game objects
		for(var ind in this.game.map.manager.objects){
			var obj = this.game.map.manager.objects[ind];

			if(!obj.noShoot && obj.active && (wallbangs ? !obj.penetrable : true)){
				var in_rect = this.lineInRect(player.x, player.z, view_y, ad, ae, af, obj.x - Math.max(0, obj.width - offset), obj.z - Math.max(0, obj.length - offset), obj.y - Math.max(0, obj.height - offset), obj.x + Math.max(0, obj.width - offset), obj.z + Math.max(0, obj.length - offset), obj.y + Math.max(0, obj.height - offset));

				if(in_rect && 1 > in_rect)return in_rect;
			}
		}

		// iterate through game terrain
		if(this.game.map.terrain){
			var al = this.game.map.terrain.raycast(player.x, -player.z, view_y, 1 / ad, -1 / ae, 1 / af);
			if(al)return this.getD3D(player.x, player.y, player.z, al.x, al.z, -al.y);
		}
	}
	getDistance(x1, y1, x2, y2){
		return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
	}
	getD3D(x1, y1, z1, x2, y2, z2){
		var dx = x1 - x2,
			dy = y1 - y2,
			dz = z1 - z2;

		return Math.sqrt(dx * dx + dy * dy + dz * dz);
	}
	getXDire(x1, y1, z1, x2, y2, z2){
		return Math.asin(Math.abs(y1 - y2) / this.getD3D(x1, y1, z1, x2, y2, z2)) * ((y1 > y2) ? -1 : 1);
	}
	getDir(x1, y1, x2, y2){
		return Math.atan2(y1 - y2, x1 - x2)
	}
	lineInRect(lx1, lz1, ly1, dx, dz, dy, x1, z1, y1, x2, z2, y2){
		var t1 = (x1 - lx1) * dx,
			t2 = (x2 - lx1) * dx,
			t3 = (y1 - ly1) * dy,
			t4 = (y2 - ly1) * dy,
			t5 = (z1 - lz1) * dz,
			t6 = (z2 - lz1) * dz,
			tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6)),
			tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

		return (tmax < 0 || tmin > tmax) ? false : tmin;
	}
	getAngleDst(a1, a2){
		return Math.atan2(Math.sin(a2 - a1), Math.cos(a1 - a2));
	}
	// box = Box3
	box_size(obj, box){
		var vFOV = this.world.camera.fov * Math.PI / 180;
		var h = 2 * Math.tan( vFOV / 2 ) * this.world.camera.position.z;
		var aspect = this.canvas.width / this.canvas.height;
		var w = h * aspect;

		return { width: width, height: height};
	}
	contains_point(point){
		for(var ind = 0; ind < 6; ind++)if(this.world.frustum.planes[ind].distanceToPoint(point) < 0)return false;
		return true;
	}
	camera_world(){
		var matrix_copy = this.world.camera.matrixWorld.clone(),
			pos = this.world.camera[vars.getWorldPosition]();

		this.world.camera.matrixWorld.copy(matrix_copy);
		this.world.camera.matrixWorldInverse.copy(matrix_copy).invert();

		return pos.clone();
	}
	request_frame(callback){
		requestAnimationFrame(callback);
	}
	round(n, r){
		return Math.round(n * Math.pow(10, r)) / Math.pow(10, r);
	}
	add_ele(node_name, parent, attributes = {}){
		var crt = this.crt_ele(node_name, attributes);

		if(typeof parent == 'function')this.wait_for(parent).then(data => data.appendChild(crt));
		else if(typeof parent == 'object' && parent != null && parent.appendChild)parent.appendChild(crt);
		else throw new Error('Parent is not resolvable to a DOM element');

		return crt;
	}
	crt_ele(node_name, attributes = {}){
		var after = {};

		for(let prop in attributes)if(typeof attributes[prop] == 'object' && attributes[prop] != null)after[prop] = attributes[prop], delete attributes[prop];

		var node;

		if(node_name == 'raw')node = this.crt_ele('div', { innerHTML: attributes.html }).firstChild;
		else if(node_name == 'text')node = document.createTextNode('');
		else node = document.createElement(node_name)

		var cls = attributes.className;

		if(cls){
			delete attributes.className;
			node.setAttribute('class', cls);
		}

		var events = after.events;

		if(events){
			delete after.events;

			for(let event in events)node.addEventListener(event, events[event]);
		}

		Object.assign(node, attributes);

		for(let prop in after)Object.assign(node[prop], after[prop]);

		return node;
	}
	wait_for(check, time){
		return new Promise(resolve => {
			var interval,
				run = () => {
					try{
						var result = check();

						if(result){
							if(interval)clearInterval(interval);
							resolve(result);

							return true;
						}
					}catch(err){console.log(err)}
				};

			interval = run() || setInterval(run, time || 50);
		});
	}
	css(obj){
		var string = [];

		for(var name in obj)string.push(name + ':' + obj[name] + ';');

		return string.join('\n');
	}
	sanitize(string){
		var node = document.createElement('div');

		node.textContent = string;

		return node.innerHTML;
	}
	unsanitize(string){
		var node = document.createElement('div');

		node.innerHTML = string;

		return node.textContent;
	}
	node_tree(nodes, parent = document){
		var output = {
				parent: parent,
			},
			match_container = /^\$\s+>?/g,
			match_parent = /^\^\s+>?/g;

		for(var label in nodes){
			var value = nodes[label];

			if(value instanceof Node)output[label] = value;
			else if(typeof value == 'object')output[label] = this.node_tree(value, output.container);
			else if(match_container.test(nodes[label])){
				if(!output.container){
					console.warn('No container is available, could not access', value);
					continue;
				}

				output[label] = output.container.querySelector(nodes[label].replace(match_container, ''));
			}else if(match_parent.test(nodes[label])){
				if(!output.parent){
					console.warn('No parent is available, could not access', value);
					continue;
				}

				output[label] = output.parent.querySelector(nodes[label].replace(match_parent, ''));
			}else output[label] = parent.querySelector(nodes[label]);

			if(!output[label])console.warn('No node found, could not access', value);
		}

		return output;
	}
	string_key(key){
		return key.replace(/^([A-Z][a-z]+?)([A-Z0-9][a-z]*?)/, (match, type, key) => ['Digit', 'Key'].includes(type) ? key : `${key} ${type}`);
	}
	clone_obj(obj){
		return JSON.parse(JSON.stringify(obj));
	}
	assign_deep(target, ...objects){
		for(let ind in objects)for(let key in objects[ind]){
			if(typeof objects[ind][key] == 'object' && objects[ind][key] != null && key in target)this.assign_deep(target[key], objects[ind][key]);
			else if(typeof target == 'object' && target != null)Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(objects[ind], key))
		}

		return target;
	}
	redirect(name, from, to){
		var proxy = Symbol();

		to.addEventListener(name, event => {
			if(event[proxy])return;
		});

		from.addEventListener(name, event => to.dispatchEvent(Object.assign(new(event.constructor)(name, event), {
			[proxy]: true,
			stopImmediatePropagation: event.stopImmediatePropagation.bind(event),
			preventDefault: event.preventDefault.bind(event),
		})));
	}
	promise(){
		var res, rej,
			promise = new Promise((resolve, reject) => {
				res = resolve;
				rej = reject;
			});

		promise.resolve = res;
		promise.reject = rej;

		promise.resolve_in = (time = 0, data) => setTimeout(() => promise.resolve(data), time);

		return promise;
	}
}

module.exports = Utils;

/***/ }),

/***/ "../libs/vars.js":
/*!***********************!*\
  !*** ../libs/vars.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/*
Source: https://api.sys32.dev/v2/source

Notes:
	- Versions past 3.9.2 don't have variable randomization
	- Keep regexes updated
*/

var vars = new Map(),
	patches = new Map(),
	add_var = (label, regex, index) => vars.set(label, [ regex, index ]),
	add_patch = (label, regex, replacement) => patches.set(label, [ regex, replacement ]),
	key = '_' + Math.random().toString().substr(2);

add_var('build', /\.exports='(\w{5})'/, 1);

add_var('inView', /&&!\w\.\w+&&\w\.\w+&&\w\.(\w+)\){/, 1);

add_var('spectating', /team:window\.(\w+)/, 1);

add_var('nAuto', /'Single Fire',varN:'(\w+)'/, 1);

add_var('xDire', /this\.(\w+)=Math\.lerpAngle\(this\.\w+\[1\]\.xD/, 1);

add_var('yDire', /this\.(\w+)=Math\.lerpAngle\(this\.\w+\[1\]\.yD/, 1);

add_var('procInputs', /this\.(\w+)=function\(\w+,\w+,\w+,\w+\){this\.recon/, 1);

add_var('isYou', /this\.accid=0,this\.(\w+)=\w+,this\.isPlayer/, 1);

add_var('pchObjc', /0,this\.(\w+)=new \w+\.Object3D,this/, 1);

add_var('aimVal', /this\.(\w+)-=1\/\(this\.weapon\.aimSpd/, 1),

add_var('crouchVal', /this\.(\w+)\+=\w\.crouchSpd\*\w+,1<=this\.\w+/, 1),

add_var('didShoot', /--,\w+\.(\w+)=!0/, 1);

add_var('ammos', /length;for\(\w+=0;\w+<\w+\.(\w+)\.length/, 1);

add_var('weaponIndex', /\.weaponConfig\[\w+]\.secondary&&\(\w+\.(\w+)==\w+/, 1);

add_var('maxHealth', /\.regenDelay,this\.(\w+)=\w+\.mode&&\w+\.mode\.\1/, 1),

add_var('yVel', /\w+\.(\w+)&&\(\w+\.y\+=\w+\.\1\*/, 1);

add_var('mouseDownR', /this\.(\w+)=0,this\.keys=/, 1);

add_var('recoilAnimY', /\.\w+=0,this\.(\w+)=0,this\.\w+=0,this\.\w+=1,this\.slide/, 1),

add_var('objInstances', /lowerBody\),\w+\|\|\w+\.(\w+)\./, 1),

add_var('getWorldPosition', /var \w+=\w+\.camera\.(\w+)\(\);/, 1);

add_patch('Skins', /((?:[a-zA-Z]+(?:\.|(?=\.skins)))+)\.skins(?!=)/g, (match, player) => `${key}.skins(${player})`);

add_patch('Nametags', /(&&)((\w+)\.cnBSeen)(?=\){if\(\(\w+=\3\.objInstances)/, (match, start, can_see) => `${start}${key}.can_see(${can_see})`);

add_patch('Game', /(\w+)\.moveObj=func/, (match, game) => `${key}.game(${game}),${match}`);

add_patch('World', /(\w+)\.backgroundScene=/, (match, world) => `${key}.world(${world}),${match}`);

add_patch('Input', /((\w+\.\w+)\[\2\._push\?'_push':'push']\()(\w+)(\),)/, (match, func, array, input, end) => `${func}${key}.input(${input})${end}`);

add_patch('Timer', /(\w+\.exports)\.(kickTimer)=([\dex]+)/, (match, object, property, value) => `${key}.timer(${object},"${property}",${value})`);

add_patch('ThreeJS', /\(\w+,(\w+),\w+\){(?=[a-z ';\.\(\),]+ACESFilmic)/, (match, three) => `${match}${key}.three(${three});`);

exports.patch = source => {
	var found = {},
		missing = {};

	for(var [ label, [ regex, index ] ] of vars){
		var value = (source.match(regex) || 0)[index];

		if(value)exports[label] = found[label] = value;
		else missing[label] = [ regex, index ];
	}

	console.log('Found:');
	console.table(found);

	console.log('Missing:');
	console.table(missing);

	for(var [ label, [ input, replacement ] ] of patches){
		if(!source.match(input))console.error('Could not patch', label);

		source = source.replace(input, replacement);
	}

	return source;
};

exports.key = key;

// Input keys
/*
[
	controls.getISN(),
	Math.round(delta * game.config.deltaMlt),
	Math.round(1000 * controls.yDr.round(3)),
	Math.round(1000 * xDr.round(3)),
	game.moveLock ? -1 : config.movDirs.indexOf(controls.moveDir),
	controls.mouseDownL || controls.keys[controls.binds.shoot.val] ? 1 : 0,
	controls.mouseDownR || controls.keys[controls.binds.aim.val] ? 1 : 0,
	!Q.moveLock && controls.keys[controls.binds.jump.val] ? 1 : 0,
	controls.keys[controls.binds.reload.val] ? 1 : 0,
	controls.keys[controls.binds.crouch.val] ? 1 : 0,
	controls.scrollToSwap ? controls.scrollDelta * ue.tmp.scrollDir : 0,
	controls.wSwap,
	1 - controls.speedLmt.round(1),
	controls.keys[controls.binds.reset.val] ? 1 : 0,
	controls.keys[controls.binds.interact.val] ? 1 : 0
];
*/

exports.keys = { frame: 0, delta: 1, xdir: 2, ydir: 3, moveDir: 4, shoot: 5, scope: 6, jump: 7, reload: 8, crouch: 9, weaponScroll: 10, weaponSwap: 11, moveLock: 12, speed_limit: 13, reset: 14, interact: 15 };

exports.consts = {
	twoPI: Math.PI * 2,
	halfPI: Math.PI / 2,
	playerHeight: 11,
	cameraHeight: 1.5,
	headScale: 2,
	armScale: 1.3,
	armInset: 0.1,
	chestWidth: 2.6,
	hitBoxPad: 1,
	crouchDst: 3,
	recoilMlt: 0.3,
	nameOffset: 0.6,
	nameOffsetHat: 0.8,
};

exports.load = loader => {
	loader(add_var, add_patch, exports.key);
};

/***/ }),

/***/ "../libs/visual.js":
/*!*************************!*\
  !*** ../libs/visual.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var vars = __webpack_require__(/*! ../libs/vars */ "../libs/vars.js"),
	{ utils } = __webpack_require__(/*! ../libs/consts */ "../libs/consts.js");

class Visual {
	constructor(data){
		this.data = data;
		this.materials = new Map();
	}
	esp_mat(color){
		if(!this.materials.has(color))this.materials.set(color, new utils.three.MeshBasicMaterial({
			transparent: true,
			fog: false,
			depthTest: false,
			color: color,
		}));

		return this.materials.get(color);
	}
	tick(UI){
		this.canvas = UI.canvas;
		this.ctx = UI.ctx;
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	draw_text(text_x, text_y, font_size, lines){
		for(var text_index = 0; text_index < lines.length; text_index++){
			var line = lines[text_index], xoffset = 0;

			for(var sub_ind = 0; sub_ind < line.length; sub_ind++){
				var color = line[sub_ind][0],
					text = line[sub_ind][1],
					text_args = [ text, text_x + xoffset, text_y + text_index * (font_size + 2) ];

				this.ctx.fillStyle = color;
				this.ctx.strokeText(...text_args);
				this.ctx.fillText(...text_args);

				xoffset += this.ctx.measureText(text).width + 2;
			}
		}
	}
	fov(fov){
		var width = (this.canvas.width * fov) / 100,
			height = (this.canvas.height * fov) / 100;

		this.ctx.fillStyle = '#F00';
		this.ctx.globalAlpha = 0.4;
		this.ctx.fillRect((this.canvas.width - width) / 2, (this.canvas.height - height) / 2, width, height);
		this.ctx.globalAlpha = 1;
	}
	walls(){
		utils.world.scene.children.forEach(obj => {
			if(obj.type != 'Mesh' || !obj.dSrc || obj.material[Visual.hooked])return;

			obj.material[Visual.hooked] = true;

			var otra = obj.material.transparent,
				opac = obj.material.opacity;

			Object.defineProperties(obj.material, {
				opacity: {
					get: _ => opac * this.data.walls / 100,
					set: _ => opac = _,
				},
				transparent: {
					get: _ => this.data.walls != 100 ? true : otra,
					set: _ => otra = _,
				},
			});
		});
	}
	axis_join(player){
		return player ? ['x', 'y', 'z'].map(axis => axis + ': ' + player[axis].toFixed(2)).join(', ') : null;
	}
	overlay(){
		this.ctx.strokeStyle = '#000'
		this.ctx.font = '14px monospace';
		this.ctx.textAlign = 'start';
		this.ctx.lineWidth = 2.6;

		var data = {
			Player: this.data.player ? this.axis_join(this.data.player.position) : null,
			Target: this.data.target ? this.axis_join(this.data.target.position) : null,
		};

		var lines = [];

		for(var key in data){
			var color = '#FFF',
				value = data[key];

			switch(typeof value){
				case'boolean':

					color = value ? '#0F0' : '#F00';
					value = value ? 'Yes' : 'No';

					break;
				case'number':

					color = '#00F';
					value = value.toFixed(2);

					break;
				case'object':

					value = 'N/A';

					break;
			}

			lines.push([ [ '#BBB', key + ': ' ], [ color, value ] ]);
		}

		this.draw_text(15, ((this.canvas.height / 2) - (lines.length * 14)  / 2), 14, lines);
	}
	box(player){
		this.ctx.strokeStyle = player.esp_color;
		this.ctx.lineWidth = 1.5;
		this.ctx.strokeRect(player.rect.left, player.rect.top, player.rect.width, player.rect.height);
	}
	tracer(player){
		this.ctx.strokeStyle = player.esp_color;
		this.ctx.lineWidth = 1.75;
		this.ctx.lineCap = 'round';

		this.ctx.beginPath();
		// bottom center
		this.ctx.moveTo(this.canvas.width / 2, this.canvas.height);
		// target center
		this.ctx.lineTo(player.rect.x, player.rect.bottom);
		this.ctx.stroke();
	}
	get can_draw_chams(){
		return ['chams', 'box_chams', 'full'].includes(this.data.esp);
	}
	cham(player){
		if(!player.obj[Visual.hooked]){
			player.obj[Visual.hooked] = true;

			let visible = true;

			Object.defineProperty(player.obj, 'visible', {
				get: _ => this.can_draw_chams || visible,
				set: _ => visible = _,
			});
		}

		player.obj.traverse(obj => {
			if(obj.type != 'Mesh' || obj[Visual.hooked])return;

			obj[Visual.hooked] = true;

			var orig_mat = obj.material;

			Object.defineProperty(obj, 'material', {
				get: _ => {
					var material = this.can_draw_chams ? this.esp_mat(player.esp_color) : orig_mat;

					material.wireframe = this.data.wireframe;

					return material;
				},
				set: _ => orig_mat = _,
			});
		});
	}
	label(player){
		for(var part in player.parts){
			var srcp = utils.pos2d(player.parts[part]);
			this.ctx.fillStyle = '#FFF';
			this.ctx.font = '13px monospace thin';
			this.ctx.fillRect(srcp.x - 2, srcp.y - 2, 4, 4);
			this.ctx.fillText(part, srcp.x, srcp.y - 6);
		}
	}
	health(player){
		this.ctx.save();
		this.ctx.scale(...player.box_scale);

		var rect = player.scale_rect(...player.box_scale);

		this.ctx.fillStyle = player.hp_color;
		this.ctx.fillRect(rect.left - 30, rect.top, 25, rect.height);

		this.ctx.restore();
	}
	text(player){
		this.ctx.save();
		this.ctx.scale(...player.dist_scale);

		var rect = player.scale_rect(...player.dist_scale),
			font_size = 13;

		this.ctx.font = 'Bold ' + font_size + 'px Tahoma';
		this.ctx.strokeStyle = '#000';
		this.ctx.lineWidth = 2.5;
		this.ctx.textBaseline = 'top';

		var text = [
			[
				[ '#FB8', player.alias ],
				[ '#FFF', player.clan ? ' [' + player.clan + ']' : '' ],
			],
			[
				[ player.hp_color, player.health + '/' + player.max_health + ' HP' ],
			],
			[
				[ '#FFF', player.weapon.name ],
			],
		]

		if(player.target)text.push([ [ '#00F', 'Target' ] ]);

		this.draw_text(rect.right + 4, rect.top, font_size, text);

		this.ctx.restore();
	}
};

Visual.hooked = Symbol();

module.exports = Visual;

/***/ }),

/***/ "../libs/ez/checkbox.css":
/*!*******************************!*\
  !*** ../libs/ez/checkbox.css ***!
  \*******************************/
/***/ ((module) => {

module.exports="main{display:flex;align-items:center;justify-content:center;width:13px;height:13px;background:#FFF;border-radius:3px}main[checked]{background-color:#176EB4}main[checked]:hover{background-color:#245a88}main svg{width:70%;height:70%}"

/***/ }),

/***/ "../libs/ez/input.css":
/*!****************************!*\
  !*** ../libs/ez/input.css ***!
  \****************************/
/***/ ((module) => {

module.exports="main{width:100%;height:100%;display:flex}input{width:100%;height:100%;outline:none;background:#FFF;border:none;border-radius:3px;padding:0px 8px;font:inherit}"

/***/ }),

/***/ "../libs/ez/select.css":
/*!*****************************!*\
  !*** ../libs/ez/select.css ***!
  \*****************************/
/***/ ((module) => {

module.exports="main{background:#FFF;padding:0px 9px;color:#2B2B2B;display:flex;flex-direction:row;align-items:center;height:100%;border:1px solid #666;border-radius:3px;position:relative}main:hover{border-color:#999}main svg{margin-left:auto}main slot{flex-direction:column;position:absolute;background:#FFF;width:100%;left:0px;display:none;z-index:1000;top:100%;margin-top:3px;margin-bottom:3px;border-radius:2px;padding:3px 0px;box-shadow:rgb(0 0 0) 0px 0px 7px}main.bottom slot{top:unset;bottom:100%}main.active slot{display:flex}::slotted(ez-option){border-radius:2px;margin:0px 3px;color:#2B2B2B;padding:3px 6px}::slotted(ez-option:hover){background:#E5E5E5}::slotted(ez-option:active){background:#E5E5E5;color:#262626}::slotted(ez-option[selected]){background:#006CBE;color:#FFF}"

/***/ }),

/***/ "../libs/ez/slider.css":
/*!*****************************!*\
  !*** ../libs/ez/slider.css ***!
  \*****************************/
/***/ ((module) => {

module.exports="main{position:relative;height:100%}main::before{content:'';position:absolute;margin:auto;top:0px;bottom:0px;background:#666;width:100%;height:2px}.background{background:var(--blue);height:2px;position:absolute;margin:auto;top:0px;bottom:0px}.thumb::before{content:attr(data-label);position:relative;border:1px solid #1C1C1C;background:#2B2B2B;padding:5px 5px;bottom:40px;left:4px;transform:translateX(-50%);display:none}.thumb:hover::before,main:active .thumb::before{display:inline-block}main:hover:not(:active)::before{background-color:#999}.thumb{position:absolute;top:0px;width:8px;height:100%;margin:auto;top:0px;bottom:0px;background:var(--blue);border-radius:4px}main:hover .thumb{background:#F2F2F2}main:active>.thumb{background:#767676}"

/***/ }),

/***/ "../libs/ez/switch.css":
/*!*****************************!*\
  !*** ../libs/ez/switch.css ***!
  \*****************************/
/***/ ((module) => {

module.exports="main{display:flex;align-items:center;background:#FFF;border:1px solid #666;border-radius:50px;width:40px;height:20px;position:relative}main::before{content:'';width:10px;height:10px;background:#000;border-radius:50%;margin:5px;left:0px;position:absolute}main[checked]{border:none;padding:1px;background:#176EB4}main[checked]:hover{background:#2578ba}main[checked]::before{background:#FFF;left:unset;right:0px}"

/***/ }),

/***/ "../libs/segoe/index.css":
/*!*******************************!*\
  !*** ../libs/segoe/index.css ***!
  \*******************************/
/***/ ((module) => {

module.exports="@font-face{font-family:'SegoeUI';font-weight:400;src:url('https://y9x.github.io/webpack/libs/segoe/400.woff2?a') format('woff2')}@font-face{font-family:'SegoeUI';font-weight:100;src:url('https://y9x.github.io/webpack/libs/segoe/100.woff2?a') format('woff2')}@font-face{font-family:'SegoeUI';font-weight:200;src:url('https://y9x.github.io/webpack/libs/segoe/200.woff2?a') format('woff2')}@font-face{font-family:'SegoeUI';font-weight:600;src:url('https://y9x.github.io/webpack/libs/segoe/600.woff2?a') format('woff2')}@font-face{font-family:'SegoeUI';font-weight:700;src:url('https://y9x.github.io/webpack/libs/segoe/700.woff2?a') format('woff2')}"

/***/ }),

/***/ "../libs/ui/actions.css":
/*!******************************!*\
  !*** ../libs/ui/actions.css ***!
  \******************************/
/***/ ((module) => {

module.exports="main.prompt{width:475px;padding:10px;margin:auto;left:0;right:0;top:0;bottom:0;background:#4A4A4A;border-radius:3px;border:none;opacity:1;z-index:10000!important}main.prompt>.description{max-height:325px;overflow-y:auto;line-height:18px;margin-bottom:7px;white-space:pre-wrap}main.prompt svg{width:1.5em;height:1.5em;vertical-align:bottom}main.prompt>form{display:flex;flex-direction:row;flex-wrap:wrap;margin:0px}main.prompt input{width:100%;background:transparent;padding:1px 8px;border:1px solid #6F6F6F;border-radius:2px;font:inherit;line-height:30px;color:#FFF;height:30px;text-align:left;margin-bottom:10px}main.prompt input:focus{padding:0px 7px;border:2px solid #909090}main.prompt button{width:68px;height:32px;border:none;border-radius:2x;background:#5C5C5C;font-family:SegoeUI;color:#FFF;font-weight:bold}main.prompt button:hover{background:#6E6E6E}main.prompt button:hover:active{background:#7D7D7D}main.prompt button.submit{background:#006CBE;margin-right:8px}main.prompt button.submit:hover{background:#1C7CC5}main.prompt>form>button.submit:hover:active{background:#3389CB}main.prompt>form>button:first-of-type{margin-left:auto}main.prompt>form>button:hover{background:#333}"

/***/ }),

/***/ "../libs/ui/editor/index.css":
/*!***********************************!*\
  !*** ../libs/ui/editor/index.css ***!
  \***********************************/
/***/ ((module) => {

module.exports="main.editor{width:500px}main.editor .write{width:100%;height:300px}main.editor .bar{width:100%;height:36px;display:flex;background:#CCC}main.editor .actions{display:flex;flex-grow:1}main.editor .files{display:flex;margin:0px;margin-left:4px;margin-right:4px;margin-top:4px;flex-direction:row;overflow:hidden}main.editor>.bar>.scroll{--color: #747474;margin-top:4px;height:32px;width:32px;position:relative;display:none;align-items:center;justify-content:center;flex:none;padding:1px;border:none}main.editor>.bar>.scroll:hover:not(:active,[disabled]){border:1px solid #626262;padding:0px;background:#A3A3A3;color:#434343}main.editor>.bar>.scroll:active{color:#323232;background:#7A7A7A}main.editor>.bar.overflow .scroll{display:flex}main.editor>.bar.overflow .scroll[disabled]{background:#A3A3A3;color:#7D7D7D}main.editor>.bar.overflow .files{margin-left:0px;margin-right:0px}main.editor .actions button{height:36px;width:36px;text-align:center;position:relative;color:#0D0D0D;border:none;border-radius:0px;background:transparent;font-size:14px}main.editor .actions button svg{width:16px;height:16px}main.editor .actions button:hover{background:#A3A3A3}main.editor .actions button:hover:active{background:#7A7A7A}main.editor .actions .new{--color: #747474;margin-top:4px;height:32px;width:32px;position:relative;display:flex;align-items:center;justify-content:center;margin-right:25px;padding:0px;border:none}main.editor .actions .new:hover{--color: #3E3E3E;background:#E0E0E0}main.editor .actions .new:hover:active{--color: #414141;background:#EBEBEB}main.editor .actions .new::before,main.editor .actions .new::after{content:'';width:1px;height:12px;position:absolute;margin:auto;background:var(--color)}main.editor .actions .new::after{width:12px;height:1px}main.editor .save{margin-left:auto}main.editor .save.saved>*{opacity:0.3}main.editor .web svg{width:16px;height:16px}.tab{white-space:nowrap;display:flex;align-items:center;padding:0px 10px;color:#000;border-top-left-radius:4px;border-top-right-radius:4px}.tab:last-of-type{margin-right:0px}.tab:hover{background:#E0E0E0}.tab.active{background:#FFF}.tab>.name{overflow:hidden;text-overflow:ellipsis}.tab .close{margin-left:5px}.tab.active .close{color:#626262}.tab .close:hover{color:#474747;background:#CACACA}.tab.active .close:hover{background:#E6E6E6}.tab .close:hover:active{color:#5C5C5C;background:#B3B3B3}.tab.active .close:hover:active{background:#CCC}.tab>.active{margin-left:5px;box-sizing:border-box;border:2px solid #000;position:relative}.tab>.active.true::after{content:'';width:7px;height:7px;display:block;margin:auto;position:absolute;top:0px;bottom:0px;left:0px;right:0px;background:#000}.tab>.active,.tab>.close,.tab>.rename{width:15px;height:15px}main.editor footer{position:relative;display:flex;height:30px;align-items:center;padding:0px 15px}main.editor footer svg{width:1.5em;height:1.5em;vertical-align:middle;white-space}main.editor footer .text{display:flex;align-items:center;margin-right:auto;white-space:pre-wrap}main.editor footer .file-opt{display:flex;align-items:center;flex-direction:row}main.editor footer .file-opt ez-input{width:100px;height:23px}main.editor footer .file-opt ez-input,main.editor footer .file-opt ez-checkbox{margin-left:10px}"

/***/ }),

/***/ "../libs/ui/editor/write.css":
/*!***********************************!*\
  !*** ../libs/ui/editor/write.css ***!
  \***********************************/
/***/ ((module) => {

module.exports=".write{background:#FFF;font-size:13px;font-family:monospace;line-height:18px;contain:size;overflow:auto;display:grid;grid-template-columns:26px 1fr}.write>.linenums{padding-left:6px;width:20px;height:100%;background:#F7F7F7;color:#999;line-height:18px;text-align:right}.write>.text{min-width:calc(100% - 4px);padding-top:0px;border:none;line-height:18px;background:transparent;resize:none;padding-left:4px;white-space:nowrap;overflow:hidden}"

/***/ }),

/***/ "../libs/ui/loading/loading.css":
/*!**************************************!*\
  !*** ../libs/ui/loading/loading.css ***!
  \**************************************/
/***/ ((module) => {

module.exports=".loading{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:100%;height:100%;top:0px;background:#000;z-index:0!important;transition:0.75s ease;border:none;user-select:none}.loading img{width:178px;height:178px}.loading a{background-image:url('https://y9x.github.io/webpack/libs/ui/discord-normal.png');width:50px;height:56px;background-size:contain;background-repeat:no-repeat;margin-left:4px;pointer-events:all;cursor:pointer;transition:all .2s;display:inline-block}.loading a:hover{background-image:url('https://y9x.github.io/webpack/libs/ui/discord-hover.png');transform:scale(.95)}.loading a:active{background-image:url('https://y9x.github.io/webpack/libs/ui/discord-pressed.png')}"

/***/ }),

/***/ "../libs/ui/panel.css":
/*!****************************!*\
  !*** ../libs/ui/panel.css ***!
  \****************************/
/***/ ((module) => {

module.exports="*{outline:none}canvas{pointer-events:none;z-index:2}main{--primary: #eee;--secondary: #445;--background: #112;--background-split: 17, 17, 34;--control-height: 36px;--blue: #176EB4;--blue-accent: #245a88;--blue-dark: #143958;--opacity: 0.75;background:#1F1F1F;border:1px solid #8F8F8F;color:var(--primary);font-family:SegoeUI;font-size:14px;height:min-content;position:absolute;opacity:var(--opacity);user-select:none;z-index:2;opacity:0;pointer-events:none}main.visible{opacity:0.7;pointer-events:all}main.loading.visible,main.visible:hover,main.visible.focus{opacity:1}a{cursor:pointer;color:#168be8;text-decoration:none}a:hover{text-decoration:underline}main:hover,main.focus{--opacity: 1}.title{position:relative;display:flex;align-content:center;justify-content:center;text-align:center;height:30px;flex-wrap:wrap}.title>.right{position:absolute;right:10px;line-height:30px;margin:auto;text-align:center}.sections{margin:0px 2px;display:flex}.tabs{display:grid;grid-template-columns:1fr 1fr 1fr;height:60px;margin:10px;margin-top:5px;border-radius:3px;overflow:hidden;position:relative;background:#424242;box-shadow:0px 0px 4px #1A1A1A}.tabs:hover::after{opacity:0}.tabs>.open{display:flex;justify-content:center;align-items:center}.tabs>.open:hover{background-color:var(--blue-accent)}.tabs>.open.active{background:var(--blue)}section{overflow-y:auto;vertical-align:top;width:275px;height:288px;margin:0px 10px 10px 10px;background:#424242;box-shadow:0px 0px 4px #1A1A1A;border-radius:3px;overflow:visible}section.hidden{display:none}.control{margin-left:11px;height:36px;align-items:center;display:flex}a.control{color:#D2D2D2}.control .text{padding:10px 10px;line-height:15px}.control>.keybind{font:14px inconsolata,monospace;text-align:center;color:black;width:100%;flex:1 1 0;height:30px;display:block;position:relative;margin:auto 6px;background:#FFF;border:1px solid #000}ez-select,ez-slider,ez-input{height:25px;width:120px}ez-slider{margin-right:25px}ez-select,ez-checkbox,ez-input{margin-right:11px}ez-checkbox,ez-select,ez-slider,ez-input{margin-left:auto}"

/***/ }),

/***/ "../node_modules/event-lite/event-lite.js":
/*!************************************************!*\
  !*** ../node_modules/event-lite/event-lite.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */

function EventLite() {
  if (!(this instanceof EventLite)) return new EventLite();
}

(function(EventLite) {
  // export the class for node.js
  if (true) module.exports = EventLite;

  // property name to hold listeners
  var LISTENERS = "listeners";

  // methods to export
  var methods = {
    on: on,
    once: once,
    off: off,
    emit: emit
  };

  // mixin to self
  mixin(EventLite.prototype);

  // export mixin function
  EventLite.mixin = mixin;

  /**
   * Import on(), once(), off() and emit() methods into target object.
   *
   * @function EventLite.mixin
   * @param target {Prototype}
   */

  function mixin(target) {
    for (var key in methods) {
      target[key] = methods[key];
    }
    return target;
  }

  /**
   * Add an event listener.
   *
   * @function EventLite.prototype.on
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function on(type, func) {
    getListeners(this, type).push(func);
    return this;
  }

  /**
   * Add one-time event listener.
   *
   * @function EventLite.prototype.once
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function once(type, func) {
    var that = this;
    wrap.originalListener = func;
    getListeners(that, type).push(wrap);
    return that;

    function wrap() {
      off.call(that, type, wrap);
      func.apply(this, arguments);
    }
  }

  /**
   * Remove an event listener.
   *
   * @function EventLite.prototype.off
   * @param [type] {string}
   * @param [func] {Function}
   * @returns {EventLite} Self for method chaining
   */

  function off(type, func) {
    var that = this;
    var listners;
    if (!arguments.length) {
      delete that[LISTENERS];
    } else if (!func) {
      listners = that[LISTENERS];
      if (listners) {
        delete listners[type];
        if (!Object.keys(listners).length) return off.call(that);
      }
    } else {
      listners = getListeners(that, type, true);
      if (listners) {
        listners = listners.filter(ne);
        if (!listners.length) return off.call(that, type);
        that[LISTENERS][type] = listners;
      }
    }
    return that;

    function ne(test) {
      return test !== func && test.originalListener !== func;
    }
  }

  /**
   * Dispatch (trigger) an event.
   *
   * @function EventLite.prototype.emit
   * @param type {string}
   * @param [value] {*}
   * @returns {boolean} True when a listener received the event
   */

  function emit(type, value) {
    var that = this;
    var listeners = getListeners(that, type, true);
    if (!listeners) return false;
    var arglen = arguments.length;
    if (arglen === 1) {
      listeners.forEach(zeroarg);
    } else if (arglen === 2) {
      listeners.forEach(onearg);
    } else {
      var args = Array.prototype.slice.call(arguments, 1);
      listeners.forEach(moreargs);
    }
    return !!listeners.length;

    function zeroarg(func) {
      func.call(that);
    }

    function onearg(func) {
      func.call(that, value);
    }

    function moreargs(func) {
      func.apply(that, args);
    }
  }

  /**
   * @ignore
   */

  function getListeners(that, type, readonly) {
    if (readonly && !that[LISTENERS]) return;
    var listeners = that[LISTENERS] || (that[LISTENERS] = {});
    return listeners[type] || (listeners[type] = []);
  }

})(EventLite);


/***/ }),

/***/ "../node_modules/ieee754/index.js":
/*!****************************************!*\
  !*** ../node_modules/ieee754/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../node_modules/int64-buffer/int64-buffer.js":
/*!****************************************************!*\
  !*** ../node_modules/int64-buffer/int64-buffer.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

// int64-buffer.js

/*jshint -W018 */ // Confusing use of '!'.
/*jshint -W030 */ // Expected an assignment or function call and instead saw an expression.
/*jshint -W093 */ // Did you mean to return a conditional instead of an assignment?

var Uint64BE, Int64BE, Uint64LE, Int64LE;

!function(exports) {
  // constants

  var UNDEFINED = "undefined";
  var BUFFER = (UNDEFINED !== typeof Buffer) && Buffer;
  var UINT8ARRAY = (UNDEFINED !== typeof Uint8Array) && Uint8Array;
  var ARRAYBUFFER = (UNDEFINED !== typeof ArrayBuffer) && ArrayBuffer;
  var ZERO = [0, 0, 0, 0, 0, 0, 0, 0];
  var isArray = Array.isArray || _isArray;
  var BIT32 = 4294967296;
  var BIT24 = 16777216;

  // storage class

  var storage; // Array;

  // generate classes

  Uint64BE = factory("Uint64BE", true, true);
  Int64BE = factory("Int64BE", true, false);
  Uint64LE = factory("Uint64LE", false, true);
  Int64LE = factory("Int64LE", false, false);

  // class factory

  function factory(name, bigendian, unsigned) {
    var posH = bigendian ? 0 : 4;
    var posL = bigendian ? 4 : 0;
    var pos0 = bigendian ? 0 : 3;
    var pos1 = bigendian ? 1 : 2;
    var pos2 = bigendian ? 2 : 1;
    var pos3 = bigendian ? 3 : 0;
    var fromPositive = bigendian ? fromPositiveBE : fromPositiveLE;
    var fromNegative = bigendian ? fromNegativeBE : fromNegativeLE;
    var proto = Int64.prototype;
    var isName = "is" + name;
    var _isInt64 = "_" + isName;

    // properties
    proto.buffer = void 0;
    proto.offset = 0;
    proto[_isInt64] = true;

    // methods
    proto.toNumber = toNumber;
    proto.toString = toString;
    proto.toJSON = toNumber;
    proto.toArray = toArray;

    // add .toBuffer() method only when Buffer available
    if (BUFFER) proto.toBuffer = toBuffer;

    // add .toArrayBuffer() method only when Uint8Array available
    if (UINT8ARRAY) proto.toArrayBuffer = toArrayBuffer;

    // isUint64BE, isInt64BE
    Int64[isName] = isInt64;

    // CommonJS
    exports[name] = Int64;

    return Int64;

    // constructor
    function Int64(buffer, offset, value, raddix) {
      if (!(this instanceof Int64)) return new Int64(buffer, offset, value, raddix);
      return init(this, buffer, offset, value, raddix);
    }

    // isUint64BE, isInt64BE
    function isInt64(b) {
      return !!(b && b[_isInt64]);
    }

    // initializer
    function init(that, buffer, offset, value, raddix) {
      if (UINT8ARRAY && ARRAYBUFFER) {
        if (buffer instanceof ARRAYBUFFER) buffer = new UINT8ARRAY(buffer);
        if (value instanceof ARRAYBUFFER) value = new UINT8ARRAY(value);
      }

      // Int64BE() style
      if (!buffer && !offset && !value && !storage) {
        // shortcut to initialize with zero
        that.buffer = newArray(ZERO, 0);
        return;
      }

      // Int64BE(value, raddix) style
      if (!isValidBuffer(buffer, offset)) {
        var _storage = storage || Array;
        raddix = offset;
        value = buffer;
        offset = 0;
        buffer = new _storage(8);
      }

      that.buffer = buffer;
      that.offset = offset |= 0;

      // Int64BE(buffer, offset) style
      if (UNDEFINED === typeof value) return;

      // Int64BE(buffer, offset, value, raddix) style
      if ("string" === typeof value) {
        fromString(buffer, offset, value, raddix || 10);
      } else if (isValidBuffer(value, raddix)) {
        fromArray(buffer, offset, value, raddix);
      } else if ("number" === typeof raddix) {
        writeInt32(buffer, offset + posH, value); // high
        writeInt32(buffer, offset + posL, raddix); // low
      } else if (value > 0) {
        fromPositive(buffer, offset, value); // positive
      } else if (value < 0) {
        fromNegative(buffer, offset, value); // negative
      } else {
        fromArray(buffer, offset, ZERO, 0); // zero, NaN and others
      }
    }

    function fromString(buffer, offset, str, raddix) {
      var pos = 0;
      var len = str.length;
      var high = 0;
      var low = 0;
      if (str[0] === "-") pos++;
      var sign = pos;
      while (pos < len) {
        var chr = parseInt(str[pos++], raddix);
        if (!(chr >= 0)) break; // NaN
        low = low * raddix + chr;
        high = high * raddix + Math.floor(low / BIT32);
        low %= BIT32;
      }
      if (sign) {
        high = ~high;
        if (low) {
          low = BIT32 - low;
        } else {
          high++;
        }
      }
      writeInt32(buffer, offset + posH, high);
      writeInt32(buffer, offset + posL, low);
    }

    function toNumber() {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      if (!unsigned) high |= 0; // a trick to get signed
      return high ? (high * BIT32 + low) : low;
    }

    function toString(radix) {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      var str = "";
      var sign = !unsigned && (high & 0x80000000);
      if (sign) {
        high = ~high;
        low = BIT32 - low;
      }
      radix = radix || 10;
      while (1) {
        var mod = (high % radix) * BIT32 + low;
        high = Math.floor(high / radix);
        low = Math.floor(mod / radix);
        str = (mod % radix).toString(radix) + str;
        if (!high && !low) break;
      }
      if (sign) {
        str = "-" + str;
      }
      return str;
    }

    function writeInt32(buffer, offset, value) {
      buffer[offset + pos3] = value & 255;
      value = value >> 8;
      buffer[offset + pos2] = value & 255;
      value = value >> 8;
      buffer[offset + pos1] = value & 255;
      value = value >> 8;
      buffer[offset + pos0] = value & 255;
    }

    function readInt32(buffer, offset) {
      return (buffer[offset + pos0] * BIT24) +
        (buffer[offset + pos1] << 16) +
        (buffer[offset + pos2] << 8) +
        buffer[offset + pos3];
    }
  }

  function toArray(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = null; // Array
    if (raw !== false && offset === 0 && buffer.length === 8 && isArray(buffer)) return buffer;
    return newArray(buffer, offset);
  }

  function toBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = BUFFER;
    if (raw !== false && offset === 0 && buffer.length === 8 && Buffer.isBuffer(buffer)) return buffer;
    var dest = new BUFFER(8);
    fromArray(dest, 0, buffer, offset);
    return dest;
  }

  function toArrayBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    var arrbuf = buffer.buffer;
    storage = UINT8ARRAY;
    if (raw !== false && offset === 0 && (arrbuf instanceof ARRAYBUFFER) && arrbuf.byteLength === 8) return arrbuf;
    var dest = new UINT8ARRAY(8);
    fromArray(dest, 0, buffer, offset);
    return dest.buffer;
  }

  function isValidBuffer(buffer, offset) {
    var len = buffer && buffer.length;
    offset |= 0;
    return len && (offset + 8 <= len) && ("string" !== typeof buffer[offset]);
  }

  function fromArray(destbuf, destoff, srcbuf, srcoff) {
    destoff |= 0;
    srcoff |= 0;
    for (var i = 0; i < 8; i++) {
      destbuf[destoff++] = srcbuf[srcoff++] & 255;
    }
  }

  function newArray(buffer, offset) {
    return Array.prototype.slice.call(buffer, offset, offset + 8);
  }

  function fromPositiveBE(buffer, offset, value) {
    var pos = offset + 8;
    while (pos > offset) {
      buffer[--pos] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeBE(buffer, offset, value) {
    var pos = offset + 8;
    value++;
    while (pos > offset) {
      buffer[--pos] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  function fromPositiveLE(buffer, offset, value) {
    var end = offset + 8;
    while (offset < end) {
      buffer[offset++] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeLE(buffer, offset, value) {
    var end = offset + 8;
    value++;
    while (offset < end) {
      buffer[offset++] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  // https://github.com/retrofox/is-array
  function _isArray(val) {
    return !!val && "[object Array]" == Object.prototype.toString.call(val);
  }

}( true && typeof exports.nodeName !== 'string' ? exports : (this || {}));


/***/ }),

/***/ "../node_modules/isarray/index.js":
/*!****************************************!*\
  !*** ../node_modules/isarray/index.js ***!
  \****************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/browser.js":
/*!***************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// browser.js

exports.encode = __webpack_require__(/*! ./encode */ "../node_modules/msgpack-lite/lib/encode.js").encode;
exports.decode = __webpack_require__(/*! ./decode */ "../node_modules/msgpack-lite/lib/decode.js").decode;

exports.Encoder = __webpack_require__(/*! ./encoder */ "../node_modules/msgpack-lite/lib/encoder.js").Encoder;
exports.Decoder = __webpack_require__(/*! ./decoder */ "../node_modules/msgpack-lite/lib/decoder.js").Decoder;

exports.createCodec = __webpack_require__(/*! ./ext */ "../node_modules/msgpack-lite/lib/ext.js").createCodec;
exports.codec = __webpack_require__(/*! ./codec */ "../node_modules/msgpack-lite/lib/codec.js").codec;


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/buffer-global.js":
/*!*********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/buffer-global.js ***!
  \*********************************************************/
/***/ (function(module) {

/* globals Buffer */

module.exports =
  c(("undefined" !== typeof Buffer) && Buffer) ||
  c(this.Buffer) ||
  c(("undefined" !== typeof window) && window.Buffer) ||
  this.Buffer;

function c(B) {
  return B && B.isBuffer && B;
}

/***/ }),

/***/ "../node_modules/msgpack-lite/lib/buffer-lite.js":
/*!*******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/buffer-lite.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// buffer-lite.js

var MAXBUFLEN = 8192;

exports.copy = copy;
exports.toString = toString;
exports.write = write;

/**
 * Buffer.prototype.write()
 *
 * @param string {String}
 * @param [offset] {Number}
 * @returns {Number}
 */

function write(string, offset) {
  var buffer = this;
  var index = offset || (offset |= 0);
  var length = string.length;
  var chr = 0;
  var i = 0;
  while (i < length) {
    chr = string.charCodeAt(i++);

    if (chr < 128) {
      buffer[index++] = chr;
    } else if (chr < 0x800) {
      // 2 bytes
      buffer[index++] = 0xC0 | (chr >>> 6);
      buffer[index++] = 0x80 | (chr & 0x3F);
    } else if (chr < 0xD800 || chr > 0xDFFF) {
      // 3 bytes
      buffer[index++] = 0xE0 | (chr  >>> 12);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    } else {
      // 4 bytes - surrogate pair
      chr = (((chr - 0xD800) << 10) | (string.charCodeAt(i++) - 0xDC00)) + 0x10000;
      buffer[index++] = 0xF0 | (chr >>> 18);
      buffer[index++] = 0x80 | ((chr >>> 12) & 0x3F);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    }
  }
  return index - offset;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var buffer = this;
  var index = start|0;
  if (!end) end = buffer.length;
  var string = '';
  var chr = 0;

  while (index < end) {
    chr = buffer[index++];
    if (chr < 128) {
      string += String.fromCharCode(chr);
      continue;
    }

    if ((chr & 0xE0) === 0xC0) {
      // 2 bytes
      chr = (chr & 0x1F) << 6 |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF0) === 0xE0) {
      // 3 bytes
      chr = (chr & 0x0F)             << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF8) === 0xF0) {
      // 4 bytes
      chr = (chr & 0x07)             << 18 |
            (buffer[index++] & 0x3F) << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);
    }

    if (chr >= 0x010000) {
      // A surrogate pair
      chr -= 0x010000;

      string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
    } else {
      string += String.fromCharCode(chr);
    }
  }

  return string;
}

/**
 * Buffer.prototype.copy()
 *
 * @param target {Buffer}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {number}
 */

function copy(target, targetStart, start, end) {
  var i;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!targetStart) targetStart = 0;
  var len = end - start;

  if (target === this && start < targetStart && targetStart < end) {
    // descending
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    // ascending
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start];
    }
  }

  return len;
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/bufferish-array.js":
/*!***********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/bufferish-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = alloc(0);

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Array}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Array
  return Array.prototype.slice.call(value);
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/bufferish-buffer.js":
/*!************************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/bufferish-buffer.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-buffer.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var exports = module.exports = Bufferish.hasBuffer ? alloc(0) : [];

exports.alloc = Bufferish.hasBuffer && Buffer.alloc || alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Buffer(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Buffer
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Buffer
  if (Buffer.from && Buffer.from.length !== 1) {
    return Buffer.from(value); // node v6+
  } else {
    return new Buffer(value); // node v4
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/bufferish-proto.js":
/*!***********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/bufferish-proto.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish-proto.js

/* jshint eqnull:true */

var BufferLite = __webpack_require__(/*! ./buffer-lite */ "../node_modules/msgpack-lite/lib/buffer-lite.js");

exports.copy = copy;
exports.slice = slice;
exports.toString = toString;
exports.write = gen("write");

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var isBufferShim = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var brokenTypedArray = isBufferShim && !Buffer.TYPED_ARRAY_SUPPORT;

/**
 * @param target {Buffer|Uint8Array|Array}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function copy(target, targetStart, start, end) {
  var thisIsBuffer = Bufferish.isBuffer(this);
  var targetIsBuffer = Bufferish.isBuffer(target);
  if (thisIsBuffer && targetIsBuffer) {
    // Buffer to Buffer
    return this.copy(target, targetStart, start, end);
  } else if (!brokenTypedArray && !thisIsBuffer && !targetIsBuffer &&
    Bufferish.isView(this) && Bufferish.isView(target)) {
    // Uint8Array to Uint8Array (except for minor some browsers)
    var buffer = (start || end != null) ? slice.call(this, start, end) : this;
    target.set(buffer, targetStart);
    return buffer.length;
  } else {
    // other cases
    return BufferLite.copy.call(this, target, targetStart, start, end);
  }
}

/**
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function slice(start, end) {
  // for Buffer, Uint8Array (except for minor some browsers) and Array
  var f = this.slice || (!brokenTypedArray && this.subarray);
  if (f) return f.call(this, start, end);

  // Uint8Array (for minor some browsers)
  var target = Bufferish.alloc.call(this, end - start);
  copy.call(this, target, 0, start, end);
  return target;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var f = (!isBufferShim && Bufferish.isBuffer(this)) ? this.toString : BufferLite.toString;
  return f.apply(this, arguments);
}

/**
 * @private
 */

function gen(method) {
  return wrap;

  function wrap() {
    var f = this[method] || BufferLite[method];
    return f.apply(this, arguments);
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/bufferish-uint8array.js":
/*!****************************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/bufferish-uint8array.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-uint8array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = Bufferish.hasArrayBuffer ? alloc(0) : [];

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Uint8Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Uint8Array}
 */

function from(value) {
  if (Bufferish.isView(value)) {
    // TypedArray to ArrayBuffer
    var byteOffset = value.byteOffset;
    var byteLength = value.byteLength;
    value = value.buffer;
    if (value.byteLength !== byteLength) {
      if (value.slice) {
        value = value.slice(byteOffset, byteOffset + byteLength);
      } else {
        // Android 4.1 does not have ArrayBuffer.prototype.slice
        value = new Uint8Array(value);
        if (value.byteLength !== byteLength) {
          // TypedArray to ArrayBuffer to Uint8Array to Array
          value = Array.prototype.slice.call(value, byteOffset, byteOffset + byteLength);
        }
      }
    }
  } else if (typeof value === "string") {
    // String to Uint8Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  return new Uint8Array(value);
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/bufferish.js":
/*!*****************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/bufferish.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish.js

var Buffer = exports.global = __webpack_require__(/*! ./buffer-global */ "../node_modules/msgpack-lite/lib/buffer-global.js");
var hasBuffer = exports.hasBuffer = Buffer && !!Buffer.isBuffer;
var hasArrayBuffer = exports.hasArrayBuffer = ("undefined" !== typeof ArrayBuffer);

var isArray = exports.isArray = __webpack_require__(/*! isarray */ "../node_modules/isarray/index.js");
exports.isArrayBuffer = hasArrayBuffer ? isArrayBuffer : _false;
var isBuffer = exports.isBuffer = hasBuffer ? Buffer.isBuffer : _false;
var isView = exports.isView = hasArrayBuffer ? (ArrayBuffer.isView || _is("ArrayBuffer", "buffer")) : _false;

exports.alloc = alloc;
exports.concat = concat;
exports.from = from;

var BufferArray = exports.Array = __webpack_require__(/*! ./bufferish-array */ "../node_modules/msgpack-lite/lib/bufferish-array.js");
var BufferBuffer = exports.Buffer = __webpack_require__(/*! ./bufferish-buffer */ "../node_modules/msgpack-lite/lib/bufferish-buffer.js");
var BufferUint8Array = exports.Uint8Array = __webpack_require__(/*! ./bufferish-uint8array */ "../node_modules/msgpack-lite/lib/bufferish-uint8array.js");
var BufferProto = exports.prototype = __webpack_require__(/*! ./bufferish-proto */ "../node_modules/msgpack-lite/lib/bufferish-proto.js");

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer|Uint8Array|Array}
 */

function from(value) {
  if (typeof value === "string") {
    return fromString.call(this, value);
  } else {
    return auto(this).from(value);
  }
}

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return auto(this).alloc(size);
}

/**
 * @param list {Array} array of (Buffer|Uint8Array|Array)s
 * @param [length]
 * @returns {Buffer|Uint8Array|Array}
 */

function concat(list, length) {
  if (!length) {
    length = 0;
    Array.prototype.forEach.call(list, dryrun);
  }
  var ref = (this !== exports) && this || list[0];
  var result = alloc.call(ref, length);
  var offset = 0;
  Array.prototype.forEach.call(list, append);
  return result;

  function dryrun(buffer) {
    length += buffer.length;
  }

  function append(buffer) {
    offset += BufferProto.copy.call(buffer, result, offset);
  }
}

var _isArrayBuffer = _is("ArrayBuffer");

function isArrayBuffer(value) {
  return (value instanceof ArrayBuffer) || _isArrayBuffer(value);
}

/**
 * @private
 */

function fromString(value) {
  var expected = value.length * 3;
  var that = alloc.call(this, expected);
  var actual = BufferProto.write.call(that, value);
  if (expected !== actual) {
    that = BufferProto.slice.call(that, 0, actual);
  }
  return that;
}

function auto(that) {
  return isBuffer(that) ? BufferBuffer
    : isView(that) ? BufferUint8Array
    : isArray(that) ? BufferArray
    : hasBuffer ? BufferBuffer
    : hasArrayBuffer ? BufferUint8Array
    : BufferArray;
}

function _false() {
  return false;
}

function _is(name, key) {
  /* jshint eqnull:true */
  name = "[object " + name + "]";
  return function(value) {
    return (value != null) && {}.toString.call(key ? value[key] : value) === name;
  };
}

/***/ }),

/***/ "../node_modules/msgpack-lite/lib/codec-base.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/codec-base.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec-base.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "../node_modules/isarray/index.js");

exports.createCodec = createCodec;
exports.install = install;
exports.filter = filter;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");

function Codec(options) {
  if (!(this instanceof Codec)) return new Codec(options);
  this.options = options;
  this.init();
}

Codec.prototype.init = function() {
  var options = this.options;

  if (options && options.uint8array) {
    this.bufferish = Bufferish.Uint8Array;
  }

  return this;
};

function install(props) {
  for (var key in props) {
    Codec.prototype[key] = add(Codec.prototype[key], props[key]);
  }
}

function add(a, b) {
  return (a && b) ? ab : (a || b);

  function ab() {
    a.apply(this, arguments);
    return b.apply(this, arguments);
  }
}

function join(filters) {
  filters = filters.slice();

  return function(value) {
    return filters.reduce(iterator, value);
  };

  function iterator(value, filter) {
    return filter(value);
  }
}

function filter(filter) {
  return IS_ARRAY(filter) ? join(filter) : filter;
}

// @public
// msgpack.createCodec()

function createCodec(options) {
  return new Codec(options);
}

// default shared codec

exports.preset = createCodec({preset: true});


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/codec.js":
/*!*************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/codec.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "../node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "../node_modules/msgpack-lite/lib/write-core.js");

// @public
// msgpack.codec.preset

exports.codec = {
  preset: __webpack_require__(/*! ./codec-base */ "../node_modules/msgpack-lite/lib/codec-base.js").preset
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/decode-buffer.js":
/*!*********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/decode-buffer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode-buffer.js

exports.DecodeBuffer = DecodeBuffer;

var preset = __webpack_require__(/*! ./read-core */ "../node_modules/msgpack-lite/lib/read-core.js").preset;

var FlexDecoder = __webpack_require__(/*! ./flex-buffer */ "../node_modules/msgpack-lite/lib/flex-buffer.js").FlexDecoder;

FlexDecoder.mixin(DecodeBuffer.prototype);

function DecodeBuffer(options) {
  if (!(this instanceof DecodeBuffer)) return new DecodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

DecodeBuffer.prototype.codec = preset;

DecodeBuffer.prototype.fetch = function() {
  return this.codec.decode(this);
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/decode.js":
/*!**************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/decode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode.js

exports.decode = decode;

var DecodeBuffer = __webpack_require__(/*! ./decode-buffer */ "../node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer;

function decode(input, options) {
  var decoder = new DecodeBuffer(options);
  decoder.write(input);
  return decoder.read();
}

/***/ }),

/***/ "../node_modules/msgpack-lite/lib/decoder.js":
/*!***************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/decoder.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decoder.js

exports.Decoder = Decoder;

var EventLite = __webpack_require__(/*! event-lite */ "../node_modules/event-lite/event-lite.js");
var DecodeBuffer = __webpack_require__(/*! ./decode-buffer */ "../node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer;

function Decoder(options) {
  if (!(this instanceof Decoder)) return new Decoder(options);
  DecodeBuffer.call(this, options);
}

Decoder.prototype = new DecodeBuffer();

EventLite.mixin(Decoder.prototype);

Decoder.prototype.decode = function(chunk) {
  if (arguments.length) this.write(chunk);
  this.flush();
};

Decoder.prototype.push = function(chunk) {
  this.emit("data", chunk);
};

Decoder.prototype.end = function(chunk) {
  this.decode(chunk);
  this.emit("end");
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/encode-buffer.js":
/*!*********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/encode-buffer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode-buffer.js

exports.EncodeBuffer = EncodeBuffer;

var preset = __webpack_require__(/*! ./write-core */ "../node_modules/msgpack-lite/lib/write-core.js").preset;

var FlexEncoder = __webpack_require__(/*! ./flex-buffer */ "../node_modules/msgpack-lite/lib/flex-buffer.js").FlexEncoder;

FlexEncoder.mixin(EncodeBuffer.prototype);

function EncodeBuffer(options) {
  if (!(this instanceof EncodeBuffer)) return new EncodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

EncodeBuffer.prototype.codec = preset;

EncodeBuffer.prototype.write = function(input) {
  this.codec.encode(this, input);
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/encode.js":
/*!**************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/encode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode.js

exports.encode = encode;

var EncodeBuffer = __webpack_require__(/*! ./encode-buffer */ "../node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer;

function encode(input, options) {
  var encoder = new EncodeBuffer(options);
  encoder.write(input);
  return encoder.read();
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/encoder.js":
/*!***************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/encoder.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encoder.js

exports.Encoder = Encoder;

var EventLite = __webpack_require__(/*! event-lite */ "../node_modules/event-lite/event-lite.js");
var EncodeBuffer = __webpack_require__(/*! ./encode-buffer */ "../node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer;

function Encoder(options) {
  if (!(this instanceof Encoder)) return new Encoder(options);
  EncodeBuffer.call(this, options);
}

Encoder.prototype = new EncodeBuffer();

EventLite.mixin(Encoder.prototype);

Encoder.prototype.encode = function(chunk) {
  this.write(chunk);
  this.emit("data", this.read());
};

Encoder.prototype.end = function(chunk) {
  if (arguments.length) this.encode(chunk);
  this.flush();
  this.emit("end");
};


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/ext-buffer.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/ext-buffer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-buffer.js

exports.ExtBuffer = ExtBuffer;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");

function ExtBuffer(buffer, type) {
  if (!(this instanceof ExtBuffer)) return new ExtBuffer(buffer, type);
  this.buffer = Bufferish.from(buffer);
  this.type = type;
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/ext-packer.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/ext-packer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-packer.js

exports.setExtPackers = setExtPackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var packTypedArray = Bufferish.Uint8Array.from;
var _encode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtPackers(codec) {
  codec.addExtPacker(0x0E, Error, [packError, encode]);
  codec.addExtPacker(0x01, EvalError, [packError, encode]);
  codec.addExtPacker(0x02, RangeError, [packError, encode]);
  codec.addExtPacker(0x03, ReferenceError, [packError, encode]);
  codec.addExtPacker(0x04, SyntaxError, [packError, encode]);
  codec.addExtPacker(0x05, TypeError, [packError, encode]);
  codec.addExtPacker(0x06, URIError, [packError, encode]);

  codec.addExtPacker(0x0A, RegExp, [packRegExp, encode]);
  codec.addExtPacker(0x0B, Boolean, [packValueOf, encode]);
  codec.addExtPacker(0x0C, String, [packValueOf, encode]);
  codec.addExtPacker(0x0D, Date, [Number, encode]);
  codec.addExtPacker(0x0F, Number, [packValueOf, encode]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtPacker(0x11, Int8Array, packTypedArray);
    codec.addExtPacker(0x12, Uint8Array, packTypedArray);
    codec.addExtPacker(0x13, Int16Array, packTypedArray);
    codec.addExtPacker(0x14, Uint16Array, packTypedArray);
    codec.addExtPacker(0x15, Int32Array, packTypedArray);
    codec.addExtPacker(0x16, Uint32Array, packTypedArray);
    codec.addExtPacker(0x17, Float32Array, packTypedArray);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtPacker(0x18, Float64Array, packTypedArray);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtPacker(0x19, Uint8ClampedArray, packTypedArray);
    }

    codec.addExtPacker(0x1A, ArrayBuffer, packTypedArray);
    codec.addExtPacker(0x1D, DataView, packTypedArray);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtPacker(0x1B, Buffer, Bufferish.from);
  }
}

function encode(input) {
  if (!_encode) _encode = __webpack_require__(/*! ./encode */ "../node_modules/msgpack-lite/lib/encode.js").encode; // lazy load
  return _encode(input);
}

function packValueOf(value) {
  return (value).valueOf();
}

function packRegExp(value) {
  value = RegExp.prototype.toString.call(value).split("/");
  value.shift();
  var out = [value.pop()];
  out.unshift(value.join("/"));
  return out;
}

function packError(value) {
  var out = {};
  for (var key in ERROR_COLUMNS) {
    out[key] = value[key];
  }
  return out;
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/ext-unpacker.js":
/*!********************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/ext-unpacker.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-unpacker.js

exports.setExtUnpackers = setExtUnpackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var _decode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtUnpackers(codec) {
  codec.addExtUnpacker(0x0E, [decode, unpackError(Error)]);
  codec.addExtUnpacker(0x01, [decode, unpackError(EvalError)]);
  codec.addExtUnpacker(0x02, [decode, unpackError(RangeError)]);
  codec.addExtUnpacker(0x03, [decode, unpackError(ReferenceError)]);
  codec.addExtUnpacker(0x04, [decode, unpackError(SyntaxError)]);
  codec.addExtUnpacker(0x05, [decode, unpackError(TypeError)]);
  codec.addExtUnpacker(0x06, [decode, unpackError(URIError)]);

  codec.addExtUnpacker(0x0A, [decode, unpackRegExp]);
  codec.addExtUnpacker(0x0B, [decode, unpackClass(Boolean)]);
  codec.addExtUnpacker(0x0C, [decode, unpackClass(String)]);
  codec.addExtUnpacker(0x0D, [decode, unpackClass(Date)]);
  codec.addExtUnpacker(0x0F, [decode, unpackClass(Number)]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtUnpacker(0x11, unpackClass(Int8Array));
    codec.addExtUnpacker(0x12, unpackClass(Uint8Array));
    codec.addExtUnpacker(0x13, [unpackArrayBuffer, unpackClass(Int16Array)]);
    codec.addExtUnpacker(0x14, [unpackArrayBuffer, unpackClass(Uint16Array)]);
    codec.addExtUnpacker(0x15, [unpackArrayBuffer, unpackClass(Int32Array)]);
    codec.addExtUnpacker(0x16, [unpackArrayBuffer, unpackClass(Uint32Array)]);
    codec.addExtUnpacker(0x17, [unpackArrayBuffer, unpackClass(Float32Array)]);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtUnpacker(0x18, [unpackArrayBuffer, unpackClass(Float64Array)]);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtUnpacker(0x19, unpackClass(Uint8ClampedArray));
    }

    codec.addExtUnpacker(0x1A, unpackArrayBuffer);
    codec.addExtUnpacker(0x1D, [unpackArrayBuffer, unpackClass(DataView)]);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtUnpacker(0x1B, unpackClass(Buffer));
  }
}

function decode(input) {
  if (!_decode) _decode = __webpack_require__(/*! ./decode */ "../node_modules/msgpack-lite/lib/decode.js").decode; // lazy load
  return _decode(input);
}

function unpackRegExp(value) {
  return RegExp.apply(null, value);
}

function unpackError(Class) {
  return function(value) {
    var out = new Class();
    for (var key in ERROR_COLUMNS) {
      out[key] = value[key];
    }
    return out;
  };
}

function unpackClass(Class) {
  return function(value) {
    return new Class(value);
  };
}

function unpackArrayBuffer(value) {
  return (new Uint8Array(value)).buffer;
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/ext.js":
/*!***********************************************!*\
  !*** ../node_modules/msgpack-lite/lib/ext.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "../node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "../node_modules/msgpack-lite/lib/write-core.js");

exports.createCodec = __webpack_require__(/*! ./codec-base */ "../node_modules/msgpack-lite/lib/codec-base.js").createCodec;


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/flex-buffer.js":
/*!*******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/flex-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// flex-buffer.js

exports.FlexDecoder = FlexDecoder;
exports.FlexEncoder = FlexEncoder;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");

var MIN_BUFFER_SIZE = 2048;
var MAX_BUFFER_SIZE = 65536;
var BUFFER_SHORTAGE = "BUFFER_SHORTAGE";

function FlexDecoder() {
  if (!(this instanceof FlexDecoder)) return new FlexDecoder();
}

function FlexEncoder() {
  if (!(this instanceof FlexEncoder)) return new FlexEncoder();
}

FlexDecoder.mixin = mixinFactory(getDecoderMethods());
FlexDecoder.mixin(FlexDecoder.prototype);

FlexEncoder.mixin = mixinFactory(getEncoderMethods());
FlexEncoder.mixin(FlexEncoder.prototype);

function getDecoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    offset: 0
  };

  function write(chunk) {
    var prev = this.offset ? Bufferish.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = prev ? (chunk ? this.bufferish.concat([prev, chunk]) : prev) : chunk;
    this.offset = 0;
  }

  function flush() {
    while (this.offset < this.buffer.length) {
      var start = this.offset;
      var value;
      try {
        value = this.fetch();
      } catch (e) {
        if (e && e.message != BUFFER_SHORTAGE) throw e;
        // rollback
        this.offset = start;
        break;
      }
      this.push(value);
    }
  }

  function reserve(length) {
    var start = this.offset;
    var end = start + length;
    if (end > this.buffer.length) throw new Error(BUFFER_SHORTAGE);
    this.offset = end;
    return start;
  }
}

function getEncoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    send: send,
    maxBufferSize: MAX_BUFFER_SIZE,
    minBufferSize: MIN_BUFFER_SIZE,
    offset: 0,
    start: 0
  };

  function fetch() {
    var start = this.start;
    if (start < this.offset) {
      var end = this.start = this.offset;
      return Bufferish.prototype.slice.call(this.buffer, start, end);
    }
  }

  function flush() {
    while (this.start < this.offset) {
      var value = this.fetch();
      if (value) this.push(value);
    }
  }

  function pull() {
    var buffers = this.buffers || (this.buffers = []);
    var chunk = buffers.length > 1 ? this.bufferish.concat(buffers) : buffers[0];
    buffers.length = 0; // buffer exhausted
    return chunk;
  }

  function reserve(length) {
    var req = length | 0;

    if (this.buffer) {
      var size = this.buffer.length;
      var start = this.offset | 0;
      var end = start + req;

      // is it long enough?
      if (end < size) {
        this.offset = end;
        return start;
      }

      // flush current buffer
      this.flush();

      // resize it to 2x current length
      length = Math.max(length, Math.min(size * 2, this.maxBufferSize));
    }

    // minimum buffer size
    length = Math.max(length, this.minBufferSize);

    // allocate new buffer
    this.buffer = this.bufferish.alloc(length);
    this.start = 0;
    this.offset = req;
    return 0;
  }

  function send(buffer) {
    var length = buffer.length;
    if (length > this.minBufferSize) {
      this.flush();
      this.push(buffer);
    } else {
      var offset = this.reserve(length);
      Bufferish.prototype.copy.call(buffer, this.buffer, offset);
    }
  }
}

// common methods

function write() {
  throw new Error("method not implemented: write()");
}

function fetch() {
  throw new Error("method not implemented: fetch()");
}

function read() {
  var length = this.buffers && this.buffers.length;

  // fetch the first result
  if (!length) return this.fetch();

  // flush current buffer
  this.flush();

  // read from the results
  return this.pull();
}

function push(chunk) {
  var buffers = this.buffers || (this.buffers = []);
  buffers.push(chunk);
}

function pull() {
  var buffers = this.buffers || (this.buffers = []);
  return buffers.shift();
}

function mixinFactory(source) {
  return mixin;

  function mixin(target) {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/read-core.js":
/*!*****************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/read-core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-core.js

var ExtBuffer = __webpack_require__(/*! ./ext-buffer */ "../node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer;
var ExtUnpacker = __webpack_require__(/*! ./ext-unpacker */ "../node_modules/msgpack-lite/lib/ext-unpacker.js");
var readUint8 = __webpack_require__(/*! ./read-format */ "../node_modules/msgpack-lite/lib/read-format.js").readUint8;
var ReadToken = __webpack_require__(/*! ./read-token */ "../node_modules/msgpack-lite/lib/read-token.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "../node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtUnpacker: addExtUnpacker,
  getExtUnpacker: getExtUnpacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getDecoder(options) {
  var readToken = ReadToken.getReadToken(options);
  return decode;

  function decode(decoder) {
    var type = readUint8(decoder);
    var func = readToken[type];
    if (!func) throw new Error("Invalid type: " + (type ? ("0x" + type.toString(16)) : type));
    return func(decoder);
  }
}

function init() {
  var options = this.options;
  this.decode = getDecoder(options);

  if (options && options.preset) {
    ExtUnpacker.setExtUnpackers(this);
  }

  return this;
}

function addExtUnpacker(etype, unpacker) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  unpackers[etype] = CodecBase.filter(unpacker);
}

function getExtUnpacker(type) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  return unpackers[type] || extUnpacker;

  function extUnpacker(buffer) {
    return new ExtBuffer(buffer, type);
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/read-format.js":
/*!*******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/read-format.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-format.js

var ieee754 = __webpack_require__(/*! ieee754 */ "../node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "../node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

exports.getReadFormat = getReadFormat;
exports.readUint8 = uint8;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "../node_modules/msgpack-lite/lib/bufferish-proto.js");

var HAS_MAP = ("undefined" !== typeof Map);
var NO_ASSERT = true;

function getReadFormat(options) {
  var binarraybuffer = Bufferish.hasArrayBuffer && options && options.binarraybuffer;
  var int64 = options && options.int64;
  var usemap = HAS_MAP && options && options.usemap;

  var readFormat = {
    map: (usemap ? map_to_map : map_to_obj),
    array: array,
    str: str,
    bin: (binarraybuffer ? bin_arraybuffer : bin_buffer),
    ext: ext,
    uint8: uint8,
    uint16: uint16,
    uint32: uint32,
    uint64: read(8, int64 ? readUInt64BE_int64 : readUInt64BE),
    int8: int8,
    int16: int16,
    int32: int32,
    int64: read(8, int64 ? readInt64BE_int64 : readInt64BE),
    float32: read(4, readFloatBE),
    float64: read(8, readDoubleBE)
  };

  return readFormat;
}

function map_to_obj(decoder, len) {
  var value = {};
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value[k[i]] = v[i];
  }
  return value;
}

function map_to_map(decoder, len) {
  var value = new Map();
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value.set(k[i], v[i]);
  }
  return value;
}

function array(decoder, len) {
  var value = new Array(len);
  var decode = decoder.codec.decode;
  for (var i = 0; i < len; i++) {
    value[i] = decode(decoder);
  }
  return value;
}

function str(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  return BufferProto.toString.call(decoder.buffer, "utf-8", start, end);
}

function bin_buffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.from(buf);
}

function bin_arraybuffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.Uint8Array.from(buf).buffer;
}

function ext(decoder, len) {
  var start = decoder.reserve(len+1);
  var type = decoder.buffer[start++];
  var end = start + len;
  var unpack = decoder.codec.getExtUnpacker(type);
  if (!unpack) throw new Error("Invalid ext type: " + (type ? ("0x" + type.toString(16)) : type));
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return unpack(buf);
}

function uint8(decoder) {
  var start = decoder.reserve(1);
  return decoder.buffer[start];
}

function int8(decoder) {
  var start = decoder.reserve(1);
  var value = decoder.buffer[start];
  return (value & 0x80) ? value - 0x100 : value;
}

function uint16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  return (buffer[start++] << 8) | buffer[start];
}

function int16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  var value = (buffer[start++] << 8) | buffer[start];
  return (value & 0x8000) ? value - 0x10000 : value;
}

function uint32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] * 16777216) + (buffer[start++] << 16) + (buffer[start++] << 8) + buffer[start];
}

function int32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] << 24) | (buffer[start++] << 16) | (buffer[start++] << 8) | buffer[start];
}

function read(len, method) {
  return function(decoder) {
    var start = decoder.reserve(len);
    return method.call(decoder.buffer, start, NO_ASSERT);
  };
}

function readUInt64BE(start) {
  return new Uint64BE(this, start).toNumber();
}

function readInt64BE(start) {
  return new Int64BE(this, start).toNumber();
}

function readUInt64BE_int64(start) {
  return new Uint64BE(this, start);
}

function readInt64BE_int64(start) {
  return new Int64BE(this, start);
}

function readFloatBE(start) {
  return ieee754.read(this, start, false, 23, 4);
}

function readDoubleBE(start) {
  return ieee754.read(this, start, false, 52, 8);
}

/***/ }),

/***/ "../node_modules/msgpack-lite/lib/read-token.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/read-token.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-token.js

var ReadFormat = __webpack_require__(/*! ./read-format */ "../node_modules/msgpack-lite/lib/read-format.js");

exports.getReadToken = getReadToken;

function getReadToken(options) {
  var format = ReadFormat.getReadFormat(options);

  if (options && options.useraw) {
    return init_useraw(format);
  } else {
    return init_token(format);
  }
}

function init_token(format) {
  var i;
  var token = new Array(256);

  // positive fixint -- 0x00 - 0x7f
  for (i = 0x00; i <= 0x7f; i++) {
    token[i] = constant(i);
  }

  // fixmap -- 0x80 - 0x8f
  for (i = 0x80; i <= 0x8f; i++) {
    token[i] = fix(i - 0x80, format.map);
  }

  // fixarray -- 0x90 - 0x9f
  for (i = 0x90; i <= 0x9f; i++) {
    token[i] = fix(i - 0x90, format.array);
  }

  // fixstr -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.str);
  }

  // nil -- 0xc0
  token[0xc0] = constant(null);

  // (never used) -- 0xc1
  token[0xc1] = null;

  // false -- 0xc2
  // true -- 0xc3
  token[0xc2] = constant(false);
  token[0xc3] = constant(true);

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = flex(format.uint8, format.bin);
  token[0xc5] = flex(format.uint16, format.bin);
  token[0xc6] = flex(format.uint32, format.bin);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = flex(format.uint8, format.ext);
  token[0xc8] = flex(format.uint16, format.ext);
  token[0xc9] = flex(format.uint32, format.ext);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = format.float32;
  token[0xcb] = format.float64;

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = format.uint8;
  token[0xcd] = format.uint16;
  token[0xce] = format.uint32;
  token[0xcf] = format.uint64;

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = format.int8;
  token[0xd1] = format.int16;
  token[0xd2] = format.int32;
  token[0xd3] = format.int64;

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  token[0xd4] = fix(1, format.ext);
  token[0xd5] = fix(2, format.ext);
  token[0xd6] = fix(4, format.ext);
  token[0xd7] = fix(8, format.ext);
  token[0xd8] = fix(16, format.ext);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = flex(format.uint8, format.str);
  token[0xda] = flex(format.uint16, format.str);
  token[0xdb] = flex(format.uint32, format.str);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = flex(format.uint16, format.array);
  token[0xdd] = flex(format.uint32, format.array);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = flex(format.uint16, format.map);
  token[0xdf] = flex(format.uint32, format.map);

  // negative fixint -- 0xe0 - 0xff
  for (i = 0xe0; i <= 0xff; i++) {
    token[i] = constant(i - 0x100);
  }

  return token;
}

function init_useraw(format) {
  var i;
  var token = init_token(format).slice();

  // raw 8 -- 0xd9
  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  token[0xd9] = token[0xc4];
  token[0xda] = token[0xc5];
  token[0xdb] = token[0xc6];

  // fixraw -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.bin);
  }

  return token;
}

function constant(value) {
  return function() {
    return value;
  };
}

function flex(lenFunc, decodeFunc) {
  return function(decoder) {
    var len = lenFunc(decoder);
    return decodeFunc(decoder, len);
  };
}

function fix(len, method) {
  return function(decoder) {
    return method(decoder, len);
  };
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/write-core.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/write-core.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-core.js

var ExtBuffer = __webpack_require__(/*! ./ext-buffer */ "../node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer;
var ExtPacker = __webpack_require__(/*! ./ext-packer */ "../node_modules/msgpack-lite/lib/ext-packer.js");
var WriteType = __webpack_require__(/*! ./write-type */ "../node_modules/msgpack-lite/lib/write-type.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "../node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtPacker: addExtPacker,
  getExtPacker: getExtPacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getEncoder(options) {
  var writeType = WriteType.getWriteType(options);
  return encode;

  function encode(encoder, value) {
    var func = writeType[typeof value];
    if (!func) throw new Error("Unsupported type \"" + (typeof value) + "\": " + value);
    func(encoder, value);
  }
}

function init() {
  var options = this.options;
  this.encode = getEncoder(options);

  if (options && options.preset) {
    ExtPacker.setExtPackers(this);
  }

  return this;
}

function addExtPacker(etype, Class, packer) {
  packer = CodecBase.filter(packer);
  var name = Class.name;
  if (name && name !== "Object") {
    var packers = this.extPackers || (this.extPackers = {});
    packers[name] = extPacker;
  } else {
    // fallback for IE
    var list = this.extEncoderList || (this.extEncoderList = []);
    list.unshift([Class, extPacker]);
  }

  function extPacker(value) {
    if (packer) value = packer(value);
    return new ExtBuffer(value, etype);
  }
}

function getExtPacker(value) {
  var packers = this.extPackers || (this.extPackers = {});
  var c = value.constructor;
  var e = c && c.name && packers[c.name];
  if (e) return e;

  // fallback for IE
  var list = this.extEncoderList || (this.extEncoderList = []);
  var len = list.length;
  for (var i = 0; i < len; i++) {
    var pair = list[i];
    if (c === pair[0]) return pair[1];
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/write-token.js":
/*!*******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/write-token.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-token.js

var ieee754 = __webpack_require__(/*! ieee754 */ "../node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "../node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var uint8 = __webpack_require__(/*! ./write-uint8 */ "../node_modules/msgpack-lite/lib/write-uint8.js").uint8;
var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var IS_BUFFER_SHIM = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var NO_TYPED_ARRAY = IS_BUFFER_SHIM && !Buffer.TYPED_ARRAY_SUPPORT;
var Buffer_prototype = Bufferish.hasBuffer && Buffer.prototype || {};

exports.getWriteToken = getWriteToken;

function getWriteToken(options) {
  if (options && options.uint8array) {
    return init_uint8array();
  } else if (NO_TYPED_ARRAY || (Bufferish.hasBuffer && options && options.safe)) {
    return init_safe();
  } else {
    return init_token();
  }
}

function init_uint8array() {
  var token = init_token();

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, writeDoubleBE);

  return token;
}

// Node.js and browsers with TypedArray

function init_token() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = write1(0xc4);
  token[0xc5] = write2(0xc5);
  token[0xc6] = write4(0xc6);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = write1(0xc7);
  token[0xc8] = write2(0xc8);
  token[0xc9] = write4(0xc9);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, (Buffer_prototype.writeFloatBE || writeFloatBE), true);
  token[0xcb] = writeN(0xcb, 8, (Buffer_prototype.writeDoubleBE || writeDoubleBE), true);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = write1(0xcc);
  token[0xcd] = write2(0xcd);
  token[0xce] = write4(0xce);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = write1(0xd0);
  token[0xd1] = write2(0xd1);
  token[0xd2] = write4(0xd2);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = write1(0xd9);
  token[0xda] = write2(0xda);
  token[0xdb] = write4(0xdb);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = write2(0xdc);
  token[0xdd] = write4(0xdd);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = write2(0xde);
  token[0xdf] = write4(0xdf);

  return token;
}

// safe mode: for old browsers and who needs asserts

function init_safe() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = writeN(0xc4, 1, Buffer.prototype.writeUInt8);
  token[0xc5] = writeN(0xc5, 2, Buffer.prototype.writeUInt16BE);
  token[0xc6] = writeN(0xc6, 4, Buffer.prototype.writeUInt32BE);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = writeN(0xc7, 1, Buffer.prototype.writeUInt8);
  token[0xc8] = writeN(0xc8, 2, Buffer.prototype.writeUInt16BE);
  token[0xc9] = writeN(0xc9, 4, Buffer.prototype.writeUInt32BE);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, Buffer.prototype.writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, Buffer.prototype.writeDoubleBE);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = writeN(0xcc, 1, Buffer.prototype.writeUInt8);
  token[0xcd] = writeN(0xcd, 2, Buffer.prototype.writeUInt16BE);
  token[0xce] = writeN(0xce, 4, Buffer.prototype.writeUInt32BE);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = writeN(0xd0, 1, Buffer.prototype.writeInt8);
  token[0xd1] = writeN(0xd1, 2, Buffer.prototype.writeInt16BE);
  token[0xd2] = writeN(0xd2, 4, Buffer.prototype.writeInt32BE);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = writeN(0xd9, 1, Buffer.prototype.writeUInt8);
  token[0xda] = writeN(0xda, 2, Buffer.prototype.writeUInt16BE);
  token[0xdb] = writeN(0xdb, 4, Buffer.prototype.writeUInt32BE);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = writeN(0xdc, 2, Buffer.prototype.writeUInt16BE);
  token[0xdd] = writeN(0xdd, 4, Buffer.prototype.writeUInt32BE);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = writeN(0xde, 2, Buffer.prototype.writeUInt16BE);
  token[0xdf] = writeN(0xdf, 4, Buffer.prototype.writeUInt32BE);

  return token;
}

function write1(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(2);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset] = value;
  };
}

function write2(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(3);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function write4(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(5);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 24;
    buffer[offset++] = value >>> 16;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function writeN(type, len, method, noAssert) {
  return function(encoder, value) {
    var offset = encoder.reserve(len + 1);
    encoder.buffer[offset++] = type;
    method.call(encoder.buffer, value, offset, noAssert);
  };
}

function writeUInt64BE(value, offset) {
  new Uint64BE(this, offset, value);
}

function writeInt64BE(value, offset) {
  new Int64BE(this, offset, value);
}

function writeFloatBE(value, offset) {
  ieee754.write(this, value, offset, false, 23, 4);
}

function writeDoubleBE(value, offset) {
  ieee754.write(this, value, offset, false, 52, 8);
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/write-type.js":
/*!******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/write-type.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-type.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "../node_modules/isarray/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "../node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var Bufferish = __webpack_require__(/*! ./bufferish */ "../node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "../node_modules/msgpack-lite/lib/bufferish-proto.js");
var WriteToken = __webpack_require__(/*! ./write-token */ "../node_modules/msgpack-lite/lib/write-token.js");
var uint8 = __webpack_require__(/*! ./write-uint8 */ "../node_modules/msgpack-lite/lib/write-uint8.js").uint8;
var ExtBuffer = __webpack_require__(/*! ./ext-buffer */ "../node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer;

var HAS_UINT8ARRAY = ("undefined" !== typeof Uint8Array);
var HAS_MAP = ("undefined" !== typeof Map);

var extmap = [];
extmap[1] = 0xd4;
extmap[2] = 0xd5;
extmap[4] = 0xd6;
extmap[8] = 0xd7;
extmap[16] = 0xd8;

exports.getWriteType = getWriteType;

function getWriteType(options) {
  var token = WriteToken.getWriteToken(options);
  var useraw = options && options.useraw;
  var binarraybuffer = HAS_UINT8ARRAY && options && options.binarraybuffer;
  var isBuffer = binarraybuffer ? Bufferish.isArrayBuffer : Bufferish.isBuffer;
  var bin = binarraybuffer ? bin_arraybuffer : bin_buffer;
  var usemap = HAS_MAP && options && options.usemap;
  var map = usemap ? map_to_map : obj_to_map;

  var writeType = {
    "boolean": bool,
    "function": nil,
    "number": number,
    "object": (useraw ? object_raw : object),
    "string": _string(useraw ? raw_head_size : str_head_size),
    "symbol": nil,
    "undefined": nil
  };

  return writeType;

  // false -- 0xc2
  // true -- 0xc3
  function bool(encoder, value) {
    var type = value ? 0xc3 : 0xc2;
    token[type](encoder, value);
  }

  function number(encoder, value) {
    var ivalue = value | 0;
    var type;
    if (value !== ivalue) {
      // float 64 -- 0xcb
      type = 0xcb;
      token[type](encoder, value);
      return;
    } else if (-0x20 <= ivalue && ivalue <= 0x7F) {
      // positive fixint -- 0x00 - 0x7f
      // negative fixint -- 0xe0 - 0xff
      type = ivalue & 0xFF;
    } else if (0 <= ivalue) {
      // uint 8 -- 0xcc
      // uint 16 -- 0xcd
      // uint 32 -- 0xce
      type = (ivalue <= 0xFF) ? 0xcc : (ivalue <= 0xFFFF) ? 0xcd : 0xce;
    } else {
      // int 8 -- 0xd0
      // int 16 -- 0xd1
      // int 32 -- 0xd2
      type = (-0x80 <= ivalue) ? 0xd0 : (-0x8000 <= ivalue) ? 0xd1 : 0xd2;
    }
    token[type](encoder, ivalue);
  }

  // uint 64 -- 0xcf
  function uint64(encoder, value) {
    var type = 0xcf;
    token[type](encoder, value.toArray());
  }

  // int 64 -- 0xd3
  function int64(encoder, value) {
    var type = 0xd3;
    token[type](encoder, value.toArray());
  }

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  // fixstr -- 0xa0 - 0xbf
  function str_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFF) ? 2 : (length <= 0xFFFF) ? 3 : 5;
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFFFF) ? 3 : 5;
  }

  function _string(head_size) {
    return string;

    function string(encoder, value) {
      // prepare buffer
      var length = value.length;
      var maxsize = 5 + length * 3;
      encoder.offset = encoder.reserve(maxsize);
      var buffer = encoder.buffer;

      // expected header size
      var expected = head_size(length);

      // expected start point
      var start = encoder.offset + expected;

      // write string
      length = BufferProto.write.call(buffer, value, start);

      // actual header size
      var actual = head_size(length);

      // move content when needed
      if (expected !== actual) {
        var targetStart = start + actual - expected;
        var end = start + length;
        BufferProto.copy.call(buffer, buffer, targetStart, start, end);
      }

      // write header
      var type = (actual === 1) ? (0xa0 + length) : (actual <= 3) ? (0xd7 + actual) : 0xdb;
      token[type](encoder, length);

      // move cursor
      encoder.offset += length;
    }
  }

  function object(encoder, value) {
    // null
    if (value === null) return nil(encoder, value);

    // Buffer
    if (isBuffer(value)) return bin(encoder, value);

    // Array
    if (IS_ARRAY(value)) return array(encoder, value);

    // int64-buffer objects
    if (Uint64BE.isUint64BE(value)) return uint64(encoder, value);
    if (Int64BE.isInt64BE(value)) return int64(encoder, value);

    // ext formats
    var packer = encoder.codec.getExtPacker(value);
    if (packer) value = packer(value);
    if (value instanceof ExtBuffer) return ext(encoder, value);

    // plain old Objects or Map
    map(encoder, value);
  }

  function object_raw(encoder, value) {
    // Buffer
    if (isBuffer(value)) return raw(encoder, value);

    // others
    object(encoder, value);
  }

  // nil -- 0xc0
  function nil(encoder, value) {
    var type = 0xc0;
    token[type](encoder, value);
  }

  // fixarray -- 0x90 - 0x9f
  // array 16 -- 0xdc
  // array 32 -- 0xdd
  function array(encoder, value) {
    var length = value.length;
    var type = (length < 16) ? (0x90 + length) : (length <= 0xFFFF) ? 0xdc : 0xdd;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    for (var i = 0; i < length; i++) {
      encode(encoder, value[i]);
    }
  }

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  function bin_buffer(encoder, value) {
    var length = value.length;
    var type = (length < 0xFF) ? 0xc4 : (length <= 0xFFFF) ? 0xc5 : 0xc6;
    token[type](encoder, length);
    encoder.send(value);
  }

  function bin_arraybuffer(encoder, value) {
    bin_buffer(encoder, new Uint8Array(value));
  }

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  function ext(encoder, value) {
    var buffer = value.buffer;
    var length = buffer.length;
    var type = extmap[length] || ((length < 0xFF) ? 0xc7 : (length <= 0xFFFF) ? 0xc8 : 0xc9);
    token[type](encoder, length);
    uint8[value.type](encoder);
    encoder.send(buffer);
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function obj_to_map(encoder, value) {
    var keys = Object.keys(value);
    var length = keys.length;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    keys.forEach(function(key) {
      encode(encoder, key);
      encode(encoder, value[key]);
    });
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function map_to_map(encoder, value) {
    if (!(value instanceof Map)) return obj_to_map(encoder, value);

    var length = value.size;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    value.forEach(function(val, key, m) {
      encode(encoder, key);
      encode(encoder, val);
    });
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw(encoder, value) {
    var length = value.length;
    var type = (length < 32) ? (0xa0 + length) : (length <= 0xFFFF) ? 0xda : 0xdb;
    token[type](encoder, length);
    encoder.send(value);
  }
}


/***/ }),

/***/ "../node_modules/msgpack-lite/lib/write-uint8.js":
/*!*******************************************************!*\
  !*** ../node_modules/msgpack-lite/lib/write-uint8.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// write-unit8.js

var constant = exports.uint8 = new Array(256);

for (var i = 0x00; i <= 0xFF; i++) {
  constant[i] = write0(i);
}

function write0(type) {
  return function(encoder) {
    var offset = encoder.reserve(1);
    encoder.buffer[offset] = type;
  };
}


/***/ }),

/***/ "./entries.js":
/*!********************!*\
  !*** ./entries.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var { api, utils, meta } = __webpack_require__(/*! ../libs/consts.js */ "../libs/consts.js"),
	UI = __webpack_require__(/*! ../libs/ui */ "../libs/ui/index.js"),
	Keybind = __webpack_require__(/*! ../libs/keybind */ "../libs/keybind.js"),
	config = new UI.Config('Zynx BETA', 'config'),
	binds = {
		toggle: new Keybind().add_callback(() => {
			if(config.visible)config.hide();
			else document.exitPointerLock(), config.show();
		}),
	};

config.css_editor = new UI.Editor({
	help: [
		`<h3>Glossary:</h3><ul>`,
			`<li>Menu bar - set of buttons found in the top left of the panel.</li>`,
		`</ul>`,
		`<h3>What does this menu do?</h3>`,
		`<p>This is a CSS manager/ide for Krunker.</p>`,
		`<h3>How do I add my CSS?</h3>`,
		`<p>1. Press the svg.web button found in the menu bar.</p>`,
		`<p>2. In the new window, input the link to your CSS then press OK.</p>`,
		// `<p>3. Reload by pressing the svg.reload button in the menu bar.</p>`,
		`<h3>How do I manually add CSS?</h3>`,
		`<p>1. Create a new file with the svg.add_file button found in the top right of the CSS manager.<p>`,
		`<p>2. In the text editor, input your CSS.<p>`,
		`<p>3. When you are finished, press the svg.save button to save changes.<p>`,
		// `<p>4. Reload by pressing the svg.reload button in the menu bar.</p>`,
		'<h3>How do I turn on/off my CSS?</h3>',
		`<p>Pressing the square icon in your CSS's tab will toggle the visibility. When the square is filled, the tab is enabled, when the square is empty, the tab is disabled.<p>`,
		'<h3>How do I rename my CSS?</h3>',
		`<p>Pressing the svg.rename icon in your CSS's tab will change the tab to renaming mode. Type in the new name then press enter to save changes.<p>`,
		'<h3>How do I remove my CSS?</h3>',
		`<p>Pressing the svg.close icon in your CSS's tab will remove your CSS.<p>`,
		`<p>For further help, search or post on the forum found by <a target="_blank" href="${meta.forum}">clicking here</a>.<p>`,
	].join(''),
});

config.add_preset('Default', {
	binds: {
		reverse_cam: 'KeyF',
		toggle: 'KeyC',
		aim: 'Digit3',
		bhop: 'Digit4',
		esp: 'Digit6',
		overlay: 'Digit7',
	},
	aim: {
		status: 'off',
		offset: 'random',
		target_sorting: 'dist2d',
		smooth: 0.2,
		hitchance: 100,
		// percentage of screen
		fov_box: false,
		fov: 60,
	},
	color: {
		risk: '#FF7700',
		hostile: '#FF0000',
		friendly: '#00FF00',
	},
	esp: {
		wireframe: false,
		status: 'off',
		walls: 100,
		labels: false,
		tracers: false,
	},
	game: {
		auto_nuke: false,
		auto_lobby: false,
		auto_start: false,
		inactivity: true,
		custom_loading: true,
		inactivity: true,
	},
	player: {
		bhop: 'off',
		skins: false,
	},
});

var render = config.add_tab('Render');

render.add_control('ESP Mode', {
	name: 'ESP Mode',
	type: 'rotate',
	walk: 'esp.status',
	key: 'binds.esp',
	value: {
		off: 'Off',
		box: 'Box',
		chams: 'Chams',
		box_chams: 'Box & Chams',
		full: 'Full',
	},
});

render.add_control('Draw FOV box', {
	type: 'boolean',
	walk: 'aim.fov_box',
});

render.add_control('Nametags', {
	type: 'boolean',
	walk: 'esp.nametags',
});

render.add_control('Tracers', {
	type: 'boolean',
	walk: 'esp.tracers',
});

render.add_control('Wireframe', {
	type: 'boolean',
	walk: 'esp.wireframe',
});

render.add_control('Wall Opacity', {
	type: 'slider',
	walk: 'esp.walls',
	min: 0,
	max: 100,
	step: 10,
});

render.add_control('Overlay', {
	type: 'boolean',
	walk: 'game.overlay',
	key: 'binds.overlay',
});

var weapon = config.add_tab('Weapon');

weapon.add_control('Aimbot Mode', {
	type: 'rotate',
	walk: 'aim.status',
	value: {
		off: 'Off',
		trigger: 'Triggerbot',
		correction: 'Correction',
		assist: 'Assist',
		auto: 'Automatic',
	},
	key: 'binds.aim',
});

weapon.add_control('Target', {
	type: 'rotate',
	walk: 'aim.offset',
	value: {
		head: 'Head',
		torso: 'Torso',
		legs: 'Legs',
		random: 'Random',
	},
});

weapon.add_control('Target Sorting', {
	type: 'rotate',
	walk: 'aim.target_sorting',
	value: {
		dist2d: 'Crosshair',
		dist3d: 'Distance',
		hp: 'Health',
	},
});

weapon.add_control('Target FOV', {
	type: 'slider',
	walk: 'aim.fov',
	min: 10,
	max: 110,
	step: 10,
	labels: {
		110: 'Inf',
	},
});

weapon.add_control('Smoothness', {
	type: 'slider',
	walk: 'aim.smooth',
	min: 0,
	max: 1,
	step: 0.2,
	labels: { 0: 'Off' },
});

weapon.add_control('Hitchance', {
	type: 'slider',
	walk: 'aim.hitchance',
	min: 10,
	max: 100,
	step: 10,
});

weapon.add_control('Auto reload', {
	type: 'boolean',
	walk: 'aim.auto_reload',
});

weapon.add_control('Wallbangs', {
	type: 'boolean',
	walk: 'aim.wallbangs',
});

var player = config.add_tab('Player');

player.add_control('Auto Bhop Mode', {
	type: 'rotate',
	walk: 'player.bhop',
	value: {
		off: 'Off',
		keyjump: 'Key Jump',
		keyslide: 'Key Slide',
		autoslide: 'Auto Slide',
		autojump: 'Auto Jump',
	},
	key: 'binds.bhop',
});

player.add_control('Unlock Skins', {
	type: 'boolean',
	walk: 'player.skins',
});

render.add_control('Custom CSS', {
	type: 'function',
	value(){ config.css_editor.show() },
});

var game = config.add_tab('Game');

game.add_control('Custom Loading Screen', {
	type: 'boolean',
	walk: 'game.custom_loading',
});

game.add_control('Auto Activate Nuke', {
	type: 'boolean',
	walk: 'game.auto_nuke',
});

game.add_control('Auto Start Match', {
	type: 'boolean',
	walk: 'game.auto_start',
});

game.add_control('New Lobby Finder', {
	type: 'boolean',
	walk: 'game.auto_lobby',
});

game.add_control('No Inactivity kick', {
	type: 'boolean',
	walk: 'game.inactivity',
});

var info = config.add_tab('Info');

info.add_control('GitHub', {
	type: 'link',
	value: meta.github,
});

info.add_control('Discord', {
	type: 'link',
	value: meta.discord,
});

info.add_control('Forum', {
	type: 'link',
	value: meta.forum,
});

info.add_control('Download Game', {
	type: 'link',
	value: api.resolve({
		target: api.api_v2,
		endpoint: 'source',
		query: { download: true },
	}),
});

info.add_control('Reset Settings', {
	type: 'function',
	value(){ config.load_preset('Default') },
});

var interf = config.add_tab('Interface');

interf.add_control('Menu Toggle', {
	type: 'keybind',
	walk: 'binds.toggle',
}).on('change', value => binds.toggle.set_key('F1', value));

module.exports = config;

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var UI = __webpack_require__(/*! ../libs/ui/ */ "../libs/ui/index.js"),
	vars = __webpack_require__(/*! ../libs/vars */ "../libs/vars.js"),
	Visual = __webpack_require__(/*! ../libs/visual */ "../libs/visual.js"),
	Input = __webpack_require__(/*! ../libs/input */ "../libs/input.js"),
	Socket = __webpack_require__(/*! ../libs/socket */ "../libs/socket.js"),
	Player = __webpack_require__(/*! ../libs/player */ "../libs/player.js"),
	{ utils, proxy_addons, supported_store, addon_url, meta, api, store } = __webpack_require__(/*! ../libs/consts */ "../libs/consts.js");

class Main {
	constructor(){
		this.hooked = Symbol();
		this.skins = [...Array(5000)].map((e, i) => ({ ind: i, cnt: 1 }));

		var self = this;

		this.interface = {
			get game(){
				return self.game;
			},
			get controls(){
				return self.controls;
			},
			get player(){
				return self.player;
			},
			get target(){
				return self.target;
			},
			get players(){
				return this.game.players.list.map(ent => this.add(ent));
			},
			get esp(){
				return self.config.esp.status;
			},
			get wireframe(){
				return self.config.player.wireframe;
			},
			get walls(){
				return self.config.esp.walls;
			},
			get bhop(){
				return self.config.player.bhop;
			},
			get aim(){
				return self.config.aim.status;
			},
			get aim_smooth(){
				return self.config.aim.smooth;
			},
			get hitchance(){
				return self.config.aim.hitchance;
			},
			get auto_reload(){
				return self.config.aim.auto_reload;
			},
			get unlock_skins(){
				return self.config.player.skins;
			},
			pick_target(){
				self.target = self.players.filter(player => player.can_target).sort((ent_1, ent_2) => self.sorts[ent_1.rect && ent_2.rect ? self.config.aim.target_sorting || 'dist2d' : 'dist3d'](ent_1, ent_2) * (ent_1.frustum ? 1 : 0.5))[0];
			},
		};

		this.sorts = {
			dist3d: (ent_1, ent_2) => {
				return ent_1.distance_camera - ent_2.distance_camera;
			},
			dist2d: (ent_1, ent_2) => {
				return utils.dist_center(ent_1.rect) - utils.dist_center(ent_2.rect);
			},
			hp: (ent_1, ent_2) => {
				return ent_1.health - ent_2.health;
			},
		};
	}
	async load(){
		var source = api.source(),
			token = api.token();

		utils.canvas = UI.canvas;

		this.ui = __webpack_require__(/*! ./entries */ "./entries.js");

		await this.ui.load_config();

		// migrate
		if(typeof this.config.aim.smooth == 'object')this.config.aim.smooth = this.config.aim.smooth.value;
		if(this.config.aim.smooth > 1)this.config.aim.smooth = 0;
		if(typeof this.config.esp.walls == 'object')this.config.esp.walls = 100;

		if(this.config.aim.target == 'feet')this.config.aim.target == 'legs';
		else if(this.config.aim.target == 'chest')this.config.aim.target == 'torso';

		if(this.config.game.custom_loading){
			var loading = new UI.Loading(meta.discord, 'https://imgr.search.brave.com/tT2m683w5-KmOyHbwMAQrGBvRZ-cgfSMRDCFz7i_zUY/fit/640/640/ce/1/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy80ODcw/YmQwYmNiYzQ5MGUy/NjY4ZTM3ZDc5ZmI1/MzY1OS90ZW5vci5n/aWY_aXRlbWlkPTE0/NTIyMTIw.gif');

			token.finally(() => loading.hide());
		}

		api.on_instruct = () => {
			if(api.has_instruct('connection banned 0x2'))localStorage.removeItem('krunker_token'), UI.alert([
				`<p>You were IP banned, ZYNX has signed you out.\nSpoof your IP to bypass this ban with one of the following:</p>`,
				`<ul>`,
					`<li>Using your mobile hotspot</li>`,
					...proxy_addons.filter(data => data[supported_store]).map(data => `<li><a target='_blank' href=${JSON.stringify(data[supported_store])}>${data.name}</a></li>`),
					`<li>Use a <a target="_blank" href=${JSON.stringify(addon_url('Proxy VPN'))}>Search for a VPN</a></li>`,
				`</ul>`,
			].join(''));
			else if(api.has_instruct('banned'))localStorage.removeItem('krunker_token'), UI.alert(
				`<p>You were banned, ZYNX has signed you out.\nCreate a new account to bypass this ban.</p>`,
			);
			else if(this.config.game.auto_lobby && api.has_instruct('connection error', 'game is full', 'kicked by vote', 'disconnected'))location.href = '/';
			else if(this.config.game.auto_start && api.has_instruct('to play') && (!this.player || !this.player.active)){
				this.controls.locklessChange(true);
				this.controls.locklessChange(false);
			}
		};

		this.visual = new Visual(this.interface);

		var self = this,
			socket = Socket(this.interface),
			input = new Input(this.interface),
			args = {
			[ vars.key ]: {
				three(three){ utils.three = three },
				game: game => Object.defineProperty(this.game = utils.game = game, 'controls', {
					configurable: true,
					set(controls){
						// delete definition
						delete game.controls;

						var timer = 0;

						Object.defineProperty(controls, 'idleTimer', {
							get: _ => self.config.game.inactivity ? 0 : timer,
							set: value => timer = value,
						});

						return self.controls = game.controls = controls;
					},
				}),
				world: world => this.world = utils.world = world,
				can_see: inview => this.config.esp.status == 'full' ? false : (this.config.esp.nametags || inview),
				skins: ent => this.config.player.skins && typeof ent == 'object' && ent != null && ent.stats ? this.skins : ent.skins,
				input: input.push.bind(input),
				timer: (object, property, timer) => Object.defineProperty(object, property, {
					get: _ => this.config.game.inactivity ? 0 : timer,
					set: value => this.config.game.inactivity ? Infinity : timer,
				}),
			},
			WebSocket: socket,
			WP_fetchMMToken: token,
		};

		this.process();

		await api.load;

		new Function(...Object.keys(args), vars.patch(await source))(...Object.values(args));
	}
	process(){
		try{
			this.visual.tick(UI);

			if(this.config.game.overlay)this.visual.overlay();

			if(this.config.aim.fov_box)this.visual.fov(this.config.aim.fov);

			if(this.game && this.world){
				this.visual.walls();

				for(let player of this.players){
					if(player.is_you)this.player = player;

					if(!player.active)continue;

					player.tick();

					if(!player.frustum || player.is_you)continue;

					this.visual.cham(player);

					if(['box', 'box_chams', 'full'].includes(this.config.esp.status))this.visual.box(player);

					if(this.config.esp.status == 'full'){
						this.visual.health(player);
						this.visual.text(player);
					}

					if(this.config.esp.tracers)this.visual.tracer(player);
				}
			}
		}catch(err){
			api.report_error('frame', err);
		}

		utils.request_frame(() => this.process());
	}
	get config(){
		return this.ui.config;
	}
	get players(){
		return this.game.players.list.map(ent => this.add(ent));
	}
	add(entity){
		return entity[this.hooked] || (entity[this.hooked] = new Player(this, entity));
	}
};

var main = module.exports = new Main();

main.load();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/


var { krunker, extracted } = __webpack_require__(/*! ../libs/consts */ "../libs/consts.js"),
	Updater = __webpack_require__(/*! ../libs/updater */ "../libs/updater.js"),
	updater = new Updater('https://discord.gg/ANettma6ZZ', extracted);

if(krunker){
	if(typeof DO_UPDATES != 'boolean' || DO_UPDATES == true)window.addEventListener('load', () => updater.watch(() => {
		if(confirm('A new Zynx version is available, do you wish to update?'))updater.update();
	}, 60e3 * 3));

	__webpack_require__(/*! ./main */ "./main.js");
}
})();

/******/ })()
;