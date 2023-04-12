// ==UserScript==
// @name         Codenames Cheat
// @namespace    https://greasyfork.org/fr/users/11667-hoax017
// @version      1.1.0
// @description  add cheat button on Codenames game rooms
// @author       Hoax017
// @match        https://codenames.game/room/*
// @screen       http://prntscr.com/10zfnml
// @grant        none
// ==/UserScript==

new class {
    enabled = false;
    firstInit = true;
    colorCards = null;
    wordCards = null;
    data = [];
    createButton() {
        this.enabled = false;
        const buttons = document.querySelectorAll("nav button");
        if (!buttons || !buttons.length) return;
        let cheatButton = buttons[0].parentNode.cloneNode(true)
        cheatButton.id = "HoaxCheat"
        let parent = buttons[0].parentNode.parentNode
        parent.appendChild(document.querySelector("div.w-2").cloneNode(true))
        parent.appendChild(cheatButton)
        let button = cheatButton.querySelector("button")
        button.style = "border-color: rgb(0 19 243);background-color: rgb(0 149 255);"
        button.querySelector("div").innerText = "HoaxCheat";
        button.addEventListener("click", this.clickHoaxCheat.bind(this));
        if (this.firstInit) {
            this.firstInit = false;
            this.wordCards = document.querySelectorAll("#gamescene > main > main:nth-of-type(3) > div")
            this.colorCards = document.querySelectorAll("#gamescene > main > main:nth-of-type(3) > main.coverToken")
            let data = [];
            for (let index in this.wordCards) {
                if (!Number.isInteger(parseInt(index))) continue;
                let currentWord = this.wordCards[index]
                let currentColor = this.colorCards[index]

                let colorDiv = currentColor.querySelector("div.cover")

                let color;
                for(let ccolor of ['red', 'blue', 'black', 'gray']) {
                    if (colorDiv && colorDiv.classList.contains(ccolor)) {
                        color = ccolor;
                        break;
                    }
                }


                this.data.push({
                    wordElem: currentWord,
                    colorElem: currentColor,
                    color,
                    word: currentWord.querySelector("section > div").innerText,
                    index: index
                })
            }
        }
    }
    clickHoaxCheat() {
        if (this.enabled) {
            this.disableCheat()
        } else {
            this.enableCheat()
        }
    }
    disableCheat() {
        this.enabled = false;
        for (let data of this.data) {
            let originals = data.wordElem.querySelectorAll(".blue, .red, .black")
            if (!originals || !originals.length) continue;
            for (let original of originals) {
                original.classList.remove("blue")
                original.classList.remove("red")
                original.classList.remove("black")
                if (original.classList.contains("cardImage"))
                    original.classList.add("gray")
            }
        }
    }
    enableCheat() {
        this.enabled = true;
        for (let data of this.data) {
            if (data.color !== "gray") {
                let original = data.wordElem.querySelector(".gray")
                if (original) {
                    original.classList.remove("gray")
                    original.classList.add(data.color)
                    if (data.color === "black")
                        original.parentNode.classList.add(data.color)
                }
            }
        }
    }
    constructor() {
        setInterval(_ => {
            if (!document.querySelector("#HoaxCheat"))
                this.createButton();
        }, 1000)
    }
}