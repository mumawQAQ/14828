// ==UserScript==
// @name Pixelplace PPClient Unbanned
// @namespace AJOW
// @license MIT
// @description pixelplace bot. Click on anywhere of canvas to bot an image.
// @description:tr pixelplace botu. Oyunda botlamak için botlamak istediğinizyere tıklayın.
// @version 1.5
// @match https://pixelplace.io/*
// @icon https://external-content.duckduckgo.com/ip3/pixelplace.io.ico
// @require https://greasyfork.org/scripts/449298-hacktimer/code/hacktimer.js?version=1079989
// @require https://greasyfork.org/scripts/447560-ui-helper/code/UI%20Helper.js?version=1070120
// @run-at document-start
// @grant unsafeWindow
// @grant GM.registerMenuCommand
// @grant GM.info
// ==/UserScript==
/* jshint esversion: 8 */
/* global asyncImageLoader, readFileAsync, waitForElm, addKeyBind*/
/** @type {number} */
var origx;
/** @type {number} */
var origy;
/** @type {Image} */
var img;
/** @type {string} */
var data_url;
/** @type {[number, number]} */
var coordinates;
/** @type {number[]} */
var palette = [16777215,12895428,8947848,5592405,2236962,0,26112,2273612,179713,5366041,9756740,16514907,15063296,15121932,15045888,10512962,10048269,6503455,7012352,10420224,15007744,16726276,12275456,16741727,16762015,16768972,16754641,13594340,15468780,8519808,5308671,132963,234,281599,6652879,3586815,33735,54237,4587464];
/** @type {function} */
var callback = (a, b) => a[0]+a[1]*0xfffff - b[0] - b[1]*0xfffff;
/** @type {HTMLInputElement} */
var file_input = document.createElement('input');
/** @type {HTMLCanvasElement}*/
var image_canvas = document.createElement('canvas');
/** @type {CanvasRenderingContext2D} */
var ctx = image_canvas.getContext('2d');
/** @type {number}*/
var looper = [];
/** @type {Uint8Array}*/
var cache;
/** @type {number}*/
var map_width;
/** @type {number}*/
var map_height;

/**
 * @param {[number, number, number]} packet
 */
setTimeout(dostufff, 2000)

function put_pixel(packet) {
  this.ws.send('42["p",[' + packet + ']]');
}

function getWebsocket() {
  return new Promise(resolve => {
    if (put_pixel.ws) {
      resolve(put_pixel.ws);
      return;
    }
    unsafeWindow.WebSocket = class extends window.WebSocket {
      constructor(a, b) {
        super(a, b);
        put_pixel.ws = this;
        resolve(this);
      }
    };
  });
}

file_input.setAttribute("type", "file");

setInterval(function () {
  const pixel = looper.shift();
  if (pixel != undefined) {
    var [x, y, color] = pixel;
    var c = getPixel(x, y);
    if (c == color) {
      return;
    }
    put_pixel.call(put_pixel, pixel);
  }
}, 40);

function getPixel(x, y) {
  var i = y * map_width + x;
  return cache[i];
}
unsafeWindow.getPixel = getPixel;
async function loadCache() {
  await getWebsocket();
  var canvas_id = parseInt(location.pathname.replace('/','').split('-')[0]);
  var url = `https://pixelplace.io/canvas/${canvas_id}.png?a=${Math.floor(Math.random()*1e9)+1e9}`;
  var canvas_image = new Image();
  var spare_canvas = document.createElement('canvas');
  var before_poll = [];
  spare_canvas.ctx = spare_canvas.getContext('2d');
  canvas_image.src = url;
  async function compute() {
    map_width = canvas_image.naturalWidth;
    map_height = canvas_image.naturalHeight;
    spare_canvas.width = map_width;
    spare_canvas.height = map_height;
    spare_canvas.ctx.drawImage(canvas_image, 0, 0, map_width, map_height);
    var data = spare_canvas.ctx.getImageData(0, 0, map_width, map_height).data;
    cache = new Uint8Array(map_width*map_height);
    for (let i = 0;i < data.length;i += 4) {
      // slice is slower in custom arrays such as Uint8Array
      var r = data[i];
      var g = data[i+1];
      var b = data[i+2];
      const color = (r << 16) + (g << 8) + b;
      const i_color = palette.indexOf(color);
      cache[i >> 2] = i_color;
    }
    for (let packet of before_poll) {
      cache[packet[0]] = packet[1];
    }
    before_poll = undefined;
  }
  canvas_image.onload = function() {
    compute();
  };
  put_pixel.ws.addEventListener('message', e => {
    var data = e.data;
    if (!data.startsWith('42["p",')) {
      return;
    }
    var packets = JSON.parse(data.replace('42',''))[1];
    for (let packet of packets) {
      var [x, y, color] = packet;
      var i = map_width*y + x;
      if (cache) {
        cache[i] = color;
      } else {
        before_poll.push([i, color]);
      }
    }
  });
}
loadCache();

/**
 *  @param {string} src
 *  @param {number[]} [c_x,c_y]
 */
async function botImage(src, [c_x, c_y]) {
  await getWebsocket();
  img = await asyncImageLoader(src);
  [origx, origy] = [c_x + ~~(img.width >> 1), c_y + ~~(img.height >> 1)];
  image_canvas.width = img.width;
  image_canvas.height = img.height;
  ctx.clearRect(0, 0, img.width, img.height);
  ctx.drawImage(img, 0, 0);
  const img_data = ctx.getImageData(0, 0, img.width, img.height);
  for (let i = 0; i < img_data.data.length; i += 4) {
    const y = (i / img.width) >> 2;
    const x = (i >> 2) - (y * img.width);
    const r = img_data.data[i];
    const g = img_data.data[i+1];
    const b = img_data.data[i+2];
    const a = img_data.data[i+3];
    const color = (r << 16) + (g << 8) + b;
    const i_color = palette.indexOf(color);
    const c_color = getPixel(c_x + x, c_y + y);
    if (i_color == -1) {
      alert("Image not converted, convert at duchesskero.moe");
      open("https://www.duchesskero.moe/nonpremium.html", "_blank");
      throw Error("Image conversion error");
    }
    if (c_color == 255 || c_color == i_color || a == 0) {
      continue;
    }
    looper.push([c_x + x, c_y + y, i_color, 1]);
  }
  looper = [...new Set(looper.sort(callback))];
}
file_input.addEventListener("input", function () {
  coordinates = document.getElementById("coordinates").textContent.split(",").map(Number);
  if (!file_input.files[0]) return;
  readFileAsync(file_input.files[0]).then(async function (data) {
    data_url = data.toString();
    botImage(data_url, coordinates);
    file_input.value = "";
  });
});

function addDrawingMode(commandTitle, shortcutKey, sorting_function) {
  function exec_callback() {
    callback = sorting_function;
    looper.sort(callback);
  }
  GM.registerMenuCommand(commandTitle, exec_callback, shortcutKey);
  addKeyBind(shortcutKey, exec_callback);
}

GM.registerMenuCommand('Stop Bot', function() { looper = []; }, 's');
addDrawingMode('Set drawing mode: Horizontal', 'k', (a, b) => a[0]+a[1]*0xfffff - b[0] - b[1]*0xfffff);
addDrawingMode('Set drawing mode: Vertical', 'v', (a, b) => a[0]*0xfffff+a[1] - b[0]*0xfffff - b[1]);
addDrawingMode('Set drawing mode: Circular', 'x', (a, b) => Math.hypot(a[0] - origx, a[1] - origy) - Math.hypot(b[0] - origx, b[1] - origy));
addDrawingMode('Set drawing mode: Chess', 'j', (a, b) => (a[0]+a[1]) % 2 - (b[0]+b[1]) % 2);
addDrawingMode('Set drawing mode: Random', 'r', (a, b) => 1 - (Math.random() * 2));
addKeyBind("|", function() { botImage(data_url, coordinates);});
addKeyBind("n", function() { coordinates = document.getElementById("coordinates").textContent.split(",").map(Number);botImage(data_url, coordinates);});
waitForElm("#canvas").then(() => {
  document.querySelector("#canvas").addEventListener("click", file_input.click.bind(file_input), false);
});