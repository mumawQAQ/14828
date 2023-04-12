// ==UserScript==
// @name         ColorClient
// @namespace    https://pixelmelt.dev/
// @version      1.3
// @description  Color your starblast.io client!
// @author       Pix#7008
// @match        https://starblast.io/*
// @icon         https://cdn.upload.systems/uploads/SKntKQGC.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    if (localStorage.clientcolor == undefined) {
      localStorage.clientcolor = `#8934C2`
    }
    if (localStorage.clientcoloralt == undefined) {
      localStorage.clientcoloralt = `#000`
    }
    if (window.location.pathname == "/") {
      console.log(`%c [!] A-ClientLITE - Welcome to the lite version of A-Client [!] \n [!] Unlike the full version of A-Client, this one contains no cheats/advantages and is purely cosmetic! [!] `, `background: #000; color: #8934C2`);
      if (window.location.pathname == "/") {
        document.getElementsByClassName(`textcentered community changelog-new`)[0].innerHTML = `\n              <a href="https://open.spotify.com/user/gilpom/playlist/47N9rRbMXezlPXvhqVM3lJ?si=6bHzE9A9S-2TGh7C4OndkA" target="_blank" style="color: rgb(255, 255, 255);"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.56-8-8-8zm3.68 11.56c-.16.24-.44.32-.68.16-1.88-1.16-4.24-1.4-7.04-.76-.28.08-.52-.12-.6-.36-.08-.28.12-.52.36-.6 3.04-.68 5.68-.4 7.76.88.28.12.32.44.2.68zm.96-2.2c-.2.28-.56.4-.84.2-2.16-1.32-5.44-1.72-7.96-.92-.32.08-.68-.08-.76-.4-.08-.32.08-.68.4-.76 2.92-.88 6.52-.44 9 1.08.24.12.36.52.16.8zm.08-2.24C10.16 5.6 5.88 5.44 3.44 6.2c-.4.12-.8-.12-.92-.48-.12-.4.12-.8.48-.92 2.84-.84 7.52-.68 10.48 1.08.36.2.48.68.28 1.04-.2.28-.68.4-1.04.2z" fill-rule="nonzero"></path></svg><br>Spotify</a>\n              <a href="https://www.deezer.com/playlist/5343057502" target="_blank" style="color: rgb(255, 255, 255);"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M9.812 12.464h2.917v-.884H9.81v.884zm-6.54 0h2.916v-.884H3.27v.884zm-3.272 0h2.917v-.884H0v.884zm6.54 0h2.92v-.884H6.54v.884zm6.543 0H16v-.884h-2.917v.884zm0-1.15H16v-.883h-2.917v.89zm-6.542 0h2.92v-.883H6.54v.89zm-6.54 0h2.92v-.883H0v.89zm3.27 0h2.92v-.883H3.27v.89zm6.55 0h2.92v-.883H9.81v.89zm0-1.148h2.92v-.884H9.81v.884zm-6.54 0h2.91v-.884H3.27v.884zm-3.27 0h2.91v-.884H0v.884zm6.54 0h2.92v-.884H6.54v.884zm6.55 0H16v-.884h-2.917v.884zm0-1.15H16v-.883h-2.917v.884zm-6.54 0h2.91v-.883H6.54v.884zm-6.54 0h2.91v-.883H0v.884zm9.82 0h2.92v-.883H9.81v.884zm0-1.15h2.92v-.882H9.81v.883zm-9.82 0h2.91v-.88H0v.882zm6.54 0h2.92v-.88H6.54v.882zm6.54 0H16v-.882h-2.917v.884zM6.54 6.72h2.92v-.885H6.54v.884zm6.543-.002H16v-.883h-2.917v.883zM6.54 5.57h2.92v-.885H6.54v.885zm6.543 0H16v-.885h-2.917v.884zm0-1.15H16v-.884h-2.917v.884z"></path></svg><br>Deezer</a>\n            <a href="https://starblast.dankdmitron.dev/" target="_blank" style="color: rgb(255, 255, 255);"><i class='sbg sbg-fly-full'></i><br>SL+</a>\n            <a href="https://starblast-shipyard.github.io/" target="_blank" style="color: rgb(255, 255, 255);"><i class='sbg sbg-fly-full'></i><br>Shipyard</a>\n            <a href="https://starblast.io/modding.html" target="_blank" style="color: rgb(255, 255, 255);"><i class='sbg sbg-modding'></i><br>Modding Space</a>\n            <a href="https://starblast.io/shipeditor/" target="_blank" style="color: rgb(255, 255, 255);"><i class='sbg sbg-fly'></i><br>Ship Editor</a>\n            `
      }
      class AClientLITE{
        help(){
          console.log(`%c [!] A-ClientLITE - help [!] \n ac.help() shows this dialoge \n ac.color() lists colors you can change \n ac.color(number,"#FFFFFF") changes the specified color `, `background: #000; color: #8934C2`);
        }
        color(colornum,colorhex){
          if (colornum == undefined) {
            console.log(`%c 1) Color 1 \n 2) Color 2 `, `background: #000; color: #8934C2`);
            return
          }
          if (colorhex == undefined) {
            console.log(`%c [!] You must specify a color hex [!] `, `background: #000; color: #8934C2`);
            return
          }
          if (colornum == 1) {
            console.log(`%c [!] Color 1 set to ${colorhex} [!] `, `background: #000; color: #8934C2`);
            localStorage.clientcolor = colorhex
          }else{
            console.log(`%c [!] Color 2 set to ${colorhex} [!] `, `background: #000; color: #8934C2`);
            localStorage.clientcoloralt = colorhex
          }
        }
      }
      var ac = new AClientLITE()
      window.ac = new AClientLITE()
      ac.help()

      function themeclient() {
        if (document.getElementsByClassName(`top-right`)[0]) {
          //AOW
          /*document.getElementsByClassName(`alphacentauri`)[1].style.boxShadow = `0px 0px 6px ${localStorage.clientcolor}`
          document.getElementsByClassName(`alphacentauri`)[1].children[0].style.boxShadow = `0px 0px 6px ${localStorage.clientcolor}`
          document.getElementsByClassName(`alphacentauri`)[1].children[1].style.color = `#fff`
          document.getElementsByClassName(`alphacentauri`)[1].children[3].style.color = `#fff`
          document.getElementsByClassName(`top-right`)[0].children[2].style.borderBottom = `3px solid ${localStorage.clientcolor}`
          document.getElementsByClassName(`top-right`)[0].children[2].children[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName(`top-right`)[0].children[2].children[0].style.boxShadow = `0 0 6px ${localStorage.clientcolor}`
          document.getElementsByClassName(`top-right`)[0].children[2].children[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`*/
        }

        if (document.getElementById("play").style.color != `#fff`) {
          //play button
          document.getElementById("play").style.color = `#fff`
          document.getElementById("play").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("play").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("play").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //arrows
          document.getElementById(`nextMode`).style.color = localStorage.clientcolor
          document.getElementById(`nextMode`).style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById(`prevMode`).style.color = localStorage.clientcolor
          document.getElementById(`prevMode`).style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //name box
          document.getElementsByClassName("inputwrapper")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("inputwrapper")[0].style.background = `linear-gradient(to top,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 20%,${localStorage.clientcoloralt} 60%,${localStorage.clientcolor} 100%)`
          //modding space
          document.getElementById("moddingspace").style.color = `#fff`
          document.getElementById("moddingspace").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("moddingspace").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("moddingspace").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //ecp
          document.getElementById("donate").style.color = `#fff`
          document.getElementById("donate").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("donate").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("donate").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //leaderboard
          document.getElementById("rankings").style.color = `#fff`
          document.getElementById("rankings").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("rankings").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("rankings").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //training
          document.getElementById("training").style.color = `#fff`
          document.getElementById("training").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("training").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("training").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //twitter button
          document.getElementsByClassName("sbg-twitter")[1].style.color = `#fff`
          document.getElementsByClassName("sbg-twitter")[1].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("sbg-twitter")[1].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("sbg-twitter")[1].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //FB button
          document.getElementsByClassName("sbg-facebook")[1].style.color = `#fff`
          document.getElementsByClassName("sbg-facebook")[1].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("sbg-facebook")[1].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("sbg-facebook")[1].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //settings button
          document.getElementsByClassName("sbg-gears")[1].style.color = `#fff`
          document.getElementsByClassName("sbg-gears")[1].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("sbg-gears")[1].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("sbg-gears")[1].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //info button
          document.getElementsByClassName("sbg-info")[1].style.color = `#fff`
          document.getElementsByClassName("sbg-info")[1].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("sbg-info")[1].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("sbg-info")[1].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //changelog
          document.getElementsByClassName(`changelog-new`)[0].children[0].children[0].children[0].style.color = `#fff`
          document.getElementsByClassName(`changelog-new`)[0].children[1].style.color = `#fff`
          document.getElementsByClassName("changelog-new")[0].style.color = `#fff`
          document.getElementsByClassName("changelog-new")[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("changelog-new")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("changelog-new")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //music
          document.getElementsByClassName("changelog-new")[2].style.color = `#fff`
          document.getElementsByClassName("changelog-new")[2].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("changelog-new")[2].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("changelog-new")[2].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName(`community`)[0].children[0].style.color = `#fff`
          document.getElementsByClassName(`community`)[0].children[1].style.color = `#fff`
          //socials
          document.getElementsByClassName(`community`)[2].children[0].style.color = `#fff`
          document.getElementsByClassName(`community`)[2].children[1].style.color = `#fff`
          document.getElementsByClassName(`community`)[2].children[2].style.color = `#fff`
          document.getElementsByClassName(`community`)[2].children[3].style.color = `#fff`
          document.getElementsByClassName("changelog-new")[4].style.color = `#fff`
          document.getElementsByClassName("changelog-new")[4].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("changelog-new")[4].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("changelog-new")[4].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //menus
          document.getElementsByClassName("modal")[0].style.color = `#fff`
          document.getElementsByClassName("modal")[0].style.background = `linear-gradient(135deg,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("modal")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("modal")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //loading bar
          document.getElementsByClassName(`loaderprogress`)[0].style.background = `linear-gradient(to right,${localStorage.clientcoloralt} 0,${localStorage.clientcolor} 100%)`
          document.getElementsByClassName(`gameloaderwrapper`)[0].style.border = `2px solid ${localStorage.clientcolor}`
          document.getElementsByClassName(`gameloaderwrapper`)[0].style.boxShadow = `0 0 10px ${localStorage.clientcolor}`
          //text below loading bar
          document.getElementsByClassName(`textprogress`)[0].style.color = localStorage.clientcolor
          document.getElementsByClassName(`textprogress`)[0].style.textShadow = `0 0 10px ${localStorage.clientcolor}`
          if (document.getElementsByClassName("donate-btn")[1]) {
            //custom game button
            document.getElementsByClassName("donate-btn")[1].style.color = `#fff`
            document.getElementsByClassName("donate-btn")[1].style.background = `radial-gradient(ellipse at center,${localStorage.clientcoloralt} 0,${localStorage.clientcolor} 150%)`
            document.getElementsByClassName("donate-btn")[1].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
            document.getElementsByClassName("donate-btn")[1].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
            //ecp and ship preview
            for(let i = 0; i < document.getElementsByClassName("frozenbg").length; i++){
              document.getElementsByClassName("frozenbg")[i].style.background = `radial-gradient(ellipse at center,${localStorage.clientcoloralt} 20%,${localStorage.clientcolor} 150%)`
              document.getElementsByClassName("frozenbg")[i].style.boxShadow = `0 0 6px ${localStorage.clientcolor}`
              document.getElementsByClassName("frozenbg")[i].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
            }
            //show ecp button
            document.getElementById("viewEcp").style.color = `#fff`
            document.getElementById("viewEcp").style.background = `radial-gradient(ellipse at center,${localStorage.clientcoloralt} 0,${localStorage.clientcolor} 150%)`
            document.getElementById("viewEcp").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
            document.getElementById("viewEcp").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
            //ecp key box
            document.getElementById("ECPKey").style.color = `#fff`
            document.getElementById("ECPKey").style.background = `radial-gradient(ellipse at center,${localStorage.clientcoloralt} 0,${localStorage.clientcolor} 150%)`
            document.getElementById("ECPKey").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
            document.getElementById("ECPKey").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
            //delete ecp button
            document.getElementById("removeEcp").style.color = `#fff`
            document.getElementById("removeEcp").style.background = `radial-gradient(ellipse at center,${localStorage.clientcoloralt} 0,${localStorage.clientcolor} 150%)`
            document.getElementById("removeEcp").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
            document.getElementById("removeEcp").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          }
        }
        if (document.getElementsByClassName("stats")[0].children.length > 0) {
          //continue button
          document.getElementById("continue_btn").style.color = `#fff`
          document.getElementById("continue_btn").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("continue_btn").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("continue_btn").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death stats
          document.getElementsByClassName("stats")[0].style.border = `2px solid ${localStorage.clientcolor}`
          document.getElementsByClassName("stats")[0].style.boxShadow = `0 0 15px ${localStorage.clientcolor}`
          document.getElementsByClassName("stats")[0].style.background = `hsl(0deg 0% 100% / 0%)`
          //death stats separators
          for(let i = 0; i < document.getElementsByClassName("stats")[0].children.length; i++){
            document.getElementsByClassName("stats")[0].children[i].style.borderBottom = `1px solid ${localStorage.clientcolor}`
          }
        }

        if (document.getElementsByClassName("fa-vk")[0] != undefined) {
          //link bar
          document.getElementsByClassName("stats")[0].children[3].style.color = `#fff`
          document.getElementsByClassName("stats")[0].children[3].style.background = `linear-gradient(to top,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 20%,${localStorage.clientcoloralt} 60%,${localStorage.clientcolor} 100%)`
          document.getElementsByClassName("stats")[0].children[3].style.border = `0 solid ${localStorage.clientcolor}`
          document.getElementsByClassName("stats")[0].children[3].style.boxShadow = `0 0 6px ${localStorage.clientcolor}`
          //respawn button
          document.getElementById("respawn_btn").style.color = `#fff`
          document.getElementById("respawn_btn").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("respawn_btn").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("respawn_btn").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //quit button
          document.getElementById("refresh_btn").style.color = `#fff`
          document.getElementById("refresh_btn").style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementById("refresh_btn").style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementById("refresh_btn").style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death stats
          document.getElementsByClassName("stats")[0].style.border = `2px solid ${localStorage.clientcolor}`
          document.getElementsByClassName("stats")[0].style.boxShadow = `0 0 15px ${localStorage.clientcolor}`
          document.getElementsByClassName("stats")[0].style.background = `hsl(0deg 0% 100% / 0%)`
          //death text
          document.getElementById("overlay").style.color = `#fff`
          //death twitter button
          document.getElementsByClassName("fa-twitter")[0].style.color = `#fff`
          document.getElementsByClassName("fa-twitter")[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("fa-twitter")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("fa-twitter")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death FB button
          document.getElementsByClassName("fa-facebook")[0].style.color = `#fff`
          document.getElementsByClassName("fa-facebook")[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("fa-facebook")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("fa-facebook")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death vk button
          document.getElementsByClassName("fa-vk")[0].style.color = `#fff`
          document.getElementsByClassName("fa-vk")[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("fa-vk")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("fa-vk")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death FB button
          document.getElementsByClassName("fa-envelope")[0].style.color = `#fff`
          document.getElementsByClassName("fa-envelope")[0].style.background = `radial-gradient(ellipse at center,${localStorage.clientcolor} 0,${localStorage.clientcoloralt} 150%)`
          document.getElementsByClassName("fa-envelope")[0].style.boxShadow = `0 0 7px ${localStorage.clientcolor}`
          document.getElementsByClassName("fa-envelope")[0].style.textShadow = `0 0 7px ${localStorage.clientcolor}`
          //death stats separators
          for(let i = 0; i < document.getElementsByClassName("stats")[0].children.length; i++){
            document.getElementsByClassName("stats")[0].children[i].style.borderBottom = `1px solid ${localStorage.clientcolor}`
          }
        }
        setTimeout(themeclient, 500)
      }
      themeclient()
    }
})();