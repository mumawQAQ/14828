// ==UserScript==
// @name         Auto Builder/Upgrader
// @version      1.3
// @description  Best Autobuilder/Upgrader For Diep.io By ArslanYT
// @author       ArslanYT
// @match        https://diep.io/
// @grant        none
// @license MIT
// @namespace https://greasyfork.org/users/970291
// ==/UserScript==

(function () {
  "use strict";
  var textG = document.createElement("div");
  document.getElementsByTagName("body")[0].appendChild(textG);
  textG.innerHTML = `
<!DOCTYPE html>
<html>

<head>
  <style>
    #main {
      background-image: url("https://wallpapercave.com/wp/wp5102770.jpg");
      background-size: cover;
      background-attachment: scroll;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 120px;
      right: 0;
      padding: 20px;
      width: 200px;
      text-decoration: none;
      font-size: 20px;
      font-family: 'IBM Plex Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
      color: white;
      border-style: solid;
      border-width: 5px;
      border-top-left-radius: 30px 30px;
      border-top-width: 5px;
      border-style: single;
      border-bottom-left-radius: 30px 30px;
      border-top-color: black;
      border-left-color: black;
      border-bottom-color: black;
      border-right-color: black;
    }

    #UI {
      top: 0px;
      background-color: #5555
    }

    .button {
      background-color: #E74C3C;
      border: 2px solid black;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 5px;
      text-align: center;
      line-height: 0px;
      width: 200px;
      height: 26px;
      transition-duration: 0.4s;
      cursor: pointer;
      font-family: 'IBM Plex Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap');
    }

    .stable {
      font-size: 20px;
      border-color: #black;
      color: white;
      padding: 12px 32px;
      margin: 2px 0px;
    }

    .stable:hover {
      background-color: #CB4335;
      transform: translateX(-10px);
    }

    .antibullet {
      font-size: 20px;
      border-color: #black;
      color: white;
      padding: 12px 32px;
      margin: 2px 0px;
    }

    .antibullet:hover {
      background-color: #CB4335;
      transform: translateX(-10px);
    }

    .glass {
      font-size: 20px;
      border-color: #black;
      color: white;
      padding: 12px 32px;
      margin: 2px 0px;
    }

    .glass:hover {
      background-color: #CB4335;
      transform: translateX(-10px);
    }

    .rammer {
      font-size: 20px;
      border-color: #black;
      color: white;
      padding: 12px 32px;
      margin: 2px 0px;
    }

    .rammer:hover {
      font-size: 20px;
      background-color: #CB4335;
      transform: translateX(-10px);
    }

    .youtube {
      font-size: 26px;
      width: 200px;
      height: 35px;
      border-color: #white;
      color: white;
      padding: 12px 32px;
      margin: 1px 0px;
    }

    .youtube:hover {
      background-color: #CB4335;
      transform: translateX(-10px);
    }

    .tab {
      font-size: 14px;
      text-align: center;
      color: white;
      position: absolute;
      top: 90px;
      width: 200px;
      height: 26px;
      font-family: Arial;
      color: #FFFFFF background-color: transparent;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      padding: 12px 32px;
      cursor: default;
    }
  </style>
</head>

<body>
  </style>
  </head>

  <body>
    <div id="main" class="hover">
      <a id="ui">
        <h1 style="text-align:center;
        cursor: default;
        font-family:Arial;
        text-shadow: -1px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
        color:#FFFFFF">ArslanYT</h1>
        <button class="button tab">Press T To Hide</button>
        <button class="button youtube"
          onclick="window.open('https://www.youtube.com/channel/UCqB5BYZpgFWaHLHtXID4ukQ?sub_confirmation=1','_blank')">YouTube</button>
        <br><br><button class="button stable" /*
          onclick="input.execute('game_stats_build 765421765421765421765421765421765')">Stable</button>
        <button class="button antibullet"
          onclick="input.execute('game_stats_build 212127654765476547654765476547652')">Bullet Storm</button>
        <button class="button glass" onclick="input.execute('game_stats_build 567567485675674856748567456744488')">Glass
          Cannon</button>
        <button class="button rammer"
          onclick="input.execute('game_stats_build 111888232323232323231181188867676')">Rammer</button>
      </a>
    </div>
  </body>

</html>
`;
  function hide() {
    var x = document.getElementById("main");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  document.body.onkeyup = function (ep) {
    if (ep.keyCode === 84) {
      hide();
    }
  };
})();