// ==UserScript==
// @name         TIKTOK DOWNLOAD
// @name:es      Tiktok descargar videos
// @namespace    https://ebriopes.github.io/
// @version      1.2
// @description  Add a button to be able download videos from tiktok desktop
// @description:es Agrega un boton para poder descargar el video actual
// @author       Ebriopes
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// @license      GNU GPLv3
// ==/UserScript==

//Class Video
class VideoPlayer {
    #container
    #scrollPlayers

    constructor() {
        // get tiktok container
        this.#container = document.evaluate(
            '//*[@id="app"]//div[contains(@class, "BodyContainer")]',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue

        this.#scrollPlayers = new MutationObserver(this.#scrollObserver.bind(this))

        this.#createStyles()
    }

    playerHandler(bodyContainer = this.#container) {
        const isFullscreenPlayer = bodyContainer?.children?.length === 3;
        let buttonsGroup

        this.#scrollPlayers.disconnect()

        // We start for evaluate what kind of window is open
        if (isFullscreenPlayer) {
            buttonsGroup = document.evaluate(
                '//div[contains(@data-e2e, "browse-share-group")]',
                bodyContainer, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue

            return this.#addButton(buttonsGroup, "fullscreen")
        }

        //If doesn't is fullscreen player get the main container 
        const mainContainer = document.evaluate(
            '//div[contains(@class, "MainContainer")]/div[1]',
            bodyContainer, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        )?.singleNodeValue

        // There is an unique video player
        if (mainContainer?.className) {
            buttonsGroup = document.evaluate(
                '//div[contains(@class, "DivActionItemContainer")]',
                mainContainer, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue

            return this.#addButton(buttonsGroup)
        }

        //Scroll section, the last option
        this.#scrollPlayers.observe(mainContainer, { childList: true, subtree: true })
    }

    playerType(container = this.#container) {
        const playerType = new MutationObserver(this.#bodyObserver.bind(this))

        // Observe changes at the container
        playerType.observe(container, { childList: true })
    }

    #addButton(actionButtons, playerType = "") {
        const moreOptions = actionButtons?.lastChild
        const newButton = moreOptions?.cloneNode(true)

        if (newButton) {
            moreOptions?.insertAdjacentElement('beforebegin', newButton)

            if (playerType !== "fullscreen" && actionButtons) actionButtons.style.top = '345px'

            newButton.addEventListener('click', this.#requestVideo.bind(this, { playerType }))

            while (newButton.firstChild) {
                newButton.removeChild(newButton.firstChild);
            }

            newButton.classList.add('download')
            newButton.innerHTML = this.#downloadSvg(playerType)
        }
    }

    #createStyles() {
        const css = `
            svg{
                pointer-events: none;
            }
                 
            .spin{
              animation: spin 2s infinite alternate;
             }

             @keyframes spin {
               from {
                 transform: rotate(0deg);
               }
    
               to {
                 transform: rotate(360deg);
               }
             }
            `

        const styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode);
    }

    // Defining icons
    #downloadSvg = (type) => {
        const configStyle = { 
            background: "rgba(22, 24, 35, 0.06)", 
            filter: "drop-shadow(0 0 10px black)", 
            color: "white", 
            padding: "0", 
            radius: "50%",
            height: 32,
            width: 32
        }

        switch (type) {
            case "fullscreen":
                configStyle.color = "black"
                configStyle.filter = ""
                break;
            case "scroll":
                configStyle.color = "black"
                configStyle.padding = "10px"
                configStyle.width = 50
                configStyle.height = 50
                configStyle.filter = ""
                break
            default:
                break;
        }

        return `
            <svg width=${configStyle.width} height=${configStyle.height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            style="background-color: ${configStyle.background};padding: ${configStyle.padding};border-radius: ${configStyle.radius};" 
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 299.998 299.998" xml:space="preserve">
              <g color="${configStyle.color}" filter="${configStyle.filter}">
                <path fill="currentcolor" d="M149.995,0C67.156,0,0,67.159,0,149.997c0,82.837,67.156,150,149.995,150s150.003-67.163,150.003-150
                    C299.997,67.159,232.834,0,149.995,0z M110.967,105.357c2.075-2.075,4.793-3.112,7.511-3.112c2.718,0,5.434,1.037,7.508,3.112
                    l13.297,13.295v-3.911V62.477c0-5.867,4.754-10.621,10.621-10.621s10.621,4.754,10.621,10.621v52.263v4.63l4.63-4.63l9.386-9.384
                    c2.075-2.075,4.79-3.112,7.508-3.112s5.436,1.037,7.511,3.112c2.552,2.549,3.522,6.079,2.933,9.384
                    c0,0.003-0.003,0.005-0.003,0.008c-0.044,0.239-0.119,0.469-0.179,0.703c-0.091,0.366-0.189,0.729-0.322,1.084
                    c-0.088,0.239-0.189,0.472-0.296,0.705c-0.166,0.371-0.358,0.726-0.568,1.079c-0.112,0.187-0.215,0.373-0.34,0.552
                    c-0.363,0.524-0.76,1.032-1.227,1.499l-15.115,15.115l-16.591,16.591c-2.077,2.075-4.793,3.105-7.508,3.105
                    c-0.026,0-0.052,0-0.078,0s-0.054,0-0.078,0c-2.715,0-5.431-1.03-7.508-3.105l-16.591-16.591l-15.115-15.115
                    c-0.467-0.467-0.864-0.973-1.222-1.496c-0.127-0.184-0.231-0.373-0.345-0.56c-0.207-0.35-0.397-0.703-0.563-1.069
                    c-0.109-0.239-0.213-0.475-0.301-0.718c-0.127-0.348-0.223-0.7-0.314-1.056c-0.062-0.246-0.143-0.485-0.187-0.734
                    C107.444,111.436,108.412,107.906,110.967,105.357z M231.574,209.315h-0.003c0,14.337-14.057,25.568-32.005,25.568h-99.132
                    c-17.945,0-32.005-11.23-32.005-25.568V140.31c0-12.117,10.058-21.988,24.004-24.761c0.604,5.981,3.224,11.526,7.534,15.834
                    l4.108,4.108h-3.641c-7.265,0-11.256,3.621-11.256,4.819v69.005c0,1.201,3.992,4.819,11.256,4.819h99.135
                    c7.265,0,11.256-3.621,11.256-4.819V140.31c0-1.198-3.992-4.819-11.256-4.819h-3.12l4.111-4.111
                    c4.282-4.279,6.894-9.786,7.516-15.727c13.681,2.913,23.498,12.69,23.498,24.66V209.315z"/>
              </g>
            </svg>`
    }
    //End defining icons

    // Formatter text
    #normalize(str) {
        return str?.toString()
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .trim()
            .replace(/\s/g, '_').replace(/[\W_]+/g, '_')
    }
    // End Formatter

    #bodyObserver(mutationList, observer) {
        mutationList.forEach(({ target, type }) => {
            this.playerHandler(target)
        })
    }

    #scrollObserver(mutationList, observer) {
        mutationList.forEach(({ target }) => {
            const activeVideoButtons = document.evaluate(
                // Here we acces to the content tha have a child with a child with 5 divs
                // that means the container that have video controllers
                // next only it search for the group buttons (Action Items)
                '//div[contains(@class,"DivVideoWrapper")][div[div[count(div) = 5]]]//div[contains(@class, "ActionItem")]',
                target, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue

            const existDownloadButton = activeVideoButtons?.getElementsByClassName('download')

            if (existDownloadButton?.length) return;

            return this.#addButton(activeVideoButtons, "scroll")
        })
    }

    #requestVideo({ playerType }, { target: element }) {
        const xhr = new XMLHttpRequest();
        const description = document.evaluate(
            playerType === 'scroll' ?
                '//div[contains(@class,"ContentContainer")][div[div[div[count(div) = 5]]]]//div[contains(@class, "TextInfo")]//div[@data-e2e="video-desc"]' :
                '//*[@id="app"]//div[@data-e2e="browse-video-desc"]/span[1]',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        const sourceVideo = document.getElementsByTagName('video')[0]?.src
        const link = document.createElement('a')
        const videoTitle = `${this.#normalize(description?.innerText) || 'tiktok'}.mp4`

        link.target = '_blank';
        link.download = videoTitle;

        element.classList.add('spin')

        xhr.open('GET', sourceVideo, true);
        xhr.responseType = 'blob';

        xhr.onload = function () {
            const urlCreator = window.URL || window.webkitURL;
            const video = urlCreator.createObjectURL(this.response);

            link.href = video;
            link.click();
            element.classList.remove('spin')
        };

        xhr.onerror = err => {
            element.classList.remove('spin')

            alert('Failed to download video\nTrying open video in other tab\nYou will be redirected...')

            link.href = sourceVideo;
            link.click();
        };

        xhr.send();
    }
}

// Start Main function
(function () {
    'use strict';

    const videoHandler = new VideoPlayer()

    // This block charge when all the resources are loaded
    // listen for DOMContentLoaded event in the document
    window.addEventListener("load", function () {
        // Execute
        videoHandler.playerHandler()

        videoHandler.playerType()
    });
})();
//End main
