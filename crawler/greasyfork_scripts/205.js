// ==UserScript==
// @name         EME Logger
// @namespace    http://greasyfork.org/
// @version      1.0
// @description  Inject EME interface and log its function calls.
// @author       cramer
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(async () => {
    const indent = (s,n=4) => s.split('\n').map(l=>Array(n).fill(' ').join('')+l).join('\n');

    const b64 = {
        decode: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
        encode: b => btoa(String.fromCharCode(...new Uint8Array(b)))
    };

    const fnproxy = (object, func) => new Proxy(object, { apply: func });

    const proxy = (object, key, func) => Object.hasOwnProperty.call(object, key) && Object.defineProperty(object, key, {
        value: fnproxy(object[key], func)
    });

    function messageHandler(event) {
        const keySession = event.target;
        const {sessionId} = keySession;
        const {message, messageType} = event;
        const listeners = keySession.getEventListeners('message').filter(l => l !== messageHandler);
        console.groupCollapsed(
            `[EME] MediaKeySession::message\n` +
            `    Session ID: ${sessionId || '(not available)'}\n` +
            `    Message Type: ${messageType}\n` +
            `    Message: ${b64.encode(message)}` +
            '\n    Listeners:', listeners
        );
        console.trace();
        console.groupEnd();
    }

    function keystatuseschangeHandler(event) {
        const keySession = event.target;
        const {sessionId} = keySession;
        const listeners = keySession.getEventListeners('keystatuseschange').filter(l => l !== keystatuseschangeHandler);
        console.groupCollapsed(
            `[EME] MediaKeySession::keystatuseschange\n` +
            `    Session ID: ${sessionId || '(not available)'}\n` +
            Array.from(keySession.keyStatuses).map(([keyId, status]) =>
                                                   `    [${status.toUpperCase()}] ${b64.encode(keyId)}`
                                                  ).join('\n') +
            '\n    Listeners:', listeners
        );
        console.trace();
        console.groupEnd();
    }

    function getEventListeners(type) {
        if (this == null) return [];
        const store = this[Symbol.for(getEventListeners)];
        if (store == null || store[type] == null) return [];
        return store[type];
    }

    EventTarget.prototype.getEventListeners = getEventListeners;

    typeof Navigator !== 'undefined' && proxy(Navigator.prototype, 'requestMediaKeySystemAccess', async (_target, _this, _args) => {
        const [keySystem, supportedConfigurations] = _args;
        console.groupCollapsed(
            `[EME] Navigator::requestMediaKeySystemAccess\n` +
            `    Key System: ${keySystem}\n` +
            `    Supported Configurations:\n` +
            indent(JSON.stringify(supportedConfigurations, null, '    '))
        );
        console.trace();
        console.groupEnd();
        return _target.apply(_this, _args);
    });

    typeof MediaKeySystemAccess !== 'undefined' && proxy(MediaKeySystemAccess.prototype, 'createMediaKeys', async (_target, _this, _args) => {
        console.groupCollapsed(
            `[EME] MediaKeySystemAccess::createMediaKeys\n` +
            `    Key System: ${_this.keySystem}\n` +
            `    Configurations:\n` +
            indent(JSON.stringify(_this.getConfiguration(), null, '    '))
        );
        console.trace();
        console.groupEnd();
        return _target.apply(_this, _args);
    });

    if (typeof MediaKeys !== 'undefined') {
        proxy(MediaKeys.prototype, 'setServerCertificate', async (_target, _this, _args) => {
            const [serverCertificate] = _args;
            console.groupCollapsed(
                `[EME] MediaKeys::setServerCertificate\n` +
                `    Server Certificate: ${b64.encode(serverCertificate)}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });

        proxy(MediaKeys.prototype, 'createSession', (_target, _this, _args) => {
            const [sessionType] = _args;
            console.groupCollapsed(
                `[EME] MediaKeys::createSession\n` +
                `    Session Type: ${sessionType || 'temporary (default)'}`
            );
            console.trace();
            console.groupEnd();
            const session = _target.apply(_this, _args);
            session.addEventListener('message', messageHandler);
            session.addEventListener('keystatuseschange', keystatuseschangeHandler);
            return session;
        });
    }

    if (typeof EventTarget !== 'undefined') {
        proxy(EventTarget.prototype, 'addEventListener', async (_target, _this, _args) => {
            if (_this != null) {
                const [type, listener] = _args;
                const storeKey = Symbol.for(getEventListeners);
                if (!(storeKey in _this)) _this[storeKey] = {};
                const store = _this[storeKey];
                if (!(type in store)) store[type] = [];
                const listeners = store[type];
                if (listeners.indexOf(listener) < 0) {
                    listeners.push(listener);
                }
            }
            return _target.apply(_this, _args);
        });

        proxy(EventTarget.prototype, 'removeEventListener', async (_target, _this, _args) => {
            if (_this != null) {
                const [type, listener] = _args;
                const storeKey = Symbol.for(getEventListeners);
                if (!(storeKey in _this)) return;
                const store = _this[storeKey];
                if (!(type in store)) return;
                const listeners = store[type];
                const index = listeners.indexOf(listener);
                if (index >= 0) {
                    if (listeners.length === 1) {
                        delete store[type];
                    } else {
                        listeners.splice(index, 1);
                    }
                }
            }
            return _target.apply(_this, _args);
        });
    }

    if (typeof MediaKeySession !== 'undefined') {
        proxy(MediaKeySession.prototype, 'generateRequest', async (_target, _this, _args) => {
            const [initDataType, initData] = _args;
            console.groupCollapsed(
                `[EME] MediaKeySession::generateRequest\n` +
                `    Session ID: ${_this.sessionId || '(not available)'}\n` +
                `    Init Data Type: ${initDataType}\n` +
                `    Init Data: ${b64.encode(initData)}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });

        proxy(MediaKeySession.prototype, 'load', async (_target, _this, _args) => {
            const [sessionId] = _args;
            console.groupCollapsed(
                `[EME] MediaKeySession::load\n` +
                `    Session ID: ${sessionId || '(not available)'}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });

        proxy(MediaKeySession.prototype, 'update', async (_target, _this, _args) => {
            const [response] = _args;
            console.groupCollapsed(
                `[EME] MediaKeySession::update\n` +
                `    Session ID: ${_this.sessionId || '(not available)'}\n` +
                `    Response: ${b64.encode(response)}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });

        proxy(MediaKeySession.prototype, 'close', async (_target, _this, _args) => {
            console.groupCollapsed(
                `[EME] MediaKeySession::close\n` +
                `    Session ID: ${_this.sessionId || '(not available)'}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });

        proxy(MediaKeySession.prototype, 'remove', async (_target, _this, _args) => {
            console.groupCollapsed(
                `[EME] MediaKeySession::remove\n` +
                `    Session ID: ${_this.sessionId || '(not available)'}`
            );
            console.trace();
            console.groupEnd();
            return _target.apply(_this, _args);
        });
    }
})();