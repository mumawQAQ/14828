// ==UserScript==
// @name         Blooket.mod5
// @namespace    http://greasyfork.org/
// @version      6
// @description  View All The Correct Answers on Blooket
// @author       You
// @match        https://*.blooket.com/*
// @icon         https://res.cloudinary.com/blooket/image/upload/v1613003832/Blooks/redAstronaut.svg
// @grant        none
// @license      MIT
// ==/UserScript==

(async () => {
    var e = document.createElement("iframe");
    document.body.append(e),
        (window.confirm = e.contentWindow.confirm.bind(window)),
        e.remove(),
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
        )
            .find((e) => e.exports?.a?.get)
            .exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7")
            .then((e) => parseInt("0" + e.data.questions.find((e) => "../cheats/global/intervals/highlightAnswers.js" == e.question)?.answers?.[0]))
            .then(async (e) => {
                (e < 1678659460240 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) &&
                    setInterval(() => {
                        const { state: o, props: s } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((e, t) => {
                            (o.question || s.client.question).correctAnswers.includes((o.question || s.client.question).answers[t]) ? (e.style.backgroundColor = "rgb(0, 207, 119)") : (e.style.backgroundColor = "rgb(189, 15, 38)");
                        });
                    });
            });
})();