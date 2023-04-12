// ==UserScript==
// @name               Show Twitter Blue badges
// @namespace          https://greasyfork.org/ja/scripts/463329-show-twitter-blue-badges
// @version            0.2
// @description        And shows source labels.
// @author             AeamaN
// @contributionURL    bitcoin:1DC6uWJWzzwU3iRJDXhUquv6QAYaRvtfFJ
// @match              https://twitter.com/*
// @match              https://mobile.twitter.com/*
// @match              https://twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/*
// @match              https://mobile.twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/*
// @grant              none
// @run-at             document-idle
// ==/UserScript==

'use strict';

// //////// Settings //////// //
// Substitute TB badge
// when TB without legacy verification
const TB = true;

// Show source labels
// 1. T
// 2. T and (RT)
// 0. Do nothing
// "Show ctime of retweets" v0.6 required for RT
const SSL = 1;

// Loop interval(ms)
const INTL = 1000;
// ///////////////////////// //

const MYNAME = 'stb02';
const LSNAME = 'sctrt06';
const BTKN = 'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs'
           + '=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';
const EBTKN = encodeURIComponent(BTKN);

let s_mutations = true;
let observer = new MutationObserver(function(mutations) {
	s_mutations = mutations;
});

let cookie = { // "https://qiita.com/aqril_1132/items/925a7cb04276d9f916d7"
	getObj: function() {
		let cookie = document.cookie;
		let cookieObj = {};
		if (!!cookie) {
			Array.prototype.forEach.call(cookie.split(';'), function(c) {
				let array = [c][0].split('=').map(function(a) {return a.trim()});
				let key = ~c.indexOf('=') ? unescape(array[0]) : '';
				let val = ~c.indexOf('=') ? unescape(array[1]) : unescape(array[0]);
				if (!cookieObj.hasOwnProperty(key)) {
					cookieObj[key] = [val];
				} else {
					cookieObj[key].push(val);
				}
			});
		}
		return cookieObj;
	},
	getByName: function(name) {
		let ret = [];
		let cookieObj = this.getObj();
		if (cookieObj.hasOwnProperty(name)) {
			ret = cookieObj[name];
		}
		return ret;
	},
	deleteByName : function(name, path) {
	var str = escape(name)
	        + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
	        + (path ? '; path=' + path : '');
	document.cookie = str;
	}
};


async function subsall() {
	const SEL_V = 'path[d^="M20.396 11c-.018-.646-.215-1.275-.57-1"]';
	const SEL_B = 'path[d^="M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5"]';
	const SEL_E = 'svg.r-4qtqp9.r-yyyyoo.r-lwhw9o.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-cnnz9e';
	// def-ja, def-en, ble-ja, ble-en
	const SEL_E2 = 'svg.r-4qtqp9.r-yyyyoo.r-1xvli5t.r-dnmrzs.r-bnwqim.r-1plcrui.r-f5ekn1.r-17h40o6.r-lrvibr';
	// def-ja, def-en, ble-ja, ble-en
	const D_V = 'M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-'
	          + '.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-'
	          + '.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 '
	          + '1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1'
	          + '.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 '
	          + '1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02'
	          + '.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 '
	          + '1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 '
	          + '1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 '
	          + '1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 '
	          + '1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 '
	          + '1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 '
	          + '1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z';
	const D_B = 'M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-'
	        + '.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3zm-.796 5.99c.457-.05'
	        + '.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 '
	        + '6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 '
	        + '2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 '
	        + '.405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 '
	        + '1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 '
	        + '4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 '
	        + '1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23z';
	const SEL_P = 'main section article div[data-testid^="User-Name"]';
	const SEL_P_2 = 'div[aria-labelledby="modal-header"] article div[data-testid^="User-Name"]';
	const SEL_P_3 = 'main section[aria-label="Section details"] article div[data-testid^="User-Name"]';
	const SEL_P_4 = 'main section article div[data-testid="card.layoutLarge.detail"]';
	const SEL_P_5 = 'main div[data-testid="primaryColumn"] div[data-testid="UserName"]';
	const SEL = 'div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t span.css-901oao.css-16my406.r-bcqeeo.r-qvutc0';// def-ja, def-en, ble-ja, ble-en
	const SEL_2 = 'div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 span.css-901oao.css-16my406.r-bcqeeo.r-qvutc0';// def-ja, def-en, ble-ja, ble-en
	
	let elms = document.querySelectorAll(SEL_V + ', ' + SEL_B);
	
	for(let e of elms) {
		let spe = e.parentNode.parentNode;
		let tpe = e.parentNode.parentNode.parentNode;
		let xpe;
		let sn;
		
		if(tpe.querySelector(SEL_E + ', ' + SEL_E2)) continue;
		
		if(spe.style.color == 'rgb(232, 134, 143)') {
			spe.style.color = 'rgb(29, 155, 240)';
			s_mutations = null;
		}
		
		xpe = e.closest('main div[data-testid="primaryColumn"] h2[role="heading"]');
		if(xpe) {
			sn = document.URL.split('/')[3];
		}
		
		if(spe.getAttribute('data-testid') == 'verificationBadge') sn = document.URL.split('/')[3];
		
		if(!sn) {
			xpe = e.closest('a');
			if(xpe) {
				sn = xpe.getAttribute('href').split('/')[1];
			}
		}
		
		if(!sn) {
			xpe = e.closest(SEL_P + ', ' + SEL_P_2 + ', ' + SEL_P_3 + ', ' + SEL_P_4 + ', ' + SEL_P_5);
			let sne;
			if(xpe) {
				sne = xpe.querySelector(SEL);
				if(!sne) sne = xpe.querySelector(SEL_2);
			}
			if(sne) {
				sn = sne.textContent.split('@')[1];
			}
		}
		
		if(!sn) {
			spe.style.color = 'rgb(232, 134, 143)';
			s_mutations = null;
			continue;
		}
		
		let a = [
			'', 'compose', 'explore', 'home', 'i', 'login', 'messages',
			'notifications', 'search', 'search-advanced','settings'
		];
		
		if(a.indexOf(sn) > -1) {
			spe.style.color = 'rgb(232, 134, 143)';
			s_mutations = null;
			continue;
		}
		
		let r = await touid(sn); // screen name -> id, blue, created_at, screen_name, verified
		
		if(r[4] === true) {
			e.setAttribute('d', D_V);
			s_mutations = null;
		} else if(r[4] === false) {
			e.setAttribute('d', D_B);
			s_mutations = null;
		} else {
			spe.style.color = 'rgb(232, 134, 143)';
			s_mutations = null;
		}
	}
}


async function touid(sn) {
	if(localStorage.getItem(`${LSNAME}_idl`) === null) { // 無い時
		let s = JSON.stringify(await getuid(sn)); // screen name -> id, blue, created_at, screen_name, verified
		if(s) {
			localStorage.setItem(`${LSNAME}_idl`, s);
		} else {
			console.log(`${MYNAME}: touid:error.`);
			return null; // エラー
		}
	}
	
	let str = localStorage.getItem(`${LSNAME}_idl`); // ある時はココから
	let json = JSON.parse(str);
	
	for(let e of json) {
		if(e[3] == sn) return e;
	}
	
	json = json.concat(await getuid(sn)); // あるけど、無い時
	str = JSON.stringify(json);
	localStorage.setItem(`${LSNAME}_idl`, str);
	
	for(let e of json) {
		if(e[3] == sn) return e;
	}
	
	console.log(`${MYNAME}: touid:error:end.`);
	return null; // エラー
}


async function getuid(s_name) {
	let url = 'https://api.twitter.com/graphql/rePnxwe9LZ51nQ7Sn_xN_A/UserByScreenName';
	if(/^[^:]+:\/\/[^/]+\.onion\//i.test(document.URL)) {
		url = 'https://api.twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/'
		    + 'graphql/rePnxwe9LZ51nQ7Sn_xN_A/UserByScreenName';
	}
	let q = '?variables={'
	      + `"screen_name":"${s_name}",`
	      + '"withSafetyModeUserFields":true,'
	      + '"withSuperFollowsUserFields":true'
	      + '}'
	      + '&features={'
	      + '"responsive_web_twitter_blue_verified_badge_is_enabled":true,'
	      + '"responsive_web_graphql_exclude_directive_enabled":false,' // false
	      + '"verified_phone_label_enabled":true,' // false
	      + '"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,'
	      + '"responsive_web_graphql_timeline_navigation_enabled":true'
	      + '}';
	let eq = encodeURI(q);
	
	let controller = new AbortController();
	let req = mkreq(url, eq, EBTKN, controller);
	let res = {};
	
	try {
		setTimeout(function() {controller.abort()}, 60000);
		res = await fetch(req);
		if(!res.ok) {
			console.log(`${MYNAME}: getuid:error:` + res.ok + '.');
			return null;
		} // 失敗なら空で終わり
	} catch(err) {
		console.log(`${MYNAME}: getuid:error:` + err + '.');
		return null; // 失敗なら空で終わり
	}
	
	let json = JSON.parse(await res.text());
	
	let id, bl, ca, sn, vf;
	id = json.data.user.result.rest_id;
	bl = json.data.user.result.is_blue_verified;
	ca = json.data.user.result.legacy.created_at;
	sn = json.data.user.result.legacy.screen_name;
	vf = json.data.user.result.legacy.verified;
	
	return [[id, bl, ca, sn, vf]];
}


function mkreq(url, eq, ebt, controller) {
	let req;
	
	if(cookie.getByName('gt').length && !cookie.getByName('twid').length) {
		req = new Request(`${url}${eq}`,{
			headers: {
				'authorization': `Bearer ${ebt}`,
				'x-csrf-token': cookie.getByName('ct0')[0],
				'x-guest-token': cookie.getByName('gt')[0]
			},
			cache: 'force-cache',
			redirect: 'follow',
			signal: controller.signal
			});
	} else {
		req = new Request(`${url}${eq}`,{
			headers: {
				'authorization': `Bearer ${ebt}`,
				'x-csrf-token': cookie.getByName('ct0')[0],
				'x-twitter-auth-type': 'OAuth2Session'
			},
			cache: 'force-cache',
			redirect: 'follow',
			mode: 'cors',
			credentials: 'include',
			signal: controller.signal
		});
	}
	
	return req;
}


async function addsl() {
	s_mutations = null; // 不要？
	
	const SEL_END = 'main div[data-testid="primaryColumn"] section article div.css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2';
	const SEL_END_RT = 'main div[data-testid="primaryColumn"] section article span.css-cens5h.r-b88u0q';
	const SEL_ADD = `span.us-${MYNAME}`;
	
	let old;
	let ca, span, span2, a, a2;
	
	let elms_end = document.querySelectorAll(SEL_END);
	
	for(let elm of elms_end) {
		let uid;
		let tid;
		let tsl = '?';
		let rtsl = '(?)';
		let thref = 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels';
		if(/^[^:]+:\/\/[^/]+\.onion\//i.test(document.URL)) {
			thref = 'https://help.twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/using-twitter/how-to-tweet#source-labels';
		}
		let rthref = thref;
		
		ca = elm.querySelector('a');
		tid = ca.getAttribute('href').split('/')[3];
		
		let detl = await getdetl(tid); // tid -> tca, s, uid, sn, uca
		
		if(detl) {
			tsl = detl[1].split('<')[1].split('>')[1];
			thref = detl[1].split('"')[1];
		}
		
		let elm_end_rt = document.querySelector(SEL_END_RT);
		if(elm_end_rt) {
			let pe = elm_end_rt.parentNode;
			let sn = pe.getAttribute('href').slice(1);
			
			uid = await touid(sn); // screen name -> id, blue, created_at, screen_name, verified
			// リツイートした人のuid
		}
		
		if(SSL == 1 || !elm_end_rt) {
			;
		} else if(uid && localStorage.getItem(`${LSNAME}_tl_${uid[0]}`) !== null) {
			let str = localStorage.getItem(`${LSNAME}_tl_${uid[0]}`);
			let json = JSON.parse(str);
			
			for(let e of json) {
				if(e[3] == tid) {
					 rtsl = '(' + e[2].split('<')[1].split('>')[1] + ')';
					 rthref = e[2].split('"')[1];
				}
			}
		}
		
		old = elm.querySelectorAll(SEL_ADD)
		
		if(!old.length) {
			span = document.createElement('span');
			span.className = `us-${MYNAME}`;
			span.style.margin = '0px 3px 0px 3px';
			span.textContent = '·';
			span.style.color = getComputedStyle(ca, null).color;
			span.style.font = getComputedStyle(ca, null).font;
			span.style.lineHeight = getComputedStyle(elm, null).lineHeight;
			
			span2 = document.createElement('span');
			span2.className = `us-${MYNAME}`;
			span2.style.lineHeight = getComputedStyle(elm, null).lineHeight;
			
			a = document.createElement('a');
			a.className = `us-${MYNAME}`;
			a.setAttribute('role', 'link');
			a.setAttribute('href', thref);
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'nofollow noopener noreferrer');
			a.textContent = tsl;
			a.style.color = getComputedStyle(ca, null).color;
			a.style.font = getComputedStyle(ca, null).font;
			a.style.textDecoration = getComputedStyle(ca, null).textDecoration;
			
			a2 = document.createElement('a');
			a2.className = `us-${MYNAME}`;
			a2.setAttribute('role', 'link');
			a2.setAttribute('href', rthref);
			a2.setAttribute('target', '_blank');
			a2.setAttribute('rel', 'nofollow noopener noreferrer');
			a2.textContent = rtsl;
			a2.style.color = getComputedStyle(ca, null).color;
			a2.style.font = getComputedStyle(ca, null).font;
			a2.style.textDecoration = getComputedStyle(ca, null).textDecoration;
			
			elm.appendChild(span);
			elm.appendChild(span2);
			span2.appendChild(a);
			if(SSL == 2 && elm_end_rt) span2.appendChild(a2);
			
			s_mutations = null;
		}
	}
}


async function getdetl(tid) {
	let url = 'https://api.twitter.com/1.1/statuses/show.json';
	if(/^[^:]+:\/\/[^/]+\.onion\//i.test(document.URL)) {
		url = 'https://api.twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/'
		    + '1.1/statuses/show.json';
	}
	let q = `?id=${tid}`;
	let eq = encodeURI(q);
	
	let controller = new AbortController();
	let req = mkreq(url, eq, EBTKN, controller);
	let res = {};
	
	try {
		setTimeout(function() {controller.abort()}, 60000);
		res = await fetch(req);
		if(!res.ok) {
			console.log(`${MYNAME}: getdtl:error:` + res.ok + '.');
			return null;
		} // 失敗なら空で終わり
	} catch(err) {
		console.log(`${MYNAME}: getdtl:error:` + err + '.');
		return null; // 失敗なら空で終わり
	}
	
	let json = JSON.parse(await res.text());
	
	let num = 1; // 一個しかない
	let tca, s, uid, sn, uca;
	
	for(let i = 0; i < num; i++) {
		tca = json.created_at;
		s = json.source;
		if(typeof(json.user) !== 'undefined') {
			uid = json.user.id_str;
			sn = json.user.screen_name;
			uca = json.user.created_at;
		} else {
			uid = 'none';
			sn = 'none';
			uca = 'none';
		}
	}
	return [tca, s, uid, sn, uca];
}


function loop() {
	setTimeout(async () => {
		if(s_mutations) {
			if(TB) await subsall();
			if(SSL) await addsl();
			s_mutations = null; // 初期値がtrue、非同期処理用
		}
		loop();
	}, INTL);
}


(function() {
	console.log(`${MYNAME}: start.`);
	
	observer.observe(document, {childList:true, subtree:true});
	loop();
})();
