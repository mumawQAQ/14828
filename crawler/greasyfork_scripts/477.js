// ==UserScript==
// @name         XTaming Client (Taming.io Hacks)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Escape to view serverdata, remove ads, custom cursor, and more! (more to come!)
// @author       FZ
// @match        *://taming.io/
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://greasyfork.org/scripts/410512-sci-js-from-ksw2-center/code/scijs%20(from%20ksw2-center).js
// @grant        none
// @antifeature  Tracking, for script error catching
// ==/UserScript==

let serverRefreshRate = 3000;
setInterval(()=>{
    let servers = [];
    servers = Array.from(document.getElementById("serverSelect").children).map(server => {
        return server.innerHTML;
    });
    document.getElementById("serverData").innerHTML = servers.join("<br>");
    try {
        insert_0000000(true, "taming.io"); //initializer
    }catch(e){};
}, 3000);

let dista = true;
document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        document.getElementById("modMenus").style.display = !dista ? 'none' : 'block';
        dista = !dista;
    };
});

function isElementVisible(e) {
    return e.offsetParent !== null;
}
setInterval(()=>{
    try {
        document.getElementById("taming-io_970x250").parentElement.remove();
    } catch(e){};
    try {
        document.getElementById("taming-io_300x250").parentElement.remove();
    } catch(e){};
    document.querySelectorAll('canvas')[0].style.cursor = "url(http://cur.cursors-4u.net/user/use-1/use153.cur), default";
    try {
        if (isElementVisible(document.getElementById("cross-promo"))) document.getElementById("cross-promo").style.display = "none";
    } catch(e){};
}, 100);

window.addEventListener("load", () => {
    var modMenu = `<div id=\"modMenus\" style=\"display: block;
padding: 10px;
border-radius: 15px;
background-color: rgba(0, 0, 0, 0.25);
border-radius: 3px;
position: absolute;
left: 20px;
top: 80px;
min-width: 200px;
max-width: 300px;
min-height: 200;
max-height 300;\"></div>`;
    var modMenuText = `<div id=\"helpText\" style=\"font-size: 30px;color: rgb(255, 255, 255);\">
Magick: <br>
<div style="font-size: 12px; overflow-y: scroll; max-height: 150px;" id="serverData">
test
</div>
`;
    $("body").append(modMenu);
    $("#modMenus").append(modMenuText);
    $("#modMenu").show();
    document.querySelectorAll('canvas')[0].prepend(`
<div id= "hackMenu2">
<style>
.bottomright {
position: absolute;
bottom: 8px;
right: 16px;
font-size: 18px;
}
<style>
</div>
`);
    document.getElementById("modMenus").style.display = "none";
});
