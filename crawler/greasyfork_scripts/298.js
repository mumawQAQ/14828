// ==UserScript==
// @name         Nitro Type Car Hack _ Literally get ALL the cars 
// @namespace    https://www.youtube.com/c/Ginfio
// @version      1.1
// @description  Literally get all the nitro type cars. Unfortunately though, we aren't able to sell / or use the cars on race.
// @author       Ginfio
// @match        https://www.nitrotype.com/garage
// ==/UserScript==

//NITRO TYPE LITERALLY GET ALL THE CARS.

var garageSpotRowsNeeded=6;var more=(garageSpotRowsNeeded*15)*2;var empty_spots;var mother=document.querySelector(".garage");var none=["none"]
var arr=Array.from(document.querySelectorAll(".garage-spot > .garage-vehicle > .garage-vehichleImage")).map(item=>window.getComputedStyle(item,!1).backgroundImage);var painted=arr.filter(v=>(none.indexOf(v)===-1));painted=painted.map(myFunction)
function myFunction(num){if(num.includes("painted/")){return num.slice(44,-18)}}
painted=painted.filter(function(el){return el!=null});painted=painted.map(Number);console.log("painted "+painted)
arr=arr.filter(v=>(none.indexOf(v)===-1));arr=arr.map(el=>el.slice(36,-14));arr=arr.map(Number);arr=arr.filter(function(value){return!Number.isNaN(value)});arr=arr.concat(painted)
console.log("Original cars: "+arr)
var rmvNames=document.querySelectorAll('.garage-spot > .garage-vehicle > .garage-vehichleImage[data-tip]'),array=[],i;for(i=0;i<rmvNames.length;i+=1){array.push(rmvNames[i].dataset.tip)}
console.log("names removed: "+array);for(var gS=0;gS<more;gS++){var newSpot=document.createElement("div");newSpot.className="garage-spot is-empty";newSpot.innerHTML='<div draggable="true" class="garage-vehicle"><div class="garage-vehichleImage"></div></div>'+'<button class="btn btn--tertiary btn--xs btn--thinner garage-spotBtn">Sell</button>';mother.appendChild(newSpot);empty_spots=document.querySelectorAll(".is-empty > .garage-vehicle > .garage-vehichleImage")}
window.onload=function(){mkAct=document.querySelectorAll(".is-empty");current_image=document.querySelector('.profile-car');var names=["Lamborgotti Mephisto SS","Lamborgotti Mephisto","Jeepers Rubicorn","Portch Picante","Bantly Super Sport","The Rolls","Winston Citroen","Winston Agile","Rental Car","Mission Accomplished","Buggani Vyrus SS","Auttie B9","Nitsua Lance 722","Misoux Lion","Misoux Toad","Minnie the Cooper","Nizza 350x","One Ace","Cougar Ace","Rand Rover R/T","B-Team Van","Mercedex Bens V-20","Mercedex Bens C-64","Portch Spyder","Auttie Roadster","Bimmer M2.0","Bimmer 9.0t","Thunder Cougarbird","Rat Rod Skully","Outtie R11","The Flamerod","Valent Performo","Portch GT3 RS","Ponce de Leon (formerly General Beauregard)","'67 Shellback GT-500","Road Warrior","Linux Elise","'69 Shellback RT-500","The Gator","Bastok Suprillia","The Judge","The Stallion","The Macro","The Fastback","The Covenant","The Trifecta","8 Bit Racer","Mini Sherman","Typiano Pizza Car","Rocket Man","All Terrain Vehicle","MP 427","Wambulance","Hotdog Mobile","F-35 JSF","NASA Shuttle","Caterham Racer","Mack Daddy","Big Hauler","Big Blue","Fort GT40","Dom Vipper GST-R","Alpha Romero 8Ω","Blazing Buggy","F4U-Corsair","Rocket Sleigh","XMaxx Tree Racer","Shadow Xmaxx Tree","Party Sleigh","Zonday Tricolore","The Monster","Flux Capacitor","The Gotham","The Pirc","Suziki GXRS 1200","EZ Rider","Lamborgotti AdventX","Summer Classic","Hang Ten","'41 Woodie Deluxx","Hang Eleven","'41 Woodie Sunshine","The Xcelsior V12","'68 Roadtripper","Hang Fifteen","Wach 6","Fort F-125","Wisker Electric","'67 Vette","MSG 01","Fort Stallion","Police Bimmer","Auttie R-8.1","Wampus","Pumpkin Hauler","Wreath Racer","Santa's Buggy","Travis's Car","Dark Elf","The Golden Gift","Corndog's Car","'14 Mantaray","Ferreti Samsher 458","Lacan Hypersport","Sun Buggie","Hammer Wheels","Kringle 4000","Buddy's Snowmobile","Kringle 4000 XL","Buddy's Snowmorocket","Six Four","Six Four Plus Three","Car 117: The Midnight Hauler","The Candy Hauler","Kringle 5000","Wrapped Wracer","Wrapped Wracer GT","Holiday Hero","Kringle 5000 L.T.","Mercedex McLaro SLR","Floaty Blue","B.O.A.T.","I'm Spicy!","Y.A.C.H.T.","Mercedex McLaro SLR 12.5","Nitr-o'-Lantern","Nitr-o'-the-Wisp","Xmaxx Xxpress","XMaxx Xxpress XXL","Gilded Xxpress","Lamborgotti Xmaxx LT","Lamborgotti Xmaxx LT-C","Mercedex McLaro SHS 15.0","Strykist 1300","Range Runner","Strykist 1300 XT-LR","Track-o'-Lantern","Gingerbread Racer","Gingerbread Racer H&T","Missile Toe","Missile Toe H&T","The Dark Chocolate Knight","Teggsla","Egg Beater","Eggcedes","Egg Hauler","Mercedex GT 20.0","Rocky Roo","NitroPAC","Matchbox","Lucky Number 7","Easy Breezy","HoverJet 5000 Mk. 3","Golden Breeze","B.U.S.","S'cool B.U.S.","AU-79","The Underachiever","The Overachiever","The Wildflower","Jolly RS","olly GTX LG","The Goldray","can hav nt g0ld plx?","The Wraptor","Travis' Truck","The Wraptor GG","The Silent Knight","NT Gold","Lamborgotti Tiesto","Portch Cobalt","Alpha Romero 123Ω","Travis' Big Truck","Bright Idea","Sandstorm","The Jury","The Goldfish","Shock Value","Gold Standard","Solar Roller","H2GO","The DevasTater","Creepy Crawler","The Goblin","Something Wicked","Frosted Roller","Gingerbread GT","Holiday Heat","Cold Snap","The Snowy Knight","The Rocket Klaus","Golden Ticket","Wavebreaker","Broadwing","Bimmer Prism i20","Heartbreaker","The Danger 9","The Wild 500","Tigreen","X1 Eclipse","Error 500","Vapor"];names.reverse();var rmv=[12,32,41,108,147,148];var carId=[];for(var m=208;m>=1;m--){if(rmv.includes(m)){continue}
if(arr.includes(m)){continue}
carId.push(m)}
names=names.filter(v=>(array.indexOf(v)===-1));console.log(names);
var images = new Array(); for(let i of carId){images.push(`https://www.nitrotype.com/cars/${i}_large_1.png`)}
var audio=new Audio('https://www.nitrotype.com/dist/site/misc/sounds/global/ogg/swoosh.ogg');audio.volume=0.5;var start=setTimeout(delay,100)
function delay(){for(let r=0;r<images.length;r++){empty_spots[r].setAttribute('data-tip',names[r]);mkAct[r].addEventListener('click',function(){audio.play();setTimeout(function(){current_image.src=images[r];document.querySelector(".profile-carInterior > .mtm").innerHTML=names[r]},500);setTimeout(function(){current_image.classList.add("is-exiting");current_image.classList.remove("is-entering")},200)
setTimeout(function(){current_image.classList.add("is-entering");current_image.classList.remove("is-exiting")},500)})}}
smallImage=images.map(a=>a.replace("large","small"));for(let i=0;i<images.length;i++){setTimeout(function(){empty_spots[i].style.backgroundImage="url("+smallImage[i]+")"},100)
setTimeout(function(){mkAct[i].classList.remove("is-empty");var garage=document.querySelector(".garage");var btns=garage.getElementsByClassName("garage-spot");for(let i=0;i<btns.length;i++){btns[i].addEventListener("click",function(){var current=document.getElementsByClassName("is-active");if(current.length>0){current[0].className=current[0].className.replace(" is-active","")}
this.className+=" is-active"})}},1000)}}