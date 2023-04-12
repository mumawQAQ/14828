// ==UserScript==
// @name        work.ink bypasser
// @namespace   lemons
// @match       https://work.ink/*
// @match       https://workink.click/*
// @match       *://*/direct/?*
// @grant       none
// @icon        https://work.ink/favicon.ico
// @license     GPLv3.0-or-later
// @version     1.0.1
// @author      lemons
// @description Automatically does work.ink steps.
// ==/UserScript==

(async () => {
    if (window.location.hostname === "work.ink") {
        if (window.location.hash.endsWith("running")) return;
        window.location.hash += "running"
        const websocketUrl = "wss://redirect-api.work.ink/v1/ws";

        const [encodedUserId, linkCustom] = window.location.pathname.slice(1).split("/").slice(-2);
        const BASE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const loopTimes = encodedUserId.length;
        let decodedUserId = BASE.indexOf(encodedUserId[0]);
        for (let i = 1; i < loopTimes; i++) decodedUserId = 62 * decodedUserId + BASE.indexOf(encodedUserId[i]);

        const payloads = {
            announce: JSON.stringify({
                type: "c_announce",
                payload: {
                    linkCustom: linkCustom,
                    linkUserId: decodedUserId,
                    referer: "unknown",
                }
            }),
            ping: JSON.stringify({
                type: "c_ping",
                payload: {}
            }),
            captcha: JSON.stringify({
                type: "c_recaptcha_response",
                payload: {
                    "recaptchaResponse": crypto.randomUUID()
                }
            }),
            social: (url) => JSON.stringify({
                type: "c_social_started",
                payload: {
                    url
                }
            }),
            readArticles: {
                1: JSON.stringify({
                    type: "c_monetization",
                    payload: {
                        type: "readArticles",
                        payload: {
                            event: "start"
                        }
                    }
                }),
                2: JSON.stringify({
                    type: "c_monetization",
                    payload: {
                        type: "readArticles",
                        payload: {
                            event: "closeClicked"
                        }
                    }
                })
            },
            browserExtension: {
                1: JSON.stringify({
                    type: "c_monetization",
                    payload: {
                        type: "browserExtension",
                        payload: {
                            event: "start"
                        }
                    }
                }),
                2: (token) => JSON.stringify({
                    type: "c_monetization",
                    payload: {
                        type: "browserExtension",
                        payload: {
                            event: "confirm",
                            token
                        }
                    }
                })
            }
        }

        let ws = new WebSocket(websocketUrl);
        let interval;
        ws.onopen = () => {
            ws.send(payloads.announce);
            interval = setInterval(
                () => ws.send(payloads.ping),
                10 * 1000
            )
        };
        ws.onclose = () => clearInterval(interval);

        let socials = [];
        let activeMonetizationTypes = [];
        ws.onmessage = async (e) => {
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            const data = JSON.parse(e.data);
            if (data.error) return;
            const payload = data.payload;

            switch (data.type) {
                case "s_link_info":
                    if (payload.socials) socials.push(...payload.socials);
                    const monetizationTypes = ["readArticles", "browserExtension"];
                    for (const type of monetizationTypes) {
                        if (payload.monetizationScript.includes(type)) {
                            activeMonetizationTypes.push(type)
                        }
                    }
                    break;
                case "s_start_recaptcha_check":
                    ws.send(payloads.captcha);
                    break;
                case "s_recaptcha_okay":
                    if (socials.length) {
                        for (const [index, social] of socials.entries()) {
                            ws.send(payloads.social(social.url));
                            await sleep(3 * 1000);
                        }
                    }

                    if (activeMonetizationTypes.length) {
                        for (const type of activeMonetizationTypes) {
                            switch (type) {
                                case "readArticles":
                                    ws.send(payloads.readArticles["1"]);
                                    ws.send(payloads.readArticles["2"]);
                                    break;
                                case "browserExtension":
                                    if (activeMonetizationTypes.includes("readArticles")) await sleep(16 * 1000);
                                    ws.send(payloads.browserExtension["1"])
                                    break;
                            }
                        }
                    }
                    break;
                case "s_monetization":
                    if (payload.type !== "browserExtension") break;
                    ws.send(payloads.browserExtension["2"](payload.payload.token))
                    break;
                case "s_link_destination":
                    const url = new URL(payload.url);
                    if (url.searchParams.has("duf")) {
                        window.location.href = window.atob(url.searchParams.get("duf").split("").reverse().join(""))
                    };
                    window.location.href = payload.url;
                    break;
            }
        }
    } else if (window.location.hostname == "workink.click") {
        const uuid = new URLSearchParams(window.location.search).get("t")
        fetch(`https://redirect-api.work.ink/externalPopups/${uuid}/pageOpened`);
        await new Promise(r => setTimeout(r, 11 * 1000));
        const { destination } = await fetch(`https://redirect-api.work.ink/externalPopups/${uuid}/destination`).then(r => r.json());
        const url = new URL(destination);
        if (url.searchParams.has("duf")) {
            window.location.href = window.atob(url.searchParams.get("duf").split("").reverse().join(""))
        };
        window.location.href = destination;
    } else {
        if (new URL(window.location.href).searchParams.has("duf")) {
            var link = document.createElement("a");
            link.referrerPolicy = "no-referrer";
            link.rel = "noreferrer";

            link.href = window.atob(new URL(window.location.href).searchParams.get("duf").split("").reverse().join(""));
            link.click();
        };
    }
})();