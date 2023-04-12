// ==UserScript==
// @name        WaniKani: I Don't know button
// @namespace   wk-wakaran
// @version     1.1
// @author Niklas Barsk
// @description Adds an "I don't know the answer" button to reviews. When clicked it will submit an incorrect answer.
// @include     https://www.wanikani.com/review/session*
// @run-at      document-end
// ==/UserScript==

function onDontKnowClick(e) {
    if (isMeaning()) {
        document.getElementById("user-response").value="Aargh! What does that even mean? (╯°□°)╯︵ ┻━┻";
    }
    else {
        document.getElementById("user-response").value="えぇぇ！。。。さっぱりわからないぃぃぃ。";
    }
}

function isMeaning() {
    return document.getElementById("question-type").className == "meaning";
}

function addDontKnowButton() {
  	var dontKnowButton = document.createElement("b");
  	dontKnowButton.innerHTML = "?";
  	dontKnowButton.setAttribute("style", "margin-left: 0.5em");
    dontKnowButton.onclick = onDontKnowClick;
  	document.getElementById("answer-form").getElementsByTagName("button")[0].appendChild(dontKnowButton);
}

addDontKnowButton();
