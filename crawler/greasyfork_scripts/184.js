// ==UserScript==
// @name         Khan Academy Problem Solver
// @version      3.2
// @description  Here is a Khan Academy Solver!
// @author       Logzilla6
// @match        https://www.khanacademy.org/*
// @grant        none
// @namespace https://greasyfork.org/users/783447
// ==/UserScript==
 
(function () {
  let overlayHTML = ` <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<div id="box">
<button class="main" id="accordian">Toggle</button>
    <div class="main" id="box2">
        <p class="pdark" id="pdark"> KhanHack </p>
        <section><label>Answer: [<label id="ans1" value="thisisvalue">...</label>]</section>
        <button class="inputans" id="inputans">Copy</button><br>
        <section><label>Next And Last Answer: [<label id="ans2">...</label>]</section>
        <button class="inputans" id="inputans2">Copy</button>
        <section><label>&nbsp;</label></section>
        <section><label id="ans3text">Dropdown 1: [<label id="ans3">...</label>]</label></section>
        <section><label id="ans4text">Dropdown 2: [<label id="ans4">...</label>]</label></section>
        <section><label id="ans5text">Dropdown 3: [<label id="ans5">...</label>]</label></section>
        <section><label>&nbsp;</label></section>
        <section class="toggleclass"><label>M also toggles Menu</label></section>
    </div>
</div>
 
<style>
#box {
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;}
#box2 {
    padding: 15px;
    margin-bottom: 5px;
    display: none;
    border-radius: 25px;};
section {
    display: flex;
    justify-content: space-between;margin:5px;}
.main {
    background-color: #072357;
    letter-spacing: 2px;
    font-weight: none;
    font-size: 11px;
    font-family: 'Roboto', sans-serif;
    color:white;
    webkit-user-select: all;}
.pdark {
   border-bottom:2px solid white;}
#accordian {
    width: 100%;
    border: 0;
    cursor: pointer;
    border-radius: 25px;}
.inputans {
width: 15%;
    border: 0;
    cursor: pointer;
    border-radius: 25px;
    background-color: #0b40a1;
    color: white;
    font-family: 'Roboto', sans-serif;
    display: none;
}
.inputans:hover {
background-color: #0b378a;
}
.toggleclass {
text-align: center;
}
</style>
`
 
 
function get(x)            { return document.getElementById(x); }
 
let overlay = document.createElement("div");
    overlay.innerHTML = overlayHTML;
    document.body.appendChild(overlay);
 
let acc = get("accordian"),
    darkToggle = get("darkToggle"),
    ansbutton = get("inputans"),
    ansbutton2 = get("inputans2")
 
acc.onclick = function() {
    let panel = get("box2");
    let acc = get("accordian")
    if (panel.style.display == "grid") panel.style.display = "none";
    else { panel.style.display = "grid";}
 
}
 
document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
 
      let panel = get("box2");
    if (panel.style.display == "grid") panel.style.display = "none";
    else { panel.style.display = "grid"; }
    }
});
 
    'use strict';
    window.loaded = false;
    class Answer {
        constructor(answer, type) {
            this.body = answer;
            this.type = type;
        }
 
        get isMultiChoice() {
            return this.type == "multiple_choice";
        }
 
        get isFreeResponse() {
            return this.type == "free_response";
        }
 
        get isExpression() {
            return this.type == "expression";
        }
 
        get isDropdown() {
            return this.type == "dropdown";
        }
    }
 
    const originalFetch = window.fetch;
    window.fetch = function () {
        return originalFetch.apply(this, arguments).then((res) => {
            if (res.url.includes("/getAssessmentItem")) {
                const clone = res.clone();
                clone.json().then(json => {
                    let item, question;
 
                    try {
                        item = json.data.assessmentItem.item.itemData;
                        question = JSON.parse(item).question;
                    } catch {
                        let errorIteration = () => { return localStorage.getItem("error_iter") || 0; }
                        localStorage.setItem("error_iter", errorIteration() + 1);
 
                        if (errorIteration() < 4) {
                            return location.reload();
                        } else {
                            return alert("An error occurred");
                        }
                    }
 
                    if (!question) return;
 
                    Object.keys(question.widgets).map(widgetName => {
                        switch (widgetName.split(" ")[0]) {
                            case "numeric-input":
                                return freeResponseAnswerFrom(question);
                            case "radio":
                                return multipleChoiceAnswerFrom(question);
                            case "expression":
                                return expressionAnswerFrom(question);
                            case "dropdown":
                                return dropdownAnswerFrom(question);
                        }
                    });
                });
            }
 
            return res;
        })
    }
 
    function freeResponseAnswerFrom(question) {
        const answer = Object.values(question.widgets).map((widget) => {
            if (widget.options?.answers) {
                return widget.options.answers.map(answer => {
                    if (answer.status == "correct") {
                       //alert('freeresponse')
 					   ansbutton.style.display = "none"
        			   ansbutton2.style.display = "none"                      
                       var ans1 = document.getElementById('ans1').innerHTML
                       var ans2 = document.getElementById('ans2').innerHTML
                       
                       document.getElementById('ans2').innerHTML = (answer.value)
                       document.getElementById('ans1').innerHTML = (ans2)
                       
                    }
                 });
 
            }
        }).flat().filter((val) => { return val !== undefined; });
 
        return new Answer(answer, "free_response");
    }
 
    function multipleChoiceAnswerFrom(question) {
        const answer = Object.values(question.widgets).map((widget) => {
            if (widget.options?.choices) {
                return widget.options.choices.map(choice => {
                    if (choice.correct) {
  						//alert('multichoice')
 					   ansbutton.style.display = "none"
        			   ansbutton2.style.display = "none"                      
                       var ans1 = document.getElementById('ans1').innerHTML
                       var ans2 = document.getElementById('ans2').innerHTML
 
                       document.getElementById('ans2').innerHTML = (choice.content)
                       document.getElementById('ans1').innerHTML = (ans2)
                    }
                });
            }
        }).flat().filter((val) => { return val !== undefined; });
 
 
        return new Answer(answer, "multiple_choice");
    }
 
    function expressionAnswerFrom(question) {
        const answer = Object.values(question.widgets).map((widget) => {
            if (widget.options?.answerForms) {
                return widget.options.answerForms.map(answer => {
                    if (Object.values(answer).includes("correct")) {
                      //alert('expression')
                        ansbutton.style.display = "grid"
                        ansbutton2.style.display = "grid"
                      var ans1 = document.getElementById('ans1').innerHTML
                      var ans2 = document.getElementById('ans2').innerHTML
                      var ans1val = document.getElementById('ans1').value
 
 
                      document.getElementById('ans2').innerHTML = (answer.value)
                      document.getElementById('ans1').innerHTML = (ans2)
 
                      ansbutton.onclick = function() {
                      prompt("Copy and paste this into the answer box", (document.getElementById('ans1').innerHTML))
                      }
 
                      ansbutton2.onclick = function() {
                      prompt("Copy and paste this into the answer box", (document.getElementById('ans2').innerHTML))
                      }
 
                    }
                });
            }
        }).flat();
        return new Answer(answer, "expression");
    }
 
    function dropdownAnswerFrom(question) {
        const answer = Object.values(question.widgets).map((widget) => {
            if (widget.options?.choices) {
                return widget.options.choices.map(choice => {
                    if (choice.correct) {
                        //alert('dropdown')
 					   ansbutton.style.display = "none"
        			   ansbutton2.style.display = "none"
                      
                       var ans1 = document.getElementById('ans1').innerHTML
                       var ans2 = document.getElementById('ans2').innerHTML
                       var ans3 = document.getElementById('ans3').innerHTML
                       var ans4 = document.getElementById('ans4').innerHTML
                       var ans5 = document.getElementById('ans5').innerHTML
 
                       document.getElementById('ans2').innerHTML = (choice.content)
                       document.getElementById('ans1').innerHTML = (ans2)
                       document.getElementById('ans5').innerHTML = (choice.content)
                       document.getElementById('ans4').innerHTML = (ans5)
                       document.getElementById('ans3').innerHTML = (ans4)
                    }
                });
            }
        }).flat();
        return new Answer(answer, "dropdown");
    }      
})();