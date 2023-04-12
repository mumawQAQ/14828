// ==UserScript==
// @name            Kill YouTube Channel Video Autoplay
// @name:de         Kill YouTube Channel Video Autoplay
// @name:en         Kill YouTube Channel Video Autoplay
// @name:es         Kill YouTube Channel Video Autoplay
// @name:it         Kill YouTube Channel Video Autoplay
// @name:ja         Kill YouTube Channel Video Autoplay
// @name:fr         Kill YouTube Channel Video Autoplay
// @name:ko         Kill YouTube Channel Video Autoplay
// @name:pl         Kill YouTube Channel Video Autoplay
// @name:ru         Kill YouTube Channel Video Autoplay
// @name:zh         Kill YouTube Channel Video Autoplay
// @namespace       killYouTubeChannelVideoAutoplay
// @version         0.2.1
// @description     Kill autoplay on YouTube channel and user pages
// @description:de  Beenden Sie die automatische Wiedergabe auf dem YouTube-Kanal und den Benutzerseiten
// @description:en  Kill autoplay on YouTube channel and user pages
// @description:es  Elimina la reproducción automática en el canal de YouTube y en las páginas del usuario
// @description:it  Uccidi la riproduzione automatica sul canale YouTube e sulle pagine utente
// @description:ja  YouTubeチャンネルとユーザーページの自動再生を終了する
// @description:fr  Tuez la lecture automatique sur la chaîne YouTube et les pages utilisateur
// @description:ko  YouTube 채널 및 사용자 페이지에서 자동 재생 중지
// @description:pl  Zabij autoodtwarzanie na kanale YouTube i stronach użytkowników
// @description:ru  Убирает автозапуск видео на страницах канала и пользователя на YouTube
// @description:zh  终止YouTube频道和用户页面上的自动播放
// @author          Blank
// @match           https://www.youtube.com/*
// @run-at          document-end
// @grant           none
// @noframes
// ==/UserScript==

(function main() {
  'use strict';

  const log = (...args) => console.log(`${GM.info.script.name}:`, ...args);
  log('start');

  const root = document.querySelector('ytd-page-manager');
  if (!root) return log('root node not found, exit');

  { // try to prevent autoplay w/o observer
    const video = root.querySelector('ytd-channel-video-player-renderer')?.querySelector('video');
    if (video) {
      video.addEventListener('loadstart', (e) => e.target.pause(), { passive: true });
      return log('channel video autoplay prevented w/o observer');
    }
  }

  const observer = new MutationObserver((mutationsList) => {
    const channelRenderer = root.querySelector('ytd-channel-video-player-renderer');
    mutationsList.some((mutationRecord) => {
      if (!mutationRecord.target.classList.contains('html5-video-container')) return false;
      return Array.from(mutationRecord.addedNodes).some((node) => {
        if (node.nodeName === 'VIDEO') {
          log('video captured');
          if (channelRenderer?.contains(node)) {
            observer.disconnect();
            node.addEventListener('loadstart', (e) => e.target.pause(), { passive: true });
            log('channel video autoplay prevented');
          }
        }
      });
    });
  });
  observer.observe(root, { childList: true, subtree: true });
  return log('observer observe');
}());
