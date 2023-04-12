// ==UserScript==
// @name         Paper.io Hacked Menu
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Here is a simple hack menu for Paper.io! Make sure to press "Start Game" IN THE MENU for the arena color to work!
// @author       Logzilla6
// @match        https://paper-io.com/*
// @icon         https://www.google.com/s2/favicons?domain=paper-io.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   let overlayHTML = `
<div id="box">
    <div class="main" id="box2">
        <p style="color:white;"> PaperHack </p>

        <section><label>Zoom [Scroll]</label></section>
        <section><label>Pause [P]</label></section>
        <section><div class="dropdown"><button class="button">Skin [Hover]</button>
        <div class="dropdown-content"><p id="skinbtn1">No Skin</p><p id="skinbtn2">Nyan Cat</p><p id="skinbtn3">Watermelon</p><p id="skinbtn4">Pac Man Ghost</p><p id="skinbtn5">Pizza</p><p id="skinbtn6">Minion</p><p id="skinbtn7">Fred Fazbear</p><p id="skinbtn8">Spiderman</p></div>
        <div class="dropdown-content1"><p id="skinbtn9">TeleTubby</p><p id="skinbtn10">Unicorn</p><p id="skinbtn12">Heart</p><p id="skinbtn11">Rainbow Heart</p><p id="skinbtn13">Bat</p><p id="skinbtn14">Sushi</p><p id="skinbtn15">Cash</p><p id="skinbtn16">Cake</p></div>
        <div class="dropdown-content2"><p id="skinbtn17">Pool Floaty</p><p id="skinbtn18">Tank</p><p id="skinbtn19">Ladybug</p><p id="skinbtn22">Christmas Tree</p><p id="skinbtn20">Cheeseburger</p><p id="skinbtn21">Orange</p><p id="skinbtn23">Present</p><p id="skinbtn24">Snowman</p></div>
        <div class="dropdown-content3"><p id="skinbtn25">Cupid</p><p id="skinbtn26">Thanos</p><p id="skinbtn28">Reaper</p><p id="skinbtn27">Captain America</p><p id="skinbtn29">Pennywise</p><p id="skinbtn30">Joker</p><p id="skinbtn31">Batman</p><p id="skinbtn32">Geralt</p></div>
        <div class="dropdown-content4"><p id="skinbtn33">Covid-19</p><p id="skinbtn34">Doctor</p><p id="skinbtn35">Sanitizer</p><p id="skinbtn36">Stay Safe Mask</p><p id="skinbtn37">Cyberpunk</p><p id="skinbtn38">Chess Piece</p><p id="skinbtn39">Yoda</p></div>
        </section>
        <section><div class="dropdown"><button class="button" id="startButton">Start Game</button></section>
        <br>
        <section><label>Arena Color:</label></section>
        <section><input type="color" id="arenaColor" value="#e7fff4"></input></section>
        <br>
        <section><label>Fly Hack:</label></section>
        <section><label>TFGH = WASD</label></section>
        <br>
        <section><label>Game Speed:</label><input type="range" min="1" max="180" value="90" id="gsSlider"></section>
        <section><label id="gsValue">90</label></section>
        <p>M to toggle menu</p>

</div>
</div>

<style>
#box {
    z-index: 10;
    position: absolute;
    top: 256px;
    left: 7px;
    transition: 0.5s;
    }

#box2 {
    padding: 15px;
    margin-bottom: 5px;
    display: grid;
    }

section {
    margin: auto;
   display: flex;
    justify-content: space-between;padding:5px;
    }

.main {
    background-color: #363c3d;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    color:white;
    border-radius: 8px;
    }
p {
    text-align: center;
    border-bottom:1px solid white;
    border-top:1px solid white;
}

label {
    font-weight: bold}

.button {
  margin: auto;
  background-color: #242829;
  color: white;
  font-size: 16px;
  border: none;
  padding: 8px;
  border-radius: 6px;
  transition: 0.15s;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 5px solid #121414;
}

.dropdown-content1 {
  display: none;
  position: absolute;
  left: 170px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 5px solid #121414;
}

.dropdown-content2 {
  display: none;
  position: absolute;
  left: 340px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 5px solid #121414;
}

.dropdown-content3 {
  display: none;
  position: absolute;
  left: 510px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 5px solid #121414;
}

.dropdown-content4 {
  display: none;
  position: absolute;
  left: 680px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 5px solid #121414;
}

.dropdown-content p {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.dropdown-content1 p {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.dropdown-content2 p {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.dropdown-content3 p {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.dropdown-content4 p {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}



.dropdown-content p:hover {background-color: #121414;}

.dropdown-content1 p:hover {background-color: #121414;}

.dropdown-content2 p:hover {background-color: #121414;}

.dropdown-content3 p:hover {background-color: #121414;}

.dropdown-content4 p:hover {background-color: #121414;}

.custom-button p:hover {background-color: #121414;}

.dropdown:hover .dropdown-content {display: block; background-color: #242829;}

.dropdown:hover .dropdown-content1 {display: block; background-color: #242829;}

.dropdown:hover .dropdown-content2 {display: block; background-color: #242829;}

.dropdown:hover .dropdown-content3 {display: block; background-color: #242829;}

.dropdown:hover .dropdown-content4 {display: block; background-color: #242829;}

.dropdown:hover .button {background-color: #121414;}
</style>
`

function get(x)            { return document.getElementById(x); };

let overlay             = document.createElement("div");
    overlay.innerHTML   = overlayHTML;
    document.body.appendChild(overlay);

let acc                 = get("accordian"),
    sb1                 = get("skinbtn1"),
    sb2                 = get("skinbtn2"),
    sb3                 = get("skinbtn3"),
    sb4                 = get("skinbtn4"),
    sb5                 = get("skinbtn5"),
    sb6                 = get("skinbtn6"),
    sb7                 = get("skinbtn7"),
    sb8                 = get("skinbtn8"),
    sb9                 = get("skinbtn9"),
    sb10                 = get("skinbtn10"),
    sb11                 = get("skinbtn11"),
    sb12                 = get("skinbtn12"),
    sb13                 = get("skinbtn13"),
    sb14                 = get("skinbtn14"),
    sb15                 = get("skinbtn15"),
    sb16                 = get("skinbtn16"),
    sb17                 = get("skinbtn17"),
    sb18                 = get("skinbtn18"),
    sb19                 = get("skinbtn19"),
    sb20                 = get("skinbtn20"),
    sb21                 = get("skinbtn21"),
    sb22                 = get("skinbtn22"),
    sb23                 = get("skinbtn23"),
    sb24                 = get("skinbtn24"),
    sb25                 = get("skinbtn25"),
    sb26                 = get("skinbtn26"),
    sb27                 = get("skinbtn27"),
    sb28                 = get("skinbtn28"),
    sb29                 = get("skinbtn29"),
    sb30                 = get("skinbtn30"),
    sb31                 = get("skinbtn31"),
    sb32                 = get("skinbtn32"),
    sb33                 = get("skinbtn33"),
    sb34                 = get("skinbtn34"),
    sb35                 = get("skinbtn35"),
    sb36                 = get("skinbtn36"),
    sb37                 = get("skinbtn37"),
    sb38                 = get("skinbtn38"),
    sb39                 = get("skinbtn39"),
    sb40                 = get("skinbtn40"),
    startButton          = get ("startButton"),
    hackroyale           = get ("hackedRoyale"),
    testchange           = get ("testChange"),
    box                  = get ("box");

    //WARNING Skins 31-34 will cause crash. geralt=35

box.style.opacity = "1";

document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        let opac = box.style.opacity

        if(opac == 1) {
            box.style.opacity = "0";
        }
        else {
            box.style.opacity = "1";
        }
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
        let paused = paper2.game.paused

        if(paused == false) {
            paper2.game.paused = true
        }
        else {
            paper2.game.paused = false
        }
    }
})
    sb1.onclick = function() {
    document.cookie = "skin=skin_00"
    location.reload();
}
    sb2.onclick = function() {
    document.cookie = "skin=skin_01"
    location.reload();
}
    sb3.onclick = function() {
    document.cookie = "skin=skin_02"
    location.reload();
}
    sb4.onclick = function() {
    document.cookie = "skin=skin_03"
    location.reload();
}
    sb5.onclick = function() {
    document.cookie = "skin=skin_04"
    location.reload();
}
    sb6.onclick = function() {
    document.cookie = "skin=skin_05"
    location.reload();
}
    sb7.onclick = function() {
    document.cookie = "skin=skin_06"
    location.reload();
}
    sb8.onclick = function() {
    document.cookie = "skin=skin_07"
    location.reload();
}
    sb9.onclick = function() {
    document.cookie = "skin=skin_08"
    location.reload();
}
    sb10.onclick = function() {
    document.cookie = "skin=skin_09"
    location.reload();
}
    sb11.onclick = function() {
    document.cookie = "skin=skin_10"
    location.reload();
}
    sb12.onclick = function() {
    document.cookie = "skin=skin_11"
    location.reload();
}
    sb13.onclick = function() {
    document.cookie = "skin=skin_12"
    location.reload();
}
    sb14.onclick = function() {
    document.cookie = "skin=skin_13"
    location.reload();
}
    sb15.onclick = function() {
    document.cookie = "skin=skin_14"
    location.reload();
}
    sb16.onclick = function() {
    document.cookie = "skin=skin_15"
    location.reload();
}
    sb17.onclick = function() {
    document.cookie = "skin=skin_16"
    location.reload();
}
    sb18.onclick = function() {
    document.cookie = "skin=skin_17"
    location.reload();
}
    sb19.onclick = function() {
    document.cookie = "skin=skin_18"
    location.reload();
}
    sb20.onclick = function() {
    document.cookie = "skin=skin_19"
    location.reload();
}
    sb21.onclick = function() {
    document.cookie = "skin=skin_20"
    location.reload();
}
    sb22.onclick = function() {
    document.cookie = "skin=skin_21"
    location.reload();
}
    sb23.onclick = function() {
    document.cookie = "skin=skin_22"
    location.reload();
}
    sb24.onclick = function() {
    document.cookie = "skin=skin_23"
    location.reload();
}
    sb25.onclick = function() {
    document.cookie = "skin=skin_24"
    location.reload();
}
    sb26.onclick = function() {
    document.cookie = "skin=skin_25"
    location.reload();
}
    sb27.onclick = function() {
    document.cookie = "skin=skin_26"
    location.reload();
}
    sb28.onclick = function() {
    document.cookie = "skin=skin_27"
    location.reload();
}
    sb29.onclick = function() {
    document.cookie = "skin=skin_28"
    location.reload();
}
    sb30.onclick = function() {
    document.cookie = "skin=skin_29"
    location.reload();
}
    sb31.onclick = function() {
    document.cookie = "skin=skin_30"
    location.reload();
}
    sb32.onclick = function() {
    document.cookie = "skin=skin_35"
    location.reload();
}
    sb33.onclick = function() {
    document.cookie = "skin=skin_36"
    location.reload();
}
    sb34.onclick = function() {
    document.cookie = "skin=skin_37"
    location.reload();
}
    sb35.onclick = function() {
    document.cookie = "skin=skin_38"
    location.reload();
}
    sb36.onclick = function() {
    document.cookie = "skin=skin_39"
    location.reload();
}
    sb37.onclick = function() {
    document.cookie = "skin=skin_40"
    location.reload();
}
    sb38.onclick = function() {
    document.cookie = "skin=skin_42" //41 breaks
    location.reload();
}
    sb39.onclick = function() {
    document.cookie = "skin=skin_43" //41 breaks
    location.reload();
}
    startButton.onclick = function() {
    paper2.game.debug = true
    game_start();
    paper2.configs.paper2_classic.arenaColor = document.getElementById('arenaColor').value;

}
let slider = document.getElementById('gsSlider')
let output = document.getElementById('gsValue')
slider.oninput = function() {
  output.innerHTML = this.value;
  paper2.game.config.unitSpeed = this.value;
}
window.addEventListener('wheel', function(event)
{
 if (event.deltaY > 0)
 {
  if (window.paper2.configs.paper2_classic.maxScale > 0.5)
  {
  window.paper2.configs.paper2_classic.maxScale -= 0.5;
  }
 }
 else if (event.deltaY < 0)
 {
  if (window.paper2.configs.paper2_classic.maxScale < 4.5)
 {
  window.paper2.configs.paper2_classic.maxScale += 0.5;
 }
 }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'f') {

        paper2.game.player.position.x -= 7
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {

        paper2.game.player.position.x += 7
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 't') {

        paper2.game.player.position.y -= 7
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'g') {

        paper2.game.player.position.y += 7
    }
})
})();