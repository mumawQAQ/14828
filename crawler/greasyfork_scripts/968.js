/* eslint-disable no-multi-spaces */

// ==UserScript==
// @name               ASMR Online 一键下载
// @name:zh-CN         ASMR Online 一键下载
// @name:en            ASMR Online Work Downloader
// @namespace          ASMR-ONE
// @version            0.7
// @description        一键下载asmr.one上的整个作品，包括全部的文件和目录结构
// @description:zh-CN  一键下载asmr.one上的整个作品，包括全部的文件和目录结构
// @description:en     Download all folders and files for current work on asmr.one in one click
// @author             PY-DNG
// @license            MIT
// @match              https://www.asmr.one/*
// @match              https://www.asmr-100.com/*
// @require            https://greasyfork.org/scripts/458132-itemselector/code/ItemSelector.js?version=1138364
// @icon               https://www.asmr.one/statics/app-logo-128x128.png
// @grant              GM_download
// @grant              GM_registerMenuCommand
// ==/UserScript==

/* global ItemSelector structuredClone */
(function __MAIN__() {
    'use strict';

	// function DoLog() {}
	// Arguments: level=LogLevel.Info, logContent, trace=false
	const [LogLevel, DoLog] = (function() {
		const LogLevel = {
			None: 0,
			Error: 1,
			Success: 2,
			Warning: 3,
			Info: 4,
		};

		return [LogLevel, DoLog];
		function DoLog() {
			// Get window
			const win = (typeof(unsafeWindow) === 'object' && unsafeWindow !== null) ? unsafeWindow : window;

			const LogLevelMap = {};
			LogLevelMap[LogLevel.None] = {
				prefix: '',
				color: 'color:#ffffff'
			}
			LogLevelMap[LogLevel.Error] = {
				prefix: '[Error]',
				color: 'color:#ff0000'
			}
			LogLevelMap[LogLevel.Success] = {
				prefix: '[Success]',
				color: 'color:#00aa00'
			}
			LogLevelMap[LogLevel.Warning] = {
				prefix: '[Warning]',
				color: 'color:#ffa500'
			}
			LogLevelMap[LogLevel.Info] = {
				prefix: '[Info]',
				color: 'color:#888888'
			}
			LogLevelMap[LogLevel.Elements] = {
				prefix: '[Elements]',
				color: 'color:#000000'
			}

			// Current log level
			DoLog.logLevel = (win.isPY_DNG && win.userscriptDebugging) ? LogLevel.Info : LogLevel.Warning; // Info Warning Success Error

			// Log counter
			DoLog.logCount === undefined && (DoLog.logCount = 0);

			// Get args
			let [level, logContent, trace] = parseArgs([...arguments], [
				[2],
				[1,2],
				[1,2,3]
			], [LogLevel.Info, 'DoLog initialized.', false]);

			// Log when log level permits
			if (level <= DoLog.logLevel) {
				let msg = '%c' + LogLevelMap[level].prefix + (typeof GM_info === 'object' ? `[${GM_info.script.name}]` : '') + (LogLevelMap[level].prefix ? ' ' : '');
				let subst = LogLevelMap[level].color;

				switch (typeof(logContent)) {
					case 'string':
						msg += '%s';
						break;
					case 'number':
						msg += '%d';
						break;
					default:
						msg += '%o';
						break;
				}

				if (++DoLog.logCount > 512) {
					console.clear();
					DoLog.logCount = 0;
				}
				console[trace ? 'trace' : 'log'](msg, subst, logContent);
			}
		}
	}) ();

	const CONST = {
		HTML: {
			DownloadButton: `
				<button tabindex="0" type="button" id="download-btn"
						class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-cyan q-mt-sm shadow-4 q-mx-xs q-px-sm text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--dense">
					<span class="q-focus-helper"></span><span class="q-btn__wrapper col row q-anchor--skip"><span
						class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="block" id="download-btn-inner">DOWNLOAD</span></span></span>
				</button>
			`
		},
		Text: {
			DownloadFolder: 'ASMR-ONE',
			WorkFolder: '{RJ} - {WorkName}',
			DownloadButton: 'Download',
			DownloadButton_Working: 'Downloading({Done}/{All})',
			DownloadButton_Done: 'Download(Finished)',
			SelectDownloadFiles: '选择下载的文件：',
			RootFolder: 'Root',
			Prefix_File: '[文件] ',
			Prefix_Folder: '[文件夹] '
		},
		Number: {
			Max_Download: 2,
			Interval: 500,
			GUITextChangeDelay: 1500
		}
	}
	GM_registerMenuCommand('导出调试包', debugInfo);

	// Init
	const IS = initItemSelector();
	GMDLHook(CONST.Number.Max_Download);

	main();
	function main() {
		// Wait for document.body
		if (!document.body) {
			setTimeout(main, CONST.Number.Interval);
			return false;
		}

		// Commons

		// Page functions
		const ITM = new IntervalTaskManager();
		const pageChangeDetecter = (function(callback, emitOnInit=false) {
			let href = location.href;
			let host = location.host;
			let pathname = location.pathname;
			emitOnInit && callback(null, href);
			return function detecter() {
				const new_href = location.href;
				let new_host = location.host;
				let new_pathname = location.pathname;
				if (host !== new_host || pathname !== new_pathname) {
					callback(href, new_href);
					href = new_href;
					host = new_host;
					pathname = new_pathname;
				}
			}
		}) (deliverPageFuncs, true);
		ITM.time = CONST.Number.Interval;
		ITM.addTask(pageChangeDetecter);
		ITM.start();

		function deliverPageFuncs(href, new_href) {
			DoLog('Delivering page funcs for ' + new_href);
			const pageFuncs = [{
				reg: /^\/work\/RJ\d+/,
				func: pageWork,
				checker: '#work-tree'
			}];
			for (const pageFunc of pageFuncs) {
				test_exec(pageFunc);
			}

			function test_exec(pageFunc) {
				pageFunc.reg.test(location.pathname) && ((pageFunc.checker ? ({
					'string': () => ($(pageFunc.checker)),
					'function': pageFunc.checker,
				})[typeof pageFunc.checker]() : true) ? true : (setTimeout(test_exec.bind(null, pageFunc), CONST.Number.Interval), DoLog('waiting: ' + location.href), false)) && pageFunc.func(href, new_href);
			}
		}
	}

	function pageWork() {
		// Make button
		const downloadBtn = htmlElm(CONST.HTML.DownloadButton);
		const downloadBtn_inner = $(downloadBtn, '#download-btn-inner');
		$(".q-pa-sm").appendChild(downloadBtn);
		downloadBtn.addEventListener('click', batchDownload);

		function batchDownload() {
			const count = {done: 0, all: 0};
			const DATA = 'Original-Item-Properties-Data_' + randstr();
			request(getid(), function(e) {
				const list = JSON.parse(e.target.responseText);
				const json = list2json(list);
				IS.show(json, {
					title: CONST.Text.SelectDownloadFiles,
					onok: (e, json) => {
						const list = json2list(json);
						for (const item of list) {
							dealItem(item);
						}
					}
				});
			});

			function list2json(list) {
				list = structuredClone(list);
				const json = {text: CONST.Text.RootFolder, children: [], [DATA]: {}};
				for (const item of list) {
					json.children.push(convert(item));
				}
				return json;

				function convert(item) {
					const json = {};
					switch (item.type) {
						case 'folder': {
							json.text = CONST.Text.Prefix_Folder + item.title;
							json.children = item.children.map(child => convert(child));
							break;
						}
						case 'audio':
						case 'text':
						case 'image':
						case 'other': {
							json.text = CONST.Text.Prefix_File + item.title;
							break;
						}
						default:
							//debugger;
							DoLog(LogLevel.Warning, 'Unknown item type: ' + item.type);
					}
					json[DATA] = item;
					delete json[DATA].children;
					return json;
				}
			}

			function json2list(json) {
				if (json === null) {return [];}
				json = structuredClone(json);
				const root_item = convert(json);
				const list = root_item.children;
				return list;

				function convert(json) {
					const item = json[DATA];
					if (Array.isArray(json.children)) {
						item.children = [];
						for (const child of json.children) {
							item.children.push(convert(child));
						}
					}
					return item;
				}
			}

			function dealItem(item, path=[]) {
				switch (item.type) {
					case 'folder': {
						for (const child of item.children) {
							dealItem(child, path.concat([item.title]));
						}
						break;
					}
					case 'audio':
					case 'text':
					case 'image':
					case 'other': {
						const sep = getOSSep();
						const _sep = ({'/': '／', '\\': '＼'})[sep];
						const url = item.mediaDownloadUrl;
						const RJ = location.pathname.split('/').pop();
						const name = [CONST.Text.DownloadFolder].concat([replaceText(CONST.Text.WorkFolder, {'{RJ}': RJ, '{WorkName}': item.workTitle})]).concat(path).concat([item.title]).map((name) => (name.replaceAll(sep, _sep))).join(sep);
						DoLog([name, url, item]);
						dl(url, name);
						count.all++;
						display();
						break;
					}
					default:
						//debugger;
						DoLog(LogLevel.Warning, 'Unknown item type: ' + item.type);
				}
			}

			function dl(url, name, retry=3) {
				GM_download({
					url: url,
					name: name,
					onload: function(e) {
						count.done++;
						display();
					},
					onerror: function() {
						--retry > 0 && dl(url, name, retry);
					}
				});
			}

			function display() {
				downloadBtn_inner.innerText = replaceText(CONST.Text.DownloadButton_Working, {'{Done}': count.done, '{All}': count.all});
				count.done === count.all && setTimeout(() => (downloadBtn_inner.innerText = CONST.Text.DownloadButton_Done), CONST.Number.GUITextChangeDelay);
			}
		}
	}

	function request(id, onload) {
		const url = `https://api.${location.host.match(/[^.]+\.([^.]+\.[^.]+)/)[1]}/api/tracks/` + id;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = onload;
		xhr.send();
	}

	function getid() {
		return location.pathname.split('/').pop().substring(2);
	}

	function initItemSelector() {
		const IS = new ItemSelector();
		const observer = new MutationObserver(setTheme);
		observer.observe(document.body, {attributes: true, attributeFilter: ['class']});
		setTheme();
		return IS;

		function setTheme() {
			IS.setTheme([...document.body.classList].includes('body--dark') ? 'dark' : 'light');
		}
	}

	function debugInfo() {
		const win = typeof unsafeWindow === 'object' ? unsafeWindow : window;
		const DebugInfo = {
			version: GM_info.script.version,
			GM_info: GM_info,
			platform: navigator.platform,
			userAgent: navigator.userAgent,
			getOS: getOS(),
			getOSSep: getOSSep(),
			url: location.href,
			topurl: win.top.location.href,
			iframe: win.top !== win,
			languages: [...navigator.languages],
			timestamp: (new Date()).getTime()
		};

		// Log in console
		DoLog(LogLevel.Debug, '=== Userscript [' + GM_info.script.name + '] debug info ===');
		DoLog(LogLevel.Debug, DebugInfo);
		DoLog(LogLevel.Debug, '=== /Userscript [' + GM_info.script.name + '] debug info ===');

		// Save to file
		downloadText(JSON.stringify(DebugInfo), 'Debug Info_' + GM_info.script.name + '_' + (new Date()).getTime().toString() + '.json');

		// Save text to textfile
		function downloadText(text, name) {
			if (!text || !name) {return false;};

			// Get blob url
			const blob = new Blob([text],{type:"text/plain;charset=utf-8"});
			const url = URL.createObjectURL(blob);

			// Create <a> and download
			const a = $CrE('a');
			a.href = url;
			a.download = name;
			a.click();
		}
	}

	// Basic functions
	// querySelector
	function $() {
		switch(arguments.length) {
			case 2:
				return arguments[0].querySelector(arguments[1]);
				break;
			default:
				return document.querySelector(arguments[0]);
		}
	}
	// querySelectorAll
	function $All() {
		switch(arguments.length) {
			case 2:
				return arguments[0].querySelectorAll(arguments[1]);
				break;
			default:
				return document.querySelectorAll(arguments[0]);
		}
	}
	// createElement
	function $CrE() {
		switch(arguments.length) {
			case 2:
				return arguments[0].createElement(arguments[1]);
				break;
			default:
				return document.createElement(arguments[0]);
		}
	}
	// Object1[prop] ==> Object2[prop]
	function copyProp(obj1, obj2, prop) {obj1[prop] !== undefined && (obj2[prop] = obj1[prop]);}
	function copyProps(obj1, obj2, props) {(props || Object.keys(obj1)).forEach((prop) => (copyProp(obj1, obj2, prop)));}

	// Get a url argument from lacation.href
	// also recieve a function to deal the matched string
	// returns defaultValue if name not found
    // Args: {url=location.href, name, dealFunc=((a)=>{return a;}), defaultValue=null} or 'name'
	function getUrlArgv(details) {
        typeof(details) === 'string'    && (details = {name: details});
        typeof(details) === 'undefined' && (details = {});
        if (!details.name) {return null;};

        const url = details.url ? details.url : location.href;
        const name = details.name ? details.name : '';
        const dealFunc = details.dealFunc ? details.dealFunc : ((a)=>{return a;});
        const defaultValue = details.defaultValue ? details.defaultValue : null;
		const matcher = new RegExp('[\\?&]' + name + '=([^&#]+)');
		const result = url.match(matcher);
		const argv = result ? dealFunc(result[1]) : defaultValue;

		return argv;
	}

	function htmlElm(html) {
		const parent = $CrE('div');
		parent.innerHTML = html;
		return parent.children.length > 1 ? Array.from(parent.children) : parent.children[0];
	}

	// GM_DL HOOK: The number of running GM_DLs in a time must under maxXHR
	// Returns the abort function to stop the request anyway(no matter it's still waiting, or requesting)
	// (If the request is invalid, such as url === '', will return false and will NOT make this request)
	// If the abort function called on a request that is not running(still waiting or finished), there will be NO onabort event
	// Requires: function delItem(){...} & function uniqueIDMaker(){...}
	function GMDLHook(maxXHR=5) {
		const GM_DL = GM_download;
		const getID = uniqueIDMaker();
		let todoList = [], ongoingList = [];
		GM_download = safeGMdl;

		function safeGMdl() {
			// Get an id for this request, arrange a request object for it.
			const id = getID();
			const request = {id: id, args: Array.from(arguments), aborter: null};

			// Transform (url, name) into {url: url, name: name}
			convertArgs(request);

			// Deal onload function first
			dealEndingEvents(request);

			/* DO NOT DO THIS! KEEP ITS ORIGINAL PROPERTIES!
			// Stop invalid requests
			if (!validCheck(request)) {
				return false;
			}
			*/

			// Judge if we could start the request now or later?
			todoList.push(request);
			checkDL();
			return makeAbortFunc(id);

			// Transform (url, name) into {url: url, name: name}
			function convertArgs(request) {
				if (request.args.length === 2) {
					request.args = [{
						url: request.args[0],
						name: request.args[1]
					}];
				}
			}

			// Decrease activeXHRCount while GM_DL onload;
			function dealEndingEvents(request) {
				const e = request.args[0];

				// onload event
				const oriOnload = e.onload;
				e.onload = function() {
					reqFinish(request.id);
					checkDL();
					oriOnload ? oriOnload.apply(null, arguments) : function() {};
				}

				// onerror event
				const oriOnerror = e.onerror;
				e.onerror = function() {
					reqFinish(request.id);
					checkDL();
					oriOnerror ? oriOnerror.apply(null, arguments) : function() {};
				}

				// ontimeout event
				const oriOntimeout = e.ontimeout;
				e.ontimeout = function() {
					reqFinish(request.id);
					checkDL();
					oriOntimeout ? oriOntimeout.apply(null, arguments) : function() {};
				}

				// onabort event
				const oriOnabort = e.onabort;
				e.onabort = function() {
					reqFinish(request.id);
					checkDL();
					oriOnabort ? oriOnabort.apply(null, arguments) : function() {};
				}
			}

			// Check if the request is invalid
			function validCheck(request) {
				const e = request.args[0];

				if (!e.url) {
					return false;
				}

				return true;
			}

			// Call a XHR from todoList and push the request object to ongoingList if called
			function checkDL() {
				if (ongoingList.length >= maxXHR) {return false;};
				if (todoList.length === 0) {return false;};
				const req = todoList.shift();
				const reqArgs = req.args;
				const aborter = GM_DL.apply(null, reqArgs);
				req.aborter = aborter;
				ongoingList.push(req);
				return req;
			}

			// Make a function that aborts a certain request
			function makeAbortFunc(id) {
				return function() {
					let i;

					// Check if the request haven't been called
					for (i = 0; i < todoList.length; i++) {
						const req = todoList[i];
						if (req.id === id) {
							// found this request: haven't been called
							delItem(todoList, i);
							return true;
						}
					}

					// Check if the request is running now
					for (i = 0; i < ongoingList.length; i++) {
						const req = todoList[i];
						if (req.id === id) {
							// found this request: running now
							req.aborter();
							reqFinish(id);
							checkDL();
						}
					}

					// Oh no, this request is already finished...
					return false;
				}
			}

			// Remove a certain request from ongoingList
			function reqFinish(id) {
				let i;
				for (i = 0; i < ongoingList.length; i++) {
					const req = ongoingList[i];
					if (req.id === id) {
						ongoingList = delItem(ongoingList, i);
						return true;
					}
				}
				return false;
			}
		}
	}

	// Makes a function that returns a unique ID number each time
	function uniqueIDMaker() {
		let id = 0;
		return makeID;
		function makeID() {
			id++;
			return id;
		}
	}

	// Del a item from an array using its index. Returns the array but can NOT modify the original array directly!!
	function delItem(arr, delIndex) {
		arr = arr.slice(0, delIndex).concat(arr.slice(delIndex+1));
		return arr;
	}

	function getOSSep() {
		return ({
			'Windows': '\\',
			'Mac': '/',
			'Linux': '/',
			'Null': '-'
		})[getOS()];
	}

	function getOS() {
		const info = (navigator.platform || navigator.userAgent).toLowerCase();
		const test = (s) => (info.includes(s));
		const map = {
			'Windows': ['window', 'win32', 'win64', 'win86'],
			'Mac': ['mac', 'os x'],
			'Linux': ['linux']
		}
		for (const [sys, strs] of Object.entries(map)) {
			if (strs.some(test)) {
				return sys;
			}
		}
		return 'Null';
	}

	// Replace model text with no mismatching of replacing replaced text
	// e.g. replaceText('aaaabbbbccccdddd', {'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e'}) === 'bbbbccccddddeeee'
	//      replaceText('abcdAABBAA', {'BB': 'AA', 'AAAAAA': 'This is a trap!'}) === 'abcdAAAAAA'
	//      replaceText('abcd{AAAA}BB}', {'{AAAA}': '{BB', '{BBBB}': 'This is a trap!'}) === 'abcd{BBBB}'
	//      replaceText('abcd', {}) === 'abcd'
	/* Note:
	    replaceText will replace in sort of replacer's iterating sort
	    e.g. currently replaceText('abcdAABBAA', {'BBAA': 'TEXT', 'AABB': 'TEXT'}) === 'abcdAATEXT'
	    but remember: (As MDN Web Doc said,) Although the keys of an ordinary Object are ordered now, this was
	    not always the case, and the order is complex. As a result, it's best not to rely on property order.
	    So, don't expect replaceText will treat replacer key-values in any specific sort. Use replaceText to
	    replace irrelevance replacer keys only.
	*/
	function replaceText(text, replacer) {
		if (Object.entries(replacer).length === 0) {return text;}
		const [models, targets] = Object.entries(replacer);
		const len = models.length;
		let text_arr = [{text: text, replacable: true}];
		for (const [model, target] of Object.entries(replacer)) {
			text_arr = replace(text_arr, model, target);
		}
		return text_arr.map((text_obj) => (text_obj.text)).join('');

		function replace(text_arr, model, target) {
			const result_arr = [];
			for (const text_obj of text_arr) {
				if (text_obj.replacable) {
					const splited = text_obj.text.split(model);
					for (const part of splited) {
						result_arr.push({text: part, replacable: true});
						result_arr.push({text: target, replacable: false});
					}
					result_arr.pop();
				} else {
					result_arr.push(text_obj);
				}
			}
			return result_arr;
		}
	}

	function IntervalTaskManager() {
		const tasks = this.tasks = [];
		this.time = 500;
		this.interval = -1;
		defineProperty(this, 'working', {
			get: () => (this.interval >= 0)
		});

		this.addTask = function(fn) {
			tasks.push(fn);
		}

		this.removeTask = function(fn_idx) {
			const idx = typeof fn_idx === 'number' ? fn_idx : tasks.indexOf(fn_idx)
			tasks.splice(idx, 1)
		}

		this.clearTasks = function() {
			tasks.splice(0, Infinity)
		}

		this.start = function() {
			if (!this.working) {
				this.interval = setInterval(this.do, this.time);
				return true;
			} else {
				return false;
			}
		}

		this.stop = function() {
			if (this.working) {
				clearInterval(this.interval);
				this.interval = -1;
				return true;
			} else {
				return false;
			}
		}

		this.do = function() {
			for (const task of tasks) {
				task();
			}
		}
	}

	function defineProperty(obj, prop, desc) {
		desc.configurable = false;
		desc.enumerable = true;
		Object.defineProperty(obj, prop, desc);
	}

	function parseArgs(args, rules, defaultValues=[]) {
		// args and rules should be array, but not just iterable (string is also iterable)
		if (!Array.isArray(args) || !Array.isArray(rules)) {
			throw new TypeError('parseArgs: args and rules should be array')
		}

		// fill rules[0]
		(!Array.isArray(rules[0]) || rules[0].length === 1) && rules.splice(0, 0, []);

		// max arguments length
		const count = rules.length - 1;

		// args.length must <= count
		if (args.length > count) {
			throw new TypeError(`parseArgs: args has more elements(${args.length}) longer than ruless'(${count})`);
		}

		// rules[i].length should be === i if rules[i] is an array, otherwise it should be a function
		for (let i = 1; i <= count; i++) {
			const rule = rules[i];
			if (Array.isArray(rule)) {
				if (rule.length !== i) {
					throw new TypeError(`parseArgs: rules[${i}](${rule}) should have ${i} numbers, but given ${rules[i].length}`);
				}
				if (!rule.every((num) => (typeof num === 'number' && num <= count))) {
					throw new TypeError(`parseArgs: rules[${i}](${rule}) should contain numbers smaller than count(${count}) only`);
				}
			} else if (typeof rule !== 'function') {
				throw new TypeError(`parseArgs: rules[${i}](${rule}) should be an array or a function.`)
			}
		}

		// Parse
		const rule = rules[args.length];
		let parsed;
		if (Array.isArray(rule)) {
			parsed = [...defaultValues];
			for (let i = 0; i < rule.length; i++) {
				parsed[rule[i]-1] = args[i];
			}
		} else {
			parsed = rule(args, defaultValues);
		}
		return parsed;
	}

	// Returns a random string
	function randstr(length=16, nums=true, cases=true) {
		const all = 'abcdefghijklmnopqrstuvwxyz' + (nums ? '0123456789' : '') + (cases ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '');
		return Array(length).fill(0).reduce(pre => (pre += all.charAt(randint(0, all.length-1))), '');
	}

	function randint(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
})();