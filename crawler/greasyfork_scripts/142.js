// ==UserScript==
// @name            Rai Play video download
// @namespace       http://andrealazzarotto.com
// @version         11.3.2
// @description     This script allows you to download videos on Rai Play
// @description:it  Questo script ti permette di scaricare i video su Rai Play
// @author          Andrea Lazzarotto
// @match           https://www.raiplay.it/*
// @match           https://www.rainews.it/*
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/foundation-essential/6.2.2/js/foundation.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// @require         https://unpkg.com/@ungap/from-entries@0.1.2/min.js
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @connect         rai.it
// @connect         akamaized.net
// @connect         akamaihd.net
// @connect         msvdn.net
// @license         GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==

var instance;

/* Greasemonkey 4 wrapper */
if (typeof GM !== "undefined" && !!GM.xmlHttpRequest) {
    GM_xmlhttpRequest = GM.xmlHttpRequest;
}

function fetch(params) {
    return new Promise(function(resolve, reject) {
        params.onload = resolve;
        params.onerror = reject;
        GM_xmlhttpRequest(params);
    });
}

(function() {
    'use strict';

    var Foundation = window.Foundation;
    var download_icon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42 40v4H6v-4h36zM20 24v-8h8v8h7L24 37 13 24h7zm8-14v4h-8v-4h8zm0-6v4h-8V4h8z" /></svg>';

    var showModal = (title, content) => {
        if (instance) {
            instance.close();
        }
        var modal = $(`
            <div id="video-download-modal" class="small reveal" data-reveal aria-labelledby="Download video">
                <h2 id="modal-title">${title}</h2>
                <div id="modal-content"></div>
                <button class="close-button" data-close aria-label="Chiudi finestrella" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
        modal.css({
            'padding': '2rem',
            'background-color': '#001623',
        });
        modal.find('#modal-content').append(content);
        instance = new Foundation.Reveal(modal);
        instance.open();
        modal.find('.close-button').css({
            'color': 'white',
        }).click(() => instance.close());
        // Prevent fullscreen issues
        $(".vjs-fullscreen-control:contains('Exit')").click();
    };

    var checkQuality = (url, rate) => {
        return fetch({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'raiweb',
                'Range': 'bytes=0-255',
            },
        }).then(
            (response) => {
                let headers = fromEntries(response.responseHeaders.split("\n").map(element => element.trim().toLowerCase().split(":")));
                let range = headers['content-range'] || '/0';
                let size = +(range.split('/').slice(1,)[0] || 0);
                let megabytes = Math.round(size / 1024 / 1024);
                if (size > 102400) {
                    return { quality: rate, url: url, megabytes: megabytes };
                } else {
                    return null;
                }
            },
            () => null
        );
    }

    var qualities = async (url) => {
        let bases = [];
        let rates = [5000, 3200, 2401, 2400, 1800, 1500, 1200, 800, 600, 400];
        if (url.indexOf('.m3u8') > 0) {
            let parts = url.replace(/\?.*/, '').split(',');
            // Verify all the rates
            const new_rates = parts.slice(1).map(value => value.replace(/\/.*/, '')).reverse().filter(value => !isNaN(value));
            // Handle single rate case
            if (new_rates.length) {
                rates = new_rates;
            } else {
                let rate = url.split('.mp4')[0].split('_').slice(-1)[0];
                rates = [rate];
            }
            const path = parts[0];
            let servers = [
                'creativemedia1-rai-it.akamaized.net',
                'creativemedia2-rai-it.akamaized.net',
                'creativemedia3-rai-it.akamaized.net',
                'creativemedia4-rai-it.akamaized.net',
                'creativemedia6-rai-it.akamaized.net',
                'creativemedia7-rai-it.akamaized.net',
                'creativemedia8-rai-it.akamaized.net',
                'creativemedia9-rai-it.akamaized.net',
                'download2.rai.it',
                'download2-geo.rai.it',
                'creativemediax1.rai.it',
                'creativemediax2.rai.it',
            ];
            let file_path;
            if (path.indexOf('akamaized.net') > 0 || path.indexOf('akamaihd.net') > 0) {
                const path_parts = path.split('.net/');
                file_path = '/' + path_parts[1];
            } else {
                const path_parts = path.split('msvdn.net/');
                const first = path_parts[1].replace(/^[^0-9]+/, '');
                file_path = first.slice(1);
            }
            // Fix the "/i/" prefix
            if (file_path.slice(0, 3) === '/i/') {
                file_path = file_path.slice(2);
            }
            // Fix the "/VOD/" prefix
            if (file_path.slice(0, 5) === '/VOD/') {
                file_path = '/podcastcdn' + file_path.slice(4);
            }
            console.log(file_path);
            file_path = file_path.replace(/_[1-9]+0+[01]\.mp4.*/, '_');
            if (file_path.indexOf('.mp4') > 0) {
                file_path = file_path.replace(/\.mp4.*/, '');
                rates = [''];
            }
            bases = servers.map(server => {
                return `http://${server}${file_path}${rates[0]}.mp4`;
            });
            console.log(bases);
        } else {
            bases.push(url);

            var ending = url.match(/_[1-9]+0+[01]\.mp4/);
            if (!ending || !ending.length) {
                let result = await checkQuality(url, '');
                return [result].filter(value => (value !== null));
            }
        }

        let promises = [];
        bases.forEach(url => {
            var promise = Promise.all(rates.map(rate => {
                var quality_url = url.replace(/_[1-9]+0+[01]\.mp4/, `_${rate}.mp4`);
                return checkQuality(quality_url, rate);
            }));
            promises.push(promise);
        });
        const groups = await Promise.all(promises);
        for (let i = 0; i < groups.length; i++) {
            const filtered = groups[i].filter(value => (value !== null));
            if (filtered.length) {
                return filtered;
            }
        }

        return [];
    };

    var DRMError = () => {
        showModal('Niente da fare...', "<p>Non è stato possibile trovare un link del video in formato MP4. Il video sembra essere protetto da DRM.</p>");
    };

    var resolveRelinker = (relinker) => {
        return fetch({
            method: 'HEAD',
            url: relinker,
            headers: {
                'User-Agent': 'raiweb',
            },
        }).then(
            (response) => {
                let final = response.finalUrl;
                let valid = (final.indexOf('mp4') > 0 || final.indexOf('.m3u8') > 0) && final.indexOf('DRM_') < 0;
                if (!valid) {
                    DRMError();
                } else {
                    qualities(response.finalUrl).then(results => {
                        if (!results.length) {
                            showModal('Errore sconosciuto', "<p>Non è stato possibile trovare un link del video in formato MP4.</p>");
                            return;
                        }

                        var buttons = '';
                        results.forEach(video => {
                            buttons += `<a href="${video.url}" class="button" target="_blank">MP4 ${video.quality} (${video.megabytes} MB)</a>`;
                        });

                        showModal('Link diretti', `
                                <p>Clicca su una opzione per aprire il video in formato MP4. Usa il tasto destro del mouse per salvarlo, oppure copiare il link.</p>
                                <p><strong>Per evitare interruzioni è raccomandato l'uso di un download manager.</strong></p>
                                <p>${buttons}</p>`);
                    });
                }
            },
            (response) => {
                var drm = response.finalUrl.indexOf('DRM_') > 0 || response.status === 0;
                if (drm) {
                    DRMError();
                } else {
                    showModal('Errore di rete', "<p>Si è verificato un errore di rete. Riprova più tardi.</p>");
                }
            }
        );
    }

    var getVideo = () => {
        showModal('Attendere', '<p>Sto elaborando...</p>');

        var path = location.href.replace(/\.html(\?.*)?$/, '.json');
        $.getJSON(path).then((data) => {
            var secure = data.video.content_url.replace('http://', 'https://');
            return resolveRelinker(secure);
        });
    };

    var getRaiNewsVideo = (relinker) => {
        showModal('Attendere', '<p>Sto elaborando...</p>');
        return resolveRelinker(relinker);
    };

    var downloadButton = (container, action) => {
        if (container.find('.video-download-button').length) {
            return;
        }

        container.find('.vjs-custom-control-spacer').after(`
            <button class="video-download-button vjs-control vjs-button" aria-disabled="false">
                <span aria-hidden="true" class="vjs-icon-placeholder">${download_icon}</span>
                <span class="vjs-control-text" aria-live="polite">Download</span>
            </button>
        `);
        container.find('.video-download-button').css({
            'order': 110,
        }).click(action).find('svg').css({
            'fill': '#039cf9',
            'height': '1.5em',
        });
    };

    $(document).arrive('rai-player .vjs-custom-control-spacer', (element) => {
        var container = $(element).parent();
        downloadButton(container, getVideo);
    });

    $(document).arrive('rainews-player .vjs-custom-control-spacer', (element) => {
        let container = $(element).parent();
        let player = container.closest('rainews-player');
        let relinker = JSON.parse(player.attr("data")).mediapolis;
        downloadButton(container, () => {
            getRaiNewsVideo(relinker);
        });
    });

    var isAnon = function() {
        return !!$('#accountPanelLoginPanel').is(':visible');
    };

    $(document).ready(() => {
        if (location.pathname.startsWith('/video')) {
            $('rai-sharing').after(`
                <a id="inline-download-button" class="cell small-4 medium-shrink highlight__share" aria-label="Download">
                    <div class="leaf__share__button button button--light-ghost button--circle float-center">${download_icon}</div>
                    <span class="button-label">Download</span>
                </a>
            `);
            $('#inline-download-button').click(getVideo);
        }

        $('body').on('touchstart mousedown', 'a.card-item__link', (event) => {
            if (isAnon() && event.which !== 3) {
                location.href = $(event.currentTarget).attr('href');
            }
        });

        $('body').on('touchstart mousedown', 'button[data-video-json]', (event) => {
            if (isAnon() && event.which !== 3) {
                location.href = $(event.currentTarget).data('video-json').replace(/\.json/, '.html');
            }
        });
    });
})();