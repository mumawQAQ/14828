// ==UserScript==
// @name         Bonk Commands
// @namespace    https://greasyfork.org/en/scripts/451341-bonk-commands
// @version      14.4
// @description  Adds lots of commands to bonk.io. Type /? or /help in bonk chat to get started.
// @author       LEGENDBOSS123 + left paren + mastery3
// @match        https://bonk.io/*
// @run-at       document-idle
// @grant        none
// @unwrap
// ==/UserScript==
function BonkCommandsScriptInjector(f){
    if(window.location == window.parent.location){
        if(document.readyState == "complete"){f();}
        else{document.addEventListener('readystatechange',function(){setTimeout(f,1500);});}
    }
}

BonkCommandsScriptInjector(function(){
var scope = window;
scope.scope = scope;
scope.Gwindow = document.getElementById("maingameframe").contentWindow;
scope.Gdocument = document.getElementById("maingameframe").contentDocument;
Gwindow.Gwindow = window;
Gwindow.Gdocument = document;

scope.link2pastebin = "https://pastebin.com/2b8XqqYu";
scope.link2greasyfork = "https://greasyfork.org/en/scripts/451341-bonk-commands";

if(typeof(scope.injectedBonkCommandsScript)=='undefined'){
    scope.injectedBonkCommandsScript = true;
}
else{
    clearInterval(injectedBonkCommandsScript);
}
scope.GENERATE_COPRIME_NUMBER = function(mini = 0,maxi = 0,coprimewith = 0,choices = []){
    if(choices.length == 0){
        for(var i = mini;i<maxi+1;i++){
            choices.push(i);
        }
    }
    firstTry = choices[Math.floor(Math.random()*choices.length)];
    for(var i = 2; i<firstTry+1;i++){
        if(firstTry%i == 0 && coprimewith%i == 0){
            choices.splice(choices.indexOf(firstTry),1);
            if(choices.length == 0){
                return 0;
            }
            return GENERATE_COPRIME_NUMBER(mini,maxi,coprimewith,choices);
        }
    }
    return firstTry;
};
scope.GENERATE_PRIME_NUMBER = function(mini = 0,maxi = 0,choices = []){
    if(choices.length == 0){
        for(var i = mini;i<maxi+1;i++){
            choices.push(i);
        }
    }
    firstTry = choices[Math.floor(Math.random()*choices.length)];
    for(var i = 2; i<Math.floor(Math.sqrt(firstTry)+1);i++){
        if(i!=firstTry){
            if(firstTry%i == 0){
                choices.splice(choices.indexOf(firstTry),1);
                if(choices.length == 0){
                    return 0;
                }
                return GENERATE_PRIME_NUMBER(mini,maxi,choices);
            }
        }
    }
    return firstTry;
};
scope.SHUFFLE_LIST = function(x){
    var nl = x.slice();
    for(var i = nl.length - 1;i>0;i--){
        var r = Math.floor(Math.random()*(i+1));
        var t = nl[i];
        nl[i] = nl[r];
        nl[r] = t;
    }
    return nl;
};
scope.GENERATE_KEYS = function(){
    interval = [];
    for(var i = 100;i<301;i++){
        interval.push(i);
    }
    random_prime = [GENERATE_PRIME_NUMBER(0,0,choices = interval),0];
    interval.splice(interval.indexOf(random_prime[0]),1);
    random_prime[1] = GENERATE_PRIME_NUMBER(0,0,choices = interval);

    n = random_prime[0]*random_prime[1];
    n2 = (random_prime[0]-1)*(random_prime[1]-1);

    e = GENERATE_COPRIME_NUMBER(2,n2-1,n2);
    d = 0;
    redo = true;
    for(var i = 0;i<1000000;i++){
        if((e*i-1)%n2 == 0 && i!=e){
            d = i;
            redo = false;
            break;
        }
    }
    if(redo){
        return GENERATE_KEYS();
    }
    else{
        return [[n,e],[n,d]];
    }

};
scope.CRYPT_NUMBER = function(key, data){

    result = 1;

    for(var i = 0;i<key[1];i++){
        result*=data;
        result = result%key[0];
    }
    return result%key[0];

};

scope.CRYPT_MESSAGE = function(key,data){
    var resulttext = [];
    for(var i = 0;i<data.length;i++){
        resulttext.push(CRYPT_NUMBER(key,data[i]));
    }
    return resulttext;

};
if(typeof(scope.textdecoder)=='undefined'){scope.textdecoder = new Gwindow.TextDecoder;}
if(typeof(scope.textencoder)=='undefined'){scope.textencoder = new Gwindow.TextEncoder;}

class bytebuffer2 {
  constructor() {
    var g1d = [arguments];
    this.index = 0;
    this.buffer = new ArrayBuffer(100*1024);
    this.view = new DataView(this.buffer);
    this.implicitClassAliasArray = [];
    this.implicitStringArray = [];
    this.bodgeCaptureZoneDataIdentifierArray = [];
  }
  
  readByte() {
    var N0H = [arguments];
    N0H[4] = this.view.getUint8(this.index);
    this.index += 1;
    return N0H[4];
  }
  writeByte(z0w) {
    var v8$ = [arguments];
    this.view.setUint8(this.index, v8$[0][0]);
    this.index += 1;
  }
  readInt() {
    var A71 = [arguments];
    A71[6] = this.view.getInt32(this.index);
    this.index += 4;
    return A71[6];
  }
  writeInt(W6i) {
    var p5u = [arguments];
    this.view.setInt32(this.index, p5u[0][0]);
    this.index += 4;
  }
  readShort() {
    var R1R = [arguments];
    R1R[9] = this.view.getInt16(this.index);
    this.index += 2;
    return R1R[9];
  }
  writeShort(H8B) {
    var d_3 = [arguments];
    this.view.setInt16(this.index, d_3[0][0]);
    this.index += 2;
  }
  readUint() {
    var W2$ = [arguments];
    W2$[8] = this.view.getUint32(this.index);
    this.index += 4;
    return W2$[8];
  }
  writeUint(B2X) {
    var f8B = [arguments];
    this.view.setUint32(this.index, f8B[0][0]);
    this.index += 4;
  }
  readBoolean() {
    var h6P = [arguments];
    h6P[6] = this.readByte();
    return h6P[6] == 1;
  }
  writeBoolean(Y3I) {
    var l79 = [arguments];
    if (l79[0][0]) {
      this.writeByte(1);
    } else {
      this.writeByte(0);
    }
  }
  readDouble() {
    var V60 = [arguments];
    V60[4] = this.view.getFloat64(this.index);
    this.index += 8;
    return V60[4];
  }
  writeDouble(z4Z) {
    var O41 = [arguments];
    this.view.setFloat64(this.index, O41[0][0]);
    this.index += 8;
  }
  readFloat() {
    var I0l = [arguments];
    I0l[5] = this.view.getFloat32(this.index);
    this.index += 4;
    return I0l[5];
  }
  writeFloat(y4B) {
    var B0v = [arguments];
    this.view.setFloat32(this.index, B0v[0][0]);
    this.index += 4;
  }
  readUTF() {
    var d6I = [arguments];
    d6I[8] = this.readByte();
    d6I[7] = this.readByte();
    d6I[9] = d6I[8] * 256 + d6I[7];
    d6I[1] = new Uint8Array(d6I[9]);
    for (d6I[6] = 0; d6I[6] < d6I[9]; d6I[6]++) {
      d6I[1][d6I[6]] = this.readByte();
    }
    return textdecoder.decode(d6I[1]);
  }
  writeUTF(L3Z) {
    var Z75 = [arguments];
    Z75[4] = textencoder.encode(Z75[0][0]);
    Z75[3] = Z75[4].length;
    Z75[5] = Math.floor(Z75[3]/256);
    Z75[8] = Z75[3] % 256;
    this.writeByte(Z75[5]);
    this.writeByte(Z75[8]);
    Z75[7] = this;
    Z75[4].forEach(I_O);
    function I_O(s0Q, H4K, j$o) {
      var N0o = [arguments];
      Z75[7].writeByte(N0o[0][0]);
    }
  }
  toBase64() {
    var P4$ = [arguments];
    P4$[4] = "";
    P4$[9] = new Uint8Array(this.buffer);
    P4$[8] = this.index;
    for (P4$[7] = 0; P4$[7] < P4$[8]; P4$[7]++) {
      P4$[4] += String.fromCharCode(P4$[9][P4$[7]]);
    }
    return Gwindow.btoa(P4$[4]);
  }
  fromBase64(W69, A8Q) {
    var o0n = [arguments];
    o0n[8] = Gwindow.pako;
    o0n[6] = Gwindow.atob(o0n[0][0]);
    o0n[9] = o0n[6].length;
    o0n[4] = new Uint8Array(o0n[9]);
    for (o0n[1] = 0; o0n[1] < o0n[9]; o0n[1]++) {
      o0n[4][o0n[1]] = o0n[6].charCodeAt(o0n[1]);
    }
    if (o0n[0][1] === true) {
      o0n[5] = o0n[8].inflate(o0n[4]);
      o0n[4] = o0n[5];
    }
    this.buffer = o0n[4].buffer.slice(
      o0n[4].byteOffset,
      o0n[4].byteLength + o0n[4].byteOffset
    );
    this.view = new DataView(this.buffer);
    this.index = 0;
  }
};

if(typeof(scope.originalSend)=='undefined'){scope.originalSend = Gwindow.WebSocket.prototype.send;}
if(typeof(scope.originalXMLOpen)=='undefined'){scope.originalXMLOpen = Gwindow.XMLHttpRequest.prototype.open;}
if(typeof(scope.originalXMLSend)=='undefined'){scope.originalXMLSend = Gwindow.XMLHttpRequest.prototype.send;}
if(typeof(scope.searchrequested)=='undefined'){scope.searchrequested = false;}
if(typeof(scope.originalDrawCircle)=='undefined'){scope.originalDrawCircle = Gwindow.PIXI.Graphics.prototype.drawCircle;}
if(typeof(scope.parentDraw)=='undefined'){scope.parentDraw = 0;}
if(typeof(scope.pixiCircle)=='undefined'){scope.pixiCircle = new Gwindow.PIXI.Graphics();}
if(typeof(scope.container)=='undefined'){scope.container = new Gwindow.PIXI.Container();container.addChild(pixiCircle);}
if(typeof(scope.canvasWidth)=='undefined'){scope.canvasWidth = -1;}


if(typeof(scope.requestAnimationFrameOriginal)=='undefined'){scope.requestAnimationFrameOriginal = Gwindow.requestAnimationFrame;}


if(typeof(scope.bonkwss)=='undefined'){scope.bonkwss = 0;}
if(typeof(scope.bonkwssextra)=='undefined'){scope.bonkwssextra = [];}
if(typeof(scope.chatlog)=='undefined'){scope.chatlog = ["ROOM START"];}
if(typeof(scope.wsssendrecievelog)=='undefined'){scope.wsssendrecievelog = [];}
if(typeof(scope.wsssendlog)=='undefined'){scope.wsssendlog = [];}
if(typeof(scope.wssrecievelog)=='undefined'){scope.wssrecievelog = [];}
if(typeof(scope.wsslogpaused)=='undefined'){scope.wsslogpaused = false;}
if(typeof(scope.debuggeropen)=='undefined'){scope.debuggeropen = false;}
if(typeof(scope.debuggercount)=='undefined'){scope.debuggercount = true;}
if(typeof(scope.packetcount)=='undefined'){scope.packetcount = 0;}
if(typeof(scope.requestedmaps)=='undefined'){scope.requestedmaps = [];}
if(typeof(scope.maponclick)=='undefined'){scope.maponclick = 0;}
if(typeof(scope.LZString)=='undefined'){scope.LZString = Gwindow.LZString;}
if(typeof(scope.PSON)=='undefined'){scope.PSON = Gwindow.dcodeIO.PSON;}
if(typeof(scope.bytebuffer)=='undefined'){scope.bytebuffer = Gwindow.dcodeIO.ByteBuffer;}
if(typeof(scope.speech)=='undefined'){scope.speech = new SpeechSynthesisUtterance();speech.pitch = 0.75;}
if(typeof(scope.sayer)=='undefined'){scope.sayer = speechSynthesis;sayer.volume = 0.5;sayer.rate = 1.25;}
if(typeof(scope.pollactive)=='undefined'){scope.pollactive = [false,0,0,[]];}
if(typeof(scope.pollactive2)=='undefined'){scope.pollactive2 = [false,0,[]];}
if(typeof(scope.mode)=='undefined'){scope.mode = '';}

    
    
if(typeof(scope.ISpsonpair)=='undefined'){scope.ISpsonpair = new Gwindow.dcodeIO.PSON.StaticPair(["physics", "shapes", "fixtures", "bodies", "bro", "joints", "ppm", "lights", "spawns", "lasers", "capZones", "type", "w", "h", "c", "a", "v", "l", "s", "sh", "fr", "re", "de", "sn", "fc", "fm", "f", "d", "n", "bg", "lv", "av", "ld", "ad", "fr", "bu", "cf", "rv", "p", "d", "bf", "ba", "bb", "aa", "ab", "axa", "dr", "em", "mmt", "mms", "ms", "ut", "lt", "New body", "Box Shape", "Circle Shape", "Polygon Shape", "EdgeChain Shape", "priority", "Light", "Laser", "Cap Zone", "BG Shape", "Background Layer", "Rotate Joint", "Slider Joint", "Rod Joint", "Gear Joint", 65535, 16777215]);}
if(typeof(scope.sandboxon)=='undefined'){scope.sandboxon = false;}
if(typeof(scope.sandboxid)=='undefined'){scope.sandboxid = 1;}
if(typeof(scope.playerids)=='undefined'){scope.playerids = {};}
if(typeof(scope.delplayerids)=='undefined'){scope.delplayerids = {};}
if(typeof(scope.myid)=='undefined'){scope.myid = -1;}
if(typeof(scope.hostid)=='undefined'){scope.hostid = -1;}
if(typeof(scope.sandboxplayerids)=='undefined'){scope.sandboxplayerids = {};}
if(typeof(scope.originalMapLoad)=='undefined'){scope.originalMapLoad = Gdocument.getElementById("maploadwindowmapscontainer").appendChild;}
if(typeof(scope.originalLobbyChat)=='undefined'){scope.originalLobbyChat = Gdocument.getElementById("newbonklobby_chat_content").appendChild;}
if(typeof(scope.originalIngameChat)=='undefined'){scope.originalIngameChat = Gdocument.getElementById("ingamechatcontent").appendChild;}
if(typeof(scope.private_chat_keys)=='undefined'){scope.private_chat_keys = GENERATE_KEYS();scope.private_key = private_chat_keys[0];scope.public_key = private_chat_keys[1];}
    
    
    
if(Gdocument.getElementById("maploadtypedropdowntitlerequested") == null){
    scope.clearmaprequests = Gdocument.createElement("div");
    clearmaprequests.id = "clearmaprequests";
    clearmaprequests.classList.value = "brownButton brownButton_classic buttonShadow";
    clearmaprequests.textContent = "Clear";
    clearmaprequests.style["position"] = "absolute";
    clearmaprequests.style["display"] = "none";
    if(typeof(ishost)!='undefined'){
        if(ishost && Gdocument.getElementById("maploadtypedropdowntitle").textContent == "MAP REQUESTS"){
            clearmaprequests.style["display"] = "block";
        }
    }
    clearmaprequests.style["right"] = "306px";
    clearmaprequests.style["top"] = "57px";
    clearmaprequests.style["height"] = "23px";
    clearmaprequests.style["width"] = "47px";
    clearmaprequests.style["line-height"] = "23px";
    clearmaprequests.style["font-size"] = "14px";
    clearmaprequests.addEventListener("click",function(){
        requestedmaps = [];
        Gdocument.getElementById("maploadwindowstatustext").style["visibility"] = "inherit";
        Gdocument.getElementById("maploadwindowstatustext").textContent = "No Maps";
        while(Gdocument.getElementById("maploadwindowmapscontainer").children.length>0){
            Gdocument.getElementById("maploadwindowmapscontainer").removeChild(Gdocument.getElementById("maploadwindowmapscontainer").firstChild);
        }
    });
    Gdocument.getElementById("maploadwindow").insertBefore(clearmaprequests,Gdocument.getElementById("maploadwindowsearchinput"));
    
    scope.refreshmaprequests = Gdocument.createElement("div");
    refreshmaprequests.id = "refreshmaprequests";
    refreshmaprequests.classList.value = "brownButton brownButton_classic buttonShadow";
    refreshmaprequests.textContent = "Refresh";
    refreshmaprequests.style["position"] = "absolute";
    refreshmaprequests.style["display"] = "none";
    if(typeof(ishost)!='undefined'){
        if(ishost && Gdocument.getElementById("maploadtypedropdowntitle").textContent == "MAP REQUESTS"){
            refreshmaprequests.style["display"] = "block";
        }
    }
    refreshmaprequests.style["right"] = "357px";
    refreshmaprequests.style["top"] = "57px";
    refreshmaprequests.style["height"] = "23px";
    refreshmaprequests.style["width"] = "47px";
    refreshmaprequests.style["line-height"] = "23px";
    refreshmaprequests.style["font-size"] = "14px";
    refreshmaprequests.addEventListener("click",function(){
        Gdocument.getElementById("maploadtypedropdowntitle").textContent = dropdownrequested.textContent;
        Gdocument.getElementById("maploadwindowsearchinput").value = "";
        dropdownrequested.style["display"] = "none";
        clearmaprequests.style["display"] = "block";
        refreshmaprequests.style["display"] = "block";
        Gdocument.getElementById("maploadwindowhotnessslider").style["visibility"] = "hidden";
        Gdocument.getElementById("maploadwindowsearchoptions").style["visibility"] = "hidden";
        searchrequested = true;
        Gdocument.getElementById("maploadwindowsearchbutton").click();

        Gdocument.getElementById("maploadtypedropdowntitle").textContent = "MAP REQUESTS";
    });
    Gdocument.getElementById("maploadwindow").insertBefore(refreshmaprequests,Gdocument.getElementById("maploadwindowsearchinput"));

    
    
    scope.dropdownrequested = Gdocument.createElement("div");
    dropdownrequested.classList = "dropdown-option dropdown_classic";
    dropdownrequested.style["display"] = "none";
    dropdownrequested.id = "maploadtypedropdowntitlerequested";

    if(Gdocument.getElementById("maploadtypedropdownoption10").style["display"] == "block"){
        dropdownrequested.style["display"] = "block";
    }
    dropdownrequested.textContent = "MAP REQUESTS";
    dropdownrequested.onclick = function(){
        Gdocument.getElementById("maploadtypedropdowntitle").textContent = dropdownrequested.textContent;
        Gdocument.getElementById("maploadwindowsearchinput").value = "";
        dropdownrequested.style["display"] = "none";
        clearmaprequests.style["display"] = "block";
        refreshmaprequests.style["display"] = "block";
        Gdocument.getElementById("maploadwindowhotnessslider").style["visibility"] = "hidden";
        Gdocument.getElementById("maploadwindowsearchoptions").style["visibility"] = "hidden";
        searchrequested = true;
        Gdocument.getElementById("maploadwindowsearchbutton").click();

        Gdocument.getElementById("maploadtypedropdowntitle").textContent = "MAP REQUESTS";
    };
    (new MutationObserver(function(){if(Gdocument.getElementById("maploadtypedropdownoption10").style["display"] == "none"){ dropdownrequested.style["display"] = "none"; clearmaprequests.style["display"] = "none";refreshmaprequests.style["display"] = "none"; } else{ dropdownrequested.style["display"] = "block";}})).observe(Gdocument.getElementById("maploadtypedropdownoption10"),{attributes:true,childList:true});
    
    
        
    Gdocument.getElementById("maploadtypedropdown").insertBefore(dropdownrequested,Gdocument.getElementById("maploadtypedropdownoption1"));
    Gdocument.getElementById("maploadwindowmapscontainer").__defineGetter__("clientHeight",function(){if(Gdocument.getElementById("maploadtypedropdowntitle").textContent != "MAP REQUESTS"){return Gdocument.getElementById("maploadwindowmapscontainer").getClientRects()[0].height;}else{return 0;}});

};
                          

function sandboxonclick(){
    Gdocument.getElementById("roomlistcreatewindowmaxplayers").value = 1;
    Gdocument.getElementById("roomlistcreatewindowunlistedcheckbox").checked = true;
    Gdocument.getElementById("roomlistcreatecreatebutton").click();
    sandboxon = true;
}
function checkboxclearbuttononclick(){
    var classes = Gdocument.getElementsByClassName("quickplaycheckbox");
    var e = true;
    for(var i = 0; i<classes.length;i++){
        if(classes[i].checked == true){
            e = false
        }
        classes[i].checked = false;
    }
    if(e){
        for(var i = 0; i<classes.length;i++){
            classes[i].checked = true;
        }
    }
}
Gdocument.getElementById("ingamechatcontent").__defineGetter__("childElementCount",function(){return this.children.length/50;});
if(Gdocument.getElementById("classic_mid_sandbox")==null){
    Gdocument.getElementById("roomlistrefreshbutton").click();
    scope.sandboxbutton = Gdocument.createElement("div");
    sandboxbutton.id = "classic_mid_sandbox";
    sandboxbutton.classList.value = "brownButton brownButton_classic classic_mid_buttons";
    sandboxbutton.textContent = "Sandbox";
    sandboxbutton.addEventListener("click",sandboxonclick);
    Gdocument.getElementById("classic_mid").insertBefore(sandboxbutton,Gdocument.getElementById("classic_mid_news"));

}
if(Gdocument.getElementById("clearallcheckboxes")==null){
    scope.checkboxclearbutton = Gdocument.createElement("div");
    checkboxclearbutton.id = "clearallcheckboxes";
    checkboxclearbutton.classList.value = "brownButton brownButton_classic buttonShadow";
    checkboxclearbutton.textContent = "On/Off";
    checkboxclearbutton.style["position"] = "absolute";
    checkboxclearbutton.style["display"] = "none";
    if(typeof(ishost)!='undefined'){
        if(ishost && stopquickplay == 0){
            checkboxclearbutton.style["display"] = "block";
        }
    }
    checkboxclearbutton.style["right"] = "255px";
    checkboxclearbutton.style["top"] = "57px";
    checkboxclearbutton.style["height"] = "23px";
    checkboxclearbutton.style["width"] = "47px";
    checkboxclearbutton.style["line-height"] = "23px";
    checkboxclearbutton.style["font-size"] = "13px";
    checkboxclearbutton.addEventListener("click",checkboxclearbuttononclick);
    Gdocument.getElementById("maploadwindow").insertBefore(checkboxclearbutton,Gdocument.getElementById("maploadwindowsearchinput"));

}
scope.holdloadbuttonTimeout = [];
scope.holdloadbutton = function(){
    var scrollcount = 0;
    var mapwindow = Gdocument.getElementById("maploadwindowmapscontainer");
    mapwindow.scroll(0,mapwindow.scrollHeight);
};
    

if(Gdocument.getElementById("mapwindowloadall")==null){
    scope.loadall = Gdocument.createElement("div");
    loadall.id = "mapwindowloadall";
    loadall.classList.value = "brownButton brownButton_classic buttonShadow";
    loadall.textContent = "Load";
    loadall.style["position"] = "absolute";
    loadall.style["display"] = "block";
    loadall.style["left"] = "204px";
    loadall.style["top"] = "57px";
    loadall.style["height"] = "23px";
    loadall.style["width"] = "34px";
    loadall.style["line-height"] = "23px";
    loadall.style["font-size"] = "12px";
    var repeat = function(){holdloadbutton();holdloadbuttonTimeout.push(setTimeout(repeat,25));};
    loadall.onmousedown = function(){repeat();};
    loadall.onmouseup = function(){for(var i = 0; i<holdloadbuttonTimeout.length; i++){clearTimeout(holdloadbuttonTimeout[i]);}};
    loadall.onmouseout = function(){for(var i = 0; i<holdloadbuttonTimeout.length; i++){clearTimeout(holdloadbuttonTimeout[i]);}};

    Gdocument.getElementById("maploadwindow").insertBefore(loadall,Gdocument.getElementById("maploadwindowsearchinput"));

}
if(Gdocument.getElementById("BonkCommandsDebuggerContainer")==null){
    Gdocument.getElementById("leaveconfirmwindow").style["z-index"]=3;
    scope.debuggermenu = Gdocument.createElement("div");
    debuggermenu.id = "BonkCommandsDebuggerContainer";
    debuggermenu.style["position"] = "absolute";
    debuggermenu.style["display"] = "none";
    if(typeof(debuggeropen)!='undefined'){
        if(debuggeropen){
            debuggermenu.style["display"] = "block";
        }
    }
    
    debuggermenu.style["width"] = Gdocument.getElementById("bonkiocontainer").style["width"];
    debuggermenu.style["height"] = Gdocument.getElementById("bonkiocontainer").style["height"];

    debuggermenu.style["background"] = "rgb(26, 39, 51)";

    
    scope.width = parseInt(Gdocument.getElementById("bonkiocontainer").style["width"])-20;
    scope.height = parseInt(Gdocument.getElementById("bonkiocontainer").style["height"])-210;

    
    scope.logmenu = Gdocument.createElement("div");
    logmenu.id = "BonkCommandsWebSocketLog";
    logmenu.style["position"] = "absolute";
    logmenu.style["width"] = width.toString()+"px";
    logmenu.style["height"] = height.toString()+"px";
    logmenu.style["top"] = "80px";
    logmenu.style["left"] = "10px";
    logmenu.style["background"] = "rgb(207, 216, 220)";
    
    
    
    
    scope.logmenutopleft = Gdocument.createElement("div");
    logmenutopleft.id = "BonkCommandsWebSocketLog";
    logmenutopleft.style["position"] = "absolute";
    logmenutopleft.textContent = "Sending";
    logmenutopleft.classList = "newbonklobby_boxtop newbonklobby_boxtop_classic";
    
    logmenutopleft.style["width"] = (width/2).toString()+"px";
    logmenutopleft.style["height"] = "30px";
    logmenutopleft.style["top"] = "-30px";
    logmenutopleft.style["background"] = "rgb(0, 150, 136)";
    
    
    logmenu.appendChild(logmenutopleft);
    
    scope.logmenutopright = Gdocument.createElement("div");
    logmenutopright.id = "BonkCommandsWebSocketLog";
    logmenutopright.style["position"] = "absolute";
    logmenutopright.textContent = "Recieving";
    logmenutopright.classList = "newbonklobby_boxtop newbonklobby_boxtop_classic";
    logmenutopright.style["width"] = (width/2).toString()+"px";
    logmenutopright.style["height"] = "30px";
    logmenutopright.style["left"] = (width/2).toString()+"px";
    logmenutopright.style["top"] = "-30px";
    logmenutopright.style["background"] = "rgb(0, 150, 136)";
    logmenu.appendChild(logmenutopright);
    
    
    scope.logmenutable = Gdocument.createElement("table");
    logmenutable.id = "BonkCommandsWebSocketTable";
    logmenutable.style["position"] = "absolute";
    logmenutable.style["border-spacing"] = "0px";
    logmenutable.style["font-size"] = "12px";
    logmenutable.style["display"] = "table-cell";
    logmenutable.style["width"] = "50%";
    logmenutable.style["height"] = "100%";
    logmenutable.style["table-layout"] = "fixed";
    logmenutable.style["overflow-y"] = "scroll";

    scope.logmenutable2 = Gdocument.createElement("table");
    logmenutable2.id = "BonkCommandsWebSocketTable2";
    logmenutable2.style["position"] = "absolute";
    logmenutable2.style["width"] = "50%";
    logmenutable2.style["left"] = "50%";
    logmenutable2.style["font-size"] = "12px";
    logmenutable2.style["display"] = "table-cell";
    logmenutable2.style["height"] = "100%";
    logmenutable2.style["table-layout"] = "fixed";
    logmenutable2.style["overflow-y"] = "scroll";
    logmenutable2.style["border-spacing"] = "0px";
    scope.leftsync = false;
    scope.rightsync = false;
    logmenutable2.onscroll = function(){
        if(!leftsync){
            rightsync = true;
            logmenutable.scrollTop = this.scrollTop;
        }
        else{
            leftsync = false;
        }
    };
    logmenutable.onscroll = function(){
        if(!rightsync){
            leftsync = true;
            logmenutable2.scrollTop = this.scrollTop;
        }
        else{
            rightsync = false
        }
    };
    
    logmenu.appendChild(logmenutable);
    logmenu.appendChild(logmenutable2);
    
    debuggermenu.appendChild(logmenu);
    
    scope.debuggermenuclose = Gdocument.createElement("div");
    debuggermenuclose.id = "debuggerclose";
    debuggermenuclose.classList = "windowCloseButton brownButton brownButton_classic buttonShadow";
    debuggermenuclose.style["position"] = "absolute";
    debuggermenuclose.style["top"] = "40px";
    debuggermenuclose.style["right"] = "5px";
    debuggermenuclose.onclick = function(){debuggeropen = false;debuggermenu.style["display"] = "none";Gdocument.getElementById("newbonklobby_chat_input").style["display"]="";
Gdocument.getElementById("ingamechatinputtext").style["display"] = "";};
    
    debuggermenu.appendChild(debuggermenuclose);
    
    
    
    scope.debuggerform = Gdocument.createElement("form");
    debuggerform.autocomplete = "off";
    
    scope.debuggerinput = Gdocument.createElement("input");
    debuggerinput.style["position"] = "absolute";
    debuggerinput.style["width"] = width.toString()+"px";
    debuggerinput.style["left"] = "10px";
    debuggerinput.style["top"] = (height+90).toString()+"px";
    debuggerinput.style["font-size"] = "12px";
    debuggerinput.style["height"] = "20px";
    debuggerform.appendChild(debuggerinput);
    
    
    
    scope.debuggersendrecieve = Gdocument.createElement("div");
    debuggersendrecieve.style["position"] = "absolute";
    debuggersendrecieve.style["width"] = "140px";
    debuggersendrecieve.style["left"] = "10px";
    debuggersendrecieve.style["top"] = (height+120).toString()+"px";
    debuggersendrecieve.style["font-size"] = "15px";
    debuggersendrecieve.style["height"] = "20px";
    debuggersendrecieve.classList = "brownButton brownButton_classic buttonShadow";
    debuggersendrecieve.textContent = "Send";
    debuggersendrecieve.value = 0;
    debuggersendrecieve.onclick = function(){if(this.value == 0){this.textContent = "Recieve";this.value = 1;}else{this.textContent = "Send";this.value = 0;}};

    debuggermenu.appendChild(debuggersendrecieve);
    
    scope.debuggerpausebutton = Gdocument.createElement("div");
    debuggerpausebutton.style["position"] = "absolute";
    debuggerpausebutton.style["width"] = "140px";
    debuggerpausebutton.style["left"] = "10px";
    debuggerpausebutton.style["top"] = (height+150).toString()+"px";
    debuggerpausebutton.style["font-size"] = "15px";
    debuggerpausebutton.style["height"] = "20px";
    debuggerpausebutton.classList = "brownButton brownButton_classic buttonShadow";
    debuggerpausebutton.textContent = "Pause";
    debuggerpausebutton.value = 0;
    debuggerpausebutton.onclick = function(){if(this.value == 0){this.textContent = "Play";this.value = 1;wsslogpaused = true}else{this.textContent = "Pause";this.value = 0;wsslogpaused = false;}};

    debuggermenu.appendChild(debuggerpausebutton);
    
    scope.debuggereval = Gdocument.createElement("input");
    debuggereval.style["position"] = "absolute";
    debuggereval.style["width"] = (width-150).toString()+"px";
    debuggereval.style["right"] = "10px";
    debuggereval.style["top"] = (height+120).toString()+"px";
    debuggereval.style["font-size"] = "12px";
    debuggereval.style["height"] = "20px";
    debuggereval.addEventListener("keypress",function(e){if(e.repeat){return;}if(e.code == "Enter" && this.value.length>0){if(debuggersendrecieve.value == 0){SEND(this.value);}else{RECIEVE(this.value);}}});
    
    
    debuggerform.appendChild(debuggereval);
    debuggermenu.appendChild(debuggerform);
    Gdocument.getElementById("newbonkgamecontainer").appendChild(debuggermenu);

}
scope.ISdecode = function(rawdata) {
    rawdata_caseflipped = "";
    for (i = 0; i < rawdata.length; i++) {
        if (i <= 100 && rawdata.charAt(i) === rawdata.charAt(i).toLowerCase()) {
            rawdata_caseflipped += rawdata.charAt(i).toUpperCase();
        } else if (i <= 100 && rawdata.charAt(i) === rawdata.charAt(i).toUpperCase()) {
            rawdata_caseflipped += rawdata.charAt(i).toLowerCase();
        } else {
            rawdata_caseflipped += rawdata.charAt(i);
        }
    }

    data_deLZd = LZString.decompressFromEncodedURIComponent(rawdata_caseflipped);
    databuffer = bytebuffer.fromBase64(data_deLZd);
    data = ISpsonpair.decode(databuffer.buffer);
    return data;
};
    
scope.ISencode = function(obj) {
    data = ISpsonpair.encode(obj);
    b64 = data.toBase64();
    lzd = LZString.compressToEncodedURIComponent(b64);

    caseflipped = "";
    for (i = 0; i < lzd.length; i++) {
        if (i <= 100 && lzd.charAt(i) === lzd.charAt(i).toLowerCase()) {
            caseflipped += lzd.charAt(i).toUpperCase();
        } else if (i <= 100 && lzd.charAt(i) === lzd.charAt(i).toUpperCase()) {
            caseflipped += lzd.charAt(i).toLowerCase();
        } else {
            caseflipped += lzd.charAt(i);
        }
    }


    return caseflipped;
};
    
scope.decodeIS = function(x){
    return ISdecode(x);
};
scope.encodeIS = function(x){
    return ISencode(x);
};
    


encodeToDatabase = function(mapObject) {
  var H_B = [arguments];
  H_B[2] = new bytebuffer2;
  H_B[5] = mapObject.physics;
  mapObject.v = 13;
  H_B[2].writeShort(mapObject.v);
  H_B[2].writeBoolean(mapObject.s.re);
  H_B[2].writeBoolean(mapObject.s.nc);
  H_B[2].writeShort(mapObject.s.pq);
  H_B[2].writeFloat(mapObject.s.gd);
  H_B[2].writeBoolean(mapObject.s.fl);
  H_B[2].writeUTF(mapObject.m.rxn);
  H_B[2].writeUTF(mapObject.m.rxa);
  H_B[2].writeUint(mapObject.m.rxid);
  H_B[2].writeShort(mapObject.m.rxdb);
  H_B[2].writeUTF(mapObject.m.n);
  H_B[2].writeUTF(mapObject.m.a);
  H_B[2].writeUint(mapObject.m.vu);
  H_B[2].writeUint(mapObject.m.vd);
  H_B[2].writeShort(mapObject.m.cr.length);
  for (
    H_B[62] = 0;
    H_B[62] < mapObject.m.cr.length;
    H_B[62]++
  ) {
    H_B[2].writeUTF(mapObject.m.cr[H_B[62]]);
  }
  H_B[2].writeUTF(mapObject.m.mo);
  H_B[2].writeInt(mapObject.m.dbid);
  H_B[2].writeBoolean(mapObject.m.pub);
  H_B[2].writeInt(mapObject.m.dbv);
  H_B[2].writeShort(H_B[5].ppm);
  H_B[2].writeShort(H_B[5].bro.length);
  for (H_B[31] = 0; H_B[31] < H_B[5].bro.length; H_B[31]++) {
    H_B[2].writeShort(H_B[5].bro[H_B[31]]);
  }
  H_B[2].writeShort(H_B[5].shapes.length);
  for (H_B[61] = 0; H_B[61] < H_B[5].shapes.length; H_B[61]++) {
    H_B[3] = H_B[5].shapes[H_B[61]];
    if (H_B[3].type == "bx") {
      H_B[2].writeShort(1);
      H_B[2].writeDouble(H_B[3].w);
      H_B[2].writeDouble(H_B[3].h);
      H_B[2].writeDouble(H_B[3].c[0]);
      H_B[2].writeDouble(H_B[3].c[1]);
      H_B[2].writeDouble(H_B[3].a);
      H_B[2].writeBoolean(H_B[3].sk);
    }
    if (H_B[3].type == "ci") {
      H_B[2].writeShort(2);
      H_B[2].writeDouble(H_B[3].r);
      H_B[2].writeDouble(H_B[3].c[0]);
      H_B[2].writeDouble(H_B[3].c[1]);
      H_B[2].writeBoolean(H_B[3].sk);
    }
    if (H_B[3].type == "po") {
      H_B[2].writeShort(3);
      H_B[2].writeDouble(H_B[3].s);
      H_B[2].writeDouble(H_B[3].a);
      H_B[2].writeDouble(H_B[3].c[0]);
      H_B[2].writeDouble(H_B[3].c[1]);
      H_B[2].writeShort(H_B[3].v.length);
      for (H_B[45] = 0; H_B[45] < H_B[3].v.length; H_B[45]++) {
        H_B[2].writeDouble(H_B[3].v[H_B[45]][0]);
        H_B[2].writeDouble(H_B[3].v[H_B[45]][1]);
      }
    }
  }
  H_B[2].writeShort(H_B[5].fixtures.length);
  for (H_B[88] = 0; H_B[88] < H_B[5].fixtures.length; H_B[88]++) {
    H_B[4] = H_B[5].fixtures[H_B[88]];
    H_B[2].writeShort(H_B[4].sh);
    H_B[2].writeUTF(H_B[4].n);
    if (H_B[4].fr === null) {
      H_B[2].writeDouble(Number.MAX_VALUE);
    } else {
      H_B[2].writeDouble(H_B[4].fr);
    }
    if (H_B[4].fp === null) {
      H_B[2].writeShort(0);
    }
    if (H_B[4].fp === false) {
      H_B[2].writeShort(1);
    }
    if (H_B[4].fp === true) {
      H_B[2].writeShort(2);
    }
    if (H_B[4].re === null) {
      H_B[2].writeDouble(Number.MAX_VALUE);
    } else {
      H_B[2].writeDouble(H_B[4].re);
    }
    if (H_B[4].de === null) {
      H_B[2].writeDouble(Number.MAX_VALUE);
    } else {
      H_B[2].writeDouble(H_B[4].de);
    }
    H_B[2].writeUint(H_B[4].f);
    H_B[2].writeBoolean(H_B[4].d);
    H_B[2].writeBoolean(H_B[4].np);
    H_B[2].writeBoolean(H_B[4].ng);
    H_B[2].writeBoolean(H_B[4].ig);
  }
  H_B[2].writeShort(H_B[5].bodies.length);
  for (H_B[41] = 0; H_B[41] < H_B[5].bodies.length; H_B[41]++) {
    H_B[9] = H_B[5].bodies[H_B[41]];
    H_B[2].writeUTF(H_B[9].type);
    H_B[2].writeUTF(H_B[9].n);
    H_B[2].writeDouble(H_B[9].p[0]);
    H_B[2].writeDouble(H_B[9].p[1]);
    H_B[2].writeDouble(H_B[9].a);
    H_B[2].writeDouble(H_B[9].fric);
    H_B[2].writeBoolean(H_B[9].fricp);
    H_B[2].writeDouble(H_B[9].re);
    H_B[2].writeDouble(H_B[9].de);
    H_B[2].writeDouble(H_B[9].lv[0]);
    H_B[2].writeDouble(H_B[9].lv[1]);
    H_B[2].writeDouble(H_B[9].av);
    H_B[2].writeDouble(H_B[9].ld);
    H_B[2].writeDouble(H_B[9].ad);
    H_B[2].writeBoolean(H_B[9].fr);
    H_B[2].writeBoolean(H_B[9].bu);
    H_B[2].writeDouble(H_B[9].cf.x);
    H_B[2].writeDouble(H_B[9].cf.y);
    H_B[2].writeDouble(H_B[9].cf.ct);
    H_B[2].writeBoolean(H_B[9].cf.w);
    H_B[2].writeShort(H_B[9].f_c);
    H_B[2].writeBoolean(H_B[9].f_1);
    H_B[2].writeBoolean(H_B[9].f_2);
    H_B[2].writeBoolean(H_B[9].f_3);
    H_B[2].writeBoolean(H_B[9].f_4);
    H_B[2].writeBoolean(H_B[9].f_p);
    H_B[2].writeShort(H_B[9].fx.length);
    for (H_B[78] = 0; H_B[78] < H_B[9].fx.length; H_B[78]++) {
      H_B[2].writeShort(H_B[9].fx[H_B[78]]);
    }
  }
  H_B[2].writeShort(mapObject.spawns.length);
  for (
    H_B[74] = 0;
    H_B[74] < mapObject.spawns.length;
    H_B[74]++
  ) {
    H_B[6] = mapObject.spawns[H_B[74]];
    H_B[2].writeDouble(H_B[6].x);
    H_B[2].writeDouble(H_B[6].y);
    H_B[2].writeDouble(H_B[6].xv);
    H_B[2].writeDouble(H_B[6].yv);
    H_B[2].writeShort(H_B[6].priority);
    H_B[2].writeBoolean(H_B[6].r);
    H_B[2].writeBoolean(H_B[6].f);
    H_B[2].writeBoolean(H_B[6].b);
    H_B[2].writeBoolean(H_B[6].gr);
    H_B[2].writeBoolean(H_B[6].ye);
    H_B[2].writeUTF(H_B[6].n);
  }
  H_B[2].writeShort(mapObject.capZones.length);
  for (
    H_B[48] = 0;
    H_B[48] < mapObject.capZones.length;
    H_B[48]++
  ) {
    H_B[1] = mapObject.capZones[H_B[48]];
    H_B[2].writeUTF(H_B[1].n);
    H_B[2].writeDouble(H_B[1].l);
    H_B[2].writeShort(H_B[1].i);
    H_B[2].writeShort(H_B[1].ty);
  }
  H_B[2].writeShort(H_B[5].joints.length);
  for (H_B[69] = 0; H_B[69] < H_B[5].joints.length; H_B[69]++) {
    H_B[8] = H_B[5].joints[H_B[69]];
    if (H_B[8].type == "rv") {
      H_B[2].writeShort(1);
      H_B[2].writeDouble(H_B[8].d.la);
      H_B[2].writeDouble(H_B[8].d.ua);
      H_B[2].writeDouble(H_B[8].d.mmt);
      H_B[2].writeDouble(H_B[8].d.ms);
      H_B[2].writeBoolean(H_B[8].d.el);
      H_B[2].writeBoolean(H_B[8].d.em);
      H_B[2].writeDouble(H_B[8].aa[0]);
      H_B[2].writeDouble(H_B[8].aa[1]);
    }
    if (H_B[8].type == "d") {
      H_B[2].writeShort(2);
      H_B[2].writeDouble(H_B[8].d.fh);
      H_B[2].writeDouble(H_B[8].d.dr);
      H_B[2].writeDouble(H_B[8].aa[0]);
      H_B[2].writeDouble(H_B[8].aa[1]);
      H_B[2].writeDouble(H_B[8].ab[0]);
      H_B[2].writeDouble(H_B[8].ab[1]);
    }
    if (H_B[8].type == "lpj") {
      H_B[2].writeShort(3);
      H_B[2].writeDouble(H_B[8].pax);
      H_B[2].writeDouble(H_B[8].pay);
      H_B[2].writeDouble(H_B[8].pa);
      H_B[2].writeDouble(H_B[8].pf);
      H_B[2].writeDouble(H_B[8].pl);
      H_B[2].writeDouble(H_B[8].pu);
      H_B[2].writeDouble(H_B[8].plen);
      H_B[2].writeDouble(H_B[8].pms);
    }
    if (H_B[8].type == "lsj") {
      H_B[2].writeShort(4);
      H_B[2].writeDouble(H_B[8].sax);
      H_B[2].writeDouble(H_B[8].say);
      H_B[2].writeDouble(H_B[8].sf);
      H_B[2].writeDouble(H_B[8].slen);
    }
    H_B[2].writeShort(H_B[8].ba);
    H_B[2].writeShort(H_B[8].bb);
    H_B[2].writeBoolean(H_B[8].d.cc);
    H_B[2].writeDouble(H_B[8].d.bf);
    H_B[2].writeBoolean(H_B[8].d.dl);
  }
  H_B[15] = H_B[2].toBase64();
  H_B[30] = LZString.compressToEncodedURIComponent(H_B[15]);
  return H_B[30];
};





scope.decodeFromDatabase = function(map) {
    var a8k = [arguments];
    b64mapdata = LZString.decompressFromEncodedURIComponent(map);
    var binaryReader = new bytebuffer2;
    binaryReader.fromBase64(b64mapdata, false);
    map = { "v": 1, "s": { "re": false, "nc": false, "pq": 1, "gd": 25, "fl": false }, "physics": { "shapes": [], "fixtures": [], "bodies": [], "bro": [], "joints": [], "ppm": 12 }, "spawns": [], "capZones": [], "m": { "a": "noauthor", "n": "noname", "dbv": 2, "dbid": -1, "authid": -1, "date": "", "rxid": 0, "rxn": "", "rxa": "", "rxdb": 1, "cr": [], "pub": false, "mo": "" } };
    map.v = binaryReader.readShort();
    if (map.v > 13) {
        throw new Error("New map format, this script needs to be updated.");
    }
    map.s.re = binaryReader.readBoolean();
    map.s.nc = binaryReader.readBoolean();
    if (map.v >= 3) {
        map.s.pq = binaryReader.readShort();
    }
    if (map.v >= 4 && map.v <= 12) {
        map.s.gd = binaryReader.readShort();
    } else if (map.v >= 13) {
        map.s.gd = binaryReader.readFloat();
    }
    if (map.v >= 9) {
        map.s.fl = binaryReader.readBoolean();
    }
    map.m.rxn = binaryReader.readUTF();
    map.m.rxa = binaryReader.readUTF();
    map.m.rxid = binaryReader.readUint();
    map.m.rxdb = binaryReader.readShort();
    map.m.n = binaryReader.readUTF();
    map.m.a = binaryReader.readUTF();
    if (map.v >= 10) {
        map.m.vu = binaryReader.readUint();
        map.m.vd = binaryReader.readUint();
    }
    if (map.v >= 4) {
        cr_count = binaryReader.readShort();
        for (cr_iterator = 0; cr_iterator < cr_count; cr_iterator++) {
            map.m.cr.push(binaryReader.readUTF());
        }
    }
    if (map.v >= 5) {
        map.m.mo = binaryReader.readUTF();
        map.m.dbid = binaryReader.readInt();
    }
    if (map.v >= 7) {
        map.m.pub = binaryReader.readBoolean();
    }
    if (map.v >= 8) {
        map.m.dbv = binaryReader.readInt();
    }
    map.physics.ppm = binaryReader.readShort();
    bro_count = binaryReader.readShort();
    for (bro_iterator = 0; bro_iterator < bro_count; bro_iterator++) {
        map.physics.bro[bro_iterator] = binaryReader.readShort();
    }
    shape_count = binaryReader.readShort();
    for (shape_iterator = 0; shape_iterator < shape_count; shape_iterator++) {
        shape_type = binaryReader.readShort();
        if (shape_type == 1) {
            map.physics.shapes[shape_iterator] = {"type":"bx","w":10,"h":40,"c":[0,0],"a":0,"sk":false};
            map.physics.shapes[shape_iterator].w = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].h = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].c = [binaryReader.readDouble(), binaryReader.readDouble()];
            map.physics.shapes[shape_iterator].a = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].sk = binaryReader.readBoolean();
        }
        if (shape_type == 2) {
            map.physics.shapes[shape_iterator] = {"type":"ci","r":25,"c":[0,0],"sk":false};
            map.physics.shapes[shape_iterator].r = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].c = [binaryReader.readDouble(), binaryReader.readDouble()];
            map.physics.shapes[shape_iterator].sk = binaryReader.readBoolean();
        }
        if (shape_type == 3) {
            map.physics.shapes[shape_iterator] = {"type":"po","v":[],"s":1,"a":0,"c":[0,0]};
            map.physics.shapes[shape_iterator].s = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].a = binaryReader.readDouble();
            map.physics.shapes[shape_iterator].c = [binaryReader.readDouble(), binaryReader.readDouble()];
            point_count = binaryReader.readShort();
            map.physics.shapes[shape_iterator].v = [];
            for (point_iterator = 0; point_iterator < point_count; point_iterator++) {
                map.physics.shapes[shape_iterator].v.push([binaryReader.readDouble(), binaryReader.readDouble()]);
            }
        }
    }
    a8k[31] = binaryReader.readShort();
    for (a8k[89] = 0; a8k[89] < a8k[31]; a8k[89]++) {
        map.physics.fixtures[a8k[89]] = {"n":"Def Fix","fr":0.3,"fp":null,"re":0.8,"de":0.3,"f":5209260,"d":false,"np":false,"ng":false};
        map.physics.fixtures[a8k[89]].sh = binaryReader.readShort();
        map.physics.fixtures[a8k[89]].n = binaryReader.readUTF();
        map.physics.fixtures[a8k[89]].fr = binaryReader.readDouble();
        if (map.physics.fixtures[a8k[89]].fr == Number.MAX_VALUE) {
            map.physics.fixtures[a8k[89]].fr = null;
        }
        a8k[22] = binaryReader.readShort();
        if (a8k[22] == 0) {
            map.physics.fixtures[a8k[89]].fp = null;
        }
        if (a8k[22] == 1) {
            map.physics.fixtures[a8k[89]].fp = false;
        }
        if (a8k[22] == 2) {
            map.physics.fixtures[a8k[89]].fp = true;
        }
        map.physics.fixtures[a8k[89]].re = binaryReader.readDouble();
        if (map.physics.fixtures[a8k[89]].re == Number.MAX_VALUE) {
            map.physics.fixtures[a8k[89]].re = null;
        }
        map.physics.fixtures[a8k[89]].de = binaryReader.readDouble();
        if (map.physics.fixtures[a8k[89]].de == Number.MAX_VALUE) {
            map.physics.fixtures[a8k[89]].de = null;
        }
        map.physics.fixtures[a8k[89]].f = binaryReader.readUint();
        map.physics.fixtures[a8k[89]].d = binaryReader.readBoolean();
        map.physics.fixtures[a8k[89]].np = binaryReader.readBoolean();
        if (map.v >= 11) {
            map.physics.fixtures[a8k[89]].ng = binaryReader.readBoolean();
        }
        if (map.v >= 12) {
            map.physics.fixtures[a8k[89]].ig = binaryReader.readBoolean();
        }
    }
    a8k[41] = binaryReader.readShort();
    for (a8k[20] = 0; a8k[20] < a8k[41]; a8k[20]++) {
        map.physics.bodies[a8k[20]] = {"type":"s","n":"Unnamed","p":[0,0],"a":0,"fric":0.3,"fricp":false,"re":0.8,"de":0.3,"lv":[0,0],"av":0,"ld":0,"ad":0,"fr":false,"bu":false,"cf":{"x":0,"y":0,"w":true,"ct":0},"fx":[],"f_c":1,"f_p":true,"f_1":true,"f_2":true,"f_3":true,"f_4":true};
        map.physics.bodies[a8k[20]].type = binaryReader.readUTF();
        map.physics.bodies[a8k[20]].n = binaryReader.readUTF();
        map.physics.bodies[a8k[20]].p = [binaryReader.readDouble(), binaryReader.readDouble()];
        map.physics.bodies[a8k[20]].a = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].fric = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].fricp = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].re = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].de = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].lv = [binaryReader.readDouble(), binaryReader.readDouble()];
        map.physics.bodies[a8k[20]].av = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].ld = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].ad = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].fr = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].bu = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].cf.x = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].cf.y = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].cf.ct = binaryReader.readDouble();
        map.physics.bodies[a8k[20]].cf.w = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].f_c = binaryReader.readShort();
        map.physics.bodies[a8k[20]].f_1 = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].f_2 = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].f_3 = binaryReader.readBoolean();
        map.physics.bodies[a8k[20]].f_4 = binaryReader.readBoolean();
        if (map.v >= 2) {
            map.physics.bodies[a8k[20]].f_p = binaryReader.readBoolean();
        }
        a8k[50] = binaryReader.readShort();
        for (a8k[66] = 0; a8k[66] < a8k[50]; a8k[66]++) {
            map.physics.bodies[a8k[20]].fx.push(binaryReader.readShort());
        }
    }
    a8k[48] = binaryReader.readShort();
    for (a8k[36] = 0; a8k[36] < a8k[48]; a8k[36]++) {
        map.spawns[a8k[36]] = {"x":400,"y":300,"xv":0,"yv":0,"priority":5,"r":true,"f":true,"b":true,"gr":false,"ye":false,"n":"Spawn"};
        a8k[80] = map.spawns[a8k[36]];
        a8k[80].x = binaryReader.readDouble();
        a8k[80].y = binaryReader.readDouble();
        a8k[80].xv = binaryReader.readDouble();
        a8k[80].yv = binaryReader.readDouble();
        a8k[80].priority = binaryReader.readShort();
        a8k[80].r = binaryReader.readBoolean();
        a8k[80].f = binaryReader.readBoolean();
        a8k[80].b = binaryReader.readBoolean();
        a8k[80].gr = binaryReader.readBoolean();
        a8k[80].ye = binaryReader.readBoolean();
        a8k[80].n = binaryReader.readUTF();
    }
    a8k[40] = binaryReader.readShort();
    for (a8k[18] = 0; a8k[18] < a8k[40]; a8k[18]++) {
        map.capZones[a8k[18]] = {"n":"Cap Zone","ty":1,"l":10,"i":-1};
        map.capZones[a8k[18]].n = binaryReader.readUTF();
        map.capZones[a8k[18]].l = binaryReader.readDouble();
        map.capZones[a8k[18]].i = binaryReader.readShort();
        if (map.v >= 6) {
            map.capZones[a8k[18]].ty = binaryReader.readShort();
        }
    }
    a8k[39] = binaryReader.readShort();
    for (a8k[94] = 0; a8k[94] < a8k[39]; a8k[94]++) {
        a8k[75] = binaryReader.readShort();
        if (a8k[75] == 1) {
            map.physics.joints[a8k[94]] = {"type":"rv","d":{"la":0,"ua":0,"mmt":0,"ms":0,"el":false,"em":false,"cc":false,"bf":0,"dl":true},"aa":[0,0]};
            a8k[53] = map.physics.joints[a8k[94]];
            a8k[53].d.la = binaryReader.readDouble();
            a8k[53].d.ua = binaryReader.readDouble();
            a8k[53].d.mmt = binaryReader.readDouble();
            a8k[53].d.ms = binaryReader.readDouble();
            a8k[53].d.el = binaryReader.readBoolean();
            a8k[53].d.em = binaryReader.readBoolean();
            a8k[53].aa = [binaryReader.readDouble(), binaryReader.readDouble()];
        }
        if (a8k[75] == 2) {
            map.physics.joints[a8k[94]] = {"type":"d","d":{"fh":0,"dr":0,"cc":false,"bf":0,"dl":true},"aa":[0,0],"ab":[0,0]};
            a8k[27] = map.physics.joints[a8k[94]];
            a8k[27].d.fh = binaryReader.readDouble();
            a8k[27].d.dr = binaryReader.readDouble();
            a8k[27].aa = [binaryReader.readDouble(), binaryReader.readDouble()];
            a8k[27].ab = [binaryReader.readDouble(), binaryReader.readDouble()];
        }
        if (a8k[75] == 3) {
            map.physics.joints[a8k[94]] = {"type":"lpj","d":{"cc":false,"bf":0,"dl":true},"pax":0,"pay":0,"pa":0,"pf":0,"pl":0,"pu":0,"plen":0,"pms":0};
            a8k[23] = map.physics.joints[a8k[94]];
            a8k[23].pax = binaryReader.readDouble();
            a8k[23].pay = binaryReader.readDouble();
            a8k[23].pa = binaryReader.readDouble();
            a8k[23].pf = binaryReader.readDouble();
            a8k[23].pl = binaryReader.readDouble();
            a8k[23].pu = binaryReader.readDouble();
            a8k[23].plen = binaryReader.readDouble();
            a8k[23].pms = binaryReader.readDouble();
        }
        if (a8k[75] == 4) {
            map.physics.joints[a8k[94]] = {"type":"lsj","d":{"cc":false,"bf":0,"dl":true},"sax":0,"say":0,"sf":0,"slen":0};
            a8k[47] = map.physics.joints[a8k[94]];
            a8k[47].sax = binaryReader.readDouble();
            a8k[47].say = binaryReader.readDouble();
            a8k[47].sf = binaryReader.readDouble();
            a8k[47].slen = binaryReader.readDouble();
        }
        map.physics.joints[a8k[94]].ba = binaryReader.readShort();
        map.physics.joints[a8k[94]].bb = binaryReader.readShort();
        map.physics.joints[a8k[94]].d.cc = binaryReader.readBoolean();
        map.physics.joints[a8k[94]].d.bf = binaryReader.readDouble();
        map.physics.joints[a8k[94]].d.dl = binaryReader.readBoolean();

    }
    return map;
};


    
scope.updateWssLog = function(){
    if(!wsslogpaused){
        if(logmenutable.children.length < wsssendrecievelog.length){
            var bottomscroll = logmenutable.clientHeight + logmenutable.scrollTop >= logmenutable.scrollHeight-1;
            while (logmenutable.children.length>1000) {
                logmenutable.removeChild(logmenutable.firstChild);
                logmenutable2.removeChild(logmenutable2.firstChild);
            }
            var loopthro = wsssendrecievelog.slice(packetcount);
            for(var i = 0; i < loopthro.length;i++){
                packetcount++;
                var row = document.createElement("tr");
                var row2 = document.createElement("tr");

                var cell1 = document.createElement("td");
                cell1.style["overflow-x"] = "scroll";
                cell1.style["padding"] = "0px";
                cell1.style["width"] = "100000px";

                var cell2 = document.createElement("td");
                cell2.style["overflow-x"] = "scroll";
                cell2.style["padding"] = "0px";
                cell2.style["width"] = "100000px";
                
                if(debuggercount){
                    cell1.style["background"] = "rgb(178, 185, 189)";
                    debuggercount = false;
                }
                else{
                    cell2.style["background"] = "rgb(178, 185, 189)";
                    debuggercount = true;
                }
                cell1.textContent = loopthro[i][1];
                cell2.textContent = loopthro[i][1];
                if(loopthro[i][0] == 0){
                    cell2.style["color"] = "transparent";
                    cell1.onclick = function(){debuggerinput.value = this.textContent};
                }
                else{
                    cell1.style["color"] = "transparent";
                    cell2.onclick = function(){debuggerinput.value = this.textContent};
                }
                row.appendChild(cell1);
                row2.appendChild(cell2);
                logmenutable.appendChild(row);
                logmenutable2.appendChild(row2);
            }
            while (logmenutable.children.length>1000) {
                logmenutable.removeChild(logmenutable.firstChild);
                logmenutable2.removeChild(logmenutable2.firstChild);
            }
            if(bottomscroll){
                logmenutable.scrollTop = logmenutable.scrollHeight;
                logmenutable2.scrollTop = logmenutable.scrollHeight;
            }
        }
    }
};
Gdocument.getElementById("maploadwindowmapscontainer").appendChild = function(args){

    var checkbox = Gdocument.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style["position"]="absolute";
    checkbox.style["margin-top"] = "135px";
    checkbox.style["margin-left"] = "140px";
    checkbox.style["scale"] = "2";
    checkbox.style["display"] = "none";
    checkbox.className = "quickplaycheckbox quickplayunchecked";
    if(ishost && stopquickplay==0){
        checkbox.style["display"] = "block";
        checkbox.className = "quickplaycheckbox quickplaychecked";
    }
    checkbox.checked = true;
    checkbox.onclick = function(e){e.stopPropagation();};
    args.appendChild(checkbox);
    originalMapLoad.call(this,args);
};
Gdocument.getElementById("newbonklobby_chat_content").appendChild = function(args){
    if(beenKickedTimeStamp+100>Date.now() && args.children.length>0){
        if(args.children[0].textContent.endsWith(" has left the game ") && args.children[0].textContent.startsWith("* ")){
            var kickedorbanned = "banned";
            if(onlykicked){
                kickedorbanned = "kicked";
            }
            args.children[0].textContent = args.children[0].textContent.substring(0,args.children[0].textContent.length-19)+" has been "+kickedorbanned+" from the game ";
        }
    }
    setTimeout(function(){
    if(args.textContent.startsWith("* ") && args.children.length>=5){
        var newarg = args.cloneNode();
        for(var i = 0;i<args.children.length;i++){
            var newarg2 = args.children[i].cloneNode();
            newarg2.textContent = args.children[i].textContent;
            newarg2.style.color = '#ffffffd6';
            newarg2.onclick = args.children[i].onclick;
            newarg2.suggestID = args.children[i].suggestID;
            newarg.appendChild(newarg2);
        }
        Gdocument.getElementById("ingamechatcontent").appendChild(newarg);
        Gdocument.getElementById("ingamechatcontent").scrollTop = Number.MAX_SAFE_INTEGER;
    }},0);
    originalLobbyChat.call(this,args);
};
Gdocument.getElementById("ingamechatcontent").appendChild = function(args){
    if(beenKickedTimeStamp+100>Date.now() && args.children.length>0){
        if(args.children[0].textContent.endsWith(" has left the game.") && args.children[0].textContent.startsWith("* ")){
            var kickedorbanned = "banned";
            if(onlykicked){
                kickedorbanned = "kicked";
            }
            args.children[0].textContent = args.children[0].textContent.substring(0,args.children[0].textContent.length-19)+" has been "+kickedorbanned+" from the game.";
        }
    }
    if(recordedTimeStamp+100>Date.now() && args.children.length>0){
        if(args.children[0].textContent.includes("seconds") && args.children[0].textContent.startsWith("* ")){
            args.children[0].textContent = args.children[0].textContent + " - " + playerids[recordedId].userName;
        }
    }
    originalIngameChat.call(this,args);
};  
    
Gwindow.XMLHttpRequest.prototype.open = function(_, url) {
    if (url.includes("scripts/map_get") || url.includes("scripts/map_b1_get") || url.includes("scripts/hotmaps/")) {
        this.isSearchMap = true;
    }
    
    originalXMLOpen.call(this, ...arguments);
};
    
Gwindow.XMLHttpRequest.prototype.send = function(data) {
    if (this.isSearchMap) {
        this.onreadystatechange = function () {
            if (this.readyState == 4 && searchrequested && Gdocument.getElementById("maploadtypedropdowntitle").textContent == "MAP REQUESTS") {
                searchrequested = false;
                
                var jsonargs = {r:"success",maps:[],more:true};
                
                for(var i = 0; i<requestedmaps.length; i++){
                    var dec = requestedmaps[i][0];
                    var undec = requestedmaps[i][1];
                    var map = {};
                    map.id = dec["m"]["dbid"];
                    map.name = dec["m"]["n"];
                    map.authorname = dec["m"]["a"];
                    map.leveldata = undec;
                    map.publisheddate = dec["m"]["date"];
                    map.remixauthor = dec["m"]["rxa"];
                    map.remixdb = dec["m"]["rxdb"];
                    map.remixid = dec["m"]["rxid"];
                    map.remixname = dec["m"]["rxn"];
                    map.vd = dec["m"]["vd"];
                    map.vu = dec["m"]["vu"];
                    jsonargs.maps.push(map);
                        
                }
                jsonargs2 = JSON.stringify(jsonargs);
                function stringifyjsonargs(){
                    return jsonargs2;
                }
                this.__defineGetter__("responseText", stringifyjsonargs);
                this.__defineGetter__("response", stringifyjsonargs);
                
                
            }
        }
    }
    originalXMLSend.call(this, ...arguments);
};
scope.STB = function(x){
    if(x == "0"){
        return 0;
    }
    else{
        return 1;
    }
};
scope.BTS = function(x){
    if(x == 0){
        return "0";
    }
    else{
        return "1";
    }
};
scope.GET_KEYS = function(x){
    var x2 = ((x+64)>>>0).toString(2).substring(1).split("");
    return {"left":STB(x2[5]),"right":STB(x2[4]),"up":STB(x2[3]),"down":STB(x2[2]),"heavy":STB(x2[1]),"special":STB(x2[0])}
};
scope.MAKE_KEYS = function(x){
    return x.special*32+x.heavy*16+x.down*8+x.up*4+x.right*2+x.left
};

Gwindow.PIXI.Graphics.prototype.drawCircle = function(...args){
    
    var This = this;
    var Args = [...args];
    setTimeout(function(){
        if(This.parent){
            var childs = This.parent.children;
            var user = 0;
            for(var i = 0;i<childs.length;i++){
                if(childs[i]._text){
                    user = childs[i]._text;
                }
                if(i==2 && childs[i]!=This){
                    return;
                }
            }
            var keys = Object.keys(playerids);
            for(var i = 0;i<keys.length;i++){
                if(playerids[keys[i]].userName == user){
                    playerids[keys[i]].playerData = This.parent;
                    if(!playerids[keys[i]].playerData2){
                        playerids[keys[i]].playerData2 = {alive:true,radius:12,timeStamp:0,timeStamp2:0,px:0,py:0,pvx:0,pvy:0,xacc:0,yacc:0,xvel:0,yvel:0,balance:0};
                    }
                    playerids[keys[i]].playerData2.radius = Args[2];
                    parentDraw = This.parent;
                    while(parentDraw.parent){
                        parentDraw = parentDraw.parent;
                    }
                }
            }
        }
    },0);
    return originalDrawCircle.call(this,...args);
};    
    
Gwindow.requestAnimationFrame = function(...args){
    if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
        while(parentDraw.parent){
            parentDraw = parentDraw.parent;
        }
        var now = Date.now();
        var keys = Object.keys(playerids);
        for(var i = 0;i<keys.length;i++){

            if(playerids[keys[i]].playerData){
                if(playerids[keys[i]].playerData2){
                    if(playerids[keys[i]].playerData.transform){
                        playerids[keys[i]].playerData2.alive = true;
                        if(playerids[keys[i]].playerData2.timeStamp == 0){
                            playerids[keys[i]].playerData2.px = playerids[keys[i]].playerData.transform.position.x;
                            playerids[keys[i]].playerData2.py = playerids[keys[i]].playerData.transform.position.y;
                            playerids[keys[i]].playerData2.timeStamp = now;
                        }
                        else{
                            playerids[keys[i]].playerData2.xvel = (playerids[keys[i]].playerData2.px - playerids[keys[i]].playerData.transform.position.x)/(playerids[keys[i]].playerData2.timeStamp-now);
                            playerids[keys[i]].playerData2.yvel = (playerids[keys[i]].playerData2.py - playerids[keys[i]].playerData.transform.position.y)/(playerids[keys[i]].playerData2.timeStamp-now);
                            playerids[keys[i]].playerData2.px = playerids[keys[i]].playerData.transform.position.x;
                            playerids[keys[i]].playerData2.py = playerids[keys[i]].playerData.transform.position.y;
                            playerids[keys[i]].playerData2.timeStamp = now;
                        }
                        if(playerids[keys[i]].playerData2.timeStamp2 == 0){
                            playerids[keys[i]].playerData2.pvx = playerids[keys[i]].playerData2.xvel;
                            playerids[keys[i]].playerData2.pvx = playerids[keys[i]].playerData2.yvel;
                            playerids[keys[i]].playerData2.timeStamp2 = now;
                        }
                        else{
                            playerids[keys[i]].playerData2.xacc = (playerids[keys[i]].playerData2.pvx - playerids[keys[i]].playerData2.xvel)/((playerids[keys[i]].playerData2.timeStamp2-now)**2);
                            playerids[keys[i]].playerData2.yacc = (playerids[keys[i]].playerData2.pvy - playerids[keys[i]].playerData2.yvel)/((playerids[keys[i]].playerData2.timeStamp2-now)**2);
                            playerids[keys[i]].playerData2.pvx = playerids[keys[i]].playerData2.xvel;
                            playerids[keys[i]].playerData2.pvx = playerids[keys[i]].playerData2.yvel;
                            playerids[keys[i]].playerData2.timeStamp2 = now;
                        }
                    }
                    else{
                        if(playerids[keys[i]].playerData2.alive){

                        }
                        playerids[keys[i]].playerData2.alive = false;
                    }
                }
                else{
                    playerids[keys[i]].playerData2 = {alive:true,radius:12,timeStamp:0,timeStamp2:0,px:0,py:0,pvx:0,pvy:0,xacc:0,yacc:0,xvel:0,yvel:0,balance:0};
                }
            }
        }
        var addto = {"children":[]};
        for(var i = 0;i<parentDraw.children.length;i++){
            if(parentDraw.children[i].constructor.name == "e"){
                addto = parentDraw.children[i];
                break;
            }
        }
        addto.scale.x = zoom;
        addto.scale.y = zoom;
        if(holdheavy>0){
            if(holdheavy==1){
                holdheavy = -1;
            }
            else{
                holdheavy-=1;
            }
        }
        if(playerids[myid].playerData?.children){
            for(var i = 0;i<playerids[myid].playerData.children.length;i++){
                if(playerids[myid].playerData.children[i].alpha!=1){
                    heavyid = i;
                }
                if(playerids[myid].playerData.children[i].vertextData){
                    if(playerids[myid].playerData.children[i].vertextData.length == 0){
                        specialid = i;   
                    }
                }
            }
        }
        var canv = 0;
        for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
            if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                canv = Gdocument.getElementById("gamerenderer").children[i];
                break;
            }
        }
        var width = parseInt(canv.style["width"]);
        var height = parseInt(canv.style["height"]);
        var scale = (parseInt(canv.style["width"])/730);
        parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
        parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
        parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
        parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
        if(canvasWidth!=width){
            canvasWidth = width;
            pixiCircle.clear();
            pixiCircle.x = parseInt(canv.style["width"])/2;
            pixiCircle.y = parseInt(canv.style["height"])/2;
            pixiCircle.lineStyle(3, 0x8B8000);
            pixiCircle.drawRect(-parseInt(canv.style["width"])/2,-parseInt(canv.style["height"])/2,parseInt(canv.style["width"]),parseInt(canv.style["height"]));
            pixiCircle.lineStyle(3, 0xFF0000);
            pixiCircle.arc(0, 0, 850*scale,Math.atan2(250,-100*Math.sqrt(66)),Math.atan2(250,100*Math.sqrt(66)));
            pixiCircle.lineTo(-100*Math.sqrt(66)*scale,250*scale);
            parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
            parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
            parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
            parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
        }

        if(!addto.children.includes(container)){
            addto.addChild(container);
        }
        if(keys.length>0){
            if(playerids[myid].playerData && playerids[myid].playerData2){
                if(aimbot || heavybot){
                    var targetid = -1;
                    var distances = {};
                    if(playerids[myid].playerData.transform){
                        var teamok = true;
                        if(playerids[myid].team>1){
                            teamok = false;
                        }
                        for(var i = 0;i<keys.length;i++){
                            if(playerids[keys[i]].playerData && playerids[keys[i]].playerData2 && keys[i]!=myid){
                                if(playerids[keys[i]].playerData.transform && (playerids[keys[i]].team != playerids[myid].team || teamok || FFA)){
                                    distances[keys[i]] = Math.sqrt((playerids[keys[i]].playerData.transform.position.x-playerids[myid].playerData.transform.position.x)**2+(playerids[keys[i]].playerData.transform.position.y-playerids[myid].playerData.transform.position.y)**2);
                                }
                            }
                        }
                    }
                    var lowestD = [-1,-1];
                    var keys2 = Object.keys(distances);
                    for(var i = 0;i<keys2.length;i++){
                        if(myid != keys2[i]){
                            if(lowestD[1] == -1){
                                lowestD[1] = distances[keys2[i]];
                                lowestD[0] = keys2[i];
                            }
                            else if(distances[keys2[i]]<lowestD[1]){
                                lowestD[1] = distances[keys2[i]];
                                lowestD[0] = keys2[i];
                            }
                        }
                    }
                    targetid = lowestD[0];
                    if(targetid != -1 && playerids[myid].playerData.transform){
                        if(playerids[myid].playerData.children.length >= 7 && playerids[targetid].playerData && playerids[targetid].playerData?.transform && playerids[targetid].playerData2 && playerids[myid].playerData.transform && aimbot){
                            var indexE = -1;
                            for(var i = 0;i<playerids[myid].playerData.children.length;i++){
                                if(playerids[myid].playerData.children[i].constructor.name == "e"){
                                    indexE = i;
                                    break;
                                }
                            }
                            if(indexE != -1 && playerids[myid].playerData.children[indexE].visible){
                                if(started == 0){
                                    started = now;
                                }
                                var scale=1/(parseInt(canv.style["width"])/730);
                                scale /= scale*1/(1 + playerids[myid].playerData2.balance*0.0088)*(playerids[myid].playerData2.radius/12);
                                var Dstarted = (Math.min((now-started)/1000,10/3)/(10/3));
                                var v = multiplier * (Dstarted*100+15);
                                var g = gravity;
                                var mypos = playerids[myid].playerData.transform.position;
                                var targetpos = playerids[targetid].playerData.transform.position;
                                var deltapos = [(targetpos.x-mypos.x)*scale,(targetpos.y-mypos.y)*scale];
                                var dis = (Math.sqrt(deltapos[0]**2 + deltapos[1]**2))/v*prediction;
                                deltapos[0]+=playerids[targetid].playerData2.xvel*scale*dis+(playerids[targetid].playerData2.xacc*scale*(dis))**2/2;
                                deltapos[1]+=playerids[targetid].playerData2.yvel*scale*dis+(playerids[targetid].playerData2.yacc*scale*(dis))**2/2;
                                deltapos[1] = -deltapos[1];
                                var angle = positive(-Math.atan2(deltapos[1],deltapos[0]));
                                var rot = playerids[myid].playerData.children[indexE].transform.rotation;
                                rot = positive(rot);
                                angle = positive(angle);

                                var alpha = deltapos[0];
                                var beta = deltapos[1];
                                var v_squared = v**2;
                                var rootterm = v_squared**2 - g*(g*alpha**2+2*beta*v_squared);
                                if(rootterm < 0) {
                                } else {
                                    gamma_first = (v_squared + Math.sqrt(rootterm));
                                    gamma_second = (v_squared - Math.sqrt(rootterm));
                                    theta_first = positive(-Math.atan2(gamma_first, g*alpha));
                                    theta_second = positive(-Math.atan2(gamma_second, g*alpha));
                                    if(angle_between(angle,theta_first)<angle_between(angle,theta_second)){
                                        angle = theta_first;
                                    }
                                    else{
                                        angle = theta_second;
                                    }
                                }
                                var min = angle_between(angle,rot);
                                if(angle_between2(angle,rot)<0){
                                    fire("keydown",{"keyCode":leftRight[0]},Gdocument.getElementById("gamerenderer"));
                                    fire("keyup",{"keyCode":leftRight[1]},Gdocument.getElementById("gamerenderer"))
                                }
                                else{
                                    fire("keyup",{"keyCode":leftRight[0]},Gdocument.getElementById("gamerenderer"));
                                    fire("keydown",{"keyCode":leftRight[1]},Gdocument.getElementById("gamerenderer"))
                                }
                                if(min<0.05){
                                        fire("keyup",{"keyCode":leftRight[0]},Gdocument.getElementById("gamerenderer"));
                                        fire("keyup",{"keyCode":leftRight[1]},Gdocument.getElementById("gamerenderer"));
                                    
                                }
                            }
                            else if(started>0){
                                started = 0;
                                fire("keyup",{"keyCode":leftRight[0]},Gdocument.getElementById("gamerenderer"));
                                fire("keyup",{"keyCode":leftRight[1]},Gdocument.getElementById("gamerenderer"));
                            }
                        }
                    }
                    if(playerids[myid].playerData.transform && heavybot && mode!="f" && mode!="bs"){
                        var scale=1/(parseInt(canv.style["width"])/730);
                        var myradius = playerids[myid].playerData2.radius * scale;
                        var mypos = playerids[myid].playerData.transform.position;
                        var breakout = false;
                        var collision_happened = false;
                        for(var i = 0;i<keys2.length;i++){
                            var targetradius = playerids[keys2[i]].playerData2.radius * scale;
                            var targetpos = playerids[keys2[i]].playerData.transform.position;
                            var deltapos = [(targetpos.x-mypos.x)*scale,(targetpos.y-mypos.y)*scale];
                            for(var i2 = 0;i2<10;i2++){
                                deltapos2 = [...deltapos];
                                deltapos2[0]+=(playerids[targetid].playerData2.xvel-playerids[myid].playerData2.xvel)*scale*i2*2;
                                deltapos2[1]+=(playerids[targetid].playerData2.yvel-playerids[myid].playerData2.yvel)*scale*i2*2;
                                var dis = Math.sqrt(deltapos2[0]**2+deltapos2[1]**2);
                                if(dis<myradius+targetradius){
                                    breakout = true;
                                    holdheavy = 15;
                                    collision_happened = true;
                                    break;
                                }
                            }
                            if(breakout){
                                break;
                            }
                        }
                        
                        if(holdheavy>0){
                            if(collision_happened){
                                holdheavy = 15;
                            }
                            if(!heavyheld2){
                                heavyheld = playerids[myid].playerData.children[heavyid].alpha>0;
                            }
                            fire("keydown",{"keyCode":heavy},Gdocument.getElementById("gamerenderer"));
                            heavyheld2 = true;
                            if(mode == "sp"){
                                if(!grappleheld2){
                                    grappleheld = playerids[myid].playerData.children[specialid].vertexData?.length>0;
                                }
                                fire("keyup",{"keyCode":special},Gdocument.getElementById("gamerenderer"));
                                grappleheld2 = true;
                            }
                        }
                        else if(holdheavy<0){
                            holdheavy = 0;
                            heavyheld2 = false;
                            grappleheld2 = false;
                            if(!heavyheld){
                                heavyheld = false;
                                fire("keyup",{"keyCode":heavy},Gdocument.getElementById("gamerenderer"));
                            }
                            if(grappleheld && mode == "sp"){
                                grappleheld = false;
                                fire("keydown",{"keyCode":special},Gdocument.getElementById("gamerenderer"));
                            }
                        }
                        else{
                            heavyheld2 = false;
                            heavyheld = false;
                            grappleheld2 = false;
                            grappleheld = false;
                        }
                    }

                }
                if(FollowCam){
                    if(playerids[myid].playerData.transform){

                        pixiCircle.visible = true;

                        parentDraw.x = -playerids[myid].playerData.x*addto.scale.x+parseInt(width)/2;
                        parentDraw.y = -playerids[myid].playerData.y*addto.scale.y+parseInt(height)/2;
                        parentDraw.children[0].x = playerids[myid].playerData.x*addto.scale.x-parseInt(width)/2;
                        parentDraw.children[0].y = playerids[myid].playerData.y*addto.scale.y-parseInt(height)/2;
                    }
                    else{
                        parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                        parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                        parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                        parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                        if(addto.scale.x>=0.95 && addto.scale.y>=0.95){
                            pixiCircle.visible = false;
                        }
                        else{
                            pixiCircle.visible = true;
                        }
                    }
                }
            }
        }
        if(!FollowCam){
            if(addto.scale.x>=0.95 && addto.scale.y>=0.95){
                pixiCircle.visible = false;
            }
            else{
                pixiCircle.visible = true;
            }
        }
    }
    return requestAnimationFrameOriginal.call(this,...args);
};    
    
    
    
scope.SENDFUNCTION = function(args){return args;};
scope.RECIEVEFUNCTION = function(args){return args;};
scope.EVENTLOOPFUNCTION = function(){};

Gwindow.WebSocket.prototype.send = function(args) {
    if(this.url.includes(".bonk.io/socket.io/?EIO=3&transport=websocket&sid=")){
        if(typeof(args) == "string" && !bonkwssextra.includes(this)){
            args = SENDFUNCTION(args);
            wsssendlog.push(args);
            wsssendrecievelog.push([0,args]);
            if(!bonkwss){
                bonkwss = this;
            }
            if(args.startsWith('42[26,')){
                if(sandboxon){
                    var jsonargs = JSON.parse(args.substring(2))[1];
                    if(typeof(sandboxplayerids[jsonargs["targetID"]])!='undefined'){
                        RECIEVE('42[18,'+jsonargs["targetID"]+','+jsonargs["targetTeam"]+']');

                    }
                }
            }
            if(args.startsWith('42[1,')){
                return;
            }

            if(args.startsWith('42[4,')){
                var jsonargs = JSON.parse(args.substring(2));
                
                if(sandboxcopyme && typeof(jsonargs[1]["i"])!="undefined"){
                    var jsonkeys = Object.keys(sandboxplayerids);
                    for(var i = 0; i<jsonkeys.length;i++){
                        RECIEVE('42[7,'+jsonkeys[i].toString()+','+JSON.stringify(jsonargs[1])+']');
                    }
                }
                playerids[myid].lastmove = Date.now();
                if(ishost && typeof(jsonargs[1]["i"])!="undefined"){
                    for(var i = 0;i<disabledkeys.length;i++){
                        if(GET_KEYS(jsonargs[1]["i"])[disabledkeys[i]]){
                            if(Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden" && !killedids.includes(myid)){
                                killedids.push(myid);
                                currentFrame = Math.floor((Date.now() - gameStartTimeStamp)/1000*30);
                                SEND('42[25,{"a":{"playersLeft":['+myid.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                                RECIEVE('42[31,{"a":{"playersLeft":['+myid.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                                break;
                            }
                        }
                    }
                }
                
                args = "42"+JSON.stringify(jsonargs);
            }
            if(args.startsWith('42[29,')){
                var jsonargs = JSON.parse(args.substring(2));
                playerids[jsonargs[1]["sid"]].playerData2.balance = jsonargs[1]["bal"];
            }
            if(args.startsWith('42[12,')){
                playerids = {};
                var jsonargs2 = JSON.parse(args.substring(2));
                var jsonargs = jsonargs2[1];
                playerids["0"] = {"peerID":jsonargs["peerID"],"userName":username,"level":Gdocument.getElementById("pretty_top_level").textContent == "Guest" ? 0 : parseInt(Gdocument.getElementById("pretty_top_level").textContent.substring(3)),"guest":typeof(jsonargs.token)=="undefined","team":1,"avatar":jsonargs["avatar"],ratelimit:{"pm":0,"mode":0,"team":0,"poll":0},vote:{"poll":-1}};
                myid = 0;
                bonkwss = this;
                hostid = 0;
            }
            if(args.startsWith('42[23,') && recteams){
                var jsonargs = JSON.parse(args.substring(2));
                var map = decodeFromDatabase(jsonargs[1]["m"]);
                var spawns = map["spawns"];
                var teamsneeded = true;
                var excludedindexes = [];
                var ffaspawns = false;
                var ffaforsure = false;
                for(var i = 0; i<spawns.length;i++){
                    var currentSpawn = spawns[i];
                    if(Math.sqrt(currentSpawn.x**2 + currentSpawn.y**2)>=850 || currentSpawn.y>250){
                        excludedindexes.push(i);
                    }
                    else if(!(currentSpawn.f || currentSpawn.r || currentSpawn.b || currentSpawn.gr || currentSpawn.ye)){
                        excludedindexes.push(i);
                    }
                    else if(currentSpawn.f){
                        ffaspawns = true;
                        if(!(currentSpawn.r || currentSpawn.b || currentSpawn.gr || currentSpawn.ye)){
                            excludedindexes.push(i);
                            ffaforsure = true
                        }
                    }
                }
                if(!ffaspawns && !ffaforsure){
                    teamsneeded = true;
                }
                else{
                    teamsneeded = false;
                }
                if(teamsneeded){
                    var newspawns = [];
                    for(var i = 0; i<spawns.length;i++){
                        if(!excludedindexes.includes(i)){
                            newspawns.push({"r":spawns[i]["r"],"g":spawns[i]["gr"],"b":spawns[i]["b"],"y":spawns[i]["ye"],"total":spawns[i]["r"]+spawns[i]["ye"]+spawns[i]["gr"]+spawns[i]["b"],"priority":spawns[i]["priority"]});
                        }
                    }
                    
                    if(newspawns.length>0){
                        
                        var teamletters = ["r","g","b","y"];
                        var ratios = {"r":0,"g":0,"b":0,"y":0};
                        for(var i = 0; i < newspawns.length;i++){
                            for(var i2 = 0; i2<teamletters.length;i2++){
                                var ct = teamletters[i2];
                                if(newspawns[i]["priority"]!=0){
                                    ratios[ct]+=(newspawns[i][ct])/newspawns[i]["total"]*newspawns[i]["priority"];
                                }
                            }
                        }
                        var highest = ["",0];
                        for(var i = 0; i<teamletters.length;i++){
                            var ct = teamletters[i];
                            if(ratios[ct]>0 && highest[1]<ratios[ct]){
                                highest = [ct,ratios[ct]];
                            }
                        }
                        if(highest[0]!=""){
                            for(var i = 0; i<teamletters.length;i++){
                                var ct = teamletters[i];
                                ratios[ct] = ratios[ct]/highest[1];
                            }
                        }
                        var playerids3 = Object.keys(playerids);
                        var playerids2 = [];
                        for(var i = 0; i<playerids3.length;i++){
                            if(playerids[playerids3[i]].team>0){
                                playerids2.push(playerids3[i]);
                            }
                        }
                        
                        var pi2l = playerids2.length;
                        var ratios2 = {"r":0,"r1":0,"g":0,"g1":0,"b":0,"b1":0,"y":0,"y1":0};
                        var items = Object.entries(ratios);
                        items.sort(function(a,b){return a[1]-b[1];});
                        var items = items.map(function(e){return e[0];});
                        var highest2 = ["",0];
                        while(pi2l>0){
                            var done = false;
                            for(var i2 = 0; i2<items.length;i2++){
                                var ci = items[i2];
                                var ci2 = items[i2]+"1";
                                for(var i = 0; i<teamletters.length;i++){
                                    var ct = teamletters[i];
                                    if(ratios2[ct]>0 && highest2[1]<ratios2[ct]){
                                        highest2 = [ct,ratios2[ct]];
                                    }
                                }
                                if(highest2[0]!=""){
                                    for(var i = 0; i<teamletters.length;i++){
                                        var ct = teamletters[i];
                                        ratios2[ct+"1"] = ratios2[ct]/highest2[1];
                                    }
                                }
                                if(ratios[ci]>0 && ratios[ci]>=ratios2[ci2] && pi2l>0){
                                    ratios2[ci]+=1;
                                    pi2l--;
                                    done = true;
                                }
                            }
                            if(pi2l>0 && !done){
                                ratios2[highest2[0]]+=1;
                                pi2l--;
                            }
                        }
                        SEND('42[32,{"t":true}]');
                        RECIEVE('42[39,true]');
                        for(var i = 0; i<ratios2["r"];i++){
                            var pid = playerids2.splice(Math.floor(Math.random()*playerids2.length),1)[0];
                            SEND('42[26,{"targetID":'+pid+',"targetTeam":2}]');
                            RECIEVE('42[18,'+pid+',2]');
                        }
                        for(var i = 0; i<ratios2["g"];i++){
                            var pid = playerids2.splice(Math.floor(Math.random()*playerids2.length),1)[0];
                            SEND('42[26,{"targetID":'+pid+',"targetTeam":4}]');
                            RECIEVE('42[18,'+pid+',4]');
                        }
                        for(var i = 0; i<ratios2["b"];i++){
                            var pid = playerids2.splice(Math.floor(Math.random()*playerids2.length),1)[0];
                            SEND('42[26,{"targetID":'+pid+',"targetTeam":3}]');
                            RECIEVE('42[18,'+pid+',3]');
                        }
                        for(var i = 0; i<ratios2["y"];i++){
                            var pid = playerids2.splice(Math.floor(Math.random()*playerids2.length),1)[0];
                            SEND('42[26,{"targetID":'+pid+',"targetTeam":5}]');
                            RECIEVE('42[18,'+pid+',5]');
                        }
                        
                    }
                }
                else{
                    SEND('42[32,{"t":false}]');
                    RECIEVE('42[39,false]');
                }
                
                
            }

            if(args.startsWith('42[47,') && stopquickplay == 0 && ishost && document.hidden && !qppaused){
                roundsperqp2++;
                if(roundsperqp2>=roundsperqp){
                    if(shuffle){
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){

                            if(availableindexes.length!=1){
                                availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                            }
                            quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                        }
                    }
                    else{
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){
                            var above = [];
                            for(var i = 0;i<availableindexes.length;i++){
                                if(availableindexes[i]>quicki){
                                    above.push(availableindexes[i]);   
                                }
                            }
                            if(above.length>0){
                                quicki = above[0];
                            }
                            else{
                                quicki = availableindexes[0];
                            }
                        }
                    }
                }
                canceled = false;
                startedinqp = true;
                window.map(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length),0); 
                
            }
            if(args.startsWith('42[32,')){
                var jsonargs = JSON.parse(args.substring(2));
                var keys = Object.keys(playerids);
                if(!jsonargs[1]["t"]){
                    FFA = true;
                    for(var i = 0;i<keys.length;i++){
                        if(playerids[keys[i]].team!=0){
                            playerids[keys[i]].team = 1;
                        }
                    }
                }
                else{
                    FFA = false;
                }
            }
            if(args.startsWith('42[5,')){
                var jsonargs = JSON.parse(args.substring(2));
                
                if(stopquickplay!=1 && startedinqp){
                    startedinqp = false;
                    jsonargs[1]["gs"]["wl"] = 999;
                    if(!instaqp){
                        var jsonargs2 = decodeIS(jsonargs[1]["is"]);
                        jsonargs2["ftu"] = 60;
                        if(jsonargs2["mm"]["rxa"] != ""){
                            jsonargs2["mm"]["a"] = jsonargs2["mm"]["rxa"];
                            jsonargs2["mm"]["n"] = jsonargs2["mm"]["rxn"];
                        }
                        jsonargs2 = encodeIS(jsonargs2);
                        jsonargs[1]["is"] = jsonargs2;
                        
                        var jsonargs3 = decodeFromDatabase(jsonargs[1]["gs"]["map"]);
                        if(jsonargs3["m"]["rxa"] != ""){
                            jsonargs3["m"]["a"] = jsonargs3["m"]["rxa"];
                            jsonargs3["m"]["n"] = jsonargs3["m"]["rxn"];
                        }

                        jsonargs3 = encodeToDatabase(jsonargs3);
                        jsonargs[1]["gs"]["map"] = jsonargs3;
                    }
                    
                    
                }

                args = "42"+JSON.stringify(jsonargs);
            }
        }

    }
    else{
        if(args.includes("rport")){
            return;
        }
    }
    if(this.url.includes(".bonk.io/socket.io/?EIO=3&transport=websocket&sid=") && !this.injected){
        this.injected = true;

        var originalRecieve = this.onmessage;
        this.onmessage = function(args){
            if(!bonkwssextra.includes(this)){
            wssrecievelog.push(args.data);
            wsssendrecievelog.push([1,args.data]);
            if(typeof(args.data)=="string"){
            args = {"data":RECIEVEFUNCTION(args.data)};
            if(args.data.startsWith('42[1,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                originalSend.call(this,'42[1,{"id":'+jsonargs[2]+'}]');
            }
            if(args.data.startsWith('42[36,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                playerids[jsonargs[1]].playerData2.balance = jsonargs[2];
            }
            
            if(args.data.startsWith('42[24,')){
                beenKickedTimeStamp = Date.now();
                onlykicked = JSON.parse(args.data.substring(2))[2];
            }
            if(args.data.startsWith('42[16,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                var now = Date.now();
                if(jsonargs[1]=="chat_rate_limit"){
                    if(pollactive[1]+100>now){
                        pollactive = [false,0,0,[]];
                        displayInChat("Your poll failed due to chat rate limit.","#DA0808","#1EBCC1");
                        displayInChat("Please try again.","#DA0808","#1EBCC1");
                    }
                
                }
            }
            if(args.data.startsWith('42[6,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                if(typeof(playerids[jsonargs[1]])!='undefined'){
                    delplayerids[jsonargs[1]] = playerids[jsonargs[1]];
                    delete playerids[jsonargs[1]];
                }
                hostid = jsonargs[2];
            }
            if(args.data.startsWith('42[39,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                var keys = Object.keys(playerids);
                if(!jsonargs[1]){
                    FFA = true;
                    for(var i = 0;i<keys.length;i++){
                        if(playerids[keys[i]].team!=0){
                            playerids[keys[i]].team = 1;
                        }
                    }
                }
                else{
                    FFA = false;
                }
                hostid = jsonargs[2];
            }
            if(args.data.startsWith('42[41,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                hostid = jsonargs[1]["newHost"];
            }
            if(args.data.startsWith('42[20,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                if(echo_list.includes(playerids[jsonargs[1]].userName)){
                    chat(flag_manage(echotext.replaceAll("username",playerids[jsonargs[1]].userName).replaceAll("message",jsonargs[2])));
                }
                if(pollactive[0] || pollactive2[0]){
                    var chatmessage = jsonargs[2].toUpperCase().trim().replace(")","");
                    var lettersindex = letters.indexOf(chatmessage);
                    if(ishost){
                        if(pollactive[3].length>0 && lettersindex!=-1 && lettersindex<pollactive[3].length){
                            playerids[jsonargs[1]].vote.poll = lettersindex;
                        }
                    }
                    else{
                        if(pollactive2[2].length>0 && lettersindex!=-1 && lettersindex<pollactive2[2].length){
                            playerids[jsonargs[1]].vote.poll = lettersindex;
                        }
                    }
                }
            }
            if(args.data.startsWith('42[32')){
                SEND('42[4,{"type":"inactive kick counter"}]');
            }
            if(args.data.startsWith('42[18')){
                var jsonargs = JSON.parse(args.data.substring(2));
                playerids[jsonargs[1]].team = jsonargs[2];
            }
            if(args.data.startsWith('42[40,')){
                recordedTimeStamp = Date.now();
                recordedId = JSON.parse(args.data.substring(2))[1];
            }
            
            if(args.data.startsWith('42[3,')){
                playerids = {};
                var jsonargs = JSON.parse(args.data.substring(2));
                for(var i = 0; i<jsonargs[3].length;i++){
                    if(jsonargs[3][i]!=null){
                        playerids[i.toString()] = jsonargs[3][i];
                        playerids[i.toString()].ratelimit = {"pm":0,"mode":0,"team":0,"poll":0};
                        playerids[i.toString()].vote = {"poll":-1};
                    }
                }
                if(playerids[jsonargs[1]].userName.startsWith(Gdocument.getElementById("pretty_top_name").textContent)){
                    myid = jsonargs[1];
                    bonkwss = this;
                }
                else{
                    bonkwssextra.push(this);
                }
                hostid = jsonargs[2];
            }
            if(args.data.startsWith('42[21,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                mode = jsonargs[1]["mo"];
                FFA = !jsonargs[1]["tea"];
            }
            if(args.data.startsWith('42[48,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                mode = jsonargs[1]["gs"]["mo"];
                FFA = !jsonargs[1]["gs"]["tea"];
            }
            if(args.data.startsWith('42[15,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                dontswitch = false;
                mode = jsonargs[3]["mo"];
                gameStartTimeStamp = Date.now();
                killedids = [];
            }
            if(args.data.startsWith('42[33,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                var decodedmap = decodeFromDatabase(jsonargs[1]);
                if(decodedmap!=0){
                    requestedmaps.push([decodedmap,jsonargs[1]]);
                }
            }
            if(args.data.startsWith('42[7,')){
                var jsonargs2 = JSON.parse(args.data.substring(2));
                var idofpacket = jsonargs2[1];
                jsonargs = jsonargs2[2];
                if(typeof(jsonargs["i"]) == "undefined"){
                    
                    if(jsonargs["type"]=="private chat" && jsonargs["to"] == username){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        if(!ignorepmlist.includes(from)){
                            if(typeof(jsonargs["message"])=="object" && typeof(jsonargs["password"]) == "object"){
                                if(public_key[0]==jsonargs["public key"][0] && public_key[1]==jsonargs["public key"][1]){
                                    var now = Date.now();
                                    if(jsonargs["password"].length<=25 && playerids[idofpacket].ratelimit.pm+250<now){
                                        playerids[idofpacket].ratelimit.pm = now;
                                        var password = CRYPT_MESSAGE(private_key,jsonargs["password"]);
                                        var decodedtext = jsonargs["message"].slice(0,400);
                                        var encodedtext = "";
                                        for(var i=0;i<decodedtext.length;i++){
                                            if(password[i%password.length]<1000){
                                                encodedtext+=String.fromCharCode(password[i%password.length]^decodedtext[i]);
                                            }
                                        }
                                        var code = 'Gwindow.private_chat = "'+from+'"; Gwindow.SEND("42"+JSON.stringify([4,{"type":"request public key","from":Gwindow.username,"to":Gwindow.private_chat}])); Gwindow.request_public_key_time_stamp = Date.now(); setTimeout(function(){if(Gwindow.private_chat_public_key[0]!=Gwindow.private_chat){Gwindow.displayInChat("Failed to connect to "+Gwindow.private_chat+".","#DA0808","#1EBCC1");Gwindow.private_chat = Gwindow.private_chat_public_key[0];}},1600);';
                                        displayInChat('> '+'<a onclick = \''+code+'\' style = "color:green;" href = "javascript:void(0);">'+from+'</a>'+': ',"#DA0808","#1EBCC1",{sanitize:false},encodedtext);

                                        Gdocument.getElementById("newbonklobby_chat_content").children[Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children[0].parentElement.style["parsed"] = true;
                                        Gdocument.getElementById("ingamechatcontent").children[Gdocument.getElementById("ingamechatcontent").children.length-1].children[0].parentElement.style["parsed"] = true;
                                        
                                        Laster_message = lastmessage();
                                        
                                        
                                        
                                    }
                                }
                                else{
                                    SEND("42"+JSON.stringify([4,{"type":"public key correction","from":username,"to":private_chat_public_key[0],"public key":public_key}]));
                                }
                            }
                        }
                    }
                    
                    if(jsonargs["type"]=="request public key" && jsonargs["to"] == username){
                        SEND("42"+JSON.stringify([4,{"type":"public key","from":username,"public key":public_key}]));
                    }
                    if(jsonargs["type"]=="private chat users" && pmuserstimestamp+1500>Date.now()){
                        
                        if(typeof(jsonargs["from"])!='undefined'){
                            from = jsonargs["from"];
                            if(Object.keys(playerids).includes(idofpacket.toString())){
                                from = playerids[idofpacket].userName;
                            }
                            if(!pmusers.includes(from) && username == jsonargs["to"]){
                                pmusers.push(from);
                            }
                        }
                    }
                    if(jsonargs["type"]=="request private chat users"){
                        if(typeof(jsonargs["from"])!='undefined'){
                            from = jsonargs["from"];
                            if(Object.keys(playerids).includes(idofpacket.toString())){
                                from = playerids[idofpacket].userName;
                            }
                            SEND("42"+JSON.stringify([4,{"type":"private chat users","from":username,"to":from}]));
                        }
                    }
                    if(jsonargs["type"]=="public key" && request_public_key_time_stamp+1500>Date.now()){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        if(from == private_chat){
                            private_chat_public_key = [private_chat,jsonargs["public key"]];
                            displayInChat("Private chatting with "+private_chat+".","#DA0808","#1EBCC1");
                        }
                    }
                    if(jsonargs["type"]=="vote poll"){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        if(typeof(jsonargs["vote"]) == 'number' && idofpacket!=hostid){
                            var now = Date.now();
                            if(ishost && pollactive[3].length>1 && pollactive[0]){
                                if(jsonargs["vote"]>=0 && jsonargs["vote"]<pollactive[3].length){
                                    playerids[idofpacket].vote.poll = jsonargs["vote"];
                                }
                            }
                            else if(pollactive2[0] && pollactive2[2].length>1){
                                if(jsonargs["vote"]>=0 && jsonargs["vote"]<pollactive2[2].length){
                                    playerids[idofpacket].vote.poll = jsonargs["vote"];
                                }
                            }
                        }

                    }
                    if(jsonargs["type"]=="poll end"){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        var now = Date.now();
                        if(hostid == idofpacket && playerids[idofpacket].ratelimit.poll+5000<now){
                            playerids[idofpacket].ratelimit.poll = now;
                            var count = [0,0,0,0];
                            var keys = Object.keys(playerids);
                            for(var i = 0;i<keys.length;i++){
                                if(playerids[keys[i]].vote.poll!=-1 && playerids[keys[i]].vote.poll<pollactive2[2].length-1){
                                    count[playerids[keys[i]].vote.poll]++;
                                }
                                playerids[keys[i]].vote.poll = -1;
                            }
                            displayInChat("The poll ended.","#DA0808","#1EBCC1");
                            for(var i = 0;i<count.length;i++){
                                if(count[i]>1){
                                    displayInChat(count[i].toString()+" people voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                                }
                                if(count[i]==1){
                                    displayInChat(count[i].toString()+" person voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                                }
                            }
                            pollactive2 = [false,0,[]];
                        }

                    }
                    if(jsonargs["type"]=="poll" && idofpacket == hostid){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        if(Array.isArray(jsonargs["poll"])){
                            var propperpoll = true;
                            var pollifproper = [];
                            if(jsonargs["poll"].length>5){
                                propperpoll = false;
                            }
                            else{
                                for(var i = 0;i<jsonargs["poll"].length;i++){
                                    if(typeof(jsonargs["poll"][i]) == 'string'){
                                        if(jsonargs["poll"][i].length>50){
                                            propperpoll = false;
                                            break;
                                        }
                                        else{
                                            pollifproper.push(jsonargs["poll"][i]);
                                        }
                                    }
                                    else{
                                        propperpoll = false;
                                        break;
                                    }
                                }
                            }
                            if(propperpoll){
                                var now = Date.now();
                                var keys = Object.keys(playerids);
                                for(var i = 0;i<keys.length;i++){
                                    playerids[keys[i]].vote.poll = -1;
                                }
                                pollactive2 = [true,now,pollifproper];
                                playerids[idofpacket].ratelimit.poll = now;
                                displayInChat(from+" started a poll:","#DA0808","#1EBCC1");
                                for(var i = 0;i<pollifproper.length;i++){
                                    var code = 'Gwindow.displayInChat("You voted for option '+letters[i]+'.","#DA0808","#1EBCC1",{sanitize:false},"",true);Gwindow.SEND("42"+JSON.stringify([4,{"type":"vote poll","from":Gwindow.username,"vote":'+i+'}]));Gwindow.playerids[Gwindow.myid].vote.poll='+i+';Gwindow.Gdocument.getElementById("newbonklobby_chat_content").children[Gwindow.Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children[0].parentElement.style["parsed"] = true;Gwindow.Gdocument.getElementById("ingamechatcontent").children[Gwindow.Gdocument.getElementById("ingamechatcontent").children.length-1].children[0].parentElement.style["parsed"] = true;Gwindow.Laster_message = Gwindow.lastmessage();';
                                    
                            
                                    displayInChat('<a onclick = \''+code+'\' style = "color:green;" href = "javascript:void(0);">'+letters[i]+')</a>',"#DA0808","#1EBCC1",{sanitize:false}," "+pollifproper[i]);
                                }
                                
                            }
                        }

                    }
                    if(jsonargs["type"]=="request mode" && playerids[idofpacket].ratelimit.mode+1000<Date.now()){
                        playerids[idofpacket].ratelimit.mode = Date.now();
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        var req_mode = jsonargs["mode"];
                        var req_mode2 = "";
                        if(req_mode){
                            if(req_mode == "b"){
                                req_mode2 = "Classic";
                            }
                            else if(req_mode == "sp"){
                                req_mode2 = "Grapple";
                            }
                            else if(req_mode == "ar"){
                                req_mode2 = "Arrows";
                            }
                            else if(req_mode == "ard"){
                                req_mode2 = "Death Arrows";
                            }
                        }
                        if(req_mode2){
                            var code = 'if(!Gwindow.ishost){Gwindow.displayInChat("You must be host to change the mode.","#DA0808","#1EBCC1",{sanitize:false},"",true)}else{Gwindow.changemode("'+req_mode+'")}';
                            
                            displayInChat('> '+playerids[idofpacket].userName+' requests [<a onclick = \''+code+'\' style = "color:green;" href = "javascript:void(0);">'+req_mode2+'</a>]',"#DA0808","#1EBCC1",{sanitize:false}," mode.");
                        }

                    }
                    if(jsonargs["type"]=="public key correction" && private_chat_public_key[0] == private_chat){
                        from = jsonargs["from"];
                        if(Object.keys(playerids).includes(idofpacket.toString())){
                            from = playerids[idofpacket].userName;
                        }
                        if(from == private_chat){
                            private_chat_public_key = [private_chat,jsonargs["public key"]];
                            var text = pmlastmessage;
                            var password = [];
                            for(var i = 0;i<10;i++){
                                password.push(Math.floor(Math.random()*100+50));
                            }
                            var text2 = [];
                            for(var i = 0;i<text.length ;i++){
                                text2.push(password[i%password.length]^text.slice(0,400).charCodeAt(i));
                            }
                            SEND("42"+JSON.stringify([4,{"type":"private chat","from":username,"to":private_chat,"public key":private_chat_public_key[1],"message":text2,"password":CRYPT_MESSAGE(private_chat_public_key[1],password)}]));
                        }
                    }

                }
                else{
                    var now = Date.now();
                    if(playerids[idofpacket.toString()]){
                        playerids[idofpacket.toString()].lastmove = now;
                    }
                    if(Math.abs(gameStartTimeStamp - (now-1000*jsonargs["f"]/30))>250){
                        gameStartTimeStamp = now-1000*jsonargs["f"]/30;
                    }
                    if(ishost){
                        for(var i = 0;i<disabledkeys.length;i++){
                            var get_keys_var = GET_KEYS(jsonargs["i"]);
                            if(get_keys_var[disabledkeys[i]]){
                                if(Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden" && !killedids.includes(idofpacket)){
                                    killedids.push(idofpacket);
                                    currentFrame = Math.floor((Date.now() - gameStartTimeStamp)/1000*30);
                                    SEND('42[25,{"a":{"playersLeft":['+idofpacket.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                                    RECIEVE('42[31,{"a":{"playersLeft":['+idofpacket.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            if(args.data.startsWith('42[4,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                playerids[jsonargs[1]] = {"peerID":jsonargs[2],"userName":jsonargs[3],"guest":jsonargs[4],"level":jsonargs[5],"team":jsonargs[6],"avatar":jsonargs[7],"ratelimit":{"pm":0,"mode":0,"team":0,"poll":0},"vote":{"poll":-1}};
                if(ishost){
                    if(jointext!=""){
                        chat(flag_manage(jointext.replaceAll("username",jsonargs[3])));
                    }
                    if(freejoin){
                        var count = 0;
                        var keys = Object.keys(playerids);
                        for(var i = 0; i<keys.length;i++){
                            if(playerids[keys[i]].team!=0){
                                count++;
                            }
                        }
                        if(count <= 2 && jsonargs[6]!=0){
                            setTimeout(function(){
                                Gdocument.getElementById("newbonklobby_editorbutton").click();
                                Gdocument.getElementById("mapeditor_close").click();
                                Gdocument.getElementById("newbonklobby").style["display"] = "none";
                                Gdocument.getElementById("mapeditor_midbox_testbutton").click();
                                if(transitioning == true){
                                    canceled = true;
                                }
                            },150);
                        }
                    }
                }
                

            }
            if(args.data.startsWith('42[5,')){
                var jsonargs = JSON.parse(args.data.substring(2));
                if(typeof(playerids[jsonargs[1]])!='undefined'){
                    delplayerids[jsonargs[1]] = playerids[jsonargs[1]];
                    delete playerids[jsonargs[1]];
                }
            }
            }}
            return originalRecieve.call(this,args);
        };

        var originalClose = this.onclose;
        this.onclose = function () {
            
            if(bonkwssextra.includes(this)){
                bonkwssextra.splice(bonkwssextra.indexOf(this),1)
            }
            else{
                window.bonkwss = 0;
            }
            return originalClose.call(this);
        }

    }
    return originalSend.call(this,args);
};

scope.SEND = function(args){
    if(bonkwss!=0){
        bonkwss.send(args);
    }
};
scope.RECIEVE = function(args){
    if(bonkwss!=0){
        bonkwss.onmessage({data:args});
    }
};



scope.dontswitch = false;
scope.username = 0;
scope.timedelay = 1400;
scope.ishost = false;
scope.checkboxhidden = true;
scope.quicki=0;
scope.defaultmode = "d";
scope.recmodebool = false;
scope.shuffle = false;
scope.startedinqp = false;
scope.instaqp = false;
scope.freejoin = false;
scope.recordedTimeStamp = 0;
scope.recordedId = 0;
scope.smartteams = false;
scope.beenKickedTimeStamp = 0;
scope.stopquickplay = 1;
scope.currentFrame = 0;
scope.text2speech = false;
scope.gameStartTimeStamp = 0;
scope.canceled = false;
scope.wintext = "";
scope.banned = [];
scope.transitioning = false;
scope.echo_list = [];
scope.echoAppend = "";
scope.message = "";
scope.private_chat = "";
scope.private_chat_public_key = ["",[0,0]];
scope.disabledkeys = [];
scope.actuallyhost = false;
scope.pmusers = [];
scope.pmlastmessage = "";
scope.pmuserstimestamp = 0;
scope.ignorepmlist = [];
scope.scroll = false;
scope.elem = Gdocument.getElementById("maploadwindowmapscontainer");
scope.npermissions = 1;
scope.space_flag = false;
scope.rcaps_flag = false;
scope.number_flag = false;
scope.reverse_flag = false;
scope.request_public_key_time_stamp = 0;
scope.sandboxcopyme = false;
scope.recteams = false;
scope.chatheight = 128;
scope.onlykicked = false;
scope.killedids = [];
scope.jointext = "";
scope.afkkill = -1;
scope.tournament_mode = "";
scope.tournament_scores = [];
scope.tournament_in_and_out = {"in":[],"out":[]};
scope.echotext = "message";
scope.nextafter = 0;
scope.nextafterbuffer = -1;
scope.roundsperqp = 1;
scope.roundsperqp2 = 0;
scope.autorecord = false;
scope.poll = [];
scope.letters = ["A","B","C","D","E"];
scope.qppaused = false;
scope.FollowCam = false;
scope.gravity = 7.8;
scope.multiplier = 2.1;
scope.aimbot = false;
scope.heavybot = false;
scope.zoom = 1;

scope.prediction = 125;
scope.started = 0;
scope.holdheavy = 0;
scope.grappleheld = false;
scope.grappleheld2 = false;
scope.heavyheld = false;
scope.heavyheld2 = false;
scope.heavyid = 3;
scope.specialid = 0;
scope.FFA = true;
scope.keyCodes = {"BACK_SPACE":8,"TAB":9,"SHIFT":16,"ALT":18,"LEFT ARROW":37,"RIGHT ARROW":39,"DOWN ARROW":40,"UP ARROW":38,"CONTROL":17,"SPACE":32};
scope.leftRight = [37,39];
scope.heavy = 88;
scope.special = 90;
scope.positive = function(angle){
    if(angle<0){
        angle += 2*Math.PI;
    }
    return angle%(Math.PI*2);
};
scope.angle_between = function(angle,angle2){
    return Math.min(Math.abs(positive(angle)-positive(angle2)),Math.PI*2-Math.abs(positive(angle)-positive(angle2)));
};
scope.angle_between2 = function(angle,angle2){
    if(angle_between(angle,angle2+Math.PI/2)<Math.PI/2){
        return 1;
    }
    return -1;
};

scope.help = ["All the commands are:","/help","/?","/advhelp [command]","/space","/rcaps","/number","/speech","/followcam","/zoom [in/out/reset]","/xray","/aimbot","/heavybot","/echo [username]","/clearecho","/remove [username]","/echotext [text]","/chatw [username]","/msg [text]","/ignorepm [username]","/pmusers","/pollstat","/lobby","/score","/team [letter]","/mode [mode]","/scroll","/hidechat","/showchat","/notify","/stopnotify","/support","Host commands are:","/startqp","/stopqp","/pauseqp","/next","/nextafter [seconds]","/previous","/shuffle","/instaqp","/freejoin","/recmode","/recteam","/defaultmode [mode]","/start","/balanceA [number]","/moveA [letter]","/rounds [number]","/roundsperqp [number]","/disablekeys [keys]","/jointext [text]","/wintext [text]","/autorecord","/afkkill [number]","/ban [username]","/kill [username]","/resetpoll","/addoption [text]","/deloption [letter]","/startpoll [seconds]","/endpoll","Sandbox commands are:","/addplayer [number]","/delplayer [number]","/copyme","Debugging commands are:","/eval [code]","/debugger","Hotkeys are:","Alt L","Alt B","Alt C","Alt I","Alt <","Alt >","Alt N","Alt G","Alt H","Alt J","Host hotkeys are:","Alt S","Alt T","Alt E","Alt K","Alt M","Alt Q","Alt A","Alt D","Alt F","Alt R"];

scope.adv_help = {"help":"Shows all command names.",
                "?":"Shows all command names.",
                "advhelp":"Shows a command in detail.",
                "space":"Toggles space. When space is on, whatever you type will be spaced apart.",
                "rcaps":"Toggles rcaps. When rcaps is on, each letter will randomly get capitalized.",
                "number":"Toggles number. When number is on, 'a' becomes 4, 'e' becomes 3, 's' becomes 5, 'o' becomes 0, 'l' and 'i' become 1.",
                "speech":"Turns on text to speech for the chat.",
                "echo":"Echoes a username. It copies the username's chat messages.",
                "echotext":"Sets a message when someone who is echoed chats. \"message\" will get replaced by the person's message. \"username\" will get replaced by the person's username.",
                "remove":"Removes username from echo list. You will not echo that username anymore.",
                "clearecho":"Clears echo list. You will not echo anyone anymore.",
                "chatw":"It private chats with username. Type /msg to message that username.",
                "msg":"Messages with what username you are chatting with. Type /chatw to chat with a username.",
                "ignorepm":"Ignores the username's private chat messages. To unignore, type '/ignorepm [username]'.",
                "pmusers":"Dispays who you can private chat with.",
                "pollstat":"Displays the current poll and its votes.",
                "eval":"Evaluates code. Only use this if you are experienced in javascript.",
                "debugger":"Opens debugger.",
                "lobby":"Makes lobby visible when you are ingame. Type '/lobby' again to close lobby.",
                "score":"Displays the current score while ingame. Type '/score' again to hide the score.",
                "team":"Joins a specific team. 'r' = red, 'b' = blue, 'g' = green, 'y' = yellow, and 's' = spectate.",
                "scroll":"Toggles a scrollbar in ingame chat.",
                "followcam":"Enables follow camera. Your character will be centered on the screen.",
                "zoom":"Zooms in, out, or resets zoom.",
                "xray":"Removes all shapes that don't have a shadow. This means all non-physics shapes will be hidden.",
                "aimbot":"Toggles aimbot. Aimbot will aim for you in arrows or death arrows mode.",
                "heavybot":"Enables heavy bot. Heavy bot will heavy right before collision. Turn this off when player collision is off, because heavy bot will still function.",
                "hidechat":"Hides ingame chat. Type '/showchat' to show it again.",
                "showchat":"Shows ingame chat. '/hidechat' hides the chat.",
                "notify":"You will be notified if a person types @username",
                "stopnotify":"You will not be notified if a person types @username",
                "support":"Displays many ways to support LEGENDBOSS123.",
                "startqp":"Starts cycling maps in your map menu.",
                "stopqp":"Stops cycling maps in your map menu.",
                "pauseqp":"Only pauses or unpauses the quickplay cycle due to round end. '/next', '/previous' still work. Type 'pauseqp' to unpause quickplay.",
                "next":"Skips the map. Usable only with '/startqp'.",
                "nextafter":"Skips the map if no one is able to win/draw within a certain amount of time.",
                "previous":"Goes to previous map. Usable only with '/startqp'.",
                "shuffle":"Makes quickplay play random maps instead of in order.",
                "freejoin":"Toggles freejoin. If freejoin is on, starts the game instantly if there are 1 or less players currently playing.",
                "recmode":"In quickplay, it switches mode to recommended mode, according to editor.",
                "recteam":"In quickplay, it sorts people into teams when teams are necessary.",
                "defaultmode":"Switches mode to defaultmode if there is no recmode.",
                "start":"Starts game instantly.",
                "instaqp":"Rounds will instantly start without a countdown.",
                "balanceA":"Balances everyone with balance number.",
                "moveA":"Sets everyones team. 'r' = red, 'b' = blue, 'g' = green, 'y' = yellow, and 's' = spectate.",
                "rounds":"Sets rounds to win.",
                "roundsperqp":"After that many rounds, the map will change. Normally, the map will change after 1 round.",
                "autorecord":"After a round ends, automatically records the last 15 seconds.",
                "mode":"If host, switches mode. Otherwise, it requests the host to switch mode, as long as the host has this mod.",
                "disablekeys":"If anyone presses a disabled key, they get killed. Key options: left right up down heavy special.",
                "jointext":"Chats the jointext whenever someone joins. \"username\" will get replaced by the joining person's username.",
                "wintext":"Chats the wintext whenever someone wins. \"username\" will get replaced by the winning person's username.",
                "afkkill":"If a person stays afk for that many seconds, they get automatically killed.",
                "ban":"Bans username from lobby. If they rejoin, it automatically bans.",
                "kill":"Kills the person ingame.",
                "resetpoll":"Clears the poll.",
                "addoption":"Adds the option to the poll. You can only have 4 maximum options. Type '/deloption [letter]' to remove an option.",
                "deloption":"Removes the option with that letter.",
                "startpoll":"Starts a poll that lasts for at least 10 seconds. Type '/endpoll' to end it early.",
                "endpoll":"Ends the poll early if the poll lasted for at least 10 seconds.",
                "addplayer":"In sandbox, it adds players.",
                "delplayer":"In sandbox, it deletes players.",
                "copyme":"In sandbox, it makes each player copy your movements.",
                "Alt L":"Makes lobby visible when you are ingame. Press Alt L again to close lobby.",
                "Alt C":"Hides ingame chat. Press Alt C again to show ingame chat.",
                "Alt S":"Starts game instantly.",
                "Alt T":"Toggles teams.",
                "Alt N":"Enables follow camera. Your character will be centered on the screen.",
                "Alt G":"Zooms in.",
                "Alt H":"Resets zoom.",
                "Alt J":"Zooms out.",
                "Alt Y":"Enables xray. Removes all shapes that don't have a shadow. This means all non-physics shapes will be hidden.",
                "Alt E":"Toggles editor.",
                "Alt K":"Exits ingame and returns to lobby.",
                "Alt M":"Switches modes.",
                "Alt Q":"Toggles quickplay.",
                "Alt B":"Displays the current score while ingame. Press Alt B again to hide the score.",
                "Alt A":"Skips the map if quickplay is on.",
                "Alt D":"Goes to previous map if quickplay is on.",
                "Alt F":"Toggles freejoin. If freejoin is on, starts the game instantly if there are 1 or less players currently playing.",
                "Alt O":"Enables heavy bot. Heavy bot will heavy right before collision. Turn this off when player collision is off, because heavy bot will still function.",
                "Alt P":"Only pauses or unpauses the quickplay cycle due to round end. '/next', '/previous' still work. Type 'pauseqp' to unpause quickplay.",
                "Alt R":"In quickplay, it switches mode to recommended mode, according to editor.",
                "Alt I":"Opens debugger.",
                "Alt <":"Lowers ingame chat height.",
                "Alt >":"Highers ingame chat height."
                 };
scope.displayadvhelp = function(command){
    displayInChat(adv_help[command],"#009398","#DA0808",{sanitize:true},"",true);
};
scope.changemode = function(mode){
    SEND('42[20,{"ga":"b","mo":"'+mode+'"}]');
    RECIEVE('42[26,"b","'+mode+'"]');
};
Gdocument.getElementById("ingamechatcontent").style["pointer-events"]="all";
Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
Gdocument.getElementById("ingamechatcontent").style["height"]=chatheight.toString()+"px";
Gdocument.getElementById("ingamechatbox").style["height"]="100%";

document.getElementById('adboxverticalCurse').style["display"] = "none";
document.getElementById('adboxverticalleftCurse').style["display"] = "none";
elem.onclick=function(e){
    if(stopquickplay==0 && ishost == true && e.isTrusted == true){
        quicki = (Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentNode)-1)%(Gdocument.getElementById("maploadwindowmapscontainer").children.length);
    }
};
scope.urlify = function(text) {
    if(!Gdocument.getElementById('bl_Menu')){
    return text.replace(/(?:https?:\/\/)?(?:[A-Za-z0-9-ßàÁâãóôþüúðæåïçèõöÿýòäœêëìíøùîûñé]+)(?:\.[A-Za-z0-9-ßàÁâãóôþüúðæåïçèõöÿýòäœêëìíøùîûñé]+)+(?:\/(?:[A-Za-z0-9-._~:/?#\[\]@!$&'()*+,;=]|%[0-9a-fA-F]{2})*)?(?:\?(?:[^=]+=[^&](?:&[^=]+=[^&])*)?)?/g, function(url) {
        if(url.startsWith('https://') || url.startsWith('http://')){return '<a href="' + url + '" target="_blank" style = "color:orange">' + url + '</a>';}
        else{return '<a href="https://' + url + '" target="_blank" style = "color:orange">' + url + '</a>';}
  })}return text;
};

scope.fire = function(type,options,d = Gdocument){
     var event= document.createEvent("HTMLEvents");
     event.initEvent(type,true,false);
     for(var p in options){
         event[p]=options[p];
     }
     d.dispatchEvent(event);
};

scope.chat = function(message){
    SEND('42[10,{"message":'+JSON.stringify(message)+'}]');
};
scope.chat2 = function(message,enteragain=false){
    mess = Gdocument.getElementById("newbonklobby_chat_input").value;
    mess2 = Gdocument.getElementById("ingamechatinputtext").value;
    Gdocument.getElementById("newbonklobby_chat_input").value = message;
    Gdocument.getElementById("ingamechatinputtext").value = message;
    fire("keydown",{keyCode:13});
    if(!enteragain){
        fire("keydown",{keyCode:13});
    }
    Gdocument.getElementById("newbonklobby_chat_input").value = mess;
    Gdocument.getElementById("ingamechatinputtext").value = mess2;
};
scope.displayInChat = function(message, LobbyColor, InGameColor, options, message2, BringDown) {
            options = options ?? {};
            BringDown = BringDown ?? false;
            message2 = message2 ?? "";            
            LobbyColor = LobbyColor ?? "#8800FF";
            InGameColor = InGameColor ?? "#AA88FF";
            let A = Gdocument.createElement("div");
            let B = Gdocument.createElement("span");
            B.className = "newbonklobby_chat_status";
            B.style.color = LobbyColor;
            A.appendChild(B);
            B.innerHTML = (options.sanitize ?? true) ? message.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;') : message;
            B.innerHTML+=urlify(message2.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;'));
            let C = Gdocument.createElement("div");
            let D = Gdocument.createElement("span");
            D.style.color = InGameColor;
            C.appendChild(D);
            D.innerHTML = (options.sanitize ?? true) ? message.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;') : message;
            D.innerHTML+=urlify(message2.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;'));
            let a = BringDown;
            if(Gdocument.getElementById("newbonklobby_chat_content").clientHeight + Gdocument.getElementById("newbonklobby_chat_content").scrollTop >= Gdocument.getElementById("newbonklobby_chat_content").scrollHeight-1) {
                a = true;
            }
            A.style["parsed"] = true;
            C.style["parsed"] = true;
            Gdocument.getElementById("newbonklobby_chat_content").appendChild(A);
            Gdocument.getElementById("ingamechatcontent").appendChild(C);
            if (a) { Gdocument.getElementById("newbonklobby_chat_content").scrollTop = Number.MAX_SAFE_INTEGER;};
            Gdocument.getElementById("ingamechatcontent").scrollTop = Number.MAX_SAFE_INTEGER;
            chat2("");
};

scope.lobby = function(){
    if (Gdocument.getElementById("newbonklobby").style["display"]=="none"){

        Gdocument.getElementById("newbonklobby_editorbutton").click();
        Gdocument.getElementById("mapeditor_close").click();
        if(Gdocument.getElementById("newbonklobby_playerbox_elementcontainer").children.length+Gdocument.getElementById("newbonklobby_specbox_elementcontainer").children.length-3>0){
            Gdocument.getElementById("newbonklobby").style["z-index"]=1;
            Gdocument.getElementById("maploadwindowcontainer").style["z-index"]=1;
            Gdocument.getElementById("mapeditorcontainer").style["z-index"]=1;
            Gdocument.getElementById("pretty_top").style["z-index"]=3;
            Gdocument.getElementById("settingsContainer").style["z-index"]=3;
            Gdocument.getElementById("leaveconfirmwindow").style["z-index"]=3;
            Gdocument.getElementById("hostleaveconfirmwindow").style["z-index"]=3;
            debuggermenu.style["z-index"] = 2;
        }
        else{
            Gdocument.getElementById("newbonklobby").style["opacity"]=0;
            Gdocument.getElementById("newbonklobby").style["display"]="none";
            Gdocument.getElementById("mapeditorcontainer").style["z-index"]=0;

        }

    }
    else if(Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
        Gdocument.getElementById("newbonklobby").style["opacity"]=0;
        Gdocument.getElementById("newbonklobby").style["display"]="none";
        Gdocument.getElementById("mapeditorcontainer").style["z-index"]=0;

    }
};

scope.lastmessage = function(){
    if(Gdocument.getElementById("newbonklobby_chat_content").children.length!=0){
        var lm = Gdocument.getElementById("newbonklobby_chat_content").children[Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children;
        var lm2 = "";
        for(var i = 0; i<lm.length;i++){
            lm2+="  "+lm[i].textContent.trim();
        }
        lm2 = lm2.trim();
        if(lm2.startsWith("*")){
            return lm2;
        }
    }
    if(Gdocument.getElementById("ingamechatcontent").children.length!=0){
        var lm = Gdocument.getElementById("ingamechatcontent").children[Gdocument.getElementById("ingamechatcontent").children.length-1].children;
        var lm2 = "";
        for(var i = 0; i<lm.length;i++){
            lm2+="  "+lm[i].textContent.trim();
        }
        return lm2.trim();
    }
    return "";

};
scope.map = function(e,t=timedelay){
    if(e<0){
        displayInChat("There is no previous map.","#DA0808","#1EBCC1");
        quicki = 0;
        return;
    }
    if(Gdocument.getElementById("maploadwindowmapscontainer").children[e] == undefined){
        displayInChat("Click the maps button.","#DA0808","#1EBCC1");
        return;
    }

    setTimeout(function(){if(!canceled){
                          startedinqp = true;
                          if(roundsperqp2>=roundsperqp){
                              roundsperqp2 = 0;
                          }
                          gameStartTimeStamp = Date.now();
                          Gdocument.getElementById("maploadwindowmapscontainer").children[e].click();
                          Gdocument.getElementById("newbonklobby_editorbutton").click();
                          if(recmodebool && ishost){
                              var mode = Gdocument.getElementById("mapeditor_modeselect").value;
                              if(mode == "" && defaultmode!="d"){
                                      mode = defaultmode;
                              }
                              if(mode != ""){
                                  RECIEVE('42[26,"b","'+mode+'"]');
                              }
                          }
                          var displayblock = Gdocument.getElementById("newbonklobby").style["display"] == "block";
                          Gdocument.getElementById("mapeditorcontainer").style["display"] = "none";
                          Gdocument.getElementById("newbonklobby").style["display"] = "none";
                          if(displayblock){
                              Gdocument.getElementById("newbonklobby").style["display"] = "block";
                          }
                          Gdocument.getElementById("mapeditor_midbox_testbutton").click();}
                          canceled = false;
                          transitioning = false;
                         },t);

};

scope.gotonextmap = function(e){
    if(e<0){
        displayInChat("There is no previous map.","#DA0808","#1EBCC1");
        quicki = 0;
        return;
    }
    if(Gdocument.getElementById("maploadwindowmapscontainer").children[e] == undefined){
        displayInChat("Click the maps button.","#DA0808","#1EBCC1");
        return;
    }
    Gdocument.getElementById("maploadwindowmapscontainer").children[e].click();
    Gdocument.getElementById("newbonklobby_editorbutton").click();
    if(recmodebool && ishost){
        var mode = Gdocument.getElementById("mapeditor_modeselect").value;
        if(mode == "" && defaultmode!="d"){
                mode = defaultmode;
        }
        if(mode != ""){
            RECIEVE('42[26,"b","'+mode+'"]');
        }
    }
    startedinqp = true;
    if(roundsperqp2>=roundsperqp){
        roundsperqp2 = 0;
    }
    gameStartTimeStamp = Date.now();
    var displayblock = Gdocument.getElementById("newbonklobby").style["display"] == "block";
    Gdocument.getElementById("mapeditorcontainer").style["display"] = "none";
    Gdocument.getElementById("newbonklobby").style["display"] = "none";
    if(displayblock){
        Gdocument.getElementById("newbonklobby").style["display"] = "block";
    }
    Gdocument.getElementById("mapeditor_midbox_testbutton").click();
    Gdocument.getElementById("newbonklobby").style["visibility"] = "visible";
};
scope.commandhandle = function(chat_val){
    if (chat_val.substring(1,6)=="echo " && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
        if (chat_val.substring(6).replace(/^\s+|\s+$/g, '')==username){
            displayInChat("You cannot echo yourself.","#DA0808","#1EBCC1");
            return "";
        }
        else if (echo_list.indexOf(chat_val.substring(6).replace(/^\s+|\s+$/g, ''))===-1) {

            echo_list.push(chat_val.substring(6).replace(/^\s+|\s+$/g, ''));
            displayInChat(chat_val.substring(6).replace(/^\s+|\s+$/g, '') + " is being echoed.","#DA0808","#1EBCC1");
            return "";
        }
        else{
            displayInChat(chat_val.substring(6).replace(/^\s+|\s+$/g, '') + " is already being echoed.","#DA0808","#1EBCC1");
            return "";
        }
    }
    else if (chat_val.substring(1,8)=="remove "  && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
        if (echo_list.indexOf(chat_val.substring(7).replace(/^\s+|\s+$/g, ''))!==-1){
            echo_list.splice(echo_list.indexOf(chat_val.substring(7).replace(/^\s+|\s+$/g, '')),1);
            displayInChat(chat_val.substring(7).replace(/^\s+|\s+$/g, '')+" is not being echoed.","#DA0808","#1EBCC1");
            return "";
        }
        else{
            displayInChat("You cannot remove someone that you didn't echo.","#DA0808","#1EBCC1");
            return "";
        }

    }
    else if (chat_val.substring(1,10)=="echotext "  && chat_val.replace(/^\s+|\s+$/g, '').length>=9){
        echotext = chat_val.substring(9).replace(/^\s+|\s+$/g, '');
        displayInChat("Set echotext as: "+echotext,"#DA0808","#1EBCC1");
        displayInChat("Type '/echotext' to reset echotext.","#DA0808","#1EBCC1");
        return "";

    }
    else if (chat_val.substring(1,9)=="echotext"){
        echotext = "message";
        displayInChat("Reset echotext.","#DA0808","#1EBCC1");
        return "";

    }
    else if (chat_val.substring(1,10)=="clearecho"){
        echo_list = [];
        displayInChat("Cleared the echo list.","#DA0808","#1EBCC1");
        return "";
    }
    else if (chat_val.substring(1,6)=="space"){
        if(space_flag == true){
            displayInChat("Space is now off.","#DA0808","#1EBCC1");
            space_flag = false;
        }
        else{
            displayInChat("Space is now on.","#DA0808","#1EBCC1");
            space_flag = true;
        }
        return "";
    }
    else if (chat_val.substring(1,6)=="rcaps"){
        if(rcaps_flag == true){
            displayInChat("Rcaps is now off.","#DA0808","#1EBCC1");
            rcaps_flag = false;
        }
        else{
            displayInChat("Rcaps is now on.","#DA0808","#1EBCC1");
            rcaps_flag = true;
        }

        return "";
    }
    else if (chat_val.substring(1,7)=="number"){
        if(number_flag == true){
            displayInChat("Number is now off.","#DA0808","#1EBCC1");
            number_flag = false;
        }
        else{
            displayInChat("Number is now on.","#DA0808","#1EBCC1");
            number_flag = true;
        }

        return "";
    }
    else if (chat_val.substring(1,8)=="reverse"){
        if(reverse_flag == true){
            displayInChat("Reverse is now off.","#DA0808","#1EBCC1");
            reverse_flag = false;
        }
        else{
            displayInChat("Reverse is now on.","#DA0808","#1EBCC1");
            reverse_flag = true;
        }

        return "";
    }
    else if (chat_val.substring(1,7)=="speech"){
        if(text2speech == true){
            displayInChat("Text to speech is now off.","#DA0808","#1EBCC1");
            text2speech = false;
        }
        else{
            displayInChat("Text to speech is now on.","#DA0808","#1EBCC1");
            text2speech = true;
        }

        return "";
    }
    
    else if (chat_val.substring(1,6)=="eval " && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
        var ev = "";
        try{
            ev = eval(chat_val.substring(6).replace(/^\s+|\s+$/g, ''));
        }
        catch(e){
            displayInChat(e.message,"#DA0808","#1EBCC1");
        }
        try{
            displayInChat(ev.toString(),"#DA0808","#1EBCC1");
        }
        catch{
        }

        return "";

    }
    else if (chat_val.substring(1,10)=="followcam"){
        if(FollowCam == true){
            displayInChat("Follow Camera is now off.","#DA0808","#1EBCC1");
            FollowCam = false;
            if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
                var addto = {"children":[]};
                for(var i = 0;i<parentDraw.children.length;i++){
                    if(parentDraw.children[i].constructor.name == "e"){
                        addto = parentDraw.children[i];
                        break;
                    }
                }
                var canv = 0;
                for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                    if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                        canv = Gdocument.getElementById("gamerenderer").children[i];
                        break;
                    }
                }
                var width = parseInt(canv.style["width"]);
                var height = parseInt(canv.style["height"]);
                parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                if(addto.scale.x>=0.95 && addto.scale.y>=0.95){
                    pixiCircle.visible = false;
                }
                else{
                    pixiCircle.visible = true;
                }
            }
        }
        else{
            displayInChat("Follow Camera is now on.","#DA0808","#1EBCC1");
            FollowCam = true;
        }

        return "";
    }
    else if (chat_val.substring(1,7)=="aimbot"){
        if(aimbot == true){
            displayInChat("Aimbot is now off.","#DA0808","#1EBCC1");
            aimbot = false;
        }
        else{
            displayInChat("Aimbot is now on.","#DA0808","#1EBCC1");
            aimbot = true;
            var keykeys = Object.keys(keyCodes);
            var keyslist = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[1].children).slice(1);
            var keyslist2 = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[2].children).slice(1);
            for(var i = 0;i<keyslist.length;i++){
                if(keykeys.includes(keyslist[i].textContent)){
                    leftRight[0] = keyCodes[keyslist[i].textContent];
                    break;
                }
                else{
                    leftRight[0] = keyslist[i].textContent.charCodeAt(0);
                    break
                }
            }
            for(var i = 0;i<keyslist2.length;i++){
                if(keykeys.includes(keyslist2[i].textContent)){
                    leftRight[1] = keyCodes[keyslist2[i].textContent];
                    break;
                }
                else{
                    leftRight[1] = keyslist2[i].textContent.charCodeAt(0);
                }
            }
        }

        return "";
    }
    else if (chat_val.substring(1,9)=="heavybot"){
        if(heavybot == true){
            displayInChat("Heavy bot is now off.","#DA0808","#1EBCC1");
            heavybot = false;
        }
        else{
            displayInChat("Heavy bot is now on.","#DA0808","#1EBCC1");
            heavybot = true;
            var keykeys = Object.keys(keyCodes);
            var keyslist = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[5].children).slice(1);
            for(var i = 0;i<keyslist.length;i++){
                if(keykeys.includes(keyslist[i].textContent)){
                    heavy = keyCodes[keyslist[i].textContent];
                    break;
                }
                else{
                    heavy = keyslist[i].textContent.charCodeAt(0);
                    break
                }
            }
            var keyslist2 = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[6].children).slice(1);
            for(var i = 0;i<keyslist2.length;i++){
                if(keykeys.includes(keyslist2[i].textContent)){
                    special = keyCodes[keyslist2[i].textContent];
                    break;
                }
                else{
                    special = keyslist2[i].textContent.charCodeAt(0);
                    break
                }
            }
        }

        return "";
    }
    else if (chat_val.substring(1,5)=="xray"){
        Gdocument.getElementById("pretty_top_settings").click();
        Gdocument.getElementById("settings_close").click();
        if(Gdocument.getElementById("settings_graphicsquality").value==1){
            displayInChat("You must have medium or high quality enabled to use this feature.","#DA0808","#1EBCC1");
            return "";
        }


        if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
            var addto = {"children":[]};
            for(var i = 0;i<parentDraw.children.length;i++){
                if(parentDraw.children[i].constructor.name == "e"){
                    addto = parentDraw.children[i];
                    break;
                }
            }
            var addto2 = {"children":[]};
            for(var i = 0;i<addto.children.length;i++){
                if(addto.children[i].constructor.name == "e"){
                    addto2 = addto.children[i];
                    break;
                }
            }
            var checkxray = addto2.children[0];
            var addto3 = addto2.children[0].children;
            if(addto3.length==1){
                checkxray = checkxray.children[0];
                addto3 = addto3[0].children;
            }
            var xrayon = false;
            if(checkxray.xrayon){
                checkxray.xrayon = false;
                xrayon = false;
            }
            else{
                checkxray.xrayon = true;
                xrayon = true;
            }
            if(xrayon){
                displayInChat("Xray is now on.","#DA0808","#1EBCC1");
                for(var i = 0;i<addto3.length;i++){
                    if(addto3[i].children.length>0){
                        for(var i3 = 0;i3<addto3[i].children.length;i3++){
                            addto3[i].children[i3].visible = false;
                            if(addto3[i].children[i3].children.length>0){
                                addto3[i].children[i3].visible = true;
                            }
                        }
                    }
                }

            }
            else{
                displayInChat("Xray is now off.","#DA0808","#1EBCC1");
                for(var i = 0;i<addto3.length;i++){
                    for(var i2 = 0;i2<addto3[i].children.length;i2++){
                        addto3[i].children[i2].visible = true;
                    }
                }
            }
        }

        return "";
    }
    else if (chat_val.substring(1,6)=="zoom "){
        var text = chat_val.substring(6).replace(/^\s+|\s+$/g, '');
        if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
            var addto = 0;
            for(var i = 0;i<parentDraw.children.length;i++){
                if(parentDraw.children[i].constructor.name == "e"){
                    addto = parentDraw.children[i];
                    break;
                }
            }
            var canv = 0;
            for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                    canv = Gdocument.getElementById("gamerenderer").children[i];
                    break;
                }
            }
            var width = parseInt(canv.style["width"]);
            var height = parseInt(canv.style["height"]);
            if(addto){
                if(text == "in"){
                    zoom *= 1.1;
                    zoom *= 1.1;
                }
                else if(text == "out"){
                    zoom /= 1.1;
                    zoom /= 1.1;
                }
                else if(text == "reset"){
                    zoom = 1;
                }
                else{
                    displayInChat("Options for zooming:","#DA0808","#1EBCC1");
                    displayInChat("in","#DA0808","#1EBCC1");
                    displayInChat("out","#DA0808","#1EBCC1");
                    displayInChat("reset","#DA0808","#1EBCC1");
                    return "";
                }
                addto.scale.x=zoom;
                addto.scale.y=zoom;
                parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                if(addto.scale.x>=0.95 && addto.scale.y>=0.95 && !FollowCam){
                    pixiCircle.visible = false;
                }
                else{
                    pixiCircle.visible = true;
                }
            }
        }
        return "";
    }
    else if (chat_val.substring(1,9)=="hidechat"){
        Gdocument.getElementById("ingamechatcontent").style["max-height"]="0px";
        return "";
    }
    else if (chat_val.substring(1,9)=="showchat"){
        Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
        return "";
    }
    else if (chat_val.substring(1,6)=="score"){
        var element = Gdocument.getElementById("ingamewinner_scores");
        element.style["visibility"] = "visible";
        if(element.style["opacity"]<1){
            element.style["opacity"] = 1;
        }
        else{
            element.style["opacity"] = 0;
        }
        return "";
    }

    else if (chat_val.substring(1,7)=="scroll"){
        if(scroll==false){
            scroll = true;
            Gdocument.getElementById("ingamechatcontent").style["overflow-y"]="scroll";
            Gdocument.getElementById("ingamechatcontent").style["overflow-x"]="hidden";
        }
        else if(scroll==true){
            scroll = false;
            Gdocument.getElementById("ingamechatcontent").style["overflow-y"]="hidden";
            Gdocument.getElementById("ingamechatcontent").style["overflow-x"]="hidden";
        }

        return "";
    }

    else if (chat_val.substring(1,7)=="chatw "){
        var text = chat_val.substring(7).replace(/^\s+|\s+$/g, '');

        if(username == text){
            displayInChat("You cannot private chat with yourself.","#DA0808","#1EBCC1");
            return "";
        }
        private_chat = text;

        SEND("42"+JSON.stringify([4,{"type":"request public key","from":username,"to":private_chat}]));
        request_public_key_time_stamp = Date.now();
        setTimeout(function(){if(private_chat_public_key[0]!=private_chat){displayInChat("Failed to connect to "+private_chat+".","#DA0808","#1EBCC1");private_chat = private_chat_public_key[0];}},1600);
        return "";
    }

    else if (chat_val.substring(1,5)=="msg " && chat_val.replace(/^\s+|\s+$/g, '').length>=6){
        if(private_chat_public_key[1][0] != 0 && private_chat_public_key[1][1] != 0 && private_chat_public_key[0] == private_chat){
            var text = chat_val.substring(5).replace(/^\s+|\s+$/g, '');
            var password = [];
            for(var i = 0;i<10;i++){
                password.push(Math.floor(Math.random()*100+50));
            }
            var text2 = [];
            for(var i = 0;i<text.slice(0,400).length ;i++){
                text2.push(password[i%password.length]^text.slice(0,400).charCodeAt(i));
            }
            pmlastmessage = text.slice(0,400);
            SEND("42"+JSON.stringify([4,{"type":"private chat","from":username,"to":private_chat,"public key":private_chat_public_key[1],"message":text2,"password":CRYPT_MESSAGE(private_chat_public_key[1],password)}]));
            displayInChat("> "+username+": ","#DA0808","#1EBCC1",{sanitize:false},text,false);
            Gdocument.getElementById("newbonklobby_chat_content").children[Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children[0].parentElement.style["parsed"] = true;
            Gdocument.getElementById("ingamechatcontent").children[Gdocument.getElementById("ingamechatcontent").children.length-1].children[0].parentElement.style["parsed"] = true;
            Laster_message = lastmessage();

        }
        return "";
    }
    else if (chat_val.substring(1,10)=="ignorepm " && chat_val.replace(/^\s+|\s+$/g, '').length>=11){
        var text = chat_val.substring(10).replace(/^\s+|\s+$/g, '');
        if(ignorepmlist.includes(text)){
            var index = ignorepmlist.indexOf(text);
            ignorepmlist.splice(index,1);
            displayInChat("You are not ignoring private messages from "+text+".","#DA0808","#1EBCC1");

        }
        else{
            ignorepmlist.push(text);
            displayInChat("You are now ignoring private messages from "+text+".","#DA0808","#1EBCC1");
        }
        
        return "";
    }
    else if (chat_val.substring(1,8)=="pmusers"){
        pmusers = [];
        SEND("42"+JSON.stringify([4,{"type":"request private chat users","from":username}]));
        pmuserstimestamp = Date.now();
        
        setTimeout(function(){if(pmusers.length == 0){displayInChat("You cannot private chat with anyone.","#DA0808","#1EBCC1");
}else{displayInChat("You can private chat with:","#DA0808","#1EBCC1");for(var i = 0;i<pmusers.length;i++){var code = 'Gwindow.private_chat = "'+pmusers[i]+'"; Gwindow.SEND("42"+JSON.stringify([4,{"type":"request public key","from":Gwindow.username,"to":Gwindow.private_chat}])); Gwindow.request_public_key_time_stamp = Date.now(); setTimeout(function(){if(Gwindow.private_chat_public_key[0]!=Gwindow.private_chat){Gwindow.displayInChat("Failed to connect to "+Gwindow.private_chat+".","#DA0808","#1EBCC1");Gwindow.private_chat = Gwindow.private_chat_public_key[0];}},1600);';displayInChat('<a onclick = \''+code+'\' href = "javascript:void(0);" style = "color:green">'+pmusers[i]+'</a>',"#DA0808","#1EBCC1",{sanitize:false}); Gdocument.getElementById("newbonklobby_chat_content").children[Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children[0].parentElement.style["parsed"] = true; Gdocument.getElementById("ingamechatcontent").children[Gdocument.getElementById("ingamechatcontent").children.length-1].children[0].parentElement.style["parsed"] = true; Laster_message = lastmessage(); }}},1600);
        return "";
    }
    else if (chat_val.substring(1,6)=="lobby"){
        lobby();
        return "";
    }
    else if (chat_val.substring(1,9)=="debugger"){
        if(Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"] == "none"){
            debuggeropen = true;
            Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"]="block";
            Gdocument.getElementById("newbonklobby_chat_input").style["display"]="none";
            Gdocument.getElementById("ingamechatinputtext").style["display"] = "none";
        }
        else{
            debuggeropen = false;
            Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"]="none";
            Gdocument.getElementById("newbonklobby_chat_input").style["display"]="";
            Gdocument.getElementById("ingamechatinputtext").style["display"] = "";
        }
        return "";
    }
    else if (chat_val.substring(1,6)=="team " && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
        var text = chat_val.substring(6).replace(/^\s+|\s+$/g, '');
        if(text == "r"){Gdocument.getElementById("newbonklobby_redbutton").click();}
        else if(text == "g"){Gdocument.getElementById("newbonklobby_greenbutton").click();}
        else if(text == "y"){Gdocument.getElementById("newbonklobby_yellowbutton").click();}
        else if(text == "b"){Gdocument.getElementById("newbonklobby_bluebutton").click();}
        else if(text == "s"){Gdocument.getElementById("newbonklobby_specbutton").click();}
        else if(text == "f"){Gdocument.getElementById("newbonklobby_ffabutton").click();}
        return "";
    }
    else if (chat_val.substring(1,7)=="notify"){

        npermissions = 1;
        return "";
    }
    else if (chat_val.substring(1,11)=="stopnotify"){

        npermissions = 0;
        return "";
    }
    else if (chat_val.substring(1,8)=="support"){
        displayInChat("Thanks everyone for helping me make this mod - LEGENDBOSS123","#0000FF","#FFFFFF");
        displayInChat("Join the giveaway here for a chance of winning an OP lvl 223 account:","#DA0808","#1EBCC1");
        displayInChat("","#DA0808","#1EBCC1",{},"https://newskit.social/giveaways/BonkCommands-Giveaway-Account");
        displayInChat("Get Bonk Commands Premium here:","#DA0808","#1EBCC1");
        displayInChat("","#DA0808","#1EBCC1",{},"https://myshop.rocks/products/LEGENDBOSS123_BonkCommandsPremium");
        npermissions = 0;
        return "";
    }
    else if (chat_val.substring(1,9)=="pollstat"){
        if(pollactive[0] || pollactive2[0]){
            var count = [0,0,0,0];
            var keys = Object.keys(playerids);
            for(var i = 0;i<keys.length;i++){
                if(ishost){
                    if(playerids[keys[i]].vote.poll!=-1 && playerids[keys[i]].vote.poll<pollactive[3].length-1){
                        count[playerids[keys[i]].vote.poll]++;
                    }
                }
                else{
                    if(playerids[keys[i]].vote.poll!=-1 && playerids[keys[i]].vote.poll<pollactive2[2].length-1){
                        count[playerids[keys[i]].vote.poll]++;
                    }
                }
            }
            for(var i = 0;i<count.length;i++){
                if(count[i]>1){
                    displayInChat(count[i].toString()+" people voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                }
                if(count[i]==1){
                    displayInChat(count[i].toString()+" person voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                }
            }
            if(ishost){
                displayInChat("The poll will end in: "+((pollactive[2]-Date.now())/1000).toString()+" seconds.","#DA0808","#1EBCC1");
            }
            displayInChat("The poll is:","#DA0808","#1EBCC1");
            if(ishost){
                for(var i = 0;i<pollactive[3].length;i++){
                    displayInChat(letters[i]+") "+pollactive[3][i],"#DA0808","#1EBCC1");
                }
            }
            else{
                for(var i = 0;i<pollactive2[2].length;i++){
                    displayInChat(letters[i]+") "+pollactive2[2][i],"#DA0808","#1EBCC1");
                }
            }
        }
        else{
            displayInChat("No poll has been started.","#DA0808","#1EBCC1");
            if(ishost){
                displayInChat("Type '/startpoll [seconds]' to start a poll.","#DA0808","#1EBCC1");
                if(poll.length>0){
                    displayInChat("The poll is:","#DA0808","#1EBCC1");
                    for(var i = 0;i<poll.length;i++){
                        displayInChat(letters[i]+") "+poll[i],"#DA0808","#1EBCC1");
                    }
                }
            }
        }
        return "";
    }
    else if (chat_val.substring(1,5)=="help" || chat_val.substring(1,2)=="?"){
        for(var i = 0;i<help.length;i++){
            if(help[i].startsWith("/")){
                var splitted = help[i].substring(1).split(" ");
                var command = splitted[0];
                var rest = "";
                if(splitted.length>1){
                    rest = " "+splitted.slice(1).join(" ");
                }
                displayInChat("/"+'<a onclick = \'Gwindow.displayadvhelp("'+command+'");\' style = "color:green;" href = "javascript:void(0);">'+command+'</a>'+rest,"#DA0808","#1EBCC1",{sanitize:false},"",false);   
            }
            else if(help[i].startsWith("Alt ")){
                displayInChat('<a onclick = \'Gwindow.displayadvhelp("'+help[i]+'");\' style = "color:green;" href = "javascript:void(0);">'+help[i]+'</a>',"#DA0808","#1EBCC1",{sanitize:false},"",false);   
            }
            else{
                displayInChat(help[i],"#DA0808","#1EBCC1");
            }
            

        }
        return "";
    }
    else if (chat_val.substring(1,9)=="advhelp " && chat_val.replace(/^\s+|\s+$/g, '').length>=10){
        var text = chat_val.substring(9).replace(/^\s+|\s+$/g, '');
        if(typeof(adv_help[text])!='undefined'){
            displayInChat(adv_help[text],"#DA0808","#1EBCC1");
        }
        return "";
    }
    else if (chat_val.substring(1,6)=="mode " && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
        var text = chat_val.substring(6).replace(/^\s+|\s+$/g, '');
        var mode = "";
        var text2 = text;
        if(text == "arrows"){
            text2 = "Arrows";
            mode = "ar";
        }
        else if(text == "death arrows"){
            mode = "ard";
            text2 = "Death Arrows";
        }
        else if(text == "grapple"){
            mode = "sp";
            text2 = "Grapple";
        }
        else if(text == "classic"){
            mode = "b";
            text2 = "Classic";
        }
        else{
            displayInChat("Mode options:","#DA0808","#1EBCC1");
            displayInChat("classic","#DA0808","#1EBCC1");
            displayInChat("arrows","#DA0808","#1EBCC1");
            displayInChat("death arrows","#DA0808","#1EBCC1");
            displayInChat("grapple","#DA0808","#1EBCC1");
        }
        if(mode != ""){
            if(ishost){
                SEND('42[20,{"ga":"b","mo":"'+mode+'"}]');
                RECIEVE('42[26,"b","'+mode+'"]');
                displayInChat("Changed mode to "+text+".","#DA0808","#1EBCC1");
            }
            else{
                if(playerids[myid].ratelimit.mode+1000<Date.now()){
                    playerids[myid].ratelimit.mode=Date.now();
                    SEND("42"+JSON.stringify([4,{"type":"request mode","from":username,"mode":mode}]));
                    var code = 'if(!Gwindow.ishost){Gwindow.displayInChat("You must be host to change the mode.","#DA0808","#1EBCC1",{sanitize:false},"",true)}else{Gwindow.changemode("'+mode+'")}';        
                    displayInChat('> '+username+' requests [<a onclick = \''+code+'\' style = "color:green;" href = "javascript:void(0);">'+text2+'</a>]',"#DA0808","#1EBCC1",{sanitize:false}," mode.");

                }
                else{
                    displayInChat("You are requesting modes too quickly.","#DA0808","#1EBCC1");
                }
            }
        }
        return "";

    }
    else if(ishost){
        if (chat_val.substring(1,11)=="nextafter " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
            var text = parseFloat(chat_val.substring(11).replace(/^\s+|\s+$/g, ''));
            if(isNaN(text)){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            else if(text<=0){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            nextafter = text;
            displayInChat("Set next after to: " + text.toString()+" seconds.","#DA0808","#1EBCC1");
            displayInChat("Type '/nextafter' to reset next after.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,10)=="nextafter"){
            nextafter = 0;
            displayInChat("Reset next after.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,5)=="next" && stopquickplay == 0){
            roundsperqp2 = 0;
            if(shuffle){
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){

                    if(availableindexes.length!=1){
                        availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                    }
                    quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                }
            }
            else{
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){
                    var above = [];
                    for(var i = 0;i<availableindexes.length;i++){
                        if(availableindexes[i]>quicki){
                            above.push(availableindexes[i]);   
                        }
                    }
                    if(above.length>0){
                        quicki = above[0];
                    }
                    else{
                        quicki = availableindexes[0];
                    }
                }
            }
            gotonextmap(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length));
            displayInChat("Switched to next map.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,9)=="freejoin"){
            if(freejoin == false){
                freejoin = true;
                displayInChat("Freejoin is now on.","#DA0808","#1EBCC1");

            }
            else{
                freejoin = false;
                displayInChat("Freejoin is now off.","#DA0808","#1EBCC1");
            }

            return "";

        }
        else if (chat_val.substring(1,8)=="instaqp"){
            if(instaqp == false){
                instaqp = true;
                displayInChat("Instaqp is now on.","#DA0808","#1EBCC1");

            }
            else{
                instaqp = false;
                displayInChat("Instaqp is now off.","#DA0808","#1EBCC1");
            }

            return "";

        }

        else if (chat_val.substring(1,9)=="previous" && stopquickplay == 0){
            roundsperqp2 = 0;
            if(shuffle){
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){

                    if(availableindexes.length!=1){
                        availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                    }
                    quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                }
            }
            else{
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){
                    var above = [];
                    for(var i = 0;i<availableindexes.length;i++){
                        if(availableindexes[i]<quicki){
                            above.push(availableindexes[i]);   
                        }
                    }
                    if(above.length>0){
                        quicki = above[above.length-1];
                    }
                    else{
                        quicki = availableindexes[availableindexes.length-1];
                    }
                }
            }
            gotonextmap(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length));

            displayInChat("Switched to previous map.","#DA0808","#1EBCC1");
            return "";
        }
        else if (chat_val.substring(1,6)=="start" && chat_val.length == 6){
            Gdocument.getElementById("newbonklobby_editorbutton").click();
            if(recmodebool && ishost){
                var mode = Gdocument.getElementById("mapeditor_modeselect").value;
                if(mode == "" && defaultmode!="d"){
                        mode = defaultmode;
                }
                if(mode != ""){
                    RECIEVE('42[26,"b","'+mode+'"]');
                }
            }
            Gdocument.getElementById("mapeditor_close").click();
            Gdocument.getElementById("newbonklobby").style["display"] = "none";
            roundsperqp2 = 0;
            Gdocument.getElementById("mapeditor_midbox_testbutton").click();

            return "";
        }

        else if (chat_val.substring(1,8)=="startqp" && stopquickplay == 1){
            stopquickplay = 0;
            quicki = 0;
            qppaused = false;
            displayInChat("Enabled quickplay.","#DA0808","#1EBCC1");
            return "";
        }
        else if (chat_val.substring(1,7)=="stopqp" && stopquickplay == 0){
            stopquickplay = 1;
            quicki = 0;
            qppaused = false;
            displayInChat("Disabled quickplay.","#DA0808","#1EBCC1");
            return "";
        }
        else if (chat_val.substring(1,8)=="pauseqp" && stopquickplay == 0){
            if(qppaused == false){
                qppaused = true;
                displayInChat("Paused quickplay.","#DA0808","#1EBCC1");
            }
            else{
                qppaused = false;
                displayInChat("Unpaused quickplay.","#DA0808","#1EBCC1");
            }
            return "";
        }

        else if (chat_val.substring(1,5)=="ban " && chat_val.replace(/^\s+|\s+$/g, '').length>=6){
            banned.push(chat_val.substring(5).replace(/^\s+|\s+$/g, ''));
            displayInChat("Banned "+chat_val.substring(5).replace(/^\s+|\s+$/g, '')+".","#DA0808","#1EBCC1");
            return "/kick '" + chat_val.substring(5).replace(/^\s+|\s+$/g, '') + "'";
        }
        else if (chat_val.substring(1,6)=="kill " && chat_val.replace(/^\s+|\s+$/g, '').length>=7){
            var text = chat_val.substring(6).replace(/^\s+|\s+$/g, '');
            var keys = Object.keys(playerids);
            var killid = undefined;
            for(var i = 0; i<keys.length; i++){
                if(playerids[keys[i]].userName == text){
                    killid = keys[i];
                }
            }
            if(typeof(killid)!="undefined" && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden" && !killedids.includes(killid)){
                currentFrame = Math.floor((Date.now() - gameStartTimeStamp)/1000*30);
                
                killedids.push(killid);
                SEND('42[25,{"a":{"playersLeft":['+killid.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                RECIEVE('42[31,{"a":{"playersLeft":['+killid.toString()+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
            }
            
            return "";
        }
        else if (chat_val.substring(1,10)=="balanceA " && chat_val.replace(/^\s+|\s+$/g, '').length>=11){
            var text = chat_val.substring(10).replace(/^\s+|\s+$/g, '');
            if(!isNaN(parseInt(text))){
                if(parseInt(text)>=-100 && parseInt(text)<=100){
                    var keys = Object.keys(playerids);
                    for(var i = 0; i<keys.length;i++){
                        SEND('42[29,{"sid":'+keys[i]+',"bal":'+text+'}]');
                        RECIEVE('42[36,'+keys[i]+','+text+']');
                    }
                }
            }
            return "";

        }
        else if (chat_val.substring(1,10)=="resetpoll"){
            poll = [];
            displayInChat("The poll has been reset.","#DA0808","#1EBCC1");
            return "";
        }
        else if (chat_val.substring(1,11)=="addoption " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
            var text = chat_val.substring(11).replace(/^\s+|\s+$/g, '');
            if(text.length>50){
                displayInChat("Your option is greater than 50 characters.","#DA0808","#1EBCC1");
                return "";
            }
            if(poll.includes(text)){
                displayInChat("This option already exists.","#DA0808","#1EBCC1");
            }
            else if(poll.length>=4){
                displayInChat("Your poll already has the max 4 amounts of options.","#DA0808","#1EBCC1");
                displayInChat("Type '/deloption [letter]' to remove a option.","#DA0808","#1EBCC1");
                displayInChat("The poll is:","#DA0808","#1EBCC1");
                for(var i = 0;i<poll.length;i++){
                    displayInChat(letters[i]+") "+poll[i],"#DA0808","#1EBCC1");
                }
            }
            else{
                poll.push(text);
                displayInChat("The poll is now:","#DA0808","#1EBCC1");
                for(var i = 0;i<poll.length;i++){
                    displayInChat(letters[i]+") "+poll[i],"#DA0808","#1EBCC1");
                }
            }
            return "";
        }
        else if (chat_val.substring(1,11)=="deloption " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
            var text = letters.indexOf(chat_val.substring(11).replace(/^\s+|\s+$/g, ''));
            if(text==-1 || text>=poll.length){
                if(poll.length>0){
                    displayInChat("Available options are:","#DA0808","#1EBCC1");
                    for(var i = 0;i<poll.length;i++){
                        displayInChat(letters[i],"#DA0808","#1EBCC1");
                    }
                }
                else{
                    displayInChat("Your poll is empty.","#DA0808","#1EBCC1");
                    displayInChat("Type '/addoption [text]' to add an option.","#DA0808","#1EBCC1");
                }
            }
            else{
                poll.splice(text,1);
                displayInChat("The poll is now:","#DA0808","#1EBCC1");
                for(var i = 0;i<poll.length;i++){
                    displayInChat(letters[i]+") "+poll[i],"#DA0808","#1EBCC1");
                }
            }
            return "";
        }
        else if (chat_val.substring(1,11)=="startpoll " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
            var text = parseFloat(chat_val.substring(11).replace(/^\s+|\s+$/g, ''));
            if(isNaN(text)){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            else if(text<=0){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            else if(text<10){
                displayInChat("Your poll has to last for at least 10 seconds.","#DA0808","#1EBCC1");
                return "";
            }
            if(pollactive[0]){
                displayInChat("There is already an ongoing poll.","#DA0808","#1EBCC1");
                displayInChat("Type '/endpoll' to end the poll.","#DA0808","#1EBCC1");
                return "";
            }
            if(poll.length<2){
                displayInChat("Your poll needs at least 2 options.","#DA0808","#1EBCC1");
                displayInChat("Type '/addoption' to add to the poll.","#DA0808","#1EBCC1");
                return "";
            }
            
            var now = Date.now();
            pollactive = [true,now,now+text*1000,[...poll]];
            playerids[myid].ratelimit.poll = now;
            var chatpoll = [...poll];
            chatpoll.push("Cancel vote.");
            pollactive[3].push("Cancel vote.");
            for(var i = 0;i<chatpoll.length;i++){
                chatpoll[i] = letters[i]+") "+chatpoll[i];
            }
            chat(chatpoll.join("     "));
            setTimeout(function(){
                if(pollactive[0]){
                    SEND("42"+JSON.stringify([4,{"type":"poll","from":username,"poll":pollactive[3]}]));
                    var keys = Object.keys(playerids);
                    for(var i = 0;i<keys.length;i++){
                        playerids[keys[i]].vote.poll = -1;
                    }
                    displayInChat("The poll will end in: " + text.toString()+" seconds.","#DA0808","#1EBCC1");
                    displayInChat("Type '/endpoll' to end the poll early.","#DA0808","#1EBCC1");
                }
            },200);
            return "";
        }
        else if (chat_val.substring(1,8)=="endpoll"){
            if(pollactive[0]){
                if(playerids[myid].ratelimit.poll+10000>Date.now()){
                    displayInChat("Your poll has to be at least 10 seconds.","#DA0808","#1EBCC1");
                    displayInChat("There are "+((playerids[myid].ratelimit.poll+10000-Date.now())/1000).toString()+" seconds left until you can end the poll early.","#DA0808","#1EBCC1");
                    return "";
                }
                playerids[myid].ratelimit.poll = Date.now();
                SEND("42"+JSON.stringify([4,{"type":"poll end","from":username}]));
                displayInChat("The poll ended.","#DA0808","#1EBCC1");
                var count = [0,0,0,0];
                var keys = Object.keys(playerids);
                for(var i = 0;i<keys.length;i++){
                    if(playerids[keys[i]].vote.poll!=-1 && playerids[keys[i]].vote.poll<pollactive[3].length-1){
                        count[playerids[keys[i]].vote.poll]++;
                    }
                    playerids[keys[i]].vote.poll = -1;
                }
                for(var i = 0;i<count.length;i++){
                    if(count[i]>1){
                        displayInChat(count[i].toString()+" people voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                    }
                    if(count[i]==1){
                        displayInChat(count[i].toString()+" person voted for option "+letters[i]+".","#DA0808","#1EBCC1");
                    }
                }
                displayInChat("The poll was:","#DA0808","#1EBCC1");
                for(var i = 0;i<pollactive[3].length;i++){
                    displayInChat(letters[i]+") "+pollactive[3][i],"#DA0808","#1EBCC1");
                }
                pollactive = [false,0,0,[]];
            }
            else{
                displayInChat("No poll has been started","#DA0808","#1EBCC1");
                displayInChat("Type '/startpoll [seconds]' to start a poll.","#DA0808","#1EBCC1");
            }
            return "";
        }
        else if (chat_val.substring(1,7)=="moveA " && chat_val.replace(/^\s+|\s+$/g, '').length>=8){
            var text = chat_val.substring(7).replace(/^\s+|\s+$/g, '');
            var keys = Object.keys(playerids);
            if(text == "f"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":1}]')
                }
            }
            else if(text == "b"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":3}]')
                }
            }
            else if(text == "g"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":4}]')
                }
            }
            else if(text == "r"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":2}]')
                }
            }
            else if(text == "y"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":5}]')
                }
            }
            else if(text == "s"){
                for(var i = 0; i<keys.length;i++){
                    SEND('42[26,{"targetID":'+keys[i]+',"targetTeam":0}]')
                }
            }
            
            return "";
        }
        if (chat_val.substring(1,13)=="roundsperqp " && chat_val.replace(/^\s+|\s+$/g, '').length>=14){
            var text = parseInt(chat_val.substring(13).replace(/^\s+|\s+$/g, ''));
            if(isNaN(text)){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            else if(text<=0){
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                return "";
            }
            roundsperqp = text;
            roundsperqp2 = 0;
            displayInChat("Set rounds per quickplay to: " + text.toString(),"#DA0808","#1EBCC1");
            displayInChat("Type '/roundsperqp' to reset rounds per quickplay.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,12)=="roundsperqp"){
            roundsperqp = 1;
            roundsperqp2 = 0; 
            displayInChat("Reset rounds per quickplay.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,8)=="rounds " && chat_val.replace(/^\s+|\s+$/g, '').length>=9){
            var text = chat_val.substring(8).replace(/^\s+|\s+$/g, '');
            if(!isNaN(parseInt(text))){
                text = parseInt(text).toString();
                SEND('42[21,{"w":'+text+'}]');
                RECIEVE('42[27,'+text+']');
            }
            return "";

        }
        else if (chat_val.substring(1,13)=="disablekeys " && chat_val.replace(/^\s+|\s+$/g, '').length>=14){
            var text = chat_val.substring(13).replace(/^\s+|\s+$/g, '');
            var keys = text.split(" ");
            var disabledkeys2 = [];
            var possiblekeys = ["left","right","up","down","heavy","special"];
            for(var i = 0; i<keys.length; i++){
                if(keys[i]!="" && !disabledkeys2.includes(keys[i])){
                    if(possiblekeys.includes(keys[i])){
                        disabledkeys2.push(keys[i]);
                    }
                    else{
                        displayInChat("Key options: " + possiblekeys.join(" ") + ".","#DA0808","#1EBCC1");
                        return "";
                    }
                }
            
            }
            disabledkeys = disabledkeys2;
            displayInChat("Set disabled keys to: " + disabledkeys.join(" ") + ".","#DA0808","#1EBCC1");
            displayInChat("Type '/disablekeys' to reset disabled keys.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,12)=="disablekeys"){
            displayInChat("Reset disabled keys.","#DA0808","#1EBCC1");
            disabledkeys = [];
            return "";

        }
        else if (chat_val.substring(1,10)=="jointext " && chat_val.replace(/^\s+|\s+$/g, '').length>=11){
            jointext = chat_val.substring(10).replace(/^\s+|\s+$/g, '');
            displayInChat("Set jointext to: " + jointext,"#DA0808","#1EBCC1");
            displayInChat("Type '/jointext' to reset jointext.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,9)=="jointext"){
            jointext = "";
            displayInChat("Reset jointext.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,9)=="wintext " && chat_val.replace(/^\s+|\s+$/g, '').length>=10){
            wintext = chat_val.substring(9).replace(/^\s+|\s+$/g, '');
            displayInChat("Set wintext to: " + wintext,"#DA0808","#1EBCC1");
            displayInChat("Type '/wintext' to reset wintext.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,8)=="wintext"){
            wintext = "";
            displayInChat("Reset wintext.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,11)=="autorecord"){
            if(autorecord){
                autorecord = false;
                displayInChat("Autorecord is now off.","#DA0808","#1EBCC1");
            }
            else{
                autorecord = true;
                displayInChat("Autorecord is now on.","#DA0808","#1EBCC1");
            }            
            return "";

        }
        else if (chat_val.substring(1,9)=="afkkill " && chat_val.replace(/^\s+|\s+$/g, '').length>=10){
            var text = parseFloat(chat_val.substring(9).replace(/^\s+|\s+$/g, ''));
            if(!isNaN(text)){
                if(text>0){
                    displayInChat("Set afk kill to: " + text.toString()+" seconds.","#DA0808","#1EBCC1");
                    displayInChat("Type '/afkkill' to reset afk kill.","#DA0808","#1EBCC1");
                    var keys = Object.keys(playerids);
                    var now = Date.now();
                    for(var i = 0;i<keys.length;i++){
                        playerids[keys[i]].lastmove = now;
                    }
                    afkkill = text;
                }
                else{
                     displayInChat("Type a positive number.","#DA0808","#1EBCC1");
                }
            }
            else{
                displayInChat("Type a positive number.","#DA0808","#1EBCC1");
            }
            return "";

        }
        else if (chat_val.substring(1,9)=="afkkill"){
            afkkill = -1;
            displayInChat("Reset afk kill.","#DA0808","#1EBCC1");
            return "";

        }
        else if (chat_val.substring(1,13)=="defaultmode " && chat_val.replace(/^\s+|\s+$/g, '').length>=14){
            var text = chat_val.substring(13).replace(/^\s+|\s+$/g, '');
            if(text == "default"){
                defaultmode = "";
                displayInChat("Changed default mode to default.","#DA0808","#1EBCC1");
            }
            else if(text == "arrows"){
                defaultmode = "ar";
                displayInChat("Changed default mode to arrows.","#DA0808","#1EBCC1");
            }
            else if(text == "death arrows"){
                defaultmode = "ard";
                displayInChat("Changed default mode to death arrows.","#DA0808","#1EBCC1");
            }
            else if(text == "grapple"){
                defaultmode = "sp";
                displayInChat("Changed default mode to grapple.","#DA0808","#1EBCC1");
            }
            else if(text == "classic"){
                defaultmode = "b";
                displayInChat("Changed default mode to classic.","#DA0808","#1EBCC1");

            }
            else{
                displayInChat("Default mode options:","#DA0808","#1EBCC1");
                displayInChat("default","#DA0808","#1EBCC1");
                displayInChat("classic","#DA0808","#1EBCC1");
                displayInChat("arrows","#DA0808","#1EBCC1");
                displayInChat("death arrows","#DA0808","#1EBCC1");
                displayInChat("grapple","#DA0808","#1EBCC1");
            }
            return "";

        }
        else if (chat_val.substring(1,8)=="recmode"){
            if(recmodebool == true){
                recmodebool = false;
                displayInChat("Recmode is now off.","#DA0808","#1EBCC1");

            }
            else{
                recmodebool = true;
                displayInChat("Recmode is now on.","#DA0808","#1EBCC1");

            }

            return "";

        }
        else if (chat_val.substring(1,8)=="recteam"){
            if(recteams == true){
                recteams = false;
                displayInChat("Recteam is now off.","#DA0808","#1EBCC1");

            }
            else{
                recteams = true;
                displayInChat("Recteam is now on.","#DA0808","#1EBCC1");

            }
            return "";
        }
        else if (chat_val.substring(1,8)=="shuffle"){
            if(shuffle == true){
                shuffle = false;
                displayInChat("Shuffle is now off.","#DA0808","#1EBCC1");

            }
            else{
                shuffle = true;
                displayInChat("Shuffle is now on.","#DA0808","#1EBCC1");

            }

            return "";

        }
        
        else if(sandboxon){
            if (chat_val.substring(1,11)=="addplayer " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
                var text = chat_val.substring(11).replace(/^\s+|\s+$/g, '');
                if(!isNaN(parseInt(text))){
                    var text2 = parseInt(text);
                    if(text2>0){
                        for(var i = 0;i<text2;i++){
                            RECIEVE('42[4,'+sandboxid+',"0123456789abcdef","'+sandboxid.toString()+'",true,0,1,{"layers":[],"bc":'+Math.floor(Math.random() * 16777215).toString()+'}]');
                            sandboxplayerids[sandboxid] = sandboxid.toString();
                            sandboxid+=1;
                        }

                    }
                }
                return "";

            }
            else if (chat_val.substring(1,11)=="delplayer " && chat_val.replace(/^\s+|\s+$/g, '').length>=12){
                var text = chat_val.substring(11).replace(/^\s+|\s+$/g, '');
                if(!isNaN(parseInt(text))){
                    var text2 = parseInt(text);
                    if(text2>0){
                        if(Gdocument.getElementById("gamerenderer").style["visibility"] == "hidden"){
                            var jsonkeys = Object.keys(sandboxplayerids).reverse();
                            for(var i = 0;i<text2 && i<jsonkeys.length;i++){
                                RECIEVE('42[5,'+jsonkeys[i]+',0]');
                                delete sandboxplayerids[jsonkeys[i]];
                            }
                        }
                        else{
                            displayInChat("Cannot delete players while ingame.","#DA0808","#1EBCC1");
                        }

                    }
                }
                return "";
            }
            else if (chat_val.substring(1,7)=="copyme"){
                if(sandboxcopyme == true){
                    displayInChat("Copyme is now off.","#DA0808","#1EBCC1");
                    sandboxcopyme = false;
                }
                else{
                    displayInChat("Copyme is now on.","#DA0808","#1EBCC1");
                    sandboxcopyme = true;
                }

                return "";
            }
        }
    }
    return chat_val;
};

scope.flag_manage = function(t){
    var text = t;
    if(reverse_flag == true){
        text = text.split("").reverse().join("")
    }
    if(rcaps_flag == true){
        text = text.split('');
        for(var i = 0; i<text.length;i++){
            if(Math.floor(Math.random()*2)){
                text[i] = text[i].toUpperCase();
            }
            else{
                text[i] = text[i].toLowerCase();
            }
        }
        text = text.join('');
    }
    if(space_flag == true){
        text = text.split('').join(' ')
    }
    if(number_flag == true){
        text = text.replace(/[t|T][Oo]+/g,"2");
        text = text.replace(/[f|F][o|O][r|R]/g,"4");
        text = text.replace(/[a|A][t|T][e|E]/g,"8");
        text = text.replace(/[e|E]/g,"3");
        text = text.replace(/[a|A]/g,"4");
        text = text.replace(/[o|O]/g,"0");
        text = text.replace(/[s|S]/g,"5");
        text = text.replace(/[i|I|l|L]/g,"1");
    }
    return text;
};
Gdocument.getElementById("newbonklobby_chat_input").onkeydown = function(e){
    if(e.keyCode==13){

        var chat_val = Gdocument.getElementById("newbonklobby_chat_input").value;

        if (chat_val!="" && chat_val[0]=="/"){

            Gdocument.getElementById("newbonklobby_chat_input").value = "";
            chat2(commandhandle(chat_val));
        }
        else{
            Gdocument.getElementById("newbonklobby_chat_input").value = "";
            chat2(flag_manage(chat_val));
        }

    }
};
Gdocument.getElementById("ingamechatinputtext").onkeydown = function(e){
    if(e.keyCode==13){

        var chat_val = Gdocument.getElementById("ingamechatinputtext").value;

        if (chat_val!="" && chat_val[0]=="/"){

            Gdocument.getElementById("ingamechatinputtext").value = "";
            chat2(commandhandle(chat_val));
        }
        else{
            Gdocument.getElementById("ingamechatinputtext").value = "";
            chat2(flag_manage(chat_val));
        }
    }
};
scope.Last_message = "";
scope.Laster_message = "";
scope.new_message = false;
scope.changed_chat = false;
scope.injectedBonkCommandsScript = setInterval(timeout123,30);

    
scope.hotkeys = function(e){
    
    
    var keycode = e.code;
    if(e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey){
        if(keycode == "Period"){
            if(Gdocument.getElementById("ingamechatcontent").style["max-height"]!="0px"){
                chatheight+=5;
                if(chatheight>600){chatheight = 600;}
                Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
                Gdocument.getElementById("ingamechatcontent").style["height"]=chatheight.toString()+"px";
                Gdocument.getElementById("ingamechatbox").style["height"]="100%";
            }
            e.preventDefault();
        }
        if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
            if(keycode == "KeyG"){
                var addto = 0;
                for(var i = 0;i<parentDraw.children.length;i++){
                    if(parentDraw.children[i].constructor.name == "e"){
                        addto = parentDraw.children[i];
                        break;
                    }
                }
                var canv = 0;
                for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                    if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                        canv = Gdocument.getElementById("gamerenderer").children[i];
                        break;
                    }
                }
                var width = parseInt(canv.style["width"]);
                var height = parseInt(canv.style["height"]);
                if(addto){
                    zoom *= 1.1;
                    zoom *= 1.1;
                }
                addto.scale.x = zoom;
                addto.scale.y = zoom;
                parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                if(addto.scale.x>=0.95 && addto.scale.y>=0.95 && !FollowCam){
                    pixiCircle.visible = false;
                }
                else{
                    pixiCircle.visible = true;
                }
                e.preventDefault();
            }
            if(keycode == "KeyH"){
                var addto = 0;
                for(var i = 0;i<parentDraw.children.length;i++){
                    if(parentDraw.children[i].constructor.name == "e"){
                        addto = parentDraw.children[i];
                        break;
                    }
                }
                var canv = 0;
                for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                    if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                        canv = Gdocument.getElementById("gamerenderer").children[i];
                        break;
                    }
                }
                var width = parseInt(canv.style["width"]);
                var height = parseInt(canv.style["height"]);
                if(addto){
                    zoom = 1;
                }
                addto.scale.x = zoom;
                addto.scale.y = zoom;
                parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                if(addto.scale.x>=0.95 && addto.scale.y>=0.95 && !FollowCam){
                    pixiCircle.visible = false;
                }
                else{
                    pixiCircle.visible = true;
                }
                e.preventDefault();
            }
            if(keycode == "KeyJ"){
                var addto = 0;
                for(var i = 0;i<parentDraw.children.length;i++){
                    if(parentDraw.children[i].constructor.name == "e"){
                        addto = parentDraw.children[i];
                        break;
                    }
                }
                var canv = 0;
                for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                    if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                        canv = Gdocument.getElementById("gamerenderer").children[i];
                        break;
                    }
                }
                var width = parseInt(canv.style["width"]);
                var height = parseInt(canv.style["height"]);
                if(addto){
                    zoom /= 1.1;
                    zoom /= 1.1;
                }
                addto.scale.x = zoom;
                addto.scale.y = zoom;
                parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                if(addto.scale.x>=0.95 && addto.scale.y>=0.95 && !FollowCam){
                    pixiCircle.visible = false;
                }
                else{
                    pixiCircle.visible = true;
                }
                e.preventDefault();
            }
        }
        if(keycode == "Comma"){
            if(Gdocument.getElementById("ingamechatcontent").style["max-height"]!="0px"){
                chatheight-=5;
                if(chatheight<100){chatheight = 100;}
                Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
                Gdocument.getElementById("ingamechatcontent").style["height"]=chatheight.toString()+"px";
                Gdocument.getElementById("ingamechatbox").style["height"]="100%";
            }
            e.preventDefault();
        }
    }
    if(e.repeat){return;}
    
    if(e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey){
        if(ishost){
            if(keycode == "KeyE"){
                if(Gdocument.getElementById("newbonklobby").style["display"] == "block"){
                    Gdocument.getElementById("newbonklobby_editorbutton").click();
                }
                else if(Gdocument.getElementById("mapeditorcontainer").style["display"] == "block"){
                    Gdocument.getElementById("mapeditor_close").click();
                }
                e.preventDefault();

            }
            else if(keycode == "KeyT"){
                Gdocument.getElementById("newbonklobby_teamsbutton").click();
                e.preventDefault();
            }
            else if(keycode == "KeyM"){
                Gdocument.getElementById("newbonklobby_modebutton").click();
                e.preventDefault();
            }
            else if(keycode == "KeyK"){
                if(Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
                    Gdocument.getElementById("pretty_top_exit").click();
                }
                e.preventDefault();
            }
            else if(keycode == "KeyS"){
                Gdocument.getElementById("newbonklobby_editorbutton").click();
                if(recmodebool && ishost){
                    var mode = Gdocument.getElementById("mapeditor_modeselect").value;
                    if(mode == "" && defaultmode!="d"){
                            mode = defaultmode;
                    }
                    if(mode != ""){
                        RECIEVE('42[26,"b","'+mode+'"]');
                    }
                }
                Gdocument.getElementById("mapeditor_close").click();
                Gdocument.getElementById("newbonklobby").style["display"] = "none";
                roundsperqp2 = 0;
                Gdocument.getElementById("mapeditor_midbox_testbutton").click();
                e.preventDefault();
            }
            else if(keycode == "KeyD"){
                roundsperqp2 = 0;
                if(stopquickplay == 0){
                    if(shuffle){
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){

                            if(availableindexes.length!=1){
                                availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                            }
                            quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                        }
                    }
                    else{
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){
                            var above = [];
                            for(var i = 0;i<availableindexes.length;i++){
                                if(availableindexes[i]>quicki){
                                    above.push(availableindexes[i]);   
                                }
                            }
                            if(above.length>0){
                                quicki = above[0];
                            }
                            else{
                                quicki = availableindexes[0];
                            }
                        }
                    }
                    gotonextmap(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length));
                }
                e.preventDefault();
            }
            else if(keycode == "KeyA"){
                if(stopquickplay == 0){
                    roundsperqp2 = 0;
                    if(shuffle){
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){

                            if(availableindexes.length!=1){
                                availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                            }
                            quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                        }
                    }
                    else{
                        var e2 = Gdocument.getElementById("maploadwindowmapscontainer").children;
                        var available = [];
                        var availableindexes = [];
                        var notempty = false;
                        for(var i = 0; i<e2.length;i++){
                            var a = false;
                            [...e2[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                            available.push(a);
                            if(a){
                                availableindexes.push(i);
                                notempty = true;
                            }
                        }
                        if(notempty){
                            var above = [];
                            for(var i = 0;i<availableindexes.length;i++){
                                if(availableindexes[i]<quicki){
                                    above.push(availableindexes[i]);   
                                }
                            }
                            if(above.length>0){
                                quicki = above[above.length-1];
                            }
                            else{
                                quicki = availableindexes[availableindexes.length-1];
                            }
                        }
                    }
                    gotonextmap(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length));
                }
                e.preventDefault();
            }
            else if(keycode == "KeyQ"){
                if(stopquickplay == 1){
                    stopquickplay = 0;
                    quicki = 0;
                    qppaused = false;
                    displayInChat("Enabled quickplay.","#DA0808","#1EBCC1");
                }
                else{
                    stopquickplay = 1;
                    quicki = 0;
                    qppaused = false;
                    displayInChat("Disabled quickplay.","#DA0808","#1EBCC1");
                }
                e.preventDefault();
            }
            else if(keycode == "KeyP" && stopquickplay==0){
                if(qppaused == true){
                    qppaused = false;
                    displayInChat("Unpaused quickplay.","#DA0808","#1EBCC1");
                }
                else{
                    qppaused = true;
                    displayInChat("Paused quickplay.","#DA0808","#1EBCC1");
                }
                e.preventDefault();
            }
            else if(keycode == "KeyR"){
                if(recmodebool == true){
                    recmodebool = false;
                    displayInChat("Recmode is now off.","#DA0808","#1EBCC1");

                }
                else{
                    recmodebool = true;
                    displayInChat("Recmode is now on.","#DA0808","#1EBCC1");

                }
            }
            else if(keycode == "KeyF"){
                if(freejoin == false){
                    freejoin = true;
                    displayInChat("Freejoin is now on.","#DA0808","#1EBCC1");

                }
                else{
                    freejoin = false;
                    displayInChat("Freejoin is now off.","#DA0808","#1EBCC1");
                }
                e.preventDefault();
            }
            
        }
        else{
            if(keycode == "KeyE"){
                e.preventDefault();
            }
            else if(keycode == "KeyT"){
                e.preventDefault();
            }
            else if(keycode == "KeyM"){
                e.preventDefault();
            }
            else if(keycode == "KeyK"){
                e.preventDefault();
            }
            else if(keycode == "KeyS"){
                e.preventDefault();
            }
            else if(keycode == "KeyD"){
                e.preventDefault();
            }
            else if(keycode == "KeyA"){
                e.preventDefault();
            }
            else if(keycode == "KeyQ"){
                e.preventDefault();
            }
            else if(keycode == "KeyP"){
                e.preventDefault();
            }
            else if(keycode == "KeyF"){
                e.preventDefault();
            }
            else if(keycode == "KeyR"){
                e.preventDefault();
            }

        }
        
        if(keycode == "KeyL"){
            lobby();
            e.preventDefault();
        }
        if(keycode == "KeyC"){
            if(Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
                if(Gdocument.getElementById("ingamechatcontent").style["max-height"]=="0px"){
                    Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
                }
                else{
                    Gdocument.getElementById("ingamechatcontent").style["max-height"]="0px";
                }
            }
            e.preventDefault();
        }
        if(keycode == "KeyI"){
            if(Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"] == "none"){
                debuggeropen = true;
                Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"]="block";
                Gdocument.getElementById("newbonklobby_chat_input").style["display"]="none";
                Gdocument.getElementById("ingamechatinputtext").style["display"] = "none";
            }
            else{
                debuggeropen = false;
                Gdocument.getElementById("BonkCommandsDebuggerContainer").style["display"]="none";
                Gdocument.getElementById("newbonklobby_chat_input").style["display"]="";
                Gdocument.getElementById("ingamechatinputtext").style["display"] = "";
            }
            e.preventDefault();
        }
        if(keycode == "KeyB"){
            var element = Gdocument.getElementById("ingamewinner_scores");
            element.style["visibility"] = "visible";
            if(element.style["opacity"]<1){
                element.style["opacity"] = 1;
            }
            else{
                element.style["opacity"] = 0;
            }
            e.preventDefault();
        }
        if(keycode == "KeyY"){
            Gdocument.getElementById("pretty_top_settings").click();
            Gdocument.getElementById("settings_close").click();
            if(Gdocument.getElementById("settings_graphicsquality").value==1){
                displayInChat("You must have medium or high quality enabled to use this feature.","#DA0808","#1EBCC1");
                return "";
            }


            if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
                var addto = {"children":[]};
                for(var i = 0;i<parentDraw.children.length;i++){
                    if(parentDraw.children[i].constructor.name == "e"){
                        addto = parentDraw.children[i];
                        break;
                    }
                }
                var addto2 = {"children":[]};
                for(var i = 0;i<addto.children.length;i++){
                    if(addto.children[i].constructor.name == "e"){
                        addto2 = addto.children[i];
                        break;
                    }
                }
                var checkxray = addto2.children[0];
                var addto3 = addto2.children[0].children;
                if(addto3.length==1){
                    checkxray = checkxray.children[0];
                    addto3 = addto3[0].children;
                }
                var xrayon = false;
                if(checkxray.xrayon){
                    checkxray.xrayon = false;
                    xrayon = false;
                }
                else{
                    checkxray.xrayon = true;
                    xrayon = true;
                }
                if(xrayon){
                    displayInChat("Xray is now on.","#DA0808","#1EBCC1");
                    for(var i = 0;i<addto3.length;i++){
                        if(addto3[i].children.length>0){
                            for(var i3 = 0;i3<addto3[i].children.length;i3++){
                                addto3[i].children[i3].visible = false;
                                if(addto3[i].children[i3].children.length>0){
                                    addto3[i].children[i3].visible = true;
                                }
                            }
                        }
                    }

                }
                else{
                    displayInChat("Xray is now off.","#DA0808","#1EBCC1");
                    for(var i = 0;i<addto3.length;i++){
                        for(var i2 = 0;i2<addto3[i].children.length;i2++){
                            addto3[i].children[i2].visible = true;
                        }
                    }
                }
            }
            e.preventDefault();
        }
        if(keycode == "KeyN"){
            if(FollowCam == true){
                displayInChat("Follow Camera is now off.","#DA0808","#1EBCC1");
                FollowCam = false;
                if(parentDraw && Gdocument.getElementById("gamerenderer").style["visibility"]!="hidden"){
                    var addto = {"children":[]};
                    for(var i = 0;i<parentDraw.children.length;i++){
                        if(parentDraw.children[i].constructor.name == "e"){
                            addto = parentDraw.children[i];
                            break;
                        }
                    }
                    var canv = 0;
                    for(var i = 0;i<Gdocument.getElementById("gamerenderer").children.length;i++){
                        if(Gdocument.getElementById("gamerenderer").children[i].constructor.name == "HTMLCanvasElement"){
                            canv = Gdocument.getElementById("gamerenderer").children[i];
                            break;
                        }
                    }
                    var width = parseInt(canv.style["width"]);
                    var height = parseInt(canv.style["height"]);
                    parentDraw.x = -addto.scale.x * parseInt(width)/2 + parseInt(width)/2;
                    parentDraw.y = -addto.scale.y * parseInt(height)/2 + parseInt(height)/2;
                    parentDraw.children[0].x = parseInt(width)/2*addto.scale.x-parseInt(width)/2;
                    parentDraw.children[0].y = parseInt(height)/2*addto.scale.y-parseInt(height)/2;
                    if(addto.scale.x>=0.95 && addto.scale.y>=0.95){
                        pixiCircle.visible = false;
                    }
                    else{
                        pixiCircle.visible = true;
                    }
                }
            }
            else{
                displayInChat("Follow Camera is now on.","#DA0808","#1EBCC1");
                FollowCam = true;
            }
            e.preventDefault();
        }
        if(keycode == "KeyO"){
                if(heavybot == true){
                displayInChat("Heavy bot is now off.","#DA0808","#1EBCC1");
                heavybot = false;
            }
            else{
                displayInChat("Heavy bot is now on.","#DA0808","#1EBCC1");
                heavybot = true;
                var keykeys = Object.keys(keyCodes);
                var keyslist = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[5].children).slice(1);
                for(var i = 0;i<keyslist.length;i++){
                    if(keykeys.includes(keyslist[i].textContent)){
                        heavy = keyCodes[keyslist[i].textContent];
                        break;
                    }
                    else{
                        heavy = keyslist[i].textContent.charCodeAt(0);
                        break
                    }
                }
                var keyslist2 = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[6].children).slice(1);
                for(var i = 0;i<keyslist2.length;i++){
                    if(keykeys.includes(keyslist2[i].textContent)){
                        special = keyCodes[keyslist2[i].textContent];
                        break;
                    }
                    else{
                        special = keyslist2[i].textContent.charCodeAt(0);
                        break
                    }
                }
            }
            e.preventDefault();
        }
        if(keycode == "KeyU"){
            if(aimbot == true){
                displayInChat("Aimbot is now off.","#DA0808","#1EBCC1");
                aimbot = false;
            }
            else{
                displayInChat("Aimbot is now on.","#DA0808","#1EBCC1");
                aimbot = true;
                var keykeys = Object.keys(keyCodes);
                var keyslist = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[1].children).slice(1);
                var keyslist2 = Array.from(Gdocument.getElementById("redefineControls_table").children[0].children[2].children).slice(1);
                for(var i = 0;i<keyslist.length;i++){
                    if(keykeys.includes(keyslist[i].textContent)){
                        leftRight[0] = keyCodes[keyslist[i].textContent];
                        break;
                    }
                    else{
                        leftRight[0] = keyslist[i].textContent.charCodeAt(0);
                        break
                    }
                }
                for(var i = 0;i<keyslist2.length;i++){
                    if(keykeys.includes(keyslist2[i].textContent)){
                        leftRight[1] = keyCodes[keyslist2[i].textContent];
                        break;
                    }
                    else{
                        leftRight[1] = keyslist2[i].textContent.charCodeAt(0);
                    }
                }
            }
            e.preventDefault();
        }
        
        
    }
    if(!e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey){
        if(keycode == "Slash" && !(Gdocument.getElementById("gmeditor")?.style["transform"] == "scale(1)")){
            if(Gdocument.getElementById("newbonklobby").style["display"]=="block" && Gdocument.getElementById("newbonklobby_chat_input").value == ""  && Gdocument.getElementById("maploadwindowcontainer").style["display"]!="block" && Gdocument.getElementById("newbonklobby_chat_input").style["display"]==""){
                Gdocument.getElementById("newbonklobby_chat_input").value = "/";
                if(Gdocument.getElementById("newbonklobby_chat_input").style["pointer-events"] == "none"){
                    fire("keydown",{keyCode:13});
                }
                else{
                    Gdocument.getElementById("newbonklobby_chat_input").focus();
                }
                e.preventDefault();

            }
            else if(Gdocument.getElementById("ingamechatinputtext").style["visibility"]=="visible" && Gdocument.getElementById("ingamechatinputtext").style["display"]=="" && Gdocument.getElementById("mapeditorcontainer").style["display"]!="block" && Gdocument.getElementById("ingamechatinputtext").value == ""){
                Gdocument.getElementById("ingamechatinputtext").value = "/";
                if(!Gdocument.getElementById("ingamechatinputtext").classList.value.includes("ingamechatinputtextbg")){
                    fire("keydown",{keyCode:13});
                }
                else{
                    Gdocument.getElementById("ingamechatinputtext").focus();
                }
                e.preventDefault();

            }
            
        }
    }
};

Gdocument.onkeydown = hotkeys;

Gwindow.addEventListener('resize',function(e){
    debuggermenu.style["width"] = Gdocument.getElementById("bonkiocontainer").style["width"];
    debuggermenu.style["height"] = Gdocument.getElementById("bonkiocontainer").style["height"];
    scope.width = parseInt(Gdocument.getElementById("bonkiocontainer").style["width"])-20;
    scope.height = parseInt(Gdocument.getElementById("bonkiocontainer").style["height"])-210;
    logmenu.style["width"] = width.toString()+"px";
    logmenu.style["height"] = height.toString()+"px";
    logmenutopleft.style["width"] = (width/2).toString()+"px";
    logmenutopright.style["width"] = (width/2).toString()+"px";
    logmenutopright.style["left"] = (width/2).toString()+"px";
    debuggerinput.style["width"] = width.toString()+"px";
    debuggerinput.style["top"] = (height+90).toString()+"px";
    debuggersendrecieve.style["top"] = (height+120).toString()+"px";
    debuggerpausebutton.style["top"] = (height+150).toString()+"px";
    debuggereval.style["width"] = (width-150).toString()+"px";
    debuggereval.style["top"] = (height+120).toString()+"px";},true);


function timeout123() {
    updateWssLog();
    EVENTLOOPFUNCTION();
    var now = Date.now();
    var keys = Object.keys(playerids);
    if(Gdocument.getElementById("redefineControls_table").children[0].children.length<=1){
        Gdocument.getElementById("pretty_top_settings").click();
        Gdocument.getElementById("settings_close").click();
    }
    if(pollactive[0] && pollactive[2]<now && ishost){
        playerids[myid].ratelimit.poll = Date.now();
        SEND("42"+JSON.stringify([4,{"type":"poll end","from":username}]));
        var count = [0,0,0,0];
        var keys = Object.keys(playerids);
        for(var i = 0;i<keys.length;i++){
            if(playerids[keys[i]].vote.poll!=-1 && playerids[keys[i]].vote.poll<pollactive[3].length-1){
                count[playerids[keys[i]].vote.poll]++;
            }
            playerids[keys[i]].vote.poll = -1;
        }
        displayInChat("The poll ended due to time.","#DA0808","#1EBCC1");
        for(var i = 0;i<count.length;i++){
            if(count[i]>1){
                displayInChat(count[i].toString()+" people voted for option "+letters[i]+".","#DA0808","#1EBCC1");
            }
            if(count[i]==1){
                displayInChat(count[i].toString()+" person voted for option "+letters[i]+".","#DA0808","#1EBCC1");
            }
        }
        displayInChat("The poll was:","#DA0808","#1EBCC1");
        for(var i = 0;i<pollactive[3].length;i++){
            displayInChat(letters[i]+") "+pollactive[3][i],"#DA0808","#1EBCC1");
        }
        pollactive = [false,0,0,[]];
    }
    if(afkkill>0 && ishost){
        var keys = Object.keys(playerids);
        currentFrame = Math.floor((now - gameStartTimeStamp)/1000*30);
        for(var i = 0; i<keys.length;i++){
            if(typeof(playerids[keys[i]].lastmove)=="undefined"){
                playerids[keys[i]].lastmove = now;
            }
            else{
                if(playerids[keys[i]].playerData2?.alive && now-playerids[keys[i]].lastmove>=afkkill*1000 && now-gameStartTimeStamp>=afkkill*1000 && !killedids.includes(keys[i])){
                    killedids.push(keys[i]);
                    SEND('42[25,{"a":{"playersLeft":['+keys[i]+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                    RECIEVE('42[31,{"a":{"playersLeft":['+keys[i]+'],"playersJoined":[]},"f":'+currentFrame.toString()+'}]');
                    break;
                }
            }
        }
    }
    if(ishost && Gdocument.getElementById("maploadtypedropdowntitle").textContent == "MAP REQUESTS"){
        clearmaprequests.style["display"] = "block";
        refreshmaprequests.style["display"] = "block";
    }
    else{
        clearmaprequests.style["display"] = "none";
        refreshmaprequests.style["display"] = "none";
    }
    if(Gdocument.getElementById("gamerenderer").style["visibility"]=="hidden"){
       Gdocument.getElementById("ingamewinner_scores").style["visibility"] = "unset";;
       Gdocument.getElementById("ingamechatcontent").style["max-height"]=chatheight.toString()+"px";
    }
    if(Gdocument.getElementById("maploadwindowmapscontainer").children.length>0 && maponclick == 0){
        maponclick = Gdocument.getElementById("maploadwindowmapscontainer").children[0].onclick;
    }
    
    if(Gdocument.getElementById("sm_connectingContainer").style["visibility"] == "hidden"){
        var chatbox = Gdocument.getElementById("newbonklobby_chat_content");
        while (chatbox.firstChild) {
            chatbox.removeChild(chatbox.firstChild);
        }
        rcaps_flag = false;
        space_flag = false;
        number_flag = false;
        reverse_flag = false;
        echo_list = [];
        scroll = false;
        FollowCam = false;
        aimbot = false;
        zoom = 1;
        FFA = true;
        mode = "b";
        heavybot = false;
        stopquickplay = 1;
        roundsperqp = 1;
        roundsperqp2 = 0;
        checkboxhidden = false;
        freejoin = false;
        shuffle = false;
        defaultmode = "";
        recmodebool = false;
        recteams = false;
        autorecord = false;
        pollactive = [false,0,0,[]];
        pollactive2 = [false,0,[]];
        afkkill = -1;
        nextafter = 0;
        jointext = "";
        ishost = false;
        parentDraw = 0;
        sandboxplayerids = {};
        sandboxcopyme = false;
        wintext = "";
        sandboxon = false;
        sandboxid = 1;
        disabledkeys = [];
        myid = -1;
        if(!bonkwss){
            playerids = {};
        }
        qppaused = false;
        nextafterbuffer = -1;
        hostid = -1;
        if(chatlog[chatlog.length-1]!="ROOM END"){
            chatlog.push("ROOM END");
        }
    }
    else{
        if(chatlog[chatlog.length-1]=="ROOM END"){
            chatlog.push("ROOM START");
        }
        
    }

    if(Gdocument.getElementById("newbonklobby").style["display"]=="block"){
        Gdocument.getElementById("ingamechatinputtext").style["visibility"]="hidden";
    }
    else{
        Gdocument.getElementById("ingamechatinputtext").style["visibility"]="visible";

    }
    if(Gdocument.getElementsByClassName('newbonklobby_settings_button brownButton brownButton_classic buttonShadow brownButtonDisabled').length == 0 && Gdocument.getElementById("newbonklobby_playerbox_elementcontainer").children.length+Gdocument.getElementById("newbonklobby_specbox_elementcontainer").children.length-3
>0){
        ishost = true;
    }
    else{
        ishost = actuallyhost;
    }

    if(Gdocument.getElementById("pretty_top_name")!=null){
        username = Gdocument.getElementById("pretty_top_name").textContent;
        if(myid!=-1){
            username = playerids[myid].userName;
        }
    }
    try{
        Last_message = lastmessage()
    } catch{
        Last_message = "";
    }
    if (Laster_message != Last_message){
        Laster_message = Last_message;
        if(changed_chat==false){
            new_message = true;
        }
        else{
            changed_chat = false;
        }
    }
    if(new_message){
        chatlog.push(Last_message);
        var lm = "";
        try{
            lm = Gdocument.getElementById("newbonklobby_chat_content").children[Gdocument.getElementById("newbonklobby_chat_content").children.length-1].children;
            if(typeof(lm[0].parentElement.style["parsed"]) == 'undefined'){
                if (lm[0].className == "newbonklobby_chat_msg_colorbox"){
                    lm[2].innerHTML = urlify(lm[2].innerHTML);
                    Laster_message = lastmessage();
                    lm[0].parentElement.style["parsed"] = true;
                }
                if (lm[0].className == "newbonklobby_chat_status"){
                    lm[0].innerHTML = urlify(lm[0].innerHTML);
                    Laster_message = lastmessage();
                    lm[0].parentElement.style["parsed"] = true;
                }
            }
        }
        catch{
            lm = "";
        }

        if(Last_message.indexOf("@"+username)!=-1 && npermissions == 1){
            if(Notification.requestPermission()){
                var n = new Notification(Last_message);
            }
        }

        try{
            lm = Gdocument.getElementById("ingamechatcontent").children[Gdocument.getElementById("ingamechatcontent").children.length-1].children;
            if(typeof(lm[0].parentElement.style["parsed"])=='undefined'){
                if(lm[0].className == "ingamechatname"){
                    lm[1].innerHTML = urlify(lm[1].innerHTML);
                    Laster_message = lastmessage();
                    lm[0].parentElement.style["parsed"] = true;
                }
                if(lm[0].className == ""){
                    lm[0].innerHTML = urlify(lm[0].innerHTML);
                    Laster_message = lastmessage();
                    lm[0].parentElement.style["parsed"] = true;
                }
            }
        }
        catch{
            lm = "";
        }
        
        if(text2speech){
            if(!sayer.speaking){
                if(Last_message.includes(":  ")){
                    speech.text = Last_message.substring(0,Last_message.indexOf(":")).toLowerCase();
                    speech.rate = 2.25;
                    sayer.speak(speech);
                    speech.text = Last_message.substring(Last_message.indexOf(":  ")+3).toLowerCase();
                    speech.rate = 1.25;
                    sayer.speak(speech);
                }
                else{
                    speech.text = Last_message.toLowerCase();
                    sayer.speak(speech);
                }
            }
        }
    }
    if (ishost==true && new_message){
        for(i=0;i<banned.length;i++){
            if(Last_message.startsWith("* "+banned[i]+" has joined the game")){
                chat2("/kick '"+banned[i]+"'");
            }
        }
    }
    if(Gdocument.getElementById("gamerenderer").style["visibility"] == "hidden" && ishost){
        roundsperqp2 = 0;
    }
    if(Gdocument.getElementById("ingamewinner").style["visibility"]=="inherit" && ishost){
        if(Gdocument.getElementById("ingamewinner").style["parsed"] != true){
            if(stopquickplay!=1){
                roundsperqp2++;
            }
            if(autorecord){
                Gdocument.getElementById("pretty_top_replay").click();
            }
        }
        if(Gdocument.getElementById("ingamewinner").style["parsed"] != true && wintext!="" && Gdocument.getElementById("ingamewinner_bottom").textContent!="DRAW"){
            chat(flag_manage(wintext.replaceAll("username",Gdocument.getElementById("ingamewinner_top").textContent)));
        }
        Gdocument.getElementById("ingamewinner").style["parsed"] = true;
    }
    else{
        Gdocument.getElementById("ingamewinner").style["parsed"] = false;
    }
    if(ishost && stopquickplay == 0){
        if(checkboxhidden){
            checkboxhidden = false;
            var classes = Gdocument.getElementsByClassName("quickplaycheckbox");
            for(var i = 0; i<classes.length;i++){
                classes[i].style["display"] = "block";
                classes[i].className = "quickplaycheckbox quickplaychecked";
            }
            Gdocument.getElementById('clearallcheckboxes').style["display"] = "block";

        }
        if(nextafter>0 && gameStartTimeStamp+nextafter*1000<=now && Gdocument.getElementById("gamerenderer").style["visibility"] != "hidden" && dontswitch == false && Gdocument.getElementById("ingamewinner").style["visibility"]!="inherit" && !qppaused){
            roundsperqp2 = 0;
            if(shuffle){
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){
 
                    if(availableindexes.length!=1){
                        availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                    }
                    quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                }
            }
            else{
                var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                var available = [];
                var availableindexes = [];
                var notempty = false;
                for(var i = 0; i<e.length;i++){
                    var a = false;
                    [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                    available.push(a);
                    if(a){
                        availableindexes.push(i);
                        notempty = true;
                    }
                }
                if(notempty){
                    var above = [];
                    for(var i = 0;i<availableindexes.length;i++){
                        if(availableindexes[i]>quicki){
                            above.push(availableindexes[i]);   
                        }
                    }
                    if(above.length>0){
                        quicki = above[0];
                    }
                    else{
                        quicki = availableindexes[0];
                    }
                }
            }
            startedinqp = true;
            dontswitch = true;
            gotonextmap(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length));
        }
        if(Gdocument.getElementById("ingamewinner").style["visibility"]=="inherit" && dontswitch == false && !document.hidden && !qppaused){
            if(roundsperqp2>=roundsperqp){
                if(shuffle){
                    var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                    var available = [];
                    var availableindexes = [];
                    var notempty = false;
                    for(var i = 0; i<e.length;i++){
                        var a = false;
                        [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                        available.push(a);
                        if(a){
                            availableindexes.push(i);
                            notempty = true;
                        }
                    }
                    if(notempty){

                        if(availableindexes.length!=1){
                            availableindexes.splice(availableindexes.indexOf(quicki%Gdocument.getElementById("maploadwindowmapscontainer").children.length),1);
                        }
                        quicki = availableindexes[Math.floor(Math.random()*availableindexes.length)];
                    }
                }
                else{
                    var e = Gdocument.getElementById("maploadwindowmapscontainer").children;
                    var available = [];
                    var availableindexes = [];
                    var notempty = false;
                    for(var i = 0; i<e.length;i++){
                        var a = false;
                        [...e[i].children].forEach(function(e1){if(e1.className=="quickplaycheckbox quickplaychecked"){a = e1.checked}});
                        available.push(a);
                        if(a){
                            availableindexes.push(i);
                            notempty = true;
                        }
                    }
                    if(notempty){
                        var above = [];
                        for(var i = 0;i<availableindexes.length;i++){
                            if(availableindexes[i]>quicki){
                                above.push(availableindexes[i]);   
                            }
                        }
                        if(above.length>0){
                            quicki = above[0];
                        }
                        else{
                            quicki = availableindexes[0];
                        }
                    }
                }
            }
            transitioning = true;
            startedinqp = true;
            map(quicki%(Gdocument.getElementById("maploadwindowmapscontainer").children.length)); 
            dontswitch = true;
            setTimeout(function(){Gdocument.getElementById("ingamewinner").style["visibility"]="hidden"; dontswitch = false;},timedelay);
 
        }
    }
    else{
        if(!checkboxhidden){
            checkboxhidden = true;
            var classes = Gdocument.getElementsByClassName("quickplaycheckbox");
            for(var i = 0; i<classes.length;i++){
                classes[i].style["display"] = "none";
                classes[i].className = "quickplaycheckbox quickplayunchecked";
            }
            Gdocument.getElementById('clearallcheckboxes').style["display"] = "none";
        }
    }
    new_message = false;
};
});
