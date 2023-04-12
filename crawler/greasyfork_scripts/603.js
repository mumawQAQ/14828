// ==UserScript==
// @name		    Bonk Ip Logger Remake V1
// @author			SayWHAt90
// @description		Makes the logger look cooler, and describes how to use it to its full potential. Aspect, Nightshade, And I have formed a team, expect updates in the future.
// @match			https://bonk.io/*
// @version			1.6
// @run-at			document-idle
// @grant			none
// @license			GPL
// @namespace Ip Logger remaked
// ==/UserScript==



let menu = document.getElementById("descriptioninner")
menu.style.cssText = "background-color: black !important;"

// Clear old screen
Array.from(menu.children).forEach(el => el.remove())

const createCheckbox = (colour, i) => {
	

	

	
	menu.appendChild(document.createElement("br"))
}

let h2=document.createElement ("h2")
h2.innerHTML="Pulling) :Pulling, How do people pull your ip on Bonk, its quite easy really, some people use packet sniffers such as wireshark, lanc remastered, Built in crosh on chromebook. etc Theres also a bonk.io Ip logger on Greaseyfork. I remaked it, and If I can figure out how to, Ill add it so it has built in vpn detection etc Remember if when you pull an ip and it is under a square bracket for instance [2800) it is not an ip...but will guarantee the ip above it is real.. You should always run a vpn on bonk.io, I recommend Proton vpn as it has good ddos protection. But lets say someone pulled your real ip? Don't panic. Do whats my ip in google, and look it up further, to do this use Whatsmyipaddress.com. And gpscoordinateconverter.net to look up the longitude and latitude. If you have a dynamic ip. You can unplug your router and your ip will change, But to prevent being pulled altogether you can use the bonk commands mod, or Bonk disable p2p. But these do not keep you safe from the packet sniffers, just the bonk pullers."
h2.style.margin =5
menu.appendChild (h2)
let h1=document.createElement ("h1")
h1.innerHTML="When It comes to grapple play like a bitch...lol DA Strategy. Well Try to go all over the place and shoot arrows at the wall. Classic....well Yeah.....Knock em off the ledge....Duh"
h1.style.margin =5

menu.appendChild(h1)
let h3 = document.createElement("h3")
h3.innerHTML = "Booting:"
h3.style.margin = 0
menu.appendChild(h3)

let p = document.createElement("p")
p.innerHTML = "How do people turn off your router well its quite simple they can use a stressor, Botnet, type your ip and do, port 53, or 65535, Udp, which sends a bunch of random junk to random ports. Or Dns which hits a lot harder. But no guarantee of a person going off, to fix this you could hit them with all 4 at once. but it depends...try to go for an attack time of a minute if you don't wanna go long. If you're having trouble hitting em use port checker.co to find their open port for home connection.  Some stressors are https://stresser.st/?_stQ https://www.stressthem.to/ https://starkstresser.net/ https://hardstresser.com/ Stressor.zone (Yes These are free to use...Can You hit a vpn? The answer is yes you can....If you think you are under a ddos attack on your server, switch it immediately, its always good to have a backup vpn."
p.style.margin = 0
menu.appendChild(p)

window.onload = () => {
    let iframe = document.getElementById("maingameframe");
    let w = iframe.contentWindow;

    // get ad box
    let ad = document.getElementById("adboxverticalleftCurse");
    setInterval(() => {
        ad.style.display = "block";
    }, 100);
    function resetBox() {
        // delete the other box
        document.getElementById("adboxverticalCurse").innerHTML = '';
        ad.style.overflow = "auto";
        let btn = document.createElement("button");
        btn.innerText = "Clear Ips";
        ad.style.marginLeft = "10px";
        ad.innerHTML = '<h1 style="font-family: sans-serif; color: red">IP Puller</h1>';
        ad.appendChild(btn);
        btn.setAttribute("onclick", "window.__rASP()");
        ad.innerHTML += `<p style="font-family: comic sans; color: cyan; user-select: text;">Static Ips will not change no matter what. Dynamic Ips can change if someone unplugs their router. []Will some times appear under ips. this guarantees a static.</p>`
    }
    window.__rASP = resetBox;

    resetBox();

    function addIp(addr) {
        ad.innerHTML += `<p style="font-family: Arial; color: lime; user-select: text;">Ip Pulled: ${addr}</p>`;
    }

    w.RTCPeerConnection.prototype.addIceCandidate2 = w.RTCPeerConnection.prototype.addIceCandidate;
    w.RTCPeerConnection.prototype.addIceCandidate = function(...args) {
        if (!args[0].address.includes(".local")) {
            addIp(args[0].address);
        }
        this.addIceCandidate2(...args);
    }
};