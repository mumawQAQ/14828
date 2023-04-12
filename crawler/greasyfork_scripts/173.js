// ==UserScript==
// @name           adf.ly && lienscash.com && adfoc.us && bc.vc && sh.st bypasser
// @namespace      tag: adfly,lienscash,adfocus,bcvc,shst,bypasser
// @version        1.7
// @description    Ignorar links do adf.ly, lienscash.com, adfoc.us, bc.vc e sh.st.
// @grant          none
// @include        http://q.gs/*
// @include        http://9.bb/*
// @include        http://u.bb/*
// @include        http://j.gs/*
// @include        http://adf.ly/*
// @include        http://www.lienscash.com/l/*
// @include        http://lienscash.com/l/*
// @include        http://adfoc.us/*
// @include        http://bc.vc/*
// @include        http://sh.st/*
// ==/UserScript==

// Current version: check line 4 [@version header]
// Changelog:
// Version 1.7
// - fixed sh.st bypasser.
// Version 1.6.2
// - fixed AGAIN the adf.ly bypasser (really adfly? "hitommy"?)
// Version 1.6.1
// - fixed again the adf.ly bypasser (nice try?)
// Version 1.6
// - reverse engineered new adf.ly protection. Good job, it was /quite/ difficult!
// Version 1.5.1
// - fixed adf.ly bypasser, bimm.in bypasser coming soon...
// Version 1.5
// - fixed adf.ly bypasser. Nice try adf.ly, nice try!
// - fixed bc.vc bypasser.
// Version 1.4.1
// - fixed adfoc.us bypasser
// Version 1.4
// - fixed bc.vc bypasser finally. No more 1 star reviews for me :)
// - fixed the double redirection message.
// Version 1.3
// - fixed a bad typo in bc.vc bypasser, maybe it should fix some problems the users have
// - added a 100% fail safe method for adf.ly bypasser, it should now work for every link!
// - added a small credit string while redirecting, for bad users which do not check for updates! :D
// - added @grant directive as requested by http://wiki.greasespot.net/@grant
// [ not a changelog entry: remember to report any issues to the userscript URL, aka http://userscripts.org/scripts/show/122331 ]
// Version 1.2.1
// - fixed adfly's bypasser bug with urls like adf.ly/number/site.com
// Version 1.2.0
// - bypassed new adfly's protection
// - added new bypasser: bc.vc
// - new script headers added (updating notification?)
// Version 1.1.1
// - small bugfixes
// Version 1.1
// - improvements all around the code
// Version 1.0
// - Initial release

/**
 * NOTE: The real and UNIQUE version of this bypasser is located at http://userscripts.org/scripts/show/122331.
 * Any other page or script which uses this source OR claims to be this script, it is a fake.
 * Please note that the author is named Robertof, and you can check his website at http://r.usr.sh.
 * You can PM me on Userscripts if you find any copy.
 * The last warning: I'm NOT responsible for ANY damages caused by UNOFFICIAL scripts downloaded from
 * websites which aren't http://userscripts.org/scripts/show/122331.
 * Enjoy.
 * Robertof
 */

(function() {
	var loc = document.location.href, interval, secinterval, bypassers = {
		adfly: function() {
			var tehregxp = /var zzz = ['"]([^'"]+)['"]/,
				reg2     = /\/locked(?:\/|\?url=)([a-zA-Z0-9\-_]+)/,
				reg3     = /\d+\/(http.+?)$/i,
				reg4     = /\d+\/([a-zA-Z\-]+\.[a-zA-Z\-]+.*)/i,
				reg5     = /blocked\.php(?:\?t=1)?$/;
			if (loc.match (reg2))
			{
				clearInterval (interval);
				var uri = (reg2.exec (loc))[1];
				document.title = "** Waiting .. **";
				secinterval = setInterval (function() {
					if (document.getElementById ("continue").style.display != "none")
						bypassers.doRedirect ("http://adf.ly/" + uri);
				}, 1000);
			}
			else if (loc.match (reg3))
			{
				clearInterval (interval);
				bypassers.doRedirect ((reg3.exec (loc))[1]);
			}
			else if (loc.match (reg4))
			{
				clearInterval (interval);
				bypassers.doRedirect ("http://" + (reg4.exec (loc))[1]);
			}
			else if (document.head.innerHTML.match (tehregxp))
			{
				document.title = "** adfly bypasser: Bypassing the link... **";
				clearInterval (interval);
				bypassers._inject (function() {
					// set base64 helper for decoding adfly's base64
					// thanks to webtoolkit for the code
					var Base64 = {
						// private property
						_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

						// public method for encoding
						encode: function (input) {
							var output = "";
							var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
							var i = 0;

							input = Base64._utf8_encode(input);

							while (i < input.length) {

								chr1 = input.charCodeAt(i++);
								chr2 = input.charCodeAt(i++);
								chr3 = input.charCodeAt(i++);

								enc1 = chr1 >> 2;
								enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
								enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
								enc4 = chr3 & 63;

								if (isNaN(chr2)) {
									enc3 = enc4 = 64;
								} else if (isNaN(chr3)) {
									enc4 = 64;
								}

								output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

							}

							return output;
						},

						// public method for decoding
						decode: function (input) {
							var output = "";
							var chr1, chr2, chr3;
							var enc1, enc2, enc3, enc4;
							var i = 0;

							input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

							while (i < input.length) {

								enc1 = this._keyStr.indexOf(input.charAt(i++));
								enc2 = this._keyStr.indexOf(input.charAt(i++));
								enc3 = this._keyStr.indexOf(input.charAt(i++));
								enc4 = this._keyStr.indexOf(input.charAt(i++));

								chr1 = (enc1 << 2) | (enc2 >> 4);
								chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
								chr3 = ((enc3 & 3) << 6) | enc4;

								output = output + String.fromCharCode(chr1);

								if (enc3 != 64) {
									output = output + String.fromCharCode(chr2);
								}
								if (enc4 != 64) {
									output = output + String.fromCharCode(chr3);
								}

							}

							output = Base64._utf8_decode(output);

							return output;

						},

						// private method for UTF-8 encoding
						_utf8_encode: function (string) {
							string = string.replace(/\r\n/g, "\n");
							var utftext = "";

							for (var n = 0; n < string.length; n++) {

								var c = string.charCodeAt(n);

								if (c < 128) {
									utftext += String.fromCharCode(c);
								} else if ((c > 127) && (c < 2048)) {
									utftext += String.fromCharCode((c >> 6) | 192);
									utftext += String.fromCharCode((c & 63) | 128);
								} else {
									utftext += String.fromCharCode((c >> 12) | 224);
									utftext += String.fromCharCode(((c >> 6) & 63) | 128);
									utftext += String.fromCharCode((c & 63) | 128);
								}

							}

							return utftext;
						},

						// private method for UTF-8 decoding
						_utf8_decode: function (utftext) {
							var string = "";
							var i = 0;
							var c = c1 = c2 = 0;

							while (i < utftext.length) {

								c = utftext.charCodeAt(i);

								if (c < 128) {
									string += String.fromCharCode(c);
									i++;
								} else if ((c > 191) && (c < 224)) {
									c2 = utftext.charCodeAt(i + 1);
									string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
									i += 2;
								} else {
									c2 = utftext.charCodeAt(i + 1);
									c3 = utftext.charCodeAt(i + 2);
									string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
									i += 3;
								}

							}

							return string;
						}
					};
					// adf.ly updates? Not scaring me! 15/07/13: Take this adfly ^_^
					window.onbeforeunload = null;
					var neededVar = ysmm;
					var __t = neededVar.indexOf ("?");
					var __u = neededVar.indexOf ("!HiTommy");
					if (__u != -1)
						neededVar = neededVar.substr (0, __u);
					if (__t != -1)
						neededVar = neededVar.substr (0, __t);
					/*if (document.head.innerHTML.match (/view6\.js/))
						neededVar = ysmm;
					else
						neededVar = zzz;*/
					if (easyUrl == 'true') {
						document.head.innerHTML = "<title>** Redirect in progress</title>";
						document.body.innerHTML = "Ignorando este link (redirecionando para " + neededVar + "), aguarde...";
						window.location = neededVar;
					} else {
						var f = "", z = "";
						for (var l = 0; l < neededVar.length; l++) {
							if (l % 2 == 0)
								f += neededVar.charAt (l);
							else
								z  = neededVar.charAt (l) + z;
						}
						var result = f + z;
						result     = Base64.decode (result);
						result     = result.substring (result.length - (result.length - 2));
						document.head.innerHTML = "<title>** Redirect in progress</title>";
						document.body.innerHTML = "Ignorando este link (redirecionando para " + result + "), aguarde...";
						window.location = result;
					}
				});
				//bypassers.doRedirect ((tehregxp.exec (document.head.innerHTML))[1]);
			}
			else if (loc.match (reg5))
			{
				clearInterval (interval);
				var errorMsg = "** ERROR: adf.ly detected our bypassing attempt.\n";
				errorMsg    += "Please report the problem on the following url: http://userscripts.org/scripts/discuss/122331 and INCLUDE the adfly link.\n";
				errorMsg    += "Thanks, Robertof (the script author - and note that I'm NOT an Arabian guy or something)";
				alert (errorMsg);
			}
			else {
				clearInterval(interval);
				alert ("Something went wrong! Please report the problem on the following url: http://userscripts.org/scripts/discuss/122331 and INCLUDE the adfly link!");
			}
		},
		lienscash: function() {
			var matches = /<a href="([^"]+)">skip/;
			if (document.body.innerHTML.match (matches))
			{
				clearInterval (interval);
				bypassers.doRedirect ((matches.exec (document.body.innerHTML))[1]);
			}
		},
		adfocus: function() {
			var regxp = /var click_url = ["']([^"']+)["']/;
			if (document.body.innerHTML.match (regxp))
				bypassers.doRedirect ( ( regxp.exec (document.body.innerHTML.replace(/\/\/var\sclick_url\s=.+/, "")) )[1] );
			//alert(document.body.innerHTML.replace(/\/\/var\sclick_url\s=.+/, ""));
		},
		shst: function() {
			var matches = /<a class="skip-btn" href="([^"]+)" id="skip_button">/;
			if (document.body.innerHTML.match (matches))
			{
				clearInterval (interval);
				bypassers.doRedirect ((matches.exec (document.body.innerHTML))[1]);
			}
		},
		bcvc: function() {
			// bypassing this site is harder than expected, because
			// to get the link it does an AJAX request
			// so we should make one too :(
			// inject script
			bypassers._inject (function() {
				// get AJAX data from the page
				var ajaxrx = /\{(opt:'make.+)/; //?rgs:\{[^\}+]\})/;
				if (document.body.innerHTML.match (ajaxrx))
				{
					var p = ajaxrx.exec(document.body.innerHTML)[1];
					// opt:'make_log',args:{aid:626,lid:1689504,oid:1684,ref: ''}},
					p = p.substr (0, (p.length - 1)); // remove final ;
					var _a = eval ('({' + p + ')');
					//alert(_a.args.aid);
					// do request
					document.head.innerHTML = "<title>** Bypassing, please wait..</title>";
					document.body.innerHTML = "Eu vou ignorar este site ruim, por favor, aguarde alguns segundos...<br /><strong style='font-size:18px;' id='sReplace'>0</strong>";
					//alert (_a.opt);
					//return;
					var gayCallback = function (myself, retShit, count) {
						document.getElementById('sReplace').innerHTML = "Try #" + count + ": " + ( count == 1 ? "a few more.." : ( count == 2 ? "just a few tries left.." : ( count == 3 ? "so close.." : ( count == 4 ? "almost done.." : ( count == 5 ? "GOTCHA! (probably)" : (count > 5 ? "wait, what?" : "a moment.." ) ) ) ) ) );
						// scumbag bc.vc which changes ajax.fly.php in ajax.fly2.php :>
						$.post ("http://bc.vc/fly/ajax.fly2.php", retShit, function (res) {
							var jsono = eval ('(' + res + ')');
							if (jsono.message) {
								document.head.innerHTML = "<title>** Redirect in progress **</title>";
								document.body.innerHTML = "Ignorando este link (redirecionando para " + jsono.message.url + "), aguarde...";
								window.location = jsono.message.url;
								return;
							}
							else
								setTimeout (function(){myself (myself, retShit, ++count);}, 1000);
						});
					};
					gayCallback (gayCallback, _a, 0);
					// old code kept for debugging reasons
					/*_a.opt = 'check_log';
					var _intAu = setInterval (function () {
						$.post ('http://bc.vc/fly/ajax.fly.php', _a, function (res) {
							var sonOf = eval ('(' + res + ')');
							if (!sonOf.message)
								return;
							clearInterval (_intAu);
							_a.opt = 'make_log';
							$.post ('http://bc.vc/fly/ajax.fly.php', _a, function (r) {
								var _j = eval ('(' + r + ')');
								if (_j.message) {
									document.head.innerHTML = "<title>** Redirect in progress **</title>";
									document.body.innerHTML = "Ignorando este link (redirecionando para " + _j.message.url + "), aguarde...";
									document.body.innerHTML += "<br />Multiple bad-sites bypasser is brought to you by Robertof. Always check <a href='http://userscripts.org/scripts/show/122331'>this link</a> for updates and to report issues!";
									window.location = _j.message.url;
								}
								else {
									document.body.innerHTML = "bc.vc denied our request, waiting a bit and then reloading..";
									alert (JSON.stringify (_j));
									setTimeout (function() { window.location = document.location.href; }, 3000);
								}
							});
						});
					}, 1000);*/
				}
			});
		},
		doRedirect: function (uri) {
			document.head.innerHTML = "<title>** Redirect in progress **</title>";
			document.body.innerHTML = "Ignorando este link (redirecionando para " + uri + "), agurade...";
			window.location = uri;
		},
		_inject: function (fn) {
			// inject a script into the webpage
			var _scr = document.createElement ("script");
			_scr.appendChild (document.createTextNode ("(" + fn + ")();"));
			(document.body || document.head || document.documentElement).appendChild (_scr);
		}
	};
	if (loc.indexOf ("adf.ly") !== -1 || loc.indexOf ("q.gs") !== -1 || loc.indexOf("9.bb") !== -1 || loc.indexOf ("u.bb") !== -1 || loc.indexOf ("j.gs") !== -1)
		interval = setInterval (bypassers.adfly, 1000);
	else if (loc.indexOf ("lienscash.com") !== -1)
		interval = setInterval (bypassers.lienscash, 1000);
	else if (loc.indexOf ("bc.vc") !== -1)
		bypassers.bcvc();
	else if (loc.indexOf ("sh.st") !== -1)
		bypassers.shst();
	else
		bypassers.adfocus();
})();