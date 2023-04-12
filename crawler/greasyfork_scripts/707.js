// ==UserScript==
// @name        YouTube Volume Curve Designer
// @name:ja     YouTube Volume Curve Designer
// @name:zh-CN  YouTube Volume Curve Designer
// @namespace   knoa.jp
// @description Customize the volume increasing curve for subtle sound tweaks and maximum volume boosts.
// @description:ja 音量の増加曲線をカスタマイズして、繊細な音の微調整や最大音量の引き上げを実現します。
// @description:zh-CN 自定义音量增加曲线，以实现细腻的声音微调和最大音量提升。
// @include     https://www.youtube.com/*
// @include     https://www.youtube.com/embed/*
// @include     https://www.youtube-nocookie.com/embed/*
// @include     https://music.youtube.com/*
// @exclude     https://www.youtube.com/live_chat*
// @exclude     https://www.youtube.com/live_chat_replay*
// @version     2.0.5
// @grant       none
// ==/UserScript==

(function(){
  const SCRIPTID = 'YouTubeVolumeCurveDesigner';
  const SCRIPTNAME = 'YouTube Volume Curve Designer';
  const DEBUG = false;/*
[update]
Minor fix.

[bug]

[todo]

[possible]
公式スライダをコピーしてからエミュレートすれば長いスライダに置換できるかな
広告とプレミア公開のカウントダウンにだけ別のゲイン値を設定？
複数タブ間のStorage経由同期？音量の同期は予期されていない

[research]
ABEMA: audio要素(チャンネルによって違いうる？), ビデオはvideoぽい
YouTube, Twitch, Vimeo, Dailymotion, Netflix, Amazon, Hulu
Niconico, ABEMA, OPENREC, SHOWROOM
bilibili, IQiyi, Youku

[memo]
YouTubeはノーマライズ(ゲイン調整)してる。100%の表示でも実際の video.volume は 0.5 だったりする。音楽で特に顕著。
  そのため、YouTubeが表示用の音量として用意している ['aria-valuenow'] が必要。
YouTubeは直接音量0にするとミュートがオンになってvideo.volume自体は元の数値を保持したままとなる。
CPU使用率は Mac (Intel Core i7-3740QM) の coreaudiod で +1/800% ちょい。

Thanks to:
https://stackoverflow.com/questions/43794356/html5-volume-increase-past-100
Encouraged by:
https://www.dr-lex.be/info-stuff/volumecontrols.html
  */
  if(window === top && console.time) console.time(SCRIPTID);
  const MS = 1, SECOND = 1000*MS, MINUTE = 60*SECOND, HOUR = 60*MINUTE, DAY = 24*HOUR, WEEK = 7*DAY, MONTH = 30*DAY, YEAR = 365*DAY;
  const VIDEOVIEWS = [
    /^https:\/\/www\.youtube\.com\/(channel|c|user)\/[^/]+(\?.+)?$/,
    /^https:\/\/www\.youtube\.com\/(channel|c|user)\/[^/]+\/live(\?.+)?$/,
    /^https:\/\/www\.youtube\.com\/watch\?/,
    /^https:\/\/www\.youtube\.com\/embed\//,
    /^https:\/\/www\.youtube-nocookie\.com\/embed\//,
    /^https:\/\/music\.youtube\.com\/watch\?/,
  ];
  const CHARTUNIT = 3;/* px per 1/100 of max volume */
  const site = {
    targets: {
      title: () => $('title'),
    },
    videoTargets: {
      video: () => $('video'),
    },
    controlTargets: {
      /* YouTube || YouTube Music */
      chromeBottom: () => $('.ytp-chrome-bottom') || $('ytmusic-player-bar'),
      muteButton: () => $('button.ytp-mute-button') || $('paper-icon-button.volume'),
      volumePanel: () => $('.ytp-volume-panel[aria-valuenow]') || $('#volume-slider'),
      volumeSlider: () => $('.ytp-volume-slider') || $('#progressContainer'),
      volumeSliderHandle: () => $('.ytp-volume-slider-handle') || $('#sliderKnob .slider-knob-inner'),
    },
    get: {
      volumeNow: (volumePanel) => volumePanel ? parseFloat(volumePanel.attributes['aria-valuenow'].value) : 100,
      tooltipText: () => $('.ytp-tooltip-text'),/* black tooltip */
    },
    showVolumeSlider: (chromeBottom) => chromeBottom.classList.add('ytp-volume-slider-active'),
    hideVolumeSlider: (chromeBottom) => chromeBottom.classList.remove('ytp-volume-slider-active'),
  };
  class Configs{
    constructor(configs){
      Configs.PROPERTIES = {
        enable:   {type: 'bool',  default: 1  },
        gain:     {type: 'float', default: 2.0},
        exponent: {type: 'float', default: 2.0},
      };
      this.data = this.read(configs || {});
      /* use Proxy for flexibility */
      return new Proxy(this, {
        get: function(configs, field){
          if(field in configs) return configs[field];
        }
      });
    }
    read(configs){
      let newConfigs = {};
      Object.keys(Configs.PROPERTIES).forEach(key => {
        if(configs[key] === undefined) return newConfigs[key] = Configs.PROPERTIES[key].default;
        switch(Configs.PROPERTIES[key].type){
          case('bool'):  return newConfigs[key] = (configs[key]) ? 1 : 0;
          case('int'):   return newConfigs[key] = parseInt(configs[key]);
          case('float'): return newConfigs[key] = parseFloat(configs[key]);
          default:       return newConfigs[key] = configs[key];
        }
      });
      return newConfigs;
    }
    toJSON(){
      let json = {};
      Object.keys(this.data).forEach(key => {
        json[key] = this.data[key];
      });
      return json;
    }
    set enable(enable){this.data.enable = enable;}
    set gain(gain){this.data.gain = gain;}
    set exponent(exponent){this.data.exponent = exponent;}
    get enable(){return this.data.enable;}
    get gain(){return this.data.gain;}
    get exponent(){return this.data.exponent;}
  }
  let elements = {}, timers = {}, sizes = {}, panels, configs, gainNode;
  const core = {
    initialize: function(){
      elements.html = document.documentElement;
      elements.html.classList.add(SCRIPTID);
      text.setup(texts, document.documentElement.lang);
      core.ready();
      core.addStyle('style');
      core.addStyle('panelStyle');
    },
    ready: function(){
      core.getTargets(site.targets).then(() => {
        log("I'm ready.");
        panels = new Panels(document.body.appendChild(createElement(html.panels())));
        core.readyForVideos();
        core.observeTitle();
      }).catch(e => {
        console.error(`${SCRIPTID}:${e.lineNumber} ${e.name}: ${e.message}`);
      });
    },
    readyForVideos: function(){
      if(VIDEOVIEWS.some(view => view.test(location.href)) === false) return;
      /* on ads, the video element is just change its src attribute */
      core.getTargets(site.videoTargets).then(() => {
        log("I'm ready for the video.", elements.video);
        configs = new Configs(Storage.read('configs') || {});
        core.createGain();
        core.listenVolumeChange();
        core.getTargets(site.controlTargets).then(() => {
          log("I'm ready for the video control.");
          core.configs.createButton();
          core.configs.createPanel();
          core.updateVolume(configs.gain, configs.exponent);
          core.addIndicationOnMuteButton();
          core.getVolumeSliderWidth();
        }).catch(e => {
          console.error(`${SCRIPTID}:${e.lineNumber} ${e.name}: ${e.message}`);
        });
      }).catch(e => {
        console.error(`${SCRIPTID}:${e.lineNumber} ${e.name}: ${e.message}`);
      });
    },
    observeTitle: function(){
      let url = location.href;
      observe(elements.title, function(records){
        setTimeout(() => {
          if(url === location.href) return;
          else url = location.href;
          panels.hide('configs');
          core.readyForVideos();
        }, 1000);
      }, {childList: true, characterData: true, subtree: true});
    },
    addIndicationOnMuteButton: function(){
      let muteButton = elements.muteButton, tooltipText = site.get.tooltipText();
      if(muteButton.listeningMouseOver) return;
      if(tooltipText === null) return;
      muteButton.listeningMouseOver = true;
      muteButton.addEventListener('mouseover', function(e){
        animate(function(){
          tooltipText.appendChild(document.createElement('br'));
          tooltipText.appendChild(document.createTextNode(text('or Right Click...')));
        });
      });
    },
    getVolumeSliderWidth: function(){
      /* やむなくクラス操作で表示させてから実測する */
      let volumeSlider = elements.volumeSlider, chromeBottom = elements.chromeBottom;
      let transitionElement = volumeSlider.parentNode;
      transitionElement.style.transition = 'none';/*アニメーション途中で計測しない*/
      site.showVolumeSlider(chromeBottom);
      volumeSlider.style.transform = '';
      let timer = setInterval(function(){
        let rect = volumeSlider.getBoundingClientRect();
        if(rect.x === 0 || rect.width === 0) return setTimeout(core.configs.getVolumeSliderWidth, 1000);
        /* 小数点が含まれるとマウスクリックのズレが解消できない */
        volumeSlider.style.transform = `translateX(-${rect.x%1}px)`;
        sizes.volumeSliderWidth = rect.width;
        //log('transform:', volumeSlider.style.transform, 'volumeSliderWidth:', sizes.volumeSliderWidth);
        transitionElement.style.transition = '';/*transitionendめんどい*/
        site.hideVolumeSlider(chromeBottom);
        clearInterval(timer);
      }, 1000);
      if(window.listeningResize) return;
      window.listeningResize = true;
      window.addEventListener('resize', function(e){
        clearTimeout(timers.getVolumeSliderWidth);
        timers.getVolumeSliderWidth = setTimeout(core.configs.getVolumeSliderWidth, 1000);
      });
    },
    createGain: function(){
      let video = elements.video;
      if(video.gained === true) return;
      video.gained = true;
      let context = new AudioContext();
      let source = context.createMediaElementSource(video);
      gainNode = context.createGain();
      source.connect(gainNode);
      gainNode.connect(context.destination);
      /* rest the CPU on video paused */
      if(video.paused) context.suspend();
      video.addEventListener('play', e => context.resume());
      video.addEventListener('pause', e => context.suspend());
    },
    listenVolumeChange: function(){
      let video = elements.video;
      if(video.listeningVolumechange) return;
      video.listeningVolumechange = true;
      video.addEventListener('volumechange', function(e){
        core.updateVolume(configs.gain, configs.exponent);
        if(panels.hidden('configs')) return;
        core.configs.updateVolumeSlider();
        core.configs.updateChartHighlight();
      });
    },
    updateVolume: function(gain, exponent){
      if(configs.enable === 0) return gainNode.gain.value = 1;
      let video = elements.video, volumePanel = elements.volumePanel, volumeNow = site.get.volumeNow(volumePanel);
      if(video.volume === 0 || volumeNow === 0) gainNode.gain.value = 0;
      else gainNode.gain.value = (gain * ((volumeNow/100)**exponent)) / (volumeNow/100);
      log('Volume:', video.volume.toFixed(2), 'Gained volume:', (gainNode.gain.value * video.volume).toFixed(2));
    },
    configs: {
      createButton: function(){
        let muteButton = elements.muteButton;
        if(muteButton.listeningContextmenu) return;
        muteButton.listeningContextmenu = true;
        muteButton.addEventListener('contextmenu', function(e){
          e.preventDefault();
          e.stopPropagation();
          if(panels.hidden('configs')){
            core.configs.updateVolumeSlider();
            core.configs.updateChartHighlight();
          }
          panels.toggle('configs');
        });
      },
      createPanel: function(){
        let panel = elements.configPanel = createElement(html.configPanel()), items = {};
        let fieldset = elements.fieldset = panel.querySelector('fieldset.island');
        let chart = elements.chart = panel.querySelector('.chart');
        Array.from(panel.querySelectorAll('[name]')).forEach(e => items[e.name] = e);
        let gain = parseFloat(items.gain.value), exponent = parseFloat(items.exponent.value);
        /* on/off by enable checkbox */
        let initialEnable = chart.dataset.enable = configs.enable;
        items.enable.addEventListener('change', function(e){
          configs.enable = fieldset.dataset.enable = chart.dataset.enable = (items.enable.checked) ? 1 : 0;
          items.gain.disabled = items.exponent.disabled = !configs.enable;
          core.updateVolume(gain, exponent);
          core.configs.updateChartHighlight();
        });
        /* show 0.0 format and draw chart */
        items.gain.value = parseFloat(items.gain.value).toFixed(1);
        items.exponent.value = parseFloat(items.exponent.value).toFixed(1);
        core.configs.drawChart(chart, gain, exponent);
        items.gain.addEventListener('input', function(e){
          let gain = parseFloat(items.gain.value), exponent = parseFloat(items.exponent.value);
          items.gain.value = gain.toFixed(1);
          core.configs.drawChart(chart, gain, exponent);
          core.updateVolume(gain, exponent);
        });
        items.exponent.addEventListener('input', function(e){
          let gain = parseFloat(items.gain.value), exponent = parseFloat(items.exponent.value);
          items.exponent.value = exponent.toFixed(1);
          core.configs.drawChart(chart, gain, exponent);
          core.updateVolume(gain, exponent);
        });
        /* syncronize volume sliders */
        let volumeSlider = elements.volumeSlider;
        let volumeSliderHandle = elements.volumeSliderHandle;
        elements.slider = items.slider;/* for synchronizing */
        items.slider.addEventListener('input', function(e){
          let volume = parseFloat(items.slider.value);
          let rect = volumeSlider.getBoundingClientRect(), radius = volumeSliderHandle.getBoundingClientRect().width / 2;
          if(location.host === 'music.youtube.com') radius = 0;/* special definition!! different slider style!! */
          let options = {
            clientX: rect.x + radius + ((sizes.volumeSliderWidth - radius*2) * (volume/100)),
            clientY: rect.y + (rect.height/2),
            bubbles: true,
          };
          volumeSlider.dispatchEvent(new MouseEvent('mousedown', options));
          volumeSlider.dispatchEvent(new MouseEvent('mouseup', options));
        });
        /* cancel */
        panel.querySelector('button.cancel').addEventListener('click', function(e){
          configs.enable = initialEnable;/* restore */
          panels.hide('configs');
          core.configs.createPanel();/*clear*/
          core.updateVolume(configs.gain, configs.exponent);
        });
        /* save */
        panel.querySelector('button.save').addEventListener('click', function(e){
          configs = new Configs({
            enable:   items.enable.checked,
            gain:     items.gain.value,
            exponent: items.exponent.value,
          });
          Storage.save('configs', configs.toJSON());
          panels.hide('configs');
          core.configs.createPanel();/*clear*/
          core.updateVolume(configs.gain, configs.exponent);
        });
        panels.add('configs', panel);
        draggable(panel);
      },
      drawChart: function(chart, gain, exponent){
        let originalBars = elements.originalBars = chart.querySelectorAll('dl.original dd');
        let gainedBars = elements.gainedBars = chart.querySelectorAll('dl.gained dd');
        originalBars.forEach(dd => {
          let level = parseInt(dd.previousElementSibling.textContent) / 100;
          dd.style.width = `calc(((${level} / ${gain})*100)*${CHARTUNIT}px)`;
          dd.style.textIndent = `calc(((${level} / ${gain})*100)*${CHARTUNIT}px + 2px)`;
        });
        gainedBars.forEach(dd => {
          let level = parseInt(dd.previousElementSibling.textContent) / 100;
          let volume = ((level**exponent) * gain * 100).toFixed(1).split(/(?=\.)/);
          dd.textContent = volume[0];
          if(0 < level && parseInt(volume[0]) < 10) dd.append(createElement(`<span class="decimal">${volume[1]}</span>`));
          dd.style.width = `calc(((${level**exponent})*100)*${CHARTUNIT}px)`;
          dd.style.textIndent = `calc(((${level**exponent})*100)*${CHARTUNIT}px + 2px)`;
        });
      },
      updateVolumeSlider: function(){
        let slider = elements.slider;/* on the config panel */
        if(document.activeElement === slider) return;
        let video = elements.video;
        let volumePanel = elements.volumePanel, volumeNow = site.get.volumeNow(volumePanel);
        if(video.muted) slider.value = 0;
        else slider.value = volumeNow;
      },
      updateChartHighlight: function(){
        let video = elements.video;
        let volumePanel = elements.volumePanel, volumeNow = site.get.volumeNow(volumePanel);
        let chart = elements.chart, terms = chart.querySelectorAll(configs.enable ? 'dl.gained dt' : 'dl.original dt');
        for(let i = 0, lastIndex = terms.length - 1, dt, filled = false; dt = terms[i]; i++){
          switch(true){
            case(filled):
            case(video.muted):
              if(dt.classList.contains('fill')) dt.classList.remove('fill');
              break;
            case(parseInt(dt.textContent) <= volumeNow):
            case(i === lastIndex && volumeNow === 100):
              if(!dt.classList.contains('fill')) dt.classList.add('fill');
              break;
            case(volumeNow <= parseInt(dt.textContent)):
            default:
              filled = true;
              if(dt.classList.contains('fill')) dt.classList.remove('fill');
              break;
          }
        }
      },
    },
    getTarget: function(selector, retry = 10, interval = 1*SECOND){
      const key = selector.name;
      const get = function(resolve, reject){
        let selected = selector();
        if(selected && selected.length > 0) selected.forEach((s) => s.dataset.selector = key);/* elements */
        else if(selected instanceof HTMLElement) selected.dataset.selector = key;/* element */
        else if(--retry) return log(`Not found: ${key}, retrying... (${retry})`), setTimeout(get, interval, resolve, reject);
        else return reject(new Error(`Not found: ${selector.name}, I give up.`));
        elements[key] = selected;
        resolve(selected);
      };
      return new Promise(function(resolve, reject){
        get(resolve, reject);
      });
    },
    getTargets: function(selectors, retry = 10, interval = 1*SECOND){
      return Promise.all(Object.values(selectors).map(selector => core.getTarget(selector, retry, interval)));
    },
    addStyle: function(name = 'style'){
      if(html[name] === undefined) return;
      let style = createElement(html[name]());
      document.head.appendChild(style);
      if(elements[name] && elements[name].isConnected) document.head.removeChild(elements[name]);
      elements[name] = style;
    },
  };
  const texts = {
    'or Right Click...': {
      en: () => `or Right Click...`,
      ja: () => `または右クリック...`,
      zh: () => `或右键单击...`,
    },
    '${SCRIPTNAME}': {
      en: () => `${SCRIPTNAME}`,
      ja: () => `${SCRIPTNAME}`,
      zh: () => `${SCRIPTNAME}`,
    },
    '${SCRIPTNAME} preferences': {
      en: () => `${SCRIPTNAME} preferences`,
      ja: () => `${SCRIPTNAME} 設定`,
      zh: () => `${SCRIPTNAME} 设定`,
    },
    'Volume curve design': {
      en: () => `Volume curve design`,
      ja: () => `音量カーブ設計`,
      zh: () => `音量曲线设计`,
    },
    'Enable': {
      en: () => `Enable`,
      ja: () => `有効にする`,
      zh: () => `使之有效`,
    },
    'Gain': {
      en: () => `Gain`,
      ja: () => `ゲイン`,
      zh: () => `增量`,
    },
    'Exponent': {
      en: () => `Exponent`,
      ja: () => `冪数`,
      zh: () => `幂数`,
    },
    'volume × G': {
      en: () => `volume × G`,
      ja: () => `音量 × G`,
      zh: () => `音量 × G`,
    },
    'volume<sup>E</sup>': {
      en: () => `volume<sup>E</sup>`,
      ja: () => `音量<sup>E</sup>`,
      zh: () => `音量<sup>E</sup>`,
    },
    'Try on this video': {
      en: () => `Try on this video`,
      ja: () => `この動画の音量で試す`,
      zh: () => `尝试这个视频的音量`,
    },
    'Actual volume(%)': {
      en: () => `Actual volume(%)`,
      ja: () => `実際の音量(%)`,
      zh: () => `实际的音量(%)`,
    },
    'Cancel': {
      en: () => `Cancel`,
      ja: () => `キャンセル`,
      zh: () => `取消`,
    },
    'Save': {
      en: () => `Save`,
      ja: () => `保存`,
      zh: () => `保存`,
    },
  };
  const html = {
    panels: () => `<div class="panels" id="${SCRIPTID}-panels" data-panels="0"></div>`,
    configPanel: () => `
      <div class="panel" id="${SCRIPTID}-configPanel" data-order="1">
        <h1>${text('${SCRIPTNAME} preferences')}</h1>
        <fieldset class="island">
          <legend>${text('Volume curve design')}</legend>
          <p><label for="config-enable">${text('Enable')}:</label><input type="checkbox" name="enable" id="config-enable" value="1" ${configs.enable ? 'checked' : ''}></p>
          <p class="sub"><label for="config-gain" >${text('Gain')       }<small>(${text('volume × G')        })</small>:</label><input type="number" name="gain"     id="config-gain"     value="${configs.gain}"     min="1.0" max="8.0" step="0.1"></p>
          <p class="sub"><label for="config-exponent">${text('Exponent')}<small>(${text('volume<sup>E</sup>')})</small>:</label><input type="number" name="exponent" id="config-exponent" value="${configs.exponent}" min="1.0" max="4.0" step="0.1"></p>
          <legend>${text('Try on this video')}</legend>
          <p><input type="range" name="slider" id="config-slider" value="100" min="0" max="100" step="1"></p>
        </fieldset>
        <div class="chart" data-enable="${configs.enable}">
          <dl class="original">
            <dt>  0</dt><dd>  0</dd>
            <dt>  5</dt><dd>  5</dd>
            <dt> 10</dt><dd> 10</dd>
            <dt> 15</dt><dd> 15</dd>
            <dt> 20</dt><dd> 20</dd>
            <dt> 25</dt><dd> 25</dd>
            <dt> 30</dt><dd> 30</dd>
            <dt> 35</dt><dd> 35</dd>
            <dt> 40</dt><dd> 40</dd>
            <dt> 45</dt><dd> 45</dd>
            <dt> 50</dt><dd> 50</dd>
            <dt> 55</dt><dd> 55</dd>
            <dt> 60</dt><dd> 60</dd>
            <dt> 65</dt><dd> 65</dd>
            <dt> 70</dt><dd> 70</dd>
            <dt> 75</dt><dd> 75</dd>
            <dt> 80</dt><dd> 80</dd>
            <dt> 85</dt><dd> 85</dd>
            <dt> 90</dt><dd> 90</dd>
            <dt> 95</dt><dd> 95</dd>
            <dt>100</dt><dd>100</dd>
          </dl>
          <dl class="gained">
            <dt>  0</dt><dd>  0</dd>
            <dt>  5</dt><dd>  5</dd>
            <dt> 10</dt><dd> 10</dd>
            <dt> 15</dt><dd> 15</dd>
            <dt> 20</dt><dd> 20</dd>
            <dt> 25</dt><dd> 25</dd>
            <dt> 30</dt><dd> 30</dd>
            <dt> 35</dt><dd> 35</dd>
            <dt> 40</dt><dd> 40</dd>
            <dt> 45</dt><dd> 45</dd>
            <dt> 50</dt><dd> 50</dd>
            <dt> 55</dt><dd> 55</dd>
            <dt> 60</dt><dd> 60</dd>
            <dt> 65</dt><dd> 65</dd>
            <dt> 70</dt><dd> 70</dd>
            <dt> 75</dt><dd> 75</dd>
            <dt> 80</dt><dd> 80</dd>
            <dt> 85</dt><dd> 85</dd>
            <dt> 90</dt><dd> 90</dd>
            <dt> 95</dt><dd> 95</dd>
            <dt>100</dt><dd>100</dd>
          </dl>
        </div>
        <p class="buttons"><button class="cancel">${text('Cancel')}</button><button class="save primary">${text('Save')}</button></p>
      </div>
    `,
    style: () => `
      <style type="text/css" id="${SCRIPTID}-style">
        [data-selector="muteButton"]:hover *{
          fill: rgb(131,176,234);
        }
      </style>
    `,
    panelStyle: () => `
      <style type="text/css" id="${SCRIPTID}-panelStyle">
        /* panels default */
        #${SCRIPTID}-panels *{
          font-size: 14px;
          line-height: 20px;
          padding: 0;
          margin: 0;
        }
        #${SCRIPTID}-panels{
          font-family: Arial, sans-serif;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
          cursor: default;
          z-index: 99999;
        }
        #${SCRIPTID}-panels div.panel{
          position: absolute;
          max-height: 100%;
          overflow: auto;
          left: 50%;
          bottom: 50%;
          transform: translate(-50%, 50%);
          background: rgba(0,0,0,.75);
          transition: 250ms ease-out;
          padding: 5px 0;
          pointer-events: auto;
        }
        #${SCRIPTID}-panels div.panel.hidden{
          transform: translate(-50%, calc(50vh + 100%)) !important;
          display: block !important;
        }
        #${SCRIPTID}-panels div.panel.hidden *{
          animation: none !important;
        }
        #${SCRIPTID}-panels h1,
        #${SCRIPTID}-panels h2,
        #${SCRIPTID}-panels h3,
        #${SCRIPTID}-panels h4,
        #${SCRIPTID}-panels legend,
        #${SCRIPTID}-panels ul,
        #${SCRIPTID}-panels ol,
        #${SCRIPTID}-panels dl,
        #${SCRIPTID}-panels p{
          color: white;
          padding: 2px 10px;
          vertical-align: baseline;
        }
        #${SCRIPTID}-panels legend ~ p,
        #${SCRIPTID}-panels legend ~ ul,
        #${SCRIPTID}-panels legend ~ ol,
        #${SCRIPTID}-panels legend ~ dl{
          padding-left: calc(10px + 14px);
        }
        #${SCRIPTID}-panels header{
          display: flex;
        }
        #${SCRIPTID}-panels header h1{
          flex: 1;
        }
        #${SCRIPTID}-panels fieldset{
          border: none;
        }
        #${SCRIPTID}-panels fieldset > p{
          display: flex;
          align-items: center;
        }
        #${SCRIPTID}-panels fieldset > p:not([class]):hover,
        #${SCRIPTID}-panels fieldset > p.sub:hover{
          background: rgba(255,255,255,.125);
        }
        #${SCRIPTID}-panels fieldset > p > label{
          flex: 1;
        }
        #${SCRIPTID}-panels fieldset > p > input,
        #${SCRIPTID}-panels fieldset > p > textarea,
        #${SCRIPTID}-panels fieldset > p > select{
          color: black;
          background: white;
          padding: 1px 2px;
        }
        #${SCRIPTID}-panels fieldset > p > input,
        #${SCRIPTID}-panels fieldset > p > button{
          box-sizing: border-box;
          height: 20px;
        }
        #${SCRIPTID}-panels fieldset small{
          font-size: 85%;
          margin: 0 0 0 .25em;
        }
        #${SCRIPTID}-panels fieldset sup,
        #${SCRIPTID}-panels fieldset p.note{
          font-size: 10px;
          line-height: 14px;
          color: rgb(192,192,192);
        }
        #${SCRIPTID}-panels a{
          color: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        #${SCRIPTID}-panels a:hover{
          color: rgb(255,255,255);
        }
        #${SCRIPTID}-panels div.panel > p.buttons{
          text-align: right;
          padding: 5px 10px;
        }
        #${SCRIPTID}-panels div.panel > p.buttons button{
          line-height: 1.4;
          width: 120px;
          padding: 5px 10px;
          margin-left: 10px;
          border-radius: 5px;
          color: rgba(255,255,255,1);
          background: rgba(64,64,64,1);
          border: 1px solid rgba(255,255,255,1);
          cursor: pointer;
        }
        #${SCRIPTID}-panels div.panel > p.buttons button.primary{
          font-weight: bold;
          background: rgba(0,0,0,1);
        }
        #${SCRIPTID}-panels div.panel > p.buttons button:hover,
        #${SCRIPTID}-panels div.panel > p.buttons button:focus{
          background: rgba(128,128,128,1);
        }
        #${SCRIPTID}-panels .template{
          display: none !important;
        }
        /* config panel */
        #${SCRIPTID}-configPanel{
          /*--${SCRIPTID}-chartSize: max(calc(36px + 100*${CHARTUNIT}px + 16px), calc(32px + 21*16px));*//* max: from Firefox 75*/
          --${SCRIPTID}-chartSize: calc(32px + 21*16px);
        }
        #${SCRIPTID}-configPanel{
          width: calc(var(--${SCRIPTID}-chartSize) + 10px);
          cursor: grab;
        }
        #${SCRIPTID}-configPanel.dragging{
          transition: none !important;
          cursor: grabbing;
        }
        #${SCRIPTID}-configPanel fieldset.island{
          position: absolute;
          z-index: 10;
        }
        #${SCRIPTID}-configPanel fieldset.island[data-enable="0"] .sub{
          pointer-events: none;
          opacity: .5;
        }
        #${SCRIPTID}-configPanel fieldset.island input[name="gain"],
        #${SCRIPTID}-configPanel fieldset.island input[name="exponent"]{
          width: 4em;
          margin-left: 5px;
        }
        #${SCRIPTID}-configPanel fieldset.island input[name="slider"]{
          width: 100%;
        }
        #${SCRIPTID}-configPanel .chart{
          width:  var(--${SCRIPTID}-chartSize);
          height: var(--${SCRIPTID}-chartSize);
          padding: 5px;
          transform: rotate(-90deg);
        }
        #${SCRIPTID}-configPanel .chart dl{
          width: var(--${SCRIPTID}-chartSize);
          height: var(--${SCRIPTID}-chartSize);
          padding: 0;
          margin: 0;
          position: absolute;
        }
        #${SCRIPTID}-configPanel .chart[data-enable="1"] dl.gained,
        #${SCRIPTID}-configPanel .chart[data-enable="0"] dl.original{
          z-index: 5;
        }
        #${SCRIPTID}-configPanel .chart dl dt{
          text-align: right;
          width: 32px;
          padding-right: 4px;
          clear: both;
        }
        #${SCRIPTID}-configPanel .chart dl dt,
        #${SCRIPTID}-configPanel .chart dl dd{
          float: left;
          height: 16px;
          font-size: 12px !important;
          line-height: 16px;
        }
        #${SCRIPTID}-configPanel .chart dl dd{
          transition: width 125ms, text-indent 125ms;
        }
        #${SCRIPTID}-configPanel .chart dl.original dt:last-of-type{
          position: relative;
        }
        #${SCRIPTID}-configPanel .chart dl.original dt:last-of-type::after{
          content: "${text('Actual volume(%)')}";
          position: absolute;
          left: 100%;
          bottom: -100%;
          width: ${100*CHARTUNIT}px;
          text-align: left;
        }
        #${SCRIPTID}-configPanel .chart[data-enable="1"] dl.original dd,
        #${SCRIPTID}-configPanel .chart[data-enable="0"] dl.gained dd{
          color: transparent;
          background: rgba(256,256,256,.125);
        }
        #${SCRIPTID}-configPanel .chart dl.gained dt{
          visibility: hidden;
        }
        #${SCRIPTID}-configPanel .chart[data-enable="1"] dl.gained dd,
        #${SCRIPTID}-configPanel .chart[data-enable="0"] dl.original dd{
          background: rgba(192,192,192,.75);
        }
        #${SCRIPTID}-configPanel .chart[data-enable="1"] dl.gained dt.fill + dd,
        #${SCRIPTID}-configPanel .chart[data-enable="0"] dl.original dt.fill + dd{
          background: rgba(  0,  0,256,.75);
        }
        #${SCRIPTID}-configPanel .chart[data-enable="1"] dl.gained dd span.decimal{
          font-size: 10px;
          color: gray;
        }
      </style>
    `,
  };
  const setTimeout = window.setTimeout.bind(window), clearTimeout = window.clearTimeout.bind(window), setInterval = window.setInterval.bind(window), clearInterval = window.clearInterval.bind(window), requestAnimationFrame = window.requestAnimationFrame.bind(window);
  const alert = window.alert.bind(window), confirm = window.confirm.bind(window), prompt = window.prompt.bind(window), getComputedStyle = window.getComputedStyle.bind(window), fetch = window.fetch.bind(window);
  if(!('isConnected' in Node.prototype)) Object.defineProperty(Node.prototype, 'isConnected', {get: function(){return document.contains(this)}});
  class Storage{
    static key(key){
      return (SCRIPTID) ? (SCRIPTID + '-' + key) : key;
    }
    static save(key, value, expire = null){
      key = Storage.key(key);
      localStorage[key] = JSON.stringify({
        value: value,
        saved: Date.now(),
        expire: expire,
      });
    }
    static read(key){
      key = Storage.key(key);
      if(localStorage[key] === undefined) return undefined;
      let data = JSON.parse(localStorage[key]);
      if(data.value === undefined) return data;
      if(data.expire === undefined) return data;
      if(data.expire === null) return data.value;
      if(data.expire < Date.now()) return localStorage.removeItem(key);/*undefined*/
      return data.value;
    }
    static remove(key){
      key = Storage.key(key);
      delete localStorage.removeItem(key);
    }
    static delete(key){
      Storage.remove(key);
    }
    static saved(key){
      key = Storage.key(key);
      if(localStorage[key] === undefined) return undefined;
      let data = JSON.parse(localStorage[key]);
      if(data.saved) return data.saved;
      else return undefined;
    }
  }
  class Panels{
    constructor(container){
      this.container = container;
      this.panels = {};
      this.listen();
    }
    listen(){
      const EXCLUDES = ['input', 'textarea'];
      window.addEventListener('keydown', (e) => {
        if(e.key !== 'Escape') return;
        if(EXCLUDES.includes(document.activeElement.localName)) return;
        Object.keys(this.panels).forEach(key => this.hide(key));
      }, true);
    }
    add(name, panel){
      this.panels[name] = panel;
    }
    toggle(name){
      if(this.panels[name] === undefined) return;
      let panel = this.panels[name];
      if(panel.isConnected === false || panel.classList.contains('hidden')) this.show(name);
      else this.hide(name);
    }
    show(name){
      if(this.panels[name] === undefined) return;
      let panel = this.panels[name];
      if(panel.isConnected) return;
      panel.classList.add('hidden');
      this.container.appendChild(panel);
      this.container.dataset.panels = parseInt(this.container.dataset.panels) + 1;
      animate(() => panel.classList.remove('hidden'));
    }
    shown(name){
      if(this.panels[name] === undefined) return;
      let panel = this.panels[name];
      return panel.isConnected;
    }
    hide(name){
      if(this.panels[name] === undefined) return;
      let panel = this.panels[name];
      if(panel.classList.contains('hidden')) return;
      panel.classList.add('hidden');
      panel.addEventListener('transitionend', (e) => {
        this.container.removeChild(panel);
        this.container.dataset.panels = parseInt(this.container.dataset.panels) - 1;
      }, {once: true});
    }
    hidden(name){
      if(this.panels[name] === undefined) return;
      return !this.shown(name);
    }
  }
  const text = function(key, ...args){
    if(text.texts[key] === undefined){
      log('Not found text key:', key);
      return key;
    }else return text.texts[key](args);
  };
  text.setup = function(texts, language){
    let languages = [...window.navigator.languages];
    if(language) languages.unshift(...String(language).split('-').map((p,i,a) => a.slice(0,1+i).join('-')).reverse());
    if(!languages.includes('en')) languages.push('en');
    languages = languages.map(l => l.toLowerCase());
    Object.keys(texts).forEach(key => {
      Object.keys(texts[key]).forEach(l => texts[key][l.toLowerCase()] = texts[key][l]);
      texts[key] = texts[key][languages.find(l => texts[key][l] !== undefined)] || (() => key);
    });
    text.texts = texts;
  };
  const $ = function(s, f){
    let target = document.querySelector(s);
    if(target === null) return null;
    return f ? f(target) : target;
  };
  const $$ = function(s, f){
    let targets = document.querySelectorAll(s);
    return f ? Array.from(targets).map(t => f(t)) : targets;
  };
  const animate = function(callback, ...params){requestAnimationFrame(() => requestAnimationFrame(() => callback(...params)))};
  const createElement = function(html = '<span></span>'){
    let outer = document.createElement('div');
    outer.innerHTML = html;
    return outer.firstElementChild;
  };
  const observe = function(element, callback, options = {childList: true, characterData: false, subtree: false, attributes: false, attributeFilter: undefined}){
    let observer = new MutationObserver(callback.bind(element));
    observer.observe(element, options);
    return observer;
  };
  const draggable = function(element, grabbable){
    const DELAY = 1000;/* catching up mouse position between each mousemoves while fast dragging (ms) */
    const EXCLUDE = ['input', 'textarea', 'button'];
    const mousedown = function(e){
      if(e.button !== 0) return;
      if(EXCLUDE.includes(e.target.localName)) return;
      if(grabbable && e.target !== grabbable) return;
      element.classList.add('dragging');
      [screenX, screenY] = [e.screenX, e.screenY];
      [a,b,c,d,tx,ty] = (getComputedStyle(element).transform.match(/[-0-9.]+/g) || [1,0,0,1,0,0]).map((n) => parseFloat(n));
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup, {once: true});
      document.body.addEventListener('mouseleave', mouseup, {once: true});
      element.addEventListener('mouseleave', mouseleave, {once: true});
    };
    const mousemove = function(e){
      element.style.transform = `matrix(${a},${b},${c},${d},${tx + (e.screenX - screenX)},${ty + (e.screenY - screenY)})`;
    };
    const mouseup = function(e){
      element.classList.remove('dragging');
      window.removeEventListener('mousemove', mousemove);
    };
    const mouseleave = function(e){
      let timer = setTimeout(mouseup, DELAY);
      element.addEventListener('mouseenter', clearTimeout.bind(window, timer), {once: true});
    };
    let screenX, screenY, a, b, c, d, tx, ty;
    element.classList.add('draggable');
    element.addEventListener('mousedown', mousedown);
  };
  const log = function(){
    if(!DEBUG) return;
    let l = log.last = log.now || new Date(), n = log.now = new Date();
    let error = new Error(), line = log.format.getLine(error), callers = log.format.getCallers(error);
    //console.log(error.stack);
    console.log(
      SCRIPTID + ':',
      /* 00:00:00.000  */ n.toLocaleTimeString() + '.' + n.getTime().toString().slice(-3),
      /* +0.000s       */ '+' + ((n-l)/1000).toFixed(3) + 's',
      /* :00           */ ':' + line,
      /* caller.caller */ (callers[2] ? callers[2] + '() => ' : '') +
      /* caller        */ (callers[1] || '') + '()',
      ...arguments
    );
  };
  log.formats = [{
      name: 'Firefox Scratchpad',
      detector: /MARKER@Scratchpad/,
      getLine: (e) => e.stack.split('\n')[1].match(/([0-9]+):[0-9]+$/)[1],
      getCallers: (e) => e.stack.match(/^[^@]*(?=@)/gm),
    }, {
      name: 'Firefox Console',
      detector: /MARKER@debugger/,
      getLine: (e) => e.stack.split('\n')[1].match(/([0-9]+):[0-9]+$/)[1],
      getCallers: (e) => e.stack.match(/^[^@]*(?=@)/gm),
    }, {
      name: 'Firefox Greasemonkey 3',
      detector: /\/gm_scripts\//,
      getLine: (e) => e.stack.split('\n')[1].match(/([0-9]+):[0-9]+$/)[1],
      getCallers: (e) => e.stack.match(/^[^@]*(?=@)/gm),
    }, {
      name: 'Firefox Greasemonkey 4+',
      detector: /MARKER@user-script:/,
      getLine: (e) => e.stack.split('\n')[1].match(/([0-9]+):[0-9]+$/)[1] - 500,
      getCallers: (e) => e.stack.match(/^[^@]*(?=@)/gm),
    }, {
      name: 'Firefox Tampermonkey',
      detector: /MARKER@moz-extension:/,
      getLine: (e) => e.stack.split('\n')[1].match(/([0-9]+):[0-9]+$/)[1] - 6,
      getCallers: (e) => e.stack.match(/^[^@]*(?=@)/gm),
    }, {
      name: 'Chrome Console',
      detector: /at MARKER \(<anonymous>/,
      getLine: (e) => e.stack.split('\n')[2].match(/([0-9]+):[0-9]+\)?$/)[1],
      getCallers: (e) => e.stack.match(/[^ ]+(?= \(<anonymous>)/gm),
    }, {
      name: 'Chrome Tampermonkey',
      detector: /at MARKER \(chrome-extension:.*?\/userscript.html\?name=/,
      getLine: (e) => e.stack.split('\n')[2].match(/([0-9]+):[0-9]+\)?$/)[1] - 1,
      getCallers: (e) => e.stack.match(/[^ ]+(?= \(chrome-extension:)/gm),
    }, {
      name: 'Chrome Extension',
      detector: /at MARKER \(chrome-extension:/,
      getLine: (e) => e.stack.split('\n')[2].match(/([0-9]+):[0-9]+\)?$/)[1],
      getCallers: (e) => e.stack.match(/[^ ]+(?= \(chrome-extension:)/gm),
    }, {
      name: 'Edge Console',
      detector: /at MARKER \(eval/,
      getLine: (e) => e.stack.split('\n')[2].match(/([0-9]+):[0-9]+\)$/)[1],
      getCallers: (e) => e.stack.match(/[^ ]+(?= \(eval)/gm),
    }, {
      name: 'Edge Tampermonkey',
      detector: /at MARKER \(Function/,
      getLine: (e) => e.stack.split('\n')[2].match(/([0-9]+):[0-9]+\)$/)[1] - 4,
      getCallers: (e) => e.stack.match(/[^ ]+(?= \(Function)/gm),
    }, {
      name: 'Safari',
      detector: /^MARKER$/m,
      getLine: (e) => 0,/*e.lineが用意されているが最終呼び出し位置のみ*/
      getCallers: (e) => e.stack.split('\n'),
    }, {
      name: 'Default',
      detector: /./,
      getLine: (e) => 0,
      getCallers: (e) => [],
    }];
  log.format = log.formats.find(function MARKER(f){
    if(!f.detector.test(new Error().stack)) return false;
    //console.log('////', f.name, 'wants', 0/*line*/, '\n' + new Error().stack);
    return true;
  });
  core.initialize();
  if(window === top && console.timeEnd) console.timeEnd(SCRIPTID);
})();