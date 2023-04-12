// ==UserScript==
// @name         New cookie clicker autoplay
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  A cookie clicker mod that auto clicks the cooke and auto upgrades
// @author       You
// @match       https://games-online.io/game/cake-maker-legend/
// @grant        none
// ==/UserScript==
cookie=document.getElementsByClassName('cookies-img')[0];
click=function(e){return e.click()};
var items=document.getElementsByClassName('container-store')[0].children;
items.forEach=[].forEach
item=''
obj=[];
i=0;
items.forEach(e=>{
    item+=e.className.split('-')[1].split(' ')[0]+`=document.getElementsByClassName('${e.className}')[0];`+
        e.className.split('-')[1].split(' ')[0]+`.buy=function(){click(${e.className.split('-')[1].split(' ')[0]});};
obj.push(${e.className.split('-')[1].split(' ')[0]})
`
})
eval(item);
var a;
clearInterval(a);
a=setInterval(function(){click(cookie)},0);
var b
clearInterval(b);
b=setInterval(function(){
    obj.forEach(e=>{
        e.buy()
    })},100);
eval(localStorage.getItem('i'))?true:(function(){localStorage.setItem('i','true');point_cookies=10e10})();