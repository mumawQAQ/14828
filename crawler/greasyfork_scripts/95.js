// ==UserScript==
// @name         fsfb script
// @namespace    http://tampermonkey.net/
// @homepage     https://greasyfork.org/en/scripts/446564/
// @version      1.3.15
// @description  An agma.io script, which includes fastsplit, secret bot packs, linesplit lock, and many other amazing features!
// @author       fishy & firebone
// @match        *://agma.io/*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTE1IDUxNSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJiIiBjeD0iMjg2LjgiIGN5PSIxMDYiIGZ4PSIyODYuOCIgZnk9IjEwNiIgcj0iMTEzLjI4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VmNDYzMCIvPjxzdG9wIG9mZnNldD0iLjEyNSIgc3RvcC1jb2xvcj0iI2VjNGUzMSIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjZTk1ZDM1Ii8+PHN0b3Agb2Zmc2V0PSIuNTIxIiBzdG9wLWNvbG9yPSIjZTk4MjM2Ii8+PHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2ZjYzczOSIvPjxzdG9wIG9mZnNldD0iLjk4MSIgc3RvcC1jb2xvcj0iI2YxZDIzNSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJjIiBjeD0iMzIxLjIiIGN5PSIxMzMuMiIgZng9IjMyMS4yIiBmeT0iMTMzLjIiIHI9IjM5LjUyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U3NDQyZSIvPjxzdG9wIG9mZnNldD0iLjEyNSIgc3RvcC1jb2xvcj0iI2U1NGMyZiIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjZTM1YjMzIi8+PHN0b3Agb2Zmc2V0PSIuNTIxIiBzdG9wLWNvbG9yPSIjZTk4MjM2Ii8+PHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2ZjYzczOSIvPjxzdG9wIG9mZnNldD0iLjk4MSIgc3RvcC1jb2xvcj0iI2ZjYzg0OSIvPjwvcmFkaWFsR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMTg4LjE0NiIgeTE9IjIzMi41NDYiIHgyPSIxNTMuNDc5IiB5Mj0iMjU3LjA3OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2UzNDIyZSIvPjxzdG9wIG9mZnNldD0iLjExNyIgc3RvcC1jb2xvcj0iI2UyNGEyZiIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjZTI1YjMzIi8+PHN0b3Agb2Zmc2V0PSIuNTIxIiBzdG9wLWNvbG9yPSIjZTk4MjM2Ii8+PHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2ZjYzczOSIvPjxzdG9wIG9mZnNldD0iLjk4MSIgc3RvcC1jb2xvcj0iI2ZjYzg0OSIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJlIiBjeD0iMTA1LjMzMyIgY3k9IjI2Ni42NjciIGZ4PSIxMDUuMzMzIiBmeT0iMjY2LjY2NyIgcj0iMjcwLjMwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjExIiBzdG9wLWNvbG9yPSIjZmNjODQ5Ii8+PHN0b3Agb2Zmc2V0PSIuMTE0IiBzdG9wLWNvbG9yPSIjZmNjNzQ3Ii8+PHN0b3Agb2Zmc2V0PSIuMTczIiBzdG9wLWNvbG9yPSIjZmNjNzNjIi8+PHN0b3Agb2Zmc2V0PSIuMjM2IiBzdG9wLWNvbG9yPSIjZmNjNzM5Ii8+PHN0b3Agb2Zmc2V0PSIuNjEyIiBzdG9wLWNvbG9yPSIjZTk4MjM2Ii8+PHN0b3Agb2Zmc2V0PSIuNzgzIiBzdG9wLWNvbG9yPSIjZTk1ZDM1Ii8+PHN0b3Agb2Zmc2V0PSIuODgyIiBzdG9wLWNvbG9yPSIjZWU1NzM0Ii8+PHN0b3Agb2Zmc2V0PSIuODg2IiBzdG9wLWNvbG9yPSIjZWM1NjMzIi8+PHN0b3Agb2Zmc2V0PSIuOTE2IiBzdG9wLWNvbG9yPSIjZTU1MjJmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ1MTJlIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImYiIGN4PSIzNzAiIGN5PSIzMTIuMTMzIiBmeD0iMzcwIiBmeT0iMzEyLjEzMyIgcj0iMzguOTQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDk0MDJiIi8+PHN0b3Agb2Zmc2V0PSIuMTE3IiBzdG9wLWNvbG9yPSIjZGE0ODJkIi8+PHN0b3Agb2Zmc2V0PSIuMjUiIHN0b3AtY29sb3I9IiNkZDU5MzIiLz48c3RvcCBvZmZzZXQ9Ii41MjEiIHN0b3AtY29sb3I9IiNlOTgyMzYiLz48c3RvcCBvZmZzZXQ9Ii45IiBzdG9wLWNvbG9yPSIjZmNjNzM5Ii8+PHN0b3Agb2Zmc2V0PSIuOTgxIiBzdG9wLWNvbG9yPSIjZmNjODQ5Ii8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSIzODEuMiIgY3k9IjI1OCIgZng9IjM4MS4yIiBmeT0iMjU4IiByPSIxMTMuNjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWY0NjMwIi8+PHN0b3Agb2Zmc2V0PSIuMTI1IiBzdG9wLWNvbG9yPSIjZWM0ZTMxIi8+PHN0b3Agb2Zmc2V0PSIuMjUiIHN0b3AtY29sb3I9IiNlOTVkMzUiLz48c3RvcCBvZmZzZXQ9Ii40IiBzdG9wLWNvbG9yPSIjZTk4MjM2Ii8+PHN0b3Agb2Zmc2V0PSIuNDExIiBzdG9wLWNvbG9yPSIjZTk4NDM2Ii8+PHN0b3Agb2Zmc2V0PSIuNTM2IiBzdG9wLWNvbG9yPSIjZjFhMTM3Ii8+PHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiNmN2I2MzgiLz48c3RvcCBvZmZzZXQ9Ii43ODIiIHN0b3AtY29sb3I9IiNmYWMyMzgiLz48c3RvcCBvZmZzZXQ9Ii45IiBzdG9wLWNvbG9yPSIjZmNjNzM5Ii8+PHN0b3Agb2Zmc2V0PSIuOTgxIiBzdG9wLWNvbG9yPSIjZmNjODQ5Ii8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSIyNjkuOTQ0IiB5MT0iMjg3LjM0NSIgeDI9IjI2MC41MzciIHkyPSIyODkuMTE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2U0NzBjIi8+PHN0b3Agb2Zmc2V0PSIuOTk2IiBzdG9wLWNvbG9yPSIjNWYyZjAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImkiIHgxPSIzMzkuNTU2IiB5MT0iMjMzLjgwMSIgeDI9IjMyMi4yMjIiIHkyPSIxNzEuNDY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTlhZTM1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmVkNTczIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImoiIHgxPSIyNTQuNDk3IiB5MT0iMTExLjkzNiIgeDI9IjIwMC4xNjQiIHkyPSIxODYuNjAzIiB4bGluazpocmVmPSIjaSIvPjwvZGVmcz48cmVjdCB3aWR0aD0iNTE1IiBoZWlnaHQ9IjUxNSIgcng9IjEwMCIgcnk9IjEwMCIgc3R5bGU9ImZpbGw6Izc1MmIxNjsiLz48cGF0aCBkPSJNMTUwLjYyMiw0NTkuOTU2YzAsOC41MzMsMjEyLjI2NywxMS4yLDIxMi4yNjcsMHMtMjEyLjI2Ny0xMi44LTIxMi4yNjcsMFoiIHN0eWxlPSJmaWxsOiM0ZTFmMTQ7IG9wYWNpdHk6Ljk7Ii8+PHBhdGggZD0iTTI2NS44NjcsNDYuOTMzczMzLjgwMSwxOS4zMzMsMzMuODAxLDQ1LjczM2MwLDMzLjYtMzIuMzM0LDQxLjQ2Ny01MC42MDEsNTYuNzM0LDAsMC00OS43MzMsMzkuNDY3LTM3LjczMyw5My42LDAsMC00MC4yNjctMzcuOTc5LTE1LjkxMS05MS40OSwxMi44LTM5LjY0NCw3Ni45NzgtNjMuNjQ0LDc2Ljk3OC04OC44ODksMCwwLDEuMTU2LTIuNC02LjUzMy0xNS42ODlaIiBzdHlsZT0iZmlsbDp1cmwoI2IpOyIvPjxwYXRoIGQ9Ik0zMjAuOCwxMjUuMmMxNS40LDE1LjQsMzAuMjY3LTEzLjMzMywyNy40NjctMTkuNDY3LTguNjY3LTMuMzMzLTI2LjgtNi4xMzMtMjcuNDY3LDE5LjQ2N1oiIHN0eWxlPSJmaWxsOnVybCgjYyk7Ii8+PHBhdGggZD0iTTE5Mi4zMzQsMjQ5LjczM2MtNy45MzQsMTEuODY3LTM4LjczNCwxOS4zMzMtNDYuNjAxLTguNTMzLDQuNDkxLTQuMzUsMTYuOTU3LTkuNjYxLDI3Ljg2OC05LjQxMiw5LjgyMywuMjI0LDE4LjM4NSwzLjk1MywxOC43MzMsMTcuOTQ1WiIgc3R5bGU9ImZpbGw6dXJsKCNkKTsiLz48cGF0aCBkPSJNMjI3LjcxNSwyNTMuNjhjLTEyLTczLjM3OCw1Ni4zODQtMTA2LjI1OCw5MC44MjgtMTEwLjQ4LDAsMC0zMy41MTEsMjYuNDg5LTMzLjUxMSw2My4wMjJzMzcuNiw2OC44LDM3LjYsNjguOGMwLDAsNDUuMzMzLDMzLjg2Nyw0NS4zMzMsODYuOTMzcy00Mi4zMTEsOTguMjIyLTExMS40MzMsOTguMjIyLTk2LjAzMy01MC44NDQtMTAwLjMtNjAuOTc4Yy00LjI2Ny0xMC4xMzMtMzguNzU2LTE2LTM4Ljc1Ni0xNiwwLDAsMy43MzMtMzQuMzExLDMzLjQyMi01Ni41MzMsMTcuNTExLTUwLjU1NSw1MS43MTgtNjcuOTg3LDc2LjgxNi03Mi45ODYsNi40OTktMS4yOTQsMTIuNDAyLTEuNjgsMTcuMjI4LTEuNjgsMTUuNjQ0LDMuOTExLDE4Ljg0NCw2NS44OSwxOC44NDQsNjUuODksMCwwLTMyLjcxMSwzLjc5OS00NS4zMzMtMi40MjMsOS43NzgsMTEuOTExLDQwLjg4OSwxNC43NTYsNDAuODg5LDE0Ljc1Ni0uNTMzLDIzLjExMS00MS42LDM5LjQ2Ny0zNS4yLDkzLjY4OSw2LjA0NCw5LjI0NCwzNS4wMjIsNy40NjcsMzUuMDIyLDcuNDY3LDQ0LjQ0OS03LjY1Myw0NS4zMzMtNjUuMTMzLDQuNjIyLTExMy40ODhtLTQwLjg4OS00NS4yNjdjLTUuNDQ5LDAtOS44NjcsNC40MTctOS44NjcsOS44NjdzNC40MTcsOS44NjcsOS44NjcsOS44NjcsOS44NjctNC40MTcsOS44NjctOS44NjctNC40MTctOS44NjctOS44NjctOS44NjdaIiBzdHlsZT0iZmlsbDp1cmwoI2UpOyIvPjxwYXRoIGQ9Ik0zNjUuMzMzLDMwNy4wNjdjLjEzMy0xOC44LDEzLjczMy0yNy4zMzMsMjcuNzMzLTE5LjQ2NywxLjMzMywxNi41MzMtMTguMjgxLDMyLjkzMy0yNy43MzMsMTkuNDY3WiIgc3R5bGU9ImZpbGw6dXJsKCNmKTsiLz48cGF0aCBkPSJNMzU2Ljg2NywyNzguNDY3czE2Ljk5OS04Ljg2NywxNi45OTktMjguMDY3LTE4LTM1LjItMTgtMzUuMmMwLDAtMTcuODY3LTE5LjYtMTcuODY3LTM4LjhzOC44LTMyLjgsOC44LTMyLjhjMCwwLTM5LjEyNCwxOC4wMDctMzkuODY3LDU2LjgsMCwwLTEuNiwyNS42LDE0LjUzMyw0NC4xMzMsMCwwLDI4LjEzNSwzMy45MzQsMzUuNDAxLDMzLjkzNFoiIHN0eWxlPSJmaWxsOnVybCgjZyk7Ii8+PHBhdGggZD0iTTI2My43ODgsMzE3Ljg5Yy0xLjQxNi0xNC40MDMtNC41MS01NS41NTYtMTYuNTUtNjUuMDc4LDMxLjkyOSwxMi4zNTUsMjMuMDAzLDczLjI4NCwyMy4wMDMsNzMuMjg0bC02LjQ1My04LjIwNloiIHN0eWxlPSJmaWxsOnVybCgjaCk7IG9wYWNpdHk6LjY7Ii8+PHBhdGggZD0iTTMyMi4xNjcsMzMxLjgzM2MxMi41LDI5LjgzMywxOC4zNTMsODMuODExLTM0LDEwNC44MzMsNDMuODMzLTI3Ljc3OCw0MC43NzgtODQuMjc4LDM0LTEwNC44MzNaIiBzdHlsZT0iZmlsbDojZjU4NjYzOyIvPjxwYXRoIGQ9Ik0yNzUuMjA4LDI2OS4zNjdjLTM1LjkzNC00MS4xNjYtMjQuMTExLTk1LjI3OCw0My4xNjctMTI2LjE2Ny01Ni4xNjcsMzUuNTU2LTcwLjE2Nyw2OC4zMzMtNDMuMTY3LDEyNi4xNjdaIiBzdHlsZT0iZmlsbDojZjlhMzVkOyIvPjxwYXRoIGQ9Ik0yMjQuMjA0LDQyMy44NjRsLS43MDItOC40MTlzLTM3LTE2LjY2Ny0zNy0zOGMwLDMyLjY2NywzNy43MDIsNDYuNDE5LDM3LjcwMiw0Ni40MTlaIiBzdHlsZT0iZmlsbDojZjhhYzVlOyIvPjxwYXRoIGQ9Ik0zNDMuMjIyLDIzMS42NjdjLTguNjA4LTEwLjI3Mi0zMS40NzItMzQuOTE3LTE1LjU1Ni02My40NDQtMy41ODMsMjQuOTQ0LDIuNjY3LDM5LjI3OCwxNS41NTYsNjMuNDQ0WiIgc3R5bGU9ImZpbGw6dXJsKCNpKTsiLz48cGF0aCBkPSJNMjA0LDE5MS44MzNjLTUuNS0xOC42NjcsMjYuMjUtNjIuNTgzLDQ5LjgzMy03Ny00NSw1NS41LTM5LjE2Nyw1MS4zMzMtNDkuODMzLDc3WiIgc3R5bGU9ImZpbGw6dXJsKCNqKTsiLz48L3N2Zz4=
// @run-at       document-start
// @require      https://greasyfork.org/scripts/459346-fsfb-facts/code/fsfb%20facts.js?version=1145073
// @license      GPL-3.0-or-later
// @changelog    change food size, see mothercell mass, fastsplit improvements, bugfixes
// @connect      translate.google.com
// @connect      greasyfork.org
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==



/* settings that you can't change in UI but might interfere with other scripts */
let hideAds = true,
    improvedShop = true,
    extraBotPacks = true,
    rightClickCopyChat = true,
    rightClickCopyInfo = true,
    showRemainingAbilityTime = true,
    unlockFreeSkins = true,
    hoverShowSkinID = true,
    coinXPstats = true,
    saveStatsBoxPosition = true,
    showXPdecimals = true,
    whiteBorder4BlackCells = true,
    sortWearablesByOwned = true,
    linesplitClosestSide = false, // make the linesplit go to the closest side (adjusted) instead of closest bubble
    friendDeclineAll = true,
    rainbowMapBorder = false,
    rainbowBorderSpeed = 5,
    rainbowBrHazard = false,
    rainbowBrHazardSpeed = 5,
    extraChatCommands = true,
    chatPrefix = '/f ',
    bypassConfirmChatRules = true,
    publicSkinSearch = true,
    extraOneFastSplitDelay = false,
    notifyNewUpdates = true,
    preventAutoLowGraphics = true,
    fsfbDevsUserProfile = true;


// ~~~~~~~~~ Don't change anything below this unless you know what you are doing ~~~~~~~~~
const version = typeof GM_info != 'undefined' && GM_info?.script?.version || '1.3.15';

let settings = {
    hotkeys: [
        {title: "Shoot 7 Ejected", id: "fsfb-key7Feed", key: 0, active: false}, // 0
        {title: "Linesplit Lock", id: "fsfb-linesplit", key: 0, active: false}, // 1
        {title: "Macro Split Bots", id: "fsfb-MacroSplitBots", key: 0, active: false}, // 2
        {title: "Hide UI", id: "fsfb-hideUI", key: 0, active: false}, // 3
        {title: "Toggle Cursor", id: "fsfb-togglecursor", key: 0, active: false}, // 4
        {title: "Check Profile", id: "fsfb-checkprofile", key: 0, active: false} // 5
    ],
    fastsplit_hotkeys: [
        {title: "Fast Onesplit", id: "fsfb-fsOne", keyName: "", keyCode: 0, active: false}, // 0
        {title: "1st Delay (ms)", id: "fsfb-firstdelay", val: 60, active: false}, // 1
        {title: "2nd Delay (ms)", id: "fsfb-secdelay", val: 60, active: false}, // 2
        {title: "Fast Doublesplit", id: "fsfb-fsTwo", keyName: "", keyCode: 0, active: false}, // 3
        {title: "1st Delay (ms)", id: "fsfb-dubfirstdelay", val: 60, active: false}, // 4
        {title: "2nd Delay (ms)", id: "fsfb-dubsecdelay", val: 60, active: false} // 5
    ],
    checkboxes: [
        {title: "Chat Copy/Cut/Paste", id: "fsfb-copycutpaste", active: false}, // 0
        {title: "Anti-AFK", id: "fsfb-antiAFK", active: false}, // 1
        {title: "Anti-Invis", id: "fsfb-anticloak", active: false}, // 2
        {title: "Linesplit Toggle", id: "fsfb-linetoggle", active: false}, // 3
        {title: "Change Page Title", id: "fsfb-changetitle", active: false}, // 4
        {title: "Hide Shouts", id: "fsfb-hideshouts", active: false}, // 5
        {title: "Hold To Spam Rec/Spd", id: "fsfb-recospeed", active: false}, // 6
        {title: "Show Portal Mass", id: "fsfb-portalmass", active: false}, // 7
        {title: "Pow Spawns Overlay", id: "fsfb-powsoverlay", active: false}, // 8
        {title: "Mothercell Mass", id: "fsfb-mtchmass", active: false}, // 9
        {title: "Inventory One Row", id: "fsfb-pwsonerow", active: false}, // 10
        {title: "Quick Buy", id: "fsfb-qBuy", active: false} // 11
    ],
    slowFeed: [
        {title: "Toggle Feed", id: "fsfb-slowFeed", key: 0, active: false},
        {title: "Feed Delay (ms)", id: "fsfb-slowfeedtime", val: 100, active: false}
    ],
    quickSettings: [
        {id: "fsfb-quick-hotkey1", id1: "fsfb-quick-select1", set: "cSkins", key: 0, active: false},
        {id: "fsfb-quick-hotkey2", id1: "fsfb-quick-select2", set: "cWearables", key: 0, active: false},
        {id: "fsfb-quick-hotkey3", id1: "fsfb-quick-select3", set: "cFood", key: 0, active: false},
        {id: "fsfb-quick-hotkey4", id1: "fsfb-quick-select4", set: "cBubbleCells", key: 0, active: false},
        {id: "fsfb-quick-hotkey5", id1: "fsfb-quick-select5", set: "cNames", key: 0, active: false}
    ],
    uiScaling: [
        // {title: "Chat Size", id: "fsfb-chatSize", level: 5},
        {title: "Inventory Size", id: "fsfb-invSize", level: 5}, // 0
        {title: "Food Size", id: "fsfb-foodSize", level: 1}, // 1
        {title: "Statsbox Size", id: "fsfb-statsSize", level: 5} // 2
    ],
    theme: [
        {title: "Food Color", id: "fsfb-check-foodcolor", id1: "fsfb-color-foodcolor", color: "#FFFFFF", active: false}, // 0
        {title: "Virus Color", id: "fsfb-check-viruscolor", id1: "fsfb-color-viruscolor", color: "#00ff00", active: false}, // 1
        {title: "Virus Stroke", id: "fsfb-check-virusstroke", id1: "fsfb-color-virusstroke", color: "#00ff00", active: false}, // 2
        {title: "Mothercell Color", id: "fsfb-check-msColor", id1: "fsfb-color-msColor", color: "#cd5564", active: false}, // 3
        {title: "Mothercell Stroke", id: "fsfb-check-msStroke", id1: "fsfb-color-msStroke", color: "#cd5564", active: false}, // 4
        {title: "Border Color", id: "fsfb-check-border", id1: "fsfb-color-border", color: "#CC3030", active: false}, // 5
        {title: "Battle Royale Zone", id: "fsfb-check-hazard", id1: "fsfb-color-hazard", color: "#cc3030", active: false} // 6
    ],
    theme_boxes: [
        {title: "Fancy Bubble Cells", id: "fsfb-bublecell", active: false}, // 0
        {title: "Show Player Mass", id: "fsfb-showmass", active: false}, // 1
        {title: "Only My Skin", id: "fsfb-myskins", active: false}, // 2
        {title: "Only Party Skins", id: "fsfb-partyskins", active: false}, // 3
        {title: "Only My Nick", id: "fsfb-mynick", active: false}, // 4
        {title: "Only Party Nicks", id: "fsfb-partynicks", active: false}, // 5
        {title: "Spiked Cells", id: "fsfb-spikedcells", active: false}, // 6
        {title: "Reverse Cell Order", id: "fsfb-revcell", active: false}, // 7
        {title: "Render Portals Top", id: "fsfb-portalstop", active: false} // 8
    ],
    chat_translate: [
        {title: "Translate Chat", id: "fsfb-tranchat", active: false}, // 0
        {title: "Translate Server", id: "fsfb-tranplyr", active: false}, // 1
        {title: "Show Original", id: "fsfb-tranorig", active: false}, // 2
        {title: "Translate From:", id: "fsfb-tran1", set: "auto"}, // 3
        {title: "Translate To:", id: "fsfb-tran2", set: "auto"} // 4
    ],
    export_import: [
        {title: "Game Settings", id: "fsfb-game-settings", active: false},
        {title: "Game Controls", id: "fsfb-game-controls", active: false},
        {title: "Custom Background", id: "fsfb-custom-bg", active: false},
        {title: "Script Settings", id: "fsfb-script-settings", active: false},
        {title: "Script Theme", id: "fsfb-theme-settings", active: false}
    ]
}, misc_settings = {
    abil: {},
    bots: {},
    statsPos: null,
    statsSettings: {
        xp: {
            lvlcomp: true,
            rem: true,
            projhr: true,
            lasthr: true,
            lastmin: true,
            lastsec: true,
            mean: true,
            median: true,
            sd: true,
            sesh: true,
            seshlength: true,
            lifetime: true
        },
        coins: {
            rem: true,
            projhr: true,
            lasthr: true,
            lastmin: true,
            mean: true,
            median: true,
            sd: true,
            sesh: true,
            seshlength: true
        }
    }
}

const keyCodeMappings = { 0: "", 8: "BACKSPACE", 9: "TAB", 12: "CLEAR", 13: "ENTER", 16: "SHIFT", 17: "CTRL", 18: "ALT", 19: "PAUSE", 20: "CAPSLOCK", 27: "ESC", 32: "SPACE", 33: "PAGEUP", 34: "PAGEDOWN", 35: "END", 36: "HOME", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN", 44: "PRTSCN", 45: "INS", 46: "DEL", 91: "WIN", 92: "WIN", 93: "CONTEXTMENU", 96: "NUM 0", 97: "NUM 1", 98: "NUM 2", 99: "NUM 3", 100: "NUM 4", 101: "NUM 5", 102: "NUM 6", 103: "NUM 7", 104: "NUM 8", 105: "NUM 9", 106: "NUM *", 107: "NUM +", 109: "NUM -", 110: "NUM .", 111: "NUM /", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 124: "F13", 125: "F14", 126: "F15", 127: "F16", 128: "F17", 129: "F18", 130: "F19", 131: "F20", 132: "F21", 133: "F22", 134: "F23", 135: "F24", 144: "NUMLOCK", 145: "SCROLLLOCK", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"}, cmap = { a: "а", e: "е", i: "і", o: "ο", u: "υ", y: "у", A: "А", E: "Е", I: "Ӏ", O: "Ο", U: "𝗨", Y: "Υ"};

const set = (name, obj) => typeof GM_setValue != "function" ? localStorage.setItem(name, JSON.stringify(obj)) : GM_setValue(name, obj),
      get = (name, default_obj) => typeof GM_getValue != "function" ? localStorage.getItem(name) != null ? JSON.parse(localStorage.getItem(name)) : set(name, default_obj) : GM_getValue(name, default_obj);

if(typeof unsafeWindow === 'undefined') unsafeWindow = window;

const saveSettings = () => set("fsfb-scripts", settings);
const getSettings = () => {
    let settingsPrev = get("fsfb-scripts", settings);
    for(let i in settingsPrev) {
        for(let j in settingsPrev[i]) {
            for(let x in settings){
                for(let y in settings[x]){
                    if(settingsPrev[i][j].id == settings[x][y].id) settings[x][y] = settingsPrev[i][j];
                }
            }
        }
    }
}
const getMiscSettings = () => {
    let prevSettings = get("fsfb-misc", misc_settings);
    misc_settings = {...misc_settings, ... prevSettings};
}
getSettings();
getMiscSettings();

const getName = key => keyCodeMappings[key] ?? String.fromCharCode(key);

const levelSum = lvl => lvl * (lvl - 1) / 2,
      range = arr => Math.max(...arr) - Math.min(...arr),
      sigma = arr => arr.reduce((a, b) => a + b),
      mean = arr => sigma(arr) / arr.length,
      variance = arr => arr.reduce((a, b) => a + (b - mean(arr)) ** 2, 0) / arr.length,
      standardDeviation = arr => Math.sqrt(variance(arr)),
      ascending = arr => arr.sort((a, b) => a - b),
      getIQR = arr => quartile(arr, .75) - quartile(arr, .25),
      round = (num, places = 0) => Math.round(num * +("1e" + places)) / +("1e" + places);
const median = arr => {
    const mid = ~~(arr.length / 2),
          asc = ascending(arr);
    return arr.length % 2 !== 0 ? asc[mid] : (asc[mid - 1] + asc[mid]) / 2;
}
const getProperty = (arr, property) => {
    let newArr = [];
    for (let i of arr) newArr.push(i[property]);
    return newArr;
}
const quartile = (arr, q) => {
    const sorted = ascending(arr),
          pos = (sorted.length - 1) * q,
          base = ~~pos,
          rest = pos - base;
    return sorted[base + 1] !== null ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) : sorted[base]
}
const checkOutliers = (arr, returnOutliers) => {
    let nonOutliers = [], outliers = [];
    const IQR = getIQR(arr),
          Q1 = quartile(arr, .25),
          Q3 = quartile(arr, .75);
    for (let i of arr) i < Q1 - 1.5 * IQR || i > Q3 + 1.5 * IQR ? outliers.push(i) : nonOutliers.push(i);
    return returnOutliers ? outliers : nonOutliers;
}
const msToTime = ms => {
    const pad = num => num < 10 ? '0' + ~~num : ~~num;
    return `${pad(ms / 36e5)}:${pad(ms / 6e4 % 60)}:${pad(ms / 1e3 % 60)}`; // hrs:mins:secs
}
const changeTitle = title => {
    if(document.title != title) document.title = title;
};

if(!settings.checkboxes[4].active && document.title == 'Agma.io - A free multiplayer MMO game') changeTitle('Agma.io');

if(unlockFreeSkins){
    ["", 56, 1657, 2281, 2282, 2297, 2331, 2529, 2626, 2683, 2816, 2832].forEach(id => localStorage.setItem('ytSkin' + id, '1'));
    localStorage.setItem('fbSkin', '1');
}

const sanitize = str => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    return str.replace(/[&<>"'/]/ig, match => map[match]);
}

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

['paste', 'copy', 'cut'].forEach(a => {
    unsafeWindow.addEventListener(a, e => {
        if(document.querySelector('#fsfb-copycutpaste')?.checked) e.stopImmediatePropagation();
    }, true)
});


let agmaHotkeys = JSON.parse(localStorage.getItem('hotkeys'));

Object.defineProperty(unsafeWindow, 'localStorage', {
    value: new Proxy(localStorage, {
        set: function (ls, prop, val) {
            if(prop == 'hotkeys') agmaHotkeys = JSON.parse(val);
            return !void(ls[prop] = val);
        },
        get: function(ls, prop) {
            return prop == 'setItem' || typeof ls[prop] == 'function' ? ls[prop].bind(ls) : ls[prop];
        }
    }),
    configurable: true,
    enumerable: true
});

const hotkeysMap = {
    360: "W360",
    Split: "Space",
    DoubleSplit: "D",
    TripleSplit: "T",
    MacroSplit: "Z",
    MacroFeed: "W",
    FixedMouse: "C",
    Respawn: "M",
    MultiFeed: "V",
    Recombine: "E",
    Speed: "S",
    FreezeSelf: "F",
    Invisibility: "I",
    DropWall: "DW",
    ToggleCamera: "Q",
    FreezeCamera: "F",
    ToggleControlBots: "Q",
    SplitBots: "A",
    FeedBots: "X"
}
const getKey = id => agmaHotkeys && agmaHotkeys[hotkeysMap?.[id.replace(/^key/gm, '')]]?.c;

if(bypassConfirmChatRules) localStorage.setItem('crc', 'true');

const afterLoaded = () => {
    unsafeWindow.fsfbStartedLoading = true;
    const { $, swal, purchaseItem, fseec, hotkeySetDefaults, uisdoa, } = unsafeWindow;

    // attempt to prevent the script from being active on subpages of agma.io
    if($ == null || $('#friendResizer').length < 1 || $('#megaholder').length < 1 || $('#preroll').length < 1) return;

    if(!agmaHotkeys) hotkeySetDefaults();

    const _slideDown = $.prototype.slideDown;
    $.prototype.slideDown = function () {
        if(this.selector == '#curser' && this[0].textContent?.includes("Your FPS seems to be low")) return;
        return _slideDown.apply(this, arguments);
    }

    let swalUserColor = '#FF00D8',
        swalRoleTitle = 'Fsfb Developer',
        swalRoleColor = '#FF78EA';

    unsafeWindow.swal = function() {
        if (fsfbDevsUserProfile && typeof arguments[0] == 'object' && 'title' in arguments[0] && /<img src="((skins\/\d+(_lo)?\.png\?(u=\d+)?)|img\/userprofile\.png)" width="\d+" height="\d+" style="border-radius:50%;"><br><br><span style=".*?">(Fishyyyy|firebonee|kidmaletteo)<\/span>/gm.test(arguments[0].title)) {
            arguments[0].title = arguments[0].title
                .replace(/(?<=<span style=").*(?=">(Fishyyyy|firebonee|kidmaletteo))/gm, 'color: ' + swalUserColor)
                .replace(/(?<=(?:<span style="display:block; margin:-10px 0px 15px; font-size:12px; line-height:normal;"><br>)|(?:<br><span style="padding:2px 5px; font-size:10px; background:#999; color:#000; border-radius:10px;">Hidden<\/span><br><br>))(?=<span)/gm, `<span style="color: ${swalRoleColor};">&#9734;&#9734; ${swalRoleTitle} &#9734;&#9734;</span><br>`);
        }
        return swal.apply(this, arguments);
    }

    $('.setting-tablink').css({'width' : '30%'});
    $('#settingTab2').after(`<button id="settingTab4" class="setting-tablink" onclick="openSettingPage(4);" style="width: 9%; font-size: calc(0.3vw + 7.5px);"><div class="fa fa-cogs fa-lg" style="font-size: 15px; color: lightgray;"></div></button>`);
    $('#settingPage3').after(`<div id="settingPage4" class="setting-tabcontent"><div class="row"><div class="col-md-10 col-md-offset-1 stng" id="fsfb-settings-main" style="padding:0"><div id="fsfb-settings-left"><section id="fsfb-sect-checkbox" class="padbot10 fsfb-sect-ch"></section><section id="fsfb-sect-theme" class="fsfb-sect-ch padbot10"></section><section id="fsfb-sect-translate" style="padding-top: 30px;" class="fsfb-sect-ch"></section></div><div id="fsfb-settings-right"><section id="fsfb-sect-hotkeys" class="padbot10"></section><section id="fsfb-sect-slowfeed" class="padbot10"></section><section id="fsfb-sect-fastsplit" class="padbot10"></section><section id="fsfb-sect-quickSettings" class="padbot10"></section><section id="fsfb-sect-uiScale" class="padbot10"></section><section id="fsfb-sect-imexport" class="fsfb-sect-ch padbot10"></section><section id="fsfb-sect-translate2"></section></div></div></div></div>`);
    $('.container').eq(0).css("max-width", "1250px");
    $('#fsfb-sect-checkbox').append(`<p class="hotkey-paragraph">Script Features</p>`);

    // add checkbox HTML
    for(let i of settings.checkboxes){
        $('#fsfb-sect-checkbox').append(`<label><input id="${i.id}" type="checkbox"><p> ${i.title} </p></label>`);
        $( "#" + i.id).change(function(e) {
            changeSettings(this.id, $(this).is(':checked'), e);
        });
    }

    // add import/export HTML
    $('#fsfb-sect-imexport').append(`<p class="hotkey-paragraph">Import/Export</p>`);
    for(let i of settings.export_import){
        $('#fsfb-sect-imexport').append(`<label><input id="${i.id}" type="checkbox"><p> ${i.title} </p></label>`);
        $( "#" + i.id).change(function() {
            changeSettings(this.id, $(this).is(':checked'));
        });
    }
    $('#fsfb-sect-imexport').append(`<div id="fsfb-ximport-cont"><div id="fsfb-export-btn" class="fsfb-eximport">Export</div><div id="fsfb-import-btn" class="fsfb-eximport">Import</div></div>`);

    $('#fsfb-sect-theme').append(`<p class="hotkey-paragraph">Game Theme</p`);
    for(let i of settings.theme){
        $('#fsfb-sect-theme').append(`<label><input id="${i.id}" type="checkbox"><p> ${i.title}</p><div style="background-color: black;"><input id="${i.id1}"type="color"></div></label>`);
        $( "#" + i.id).change(function() {
            changeSettings(this.id, $(this).is(':checked'));
        });
        $( "#" + i.id1).change(function() {
            changeSettings(this.id, this.value);
            $(this).parent().css('background-color', this.value); // bcs the regular [input="color"] looks rly shit, change color of overlayed div instead
        });
    }
    for(let i of settings.theme_boxes){
        $('#fsfb-sect-theme').append(`<label><input id="${i.id}" type="checkbox"><p> ${i.title} </p></label>`);
        $( "#" + i.id).change(function(e) {
            changeSettings(this.id, $(this).is(':checked'), e);
        });
    }

    $('#fsfb-sect-translate').append(`<p class="hotkey-paragraph">Chat Translate</p`);

    for(let i of settings.chat_translate){
        if(!('set' in i)){ //checkboxes
            $('#fsfb-sect-translate').append(`<label><input id="${i.id}" type="checkbox"><p> ${i.title} </p></label>`);
            $( "#" + i.id).change(function(e) {
                changeSettings(this.id, $(this).is(':checked'), e);
            });
        } else {
            $('#fsfb-sect-translate2').append(`<p style="margin-top: 2px;">${i.title}</p><select id="${i.id}" class="fsfb-changelang"><option value="auto">Detect language</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Aerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="zh-CN">Chinese (simpl)</option><option value="zh-TW">Chinese (trad)</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="en">English</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="ht">Haitian Creole</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="ko">Korean</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="ms">Malay</option><option value="mt">Maltese</option><option value="no">Norwegian</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sr">Serbian</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="es">Spanish</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="yi">Yiddish</option></select>`);
        }
    };

    $('.fsfb-changelang').on("change", function(){
        for(let i = 0; i < settings.chat_translate.length; i++){
            if(settings.chat_translate[i].id == this.id) settings.chat_translate[i].set = this.value;
        }
        saveSettings();
    });

    $('#fsfb-sect-hotkeys').append(`<p class="hotkey-paragraph">Script Hotkeys</p>`);

    const checkHotkeyClicked = (e, thing) => {
        if (e.target.id == thing.id && !thing.active){
            $('#' + thing.id).addClass('selected');
            thing.active = true;
            keysChanging = true; // prevent features from triggering when setting hotkey
        } else {
            thing.active = false;
            $('#' + thing.id).removeClass('selected');
        }
    }
    const checkNewHotkey = (e, thing) => {
        if (!thing.active) return;
        thing.key = e.keyCode;
        $('#' + thing.id).text(getName(e.keyCode)).removeClass('selected');
        thing.active = false;
        saveSettings();
        e.preventDefault();
    }
    const checkFsHotkey = (e, thing) => {
        if (!thing.active) return;
        thing.key = e.keyCode;
        thing.keyName = e.key;
        $('#' + thing.id).text(getName(e.keyCode)).removeClass('selected');
        thing.active = false;
        saveSettings();
        e.preventDefault();
    }

    const checkPowerupClicked = e => {
        if(!quickBuying || !e?.originalEvent?.isTrusted || $(e.target).attr('class') == 'purchase-btn confirmation' || $(e.target).attr('class') == 'megaphone-btn') return;
        let id = e.target.id;
        if (id == 'fsfb-quickbuy-img' || id == 'fsfb-quickbuy') return void(quickBuying = true);
        const map = {
            Wall: 33,
            AntiFreeze: 35,
            AntiRecombine: 34,
            Shield: 38,
            FrozenVirus: 36,
            Recombine: 1,
            Speed: 2,
            Growth: 6,
            SpawnVirus: 7,
            SpawnMothercell: 8,
            SpawnPortal: 9,
            SpawnGoldOre: 10,
            Freeze: 5,
            '360Shot': 30,
            minion_nuker: 39,
            megaphone_shout: 14
        }
        let pwID = map[id.replace(/^(inv|fsfb-)/gm, '')] ?? (() => {
            quickBuying = false;
            $('.inventory-box').removeClass('fsfb-shown').find('p').show();
            $('#fsfb-quickbuy').removeClass('activatedInv')
            unsafeWindow.curserMsg('Quick buy deactivated.', 'red');
        })();
        if (!quickBuying || !pwID) return;
        $('.confirm').attr('disabled', 'true'); // disable so user doesn't buy early - swal is slow to load text
        const waitUntil1 = (condition) => new Promise(resolve => {
            let interval = setInterval(() => {
                $('.confirm')[0].click();
                condition() && (clearInterval(interval), resolve());
            }, 25);
            setTimeout(() => { (clearInterval(interval), resolve()) }, 1e4);
        });
        setTimeout(() => {
            if(pwID == 14) return;
            $('.confirm')[0].addEventListener('click', async e => {
                if(!e.isTrusted) return;
                $('.sweet-alert, .sweet-overlay').addClass('fsfb-hidden');
                setTimeout(async() => {
                    await waitUntil1(() => !$('.sweet-alert').hasClass('visible'));
                    if($('.sweet-alert').hasClass('visible')) return;
                    await sleep(100);
                    $('.sweet-alert, .sweet-overlay').removeClass('fsfb-hidden');
                }, 1e3);
            })
        }, 500);
        setTimeout(() => $('.confirm').removeAttr('disabled'), 600);

        if(pwID == 14) $('.megaphone-btn')[0].click();
        else $(`.purchase-btn.confirmation[item="${pwID}"]`)[0].click();

        $('.inventory-box').removeClass('fsfb-shown').find('p').show();
        $('#fsfb-quickbuy').removeClass('activatedInv')
        quickBuying = false;
    }

    const slowfeedhotkey = settings.slowFeed[0];

    for(let i of settings.hotkeys){
        $('#fsfb-sect-hotkeys').append(`<br><p>${i.title}</p><div id="${i.id}" class="fsfb-hotkey"></div>`);
        $('#' + i.id).on('contextmenu', e => {
            $('#' + i.id).text('').removeClass('selected');
            i.active = false;
            i.key = 0;
            saveSettings();
            e.preventDefault();
        });
    }

    // const typing = () => $('input, textarea').is(':focus');
    const typing = () => {
        const focused = document.querySelector(":focus"),
              tag = focused?.tagName;
        return focused === document.activeElement && (tag == 'TEXTAREA' || tag == 'INPUT') && (!document.hasFocus || document.hasFocus()) && !!(focused.type || focused.href || ~focused.tabIndex);
    };

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const press = key => ['down', 'up'].forEach(i => unsafeWindow[`onkey${i}`]({ keyCode: key }));

    let fsWaiting = false;
    const fastSplit = async(a) => { // a = true, was fast onesplit; a = false, was fast doublesplit
        if(fsWaiting) return;
        fsWaiting = true;
        setTimeout(() => void(fsWaiting = false), settings.fastsplit_hotkeys[a ? 1 : 4].val + settings.fastsplit_hotkeys[a ? 2 : 5].val);
        if([39, 37, 2, 4, 6].includes(currentServerId) || !a || extraOneFastSplitDelay) await sleep(settings.fastsplit_hotkeys[a ? 1 : 4].val);
        // else if(Date.now() - lastTimeFrzPressed < settings.fastsplit_hotkeys[3].val) await sleep(settings.fastsplit_hotkeys[3].val); // try to detect if frz was recently pressed - can't send the same input too quickly (need to add some delay)
        press(getKey("keyFreezeSelf"));
        await sleep(settings.fastsplit_hotkeys[a ? 2 : 5].val);
        press(getKey("keyFreezeSelf"));
    }


    let cursorLockActivated = false, _onblur;
    const waitForBlur = () => {
        if(unsafeWindow.onblur != null){
            const oldBlur = unsafeWindow.onblur
            unsafeWindow.onblur = function(){
                spamRec = false;
                spamSpeed = false;
                splittingbots = false;
                keys = {};
                if(!settings.checkboxes[3].active){
                    $("#linesplit-markers div").hide();
                    linesplitting = false;
                }
                return oldBlur.apply(this, arguments);
            }
            _onblur = unsafeWindow.onblur
        } else {
            setTimeout(waitForBlur, 400);
        }
    };
    waitForBlur();

    // hook for typing in chat w/ cursor lock
    const waitForKeyup = () => {
        if(unsafeWindow.onkeyup != null){
            const _keydown = unsafeWindow.onkeyup;
            unsafeWindow.onkeyup = function(){
                if(arguments[0]?.target?.id != 'chtbox' || !cursorLockActivated || arguments[0]?.keyCode != getKey('keyFixedMouse')) return _keydown.apply(this, arguments);
            }
        } else {
            setTimeout(waitForKeyup, 400);
        }
    };
    waitForKeyup();

    const waitForSetGraphics = () => {
        if(unsafeWindow.onkeyup != null){
            const _setGraphics = unsafeWindow.setGraphics;
            unsafeWindow.setGraphics = (a, b) => preventAutoLowGraphics && b ? $("#curser").hide() : _setGraphics(a, b);
        } else {
            setTimeout(waitForSetGraphics, 400);
        }
    };
    waitForSetGraphics();

    const toggleCursorLock = () => {
        cursorLockActivated = !cursorLockActivated;
        if(cursorLockActivated){
            unsafeWindow.onblur = function(){
                ['keyMacroSplit', 'keyMacroFeed', 'keyMultiFeed'].forEach(id => unsafeWindow.onkeyup({keyCode: getKey(id)}));
                spamRec = false;
                spamSpeed = false;
                splittingbots = false;
                keys = {};
                if(!settings.checkboxes[3].active){
                    $("#linesplit-markers div").hide();
                    linesplitting = false;
                }
            }
        } else {
            unsafeWindow.onblur = _onblur;
        }
        unsafeWindow[`onkey${cursorLockActivated ? 'down' : 'up'}`]({ keyCode: getKey('keyFixedMouse') });
    }
    unsafeWindow.globalCursorLock = toggleCursorLock;

    const toggleSetting = index => {
        let el = $('#' + settings.quickSettings[index].set);
        if($('#fsfb-settings-main')[0].contains(el[0])) el.prop('checked', !el.prop('checked')).trigger('change');
        else el.unbind().click();
    }

    Object.defineProperty(KeyboardEvent.prototype, 'keyCode', {
        get: function() {
            switch (this.key.toLowerCase()) {
                case settings.fastsplit_hotkeys[0]?.keyName.toLowerCase(): return getKey("keySplit");
                case settings.fastsplit_hotkeys[3]?.keyName.toLowerCase(): return getKey("keyDoubleSplit");
                default: return this.which;
            }
        }
    });

    let slowfeeding = !1, linesplitting = !1, hiddenUI = !1, splittingbots = !1, spamRec = !1, spamSpeed = !1;
    const pressed = e => {
        const key = e.which ? e.which : e.keyCode;
        if(document.activeElement.type === 'textarea') e.stopImmediatePropagation();
        if(typing() || keysChanging || e.key == undefined || e.keyCode == undefined) return;
        if(key == 27 && quickBuying){ // esc pressed
            quickBuying = false;
            $('#fsfb-quickbuy').removeClass('activatedInv');
            unsafeWindow.curserMsg('Quick buy deactivated.', 'red');
            $('.inventory-box').removeClass('fsfb-shown').find('p').show();
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        if(key == settings.hotkeys[0].key){ // 7 feed
            let i = 1;
            let interval = setInterval(() => {
                press(getKey("keyMacroFeed"));
                if(++i > 7) clearInterval(interval);
            }, 85);
            e.preventDefault();
        }
        if(key == settings.hotkeys[1].key && !settings.checkboxes[3].active){ // linesplit lock
            linesplitting = true;
            linesplit();
            $("#linesplit-markers div").show();
            e.preventDefault();
        }
        if(key == settings.hotkeys[1].key && settings.checkboxes[3].active){ // linesplit lock
            linesplitting = !linesplitting;
            if(linesplitting){
                $("#linesplit-markers div").show();
                linesplit();
            } else {
                $("#linesplit-markers div").hide();
                $('#canvas').trigger($.Event('mousemove', {clientX: mosX, clientY: mosY})); // return mouse to where the cursor is
            }
            e.preventDefault();
        }
        if(key == settings.hotkeys[2].key){ // macro split bots
            splittingbots = true;
            const splittingBots = () => {
                if(!splittingbots) return;
                press(getKey("keySplitBots"));
                setTimeout(splittingBots, 50);
            }
            splittingBots();
            e.preventDefault();
        }
        if(key == settings.hotkeys[3].key){ // hide ui
            _replaceCSS('hideUI-css', (hiddenUI = !hiddenUI) ? '.hideUI{ display: none !important; }' : '');
            e.preventDefault();
        }
        if(key == settings.hotkeys[4].key){ // toggle cursor lock
            toggleCursorLock();
            e.preventDefault();
        }
        if(key == settings.hotkeys[5].key){ // check profile
            const swal = $('.sweet-alert'),
                  swalText = swal.text();
            if((swalText.includes('Level: ') || swalText.includes('The selected player is not logged in or is playing in invisible mode.')) && swalText.includes('Not valid!')) $('button.confirm').click();
            if(mouseHoveringChat) $('#chtCanvas')[0].ondblclick({clientX: mosX, clientY: mosY, preventDefault: function(){}});
            else {
                let contextmenuShown = $('#contextMenu').css('display') == 'block';
                let evt = new MouseEvent("contextmenu", {
                    bubbles: true,
                    cancelable: true,
                    view: unsafeWindow,
                    clientX: mosX,
                    clientY: mosY
                });
                document.body.dispatchEvent(evt);
                if($('#contextPlayerSkin').css('background-color') == 'rgb(51, 51, 51)') unsafeWindow.curserMsg('Unable to show profile; no player was clicked on.', 'red');
                if(!contextmenuShown) $('#contextMenu').hide();
                $('#contextUserProfile').addClass('hover');
                $('#contextMenu')[0].onclick({stopPropagation: function(){}});
            }
            e.preventDefault();
        }
        if(key == getKey("keyFixedMouse")){ // real cursor lock key is pressed
            cursorLockActivated = false;
            unsafeWindow.onblur = _onblur;
        }
        if(e.keyCode != 0 && e.key.toLowerCase() == settings.fastsplit_hotkeys[0]?.keyName.toLowerCase()){ // fast onesplit
            fastSplit(!0);
            e.preventDefault();
        }
        if(e.keyCode != 0 && e.key.toLowerCase() == settings.fastsplit_hotkeys[3]?.keyName.toLowerCase()){ // fast doublesplit
            fastSplit(!1);
            e.preventDefault();
        }
        if(key == settings.slowFeed[0].key){ // toggle feed
            slowfeeding = !slowfeeding;
            const feeding = () => {
                if(!slowfeeding) return;
                press(getKey("keyMacroFeed"));
                setTimeout(feeding, settings.slowFeed[1].val);
            }
            feeding();
            e.preventDefault();
        }
        if(key == settings.quickSettings[0].key){ // quick settings 1
            toggleSetting(0);
            e.preventDefault();
        }
        if(key == settings.quickSettings[1].key){ // quick settings 2
            toggleSetting(1);
            e.preventDefault();
        }
        if(key == settings.quickSettings[2].key){ //  quick settings 3
            toggleSetting(2);
            e.preventDefault();
        }
        if(key == settings.quickSettings[3].key){ // quick settings 4
            toggleSetting(3);
            e.preventDefault();
        }
        if(key == settings.quickSettings[4].key){ // quick settings 5
            toggleSetting(4);
            e.preventDefault();
        }
        if(!spamRec && uisdoa && settings.checkboxes[6].active && key == getKey("keyRecombine")){
            spamRec = true;
            const spammingRec = () => {
                if(!spamRec) return;
                // press(getKey("keyRecombine"));
                if(unsafeWindow?.uisdoa?.foprc) uisdoa.foprc(1);
                setTimeout(spammingRec, 10);
            }
            spammingRec();
            e.preventDefault();
        }
        if(!spamSpeed && uisdoa && settings.checkboxes[6].active && key == getKey("keySpeed")){
            spamSpeed = true;
            const spammingSpeed = () => {
                if(!spamSpeed) return;
                // press(getKey("keySpeed"));
                if(unsafeWindow?.uisdoa?.foprc) uisdoa.foprc(0);
                setTimeout(spammingSpeed, 10);
            }
            spammingSpeed();
            e.preventDefault();
        }
    }

    const released = key => {
        if(typing() || keysChanging) return;
        if(key == settings.hotkeys[2].key) splittingbots = false; // macro split bots
        if(key == settings.hotkeys[1].key && !settings.checkboxes[3].active){ // linesplit lock
            linesplitting = false;
            $('#canvas').trigger($.Event('mousemove', {clientX: mosX, clientY: mosY})); // return mouse to where the cursor is
            $("#linesplit-markers div").hide();
        }
        if(spamRec && key == getKey("keyRecombine")) spamRec = false;
        if(spamSpeed && key == getKey("keySpeed")) spamSpeed = false;
    }


    let translateChanged = false, pwOverlayChanged = false;
    const changeSettings = (ID, a, e) => { // a = active, e = event (optional)
        for(let i of settings.uiScaling) if(i.id == ID) i.level = a;
        for(let i of settings.checkboxes) if(i.id == ID) i.active = a;
        for(let i of settings.export_import) if(i.id == ID) i.active = a;
        for(let i of settings.theme_boxes) if(i.id == ID) i.active = a;
        for(let i of settings.chat_translate){
            if(i.id == ID){
                if(ID == "fsfb-tranchat" && (typeof GM_xmlhttpRequest != 'function' || typeof GM_getValue != 'function' || typeof GM_setValue != 'function') && e?.originalEvent?.isTrusted){
                    unsafeWindow.curserMsg('Fsfb script is unable to access the either the GM_xmlhttpRequest, GM_getValue, or GM_setValue function. Chat translate won\'t work without this. This is often caused by not using the tampermonkey extension (or not the latest version).', 'red', 1e4);
                    $('#' + ID).prop('checked', false);
                    return;
                }
                translateChanged = true, i.active = a;
            }
        }
        for(let i of settings.theme){
            if(i.id == ID) i.active = a;
            if(i.id1 == ID) i.color = a;
        }
        customCells = $("#fsfb-sect-theme>label>input, #fsfb-powsoverlay, #fsfb-anticloak, #fsfb-mtchmass").is(":checked") || $('#fsfb-foodSize').val() != '1';
        if(ID == "fsfb-hideshouts") $('#megaholder')[`${a ? 'add' : 'remove'}Class`]('hideMegaphone');
        if(ID == "fsfb-qBuy") $('#fsfb-quickbuy')[a ? 'show' : 'hide'](); //.css('display', a ? 'flex' : 'hide');
        if(ID == "fsfb-pwsonerow"){
            $('#fsfb-quickbuy').detach().appendTo(`#inventory${a ? 2 : 1}`);
            [1, 2].forEach((i) => $("#inventory" + i).addClass("fsfb-inventories").css("order", a ? i : -i));
            _replaceCSS("css-invsingleline", a ? `#inventory{ display: flex; position: absolute; left: 50%; bottom: 8px; transform: translateX(-50%); } .fsfb-inventories { position: initial !important; transform: initial !important; }` : '');
        }

        if(ID == "fsfb-bublecell" && $("#cBubbleCells").is(":checked") != a && e?.originalEvent?.isTrusted) $('#cBubbleCells').unbind().click();
        if(ID == "fsfb-showmass" && $("#cMass").is(":checked") != a && e?.originalEvent?.isTrusted) $('#cMass').unbind().click();

        if((ID == "fsfb-myskins" || ID == "fsfb-partyskins") && !$("#cSkins").is(":checked") && a) $('#cSkins').unbind().click();
        if((ID == "fsfb-mynick" || ID == "fsfb-partynicks") && !$("#cNames").is(":checked") && a) $('#cNames').unbind().click();
        if(ID == "fsfb-myskins" && a) $('#fsfb-partyskins').prop('checked', false).trigger('change');
        if(ID == "fsfb-partyskins" && a) $('#fsfb-myskins').prop('checked', false).trigger('change');
        if(ID == "fsfb-mynick" && a) $('#fsfb-partynicks').prop('checked', false).trigger('change');
        if(ID == "fsfb-partynicks" && a) $('#fsfb-mynick').prop('checked', false).trigger('change');

        if(ID == "fsfb-powsoverlay") svSwitch = true;

        let zoomLvl = "100%";
        let map = {
            1: 50,
            2: 70,
            3: 80,
            4: 90,
            5: 100,
            6: 110,
            7: 125,
            8: 150,
            9: 200
        }
        if(ID == "fsfb-invSize") $('#inventory').css('zoom', (map[+a] ?? 100)+ '%');
        if(ID == "fsfb-statsSize") $('#stats-container').css('zoom', (map[+a] ?? 100) + '%');
        saveSettings();
    }
    // add slowfeed HTML
    $('#fsfb-sect-slowfeed').append(`<p class="hotkey-paragraph">Auto-Feed</p>`)
        .append(`<br><p>${slowfeedhotkey.title}</p><div id="${slowfeedhotkey.id}" class="fsfb-hotkey"></div>`)
        .append(`<br><p>${settings.slowFeed[1].title}</p><input id="${settings.slowFeed[1].id}" class="fsfb-hotkey" onkeypress="return onlyNumberKey(event)" maxlength="3"></input>`);

    $('#' + slowfeedhotkey.id).on('contextmenu', e => {
        $('#' + slowfeedhotkey.id).text('').removeClass('selected');
        slowfeedhotkey.active = false;
        slowfeedhotkey.key = 0;
        saveSettings();
        e.preventDefault();
    });

    document.getElementById(settings.slowFeed[1].id).addEventListener("keypress", function(e){
        setTimeout(() => { // goes too fast or smth
            settings.slowFeed[1].val = +$('#' + settings.slowFeed[1].id).val();
            saveSettings();
        }, 5);
    });


    // add fastsplit HTML
    $('#fsfb-sect-fastsplit').append(`<p class="hotkey-paragraph">Fast-Split</p>`); // bookmark
    // for(let i of settings.fastsplit_hotkeys){
    for(let j = 0; j < settings.fastsplit_hotkeys.length; j++){
        let i = settings.fastsplit_hotkeys[j];
        $('#fsfb-sect-fastsplit').append('val' in i ? `<br><p>${i.title}</p><input id="${i.id}" class="fsfb-hotkey" onkeypress="return onlyNumberKey(event)" maxlength="3"></input>` : `<br><p>${i.title}</p><div id="${i.id}" class="fsfb-hotkey"></div>`);
        if('val' in i){
            document.getElementById(i.id).addEventListener("keypress", function(e){
                setTimeout(() => { // goes too fast or smth
                    settings.fastsplit_hotkeys[j].val = +$('#' + i.id).val();
                    if($('#' + i.id).val() == "") settings.fastsplit_hotkeys[j].val = 0;
                    saveSettings();
                }, 5);
            });
        } else {
            $('#' + i.id).on('contextmenu', e => {
                $('#' + i.id).text('').removeClass('selected');
                i.active = false;
                i.key = 0;
                i.keyName = '';
                saveSettings();
                e.preventDefault();
            });
        }
    }

    // add quick settings HTML
    $('#fsfb-sect-quickSettings').append(`<p class="hotkey-paragraph">Quick Settings</p>`);

    for(let i of settings.quickSettings){
        $('#fsfb-sect-quickSettings').append(`<select id="${i.id1}" class="fsfb-quickchange"><option value="cDark">Dark Theme</option><option value="cFancyGrid">Fancy Grid</option><option value="cSectionGrid">Section Grid</option><option value="cGrid">Gridlines</option><option value="cSkins">Skins</option><option value="cWearables">Wearables</option><option value="cNames">Show Names</option><option value="cMinionNames">Minion Names</option><option value="cLargeNames">Large Names</option><option value="cNameOutlines">Name Outline</option><option value="cMass">Show Mass</option><option value="cFood">Show Food</option><option value="cFoodHalf">Half Food</option><option value="cCellAnimations">Cell Anim</option><option value="cSkinAnimations">Skin Anim</option><option value="cMapBorder">Map Border</option><option value="cCustomBack">Custom BG</option><option value="aCustomBack">Sounds</option><option value="cZoom">Infinite Zoom</option><option value="cFixedZoom">Fixed Zoom</option><option value="cSlowMotion">Slow-Motion</option><option value="cMinionUi">Minion Panel</option><option value="cLeaderboard">Leaderboard</option><option value="cChat">Chat</option><option value="cChatSize">Chat Large</option><option value="cMinimap">Minimap</option><option value="cFPS">FPS/Ping</option><option value="cColors">Cell Colors</option><option value="cCellBorders">Cell Borders</option><option value="cCellSpikes">Cell Spikes</option><option value="cClassicViruses">Classic Virus</option><option value="cPolygonShapes">Polygon Cells</option><option value="cLineShapes">Line Cells</option><option value="cBubbleCells">Bubble Cells</option><option value="cVisibilityStatus">Prof Visiblity</option><option value="cAllowPartyInvite">Party Inv</option><option value="cAllowPartyAnimations">Party Anim</option><option value="cIconDRank">Dono Icon</option><option value="cGoldCrownChat">Gold Icon</option><option value="fsfb-revcell">Rev Order</option><option value="fsfb-portalstop">Portals Top</option><option value="fsfb-hideshouts">Hide Shouts</option><option value="fsfb-tranchat">Chat Trans</option></select><div id="${i.id}" class="fsfb-hotkey"></div>`);
        $('#' + i.id).on('contextmenu', e => {
            $('#' + i.id).text('').removeClass('selected');
            i.active = false;
            i.key = 0;
            saveSettings();
            e.preventDefault();
        });
    };

    $('.fsfb-quickchange').on("change", function(){
        settings.quickSettings[+this.id.replace('fsfb-quick-select', '') - 1].set = this.value;
        saveSettings();
    });

    // add UI scaling
    $('#fsfb-sect-uiScale').append(`<p class="hotkey-paragraph">Game Scaling</p>`);
    for(let i of settings.uiScaling){
        $('#fsfb-sect-uiScale').append(`<div class="fsfb-slider"><p>${i.title}</p><input id="${i.id}" class="fsfb-slider" type="range" ${i.id == "fsfb-foodSize" ? `min="0.5" max="1.5" value="1" step="0.1"`: `min="1" max="9" value="5"`}></input></div>`);
        $( "#" + i.id).change(function() {
            changeSettings(this.id, $(this).val());
        });
    };


    let quickBuying = false;
    ['megaphone_shout', 'minion_nuker'].forEach(elId => $('#invCloak').after(`<div class="inventory-box" id="fsfb-${elId}" style="display: none;"></div>`));
    $(settings.checkboxes[10] ? '#fsfb-megaphone_shout' : '#inv360Shot').after(`<div class="inventory-box" id="fsfb-quickbuy" style="display: none;"></div>`);
    $('#fsfb-quickbuy').on('click', function(){
        quickBuying = !quickBuying;
        if (quickBuying){
            $(this).addClass('activatedInv');
            unsafeWindow.curserMsg('Quick buy activated, click the powerup you would like to buy.', 'green');
            $('.inventory-box').addClass('fsfb-shown').find('p').hide();
            $('#invCloak').removeClass('fsfb-shown');
            $('#fsfb-quickbuy').removeClass('fsfb-shown');
        } else {
            $(this).removeClass('activatedInv');
            unsafeWindow.curserMsg('Quick buy deactivated.', 'red');
            $('.inventory-box').removeClass('fsfb-shown').find('p').show();
        }
    });

    // add event listeners
    let mosX, mosY,
        keys = {},
        keysChanging = false,
        mouseHoveringChat = false;


    $(document).on('click', e => {
        for(let i = 0; i < settings.hotkeys.length; i++) checkHotkeyClicked(e, settings.hotkeys[i]);
        for(let i = 0; i < settings.fastsplit_hotkeys.length; i++) settings.fastsplit_hotkeys[i].val == null && checkHotkeyClicked(e, settings.fastsplit_hotkeys[i]);
        for(let i = 0; i < settings.quickSettings.length; i++) checkHotkeyClicked(e, settings.quickSettings[i]);
        checkHotkeyClicked(e, settings.slowFeed[0]);
        checkPowerupClicked(e);
    })
        .on('mousemove', e => {
        if(e.originalEvent == null || !e.originalEvent.isTrusted) return;
        mouseHoveringChat = e.target.id == 'chtCanvas';
        ({clientX: mosX, clientY: mosY} = e);
        if (linesplitting) linesplit();
    })

        .on("keydown", e => {
        // if(e.originalEvent == null || !e.originalEvent.isTrusted) return;
        if(keysChanging){
            for(let i = 0; i < settings.hotkeys.length; i++) checkNewHotkey(e, settings.hotkeys[i]);
            for(let i = 0; i < settings.fastsplit_hotkeys.length; i++) checkFsHotkey(e, settings.fastsplit_hotkeys[i]);
            for(let i = 0; i < settings.quickSettings.length; i++) checkNewHotkey(e, settings.quickSettings[i]);
            checkNewHotkey(e, settings.slowFeed[0]);
        }
        if (!(e.keyCode in keys)){
            keys[e.keyCode] = !0;
            pressed(e);
        }
        keysChanging = false;
    })
        .on("keyup", e => {
        if(e.originalEvent == null || !e.originalEvent.isTrusted) return;
        delete keys[e.keyCode];
        released(e.keyCode);
        if(cursorLockActivated && e.keyCode == getKey("keyFixedMouse")){
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    });

    let factsArr = typeof facts_list == 'undefined' ? null : facts_list.replace(/^\n|\n$/gm, '').split(/\n/gm);
    const randomFact = index => factsArr && (factsArr[index] ?? factsArr[~~(Math.random() * factsArr.length)]);


    const hashCode = (str, shift) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) hash = (hash << shift) - hash + str.charCodeAt(i), hash |= 0;
        return str.length == 0 ? 0 : hash;
    };

    const RNG = (min, max) => Math.random() * (max - min) + min;

    // chat cmds
    if(extraChatCommands){
        const $chtbox = $('#chtbox');
        $chtbox.on('keydown', e => {
            if(e.keyCode != 13) return;
            let newMsg = '', params, command, cmdVerif = true, firstMatch = $chtbox.val().match(new RegExp(`(?<=((^|(^\/party +)|(^\/pm +\\S+ ))${escapeRegExp(chatPrefix)}))\\S+(\\s+\\S+)*(?=($|\\s+))`, 'gmi'));
            if(firstMatch != null) {
                [command, ...params] = firstMatch[0].split(/\s+/g);
            } else return;
            const originalMsg = $chtbox.val().replace(new RegExp(`(?<=((^|(^\/party +)|(^\/pm +\\S+ ))))${escapeRegExp(chatPrefix)}${escapeRegExp(firstMatch[0])}(?=($|\\s+))`, 'gmi'), '');
            coinsInfo();
            xpInfo();
            switch(command.toLowerCase()){
                case 'help':
                    $('#fsfb-extra-info')[0].click();
                    setTimeout(() => $('.fsfb-modal-body').scrollTop(1850), 200);
                    newMsg = '';
                    break;
                case 'bots': case 'bot': case 'min': case 'mins': case 'minion': case 'minions': {
                    let minInfo = misc_settings.bots?.[currentUser], minsAmt, minsTimeRem;
                    $('#infoContent').children().each(function(){
                        if($(this).text().includes('Minion Time:')) minsTimeRem = $(this).find('span').text();
                        if($(this).text().includes('Minions:')) minsAmt = $(this).find('span').text()
                    })
                    if((minsChatAmt[currentUser] != null && minsChatAmt[currentUser]?.amt && !minsChatAmt[currentUser]?.started) && (minInfo == null || (minInfo && Date.now() > minInfo.currMs + minInfo.rem))){ /* || (minInfo && Date.now() > minInfo.currMs + minInfo.rem) */
                        newMsg = `Minion Pack Unstarted: ${minsChatAmt[currentUser].amt}`;
                    } else if(minsChatAmt[currentUser] != null && minsChatAmt[currentUser]?.started && minsChatAmt[currentUser]?.amt && minInfo == null ){
                        newMsg = `Minion Pack Activated: ${minsChatAmt[currentUser].amt}`;
                    } else if(!(minsAmt == '0' && minsTimeRem == '00:00:00') && minsChatAmt[currentUser] != null && minsChatAmt[currentUser].amt && minInfo != null && (minInfo.active || minsChatAmt[currentUser].started) && minInfo.rem - (Date.now() - minInfo.currMs) > 0){
                        newMsg = `Minion Pack Activated: ${minsChatAmt[currentUser].amt}, with ${msToTime(minInfo.rem - (Date.now() - minInfo.currMs))} remaining`;
                    } else if(!(minsAmt == '0' && minsTimeRem == '00:00:00') && minsAmt != null && minsTimeRem != null){
                        let timeArr = minsTimeRem.split(':'), msBotsTime = (3.6e6 * +timeArr[0]) + (6e4 * +timeArr[1]) + (1e3 * +timeArr[2]);
                        newMsg = `Minion Pack Activated: ${minsAmt}, with ${msToTime(msBotsTime)} remaining`;
                    } else {
                        newMsg = `Minion Pack Activated: none`;
                    }
                    break;
                }
                case 'pws': case 'pw': case 'powers': case 'power': case 'inv': case 'inventory': {
                    unsafeWindow.curserMsg(`It's recommended to use ${chatPrefix + command}1, ${chatPrefix + command}2, and ${chatPrefix + command}3 instead, so your chat messages aren't cut-off by the chat maxlength`, 'red', 8e3);
                    updatePwCount();
                    newMsg = 'Inv: ';
                    for (let i = 0; i < 6; i++) {
                        newMsg = 'Inv: ';
                        for (let pw in pws) {
                            const check = index => i < index ? ' ' : '';
                            if (pws[pw] != '') newMsg += `${pws[pw]}${check(1)}${(i > 2 ? pw.slice(0, 6 - i) : pw)},${check(2)}`;
                        }
                        newMsg = newMsg.replace(/,[^,]*$/g, '');
                        if (newMsg.length <= 100) i = 6;
                    }
                    if (newMsg == 'Inv: ') newMsg = 'Inv: no powers';
                    break;
                }
                case 'totalpws': case 'totalpw': case 'totalpowers': case 'totalpower': case 'total': case 'totpw':
                    newMsg = `Total Powerups: ${$('.inventory-box>p').toArray().map(x => +x.innerText).reduce((a, b) => a + b).toLocaleString('en-US')}`
                    break;
                case 'xplevel': case 'levelxp': case 'lvlxp': case 'xpcompleted': case 'xp':
                    newMsg = `XP Completed: ${currentPercent ? String(Math.round(currentPercent * currentLevel * 1e3, 1)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/" + (currentLevel * 1e3).toLocaleString('en-US') : "0/0"}`
                    break;
                case 'level': case 'levels': case 'lvls': case 'lvl': case 'lvlcompleted': case 'lvlscompleted':
                    newMsg = `Level ${currentLevel}, with ${round(currentPercent * 100, 3)}% completed`
                    break;
                case 'coin': case 'coins':
                    newMsg = `Coins: ${String(currentCoins).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    break;
                case 'hours': case 'hrs': case 'hour': case 'hr': case 'timeplayed':
                    newMsg = (isLogged() ? $('.timePlayed>span').text().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'Time Played: 0, not logged in');
                    break;
                case 'rank': case 'lvlrank':
                    newMsg = `My Rank: ${isLogged() ? $('.ranking.text-left>span').text().match(/(?<=^Your rank: )\d+$/gm)?.[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '∞, not logged in'}`;
                    break;
                case 'ping': case 'delay': case 'ms':
                    newMsg = `My Ping: ${$('#ping').text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    break;
                case 'fps': case 'frames':
                    newMsg = `My FPS: ${$('#fps').text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    break;
                case 'topmass': case 'highscore': case 'highmass': case 'highestmass':
                    newMsg = `My Top Mass: ${$('#topMass').text()}`
                    break;
                case 'cells': case 'cellcount': case 'cell':
                    newMsg = `My Cell Count: ${$('#cellsAmount').text()}`
                    break;
                case 'pw1': case 'pws1': case 'power1': case 'powers1': case 'inv1': case 'inventory1':
                    newMsg = getPowerMessage(1);
                    break;
                case 'pw2': case 'pws2': case 'power2': case 'powers2': case 'inv2': case 'inventory2':
                    newMsg = getPowerMessage(2);
                    break;
                case 'pw3': case 'pws3': case 'power3': case 'powers3': case 'inv3': case 'inventory3':
                    newMsg = getPowerMessage(3);
                    break;
                case 'friends': case 'friend': case 'friendsonline': case 'friendonline':
                    newMsg = `Friends Online: ${$('#friendsLoggedInAmt').text() + $('#friendsTotalAmt').text()}`;
                    break;
                case 'request': case 'requests': case 'friendrequest': case 'friendrequests': case 'friendreq': case 'req':
                    newMsg = `Friend Requests: ${$('#friendsRequestsAmt').text() === '' ? 'none' : $('#friendsRequestsAmt').text()}`;
                    break;
                case 'gold': case 'goldmem': case 'goldmember': case 'golddays': case 'gm': {
                    const obj = accGoldMem[currentUser];
                    if(obj?.has == null){
                        newMsg = `Days of Goldmember Remaining: none`;
                        break;
                    }
                    newMsg = `Days Of Goldmember Remaining: ${obj.has || obj.days != null ? (obj.days + (obj.days == 1 ? ' Day' : ' Days')) : 'none'}`;
                    break;
                }
                case 'alive': case 'alivetime': case 'timealive':
                    newMsg = `Time Alive: ${unsafeWindow.playerIsAlive() ? msToTime(Date.now() - timeAlive) : 'not alive'}`;
                    break;
                case 'mass': case 'currentmass':
                    newMsg = `Current Mass: ${unsafeWindow.playerIsAlive() ? currentMass.toLocaleString('en-US') : 'none, not alive'}`;
                    break;
                case 'user': case 'username': case 'usr': case 'account': case 'acc':
                    newMsg = `My Username: ${currentUser == "Please Login First" ? "logged out" : currentUser}`
                    break;
                case 'custom': case 'customs': case 'customskins': case 'totalcustoms':
                    if($('#publicSkinsPage').children().length == 0){
                        unsafeWindow.curserMsg(`Please load your custom skins before using this command`, 'red', 6e3);
                        newMsg = '';
                        break;
                    }
                    newMsg = `My Total Custom Skins: ${$('[id^="skinCustomImg"').length}, worth ${($('[id^="skinCustomImg"').length * 1e6).toLocaleString('en-US')}`
                    break;
                case 'skins': case 'boughtskins': case 'ownedskins': case 'totalskins': {
                    if($('#skinsBuy [id^="skinContainer"]').length == 0){
                        unsafeWindow.curserMsg(`Please load your owned skins from the agma.io skin store`, 'red', 6e3);
                        newMsg = '';
                        break;
                    }
                    let ownedSkinsArr = [], edSkins = 0, totalValue = 0;
                    $('#skinsBuy [id^="skinUseBtn"]').each(function(){
                        ownedSkinsArr.push(+$(this)[0].id.match(/\d+$/gm)[0]);
                    })
                    for(let i of skinsArr){
                        if(ownedSkinsArr.includes(i.id)){
                            i.price > 2e6 ? ++edSkins : totalValue += i.price;
                        }
                    }
                    newMsg = `My Total Bought Skins: ${$('#skinsBuy [id^="skinUseBtn"').length}, worth ${totalValue.toLocaleString('en-US')} coins (${edSkins} lim. ed.)`;
                    break;
                }
                case 'ownedwearables': case 'wearables': case 'wears': case 'totalwearables': case 'totalwears': {
                    if(!$('#fsfb-wearsloaded').length){
                        unsafeWindow.curserMsg(`Please load your wearables before using this command`, 'red', 6e3);
                        newMsg = ''; // aft
                        break;
                    }
                    let wearsPrice = [0], edSkins = 0;
                    $('[id^="wearableUseBtn"]').each(function(){
                        if ($(this).parents().eq(0).siblings('p').text() == '(Limited Edition)') edSkins++;
                        wearsPrice.push(+$(this).parents().eq(0).siblings('span.win-price').text().replace(/,/g, ''));
                    });
                    newMsg = `My Total Wearables: ${$('[id^="wearableUseBtn"]').length}, worth ${sigma(wearsPrice).toLocaleString('en-US')} coins (${edSkins} lim. ed.)`;
                    break;
                }
                case 'cloak': case 'invis': case 'invisibility': {
                    let status, time;
                    $('#infoContent>p').each(function(){
                        if($(this).text().includes('Cloaked: ')) status = $(this).text().match(/(?<=Cloaked: ).+/gm);
                        if($(this).text().includes('Cloak Time: ')) time = $(this).text().match(/(?<=Cloak Time: ).+/gm);
                    })
                    newMsg = status == null || time == null ? `Cloak: inactive` : `Cloak ${status}, with ${time} remaining`;
                    break;
                }
                case 'addfriend': case 'add':
                    if(params?.length == 0){
                        unsafeWindow.curserMsg(`Please add a username after the command, such as: ${chatPrefix}${command} Fishyyy`, 'red', 6e3);
                        newMsg = '';
                        break;
                    }
                    unsafeWindow.friendAdd(params[0]);
                    break;
                case 'partymembers': case 'partymember': case 'party':
                    newMsg = $('#partyContent').children().length - 1 > 0 ? `In a party, with ${$('#partyContent').children().length - 1} members` : `Party members: not in a party`;
                    break;
                case 'players': case 'ply': case 'plyrs': case 'serverplayers': case 'totalplayers':{
                    let players = 0, max = 0;
                    $('[id^="serverPlayers"]').toArray().map(a => a.innerText).forEach( e => {
                        let [plys, mx] = e.split('/');
                        players += +plys;
                        max += +mx;
                    })
                    newMsg = `Server Players: ${$('[id^="serverRow"].active>[id^="serverPlayers"]').text()}, Total Players: ${players.toLocaleString('en-US') + '/' + max.toLocaleString('en-US')}`;
                    break;
                }
                case 'server':
                    newMsg = `Currently playing in ${$('[id^="serverRow"].active>*').first().text()}`;
                    break;
                case 'abil': case 'abils': case 'ability': case 'abilities': { // not finished
                    let arr = [], newStr = '';
                    $('.checkmark').each(function(){
                        if($(this).css('display') == 'block') arr.push($(this).siblings().eq(1).attr('item'));
                    })
                    if(misc_settings.abil?.[currentUser] != null || arr.length){
                        const abil = misc_settings.abil?.[currentUser],
                              map = {
                                  18: 'Freeze',
                                  22: 'Invis Cloak',
                                  20: '2x Spawn',
                                  23: '2x Exp'
                              }
                        if(currentUser == "Please Login First"){
                            newMsg = `Active Abilities: none`;
                            break;
                        }
                        for(let i of arr) newStr += map[i] + (abil?.[i] != null && 8.64e7 - (Date.now() - abil[i]) > 0 ? (' with ' + msToTime(8.64e7 - (Date.now() - abil[i])) + ' left, ') : ', ');
                        newMsg = `Active Abilities: ${newStr == '' ? 'none' : newStr}`;
                        newMsg = newMsg.replace(/,[^,]*$/g, '');
                    } else {
                        newMsg = `Active Abilities: none`;
                    }
                    break;
                }
                case 'xpproj': case 'xpprojected': case 'projectedxp': case 'projxp': case 'levelprojected': case 'lvlproj': case 'lvlprojected': {
                    const projectedHr = lastHrXP.length > 0 ? sigma(getProperty(lastHrXP.slice(-5), "gained")) * 12 : 0;
                    newMsg = `Next Hour Projected XP: ${xpStatsInPercentages ? round(convertToPerc(projectedHr, currentLevel) * 100, 2) + '%' : round(projectedHr).toLocaleString('en-US')}`;
                    break;
                }
                case 'projcoins': case 'projcoin': case 'projectedcoin': case 'projectedcoins': case 'coinsproj': case 'coinproj': case 'coinprojected': case 'coinsprojected': {
                    const projectedHr = lastHrCoins.length > 5 ? Math.round(sigma(getProperty(lastHrCoins.slice(-5), "gained")) * 12) : 0;
                    newMsg = `Next Hour Projected Coins: ${projectedHr.toLocaleString('en-US')}`;
                    break;
                }
                case 'xpremaining': case 'xprem': case 'remainingxp': case 'remxp': {
                    const xpRemaining = currentLevel ? currentLevel * 1e3 - currentPercent * currentLevel * 1e3 : 0,
                          newMsg = `XP Remanining: ${xpStatsInPercentages ? round(convertToPerc(xpRemaining, currentLevel) * 100, 2) + '%' : round(xpRemaining).toLocaleString('en-US')}`;
                    break;
                }
                case 'coinsremaining': case 'coinsrem': case 'remainingcoins': case 'remcoins': {
                    const coinsRemaining = currentCoins ? 25e4 - currentCoins % 25e4 : 0;
                    newMsg = `Coins Remanining: ${coinsRemaining.toLocaleString('en-US')}`;
                    break;
                }
                case 'xplasthour': case 'lasthourxp': case 'hrxp': case 'xphr': case 'hourxp': case 'xphour': {
                    const lastHr = lastHrXP.length > 0 ? sigma(getProperty(lastHrXP, "gained")) : 0;
                    newMsg = `XP Last Hour: ${xpStatsInPercentages ? round(convertToPerc(lastHr, currentLevel) * 100, 2) + '%' : round(lastHr).toLocaleString('en-US')}`;
                    break;
                }
                case 'coinslasthour': case 'lasthourcoins': case 'hrcoins': case 'coinshr': case 'hourcoins': case 'coinshour': {
                    const lastHr = lastHrCoins.length > 0 ? Math.round(sigma(getProperty(lastHrCoins, "gained"))) : 0
                    newMsg = `Coins Last Hour: ${lastHr.toLocaleString('en-US')}`;
                    break;
                }
                case 'xplastmin': case 'xplastminute': case 'lastminxp': case 'lastminutexp': case 'minxp': case 'minutexp': case 'xpmin': {
                    const lastMin = lastMinXP.length > 0 ? sigma(getProperty(lastMinXP, "gained")) : 0;
                    newMsg = `XP Last Minute: ${xpStatsInPercentages ? round(convertToPerc(lastMin, currentLevel) * 100, 2) + '%' : round(lastMin).toLocaleString('en-US')}`;
                    break;
                }
                case 'coinslastmin': case 'coinslastminute': case 'lastmincoins': case 'lastminutecoins': case 'coinsxp': case 'minutecoins': case 'coinsmin': {
                    const lastMin = lastMinCoins.length > 0 ? Math.round(sigma(getProperty(lastMinCoins, "gained"))) : 0;
                    newMsg = `Coins Last Minute: ${lastMin.toLocaleString('en-US')}`;
                    break;
                }
                case 'xplast12s': case 'xplast12sec': case 'xplast12seconds': case 'last12secondsxp': case 'lastminutexp': case 'xp12s': case '12sxp': case 'xp12sec': {
                    const last12sec = lastMinXP.length > 0 ? lastMinXP[lastMinXP.length - 1].gained : 0;
                    newMsg = `XP Last 12 Seconds: ${xpStatsInPercentages ? round(convertToPerc(last12sec, currentLevel) * 100, 2) + '%' : round(last12sec).toLocaleString('en-US')}`;
                    break;
                }
                case 'xpsession': case 'sessionxp': case 'xpsesh': case 'sesh': case 'seshxp': case 'online': {
                    const sessionXP = currentXP && accounts[currentUser] ? currentXP - accounts[currentUser].xp : 0;
                    newMsg = `Session XP: ${xpStatsInPercentages ? round(currentLevel && accounts[currentUser] ? ((round(currentPercent, 3) + currentLevel) - accounts[currentUser].lvl) * 100 : 0, 2) + '%' : round(sessionXP).toLocaleString('en-US')}, Session Length: ${msToTime(Date.now() - scriptStartXP)}`;
                    break;
                }
                case 'lifetimexp': case 'xplifetime':
                    newMsg = `Lifetime XP: ${round(currentXP ?? 0).toLocaleString('en-US')}`;
                    break;
                case 'coinssession': case 'sessioncoins': case 'coinssesh': case 'seshcoins': {
                    const sessionCoins = currentCoins && accounts[currentUser] ? Math.round(currentCoins - accounts[currentUser].coins): 0;
                    newMsg = `Session Coins: ${sessionCoins.toLocaleString('en-US')}, Session Length: ${msToTime(Date.now() - scriptStartCoins)}`;
                    break;
                }
                case 'ratewaifu': case 'waifu': case 'waifurating': case 'waifurate': case 'howwaifu':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `My Waifu Rating: 0 / 10`;
                            break;
                        }
                        newMsg = `My Waifu Rating: ${Math.round(+String(Math.round(hashCode(currentUser, 5) * 102.2)).slice(-3, -1) / 10)} / 10`;
                        break;
                    }
                    newMsg = `${params[0]}'s Waifu Rating: ${Math.round(+String(Math.round(hashCode(params[0], 5) * 102.2)).slice(-3, -1) / 10)} / 10`;
                    break;
                case 'ratepro': case 'pro': case 'prorating': case 'prorate': case 'howpro':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% pro`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 5) * 194.3)).slice(-4, -1) / 10)}% pro`;
                        break;
                    }
                    newMsg = `${params[0]} is ${Math.round(+String(Math.round(hashCode(params[0], 5) * 194.3)).slice(-4, -1) / 10)}% pro`;
                    break;
                case 'ratedog': case 'dog': case 'dograting': case 'dograte': case 'howdog':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% dog`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 6) * 189.3)).slice(-4, -1) / 10)}% dog`;
                        break;
                    }
                    newMsg = `${params[0]} is ${Math.round(+String(Math.round(hashCode(params[0], 6) * 189.3)).slice(-4, -1) / 10)}% dog`;
                    break;
                case 'rateking': case 'king': case 'kingrating': case 'kingrate': case 'howking':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% king`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 5) * 389.3)).slice(-4, -1) / 10)}% king`;
                        break;
                    }
                    newMsg = `${params[0]} is ${Math.round(+String(Math.round(hashCode(params[0], 5) * 389.3)).slice(-4, -1) / 10)}% king`;
                    break;
                case 'dice': case 'die': case 'roll': case 'rolldice': {
                    const sides = params?.length == 0 || isNaN(+params[0]) ? 6 : +params[0];
                    newMsg = `Rolled a dice with ${sides.toLocaleString('en-US')}, landed on ${Math.round(RNG(1, sides)).toLocaleString('en-US')}`;
                    break;
                }
                case 'rng': case 'random': case 'randomnumber': case 'number': case 'num': {
                    const min = params?.length < 1 || isNaN(+params[0]) ? 0 : +params[0];
                    const max = params?.length < 2 || isNaN(+params[1]) ? min + 10 : +params[1];
                    if(min > max){
                        unsafeWindow.curserMsg(`Please make sure your minimum (${min}) is less than your maximum (${max})`, 'red', 5e3);
                        newMsg = '';
                        break;
                    }
                    newMsg = `Generated a random number between ${min.toLocaleString('en-US')} and ${max.toLocaleString('en-US')}, chose: ${Math.round(RNG(min, max)).toLocaleString('en-US')}`;
                    break;
                }
                case 'ratefriends': case 'friendsrating': case 'friendsrate': case 'howfriends':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% friends with a frog`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 4) * 283.7)).slice(-4, -1) / 10)}% friends with a frog`;
                        break;
                    }
                    if(params?.length == 1){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% friends with a ${params[0]}`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 4) * 283.7) + Math.round((hashCode(params[0], 5) * 405.2))).slice(-4, -1) / 10)}% friends with a ${params[0]}`;
                        break;
                    } else {
                        newMsg = `${params[0]} is ${Math.round(+String(Math.round(hashCode(params[0], 4) * 283.7) + Math.round((hashCode(params[0], 5) * 405.2))).slice(-4, -1) / 10)}% friends with ${params[1]}`;
                        break;
                    }
                case 'rateenemies': case 'enemiesrating': case 'enemiesrate': case 'howenemies': case 'enemies':
                    if(params?.length == 0){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% enemies with a frog`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 4) * 164.45)).slice(-5, -2) / 10)}% enemies with a frog`;
                        break;
                    }
                    if(params?.length == 1){
                        if(currentUser == "Please Login First"){
                            newMsg = `I am 0% enemies with a ${params[0]}`;
                            break;
                        }
                        newMsg = `I am ${Math.round(+String(Math.round(hashCode(currentUser, 4) * 164.45) + Math.round((hashCode(params[0], 5) * 405.2))).slice(-5, -2) / 10)}% enemies with a ${params[0]}`;
                        break;
                    } else {
                        newMsg = `${params[0]} is ${Math.round(+String(Math.round(hashCode(params[0], 4) * 164.45) + Math.round((hashCode(params[0], 5) * 405.2))).slice(-5, -2) / 10)}% enemies with ${params[1]}`;
                        break;
                    }
                case 'flip': case 'coinflip': case 'heads': case 'tails': case 'flipcoin': {
                    newMsg = `Coin flipped! Landed on ${Math.round(RNG(0, 1)) ? 'heads' : 'tails'}`;
                    break;
                }
                case 'script': case 'version': case 'fsfb':
                    newMsg = `Using fsfb script! Version ${version}`
                    break;
                case 'time': case 'localtime': case 'localetime': case 'date':
                    newMsg = `My Time: ${new Date().toLocaleString()}`
                    break;
                case 'leaderboard': case 'leader': case 'lb':
                    newMsg = `My leaderboard position: ${!unsafeWindow.playerIsAlive() || leaderboardPos ? leaderboardPos : 'none, not alive'}`
                    break;
                case 'altcaps': case 'altcap': case 'altscaps': case 'altscap':
                    newMsg = firstMatch[0].replace(new RegExp(command + '\\s', 'gi'), '').toLowerCase().split('').map((v, i) => i % 2 == 0 ? v : v.toUpperCase()).join('');
                    cmdVerif = false;
                    break;
                case 'sparkles':
                    newMsg = '✨' + firstMatch[0].replace(new RegExp(command + '\\s', 'gi'), '') + '✨';
                    cmdVerif = false;
                    break;
                    // case 'nachoyt': case 'nachocheeseyt': case 'nacho': case 'nachocheese':
                    //     newMsg = originalMsg + 'has YT --> NACHO CHEESE Agma.io, Clips, & more';
                    //     break;
                    // case 'nachosub': case 'nachosubs': case 'nachocheesesub': case 'nachocheesesubs':
                    //     newMsg = originalMsg + 'Nacho sub count: 208';
                    //     break;
                case 'cfix': case 'canvasfix': {
                    const canvas = document.querySelector('#canvas');
                    ({ innerWidth: canvas.width, innerHeight: canvas.height } = unsafeWindow);
                    unsafeWindow.curserMsg('Canvas was reset.', 'green', 5e3);
                    newMsg = '';
                    break;
                }
                case 'solo': case 'soloserver': // message from Miracle Scripts (another great agma script) - https://greasyfork.org/scripts/391142
                    newMsg = ':warning: SOLO SERVER :warning: No teaming!! No hay equipo!! Pas d\'équipe!! Kein Teaming!! لا فريق';
                    cmdVerif = false;
                    break;
                case 'facts': case 'fact': case 'funfact': {
                    const fact = randomFact();
                    newMsg = fact ? randomFact() : '';
                    fact ?? unsafeWindow.curserMsg(`Fsfb is unable to access the list of facts. Possible cause: not using tampermonkey or not using the latest version of tampermonkey.`, 'red', 6e3);
                    break;
                }
                default:
                    newMsg = $chtbox.val();
                    cmdVerif = false;
                    break;
            }
            // (unsafeWindow.kfjsdafl != null) ? $chtbox.val(newMsg) : $chtbox.val(''), console.log(newMsg);;
            $chtbox.val(newMsg == '' ? '' : originalMsg + (newMsg?.[cmdVerif ? 'replace' : '']?.(/[youaie]/gmi, m => cmap[m]) || newMsg));
        })
    }

    // check if player is alive
    let playerAlive = false, timeAlive;
    unsafeWindow.playerIsAlive = () => playerAlive && $('#advert').css('display') != 'none' ? false : playerAlive;
    const playerIsAlive = unsafeWindow.playerIsAlive;
    const _setNick = unsafeWindow.setNick
    unsafeWindow.setNick = function(){
        if(arguments[1] || !playerAlive) timeAlive = Date.now();// respawned
        playerAlive = true;
        setTimeout(() => { svSwitch = true }, 1000);
        return _setNick.apply(this, arguments);
    }
    const _closeAdvert = unsafeWindow.closeAdvert
    unsafeWindow.closeAdvert = function(){
        playerAlive = false;
        return _closeAdvert.apply(this, arguments);
    }

    const getPowerMessage = line => {
        let obj = {};
        [1, 2, 3].forEach(n => (obj[`string${n}`] = `Inv (${n}/?): `));
        updatePwCount();
        const newPws = {
            Recombine: pws.rec,
            Speed: pws.spd,
            Growth: pws.grw,
            Virus: pws.vrs,
            Mothercell: pws.mtcl,
            Portal: pws.prtl,
            'Gold Block': pws.gblk,
            Freeze: pws.fz,
            Push: pws.psh,
            Wall: pws.wall,
            'Anti-Freeze': pws.afz,
            'Anti-Recombine': pws.arc,
            Shield: pws.shld,
            'Frozen Virus': pws.fvs
        }
        for(let i in newPws){
            let add = newPws[i] == '' ? '' : `${newPws[i]} ${i}, `;
            if(obj.string1.length + add.length <= 100) obj.string1 += add;
            else if(obj.string2.length + add.length <= 100) obj.string2 += add;
            else obj.string3 += add;
        }
        if(obj.string1 == `Inv (1/?): ` && line == 1) return 'Inv (1/1): no powers';
        if(obj['string' + line] == `Inv (${line}/?): `){
            unsafeWindow.curserMsg(`This inventory line doesn't exist! Try a smaller number`, 'red', 6e3);
            return '';
        }
        let totalLines = 1;
        if(obj.string3 == 'Inv (3/?): ' && obj.string2 != 'Inv (2/?): ') totalLines = 2;
        else if(obj.string3 != 'Inv (3/?): ' && obj.string2 != 'Inv (2/?): ') totalLines = 3;
        return obj['string' + line].replace(/,[^,]*$/g, '').replace(/\?/g, totalLines);
    }

    let pws = {rec: '', spd: '', grw: '', vrs: '', mtcl: '', prtl: '', gblk: '', fz: '', psh: '', wall: '', afz: '', arc: '', shld: '', fvs: ''};
    const updatePwCount = () => {
        $('.inventory-box').each(function(){
            const map = {
                Wall : 'wall',
                AntiFreeze: 'afz',
                AntiRecombine: 'arc',
                Shield: 'shld',
                FrozenVirus: 'fvs',
                Recombine: 'rec',
                Speed: 'spd',
                Growth: 'grw',
                SpawnVirus: 'vrs',
                SpawnMothercell: 'mtcl',
                SpawnPortal: 'prtl',
                SpawnGoldOre: 'gblk',
                Freeze: 'fz',
                '360Shot': 'psh'
            }
            if(map[$(this)[0]?.id.slice(3)] != null) pws[map[$(this)[0].id.slice(3)]] = $(this).css('display') != 'none' ? $(this).children().eq(0).text() || '1' : '';
        })
    }

    $('#fsfb-export-btn').on('click', () => {
        if(!$('#fsfb-sect-imexport>label>input').is(':checked')) return void(unsafeWindow.curserMsg('You need to select at least one setting to export!', 'red'));
        if($('#fsfb-custom-bg').is(':checked')) unsafeWindow.curserMsg('Exporting settings with custom background included is likely to increase the file size', 'red', 4e3);
        let script_settings = {},
            script_themes = {};
        for (let i in settings) { // put the settings & themes into different objects
            if (i == "theme" || i == "theme_boxes") script_themes[i] = settings[i];
            else if (i != "export_import") script_settings[i] = settings[i];
        }
        let bgImg = null;
        const downloadFile = () => {
            let obj = {
                selected: {
                    game_settings: $('#fsfb-game-settings').is(':checked'),
                    game_controls: $('#fsfb-game-controls').is(':checked'),
                    game_background: $('#fsfb-custom-bg').is(':checked'),
                    script_settings: $('#fsfb-script-settings').is(':checked'),
                    script_theme: $('#fsfb-theme-settings').is(':checked')
                },
                game_settings: localStorage.settings,
                game_controls: localStorage.hotkeys,
                game_background: bgImg,
                script_settings: script_settings,
                script_theme: script_themes
            }
            // if the setting is turned off, then dont need to export it - set it to null
            for(let i in obj){
                if(i != 'selected' && !obj.selected[i]) obj[i] = null;
            }
            const a = document.createElement('a'),
                  file = new Blob([JSON.stringify(obj)], {type: "text/plain"});
            a.href = URL.createObjectURL(file), a.download = "fsfb script settings", a.click(), URL.revokeObjectURL(a.href); // download a txt file of exported settings
        }
        if($('#fsfb-custom-bg').is(':checked')){
            let db, req = unsafeWindow.indexedDB.open("AgmaDB", 1);
            req.onsuccess = function (x) {
                db = req.result;
                db.onclose = (c) => { db = null; }
                db.onversionchange = (c) => { db.close(), db = null; }
                let _ = db.transaction("general", "readonly").objectStore("general").get("cbgDataURL");
                _.onsuccess = () => {
                    bgImg = _.result;
                    downloadFile();
                }
            }, req.onupgradeneeded = function (c) {
                let req = c.target.result;
                if (!req.objectStoreNames.contains("general")) {
                    req.createObjectStore("general");
                    downloadFile();
                } else downloadFile();
            };
        } else {
            downloadFile();
        }
    });

    $('#fsfb-import-btn').on('click', () => {
        if(!$('#fsfb-sect-imexport>label>input').is(':checked')) return void(unsafeWindow.curserMsg('You need to select at least one setting to import!', 'red'));
        if($('#fsfb-custom-bg').is(':checked')) unsafeWindow.curserMsg('Pasting in settings that include a background image is likely to cause initial lag', 'red', 0);
        swal({
            title: "Import Settings",
            text: "Add your exported settings below and press OK to continue.",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Paste exported settings here"
        },
             function(inputVal){
            if (inputVal == null) return false;
            if (inputVal == "") {
                swal.showInputError("Please don't leave the input empty!");
                return false
            }
            try {
                let val = JSON.parse(inputVal);
                if(val.selected.script_settings && $('#fsfb-script-settings').is(':checked')){
                    for (let i in val.script_settings) {
                        for (let j in val.script_settings[i]) {
                            for(let x in settings){
                                for(let y in settings[x]){
                                    if(val.script_settings[i][j].id == settings[x][y].id) settings[x][y] = val.script_settings[i][j];
                                }
                            }
                        }
                    }
                }
                if(val.selected.script_theme && $('#fsfb-theme-settings').is(':checked')){
                    for (let i in val.script_theme) {
                        for (let j in val.script_theme[i]) {
                            for(let x in settings){
                                for(let y in settings[x]){
                                    if(val.script_theme[i][j].id == settings[x][y].id) settings[x][y] = val.script_theme[i][j];
                                }
                            }
                        }
                    }
                }
                if(val.selected.game_settings && $('#fsfb-game-settings').is(':checked')) localStorage.setItem('settings', val.game_settings);
                if(val.selected.game_controls && $('#fsfb-game-controls').is(':checked')) localStorage.setItem('hotkeys', val.game_controls);
                if(val.selected.game_background && $('#fsfb-custom-bg').is(':checked')){
                    let db, req = unsafeWindow.indexedDB.open("AgmaDB", 1);
                    req.onsuccess = function (x) {
                        db = req.result;
                        db.onclose = (c) => { db = null; }
                        db.onversionchange = (c) => { db.close(), db = null; }
                        let _ = db.transaction("general", "readwrite").objectStore("general").put(val.game_background, "cbgDataURL");
                    }, req.onupgradeneeded = function (c) {
                        let req = c.target.result;
                        if (!req.objectStoreNames.contains("general")) {
                            req.createObjectStore("general");
                        }
                    };
                }
                // if any agma controls were imported, need to refresh bc it's set using localstorage
                if((val.selected.game_settings && $('#fsfb-game-settings').is(':checked')) || (val.selected.game_controls && $('#fsfb-game-controls').is(':checked')) || (val.selected.game_background && $('#fsfb-custom-bg').is(':checked'))){
                    swal({
                        title: "Please Refresh!",
                        text: "Refreshing the page is required for your imported agma settings to take effect",
                        type: "warning",
                    });
                } else swal({ title: "Settings Successfully Imported!", type: "success" });
                saveSettings();
                updateScriptSettingsUI();
            } catch (error){
                swal({
                    title: "Something went wrong!",
                    text: "Please make sure you've entered in valid settings",
                    type: "error"
                });
            }
        });

    });

    $('#fsfb-settings-right').append(`<div class="fa fa-2x fa-info-circle" id="fsfb-extra-info" data-toggle="modal" data-target=".fsfb-bug-modal"></div>`)

    if(hideAds){
        localStorage.ad_l_time = "9e99"; // smth like time since last ad
        $('[id^="agma-io_"], [id^="adWrapper"], #preroll').addClass("fuckAds"); // move ads way off the screen
    } else if(localStorage.ad_l_time == "9e99")localStorage.ad_l_time = Date.now();

    let {innerWidth: width, innerHeight: height} = unsafeWindow;
    $(unsafeWindow).on('resize', () => ({innerWidth: width, innerHeight: height} = unsafeWindow));

    let pointMove;
    const linesplit = () => {
        if(!linesplitting) return;
        let closest, points = [{n: "top", x: width / 2, y: 0, nx: width / 2, ny: -10e6}, {n: "bottom", x: width / 2, y: height, nx: width / 2, ny: 10e6}, {n: "left", x: 0, y: height / 2, nx: -10e6, ny: height / 2}, {n: "right", x: width, y: height / 2, nx: 10e6, ny: height / 2}];
        if(linesplitClosestSide){
            let closestSide = [mosY / height, (height - mosY) / height, mosX / width, (width - mosX) / width]; // top, bottom, left, right
            closest = points[closestSide.indexOf(Math.min(...closestSide))];
        } else {
            let distance = p => Math.sqrt(Math.pow(mosX - p.x, 2) + Math.pow(mosY - p.y, 2)),
                closestPoint = points.reduce((a, b) => distance(a) < distance(b) ? a : b);
            for (let i = 0; i < points.length; i++) {
                if (closestPoint.x == points[i].x && closestPoint.y == points[i].y) closest = points[i]
            }
        }
        pointMove = {x: closest.nx, y: closest.ny};
        $('#canvas').trigger($.Event('mousemove', { clientX: closest.nx, clientY: closest.ny }));
        $("#linesplit-markers div").css('background-color', 'transparent');
        $('#linesplit-' + closest.n).css('background-color', '#e25615');
    }

    let confBtns = document.getElementsByClassName('purchase-btn confirmation');
    const btnsArr = Array.from(document.getElementsByClassName('purchase-btn confirmation'));

    const changeHTML = (index, price, id, name) => {
        setTimeout(() => {
            const amtDropdown = document.getElementById('shopAmountDropdown')
            document.getElementsByClassName('sweet-alert showSweetAlert')[0].childNodes[7].firstChild.textContent = 'If you click "Buy", you will purchase this item. It will cost ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' in total.';
            const dropdownChange = () => {
                if (amtDropdown.value == "custom") return buyCstmAmt(price, id, name);
                let priceSum = (amtDropdown.value * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                document.getElementsByClassName('sweet-alert showSweetAlert')[0].childNodes[7].firstChild.textContent = 'If you click "Buy", you will purchase this item. It will cost ' + priceSum + ' in total.';
            };
            amtDropdown.addEventListener('change', dropdownChange);
        }, 30);
    };
    const buyCstmAmt = (price, id, name) => {
        swal({
            title: "Enter Purchase Amount",
            text: "<span>How many <b>" + name + "</b> would you like to buy?</span>",
            html: true,
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Input amount here"
        },
             function(input){
            let pwAmt = +input,
                priceTotal = pwAmt * price;
            if (input == null) return false;
            if (input == "") {
                swal.showInputError("Please don't leave the input empty!");
                return false
            }
            if(!/^[0-9]+$/.test(input) || !(+input >>> 0 === parseFloat(+input))){
                swal.showInputError("Please only enter positive integers!");
                return false
            }
            swal({
                title: 'Confirm',
                text: '<p>If you click "Buy", you will purchase this item. It will cost ' + priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' in total.<br><small>You chose to purchase ' + pwAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' <b>' + name + '</b></small></p>',
                html: true,
                type: 'warning',
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonColor: '#4CAF50',
                confirmButtonText: 'Yes, confirm purchase',
                cancelButtonText: 'No, cancel purchase'
            }, function(confirmed){
                if(confirmed) buyPw(id, pwAmt);
            })

        });
    };
    // buy a certain amount of powers including > 255
    const buyPw = (shopID, pwAmt) => {
        if (pwAmt < 1) return;
        if (pwAmt > 255) {
            for (let i = 0; i < ~~(pwAmt / 255); i++) setTimeout(() => purchaseItem(shopID, 255), 500 * i + 250);
            purchaseItem(shopID, pwAmt % 255);
        } else purchaseItem(shopID, pwAmt);
    };


    if(improvedShop){
        // add event listeners to dropdown buttons
        for (let i = 0; i < confBtns.length; i++) {
            confBtns[i].onclick = function () {
                setTimeout(() => {
                    if (document.getElementById('shopAmountDropdown') != null) document.getElementById('shopAmountDropdown').innerHTML += '<option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="250">250</option> <option value="custom">Pick</option>';
                }, 5);
            }
        }
        // add event listeners to shop buttons
        for (let i = 0; i < 16; i++) {
            if (i != 10 && i != 11){
                btnsArr[i].addEventListener('click', () => {
                    let index = i;
                    changeHTML(index, btnsArr[index].getAttribute('price'), btnsArr[index].getAttribute('item'), $('.purchase-btn.confirmation[item="' + btnsArr[index].getAttribute('item') + '"]').prev().find('h3').eq(0).text());
                });
            }
        }
    }


    // add extra bot packs
    if(extraBotPacks){

        const newBots = [
            {title: "100 Bots", time: "24 HOURS", price: "700,000", id: 9},
            {title: "125 Bots", time: "48 HOURS", price: "900,000", id: 10},
            {title: "300 Bots", time: "24 HOURS", price: "900,000", id: 7},
            {title: "100 MASS Bots", time: "1 HOURS", price: "800,000", id: 8},
            {title: "300 Bots", time: "72 HOURS", price: "2,000,000", id: 11},
            {title: "100 MASS Bots", time: "24 HOURS", price: "2,600,000", id: 12},
            {title: "500 MASS Bots", time: "2 HOURS", price: "30,000,000", id: 17},
            {title: "500 MASS Bots", time: "12 HOURS", price: "40,000,000", id: 16}
        ]

        const minul = document.getElementsByClassName('tab-container-section minion scroll')[0].children[0].children[0]
        $('.confirm-minion[item=7], .confirm-minion[item=8]').parent().hide();
        document.getElementById('extraTab').childNodes[0].setAttribute('onclick', '');

        function createEl(i) {
            const botEl = document.createElement('li');
            botEl.setAttribute('class', 'masterTooltip extra-min');
            botEl.setAttribute('title', 'Spawns bots/minions which suicide into your playercell to make you big in no time! Minions follow your mouse and split upon your command! Minions start immediately after you buy them.');
            minul.appendChild(botEl);
            botEl.innerHTML = `
        <div class="title_prch">
        <img src="img/store/minions/minions_tab.png" width="70px" height="60px">
        <div class="minionDescription">
        <h4 style="font-size: 18px;">${i.title}</h4>
        <h3 style="margin-top:10px;color:white;"> ${i.time}</h3>
        </div> <span class="win-price">${i.price}</span>
        </div>
        <a href="#" price="${i.price}" item="${i.id}" class="purchase-btn2 confirm-minion extra-min">Buy</a>
        `;
        }
        for(let i of newBots) createEl(i);

        function warnBeforeMinion(linkURL, priceK,itemId) {
            swal({
                title: "Confirm",
                text: 'If you click "Buy", you will purchase these minions. They cost ' + priceK,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#4CAF50",
                confirmButtonText: "Yes, confirm purchase",
                cancelButtonText: "No, cancel purchase"
            }, function() {
                unsafeWindow.purchaseMinion(itemId);
            });
        }
    }

    // listen for when a min pack is bought
    let minBoughtAmt = {};
    if(extraChatCommands){
        let lastClickedPrice, currentPrice, lastID;
        const confirmClicked = () => {
            setTimeout(() => {
                if($('.sweet-alert h2').text() != "Success!" || lastClickedPrice != currentPrice) return;
                const map = {
                    1: '10 Bots 1 Hour',
                    2: '40 Bots 1 Hour',
                    3: '50 Bots 2 Hours',
                    4: '80 Bots 1 Hour',
                    5: '100 Bots 4 Hours',
                    6: '125 Bots 8 Hours',
                    7: '300 Bots 24 Hours',
                    8: '100 MASS Bots 1 Hour',
                    9: '100 Bots 24 Hours',
                    10: '125 Bots 48 Hours',
                    11: '300 Bots 72 Hours',
                    12: '100 MASS Bots 24 Hours'
                }
                minBoughtAmt[currentUser] = {...minsChatAmt[currentUser], ... {chatAmt: map[lastID], started: false}};
            }, 900);
        };
        $('.purchase-btn2.confirm-minion[item]').on('click', function () {
            lastClickedPrice = this.getAttribute('price').replace(/,/g, '');
            lastID = this.getAttribute('item');
            $('.confirm').attr('disabled', 'true'); // disable so user doesn't buy early - swal is slow to load text
            setTimeout(() => {
                $('.confirm').removeAttr('disabled');
                currentPrice = $('.sweet-alert.showSweetAlert.visible p').eq(0).text().replace(/\D+/g, '');
            }, 750);
            setTimeout(() => $('.confirm')[0].addEventListener('click', confirmClicked), 500);
        })
    }

    // context menu: click on skin -> skin ID to clipboard, click on name -> name to clipboard
    $('#contextPlayer').on('click', e => {
        if(!rightClickCopyInfo) return;
        if($('#contextPlayerSkin').width() + $('#contextPlayerSkin').offset().left + 5 > e.pageX){ // bcs #contextMenu event :dog:
            // cell was clicked
            if($('#contextPlayerSkin').css('background-image') != "none"){
                let skinID = $('#contextPlayerSkin').css('background-image').match(/(?<=\/skins\/)[0-9]+/gm)[0]; // get the skin image, then match only the skin's ID
                navigator.clipboard.writeText(skinID).then(function() {
                    unsafeWindow.curserMsg('Skin ID of ' + skinID + ' was copied to your clipboard.', 'green');
                }, function() {
                    unsafeWindow.curserMsg('Something went wrong. Nothing was added to your clipboard.', 'red');
                });
            } else if($('#contextPlayerSkin').css('background-color') == 'rgb(51, 51, 51)') unsafeWindow.curserMsg('No player selected. Nothing was added to your clipboard.', 'red');
            else unsafeWindow.curserMsg('No skin equipped. Nothing was added to your clipboard.', 'red');
        } else { // name was clicked
            if($('#contextPlayerSkin').css('background-color') == 'rgb(51, 51, 51)') unsafeWindow.curserMsg('No player selected. Nothing was added to your clipboard.', 'red');
            else {
                navigator.clipboard.writeText($('#contextPlayerName').text()).then(function() {
                    unsafeWindow.curserMsg('Nickname: "' + $('#contextPlayerName').text() + '" was copied to your clipboard', 'green');
                }, function() {
                    unsafeWindow.curserMsg("Something went wrong. Nothing was added to your clipboard.", "red");
                });
            }
        }
    });


    // little bar at the top of the screen that tells u stuff
    let curserTimeout;
    unsafeWindow.curserMsg = (msg, color, time) => {
        if(color == "green") color = "rgb(0, 192, 0)";
        if(color == "red") color = "rgb(255, 0, 0)";
        if(color == "gray") color = "rgb(153, 153, 153)";
        clearTimeout(curserTimeout);
        $('#curser').text(msg).show().css('color', color)
        if(time != 0) curserTimeout = setTimeout(() => $('#curser').fadeOut(400), time ?? 4e3);
    }

    let minTimeRemaining = 0;
    const startMin = unsafeWindow.strMin;
    unsafeWindow.strMin = function(){
        minsStart();
        return startMin.apply(this, arguments);
    }
    let minsChatAmt = {},
        accGoldMem = {};
    const minsStart = async() => {
        let minAmt, minsStarted = false;
        const waitUntil1 = (condition) => new Promise(resolve => {
            let interval = setInterval(() => {
                $('#infoContent').children().each(function(){
                    if($(this).text().includes('Minion Time:')) minsStarted = true;
                })
                condition() && (clearInterval(interval), resolve());
            }, 100);
            setTimeout(() => { (clearInterval(interval), resolve()); }, 1e4);
        });
        await waitUntil1(() => minsStarted == true);
        if(!minsStarted) return;
        $('#infoContent').children().each(function(){
            if($(this).text().includes('Minion Time:')) minTimeRemaining = $(this).find('span').text();
            if($(this).text().includes('Minions:')) minAmt = $(this).find('span').text();
        })
        let timeArr = minTimeRemaining.split(':'), msBotsTime = (3.6e6 * +timeArr[0]) + (6e4 * +timeArr[1]) + (1e3 * +timeArr[2]);
        misc_settings.bots[currentUser] = {...misc_settings.bots[currentUser], ...{active: true, amt: minAmt, chatAmt: null, rem: msBotsTime, currMs: Date.now()}};
        set("fsfb-misc", misc_settings);
    }

    // ability time remaining
    if(showRemainingAbilityTime){
        let lastClickedPrice, currentPrice, lastID;
        const confirmClicked = () => {
            setTimeout(() => {
                if($('.sweet-alert h2').text() != "Success!" || lastClickedPrice != currentPrice) return;
                misc_settings.abil[currentUser] = {...misc_settings.abil[currentUser], ...{[lastID] : Date.now()}};
                set("fsfb-misc", misc_settings);
            }, 900);
        };
        [18, 20, 22, 23].forEach(el => {
            let h5 = $(`.purchase-btn.confirmation[item="${el}"]`).parents().eq(0).find('div h5');
            h5.clone().insertAfter(h5).addClass('fsfb-fake').hide();
            $(`.purchase-btn[item="${el}"]`).on('click', function () {
                lastClickedPrice = this.getAttribute('price');
                lastID = this.getAttribute('item');
                $('.confirm').attr('disabled', 'true'); // disable so user doesn't buy early - swal is slow to load text
                setTimeout(() => {
                    $('.confirm').removeAttr('disabled');
                    currentPrice = $('.sweet-alert.showSweetAlert.visible p').eq(0).text().replace(/\D+/g, '');
                }, 750);
                setTimeout(() => $('.confirm')[0].addEventListener('click', confirmClicked), 500);
            })
        });
    }

    // sort wearables by owned
    const waitUntil = condition => new Promise(resolve => {
        let interval = setInterval(() => {
            condition() && (clearInterval(interval), resolve());
        }, 100);
        setTimeout(() => { (clearInterval(interval), resolve()) }, 15e3);
    });
    if(sortWearablesByOwned){
        $('#wearablesTab').on('click', async() => {
            await waitUntil(() => $('#phpWearables li').length > 55);
            if($('#phpWearables li').length <= 55) return;
            $($('[id^="wearableUseBtn"]').get().reverse()).each(function(){
                $($(this).parents().get(2)).insertBefore($("#phpWearables li:eq(0)"));
            })
            $('#phpWearables').append('<div id="fsfb-wearsloaded"></div>');
        });
    }
    // https://stackoverflow.com/questions/2424191/how-do-i-make-an-element-draggable-in-jquery
    $.fn.draggable = function(){
        var $this = this,
            ns = 'draggable_'+(Math.random()+'').replace('.',''),
            mm = 'mousemove.'+ns,
            mu = 'mouseup.'+ns,
            $w = $(window),
            isFixed = ($this.css('position') === 'fixed'),
            adjX = 0, adjY = 0;

        $this.mousedown(function(ev){
            var pos = $this.offset();
            if (isFixed) {
                adjX = $w.scrollLeft(); adjY = $w.scrollTop();
            }
            var ox = (ev.pageX - pos.left), oy = (ev.pageY - pos.top);
            $this.data(ns,{ x : ox, y: oy });
            $w.on(mm, function(ev){
                ev.preventDefault();
                ev.stopPropagation();
                if (isFixed) {
                    adjX = $w.scrollLeft(); adjY = $w.scrollTop();
                }
                var offset = $this.data(ns);
                $this.css({left: ev.pageX - adjX - offset.x, top: ev.pageY - adjY - offset.y});
            });
            $w.on(mu, function(){
                $w.off(mm + ' ' + mu).removeData(ns);
            });
        });
        return this;
    };


    /* xp/coins statistics */

    const updateTimeXP = 12e3; // xp bar updates every 12 seconds, don't change
    let lastMinXP = [];
    let lastHrXP = [];
    let currentPercent, currentLevel, currentXP, currentCoins;

    unsafeWindow.logStatsScriptXP = !1;
    unsafeWindow.logStatsScriptCoins = !1;
    let scriptStartCoins = Date.now();
    let scriptStartXP = Date.now();
    let accounts = {};
    const guiDisplay = "none";
    let coinsHTMLactive = false;

    const updateTimeCoins = 6e3;
    let lastMinCoins = [];
    let lastHrCoins = [];

    // add stats box html

    const statsBody = document.createElement('div');
    statsBody.setAttribute('id', 'stats-container');
    statsBody.style.display = guiDisplay;
    statsBody.innerHTML = `<div id="stats-main"><div id="stats-title"><title id="stats-extra-info">XP Stats - Updating Every 12s</title><div><div title="Toggle Percentages Shown" id="stats-perc-btn" class="fa fa-percent"></div><div title="Toggle Stats Shown" id="stats-change-shown" class="fa fa-eye-slash"></div><div title="Reset Stats" class="fa fa-refresh" id="stats-reset-btn"></div></div></div><div><table id="stats-table"><tbody><tr><td><label><input type="checkbox">Lvl Completed:</label></td><td>0/0</td></tr><tr><td><label><input type="checkbox">Remaining:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Projected (hr):</label></td><td>0</td></tr><tr><td><label><input type="checkbox">Last Hour:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Last Minute:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Last 12s:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Minute Mean:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Minute Median:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Minute Sd:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Latest Outliers:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Session XP:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Session Length:</label></td><td>100,000</td></tr><tr><td><label><input type="checkbox">Lifetime XP:</label></td><td>100,000</td></tr></tbody></table></div></div>`;
    document.querySelector('body').append(statsBody)

    $("#stats-container").draggable();
    let statsboxPos = misc_settings?.statsPos ?? {top: $("#stats-container")[0].style.top, left: $("#stats-container")[0].style.left};
    if(saveStatsBoxPosition && statsboxPos) $("#stats-container").css({'top' : statsboxPos.top, 'left' : statsboxPos.left});

    const convertToPerc = (xpAmt, lvl = 0) => isNaN(xpAmt / (lvl * 1000)) ? 0 : xpAmt / (lvl * 1000);

    $('#stats-reset-btn').on('click', () => {
        if(coinsHTMLactive){
            lastMinCoins = [];
            lastHrCoins = [];
            for(let i in accounts) accounts[i].coins = 0;
            if(accounts[currentUser] !== null && currentUser !== 'Please Login First') accounts[currentUser].coins = currentCoins;
            scriptStartCoins = Date.now();
        } else {
            lastMinXP = [];
            lastHrXP = [];
            for(let i in accounts) accounts[i].xp = 0;
            if(accounts[currentUser] !== null && currentUser !== 'Please Login First') accounts[currentUser].xp = currentXP;
            scriptStartXP = Date.now();
        }
        updateUI();
    });
    let xpStatsInPercentages = false;
    $('#stats-perc-btn').on('click', () => {
        xpStatsInPercentages = !xpStatsInPercentages;
        updateUI();
    });

    let changingShownStats = false;
    $('#stats-change-shown').on('click', () => {
        changingShownStats = !changingShownStats;
        if(changingShownStats){
            $('#stats-table tr').show();
            _replaceCSS('stats-input-css', '#stats-table input{ display: unset; }');
        } else {
            for(let i in misc_settings.statsSettings[coinsHTMLactive ? 'coins' : 'xp']){
                misc_settings.statsSettings[coinsHTMLactive ? 'coins' : 'xp'][i] = $(`#stats-${i} input[type="checkbox"]`).is(':checked');
                $('#stats-' + i)[$(`#stats-${i} input[type="checkbox"]`).is(':checked') ? 'show' : 'hide']();
            }
            set("fsfb-misc", misc_settings);
            _replaceCSS('stats-input-css', '#stats-table input{ display: none; }');
        }
    });

    class StatLog {
        constructor(val, lvl, user, arr) {
            this.type = this.findWhich(arr); // mostly for debugging
            this.id = this.getID(arr);
            this.user = user;
            this.amount = val;
            this.gained = this.calcGain(val, arr, this.id);
            this.lvl = lvl;
            // this.timestamp = Date.now(); // mostly for debugging
        }
        findWhich(arr) {
            return ((arr == lastMinXP || arr == lastHrXP ? "xp " : "coins " ) + (arr == lastHrXP || arr == lastHrCoins ? "hour" : "minute"));
        }
        calcGain(val, arr, id){
            const prevObj = arr[arr.length - 1];
            if(prevObj && arr == lastHrXP && id == 1) return round(sigma(getProperty(lastMinXP, "gained")), 3);
            if(prevObj && arr == lastHrCoins && id == 1) return round(sigma(getProperty(lastMinCoins, "gained")), 3);
            return prevObj && val - prevObj.amount >= 0 && prevObj.user == this.user && prevObj.amount != 0 ? round(val - prevObj.amount, 3) : 0;
        }
        getID(arr) {
            return arr[arr.length - 1] ? arr[arr.length - 1].id + 1 : 1;
        }

    }

    const xpInfo = () => {
        currentPercent = $('.progress-bar[role=progressbar]')[0].style.width.slice(0, -1) / 100;
        currentLevel = +$('#level.user-level')[0].textContent;
        currentXP = (levelSum(currentLevel) + currentLevel * currentPercent) * 1e3;
    }
    const coinsInfo = () => {
        currentCoins = +($('#coinsDash')[0].textContent.replace(/ /g, ''));
    }

    const updateUI = () => {
        if(changingShownStats) return;
        if(!coinsHTMLactive){
            const xpHr = lastHrXP.length,
                  xpMin = lastMinXP.length,
                  lvlCompleted = currentPercent ? String(Math.round(currentPercent * currentLevel * 1e3, 1)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/" + (currentLevel * 1e3).toLocaleString('en-US') : "0/0",
                  xpRemaining = currentLevel ? currentLevel * 1e3 - currentPercent * currentLevel * 1e3 : 0,
                  projectedHr = xpHr > 0 ? sigma(getProperty(lastHrXP.slice(-5), "gained")) * 12 : 0,
                  lastHr = xpHr > 0 ? sigma(getProperty(lastHrXP, "gained")) : 0,
                  lastHrCompleted = xpHr > 0 ? xpHr : 0,
                  lastMin = xpMin > 0 ? sigma(getProperty(lastMinXP, "gained")) : 0,
                  lastMinCompleted = xpMin > 0 ? xpMin : 0,
                  lastMinTotal = 6e4 / updateTimeXP,
                  last12sec = xpMin > 0 ? lastMinXP[lastMinXP.length - 1].gained : 0,
                  xBar = xpHr > 0 ? mean(getProperty(lastHrXP, "gained")) : 0,
                  xTilde = xpHr > 0 ? median(getProperty(lastHrXP, "gained")) : 0,
                  standardDev = xpHr > 0 ? standardDeviation(getProperty(lastHrXP, "gained")) : 0,
                  outliers = xpHr > 0 ? checkOutliers(getProperty(lastHrXP, "gained")) : 0,
                  sessionXP = currentXP && accounts[currentUser] ? currentXP - accounts[currentUser].xp : 0,
                  sessionLength = msToTime(Date.now() - scriptStartXP),
                  lifetimeXP = currentXP ? Math.round(currentXP) : 0,
                  updateTime = updateTimeXP;
            document.getElementById('stats-table').innerHTML = `<tbody><tr id="stats-lvlcomp"><td><label><input type="checkbox">Lvl Completed:</label></td><td>${lvlCompleted.toLocaleString('en-US')}</td></tr><tr id="stats-rem"><td><label><input type="checkbox">Remaining:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(xpRemaining, currentLevel) * 100, 2) + '%' : round(xpRemaining).toLocaleString('en-US')}</td></tr><tr id="stats-projhr"><td><label><input type="checkbox">Projected (hr):</label></td><td>${xpStatsInPercentages ? round(convertToPerc(projectedHr, currentLevel) * 100, 2) + '%' : round(projectedHr).toLocaleString('en-US')}</td></tr><tr id="stats-lasthr"><td><label><input type="checkbox">Last Hour:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(lastHr, currentLevel) * 100, 2) + '%' : round(lastHr).toLocaleString('en-US')}<span class="stats-completed">(${lastHrCompleted}/60)</span></td></tr><tr id="stats-lastmin"><td><label><input type="checkbox">Last Minute:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(lastMin, currentLevel) * 100, 2) + '%' : round(lastMin).toLocaleString('en-US')}<span class="stats-completed">(${lastMinCompleted + "/" + lastMinTotal})</span></td></tr><tr id="stats-lastsec"><td><label><input type="checkbox">Last 12s:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(last12sec, currentLevel) * 100, 2) + '%' : round(last12sec).toLocaleString('en-US')}</td></tr><tr id="stats-mean"><td><label><input type="checkbox">Minute Mean:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(xBar, currentLevel) * 100, 2) + '%' : round(xBar).toLocaleString('en-US')}</td></tr><tr id="stats-median"><td><label><input type="checkbox">Minute Median:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(xTilde, currentLevel) * 100, 2) + '%' : round(xTilde).toLocaleString('en-US')}</td></tr><tr id="stats-sd"><td><label><input type="checkbox">Minute Sd:</label></td><td>${xpStatsInPercentages ? round(convertToPerc(standardDev, currentLevel) * 100, 2) + '%' : round(standardDev).toLocaleString('en-US')}</td></tr><tr id="stats-sesh"><td><label><input type="checkbox">Session XP:</label></td><td>${xpStatsInPercentages ? round(currentLevel && accounts[currentUser] ? ((round(currentPercent, 3) + currentLevel) - accounts[currentUser].lvl) * 100 : 0, 2) + '%' : round(sessionXP).toLocaleString('en-US')}</td></tr><tr id="stats-seshlength"><td><label><input type="checkbox">Session Length:</label></td><td id="stats-sesh-length">${sessionLength}</td></tr><tr id="stats-lifetime"><td><label><input type="checkbox">Lifetime XP:</label></td><td>${lifetimeXP.toLocaleString('en-US')}</td></tr></tbody>`;
            for(let i in misc_settings.statsSettings.xp){
                $('#stats-' + i)[misc_settings.statsSettings.xp[i] ? 'show' : 'hide']();
                $('#stats-' + i + ' input[type="checkbox"').prop("checked", misc_settings.statsSettings.xp[i]);
            }
            $('#stats-extra-info').text(`XP Stats - Updating Every ${updateTime / 1e3}s`).css('color', '#00bbff');
            $('#stats-sesh-length').text(msToTime(Date.now() - scriptStartXP));
            $('#stats-perc-btn').show();
        } else {
            const coinsHr = lastHrCoins.length,
                  coinsMin = lastMinCoins.length,
                  coinGoalCompleted = currentCoins ? currentCoins.toLocaleString('en-US') + "/" + Math.ceil(currentCoins / 25e4).toLocaleString('en-US') * 25e4 : 0,
                  coinsRemaining = currentCoins ? 25e4 - currentCoins % 25e4 : 0,
                  projectedHr = coinsHr > 5 ? Math.round(sigma(getProperty(lastHrCoins.slice(-5), "gained")) * 12) : 0,
                  lastHr = coinsHr > 0 ? Math.round(sigma(getProperty(lastHrCoins, "gained"))) : 0,
                  lastHrCompleted = coinsHr > 0 ? coinsHr : 0,
                  lastMin = coinsMin > 0 ? Math.round(sigma(getProperty(lastMinCoins, "gained"))) : 0,
                  lastMinCompleted = coinsMin > 0 ? coinsMin : 0,
                  lastMinTotal = 6e4 / updateTimeCoins,
                  last12sec = coinsMin > 0 ? getProperty(lastHrCoins.slice(-5), "amount")[0] : 0,
                  xBar = coinsHr > 0 ? Math.round(mean(getProperty(lastHrCoins, "gained"))) : 0,
                  xTilde = coinsHr > 0 ? Math.round(median(getProperty(lastHrCoins, "gained"))) : 0,
                  standardDev = coinsHr > 0 ? Math.round(standardDeviation(getProperty(lastHrCoins, "gained"))) : 0,
                  outliers = coinsHr > 0 ? checkOutliers(getProperty(lastHrCoins, "gained")) : 0,
                  sessionXP = currentCoins && accounts[currentUser] ? Math.round(currentCoins - accounts[currentUser].coins): 0,
                  sessionLength = msToTime(Date.now() - scriptStartCoins),
                  updateTime = updateTimeCoins;
            document.getElementById('stats-table').innerHTML = `<tbody><tr id="stats-rem"><td><label><input type="checkbox">Remaining:</label></td><td>${coinsRemaining.toLocaleString('en-US')}</td></tr><tr id="stats-projhr"><td><label><input type="checkbox">Projected (hr):</label></td><td>${projectedHr.toLocaleString('en-US')}</td></tr><tr id="stats-lasthr"><td><label><input type="checkbox">Last Hour:</label></td><td>${lastHr.toLocaleString('en-US')}<span class="stats-completed">(${lastHrCompleted}/60)</span></td></tr><tr id="stats-lastmin"><td><label><input type="checkbox">Last Minute:</label></td><td>${lastMin.toLocaleString('en-US')}<span class="stats-completed">(${lastMinCompleted + "/" + lastMinTotal})</span></td></tr><tr id="stats-mean"><td><label><input type="checkbox">Minute Mean:</label></td><td>${xBar.toLocaleString('en-US')}</td></tr><tr id="stats-median"><td><label><input type="checkbox">Minute Median:</label></td><td>${xTilde.toLocaleString('en-US')}</td></tr><tr id="stats-sd"><td><label><input type="checkbox">Minute Sd:</label></td><td>${standardDev.toLocaleString('en-US')}</td></tr><tr id="stats-sesh"><td><label><input type="checkbox">Session Coins:</label></td><td>${sessionXP.toLocaleString('en-US')}</td></tr><tr id="stats-seshlength"><td><label><input type="checkbox">Session Length:</label></td><td id="stats-sesh-length">${sessionLength}</td></tr></tbody>`;
            for(let i in misc_settings.statsSettings.coins){
                $('#stats-' + i)[misc_settings.statsSettings.coins[i] ? 'show' : 'hide']();
                $('#stats-' + i + ' input[type="checkbox"').prop("checked", misc_settings.statsSettings.coins[i]);
            }
            $('#stats-extra-info').text(`Coin Stats - Updating Every ${updateTime / 1e3}s`).css('color', '#ffc800');
            $('#stats-sesh-length').text(msToTime(Date.now() - scriptStartCoins));
            $('#stats-perc-btn').hide();
        }
    }

    $('.progress-bar').eq(1).parent()[0].style.cursor = "pointer";

    if(coinXPstats){
        $('.progress-bar').eq(1).parent().on("click", () => {
            const statsCont = $('#stats-container');
            if(statsCont[0].style.display == "none") statsCont.fadeIn(400);
            else if(!coinsHTMLactive) statsCont.fadeOut(400);
            coinsHTMLactive = false;
            updateUI();
        }), [$(".dash-coin.dcTopBar").eq(0), $("#coinsTopLeft"), $(".progress-bar-coins").eq(1)].forEach(el => {
            el.on('click', (e) => {
                const statsCont = $('#stats-container');
                if(statsCont[0].style.display == "none") statsCont.fadeIn(400);
                else if(coinsHTMLactive) statsCont.fadeOut(400);
                coinsHTMLactive = true;
                updateUI();
                e.stopImmediatePropagation();
            });
        });
    }

    // copy chat msgs
    if(rightClickCopyChat){
        $('#contextSpectate').after(`<li id="contextCopyChat" class="contextmenu-item enabled"><div class="fa fa-clipboard fa-2x context-icon"></div><p>Copy Chat Messages</p></li>`);
        $('#contextCopyChat').on('click', () => {
            let arr = chatmsgs, str = "";
            if(arr != null){
                for(let i of arr.reverse()) str += `${new Date(i.time).toLocaleTimeString()} ${i.name}: ${i.message}\n`;
                navigator.clipboard.writeText(str).then(function() {
                    unsafeWindow.curserMsg('Chat messages were successfully added to clipboard.', 'green');
                }, function() {
                    unsafeWindow.curserMsg('Something went wrong. Nothing was added to your clipboard.', 'red');
                });
            }
            $('#contextMenu').hide();
        });
    }



    // add linesplit bubbles
    $('body').append(`<div id="linesplit-markers"><div id="linesplit-top"></div><div id="linesplit-right"></div><div id="linesplit-bottom"></div><div id="linesplit-left"></div></div>`); // linesplit html
    // add class to all elements that need to behidden
    setTimeout(() => $('#stats-container, #inventory, #chat, #minionUi, #infection_remain_zombie, #party, #challengeInfoBox, #gamemodeBox, #infoBox, #brGameContainer, #infGameContainer, #curser, #leaderboard, #minimap, #btnFriends, .innerBoxDashboard2, #fpsBox, #settingsBtn, #megaholder, #keyboard-layout, div[style^="position: fixed; right: 20px; bottom: 230px; z-index: 998;"], #linesplit_overlay, #fushykng, #art-panel').addClass("hideUI"), 4e3);

    const addFriendDecline = () => {
        if(!friendDeclineAll || currentUser == 'Please Login First') return;
        $('#friendAcceptAll').text('Reject All').addClass('fsfb-temp').clone().insertAfter($('#friendAcceptAll')).attr('style', 'right: 93px;').text('Accept All').removeClass('fsfb-temp');
        $('.fsfb-temp').attr('id', 'friendRejectAll').removeAttr('onclick').removeClass('fsfb-temp');
        $('#friendRejectAll').on('click', () => {
            $('#requestList>.friend>.btn-friends.remove').each(function(){ $(this)[0].click() })
        });
    }

    if(friendDeclineAll){ // $('#friendAcceptAll').length
        $('#btnFriends').on('click', async() => {
            await waitUntil(() => $('#friendAcceptAll').length > 0);
            if($('#friendAcceptAll').length == 0) return;
            await sleep(50);
            addFriendDecline();
        })
    }

    let pushFn = Array.prototype.push,
        spliceFn = Array.prototype.splice,
        prop = null,
        customCells = !0,
        specialCells = !0,
        customDc = false,
        cellProto,
        avgFps = 0,
        fpsArr = [],
        svSwitch = false,
        entArr = null,
        chatmsgs;

    let r1Portal = {
        portal: null,
        lastMass: 0,
        lastMassChange: 0,
        lastValue: 0,
        room: 1
    }, r2Portal = {
        portal: null,
        lastMass: 0,
        lastMassChange: 0,
        lastValue: 0,
        room: 2
    };

    let svInfo = {
        "default": {
            ejPortalMass: 12,
            r1Id: 1,
            r2Id: 7,
            r3Id: null,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: []
        },
        1: { // POPSPLIT
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 15300, size: 195},
                {type: 1, x: 2500, y: 15000, size: 45},
                {type: 2, x: 3000, y: 14500, size: 35},
                {type: 3, x: 2700, y: 14600, size: 29},
                // r2
                {type: 0, x: 12000, y: 15500, size: 195},
                {type: 1, x: 11000, y: 15000, size: 29},
                {type: 2, x: 12600, y: 14900, size: 35},
                {type: 2, x: 12000, y: 15200, size: 35},
                {type: 2, x: 11300, y: 14900, size: 35},
                {type: 3, x: 12800, y: 14500, size: 29}
            ]
        },
        2: { // SLOWSPLIT
            ejPortalMass: 20,
            r1Id: 1,
            r2Id: 14, // rightmost portal
            r3Id: 6,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 7400, y: 21300, size: 195},
                {type: 1, x: 3500, y: 21000, size: 45},
                {type: 2, x: 5000, y: 20500, size: 35},
                {type: 3, x: 3700, y: 20600, size: 29},
                // r2
                {type: 0, x: 14000, y: 22000, size: 195},
                {type: 1, x: 11000, y: 21000, size: 29},
                {type: 2, x: 11300, y: 20900, size: 35},
                {type: 2, x: 12000, y: 21200, size: 35},
                {type: 2, x: 12600, y: 20900, size: 35},
                {type: 3, x: 12800, y: 20500, size: 29},
                // r2 (2nd?)
                {type: 0, x: 22000, y: 21500, size: 195},
                {type: 2, x: 21300, y: 21000, size: 45}
            ]
        },
        4: { // FASTSPLIT
            ejPortalMass: 20,
            r1Id: 1,
            r2Id: 14, // rightmost portal
            r3Id: 6,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 7400, y: 21300, size: 195},
                {type: 1, x: 3500, y: 21000, size: 45},
                {type: 2, x: 5000, y: 20500, size: 35},
                {type: 3, x: 3700, y: 20600, size: 29},
                // r2
                {type: 0, x: 14000, y: 22000, size: 195},
                {type: 1, x: 11000, y: 21000, size: 29},
                {type: 2, x: 11300, y: 20900, size: 35},
                {type: 2, x: 12000, y: 21200, size: 35},
                {type: 2, x: 12600, y: 20900, size: 35},
                {type: 3, x: 12800, y: 20500, size: 29},
                // r2 (2nd?)
                {type: 0, x: 22000, y: 21500, size: 195},
                {type: 2, x: 21300, y: 21000, size: 35}
            ]
        },
        5: { // SPLITRUN
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 15300, size: 195},
                {type: 1, x: 2500, y: 15000, size: 45},
                {type: 2, x: 3000, y: 14500, size: 35},
                {type: 3, x: 2700, y: 14600, size: 29},
                // r2
                {type: 0, x: 12000, y: 15500, size: 195},
                {type: 1, x: 11000, y: 15000, size: 29},
                {type: 2, x: 12600, y: 14900, size: 35},
                {type: 2, x: 11300, y: 14900, size: 35},
                {type: 2, x: 12000, y: 15200, size: 35},
                {type: 3, x: 12800, y: 14500, size: 29}
            ]
        },
        6: { // XINSTA
            ejPortalMass: 12,
            r1Id: 1,
            r2Id: 6,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 26300, size: 195},
                {type: 1, x: 2500, y: 26000, size: 45},
                {type: 2, x: 3000, y: 25500, size: 45},
                {type: 3, x: 2700, y: 25600, size: 29},
                // r2
                {type: 0, x: 15000, y: 26500, size: 195},
                {type: 1, x: 14000, y: 26000, size: 29},
                {type: 2, x: 14300, y: 25900, size: 45},
                {type: 2, x: 15000, y: 26200, size: 45},
                {type: 2, x: 15600, y: 25900, size: 45},
                {type: 3, x: 15800, y: 25500, size: 29}
            ]
        },
        7: { // XY
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 15300, size: 195},
                {type: 1, x: 2500, y: 15000, size: 45},
                {type: 2, x: 3000, y: 14500, size: 35},
                {type: 3, x: 2700, y: 14600, size: 29},
                // r2
                {type: 0, x: 12000, y: 15500, size: 195},
                {type: 1, x: 11000, y: 15000, size: 29},
                {type: 2, x: 11300, y: 14900, size: 35},
                {type: 2, x: 12000, y: 15200, size: 35},
                {type: 2, x: 12600, y: 14900, size: 35},
                {type: 3, x: 12800, y: 14500, size: 29}
            ]
        },
        8: { // INSTANT EU
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 15300, size: 195},
                {type: 1, x: 2500, y: 15000, size: 45},
                {type: 2, x: 3000, y: 14500, size: 35},
                {type: 3, x: 2700, y: 14600, size: 29},
                // r2
                {type: 0, x: 12000, y: 15500, size: 195},
                {type: 1, x: 11000, y: 15000, size: 29},
                {type: 2, x: 11300, y: 14900, size: 35},
                {type: 2, x: 12000, y: 15200, size: 35},
                {type: 2, x: 12600, y: 14900, size: 35},
                {type: 3, x: 12800, y: 14500, size: 29}
            ]
        },
        9: { // CR EU
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 27300, size: 195},
                {type: 1, x: 2500, y: 27000, size: 45},
                {type: 2, x: 3000, y: 26500, size: 35},
                {type: 3, x: 2700, y: 26600, size: 29},
                // r2
                {type: 0, x: 12000, y: 27500, size: 195},
                {type: 1, x: 11000, y: 27000, size: 29},
                {type: 2, x: 11300, y: 26900, size: 35},
                {type: 2, x: 12000, y: 27200, size: 35},
                {type: 2, x: 12600, y: 26900, size: 35},
                {type: 3, x: 12800, y: 26500, size: 29}
            ]
        },
        11: { // GIGANTIC 1
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        12: { // GIANT NA
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        13: { // SS EU
            ejPortalMass: 13.5,
            r1Id: 12, //Lower room
            r2Id: 11,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: [
                // r1
                {type: 0, x: 1500, y: 27500, size: 195},
                {type: 1, x: 14000, y: 32000, size: 45},
                {type: 3, x: 13200, y: 33500, size: 45},
                {type: 4, x: 12500, y: 32200, size: 142},
                {type: 4, x: 14500, y: 32200, size: 142},
                // r2
                {type: 0, x: 16000, y: 33500, size: 195},
                {type: 1, x: 500, y: 24000, size: 45},
                {type: 3, x: 2500, y: 24000, size: 45},
                {type: 4, x: 900, y: 22000, size: 142},
                {type: 4, x: 500, y: 15000, size: 224},
                // r3 (?)
                {type: 4, x: 1200, y: 5500, size: 224},
                {type: 4, x: 2000, y: 3000, size: 224},
                {type: 4, x: 4000, y: 6000, size: 224},
                {type: 4, x: 4500, y: 3000, size: 224},
                // on map
                {type: 4, x: 8000, y: 3500, size: 224},
                {type: 4, x: 10000, y: 4500, size: 224},
                {type: 4, x: 16000, y: 3000, size: 224},
                {type: 4, x: 15400, y: 2400, size: 224},
                {type: 4, x: 7500, y: 19000, size: 224},
                {type: 4, x: 19200, y: 14000, size: 224},
                {type: 4, x: 24400, y: 24000, size: 224},
                {type: 4, x: 17500, y: 14000, size: 142},
                {type: 4, x: 30000, y: 16000, size: 142}
            ]
        },
        14: { // SS NA
            ejPortalMass: 13.5,
            r1Id: 12, //Lower room
            r2Id: 11,
            r1StartMass: 500,
            r2StartMass: 500,
            entities: [
                // r1
                {type: 0, x: 1500, y: 27500, size: 195},
                {type: 1, x: 14000, y: 32000, size: 45},
                {type: 3, x: 13200, y: 33500, size: 45},
                {type: 4, x: 12500, y: 32200, size: 142},
                {type: 4, x: 14500, y: 32200, size: 142},
                // r2
                {type: 0, x: 16000, y: 33500, size: 195},
                {type: 1, x: 500, y: 24000, size: 45},
                {type: 3, x: 2500, y: 24000, size: 45},
                {type: 4, x: 900, y: 22000, size: 142},
                {type: 4, x: 500, y: 15000, size: 224},
                // r3 (?)
                {type: 4, x: 1200, y: 5500, size: 224},
                {type: 4, x: 2000, y: 3000, size: 224},
                {type: 4, x: 4000, y: 6000, size: 224},
                {type: 4, x: 4500, y: 3000, size: 224},
                // on map
                {type: 4, x: 8000, y: 3500, size: 224},
                {type: 4, x: 10000, y: 4500, size: 224},
                {type: 4, x: 16000, y: 3000, size: 224},
                {type: 4, x: 15400, y: 2400, size: 224},
                {type: 4, x: 7500, y: 19000, size: 224},
                {type: 4, x: 19200, y: 14000, size: 224},
                {type: 4, x: 24400, y: 24000, size: 224},
                {type: 4, x: 17500, y: 14000, size: 142},
                {type: 4, x: 30000, y: 16000, size: 142}
            ]
        },
        17: { // CR AS
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 27300, size: 195},
                {type: 1, x: 2500, y: 27000, size: 45},
                {type: 2, x: 3000, y: 26500, size: 35},
                {type: 3, x: 2700, y: 26600, size: 29},
                // r2
                {type: 0, x: 12000, y: 27500, size: 195},
                {type: 1, x: 11000, y: 27000, size: 29},
                {type: 2, x: 11300, y: 26900, size: 35},
                {type: 2, x: 12000, y: 27200, size: 35},
                {type: 2, x: 12600, y: 26900, size: 35},
                {type: 3, x: 12800, y: 26500, size: 29}
            ]
        },
        18: { // GIGA 1
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        19: { // GIGANTIC 2
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        20: { // CR NA
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 27300, size: 195},
                {type: 1, x: 2500, y: 27000, size: 45},
                {type: 2, x: 3000, y: 26500, size: 35},
                {type: 3, x: 2700, y: 26600, size: 29},
                // r2
                {type: 0, x: 12000, y: 27500, size: 195},
                {type: 1, x: 11000, y: 27000, size: 29},
                {type: 2, x: 11300, y: 26900, size: 35},
                {type: 2, x: 12000, y: 27200, size: 35},
                {type: 2, x: 12600, y: 26900, size: 35},
                {type: 3, x: 12800, y: 26500, size: 29}
            ]
        },
        23: { // GIGANTIC 3
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        24: { // GIGANTIC 4
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        25: { // GIANT 2 NA
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        26: { // GIGA 2
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        38: { // Solo Agf
            ejPortalMass: 12,
            r1Id: 1,
            r2Id: 6,
            r1StartMass: 500,
            r2StartMass: 400,
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // room 1
                {type: 0, x: 3500, y: 11500, size: 195},
                {type: 1, x: 2500, y: 11500, size: 45},
                {type: 2, x: 3000, y: 11000, size: 35},
                {type: 3, x: 2700, y: 11100, size: 29},
                // room 2
                {type: 0, x: 9000, y: 11800, size: 180},
                {type: 1, x: 8200, y: 10500, size: 29},
                {type: 2, x: 8300, y: 10900, size: 35},
                {type: 2, x: 9000, y: 11200, size: 35},
                {type: 2, x: 9600, y: 10900, size: 35},
                {type: 3, x: 9800, y: 10500, size: 29}
            ]
        },
        39: { // MEGASPLIT AS
            entities: [
            ]
        },
        42: { // GIANT 3 NA
            entities: [
                {type: 1, x: 2500, y: 2500, size: 45},
                {type: 3, x: 5000, y: 33000, size: 45},
                {type: 1, x: 18000, y: 18000, size: 45},
                {type: 3, x: 24000, y: 12000, size: 45}
            ]
        },
        43: { // Instant AS
            entities: [
                // A1
                {type: 1, x: 2500, y: 2500, size: 45},
                // r1
                {type: 0, x: 3400, y: 15300, size: 195},
                {type: 1, x: 2500, y: 15000, size: 45},
                {type: 2, x: 3000, y: 14500, size: 35},
                {type: 3, x: 2700, y: 14600, size: 29},
                // r2
                {type: 0, x: 12000, y: 15500, size: 195},
                {type: 1, x: 11000, y: 15000, size: 29},
                {type: 2, x: 11300, y: 14900, size: 35},
                {type: 2, x: 12000, y: 15200, size: 35},
                {type: 2, x: 12600, y: 14900, size: 35},
                {type: 3, x: 12800, y: 14500, size: 29}
            ]
        }
    };
    let noPortalSvIdList = [11, 19, 23, 24, 37, 36, 31, 29, 40, 41, 16, 15, 21, 35, 12, 25, 42, 28, 32, 22, 18, 26, 30, 39];
    let currentServerId = 0;

    try{
        for(let i of JSON.parse(localStorage.gameservers)){
            if(i.isCurrent) currentServerId = i.id;
        }
    } catch {};

    setTimeout(() => {
        svSwitch = true;
    }, 250);

    let ss = unsafeWindow.setserver;
    unsafeWindow.setserver = (sv, sn) => {
        playerAlive = false;
        currentServerId = parseInt($(".server-tabmenu").find(".active")[0]?.id.slice(9));
        r1Portal.portal = null;
        r2Portal.portal = null;
        svSwitch = true;
        ss(sv, sn);
    }

    function getServerValue(value) {
        return (svInfo[currentServerId] && svInfo[currentServerId][value]) ? svInfo[currentServerId][value] : svInfo.default[value]
    }

    function createCell(posX, posY, type, nSize){
        if(!cellProto) return null;

        let color,
            colorDimmed = "#FFFFFF",
            size = 0,
            imageId = 0,
            spikes = null;

        switch(type){
            case 0:
                color = "#622373";
                colorDimmed = "#4e1c5c";
                size = nSize ? nSize : 200;
                imageId = 1;
                break;
            case 1:
                color = "#ff0000";
                colorDimmed = "#cc0001";
                size = nSize ? nSize : 32;
                spikes = {x: posX, y: posY, s: size, p: size};
                imageId = 2;
                break;
            case 2:
                color = "#76ff54";
                colorDimmed = "#66b319";
                size = nSize ? nSize : 35;
                imageId = 3;
                break;
            case 3:
                color = "#ffd000";
                colorDimmed = "#ccb300";
                size = nSize ? nSize : 32;
                spikes = {x: posX, y: posY, s: size, p: size};
                imageId = 4;
                break;
            case 4:
                color = "#00a2e8";
                colorDimmed = "#0081b9";
                size = nSize ? nSize : 150;
                imageId = 5;
                break;
            default:
                color = "#FFFFFF";
                size = 500;
        };

        let cell = new cellProto.constructor();
        cell[prop[41]] = imageId;
        cell[prop[19]] = null;
        cell[prop[50]] = 0;
        cell[prop[40]] = spikes ? 1 : 0;
        cell[prop[26]] = null;
        cell[prop[52]] = false;
        cell[prop[53]] = false;
        cell[prop[39]] = [];
        cell[prop[57]] = 0;
        cell[prop[45]] = false;
        cell[prop[37]] = true;
        cell[prop[24]] = null;
        cell[prop[44]] = false;
        cell[prop[56]] = false;
        cell[prop[47]] = false;
        cell[prop[25]] = null;
        cell[prop[35]] = Date.now();
        cell[prop[51]] = 0;
        cell[prop[42]] = null;
        cell.clanCache = null;
        cell.clanPart = null;
        cell.color = color;
        cell[prop[46]] = 69;
        cell[prop[38]] = spikes;
        cell[prop[33]] = 1;
        cell[prop[36]] = 0;
        cell[prop[31]] = posX;
        cell[prop[32]] = posY;
        cell[prop[3]] = 0;
        cell.id = 1e9;
        cell[prop[21]] = null;
        cell[prop[20]] = null;
        cell.massCache = null;
        cell[prop[11]] = size;
        cell.nSize = size;
        cell.name = null;
        cell.namePart = null;
        cell.nameSize = 0;
        cell.oid = 0;
        cell.ox = posX;
        cell.oy = posY;
        cell[prop[58]] = 0;
        cell.rotation = 0;
        cell.shape = 0;
        cell.size = size;
        cell.skinId = 0;
        cell.strokeSize = size + 4;
        cell.textDrawn = null;
        cell.transform = null;
        cell[prop[18]] = true;
        cell[prop[2]] = colorDimmed ? colorDimmed : dimmColor(color);
        cell[prop[17]] = null;
        cell.x = posX;
        cell[prop[23]] = null;
        cell.y = posY;
        cell[prop[22]] = null;
        cell[prop[54]] = false;
        cell[prop[34]] = Date.now();
        cell[prop[55]] = true;
        return cell;
    }

    function customize(c){
        cellProto = c.__proto__;
        uisdoa && (unsafeWindow.__cellProto = c.__proto__);
        // this should stay independent unless sora changes the structure of cell class
        let methods = [];
        let a = c;
        while (a = Reflect.getPrototypeOf(a)) {
            let keys = Reflect.ownKeys(a)
            keys.forEach((k) => methods.push(k));
        }
        let dc_fn_name = methods[7];
        let dc = c.__proto__[dc_fn_name];
        c.__proto__.oldDrawCell = dc;
        c.__proto__[dc_fn_name] = function(){
            let cell = this,
                cellType = cell[prop[46]];
            if(cell.color == "#000000" && (cellType == 0 || cellType == 3)){
                cell.color = "#000101";
            }
            // if(cellType == 0){
            if(cellType == 0 && !cell.oType){ // second makes sure that the type wasnt changed to playerCell (mothercell showmass)
                if(cell.color == "#622373"){
                    cell.color = "#622374"; // give purple cells a slightly diff color to make them detectable in .stroke fn
                }
                if(settings.theme_boxes[1].active){
                    if(cell.oOwnCell === undefined) cell.oOwnCell = cell[prop[45]];
                    cell[prop[45]] = true;
                }
                if(settings.theme_boxes[6].active){
                    if(cell.oSpiked === undefined) cell.oSpiked = cell[prop[56]];
                    cell[prop[56]] = settings.theme_boxes[6].active;
                } else {
                    if(cell.oSpiked != undefined) cell[prop[56]] = cell.oSpiked;
                }
                if(settings.theme_boxes[2].active){
                    if(cell.oHasImage === undefined) cell.oHasImage = cell[prop[18]];
                    cell[prop[18]] = (cell.oOwnCell === undefined ? cell[prop[45]] : cell.oOwnCell) ? cell[prop[18]] : false;
                } else {
                    if(cell.oHasImage != undefined && !settings.theme_boxes[3].active) cell[prop[18]] = cell.oHasImage;
                }
                if(settings.theme_boxes[4].active){
                    if(cell.oName === undefined) cell.oName = cell.name;
                    cell.name = (cell.oOwnCell === undefined ? cell[prop[45]] : cell.oOwnCell) ? cell.name : "";
                } else {
                    if(cell.oName != undefined && !settings.theme_boxes[3].active) cell.name = cell.oName;
                }
                if(settings.theme_boxes[3].active){
                    if(cell.oHasImage === undefined) cell.oHasImage = cell[prop[18]];
                    cell[prop[18]] = cell[prop[53]] ? cell[prop[18]] : false;
                } else {
                    if(cell.oHasImage != undefined && !settings.theme_boxes[2].active) cell[prop[18]] = cell.oHasImage;
                }
                if(settings.theme_boxes[5].active){
                    if(cell.oName === undefined) cell.oName = cell.name;
                    cell.name = cell[prop[53]] ? cell.name : "";
                } else {
                    if(cell.oName != undefined && !settings.theme_boxes[4].active) cell.name = cell.oName;
                }
            }
            if(cellType == 1){
                if(!cell.oSize) cell.oSize = cell.nSize; // food normally doesnt have an oSize; ensures that mothercell food is correct
                cell.nSize = cell.oSize * settings.uiScaling[1].level;
                cell.size = cell.oSize * settings.uiScaling[1].level;
                if(cell.color == "#00ff00") cell.color = "#00ff01";
                if(settings.theme[0].active){
                    if(!cell.oColor) cell.oColor = cell.color;
                    cell.color = settings.theme[0].color;
                } else {
                    if(cell.oColor) cell.color = cell.oColor;
                }
            }
            if(cellType == 9 && settings.checkboxes[9].active){
                cell[prop[46]] = 0;
                cell.oType = 9;
                cell[prop[45]] = true;
                cell.oOwnCell = false;
            }
            dc.apply(this, arguments);
            if(cell.oType == 9 && settings.checkboxes[9].active){
                cell[prop[46]] = 9;
            }
        }
        customDc = true;
    }

    function dimmColor(color) {
        var r = (Math.floor(parseInt(color.substr(1, 2), 16) * 0.5)).toString(16),
            g = (Math.floor(parseInt(color.substr(3, 2), 16) * 0.5)).toString(16),
            b = (Math.floor(parseInt(color.substr(5, 2), 16) * 0.5)).toString(16);
        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        return "#" + r + g + b
    }

    const _sort = Array.prototype.sort;
    Array.prototype.sort = function(oldFunc) {
        const originalArray = this,
              newFunc = function(a, b) {
                  if(typeof a?.id != "number" || typeof b?.id != "number") return oldFunc.apply(this, arguments);
                  if(settings.theme_boxes[8].active){
                      const aVal = a[Object.keys(a)[46]], bVal = b[Object.keys(b)[46]];
                      return (oldFunc.apply(this, arguments) * (settings.theme_boxes[7].active ? -1 : 1) > 0 || aVal == 4) && bVal != 4 ? 1 : aVal == 4 && bVal == 4 ? 0 : -1
                  } else if(settings.theme_boxes[7].active){
                      return oldFunc.apply(this, arguments) * -1;
                  } else {
                      return oldFunc.apply(this, arguments);
                  }
              }
        return oldFunc == null ? _sort.apply(this, arguments) : _sort.call(this, newFunc);
    }

    var UA = navigator.userAgent;
    var googleDomain = "translate.google.com";
    var dictURL = "https://" + googleDomain + "/translate_a/single?client=t";

    function init_google_value_tk() {
        var url = "https://" + googleDomain + "/translate_a/element.js";
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onreadystatechange: function(resp) {
                if (resp.readyState == 4) {
                    clearTimeout(setTimeout(function() {
                        this.abort();
                    }, 2000));
                    if (resp.status == 200) {
                        init_google_value_tk_parse(resp.responseText);
                    }
                }
            }
        });
    }

    function init_google_value_tk_parse(responseText) {
        var res = /c\._ctkk='(.+?)'/i.exec(responseText);
        if (res != null) {
            GM_setValue('google_value_tk', res[1]);
        };
    }

    const Request = async(txt, sl = 'auto', tl = 'auto') => {
        return new Promise((resolve, reject) => {
            function parse(gTradStringArray) {
                var arr = JSON.parse(gTradStringArray);
                var translation = '';
                for (let i = 0; i < arr[0].length; i++) {
                    if (typeof arr[0][i][0] != 'undefined' && arr[0][i][0] != null) translation += arr[0][i][0];
                }
                resolve(translation);
            }
            var tk = googleTK(txt);
            var Url = dictURL +
                "&hl=auto" +
                "&sl=" + sl + "&tl=" + tl +
                "&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=2&trs=1&inputm=1&ssel=0&tsel=0&source=btn&kc=3" +
                "&tk=" + tk +
                "&q=" + encodeURI(txt);
            var method = 'POST';
            var Data = '';
            var Hdr = {
                "User-Agent": UA,
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate"
            }
            var Q = Url.split('&q=');
            Url = Q[0];
            Data = '&q=' + Q[1];
            Hdr["Content-Length"] = Data.length + '';
            Hdr["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
            GM_xmlhttpRequest({
                method: method,
                url: Url,
                data: Data,
                headers: Hdr,
                onload: function(resp) {
                    try {
                        parse(resp.responseText)
                    } catch (e) {
                        unsafeWindow.fsfbLogTranslateErrors && console.error(e);
                        resolve(null);
                    }
                }
            });
        });
    }

    let dURIC = unsafeWindow.decodeURIComponent,
        opt = [0x92933AFC, 0x75408D32];
    unsafeWindow.decodeURIComponent = function(x){
        if(x === "") x = opt[Math.round(Math.random())].toString();
        return dURIC(x);
    }

    // return token for the new API
    function googleTK(text) {
        // view-source:https://translate.google.com/translate/releases/twsfe_w_20160620_RC00/r/js/desktop_module_main.js && TKK from HTML
        var uM = GM_getValue('google_value_tk');
        if (uM == 'undefined' || uM == null) {
            init_google_value_tk();
            uM = "427110.1469889687";
        } else if (Number(uM.split('.')[0]) !== Math.floor(Date.now() / 3600000)) {
            init_google_value_tk();
        };
        var cb = "&";
        var k = "";
        var Gf = "=";
        var Vb = "+-a^+6";
        var t = "a";
        var Yb = "+";
        var Zb = "+-3^+b+-f";
        var jd = ".";
        var sM = function(a) {
            return function() {
                return a
            }
        }
        var tM = function(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                let d = b.charAt(c + 2);
                d = d >= t ? d.charCodeAt(0) - 87 : Number(d);
                d = b.charAt(c + 1) == Yb ? a >>> d : a << d;
                a = b.charAt(c) == Yb ? a + d & 4294967295 : a ^ d
            }
            return a
        };
        var vM = function(a) {
            var b;
            if (null !== uM) {
                b = uM;
            } else {
                b = sM(String.fromCharCode(84));
                var c = sM(String.fromCharCode(75));
                b = [b(), b()];
                b[1] = c();
                b = (uM = unsafeWindow[b.join(c())] || k) || k
            }
            let d = sM(String.fromCharCode(116));
            c = sM(String.fromCharCode(107));
            d = [d(), d()];
            d[1] = c();
            c = cb + d.join(k) + Gf;
            d = b.split(jd);
            b = Number(d[0]) || 0;

            for (var e = [], f = 0, g = 0; g < a.length; g++) {
                var m = a.charCodeAt(g);
                128 > m ? e[f++] = m : (2048 > m ? e[f++] = m >> 6 | 192 : (55296 == (m & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (m = 65536 + ((m & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = m >> 18 | 240, e[f++] = m >> 12 & 63 | 128) : e[f++] = m >> 12 | 224, e[f++] = m >> 6 & 63 | 128), e[f++] = m & 63 | 128)
            }
            a = b || 0;
            for (f = 0; f < e.length; f++) {
                a += e[f], a = tM(a, Vb);
            };
            a = tM(a, Zb);
            a ^= Number(d[1]) || 0;
            0 > a && (a = (a & 2147483647) + 2147483648);
            a %= 1E6;
            return a.toString() + jd + (a ^ b);
        };
        return vM(text);
    }

    let skinsArr, translatedCache = {}, entsAdded = false;

    Array.prototype.push = function(){
        if(this?.length && typeof this?.[0]?.approved == 'boolean' && typeof this?.[0]?.type == 'number' && typeof this?.[0]?.zIndex == 'undefined') skinsArr = this;
        if(this?.length && typeof this?.[0]?.id == "number" && typeof this?.[0]?.color == "string"){
            if(customCells){
                let cell = this[this.length - 1],
                    [pushedCell] = arguments;
                if(!prop){
                    prop = Object.keys(cell);
                    uisdoa && (unsafeWindow.__prop = Object.keys(cell));
                    if(prop.length != 59 || prop[28] != "massCache"){
                        // unsafeWindow.swal({
                        //     title: "FSFB scripts experienced an error, please contact authors",
                        //     type: "error"
                        // });
                        // console.error("FSFB Scripts error, contact authors");
                        console.error("FSFB Scripts error, contact authors: ", prop.length, prop[28]) //, structuredClone(cell)); // att
                    }
                }
                if(pushedCell.id === getServerValue("r1Id")){
                    r1Portal.portal = pushedCell;
                } else if(pushedCell.id === getServerValue("r2Id")){
                    r2Portal.portal = pushedCell;
                }
                !customDc && customize(cell);

                if(!settings.checkboxes[8].active && entsAdded){
                    for(let i = this.length - 1; i >= 0; --i) {
                        if(this[i].id == 1e9){
                            this.splice(i, 1);
                            entsAdded = false;
                        }
                    }
                }
                if((svSwitch || !entsAdded) && settings.checkboxes[8].active && this[0][prop[47]] && this.length > 1){ // && settings.checkboxes[8].active){
                    for(let i = 0; i < getServerValue("entities").length; i++){
                        let ent = getServerValue("entities")[i];
                        pushFn.apply(this, [createCell(ent.x, ent.y, ent.type, ent.size)]);
                    }
                    svSwitch = false;
                    entsAdded = true;
                }
            }
        }

        let applied = pushFn.apply(this, arguments);
        if(this?.length && typeof this?.[0]?.message === 'string' && typeof this?.[0]?.name === 'string'){
            chatmsgs = this;
            (async() => {
                if(settings.chat_translate[0].active && (settings.chat_translate[1].active || arguments[0][Object.keys(arguments[0])[0]])){
                    let originalMsg = arguments[0]?.untranslated ?? arguments[0].message,
                        translatedMsg = translatedCache[settings.chat_translate[3].set + settings.chat_translate[4].set]?.[originalMsg] ?? await Request(originalMsg, settings.chat_translate[3].set, settings.chat_translate[4].set);
                    if(translatedMsg != null) translatedCache[settings.chat_translate[3].set + settings.chat_translate[4].set] = {...translatedCache[settings.chat_translate[3].set + settings.chat_translate[4].set], ...{[originalMsg] : translatedMsg}};
                    if((!('untranslated' in arguments[0]) || arguments[0].translatedLang != settings.chat_translate[3].set + settings.chat_translate[4].set || arguments[0].showingOrig != settings.chat_translate[2].active) && arguments[0]?.message && translatedMsg != null){
                        setTimeout(() => {
                            arguments[0].untranslated = originalMsg;
                            arguments[0].translatedLang = settings.chat_translate[3].set + settings.chat_translate[4].set;
                            arguments[0].showingOrig = settings.chat_translate[2].active;
                            arguments[0].message = settings.chat_translate[2].active ? originalMsg + ' [ ' + translatedMsg + ' ]' : translatedMsg;
                            arguments[0].filter = false;
                            arguments[0].cache = null;
                        }, 0);
                    }
                } else { // change translate off
                    if('untranslated' in arguments[0] && arguments[0]?.untranslated != arguments[0].message){
                        setTimeout(() => {
                            arguments[0].message = arguments[0]?.untranslated;
                            arguments[0].translatedLang = 'none';
                            arguments[0].filter = false;
                            arguments[0].cache = null;
                        }, 0);
                    }
                }
            })();
        }
        return applied;
    }
    Array.prototype.splice = function(){
        if(customCells && this.length && typeof this[0].id == "number" && typeof this[0].color == "string"){
            let cell = this[arguments[0]];
            if(cell == r1Portal.portal){
                r1Portal.portal = null;
            } else if(cell == r2Portal.portal){
                r2Portal.portal = null;
            }
        }
        return spliceFn.apply(this, arguments);
    }
    const fillFn = CanvasRenderingContext2D.prototype.fill, cDark = $('#cDark')[0];
    CanvasRenderingContext2D.prototype.fill = function() {
        if(customCells && (this.canvas.id === "canvas" || this.canvas.id === "minimap") && settings.theme[6].active && this.fillStyle == "#cc3030"){
            this.fillStyle = rainbowBrHazard ? hslToHex(Math.floor(Date.now() / rainbowBrHazardSpeed) % 360, 100, 50) : settings.theme[6].color;
        }
        if(customCells && this.canvas.id === "canvas"){
            let doStroke = true;
            if(this.globalAlpha == .04){
                switch(this.fillStyle){
                    case "#ff0000": // rec
                        this.strokeStyle = "#cc0001";
                        break;
                    case "#76ff54": // grw
                        this.strokeStyle = "#66b319";
                        break;
                    case "#ffd000": // spd
                        this.strokeStyle = "#ccb300";
                        break;
                    case "#00a2e8": // min pack
                        this.strokeStyle = "#0081b9";
                        break;
                    case "#622373": // portal
                        this.strokeStyle = "#4e1c5c";
                        break;
                    default:
                        doStroke = false;
                };
                if(doStroke){
                    this.globalAlpha = uisdoa?.o ?? .2;
                    this.lineWidth = 8;
                    this.stroke();
                    this.globalAlpha = uisdoa?.oo ?? .1;
                    this.shadowOffsetY = 1; // for fucking curser lock
                }
            };
            if(!doStroke && this.globalAlpha == 0.04 && settings.checkboxes[2].active){
                this.strokeStyle = cDark.checked ? "#FFFFFF" : "#000000";
                this.globalAlpha = 1;
                this.lineWidth = 30;
                this.stroke();
                this.globalAlpha = 0.04;
            }
            if (settings.theme_boxes[0].active && this.canvas.id === "canvas" && this.globalAlpha == .4) {
                this.globalAlpha = 0.15
            }
            if (settings.theme[1].active && (this.fillStyle == "#00ff00" || this.fillStyle == "#19a0cc")) {
                this.fillStyle = settings.theme[1].color
            }
            if (settings.theme[3].active && this.fillStyle == "#cd5564") {
                this.fillStyle = settings.theme[3].color
            }
            if(whiteBorder4BlackCells && this.fillStyle == "#000101"){
                this.strokeStyle = "#FFFFFF";
                this.lineWidth = 12;
                this.stroke();
            }
        }
        return fillFn.apply(this, arguments)
    }
    const strokeFn = CanvasRenderingContext2D.prototype.stroke, cBubbleCells = $('#cBubbleCells')[0];
    CanvasRenderingContext2D.prototype.stroke = function() {
        if (customCells && this.canvas.id === "canvas") {
            if (this.strokeStyle == "#dddddd" || this.strokeStyle == "#333333" || this.strokeStyle == "#4e1c5b" /* adjusted portal cell stroke color*/) {
                if(settings.checkboxes[2].active) this.strokeStyle = cDark.checked ? "#FFFFFF" : "#000000";
                if(this.shadowOffsetY == 1){
                    this.shadowOffsetY = 0;
                    return;
                };
            };
            if (settings.theme_boxes[0].active && this.lineWidth != 4 && cBubbleCells.checked) {
                this.lineWidth = 15 + Math.min(Math.max(avgFps - 25, 0), 10)
            }
            if((settings.theme[1].active || settings.theme[2].active) && (this.strokeStyle == "#00ff00" || this.strokeStyle == "#00cc00" || this.strokeStyle == "#1480a3" || this.strokeStyle == "#1690b7" || this.strokeStyle == "#00e500")) {
                this.strokeStyle = settings.theme[2].active ? settings.theme[2].color : settings.theme_boxes[0].active && cBubbleCells.checked ? settings.theme[1].color : dimmColor(settings.theme[1].color); // if no stroke color is set, it will just be a darker version of the virusColor
            }
            if((settings.theme[3].active || settings.theme[4].active) && (this.strokeStyle == "#cd5564" || this.strokeStyle == "#a44450" || this.strokeStyle == "#b84c5a")) {
                this.strokeStyle = settings.theme[4].active ? settings.theme[4].color : settings.theme_boxes[0].active && cBubbleCells.checked ? settings.theme[3].color : dimmColor(settings.theme[3].color);
            }
        }
        return strokeFn.apply(this, arguments)
    }
    let drawImgFn = CanvasRenderingContext2D.prototype.drawImage;
    CanvasRenderingContext2D.prototype.drawImage = function () {
        if(this.globalAlpha == 0.01 && arguments[0].src && arguments[0].src.match(RegExp(`https://agma\\.io/skins/objects/[1-5]`))){
            this.globalAlpha = .35;
        }
        drawImgFn.apply(this, arguments);
        if(settings.checkboxes[7].active && this.canvas.id == "canvas"){
            if(/agma\.io\/skins\/objects\/1(_lo)?\.png/gm.test(arguments[0].src) && (r1Portal.portal || r2Portal.portal)){ // using destroyed doesnt work hence splice
                //draw portal mass
                if(noPortalSvIdList.indexOf(currentServerId) == -1){
                    let c = p => {
                        if((p.portal.nSize * p.portal.nSize / 100) != p.lastMass){
                            p.lastMassChange = Date.now();
                        }
                        p.lastMass = (p.portal.nSize * p.portal.nSize / 100);

                        let value = Date.now() - p.lastMassChange > 200 ? ~~(((p.portal.nSize * p.portal.nSize / 100) - getServerValue("r" + p.room + "StartMass")) / getServerValue("ejPortalMass")).toString() : p.lastValue;
                        p.lastValue = value;
                        if(value > 9 || value < 0){
                            value = "?";
                        }
                        this.fillStyle = value == "7" ? "#FFCC12" : "#FFFFFF";
                        this.globalAlpha = 1;
                        this.font = "72px Ubuntu, serif";
                        this.fillText(value, p.portal.x - this.measureText(value).width / 2, p.portal.y + 20);
                    }
                    r1Portal.portal && c(r1Portal);
                    // currentServerId != 43 && r2Portal.portal && c(r2Portal);
                    r2Portal.portal && c(r2Portal);
                }
            }
        }
    }

    function hslToHex(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }


    const _lineTo = CanvasRenderingContext2D.prototype.lineTo;
    CanvasRenderingContext2D.prototype.lineTo = function () {
        if(settings.theme[5].active) this.strokeStyle = rainbowMapBorder ? hslToHex(Math.floor(Date.now() / rainbowBorderSpeed) % 360, 100, 50) : settings.theme[5].color;
        return _lineTo.apply(this, arguments);
    }


    let currentMass = 0, leaderboardPos;
    const _fillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function() {
        if ((this.fillStyle == "#ffffff" || this.fillStyle == "#626262") && isNaN(arguments?.[0]) && /^Mass: \d+$/gm.test(arguments[0])){
            currentMass = +arguments[0].match(/(?<=^Mass: )\d+$/gm)[0];
            if(hiddenUI) arguments[0] = " ";
        }
        if(this.canvas.id == "leaderboard" && this.fillStyle == "#ffaaaa" && /^\d+(?=\.\s)/gm.test(arguments[0])) [leaderboardPos] = arguments[0].match(/^\d+(?=\.\s)/gm);
        _fillText.apply(this, arguments);
    }

    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    const isLogged = () => currentUser != 'Please Login First';
    let intervalCount = 0, currentUser, lastLoggedOut = Date.now();
    // const mainInterval = setInterval(() => {
    const mainInterval = () => {
        intervalCount++;
        if(hoverShowSkinID && $('#publicSkinsPage').children().length > 0 && $('#publicSkinsPage').find('[id^="skinContainer"]>img')[0]?.title == ''){ // check if skins have loaded
            $('[id^="skinContainer"]').each(function(){
                $(this).find('img').attr('title', $(this).attr('id').replace('skinContainer', '')); // make hover show skin ID
            })
            $('.publicskins-nav-btn').on('click', () => {
                $('[id^="skinContainer"]').each(function(){
                    $(this).find('img').attr('title', $(this).attr('id').replace('skinContainer', ''));
                })
            })
        }
        if(sortWearablesByOwned && $('#phpWearables>li').length && !$('#fsfb-wearsloaded').length){
            $($('[id^="wearableUseBtn"]').get().reverse()).each(function(){
                $($(this).parents().get(2)).insertBefore($("#phpWearables li:eq(0)"));
            })
            $('#phpWearables').append('<div id="fsfb-wearsloaded"></div>')

        }
        if(publicSkinSearch && $('#publicSkinsPage').children().length > 0 && !document.getElementById("fsfb-skinsearch")){
            $('.publicskins-nav-bar').eq(0).after(`<input id="fsfb-skinsearch" placeholder="Enter skin name/id here" type="search">`);
            // const handlePress = debounce(() => {
            const handlePress = () => {
                if(!$('#fsfb-skinsearch').val()) return void($('.btn.publicskins-nav-btn.btn-default:not(.btn-primary)')[0].click());
                const searchQuery = $('#fsfb-skinsearch').val();
                const skinsSearchedArr = skinsArr.filter(skin => skin.type == 4 && (skin.name.toLowerCase().includes(searchQuery.toLowerCase()) || skin.id == +searchQuery));
                let totalRows = Math.ceil(skinsSearchedArr.length / 4);
                if(totalRows == 0){
                    $('#publicSkinsPage tbody').html('').append('<h1>No Skins Found</h1>');
                } else {
                    $('#publicSkinsPage tbody').html('');
                    for(let i = 0; i < totalRows; i++) $('#publicSkinsPage tbody').append('<tr></tr>');
                    let currRow = 0, currColumn = 0;
                    for(let i of skinsSearchedArr){
                        if(++currColumn > 4) currRow++, currColumn = 1;
                        $('#publicSkinsPage tr').eq(currRow).append(`<td id="skinContainer${i.id}" class="skin-container"><img src="skins/${i.id}_lo.png" alt="" ${hoverShowSkinID ? 'title="' + i.id + '"': ''}><h4>${sanitize(i.name)}</h4><button id="skinUseBtn${i.id}" class="btn btn-primary skinuse-btn" onclick="toggleSkin(${i.id});">Use</button></td>`)
                    }
                }
            }
            // }, 300);
            let pressTimer;
            $('#fsfb-skinsearch').on('input', () => {
                clearTimeout(pressTimer);
                pressTimer = setTimeout(() => handlePress(), Math.round(300 / ($('#fsfb-skinsearch').val().length || 300)));
            });
        }
        currentUser = $('#userCoins2')[0].innerText;
        let user_abil = currentUser == 'Please Login First' ? null : misc_settings.abil?.[currentUser];
        if(user_abil != undefined && showRemainingAbilityTime){
            for(let i in user_abil){
                let text = $(`.purchase-btn.confirmation[item="${i}"]`).parents().eq(0).find('div h5'),
                    active = $('#' + $(`.purchase-btn.confirmation[item="${i}"]`).parents().eq(0)[0].id + ' img').eq(1).css('display') != "none";
                // has been 24h+ and the player hasn't logged out since it's expired
                if(Date.now() - user_abil[i] > 8.64e7 && active){
                    text.eq(1).text('EXPIRED IF UNLOG');
                    text.eq(0).find('div h5').hide();
                }
                // has been >24h
                else if(Date.now() - user_abil[i] < 8.64e7 && active){
                    text.eq(0).hide();
                    text.eq(1).text(msToTime(8.64e7 - (Date.now() - user_abil[i]))).show();
                }
                else { // has been 24h+ & player has logged out
                    text.eq(0).find('div h5').show();
                    text.eq(1).find('div h5').hide();
                }
            }
        } else {
            $('.white_shopdesc').show();
            $('.white_shopdesc.fsfb-fake').hide();
        }
        if(accounts[currentUser] == null && currentUser !== 'Please Login First'){
            xpInfo();
            coinsInfo();
            accounts = {...accounts, ...{[currentUser] : {coins: currentCoins, xp: currentXP, lvl: round(currentPercent, 3) + currentLevel}}};
        }
        if(accounts[currentUser] != null && accounts[currentUser].coins == 0) accounts[currentUser].coins = currentCoins;
        if(accounts[currentUser] != null && accounts[currentUser].xp == 0) accounts[currentUser].xp = currentXP;
        if(coinXPstats && intervalCount % 12 == 0){
            // setTimeout(() => {
            xpInfo();
            lastMinXP.push(new StatLog(round(currentXP, 3), round(currentPercent, 3) + currentLevel, currentUser, lastMinXP));
            const prevObjXP = lastMinXP[lastMinXP.length - 1];
            if(prevObjXP && prevObjXP.id % (6e4 / updateTimeXP) == 0) lastHrXP.push(new StatLog(round(currentXP, 3), round(currentPercent, 3) + currentLevel, currentUser, lastHrXP));
            if(lastMinXP.length > 6e4 / updateTimeXP) lastMinXP.shift();
            if(lastHrXP.length > 60) lastHrXP.shift();
            if(!coinsHTMLactive && $('#stats-container').css('display') == 'block') updateUI();
            unsafeWindow.logStatsScriptXP && console.log(lastMinXP, lastHrXP);
            // }, 500);
        }
        if(coinXPstats && intervalCount % 6 == 0){
            coinsInfo();
            lastMinCoins.push(new StatLog(currentCoins, 0, currentUser, lastMinCoins));
            const lastObjCoins = lastMinCoins[lastMinCoins.length - 1];
            if(lastObjCoins && lastObjCoins.id % (6e4 / updateTimeCoins) == 0) lastHrCoins.push(new StatLog(currentCoins, 0, currentUser, lastHrCoins));
            if(lastMinCoins.length > 6e4 / updateTimeCoins) lastMinCoins.shift();
            if(lastHrCoins.length > 60) lastHrCoins.shift();
            if(coinsHTMLactive && $('#stats-container').css('display') == 'block') updateUI();
            unsafeWindow.logStatsScriptCoins && console.log(lastMinCoins, lastHrCoins);
        }
        if(coinXPstats && $('#stats-container').css('display') == 'block')$('#stats-sesh-length').text(msToTime(Date.now() - (coinsHTMLactive ? scriptStartCoins : scriptStartXP)))
        if(intervalCount % 3 == 0 && misc_settings?.statsPos != null){
            statsboxPos = {top: $("#stats-container")[0].style.top, left: $("#stats-container")[0].style.left};
            misc_settings.statsPos = statsboxPos;
            set("fsfb-misc", misc_settings);
        }
        if(intervalCount % 2 == 0){ // "You have an activated bot pack available: 100 XXL Bots 1 Hours! Restart your bots before they expire!"
            if(chatmsgs != null && chatmsgs?.length > 2){ // "You have an activated bot pack available: 100 Bots 24 Hours! Restart your bots before they expire!"
                for(let i of chatmsgs){
                    if(i.name == '' && i.cache != null && i.cache.color2 == '#ff8100'){
                        if(i.message.match(/(?<=(Welcome back to Agma, )).+/g)?.[0] == currentUser){
                            const msgBots = $('.memberType').text() == 'GOLD MEMBER' ? chatmsgs?.[chatmsgs.indexOf(i) - 2] : chatmsgs?.[chatmsgs.indexOf(i) - 1],
                                  msgGM = $('.memberType').text() == 'GOLD MEMBER' ? chatmsgs?.[chatmsgs.indexOf(i) - 1] : null;
                            if(msgBots?.message.includes('Restart your bots before they expire!')){
                                if(misc_settings.bots[currentUser] != null) misc_settings.bots[currentUser].chatAmt = msgBots.message.match(/\d+.+\d Hours/g)[0];
                                minsChatAmt[currentUser] = {...minsChatAmt[currentUser], ... {amt: msgBots.message.match(/\d+.+\d Hours/g)[0], started: true}};
                                set("fsfb-misc", misc_settings);
                            } else if(msgBots?.message.match(/(?<=(You have a new bot pack available: )).+(?=(! Start your bots in the minion panel.))/g)?.length){
                                if(misc_settings.bots[currentUser] != null) misc_settings.bots[currentUser].chatAmt = msgBots.message.match(/\d+.+\d Hours/g)[0];
                                minsChatAmt[currentUser] = {...minsChatAmt[currentUser], ... {amt: msgBots.message.match(/\d+.+\d Hours/g)[0], started: false}};
                                set("fsfb-misc", misc_settings);
                            }
                            if(msgGM != null && msgGM.message.match(/(?<=You have )\d+(?= Days left of Gold Member!)/gm)?.length){
                                accGoldMem[currentUser] = {...accGoldMem[currentUser], ... {days: msgGM.message.match(/(?<=You have )\d+(?= Days left of Gold Member!)/gm)[0], has: true}};
                            } else {
                                accGoldMem[currentUser] = {...accGoldMem[currentUser], ... {has: false}};
                            }
                        } else if(i.message.match(/(?<=(You have a new bot pack available: )).+(?=(! Start your bots in the minion panel.))/g)?.length){
                            if(misc_settings.bots[currentUser] != null) misc_settings.bots[currentUser].chatAmt = i.message.match(/\d+.+\d Hours/g)[0];
                            minsChatAmt[currentUser] = {...minsChatAmt[currentUser], ... {amt: i.message.match(/\d+.+\d Hours/g)[0], started: false}};
                            set("fsfb-misc", misc_settings);
                        }
                        /* else if(minsChatAmt[currentUser]?.chatAmt && i.message.match(/\d+.+\d Hour/g)?.[0] == minsChatAmt[currentUser].chatAmt.match(/\d+.+\d Hour/g)[0]){
                            minsChatAmt[currentUser].amt = i.message.match(/\d+.+\d Hour/g)[0];
                        } */
                    }
                }
            }
        }
        if(currentServerId === 0){
            try {
                for(let i of JSON.parse(localStorage.gameservers)){
                    if(i.isCurrent) currentServerId = i.id;
                }
                svSwitch = true;
            } catch {};
        }
        unsafeWindow.uisdoa && (unsafeWindow.__currentServerId = currentServerId);
        if(currentUser == 'Please Login First' || $('#level').text() == 0) lastLoggedOut = Date.now();
        changeTitle(settings.checkboxes[4].active ? currentUser == 'Please Login First' ? "Agma.io" : "Agma.io - " + currentUser : "Agma.io - A free multiplayer MMO game");

        if($('#friendAcceptAll').length > 0 && friendDeclineAll && $('#friendRejectAll').length < 1 && currentUser != 'Please Login First') addFriendDecline();

        if($('#friendDialogMessage').text() != 'Login to see your friendlist' && $('#friendDialogMessage').text() == 'Loading...' && $('#friendsRequestsAmt').text() == '' && friendDeclineAll && currentUser != 'Please Login First'){
            $('#btnFriends').click().click();
        }

        fpsArr.push(+document.getElementById("fps").innerText);
        if(fpsArr.length == 6) fpsArr.shift();
        avgFps = mean(fpsArr);
        setTimeout(mainInterval, 1e3);
    }
    setTimeout(mainInterval, 1e3);
    // }, 1e3);


    if(showXPdecimals){
        $('.progress-bar span').each(function(){
            $(this).hide().clone().insertAfter($(this)).addClass('fsfb-fakePerc').removeClass('sr-only exp-bar').show(); // show detailed lvl percent (clone to prevent showing the old % before it gets changed)
        });
        const realPercentEl = document.querySelectorAll('.sr-only.exp-bar')[0],
              realProgressEl = document.querySelectorAll('.progress-bar[role=progressbar]')[0];
        let lastChangedPercent = '0%';
        setInterval(() => {
            let currPercent = realProgressEl.style.width.slice(0, -1) / 100;
            if(lastChangedPercent != currPercent) $('.fsfb-fakePerc').text(currPercent && realPercentEl.textContent != '0%' ? round(currPercent * 100, 2) + '%' : '0%');
            lastChangedPercent = currPercent;
        }, 250);
    }

    const antiAFK = () => {
        setTimeout(antiAFK, 3e4);
        if(!$('#fsfb-antiAFK').is(':checked')) return; // move mouse every 30sec
        let [moveX, moveY] = linesplitting ? [pointMove.x, pointMove.y] : [mosX, mosY];
        [++moveX, --moveX].forEach(x => $('#canvas').trigger($.Event('mousemove', {clientX: x, clientY: moveY})));
    }

    setTimeout(antiAFK, 3e4);

    uisdoa ?? $('#fsfb-recospeed').parent().hide();

    const updateScriptSettingsUI = () => {
        for(let i of settings.checkboxes) $('#' + i.id).prop("checked", i.active).trigger("change");
        for(let i of settings.hotkeys) $('#' + i.id).text(getName(i.key));
        for(let i of settings.quickSettings){
            $('#' + i.id1).val(i.set);
            $('#' + i.id).text(getName(i.key));
        }
        $('#' + settings.slowFeed[0].id).text(getName(settings.slowFeed[0].key));
        $('#' + settings.slowFeed[1].id).val(settings.slowFeed[1].val);
        for(let i of settings.fastsplit_hotkeys){
            i.val == null ? $('#' + i.id).text(getName(i.key)) : $('#' + i.id).val(i.val);
        }
        for(let i of settings.uiScaling) $('#' + i.id).val(i.level).trigger("change");
        for(let i of settings.export_import) $('#' + i.id).prop("checked", i.active).trigger("change");
        for(let i of settings.theme){
            $('#' + i.id).prop("checked", i.active).trigger("change");
            $('#' + i.id1).val(i.color).trigger("change");
        }
        for(let i of settings.theme_boxes) $('#' + i.id).prop("checked", i.active).trigger("change");
        for(let i of settings.chat_translate){
            'set' in i ? $('#' + i.id).val(i.set) : $('#' + i.id).prop('checked', i.active).trigger('change');
        }
    }
    setTimeout(() => updateScriptSettingsUI(), 1e3);

    $('body').append('<div id="fsfb-css-styles"><style id="hideUI-css" type="text/css"></style><style id="css-invsingleline" type="text/css"></style><style id="stats-input-css" type="text/css">#stats-table input{ display: none; }</style></div>');

    const _replaceCSS = (a,b) => {
        document.getElementById(a).innerHTML = b;
    }
    $('body').append(`<div class="fade fsfb-bug-modal modal" aria-hidden=true role="dialog" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-interior"><h2 class="fsfb-modal-title">Script Documentation</h2><button class="close fsfb-btn" data-dismiss="modal" type=button>×</button><section class=fsfb-modal-body><div><span>Chat Copy/Cut/Paste</span>- allows you to use the commands in chat (e.g. Ctrl + V becomes avaiable inside chat)</div><div><span>Anti-AFK</span>- prevents you from automatically disconnecting after 10 minutes</div><div><span>Anti-Invis</span>- shows you players even when they have the invisibility ability active</div><div><span>Linesplit Toggle</span>- enabled means that if you press the linesplit hotkey, it will turn linesplitting on until the key is pressed again (in contrast to stopping the linesplit when key is released)</div><div><span>Change Page Title</span>- changes the tab's title to just "Agma.io" with the current username</div><div><span>Hide Shouts</span>- prevent megaphone shouts from showing up at all</div><div><span>Hold To Spam</span>- while the powerup's hotkey is held, it will continuously use the powerup</div><div><span>Show Portal Mass</span>- displays the predicted amount of times the portals in rooms 1 & 2 have been fed by players (not 100% accurate & doesn't work at all servers)</div><div><span>Power Spawns Overlay</span>- show the locations of where powerups/minion packs spawn with lower opacity (thanks to Light for helping with getting all of the power locations)</div><div><span>Quick Buy</span>- click plus sign (+) next to your powers (only if you set it to true in the code), then click on the powerup you want to buy</div><div><span>Food/Virus/Mothercell Color</span>- changes the color that's filling these to a custom one</div><div><span>Virus/Mothercell Stroke</span>- changes the color of the stroke (border/outline) to a custom one</div><div><span>Spiked Cells</span>- render all cells with the spikes from the infecton gamemode</div><div><span>Show Mass</span>- show the mass of all players' cells</div><div><span>Only My Skin</span>- hide all skins besides the one you're using</div><div><span>Only Party Skin</span>- hide all skins besides the ones people in your party are using</div><div><span>Only My Nick</span>- hide all nicks besides the one you're using</div><div><span>Only Party Nick</span>- hide all nicks besides the ones people in your party are using</div><div><span>Shoot 7 Ejected</span>- press ejected mass hotkey 7 times (useful to prime room 1 or 2 portal when it's been reset</div><div><span>Linesplit Lock</span>- finds which direction your mouse is the closest to & puts mouse way off the map (towards that direction) so you can perform perfect linesplits without zooming out or precisely placing your mouse (feature and design inspired by<a href=https://greasyfork.org/en/scripts/404559-agma-io-linesplit-overlay target=_blank>Wynell's script</a>)</div><div><span>Macrosplit Bots</span>- hold this key to macrosplit your bots without switching controls off of yourself</div><div><span>Hide UI</span>- press this key to toggle showing the game UI (intended for recording/screenshots)</div><div><span>Toggle Slow Feed</span>- (toggle) this presses eject mass hotkey at the defined interval (intended for feeding the gold block while AFK)</div><div><span>Slow Feed Speed</span>- the speed at which eject mass is pressed when slow-feeding</div><div><span>Quick Settings</span>- when the hotkey assigned is pressed, it will toggle the setting that is selected</div><div><span>Toggle Cursor Lock</span>- when pressed, this will keep cursor lock active until you press it again (also works when the tab is unfocused)</div><div><span>Fast Onesplit</span>- performs a fast onesplit (Onesplit -> Freeze -> Unfreeze); speed is dependent fps (low fps indicates slow CPU, slow CPU can mess timings up)</div><div><span>Fast Doublesplit</span>- performs a fast Doublesplit (Doublesplit -> Freeze -> Unfreeze); speed is dependent fps (low fps indicates slow CPU, slow CPU can mess timings up)</div><div><span>Chat Size</span>- make the size of chat bigger/smaller</div><div><span>Inventory Size</span>- make the size of powerups inventory bigger/smaller</div><div><span>Statsbox Size</span>- make the size of XP/coins stats bigger/smaller</div><div><span>Export</span>- select the boxes of the settings you wish to export and press the button, a .txt file will be downloaded with your settings inside</div><div><span>Import</span>- select the boxes of the settings you wish to import and insert the exported settings into the input (note: settings will only be changed if they were selected in both export & import</div><table><tr><th>Chat Command<th>Description<tr><td class="fsfb-cmd-title">${chatPrefix}help<td>list all available chat commands<tr><td class="fsfb-cmd-title">${chatPrefix}bots<td>show which bot pack you have active and how much time is remaining<tr><td class="fsfb-cmd-title">${chatPrefix}pws<td>show the amount of powerups in your inventory (recommended to use ${chatPrefix}pws1, ${chatPrefix}pws2, and ${chatPrefix}pws3)<tr><td class="fsfb-cmd-title">${chatPrefix}totalpws<td>show the total amount of powerups you have in your inventory<tr><td class="fsfb-cmd-title">${chatPrefix}xp<td>show then amount of xp you've completed for this level<tr><td class="fsfb-cmd-title">${chatPrefix}lvl<td>show your level and how much of the level you've completed<tr><td class="fsfb-cmd-title">${chatPrefix}coins<td>show the amount of coins you have<tr><td class="fsfb-cmd-title">${chatPrefix}hours<td>show the hours you have on your account</tr><td class="fsfb-cmd-title">${chatPrefix}rank<td>show your ranking</td><tr><td class="fsfb-cmd-title">${chatPrefix}ping<td>show your current ping<tr><td class="fsfb-cmd-title">${chatPrefix}fps<td>show your current FPS<tr><td class="fsfb-cmd-title">${chatPrefix}topmass<td>show your highest mass<tr><td class="fsfb-cmd-title">${chatPrefix}cells<td>show your cell count<tr><td class="fsfb-cmd-title">${chatPrefix}pws1<td>show the first part of your powerup inventory<tr><td class="fsfb-cmd-title">${chatPrefix}pws2<td>show the second part of your powerup inventory<tr><td class="fsfb-cmd-title">${chatPrefix}pws3<td>show the third part of your powerup inventory<tr><td class="fsfb-cmd-title">${chatPrefix}friends<td>show how many friends you have and how many are online<tr><td class="fsfb-cmd-title">${chatPrefix}requests<td>show how many friend requests you have<tr><td class="fsfb-cmd-title">${chatPrefix}gold<td>show how many days of gold member you have left remaining<tr><td class="fsfb-cmd-title">${chatPrefix}alive<td>show the amount of time you've been alive<tr><td class="fsfb-cmd-title">${chatPrefix}mass<td>show your current mass<tr><td class="fsfb-cmd-title">${chatPrefix}user<td>show your current username<tr><td class="fsfb-cmd-title">${chatPrefix}customs<td>show the amount of custom skins you own<tr><td class="fsfb-cmd-title">${chatPrefix}wearables<td>show how many wearables you own<tr><td class="fsfb-cmd-title">${chatPrefix}cloak<td>show the remaining time of your cloak ability<tr><td class="fsfb-cmd-title">${chatPrefix}add [user]<td>type this command to quickly add a friend using chat<tr><td class="fsfb-cmd-title">${chatPrefix}partymembers<td>show how many people are in your party<tr><td class="fsfb-cmd-title">${chatPrefix}players<td>show how many players are online in your server and are online in all agma servers<tr><td class="fsfb-cmd-title">${chatPrefix}server<td>show which server you're currently in<tr><td class="fsfb-cmd-title">${chatPrefix}abils<td>show your currently active abilities<tr><td class="fsfb-cmd-title">${chatPrefix}xpproj<td>show the predicted amount of XP you will gain in an hour<tr><td class="fsfb-cmd-title">${chatPrefix}coinsproj<td>show the predicted amount of coins you will gain in an hour<tr><td class="fsfb-cmd-title">${chatPrefix}xprem<td>show the amount of XP remaining for your level<tr><td class="fsfb-cmd-title">${chatPrefix}xphour<td>show the amount of xp you've gained in the last hour<tr><td class="fsfb-cmd-title">${chatPrefix}coinshour<td>show the amount of coins you've gained in the last hour<tr><td class="fsfb-cmd-title">${chatPrefix}xpmin<td>show the amount of XP you've gained in the last minute<tr><td class="fsfb-cmd-title">${chatPrefix}coinsmin<td>show the amount of coins you've gained in the last minute<tr><td class="fsfb-cmd-title">${chatPrefix}xp12s<td>show the amount of coins you've gained in the last 12 seconds<tr><td class="fsfb-cmd-title">${chatPrefix}xpsesh<td>show the amount of XP you've gained in this session<tr><td class="fsfb-cmd-title">${chatPrefix}lifetimexp<td>show the total amount of XP you've earned in your account's lifetime<tr><td class="fsfb-cmd-title">${chatPrefix}seshcoins<td>show the amount of coins you've gained in this session<tr><td class="fsfb-cmd-title">${chatPrefix}waifu [user]<td>rate the waifu of the selected username (leave user blank to rate yourself)<tr><td class="fsfb-cmd-title">${chatPrefix}pro [user]<td>show how pro someone is (leave user blank to rate yourself)<tr><td class="fsfb-cmd-title">${chatPrefix}dog [user]<td>show how dog someone is (leave user blank to rate yourself)<tr><td class="fsfb-cmd-title">${chatPrefix}king [user]<td>show how king someone is (leave user blank to rate yourself)<tr><td class="fsfb-cmd-title">${chatPrefix}dice [sides]<td>roll a die with the desired number of sides<tr><td class="fsfb-cmd-title">${chatPrefix}rng [min] [max]<td>generate a random number in a range<tr><td class="fsfb-cmd-title">${chatPrefix}coinflip<td>flip a coin and see if it lands on heads or tails<tr><td class="fsfb-cmd-title">${chatPrefix}script<td>show the current script you're using & which version<tr><td class="fsfb-cmd-title">${chatPrefix}time<td>show your current date & time<tr><td class="fsfb-cmd-title">${chatPrefix}skins<td>show your bought skins and their worth (limited as well)<tr><td class="fsfb-cmd-title">${chatPrefix}ratefriends [user1] [user2]<td>show how what percent friends two usernames are<tr><td class="fsfb-cmd-title">${chatPrefix}rateenemies [user1] [user2]<td>show how what percent enemies two usernames are<tr><td class="fsfb-cmd-title">${chatPrefix}leaderboard<td>show your leaderboard position</td></tr><tr><td class="fsfb-cmd-title">${chatPrefix}altcaps [text]<td>anything written after this command will have alternating lowercase/capital letters<\td></tr><tr><td class="fsfb-cmd-title">${chatPrefix}sparkles [text]<td>anything written after this command will be surrounded with star emojis<\td></tr><tr><td class="fsfb-cmd-title">${chatPrefix}fact<td>sends a random fact in chat<\td></tr></tr><table><div><span>Hide Ads</span>- both video and image ads will be removed from the screen</div><div><span>Skin Search</span>- search through skins by their names/ids</div><div><span>Improved Shop</span>- added larger amounts that can be purchased at a time, can also buy a specified amount at one time</div><div><span>Sort Wearables</span>- wearables are automatically sorted by owned (the ones you own will be before all others)</div><div><span>Extra Bot Packs</span>- added hidden bot packs that can be purchased with coins (originally discovered by firebone)</div><div><span>Context Menu Copy Info</span>- right click on a player, then click on their cell icon to copy their skin ID to clipboard or click on their name to copy their nickname to clipboard</div><div><span>Copy Chat</span>- right click on screen, then click "Copy Chat Messages" to copy the currently visible chat messages to your clipboard</div><div><span>Abilities Remaining Time</span>- shows the remaining time left of abilities (only works if the abilities were purchased in the same browser)</div><div><span>Unlock Free Skins</span>- gives you access to the facebook & youtube free skins</div><div><span>Hover For Skin ID</span>- hovering skins in the skin menu will shop their ID</div><div><span>In Depth XP/Coins Stats</span>- click on coins/xp progress bar in top left to view respective statistics</div><div><span>XP Bar Decimals</span>- show the percentage up to 2 decimal places</div><div><span>White Border For Black Cells</span>- show a white border around black cells (from minion nuker) so they're easier to see with dark backgrounds</div><div><span>Inventory Single Row</span>- put powerups inventory on a single row instead of on 2 seperate rows (inspired by Principito)</div><div><span>Custom Backgrounds</span>- a few <a href=https://imgur.com/a/sTANNBE target=_blank>backgrounds</a></div></section></div></div></div></div>`)
    const styles = document.createElement('style');
    styles.innerHTML = `#fsfb-minion_nuker { background-image: url(../img/store/minion_nuker.png); } #fsfb-megaphone_shout { background-image: url(../img/store/megaphone_shout.png);} .fsfb-update-swal .cancel{ background-color: #29b962 !important; } .fsfb-update-swal button:hover{ opacity: 75%; } a.fsfb-curser-anchor{ color: #8CEFFF; } a.fsfb-curser-anchor:hover{ opacity: 70%; } select.fsfb-changelang{ background: #a8a8a833; border-radius: 3px; border: none; height: 20px; color: #ffffffad; margin: 2px 0 0 0; } select.fsfb-changelang:focus-visible{ outline: none; } select.fsfb-changelang option{ background: #222; } #fsfb-wearsloaded{ display: none; width: 0; height: 0; } #fsfb-skinsearch{ border: 1px solid #2e6da4; background-color: #222328; font-size: 17px; border-radius: 4px; width: 100%; padding: 4px 4px 4px 8px; margin: 4px 0; color: white; } #stats-table td{ font-size: 17px; } #stats-table label{ padding-right: 10px; margin: 0 6px 0 2px; } #stats-table input{ transform: scale(1.8); margin: 5px 8px 5px 5px; } #friendRejectAll{ color: #ff4000 !important; } div.fsfb-slider{ display: flex; align-items: center; } input[type="range"].fsfb-slider{ width: 58px; display: inline; position: absolute; right: 5px; } #fsfb-minion_nuker img{ margin-top: 2px; } .fsfb-shown{ display: block !important; } .fsfb-hidden{ display: none !important; } #fsfb-quickbuy{ background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 601 601"><path d="M1 301c0-31 23-54 49-54l198 1V50c0-26 23-49 53-49s53 23 53 49v198l197-1c26 0 49 23 49 54 0 30-23 53-49 53l-197-1v198c0 26-23 50-53 50s-53-24-53-50V354H50c-26 0-50-23-50-53"></path></svg>'); background-size: 80% 80%; } .fsfb-bug-modal>div>div{ -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 50%); background: linear-gradient(to bottom,#3b414e 0,#302f33 100%); border: 3px solid #232630; } .close.fsfb-btn{ position: absolute; right: 10px; top: 3px; font-size: 60px; } .fsfb-modal-body>div{ color: ffffffb0; margin: 10px 20px; } .fsfb-modal-body>table{ width: 90%; margin: 10px 20px; } .fsfb-cmd-title{ color: white; white-space: nowrap; padding-right: 12px !important; } .fsfb-modal-body>table th{ color: white; } .fsfb-modal-body>table td{ padding: 4px 0; } .fsfb-modal-body>div>span{ color: white; } .fsfb-modal-body{ margin: 10px 10px; font-size: 20px; max-height: 600px; overflow-y: auto; } .fsfb-modal-title{ text-align: center; color: white; } .fsfb-hotkey{ background-color: #df901c; color: #fff; cursor: pointer; text-align: center; min-width: 40px; max-width: 60px; height: 18px; line-height: 18px; vertical-align: middle; border-radius: 9px; right: 5px; position: absolute; display: inline-block; padding: 0 5px; overflow: hidden; opacity: 1; } .fsfb-modal-body::-webkit-scrollbar-thumb { background-color: #57595b; border: 1px solid black; border-radius: 12px; } .fsfb-modal-body::-webkit-scrollbar { border: 1px solid black; background-color: #2523239e; width: 15px; border-radius: 12px; } .fsfb-modal-body::-webkit-scrollbar-track { -webkit-box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.75); box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.75); border-radius: 12px; } .fsfb-hotkey:hover { background-color: #f1a02d; } .fsfb-hotkey.selected{ background-color: #ff4; color: #444; } #fsfb-settings-main p{ margin: 0; display: inline-block; margin-left: 4px; } #fsfb-settings-main{ display: -ms-grid; display: grid; -ms-grid-columns: 50% 50%; grid-template-columns: 50% 50%; } #settingPage4::-webkit-scrollbar-thumb { background-color: #ff9800c2; border-radius: 12px; border: 1px #000000c2 solid; } #settingPage4::-webkit-scrollbar { border: 1px solid #00000085; background-color: #2523239e; width: 9px; border-radius: 12px; } #settingPage4{ display: none; max-height: 660px; overflow-x: hidden; } .padbot10{ padding-bottom: 10px; } #fsfb-slowfeedtime, #fsfb-dubsecdelay, #fsfb-dubfirstdelay, #fsfb-secdelay, #fsfb-firstdelay{ border: none; width: 40px; } select.fsfb-quickchange{ background: none; border: none; height: 20px; } select.fsfb-quickchange:focus-visible{ outline: none; } select.fsfb-quickchange option{ background: #222; } .fsfb-sect-ch label{ display: flex; align-items: center; } .fsfb-sect-ch label input{ margin: 0 2px 0 0; } #fsfb-sect-theme label div{ height: 18px; aspect-ratio: 1; } #fsfb-sect-theme label input[type="color"]{ width: 100%; height: 100%; opacity: 0; border: none; background-color: white; margin: 0; cursor: pointer; } #fsfb-sect-theme label p{ min-width: 120px; margin-left: 5px; } #fsfb-sect-theme label div{ border-radius: 4px; border: 1px solid #ffffff29; } #fsfb-ximport-cont{ display: flex; justify-content: space-around; margin-top: 7px; } .fsfb-eximport{ background-color: #df901c; color: white; padding: 5px 17px; border-radius: 25px; cursor: pointer; } .hideMegaphone{ display: none !important; } .fsfb-fake{ padding: 0 0 0 43px; color: #cbff4e !important; } #fsfb-extra-info{ margin: 10% 0 0 90%; cursor: pointer; } #linesplit-markers div { background-color: transparent; height: 15px; aspect-ratio: 1; position: fixed; z-index: 999; border: 2px solid rgb(255 255 255 / 80%); border-radius: 50%; display: none; } #linesplit-top { top: -7.5px; transform: translateX(-50%); left: 50%; } #stats-container{ background: rgba(0,0,0,.5); top: 200px; position: absolute; border: 1px white solid; border-radius: 12px; color:white; left:30px; } #stats-main{ padding: 10px; } #stats-extra-info{ color: #00bbff; font-size: 15px; margin-bottom: 2px; display: block; } #stats-info div{ display:flex; } #stats-info div p{ margin: 0; } .stats-completed{ margin: 9px 5px 0; font-size: 12px; bottom: 0; color: rgb(255, 255, 255, .8); } #stats-title{ display: flex; align-items: center; justify-content: space-between; } #stats-title>div{ font-size: 15px; margin-left: 8px; cursor: pointer; } #stats-title>div>div{ padding: 0 5px; } #linesplit-right { right: -7.5px; transform: translateY(-50%); top: 50%; } #linesplit-bottom { bottom: -7.5px; transform: translateX(-50%); left: 50%; } #linesplit-left { left: -7.5px; transform: translateY(-50%); top: 50%; } .fuckAds{ transform: translateX(9999%) !important; } `
    document.querySelector('body').append(styles);

    const scripts = document.createElement('script');
    scripts.innerHTML = `const onlyNumberKey = (e, key) => (key = e.which || e.keyCode, 48 <= key && key <= 57);`;

    let script_id = 446564 // main script
    let version_timestamp = 1676737129302;
    if (typeof GM_getValue == 'function' && +GM_getValue("lastUpdateCheck", "0") + 864e5 <= Date.now() && typeof GM_xmlhttpRequest == 'function' && notifyNewUpdates) {
        try {
            GM_xmlhttpRequest({
                method: "GET",
                url: `https://greasyfork.org/en/scripts/${script_id}/code?${Date.now()}`,
                headers: {
                    'Cache-Control': 'no-cache'
                },
                onload: function(xhrResponse) {
                    GM_setValue("lastUpdateCheck", String(Date.now()));
                    const rt = xhrResponse.responseText.replace(/&nbsp;?/gm, " ").replace(/&#x000A;/g, "\n").replace(/<li>/gm, "\n").replace(/<[^>]*>/gm, "");
                    if (+(rt?.match(/version_timestamp\s*=\s*([0-9]+)/)?.[1] ?? 0) > version_timestamp) {
                        let changelog = rt.match(/(?<=@changelog\s+)(?:\S).+$/gm)?.[0] ?? 'unable to find',
                            version = rt.match(/(?<=@version\s+)(?:\S).+$/gm)?.[0] ?? 'unable to find';
                        swal({
                            title: `<span style="color: #8CEFFF;">fsfb update!</span>`,
                            text: `<span style="color: #BBF6FF;">It appears there's a new update available for fsfb script. (version: ${version})</br>Changelog: ${changelog}</span>`,
                            type: "info",
                            confirmButtonColor: "#2cb7f7",
                            confirmButtonText: 'Install fsfb Update',
                            html: true,
                            focusCancel: true,
                            // cancelButtonColor: "#29b962",
                            // cancelButtonText: 'Install Auto-Updating fsfb',
                            // showCancelButton: true,
                            customClass: 'fsfb-update-swal'
                        }, function(val) {
                            if(val){ // install new update
                                unsafeWindow.open(`https://greasyfork.org/scripts/${script_id}/`);
                            }
                            //  else { // install auto-updating
                            //     alert('Sorry auto-updating fsfb is being fixed & is not available now');
                            //     // unsafeWindow.open(`https://greasyfork.org/scripts/455326`);
                            // }
                        });
                    }
                }
            });
        } catch (err) {
            console.error("An error occurred while checking for updates:\n" + err);
        }
    }

    document.querySelector('body').append(scripts);
    unsafeWindow.fsfbScriptsLoaded = true;
    // $('#gameSettingsTab a')[0].click(); // att
    // $('#settingTab4')[0].click();
};


if(unsafeWindow.fsfbScriptsLoaded || unsafeWindow.fsfbEvListenerAdded) alert('It appears fsfb scripts is already loaded. It\'s recommended to only use one instance of fsfb at a time.');
(document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(afterLoaded, 0) : (document.addEventListener("DOMContentLoaded", afterLoaded), unsafeWindow.fsfbEvListenerAdded = true));