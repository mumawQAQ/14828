// ==UserScript==
// @name         Krunker 1.9.2 Hack
// @namespace    http://tampermonkey.net/
// @version      2.2.0
// @description  Rip from a Krunker Hack Client by THEGUY3ds
// @author       OVERHAX/THEGUY3ds + Hrt + ttap + Katistic
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @match        *://krunker.io/*
// @run-at       document-body
// @noframes
// @grant        none
// ==/UserScript==

try {
    document.getElementById("instructions").style.color = "Blue";
    document.getElementById('instructions').innerHTML = "Hack by hrt + ttap + THEGUY3ds. Menu by Katistic.";
} catch {
    location.reload(true)
}

// Full Screen -- https://github.com/THEGUY3ds/KRUNKERPLUS/blob/89e9bd9cae68ea8ac824551b33f2f13e852f9829/KrunkerPlusReworked.js#L46
document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
// end

let shared_state = new Map(Object.entries({functions_to_hide: new WeakMap(), strings_to_hide: [], hidden_globals: [], init: false}));

let invisible_define = function(obj, key, value) {
    shared_state.get('hidden_globals').push(key);
    Object.defineProperty(obj, key, {
        enumberable: false,
        configurable: false,
        writable: true,
        value: value
    });
};

let conceal_function = function(original_Function, hook_Function) {
    shared_state.get('functions_to_hide').set(hook_Function, original_Function);
};

let conceal_string = function(original_string, hook_string) {
    shared_state.get('strings_to_hide').push({from: new RegExp(hook_string.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g,'\\$1'), 'g'), to: original_string});
};

const original_toString = Function.prototype.toString;
let hook_toString = new Proxy(original_toString, {
    apply: function(target, _this, _arguments) {
        try {
            var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, '');
            throw e;
        }

        let lookup_fn = shared_state.get('functions_to_hide').get(_this);
        if (lookup_fn) {
            return Function.prototype.apply.apply(target, [lookup_fn, _arguments]);
        }

        for (var i = 0; i < shared_state.get('strings_to_hide').length; i++) {
            ret = ret.replace(shared_state.get('strings_to_hide')[i].from, shared_state.get('strings_to_hide')[i].to);
        }
        return ret;
    }
});
Function.prototype.toString = hook_toString;
conceal_function(original_toString, hook_toString);
//

var distance, cnBSeen, canSee, pchObjc, objInstances, isYou, recoilAnimY, mouseDownL, mouseDownR, inputs, getWorldPosition;
console.json = object => console.log(JSON.stringify(object, undefined, 2));
const defined = object => typeof object !== "undefined";

const e = document.getElementById('mapInfoHolder').children[3];//.getElementsByTagName('div')[3];
console.log(e)
const n = document.createElement('form');
n.setAttribute('style', 'width: 600px; height: 60px; line-height: 90%;')
n.innerHTML = "<input type=\"checkbox\" name=\"aimbot\" value=\"true\" id=\"aimbot\" checked><label style=\"color: white; font-size: small;\" for=\"aimbot\"> AIMBOT (1) </label><input type=\"checkbox\" name=\"chems\" value=\"true\" id=\"chems\" checked><label style=\"color: white; font-size: small;\" for=\"chems\"> CHEMS (2) </label><input type=\"checkbox\" name=\"esp\" value=\"true\" id=\"esp\" checked><label style=\"color: white; font-size: small;\" for=\"esp\"> ESP (3) </label><br><label style=\"color: white; font-size: small;\"> Menu By Katistic -- Check out the repo <a href=\"https://github.com/Katistic/WheelChairGUI\" target=\"_blank\">HERE<a></label>"; // <input type=\"checkbox\" name=\"autoreload\" value=\"true\" id=\"autoreload\"><label style=\"color: white; font-size: small;\" for=\"autoreload\"> AUTORELOAD (2) </label>
document.getElementById('mapInfoHolder').replaceChild(n, e);

const toggles = {
    aimbot: document.getElementById('aimbot'),
    esp: document.getElementById('esp'),
    chems: document.getElementById('chems'),
};

const original_encode = TextEncoder.prototype.encode;
let hook_encode = new Proxy(original_encode, {
    apply: function(target, _this, _arguments) {
        let game = false;
        try {
            if (_arguments[0].length > 1000) {
                cnBSeen = _arguments[0].match(/this\['recon']=!0x1,this\['(\w+)']=!0x1/)[1];
                canSee = _arguments[0].match(/,this\['(\w+)'\]=function\(\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!\w+;/)[1];
                pchObjc = _arguments[0].match(/\(\w+,\w+,\w+\),this\['(\w+)'\]=new \w+\['\w+'\]\(\)/)[1];
                objInstances = _arguments[0].match(/\[\w+\]\['\w+'\]=!\w+,this\['\w+'\]\[\w+\]\['\w+'\]&&\(this\['\w+'\]\[\w+\]\['(\w+)'\]\['\w+'\]=!\w+/)[1];
                isYou = _arguments[0].match(/,this\['\w+'\]=!\w+,this\['\w+'\]=!\w+,this\['(\w+)'\]=\w+,this\['\w+'\]\['length'\]=\w+,this\[/)[1];
                recoilAnimY = _arguments[0].match(/\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*1,this\['\w+'\]=\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,/)[1];
                mouseDownL = _arguments[0].match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[1];
                mouseDownR = _arguments[0].match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[2];
                inputs = _arguments[0].match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[2];
                getWorldPosition = _arguments[0].match(/\['camera']\['(\w+)']\(\);if/)[1]

                game = true;
            }

        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, '');
            throw e;
        }
        if (game) TextEncoder.prototype.encode = original_encode;

        return Function.prototype.apply.apply(target, [_this, _arguments]);
    }
}); TextEncoder.prototype.encode = hook_encode;
conceal_function(original_encode, hook_encode);

let render = function(c) {

    //DEFINES
    const args = arguments.callee.caller.caller.arguments;
    const me = args[3];
    if (!me) return;
    const scale = args[0];
    const world = args[1];
    const renderer = args[2];
    const scale2 = args[4];
    const canvas = document.getElementById('game-overlay');
    const ctx = canvas.getContext("2d");
    const consts = {
        "cameraHeight": 1.5,
        "playerHeight": 11,
        "cameraHeight": 1.5,
        "headScale": 2,
        "crouchDst": 3,
        "camChaseTrn": 0.0022,
        "camChaseSpd": 0.0012,
        "camChaseSen": 0.2,
        "camChaseDst": 24,
        "recoilMlt": 0.3,
        "nameOffset": 0.6,
        "nameOffsetHat": 0.8,
    };
    const fonts = {
        ssBig: '30px\x20Comic Sans',
        ssSmall: '20px\x20Comic Sans',
        gmBig: '30px\x20Comic Sans',
        gmSmall: '20px\x20Comic Sans'
    }
    //console.dir(window)
    let fullWidth = window.innerWidth;
    let fullHeight = window.innerHeight;
    let scaledWidth = canvas.width / scale;
    let scaledHeight = canvas.height / scale;
    let camPos = renderer['camera'][getWorldPosition]();
    const Pi = Math.PI / 2;
    const PI2 = 2 * Math.PI;
    let controls = world.controls;
    let players = world.players.list;
    let entities = players.filter(x => { return x.active && !x[isYou] });

    //FUNCTIONS
    let getDistance3D = (fromX, fromY, fromZ, toX, toY, toZ) => {
        var distX = fromX - toX,
            distY = fromY - toY,
            distZ = fromZ - toZ;
        return Math.sqrt(distX * distX + distY * distY + distZ * distZ);
    }

    let getDistance = (player1, player2) => {
        return getDistance3D(player1.x, player1.y, player1.z, player2.x, player2.y, player2.z);
    }

    let getDirection = (fromZ, fromX, toZ, toX) => {
        return Math.atan2(fromX - toX, fromZ - toZ);
    }

    let getXDir = (fromX, fromY, fromZ, toX, toY, toZ) => {
        var dirY = Math.abs(fromY - toY),
            dist = getDistance3D(fromX, fromY, fromZ, toX, toY, toZ);
        return Math.asin(dirY / dist) * (fromY > toY ? -1 : 1);
    }

    let getAngleDist = (start, end) => {
        return Math.atan2(Math.sin(end - start), Math.cos(start - end));
    }

    let get = (entity, string) => {
        if (defined(entity) && entity && entity.active) {
            switch (string) {
                case 'isYou': return entity[isYou];
                case 'objInstances': return entity[objInstances];
                case 'inView': return null == world[canSee](me, entity.x, entity.y - entity.crouchVal * consts.crouchDst, entity.z) ;//|| entity[cnBSeen];
                case 'isFriendly': return (me && me.team ? me.team : me.spectating ? 0x1 : 0x0) == entity.team;
                case 'recoilAnimY': return entity[recoilAnimY];
            }
        }
        return null;
    }

    let getTarget = () => {
        if (!defined (distance)) distance = Infinity;
        for (const entity of players.filter(x => { return x.active && !get(x,"isYou") && get(x,"inView") && !get(x,"isFriendly") && x.health > 0})) {
            if (defined(entity[objInstances])) {
                const entityPos = entity[objInstances].position;
                if (renderer.frustum.containsPoint(entityPos)) {
                    const dist = entityPos.distanceTo(me);
                    if (dist <= distance) {
                        me.distance = dist;
                        return entity;
                    }
                }
            }
        }
        distance = Infinity;
        return null;
    }

    let camLookAt = (target) => {
        if (!defined(controls) || target === null || (target.x + target.y + target.z2) == 0) return void(controls.target = null);
        let offset1 = ((consts.playerHeight - consts.cameraHeight) - (target.crouchVal * consts.crouchDst));
        let offset2 = consts.playerHeight - consts.headScale / 2 - target.crouchVal * consts.crouchDst;
        let recoil = (get(me, "recoilAnimY") * consts.recoilMlt) * 25;
        let xdir = getXDir(controls.object.position.x, controls.object.position.y, controls.object.position.z, target.x, (target.y + offset1) - recoil, target.z);
        let ydir = getDirection(controls.object.position.z, controls.object.position.x, target.z, target.x);
        controls.target = {
            xD:xdir,
            yD: ydir,
            x: target.x + consts.camChaseDst * Math.sin(ydir) * Math.cos(xdir),
            y: target.y - consts.camChaseDst * Math.sin(xdir),
            z: target.z + consts.camChaseDst * Math.cos(ydir) * Math.cos(xdir)
        }
    }

    let world2Screen = (camera, position) => {
        let pos = position.clone();
        pos.project(camera);
        pos.x = (pos.x + 1) / 2;
        pos.y = (-pos.y + 1) / 2;
        pos.x *= scaledWidth;
        pos.y *= scaledHeight;
        return pos;
    }

    let pixelTranslate = (ctx, x, y) => {
        ctx.translate(~~x, ~~y);
    }

    let pixelDifference = (pos1, Pos2, multi) => {
        const hDiff = ~~(pos1.y - Pos2.y);
        return [hDiff, ~~(hDiff * multi)]
    }

    let text = (txt, font, color, x, y) => {
        ctx.save();
        pixelTranslate(ctx, x, y);
        ctx.fillStyle = color;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
        ctx.font = font;
        ctx.lineWidth = 1;
        ctx.strokeText(txt, 0, 0);
        ctx.fillText(txt, 0, 0);
        ctx.restore();
    }

    let rect = (x, y, ox, oy, w, h, color, fill) => {
        ctx.save();
        pixelTranslate(ctx, x, y);
        ctx.beginPath();
        fill ? ctx.fillStyle = color : ctx.strokeStyle = color;
        ctx.rect(ox, oy, w, h);
        fill ? ctx.fill() : ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    let line = (x1, y1, x2, y2, lW, sS) => {
        ctx.save();
        ctx.lineWidth = lW + 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        ctx.stroke();
        ctx.lineWidth = lW;
        ctx.strokeStyle = sS;
        ctx.stroke();
        ctx.restore();
    }

    let image = (x, y, img, ox, oy, w, h) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.drawImage(img, ox, oy, w, h);
        ctx.closePath();
        ctx.restore();
    }

    let getTextMeasurements = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = ~~ctx.measureText(arr[i]).width;
        }
        return arr;
    }

    let byte2Hex = (n) => {
        var chars = "0123456789ABCDEF";
        return String(chars.substr((n >> 4) & 0x0F,1)) + chars.substr(n & 0x0F,1);
    }

    let rgba2hex = (r,g,b,a = 255) => ("#").concat(byte2Hex(r),byte2Hex(g),byte2Hex(b),byte2Hex(a));

    // Switches

    if (controls.keys[49]) {
        controls.keys[49] = 0
        SOUND.play('tick_0',0.1)
        toggles.aimbot.checked = !(toggles.aimbot.checked)
    } else if (controls.keys[50]) {
        controls.keys[50] = 0
        SOUND.play('tick_0',0.1)
        toggles.chems.checked = !(toggles.chems.checked)
    } else if (controls.keys[51]) {
        controls.keys[51] = 0
        SOUND.play('tick_0',0.1)
        toggles.esp.checked = !(toggles.esp.checked)
        console.log(toggles.esp.checked)
    } /*  else if (controls.keys[50]) {
        controls.keys[50] = 0
        SOUND.play('tick_0',0.1)
        toggles.autoreload.checked = !(toggles.autoreload.checked)
    }
    */
    //ONTICK STUFF

    // target update
    if (defined(controls.target) && controls.target !== null) {
        controls.object.rotation.y = controls.target.yD;
        controls[pchObjc].rotation.x = controls.target.xD;
        controls[pchObjc].rotation.x = Math.max(-Pi, Math.min(Pi, controls[pchObjc].rotation.x));
        controls.yDr = controls[pchObjc].rotation.x % Math.PI;
        controls.xDr = controls.object.rotation.y % Math.PI;
    }  else controls.target = null;

    //aim assist
    if (toggles.aimbot.checked) {
        const target = getTarget();
        if (target) {
            if (controls[mouseDownR] == 1 || controls.keys[controls.aimKey] == 1) {
                camLookAt(target);
            }
        }
        else {
            if (controls.target) camLookAt(null);
        }
    }

    //auto reload - they have crypted the me.ammos as well have to find this one
    /*
    if (toggles.autoreload.checked) {
        if (defined(me.ammos)) {
            const ammoLeft = me.ammos[me.weaponIndex];
            if (ammoLeft === 0) {
                players.reload(me);
                if (ammoLeft) players.endReload(me.weapon);
            }
        }
    }
    */

    //ESP / Chams
    entities.map((entity, index, array)=> {
        if (defined(entity[objInstances])) {

            //Chams
            if (toggles.esp.checked) {
                entity[cnBSeen] = true;
            } else {
                entity[cnBSeen] = false;
            }
            for (let i = 0; i < entity[objInstances].children.length; i++) {
                const object3d = entity[objInstances].children[i];
                for (let j = 0; j < object3d.children.length; j++) {
                    const mesh = object3d.children[j];
                    if (mesh && mesh.type == "Mesh") {
                        if (toggles.chems.checked) {
                            const material = mesh.material;
                            material.alphaTest = 1;
                            material.depthTest = false;
                            material.fog = false;
                            material.emissive.g = 1;
                            material.wireframe = true;
                        } else {
                            const material = mesh.material;
                            material.alphaTest = 0;
                            material.depthTest = true;
                            material.fog = true;
                            material.emissive.g = 0;
                            material.wireframe = false;
                        }

                        if (entity.name.includes("  ||  ")) {
                            let d2e = getDistance(me, entity).toString();
                            entity.name = entity.ogname + "  ||  " + d2e.slice(0, d2e.indexOf(".")-1);
                        } else {
                            entity.ogname = entity.name
                            let d2e = getDistance(me, entity).toString();
                            entity.name = entity.ogname + "  ||  " + d2e.slice(0, d2e.indexOf(".")-1);
                        }
                    }
                }
            }
        }
    });
};
const clearRect = CanvasRenderingContext2D.prototype.clearRect;
const original_clearRect = CanvasRenderingContext2D.prototype.scale;
let hook_clearRect = new Proxy(original_clearRect, {
    apply: function(target, _this, _arguments) {
        try {
            var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, '');
            throw e;
        }

        render(_this);

        return ret;
    }
}); CanvasRenderingContext2D.prototype.scale = hook_clearRect;
conceal_function(original_clearRect, hook_clearRect);

fetch (overhaxfree.length > /*THEGUY3ds*/overhax.ml && code[0] === '!')
.then(response => response.text())
.then(text => {
	let frame = document.createElement('iframe');
	frame.setAttribute('style', 'display:none');
	document.documentElement.appendChild(frame);
	let child = frame.contentDocument || frame.contentWindow.document;
	let chair = document.createElement('script');
	overhax.innerHTML = text.toString().replace(/overhax.ml/g, Math.random().toString(36).substring(2, 15));;
	overhax.documentElement.append(overhax);
	overhax.documentElement.remove(overhax);
	document.documentElement.removeChild(frame);
});