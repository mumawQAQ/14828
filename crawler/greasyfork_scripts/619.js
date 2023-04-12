/*

MIT License

Copyright 2022 CY Fung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @name:ja             Unhold YouTube Resource Locks
// @name:zh-TW          Unhold YouTube Resource Locks
// @name:zh-CN          Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2023.01.21
// @license             MIT License
// @description         Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:en      Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:ja      YouTube の 使用済みIndexDB を解放し、WebLock を無効にして、バックグラウンドページを休止状態になるように
// @description:zh-TW   釋放 YouTube 用過的 IndexDBs 並禁用 WebLock 讓後台頁面能進入休眠
// @description:zh-CN   释放 YouTube 用过的 IndexDBs 并禁用 WebLock 让后台页面能进入休眠
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames
// @inject-into page
// ==/UserScript==

/* jshint esversion:8 */

(function () {
  'use strict';

  const DEBUG_LOG = false;
  let initialChecking = null;
  const store = []
  let cidxx = 0;
  const dbSet = new Set();


  /** @type {(o: Object | null) => WeakRef | null} */
  const mWeakRef = typeof WeakRef === 'function' ? (o => o ? new WeakRef(o) : null) : (o => o || null); // typeof InvalidVar == 'undefined'

  /** @type {(wr: Object | null) => Object | null} */
  const kRef = (wr => (wr && wr.deref) ? wr.deref() : wr);


  const isSupported = (function (console, consoleX) {
    'use strict';
    let [window] = new Function('return [window];')(); // real window object

    if (typeof (((window || 0).navigator || 0).locks || 0).request === 'function') {
      // disable WebLock
      // WebLock is just an experimental feature and not really required for YouTube
      window.navigator.locks.query = function () {
        console.log(arguments);
        return new Promise(resolve => {
          // do nothing
        });
      };
      window.navigator.locks.request = function () {
        console.log(arguments);
        return new Promise(resolve => {
          // do nothing
        });
      };
    }

    const isSupported = (((window || 0).indexedDB || 0).constructor || 0).name === 'IDBFactory';
    if (isSupported) {
      const addEventListenerKey = Symbol();
      const removeEventListenerKey = Symbol();
      const openKey = Symbol();
      const funcHooks = new WeakMap();
      let openCount = 0;

      const msgStore = [];
      let messageDisplayCId = 0;
      const message = (message) => {
        msgStore.push(message);
      };
      const mTime = Date.now()
      async function releaseOnIdleHandler() {
        // console.log('OCK1', openCount, store.length);
        if (!cidxx) return
        cidxx = 0
        DEBUG_LOG && console.log('CLEANING - 01 - BEGIN', openCount);
        for (const request of [...dbSet.values()]) {

          try {
            let db = request.result;
            let databaseId = db.name
            DEBUG_LOG && console.log(db, databaseId);
            db.close();
            db = null;
            openCount--;
            message({ databaseId: databaseId, action: 'close', time: Date.now() });

          } catch (e) { }

          // releaseOnIdle(target.result, databaseId, eventType, event.type); // start waiting after success / failed of the first lock


        }
        dbSet.clear()
        DEBUG_LOG && console.log('CLEANING - 01 - END', openCount);

        DEBUG_LOG && console.log('CLEANING - 02 - BEGIN', openCount);
        for (const entry of store) {
          let [kdb, databaseId, eventType, event_type] = entry
          entry.length = 0
          let db = kRef(kdb)
          kdb = null

          DEBUG_LOG && console.log(db, databaseId, eventType, event_type);
          db.close();
          db = null;
          openCount--;
          // consoleX.log(openCount, databaseId)
          message({ databaseId: databaseId, action: 'close', time: Date.now() });

        }
        store.length = 0
        // console.log('OCK2', openCount)

        DEBUG_LOG && console.log('CLEANING - 02 - END', openCount);


        if (openCount === 0 && msgStore.length > 0) {
          if (messageDisplayCId > 0) {
            clearTimeout(messageDisplayCId);
            messageDisplayCId = 0;
          }
          messageDisplayCId = setTimeout(() => {
            messageDisplayCId = 0;
            if (openCount === 0 && msgStore.length > 0) {
              let messages = [...msgStore];
              msgStore.length = 0;
              messages.sort((a, b) => a.databaseId.localeCompare(b.databaseId) || a.time - b.time);
              consoleX.dir(messages)
            }
          }, 300);
        }



      }
      function releaseOnIdle(db, databaseId, eventType, event_type) {
        if (cidxx > 0) clearTimeout(cidxx);
        store.push([mWeakRef(db), databaseId, eventType, event_type])
        // console.log('OC', openCount)
        cidxx = setTimeout(releaseOnIdleHandler, 18 * 1000)
      }

      function makeHandler(handler, databaseId, eventType) {
        return function (event) {
          DEBUG_LOG && console.log(32, 'addEventListener', databaseId, eventType, event.type);
          handler.call(this, arguments);
          const target = (event || 0).target
          if (dbSet.has(target)) {

            releaseOnIdle(target.result, databaseId, eventType, event.type); // start waiting after success / failed of the first lock

            console.log('releaseOnIdle', store.length, databaseId);
            dbSet.delete(target)
          }
          // dbSet.add()
          DEBUG_LOG && console.log(441, 'addEventListener', databaseId, eventType, event.type);
        }
      }

      function makeAddEventListener(databaseId) {
        console.log('makeAddEventListener1', databaseId)
        return function (eventType, handler) {
          console.log('makeAddEventListener2', databaseId)
          const addEventListener = this[addEventListenerKey];
          if (arguments.length !== 2) return addEventListener.call(this, ...arguments);
          if (eventType === 'error' || eventType === 'success') {
            DEBUG_LOG && console.log(31, databaseId, eventType);
            let gx = funcHooks.get(handler);
            if (!gx) {
              gx = makeHandler(handler, databaseId, eventType); // databaseId and eventType are just for logging; not reliable
              funcHooks.set(handler, gx);
            }
            return addEventListener.call(this, eventType, gx);
          }
          return addEventListener.call(this, ...arguments);
        }
      }

      function makeRemoveEventListener(databaseId) {
        return function (eventType, handler) {
          const removeEventListener = this[removeEventListenerKey];
          if (arguments.length !== 2) return removeEventListener.call(this, ...arguments);
          if (eventType === 'error' || eventType === 'success') {
            let gx = funcHooks.get(handler);
            DEBUG_LOG && console.log(30, 'removeEventListener', databaseId, eventType);
            let ret = removeEventListener.call(this, eventType, gx || handler);
            DEBUG_LOG && console.log(442, 'removeEventListener', databaseId, eventType);
            return ret;
          }
          return removeEventListener.call(this, ...arguments);
        }
      }

      function makeOpen() {
        return function (databaseId) {
          initialChecking && initialChecking();
          let request = this[openKey](databaseId); // IDBRequest
          request[addEventListenerKey] = request.addEventListener;
          request.addEventListener = makeAddEventListener(databaseId);
          request[removeEventListenerKey] = request.removeEventListener;
          request.removeEventListener = makeRemoveEventListener(databaseId);
          openCount++;
          dbSet.add(request);
          // console.log('openCount', openCount, databaseId)
          if (cidxx > 0) clearTimeout(cidxx);
          cidxx = setTimeout(releaseOnIdleHandler, 18 * 1000);
          // consoleX.log('opened', openCount, databaseId)
          message({ databaseId: databaseId, action: 'open', time: Date.now() });
          return request;
        }
      }
      window.indexedDB.constructor.prototype[openKey] = window.indexedDB.constructor.prototype.open;
      window.indexedDB.constructor.prototype.open = makeOpen();

    }
    // console.log(22)

    return isSupported

  })(DEBUG_LOG ? console : Object.assign({}, console, { log: function () { } }), console);


})();
