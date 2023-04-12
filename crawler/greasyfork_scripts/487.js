// ==UserScript==
// @name        YouTube to MP3 Converter & Video Downloader - TubeMP3.to
// @namespace   https://tubemp3.to
// @version     1.5.3
// @author      TubeMP3
// @description UserScript Downloads YouTube Videos to MP3 and MP4.
// @copyright   2023, TubeMP3.to
// @icon        https://tubemp3.to/app/Templates/default/assets/img/icons/favicon-96x96.png
// @icon64      https://tubemp3.to/app/Templates/default/assets/img/icons/favicon-96x96.png
// @homepage    https://tubemp3.to
// @connect-src youtube.com
// @match       *://www.youtube.com/*
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @resource    customCSS https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css
// @require 	https://code.jquery.com/jquery-2.2.4.min.js
// @require 	https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js
// @run-at      document-end
// ==/UserScript==


console.debug('start: add CSS');
var cssTxt = GM_getResourceText("customCSS");
//GM_addStyle (cssTxt);
console.debug('done: add CSS');

if("undefined" == typeof (mp3youtube)) {
	var mp3youtube = {
		// Add Your Domain HERE
		baseUrl: 'https://tubemp3.to',

		// CHANGE CODE BELOW AT YOUR OWN RISK (NOT Recommended!)
		currentMediaUrl: null,

		init: function(){
		mp3youtube.onPageLoad();
		},

		addButtons: function(document){
			if(document.URL.match('youtube.com/') && new RegExp('v=[a-zA-Z0-9-_]{11}').exec(document.URL)){
				var YTID = RegExp.lastMatch.substr(2);

				// Add Button
				var newDesign = $('#meta-contents');

				if(newDesign) {

                    var addButtonBig = $(`
						<div class="style-scope ytd-watch-metadata" id="mp3youtube" style="">
							<button class="yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" style="padding: 10px;margin:10px;">
                            <a class="style-scope ytd-subscribe-button-renderer text-white" style="text-decoration:none; color: green;padding-left:3px; padding-right:3px" target="_blank" href="`+ mp3youtube.baseUrl+ `/https://youtu.be/`+ YTID +`"><i class="fas fa-download"></i> Download</a>
						</div>
					`);

                    var subscribeBtn = document.querySelector("#subscribe-button")
                    subscribeBtn.parentNode.insertBefore(addButtonBig[0], subscribeBtn)

				}
			}
		},

		onPageLoad: function() {
			if(document.body && document.domain == 'www.youtube.com'){
				setInterval(mp3youtube.check, 1000);
				mp3youtube.check();
			}
		},

		check: function() {
			if(mp3youtube.currentMediaUrl != document.URL  && typeof ytplayer != 'undefined' && ytplayer) {
				// new video detected
				mp3youtube.currentMediaUrl = document.URL;

				if($('#mp3youtube')) {
					$('#mp3youtube').remove()
				}
			}

			if($("#meta-contents")[0] && !$('#mp3youtube')[0] && typeof ytplayer != 'undefined' && ytplayer){
				mp3youtube.addButtons(document);
			}
		},
	};
}
mp3youtube.init();
