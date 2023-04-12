// ==UserScript==
// @name               Scribd bypass
// @description        Script disables blur on text & add full document
// @author             BAlexGG
// @version            1.0
// @license            MIT
// @namespace          https://greasyfork.org/ru/users/938036-bull-yt
// @match              *://*.scribd.com/*
// @icon               https://s-f.scribdassets.com/favicon.ico
// @require            https://code.jquery.com/jquery-3.6.3.min.js
// ==/UserScript==
/* eslint-env jquery */
$(document).ready(function(){
    'use strict';
    if (window.location.href.match(/document\/(\d+)\//) == null) return;
    //Remove blocks between pages
    $('div.between_page_module').remove();

    //Remove banners on pages
    $('div.auto__doc_page_webpack_doc_page_blur_promo').remove();

    // Remove blur
    $('div.newpage div.text_layer').css('text-shadow', 'black 0px 0px 0px');

    // Remove unselectable attribute
    $('[unselectable]').removeAttr('unselectable');

    // Remove blurred_page class
    $('.blurred_page').removeClass('blurred_page');

    // Add button to view fill document
    var id = window.location.href.match(/document\/(\d+)\//)[1];
    var key, maxpages;
    fetch('https://ru.scribd.com/doc-page/embed-modal-props/' + id)
        .then(response => response.json())
        .then(data => {
            key = data.access_key;
            maxpages = data.page_count;
        })
        .catch(error => console.error(error));

	// Create a new <style> element and append it to the <head> of the document
	const styleElement = document.createElement('style');
	styleElement.innerHTML = `.red-button {
	    background-color: red;
	    color: white;
	    border: none;
	    padding: 10px 20px;
	    font-size: 16px;
	    cursor: pointer;
        border-radius: 10px;
        margin-top: 0;
	}`;
	document.head.appendChild(styleElement);
	// Create a button element
	var button = $("<button/>")
	    .text("~ View Full Document ~")
	    .addClass("red-button")
	    .click(function() {
	        window.location.href = window.location.origin + "/embeds/" + id + "/content?start_page=1&view_mode=scroll&access_key=" + key;
	    });
	$(".doc_actions").append(button);
})();