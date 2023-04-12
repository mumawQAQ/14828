// ==UserScript==
// @name         Blooket Winner
// @namespace    http://tampermonkey.net/
// @namespace    https://violentmonkey.github.io
// @namespace    https://www.greasespot.net
// @version      18.0
// @description  Get every answer in Blooket correct!
// @author       You
// @match        https://play.blooket.com/play*
// @match        https://goldquest.blooket.com/*
// @match        https://monsterbrawl.blooket.com/*
// @match        https://cryptohack.blooket.com/*
// @match        https://fishingfrenzy.blooket.com/*
// @match        https://deceptivedinos.blooket.com/*
// @match        https://blookrush.blooket.com/*
// @match        https://battleroyale.blooket.com/*
// @match        https://towerdefense.blooket.com/*
// @match        https://cafe.blooket.com/*
// @match        https://factory.blooket.com/*
// @match        https://racing.blooket.com/*
// @match        https://crazykingdom.blooket.com/*
// @match        https://towerofdoom.blooket.com/*
// @match        https://classic.blooket.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==
 



(()=>{
    function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
    window.setInterval(()=>{
    try{
        getStateNode().state.question.correctAnswers = getStateNode().state.question.answers
    }catch {
        
    }
});
})();