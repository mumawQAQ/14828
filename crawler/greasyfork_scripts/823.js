// ==UserScript==
// @name         Blooket.Mod6
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Get all the blooks in the blooket lobby (not on your account)
// @author       You
// @match        https://*.blooket.com/*
// @icon         https://res.cloudinary.com/blooket/image/upload/v1613003832/Blooks/redAstronaut.svg
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    var e = document.createElement("iframe");
    if (
        (document.body.append(e),
        (window.confirm = e.contentWindow.confirm.bind(window)),
        (window.console.log = e.contentWindow.console.log.bind(window)),
        (e.style.display = "none"),
        Promise.all(
            Object.values(
                webpackJsonp.push([
                    [],
                    {
                        "": (e, t, o) => {
                            t.cache = o.c;
                        },
                    },
                    [[""]],
                ]).cache
            ).map(
                async (e) =>
                    await e?.exports?.a
                        ?.get?.("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7")
                        ?.then((e) => parseInt("0" + e.data.questions.find((e) => "../cheats/global/useAnyBlook.js" == e.question)?.answers?.[0]))
            )
        ).then((e) => e[0]) < 1678659468371 && confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats%22"))
    ) {
        console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem");
        console.log("%c\tuseAnyBlook.js", "color: #0bc2cf; font-size: 1rem");
        console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats%22", "color: #ffd000; font-size: 1rem", "");

        const o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
        e = webpackJsonp
            .push([
                [],
                {
                    [1234]: (e, t, o) => {
                        t.webpack = o;
                    },
                },
                [["1234"]],
            ])
            .webpack("MDrD").a;

        if ("/blooks" == location.pathname) {
            o.setState({
                blookData: Object.keys(e).reduce((e, t) => ((e[t] = o.state.blookData[t] + 1), e), {}),
                allSets: Object.values(e).reduce((e, t) => (e.includes(t.set) ? e : e.concat(t.set)), []),
            });
        } else if (Array.isArray(o.state.unlocks)) {
            o.setState({
                unlocks: Object.keys(e),
            });
        } else {
            o.setState({
                unlocks: e,
            });
        }
    }
})();

