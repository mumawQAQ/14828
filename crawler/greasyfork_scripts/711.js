// ==UserScript==
// @name         YouTube Web Tweaks
// @version      2.6.1
// @description  This script optimizes YouTube's performance by modifying configs, shorts redirect and much more!
// @author       Magma_Craft
// @license MIT
// @match        *://www.youtube.com/*
// @namespace    https://greasyfork.org/en/users/933798
// @icon         https://www.youtube.com/favicon.ico
// @unwrap
// @run-at document-start
// @grant        none
// ==/UserScript==

// Modifiying yt.config flags to optimize loading times and disables animations
(function() {
    window['yt'] = window['yt'] || {};
    yt['config_'] = yt.config_ || {};
    yt.config_['EXPERIMENT_FLAGS'] = yt.config_.EXPERIMENT_FLAGS || {};

    var iv = setInterval(function() {
        yt.config_.IS_TABLET = true;
        yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true;
        yt.config_.EXPERIMENT_FLAGS.polymer_verifiy_app_state = false;
        yt.config_.EXPERIMENT_FLAGS.warm_load_nav_start_web = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_player_response_swf_config_wrapper_killswitch = false;
        yt.config_.EXPERIMENT_FLAGS.desktop_delay_player_resizing = false;
        yt.config_.EXPERIMENT_FLAGS.desktop_player_touch_gestures = false;
        yt.config_.EXPERIMENT_FLAGS.web_animated_like = false;
        yt.config_.EXPERIMENT_FLAGS.web_animated_like_lazy_load = false;
        yt.config_.EXPERIMENT_FLAGS.render_unicode_emojis_as_small_images = true;
        yt.config_.EXPERIMENT_FLAGS.kevlar_refresh_on_theme_change = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_cinematics = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_comments_panel_button = true;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_hide_comments_while_panel_open = true;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_comments_ep_disable_theater = false;
    }, 1);

    var to = setTimeout(function() {
        clearInterval(iv);
    }, 1000)
})();

// Redirect shorts to watch page (Anti-Shorts script is required for faster experience)
var oldHref = document.location.href;
if (window.location.href.indexOf('youtube.com/shorts') > -1) {
    window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
}
window.onload = function() {
    var bodyList = document.querySelector("body")
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;
                console.log('location changed!');
                if (window.location.href.indexOf('youtube.com/shorts') > -1) {
                    window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
                }
            }
        });
    });
    var config = {
        childList: true,
        subtree: true
    };
    observer.observe(bodyList, config);
};

// CSS adjustments and other tweaks to apply (including removal of ads)
(function() {
ApplyCSS();

function ApplyCSS() {
var styles = document.createElement("style");
styles.innerHTML=`
/* Remove 'Learning, Fashion and Podcasts' tab from the sidebar menu */
ytd-guide-entry-renderer > a[href*="/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"] {
display: none !important;
}
ytd-guide-entry-renderer > a[href*="/channel/UCtFRv9O2AHqOZjjynzrv-xg"] {
display: none !important;
}
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="Podcasts"] {
display: none !important;
}

/* Remove 'YouTube Kids' and 'YouTube TV' tabs from the 'More from YouTube' sidebar menu */
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="YouTube Kids"] {
display: none !important;
}
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="YouTube TV"] {
display: none !important;
}

/* Remove 'YouTube Music' tab if users have YouTube Premium */
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer.style-scope[title="YouTube Music"] {
display: none !important;
}

#endpoint.yt-simple-endpoint.ytd-mini-guide-entry-renderer.style-scope[title="YouTube Music"] {
display: none !important;
}

/* Remove ads and annoyances */
#player-ads,
.adDisplay,
.ad-container,
.ytd-display-ad-renderer,
.video-ads,
#masthead-ad {
display: none !important;
}

ytd-promoted-video-renderer.style-scope.ytd-in-feed-ad-layout-renderer {
display: none !important;
}

.ytd-mealbar-promo-renderer {
display: none !important;
}`
document.head.appendChild(styles);
}
})();

let video

const observer = new MutationObserver(mutations => {
	for(const mutation of mutations) {
		for(const addedNode of mutation.addedNodes) {
			if(addedNode.className && (addedNode.classList.contains("ytp-ad-skip-button-slot") || addedNode.classList.contains("ytp-ad-overlay-close-button"))) {
				console.log("ytp-ad")
				addedNode.click()
			} else if(addedNode.className && addedNode.classList.contains("ad-showing")) {
				console.log("ad-showing")
				if(!isNaN(video.duration)) {
					video.play()
					video.currentTime = video.duration
				}
			} else if(addedNode.tagName === "VIDEO" && addedNode.classList.contains("html5-main-video")) {
				console.log("video")
				video = addedNode
				video.addEventListener("durationupdate", () => {
					console.log("durationupdate")
					video.play()
					video.currentTime = video.duration
				})
				video.addEventListener("timeupdate", () => {
					const adSkipButton = document.querySelector(".ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button")
					if(adSkipButton) {
						adSkipButton.click()
					}
					if(document.querySelector(".ad-showing")) {
						if(!isNaN(video.duration)) {
							video.play()
							video.currentTime = video.duration
						}
					}
				})
			}
		}
	}
})

observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true })
var interval = setInterval(function() {
    window.wrappedJSObject._lact = Date.now();
}, 300000);