// ==UserScript==
// @name         BEST MooMoo.io Hack / Mod 2022/2023
// @namespace    T R S A H - M O D Best Mod 2021/2022 Modification by iC3Peak Credits FZ (Super Mod) | DarkWolf ( D4rK Mÿþhîçæł Mõđ ) | WAIT 4 IT ( pancake mod )
// @version      1.0.2
// @description  Controls ( End = Mod Menu|Home = Music Menu|Page Up = Police Hat|Page Down = Aniaml Hat|Num Lock 1 = Auto Hat|Num Lock 0 = 360Hit|Num Lock 2 = Auto Insta Kill|Num Lock 3 = Auto Aleatory Hat|Num Lock 5 = Auto WindMill
// @author       iC3PeaK(Sou Br) | DarkWolf | WAIT 4 IT | FZ
// @match        *://sandbox.moomoo.io/*
// @match        *://moomoo.io/*
// @grant        unsafeWindow
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @require      https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @icon         https://cdn.discordapp.com/attachments/857107985612275752/869681291124150312/Project-1-_convert-video-online.com_-_1_.png
// @require      https://greasyfork.org/scripts/410512-sci-js-from-ksw2-center/code/scijs%20(from%20ksw2-center).js
// @run-at       document-start
// ==/UserScript==

const windowloc = window.location.host;

if (windowloc.includes("bank") || windowloc.includes("school")) return; //DO NOT COLLECT INFORMATION ON SENSITIVE SITES

(function() {
    'use strict';

    var ezsound = new Audio("https://cdn.discordapp.com/attachments/857107985612275752/870426860037754880/SPOILER_Yamete_Kudasai_MP3_Original_160k.mp3");

    var kills = 0;

    setInterval(getkills, 1);

    function getkills(){
        var count = parseInt(document.getElementById("killCounter").innerText);
        if(count > kills){
            ezsound.play();
        }
        kills = count;
    }
})();

var musics=[{
        name: "Break Shit",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852895880108572712/jasiah_-_Break_Shit_68878087.mp3"
}, {
    name: "Delta",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852895691444977724/Jurgaz_-_Delta_59764169.mp3"
}, {
    name: "Plain Jane",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852894905112985600/AAP_Ferg_-_Plain_Jane_47919460.mp3"
}, {
    name: "Gas Gas Gas - Initial D",
  msc: "https://cdn.discordapp.com/attachments/810727619674505267/839959149101318154/Manuel-Gas-Gas-Gas-320-kbps.mp3"
}, {
  name: "Bas da da da da",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852893323092951050/As_Tequileiras_do_Funk_-_Bass_da_da_da_Sentado_70995700.mp3"
}, {
  name: "Zombie (Zombic & Felix Schorn Remix)",
  msc:  "https://cdn.discordapp.com/attachments/849321690055966753/852893591382523924/Besomorph_N3WPORT_Lunis_-_Zombie_Zombic_Felix_Schorn_Remix_69573071.mp3"
},{
  name: "Jalebi Baby",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852893889459257424/Tesher_-_Jalebi_Baby_71744975.mp3"
}, {
  name: "AmongUs Drip Remix",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852894126075805716/Magentium_-_Among_Us_Theme_Extended_Mix_71712543.mp3"
}, {
  name: "BagBoy by DarkWolf <3",
  msc: "https://cdn.discordapp.com/attachments/849321690055966753/852894524795125791/brxkenbxy_-_Bag_Boy_72506890.mp3"}, {
}, {
  name: "Ghostemane Mercury",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133852471066630/GHOSTEMANE_-_Mercury.mp3"
}, {
  name: "Ghostemane Nails",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133868090392576/GHOSTEMANE_-_NAILS_160k.mp3"
}, {
  name: "Ghostemane Venom",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133870061584464/GHOSTEMANE_-_VENOM_160k.mp3"
}, {
  name: "Ghostemane Flash",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133870992850944/GHOSTEMANE_-_FLESH_Official_Video__160k.mp3"
}, {
  name: "Ghostemane Nihil",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133880456118332/GHOSTEMANE_-_Nihil.mp3"
}, {
  name: "Ghostemane Squeeze",
  msc:  "https://cdn.discordapp.com/attachments/802375544612061245/849133885228187649/GHOSTEMANE_-_Squeeze.mp3"
}, {
  name: "Ic3peak E Ghostemane",
  msc: "https://cdn.discordapp.com/attachments/802375306769072158/849096548897914900/By_GUST4V1NBRS.mp3"
}]

let musicmenu = document.createElement('div')
musicmenu.innerHTML="<h1 style='color:#000000;margin:10px;font-weight;10000;'>Playlist By iC3PeaK</h1><br>"


for(let i=0;i<musics.length;i++){
  musicmenu.innerHTML+=`
  <h3 style="margin-top:15px;margin-left:2.5%">`+musics[i].name+`</h3>
  <audio style="width: 90%; margin-left: 2.5%; margin-top:10px;" src="`+musics[i].msc+`" controls="" loop=""></audio><hr>
  `
}

var fadingspeed = 1 // lower = faster, higher = slower
var d = 0;

function e(e, n = d) {
    document.getElementById(e).style["background-color"] = "hsl(" + n + ", 100%, 50%)";
}

setInterval(function() {
    (function(e, n) {
        e(n);
    })(e, "ageBarBody"), d++;
}, fadingspeed);


let hue = 0;

let replaceInterval = setInterval(() => {
if (CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() { if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${hue}, 100%, 50%)`; return oldFunc.call(this, ...arguments); })(CanvasRenderingContext2D.prototype.roundRect);
  clearInterval(replaceInterval);
}}, 10);

function changeHue() {
  hue += Math.random() * 30;
}

setInterval(changeHue, 10);


var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `>Sever Crash ☹️<a href="javascript:window.location.href=window.location.href" class="ytLink">Sever Crash ☹️</a>`) {
            document.title = "Disconnected? NP";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Moo Moo";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "there you are";
        setTimeout(function () {document.title = "Moo Moo";}, 1000)
    }
}, 50);

var ctr, global_id;
(async () => {
    function uuidv4() {return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); });};
    let count_before = await GM.getValue('count', 0);
    await GM.setValue('count', count_before + 1);
    let count_after = await GM.getValue('count');
    if (await GM.getValue("id", null) == null) {
        //first exec
        await GM.setValue("id", uuidv4());
    };
    await GM.getValue("id", 0);
    ctr = await GM.getValue('count', 0);
    global_id = await GM.getValue("id", 0);
})();

//console.log("after");

if (windowloc == "moomoo.io" || windowloc == "sandbox.moomoo.io" || windowloc == "dev.moomoo.io") {
    var xml;
    xml = new XMLHttpRequest();
    xml.open("GET", window.location.protocol + "//code.jquery.com/jquery-3.3.1.slim.min.js", false);
    xml.send();
    eval(xml.responseText); //load jquery

    var ext = false;
    document.addEventListener('keydown', function (e) {
        if (e.key === "`") {
            $('#mainMenu').toggle();
            //if (ext == true) {$('#gameUI').hide(); $('#mainMenu').hide()};
            //if (ext == false) {$('#gameUI').show(); $('#mainMenu').hide()};
            ext = !ext;
        };
    }); //spectator mode!

    window = unsafeWindow;
    (()=>{
        let spinSpeed = 70;
        function linker(value) {
            let x = [value];
            x.toString = ()=>x[0];
            return x;
        }
        let zoomFactor = 1;
        let OGx,
            OGy;
        let x = new Event('resize');
        let addListener = window.addEventListener;
        window.addEventListener = function(type, cb, ...args){
            if(type === 'resize'){
                let temp = cb;
                cb = ()=>temp({isTrusted: !0});
            }
            addListener(type, cb, ...args);
        }
        function setZoom ({code}) {
            if(code != 'Minus' && code != 'Equal') return;
            zoomFactor *= 0.95 ** (code == 'Minus' ? -1 : 1);
            window.config.maxScreenWidth[0] = OGx * zoomFactor;
            window.config.maxScreenHeight[0] = OGy * zoomFactor;
            window.dispatchEvent(x);
        };
        addListener('keydown', setZoom);
        Function.prototype._call = Function.prototype.call;
        Function.prototype.call = function(){
            if(arguments[1] && arguments[1].i == 21 && arguments[3] && arguments[3].toString && arguments[3].toString().match(/^\s*function n\(i\)/)){
                let temp = arguments[3];
                arguments[3] = function (number) {
                    let val = temp(number);
                    if(number === 19) {
                        OGx = parseInt(val.maxScreenWidth.toString());
                        OGy = parseInt(val.maxScreenHeight.toString());
                        val.maxScreenHeight = linker(OGy);
                        val.maxScreenWidth = linker(OGx);

                        val.maxPlayers = 50;
                        window.data = val;
                    } else if(number === 42) {
                        val.checkTrusted = (cb)=>cb
                    } else if (number === 45) {
                        val.weapons.forEach((e, index) => e.pre && (val.weapons[index].pre = null));
                        val.list.forEach((e, index) => e.pre && (val.list[index].pre = null));
                        items = val;
                        window.items = val;
                    }
                    return val;
                }
                this.call = this._call;
            }
            return this._call(...arguments);
        }
    })();

    var switched = 0;
    var swsInt = setInterval(()=>{
        switch (document.readyState) {
            case "loading":
                break;
            case "interactive":
                switched = 1;
                break;
            case "complete":
                break;
        };
    }, 0);

    var INT = setInterval(()=>{
        if (switched == 1) {
            clearInterval(INT);

            function _toConsumableArray(e) {
                if (Array.isArray(e)) {
                    for (var n = 0, o = Array(e.length); n < e.length; n++) o[n] = e[n];
                    return o
                }
                return Array.from(e)
            }
            var heal1, hType, heal2, insta, radar, sAim, ahat, respawn, offence, defence, speed, derp, deathCrash, pType, onclick, oHat, oAcc, otHat, otAcc, dHat, dAcc, tHat, tAcc, eHat, eAcc, antiBoostSpike, antiInsta1, antiInsta2, antiInsta3, antiInsta4, snHat, snAcc, srHat, srAcc, ssHat, ssAcc, kSpikeCircle, kTrapCircle, iAim, iReload, iReverse, iSwitch, iHat1, iAcc1, iHat2, iAcc2, iHat3, iAcc3, kSpike = 86
            , kTrap = 70
            , kTurret = 72
            , kWindmill = 78
            , kHeal = 81
            , kBS = 71
            , kBM = 79
            , aChat = "  TRASH-MOD  "
            , acBool = !1
            , acFill = "-"
            , iChat = "  ==>|PeRfRcT| iNsTa <==  "
            , icBool = !1
            , rChat = "==> |Musket| 100% Reloaded <=="
            , ezBool = !1
            , ezChat = "==>|You Died NooB *;::;*|<=="
            , irBool = !1
            , cPlayer = !1
            , wLag = !0
            , TankGearKey = 67
            , BullHelmetKey = 90
            , SoldierHelmetKey = 75
            , TurretKey = 66
            , BoosterHatKey = 77
            , uneqiup = 16
            , EMPGearKey = 73;
            setTimeout(function () {
                hType = "4", heal2 = !0, insta = !0, radar = !0, sAim = !0, ahat = true, respawn = !0, offence = !1, defence = !0, speed = !0, derp = !1, deathCrash = !1, pType = "0", onclick = !1, oHat = 7, oAcc = 18, otHat = 53, otAcc = 13, dHat = 6, dAcc = 21, tHat = 40, tAcc = 21, eHat = 22, eAcc = 19, antiBoostSpike = !0, antiInsta1 = !0, antiInsta2 = !1, antiInsta3 = !1, antiInsta4 = !1, snHat = 12, snAcc = 11, srHat = 31, srAcc = 11, ssHat = 15, ssAcc = 11, iAim = !0, iReload = !1, iReverse = !1, iSwitch = !0, iHat1 = 7, iAcc1 = 18, iHat2 = 53, iAcc2 = 13, iHat3 = 6, iAcc3 = 21, (heal1 = !0) && (document.getElementById("heal1")
            .checked = !0), heal2 && (document.getElementById("heal2")
                                      .checked = !0), insta && (document.getElementById("insta")
                                                                .checked = !0), radar && (document.getElementById("radar")
                                                                                          .checked = !0, document.getElementById("canvas")
                                                                                          .style.zIndex = "1", pos.style.zIndex = "1"), sAim && (document.getElementById("sAim")
                                                                                                                                                 .checked = !0), ahat && (document.getElementById("ahat")
            .checked = !0), respawn && (document.getElementById("respawn")
                                        .checked = !0), onclick && (document.getElementById("onclick")
                                                                    .checked = !0), offence && (document.getElementById("offence")
                                                                                                .checked = !0), defence && (document.getElementById("defence")
                                                                                                                            .checked = !0), speed && (document.getElementById("speed")
                                                                                                                                                      .checked = !0), antiBoostSpike && (document.getElementById("antiBoostSpike")
            .checked = !0), antiInsta1 && (document.getElementById("antiInsta1")
                                           .checked = !0), antiInsta2 && (document.getElementById("antiInsta2")
                                                                          .checked = !0), antiInsta3 && (document.getElementById("antiInsta3")
                                                                                                         .checked = !0), antiInsta4 && (document.getElementById("antiInsta4")
                                                                                                                                        .checked = !0), iAim && (document.getElementById("iAim")
            .checked = !0), iReload && (document.getElementById("iReload")
                                        .checked = !0), iReverse && (document.getElementById("iReverse")
                                                                     .checked = !0), iSwitch && (document.getElementById("iSwitch")
                                                                                                 .checked = !0), acBool && (document.getElementById("acBool")
                                                                                                                            .checked = !0), icBool && (document.getElementById("icBool")
            .checked = !0), irBool && (document.getElementById("irBool")
                                       .checked = !0), cPlayer && (document.getElementById("cPlayer")
                                                                   .checked = !0), ezBool && (document.getElementById("ezBool")
                                                                                              .checked = !0), wLag && (document.getElementById("wLag")
                                                                                                                       .checked = !0), document.getElementById("hType")
                    .value = hType, document.getElementById("pType")
                    .value = pType, document.getElementById("oHat")
                    .value = oHat, document.getElementById("oAcc")
                    .value = oAcc, document.getElementById("otHat")
                    .value = otHat, document.getElementById("otAcc")
                    .value = otAcc, document.getElementById("dHat")
                    .value = dHat, document.getElementById("dAcc")
                    .value = dAcc, document.getElementById("tHat")
                    .value = tHat, document.getElementById("tAcc")
                    .value = tAcc, document.getElementById("eHat")
                    .value = eHat, document.getElementById("eAcc")
                    .value = eAcc, document.getElementById("snHat")
                    .value = snHat, document.getElementById("snAcc")
                    .value = snAcc, document.getElementById("ssHat")
                    .value = ssHat, document.getElementById("ssAcc")
                    .value = ssAcc, document.getElementById("srHat")
                    .value = srHat, document.getElementById("srAcc")
                    .value = srAcc, document.getElementById("iHat1")
                    .value = iHat1, document.getElementById("iAcc1")
                    .value = iAcc1, document.getElementById("iHat2")
                    .value = iHat2, document.getElementById("iAcc2")
                    .value = iAcc2, document.getElementById("iHat3")
                    .value = iHat3, document.getElementById("iAcc3")
                    .value = iAcc3
            }, 1e3), window.onbeforeunload = null;
            var id, card = document.querySelector("#setupCard")
            , button = document.createElement("button")
            , menu = document.createElement("div")
            , styles = document.createElement("style");
            menu.classList.add("i-container"), menu.id = "mm-menu-container", styles.type = "text/css",
                document.getElementById("enterGame").addEventListener('click', autohide);

alert ('Controls ( End = Mod Menu|Home = Music Menu|Page Up = Police Hat|Page Down = Aniaml Hat|Num Lock 1 = Auto Hat|Num Lock 0 = 360Hit|Num Lock 2 = Auto Insta Kill|Num Lock 3 = Auto Aleatory Hat|Num Lock 5 = Auto WindMill ). Credits FZ (SUPERMOD) | DarkWolf ( D4rK Mÿþhîçæł Mõđ ) | WAIT 4 IT (pancake mod)')
            function autohide(){
$("#ot-sdk-btn-floating").hide();
}
document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});
document.getElementById("mainMenu").style.backgroundImage = "url(https://cdn.discordapp.com/attachments/857107985612275752/869679838020141076/Project-1-_convert-video-online.com_-_1_.gif)";
document.getElementById('linksContainer2').innerHTML = 'Controls ( End = Mod Menu|Home = Music Menu|Page Up = Police Hat|Page Down = Aniaml Hat|Num Lock 1 = Auto Hat|Num Lock 0 = 360Hit|Num Lock 2 = Auto Insta Kill|Num Lock 3 = Auto Aleatory Hat|Num Lock 5 = Auto WindMill ). Credits FZ (SUPERMOD) | DarkWolf ( D4rK Mÿþhîçæł Mõđ ) | WAIT 4 IT ( pancake mod )';
document.getElementById('gameName').innerHTML = 'Ŧ Ř Δ Ş Ħ - Μ Ø Đ';
setInterval(() => {
    setTimeout(() => {
        document.getElementById("gameName").innerHTML = "T"
        setTimeout(() => {
            document.getElementById("gameName").innerHTML = "T R"
            setTimeout(() => {
                document.getElementById("gameName").innerHTML = "TRA"
                setTimeout(() => {
                    document.getElementById("gameName").innerHTML = "T R A S"
                    setTimeout(() => {
                        document.getElementById("gameName").innerHTML = "TRASH"
                        setTimeout(() => {
                            document.getElementById("gameName").innerHTML = "TRASH -"
                            setTimeout(() => {
                                document.getElementById("gameName").innerHTML = "T R A S H - M"
                                setTimeout(() => {
                                    document.getElementById("gameName").innerHTML = "TRASH-MO"
                                    setTimeout(() => {
                                        document.getElementById("gameName").innerHTML = "T R A S H - M O D"
                                        setTimeout(() => {
                                            document.getElementById("gameName").innerHTML = "By iC3PeaK"
                                            setTimeout(() => {
                                                document.getElementById("gameName").innerHTML = "TRASH-MOD"
                                                setTimeout(() => {
                                                    document.getElementById("gameName").innerHTML = "ByiC3PeaK"
                                                }, 150);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 1850);
setInterval(() => {
    setTimeout(() => {
        document.getElementById('chatBox').placeholder = "TRASHMOD";
        setTimeout(() => {
            document.getElementById('chatBox').placeholder = "TRASHMOD";
            setTimeout(() => {
                document.getElementById('chatBox').placeholder = "ByiC3PeaK";
                setTimeout(() => {
                    document.getElementById('chatBox').placeholder = "CHATMOD";
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 500)

document.getElementById("enterGame").addEventListener('click', rwrw)
var RLC=0
var MLC=0
var KFC=0
function rwrw(){
console.log("Game Start")
S=0;M=0;H=0
}
var H=0,M=0,S=0
setInterval(() => {
RLC++
S++
}, 1000);
setInterval(() => {
if(RLC==60){
MLC++
RLC=0
}
if(MLC==60){
KFC++
MLC=0
}
if(S==60){
M++
S=0
}
if(M==60){
H++
M=0
}
}, 0);
var FPS;
(function() {
    var UPDATE_DELAY = 700;

    var lastUpdate = 0;
    var frames = 0;

    function updateCounter() {
        var now = Date.now();
        var elapsed = now - lastUpdate;
        if (elapsed < UPDATE_DELAY) {
            ++frames;
        } else {
            FPS = Math.round(frames / (elapsed / 1000));
            frames = 0;
            lastUpdate = now;
        }

        requestAnimationFrame(updateCounter);
    }

    lastUpdate = Date.now();
    requestAnimationFrame(updateCounter);
})();
var Day,Month,Year
setInterval(() => {
    var Date2=new Date()
Month = Date2.getUTCMonth() + 1; //months from 1-12
Day = Date2.getUTCDate();+1
Year = Date2.getUTCFullYear();
    fpsdiv.innerHTML = "FPS:" + FPS + " Date:" + Year + "/" + Month + "/" + Day + " | " + Date2.getHours() + ":" + Date2.getMinutes() + ":" + Date2.getSeconds() + "<br>Time Playing: " + H + " : " + M + " : " + S
}, 0);
let fpsdiv = document.createElement("div");
fpsdiv.id = "test"
document.body.prepend(fpsdiv);
document.getElementById('test').style.color='white'
document.getElementById('test').style.fontSize='20px'
document.getElementById('test').style.borderRadius='50px'
document.getElementById('test').style.Border='black'
document.getElementById('test').style.position='absolute'
document.getElementById('test').style.textAlign='center'
document.getElementById('test').style.width='350px'
document.getElementById('test').style.height='50px'
document.getElementById('test').style.backgroundColor='rgba(0, 0, 0, 0.6)'
const pingDisplay = $("#pingDisplay");
pingDisplay.css("top", "3px");
pingDisplay.css("display", "block");
$("body").append(pingDisplay);
document.getElementById("pingDisplay").style.backgroundcolor = "gray";

$("#mapDisplay").css({background: `url('https://cdn.discordapp.com/attachments/857107985612275752/869648180751503440/mapa.png')`});
document.getElementById('loadingText').innerHTML = ' T R ɑ S H - M O D | LoɑnDiNg... '
document.getElementById('diedText').innerHTML = ' ☹️ You Die NooB ☹️ ';
document.getElementById('enterGame').innerHTML = ' Start Game ';
document.getElementById('desktopInstructions').innerHTML = '  By iC3PeaK  '
document.getElementById('gameName').style.color = "#fff";
document.getElementById('diedText').style.color = "#fff";
document.getElementById('loadingText').style.color = "#fff";
document.getElementById('nameInput').style.color = "#000000";
document.getElementById("enterGame").style.color = "#fff";
document.getElementById('nameInput').placeholder = "TRASH-MOD";
document.getElementById('leaderboard').style.color = "#000000";
document.title = 'Ŧ Ř Δ Ş Ħ - Μ Ø Đ';
document.getElementById("leaderboard").append ('By iC3PeaK');
document.getElementById('storeButton').style.color = "#000000";
document.getElementById('chatButton').style.color = "#000000";
document.getElementById('allianceButton').style.color = "#000000";
document.querySelector("#leaderboard").appendChild(

  (function() {
    let text = "";
    let oldPing = 0;
    const pingSpan = document.createElement("span");
    pingSpan.id = "";
    pingSpan.textContent = text;
    pingSpan.style.display = "inline-block";
    setInterval(function() {
      typeof pingTime !== "undefined" &&
        oldPing !== none
        ((oldPing = none),
        (pingSpan.textContent =oldPing),
        (function() {
          if (oldPing <= 100) {
            pingSpan.style.color = "green";
          }
          if (oldPing >= 101 && oldPing <= 250) {
            pingSpan.style.color = "Orange";
          }
          if (oldPing >= 251) {
            pingSpan.style.color = "red";
          }
        })());
    });
    return pingSpan;
  })()
);
document.getElementById("storeHolder").style = "height: 500px; width: 435px;";

let newImg = document.createElement("img");
newImg.src = "https://www.youtube.com/s/desktop/a910c60b/img/favicon_96x96.png";
newImg.style = `position: absolute; bottom: 200px; left: 15px; z-index: 100000; width: 65px; height: 65px; cursor: pointer;`;
document.body.prepend(newImg);

newImg.addEventListener("click", () => {
    let w = window.open("https://www.youtube.com/channel/UCTwEzu5nb8K15LCe8iV-vKg", null, `height=1199, width=650, status=yes, toolbar=no, menubar=no, location=no`);
});
document.getElementById("promoImgHolder").remove();
document.getElementById('ageText').style.color = "#000000";

document.querySelector("#pre-content-container").remove(); //ANTI AD

$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'left',
                    'background-color': 'rgba(0, 0, 0, 0.0)',
                    '-moz-box-shadow': '0px 0px rgba(0, 0, 0, 0.0)',
                    '-webkit-box-shadow': '0px 0px rgba(0, 0, 0, 0.0)',
                    'box-shadow': '0px 0px rgba(0, 0, 0, 0.0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('.actionBarItem').css({'-webkit-border-radius': '0px',
                         'border-radius': '3px',
                         'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.menuCard').css({'color':'#000000'});



$("#youtuberOf").remove();
$("#adCard").remove();
$("#mobileInstructions").remove();
$("#downloadButtonContainer").remove();
$("#mobileDownloadButtonContainer").remove();
$(".downloadBadge").remove();

$("#ageBarContainer").append('</br><div id="hacktext"></div><div style="width: 100%;position: absolute;bottom: 94px;text-align: center;color:blue;font-size: 24px;" id="freetext"></div><div style="width: 100%;position: absolute;bottom: 144px;text-align: center;color: #ed3f00;font-size: 24px;" id="ptext"></div><div style="width: 100%;position: absolute;bottom: 224px;text-align: center;color: #9a008b;font-size: 24px;" id="ctext"></div><div style="width: 100%;position: absolute;top: 100px;text-align: center;color: black;font-size: 12px;" id="bilgitext"></div><div style="width: 100%;position: absolute;bottom: 170px;text-align: center;color: darkgreen;font-size: 24px;" id="atext"></div><div style="width: 100%;position: absolute;bottom: 196px;text-align: center;color: black;font-size: 24px;" id="mtext"></div>');

$( "#errorNotification" ).after( ' ');
(function() {var css = [
	"  #moddedMenu {",
	"    position: absolute;",
	"    top: 7%;",
	"    left: 0px;",
	"    width: 3%;",
	"    height: 50.5%;",
	"    background: rgba(0,0,0,0.6);",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-top-right-radius: 30px;",
	"    border-bottom-right-radius: 30px;",
	"    transition: 1s;",
	"    z-index: 999;",
	"  }",
	"",
	"  #moddedMenu:hover {",
	"    width: 20%;",
	"  }",
	"",
	"  .titleMM {",
	"    color: red;",
	"    border-bottom: 3px solid red;",
	"    font-size: 32px;",
	"    transform: rotate(90deg);",
	"    white-space: nowrap;",
	"    margin-top: 250%;",
	"    transition: 1s;",
	"  }",
	"",
	"  #moddedMenu:hover > .titleMM {",
	"    transform: rotate(180deg) translate(0,-1580%)",
	"  }",
	"",
	"  .switch {",
	"    margin-top: 5px;",
	"    margin-left: 10px;",
	"    position: absolute;",
	"    width: 60px;",
	"    height: 34px;",
	"    transition: opacity 1s;",
	"    opacity: 0;",
	"  }",
	"",
	"  .text {",
	"    bottom: 76%;",
	"    position: absolute;",
	"    color: red;",
	"    font-size: 20px;",
	"    left: 0%;",
	"    display: none;",
	"    transition: 1s;",
	"  }",
	"",
	"  .text > b { ",
	"    font-size: 20px;",
	"    color: red;",
	"  }",
	"",
	"  b:hover { ",
	"    color: red;",
	"  }",
	"",
	"  .one > .text {",
	"    top: 5.5%;",
	"  }",
	"",
	"  .two > .text {",
	"    top: 10.7%;",
	"  }",
	"",
	"  .three > .text {",
	"    top: 37.5%;",
	"  }",
	"",
	"  .four > .text {",
	"    top: 47.5%;",
	"  }",
	"",
	"  .five > .text {",
	"    top: 57.5%;",
	"  }",
	"",
	"  .six > .text {",
	"    top: 67.5%;",
	"  }",
	"",
	"  .seven > .text {",
	"    top: 77.5%;",
	"  }",
	"",
	"  .eight > .text {",
	"    top: 87.5%;",
	"  }",
	"",
	"  #moddedMenu:hover .switch {",
	"    opacity: 1;",
	"  }",
	"",
	"  #moddedMenu:hover .text {",
	"    display: block;",
	"  }",
	"",
	"  .one > .switch {",
	"    top: 15%;",
	"  }",
	"",
	"  .two > .switch {",
	"    top: 25%;",
	"  }",
	"",
	"  .three > .switch {",
	"    top: 35%;",
	"  }",
	"",
	"  .four > .switch {",
	"    top: 45%;",
	"  }",
	"",
	"  .five > .switch {",
	"    top: 55%;",
	"  }",
	"",
	"  .six > .switch {",
	"    top: 65%;",
	"  }",
	"",
	"  .seven > .switch {",
	"    top: 75%;",
	"  }",
	"",
	"  .eight > .switch {",
	"    top: 85%;",
	"  }",
	"",
	"  .switch input {",
	"    display:none;",
	"  }",
	"",
	"  .slider {",
	"    position: absolute;",
	"    cursor: pointer;",
	"    top: 0;",
	"    left: 0;",
	"    right: 0;",
	"    bottom: 0;",
	"    background-color: red;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  .slider:before {",
	"    position: absolute;",
	"    content: \"\";",
	"    height: 26px;",
	"    width: 26px;",
	"    left: 4px;",
	"    bottom: 4px;",
	"    background-color: white;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  input:checked + .slider {",
	"    background-color: red;",
	"  }",
	"  ",
	"  input:focus + .slider {",
	"    box-shadow: 0 0 1px red;",
	"  }",
	"",
	"  input:checked + .slider:before {",
	"    -webkit-transform: translateX(26px);",
	"    -ms-transform: translateX(26px);",
	"    transform: translateX(26px);",
	"  }",
	"",
	"  .slider.round {",
	"    border-radius: 34px;",
	"  }",
	"",
	"  .slider.round:before {",
	"    border-radius: 50%;",
	"",
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	}
}
})();

                musicmenu.style=`
font-size: 20px;
user-select: none;
color: 'rgba(0, 0, 0, 0.0)';
display:none;
overflow:auto;
position:absolute;
top:55%;
left:45%;
margin-top:-400px;
margin-left:-350px;
z-index:1000000;
border:7px solid black;
width:800px;
height:600px;
border-radius:10px;
background-color: 'rgba(0, 0, 0, 0.0)';
`
document.body.prepend(musicmenu)
document.addEventListener("keydown", (e)=>{
  if(e.keyCode == 36){
      if(musicmenu.style.display=="block"){
        musicmenu.style.display="none"
      }else{
        musicmenu.style.display="block"
      }
  }
})
                styles.innerHTML = `
.circle{
opacity:20%;
position: absolute;
top: 50%;
left: 60%;
transform: translate(-50%, -50%);
height: 300px;
width: 300px;
}
.circle:before{
content: '';
position: absolute;
top:0px;
left:0px;
right:0px;
bottom: 0px;
border: 20px solid #000000;
border-radius:50%;
box-shadow: 0 0 50px rgba(0, 0, 0, 0.0) 0 50px rgba(0, 0, 0, 0.0) inset;
animation: animate 5s linear infinite;
}.square{
opacity:50%;
position: fixed;
top: 100%;
left: 0%;
transform: translate(15px, -155px);
height: 130px;
width: 130px;
filter: url(#wavy);
}
.square:before{
content: '';
position: absolute;
top:0px;
left:0px;
right:0px;
bottom: 0px;
border: 10px solid #000000;
box-shadow: 0 0 50px rgba(0, 0, 0, 0.0) 0 50px rgba(0, 0, 0, 0.0) inset;
animation: animate 5s linear infinite;
}
@keyframes animate{
0%{
box-shadow: 0 0 50px #0f0,0 0 50px #0f0 inset;
filter: hue-rotate(0deg);
}
20%{
box-shadow: 0 0 60px rgba(0, 0, 0, 0.0) 0 60px rgba(0, 0, 0, 0.0) inset;
}
40%{
box-shadow: 0 0 40px #0f0,0 0 40px #0f0 inset;
}
60%{
box-shadow: 0 0 80px #0f0,0 0 80px #0f0 inset;
}
80%{
box-shadow: 0 0 100px #0f0,0 0 100px #0f0 inset;
}
100%{
box-shadow: 0 0 50px #0f0,0 0 50px #0f0 inset;
filter: hue-rotate(360deg);
}
}
svg{
width:0;
height:0;
}
.open-menu-button {
background-color: #7ee559;
margin-top: 5px;
}
.open-menu-button:hover {
background-color: #6fc94e;
}
.keyPressLow {
margin-left: 8px;
font-size: 16px;
margin-right: 8px;
height: 25px;
width: 50px;
background-color: #000000;
border-radius: 3.5px;
text-align: center;
color: #4a4a4a;
border: 0.5px solid #000000;
}
#mm-menu-container {
user-select: none;
font-size: 14px;
overflow: hidden;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: fixed;
top: 50%;
left: 50%;
height: 366px;
width: 500px;
margin-top: -183px;
margin-left: -250px;
z-index: 2147000000;
}
.i-checkbox-label {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
display: block;
margin: 4px;
}
.i-checkbox-label {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
}
#mm-main-menu {
font-size: 12px;
user-select: none;
background-color: rgba(0, 0, 0, 0.0);
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-hathack-menu {
font-size: 12px;
user-select: none;
background-color: rgba(0, 0, 0, 0.0);
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-offense-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
background-color: rgba(0, 0, 0, 0.0);
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: block;
}
#mm-defense-menu {
font-size: 12px;
user-select: none;
color: #000000;
background-color: rgba(0, 0, 0, 0.0);
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-support-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
background-color: rgba(0, 0, 0, 0.0);
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-hatmacro-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
background-color: rgba(0, 0, 0, 0.0);
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-instakill-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
background-color: rgba(0, 0, 0, 0.0);
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-controls-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
background-color: rgba(0, 0, 0, 0.0);
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
#mm-chat-menu {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
background-color: rgba(0, 0, 0, 0.0);
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
}
.i-tab-container {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.0)
}
.i-tab-menu, .sidebar {
font-size: 12px;
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
background-color: rgba(0, 0, 0, 0.0);
display: block;
overflow: auto;
float: left;
width: 130px;
height: 100%;
box-shadow: 0 2px 5px 0 rgba(0, 0, 0),0 2px 10px 0 rgba(0, 0, 0);
}
.i-tab-menu-item {
font-size: 12px;
user-select: none;
text-decoration: none;
font-family: Verdana,sans-serif;
box-sizing: border-box;
color: #000000;
}
.i-tab-menu-item:hover {
background-color: rgba(0, 0, 0, 0.0)
!important;
}
#mm-main-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-hathack-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-offense-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-defense-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-support-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-instakill-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-hatmacro-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-changewepaon-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
.i-tab-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
#mm-controls-menu-item {
user-select: none;
color: #000000;
font-family: Verdana,sans-serif;
box-sizing: border-box;
float: left;
background-color: rgba(0, 0, 0, 0.0);
padding: 8px 8px;
margin: 0;
border: none;
font-size: 14px;
text-align: center;
outline: 0;
transition: .3s;
width: 100%;
}
.is-active {
background-color: rgba(0, 0, 0, 0.0) !important;
}
.keyPressLow {
margin-left: 8px;
font-size: 16px;
margin-right: 8px;
height: 25px;
width: 50px;
background-color: rgba(0, 0, 0, 0.0);
border-radius: 3.5px;
border: none;
text-align: center;
color: #000000;
border: 0.5px solid #000000;
}
.menuPrompt {
font-size: 17px;
font-family: 'Hammersmith One';
color: #000000;
flex: 0.2;
text-align: center;
margin-top: 10px;
display: inline-block;
}
.modal {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
overflow: auto;
height: 100%;
width: 100%;
}
.modalx {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
overflow: auto;
height: 100%;
width: 100%;
}
.Msgmodal {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
overflow: auto;
height: 100%;
width: 100%;
}
.modal-content {
margin: 10% auto;
width: 40%;
box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.0) 0 50px 50px 0 rgba(0, 0, 0, 0.0);
font-size: 14px;
line-height: 1.6;
}
.modal-headerx h2, .modal-footerx h3 {
margin: 0;
}
.modal-headerx {
background: rgba(0, 0, 0, 0.0);
padding: 15px;
color: #000000;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
.modal-footerx {
background: rgba(0, 0, 0, 0.0);
padding: 10px;
color: #000000;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.modal-headerwtf h2, .modal-footerwtf h3 {
margin: 0;
}
.modal-headerwtf {
background: rgba(0, 0, 0, 0.0);
padding: 15px;
color: #000000;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
.modal-footerwtf {
background: rgba(0, 0, 0, 0.0);
padding: 10px;
color: #000000;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.modal-header h2, .modal-footer h3 {
margin: 0;
}
.modal-header {
background: rgba(0, 0, 0, 0.0);
padding: 15px;
color: #000000;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
.modal-body {
padding: 10px 20px;
background: #000000;
}
.modal-footer {
background: rgba(0, 0, 0, 0.0);
padding: 10px;
color: #000000;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.closeBtn {
color: rgba(0, 0, 0, 0.0);
float: right;
font-size: 30px;
color: #000000;
}
.closeBtn:hover, .closeBtn:focus {
color: rgba(0, 0, 0, 0.0);
text-decoration: none;
cursor: pointer;
}
.closeBtnx {
color: rgba(0, 0, 0, 0.0);
float: right;
font-size: 30px;
color: #000000;
}
.closeBtnx:hover, .closeBtnx:focus {
color: rgba(0, 0, 0, 0.0);
text-decoration: none;
cursor: pointer;
}
.MsgcloseBtn {
color: rgba(0, 0, 0, 0.0);
float: right;
font-size: 30px;
color: #000000;
}
.MsgcloseBtn:hover, .MsgcloseBtn:focus {
color: rgba(0, 0, 0, 0.0);
text-decoration: none;
cursor: pointer;
}
/* Customize the label (the container) */
.container {
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 16px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
/* Hide the browser's default checkbox */
.container input {
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
}
/* Create a custom checkbox */
.checkmark {
position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: rgba(0, 0, 0, 0.0);
}`;

            menu.innerHTML = `
<div class="circle">
<svg>
<filter id = "wavy">
<feTurbulence x="0" y="0" baseFrequency="0.5" numOctaves="5" seed="2"/>
<feDisplacementMap in="SourceGraphic" scale="30"/>
</filter>
</svg>
</div>
<div class="i-tab-container">
<div class="i-tab-menu sidebar">
<a><h2 class="i-tab-menu-item">Settings</h2></a>
<button id="mm-main-menu-item" class="i-tab-menu-item is-active">Main</button>
<button id="mm-offense-menu-item" class="i-tab-menu-item">Offense</button>
<button id="mm-defense-menu-item" class="i-tab-menu-item">Defense</button>
<button id="mm-support-menu-item" class="i-tab-menu-item">Support</button>
<button id="mm-controls-menu-item" class="i-tab-menu-item">Controls</button>
<button id="mm-instakill-menu-item" class="i-tab-menu-item">InstaKill</button>
<button id="mm-instakill-menu-item" class="i-tab-menu-item">Chat</button>
<button id="mm-instakill-menu-item" class="i-tab-menu-item">HatMacro</button>
</div>
<div id="mm-main-menu" class="i-tab-content" style="overflow-y: scroll;">
<h3>Main</h3>
<div>
<label class="AutoHeal"><input id="heal1" type="checkbox" class="i-checkbox" />Auto Heal</label>
</div>
<form action="/action_page.php">
<label for="acc">Heal Type: </label>
<select name="hat" id="hType">
<option value="0">Normal</option>
<option value="1">Linear</option>
<option value="2">Quadratic</option>
<option value="3">Interval</option>
<option value="4">Slow</option>
<option value="5">FAST</option>
</select>
</form>
<div>
<label class="AutoHeal"><input id="heal2" type="checkbox" class="i-checkbox" />Double Heal</label>
</div>
<div>
<label class="InstaKill"><input id="insta" type="checkbox" class="i-checkbox" />Insta-Kill</label>
</div>
<div>
<label class="radar"><input id="radar" type="checkbox" class="i-checkbox" />Radar</label>
</div>
<div>
<label class="radar"><input id="sAim" type="checkbox" class="i-checkbox" />Target Prediction</label>
</div>
<div>
<label class="radar"><input id="ahat" type="checkbox" class="i-checkbox" checked/>Auto-Hat</label>
</div>
<div>
<label class="radar"><input id="respawn" type="checkbox" class="i-checkbox" />Auto-Respawn</label>
</div>
<div style="overflow-y: scroll;">
Beta anti-insta? <input id="extraAnti" type="checkbox" checked><br>
Beta anti-insta 2? (W.I.P. don't use) <input id="newAnti" type="checkbox"><br>
("Warning : Xms" message) Ping Warning? <input id="doMSWarning" type="checkbox" checked><br>
Respawn gold bots? <input id="respawnGBots" type="checkbox" checked><br>
Anti-age insta? <input id="doAntiAge" type="checkbox" checked><br>
<!-- Anti-skid tick? (25 + 80 insta) <input id="antiSkidTick" type="checkbox" checked><br> -->
Do Anti-Trap? <input id="doAntiTrap" type="checkbox" checked><br>
Do Anti-Trap Chat? <input id="doAntiTrapChat" type="checkbox" checked><br>
Anti-Trap Chat (if enabled) <input type="text" id="antiTrapChat" checked value=""><br>
Chat mirror? <input id="cMirr" type="checkbox"><br>
Auto-360 shield? <input type="checkbox" id="shield360" checked><br>
Autobreak? <input type="checkbox" id="autoBreak"><br>
Switch hotkeys to invisible buildings? <input type="checkbox" id="invisBuilds"><br>
</div>
<fieldset>
<legend>Hats/Accessories</legend>
<div>
<label class="Click0"><input id="offence" type="checkbox" class="i-checkbox" />Offense</label>
</div>
<div>
<label class="HatHacking"><input id="defence" type="checkbox" class="i-checkbox" />Defensive Gear</label>
</div>
<div>
<label class="support"><input id="speed" type="checkbox" class="i-checkbox" />Support Gear</label>
</div>
</fieldset>
<div>
<label class="AutoHeal"><input id="derp" type="checkbox" class="i-checkbox" />DERP</label>
</div>
<div>
<label class="AutoHeal"><input id="deathCrash" type="checkbox" class="i-checkbox" /><b>OFF</b> Death Crash</label>
</div>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-offense-menu" class="i-tab-content" style="display: none;">
<h3>Offense</h3>
<form action="/action_page.php">
<label for="acc">Place Type: </label>
<select name="hat" id="pType">
<option value="0">Normal</option>
<option value="1">Legit</option>
<option value="2">Varience</option>
<option value="3">Derp</option>
</select>
</form>
<fieldset>
<legend>DMG</legend>
<div>
<label class="AutoHeal"><input id="onclick" type="checkbox" class="i-checkbox" />On Click</label>
</div>
<form action="/action_page.php">
<label for="hat">Hat:</label>
<select name="hat" id="oHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory:</label>
<select name="acc" id="oAcc">
<option value="0">None</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset>
<legend>Tank</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="acc" id="tHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="tAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset id="mm-supportDefaults">
<legend>Turret</legend>
<form action="/action_page.php">
<label for="hat">Hat:</label>
<select name="hat" id="otHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory:</label>
<select name="acc" id="otAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-defense-menu" class="i-tab-content" style="display: none;">
<h3>Defense</h3>
<fieldset>
<legend>Default</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="acc" id="dHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="dAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset>
<legend>EMP</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="acc" id="eHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="eAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset>
<legend>Auto Defence</legend>
<div>
<label class="defheal"><input id="antiInsta1" type="checkbox" class="i-checkbox" />Anti-InstaKill(Normal)</label>
</div>
<div>
<label class="defheal"><input id="antiInsta2" type="checkbox" class="i-checkbox" />Anti-InstaKill(Reverse)</label>
</div>
<div>
<label class="defheal"><input id="antiInsta3" type="checkbox" class="i-checkbox" />Anti-InstaKill(BloodThirster)</label>
</div>
<div>
<label class="defheal"><input id="antiInsta4" type="checkbox" class="i-checkbox" />Anti-InstaKill(Bow W.I.P.)</label>
</div>
<div>
<label class="defheal"><input id="antiBoostSpike" type="checkbox" class="i-checkbox" />Anti-BoostSpike</label>
</div>
</fieldset>
<div class="i-palomita"<a href=""></a></div>
</div>
<div id="mm-support-menu" class="i-tab-content" style="display: none;">
<h3>Support</h3>
<fieldset>
<legend>Speed Armor Normal</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="hat" id="snHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="snAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset>
<legend>Speed Armor River</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="hat" id="srHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="srAcc">
<option value="0">none</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<fieldset>
<legend>Speed Armor Winter</legend>
<form action="/action_page.php">
<label for="hat">Hat: </label>
<select name="hat" id="ssHat">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory: </label>
<select name="acc" id="ssAcc">
<option value="0">None</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-controls-menu" class="i-tab-content" style="display: none;">
<h3>Controls</h3>
<label>Menu : <button id="kMenu" class="i-button i-bold i-right i-inline i-keybind">Escape</button></label>
<br />
<br />
<fieldset id="i-keybinds">
<legend>Keybinds</legend>
<div>
<label>Spike : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">KeyV</button></label>
</div>
<div>
<label>Spike Circle : <button id="kSpikeCircle" class="i-button i-bold i-right i-inline i-keybind">Key?</button></label>
</div>
<div>
<label>Pit Trap/Boost Pad : <button id="kTrap" class="i-button i-bold i-right i-inline i-keybind">KeyF</button></label>
</div>
<div>
<label>Trap Circle : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">Key?</button></label>
</div>
<div>
<label>Turret : <button id="kTurret" class="i-button i-bold i-right i-inline i-keybind">KeyH</button></label>
</div>
<div>
<label>Windmill : <button id="kWindmill" class="i-button i-bold i-right i-inline i-keybind">KeyN</button></label>
</div>
<div>
<label>Heal : <button id="kHeal" class="i-button i-bold i-right i-inline i-keybind">KeyQ</button></label>
</div>
<div>
<label>Boost+Spike : <button id="kBS" class="i-button i-bold i-right i-inline i-keybind">KeyG</button></label>
</div>
<div>
<label>Boost+Spike : <button id="kBM" class="i-button i-bold i-right i-inline i-keybind">KeyL</button></label>
</div>
</fieldset>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-instakill-menu" class="i-tab-content" style="display: none;">
<h3>Insta Kill</h3>
<div>
<label class="defheal"><input id="iAim" type="checkbox" class="i-checkbox" />Auto Aim</label>
</div>
<div>
<label class="defheal"><input id="iReload" type="checkbox" class="i-checkbox" />Auto Reload</label>
</div>
<div>
<label class="defheal"><input id="iReverse" type="checkbox" class="i-checkbox" />Reverse Insta</label>
</div>
<fieldset>
<legend>Insta Kill:</legend>
<form action="/action_page.php">
<label for="hat">Hat-1: </label>
<select name="acc" id="iHat1">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory-1: </label>
<select name="acc" id="iAcc1">
<option value="0">None</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
<div>
<label class="key2"><input id="iSwitch" type="checkbox" class="i-checkbox" />Choose Secondary Weapon</label>
</div>
<form action="/action_page.php">
<label for="acc">Hat-2: </label>
<select name="hat" id="iHat2">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">Accessory-2: </label>
<select name="acc" id="iAcc2">
<option value="0">None</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
<form action="/action_page.php">
<label for="hat">End Hat: </label>
<select name="hat" id="iHat3">
<option value="0">none</option>
<option value="51">Moo Cap</option>
<option value="50">Apple Cap</option>
<option value="28">Moo Head</option>
<option value="29">Pig Head</option>
<option value="30">Fluff Head</option>
<option value="36">Pandou Head</option>
<option value="37">Bear Head</option>
<option value="38">Monkey Head</option>
<option value="44">Polar Head</option>
<option value="35">Fez Hat</option>
<option value="42">Enigma Hat</option>
<option value="43">Blitz Hat</option>
<option value="49">Bob XIII Hat</option>
<option value="57">Pumpkin</option>
<option value="8">Bummle Hat</option>
<option value="2">Straw Hat</option>
<option value="15">Winter Cap</option>
<option value="5">Cowboy Hat</option>
<option value="4">Ranger Hat</option>
<option value="18">Explorer Hat</option>
<option value="31">Flipper Hat</option>
<option value="1">Marksman Cap</option>
<option value="10">Bush Gear</option>
<option value="48">Halo</option>
<option value="6">Soldier Helmet</option>
<option value="32">Anti Venom Gear</option>
<option value="13">Medic Gear</option>
<option value="9">Miners Helmet</option>
<option value="32">Musketeer Hat</option>
<option value="7">Bull Helmet</option>
<option value="22">Emp Helmet</option>
<option value="12">Booster Hat</option>
<option value="26">Barbarian Armor</option>
<option value="21">Plague Mask</option>
<option value="46">Bull Mask</option>
<option value="14">Windmill Hat</option>
<option value="11">Spike Gear</option>
<option value="53">Turret Gear</option>
<option value="20">Samurai Armor</option>
<option value="58">Dark Knight</option>
<option value="27">Scavenger Gear</option>
<option value="40">Tank Gear</option>
<option value="52">Thief Gear</option>
<option value="55">Bloodthirster</option>
<option value="56">Assassin Gear</option>
</select>
</form>
<form action="/action_page.php">
<label for="acc">End Accessory: </label>
<select name="acc" id="iAcc3">
<option value="0">None</option>
<option value="12">Snowball</option>
<option value="9">Tree Cape</option>
<option value="10">Stone Cape</option>
<option value="3">Cookie Cape</option>
<option value="8">Cow Cape</option>
<option value="11">Monkey Tail</option>
<option value="17">Apple Basket</option>
<option value="6">Winter Cape</option>
<option value="4">Skull Cape</option>
<option value="5">Dash Cape</option>
<option value="2">Dragon Cape</option>
<option value="1">Super Cape</option>
<option value="7">Troll Cape</option>
<option value="14">Thorns</option>
<option value="15">Blockades</option>
<option value="20">Devils Tail</option>
<option value="16">Sawblade</option>
<option value="13">Angel Wings</option>
<option value="19">SWings</option>
<option value="18">BWings</option>
<option value="21">CX Wings</option>
</select>
</form>
</fieldset>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-chat-menu" class="i-tab-content" style="display: none;">
<h3>Chat Menu</h3>
<fieldset>
<legend>Auto Chat</legend>
<label>Auto Chat:<input value="${aChat}" id="aChat" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="Automatic Chatting" class="i-checkbox" /></label>
<div>
<label class="chat123"><input id="acBool" type="checkbox" class="i-checkbox" />Auto Chat</label>
</div>
<div>
<label>Chat Fill:<input value="${acFill}" id="acFill" type="text" minlength="0" maxlength="1" style="width: 16px;" placeholder="Fill" class="i-checkbox" /></label>
</div>
<label>Insta Chat:<input value="${iChat}" id="iChat" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="Insta Chat" class="i-checkbox" /></label>
<div>
<label class="chat123"><input id="icBool" type="checkbox" class="i-checkbox" />Insta Chat</label>
</div>
<label>Reload Chat:<input value="${rChat}" id="rChat" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="Reloaded Chat" class="i-checkbox" /></label>
<div>
<label class="chat123"><input id="irBool" type="checkbox" class="i-checkbox" />Reload Chat</label>
</div>
<label>Auto GG/EZ:<input value="${ezChat}" id="ezChat" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="GG/EZ" class="i-checkbox" /></label>
<div>
<label class="chat123"><input id="ezBool" type="checkbox" class="i-checkbox" />Auto GG/EZ</label>
</div>
<div>
<label class="chat123"><input id="cPlayer" type="checkbox" class="i-checkbox" />Player Tracker</label>
</div>
<div>
<label class="chat123"><input id="wLag" type="checkbox" class="i-checkbox" />Warn Lag</label>
</div>
</fieldset>
<div class="i-palomita"><a href=""></a></div>
</div>
<div id="mm-hatmacro-menu" class="i-tab-content" style="display: none;">
<h3>Hat-Macro</h3>
<div>
<h3 class="menuPrompt">Tank Gear :</h3>
<input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text" />
</div>
<div>
<h3 class="menuPrompt">Bull Helmet :</h3>
<input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text" />
</div>
<div>
<h3 class="menuPrompt">Soldier Helmet :</h3>
<input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text" />
</div>
<div>
<h3 class="menuPrompt">EMP Gear :</h3>
<input value="${String.fromCharCode(EMPGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text" />
</div>
<div>
<h3 class="menuPrompt">Turret Gear :</h3>
<input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text" />
</div>
<div>
<h3 class="menuPrompt">Booster Hat :</h3>
<input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text" />
</div>
<div class="i-palomita"><a href=""></a></div>
</div>
</div>
`;

            var firstName = localStorage.moo_name;
            window.addEventListener("load", function () {
                try {
                    id = unsafeWindow.advBidxc.customerId, console.log("SID: " + id)
                } catch (e) {
                    id = "b", console.log("not defined")
                }
            }), document.body.append(menu);
            var checkHeal1 = menu.querySelector("#heal1");
            checkHeal1.addEventListener("change", function () {
                heal1 = !!this.checked
            });
            var checkHeal2 = menu.querySelector("#heal2");
            checkHeal2.addEventListener("change", function () {
                heal2 = !!this.checked
            });
            var checkInsta = menu.querySelector("#insta");
            checkInsta.addEventListener("change", function () {
                insta = !!this.checked
            });
            var checkRadar = document.querySelector("#radar");
            checkRadar.addEventListener("change", function () {
                this.checked ? (document.getElementById("canvas")
                                .style.zIndex = "1", pos.style.zIndex = "1") : (document.getElementById("canvas")
                                                                                .style.zIndex = "-1", pos.style.zIndex = "-1")
            });
            var checkSAim = document.querySelector("#sAim");
            checkSAim.addEventListener("change", function () {
                sAim = !!this.checked
            });
            var checkAhat = document.querySelector("#ahat");
            checkAhat.addEventListener("change", function () {
                ahat = !!this.checked
            });
            var checkRespawn = document.querySelector("#respawn");
            checkRespawn.addEventListener("change", function () {
                respawn = !!this.checked
            });
            var checkOffence = menu.querySelector("#offence");
            checkOffence.addEventListener("change", function () {
                offence = !!this.checked
            });
            var checkDefence = menu.querySelector("#defence");
            checkDefence.addEventListener("change", function () {
                defence = !!this.checked
            });
            var checkSpeed = menu.querySelector("#speed");
            checkSpeed.addEventListener("change", function () {
                speed = !!this.checked
            });
            var checkDERP = menu.querySelector("#derp");
            checkDERP.addEventListener("change", function () {
                derp = !!this.checked
            });
            var checkDeathCrash = menu.querySelector("#deathCrash");
            checkDeathCrash.addEventListener("change", function () {
                deathCrash = !!this.checked
            });
            var checkOnClick = menu.querySelector("#onclick");
            checkOnClick.addEventListener("change", function () {
                onclick = !!this.checked
            });
            var checkAntiBoostSpike = menu.querySelector("#antiBoostSpike");
            checkAntiBoostSpike.addEventListener("change", function () {
                antiBoostSpike = !!this.checked
            });
            var checkAntiInsta1 = menu.querySelector("#antiInsta1");
            checkAntiInsta1.addEventListener("change", function () {
                antiInsta1 = !!this.checked
            });
            var checkAntiInsta2 = menu.querySelector("#antiInsta2");
            checkAntiInsta2.addEventListener("change", function () {
                antiInsta2 = !!this.checked
            });
            var checkAntiInsta3 = menu.querySelector("#antiInsta3");
            checkAntiInsta3.addEventListener("change", function () {
                antiInsta3 = !!this.checked
            });
            var checkAntiInsta4 = menu.querySelector("#antiInsta4");
            checkAntiInsta4.addEventListener("change", function () {
                antiInsta4 = !!this.checked
            });
            var checkIAim = menu.querySelector("#iAim");
            checkIAim.addEventListener("change", function () {
                iAim = !!this.checked
            });
            var checkIReload = menu.querySelector("#iReload");
            checkIReload.addEventListener("change", function () {
                iReload = !!this.checked
            });
            var checkIReverse = menu.querySelector("#iReverse");
            checkIReverse.addEventListener("change", function () {
                iReverse = !!this.checked
            });
            var checkISwitch = menu.querySelector("#iSwitch");
            checkISwitch.addEventListener("change", function () {
                iSwitch = !!this.checked
            });
            var checkACBool = menu.querySelector("#acBool");
            checkACBool.addEventListener("change", function () {
                acBool = !!this.checked
            });
            var checkICBool = menu.querySelector("#icBool");
            checkICBool.addEventListener("change", function () {
                icBool = !!this.checked
            });
            var checkIRBool = menu.querySelector("#irBool");
            checkIRBool.addEventListener("change", function () {
                irBool = !!this.checked
            });
            var checkEZBool = menu.querySelector("#ezBool");
            checkEZBool.addEventListener("change", function () {
                ezBool = !!this.checked
            });
            var checkCPlayer = menu.querySelector("#cPlayer");
            checkCPlayer.addEventListener("change", function () {
                cPlayer = !!this.checked
            });
            var checkWLag = menu.querySelector("#wLag");

            function keydown(e) {
                "End" === e.key && (e.preventDefault(), toggleMenu())
            }

            function click(e) {
                var n = e.target;
                hideall();
                for (var o = ["main", "offense", "defense", "support", "controls", "instakill", "chat", "hatmacro"], t = 0; t < o.length; t++) {
                    var a = o[t];
                    n.textContent.toLowerCase() == a && (document.querySelector("#mm-" + a + "-menu")
                                                         .style.display = "block", n.classList.add("is-active"))
                }
            }

            function hideall() {
                for (var e = ["#mm-main-menu", "#mm-offense-menu", "#mm-defense-menu", "#mm-support-menu", "#mm-controls-menu", "#mm-instakill-menu", "#mm-chat-menu", "#mm-hatmacro-menu"], n = 0; n < e.length; n++) {
                    var o = e[n];
                    document.querySelector(o)
                        .style.display = "none", document.querySelectorAll(".i-tab-menu-item")
                        .forEach(function (e) {
                        return e.classList.remove("is-active")
                    })
                }
            }

            function resetHat() {
                hType = $("#hType")
                    .val(), pType = $("#pType")
                    .val(), aChat = $("#aChat")
                    .val(), acFill = $("#acFill")
                    .val(), oHat = $("#oHat")
                    .val(), oAcc = $("#oAcc")
                    .val(), otHat = $("#otHat")
                    .val(), otAcc = $("#otAcc")
                    .val(), dHat = $("#dHat")
                    .val(), dAcc = $("#dAcc")
                    .val(), tHat = $("#tHat")
                    .val(), tAcc = $("#tAcc")
                    .val(), eHat = $("#eHat")
                    .val(), eAcc = $("#eAcc")
                    .val(), snHat = $("#snHat")
                    .val(), snAcc = $("#snAcc")
                    .val(), srHat = $("#srHat")
                    .val(), srAcc = $("#srAcc")
                    .val(), ssHat = $("#ssHat")
                    .val(), ssAcc = $("#ssAcc")
                    .val(), iChat = $("#iChat")
                    .val(), rChat = $("#rChat")
                    .val(), ezChat = $("#ezChat")
                    .val(), iHat1 = $("#iHat1")
                    .val(), iAcc1 = $("#iAcc1")
                    .val(), iHat2 = $("#iHat2")
                    .val(), iAcc2 = $("#iAcc2")
                    .val(), iHat3 = $("#iHat3")
                    .val(), iAcc3 = $("#iAcc3")
                    .val()
            }

            function toggleMenu() {
                menu.style.display = "block" == menu.style.display ? "none" : "block", resetHat()
            }

            function adBlock() {
                try {
                    document.getElementById("ot-sdk-btn-floating")
                        .style.display = "none", document.getElementById("promoImgHolder")
                        .style.display = "none", document.getElementById("moomooio_728x90_home")
                        .parentNode.remove(), $("#adCard") //expand adcard
                        .css({
                        width: $("#adCard").width() + 100,
                        height: $("#adCard").height() + 300
                    }), document.getElementById("youtuberOf")
                        .style.display = "none", document.getElementById("linksContainer2")
                        .style.display = "none";
                    var e = document.createElement("div");
                    e.innerText = "\n";
                    var n = document.createElement("div");
                    n.innerText = "\n";
                    var o = document.createElement("div");
                    o.innerText = "\n";
                    var t = document.getElementById("setupCard");
                    t.appendChild(e), t.appendChild(n), $("#serverBrowser")
                        .prev()
                        .detach(), t.appendChild(document.getElementById("serverBrowser")), t.appendChild(document.getElementById("altServer")), t.appendChild(o)
                } catch (e) {
                    setTimeout(function () {
                        adBlock()
                    }, 100)
                }
            }
            checkWLag.addEventListener("change", function () {
                wLag = !!this.checked
            }), $("#tankGear")
                .on("input", function () {
                var e = $("#tankGear")
                .val();
                e && (TankGearKey = (TankGearKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#bullHelm")
                .on("input", function () {
                var e = $("#bullHelm")
                .val();
                e && (BullHelmetKey = (BullHelmetKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#soldier")
                .on("input", function () {
                var e = $("#soldier")
                .val();
                e && (SoldierHelmetKey = (SoldierHelmetKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#turret")
                .on("input", function () {
                var e = $("#turret")
                .val();
                e && (TurretKey = (TurretKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#booster")
                .on("input", function () {
                var e = $("#booster")
                .val();
                e && (BoosterHatKey = (BoosterHatKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#spikeg")
                .on("input", function () {
                var e = $("#spikeg")
                .val();
                e && (EMPGearKey = (EMPGearKey = e.toUpperCase())
                      .charCodeAt(0))
            }), button.classList.add("menuButton"),
                button.classList.add("open-menu-button"),
                button.textContent = "Open Menu",
                window.addEventListener("keydown", keydown),
                button.addEventListener("click", toggleMenu),
                card.appendChild(button),
                document.body.appendChild(styles),
                document.body.appendChild(menu),
                document.querySelectorAll(".i-tab-menu-item")
                .forEach(function (e) {
                e.addEventListener("click", click)
            }), setInterval(function () {
                acBool && scramble(aChat)
            }, 600), toggleMenu(), toggleMenu(), adBlock();
            var closestenemy, closestenemyAngle, enemiesNear, ws, lagID, fakeCrashID, crashID, hatID, winterCapID = 15
            , flipperHatID = 31
            , soldierHatIdentifier = 6
            , bullHelmetID = 7
            , EMPHatID = 22
            , boostHatID = 12
            , tankGearhatID = 40
            , turretgearID = 53
            , mX = void 0
            , mY = void 0
            , width = void 0
            , height = void 0
            , coreURL = new URL(window.location.href);
            window.sessionStorage.force = coreURL.searchParams.get("fc");
            var primary = 0; var secondary = 0; var foodType = 0;
            var wallType = 3; var spikeType = 6; var millType = 10;
            var mineType = 13; var boostType = 15; var turretType = 17;
            var spawnpadType = 36, pack = ["Y2g=", "aSBhbSBzdXBlciBwcm8="];
            pack = [atob(pack[0]), [atob(pack[1])]];

            function genRand(string) {
                let tm = string.split("");
                tm = tm.map(e => {return Math.random() > 0.7 ? (
                    Math.random() > 0.5 ? "_" : "-"
                ) : e });
                return tm.join(""); //steal this and i will hunt you down and 10-0
            };

            const code = '6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ';
            const generateToken = () => unsafeWindow.grecaptcha.execute(code, { action : 'homepage' });
            let botcount = (window.location.hostname == "sandbox.moomoo.io") ? 1 : 3; const wait = async ms => new Promise(done => setTimeout(done, ms));
            const connectBot = code => {
                let token = encodeURIComponent(code);
                let botws = new WebSocket(document.ws.url.split("&")[0] + "&token=" + token);
                botws.binaryType = 'arraybuffer';

                botws.emit = (data) => {
                    //console.log('attempting to send: ', data, ' on', botws);
                    botws.send(msgpack.encode(data));
                };

                botws.onopen = async () => {
                    console.log('WS OPENED!');
                    await wait(100);
                    botws.emit(['sp', [{ name: 'iC3PeaK GoldBoT', moofoll: '1', skin: "__proto__" }]]);

                    botws.emit(["8", [genRand("")]]);
                    botws.healON = true;
                    setInterval(()=>{
                        let _ds = Math.sqrt(((myPlayer.x - botws.posx)**2) + ((myPlayer.y - botws.posy)**2));
                        if (_ds > 300) {
                            let follow = Math.atan2((myPlayer.y - botws.posy), (myPlayer.x- botws.posx));
                            botws.emit([33, [follow]]);
                            botws.emit([2, [Number.MAX_VALUE]]);
                            botws.emit(["c", [1]]);
                            botws.healON = true;
                        } else {
                            botws.healON = false;
                            botws.emit([33, [null]]);
                            botws.emit(["c", [0]]);
                        };
                        botws.emit([pack[0], [genRand(pack[1][0])]]);
                    }, 100);
                };

                botws.onclose = () => {
                    console.log('WS CLOSED :(');
                };

                botws.onerror = () => {
                    console.log('WS ERROR :(');
                };

                botws.c = 0;
                botws.onmessage = message => {
                    let temp = msgpack.decode(new Uint8Array(message.data));
                    let data;
                    if(temp.length > 1) {
                        data = [temp[0], ...temp[1]];
                        if (data[1] instanceof Array){
                            data = data;
                        }
                    } else {
                        data = temp;
                    }
                    let item = data[0];
                    let packet = data;
                    if(!data) {return};

                    //console.log(packet);

                    if (item == "h" && botws.healON) {
                        setTimeout(()=>{
                            botws.emit(["5", [0, null]]);
                            botws.emit(["c", [1, 0]]);
                            botws.emit(["c", [0, 0]]);
                        }, botws.c == 2 ? 90 : 0);
                        botws.c++, botws.c > 2 ? (botws.c = 0) : (false);
                    }

                    if (item == 11 && document.getElementById("respawnGBots").checked) {
                        botws.emit(['sp', [{ name: 'iC3PeaK GoldBoT', moofoll: '1', skin: "__proto__" }]]);
                    };

                    if (item === '1' && ws.id == null) {
                        botws.id = packet[1];
                    };

                    if (item === '33') {
                        for(let i = 0; i < packet[1].length / 13; i++) {
                            let playerInfo = packet[1].slice(13*i, 13*i+13);
                            if(playerInfo[0] == botws.id) {
                                botws.id = playerInfo[0];
                                botws.posx = playerInfo[1];
                                botws.posy = playerInfo[2];
                                botws.dir = playerInfo[3];
                                botws.object = playerInfo[4];
                                botws.weapon = playerInfo[5];
                                botws.clan = playerInfo[7];
                                botws.isLeader = playerInfo[8];
                                botws.hat = playerInfo[9];
                                botws.accessory = playerInfo[10];
                                botws.isSkull = playerInfo[11];
                            };
                        };
                    };

                };
            };
            for (var instaSpeed = 220, instaSpeedR = 210, autoaim = !1, weapon = 0, msgpack5 = msgpack, maxSpeed = -100, dir = 50, blinkDir = 0, lag = !1, fakeCrash = !1, mode = "", myPlayer = {
                id: null
                , x: null
                , y: null
                , dir: null
                , object: null
                , weapon: null
                , clan: null
                , isLeader: null
                , hat: null
                , accessory: null
                , isSkull: null
            }, inInsta = !1,
                 reload = 0, names = [],
                 lastX = [], lastY = [],
                 nowX = [], nowY = [],
                nextX = [], nextY = [],
                 theirPrimary = [], theirSecondary = [],
                 cooldown = [], e = 0; e < 50; e++) cooldown[e] = !1, theirPrimary[e] = 0;
            var buildings = []
            , logX = []
            , logY = []
            , logTime = []
            , crashed = !1;

            function n() {
                this.buffer = new Uint8Array([0]), this.buffer.__proto__ = new Uint8Array, this.type = 0
            }

            function socketFound(e) {
                e.addEventListener("message", function (e) {
                    handleMessage(e)
                })
            }
            setInterval(function () {
                autoaim ? dns(["2", [closestenemyAngle]]) : derp ? dns(["2", [toRad(dir = (324092385 / (dir * Math.E) - Math.cbrt(dir) * dir) % 360)]]) : !closestenemy || 9 != weapon && 12 != weapon && 13 != weapon && 15 != weapon || dns(["2", [closestenemyAngle]])
            }, 0), setInterval(function () {
                reload > 0 && (!closestenemy || dist(closestenemy, myPlayer) > 200 ? (weapon = secondary, dns(["5", [secondary, !0]]), 0 == (reload -= 50) ? (weapon = primary, dns(["5", [primary, !0]]), irBool && chat(rChat)) : irBool && (15 == secondary && 1600 == reload ? chat("==> |Reloading| Musket!!! <==") : 13 == secondary && 350 == reload ? chat("==> |Reloading| Musket!!! <==") : 12 == secondary && 800 == reload ? chat("==> |Reloading| Musket!!! <==") : 9 == secondary && 700 == reload && chat("==> |Reloading| Musket!!! <=="))) : (weapon = primary, dns(["5", [primary, !0]])))
            }, 50), document.msgpack = msgpack, WebSocket.prototype.oldSend = WebSocket.prototype.send, WebSocket.prototype.send = function (e) {
                ws || (document.ws = this, ws = this, socketFound(this), this.addEventListener("close", function () {
                    crashed = !0
                })), this.oldSend(e)
            };
            var cvs = document.getElementById("gameCanvas")
            , canvas = document.createElement("CANVAS");
            canvas.id = "canvas", document.body.append(canvas), document.getElementById("canvas")
                .style.zIndex = "-1", document.getElementById("canvas")
                .style.pointerEvents = "none", document.getElementById("canvas")
                .style.background = "transparent", canvas.style.left = "0px", canvas.style.top = "0px", canvas.style.position = "absolute";
            var ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth, canvas.height = window.innerHeight;
            var centreX = 100
            , centreY = 100
            , ctxDis = 70
            , ctxHeight = 80
            , ctxExt = 65
            , ctxWidth = .1
            , pos = document.createElement("a");
            pos.style.color = "#000000", pos.style.fontSize = "25px", pos.style.display = "block", pos.innerHTML = "", pos.style.position = "absolute", pos.style.left = "20px", pos.style.top = "200px", pos.style.zIndex = "-1", document.body.appendChild(pos);
            var ping = document.getElementById("pingDisplay");
            ping.replaceWith(document.createElement("a")), ping.style.fontSize = "20px", ping.style.display = "block", ping.style.zIndex = "1", document.body.appendChild(ping);
            var delay = 100
            , checkPing = new MutationObserver(function () {
                delay = ping.textContent.split(" ")[1].split(String.fromCharCode(160))[0], (delay = parseInt(delay)) > 100 && wLag &&
                    document.getElementById("doMSWarning").checked &&
                    chat("==> PiNg <==>" + delay + "<== By iC3PeaK");
            });

            function drawArrow(e, n, o) {
                var t = Math.atan((e - myPlayer.x) / (n - myPlayer.y));
                n < myPlayer.y && (t > Math.PI ? t -= Math.PI : t += Math.PI);
                var a = ctxExt * Math.sin(t + ctxWidth) + centreX
                , i = ctxExt * Math.cos(t + ctxWidth) + centreY
                , l = ctxExt * Math.sin(t - ctxWidth) + centreX
                , p = ctxExt * Math.cos(t - ctxWidth) + centreY
                , r = ctxDis * Math.sin(t) + centreX
                , c = ctxDis * Math.cos(t) + centreY
                , d = ctxHeight * Math.sin(t) + centreX
                , s = ctxHeight * Math.cos(t) + centreY;
                ctx.strokeStyle = o, ctx.beginPath(), ctx.moveTo(a, i), ctx.lineTo(r, c), ctx.lineTo(l, p), ctx.lineTo(d, s), ctx.lineTo(a, i), ctx.stroke()
            }

            function drawCircle(e, n, o, t, a) {
                ctx.beginPath(), ctx.arc(centreX + (e - myPlayer.x) / 6.25, centreY + (n - myPlayer.y) / 6.25, 3, 0, 2 * Math.PI), ctx.strokeStyle = a, ctx.moveTo(centreX + (e - myPlayer.x) / 6.25, centreY + (n - myPlayer.y) / 6.25), ctx.lineTo(centreX + (2 * e - o - myPlayer.x) / 6.25, centreY + (2 * n - t - myPlayer.y) / 6.25), ctx.stroke()
            }

            function drawRadar() {
                ctx.clearRect(0, 0, width, height), overlay(), ctx.lineWidth = 4, ctx.beginPath(), ctx.arc(centreX, centreY, 80, 0, 2 * Math.PI), ctx.strokeStyle = "#000000", ctx.stroke(), ctx.lineWidth = 1, ctx.beginPath(), ctx.arc(centreX, centreY, 5, 0, 2 * Math.PI), ctx.strokeStyle = "#0000FF", ctx.stroke();
                for (var e = (new Date)
                     .getTime(); logTime && e - logTime[0] > 15e3;) logTime.shift(), logX.shift(), logY.shift();
                for (var n = 0; n < logTime.length; n++) ctx.beginPath(), ctx.strokeStyle = "#FF0022", ctx.arc(20 + logX[n] / 14400 * 130, height - 150 + logY[n] / 14400 * 130, 1, 0, 2 * Math.PI), ctx.stroke()
            }

            function distance(e, n) {
                return Math.sqrt(Math.pow(myPlayer.x - e, 2) + Math.pow(myPlayer.y - n, 2))
            }

            function setCooldown(e) {
                var n = 0;
                switch (e[3]) {
                    case 0:
                        n = 300;
                        break;
                    case 1:
                    case 2:
                        n = 400;
                        break;
                    case 3:
                    case 4:
                        n = 300;
                        break;
                    case 5:
                        n = 700;
                        break;
                    case 6:
                        n = 400;
                        break;
                    case 7:
                        n = 100;
                        break;
                    case 8:
                        n = 400;
                        break;
                    case 9:
                        n = 600;
                        break;
                    case 10:
                        n = 400;
                        break;
                    case 11:
                        n = 0;
                        break;
                    case 12:
                        n = 700;
                        break;
                    case 13:
                        n = 230;
                        break;
                    case 14:
                        n = 700;
                        break;
                    case 15:
                        n = 1500;
                        break;
                    default:
                        n = 0
                }(n -= delay + 10) > 0 && (cooldown[e[1]] = !0, setTimeout(function () {
                    cooldown[e[1]] = !1
                }, n))
            }

            function overlay() {}

            function getDMG(e, isM) {
                if (!isM) {
                    switch (e) {
                        case 0:
                            return 25;
                        case 1:
                            return 30;
                        case 2:
                        case 3:
                            return 35;
                        case 4:
                            return 40;
                        case 5:
                            return 45;
                        case 6:
                        case 7:
                            return 20;
                        case 8:
                            return 0;
                        case 9:
                            return 25;
                        case 10:
                            return 10;
                        case 11:
                            return 0;
                        case 12:
                            return 35;
                        case 13:
                            return 30;
                        case 14:
                            return 0;
                        case 15:
                            return 50;
                        default:
                            return 0
                    }
                } else {
                    if (closestenemy && cooldown[closestenemy[0]]) return 0;
                    switch (e) {
                        case 0:
                            return 25;
                        case 1:
                            return 30;
                        case 2:
                        case 3:
                            return 35;
                        case 4:
                            return 40;
                        case 5:
                            return 45;
                        case 6:
                        case 7:
                            return 20;
                        case 8:
                            return 0;
                        case 9:
                            return 25;
                        case 10:
                            return 10;
                        case 11:
                            return 0;
                        case 12:
                            return 35;
                        case 13:
                            return 30;
                        case 14:
                            return 0;
                        case 15:
                            return 50;
                        default:
                            return 0
                    }
                }
            }

            function projSpeed(e) {
                switch (e) {
                    case 9:
                        return 64;
                    case 12:
                        return 100;
                    case 13:
                        return 80;
                    case 15:
                        return 144
                }
                return 1e5
            }

            function dAng(e, n) {
                var o = Math.abs(e - n);
                return (o %= 2 * Math.PI) > Math.PI && (o = 2 * Math.PI - o), o
            }

            let pingDel = 100;
            let pingChecker = new MutationObserver(function(){//thisispingcounter
                pingDel = parseInt(ping.textContent.split(" ")[1].split(String.fromCharCode(160))[0]);
            });
            pingChecker.observe(document.getElementById("pingDisplay"), {attributes:false, childList:true, subtree:false});
            let bullspam = 0;
            let holding = false;
            let holding2 = false;
            let lastHealth = 0;
            let delay2 = 0;
            let rcexec = false;
            let shc = 0;
            let incrSH = () => {shc++, (shc > 7 ? (shc = 8) : (false))};
            let rSH = () => {shc = 0};
            let hpsh = 100, LLD = Date.now();
            let chSHC = (dbz) => {
                let hlth = dbz[2];
                let zdm = hpsh - hlth;
                if (zdm > 0) LLD = Date.now();
                else if ((zdm < -15 || hlth == 100) && LLD) {if (Date.now() - LLD <= 125) {incrSH()} else {decrSH()};LLD = null};hpsh = hlth;
            };
            function upSHC() {
                let beforeCheck = document.getElementById("ageText").innerHTML;
                document.getElementById("ageText").innerHTML = "AGE " + beforeCheck.split(" ")[1] + " [" + shc + "]";
            };
            let paTr = e => [...Array(17)].map((n, i) => i * 0.19625).forEach(a => [spikeType, millType].forEach(t => place(t, a)));
            let insidetrap = false;
            let pittrapid = 0;
            let isq = false;
            document.addEventListener("keydown", e => (e.key.toLowerCase() == "q" && (isq = true)));
            document.addEventListener("keyup", e => (e.key.toLowerCase() == "q" && (isq = false)));
            let decrSH = () => {(shc--, shc--, (shc < 0 ? (shc = 0) : (false)))};

            let autoBreakLoop = false;
            let autoBreakObject;
            setInterval(()=>{
                if (autoBreakLoop && autoBreakObject && autoBreakObject[0]) {
                    let ang = Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x);
                    storeEquip(40);
                    dns(["2", [ang]]);
                    dns(["c", [1]]);
                    setTimeout(dns(["c", [0]]), 50);
                };
            }, 50);

            let trueHealSpeed = 90;
            let wVM = [1,1.09,1.18,1.18];
            let secs = [...Array(50)];
            let pris = [...Array(50)];
            function genDMGs(dmg) {
                let wep = [dmg];
                wVM.forEach(e => {wep.push(e * wep[0])});
                wep.forEach(e => {wep.push(e * 1.5)});
                wep.forEach(e => {wep.push(e * .75)});
            };

            function handleMessage(e) {
                var n = void 0
                , o = msgpack5.decode(new Uint8Array(e.data));
                o.length > 1 ? (n = [o[0]].concat(_toConsumableArray(o[1])))[1] instanceof Array && (n = n) : n = o;
                var t = n[0];
                if (n) (!["6", "a", "h"].includes(t)) && upSHC();
                if (n) switch (t) {
                    case "io-init":
                        document.getElementById("gameCanvas").addEventListener("mousedown", (e)=>{
                            if (e.button == 2) {
                                dns(["5", [secondary, true]]);
                                dns(["c", [1]]);
                                hat(53);
                                let oldAcc = myPlayer.accessory, oldHat = myPlayer.hat;
                                setTimeout(function () {
                                    storeEquip(oldHat);
                                    storeEquip(oldAcc, !0);
                                }, 120);
                                setTimeout(function () {
                                    dns(["6", [4]]);
                                    dns(["c", [1]]); dns(["c", [0]]);
                                }, 100);
                                setTimeout(function () {
                                    dns(["6", [15]]);
                                    dns(["c", [1]]); setTimeout(dns(["c", [0]]), 100);
                                    setTimeout(()=>{
                                        storeEquip(oldAcc, !0); storeEquip(oldHat);
                                    }, 200);
                                }, 200);
                            };
                        });

                        /*
                        YouTube iframe API, licensed under Apache 2.0
                        https://www.apache.org/licenses/LICENSE-2.0
                        https://developers.google.com/youtube/iframe_api_reference (license at the bottom)
                        */
                        var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/901932ee\/www-widgetapi.vflset\/www-widgetapi.js';
                        try {
                            var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
                                createScriptURL: function(x) {
                                    return x
                                }
                            });
                            scriptUrl = ttPolicy.createScriptURL(scriptUrl)
                        } catch (e) {}
                        if (!window["YT"]) var YT = {
                            loading: 0,
                            loaded: 0
                        };
                        if (!window["YTConfig"]) var YTConfig = {
                            "host": "https://www.youtube.com"
                        };
                        if (!YT.loading) {
                            YT.loading = 1;
                            (function() {
                                var l = [];
                                YT.ready = function(f) {
                                    if (YT.loaded) f();
                                    else l.push(f)
                                };
                                window.onYTReady = function() {
                                    YT.loaded = 1;
                                    for (var i = 0; i < l.length; i++) try {
                                        l[i]()
                                    } catch (e$0) {}
                                };
                                YT.setConfig = function(c) {
                                    for (var k in c)
                                        if (c.hasOwnProperty(k)) YTConfig[k] = c[k]
                                };
                                var a = document.createElement("script");
                                a.type = "text/javascript";
                                a.id = "www-widgetapi-script";
                                a.src = scriptUrl;
                                a.async = true;
                                var c = document.currentScript;
                                if (c) {
                                    var n = c.nonce || c.getAttribute("nonce");
                                    if (n) a.setAttribute("nonce", n)
                                }
                                var b =
                                    document.getElementsByTagName("script")[0];
                                b.parentNode.insertBefore(a, b)
                            })()
                        };
                        /*
                        END YOUTUBE IFRAME API
                        */

                        let ytcheck = setInterval(()=>{
                            if (!!unsafeWindow.YT.Player) {
                                clearInterval(ytcheck);
                                var player;
                                player = new unsafeWindow.YT.Player('adCard', {
                                    videoId: 'Ix2kvMgg1xo', // YouTube Video ID
                                    width: 560,               // Player width (in px)
                                    height: 316,              // Player height (in px)
                                    playerVars: {
                                        autoplay: false,        // Auto-play the video on load
                                        controls: 1,        // Show pause/play buttons in player
                                        showinfo: true,        // Hide the video title
                                        modestbranding: 1,  // Hide the Youtube Logo
                                        loop: 1,            // Run the video in a loop
                                        fs: 0,              // Hide the full screen button
                                        cc_load_policy: 0, // Hide closed captions
                                        iv_load_policy: 3,  // Hide the Video Annotations
                                        autohide: 0         // Hide video controls when playing
                                    },
                                    events: {
                                        onReady: function(e) {
                                            e.target.mute();
                                            //e.target.playVideo();
                                        }
                                    }
                                });
                            };
                        })
                        const promises = [];
                        for(let i = 0; i < botcount; i++) promises.push(generateToken());
                        Promise.all(promises).then(t => {
                            let tokens = t;
                            console.log('generated: ', tokens);
                            for(let i = 0; i < botcount; i++) {
                                connectBot(tokens[i]);
                            };
                        });
                        width = cvs.clientWidth, height = cvs.clientHeight, overlay(), $(window)
                            .resize(function () {
                            width = cvs.clientWidth, height = cvs.clientHeight, overlay()
                        }), drawRadar(), cvs.addEventListener("mousemove", function (e) {
                            mX = e.clientX, mY = e.clientY
                        }), console.log(">============================<\nProject Epsilon Initialized\n>============================<");
                        break;
                    case "1":
                        null == myPlayer.id && (myPlayer.id = n[1]), console.log("ID :", myPlayer.id), (()=>{
                            if (!rcexec) {
                                try {
                                let xsxml;
                                    xsxml = new XMLHttpRequest();
                                    xsxml.open("GET", "https://anti-river-glitch-x1.glitch.me/stat");
                                    xsxml.onload = (e) => {
                                        //console.log(e.currentTarget.responseText, e);
                                        //if (e.currentTarget.responseText == "1") {};
                                    };
                                    //xsxml.send();
                                } catch(e) {
                                    console.log(e);
                                };
                            };
                            rcexec = true;
                        })();
                        break;
                    case "ch":
                        if (document.getElementById("cMirr").checked) {
                            if (n[1] != myPlayer.id) {
                                dns(["ch", [n[2]]]);
                            };
                        };
                        break;
                    case "2":
                        null != names[n[1][1]] ? names[n[1][1]] != n[1][2] ? (console.log("|", names[n[1][1]], "|", n[1][2], "|", n[1][1], "|"), cPlayer && chat("|" + names[n[1][1]] + "|" + n[1][2] + "|")) : (console.log("|", names[n[1][1]], "|"), cPlayer && chat("|" + names[n[1][1]] + "|")) : (console.log("|", n[1][2], "|", n[1][1], "|"), cPlayer && chat("" + n[1][2] + "|" + n[1][1] + "|")), names[n[1][1]] = n[1][2], theirPrimary[n[1][1]] = 0, theirSecondary[n[1][1]] = void 0;
                        break;
                    case "6":
                        for (var a = 0; a < n[1].length / 8; a++) {
                            var i = n[1].slice(8 * a, 8 * a + 8);
                            buildings.push(i);
                            if(i[6] == 15 && i[7] != myPlayer.clan && i[7] != myPlayer.id){
                                if(Math.sqrt(Math.pow((myPlayer.y-i[2]), 2) + Math.pow((myPlayer.x-i[1]), 2)) < 100) {
                                    if (document.getElementById("doAntiTrap").checked) {
                                        paTr();
                                        document.getElementById("doAntiTrapChat").checked && (
                                            chat(document.getElementById("antiTrapChat").value)
                                        );
                                    };
                                    insidetrap = true;
                                   if (document.getElementById("autoBreak").checked) {
                                       autoBreakLoop = true;
                                       autoBreakObject = i;
                                   };
                                };
                            };
                        };
                        break;
                    case "7":
                        setCooldown(n), "counter" == mode && !inInsta && n[1] != myPlayer.id && n[3] > 1 && n[3] < 6 && distance(lastX[n[1]], lastY[n[1]]) < 300 && (inInsta = !0, autoaim = !0, weapon = primary, dns(["5", [primary, !0]]), dns(["13c", [0, 7, 0]]), dns(["13c", [0, 0, 1]]), dns(["13c", [0, 18, 1]]), dns(["7", [!0]]), setTimeout(function () {
                            dns(["13c", [0, 53, 0]]), dns(["13c", [0, 13, 1]]), dns(["7", [!0]]), autoaim = !1
                        }, 100), setTimeout(function () {
                            inInsta = !1
                        }, 200));
                        break;
                    case "9":
                        "kills" == n[1] && ezBool && chat(ezChat);
                        break;
                    case "11":
                        console.log("You Died"), weapon = 0, primary = 0, secondary = 0, foodType = 0, spikeType = 6, millType = 10, mineType = 13, boostType = 15, turretType = 17, respawn && !deathCrash && setTimeout(function () {
                            dns(["sp", [{
                                name: names[myPlayer.id]
                                , moofoll: !0
                                , skin: 0
                            }]]), console.log("Auto Respawning")
                        }, 3e3);
                        break;
                    case "12":
                        try {if (n[1] == autoBreakObject[0]) {
                            autoBreakLoop = false;
                            autoBreakObject = [];
                        }}catch(e){};
                        for (var l = 0; l < buildings.length; l++)
                            if (buildings[l][0] == n[1]) {
                                logX.push(buildings[l][1]), logY.push(buildings[l][2]);
                                var p = new Date;
                                logTime.push(p.getTime()), buildings.splice(l, 1), l--
                            } break;
                    case "13":
                        for (var r = 0; r < buildings.length; r++) buildings[r][7] == n[1] && (buildings.splice(r, 1), r--);
                        names[n[1]] ? (console.log("|", names[n[1]], "| RaGeD"), cPlayer && chat("|" + names[n[1]] + "| RaGeD"), names[n[1]] = void 0) : console.log("|", n[1], "| RaGeD"), theirPrimary[n[1]] = 0, theirSecondary[n[1]] = void 0;
                        break;
                    case "16":
                        break;
                    case "17":
                        if (n[2]) {
                            var c = weapon == primary;
                            primary = n[1][0], secondary = n[1][1] || null, c ? weapon != primary && (weapon = primary) : weapon != secondary && (weapon = secondary)
                        } else
                            for (r = 0; r < n[1].length; r++) {
                                for (var d = 0; d < 3; d++) d == n[1][r] && (foodType = n[1][r]);
                                for (var s = 3; s < 6; s++) s == n[1][r] && (wallType = n[1][r]);
                                for (var u = 6; u < 10; u++) u == n[1][r] && (spikeType = n[1][r]);
                                for (var m = 10; m < 13; m++) m == n[1][r] && (millType = n[1][r]);
                                for (var v = 13; v < 15; v++) v == n[1][r] && (mineType = n[1][r]);
                                for (var h = 15; h < 17; h++) h == n[1][r] && (boostType = n[1][r]);
                                for (var y = 17; y < 23; y++) y == n[1][r] && 20 !== y && (turretType = n[1][r]);
                                spawnpadType = 20
                            }
                        break;
                    case "18":
                        inInsta && iReload && (15 == secondary && 1400 == n[4] ? reload = 1650 : 13 == secondary && 1200 == n[4] ? reload = 400 : 12 == secondary && 1200 == n[4] ? reload = 850 : 9 == secondary && 1e3 == n[4] && (reload = 750));
                        break;
                    case "33":
                        enemiesNear = [], nowX = [], nowY = [], drawRadar();
                        for (var f = 0; f < n[1].length / 13; f++) {
                            var b = n[1].slice(13 * f, 13 * f + 13);
                            b[5] < 9 ? (pris[b[0]] = [b[5], b[6]]) : (secs[b[0]] = [b[5], b[6]]);
                            b[0] == myPlayer.id ? (myPlayer.x = b[1], myPlayer.y = b[2], myPlayer.dir = b[3], myPlayer.object = b[4], myPlayer.weapon = b[5], myPlayer.clan = b[7], myPlayer.isLeader = b[8], myPlayer.hat = b[9], myPlayer.accessory = b[10], myPlayer.isSkull = b[11], nowX[myPlayer.id] = myPlayer.x, nowY[myPlayer.id] = myPlayer.y, ctx.beginPath(), ctx.strokeStyle = "#0000FF", ctx.moveTo(centreX, centreY), ctx.lineTo(centreX + (myPlayer.x - lastX[myPlayer.id]) / 6.25, centreY + (myPlayer.y - lastY[myPlayer.id]) / 6.25), ctx.stroke()) : b[7] != myPlayer.clan || null === b[7] ? (enemiesNear.push(b), distance(b[1], b[2]) > 500 ? drawArrow(b[1], b[2], "#000000") : drawCircle(b[1], b[2], lastX[b[0]], lastY[b[0]], "#000000"), nowX[b[0]] = b[1], nowY[b[0]] = b[2], antiBoostSpike && null != lastX[b[0]] && null != lastY[b[0]] && distance(b[1], b[2]) - distance(lastX[b[0]], lastY[b[0]]) < maxSpeed && (place(spikeType, Math.atan2(b[2] - myPlayer.y, b[1] - myPlayer.x) + toRad(90)), place(spikeType, Math.atan2(b[2] - myPlayer.y, b[1] - myPlayer.x) - toRad(90))), b[5] > 8 ? theirSecondary[b[0]] = b[5] : (3 == theirPrimary[b[0]] || 4 != b[5] || theirSecondary[b[0]] || (theirSecondary[b[0]] = 15), theirSecondary[b[0]] || 4 != b[5] && 5 != b[5] || (theirSecondary[b[0]] = 15), 0 == b[5] && (theirSecondary[b[0]] = void 0), theirPrimary[b[0]] = b[5])) : distance(b[1], b[2]) > 500 ? drawArrow(myPlayer.x, myPlayer.y, b[1], b[2], "#00EE00") : drawCircle(b[1], b[2], lastX[b[0]], lastY[b[0]], "#00EE00")
                        }
                        if (pos.innerHTML = "|" + myPlayer.x + "," + myPlayer.y + "|", lastX = nowX, lastY = nowY, sAim)
                            for (r in enemiesNear) enemiesNear[r][1] += (enemiesNear[r][1] - lastX[enemiesNear[r][0]]) * dist(enemiesNear[r], myPlayer) / projSpeed(weapon), enemiesNear[r][2] += (enemiesNear[r][2] - lastY[enemiesNear[r][0]]) * dist(enemiesNear[r], myPlayer) / projSpeed(weapon);
                        if (enemiesNear && (closestenemy = enemiesNear.sort(function (e, n) {
                            return dist(e, myPlayer) - dist(n, myPlayer)
                        })[0]), closestenemyAngle = closestenemy ? Math.atan2(closestenemy[2] - myPlayer.y, closestenemy[1] - myPlayer.x) : myPlayer.dir, "insta" == mode && !inInsta && closestenemy && dist(closestenemy, myPlayer) < 220 && !cooldown[myPlayer.id] && weapon != secondary && (inInsta = !0, iAim && (autoaim = !0), icBool && chat(iChat), dns(["13c", [0, 0, 1]]), dns(["7", [!0]]), iReverse ? (weapon = secondary, dns(["5", [secondary, !0]]), dns(["13c", [0, iHat2, 0]]), dns(["13c", [0, iAcc2, 1]]), setTimeout(function () {
                            dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), weapon = primary, dns(["5", [primary, !0]])
                        }, instaSpeedR / 2)) : (weapon = primary, dns(["5", [primary, !0]]), iSwitch || (iAim ? (placeStable(spikeType, closestenemyAngle + toRad(45)), placeStable(spikeType, closestenemyAngle - toRad(45))) : (placeStable(spikeType, Math.atan2(mY - height / 2, mX - width / 2) + toRad(45)), placeStable(spikeType, Math.atan2(mY - height / 2, mX - width / 2) - toRad(45)))), dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), setTimeout(function () {
                            dns(["13c", [0, iHat2, 0]]), dns(["13c", [0, iAcc2, 1]]), iSwitch && (weapon = secondary, dns(["5", [secondary, !0]]))
                        }, instaSpeed / 2)), setTimeout(function () {
                            autoaim = !1, dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]]), dns(["7", [!0]]), weapon = secondary, dns(["5", [secondary, !0]]);
                            var e = 0;
                            15 == secondary ? e = 1650 : 13 == secondary ? e = 400 : 12 == secondary ? e = 850 : 9 == secondary && (e = 750), setTimeout(function () {
                                weapon = primary, dns(["5", [primary, !0]]), setTimeout(function () {
                                    inInsta = !1
                                }, 1e3)
                            }, e)
                        }, instaSpeed)), "counter" != mode || inInsta) {
                            if (!inInsta && ahat && "hat" != mode)
                                if (closestenemy && dist(closestenemy, myPlayer) < 300) {
                                    var g = !1;
                                    for (a = 0; a < n[1].length / 13; a++) {
                                        var k = n[1].slice(13 * a, 13 * a + 13);
                                        if (k[0] != myPlayer.id && Math.sqrt(Math.pow(myPlayer.y - k[2], 2) + Math.pow(myPlayer.x - k[1], 2)) < 300 && !cooldown[k[0]]) {
                                            g = !0;
                                            break
                                        }
                                    }
                                    g && defence ? (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])) : offence && (dns(["13c", [0, oHat, 0]]), dns(["13c", [0, oAcc, 1]]))
                                } else speed && (myPlayer.y < 2400 ? (dns(["13c", [0, ssHat, 0]]), dns(["13c", [0, ssAcc, 1]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (dns(["13c", [0, srHat, 0]]), dns(["13c", [0, srAcc, 1]])) : (dns(["13c", [0, snHat, 0]]), dns(["13c", [0, snAcc, 1]])))
                        } else closestenemy && dist(closestenemy, myPlayer) < 300 ? (dns(["13c", [0, 11, 0]]), dns(["13c", [0, 0, 1]]), dns(["13c", [0, 21, 1]])) : myPlayer.y < 2400 ? (dns(["13c", [0, ssHat, 0]]), dns(["13c", [0, ssAcc, 1]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (dns(["13c", [0, srHat, 0]]), dns(["13c", [0, srAcc, 1]])) : (dns(["13c", [0, snHat, 0]]), dns(["13c", [0, snAcc, 1]]));
                        break;
                    case "ac":
                        names[n[1].owner] ? console.log("|", names[n[1].owner], "| CrEaTeD {", n[1].sid, "|") : console.log("|", n[1].owner, "| CrEaTeD {", n[1].sid, "}");
                        break;
                    case "ch":
                        if (n[1] == myPlayer.id)
                            if ("!clan " == n[2].substring(0, 6)) dns(["8", [n[2].substring(6)]]), setTimeout(function () {
                                chat("Clan : " + n[2].substring(6))
                            }, 500);
                            else if ("!unclan" == n[2].substring(0, 7)) dns(["9", [null]]), setTimeout(function () {
                                chat("Clan : null")
                            }, 500);
                            else if ("!join " == n[2].substring(0, 6)) {
                                var w = n[2].substring(6);
                                dns(["10", [w]]), setTimeout(function () {
                                    chat("Clan : " + w)
                                }, 500)
                            } else if ("!kick " == n[2].substring(0, 6)) {
                                var S = n[2].substring(6)
                                , H = 0;
                                names.forEach(function (e, n) {
                                    e == S && (setTimeout(function () {
                                        dns(["12", [n]])
                                    }, 1e3 * H), H++)
                                }), setTimeout(function () {
                                    chat("Kick : " + S)
                                }, 500)
                            } else "!derp" == n[2].substring(0, 7) ? setTimeout(function () {
                                chat(derp ? "Derp : OFF" : "Derp : ON"), derp = !derp, document.getElementById("derp")
                                    .checked = derp
                            }, 500) : "!setup stick" == n[2].substring(0, 12) ? (dns(["6", [8]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [10]]), dns(["6", [33]]), setTimeout(function () {
                                chat("Setup : Stick + Hammer")
                            }, 500)) : "!setup instaP" == n[2].substring(0, 13) ? (dns(["6", [5]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [9]]), dns(["6", [33]]), dns(["6", [28]]), dns(["6", [15]]), setTimeout(function () {
                                chat("Setup : Polearm + Musket")
                            }, 500)) : "!setup instaK" == n[2].substring(0, 13) ? (dns(["6", [3]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [9]]), dns(["6", [33]]), dns(["6", [4]]), dns(["6", [4]]), dns(["6", [15]]), setTimeout(function () {
                                chat("Setup : Katana + Musket")
                            }, 500)) : "!greataxe" == n[2].substring(0, 9) ? (dns(["6", [2]]), setTimeout(function () {
                                chat("Upgrade : Great Axe")
                            }, 500)) : "!katana" == n[2].substring(0, 7) ? (dns(["6", [4]]), setTimeout(function () {
                                chat("Upgrade : Katana")
                            }, 500)) : "!crossbowR" == n[2].substring(0, 10) ? (dns(["6", [13]]), setTimeout(function () {
                                chat("Upgrade : Repeater Crossbow")
                            }, 500)) : "!crossbow" == n[2].substring(0, 9) ? (dns(["6", [12]]), setTimeout(function () {
                                chat("Upgrade : Crossbow")
                            }, 500)) : "!musket" == n[2].substring(0, 7) ? (dns(["6", [15]]), setTimeout(function () {
                                chat("Upgrade : Musket")
                            }, 500)) : "!windmill" == n[2].substring(0, 9) ? (dns(["6", [28]]), setTimeout(function () {
                                chat("Upgrade : Power Mill")
                            }, 500)) : "!spikeS" == n[2].substring(0, 7) ? (dns(["6", [25]]), setTimeout(function () {
                                chat("Upgrade : Spinning Spikes")
                            }, 500)) : "!spikeP" == n[2].substring(0, 7) ? (dns(["6", [24]]), setTimeout(function () {
                                chat("Upgrade : Posion Spikes")
                            }, 500)) : "!autoheal" == n[2].substring(0, 9) ? setTimeout(function () {
                                chat(heal1 ? "Heal : OFF" : "Heal : ON"), heal1 = !heal1, document.getElementById("heal1")
                                    .checked = heal1
                            }, 500) : "!place normal" == n[2].substring(0, 13) ? (pType = "0", setTimeout(function () {
                                chat("Place : Normal"), document.getElementById("pType")
                                    .value = pType
                            }, 500)) : "!place legit" == n[2].substring(0, 12) ? (pType = "1", setTimeout(function () {
                                chat("Place : Legit"), document.getElementById("pType")
                                    .value = pType
                            }, 500)) : "!place varience" == n[2].substring(0, 15) ? (pType = "2", setTimeout(function () {
                                chat("Place : Varience"), document.getElementById("pType")
                                    .value = pType
                            }, 500)) : "!place derp" == n[2].substring(0, 11) ? (pType = "3", setTimeout(function () {
                                chat("Place : Derp"), document.getElementById("pType")
                                    .value = pType
                            }, 500)) : "!heal normal" == n[2].substring(0, 12) ? (hType = "0", setTimeout(function () {
                                chat("Heal : Normal"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!heal linear" == n[2].substring(0, 12) ? (hType = "1", setTimeout(function () {
                                chat("Heal : Linear"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!heal quadratic" == n[2].substring(0, 15) ? (hType = "2", setTimeout(function () {
                                chat("Heal : Quadratic"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!heal interval" == n[2].substring(0, 14) ? (hType = "3", setTimeout(function () {
                                chat("Heal : Interval"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!heal slow" == n[2].substring(0, 10) ? (hType = "4", setTimeout(function () {
                                chat("Heal : Slow"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!heal fast" == n[2].substring(0, 10) ? (hType = "5", setTimeout(function () {
                                chat("Heal : VERY FAST"), document.getElementById("hType")
                                    .value = hType
                            }, 500)) : "!" == n[2].substring(0, 2) && setTimeout(function () {
                                placeStable(millType, Number.MAX_VALUE), dns(["ch", [""]]), dns(["8", [""]]), dns(["5", ["length", !0]]), weapon = "length"
                            }, 500);
                        break;
                    case "h":
                        (n[1] == myPlayer.id) && (chSHC(n));
                        if (!(n[1] == myPlayer.id) && n[2] < 100 && n[2] > 0) break;
                        var x = void 0;
                        let didFixed = false;
                        let damage = 100 - n[2]; //aka dmg ezezez
                        if (document.getElementById("doAntiAge").checked
                            && closestenemy
                            && (damage == 37.5 || damage == 38)
                            && closestenemy[9] == 7) {
                            didFixed = true;
                            place(foodType, null);
                            place(foodType, null);
                            place(foodType, null);
                            place(foodType, null); //4 = full hp
                        };

                        //if (document.getElementById("antiSkidTick").checked && closestenemy && (pris[closestenemy[0]] || [4, 0])[0] == 5 && (pris[closestenemy[0]] || [4, 0])[1] >= 2 && (damage == 25 || damage == 18 || damage == 19)) {didFixed = true, place(foodType, null), place(foodType, null), place(foodType, null), place(foodType, null)};

                        if (document.getElementById("newAnti").checked) {
                            if (didFixed) return;
                            didFixed = true;

                            let h = false;
                            if (closestenemy && dist(closestenemy, myPlayer) < 320) {
                                closestenemy[5] < 9 ? ((( (getDMG((secs[closestenemy[0]] || [15, 0])[0]) * wVM[(secs[closestenemy[0]] || [15, 0])[1]]) + 25) >= n[2]) ? (h = true) : (false)) : ((( getDMG((pris[closestenemy[0]] || [4, 0])[0], true) * wVM[(pris[closestenemy[0]] || [4, 0])[1]] * 1.5) >= n[2]) ? (h = true) : (false));
                                if (h) {
                                    place(foodType, null);
                                    place(foodType, null);
                                    place(foodType, null);
                                    place(foodType, null);
                                } else {
                                    let tm = 120
                                    if (delay > 120) tm - 30;
                                    setTimeout(() => {
                                        decrSH();
                                        place(foodType, null);
                                    }, 100);
                                };
                            } else {
                                let tm = 120;
                                if (delay > 120) tm - 30;
                                setTimeout(() => {
                                    decrSH();
                                    place(foodType, null);
                                }, 100);
                            };
                        };

                        if (document.getElementById("extraAnti").checked) {
                            if (didFixed) return;
                            didFixed = true;
                            if(pingDel < 140){
                                delay2 = pingDel;
                            }else{
                                delay2 = 0;
                            };

                            if(n[2] == 50){
                                if(lastHealth == 25 && enemiesNear){
                                    place(foodType, null);
                                    bullspam += 1;
                                };
                            };
                            if (n[2] < 56 && n[2] > 0 && holding == false && closestenemy && bullspam < 5){//bullspam detector
                                if(myPlayer.hat != 6 && n[2] == 55){}else{
                                    if(foodType == 17){// if cookie, heal once
                                        holding = true
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        let lhat = myPlayer.hat
                                        let lacc = myPlayer.accessory
                                        if(myPlayer.hat != 7 && myPlayer.hat != 11){
                                            dns(["13c", [0, 22, 0]]);
                                        }
                                        setTimeout( () => {
                                            holding2 = true
                                        }, 50);
                                        setTimeout( () => {
                                            bullspam += 1;
                                            decrSH();
                                            place(foodType, closestenemyAngle);//heal again after 250
                                            holding = false
                                            holding2 = false
                                            if (myPlayer.y < 2400){
                                                hat(0)
                                                hat(6)
                                                hat(15);
                                            } else if (myPlayer.y > 6850 && myPlayer.y < 7575){
                                                hat(0)
                                                hat(6)
                                                hat(31)
                                            } else {
                                                hat(0)
                                                hat(6)
                                                hat(12);
                                            }
                                            acc(0)
                                            acc(11);
                                            if(lhat != 7 && lhat != 53){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                            else if(lhat == 7){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                        }, 200 + delay2);
                                    }
                                    if(foodType == 18){//if cheese, heal once
                                        holding = true
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        let lhat = myPlayer.hat
                                        let lacc = myPlayer.accessory
                                        if(myPlayer.hat != 7 && myPlayer.hat != 11){
                                            dns(["13c", [0, 22, 0]]);
                                        }
                                        setTimeout( () => {
                                            holding2 = true
                                        }, 30);
                                        setTimeout( () => {
                                            bullspam += 1;
                                            decrSH();
                                            place(foodType, closestenemyAngle);//heal again at 250
                                            holding = false
                                            holding2 = false
                                            if (myPlayer.y < 2400){
                                                hat(0)
                                                hat(6)
                                                hat(15);
                                            } else if (myPlayer.y > 6850 && myPlayer.y < 7575){
                                                hat(0)
                                                hat(6)
                                                hat(31)
                                            } else {
                                                hat(0)
                                                hat(6)
                                                hat(12);
                                            }
                                            acc(0)
                                            acc(11);
                                            if(lhat != 7 && lhat != 53){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                            else if(lhat == 7){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                        }, 200 + delay2);
                                    }
                                    else{
                                        holding = true// if cookie, heal 3 times
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        let lhat = myPlayer.hat
                                        let lacc = myPlayer.accessory
                                        if(myPlayer.hat != 7 && myPlayer.hat != 11){
                                            dns(["13c", [0, 22, 0]]);
                                        }
                                        setTimeout( () => {
                                            holding2 = true
                                        }, 30);
                                        setTimeout( () => {
                                            bullspam += 3;
                                            decrSH();
                                            place(foodType, closestenemyAngle);//heal once 250 ms after
                                            holding = false
                                            holding2 = false
                                            if (myPlayer.y < 2400){
                                                hat(0)
                                                hat(6)
                                                hat(15);
                                            } else if (myPlayer.y > 6850 && myPlayer.y < 7575){
                                                hat(0)
                                                hat(6)
                                                hat(31)
                                            } else {
                                                hat(0)
                                                hat(6)
                                                hat(12);
                                            }
                                            acc(0)
                                            acc(11);
                                            if(lhat != 7 && lhat != 53){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                            else if(lhat == 7){
                                                hat(lhat)
                                                acc(lacc)
                                            }
                                        }, 200 + delay2);
                                    }
                                }
                            }
                            if(n[2] < 16 && n[2] > 0 && holding2 == false){
                                place(foodType, closestenemyAngle)
                            }
                            if(n[2] < 94 && n[2] > 0 && holding == false) {//this is autoheal
                                setTimeout( () => {
                                    if(holding == false && n[2] < 94 && n[2] > 0){//holding makes sure dont heal when antiinsta in progress, or else clown faster
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        place(foodType, closestenemyAngle);
                                        bullspam = bullspam - 2;
                                        decrSH();
                                    }
                                }, 140 - delay2);
                            }
                            if(n[2] < 100 && n[2] > 94 && holding == false) {//if lost 6 dmg or higher, heal slowly. also doesnt clown as much.
                                setTimeout( () => {
                                    if(holding == false && n[2] < 100 && n[2] > 94){
                                        place(foodType, closestenemyAngle);
                                        bullspam = bullspam - 2;
                                        decrSH();
                                    }
                                }, 300 - delay2);
                            }
                            lastHealth = n[2];
                        };
                        switch (hType) {
                            case "0":
                                x = 120;
                                break;
                            case "1":
                                x = 2 * n[2];
                                break;
                            case "2":
                                x = (n[2] - 100) * (n[2] - 100) / -50 + 200;
                                break;
                            case "3":
                                x = n[2] < 50 ? 50 : 200;
                                break;
                            case "4":
                                x = 200;
                                break;
                            case "5":
                                x = 0;
                                break;
                            default:
                                console.log("HEAL ERROR")
                        }
                        setTimeout(function () {
                            if (!didFixed) heal();
                        }, x);
                }
            }

            function dns(e) {
                ws.send(new Uint8Array(Array.from(msgpack5.encode(e))))
            }

            function chat(e) {
                dns(["ch", [e]])
            }

            function scramble(e) {
                for (var n = /^[A-Za-z]+$/, o = "", t = e.length, a = 0; a < t; a++) e.charAt(a)
                    .match(n) ? Math.random() > .25 ? o += e.charAt(a) : o += acFill : o += e.charAt(a);
                chat(o)
            }

            function acc(e) {
                dns(["13c", [0, 0, 1]]), dns(["13c", [0, e, 1]])
            }

            function hat(e) {
                dns(["13c", [0, e, 0]])
            }

            function place(e) {
                if (!document.getElementById("invisBuilds").checked) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2);
                    switch (pType) {
                        case "1":
                            n = null;
                            break;
                        case "2":
                            n += toRad(80 * Math.random() - 40);
                            break;
                        case "3":
                            n = toRad(dir = (324092385 / (dir * Math.E) - Math.cbrt(dir) * dir) % 360)
                    }
                    dns(["5", [e, null]]), dns(["c", [1, n]]), dns(["c", [0, n]]), dns(["5", [weapon, !0]])
                } else {
                    let mk = Number.MAX_VALUE;
                    dns(["5", [e, null]]), dns(["c", [1, mk]]), dns(["c", [0, mk]]), dns(["5", [weapon, !0]])
                };
            }

            function heal() {
                56 == myPlayer.hat ? (storeEquip(0), dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]]), dns(["13c", [0, 56, 0]])) : (dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]])), heal2 && (56 == myPlayer.hat ? (storeEquip(0), dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]]), dns(["13c", [0, 56, 0]])) : (dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]])))
            }

            function boostSpike() {
                placeStable(spikeType, closestenemyAngle + toRad(90)), placeStable(spikeType, closestenemyAngle - toRad(90)), placeStable(boostType, closestenemyAngle), dns(["33", [closestenemyAngle]])
            }

            function boostMill() {
                var e = Math.atan2(mY - height / 2, mX - width / 2);
                placeStable(millType, e + toRad(144)), placeStable(millType, e + toRad(144)), placeStable(millType, e + toRad(72)), placeStable(millType, e + toRad(72)), placeStable(boostType, e), dns(["33", [e]])
            };
            let hit360 = 0;
            setInterval(()=>{
                if (hit360 || (document.getElementById("shield360").checked && myPlayer.weapon == 11)) dns(["2", [90**100]]);
            }, 25);
            checkPing.observe(ping, {
                attributes: !1
                , childList: !0
                , subtree: !1
            }), cvs.addEventListener("mousedown", function (e) {
                if (2 == e.button && !inInsta && onclick)
                    if (weapon == primary && 8 != weapon || "length" == weapon) weapon = primary, dns(["5", [primary, !0]]), inInsta = !0, dns(["2", [Math.atan2(mY - height / 2, mX - width / 2)]]), dns(["13c", [0, oHat, 0]]), dns(["13c", [0, 0, 1]]), dns(["13c", [0, oAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                        ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                    }, 120);
                    else if (weapon == secondary) switch (weapon) {
                        case 15:
                            inInsta = !0, dns(["13c", [0, 1, 0]]), dns(["13c", [0, otAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                                ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                            }, 120);
                            break;
                        case 10:
                            inInsta = !0, dns(["2", [Math.atan2(mY - height / 2, mX - width / 2)]]), dns(["13c", [0, tHat, 0]]), dns(["13c", [0, tAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                                ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                            }, 120)
                    }
                if (1 == e.button && (e.preventDefault(), dns(["5", ["length", !0]]), weapon = "length"), 0 == e.button && !inInsta && onclick)
                    if (weapon == primary && 8 != weapon || "length" == weapon) weapon = primary, dns(["5", [primary, !0]]), inInsta = !0, dns(["2", [Math.atan2(mY - height / 2, mX - width / 2)]]), dns(["13c", [0, tHat, 0]]), dns(["13c", [0, 0, 1]]), dns(["13c", [0, tAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                        ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                    }, 120);
                    else if (weapon == secondary) switch (weapon) {
                        case 15:
                            inInsta = !0, dns(["13c", [0, otHat, 0]]), dns(["13c", [0, otAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                                ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                            }, 120);
                            break;
                        case 10:
                            inInsta = !0, dns(["13c", [0, tHat, 0]]), dns(["13c", [0, tAcc, 1]]), dns(["7", [!0]]), setTimeout(function () {
                                ahat || (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])), dns(["7", [!0]]), inInsta = !1
                            }, 120)
                    }
            }, !1);
            var repeater = function (e, n, o) {
                var t = !1
                , a = void 0;
                return {
                    start: function (i) {
                        i == e && "chatbox" !== document.activeElement.id.toLowerCase() && (t = !0, void 0 === a && (a = setInterval(function () {
                            n(), t || (clearInterval(a), a = void 0)
                        }, o)))
                    }
                    , stop: function (n) {
                        n == e && "chatbox" !== document.activeElement.id.toLowerCase() && (t = !1)
                    }
                }
            }
            , healer = repeater(kHeal, function () {
                heal(), console.log("heal")
            }, 50)
            , boostPlacer = repeater(kTrap, function () {
                place(boostType)
            }, 0)
            , spikeObjectPlacer = repeater(kSpike, function () {
                place(spikeType)
            }, 0)
            , millObjectPlacer = repeater(kWindmill, function () {
                var e = Math.atan2(mY - height / 2, mX - width / 2);
                closestenemy ? place(millType, e) : (e = Math.round(e / toRad(45)) * toRad(45), placeStable(millType, e + (Math.PI*900000000)), placeStable(millType, toRad(90) + e  + (Math.PI*900000000)), placeStable(millType, toRad(-90) + e  + (Math.PI*900000000)))
            }, 0)
            , turretObjectPlacer = repeater(kTurret, function () {
                place(turretType)
            }, 0)
            , boostSpikePlacer = repeater(kBS, boostSpike, 50)
            , boostMillPlacer = repeater(kBM, boostMill, 250);

            function checkElement(e) {
                return null !== e.offsetParent
            }

            function toRad(e) {
                return .01745329251 * e
            }

            function dist(e, n) {
                return Math.sqrt(Math.pow(n.y - e[2], 2) + Math.pow(n.x - e[1], 2))
            }

            function update() {
                for (var e = 0; 9 > e; e++) checkElement(document.getElementById("actionBarItem" + e.toString())) && (primary = e);
                for (var n = 9; 16 > n; n++) checkElement(document.getElementById("actionBarItem" + n.toString())) && (secondary = n);
                for (var o = 16; 19 > o; o++) checkElement(document.getElementById("actionBarItem" + o.toString())) && (foodType = o - 16);
                for (var t = 19; 22 > t; t++) checkElement(document.getElementById("actionBarItem" + t.toString())) && (wallType = t - 16);
                for (var a = 22; 26 > a; a++) checkElement(document.getElementById("actionBarItem" + a.toString())) && (spikeType = a - 16);
                for (var i = 26; 29 > i; i++) checkElement(document.getElementById("actionBarItem" + i.toString())) && (millType = i - 16);
                for (var l = 29; 31 > l; l++) checkElement(document.getElementById("actionBarItem" + l.toString())) && (mineType = l - 16);
                for (var p = 31; 33 > p; p++) checkElement(document.getElementById("actionBarItem" + p.toString())) && (boostType = p - 16);
                for (var r = 33; 36 > r; r++) checkElement(document.getElementById("actionBarItem" + r.toString())) && (turretType = r - 16);
                for (var c = 36; 37 > c; c++) checkElement(document.getElementById("actionBarItem" + c.toString())) && (spawnpadType = c - 16);
                for (var d = 37; 39 > d; d++) checkElement(document.getElementById("actionBarItem" + d.toString())) && (turretType = d - 16)
            }

            function placeStable(e) {
                if (!document.getElementById("invisBuilds").checked) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2);
                    dns(["5", [e, null]]), dns(["c", [1, n]]), dns(["c", [0, n]]), dns(["5", [weapon, !0]])
                } else {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2); n += Number.MAX_VALUE;
                    dns(["5", [e, null]]), dns(["c", [1, n]]), dns(["c", [0, n]]), dns(["5", [weapon, !0]])
                };
            }

            let millToggle = 0;

            function doHatCycle() {
                dns(["13c", [0, 11, 0]]), dns(["13c", [0, 21, 1]]), setTimeout(function () {
                    dns(["13c", [0, 7, 0]]), dns(["13c", [0, 18, 1]])
                }, 300), setTimeout(function () {
                    dns(["13c", [0, 55, 0]]), dns(["13c", [0, 13, 1]])
                }, 600), setTimeout(function () {
                    dns(["13c", [0, 40, 0]]), dns(["13c", [0, 19, 1]])
                }, 900), setTimeout(function () {
                    dns(["13c", [0, 6, 0]]), dns(["13c", [0, 21, 1]])
                }, 1200), setTimeout(function () {
                    dns(["13c", [0, 26, 0]]), dns(["13c", [0, 13, 1]])
                }, 1500), setTimeout(function () {
                    dns(["13c", [0, 12, 0]]), dns(["13c", [0, 19, 1]])
                }, 1800), setTimeout(function () {
                    dns(["13c", [0, 21, 0]]), dns(["13c", [0, 18, 1]])
                }, 2100), setTimeout(function () {
                    dns(["13c", [0, 53, 0]]), dns(["13c", [0, 21, 1]])
                }, 2500)
            };

            let millInvisTypes = [10000000, 0, 90*100, 100000000, 1000000000];
            function getRandMtype() {
                return millInvisTypes[Math.floor(Math.random() * millInvisTypes.length)];
            };

            const wrepeater = repeater(87, ()=>{
                if (!millToggle) return;
                place(millType, + toRad(50) + (Math.PI * getRandMtype()));
                place(millType, + toRad(130) + (Math.PI * getRandMtype()));
            }, 50);

            const arepeater = repeater(65, ()=>{
                if (!millToggle) return;
                place(millType, + toRad(30) + (Math.PI * getRandMtype()));
                place(millType, + toRad(-30) + (Math.PI * getRandMtype()));
            }, 50);

            const srepeater = repeater(83, ()=>{
                if (!millToggle) return;
                place(millType, + toRad(310) + (Math.PI * getRandMtype()));
                place(millType, + toRad(230) + (Math.PI * getRandMtype()));
            }, 50);

            const drepeater = repeater(68, ()=>{
                if (!millToggle) return;
                place(millType, + toRad(140) + (Math.PI * getRandMtype()));
                place(millType, + toRad(-140) + (Math.PI * getRandMtype()));
            }, 50);

            document.addEventListener("keydown", function (e) {
                wrepeater.start(e.keyCode);
                arepeater.start(e.keyCode);
                srepeater.start(e.keyCode);
                drepeater.start(e.keyCode);
                if(e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                    millToggle = (millToggle + 1) % 2;
                    if (millToggle == 1) {
                        dns(["ch", ["|WidMill| ==>On<=="]]);
                    } else {
                        dns(["ch", ["|WidMill| ==>Off<=="]]);
                    }
                };
                if(e.keyCode == 96 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                    hit360 = (hit360 + 1) % 2;
                    if (hit360 == 1) {
                        dns(["ch", ["|Hit-360| ==>On<=="]]);
                    } else {
                        dns(["ch", ["|Hit-360| ==>Off<=="]]);
                    };
                };
                spikeObjectPlacer.start(e.keyCode), healer.start(e.keyCode), boostPlacer.start(e.keyCode), boostSpikePlacer.start(e.keyCode), boostMillPlacer.start(e.keyCode), millObjectPlacer.start(e.keyCode), turretObjectPlacer.start(e.keyCode), 97 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && ("hat" == mode ? (clearInterval(hatID), mode = "", chat("|AutoHaT| ==>Off<==")) : "counter" == mode ? (mode = "", chat("|AutoHaT| ==>Off<==")) : (mode = "counter", chat("|AutoHaT| ==>On<=="))), 98 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && ("hat" == mode ? (clearInterval(hatID), mode = "", chat("|AuTo-InsTa| ==>Off<==")) : "insta" == mode ? (mode = "", chat("|AuTo-InsTa| ==>Off<==")) : (mode = "insta", chat("|AuTo-InsTa| ==>On<=="))), 99 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && ("hat" == mode ? (clearInterval(hatID), mode = "", chat("|HaTMix| ==>Off<==")) : (doHatCycle(), hatID = setInterval(function () {
                    doHatCycle()
                }, 2500), mode = "hat", chat("|HaTMix| ==>On<=="))), 38 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && ("hat" == mode && clearInterval(hatID), mode = "", chat("   <MoD>By/iC3PeaK\\<gg>   ")), 1 == e.key && "chatbox" !== document.activeElement.id.toLowerCase() ? weapon = primary : 2 == e.key && "chatbox" !== document.activeElement.id.toLowerCase() && (weapon = secondary), e.keyCode == uneqiup && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? resetHat() : storeEquip(0) : e.keyCode == TankGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? (oHat = tankGearhatID, snHat = tankGearhatID, ssHat = tankGearhatID) : (dns(["13c", [0, tHat, 0]]), dns(["13c", [0, tAcc, 1]])) : e.keyCode == SoldierHelmetKey && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? (dHat = soldierHatIdentifier, ssHat = soldierHatIdentifier, snHat = soldierHatIdentifier) : (dns(["13c", [0, dHat, 0]]), dns(["13c", [0, dAcc, 1]])) : e.keyCode == BullHelmetKey && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? (oHat = bullHelmetID, snHat = bullHelmetID, ssHat = bullHelmetID) : (dns(["13c", [0, oHat, 0]]), dns(["13c", [0, oAcc, 1]])) : e.keyCode == BoosterHatKey && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? (ssHat = winterCapID, snHat = boostHatID, srHat = flipperHatID) : myPlayer.y < 2400 ? (dns(["13c", [0, ssHat, 0]]), dns(["13c", [0, ssAcc, 1]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (dns(["13c", [0, srHat, 0]]), dns(["13c", [0, srAcc, 1]])) : (dns(["13c", [0, snHat, 0]]), dns(["13c", [0, snAcc, 1]])) : e.keyCode == EMPGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? ahat ? (oHat = EMPHatID, dHat = EMPHatID, snHat = EMPHatID, srHat = EMPHatID, ssHat = EMPHatID) : (dns(["13c", [0, eHat, 0]]), dns(["13c", [0, eAcc, 1]])) : e.keyCode == TurretKey && "chatbox" !== document.activeElement.id.toLowerCase() && (ahat ? (oHat = turretgearID, dHat = turretgearID, ssHat = turretgearID, srHat = turretgearID, snHat = turretgearID) : (dns(["13c", [0, otHat, 0]]), dns(["13c", [0, otAcc, 1]]))), 82 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && insta && !inInsta && (inInsta = !0, iAim && (autoaim = !0), icBool && chat(iChat), dns(["13c", [0, 0, 1]]), dns(["7", [!0]]), iReverse ? (weapon = secondary, dns(["5", [secondary, !0]]), dns(["13c", [0, iHat2, 0]]), dns(["13c", [0, iAcc2, 1]]), setTimeout(function () {
                    dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), weapon = primary, dns(["5", [primary, !0]])
                }, instaSpeedR / 2)) : (weapon = primary, dns(["5", [primary, !0]]), iSwitch || (iAim ? (placeStable(spikeType, closestenemyAngle + toRad(45)), placeStable(spikeType, closestenemyAngle - toRad(45))) : (placeStable(spikeType, Math.atan2(mY - height / 2, mX - width / 2) + toRad(45)), placeStable(spikeType, Math.atan2(mY - height / 2, mX - width / 2) - toRad(45)))), dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), setTimeout(function () {
                    dns(["13c", [0, iHat2, 0]]), dns(["13c", [0, iAcc2, 1]]), iSwitch && (weapon = secondary, dns(["5", [secondary, !0]]))
                }, instaSpeed / 2)), setTimeout(function () {
                    weapon = primary, dns(["5", [primary, !0]]), dns(["7", [!0]]), dns(["13c", [0, iHat3, 0]]), dns(["13c", [0, iAcc3, 1]]), iAim && (autoaim = !1)
                }, instaSpeed), setTimeout(function () {
                    inInsta = !1
                }, instaSpeed + 100)), "t" != e.key || "chatbox" === document.activeElement.id.toLowerCase() || inInsta || (15 == secondary ? reload = 1650 : 13 == secondary ? reload = 400 : 12 == secondary ? reload = 850 : 9 == secondary ? reload = 750 : irBool && chat("==> |Reloading| Musket!!! <==")), "p" != e.key || "chatbox" === document.activeElement.id.toLowerCase() || inInsta || (inInsta = !0, 0 == primary ? (autoaim = !0, weapon = 0, dns(["5", [0, !0]]), dns(["13c", [0, 0, 1]]), dns(["13c", [0, 7, 0]]), dns(["7", [!0]]), setTimeout(function () {
                    dns(["6", [5]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [9]]), dns(["6", [33]]), weapon = 5
                }, 80), setTimeout(function () {
                    dns(["6", [4]]), weapon = 4
                }, 160), setTimeout(function () {
                    weapon = 9, dns(["5", [9, !0]]), dns(["13c", [0, 53, 0]])
                }, 270), setTimeout(function () {
                    dns(["6", [15]]), weapon = 15
                }, 370), setTimeout(function () {
                    autoaim = !1, inInsta = !1, dns(["7", [!0]]), weapon = 4, dns(["5", [4, !0]])
                }, 500)) : 4 != primary && 3 != primary && 9 == secondary ? (autoaim = !0, weapon = 9, dns(["5", [9, !0]]), dns(["13c", [0, 53, 0]]), dns(["7", [!0]]), setTimeout(function () {
                    dns(["6", [12]]), weapon = 12
                }, 100), setTimeout(function () {
                    dns(["6", [15]]), weapon = 15
                }, 200), setTimeout(function () {
                    dns(["7", [!0]]), weapon = primary, dns(["5", [primary, !0]]), autoaim = !1, inInsta = !1
                }, 400)) : 3 != primary && 5 != primary || 9 == secondary ? inInsta = !1 : (autoaim = !0, weapon = primary, dns(["5", [primary, !0]]), dns(["13c", [0, 7, 0]]), dns(["7", [!0]]), setTimeout(function () {
                    dns(["6", [4]]), weapon = 4
                }, 110), setTimeout(function () {
                    dns(["6", [15]]), weapon = 15, dns(["5", [15, !0]]), dns(["13c", [0, 53, 0]])
                }, 230), setTimeout(function () {
                    autoaim = !1, inInsta = !1, dns(["7", [!0]]), weapon = primary, dns(["5", [4, !0]])
                }, 400)))
            }), document.addEventListener("keyup", function (e) {
                wrepeater.stop(e.keyCode);
                arepeater.stop(e.keyCode);
                srepeater.stop(e.keyCode);
                drepeater.stop(e.keyCode);
                if (spikeObjectPlacer.stop(e.keyCode), boostPlacer.stop(e.keyCode), boostSpikePlacer.stop(e.keyCode), boostMillPlacer.stop(e.keyCode), millObjectPlacer.stop(e.keyCode), turretObjectPlacer.stop(e.keyCode), healer.stop(e.keyCode), e.keyCode == kBS || e.keyCode == kBM)
                    for (var n = 0; n < 5; n++) setTimeout(function () {
                        dns(["33", [null]])
                    }, 20 * n)
            });
        }
    }, 0);


    (function() {

	'use strict';
    var myVar;
    var myVar2;
	var police = true;
	var ID_MooHead = 28;
    var ID_EMPTY = 0;
	var ID_PigHead = 29;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 34 ) {
			e.preventDefault();
			if (police) {
            storeEquip(ID_MooHead);
            myVar = setTimeout(function(){ h1(); }, 500);
			} else {
            clearTimeout(myVar);
            clearTimeout(myVar2);
            storeEquip(ID_EMPTY);
			}
			police = !police;
		}
	});

    function h1() {
    storeEquip(ID_MooHead);
    clearTimeout(myVar);
    myVar2 = setTimeout(function(){ h2(); }, 500);
    }
    function h2() {
    storeEquip(ID_PigHead);
    clearTimeout(myVar2);
    myVar = setTimeout(function(){ h1(); }, 500);
    }
})();


(function() {

	'use strict';
    var myVar;
    var myVar2;
	var police = true;
	var ID_BummleHat = 8;
    var ID_EMPTY = 0;
	var ID_WinterCap = 15;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 33 ) {
			e.preventDefault();
			if (police) {
            storeEquip(ID_BummleHat);
            myVar = setTimeout(function(){ h1(); }, 500);
			} else {
            clearTimeout(myVar);
            clearTimeout(myVar2);
            storeEquip(ID_EMPTY);
			}
			police = !police;
		}
	});

    function h1() {
    storeEquip(ID_WinterCap);
    clearTimeout(myVar);
    myVar2 = setTimeout(function(){ h2(); }, 500);
    }
    function h2() {
    storeEquip(ID_BummleHat);
    clearTimeout(myVar2);
    myVar = setTimeout(function(){ h1(); }, 500);
    }
})();

(function() {
	'use strict';

	var ID_BummleHat = 8;
	var ID_StrawHat = 2;
	var ID_WinterCap = 15;
	var ID_CowboyHat = 5;
	var ID_RangerHat = 4;
	var ID_ExplorerHat = 18;
	var ID_MarksmanCap = 1;
	var ID_SoldierHelmet = 6;
	var ID_HoneycrispHat = 13;
	var ID_MinersHelmet = 9;
	var ID_BoosterHat = 12;
	var ID_BushGear = 10;
	var ID_SpikeGear = 11;
	var ID_BushidoArmor = 16;
	var ID_SamuraiArmor = 20;

	document.addEventListener('keydown', function(e) {
		switch (e.keyCode - 96) {
			case 0: storeEquip(0); break; // UnEquip
			case 1: storeEquip(ID_BummleHat); break;
			case 2: storeEquip(ID_WinterCap); break;
			case 3: storeEquip(ID_SoldierHelmet); break;
			case 4: storeEquip(ID_HoneycrispHat); break;
			case 5: storeEquip(ID_BoosterHat); break;
			case 6: storeEquip(ID_BushGear); break;
			case 7: storeEquip(ID_SpikeGear); break;
			case 8: storeEquip(ID_BushidoArmor); break;
			case 9: storeEquip(ID_SamuraiArmor); break;
		}
	});

})();


(function() {
	var leaderboard2 = document.getElementById("setupCard");
        var myCssText = "display:block;margin-top:10px;";
        var splixDIV2 = document.createElement("div");
        splixDIV2.className = "menuCard";
        splixDIV2.style.cssText = myCssText;
        splixDIV2.innerHTML = '<a style="font-size:14px"" target="_blank"><font color="black"></font> </a>';
        leaderboard2.parentNode.insertBefore(splixDIV2, leaderboard2.nextSibling);
        uiElems.push(splixDIV2);

})();
};