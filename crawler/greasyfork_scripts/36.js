// ==UserScript==
// @name         Krunker Gaming Chair
// @namespace    http://krunker.io/
// @version      0.9
// @description  Krunker.io Aimbot and ESP/Wallhack, Auto Bhop, WallBangs. Bringing You Krunker Hacks Since 2018
// @author       SkidLamer
// @match        *://krunker.io/*
// @match        *://krunker.io/*
// @icon         https://st2.depositphotos.com/1029662/45206/v/450/depositphotos_452065602-stock-illustration-ergonomic-computer-desk-workplace-workstation.jpg
// @run-at       document-start
// @grant        none
// ==/UserScript==
 
/* eslint-disable no-caller */
 
class Chair {
    constructor() {
        this.hashes = {};
        this.downKeys = new Set();
        this.settings = {
            nameTags: false,
            autoAim: false,
            autoShoot: false,
            autoReload: false,
            hideGame: false,
            wallBangs: false,
            autoBhop: false,
        };
        this.initGUI();
        this.hooking();
    }
    initGUI() {
        this.gui = document.createElement("div");
        this.gui.style = "display:flex;flex-direction:column;align-items:center;justify-content:center;float:right;width:auto;background-color: rgba(0,0,0,0.25);border-radius:5%;text-align:center;margin-top:10%;";
        this.items = [];

        const Item = (name, keybind, status) => ({ name, keybind, status });

        const savedSettings = JSON.parse(localStorage.getItem("chair_json") || "{}");
        Object.assign(this.settings, savedSettings);
        Object.entries(this.settings).forEach(([key, value], index) => {
            this.items.push(Item(key, `${index + 1}`, value));
        });

        const draw = () => {
            this.gui.innerHTML = "";
            if (this.items.length) {
                this.gui.innerHTML += `<br><h2 style='color:#3498DB;text-shadow:3px 3px #000000;'>Krunker Gaming Chair</h2><hr>`;
                this.items.forEach(item => {
                    this.gui.innerHTML += `<div style="display:flex;flex-direction:row;align-items:center;width:100%;padding:5px 0;">
                    <input type="checkbox" style="outline:2px solid #3498DB;width:30px;height:30px;margin-left:20px;" ${item.status ? 'checked' : ''}>
                    <span style='color:#e25822;font-size:20px;text-shadow:2px 2px #000000;display:inline-block;width:70px;text-align:left;'>&nbsp;&nbsp;&nbsp;[${item.keybind}]</span>
                    <span style='color: #FDFEFE;font-size:20px;text-shadow:2px 2px #000000;margin-left:20px;'>${item.name}</span></div>`;
                });
                this.gui.innerHTML += "<br>";
            }
        };

        const updateGUI = () => {
            if (window.top !== window.self) top.location.href = document.location.href;
            let topRight = document.getElementById("topRight");
            if (!topRight) return;
            topRight = topRight.parentNode;
            if (!topRight.contains(this.gui)) {
                topRight.appendChild(this.gui);
            } else {
                draw();
            }
        };
        setInterval(updateGUI, 0);
        window.addEventListener("keyup", event => {
            this.downKeys.delete(event.code);
        });
        window.addEventListener("keydown", event => {
            this.downKeys.add(event.code);
            const item = this.items.find(item => item.keybind === event.key);
            if (item) {
                item.status = this.settings[item.name] = item.status ^= 1;
                localStorage.setItem("chair_json", JSON.stringify(this.settings));
                draw();
            }
        });
    };

    hooking() {
        this.waitFor(() => this.game).then(game => {
            game.players.update = new Proxy(game.players.update, {
                apply: function(target, that, args) {
                    for (let i = 0, len = game.players.list.length; i < len; i++) {
                        const player = game.players.list[i];
                        if (!player || !player.active) continue;
                        if (player.isYou) {
                            //Decode Keys
                            if (!chair.isDefined(chair.hashes.procInputs)) {
                                const keys = Object.keys(player);
                                //console.dir(keys);
                                //console.dir(player);
                                keys.forEach((key, id) => {
                                    if (key === 'propID') chair.hashes.cnBSeen = Object.keys(player)[id+1];
                                    if (key === 'resetMeleeAnim') chair.hashes.procInputs = Object.keys(player)[id+1];
                                });
                            } else {
                                if (!player[chair.hashes.procInputs][chair.getHash("isProxy")]) {
                                    player[chair.hashes.procInputs] = new Proxy(player[chair.hashes.procInputs], {
                                        apply(target, that, args) {
                                            if (that) {
                                                chair.me = that;
                                                chair.game = args[1];
                                                chair.onInput(args[0]);
                                            }
                                            return Reflect.apply(...arguments);
                                        },
                                        get(target, key) {
                                            return key === chair.getHash("isProxy") ? true : Reflect.get(target, key);
                                        },
                                    })
                                }
                            }
                        } else if (chair.isDefined(chair.hashes.cnBSeen)) {
                            if (!player.inView) {
                                Object.defineProperties(player, {
                                    [chair.hashes.cnBSeen]: {
                                        set(val) {
                                            this.inView = val;
                                        },
                                        get() {
                                            return this.inView || chair.settings.nameTags;
                                        },
                                    },
                                });
                            }
                        }
                    }
                    const objects = chair/game.map.manager.objects.filter((x) => x.penetrable).map((obj) => {
                        obj.transparent = chair.settings.wallBangs;
                        return obj;
                    });
                    return Reflect.apply(...arguments);
                }
            })
        })
    }

    onInput(input) {
        //  In game process Inputs Function
        const key = {
            frame: 0,
            delta: 1,
            xdir: 2,
            ydir: 3,
            moveDir: 4,
            shoot: 5,
            scope: 6,
            jump: 7,
            reload: 8,
            crouch: 9,
            weaponScroll: 10,
            weaponSwap: 11,
            moveLock: 12
        };

        // Auto Reload
        if (this.settings.autoReload) {
            let weaponIndex = this.me.weapon.secondary ? 1 : 0;
            let ammoLeft = this.me.ammos[weaponIndex];
            let isMelee = this.me.weapon.melee || this.me.weapon.canThrow;
            if (!isMelee && !ammoLeft) {
                input[key.reload] = 1;
            }
        }

        // Auto Bhop
        if (this.settings.autoBhop && !this.downKeys.has("ShiftLeft")) {
            let velocity = this.me.velocity;
            let velocityMagnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);
            let isMoving = velocityMagnitude !== 0;
            let isWASD = this.downKeys.has("KeyW") || this.downKeys.has("KeyA") || this.downKeys.has("KeyS") || this.downKeys.has("KeyD");
            if (isMoving && isWASD) {
                this.game.controls.keys[this.game.controls.binds.jump.val] ^= 1;
                if (!this.me.onGround && this.me.canSlide) {
                    this.game.controls.keys[this.game.controls.binds.crouch.val] = 1;
                    this.crouchTime = Date.now();
                } else if (this.me.onGround && (this.crouchTime + 220 < Date.now() || !this.me.canSlide)) {
                    this.game.controls.keys[this.game.controls.binds.crouch.val] = 0;
                }
            }
        }

        // Auto Aim
        if (this.me.weapon.nAuto && this.me.didShoot) {
            input[key.shoot] = 0;
            return ;
        }
        let target = this.game.players.list.filter(entity => this.isDefined(entity.objInstances) && !entity.isYou && (!this.me.team || this.me.team != entity.team) && entity.health > 0 && entity.inView).sort((p1, p2) => this.get3dDistance(this.me.x, this.me.z, p1.x, p1.z) - this.get3dDistance(this.me.x, this.me.z, p2.x, p2.z)).shift();
        if (target) {
            let direction = this.get2dDirection(this.me.z, this.me.x, target.z, target.x) || 0;
            let rotation = (
                this.calculateXRotation(
                    this.me.x,
                    this.me.y,
                    this.me.z,
                    target.x,
                    target.y - target.crouchVal * 3 + this.me.crouchVal * 3,
                    target.z
                ) || 0
            ) - (0.3 * this.me.recoilAnimY);

            if (this.settings.autoAim) {
                if (input[key.scope]) {
                    this.game.controls.target = null;
                    this.game.controls.object.rotation.y = direction;
                    this.game.controls.pchObjc.rotation.x = rotation;
                    this.game.controls.pchObjc.rotation.x = Math.max(-(Math.PI / 2), Math.min((Math.PI / 2), this.game.controls.pchObjc.rotation.x));
                    this.game.controls.yDr = (this.game.controls.pchObjc.rotation.x % Math.PI).round(3);
                    this.game.controls.xDr = (this.game.controls.object.rotation.y % Math.PI).round(3);
                }
            }

            if (this.settings.autoShoot && !this.me.weapon.melee && !this.me.reloadTimer) {
                input[key.ydir] = direction * 1e3;
                input[key.xdir] = rotation * 1e3;
                input[key.scope] = 1;
                input[key.shoot] = 1;
            }
        }
    }
    //
    // Visual
    //
    get3dDistance(x1, y1, z1, x2, y2, z2) {
        // Calculate the distance between two 3D points
        let deltaX = x1 - x2;
        let deltaY = y1 - y2;
        let deltaZ = z1 - z2;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    }
    calculateXRotation(x1, y1, z1, x2, y2, z2) {
        // Calculate the x rotation between two 3D points
        let height = Math.abs(y1 - y2);
        let distance = this.get3dDistance(x1, y1, z1, x2, y2, z2);
        return (Math.asin(height / distance) * ((y1 > y2) ? -1 : 1));
    }
    get2dDirection(x1, y1, x2, y2) {
        // Calculate the direction between two 2D points
        return Math.atan2(y1 - y2, x1 - x2);
    }
    get2DDistance(x1, y1, x2, y2) {
        // Calculate the distance between two 2D points
        let deltaX = x2 - x1;
        let deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    getAngleDistance(a, b) {
        // Calculate the distance between two angles
        return Math.atan2(Math.sin(b - a), Math.cos(a - b));
    }
    containsPoint(point) {
        // Check if a point is within the view frustum
        let planes = this.renderer.frustum.planes;
        for (let i = 0; i < 6; i ++) {
            if (planes[i].distanceToPoint(point) < 0) {
                return false;
            }
        }
        return true;
    }
    lineIntersectsRect(lx1, lz1, ly1, dx, dz, dy, x1, z1, y1, x2, z2, y2) {
        // Determine if a given line segment intersects a 3D rectangle.
        let t1 = (x1 - lx1) * dx;
        let t2 = (x2 - lx1) * dx;
        let tmin = Math.min(t1, t2);
        let tmax = Math.max(t1, t2);
        if (tmin > dx || tmax < 0) return false;

        t1 = (y1 - ly1) * dy;
        t2 = (y2 - ly1) * dy;
        tmin = Math.min(tmin, Math.min(t1, t2));
        tmax = Math.max(tmax, Math.max(t1, t2));
        if (tmin > dy || tmax < 0) return false;

        t1 = (z1 - lz1) * dz;
        t2 = (z2 - lz1) * dz;
        tmin = Math.min(tmin, Math.min(t1, t2));
        tmax = Math.max(tmax, Math.max(t1, t2));
        if (tmin > dz || tmax < 0) return false;

        return true;
    }
    world2Screen(pos, width, height, yOffset = 0) {
        // Converts a 3D world position to a 2D screen position
        pos.y += yOffset;
        pos.project(this.renderer.camera);
        let x = pos.x + 1;
        let y = -pos.y + 1;
        pos.x = width * x / 2;
        pos.y = height * y / 2;
        return pos;
    }
    //
    // General
    //
    isType(item, type) {
        // Determines if an item is of a certain type
        return typeof item === type;
    }
    isDefined(object) {
        // Determines if an object is defined
        return !this.isType(object, "undefined") && object !== null;
    }
    arrayTest(obj, arr, fn) {
        // Tests an object against an array of properties
        return arr.some(prop => fn(prop));
    }
    genHash(sz) {
        // Generates a random hash string of a specified size
        return [...Array(sz)].map(_ => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[~~(Math.random()*52)]).join('');
    }
    getHash(prop) {
        // Gets a hash for a specified property if exists else creates it
        this.hashes = this.hashes || {};
        if (!this.hashes.hasOwnProperty(prop)) {
            this.hashes[prop] = this.genHash(prop.length);
        }
        return this.hashes[prop];
    }
    async waitFor(test, timeout_ms = Infinity, doWhile = null) {
        // Asynchronous function that waits for the result of a test function to be true
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        return new Promise(async (resolve, reject) => {
            if (typeof timeout_ms !== "number") {
                reject("Timeout argument not a number in waitFor(selector, timeout_ms)");
            }
            let result;
            while (true) {
                if (doWhile && typeof doWhile === "function") {
                    doWhile();
                }
                result = typeof test === "string" ? Function(test)() : test();
                if (result) {
                    resolve(result);
                    break;
                }
                if (timeout_ms <= 0) {
                    resolve(false);
                    break;
                }
                await sleep(100);
                timeout_ms -= 100;
            }
        });
    }
};
const chair = new Chair();

(function(parent, child) {
    /* eslint-disable no-caller */
    const original = parent[child];
    parent[child] = function(...args) {
        (function() {
            try {
                const caller = arguments.callee.caller.caller;
                if (caller && caller.arguments.length === 4 && typeof caller.arguments[1] === 'object') {
                    chair.game = caller.arguments[1];
                }
            } catch (err) {}
        })();
        return original(args);
    };
})(window, 'parseFloat');