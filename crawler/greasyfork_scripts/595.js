// ==UserScript==
// @name         megaupSkipADBCheck
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Skip ADB Check
// @author       HaoaW
// @match        https://megaup.net/*
// @match        http://megaup.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var downloadHtml = "<form action='https://download.megaup.net/' method='get' style='text-align: center;'>"
    +"<input id='idurl' type='hidden' name='idurl'>"
    +"<input id='idfilename' type='hidden' name='idfilename'>"
    +"<input id='idfilesize' type='hidden' name='idfilesize'>"
    +"<input id='btnsubmit' type='submit' class='btn btn-default' value='Create Download Link'>"
    +"</form>"
    ;

    function strReverse (str){
        return str.split("").reverse().join("");
    }
seconds = 0;
DeObfuscate_String_and_Create_Form_With_Mhoa_URL = null;
DeObfuscate_String_and_Create_Form_With_Mhoa_URL = function (d1, d2, FileName, FileSize) {

    let cidken = '';
    let d1p1 = d1.substring(0,d1.length/4);
    cidken += strReverse(d1p1);
    let d1p2 = d1.substring(d1.length/4*2,d1.length/4*3);
    cidken += strReverse(d1p2);
    let d2p1 = d2.substring(3,(d2.length+3)/2);
    cidken += strReverse(d2p1);

    $(".download-timer").html(downloadHtml);
    document.getElementById('idurl').setAttribute('value', cidken);
    document.getElementById("idfilename").setAttribute('value', FileName);
    document.getElementById("idfilesize").setAttribute('value', FileSize);
}
})();