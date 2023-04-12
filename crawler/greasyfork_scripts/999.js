// ==UserScript==
// @name         Anon Mod
// @namespace    http://tampermonkey.net/
// @version      2.004
// @description  Try To Take Over The World With AnonymousMod!
// @author
// @match        *://dev.moomoo.io/*
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @require      https://greasyfork.org/scripts/410512-sci-js-from-ksw2-center/code/scijs%20(from%20ksw2-center).js?version=843639
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @require      https://greasyfork.org/scripts/429072-library/code/library.js?version=948433
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// @grant        none
// ==/UserScript==
var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "Crashers...";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Anon.io";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "Yay Play again!";
        setTimeout(function () {document.title = "Anon.io";}, 1000)
    }
}, 50);

document.getElementById("storeHolder").style = "height: 500px; width: 435px;";
let newImg = document.createElement("img");
newImg.src = "data:image/png;base64,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";
newImg.style = `position: absolute; bottom: 200px; left: 15px; z-index: 100000; width: 65px; height: 65px; cursor: pointer;`;
document.body.prepend(newImg);

newImg.addEventListener("click", () => {
    let w = window.open("https://discord.gg/X2MjRgVRFZ", null, `height=650, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});

setInterval(() => {
    setTimeout(() => {
        document.getElementById('chatBox').placeholder = "�typing�";
        setTimeout(() => {
            document.getElementById('chatBox').placeholder = "�typing.�";
            setTimeout(() => {
                document.getElementById('chatBox').placeholder = "�typing..�";
                setTimeout(() => {
                    document.getElementById('chatBox').placeholder = "�typing...�";
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 500)

document.getElementById("enterGame").addEventListener('click', autohide);
function autohide(){
    $("#ot-sdk-btn-floating").hide();
}
document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});
document.getElementById('linksContainer2').innerHTML = 'Anonymous...' ;
document.getElementById('gameName').innerHTML = '.:Anon Mod:.';
document.getElementById('loadingText').innerHTML = ' Joining anonymously... '
document.getElementById('enterGame').innerHTML = ' Enjoy ';
$("#mapDisplay").css({background: `url('https://i.pinimg.com/originals/12/88/15/1288157a97d13bcd29b0de75fdfe50d9.gif')`});
document.getElementById('gameName').style.color = "green";
document.getElementById('diedText').style.color = "purple";
document.getElementById('loadingText').style.color = "blue";
document.getElementById('nameInput').style.color = "magenta";
document.getElementById("enterGame").style.color = "cyan";
document.getElementById('leaderboard').style.color = "black";
document.title = ' Anon mod';
document.getElementById("leaderboard").append ('Anon Mod');
document.querySelector("#leaderboard").appendChild(
    (function() {
        let text = "Ping: ";
        let text2 = " ms";
        let oldPing = 0;
        const pingSpan = document.createElement("span");
        pingSpan.id = "pingTime";
        pingSpan.textContent = text;
        pingSpan.style.display = "inline-block";
        setInterval(function() {
            typeof pingTime !== "undefined" &&
                oldPing !== pingTime &&
                ((oldPing = pingTime),
                 (pingSpan.textContent = text + oldPing + text2),
                 (function() {
                if (oldPing <= 100) {
                    pingSpan.style.color = "hotpink";
                }
                if (oldPing >= 101 && oldPing <= 250) {
                    pingSpan.style.color = "cyan";
                }
                if (oldPing >= 251) {
                    pingSpan.style.color = "red";
                }
            })());
        });
        return pingSpan;
    })()
);
document.getElementById("promoImgHolder").remove();
document.getElementById('ageText').style.color = "#ff1f3d";


document.querySelector("#pre-content-container").remove(); //

$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'left',
                    'background-color': 'rgba(0, 0, 0, 0.74)',
                    '-moz-box-shadow': '0px 0px rgba(256, 256, 256, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(256, 256, 256, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('.actionBarItem').css({'-webkit-border-radius': '0px',
                         'border-radius': '3px',
                         'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.menuCard').css({'color':'#808080'});



$("#youtuberOf").remove();
$("#adCard").remove();
$("#mobileInstructions").remove();
$("#downloadButtonContainer").remove();
$("#mobileDownloadButtonContainer").remove();
$(".downloadBadge").remove();
$(".cookiePreference").remove();

var fadingspeed = 50 // lower = faster, higher = slower
var d = 0;

function e(e, n = d) {
    document.getElementById(e).style["background-color"] = "hsl(" + n + ", 100%, 50%)";
}

setInterval(function() {
    (function(e, n) {
        e(n);
    })(e, "ageBarBody"), d++;
}, fadingspeed);

let servers,
    elemSet = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').set;
Object.defineProperty(window, 'vultr', {
    set: (data) => {
        data.servers.forEach(server => server.games.forEach(game => game.playerCount = 0 - game.playerCount));
        servers = data
    },
    get: () => servers
});
Object.defineProperty(Element.prototype, 'innerHTML', {
    set(data) {
        this.id === 'serverBrowser' && (data = data.replace(/-(\d)/g, '$1'))
        return elemSet.call(this, data);
    }
});

localStorage.moofoll = !0;
setInterval(() => window.follmoo && follmoo(), 10);

function Hat(id){
    storeBuy(id);
    storeEquip(id);
}
function Accessory(id){
    storeBuy(id);
    storeEquip(id);
}
localStorage.moofoll = !0;
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') { // G for Solider
        Hat(6);
    }
     if (e.keyCode == 48 && document.activeElement.id.toLowerCase() !== 'chatbox') { // 0 for pig hat/head
        Hat(29);
    }
    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') { // shift for monkey tail
        Accessory(11);
    }
    if (e.keyCode == 27 && document.activeElement.id.toLowerCase() !== 'chatbox') { // ESC for uneuip hat
        Hat(0);
    }
    if (e.keyCode == 50 && document.activeElement.id.toLowerCase() !== 'chatbox') { // 2 for Turret gear
        Hat(53);
    }
    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') { // SHIFT for booster hat
        Hat(12);
    }
    if (e.keyCode == 188 && document.activeElement.id.toLowerCase() !== 'chatbox') { // "," for snow hat
        Hat(15);
    }
    if (e.keyCode == 189 && document.activeElement.id.toLowerCase() !== 'chatbox') { // - for flipper hat
        Hat(31);;
    }
    if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') { // Z for tank gear
        Hat(40);
    }
    if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') { // T for emp helmet
        Hat(22);
    }
    if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') { // T for bull helmet
        Hat(7);
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') { // P for samurai
        Hat(20);
    }
});