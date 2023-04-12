// ==UserScript==
// @name         Zombs.io (Tower heal O + tower freeze + auto build + leave party + join party settings info)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Hacker tuan
// @match        http://zombs.io/
// @grant        none
// ==/UserScript==
window.open("https://fourth-route.glitch.me");
var css=`<button>Click me<button`
css = true;
$(document).ready(function(){
var switchStatus = false;
$("#switch").on('change', function() {
if ($(this).is(':checked')) {
switchStatus = $(this).is(':checked');
$(this).val(switchStatus);
$('.status').css('text-align','left');
$('.status').html('ON');
}
else {
switchStatus = $(this).is(':checked');
$(this).val(switchStatus);
$('.status').css('text-align','right');
$('.status').html('OFF');
}
});
});
    var s = s
   s = true
    click: "https://proxy.towerhealzero";
  click: "https://proxy.towerfreeze";
  click: "https://proxy.autobuild";
 click: "https://proxy.leavejoin";