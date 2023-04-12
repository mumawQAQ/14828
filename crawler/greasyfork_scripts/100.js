// ==UserScript==
// @name         'Delta - 999999 in 1
// @name:ru      'Delta - 999999 в 1
// @description       Delta - extension for agario, agar.io mod collection. Zoom+, macro eject mass, double split, hot-keys, minimap, chat, helpers, themes
// @description:ru       Delta - расширение для агарио, сборник модов для agar.io. Зум, авто-ц, дабл-сплит, горячие клавиши, мини-карта, чат, подсказки, темы
// @version      6.9
// @namespace    delta.agar
// @author       neo
// @icon         https://deltav4.gitlab.io/ext/assets/favicon.ico
// @match        *://agar.io/*
// @run-at       document-start
// @connect      sentinelix-source-agarix.glitch.me
// @connect      deltav4.gitlab.io
// @connect      hslo.gitlab.io
// @connect      127.0.0.1
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        window.close
// ==/UserScript==

/*
  GREASYFORK VERSION
  Copying and subsequent publication of this source code is prohibited. The publication of this user script is allowed, use the following links:
    - https://greasyfork.org/ru/scripts/399197-delta-999999-in-1
    - https://deltav4.gitlab.io/deltav4.user.js
  If this user script does not start, write me a discord
  Если данное расширение не запускается, напишите мне в дискорд
  https://discord.gg/HHmyKW6
*/



try{
    GM.registerMenuCommand('\uD83D\uDF02\u2077 Delta 7', function() {
        window.location.href="https://agar.io/v7"
    });
    GM.registerMenuCommand('\uD83D\uDF02\u2075 Delta 5', function() {
        window.location.href="https://agar.io/v5"
    });
    GM.registerMenuCommand('\uD83D\uDF02\u2074 Delta 4', function() {
        window.location.href="https://agar.io/v4"
    });
    GM.registerMenuCommand('\u2104 Legendmod (n/a)', function() {
        alert('Sorry, this mod is not available in this user-script')
    });
    // GM.registerMenuCommand('\u24B6 Agar Tool (Backup copy)', function() {
    //     window.location.href="https://agar.io/ato"
    // });
    GM.registerMenuCommand('\u24B6 Agar Tool (n/a)', function() {
        alert('Sorry, this mod is not available in this user-script')
    });
    GM.registerMenuCommand('\u2164 VANILLA (n/a)', function() {
        alert('Sorry, this mod is not available in this user-script')
    });
    GM.registerMenuCommand('\u1EFA HSLO', function() {
        window.location.href="https://agar.io/hslo"
    });
    GM.registerMenuCommand('\u2168 Agarix', function() {
        window.location.href="https://agar.io/ix"
    });
    GM.registerMenuCommand('\ud83d\uddf8 Stock Agar.io', function() {
        window.location.href="https://agar.io/noext"
    });
    GM.registerMenuCommand('\ud83d\udd17 Visit our website', function() {
        window.location.href="https://deltav4.glitch.me/"
    });
    GM.registerMenuCommand('\uD83D\uDDAD Delta Discord', function() {
        window.location.href="https://discord.gg/HHmyKW6"
    });
}catch(e){}

if(window.document && window.document.title === 'Attention Required! | Cloudflare'){
    if(!/you have been blocked/.test(window.document.body.innerHTML)){
        return
    }
}

if (window.location.host == 'agar.io' && window.location.pathname === '/' ) {
    window.stop()
    window.location.href = 'https://agar.io/delta';
    return;
}

if (window.location.pathname.indexOf('delta')>-1) {
    window.history && window.history.replaceState && window.history.replaceState({}, window.document.title, '/');
}



var webBase = 'https://deltav4.gitlab.io'
var devBase = 'http://127.0.0.1:5500/deltav4.gitlab.io/'
var defaultMode = 'v7'
var location = ''
var isDevMode = window.location.pathname.indexOf('dev') > -1
var modes = {
    "url":function(){
        // For developers
        // example http://agar.io/url?https://your.host.com/
        // add
        // @connect      your.host.com
        location = window.location.search.slice(1)
    },
    "noext":function(){
        location = 'https://agar.io'
    },
    "v4":function(){
        location = (isDevMode?devBase:webBase)+'/v4/index.html'
    },
    "v5":function(){
        location = (isDevMode?devBase:webBase)+'/ext/index.html'
    },
    "v6":function(){
        location = (isDevMode?devBase:webBase)+'/ext2/index.html'
    },
    "v7":function(){
        location = (isDevMode?devBase:webBase)+'/v7/index.html'
    },
    "ix":function(){
        location = 'https://sentinelix-source-agarix.glitch.me/'
    },
    "ato":function(){
        location = (isDevMode?devBase:webBase)+'/agartool/index.html'
    },
    "hslo540":function(){
        location = (isDevMode?devBase:webBase)+'/hslo540/index.html'
    },
    "hslo536":function(){
        location = (isDevMode?devBase:webBase)+'/hslo536/index.html'
    },
    "hslo532":function(){
        location = (isDevMode?devBase:webBase)+'/hslo532/index.html'
    },
    "hslo":function(){
        location = 'https://hslo.gitlab.io/'
    }
}

for(var mode in modes){
    var isMatched = window.location.pathname.toLowerCase().indexOf(mode) > -1
    if(isMatched) {
        modes[mode]()
        break;
    }
}
if(!isMatched) modes[defaultMode]()


document&&document.documentElement&&(document.documentElement.innerHTML = '<style>html{font: 1.2em "Fira Sans", sans-serif;color:white;background: radial-gradient(circle at bottom right,#36003e, #000000 27%); height: 100%;}</style>Extension is loading');

if(location==='none'){

}else{
    console.log('Extension location',location)
    loader()
}
function loader(){
        GM.xmlHttpRequest({
        method: "GET",
        url: location+'?'+Math.random(),
        onload: async function(e) {
            var blob = new Blob(['\ufeff'+e.responseText], {type:"text/html;charset=windows-1252"});
            var reader = new FileReader();
            reader.onload = function() {
                document.open();
                var str = reader.result
                if(isDevMode) str = str.replace(webBase,devBase)
                if(mode==='hslo') str = str.replace('<head>','<head><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>')
                document.write(str);
                document.close();
            }
            reader.readAsText(blob);

        }
    })
}