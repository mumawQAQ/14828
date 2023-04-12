// ==UserScript==
// @name        Pinterest Plus
// @namespace   https://greasyfork.org/users/102866
// @description Show full size + working middle click to open new tab + open original image.
// @include     https://*.pinterest.*/*
// @author      TiLied
// @version     0.6.03
// @grant       GM_openInTab
// @grant       GM_listValues
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @grant       GM.openInTab
// @grant       GM.listValues
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.deleteValue
// ==/UserScript==

class PinterestPlus
{
	constructor()
	{
		console.log("Pinterest Plus v" + GM.info.script.version + " initialization");
		this.urls = [""];

		this._FirstTime();
		this._SetCSS();
	}

	_SetCSS()
	{
		
		document.head.append("<!--Start of Pinterest Plus v" + GM.info.script.version + " CSS-->");

		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">button.ppTrue\
			{\
				border: 2px solid black!important;\
			}</style>`);

		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">button.ppTrue\
			{\
				border: 2px solid black!important;\
			}</style>`);
		
		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">button.ppTrue \
		{                                         \
			border:2px solid black!important;     \
		}</style>`);

		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">#myBtn \
		{              \
			pointer-events: auto;!important;\
			display: inherit;\
			align-items: center;\
			box-sizing: border-box;\
			color:#fff;\
			font-size: 16px;\
			font-weight: 700;\
			letter-spacing: -.4px;\
			margin-top: -4px;\
			border-style: solid;\
			border-width: 0px;\
			background-color: #e60023;\
			border-radius: 24px;\
			padding: 10px 14px;\
			will-change: transform;\
			margin-left: 8px;\
		}</style>`);

		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">#myBtn:hover \
		{                                         \
			background-color: #ad081b;\
		}</style>`);

		document.head.insertAdjacentHTML("beforeend", `<style type="text/css">#pp_divFullSize \
		{                                         \
			z-index: 500;!important;\
			justify-content: center;\
			display: grid; \
		}</style>`);
		
		document.head.append("<!--End of Pinterest Plus v" + GM.info.script.version + " CSS-->");
	
	}

	async _FirstTime()
	{
		if (this.HasValueGM("ppFullSize", false))
		{
			this.btnOn = await GM.getValue("ppFullSize");
		}

		//Console log prefs with value
		console.log("*prefs:");
		console.log("*-----*");
		let vals = await GM.listValues();

		//Find out that var in for block is not local... Seriously js?
		for (let i = 0; i < vals.length; i++)
		{
			console.log("*" + vals[i] + ":" + await GM.getValue(vals[i]));
		}
		console.log("*-----*");
	}

	Main()
	{
		if (!document.URL.match("/pin/"))
		{
			this.UrlHandler();
			return;
		}
		
		this.urls = [""];

		let buttonDiv = document.createElement("div");
		let buttonButton = document.createElement("button");
		let buttonText = document.createTextNode("Full Size");
		let parentDiv = document.querySelector("div[data-test-id='closeupActionBar']>div>div, \
div[data-test-id='UnauthBestPinCardBodyContainer']>div>div>div, \
div.UnauthStoryPinCloseupBody__container>div>div, \
div[data-test-id='CloseupDetails'], \
div[data-test-id='CloseupMainPin']>div>div:last-child>div");

		if (typeof parentDiv === "undefined" || parentDiv == null)
		{
			console.error("parentDiv:", parentDiv);
			return;
		}

		buttonButton.appendChild(buttonText);
		buttonDiv.appendChild(buttonButton);
		buttonButton.id = "myBtn";

		parentDiv.appendChild(buttonDiv);

		//
		let queryCloseup = document.querySelector("div[data-test-id='CloseupMainPin'], div.reactCloseupScrollContainer");

		if (typeof queryCloseup === "undefined" || queryCloseup == null || queryCloseup.length === 0)
		{
			console.error("div[data-test-id='pin']:first, div.reactCloseupScrollContainer:", queryCloseup);
			return;
		}

		let div = document.querySelector("#pp_divFullSize");

		if (div == null)
		{
			div = document.createElement("div");

			div.id = "pp_divFullSize";

			queryCloseup.prepend(div);
		}
		
		div.style.display = "none";

		if (this.btnOn)
		{
			buttonButton.classList.add("ppTrue");

			div.style.display = "grid";
		}

		this.Events(buttonButton);

		this.Core(buttonButton);

		this.UrlHandler();
	}

	Core(btn)
	{
		let time = Date.now();

		let url = new URL(document.URL);

		let regU = document.URL.match(/\/(\d+)\/|pin\/([\w\-]+)\/?/);

		let id = regU[1];

		if (typeof id === "undefined")
			id = regU[2];

		if (typeof id === "undefined")
		{
			//TODO! not through request!
			console.error("id is undefined");
			return;
		}

		let urlRec = "https://" + url.host + "/resource/PinResource/get/?source_url=/pin/" + id + "/&data={%22options%22:{%22field_set_key%22:%22detailed%22,%22id%22:%22" + id + "%22},%22context%22:{}}&_=" + time;

		fetch(urlRec)
			.then((response) =>
			{
				return response.json();
			})
			.then((r) =>
			{
				if (r["resource_response"]["status"] === "success")
				{
					console.log(r["resource_response"]["data"]);

					let pin = r["resource_response"]["data"];

					if (pin["videos"] != null)
					{
						let k0 = Object.keys(pin["videos"]["video_list"])[0];

						pp.urls[0] = pin["videos"]["video_list"][k0]["url"];

						btn.setAttribute('title', "" + pin["videos"]["video_list"][k0]["width"] + "px x " + pin["videos"]["video_list"][k0]["height"] + "px")

						return;
					}

					if (pin["story_pin_data"] != null)
					{
						let sp = pin["story_pin_data"]["pages"];

						for (let i in sp)
						{
							if (pp.urls[0] === "")
							{
								pp.urls[0] = sp[i]["image"]["images"]["originals"]["url"];
								continue;
							}
							pp.urls.push(sp[i]["image"]["images"]["originals"]["url"]);
						}

						return;
					}

					pp.urls[0] = pin["images"]["orig"]["url"];

					btn.setAttribute("title", "" + pin["images"]["orig"]["width"] + "px x " + pin["images"]["orig"]["height"] + "px");

					if (pp.btnOn)
						pp.Show(pp.urls[0]);

					return;
				} else
				{
					console.error(r);
				}
			});
	}

	Events(btn)
	{
		btn.addEventListener('mousedown', async function (e)
		{
			if ((e.which === 3))
			{
				if (pp.btnOn)
				{
					GM.setValue("ppFullSize", false);

					btn.classList.remove("ppTrue");

					pp.btnOn = false;
				} else
				{
					GM.setValue("ppFullSize", true);

					btn.classList.add("ppTrue");

					pp.btnOn = true;
				}

				//console.log("right");
			}
			if ((e.which === 1))
			{
				pp.Show(pp.urls[0]);

				let _div = document.querySelector("#pp_divFullSize");

				if (_div.style.display === "none")
					_div.style.display = "grid";
				else
					_div.style.display = "none";
				//console.log("left");
			}
			if ((e.which === 2))
			{
				for (let i in pp.urls)
				{
					GM.openInTab(pp.urls[i]);
				}
				//console.log("middle");
			}

			e.preventDefault();
		});
	}

	Show(url)
	{
		let img = document.querySelector("#pp_img");

		if (img != null)
		{
			img.setAttribute("src", url);
		} else
		{
			img = document.createElement("img");

			img.id = "pp_img";
			img.setAttribute("src", url);

			let _div = document.querySelector("#pp_divFullSize");
			_div.prepend(img);
		}
	}

	//Handler for url
	UrlHandler()
	{
		this.oldHash = window.location.pathname;
		this.Check;

		let that = this;
		let detect = function ()
		{
			if (that.oldHash !== window.location.pathname)
			{
				that.oldHash = window.location.pathname;
				setTimeout(function () { pp.Main(); }, 1500);
			}
		};
		this.Check = setInterval(function () { detect(); }, 250);
	}

	//Start
	//async Methods/Functions GM_VALUE
	async HasValueGM(nameVal, optValue)
	{
		let vals = await GM.listValues();

		if (vals.length === 0)
		{
			if (optValue !== undefined)
			{
				GM.setValue(nameVal, optValue);
				return true;
			} else
			{
				return false;
			}
		}

		if (typeof nameVal !== "string")
		{
			return alert("name of value: '" + nameVal + "' are not string");
		}

		for (let i = 0; i < vals.length; i++)
		{
			if (vals[i] === nameVal)
			{
				return true;
			}
		}

		if (optValue !== undefined)
		{
			GM.setValue(nameVal, optValue);
			return true;
		} else
		{
			return false;
		}
	}
	async DeleteValuesGM(nameVal)
	{
		let vals = await GM.listValues();

		if (vals.length === 0 || typeof nameVal !== "string")
		{
			return;
		}

		switch (nameVal)
		{
			case "all":
				for (let i = 0; i < vals.length; i++)
				{
					if (vals[i] !== "adm")
					{
						GM.deleteValue(vals[i]);
					}
				}
				break;
			case "old":
				for (let i = 0; i < vals.length; i++)
				{
					if (vals[i] === "debug" || vals[i] === "debugA")
					{
						GM.deleteValue(vals[i]);
					}
				}
				break;
			default:
				for (let i = 0; i < vals.length; i++)
				{
					if (vals[i] === nameVal)
					{
						GM.deleteValue(nameVal);
					}
				}
				break;
		}
	}
	async UpdateGM(what)
	{
		var gmVal;

		switch (what)
		{
			case "options":
				gmVal = JSON.stringify(options.values);
				GM.setValue("pp_options", gmVal);
				break;
			default:
				alert("class:Options.UpdateGM(" + what + "). default switch");
				break;
		}
	}
	//async Methods/Functions GM_VALUE
	//End
}

let pp;

window.onload = function ()
{
	pp = new PinterestPlus();

	setTimeout(() =>
	{
		pp.Main();
		console.log(pp);
	}, 1250);
};