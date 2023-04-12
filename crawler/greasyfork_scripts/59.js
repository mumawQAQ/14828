// ==UserScript==
// @name         [🔥ShellMODS SHELL SHOCKERS ] Hack by ShellMODS✓
// @namespace    https://greasyfork.org/en/users/956575
// @version      4.0.8
// @description  INVISIBILITY, EGG SIZE, SPEED, AIM ASSIST & LOW GRAVITY!! ENJOY YOUR OWN PERSONAL ADMIN PANEL!!
// @author       ShellMODS
// @match        https://shellshock.io/*
// @match        https://https://www.crazygames.com/game/shellshockersio/*
// @match        https://eggfacts.fun/*
// @match        https://biologyclass.club/*
// @match        https://egghead.institute/*
// @match        https://egg.dance/*
// @match        https://eggisthenewblack.com/*
// @match        https://mathfun.rocks/*
// @match        https://hardboiled.life/*
// @match        https://overeasy.club/*
// @match        https://zygote.cafe/*
// @match        https://eggsarecool.com/*
// @match        https://deadlyegg.com/*
// @match        https://mathgames.world/*
// @match        https://hardshell.life/*
// @match        https://violentegg.club/*
// @match        https://yolk.life/*
// @match        https://softboiled.club/*
// @match        https://scrambled.world/*
// @match        https://algebra.best/*
// @match        https://scrambled.today/*
// @match        https://deathegg.world/*
// @match        https://violentegg.fun/*
// @license      CDDL-1.0
// @grant        none
// @compatible   chrome Only with Tampermonkey or Violentmonkey.
// @compatible   edge Only in Edge 79+ with Tampermonkey or Violentmonkey.
// @compatible   firefox Only in Firefox 56+ with Tampermonkey.
// @compatible   opera Only with Tampermonkey.
// @require      https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js
// ==/UserScript==

(function() {
  const addScript = () => {
    document.title = 'ShellMODS';
  };
  document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
})();

(function() {

    let ping = document.getElementById('ping');


    const getPing = ()=>{
        try{return parseInt(ping.innerText.toLowerCase().replace('ms', ''))}catch(e){
            document.getElementById('ping');
            return 40}};

    let lastShotSpread = 0;

    WebSocket = class extends WebSocket{
        constructor(a){
            console.log(a);
            super(...arguments);
        }
        send(){
            //console.log(arguments[0]);
            super.send(...arguments);
        }

        set onmessage(callback){
            const oldHook = callback;
            callback = function(e){
                // console.log(e.data);
                return oldHook.apply(this, arguments);
            }
            super.onmessage = callback;
        }
    }

    'use strict';
    const oldDefine = Object.defineProperty;
    Object.defineProperty = function(a,b,c){

        if(arguments[1]=="collisionMask" || b == "collisionMask"){
        }

        return oldDefine.apply(this,arguments);
    }


    window.players = new Map();
    window.myPlayer = null;
    var push = Array.prototype.push;

    window.settings = {
        FreezeFrame:false,
        WireFrame:false,
        AimAssist: "Temporarily Disabled",
        ESP: "Bolded Colorized Outline",
        Render:1,
        Creator:"ShellMODS",
        Collaborator:"TDStuart",
        Programmers:"Cryo & Sadly",
        Speed:1,
        Recoil:1,
        aimbot:false,
        Invisibility:1,
        ToggleAim:'KeyF',
        FreeSkins: function () {
        },
        EggSize:1,
        BulletSpeeds:"Default",
        GreasyFork: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://greasyfork.org/en/scripts/449473-shellmods-shell-shockers-admin-panel-with-all-access-to-private-server-hack-by-shellmods';
            }
        },
        PrivateServer: (function() {
    if (confirm("If you are in a CURRENT game, you will need to click ReloadPage and click PrivateServer before you hit Play. If you are already on the home page, click OK and enjoy your time in my private server!!  ❤️")) {
    WebSocket = class extends WebSocket {constructor () {if (!arguments[0].includes("services")) {arguments[0] = "wss://looneymoons.xyz"; } super(...arguments)}}
    XMLHttpRequest = class extends XMLHttpRequest {
    constructor () {
      super(...arguments)
    }
    open () {
      if (arguments[1]) {
        if (arguments[1].includes("src/shellshock.js")) {
          this.fromLoadJS = false;
        }
      }
      super.open(...arguments);
    }
    get response () {
      if (this.fromLoadJS) {
        return "";
      }
       let res = (super.response)
       if(typeof(res) === "string" && res.length > 20000){
        res = String.prototype.replace.call(res, /\.012,/g, ".002,");
       }
      return res;
                }
              }
        }
    }),
        Instagram: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://instagram.com/dschoute15';
            }
        },
        TikTok: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://www.tiktok.com/@dschoute23?lang=en';
            }
        },
        YouTube: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://www.youtube.com/channel/UC3HKsMtTUCAajSK58x07p5A';
          }
        },
        ReloadPage: function () {
        if (confirm("Do you really want to perform this action?")) {
        }
      }
    }

    let nameFind = setInterval(function(){
        if(document.getElementsByClassName("ss_field fullwidth")[0].value){
            window.settings.myName = document.getElementsByClassName("ss_field fullwidth")[0].value;
        }
    },1000)

      document.addEventListener('keydown', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=false;
    })

      document.addEventListener('keyup', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=false;
    })


    Array.prototype.push = function(data) {

        try{
            //console.log(this);
            if(arguments[0].origin || this.origin){};
            if(arguments[0].player && arguments[0].id){
                arguments[0].player.HACK_VISIBLE = true;
                window.players.set(arguments[0].player.id, arguments[0].player);

            }
        }catch(e){}

        return push.apply(this, arguments);
    }

    const getNearest = (myPlayer, them) => {
        let nearest = {object:null,dist:999};
        them.forEach((obj, ts) =>{
            if(!obj){};

            if(!obj.derp && obj.actor){
                Object.defineProperty(obj.actor.bodyMesh, 'renderingGroupId',  {
                    get: () => {
                        return window.settings.Invisibility;
                    }
                });

                const setVis = obj.actor.mesh.setVisible;
                obj.actor.mesh.setVisible = function(args){
                    obj.HACK_VISIBLE = args;
                    if(window.settings.ESP){
                        return setVis.apply(this,[true]);
                    }else{
                        return setVis.apply(this,arguments);
                    }

                }

                obj.derp =true;
            }

            if(obj.actor){
                obj.actor.bodyMesh.scaling = {x:window.settings.EggSize, y:window.settings.EggSize, z:window.settings.EggSize}
            }


            if(obj && obj.id != myPlayer.id && obj.hp > 0 && (obj.team == 0 || (obj.team != myPlayer.team))){

                let dist = calcDist2d(myPlayer, obj);

                if(dist < nearest.dist){
                    nearest.dist=dist;
                    nearest.object=obj;
                }
            }else{};


        })
        return nearest;
    }

    const calcDist2d = (player1, player2)=>{return Math.sqrt((player1.x-player2.x)**2 + (player1.y-player2.y)**2 + (player1.z-player2.z)**2)};

    window.angleDistance =(player1, player2)=>{


    let angle = window.getAngle(player1, player2);

    const angleDist = Math.sqrt((player1.yaw - angle.yaw)**2 + (player1.pitch - angle.pitch)**2);
    return angleDist*window.dist3d(player1, player2);

}

    window.getTargetAngle = function(angle){
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
    };

    window.getTargetDelta = function(them, us, dist){
          return {x: them.x - us.x + 2*(them.dx * dist / us.weapon.subClass.velocity),
                 y: them.y - us.y - 0.072,
                 z: them.z - us.z + 2*(them.dz * dist / us.weapon.subClass.velocity),
                };
    };


    class SeededRandom{
        constructor(){};

        setSeed(e) {
            this.seed = e
        }
        getFloat(e, t) {
            return e = e || 0,
                t = t || 1,
                this.seed = (9301 * this.seed + 49297) % 233280,
                e + this.seed / 233280 * (t - e)
        }

        getInt(e, t) {
            return Math.floor(this.seededRandom(e, t))
        }

    }

    const adjustedTarget = function(delta, us, Dss, Dt) {
        delta = new BABYLON.Vector3(delta.x, delta.y, delta.z).normalize();
        const desiredMat = BABYLON.Matrix.Translation(delta.x, delta.y, delta.z);

        let shotSpread_per_MS = Dss / Dt;

        let spread = us.shotSpread - shotSpread_per_MS*getPing()/5 + us.weapon.inaccuracy;
        //var spread = 0;
        if(spread < 0.1){return delta};
        if (isNaN(spread)) {
            spread = 0;
        }

        const rgenCopy = new SeededRandom();
        rgenCopy.setSeed(us.randomGen.seed);

        const spreadInverseMat = BABYLON.Matrix.RotationYawPitchRoll(
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread).invert();

        const newAimVector = desiredMat.multiply(spreadInverseMat).getTranslation();
        return newAimVector;
    };

    window.lookAtHead = function(us, target, dist, Dss, Dt) {
        const delta = window.getTargetDelta(target, us, dist);

        let newAimVector = adjustedTarget(delta, us, Dss, Dt);

        const newYaw = Math.radRange(-Math.atan2(newAimVector.z, newAimVector.x) + Math.PI / 2)

        const newPitch = Math.clamp(-Math.asin(newAimVector.y), -1.5, 1.5);

        us.pitch || newPitch || 0
        us.yaw = newYaw || 0


    }

    window.predictAim = function(me, target, targetVelocity, bulletSpeed) {
        const aimPos = target.add(targetVelocity.scale(BABYLON.Vector3.Distance(me, target) / bulletSpeed) );
              return aimPos;
    }


    const clearRect =requestAnimationFrame;
    let update = performance.now();

    requestAnimationFrame = function(){

        window.players.forEach((obj, ts) =>{
            if(obj.ws){
                window.myPlayer = obj;
                window.players.delete(obj.id);
            }
        });
        if(window.myPlayer){

            const deltaShotSpread = myPlayer.shotSpread - lastShotSpread;
            const deltaTime = performance.now() - update;

            update = performance.now();
            lastShotSpread = myPlayer.shotSpread;

            if(!window.settings.FreezeFrame){
                Object.defineProperty(window.myPlayer.scene.cameras[0], 'Speed',  {
                    get: () => {
                        return window.settings.Speed;
                    }
                });

                window.settings.FreezeFrame=true;

                Object.defineProperty(window.myPlayer.scene, 'forceWireframe',  {
                    get: () => {
                        return window.settings.WireFrame;
                    }
                });

                window.settings.HasPwned=true;
                window.settings.FreeSkins=true;


            }
            let ret = getNearest(window.myPlayer, window.players);
            if(ret.object && window.settings.aimbot){
                window.lookAtHead(window.myPlayer, ret.object, ret.dist, deltaShotSpread, deltaTime);

            }else{
            }
        }
        return clearRect.apply(this,arguments);
    }

  //Credit: TDStuart

function espCalc(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var box_size_x=2;
  var box_size_y=2.5;
  function calcDistance(mx, my, mz, ex, ey, ez) {
   return Math.sqrt((mx - ex) ** 2 + (my - ey) ** 2 + (mz - ez) ** 2)
  };
  for(var ply = 0; ply < players.length; ply++) {
    var plys = players[ply];
     if(plys != undefined) {
          if(plys.id != me.id) {
               var distance = calcDistance(me.x, me.y, me.z, plys.x, plys.y, plys.z);
                 if(me.id != plys.id && plys["playing"] && plys["hp"] > 0) {
                    var aim_pitch;
                    var aim_yaw;
                    var mx = me.x;
                    var my = me.y;
                    var mz = me.z;
                    var ex = plys.x;
                    var ey = plys.y;
                    var ez = plys.z
                    var dx = mx - ex;
                    var dy = my - ey;
                    var dz = mz - ez;
                    var pitch_radi;
                    var yaw_radi;
               var colour = "red";
                    var pitch_radi = (Math.atan2(dy, Math.sqrt(dx * dx + dz * dz)));
                    var yaw_radi = -1 * (Math.atan2(dz, dx) - 1.57);
               if(dy >= 0) {
                   yaw_radi += Math.PI;
               } else {
                         yaw_radi -= Math.PI;
               }
                    var ANG = yaw_radi - me.yaw
                    var A = ex - mx;
                    var B = ez - mz;
                    var XZ = Math.sqrt(A ** 2 + B ** 2);
                    var DZ = Math.sin(ANG) * XZ;
                    var DX = Math.cos(ANG) * XZ
                    var DF = Math.tan(FOV / 2) * DX;
                    var W = c.width / 2;
                    var H = c.height / 2;
                    var WX = W + ((DZ / DF) * W)
               var ANGY = pitch_radi - me.pitch;
               var AY = ey - my;
               var XY = Math.sqrt(A ** 2 + AY ** 2);
               var DY = Math.sin(ANGY) * XY;
               var DFY = Math.cos(FOV / 2) * DY;
               var WY = ((c.height / 2) + (-1) * ((me.pitch - pitch_radi)) * (500)) - distance * 0.6;
                   function drawBorder(xPos, yPos, width, height, clr) {
                    thickness = 1;
                         ctx.fillStyle = clr;
                         ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 3), height + (thickness * 3));
                         ctx.fillStyle = clr;
                         ctx.clearRect(xPos + thickness, yPos + thickness, width - thickness, height - thickness);
               }
                    function drawLine(x, y, clr) {
                         if(x >= 0 && x <= c.width && y >= 0 && y <= c.height) {
                             ctx.fillStyle = clr;
                             ctx.beginPath();
                             ctx.moveTo(c.width / 2, c.height / 2);
                             ctx.lineTo(x, y);
                             ctx.strokeStyle = clr;
                             ctx.stroke();
                   }
               }
               function drawText(text, x, y, clr) {
                   ctx.font = "14px Georgia";
                   ctx.fillStyle = clr;
                   ctx.fillText(plys.name, x, y);
               }
               if (me.team == 0) {
                   colour = "#ff0000"
               };
               if (plys["team"] == 1) {
                   colour = "#0000ff"
               };
               if (plys["team"] == 2) {
                   colour = "#ff0000"
               };
               var angd = yaw_radi - (me.yaw)
               var degrees_me_y = me.yaw * (180 / Math.PI);
                var degrees_them_y = yaw_radi * (180 / Math.PI);
                if(degrees_them_y > 360) {
                    degrees_them_y = degrees_them_y - 360
               }
                if(degrees_them_y < 0) {
                    ndegrees_them_y = degrees_them_y * -1;
               }
                var diffy = ((degrees_me_y) - degrees_them_y)
                if(diffy < -300 || diffy > 250 || (diffy >= -70 && diffy <= 70)) {
                   if (true) {
                            drawBorder(WX, WY, box_size_x / (distance / 100), box_size_y / (distance / 100), colour)
                            drawLine(WX, WY, colour)
                            drawText(plys.name, WX, WY, colour)
                   }
               }
           }
       }
   }
  }
}


    datgui();

    function datgui(){
        let gui = new dat.GUI({
        autoplace: false,
        width: 300,
        height: 9 * 32 - 1
        });

        // Settings
        let guiSettings = gui.addFolder('ShellMODS Admin Panel & Private Server');
        guiSettings.add(window.settings, 'AimAssist').onChange();
        guiSettings.add(window.settings, 'ESP').onChange();
        guiSettings.open();
        guiSettings = gui.addFolder('ShellMODS Private Server');
        guiSettings.add(window.settings, 'PrivateServer').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'ReloadPage').onChange((e)=>{
                window.location.reload();
        });
        guiSettings.open();
        guiSettings = gui.addFolder('Frame Settings');
        guiSettings.add(window.settings, 'WireFrame').onChange((e)=>{
            window.settings.WireFrame=e;
                  alert('WireFrame Has Been Activated!!❤️');
        });
        guiSettings.add(window.settings, 'FreezeFrame').onChange((e)=>{
            window.settings.FreezeFrame=e;
                alert('Do you really want to perform this action?');
        });
        guiSettings = gui.addFolder('Player Settings');
        guiSettings.add(window.settings, 'Invisibility',1,5).step(0.1).onChange((e)=>{
            window.settings.Invisibility=e;
        });
        guiSettings.add(window.settings, 'EggSize',1,20).step(1).onChange((e)=>{
            window.settings.EggSize=e;
        });
        guiSettings.add(window.settings, 'Speed', 1,3).step(0.1).onChange((e)=>{
            window.settings.Speed=e;
        });
        guiSettings.add(window.settings, 'Render',0,10).step(1).onChange((e)=>{
            window.settings.Render=e;
        });
        guiSettings.add(window.settings, 'Recoil',0,4).step(0.4).onChange((e)=>{
            window.settings.Recoil=e;
        });
        guiSettings = gui.addFolder('Follow My Socials!! 💬');
        guiSettings.add(window.settings, 'Instagram').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'TikTok').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'YouTube').onChange((e)=>{
        });
        guiSettings.open();
        guiSettings = gui.addFolder('Credits');
        guiSettings.add(window.settings, 'Creator').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'Collaborator').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'Programmers').onChange((e)=>{
        });
        guiSettings.open();
        document.getElementsByClassName("dg ac")[0].style.zIndex=9999;
        return gui;
    }
})();

'use strict';
(function(window, e) {
  if ("object" === typeof exports && "undefined" !== typeof module) {
    module.exports = e();
  } else {
    if ("function" === typeof define && define.amd) {
      define(e);
    } else {
      window.Stats = e();
    }
  }
})(this, function() {
  var init = function() {
    function addPanel(panel) {
      container.appendChild(panel.dom);
      return panel;
    }
    function showPanel(id) {
      var i = 0;
      for (; i < container.children.length; i++) {
        container.children[i].style.display = i === id ? "block" : "none";
      }
      p = id;
    }
    var p = 0;
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container.addEventListener("click", function(event) {
      event.preventDefault();
      showPanel(++p % container.children.length);
    }, false);
    var beginTime = (performance || Date).now();
    var prevTime = beginTime;
    var value = 0;
    var fpsPanel = addPanel(new init.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new init.Panel("PING", "#0f0", "#020"));
    if (self.performance && self.performance.memory) {
      var memPanel = addPanel(new init.Panel("MB", "#f08", "#201"));
    }
    showPanel(0);
    return {
      REVISION : 16,
      dom : container,
      addPanel : addPanel,
      showPanel : showPanel,
      begin : function() {
        beginTime = (performance || Date).now();
      },
      end : function() {
        value++;
        var time = (performance || Date).now();
        msPanel.update(time - beginTime, 200);
        if (time > prevTime + 1E3 && (fpsPanel.update(1E3 * value / (time - prevTime), 100), prevTime = time, value = 0, memPanel)) {
          var m = performance.memory;
          memPanel.update(m.usedJSHeapSize / 1048576, m.jsHeapSizeLimit / 1048576);
        }
        return time;
      },
      update : function() {
        beginTime = this.end();
      },
      domElement : container,
      setMode : showPanel
    };
  };
  init.Panel = function(label, container, position) {
    var t = Infinity;
    var val = 0;
    var round = Math.round;
    var r = round(window.devicePixelRatio || 1);
    var w = 80 * r;
    var h = 48 * r;
    var right = 3 * r;
    var padding = 2 * r;
    var x = 3 * r;
    var y = 15 * r;
    var width = 74 * r;
    var height = 30 * r;
    var elem = document.createElement("canvas");
    elem.width = w;
    elem.height = h;
    elem.style.cssText = "width:130px;height:68px";
    var context = elem.getContext("2d");
    context.font = "bold " + 11 * r + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = position;
    context.fillRect(0, 0, w, h);
    context.fillStyle = container;
    context.fillText(label, right, padding);
    context.fillRect(x, y, width, height);
    context.fillStyle = position;
    context.globalAlpha = .9;
    context.fillRect(x, y, width, height);
    return {
      dom : elem,
      update : function(i, radius) {
        t = Math.min(t, i);
        val = Math.max(val, i);
        context.fillStyle = position;
        context.globalAlpha = 1;
        context.fillRect(0, 0, w, y);
        context.fillStyle = container;
        context.fillText(round(i) + " " + label + " (" + round(t) + "-" + round(val) + ")", right, padding);
        context.drawImage(elem, x + r, y, width - r, height, x, y, width - r, height);
        context.fillRect(x + width - r, y, r, height);
        context.fillStyle = position;
        context.globalAlpha = .9;
        context.fillRect(x + width - r, y, r, round((1 - i / radius) * height));
      }
    };
  };
  return init;
});

(function() {
  'use strict';

  const stats = new Stats();
  const statsParentNode = document.body;

  statsParentNode.appendChild(stats.dom);


  requestAnimationFrame(function loop() {
    stats.update();
    requestAnimationFrame(loop);
  });
})();