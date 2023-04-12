// ==UserScript==
// @name        YouTube CPU Tamer
// @name:ja     YouTube CPU Tamer
// @name:zh-CN  YouTube CPU Tamer
// @namespace   knoa.jp
// @description It just reduces CPU usage on YouTube.
// @description:ja YouTubeでのCPU使用率を削減します。
// @description:zh-CN 减少YouTube页面上的CPU利用率。
// @include     https://www.youtube.com/*
// @include     https://www.youtube.com/embed/*
// @include     https://www.youtube-nocookie.com/embed/*
// @version     1.2.0
// @run-at      document-start
// @grant       none
// ==/UserScript==

/*
[update]
Improved compatibility and fix the bug of not working properly.

[possible]
intervalかrequestAnimationframeをうまく扱えばスパチャ要素を削除しなくてもよくなる？
  LIVEスクリプトでやるべきか、こちらでやるべきか。いずれにしても統一が可能かも。

[memo]
interval
  interval 自体のインスタンスを減らすためにすべて1つの関数にまとめて実行する。
  前面タブなら250msごとに頻度を落とす。
  背面タブなら15秒ごとに頻度を落とす。
timeout
  前面タブではユーザーインタラクションに関わる場合があるのでそのまま実行する。
  背面タブなら interval の次回処理に託してしまう。(前面タブになるまでは15秒間隔)
    背面タブの clearInterval は、仮にあったとしても煩雑化を避けるために無視する。
    ただし、初期ロード後の10秒間のみ、背面タブでもそのまま実行させる。
@grant
  @grant なし         Tamer効果なし 背面でも正常
  @grant none         Tamer効果あり Chrome  背面でたまに起動せず、再生開始しても描画されない！
    できればこれでいきたいので試行錯誤してみる
    最初の10秒だけ通常起動させてみるとか,15秒をもっと緩めるとか
    そもそもいまは他のスクリプトをオフにしてテストしているので注意
    リロードじゃなくて新規タブにしないと、特にCMがある場合に再現しない場合も？
  @grant none         Tamer効果あり Firefox 背面でたまに起動しないが、再生開始すれば描画される？
  @grant unsafeWindow Tamer効果あり Chrome  背面でたまに起動しないが、再生開始すれば描画される？
  @grant unsafeWindow Tamer効果あり Firefox 正常ぽい
*/
(function(){
  const SCRIPTID = 'YouTubeCpuTamer';
  console.log(SCRIPTID, location.href);
  const BUNDLEDINTERVAL    =     250;/* the bundled interval */
  const BACKGROUNDINTERVAL = 15*1000;/* take even longer interval on hidden tab */
  const ITIALIZINGTIME     = 10*1000;/* timeouts should be passed on initial load */
  /*
    [interval]
  */
  /* integrate each of intervals */
  /* bundle intervals */
  const originalSetInterval = window.setInterval.bind(window);
  window.setInterval = function(f, interval, ...args){
    //console.log(SCRIPTID, 'original interval:', interval, location.href);
    bundle[index] = {
      f: f.bind(null, ...args),
      interval: interval,
      lastExecution: 0,
    };
    return index++;
  };
  window.clearInterval = function(id){
    //console.log(SCRIPTID, 'clearInterval:', id, location.href);
    delete bundle[id];
  };
  /*
    [timeout]
  */
  /* kill the background timeouts after initializing */
  const originalSetTimeout = window.setTimeout.bind(window);
  originalSetTimeout(() => {
    window.setTimeout = function(f, timeout, ...args){
      //console.log(SCRIPTID, 'timeout:', timeout, location.href);
      if(document.hidden){
        bundle[index] = {
          f: f.bind(null, ...args),
          timeout: timeout,
          lastExecution: 0,
        };
        return index++;
      }
      return originalSetTimeout(f, timeout, ...args);
    };
  } , ITIALIZINGTIME);
  /*
    [bundled process]
  */
  /* execute bundled intervals */
  /* a bunch of intervals does cost so much even if the processes do nothing */
  const bundle = {};/* {0: {f, interval, lastExecution}} */
  let index = 1;/* use it instead of interval id */
  let lastExecution = 0;
  originalSetInterval(function(){
    const now = Date.now();
    if(document.hidden && now < lastExecution + BACKGROUNDINTERVAL) return true;
    //console.log(SCRIPTID, 'bundle:', bundle, location.href);
    Object.keys(bundle).forEach(id => {
      const item = bundle[id];
      if(item === undefined) return true;/* it could be occur on tiny deletion chance */
      if(now < item.lastExecution + (item.interval || item.timeout)) return true;/* not yet */
      item.f();
      if(item.interval !== undefined) item.lastExecution = now;
      else delete bundle[id];
    });
    lastExecution = now;
  }, BUNDLEDINTERVAL);
})();