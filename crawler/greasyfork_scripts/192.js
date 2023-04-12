// ==UserScript==
// @name         evoworld.io Cheats
// @namespace    http://tampermonkey.net/
// @version      1.9
// @author       @jmatg1
// @name:ru      evoworld.io Читы
// @description:ru evoworld.io Ночное виденье, видим скрытых игроков
// @match        https://evoworld.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evoworld.io
// @grant        none
// @description "evoworld.io Cheats"
// ==/UserScript==

let spawnTimeCord = [];
const showTimeSpawnFood = (val) => {
  //return
if(game.objectsDef[game.gameObjects[val.a]?.name + '_spawn']){
    const position = game.gameObjects[val.a].position;

    if(spawnTimeCord.find(el => el.x === position.x && el.y === position.y)) return;
    console.log(game.gameObjects[val.a]?.name + '_spawn', position);
    spawnTimeCord.push(position);
    let delay = game.objectsDef[game.gameObjects[val.a]?.name + '_spawn'].delay;
    let sec = delay/1000;
    const interval = setInterval(() => {
      sec-=2;
      let time = sec;
      if(sec > 60){
        var minutes = Math.floor(sec / 60);
        var seconds = sec % 60;
        time = String(minutes).padStart(2,'0')+':'+String(seconds).padStart(2,'0');
      }
      textEffects.push({
        "posX": position.x,
        "posY": position.y,
        "color": "#FE6500",
        "text": time,
        "fontSize": 14,
        "bold": true,
        "startTime": new Date().getTime() + 100,
        "static": false
      });
      }, 2000);

    setTimeout(() => {
        spawnTimeCord = spawnTimeCord.filter(el => el.x !== position.x && el.y !== position.y);
      clearInterval(interval);
    }, delay);

  }
}

const fixChatMenu = () => {
            showEmotesMenu = function() {
                if (chatDisabled) {
                    return;
                };
                if (imDead || !joinedGame || Date.now() - joinTime < 1e3 || Date.now() - lastEmotesMenuOpenedTime < 1e3) {
                    return;
                };
                $($(".wheel-button").attr("href")).showIcon($(".wheel-button"), {animation: "fade", animationSpeed: [0, 250], angle: [0, 360]});
                $("#chatmenu").finish().fadeIn();
                $("#scan-players-icon").fadeIn();
                emotesMenuOpened = true;
                lastEmotesMenuOpenedTime = Date.now();
            }
};

const zoomHack = (a, aa, aaa, aaaaa, a2) => {
      game.canvas.addEventListener("wheel", function () {
          if (!joinedGame || typeof event == "undefined") {
              return;
          };
          var qwe = 0.1;
          if (event.deltaY > 0) {
              qwe *= -1;
          };
          gameZoom += qwe;
          event.preventDefault();
      });

    Engine.prototype.setZoom = function (ret) {
        if(ret<=0.7) {
            ret= 0.7;
        }
        if (this.zoom == ret) {
            return;
        }
        this.zoom = ret;
        this.staticCanvasRenderOffset.restX = 0;
        this.staticCanvasRenderOffset.restY = 0;
        this.staticCanvasRenderOffset.x = 0;
        this.staticCanvasRenderOffset.y = 0;
        this.staticCanvasRenderPosition.x = 0;
        this.staticCanvasRenderPosition.y = 0;
        this.context.save();
        this.context.fillStyle = "rgba(0,0,0,1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.restore();
        this.staticContext.save();
        this.staticContext.fillStyle = "rgba(0,0,0,1)";
        this.staticContext.fillRect(0, 0, this.staticCanvas.width, this.staticCanvas.height);
        this.staticContext.restore();
        this.dynamicContext.clearRect(0, 0, this.dynamicCanvas.width, this.dynamicCanvas.height);
        this.clearStaticObjects();

    }
}

const doesntHidePlayersFunc = (value) => {
    petFunc(value);
    if(value?.type === 1 || value?.type === 3) {
        value.zIndex = 999
    }
    if (value['inHide'] == false) {
        value['moveSpeed']['x'] += 300 * game['deltaTime'] * value['flySide'];
        if (value['moveSpeed']['x'] > 500) {
            value['moveSpeed']['x'] -= abs(350 * game['deltaTime'] * value['flySide'])
        } else {
            if (value['moveSpeed']['x'] < -500) {
                value['moveSpeed']['x'] += abs(350 * game['deltaTime'] * value['flySide'])
            }
        }
        ;
        if (value['moveSpeed']['y'] > 500) {
            value['moveSpeed']['y'] = 500
        }
    }
    ;
    if (value['flySide'] == 0) {
        var asd = abs(value['moveSpeed']['x']) * 0.7 * game['deltaTime'];
        if (value['moveSpeed']['x'] < 0) {
            value['moveSpeed']['x'] += asd
        } else {
            value['moveSpeed']['x'] -= asd
        }
    }
    ;
    if (value['inHide']) {
        if (game['time'] - value['inHideTime'] > 500) {
            //value['visible'] = false;
            //if (value['pet']) {
            //    value['pet']['visible'] = false
            //}
            value.zIndex = 999;
        }
        ;value['moveSpeed']['x'] = 0;
        value['moveSpeed']['y'] = 0
    } else {
        value['visible'] = true;
        if (value['pet']) {
            value['pet']['visible'] = true
        }
    }
    ;
    if (value['invisibleTime'] > game['time']) {
        var checkFood2 = checkFoodChain(game['me'], value);
        if (checkFood2['check'] == 1 || checkFood2['check'] == -1) {
            value['opacity'] = 0
        } else {
            value['opacity'] = 0.2
        }
    } else {
        value['opacity'] = 1
    }
    ;value['interpolateSpeed'] = 0.015;
    if (value['grabbed']) {
        value['interpolateSpeed'] = 0.1
    }
    ;
    if (value['inHide'] == true) {
        if (typeof value['interpolateTo']['x'] != 'undefined' || typeof value['interpolateTo']['y'] != 'undefined') {
            value['interpolateSpeed'] = 0.05;
            game['interpolatePosition'](value)
        }
        ;
        return false
    }
}

const darkOff = (a, aa, aaa, aaaaa, a2) => {
    return
}
let timer = null;
function hello() {    
  if(timer) {
      return;
  }
    timer = true;
    sendChat(45);
  setTimeout(() => {
   sendChat(8);
      timer = false;
  }, 5000)
}


const outline = (value) => {
    setAnimations(value);
    if(value.nick === "jmatg1" && game.me.nick !== "jmatg1") {
        value.opacity = 0;
        value.visible = 0;
        hello();
    } else {
       if(timer) {
       clearInterval(timer);
     }
    }
    if (game.me.inSafeZone || value.inSafeZone) {
        value.outline = null;
    } else {
        var checkFood2 = checkFoodChain(game.me, value);
        if (checkFood2.check == 1) {
            value.outline = "#00cc44";
            if (checkFoodChain(value, game.me).check == 1) {
                value.outline = "orange";
            }
            ;
            value.outlineWeight = 5;
        } else {
            if (checkFood2.check == -1) {
                value.outline = "red";
                value.outlineWeight = 5;
            } else {
                value.outline = null;
            }
        }
    }
};


const styles = `
<style>
#gameContainer .scanPlayers {
  position: fixed;
  left: 72vw;
  top: 0;
  right: 0px;
  background: none;
  display: flex;
  transform: none;
  padding: 0;
  margin: 0;
}
.scanPlayers div {
    display: flex !important;
    flex-direction: column;
}
#gameContainer .scanPlayers>.title{
  display: none;
}

#gameContainer .scanPlayers .player{
    background: none;
    border: 0;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
}

#gameContainer .scanPlayers .nick,
.scanPlayers .experienceBar,
.scanPlayers .close,
.scanPlayers .title,
.scanPlayers button{
  display: none !important;
}
#enemy-detect {
  position: absolute;
  border-radius: 50%;
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  box-shadow: 0px 0px 20px 0px #ff000080;
}
</style>
`;

(function () {
    'use strict';
    let i_i = 0;
    let inj = false;

    const interval = setInterval(() => {


        if(window?.objectHandlerFunc_PLAYER){
            objectHandlerFunc_PLAYER = doesntHidePlayersFunc;
            startBonus = true;
        }

        if(window?.animateObject){
            animateObject = outline;
        }


        if(window?.removeObject){
            const orRO = window?.removeObject;
            removeObject = (val) => {
                showTimeSpawnFood(val);
                orRO(val);
            };
            console.log('showTimeSpawnFood');
        }

        if (window?.wasSocketInit && window?.joinedGame && !window?.imDead && !inj) {

            drawDarkness = darkOff;

            gameServer.off(socketMsgType.SCANPLAYERS);
            gameServer.on(socketMsgType.SCANPLAYERS, function (arr) {
                scanPlayersArr = arr.filter(el => {
                    return checkFoodChain(game.objectsDef[el.evolution], game.me).check === 1
                });

                if(scanPlayersArr.length > 0){
                    $('#enemy-detect').show();
                } else {
                    $('#enemy-detect').hide();
                }
                showPlayersScans();
            });

            setInterval(() => {
                gameServer.emit(socketMsgType.SCANPLAYERS);
            }, 500)
            i_i++;
            document.body.onkeyup = function(e) {
                if (e.key == " " || e.code == "Space" || e.keyCode == 32){
                    if(joinedGame && imDead){
                        startBonus = true;
                        playAgain();
                    }
                }
                 if (e.keyCode == 81){
                    if(joinedGame && !imDead){
                        sendEmote(1); // dislike
                    }
                }
                 if ( e.keyCode == 69){
                    if(joinedGame && !imDead){
                        sendEmote(10); // haha
                    }
                }
            }

            inj = true;
        }

        if (inj) {
            clearInterval(interval);
            document.head.insertAdjacentHTML("beforeend", styles);
            $('#gameContainer').append('<div id="enemy-detect"></div>');
            zoomHack();
            fixChatMenu();

        }
    }, 500);

})();
