// ==UserScript==
// @name         Diep.io Working AUTOBUILD/Upgrader!
// @namespace    http://tampermonkey.net/
// @version      6.3
// @homepage     https://greasyfork.org/scripts/416440
// @description  Check out make new script Diep.io audio/music/sound beta https://greasyfork.org/en/scripts/461192-diep-io-audio-music-sound-beta How to use: You should see a menu bar on the right side of the screen, hover over it and the menu will slide out! When out click on the buttons shown! This should upgrade your tank automatically! If you don't know what the upgrades do, press [T] twice/once.
// @author       -{Abyss⌬}-ora
// @match        https://diep.io/
// @grant        none
// @license      GNU GPLv3
// ==/UserScript==

(function () {
  "use strict";
//-------------------------------------[AUTOBUILD BUTTON]------------------------------------\\
    const myhoverElem = document.createElement('div');
    myhoverElem.id = 'myhover';
    myhoverElem.classList.add('hover');

    const modtabAnchorElem = document.createElement('a');
    modtabAnchorElem.id = 'modtab';

    const h1Elem = document.createElement('h1');
    h1Elem.textContent = '-{Abyss⌬}-ora\'s modmenu';

    modtabAnchorElem.appendChild(h1Elem);

    const styleElem = document.createElement('style');
    styleElem.type = 'text/css';

    styleElem.textContent = `
#myhover a {
  background-image: url("https://media.tenor.com/images/f3f5354b7c304bc61882dbb1183885e7/tenor.gif");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 160px 100px;
  position: absolute;
  right: -200px;
  transition: 0.3s;
  padding: 15px;
  width: 250px;
  text-decoration: none;
  font-size: 10px;
  font-family: 'Monoton', cursive;
  text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;
  src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  color: white;
  border-radius: 5 5px 5px 5;
  border-style: solid;
  border-width: thick;
  border-top-right-radius: 20px 50px;
  border-top-left-radius: 20px 50px;
  border-top-width: 20px;
  border-style: double;
  border-bottom-right-radius: 20px 50px;
  border-bottom-left-radius: 20px 50px;
  border-top-color: lightpink;
  border-left-color: lightgray;
  border-bottom-color: lightpink;
  border-right-color: lightgray;
}

    #myhover a:hover {
      right: 0;
    }

    #modtab {
      top: 200px;
      background-color: #555
    }

    .pointer {
      cursor: pointer;
    }

  .button:hover {
    transform: translateX(-10px);
  }

  .button {
    position: relative;
    transition-duration: 0.4s;
    overflow: hidden;
    cursor: pointer;
    font-family: 'Monoton', cursive;
    src: url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
    width: 200px;
    height: 26px;
  }

  .button:after {
    content: "";
    background: black;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`;

    document.body.appendChild(myhoverElem);

    document.head.appendChild(styleElem);

    const joinHoneyButton = document.createElement('button');
    const l3monFactoryButton = document.createElement('button');
    const myFactoryButton = document.createElement('button');
    const overLord2Button = document.createElement('button');
    const overLordButton = document.createElement('button');
    const healthBodyDmsButton = document.createElement('button');
    const smasherSpeedButton = document.createElement('button');
    const smasherDmsButton = document.createElement('button');
    const destroyerButton = document.createElement('button');
    const fastBulletsButton = document.createElement('button');
    const slowBulletsButton = document.createElement('button');
    const triAngleButton = document.createElement('button');
    const trapperButton = document.createElement('button');
    const semiRamBoosterButton = document.createElement('button');
    const antiRamButton = document.createElement('button');
    const pentratButton = document.createElement('button');
    const anniButton = document.createElement('button');
    const olButton = document.createElement('button');
    const resetButton = document.createElement('button');
    const mapdotStyle = document.createElement('style');
    const mapboxStyle = document.createElement('style');

    mapdotStyle.innerHTML = `
  .mapdot {
    height: .25vmax;
    width: .25vmax;
    background-color: black;
    border-radius: 50%;
    display: block;
    position: absolute;
    right: 5.4vmax;
    bottom: 5.4vmax;
    opacity: 0.2;
    pointer-events: none;
    outline: white solid .7vmax;
  }
`;

    mapboxStyle.innerHTML = `
  .mapbox {
    height: 8.78vmax;
    width: 8.78vmax;
    background-color: none;
    display: block;
    position: absolute;
    right: 1.2vmax;
    bottom: 1.2vmax;
    opacity: 0.5;
    pointer-events: none;
    outline: purple solid .35vmax;
    border: pink solid .2vmax;
  }
`;

    document.head.appendChild(mapdotStyle);
    document.head.appendChild(mapboxStyle);

    const div = document.createElement('div');
    const mapdot = document.createElement('span');
    const mapbox = document.createElement('span');

    mapdot.className = 'mapdot';
    mapbox.className = 'mapbox';

    div.appendChild(mapdot);
    div.appendChild(mapbox);

    document.body.appendChild(div);

    joinHoneyButton.title = 'joinhoney.com/ref/o4z5ern';
    joinHoneyButton.classList.add('button');
    joinHoneyButton.style.backgroundColor = '#f26c25';
    joinHoneyButton.style.color = '#fef9f6';
    joinHoneyButton.textContent = 'Join Honey!';
    joinHoneyButton.onclick = function() { window.open('http://joinhoney.com/ref/o4z5ern', '_blank'); };

    l3monFactoryButton.title = 'L3mon Factory';
    l3monFactoryButton.classList.add('button');
    l3monFactoryButton.style.backgroundColor = 'pink';
    l3monFactoryButton.style.color = 'black';
    l3monFactoryButton.textContent = '⌬L3mon Factory';
    l3monFactoryButton.onclick = function() { input.execute('game_stats_build 456845687456845687456845687456877'); };

    myFactoryButton.title = 'My Factory';
    myFactoryButton.classList.add('button');
    myFactoryButton.style.backgroundColor = 'white';
    myFactoryButton.style.color = 'black';
    myFactoryButton.textContent = '⌬Factory';
    myFactoryButton.onclick = function() { input.execute('game_stats_build 567456745678567456745678567488888'); };

    overLord2Button.title = 'w/less speed';
    overLord2Button.classList.add('button');
    overLord2Button.style.backgroundColor = 'purple';
    overLord2Button.style.color = 'white';
    overLord2Button.textContent = '⌬OverLord_2.0';
    overLord2Button.onclick = function() { input.execute('game_stats_build 456745674567456745674567456788888'); };

    overLordButton.title = 'w/no reload';
    overLordButton.classList.add('button');
    overLordButton.style.backgroundColor = 'pink';
    overLordButton.style.color = 'black';
    overLordButton.textContent = '⌬OverLord';
    overLordButton.onclick = function() { input.execute('game_stats_build 555666555566664444444888888822111'); };

    healthBodyDmsButton.title = 'Has speed and you run into things';
    healthBodyDmsButton.classList.add('button');
    healthBodyDmsButton.style.backgroundColor = 'white';
    healthBodyDmsButton.style.color = 'black';
    healthBodyDmsButton.textContent = '⌬Health/BodyDms';
    healthBodyDmsButton.onclick = function() { input.execute('game_stats_build 213121312138238238883288327777777'); };

    smasherSpeedButton.title = 'A Smasher w/speed and few dms';
    smasherSpeedButton.classList.add('button');
    smasherSpeedButton.style.backgroundColor = 'purple';
    smasherSpeedButton.style.color = 'white';
    smasherSpeedButton.textContent = '⌬SmasherSpeed';
    smasherSpeedButton.onclick = function() { input.execute('game_stats_build 7654765476547654765476547654128128128312812812812831281281283'); };

    smasherDmsButton.title = '3 regeneration and max speed max dmg and max health';
    smasherDmsButton.classList.add('button');
    smasherDmsButton.style.backgroundColor = 'pink';
    smasherDmsButton.style.color = 'black';
    smasherDmsButton.textContent = '⌬Smasher/Dms';
    smasherDmsButton.onclick = function() { input.execute('game_stats_build 7654765476547654765476547654111823823823823823823823823823823'); };

    destroyerButton.title = 'Has high dms and no speed';
    destroyerButton.classList.add('button');
    destroyerButton.style.backgroundColor = 'white';
    destroyerButton.style.color = 'black';
    destroyerButton.textContent = '⌬Destroyer';
    destroyerButton.type = 'button';
    destroyerButton.onclick = function() { input.execute('game_stats_build 456456456456456456456123123123123'); };

    fastBulletsButton.title = 'Fast bullets good for spraying tanks';
    fastBulletsButton.classList.add('button');
    fastBulletsButton.style.backgroundColor = 'purple';
    fastBulletsButton.style.color = 'white';
    fastBulletsButton.textContent = '⌬Dms/speed';
    fastBulletsButton.type = 'button';
    fastBulletsButton.onclick = function() { input.execute('game_stats_build 456745674567456745674567456722111'); };

    slowBulletsButton.title = 'slow bullets and fast speed good for spraying tanks';
    slowBulletsButton.classList.add('button');
    slowBulletsButton.style.backgroundColor = 'pink';
    slowBulletsButton.style.color = 'black';
    slowBulletsButton.textContent = '⌬Dms/Health';
    slowBulletsButton.type = 'button';
    slowBulletsButton.onclick = function() { input.execute('game_stats_build 567856785678567856785678567822111'); };

    triAngleButton.title = 'My favorite was to use Tri-angle class HAS NO SPEED';
    triAngleButton.classList.add('button');
    triAngleButton.style.backgroundColor = 'white';
    triAngleButton.style.color = 'black';
    triAngleButton.textContent = '⌬Tri-angle';
    triAngleButton.type = 'button';
    triAngleButton.onclick = function() { input.execute('game_stats_build 567567567567567567567123123123123'); };

    trapperButton.title = 'Trapper';
    trapperButton.classList.add('button');
    trapperButton.style.backgroundColor = 'purple';
    trapperButton.style.color = 'white';
    trapperButton.textContent = '⌬Trapper';
    trapperButton.type = 'button';
    trapperButton.onclick = function() { input.execute('game_stats_build 567567485675674856756748567484848'); };

    semiRamBoosterButton.title = 'Semi/Ram/Booster';
    semiRamBoosterButton.classList.add('button');
    semiRamBoosterButton.style.backgroundColor = 'pink';
    semiRamBoosterButton.style.color = 'black';
    semiRamBoosterButton.textContent = '⌬Semi/Ram/Booster';
    semiRamBoosterButton.type = 'button';
    semiRamBoosterButton.onclick = function() { input.execute('game_stats_build 567823567823148148567823567882314'); };

    antiRamButton.title = 'anti-ram';
    antiRamButton.classList.add('button');
    antiRamButton.style.backgroundColor = 'white';
    antiRamButton.style.color = 'black';
    antiRamButton.textContent = '⌬anti-ram';
    antiRamButton.type = 'button';
    antiRamButton.onclick = function() { input.execute('game_stats_build 234234562345623456234562345623456'); };

    pentratButton.title = 'pentrative/anti-ram';
    pentratButton.classList.add('button');
    pentratButton.style.backgroundColor = 'purple';
    pentratButton.style.color = 'white';
    pentratButton.textContent = '⌬pentrat/anti-ram';
    pentratButton.onclick = function() { input.execute('game_stats_build 345345263452634526345263452634526'); };

    anniButton.title = 'Anni/hybrid';
    anniButton.classList.add('button');
    anniButton.style.backgroundColor = 'pink';
    anniButton.style.color = 'black';
    anniButton.textContent = '⌬Anni/hybrid';
    anniButton.onclick = function() { input.execute('game_stats_build 456845684568456845678456782345678'); };

    olButton.title = 'OL/overseer';
    olButton.classList.add('button');
    olButton.style.backgroundColor = 'white';
    olButton.style.color = 'black';
    olButton.textContent = '⌬OL/overseer';
    olButton.onclick = function() { input.execute('game_stats_build 456845684568456845683456782345678'); };

    resetButton.title = 'click here to Reset';
    resetButton.classList.add('button');
    resetButton.style.backgroundColor = 'purple';
    resetButton.style.color = 'white';
    resetButton.textContent = '⌬Reset';
    resetButton.onclick = function() { input.execute('game_stats_build 0'); };

    modtabAnchorElem.appendChild(joinHoneyButton);
    modtabAnchorElem.appendChild(l3monFactoryButton);
    modtabAnchorElem.appendChild(myFactoryButton);
    modtabAnchorElem.appendChild(overLord2Button);
    modtabAnchorElem.appendChild(overLordButton);
    modtabAnchorElem.appendChild(healthBodyDmsButton);
    modtabAnchorElem.appendChild(smasherSpeedButton);
    modtabAnchorElem.appendChild(smasherDmsButton);
    modtabAnchorElem.appendChild(destroyerButton);
    modtabAnchorElem.appendChild(fastBulletsButton);
    modtabAnchorElem.appendChild(slowBulletsButton);
    modtabAnchorElem.appendChild(triAngleButton);
    modtabAnchorElem.appendChild(trapperButton);
    modtabAnchorElem.appendChild(semiRamBoosterButton);
    modtabAnchorElem.appendChild(antiRamButton);
    modtabAnchorElem.appendChild(pentratButton);
    modtabAnchorElem.appendChild(anniButton);
    modtabAnchorElem.appendChild(olButton);
    modtabAnchorElem.appendChild(resetButton);

    myhoverElem.appendChild(modtabAnchorElem);

    document.body.appendChild(myhoverElem);
//-------------------------------------[AUTOBUILD BUTTON END]------------------------------------\\

    const tgl = document.createElement("div");
    document.body.appendChild(tgl);

    tgl.style.position = "absolute";
    tgl.style.pointerEvents = "none";
    tgl.style.top = "10px";
    tgl.style.right = "200px";
    tgl.style.fontFamily = "'Monoton', cursive";
    tgl.style.color = "#FFFFFF";
    tgl.style.fontSize = "20px";
    tgl.style.textShadow = "black 0px 1px, purple 0px 2px, pink 0px 3px";

    const tglHtml = `
  <p> Press &#160; &#160; (R) &#160; &#160; to &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; Press &#160; &#160; (T) &#160; &#160; to &#160; </p>
  <p> toggle &#160; Menu &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; toggle &#160; info </p>
`;

    tgl.innerHTML = tglHtml;


    var imgfh = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(imgfh);
    imgfh.style =
        "position:absolute; pointer-events: none; top:10px; left:10px; font-family: 'Monoton', cursive; color: #FFFFFF; font-size: 20px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px";
    imgfh.innerHTML = `<div>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

    img {
      background-color: lightgrey;
      width: 200px;
      border: 5px solid gray;
      padding: 5px;
    }

    a.hidden {
      display: none;
    }

    a.hiddentwo {
      display: none;
    }

    * {
      box-sizing: border-box;
    }

    .column {
      float: left;
      width: 12%;
      padding: 5px;
      vertical-align: top;
      display: inline-block;
      text-align: center;
    }

    a.hidden::after {
      content: "";
      clear: both;
      display: table;
    }

    .caption {
      display: block;
    }
  </style>
  <a id="imgdiv" class="hidden">
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/1.png?raw=true" style="width:100%">
      <span class="caption">⌬L3mon Factory</span>
    </div>
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/2.png?raw=true" style="width:100%">
      <span class="caption">⌬Factory</span>
    </div>
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/3.png?raw=true" style="width:100%">
      <span class="caption">⌬Over Lord 2.0</span>
    </div>
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/4.png?raw=true" style="width:100%">
      <span class="caption">⌬Over Lord</span>
    </div>
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/5.png?raw=true" style="width:100%">
      <span class="caption">⌬Health/ BodyDms</span>
    </div>
  </a>
  <a id="imgdivtwo" class="hiddentwo">
    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/8.png?raw=true" style="width:100%">
      <span class="caption">⌬Destroyer</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/9.png?raw=true" style="width:100%">
      <span class="caption">⌬Dms/ speed</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/10.png?raw=true" style="width:100%">
      <span class="caption">⌬Dms/ Health</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/11.png?raw=true" style="width:100%">
      <span class="caption">⌬Tri- angle</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/12.png?raw=true" style="width:100%">
      <span class="caption">⌬Trapper</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/33.png?raw=true" style="width:100%">
      <span class="caption">⌬anti-ram</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/14.png?raw=true" style="width:100%">
      <span class="caption">⌬Semi/ Ram/ Booster</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/6.png?raw=true" style="width:100%">
      <span class="caption">⌬Smasher Speed</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/7.png?raw=true" style="width:100%">
      <span class="caption">⌬Smasher/ Dms</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/34.png?raw=true" style="width:100%">
      <span class="caption">⌬pentrative/ anti-ram</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/35.png?raw=true" style="width:100%">
      <span class="caption">⌬Anni/ hybrid</span>
    </div>

    <div class="column">
      <img src="https://github.com/Abyss-ora/images/blob/main/36.png?raw=true" style="width:100%">
      <span class="caption">⌬OL/ overseer</span>
    </div>
  </a>
</div>
`;
    function toggleDisplay(elementId) {
        var elem = document.getElementById(elementId);
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
    }

    function keydownFunction() {
        toggleDisplay('myhover');
    }

    function isToday(dateParameter, currentDate) {
        return (
            dateParameter.getDate() === currentDate.getDate() &&
            dateParameter.getMonth() === currentDate.getMonth()
        );
    }

    function createInfoDiv(text) {
        var infoDiv = document.createElement("div");
        document.getElementsByTagName("body")[0].appendChild(infoDiv);
        infoDiv.style = "position:absolute; pointer-events: none; top:30px; left:300px; font-family: 'Monoton', cursive; color: #FFFFFF; font-size: 15px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px";
        infoDiv.innerHTML = `<p>${text}</p>`;
    }

    var currentDate = new Date();

    if (isToday(new Date("08-14"), currentDate)) {
        createInfoDiv("-{Abyss⌬}-ora's &#160; &#160; birthday!");
    }

    if (isToday(new Date("11-19"), currentDate)) {
        createInfoDiv("-{Abyss⌬}-ora's &#160; &#160; anniversary!");
    }

    document.body.onkeyup = function (ep) {
        if (ep.keyCode === 84) {
            toggleDisplay('imgdiv');
            toggleDisplay('imgdivtwo');
        }
        if (ep.keyCode === 82) {
            keydownFunction();
        }
        if (isToday(new Date("04-01"), currentDate)) {
            input.execute('game_spawn AprilFools');
        }
    };

})();