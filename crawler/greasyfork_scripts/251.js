// ==UserScript==
// @name         Nitro Type Auto Typer helper_ (v.2) 
// @namespace   https://www.youtube.com/watch?v=RZfdjjNWt5E
// @version      2.1
// @description nitro type speed hack. Works on, Nitro Type, Typing.com, and 10FastFingers. Keep in mind this script is "helper". You must watch the video on how to use the actual auto typer. Video: https://youtu.be/W-2vr8ndTjA This is only part of it. So if you haven't watched the video yet, It'll be confusing. The video will explain how to use this script and the actual auto typer.
// @match        https://www.typing.com/*
// @match        https://10fastfingers.com/*
// @match      https://www.nitrotype.com/race/*
// @match https://www.nitrotype.com/race
// ==/UserScript==

// This is a speed hack helper for the following games: nitro type, typing.com, 10fastfingers


// ACCURACY:

// enter your acuracy below

var accuracy = 98;


// This script works on: Nitro Type, typing.com, 10fastfingers




// change 97 to the accuracy you want.

// 

// overall:
// List of games, sites: Nitro Type, typing.com, 10fast fingers


// === === === === === === === === === === === 

// overall:
// List of games, sites: Nitro Type, typing.com, 10fast fingers


// === === === === === === === === === === === 
// for Nitro TYpe
// ctf = check for text
    acc = accuracy;
	var hadfya = 'abcdefghijklmnopqABCDEFGHIJKLMNOPQ1234567890=-.,!?/';

	var u34ha = hadfya[Math.floor(Math.random()*hadfya.length)];

function waitForNT(ntw, ctf){
    var ntt = setInterval(function(){
        if(document.querySelector(".dash-copy")){
            clearInterval(ntt);
            ctf();
        }a
    }, 100);
}

waitForNT("ntwOfElementToWaitFor", function(){

  	function myFunction(elementID) {
  let element = document.querySelector(".dash-copy");
  
  console.log("  Ready. Click play.		")
	
  let tbt = document.querySelector(".dash-copy").textContent;
  
	var calcAcc = tbt.length / (tbt.length - ((acc / 100) * tbt.length))
	
	calcAcc = calcAcc.toFixed(0)
	
	var speed = calcAcc.toString()
	var re;
	
	if (acc == 100){
	    tbt = tbt;
	}
	
	else{
	re = new RegExp(`.{1,${speed}}`, 'g');
	    tbt = tbt.match(re).join(u34ha);
	    
	}
	
	
   
  let elementText =  tbt;
 
  copyText(elementText); 
}

// to cleepbored
function copyText(text) {
  navigator.clipboard.writeText(text);
}
  
  setTimeout(function(){
setInterval(function(){
  // document.querySelectorAll(".dash-copy-input")[0].focus()
},1);
	 }, 4000)


// call
myFunction()
//setTimeout(myFunction, 1000)



   
});




// === === === === === === === === === === === === === +=
// typing.com
// works

// document.querySelector(".screenIntro-line").textContent.split('\n').join('');

// falling keys: document.querySelector(".screenFalling").textContent.split('\n').join('');

// search time = st


 if (document.querySelector(".screenFalling")){
 	tbt = document.querySelector(".screenFalling").textContent.split('\n').join('');
  	console.log("On left to right")
  }
  else if(document.querySelector(".screenIntro-line")){
  tbt = document.querySelector(".screenIntro-line").textContent.split('\n').join('');
  	console.log("down to up")
  }
  
  
  
function waitForTypin(nm, wkn){
    var st = setInterval(function(){
        if(document.querySelector(".screenBasic-lines")){
            clearInterval(st);
            wkn();
        }
        
          if(document.querySelector(".screenFalling")){
            clearInterval(st);
            wkn();
        }
        
        
        if(document.querySelector(".screenIntro-lines")){
            clearInterval(st);
            wkn();
        }
        
    }, 100);
}



  
waitForTypin("nmOfElementToWaitFor", function(){
function myFunction(elementID) {
 // let element_typin = document.querySelectorAll(".screenBasic-lines")[0].textContent.replace(/\n/g, '') + '"';
 
 window.onload = function(){
  var tbt;
if(document.querySelector(".screenBasic-lines")){
tbt = document.querySelectorAll(".screenBasic-lines")[0].textContent.replace(/\n/g, '') + '"';
}
	else if(document.querySelector(".screenFalling") !== null){
		tbt = document.querySelector(".screenFalling").textContent.split('\n').join('').split("").reverse().join("")
		//console.log(tbt)
	}
 	 else if(document.querySelector(".screenIntro-lines")){
		tbt = document.querySelector(".screenIntro-lines").textContent.split('\n').join('');
		console.log("Ready. click on the play button.")
	}
 	
	var calcAcc = tbt.length / (tbt.length - ((acc / 100) * tbt.length))
	
	calcAcc = calcAcc.toFixed(0)
	
	var speed = calcAcc.toString()
	var re;
	if (acc == 100){
	    tbt = tbt;
	}
	
	else{
	re = new RegExp(`.{1,${speed}}`, 'g');
	    tbt = tbt.match(re).join(u34ha);
	    
	}
	
   
  let elementText =  tbt;
 
  copyText(elementText); 
}

// to cleepbored
function copyText(text) {
  navigator.clipboard.writeText(text);
}

}
// call
myFunction()
//setTimeout(myFunction, 1000)


});









// === === === === === === === === ++


/* ... for 10fastfingers ++
   ... works ++

*/


	
	
	
function waitForTFF(tffw, tffctf){
    var tfftt = setInterval(function(){
        if(document.querySelector("#reload-box")){
            clearInterval(tfftt);
            tffctf();
        }
    }, 100);
}

if (location.hostname == "10fastfingers.com"){
	window.onload = blue()
}
function blue(){
setTimeout(function(){
	console.log("Ready")
waitForTFF("tffwOfElementToWaitFor", function(){

  	function myFunction(elementID) {
	
  let tbt = document.querySelector("#row1").textContent;
  //console.log("text length: " + tbt.length)
  
	var calcAcc = tbt.length / (tbt.length - ((acc / 100) * tbt.length))
	
	calcAcc = calcAcc.toFixed(0)
	var speed = calcAcc.toString()
	var re;
	
	if (acc == 100){
	    tbt = tbt;
	}
	
	else{
	re = new RegExp(`.{1,${speed}}`, 'g');
	    tbt = tbt.match(re).join(u34ha);
	    
	}
	
	
   
  let elementText =  tbt;
  //console.log(elementText)
  copyText(elementText); 
}

// to cleepbored
function copyText(text) {
  navigator.clipboard.writeText(text);
}
  
  setTimeout(function(){
setInterval(function(){
  // document.querySelectorAll(".dash-copy-input")[0].focus()
},1);
	 }, 4000)


// call
myFunction()


   
});


}, 1000)

}

 // if close



