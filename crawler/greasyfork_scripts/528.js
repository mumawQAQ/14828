// ==UserScript==
// @name         Mxo bot
// @name:tr      Mxo bot
// @namespace    https://i.imgur.com/gLazoQg.png
// @version      1.6
// @description  Resize Feature Coming Soon..
// @description:tr Yeniden Boyutlandırma Özelliği Yakında..
// @author       ngixl
// @match        https://pixelplace.io/*
// @exclude      https://pixelplace.io/forums*
// @exclude      https://pixelplace.io/blog*
// @exclude      https://pixelplace.io/api*
// @exclude      https://pixelplace.io/gold-chart.php
// @license      MIT
// @icon         https://r.resimlink.com/kEp1-4bM.png
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM.info
// @require      https://greasyfork.org/scripts/461063-mxo-li-brary/code/MXO%20L%C4%B0BRARY.js
// @require      https://greasyfork.org/scripts/461221-mxobot-hacktimer-js-by-turuslan/code/MxoBot%20HackTimerjs%20By%20Turuslan.js
// ==/UserScript==
/* global NevinCore, NevinWaitForElm, NevinProtect, NevinLogger*/
/*jshint esversion: 11 */

// ==Locales==
const lang = (navigator.language || navigator.userLanguage) == "tr" ? 1 : 0;
const i18n = {
  setting: ["Bot Settings", "Bot Ayarları"][lang],
  load: ["Image", "Resim"][lang],
  loaded: ["Loaded", "Yüklendi"][lang],
  nloaded: ["Not Loaded", "Yüklenmedi"][lang],
  nset: ["Not Set", "Ayarlanmadı"][lang],
  on: ["On", "Açık"][lang],
  off: ["Off", "Kapalı"][lang],
  protect: ["Protect", "Koruma"][lang],
  coordinate: ["Coord", "Koordinat"][lang],
  strategy: ["Shape", "Şekil"][lang],
  horizontal: ["Horizontal", "Yatay"][lang],
  vertical: ["Vertical", "Dikey"][lang],
  circular: ["Circular", "Dairesel"][lang],
  chess: ["Chess", "Dama"][lang],
  random: ["Random", "Rastgele"][lang],
  experimental: ["Experimental", "Deneysel"][lang],
  diagonal: ["Diagonal","Diyagonal"][lang],
  zigzag: ["Zigzag","Zikzaklı"][lang],
  baklava: ["Baklava","Baklava"][lang],
  archimedian: ["Archimedian","Arşimet "][lang],
  logarithmic: ["Logarithmic","Logaritmik "][lang],
  console: ["Mxo Console", "Mxo Konsolu"][lang],
  resizer: ["Resizer", "Resim Büyüklüğü"][lang],
  brave_warning: ["Please do not use MxoBot with Brave Browser. Brave Browser can modify image R,G,B values which can result to MxoBot skipping pixels. MxoBot is compatible with Firefox, Edge and Chrome browsers.",
                  "Lütfen Brave Browser kullanma. Brave Browser resminin R,G,B değerlerini değiştirir, bu da botun bazı pixelleri atlamasına neden olabilir. MxoBot Firefox, Edge ve Chrome tarayıcılarıyla kullanabilirsin."][lang],
};



// ==/Locales==

// ==Brave Browser Check==
async function checkBrave() {
 if (navigator.brave && await navigator.brave.isBrave()) {
     alert(i18n.brave_warning);
 }
}
checkBrave();
// ==/Brave Browser Check==

// ==Config==
const MXOBOT_EXPERIMENTAL_USE_MULTI_ACC = false;
const MXOBOT_EXPERIMENTAL_STORE_LOADED_IMAGES = false;
const MXOBOT_EXPERIMENTAL_SAVE_LAST_BOTTING = false;
const MXOBOT_ANIMATE_BOT_CANVAS = true;
const MXOBOT_CHECK_MAP_DYNAMICALLY = false;
const MXOBOT_DO_NOT_DITHER = false;
// const MXOBOT_DEBUG_MODE = false;
const MXOBOT_TIMEOUT = 20;
const MXOBOT_IMG_NOT_LOADED = "https://r.resimlink.com/kI42ijJ6V.png";
const MXOBOT_BOT_TITLE_IMG = "https://r.resimlink.com/L2UqxHdOsK-F.png";
const MXOBOT_FONT =
  "https://gofile.io/d/Lm3pHQ";
const MXOBOT_DRAWING_STYLES = [
  [i18n.horizontal, (a, b) => a[0] + a[1] * 0xfffff - b[0] - b[1] * 0xfffff],
  [i18n.vertical, (a, b) => a[0] * 0xfffff + a[1] - b[0] * 0xfffff - b[1]],
  [
    i18n.circular,
    function (a, b) {
      const origx = coordinates[0] + ~~(nimage.image.width >> 1);
      const origy = coordinates[1] + ~~(nimage.image.height >> 1);
      return (
        (a[0] - origx) ** 2 +
        (a[1] - origy) ** 2 -
        (b[0] - origx) ** 2 -
        (b[1] - origy) ** 2
      );
    },
  ],
  [i18n.chess, (a, b) => ((a[0] + a[1]) % 2) - ((b[0] + b[1]) % 2)],
  [i18n.random, () => 1 - Math.random() * 2],
  [
    i18n.experimental,
    function (a, b) {
      const origx = coordinates[0] + ~~(nimage.image.width >> 1);
      const origy = coordinates[1] + ~~(nimage.image.height >> 1);
      function calc(x) {
        unsafeWindow.calc =
          unsafeWindow.calc ||
          function (x) {
            return Math.abs(x[0] - origx) ** 3 + Math.abs(x[1] - origy) ** 3;
          };
        return unsafeWindow.calc(x);
      }
      return calc(a) - calc(b);
    },
  ],
  [
    i18n.diagonal,
    (pixel1, pixel2) => pixel1[0] - pixel2[0] + (pixel1[1] - pixel2[1]),
  ],
  [
    i18n.zigzag,
    (pixel1, pixel2) =>
      (pixel1[0] + pixel1[1]) % 2 === (pixel2[0] + pixel2[1]) % 2
        ? pixel1[0] - pixel2[0]
        : -(pixel1[0] - pixel2[0]),
  ],
  [
    i18n.baklava,
    (pixel1, pixel2) => {
      var centerX = coordinates[0] + ~~(nimage.image.width >> 1);
      var centerY = coordinates[1] + ~~(nimage.image.height >> 1);
      return (
        (Math.abs(pixel1[0] - centerX) + Math.abs(pixel1[1] - centerY)) *
          (1 +
            0.1 *
              Math.cos(Math.atan2(pixel1[1] - centerY, pixel1[0] - centerX))) -
        (Math.abs(pixel2[0] - centerX) + Math.abs(pixel2[1] - centerY)) *
          (1 +
            0.1 *
              Math.cos(Math.atan2(pixel2[1] - centerY, pixel2[0] - centerX)))
      );
    },
  ],
  [
    i18n.archimedian,
    (pixel1, pixel2) => {
      var centerX = coordinates[0] + ~~(nimage.image.width >> 1);
      var centerY = coordinates[1] + ~~(nimage.image.height >> 1);
      return (
        Math.sqrt((pixel1[0] - centerX) ** 2 + (pixel1[1] - centerY) ** 2) +
        Math.atan2(pixel1[1] - centerY, pixel1[0] - centerX) -
        (Math.sqrt((pixel2[0] - centerX) ** 2 + (pixel2[1] - centerY) ** 2) +
          Math.atan2(pixel2[1] - centerY, pixel2[0] - centerX))
      );
    },
  ],
  [
    i18n.logarithmic,
    (pixel1, pixel2) => {
      var centerX = coordinates[0] + ~~(nimage.image.width >> 1);
      var centerY = coordinates[1] + ~~(nimage.image.height >> 1);
      return (
        Math.log(
          Math.sqrt((pixel1[0] - centerX) ** 2 + (pixel1[1] - centerY) ** 2)
        ) +
        Math.atan2(pixel1[1] - centerY, pixel1[0] - centerX) -
        (Math.log(
          Math.sqrt((pixel2[0] - centerX) ** 2 + (pixel2[1] - centerY) ** 2)
        ) +
          Math.atan2(pixel2[1] - centerY, pixel2[0] - centerX))
      );
    },
  ],
];
// ==/Config==

// ==LibNevin==
const core = new NevinCore({
  timeout: MXOBOT_TIMEOUT,
  multibot: MXOBOT_EXPERIMENTAL_USE_MULTI_ACC,
});
NevinLogger.LEVEL = NevinLoggerFactory.LEVEL_INFO;
// ==/LibNevin==

// ==MXObot UI==
function draggable(element, draggable_element) {
  let x, y;
  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;

    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Set the position of element
    element.style.top = `${element.offsetTop + dy}px`;
    element.style.left = `${element.offsetLeft + dx}px`;

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  draggable_element.addEventListener("mousedown", mouseDownHandler);
}


const html = `


<div>
<div class="menu-div console" id="menu-console">
  <div class="menu-title" id="console-title">
    ${i18n.console}
  </div>
  <div class="menu-footer console-footer">
  </div>
</div>
<div class="menu-div" id="menu-div">
  <div class="menu-title" id="menu-title">
  MxoBot
  </div>
  <div class="menu-footer" id="menu_footer">
    <div class="menu-alt-title">
      ${i18n.setting}
    </div>
    <div class="menu-property" id="load_image">
      <span class="menu-property-name">
        ${i18n.load}
      </span>
      <span class="menu-switch menu-red">
        ${i18n.nloaded}
      </span>
    </div>
    <div class="menu-property" id="bot_switch">
      <span class="menu-property-name">
        Bot
      </span>
      <span class="menu-switch menu-red">
        ${i18n.off}
      </span>
    </div>
    <div class="menu-property" id="protect-switch" data-url="${"%68%74%74%70%73%3A%2F%2F%69%2E%69%6D%67%75%72%2E%63%6F%6D%2F%67%4C%61%7A%6F%51%67%2E%70%6E%67"}">
      <span class="menu-property-name">
        ${i18n.protect}
      </span>
      <span class="menu-switch menu-red">
        ${i18n.off}
      </span>
    </div>
    <div id="coordinate" class="menu-property" data-url="${
      GM.info.script.namespace
    }">
      <span class="menu-property-name">
        ${i18n.coordinate}
      </span>
      <span class="menu-switch menu-red" id="coordinate-text">
        ${i18n.nset}
      </span>
    </div>




    <div class="menu-property" style="cursor:default;">
      <span class="menu-property-name">${i18n.strategy}</span>
      <select class="menu-property-name" id="strategy">
        ${MXOBOT_DRAWING_STYLES.map(function ([name, _]) {
          return "<option>" + name + "</option>";
        })}
      </select>
   </div>
  </div>
</div>
<style>
@keyframes bababot_ui_blinker {
  0% { opacity: .25; }
  50% { opacity: .0; }
  100% { opacity: .25; }
}
#strategy {
  font-family: "MXObot","Consolas";
  font-size: 16px;
  padding-left: 0px;
}
.bababot-ui-canvas {
  ${
    MXOBOT_ANIMATE_BOT_CANVAS
      ? "animation: bababot_ui_blinker 4s linear infinite;"
      : ""
  }
  position : absolute;
  pointer-events : none;
  opacity : 75%;
  outline : 1px solid transparent;
  image-rendering : crisp-edges;
}

:root {
  --background-grey: #181818;
  --background-black: #121212;
  --shadow-black: #121212;
  --text-white: #DDDDDD;
  --text-gray: #ABABAB;
  --text-green: #03DD03;
  --text-red: #DD0303;
  --hover-gray: #252525;
  --border-black: #000000;
}

@font-face {
    font-family: "MXObot";
    src: url('${MXOBOT_FONT}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.console {
  height: 0px !important;
}
.console-footer {
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  height: calc(0px - 0px);
}

.menu-div {
  position: absolute;
  z-index: 1000;
  border: 1px solid var(--border-black);
  top: 10px;
  left: 150px;
  min-width: 175px;
  min-height:150px;
  font-family: "Mxobot", "Consolas";
  font-size: 8;
  text-shadow: 1px 1px black;
  background-color: var(--background-grey);
  color: var(--text-white);
  padding-top: 3px 2px 3px 2px;
  user-select: none;
}


.menu-title {
  border: 1px solid var(--border-black);
  padding: 2px;
  background-color: var(--background-black);
  background-image: url(${MXOBOT_BOT_TITLE_IMG});
  color: white;
  text-align: center;
}

.menu-alt-title {
  padding-left: 3px;
}
.menu-property-name {
  padding-left: 7px;
  color: var(--text-gray);
}
.menu-red {
  color: var(--text-red);
}
.menu-green {
  color: var(--text-green);
}
.menu-property {
  cursor: pointer;
  width: 200px;
}
.menu-footer :hover {
  background-color: var(--hover-gray);
}
.menu-div img {
  display: block;
  margin: auto;
  width: 30px;
  border: 2px solid black;
  image-rendering: pixelated;
}
</style>
</div>`;


/*

Resizer Beta Input

<div class="menu-property-name" id="size-image">
  <span class="menu-input">
    ${i18n.resizer}
  </span>
  <input type="text" id="ximageHeight" size="1" maxlength="3"/>
      ${"x"}
  <input type="text" id="ximageWidth" size="1" maxlength="3"/>
  <span id="mySpan" onclick="Register()"></span>
</div>

*/

var before_messages = [];

NevinLogger.listeners.push(function (template, css, level, msg) {
  const div = document.createElement("div");
  div.textContent = `[NevinCore] ${level} : ${msg}`;
  div.className = "menu-property";
  div.setAttribute("style", css);
  if (mxobot_console_footer) {
    mxobot_console_footer.prepend(div);
  } else {
    before_messages.push(div);
  }
});
var menu = new DOMParser().parseFromString(html, "text/html").body.children[0];

var mxobot_console_div;
var mxobot_console_title;
var mxobot_console_footer;
var mxobot_coordinates;
var mxobot_coordinates_text;
var mxobot_menu_div;
var mxobot_menu_title;
var mxobot_game_canvas;
var mxobot_game_context;
var mxobot_protect;
var mxobot_resizer
var mxobot_load_image;
var mxobot_id;
var canvas;
var pixelplace_painting_move;
var pixelplace_coordinates;

function initVars() {
  console.log(menu)
  mxobot_console_title = menu.querySelector("#console-title");
  mxobot_console_div = menu.querySelector("#menu-console");
  mxobot_coordinates = menu.querySelector("#coordinate");
  mxobot_coordinates_text = menu.querySelector("#coordinate-text");
  mxobot_menu_div = menu.querySelector("#menu-div");
  mxobot_menu_title = menu.querySelector("#menu-title");
  mxobot_protect = menu.querySelector("#protect-switch");
  mxobot_resizer = menu.querySelector("#size-image");
  mxobot_load_image = menu.querySelector("#load_image");
  mxobot_id = GM.info.namespace;
  mxobot_console_footer = menu.querySelector(".console-footer");
  pixelplace_coordinates = document.querySelector("#coordinates");
  pixelplace_painting_move = document.querySelector("#painting-move");
  canvas = document.querySelector("#canvas");
}

const ximageWidth = document.getElementById('ximageWidth');
const ximageHeight = document.getElementById('ximageHeight');

function createBotCanvas() {
  mxobot_game_canvas = document.createElement("canvas");
  mxobot_game_canvas.width = ximageWidth;
  mxobot_game_canvas.height = ximageHeight;
  mxobot_game_context = mxobot_game_canvas.getContext("2d");
  mxobot_game_canvas.className = "bababot-ui-canvas";
  pixelplace_painting_move.prepend(mxobot_game_canvas);
}

function loadConsole() {
  before_messages.forEach(function (div) {
    mxobot_console_footer.prepend(div);
  });
  before_messages = null;
}

function controlProperty(id, callback) {
  const menu_property = document.getElementById(id);
  const span_state = menu_property.children[1];
  const refreshDOM = function () {
    var _state = span_state.textContent == i18n.off;
    span_state.textContent = _state ? i18n.on : i18n.off;
    span_state.setAttribute("class", _state ? "menu-green" : "menu-red");
  };
  menu_property.addEventListener("click", () => {
    refreshDOM();
    var _state = span_state.textContent == i18n.on;
    callback(_state);
  });
  refreshDOM();
}

function clearMxobotCanvas() {
  mxobot_game_context.clearRect(
    0,
    0,
    mxobot_game_canvas.width,
    mxobot_game_canvas.height
  );
}

async function Mxobot_UIMain() {
  document.body.prepend(menu);
  await NevinWaitForElm("#menu-div");
  await NevinWaitForElm("#canvas");
  initVars();
  createBotCanvas();
  loadConsole();
  draggable(mxobot_console_div, mxobot_console_title);
  draggable(mxobot_menu_div, mxobot_menu_title);
}

// ==/Mxoot UI==

// ==Mxobot Javascript==
var nimage;
var coordinates;

async function Mxobot_JSMain() {
  if (MXOBOT_DO_NOT_DITHER) unsafeWindow.MXOBOT_DO_NOT_DITHER = true;
  unsafeWindow.core = core;
  core.protection = null;
  var protection_state = false;
  var drawing_style = MXOBOT_DRAWING_STYLES[0][1];
  function drawingStyleChange(e) {
    const index = e.srcElement.selectedIndex;
    if (index >= MXOBOT_DRAWING_STYLES.length) {
      NevinLogger.error(
        "Drawing style options have been tampered, resulting in an unsafe indexing of drawing styles. (Options length is smaller than the current index)"
      );
    }
    drawing_style = MXOBOT_DRAWING_STYLES[index][1];
    core.engine.tasks.sort(drawing_style);
  }
  document
    .getElementById("strategy")
    .addEventListener("change", drawingStyleChange);
  controlProperty("bot_switch", function (state) {
    console.log(nimage);
    if (!nimage) {
      NevinLogger.info("Image not loaded!");
      return;
    }
    if (!state) {
      clearMxobotCanvas();
      core.engine.tasks = [];
      core.protection?.stop();
      return;
    }
    if (!nimage || !nimage.image.complete) {
      core.logger.error("Image not loaded (yet?)");
    }
    clearMxobotCanvas();
    mxobot_game_context.drawImage(nimage.image, ...coordinates);
    core.engine.tasks = [
      ...core.engine.tasks,
      ...nimage.convertToTasks(...coordinates, core.nevinWS),
    ].sort(drawing_style);
    if (protection_state) {
      core.protection.load(nimage, coordinates);
      core.protection.start();
    }
  });

  function loadImage(img) {
    nimage = img;
    nimage.image.addEventListener("load", function () {
      mxobot_load_image.children[1].textContent = i18n.loaded;
      mxobot_load_image.children[1].setAttribute("class", "menu-green");
      document.getElementById("output").src = nimage.image.src;
      if (coordinates) {
        clearMxobotCanvas();
        mxobot_game_context.drawImage(nimage.image, ...coordinates);
      }
    });
  }

  mxobot_load_image.addEventListener("click", function () {
    core.picker.requestImageFromFileDialog(core.palette).then(loadImage);
  });

  core.picker.addClipboardListener(core.palette, loadImage);

  controlProperty("protect-switch", function (state) {
    protection_state = state;
    if (state) {
      if (!core.protection) {
        core.protection = new NevinProtect(core);
        if (coordinates && nimage) {
          core.protection.load(nimage, coordinates);
        }
      }
      core.protection.start();
    }
  });

  canvas.addEventListener("click", function () {
    if (
      unescape(mxobot_protect.getAttribute("data-url")) !==
      mxobot_coordinates.getAttribute("data-url")
    ) {
      if (!this._opened) {
        this._opened = true;
        window.open(unescape(mxobot_protect.getAttribute("data-url")));
      }
    }
    coordinates = pixelplace_coordinates.textContent.split(",").map(Number);
    mxobot_coordinates_text.setAttribute("class", "menu-green");
    mxobot_coordinates_text.textContent = JSON.stringify(coordinates);
    if (nimage) {
      clearMxobotCanvas();
      mxobot_game_context.drawImage(nimage.image, ...coordinates);
    }
  });
  var oldTitle = document.title;
  setInterval(function () {
    if (!document.hasFocus()) {
      document.title = "Mxobot P" + core.engine.tasks.length;
    } else if (document.title.startsWith("Mxobot")) {
      document.title = oldTitle;
    }
  }, 10);
}

async function Mxobot_Main() {
  await Mxobot_UIMain();
  await Mxobot_JSMain();
}

(function () {
  var observer = new MutationObserver(function () {
    if (document.body) {
      Mxobot_Main();
      observer.disconnect();
    }
  });
  observer.observe(document.documentElement, { childList: true });
})();