// ==UserScript==
// @name         KPin Checker
// @namespace    http://tampermonkey.net/
// @homepage     https://theusaf.org
// @version      1.4.0
// @license      MIT
// @description  Check the pin of a kahoot game.
// @author       theusaf
// @match        *://play.kahoot.it/*
// @exclude      *://play.kahoot.it/v2/assets/*
// @icon         https://kahoot-win.com/resource/img/game/medal/gold.svg
// @copyright    2020-2022, Daniel Lau (https://github.com/theusaf/kahoot-antibot)
// @grant        none
// @run-at       document-start
// ==/UserScript==

if (window.fireLoaded || (window.parent && window.parent.PinCheckerMain)) {
  throw "[PIN-CHECKER] - Already loaded.";
}
console.log("[PIN-CHECKER] - Looking for AntiBot");

/**
 * PinCheckerMain - The main pin checking function
 */
window.PinCheckerMain = function () {
  function listenForTeamMode() {
    document
      .querySelector("[data-functional-selector=team-mode-card]")
      .addEventListener("click", () => {
        console.log("[PIN-CHECKER] - Entered team mode card.");
        setTimeout(() => {
          document
            .querySelector(
              "[data-functional-selector=launch-page] > div:nth-of-type(4) button"
            )
            .addEventListener("click", () => {
              console.log("[PIN-CHECKER] - Listening again");
              setTimeout(() => listenForTeamMode(), 250);
            });
          document
            .querySelector("[data-functional-selector=start-team-mode-button]")
            .addEventListener("click", () => {
              console.log("[PIN-CHECKER] - Using team mode.");
              windw.localStorage.PinCheckerMode = "team";
            });
        }, 250);
      });
  }

  const windw = window.parent;
  window.windw = windw;

  const loader = setInterval(() => {
    if (!document.querySelector("[data-functional-selector=team-mode-card]")) {
      return;
    }
    console.log("[PIN-CHECKER] - Ready!");
    clearInterval(loader);
    listenForTeamMode();

    if (document.querySelector("#antibotwtr")) {
      const p = document.createElement("p");
      p.innerHTML = "[KPC] v1.4.0";
      document.querySelector("#antibotwtr").append(p);
    }

    if (windw.localStorage.PinCheckerAutoRelogin === "true") {
      const waiter = setInterval(() => {
        let a = document.querySelector(
          "[data-functional-selector=classic-mode-card]"
        );
        if (windw.localStorage.PinCheckerMode === "team") {
          a = document.querySelector(
            "[data-functional-selector=team-mode-card]"
          );
        }
        if (a && !a.disabled) {
          const guestButton = document.querySelector(
            "[data-functional-selector=play-as-guest-button]"
          );
          if (guestButton) {
            guestButton.click();
          }
          a.click();
          if (windw.localStorage.PinCheckerMode === "team") {
            setTimeout(() => {
              document
                .querySelector(
                  "[data-functional-selector=start-team-mode-button]"
                )
                .click();
            }, 250);
          }
          windw.localStorage.PinCheckerAutoRelogin = false;
          if (
            +windw.localStorage.PinCheckerLastQuizIndex <=
            (
              windw.specialData.kahootCore ||
              windw.antibotData.kahootInternals.kahootCore
            ).game.core.playList.length
          ) {
            (
              windw.specialData.kahootCore ||
              windw.antibotData.kahootInternals.kahootCore
            ).game.navigation.currentQuizIndex =
              +windw.localStorage.PinCheckerLastQuizIndex || 0;
          }
          clearInterval(waiter);
          delete windw.localStorage.PinCheckerMode;
          delete windw.localStorage.PinCheckerLastQuizIndex;
          // check for start button
        }
      }, 500);
    } else {
      delete windw.localStorage.PinCheckerMode;
    }
  }, 500);
  let checks = 0;
  const themeLoadChecker = setInterval(() => {
    const errButton = document.querySelector('[data-functional-selector="dialog-actions"]');
    if (errButton) {
      clearInterval(themeLoadChecker);
      errButton.querySelector("button").click();
    } else if (++checks > 10) {
      clearInterval(themeLoadChecker);
    }
  }, 500);

  windw.PinCheckerNameList = [];
  windw.PinCheckerPin = null;
  windw.PinCheckerSendIDs = {};
  windw.specialData = windw.specialData || {};
  windw.PinCheckerFalsePositive = false;
  windw.PinCheckerFalsePositiveTimeout = null;

  /**
   * ResetGame - Reloads the page
   */
  function ResetGame(message) {
    if (windw.PinCheckerFalsePositive) {
      return console.log(
        "[PIN-CHECKER] - Detected false-positive broken pin. Not restarting."
      );
    }
    console.error(message || "[PIN-CHECKER] - Pin Broken. Attempting restart.");
    windw.localStorage.PinCheckerAutoRelogin = true;
    windw.localStorage.PinCheckerLastQuizIndex = (
      windw.specialData.kahootCore ||
      windw.antibotData.kahootInternals.kahootCore
    ).game.navigation.currentQuizIndex;
    windw.document.write(
      "<scr" +
        "ipt>" +
        `window.location = "https://play.kahoot.it/v2/${windw.location.search}";` +
        "</scr" +
        "ipt>"
    );
  }

  /**
   * concatTokens - From kahoot.js.org. Combines the tokens.
   *
   * @param  {String} headerToken    decoded token
   * @param  {String} challengeToken decoded token 2
   * @returns {String}               The final token
   */
  function concatTokens(headerToken, challengeToken) {
    // Combine the session token and the challenge token together to get the string needed to connect to the websocket endpoint
    let token = "";
    for (let i = 0; i < headerToken.length; i++) {
      const char = headerToken.charCodeAt(i),
        mod = challengeToken.charCodeAt(i % challengeToken.length),
        decodedChar = char ^ mod;
      token += String.fromCharCode(decodedChar);
    }
    return token;
  }

  /**
   * CreateClient - Creates a Kahoot! client to join a game
   * This really only works because kahoot treats kahoot.it, play.kahoot.it, etc as the same thing.
   *
   * @param  {Number} pin The gameid
   */
  function CreateClient(pin) {
    console.log("[PIN-CHECKER] - Creating client");
    pin += "";
    const SessionGetter = new XMLHttpRequest();
    SessionGetter.open("GET", "/reserve/session/" + pin);
    SessionGetter.send();
    SessionGetter.onload = function () {
      let SessionData;
      try {
        SessionData = JSON.parse(SessionGetter.responseText);
      } catch (e) {
        // probably not found
        return ResetGame();
      }
      const TokenHeader = atob(
        SessionGetter.getResponseHeader("x-kahoot-session-token")
      );
      let { challenge } = SessionData;
      challenge = challenge.replace(/(\u0009|\u2003)/gm, "");
      challenge = challenge.replace(/this /gm, "this");
      challenge = challenge.replace(/ *\. */gm, ".");
      challenge = challenge.replace(/ *\( */gm, "(");
      challenge = challenge.replace(/ *\) */gm, ")");
      challenge = challenge.replace("console.", "");
      challenge = challenge.replace("this.angular.isObject(offset)", "true");
      challenge = challenge.replace("this.angular.isString(offset)", "true");
      challenge = challenge.replace("this.angular.isDate(offset)", "true");
      challenge = challenge.replace("this.angular.isArray(offset)", "true");
      const merger =
          "var _ = {" +
          "    replace: function() {" +
          "        var args = arguments;" +
          "        var str = arguments[0];" +
          "        return str.replace(args[1], args[2]);" +
          "    }" +
          "}; " +
          "var log = function(){};" +
          "return ",
        solver = Function(merger + challenge),
        ChallengeHeader = solver(),
        FinalToken = concatTokens(TokenHeader, ChallengeHeader),
        connection = new WebSocket(
          "wss://play.kahoot.it/cometd/" + pin + "/" + FinalToken
        ),
        timesync = {};
      let shoken = false,
        clientId = "",
        mid = 2,
        closed = false,
        name = "";
      connection.addEventListener("error", () => {
        console.error(
          "[PIN-CHECKER] - Socket connection failed. Assuming network connection is lost and realoading page."
        );
        ResetGame();
      });
      connection.addEventListener("open", () => {
        connection.send(
          JSON.stringify([
            {
              advice: {
                interval: 0,
                timeout: 60000
              },
              minimumVersion: "1.0",
              version: "1.0",
              supportedConnectionTypes: ["websocket", "long-polling"],
              channel: "/meta/handshake",
              ext: {
                ack: true,
                timesync: {
                  l: 0,
                  o: 0,
                  tc: Date.now()
                }
              },
              id: 1
            }
          ])
        );
      });
      connection.addEventListener("message", (m) => {
        const { data } = m,
          [message] = JSON.parse(data);
        if (message.channel === "/meta/handshake" && !shoken) {
          if (message.ext && message.ext.timesync) {
            shoken = true;
            clientId = message.clientId;
            const { tc, ts, p } = message.ext.timesync,
              l = Math.round((Date.now() - tc - p) / 2),
              o = ts - tc - l;
            Object.assign(timesync, {
              l,
              o,
              get tc() {
                return Date.now();
              }
            });
            connection.send(
              JSON.stringify([
                {
                  advice: { timeout: 0 },
                  channel: "/meta/connect",
                  id: 2,
                  ext: {
                    ack: 0,
                    timesync
                  },
                  clientId
                }
              ])
            );
            // start joining
            setTimeout(() => {
              name = "KCP_" + (Date.now() + "").substr(2);
              connection.send(
                JSON.stringify([
                  {
                    clientId,
                    channel: "/service/controller",
                    id: ++mid,
                    ext: {},
                    data: {
                      gameid: pin,
                      host: "play.kahoot.it",
                      content: JSON.stringify({
                        device: {
                          userAgent: windw.navigator.userAgent,
                          screen: {
                            width: windw.screen.width,
                            height: windw.screen.height
                          }
                        }
                      }),
                      name,
                      type: "login"
                    }
                  }
                ])
              );
            }, 1000);
          }
        } else if (message.channel === "/meta/connect" && shoken && !closed) {
          connection.send(
            JSON.stringify([
              {
                channel: "/meta/connect",
                id: ++mid,
                ext: {
                  ack: message.ext.ack,
                  timesync
                },
                clientId
              }
            ])
          );
        } else if (message.channel === "/service/controller") {
          if (message.data && message.data.type === "loginResponse") {
            if (message.data.error === "NONEXISTING_SESSION") {
              // session doesn't exist
              connection.send(
                JSON.stringify([
                  {
                    channel: "/meta/disconnect",
                    clientId,
                    id: ++mid,
                    ext: {
                      timesync
                    }
                  }
                ])
              );
              connection.close();
              ResetGame();
            } else {
              // Check if the client is in the game after 10 seconds
              setTimeout(() => {
                if (!windw.PinCheckerNameList.includes(name)) {
                  // Uh oh! the client didn't join!
                  ResetGame();
                }
              }, 10e3);
              // good. leave the game.
              connection.send(
                JSON.stringify([
                  {
                    channel: "/meta/disconnect",
                    clientId,
                    id: ++mid,
                    ext: {
                      timesync
                    }
                  }
                ])
              );
              closed = true;
              setTimeout(() => {
                connection.close();
              }, 500);
            }
          }
        } else if (message.channel === "/service/status") {
          if (message.data.status === "LOCKED") {
            // locked, cannot test
            console.log("[PIN-CHECKER] - Game is locked. Unable to test.");
            closed = true;
            connection.send(
              JSON.stringify([
                {
                  channel: "/meta/disconnect",
                  clientId,
                  id: ++mid,
                  ext: {
                    timesync
                  }
                }
              ])
            );
            setTimeout(() => {
              connection.close();
            }, 500);
          }
        }
      });
    };
  }

  windw.PinCheckerInterval = setInterval(() => {
    if (windw.PinCheckerPin) {
      CreateClient(windw.PinCheckerPin);
    }
  }, 60 * 1000);

  /**
   * PinCheckerSendInjector
   * - Checks the sent messages to ensure events are occuring
   * - This is a small fix for a bug in Kahoot.
   *
   * @param  {String} data The sent message.
   */
  windw.PinCheckerSendInjector = function (data) {
    data = JSON.parse(data)[0];
    const n = Date.now();
    let content = {};
    try {
      content = JSON.parse(data.data.content);
    } catch (e) {
      /* likely no content */
    }
    if (data.data && typeof data.data.id !== "undefined") {
      for (const i in windw.PinCheckerSendIDs) {
        windw.PinCheckerSendIDs[i].add(data.data.id);
      }
      // content slides act differently, ignore them
      if (content.gameBlockType === "content") {
        return;
      }

      /**
       * Checks for events and attempts to make sure that it succeeds (doesn't crash)
       * - deprecated, kept in just in case for the moment
       *
       * @param  {Number} data.data.id The id of the action
       */
      switch (data.data.id) {
        case 9: {
          windw.PinCheckerSendIDs[n] = new Set();
          setTimeout(() => {
            if (!windw.PinCheckerSendIDs[n].has(1)) {
              // Restart, likely stuck
              ResetGame(
                "[PIN-CHECKER] - Detected stuck on loading screen. Reloading the page."
              );
            } else {
              delete windw.PinCheckerSendIDs[n];
            }
          }, 60e3);
          break;
        }
        case 1: {
          windw.PinCheckerSendIDs[n] = new Set();
          setTimeout(() => {
            if (!windw.PinCheckerSendIDs[n].has(2)) {
              // Restart, likely stuck
              ResetGame(
                "[PIN-CHECKER] - Detected stuck on get ready screen. Reloading the page."
              );
            } else {
              delete windw.PinCheckerSendIDs[n];
            }
          }, 60e3);
          break;
        }
        case 2: {
          windw.PinCheckerSendIDs[n] = new Set();
          // wait up to 5 minutes, assume something wrong
          setTimeout(() => {
            if (
              !windw.PinCheckerSendIDs[n].has(4) &&
              !windw.PinCheckerSendIDs[n].has(8)
            ) {
              // Restart, likely stuck
              ResetGame(
                "[PIN-CHECKER] - Detected stuck on question answer. Reloading the page."
              );
            } else {
              delete windw.PinCheckerSendIDs[n];
            }
          }, 300e3);
          break;
        }
      }
    }
  };

  /**
   * CloseError
   * - Used when the game is closed and fails to reconnect properly
   */
  windw.CloseError = function () {
    ResetGame("[PIN-CHECKER] - Detected broken disconnected game, reloading!");
  };
};

/**
 * PinCheckerInjector - Checks messages and stores the names of players who joined within the last few seconds
 *
 * @param  {String} message The websocket message
 */
window.PinCheckerInjector = function (socket, message) {
  function PinCheckerFalsePositiveReset() {
    windw.PinCheckerFalsePositive = true;
    clearTimeout(windw.PinCheckerFalsePositiveTimeout);
    windw.PinCheckerFalsePositiveTimeout = setTimeout(function () {
      windw.PinCheckerFalsePositive = false;
    }, 15e3);
  }
  const windw = window.parent,
    data = JSON.parse(message.data)[0];
  if (!socket.webSocket.PinCheckClose) {
    socket.webSocket.PinCheckClose = socket.webSocket.onclose;
    socket.webSocket.onclose = function () {
      socket.webSocket.PinCheckClose();
      setTimeout(() => {
        const StillNotConnected = document.querySelector(
          '[data-functional-selector="disconnected-page"]'
        );
        if (StillNotConnected) {
          windw.CloseError();
        }
      }, 30e3);
    };
  }
  if (!socket.webSocket.PinCheckSend) {
    if (windw.page) {
      // Antibot exists, don't overwrite.
      if (socket.webSocket.oldSend) {
        socket.webSocket.PinCheckSend = socket.webSocket.oldSend;
        socket.webSocket.AntiBotSendData = socket.webSocket.send;
        socket.webSocket.send = function (data) {
          windw.PinCheckerSendInjector(data);
          socket.webSocket.AntiBotSendData(data);
        };
      }
      return;
    }
    socket.webSocket.PinCheckSend = socket.webSocket.send;
    socket.webSocket.send = function (data) {
      windw.PinCheckerSendInjector(data);
      socket.webSocket.PinCheckSend(data);
    };
  }
  try {
    const part =
      document.querySelector('[data-functional-selector="game-pin"]') ||
      document.querySelector(
        '[data-functional-selector="bottom-bar-game-pin"]'
      );
    if (
      Number(part.innerText) != windw.PinCheckerPin &&
      Number(part.innerText) != 0 &&
      !isNaN(Number(part.innerText))
    ) {
      windw.PinCheckerPin = Number(part.innerText);
      console.log("[PIN-CHECKER] - Discovered new PIN: " + windw.PinCheckerPin);
    } else if (Number(part.innerText) == 0 || isNaN(Number(part.innerText))) {
      windw.PinCheckerPin = null;
      console.log(
        "[PIN-CHECKER] - PIN is hidden or game is locked. Unable to test."
      );
    }
  } catch (err) {
    /* Unable to get pin, hidden */
  }
  if (data.data && data.data.type === "joined") {
    PinCheckerFalsePositiveReset();
    windw.PinCheckerNameList.push(data.data.name);
    setTimeout(() => {
      // remove after 20 seconds (for performance)
      windw.PinCheckerNameList.splice(0, 1);
    }, 20e3);
  } else if (data.data && data.data.id === 45) {
    PinCheckerFalsePositiveReset();
  }
};

function makeHttpRequest(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  return new Promise((resolve, reject) => {
    request.onerror = request.onload = () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request);
      } else {
        reject(request);
      }
    };
  });
}

async function kpinImport(url) {
  const importBlobURLs =
      window.kpinBlobURLs ??
      window.parent?.kpinBlobURLs ??
      window.windw?.kpinBlobURLs,
    makeHttpRequest =
      window.kpinMakeHttpRequest ??
      window.parent?.kpinMakeHttpRequest ??
      window.windw?.kpinMakeHttpRequest,
    createBlobURL =
      window.kpinCreateBlobURL ??
      window.parent?.kpinCreateBlobURL ??
      window.windw?.kpinCreateBlobURL;

  console.log(`[KPIN-CHECK] - Handling import of ${url}`);
  // We need to intercept any requests and modify them!
  if (url.startsWith(".")) {
    url = `https://assets-cdn.kahoot.it/player/v2/assets${url.substring(1)}`;
  }
  if (importBlobURLs[url]) {
    console.log(`[KPIN-CHECK] - ${url} already exists.`);
    return import(importBlobURLs[url]);
  } else {
    // check if this url needs to be patched!
    let { response: moduleCode } = await makeHttpRequest(url),
      needsEdit = false;
    const importFunctionRegex = /\bimport\b\(/g,
      importStatementRegex =
        /\bimport\b[\w.\-{}\s[\],:]*?\bfrom\b"[\w.\-/]*?"/g;

    // if it has dynamic import statements
    if (importFunctionRegex.test(moduleCode)) {
      needsEdit = true;
      moduleCode = moduleCode.replace(importFunctionRegex, "kpinImport(");
      moduleCode = `${kpinImport.toString()}${moduleCode}`;
    }
    // if it has a regular import statement
    if (importStatementRegex.test(moduleCode)) {
      // Check if url exists for the import
      for (const imp of moduleCode.match(importStatementRegex)) {
        const [, impURL] = imp.match(/"([\w.\-/]*?)"/);
        let editedImportURL = impURL;
        if (editedImportURL.startsWith(".")) {
          editedImportURL = `https://assets-cdn.kahoot.it/player/v2/assets${editedImportURL.substring(
            1
          )}`;
        }
        if (importBlobURLs[editedImportURL]) {
          needsEdit = true;
          moduleCode = moduleCode.replace(
            impURL,
            importBlobURLs[editedImportURL]
          );
        }
      }
    }
    if (needsEdit) {
      // Create a blob url and import it!
      console.log(`[KPIN-CHECK] - Modifying ${url} and creating blob url.`);
      const blobURL = createBlobURL(moduleCode);
      importBlobURLs[url] = blobURL;
      return import(blobURL);
    } else {
      console.log(`[KPIN-CHECK] - ${url} does not require a blob version.`);
      // So we don't keep checking it each time
      importBlobURLs[url] = url;
      return import(url);
    }
  }
}

function createBlobURL(script) {
  return URL.createObjectURL(
    new Blob([script], { type: "application/javascript" })
  );
}

(async () => {
  if (!window.kantibotEnabled && !window.page) {
    document.write(
      '<p id="pin-checker-loading-notice">[PIN-CHECKER] - Patching Kahoot. Please wait.</p><p>If this screen stays blank for a long time, report an issue in <a href="https://discord.gg/pPdvXU6">Discord</a>, <a href="https://github.com/theusaf/kantibot">GitHub</a>, or <a href="https://greasyfork.org/en/scripts/392154-kpin-checker">Greasyfork</a>.</p>'
    );
    const page = await makeHttpRequest(location.href),
      [script2] = page.response.match(
        /\/\/assets-cdn.*\/v2\/assets\/index.*?(?=")/
      ),
      originalPage = page.response.replace(
        /<script type="module".*?<\/script>/,
        ""
      ),
      script = await makeHttpRequest(script2),
      patchedScriptRegex = /\.onMessage=function\(([$\w]+),([$\w]+)\)\{/,
      [, websocketMessageLetter1, websocketMessageLetter2] =
        script.response.match(patchedScriptRegex);
    let patchedScript = script.response.replace(
      patchedScriptRegex,
      `.onMessage = function(${websocketMessageLetter1},${websocketMessageLetter2}){
           window.globalMessageListener(${websocketMessageLetter1},${websocketMessageLetter2});`
    );
    // Access the core data
    const cr = /[$\w]+\.game\.core/,
      letter6 = patchedScript.match(cr)[0].match(/[$\w]+(?=\.game)/)[0];
    patchedScript = patchedScript.replace(
      cr,
      `(()=>{
        if (typeof windw !== "undefined") {
          windw.specialData.kahootCore = ${letter6};
        }
        return ${letter6}.game.core;
      })()`
    );
    // fix imports
    patchedScript = patchedScript.replace(/\bimport\b\(/g, "kpinImport(");
    patchedScript = `${kpinImport.toString()}${patchedScript}`;

    // Create a blob url and import it!
    const mainBlobURL = createBlobURL(patchedScript);
    let changed = originalPage.split("</body>");
    changed = `${changed[0]}
      <script>
      import("${mainBlobURL}");
      </script>
      <script>
        window.globalMessageListener=${window.PinCheckerInjector.toString()};
        (${window.PinCheckerMain.toString()})();
        try{(${window.localStorage.kahootThemeScript})();}catch(err){}
        window.fireLoaded = window.parent.fireLoaded = true;
      </script>
      </body>${changed[1]}`;
    console.log("[PIN-CHECKER] - loaded");
    window.kpinImport = kpinImport;
    window.kpinCreateBlobURL = createBlobURL;
    window.kpinMakeHttpRequest = makeHttpRequest;
    window.kpinBlobURLs = {};
    document.open();
    document.write(
      `<style>
        body{
          margin:0;
        }
        iframe{
          border:0;
          width:100%;
          height:100%;
        }
      </style>
      <iframe src="about:blank"></iframe>`
    );
    document.close();
    window.stop();
    const doc = document.querySelector("iframe");
    doc.contentDocument.write(changed);
    document.title = doc.contentDocument.title;
    doc.addEventListener("load", () => {
      window.location.reload();
    });
  } else {
    console.warn("[PIN-CHECKER] - found AntiBot, waiting for injection");
    window.localStorage.extraCheck = window.PinCheckerMain.toString();
    window.localStorage.extraCheck2 = window.PinCheckerInjector.toString();
  }
})();
