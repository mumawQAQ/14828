// ==UserScript==
// @name        CHICKEN MOD V1.4! PROE BOTS, WNA SPAM? PRESS SHIFT+G
// @version     1.4
// @description ME MEGA MOD OP, CHICKEN MOD. BEST MOD 2022/2023. JUST USE FOR SANDBOX!, ["PROE GOLD BOTS" PRESS (SHIFT+G) TO SPAM!]
// @author      ME MEGA MOD
// @match       *://moomoo.io/*
// @match       *://sandbox.moomoo.io/*
// @require     https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @grant       none
// @namespace -fd
// ==/UserScript==

var tick = 0;
let newPingDisplay = document.createElement("div");
(newPingDisplay = document.getElementById("pingDisplay")).style.top = "20px", newPingDisplay.style.fontSize = "15px", newPingDisplay.style.display = "block", document.body.append(newPingDisplay), window.onbeforeunload = null;
var websocket, myPlayer = {x: 0, y: 0}, nearestEnemy = [], modBots = [];
const wait = async e => new Promise(t => setTimeout(t, e)), connectBot = (e, t) => {
  let n = new WebSocket(websocket.url.split("&")[0] + "&token=" + encodeURIComponent(e));
  n.binaryType = "arraybuffer", n.emit = e => {
    n.send(window.msgpack.encode(e));
  }, n.letters = "qwertyuioplkjhgfdsazxcvbnm0987654321_", n.getRandomNames = function () {
    let e = n.letters.split(""), t = "";
    for (let i = 0; i < 15; i++) t += e[Math.floor(Math.random() * e.length)];
    return t;
  }, n.moveRan = {angle: 0, x: 0, y: 0, lastChange: 0}, n.done = !1, n.spawn = function () {
    n.weapons = [0], n.items = [0, 3, 6, 10], n.emit(["sp", [{name: n.getRandomNames(), moofoll: 1, skin: "constructor"}]]), !1 == n.done && (modBots.push(n), n.done = !0);
  }, n.speedHat = function () {
    n.posy < 2400 ? (n.emit(["13c", [0, 15, 0]]), n.emit(["13c", [0, 11, 1]])) : n.posy > 6850 && n.posy < 7550 ? (n.emit(["13c", [0, 31, 0]]), n.emit(["13c", [0, 11, 1]])) : (n.emit(["13c", [0, 12, 0]]), n.emit(["13c", [0, 11, 1]]));
  }, n.autobuy = function () {
    n.emit(["13c", [1, 53, 0]]), n.emit(["13c", [1, 6, 0]]), n.emit(["13c", [1, 20, 0]]), n.emit(["13c", [1, 31, 0]]), n.emit(["13c", [1, 15, 0]]), n.emit(["13c", [1, 12, 0]]), n.emit(["13c", [1, 40, 0]]), n.emit(["13c", [1, 11, 1]]);
  }, n.upgrade = function () {
    n.emit(["6", [7]]), n.emit(["6", [17]]), n.emit(["6", [31]]), n.emit(["6", [23]]), n.emit(["6", [10]]), n.emit(["6", [38]]), n.emit(["6", [4]]), n.emit(["6", [parseInt(document.getElementById("botWeapon").value)]]);
  }, n.weapons = [0], n.items = [0, 3, 6, 10], n.place = function (e, t = 0) {
    n.emit(["5", [e, null]]), n.emit(["c", [1, t]]), n.emit(["c", [0, t]]), n.emit(["5", [n.weapon, !0]]);
  }, n.lastHealth = 100, n.isSyncing = !1, n.secReload = 1, n.onopen = async () => {
    await wait(100), n.spawn();
  }, n.buildings = [], n.updateReloadInfo = function () {
    15 == n.weapon && (n.secReload = Math.min(n.secReload + 0.074, 1));
  }, n.playerClans = [], n.isTeamBuilding = function (e) {
    return n.playerClans[e] != n.clan && null != n.clan || null == n.clan;
  }, n.onmessage = e => {
    let t = window.msgpack.decode(new Uint8Array(e.data)), i;
    if (t.length > 1 ? (i = [t[0], ...t[1]])[1] instanceof Array && i : i = t, i) {
      if ("h" == i[0] && i[1] == n.id) {
        if (n.lastHealth - i[2] >= 40 && Date.now() - n.healTimeout >= 200) {
          for (let s = 0; s < 5; s++) n.place(n.items[0]);
          n.healTimeout = Date.now();
        } else setTimeout(() => {
          for (let e = 0; e < 5; e++) n.place(n.items[0]);
        }, 90);
        n.lastHealth = i[2];
      }
      if (11 == i[0] && n.spawn(), "1" == i[0] && null == n.id && (n.id = i[1]), "17" == i[0] && i[1] && (i[2] ? n.weapons = i[1] : n.items = i[1]), "6" == i[0]) for (let r = 0; r < i[1].length / 8; r++) {
        let a = i[1].slice(8 * r, 8 * r + 8);
        n.buildings.push(a);
      }
      if ("12" == i[0]) for (let o = 0; o < n.buildings.length; o++) {
        let l = n.buildings[o];
        l && l[0] == i[1] && n.buildings.splice(o, 1);
      }
      if ("p" == i[0] && window.toggles.teamsync && n.weapons[1] == document.getElementById("botWeapon").value && (n.isSyncing = !0, setTimeout(() => {
        n.isSyncing = !1;
      }, 250)), "18" == i[0] && 15 == n.weapons[1] && 100 > Math.hypot(n.posy - i[2], n.posx - i[1]) && (1 > Math.abs(n.dir - i[3]) || Math.atan2(nearestEnemy[2] - n.posy, nearestEnemy[1] - n.posx) == i[3]) && (n.secReload = -0.074), "33" == i[0]) for (let c = 0; c < i[1].length / 13; c++) {
        let h = i[1].slice(13 * c, 13 * c + 13);
        if (n.playerClans[h[0]] = h[7], h[0] == n.id) {
          n.id = h[0], n.posx = h[1], n.posy = h[2], n.dir = h[3], n.object = h[4], n.weapon = h[5], n.clan = h[7], n.isLeader = h[8], n.hat = h[9], n.accessory = h[10], n.isSkull = h[11], n.updateReloadInfo();
          let u = document.getElementById("botConfig").value, f = document.getElementById("botWeapon").value, d = n.buildings.filter(e => 15 == e[6] && e[7] != n.sid && n.isTeamBuilding(e[7])).sort((e, t) => Math.hypot(e[2] - n.posy, e[1] - n.posx) - Math.hypot(t[2] - n.posy, t[1] - n.posx))[0];
          if (d && 80 > Math.hypot(d[2] - n.posy, d[1] - n.posx) ? n.intrap = !0 : n.intrap = !1, !0 == n.isSyncing) {
            let _ = Math.atan2(nearestEnemy[2] - n.posy, nearestEnemy[1] - n.posx);
            n.emit(["5", [n.weapons[1], !0]]), n.emit(["13c", [0, 53, 0]]), n.emit(["c", [1, _]]), n.emit(["c", [0, _]]), n.emit(["2", [_]]);
          } else if (null != n.secReload && n.secReload < 1) n.emit(["5", [n.weapons[1], !0]]), n.emit(["13c", [0, 11, 1]]), n.emit(["13c", [0, 6, 0]]), Math.sqrt(Math.pow(myPlayer.y - n.posy, 2) + Math.pow(myPlayer.x - n.posx, 2)) > 100 ? n.emit(["33", [Math.atan2(myPlayer.y - n.posy, myPlayer.x - n.posx)]]) : n.emit(["33", [null]]); else if (!0 == n.intrap) {
            let p = 10 == n.weapons[1] ? 10 : n.weapons[0];
            n.emit(["5", [p, !0]]), n.emit(["13c", [0, 40, 0]]), n.emit(["c", [1, Math.atan2(d[2] - n.posy, d[1] - n.posx)]]), n.emit(["c", [0, Math.atan2(d[2] - n.posy, d[1] - n.posx)]]), n.emit(["2", [Math.atan2(d[2] - n.posy, d[1] - n.posx)]]), n.emit(["2", [Math.atan2(d[2] - n.posy, d[1] - n.posx)]]);
          } else if (0 == u && n.weapons[1] == f) Math.sqrt(Math.pow(myPlayer.y - n.posy, 2) + Math.pow(myPlayer.x - n.posx, 2)) > 100 ? (n.emit(["33", [Math.atan2(myPlayer.y - n.posy, myPlayer.x - n.posx)]]), n.emit(["5", [n.weapons[0], !0]]), n.emit(["c", [1, Number.MAX_VALUE]]), n.emit(["c", [0, Number.MAX_VALUE]])) : n.emit(["33", [null]]), n.speedHat(); else if (1 == u && n.weapons[1] == f) Math.sqrt(Math.pow(myPlayer.y - n.posy, 2) + Math.pow(myPlayer.x - n.posx, 2)) > 200 ? (n.emit(["33", [Math.atan2(myPlayer.y - n.posy, myPlayer.x - n.posx)]]), n.emit(["5", [n.weapons[0], !0]]), n.emit(["c", [1, Number.MAX_VALUE]]), n.emit(["c", [0, Number.MAX_VALUE]]), n.speedHat()) : (Math.sqrt(Math.pow(myPlayer.y - n.posy, 2) + Math.pow(myPlayer.x - n.posx, 2)) > 100 ? (n.emit(["33", [Math.atan2(myPlayer.y - n.posy, myPlayer.x - n.posx)]]), nearestEnemy.length || n.speedHat()) : n.emit(["33", [null]]), nearestEnemy.length && (n.emit(["5", [n.weapons[1], !0]]), n.emit(["c", [1, Math.atan2(nearestEnemy[2] - n.posy, nearestEnemy[1] - n.posx)]]), n.emit(["c", [0, Math.atan2(nearestEnemy[2] - n.posy, nearestEnemy[1] - n.posx)]]), n.emit(["2", [Math.atan2(nearestEnemy[2] - n.posy, nearestEnemy[1] - n.posx)]]), n.emit(["13c", [0, 11, 1]]), n.emit(["13c", [0, 20, 0]]))); else {
            let g = [-0.77, -2.34, 2.35, 0.77, 1.57, 3.14, -1.57, 0];
            4 != n.weapons[0] && (n.place(n.items[3], n.moveRan.angle - 1.25 * Math.PI), n.place(n.items[3], n.moveRan.angle + 1.25 * Math.PI), n.place(n.items[3], n.moveRan.angle + Math.PI)), n.emit(["33", [n.moveRan.angle]]), n.emit(["c", [1, Number.MAX_VALUE]]), n.emit(["c", [0, Number.MAX_VALUE]]), n.emit(["5", [n.weapons[0], !0]]), (Date.now() - n.moveRan.lastChange >= 1e4 || Math.sqrt(Math.pow(n.moveRan.y - n.posy, 2) + Math.pow(n.moveRan.x - n.posx, 2)) > 3300) && (n.moveRan.angle = g[Math.floor(Math.random() * g.length)], n.moveRan.y = n.posy, n.moveRan.x = n.posx, n.moveRan.lastChange = Date.now()), n.upgrade(), n.speedHat(), n.autobuy();
          }
        }
      }
    }
  };
};
WebSocket.prototype.oldSend = WebSocket.prototype.send, WebSocket.prototype.send = function (e) {
  websocket || (websocket = this), this.oldSend(e);
}, function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var s = t[i] = {i: i, l: !1, exports: {}};
    return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i});
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0});
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) {
      return e[t];
    }.bind(null, s));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 21);
}([function (e, t, n) {
  var i = t.global = n(25), s = t.hasBuffer = i && !!i.isBuffer, r = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer, a = t.isArray = n(5);
  t.isArrayBuffer = r ? function (e) {
    return e instanceof ArrayBuffer || _(e);
  } : g;
  var o = t.isBuffer = s ? i.isBuffer : g, l = t.isView = r ? ArrayBuffer.isView || m("ArrayBuffer", "buffer") : g;
  t.alloc = d, t.concat = function (e, n) {
    n || (n = 0, Array.prototype.forEach.call(e, function (e) {
      n += e.length;
    }));
    var i = this !== t && this || e[0], s = d.call(i, n), r = 0;
    return Array.prototype.forEach.call(e, function (e) {
      r += f.copy.call(e, s, r);
    }), s;
  }, t.from = function (e) {
    return "string" == typeof e ? function (e) {
      var t = 3 * e.length, n = d.call(this, t), i = f.write.call(n, e);
      return t !== i && (n = f.slice.call(n, 0, i)), n;
    }.call(this, e) : p(this).from(e);
  };
  var c = t.Array = n(28), h = t.Buffer = n(29), u = t.Uint8Array = n(30), f = t.prototype = n(6);
  function d(e) {
    return p(this).alloc(e);
  }
  var _ = m("ArrayBuffer");
  function p(e) {
    return o(e) ? h : l(e) ? u : a(e) ? c : s ? h : r ? u : c;
  }
  function g() {
    return !1;
  }
  function m(e, t) {
    return e = "[object " + e + "]", function (n) {
      return null != n && {}.toString.call(t ? n[t] : n) === e;
    };
  }
}, function (e, t, n) {
  var i = n(5);
  t.createCodec = o, t.install = function (e) {
    for (var t in e) r.prototype[t] = a(r.prototype[t], e[t]);
  }, t.filter = function (e) {
    return i(e) ? function (e) {
      return e = e.slice(), function (n) {
        return e.reduce(t, n);
      };
      function t(e, t) {
        return t(e);
      }
    }(e) : e;
  };
  var s = n(0);
  function r(e) {
    if (!(this instanceof r)) return new r(e);
    this.options = e, this.init();
  }
  function a(e, t) {
    return e && t ? function () {
      return e.apply(this, arguments), t.apply(this, arguments);
    } : e || t;
  }
  function o(e) {
    return new r(e);
  }
  r.prototype.init = function () {
    var e = this.options;
    return e && e.uint8array && (this.bufferish = s.Uint8Array), this;
  }, t.preset = o({preset: !0});
}, function (e, t, n) {
  var i = n(3).ExtBuffer, s = n(32), r = n(33), a = n(1);
  function o() {
    var e, t, n = this.options;
    return this.encode = (e = n, t = r.getWriteType(e), function (e, n) {
      var i = t[typeof n];
      if (!i) throw Error('Unsupported type "' + typeof n + '": ' + n);
      i(e, n);
    }), n && n.preset && s.setExtPackers(this), this;
  }
  a.install({addExtPacker: function (e, t, n) {
    n = a.filter(n);
    var s = t.name;
    function r(t) {
      return n && (t = n(t)), new i(t, e);
    }
    s && "Object" !== s ? (this.extPackers || (this.extPackers = {}))[s] = r : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, r]);
  }, getExtPacker: function (e) {
    var t = this.extPackers || (this.extPackers = {}), n = e.constructor, i = n && n.name && t[n.name];
    if (i) return i;
    for (var s = this.extEncoderList || (this.extEncoderList = []), r = s.length, a = 0; a < r; a++) {
      var o = s[a];
      if (n === o[0]) return o[1];
    }
  }, init: o}), t.preset = o.call(a.preset);
}, function (e, t, n) {
  t.ExtBuffer = function e(t, n) {
    if (!(this instanceof e)) return new e(t, n);
    this.buffer = i.from(t), this.type = n;
  };
  var i = n(0);
}, function (e, t) {
  t.read = function (e, t, n, i, s) {
    var r, a, o = 8 * s - i - 1, l = (1 << o) - 1, c = l >> 1, h = -7, u = n ? s - 1 : 0, f = n ? -1 : 1, d = e[t + u];
    for (u += f, r = d & (1 << -h) - 1, d >>= -h, h += o; h > 0; r = 256 * r + e[t + u], u += f, h -= 8) ;
    for (a = r & (1 << -h) - 1, r >>= -h, h += i; h > 0; a = 256 * a + e[t + u], u += f, h -= 8) ;
    if (0 === r) r = 1 - c; else {
      if (r === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
      a += Math.pow(2, i), r -= c;
    }
    return (d ? -1 : 1) * a * Math.pow(2, r - i);
  }, t.write = function (e, t, n, i, s, r) {
    var a, o, l, c = 8 * r - s - 1, h = (1 << c) - 1, u = h >> 1, f = 23 === s ? 5.960464477539062e-8 : 0, d = i ? 0 : r - 1, _ = i ? 1 : -1, p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + u >= 1 ? f / l : f * Math.pow(2, 1 - u)) * l >= 2 && (a++, l /= 2), a + u >= h ? (o = 0, a = h) : a + u >= 1 ? (o = (t * l - 1) * Math.pow(2, s), a += u) : (o = t * Math.pow(2, u - 1) * Math.pow(2, s), a = 0)); s >= 8; e[n + d] = 255 & o, d += _, o /= 256, s -= 8) ;
    for (a = a << s | o, c += s; c > 0; e[n + d] = 255 & a, d += _, a /= 256, c -= 8) ;
    e[n + d - _] |= 128 * p;
  };
}, function (e, t) {
  var n = {}.toString;
  e.exports = Array.isArray || function (e) {
    return "[object Array]" == n.call(e);
  };
}, function (e, t, n) {
  var i = n(31), s = "write";
  t.copy = c, t.slice = h, t.toString = function (e, t, n) {
    return (!o && r.isBuffer(this) ? this.toString : i.toString).apply(this, arguments);
  }, t.write = function () {
    return (this[s] || i[s]).apply(this, arguments);
  };
  var r = n(0), a = r.global, o = r.hasBuffer && "TYPED_ARRAY_SUPPORT" in a, l = o && !a.TYPED_ARRAY_SUPPORT;
  function c(e, t, n, s) {
    var a = r.isBuffer(this), o = r.isBuffer(e);
    if (a && o) return this.copy(e, t, n, s);
    if (l || a || o || !r.isView(this) || !r.isView(e)) return i.copy.call(this, e, t, n, s);
    var c = n || null != s ? h.call(this, n, s) : this;
    return e.set(c, t), c.length;
  }
  function h(e, t) {
    var n = this.slice || !l && this.subarray;
    if (n) return n.call(this, e, t);
    var i = r.alloc.call(this, t - e);
    return c.call(this, i, 0, e, t), i;
  }
}, function (e, t, n) {
  (function (e) {
    !function (t) {
      var n, i = "undefined", s = i !== typeof e && e, r = i !== typeof Uint8Array && Uint8Array, a = i !== typeof ArrayBuffer && ArrayBuffer, o = [0, 0, 0, 0, 0, 0, 0, 0], l = Array.isArray || function (e) {
        return !!e && "[object Array]" == Object.prototype.toString.call(e);
      };
      function c(e, l, c) {
        var v = l ? 0 : 4, w = l ? 4 : 0, b = l ? 0 : 3, x = l ? 1 : 2, E = l ? 2 : 1, I = l ? 3 : 0, S = l ? g : y, P = l ? m : k, T = C.prototype, B = "is" + e, A = "_" + B;
        return T.buffer = void 0, T.offset = 0, T[A] = !0, T.toNumber = O, T.toString = function (e) {
          var t = this.buffer, n = this.offset, i = j(t, n + v), s = j(t, n + w), r = "", a = !c && 2147483648 & i;
          for (a && (i = ~i, s = 4294967296 - s), e = e || 10;;) {
            var o = i % e * 4294967296 + s;
            if (i = Math.floor(i / e), s = Math.floor(o / e), r = (o % e).toString(e) + r, !i && !s) break;
          }
          return a && (r = "-" + r), r;
        }, T.toJSON = O, T.toArray = h, s && (T.toBuffer = u), r && (T.toArrayBuffer = f), C[B] = function (e) {
          return !(!e || !e[A]);
        }, t[e] = C, C;
        function C(e, t, s, l) {
          var c, h, u, f, g;
          return this instanceof C ? (c = this, h = e, u = t, f = s, g = l, void ((r && a && (h instanceof a && (h = new r(h)), f instanceof a && (f = new r(f))), h || u || f || n) ? (d(h, u) || (g = u, f = h, u = 0, h = new (n || Array)(8)), c.buffer = h, c.offset = u |= 0, i !== typeof f && ("string" == typeof f ? function (e, t, n, i) {
            var s = 0, r = n.length, a = 0, o = 0;
            "-" === n[0] && s++;
            for (var l = s; s < r;) {
              var c = parseInt(n[s++], i);
              if (!(c >= 0)) break;
              o = o * i + c, a = a * i + Math.floor(o / 4294967296), o %= 4294967296;
            }
            l && (a = ~a, o ? o = 4294967296 - o : a++), R(e, t + v, a), R(e, t + w, o);
          }(h, u, f, g || 10) : d(f, g) ? _(h, u, f, g) : "number" == typeof g ? (R(h, u + v, f), R(h, u + w, g)) : f > 0 ? S(h, u, f) : f < 0 ? P(h, u, f) : _(h, u, o, 0))) : c.buffer = p(o, 0))) : new C(e, t, s, l);
        }
        function O() {
          var e = this.buffer, t = this.offset, n = j(e, t + v), i = j(e, t + w);
          return c || (n |= 0), n ? 4294967296 * n + i : i;
        }
        function R(e, t, n) {
          e[t + I] = 255 & n, n >>= 8, e[t + E] = 255 & n, n >>= 8, e[t + x] = 255 & n, n >>= 8, e[t + b] = 255 & n;
        }
        function j(e, t) {
          return 16777216 * e[t + b] + (e[t + x] << 16) + (e[t + E] << 8) + e[t + I];
        }
      }
      function h(e) {
        var t = this.buffer, i = this.offset;
        return n = null, !1 !== e && 0 === i && 8 === t.length && l(t) ? t : p(t, i);
      }
      function u(t) {
        var i = this.buffer, r = this.offset;
        if (n = s, !1 !== t && 0 === r && 8 === i.length && e.isBuffer(i)) return i;
        var a = new s(8);
        return _(a, 0, i, r), a;
      }
      function f(e) {
        var t = this.buffer, i = this.offset, s = t.buffer;
        if (n = r, !1 !== e && 0 === i && s instanceof a && 8 === s.byteLength) return s;
        var o = new r(8);
        return _(o, 0, t, i), o.buffer;
      }
      function d(e, t) {
        var n = e && e.length;
        return t |= 0, n && t + 8 <= n && "string" != typeof e[t];
      }
      function _(e, t, n, i) {
        t |= 0, i |= 0;
        for (var s = 0; s < 8; s++) e[t++] = 255 & n[i++];
      }
      function p(e, t) {
        return Array.prototype.slice.call(e, t, t + 8);
      }
      function g(e, t, n) {
        for (var i = t + 8; i > t;) e[--i] = 255 & n, n /= 256;
      }
      function m(e, t, n) {
        var i = t + 8;
        for (n++; i > t;) e[--i] = 255 & -n ^ 255, n /= 256;
      }
      function y(e, t, n) {
        for (var i = t + 8; t < i;) e[t++] = 255 & n, n /= 256;
      }
      function k(e, t, n) {
        var i = t + 8;
        for (n++; t < i;) e[t++] = 255 & -n ^ 255, n /= 256;
      }
      c("Uint64BE", !0, !0), c("Int64BE", !0, !1), c("Uint64LE", !1, !0), c("Int64LE", !1, !1);
    }("string" != typeof t.nodeName ? t : this || {});
  }.call(this, n(11).Buffer));
}, function (e, t, n) {
  var i = n(3).ExtBuffer, s = n(35), r = n(17).readUint8, a = n(36), o = n(1);
  function l() {
    var e, t, n = this.options;
    return this.decode = (e = n, t = a.getReadToken(e), function (e) {
      var n = r(e), i = t[n];
      if (!i) throw Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
      return i(e);
    }), n && n.preset && s.setExtUnpackers(this), this;
  }
  o.install({addExtUnpacker: function (e, t) {
    (this.extUnpackers || (this.extUnpackers = []))[e] = o.filter(t);
  }, getExtUnpacker: function (e) {
    return (this.extUnpackers || (this.extUnpackers = []))[e] || function (t) {
      return new i(t, e);
    };
  }, init: l}), t.preset = l.call(o.preset);
}, function (e, t, n) {
  t.encode = function (e, t) {
    var n = new i(t);
    return n.write(e), n.read();
  };
  var i = n(10).EncodeBuffer;
}, function (e, t, n) {
  t.EncodeBuffer = s;
  var i = n(2).preset;
  function s(e) {
    if (!(this instanceof s)) return new s(e);
    if (e && (this.options = e, e.codec)) {
      var t = this.codec = e.codec;
      t.bufferish && (this.bufferish = t.bufferish);
    }
  }
  n(14).FlexEncoder.mixin(s.prototype), s.prototype.codec = i, s.prototype.write = function (e) {
    this.codec.encode(this, e);
  };
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var i = n(26), s = n(4), r = n(27);
    function a() {
      return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function o(e, t) {
      if (a() < t) throw RangeError("Invalid typed array length");
      return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e;
    }
    function l(e, t, n) {
      if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
      if ("number" == typeof e) {
        if ("string" == typeof t) throw Error("If encoding is specified then the first argument must be a string");
        return u(this, e);
      }
      return c(this, e, t, n);
    }
    function c(e, t, n, i) {
      if ("number" == typeof t) throw TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, i) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (i || 0)) throw RangeError("'length' is out of bounds");
        return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = f(e, t), e;
      }(e, t, n, i) : "string" == typeof t ? function (e, t, n) {
        if ("string" == typeof n && "" !== n || (n = "utf8"), !l.isEncoding(n)) throw TypeError('"encoding" must be a valid string encoding');
        var i = 0 | _(t, n), s = (e = o(e, i)).write(t, n);
        return s !== i && (e = e.slice(0, s)), e;
      }(e, t, n) : function (e, t) {
        if (l.isBuffer(t)) {
          var n, i = 0 | d(t.length);
          return 0 === (e = o(e, i)).length || t.copy(e, 0, 0, i), e;
        }
        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? o(e, 0) : f(e, t);
          if ("Buffer" === t.type && r(t.data)) return f(e, t.data);
        }
        throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(e, t);
    }
    function h(e) {
      if ("number" != typeof e) throw TypeError('"size" argument must be a number');
      if (e < 0) throw RangeError('"size" argument must not be negative');
    }
    function u(e, t) {
      if (h(t), e = o(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
      return e;
    }
    function f(e, t) {
      var n = t.length < 0 ? 0 : 0 | d(t.length);
      e = o(e, n);
      for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
      return e;
    }
    function d(e) {
      if (e >= a()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      return 0 | e;
    }
    function _(e, t) {
      if (l.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var i = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return z(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return q(e).length;
        default:
          if (i) return z(e).length;
          t = ("" + t).toLowerCase(), i = !0;
      }
    }
    function p(e, t, n) {
      var i = e[t];
      e[t] = e[n], e[n] = i;
    }
    function g(e, t, n, i, s) {
      if (0 === e.length) return -1;
      if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), isNaN(n = +n) && (n = s ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (s) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (!s) return -1;
        n = 0;
      }
      if ("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, i, s);
      if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, i, s);
      throw TypeError("val must be string, number or Buffer");
    }
    function m(e, t, n, i, s) {
      var r, a = 1, o = e.length, l = t.length;
      if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
        if (e.length < 2 || t.length < 2) return -1;
        a = 2, o /= 2, l /= 2, n /= 2;
      }
      function c(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a);
      }
      if (s) {
        var h = -1;
        for (r = n; r < o; r++) if (c(e, r) === c(t, -1 === h ? 0 : r - h)) {
          if (-1 === h && (h = r), r - h + 1 === l) return h * a;
        } else -1 !== h && (r -= r - h), h = -1;
      } else for (n + l > o && (n = o - l), r = n; r >= 0; r--) {
        for (var u = !0, f = 0; f < l; f++) if (c(e, r + f) !== c(t, f)) {
          u = !1;
          break;
        }
        if (u) return r;
      }
      return -1;
    }
    function y(e, t, n, i) {
      n = Number(n) || 0;
      var s = e.length - n;
      i ? (i = Number(i)) > s && (i = s) : i = s;
      var r = t.length;
      if (r % 2 != 0) throw TypeError("Invalid hex string");
      i > r / 2 && (i = r / 2);
      for (var a = 0; a < i; ++a) {
        var o = parseInt(t.substr(2 * a, 2), 16);
        if (isNaN(o)) break;
        e[n + a] = o;
      }
      return a;
    }
    function k(e, t, n, i) {
      return Y(z(t, e.length - n), e, n, i);
    }
    function v(e, t, n, i) {
      return Y(function (e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t;
      }(t), e, n, i);
    }
    function w(e, t, n, i) {
      return v(e, t, n, i);
    }
    function b(e, t, n, i) {
      return Y(q(t), e, n, i);
    }
    function x(e, t, n, i) {
      return Y(function (e, t) {
        for (var n, i, s, r = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) i = (n = e.charCodeAt(a)) >> 8, s = n % 256, r.push(s), r.push(i);
        return r;
      }(t, e.length - n), e, n, i);
    }
    function E(e, t, n) {
      return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n));
    }
    function I(e, t, n) {
      n = Math.min(e.length, n);
      for (var i = [], s = t; s < n;) {
        var r, a, o, l, c = e[s], h = null, u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (s + u <= n) switch (u) {
          case 1:
            c < 128 && (h = c);
            break;
          case 2:
            128 == (192 & (r = e[s + 1])) && (l = (31 & c) << 6 | 63 & r) > 127 && (h = l);
            break;
          case 3:
            r = e[s + 1], a = e[s + 2], 128 == (192 & r) && 128 == (192 & a) && (l = (15 & c) << 12 | (63 & r) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (h = l);
            break;
          case 4:
            r = e[s + 1], a = e[s + 2], o = e[s + 3], 128 == (192 & r) && 128 == (192 & a) && 128 == (192 & o) && (l = (15 & c) << 18 | (63 & r) << 12 | (63 & a) << 6 | 63 & o) > 65535 && l < 1114112 && (h = l);
        }
        null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), s += u;
      }
      return function (e) {
        var t = e.length;
        if (t <= S) return String.fromCharCode.apply(String, e);
        for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += S));
        return n;
      }(i);
    }
    t.Buffer = l, t.SlowBuffer = function (e) {
      return +e != e && (e = 0), l.alloc(+e);
    }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {__proto__: Uint8Array.prototype, foo: function () {
          return 42;
        }}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function (e) {
      return e.__proto__ = l.prototype, e;
    }, l.from = function (e, t, n) {
      return c(null, e, t, n);
    }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {value: null, configurable: !0})), l.alloc = function (e, t, n) {
      var i, s, r;
      return i = e, s = t, r = n, h(i), i <= 0 ? o(null, i) : void 0 !== s ? "string" == typeof r ? o(null, i).fill(s, r) : o(null, i).fill(s) : o(null, i);
    }, l.allocUnsafe = function (e) {
      return u(null, e);
    }, l.allocUnsafeSlow = function (e) {
      return u(null, e);
    }, l.isBuffer = function (e) {
      return !(null == e || !e._isBuffer);
    }, l.compare = function (e, t) {
      if (!l.isBuffer(e) || !l.isBuffer(t)) throw TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (var n = e.length, i = t.length, s = 0, r = Math.min(n, i); s < r; ++s) if (e[s] !== t[s]) {
        n = e[s], i = t[s];
        break;
      }
      return n < i ? -1 : i < n ? 1 : 0;
    }, l.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, l.concat = function (e, t) {
      if (!r(e)) throw TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return l.alloc(0);
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var n, i = l.allocUnsafe(t), s = 0;
      for (n = 0; n < e.length; ++n) {
        var a = e[n];
        if (!l.isBuffer(a)) throw TypeError('"list" argument must be an Array of Buffers');
        a.copy(i, s), s += a.length;
      }
      return i;
    }, l.byteLength = _, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) p(this, t, t + 1);
      return this;
    }, l.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
      return this;
    }, l.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
      return this;
    }, l.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function (e, t, n) {
        var i = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
          case "hex":
            return B(this, t, n);
          case "utf8":
          case "utf-8":
            return I(this, t, n);
          case "ascii":
            return P(this, t, n);
          case "latin1":
          case "binary":
            return T(this, t, n);
          case "base64":
            return E(this, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A(this, t, n);
          default:
            if (i) throw TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), i = !0;
        }
      }.apply(this, arguments);
    }, l.prototype.equals = function (e) {
      if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
      return this === e || 0 === l.compare(this, e);
    }, l.prototype.inspect = function () {
      var e = "", n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
    }, l.prototype.compare = function (e, t, n, i, s) {
      if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length) throw RangeError("out of range index");
      if (i >= s && t >= n) return 0;
      if (i >= s) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (var r = (s >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (t >>>= 0), o = Math.min(r, a), c = this.slice(i, s), h = e.slice(t, n), u = 0; u < o; ++u) if (c[u] !== h[u]) {
        r = c[u], a = h[u];
        break;
      }
      return r < a ? -1 : a < r ? 1 : 0;
    }, l.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }, l.prototype.indexOf = function (e, t, n) {
      return g(this, e, t, n, !0);
    }, l.prototype.lastIndexOf = function (e, t, n) {
      return g(this, e, t, n, !1);
    }, l.prototype.write = function (e, t, n, i) {
      if (void 0 === t) i = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0; else {
        if (!isFinite(t)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
      }
      var s, r, a, o, l = this.length - t;
      if ((void 0 === n || n > l) && (n = l), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var c = !1;;) switch (i) {
        case "hex":
          return y(this, e, t, n);
        case "utf8":
        case "utf-8":
          return k(this, e, t, n);
        case "ascii":
          return v(this, e, t, n);
        case "latin1":
        case "binary":
          return s = this, r = e, a = t, v(s, r, a, o = n);
        case "base64":
          return b(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return x(this, e, t, n);
        default:
          if (c) throw TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), c = !0;
      }
    }, l.prototype.toJSON = function () {
      return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)};
    };
    var S = 4096;
    function P(e, t, n) {
      var i = "";
      n = Math.min(e.length, n);
      for (var s = t; s < n; ++s) i += String.fromCharCode(127 & e[s]);
      return i;
    }
    function T(e, t, n) {
      var i = "";
      n = Math.min(e.length, n);
      for (var s = t; s < n; ++s) i += String.fromCharCode(e[s]);
      return i;
    }
    function B(e, t, n) {
      var i = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
      for (var s = "", r = t; r < n; ++r) s += H(e[r]);
      return s;
    }
    function A(e, t, n) {
      for (var i = e.slice(t, n), s = "", r = 0; r < i.length; r += 2) s += String.fromCharCode(i[r] + 256 * i[r + 1]);
      return s;
    }
    function C(e, t, n) {
      if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
      if (e + t > n) throw RangeError("Trying to access beyond buffer length");
    }
    function O(e, t, n, i, s, r) {
      if (!l.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
      if (t > s || t < r) throw RangeError('"value" argument is out of bounds');
      if (n + i > e.length) throw RangeError("Index out of range");
    }
    function R(e, t, n, i) {
      t < 0 && (t = 65535 + t + 1);
      for (var s = 0, r = Math.min(e.length - n, 2); s < r; ++s) e[n + s] = (t & 255 << 8 * (i ? s : 1 - s)) >>> 8 * (i ? s : 1 - s);
    }
    function j(e, t, n, i) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var s = 0, r = Math.min(e.length - n, 4); s < r; ++s) e[n + s] = t >>> 8 * (i ? s : 3 - s) & 255;
    }
    function D(e, t, n, i, s, r) {
      if (n + i > e.length || n < 0) throw RangeError("Index out of range");
    }
    function L(e, t, n, i, r) {
      return r || D(e, 0, n, 4), s.write(e, t, n, i, 23, 4), n + 4;
    }
    function M(e, t, n, i, r) {
      return r || D(e, 0, n, 8), s.write(e, t, n, i, 52, 8), n + 8;
    }
    l.prototype.slice = function (e, t) {
      var n, i = this.length;
      if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), l.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = l.prototype; else {
        var s = t - e;
        n = new l(s, void 0);
        for (var r = 0; r < s; ++r) n[r] = this[r + e];
      }
      return n;
    }, l.prototype.readUIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var i = this[e], s = 1, r = 0; ++r < t && (s *= 256);) i += this[e + r] * s;
      return i;
    }, l.prototype.readUIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var i = this[e + --t], s = 1; t > 0 && (s *= 256);) i += this[e + --t] * s;
      return i;
    }, l.prototype.readUInt8 = function (e, t) {
      return t || C(e, 1, this.length), this[e];
    }, l.prototype.readUInt16LE = function (e, t) {
      return t || C(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, l.prototype.readUInt16BE = function (e, t) {
      return t || C(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, l.prototype.readUInt32LE = function (e, t) {
      return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, l.prototype.readUInt32BE = function (e, t) {
      return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, l.prototype.readIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var i = this[e], s = 1, r = 0; ++r < t && (s *= 256);) i += this[e + r] * s;
      return i >= (s *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, l.prototype.readIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var i = t, s = 1, r = this[e + --i]; i > 0 && (s *= 256);) r += this[e + --i] * s;
      return r >= (s *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, l.prototype.readInt8 = function (e, t) {
      return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, l.prototype.readInt16LE = function (e, t) {
      t || C(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, l.prototype.readInt16BE = function (e, t) {
      t || C(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, l.prototype.readInt32LE = function (e, t) {
      return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, l.prototype.readInt32BE = function (e, t) {
      return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, l.prototype.readFloatLE = function (e, t) {
      return t || C(e, 4, this.length), s.read(this, e, !0, 23, 4);
    }, l.prototype.readFloatBE = function (e, t) {
      return t || C(e, 4, this.length), s.read(this, e, !1, 23, 4);
    }, l.prototype.readDoubleLE = function (e, t) {
      return t || C(e, 8, this.length), s.read(this, e, !0, 52, 8);
    }, l.prototype.readDoubleBE = function (e, t) {
      return t || C(e, 8, this.length), s.read(this, e, !1, 52, 8);
    }, l.prototype.writeUIntLE = function (e, t, n, i) {
      e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var s = 1, r = 0;
      for (this[t] = 255 & e; ++r < n && (s *= 256);) this[t + r] = e / s & 255;
      return t + n;
    }, l.prototype.writeUIntBE = function (e, t, n, i) {
      e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var s = n - 1, r = 1;
      for (this[t + s] = 255 & e; --s >= 0 && (r *= 256);) this[t + s] = e / r & 255;
      return t + n;
    }, l.prototype.writeUInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
    }, l.prototype.writeUInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
    }, l.prototype.writeUInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
    }, l.prototype.writeUInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4;
    }, l.prototype.writeUInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4;
    }, l.prototype.writeIntLE = function (e, t, n, i) {
      if (e = +e, t |= 0, !i) {
        var s = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, s - 1, -s);
      }
      var r = 0, a = 1, o = 0;
      for (this[t] = 255 & e; ++r < n && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + r - 1] && (o = 1), this[t + r] = (e / a >> 0) - o & 255;
      return t + n;
    }, l.prototype.writeIntBE = function (e, t, n, i) {
      if (e = +e, t |= 0, !i) {
        var s = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, s - 1, -s);
      }
      var r = n - 1, a = 1, o = 0;
      for (this[t + r] = 255 & e; --r >= 0 && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + r + 1] && (o = 1), this[t + r] = (e / a >> 0) - o & 255;
      return t + n;
    }, l.prototype.writeInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, l.prototype.writeInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
    }, l.prototype.writeInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
    }, l.prototype.writeInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4;
    }, l.prototype.writeInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4;
    }, l.prototype.writeFloatLE = function (e, t, n) {
      return L(this, e, t, !0, n);
    }, l.prototype.writeFloatBE = function (e, t, n) {
      return L(this, e, t, !1, n);
    }, l.prototype.writeDoubleLE = function (e, t, n) {
      return M(this, e, t, !0, n);
    }, l.prototype.writeDoubleBE = function (e, t, n) {
      return M(this, e, t, !1, n);
    }, l.prototype.copy = function (e, t, n, i) {
      if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || 0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw RangeError("sourceStart out of bounds");
      if (i < 0) throw RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
      var s, r = i - n;
      if (this === e && n < t && t < i) for (s = r - 1; s >= 0; --s) e[s + t] = this[s + n]; else if (r < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (s = 0; s < r; ++s) e[s + t] = this[s + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + r), t);
      return r;
    }, l.prototype.fill = function (e, t, n, i) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
          var s, r = e.charCodeAt(0);
          r < 256 && (e = r);
        }
        if (void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
        if ("string" == typeof i && !l.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
      if (n <= t) return this;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (s = t; s < n; ++s) this[s] = e; else {
        var a = l.isBuffer(e) ? e : z(new l(e, i).toString()), o = a.length;
        for (s = 0; s < n - t; ++s) this[s + t] = a[s % o];
      }
      return this;
    };
    var U = /[^+\/0-9A-Za-z-_]/g;
    function H(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16);
    }
    function z(e, t) {
      var n;
      t = t || 1 / 0;
      for (var i = e.length, s = null, r = [], a = 0; a < i; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!s) {
            if (n > 56319 || a + 1 === i) {
              (t -= 3) > -1 && r.push(239, 191, 189);
              continue;
            }
            s = n;
            continue;
          }
          if (n < 56320) {
            (t -= 3) > -1 && r.push(239, 191, 189), s = n;
            continue;
          }
          n = 65536 + (s - 55296 << 10 | n - 56320);
        } else s && (t -= 3) > -1 && r.push(239, 191, 189);
        if (s = null, n < 128) {
          if ((t -= 1) < 0) break;
          r.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          r.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw Error("Invalid code point");
          if ((t -= 4) < 0) break;
          r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }
      return r;
    }
    function q(e) {
      return i.toByteArray(function (e) {
        var t;
        if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(U, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e;
      }(e));
    }
    function Y(e, t, n, i) {
      for (var s = 0; s < i && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
      return s;
    }
  }.call(this, n(12)));
}, function (e, t) {
  var n;
  n = function () {
    return this;
  }();
  try {
    n = n || Function("return this")();
  } catch (i) {
    "object" == typeof window && (n = window);
  }
  e.exports = n;
}, function (e, t) {
  for (var n = t.uint8 = Array(256), i = 0; i <= 255; i++) n[i] = s(i);
  function s(e) {
    return function (t) {
      var n = t.reserve(1);
      t.buffer[n] = e;
    };
  }
}, function (e, t, n) {
  t.FlexDecoder = r, t.FlexEncoder = a;
  var i = n(0), s = "BUFFER_SHORTAGE";
  function r() {
    if (!(this instanceof r)) return new r;
  }
  function a() {
    if (!(this instanceof a)) return new a;
  }
  function o() {
    return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch();
  }
  function l(e) {
    (this.buffers || (this.buffers = [])).push(e);
  }
  function c(e) {
    return function (t) {
      for (var n in e) t[n] = e[n];
      return t;
    };
  }
  r.mixin = c({bufferish: i, write: function (e) {
    var t = this.offset ? i.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0;
  }, fetch: function e() {
    throw Error("method not implemented: fetch()");
  }, flush: function () {
    for (; this.offset < this.buffer.length;) {
      var e, t = this.offset;
      try {
        e = this.fetch();
      } catch (n) {
        if (n && n.message != s) throw n;
        this.offset = t;
        break;
      }
      this.push(e);
    }
  }, push: l, pull: function e() {
    return (this.buffers || (this.buffers = [])).shift();
  }, read: o, reserve: function (e) {
    var t = this.offset, n = t + e;
    if (n > this.buffer.length) throw Error(s);
    return this.offset = n, t;
  }, offset: 0}), r.mixin(r.prototype), a.mixin = c({bufferish: i, write: function e() {
    throw Error("method not implemented: write()");
  }, fetch: function () {
    var e = this.start;
    if (e < this.offset) {
      var t = this.start = this.offset;
      return i.prototype.slice.call(this.buffer, e, t);
    }
  }, flush: function () {
    for (; this.start < this.offset;) {
      var e = this.fetch();
      e && this.push(e);
    }
  }, push: l, pull: function () {
    var e = this.buffers || (this.buffers = []), t = e.length > 1 ? this.bufferish.concat(e) : e[0];
    return e.length = 0, t;
  }, read: o, reserve: function (e) {
    var t = 0 | e;
    if (this.buffer) {
      var n = this.buffer.length, i = 0 | this.offset, s = i + t;
      if (s < n) return this.offset = s, i;
      this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize));
    }
    return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0;
  }, send: function (e) {
    var t = e.length;
    if (t > this.minBufferSize) this.flush(), this.push(e); else {
      var n = this.reserve(t);
      i.prototype.copy.call(e, this.buffer, n);
    }
  }, maxBufferSize: 65536, minBufferSize: 2048, offset: 0, start: 0}), a.mixin(a.prototype);
}, function (e, t, n) {
  t.decode = function (e, t) {
    var n = new i(t);
    return n.write(e), n.read();
  };
  var i = n(16).DecodeBuffer;
}, function (e, t, n) {
  t.DecodeBuffer = s;
  var i = n(8).preset;
  function s(e) {
    if (!(this instanceof s)) return new s(e);
    if (e && (this.options = e, e.codec)) {
      var t = this.codec = e.codec;
      t.bufferish && (this.bufferish = t.bufferish);
    }
  }
  n(14).FlexDecoder.mixin(s.prototype), s.prototype.codec = i, s.prototype.fetch = function () {
    return this.codec.decode(this);
  };
}, function (e, t, n) {
  var i = n(4), s = n(7), r = s.Uint64BE, a = s.Int64BE;
  t.getReadFormat = function (e) {
    var t = o.hasArrayBuffer && e && e.binarraybuffer, n = e && e.int64;
    return {map: c && e && e.usemap ? u : h, array: f, str: d, bin: t ? p : _, ext: g, uint8: m, uint16: k, uint32: w, uint64: x(8, n ? S : E), int8: y, int16: v, int32: b, int64: x(8, n ? P : I), float32: x(4, T), float64: x(8, B)};
  }, t.readUint8 = m;
  var o = n(0), l = n(6), c = "undefined" != typeof Map;
  function h(e, t) {
    var n, i = {}, s = Array(t), r = Array(t), a = e.codec.decode;
    for (n = 0; n < t; n++) s[n] = a(e), r[n] = a(e);
    for (n = 0; n < t; n++) i[s[n]] = r[n];
    return i;
  }
  function u(e, t) {
    var n, i = new Map, s = Array(t), r = Array(t), a = e.codec.decode;
    for (n = 0; n < t; n++) s[n] = a(e), r[n] = a(e);
    for (n = 0; n < t; n++) i.set(s[n], r[n]);
    return i;
  }
  function f(e, t) {
    for (var n = Array(t), i = e.codec.decode, s = 0; s < t; s++) n[s] = i(e);
    return n;
  }
  function d(e, t) {
    var n = e.reserve(t);
    return l.toString.call(e.buffer, "utf-8", n, n + t);
  }
  function _(e, t) {
    var n = e.reserve(t), i = l.slice.call(e.buffer, n, n + t);
    return o.from(i);
  }
  function p(e, t) {
    var n = e.reserve(t), i = l.slice.call(e.buffer, n, n + t);
    return o.Uint8Array.from(i).buffer;
  }
  function g(e, t) {
    var n = e.reserve(t + 1), i = e.buffer[n++], s = n + t, r = e.codec.getExtUnpacker(i);
    if (!r) throw Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i));
    return r(l.slice.call(e.buffer, n, s));
  }
  function m(e) {
    var t = e.reserve(1);
    return e.buffer[t];
  }
  function y(e) {
    var t = e.reserve(1), n = e.buffer[t];
    return 128 & n ? n - 256 : n;
  }
  function k(e) {
    var t = e.reserve(2), n = e.buffer;
    return n[t++] << 8 | n[t];
  }
  function v(e) {
    var t = e.reserve(2), n = e.buffer, i = n[t++] << 8 | n[t];
    return 32768 & i ? i - 65536 : i;
  }
  function w(e) {
    var t = e.reserve(4), n = e.buffer;
    return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t];
  }
  function b(e) {
    var t = e.reserve(4), n = e.buffer;
    return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t];
  }
  function x(e, t) {
    return function (n) {
      var i = n.reserve(e);
      return t.call(n.buffer, i, !0);
    };
  }
  function E(e) {
    return new r(this, e).toNumber();
  }
  function I(e) {
    return new a(this, e).toNumber();
  }
  function S(e) {
    return new r(this, e);
  }
  function P(e) {
    return new a(this, e);
  }
  function T(e) {
    return i.read(this, e, !1, 23, 4);
  }
  function B(e) {
    return i.read(this, e, !1, 52, 8);
  }
}, function (e, t, n) {
  !function (t) {
    e.exports = t;
    var n = "listeners", i = {on: function (e, t) {
      return a(this, e).push(t), this;
    }, once: function (e, t) {
      var n = this;
      return i.originalListener = t, a(n, e).push(i), n;
      function i() {
        r.call(n, e, i), t.apply(this, arguments);
      }
    }, off: r, emit: function (e, t) {
      var n = this, i = a(n, e, !0);
      if (!i) return !1;
      var s = arguments.length;
      if (1 === s) i.forEach(function (e) {
        e.call(n);
      }); else if (2 === s) i.forEach(function (e) {
        e.call(n, t);
      }); else {
        var r = Array.prototype.slice.call(arguments, 1);
        i.forEach(function (e) {
          e.apply(n, r);
        });
      }
      return !!i.length;
    }};
    function s(e) {
      for (var t in i) e[t] = i[t];
      return e;
    }
    function r(e, t) {
      var i;
      if (arguments.length) {
        if (t) {
          if (i = a(this, e, !0)) {
            if (!(i = i.filter(function (e) {
              return e !== t && e.originalListener !== t;
            })).length) return r.call(this, e);
            this[n][e] = i;
          }
        } else if ((i = this[n]) && (delete i[e], !Object.keys(i).length)) return r.call(this);
      } else delete this[n];
      return this;
    }
    function a(e, t, i) {
      if (!i || e[n]) {
        var s = e[n] || (e[n] = {});
        return s[t] || (s[t] = []);
      }
    }
    s(t.prototype), t.mixin = s;
  }(function e() {
    if (!(this instanceof e)) return new e;
  });
}, function (e, t, n) {
  (function (t) {
    e.exports.maxScreenWidth = 2112, e.exports.maxScreenHeight = 1188, e.exports.serverUpdateRate = 9, e.exports.maxPlayers = 50, e.exports.maxPlayersHard = 50, e.exports.collisionDepth = 6, e.exports.minimapRate = 3e3, e.exports.colGrid = 10, e.exports.clientSendRate = 5, e.exports.healthBarWidth = 50, e.exports.healthBarPad = 4.5, e.exports.reloadBarWidth = 22, e.exports.iconPadding = 15, e.exports.iconPad = 0.9, e.exports.deathFadeout = 3e3, e.exports.crownIconScale = 60, e.exports.crownPad = 35, e.exports.chatCountdown = 3e3, e.exports.chatCooldown = 500, e.exports.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME, e.exports.maxAge = 100, e.exports.gatherAngle = Math.PI / 2.6, e.exports.gatherWiggle = 10, e.exports.hitReturnRatio = 0.25, e.exports.hitAngle = Math.PI / 2, e.exports.playerScale = 35, e.exports.playerSpeed = 0.0016, e.exports.playerDecel = 0.993, e.exports.nameY = 34, e.exports.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"], e.exports.animalCount = 7, e.exports.aiTurnRandom = 0.06, e.exports.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"], e.exports.shieldAngle = Math.PI / 3, e.exports.weaponVariants = [{id: 0, src: "", xp: 0, val: 1}, {id: 1, src: "_g", xp: 3e3, val: 1.1}, {id: 2, src: "_d", xp: 7e3, val: 1.18}, {id: 3, src: "_r", poison: !0, xp: 12e3, val: 1.18}], e.exports.fetchVariant = function (t) {
      for (var n = t.weaponXP[t.weaponIndex] || 0, i = e.exports.weaponVariants.length - 1; i >= 0; --i) if (n >= e.exports.weaponVariants[i].xp) return e.exports.weaponVariants[i];
    }, e.exports.resourceTypes = ["wood", "food", "stone", "points"], e.exports.areaCount = 7, e.exports.treesPerArea = 9, e.exports.bushesPerArea = 3, e.exports.totalRocks = 32, e.exports.goldOres = 7, e.exports.riverWidth = 724, e.exports.riverPadding = 114, e.exports.waterCurrent = 0.0011, e.exports.waveSpeed = 0.0001, e.exports.waveMax = 1.3, e.exports.treeScales = [150, 160, 165, 175], e.exports.bushScales = [80, 85, 95], e.exports.rockScales = [80, 85, 90], e.exports.snowBiomeTop = 2400, e.exports.snowSpeed = 0.75, e.exports.maxNameLength = 15, e.exports.mapScale = 14400, e.exports.mapPingScale = 40, e.exports.mapPingTime = 2200;
  }.call(this, n(41)));
}, function (e, t) {
  var n = {utf8: {stringToBytes: function (e) {
    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
  }, bytesToString: function (e) {
    return decodeURIComponent(escape(n.bin.bytesToString(e)));
  }}, bin: {stringToBytes: function (e) {
    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
    return t;
  }, bytesToString: function (e) {
    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
    return t.join("");
  }}};
  e.exports = n;
}, function (e, t, n) {
  "use strict";
  window.loadedScript = !0;
  var i, s = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
  n(22);
  var r = n(23), a = n(42), o = n(43), l = n(19), c = n(44), h = n(45), u = (n(46), n(47)), f = n(48), d = n(55), _ = n(56), p = n(57), g = n(58).obj, m = new o.TextManager, y = new (n(59))("moomoo.io", 3e3, l.maxPlayers, 5, !1);
  y.debugLog = !1;
  var k = !1;
  function v() {
    te && tt && (k = !0, s ? window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {action: "homepage"}).then(function (e) {
      w(e);
    }) : w(null));
  }
  function w(e) {
    y.start(function (t, n, i) {
      var o = (s ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + i;
      e && (o += "&token=" + encodeURIComponent(e)), r.connect(o, function (e) {
        iQ(), setInterval(() => iQ(), 300), e ? tn(e) : (ef.onclick = a.checkTrusted(function () {
          var e, t;
          e = ++tu > 1, t = Date.now() - th > tc, e && t ? (th = Date.now(), tf()) : tw();
        }), a.hookTouchEvents(ef), ed.onclick = a.checkTrusted(function () {
          st("https://krunker.io");
        }), a.hookTouchEvents(ed), ep.onclick = a.checkTrusted(function () {
          setTimeout(function () {
            var e;
            (e = prompt("party key", ew.value)) && (window.onbeforeunload = void 0, window.location.href = "/?server=" + e);
          }, 10);
        }), a.hookTouchEvents(ep), e$.onclick = a.checkTrusted(function () {
          e2.classList.contains("showing") ? (e2.classList.remove("showing"), eg.innerText = "Settings") : (e2.classList.add("showing"), eg.innerText = "Close");
        }), a.hookTouchEvents(e$), em.onclick = a.checkTrusted(function () {
          nr(), "block" != eD.style.display ? t1() : eD.style.display = "none";
        }), a.hookTouchEvents(em), ey.onclick = a.checkTrusted(function () {
          "block" != eY.style.display ? (eY.style.display = "block", eD.style.display = "none", tW(), tA()) : eY.style.display = "none";
        }), a.hookTouchEvents(ey), e0.onclick = a.checkTrusted(function () {
          tF();
        }), a.hookTouchEvents(e0), eU.onclick = a.checkTrusted(function () {
          nk();
        }), a.hookTouchEvents(eU), function () {
          for (var e = 0; e < nI.length; ++e) {
            var t = new Image;
            t.onload = function () {
              this.isLoaded = !0;
            }, t.src = "crosshair" == nI[e] ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Crosshairs_Red.svg/1200px-Crosshairs_Red.svg.png" : ".././img/icons/" + nI[e] + ".png", nE[nI[e]] = t;
          }
        }(), e6.style.display = "none", e4.style.display = "block", eA.value = P("moo_name") || "", function () {
          var e, t = P("native_resolution");
          tH(t ? "true" == t : "undefined" != typeof cordova), B = "true" == P("show_ping"), e3.hidden = !B, P("moo_moosic"), setInterval(function () {
            window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"));
          }, 1e3), tz(), a.removeAllChildren(eI);
          for (var n = 0; n < h.weapons.length + h.list.length; ++n) e = n, a.generateElement({id: "actionBarItem" + e, class: "actionBarItem", style: "display:none", onmouseout: function () {
            t_();
          }, parent: eI});
          for (n = 0; n < h.list.length + h.weapons.length; ++n) !function (e) {
            var t = document.createElement("canvas");
            t.width = t.height = 66;
            var n = t.getContext("2d");
            if (n.translate(t.width / 2, t.height / 2), n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, h.weapons[e]) {
              n.rotate(Math.PI / 4 + Math.PI);
              var i = new Image;
              nX[h.weapons[e].src] = i, i.onload = function () {
                this.isLoaded = !0;
                var i = 1 / (this.height / this.width), s = h.weapons[e].iPad || 1;
                n.drawImage(this, -t.width * s * l.iconPad * i / 2, -t.height * s * l.iconPad / 2, t.width * s * i * l.iconPad, t.height * s * l.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-t.width / 2, -t.height / 2, t.width, t.height), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")";
              }, i.src = ".././img/weapons/" + h.weapons[e].src + ".png", (s = document.getElementById("actionBarItem" + e)).onmouseover = a.checkTrusted(function () {
                t_(h.weapons[e], !0);
              }), s.onclick = a.checkTrusted(function () {
                nv(e, !0);
              }), a.hookTouchEvents(s);
            } else {
              i = nZ(h.list[e - h.weapons.length], !0);
              var s, r = Math.min(t.width - l.iconPadding, i.width);
              n.globalAlpha = 1, n.drawImage(i, -r / 2, -r / 2, r, r), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-r / 2, -r / 2, r, r), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")", (s = document.getElementById("actionBarItem" + e)).onmouseover = a.checkTrusted(function () {
                t_(h.list[e - h.weapons.length]);
              }), s.onclick = a.checkTrusted(function () {
                nv(e - h.weapons.length);
              }), a.hookTouchEvents(s);
            }
          }(n);
          eA.ontouchstart = a.checkTrusted(function (e) {
            e.preventDefault();
            var t = prompt("enter name", e.currentTarget.value);
            e.currentTarget.value = t.slice(0, 15);
          }), eb.checked = T, eb.onchange = a.checkTrusted(function (e) {
            tH(e.target.checked);
          }), ex.checked = B, ex.onchange = a.checkTrusted(function (e) {
            B = ex.checked, e3.hidden = !B, S("show_ping", B ? "true" : "false");
          });
        }());
      }, {id: e9, d: tn, 1: nb, 2: im, 4: iy, 33: iY, 5: nT, 6: is, a: i_, aa: id, 7: nj, 8: ir, sp: ia, 9: ik, h: i6, 11: n1, 12: n2, 13: n4, 14: i0, 15: nP, 16: n5, 17: tU, 18: ih, 19: iu, 20: se, ac: tv, ad: t3, an: t0, st: tb, sa: tx, us: tB, ch: tJ, mm: tT, t: nx, p: tP, pp: iZ}), ts(), setTimeout(() => tr(), 3e3);
    }, function (e) {
      console.error("Vultr error:", e), alert("Error:\n" + e), tn("disconnected");
    });
  }
  var b, x = new g(l, a), E = Math.PI, I = 2 * E;
  function S(e, t) {
    b && localStorage.setItem(e, t);
  }
  function P(e) {
    return b ? localStorage.getItem(e) : null;
  }
  Math.lerpAngle = function (e, t, n) {
    Math.abs(t - e) > E && (e > t ? t += I : e += I);
    var i = t + (e - t) * n;
    return i >= 0 && i <= I ? i : i % I;
  }, CanvasRenderingContext2D.prototype.roundRect = function (e, t, n, i, s) {
    return n < 2 * s && (s = n / 2), i < 2 * s && (s = i / 2), s < 0 && (s = 0), this.beginPath(), this.moveTo(e + s, t), this.arcTo(e + n, t, e + n, t + i, s), this.arcTo(e + n, t + i, e, t + i, s), this.arcTo(e, t + i, e, t, s), this.arcTo(e, t, e + n, t, s), this.closePath(), this;
  }, "undefined" != typeof Storage && (b = !0), P("consent") || (consentBlock.style.display = "block"), window.checkTerms = function (e) {
    e ? (consentBlock.style.display = "none", S("consent", 1)) : $("#consentShake").effect("shake");
  };
  var T, B, A, C, O, R, j, D, L, M, U, H, z, q, Y = P("moofoll"), F = 1, V = Date.now(), W = [], X = [], N = [], G = [], J = [], Z = new p(_, J, X, W, eN, h, l, a), K = n(70), Q = n(71), ee = new K(W, Q, X, h, null, l, a), et = 1, en = 0, ei = 0, es = 0, er = {id: -1, startX: 0, startY: 0, currentX: 0, currentY: 0}, ea = {id: -1, startX: 0, startY: 0, currentX: 0, currentY: 0}, eo = 0, el = l.maxScreenWidth, ec = l.maxScreenHeight, eh = !1, eu = (document.getElementById("ad-container"), document.getElementById("mainMenu")), ef = document.getElementById("enterGame"), ed = document.getElementById("promoImg"), e_ = document.getElementById("partyButton"), ep = document.getElementById("joinPartyButton"), e$ = document.getElementById("settingsButton"), eg = e$.getElementsByTagName("span")[0], em = document.getElementById("allianceButton"), ey = document.getElementById("storeButton"), e0 = document.getElementById("chatButton"), ek = document.getElementById("gameCanvas"), ev = ek.getContext("2d"), ew = document.getElementById("serverBrowser"), eb = document.getElementById("nativeResolution"), ex = document.getElementById("showPing"), e3 = (document.getElementById("playMusic"), document.getElementById("pingDisplay")), e1 = document.getElementById("shutdownDisplay"), e4 = document.getElementById("menuCardHolder"), e2 = document.getElementById("guideCard"), e6 = document.getElementById("loadingText"), eE = document.getElementById("gameUI"), eI = document.getElementById("actionBar"), eS = document.getElementById("scoreDisplay"), e5 = document.getElementById("foodDisplay"), eP = document.getElementById("woodDisplay"), eT = document.getElementById("stoneDisplay"), e7 = document.getElementById("killCounter"), eB = document.getElementById("leaderboardData"), eA = document.getElementById("nameInput"), eC = document.getElementById("itemInfoHolder"), eO = document.getElementById("ageText"), eR = document.getElementById("ageBarBody"), e8 = document.getElementById("upgradeHolder"), ej = document.getElementById("upgradeCounter"), eD = document.getElementById("allianceMenu"), eL = document.getElementById("allianceHolder"), eM = document.getElementById("allianceManager"), eU = document.getElementById("mapDisplay"), eH = document.getElementById("diedText"), ez = document.getElementById("skinColorHolder"), eq = eU.getContext("2d");
  eU.width = 300, eU.height = 300;
  var eY = document.getElementById("storeMenu"), eF = document.getElementById("storeHolder"), eV = document.getElementById("noticationDisplay"), eW = d.hats, eX = d.accessories, eN = new u(c, G, a, l), eG = "#525252", eJ = "#3d3f42";
  function e9(e) {
    N = e.teams;
  }
  var eZ = document.getElementById("featuredYoutube"), eK = {name: "me mega noob", link: "https://www.youtube.com/channel/UCVGAbDHHAi0DnG52HoX5ooA"};
  eZ.innerHTML = "<a target='_blank' class='ytLink' href='" + eK.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + eK.name + "</a>";
  var eQ = !0, te = !1, tt = !1;
  function tn(e) {
    r.close(), ti(e);
  }
  function ti(e) {
    eu.style.display = "block", eE.style.display = "none", e4.style.display = "none", eH.style.display = "none", e6.style.display = "block", e6.innerHTML = e + "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>";
  }
  function ts() {
    var e, t, n = "", i = 0;
    for (var s in y.servers) {
      for (var r = y.servers[s], a = 0, o = 0; o < r.length; o++) for (var c = 0; c < r[o].games.length; c++) a += r[o].games[c].playerCount;
      i += a;
      var h = y.regionInfo[s].name;
      n += "<option disabled>" + h + " - " + a + " players</option>";
      for (var u = 0; u < r.length; u++) for (var f = r[u], d = 0; d < f.games.length; d++) {
        var _ = f.games[d], p = 1 * f.index + d + 1, g = y.server && y.server.region === f.region && y.server.index === f.index && y.gameIndex == d, m = h + " " + p + " [" + Math.min(_.playerCount, l.maxPlayers) + "/" + l.maxPlayers + "]";
        let k = y.stripRegion(s) + ":" + u + ":" + d;
        g && (e_.getElementsByTagName("span")[0].innerText = k), n += "<option value='" + k + "' " + (g ? "selected" : "") + ">" + m + "</option>";
      }
      n += "<option disabled></option>";
    }
    n += "<option disabled>All Servers - " + i + " players</option>", ew.innerHTML = n, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t = "//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"), document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>";
  }
  function tr() {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function () {
      4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText), y.processServers(vultr.servers), ts()) : console.error("Failed to load server data with status code:", this.status));
    }, e.open("GET", "/serverData", !0), e.send();
  }
  window.onblur = function () {
    eQ = !1;
  }, window.onfocus = function () {
    eQ = !0, j && j.alive && nr();
  }, window.onload = function () {
    te = !0, v(), setTimeout(function () {
      k || (alert("Captcha failed to load"), window.location.reload());
    }, 2e4);
  }, window.captchaCallback = function () {
    tt = !0, v();
  }, ek.oncontextmenu = function () {
    return !1;
  }, ew.addEventListener("change", a.checkTrusted(function () {
    let e = ew.value.split(":");
    y.switchServer(e[0], e[1], e[2]);
  }));
  var ta = document.getElementById("pre-content-container"), to = null, tl = null;
  window.cpmstarAPI(function (e) {
    e.game.setTarget(ta), tl = e;
  });
  var tc = 3e5, th = 0, tu = 0;
  function tf() {
    if (!cpmstarAPI || !tl) return console.log("Failed to load video ad API", !!cpmstarAPI, !!tl), void tw();
    (to = new tl.game.RewardedVideoView("rewardedvideo")).addEventListener("ad_closed", function (e) {
      console.log("Video ad closed"), td();
    }), to.addEventListener("loaded", function (e) {
      console.log("Video ad loaded"), to.show();
    }), to.addEventListener("load_failed", function (e) {
      console.log("Video ad load failed", e), td();
    }), to.load(), ta.style.display = "block";
  }
  function td() {
    ta.style.display = "none", tw();
  }
  function t_(e, t, n) {
    if (j && e) {
      if (a.removeAllChildren(eC), eC.classList.add("visible"), a.generateElement({id: "itemInfoName", text: a.capitalizeFirst(e.name), parent: eC}), a.generateElement({id: "itemInfoDesc", text: e.desc, parent: eC}), n) ; else if (t) a.generateElement({class: "itemInfoReq", text: e.type ? "secondary" : "primary", parent: eC}); else {
        for (var i = 0; i < e.req.length; i += 2) a.generateElement({class: "itemInfoReq", html: e.req[i] + "<span class='itemInfoReqVal'> x" + e.req[i + 1] + "</span>", parent: eC});
        e.group.limit && a.generateElement({class: "itemInfoLmt", text: (j.itemCounts[e.group.id] || 0) + "/" + e.group.limit, parent: eC});
      }
    } else eC.classList.remove("visible");
  }
  window.showPreAd = tf;
  var tp, t$, tg, tm = [], ty = [];
  function t0(e, t) {
    tm.push({sid: e, name: t}), tk();
  }
  function tk() {
    if (tm[0]) {
      var e = tm[0];
      a.removeAllChildren(eV), eV.style.display = "block", a.generateElement({class: "notificationText", text: e.name, parent: eV}), a.generateElement({class: "notifButton", html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>", parent: eV, onclick: function () {
        t4(0);
      }, hookTouch: !0}), a.generateElement({class: "notifButton", html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>", parent: eV, onclick: function () {
        t4(1);
      }, hookTouch: !0});
    } else eV.style.display = "none";
  }
  function tv(e) {
    N.push(e), "block" == eD.style.display && t1();
  }
  function tw() {
    S("moo_name", eA.value), !eh && r.connected && (eh = !0, x.stop("menu"), ti("Loading..."), r.send("sp", {name: eA.value, moofoll: Y, skin: eo}));
  }
  function tb(e, t) {
    j && (j.team = e, j.isOwner = t, "block" == eD.style.display && t1());
  }
  function tx(e) {
    ty = e, "block" == eD.style.display && t1();
  }
  function t3(e) {
    for (var t = N.length - 1; t >= 0; t--) N[t].sid == e && N.splice(t, 1);
    "block" == eD.style.display && t1();
  }
  function t1() {
    if (j && j.alive) {
      if (tW(), eY.style.display = "none", eD.style.display = "block", a.removeAllChildren(eL), j.team) for (var e = 0; e < ty.length; e += 2) !function (e) {
        var t = a.generateElement({class: "allianceItem", style: "color:" + (ty[e] == j.sid ? "#fff" : "rgba(255,255,255,0.6)"), text: ty[e + 1], parent: eL});
        j.isOwner && ty[e] != j.sid && a.generateElement({class: "joinAlBtn", text: "Kick", onclick: function () {
          t2(ty[e]);
        }, hookTouch: !0, parent: t});
      }(e); else if (N.length) for (e = 0; e < N.length; ++e) !function (e) {
        var t = a.generateElement({class: "allianceItem", style: "color:" + (N[e].sid == j.team ? "#fff" : "rgba(255,255,255,0.6)"), text: N[e].sid, parent: eL});
        a.generateElement({class: "joinAlBtn", text: "Join", onclick: function () {
          t6(e);
        }, hookTouch: !0, parent: t});
      }(e); else a.generateElement({class: "allianceItem", text: "No Tribes Yet", parent: eL});
      a.removeAllChildren(eM), j.team ? a.generateElement({class: "allianceButtonM", style: "width: 360px", text: j.isOwner ? "Delete Tribe" : "Leave Tribe", onclick: function () {
        tI();
      }, hookTouch: !0, parent: eM}) : (a.generateElement({tag: "input", type: "text", id: "allianceInput", maxLength: 7, placeholder: "unique name", ontouchstart: function (e) {
        e.preventDefault();
        var t = prompt("unique name", e.currentTarget.value);
        e.currentTarget.value = t.slice(0, 7);
      }, parent: eM}), a.generateElement({tag: "div", class: "allianceButtonM", style: "width: 140px;", text: "Create", onclick: function () {
        tE();
      }, hookTouch: !0, parent: eM}));
    }
  }
  function t4(e) {
    r.send("11", tm[0].sid, e), tm.splice(0, 1), tk();
  }
  function t2(e) {
    r.send("12", e);
  }
  function t6(e) {
    r.send("10", N[e].sid);
  }
  function tE() {
    r.send("8", document.getElementById("allianceInput").value);
  }
  function tI() {
    tm = [], ty = [], tk(), r.send("9");
  }
  var tS, t5 = [];
  function tP(e, t) {
    for (var n = 0; n < t5.length; ++n) if (!t5[n].active) {
      tS = t5[n];
      break;
    }
    tS || (tS = new function () {
      this.init = function (e, t) {
        this.scale = 0, this.x = e, this.y = t, this.active = !0;
      }, this.update = function (e, t) {
        this.active && (this.scale += 0.05 * t, this.scale >= l.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / l.mapPingScale), e.beginPath(), e.arc(this.x / l.mapScale * eU.width, this.y / l.mapScale * eU.width, this.scale, 0, 2 * Math.PI), e.stroke()));
      };
    }, t5.push(tS)), tS.init(e, t), j.team && !1 == iE && nearestEnemy.length && nl.teamsync && (iE = !0, tD(53), nv(j.weapons[1], !0), t8.change(!1), tj.change(!0), r.send("7", 1), setTimeout(() => {
      r.send("7", 1), iE = !1, t8.change(!1), tj.change(!1);
    }, 250));
  }
  function tT(e) {
    t$ = e;
  }
  var t7 = 0;
  function tB(e, t, n) {
    n ? e ? j.tailIndex = t : j.tails[t] = 1 : e ? j.skinIndex = t : j.skins[t] = 1, "block" == eY.style.display && tA();
  }
  function tA() {
    if (j) {
      a.removeAllChildren(eF);
      for (var e = t7, t = e ? eX : eW, n = 0; n < t.length; ++n) t[n].dontSell || function (n) {
        var i = a.generateElement({id: "storeDisplay" + n, class: "storeItem", onmouseout: function () {
          t_();
        }, onmouseover: function () {
          t_(t[n], !1, !0);
        }, parent: eF});
        a.hookTouchEvents(i, !0), a.generateElement({tag: "img", class: "hatPreview", src: ".././img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].topSprite ? "_p" : "") + ".png", parent: i}), a.generateElement({tag: "span", text: t[n].name, parent: i}), (e ? j.tails[t[n].id] : j.skins[t[n].id]) ? (e ? j.tailIndex : j.skinIndex) == t[n].id ? a.generateElement({class: "joinAlBtn", style: "margin-top: 5px", text: "Unequip", onclick: function () {
          tD(0, e);
        }, hookTouch: !0, parent: i}) : a.generateElement({class: "joinAlBtn", style: "margin-top: 5px", text: "Equip", onclick: function () {
          tD(t[n].id, e);
        }, hookTouch: !0, parent: i}) : (a.generateElement({class: "joinAlBtn", style: "margin-top: 5px", text: "Buy", onclick: function () {
          tL(t[n].id, e);
        }, hookTouch: !0, parent: i}), a.generateElement({tag: "span", class: "itemPrice", text: t[n].price, parent: i}));
      }(n);
    }
  }
  var tC = !1, tO = !1, tR = {status: !1, interval: null, change: function (e) {
    !0 == e ? (clearInterval(this.interval), !1 == this.status && r.send("7", 1), r.send("c", 1, i7), this.status = !0) : (!0 == this.status && r.send("7", 1), this.status = !1, r.send("c", 0, i7));
  }}, t8 = {interval: null, status: !1, change: function (e) {
    !0 == e ? (clearInterval(this.interval), this.status = !0, nv(j.weapons[0], !0), this.interval = setInterval(() => {
      nv(j.weapons[0], !0), nv(j.weapons[0], !0);
    }, 0)) : (this.status = !1, clearInterval(this.interval));
  }}, tj = {interval: null, status: !1, change: function (e) {
    !0 == e ? (clearInterval(this.interval), this.status = !0, nv(j.weapons[1], !0), this.interval = setInterval(() => {
      nv(j.weapons[1], !0), nv(j.weapons[1], !0);
    }, 0)) : (this.status = !1, clearInterval(this.interval));
  }};
  function tD(e, t) {
    t ? r.send("13c", 0, e, 1) : !0 == tO ? r.send("13c", 0, 22, 0) : !0 == tC || !0 == io || !0 == i4 ? r.send("13c", 0, 6, 0) : (r.send("13c", 0, e, 0), !j.skins[e] && e > 0 && r.send("13c", 0, 0, 0));
  }
  function tL(e, t) {
    r.send("13c", 1, e, t);
  }
  function tM() {
    eY.style.display = "none", eD.style.display = "none", tW();
  }
  function tU(e, t) {
    e && (t ? j.weapons = e : j.items = e);
    for (var n = 0; n < h.list.length; ++n) {
      var i = h.weapons.length + n;
      document.getElementById("actionBarItem" + i).style.display = j.items.indexOf(h.list[n].id) >= 0 ? "inline-block" : "none";
    }
    for (n = 0; n < h.weapons.length; ++n) document.getElementById("actionBarItem" + n).style.display = j.weapons[h.weapons[n].type] == h.weapons[n].id ? "inline-block" : "none";
  }
  function tH(e) {
    T = e, F = e && window.devicePixelRatio || 1, eb.checked = e, S("native_resolution", e.toString()), t9();
  }
  function tz() {
    for (var e = "", t = 0; t < l.skinColors.length; ++t) e += t == eo ? "<div class='skinColorItem activeSkin' style='background-color:" + l.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + l.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
    ez.innerHTML = e;
  }
  var tq = document.getElementById("chatBox"), tY = document.getElementById("chatHolder");
  function tF() {
    tX ? setTimeout(function () {
      var e = prompt("chat message");
      e && tV(e);
    }, 1) : "block" == tY.style.display ? (tq.value && tV(tq.value), tW()) : (eY.style.display = "none", eD.style.display = "none", tY.style.display = "block", tq.focus(), nr()), tq.value = "";
  }
  function tV(e) {
    r.send("ch", e.slice(0, 30));
  }
  function tW() {
    tq.value = "", tY.style.display = "none";
  }
  var tX, tN, tG = [];
  function tJ(e, t) {
    var n = iN(e);
    n && (n.chatMessage = function (e) {
      for (var t, n = 0; n < tG.length; ++n) if (e.indexOf(tG[n]) > -1) {
        t = "";
        for (var i = 0; i < tG[n].length; ++i) t += t.length ? "o" : "M";
        var s = RegExp(tG[n], "g");
        e = e.replace(s, t);
      }
      return e;
    }(t), n.chatCountdown = l.chatCountdown);
  }
  function t9() {
    var e = Math.max((z = window.innerWidth) / el, (q = window.innerHeight) / ec) * F;
    ek.width = z * F, ek.height = q * F, ek.style.width = z + "px", ek.style.height = q + "px", ev.setTransform(e, 0, 0, e, (z * F - el * e) / 2, (q * F - ec * e) / 2);
  }
  function tZ(e) {
    (tX = e) ? e2.classList.add("touch") : e2.classList.remove("touch");
  }
  function tK(e) {
    e.preventDefault(), e.stopPropagation(), tZ(!0);
    for (var t = 0; t < e.changedTouches.length; t++) {
      var n = e.changedTouches[t];
      n.identifier == er.id ? (er.id = -1, ny()) : n.identifier == ea.id && (ea.id = -1, j.buildIndex >= 0 && (R = 1), R = 0);
    }
  }
  var tQ = {status: !1, interval: null, action: function (e) {
    !0 == e ? (clearInterval(this.interval), this.interval = setInterval(() => {
      if (!1 == i5 && !1 == iE && !1 == nf.space && !nl.autogrind) {
        iA = "tankspam";
        let e = 10 == j.weapons[1] ? j.weapons[1] : j.weapons[0];
        nv(e, !0), (e == j.weapons[1] ? 1 == j.secondary.reload : 1 == j.primary.reload) ? (r.send("c", 1, Number.MAX_VALUE), r.send("c", 0, Number.MAX_VALUE), tD(40)) : iV() && j.skins[7] ? (ix += 0.009, tD(7)) : iH.length && j.skins[22] ? (tD(22), tD(11, 1)) : (tD(6), iN(nearestEnemy[0]) && iN(nearestEnemy[0]).primary.reload + 111 / h.weapons[iN(nearestEnemy[0]).primary.id].speed >= 1 && 0 == iN(nearestEnemy[0]).primary.variant ? tD(21, 1) : tD(11, 1)), r.send("2", Number.MAX_VALUE);
      }
    }, 0)) : clearInterval(this.interval);
  }}, ne = {status: !1, interval: null, action: function (e) {
    !0 == e ? (clearInterval(this.interval), this.interval = setInterval(() => {
      !1 != i5 || !1 != iE || nl.autogrind || !1 != tQ.status || (iA = "bowspam", nv(j.weapons[1], !0), 1 == j.secondary.reload ? (tD(20), tD(11, 1), r.send("c", 1, i7), r.send("c", 0, i7)) : iV() && j.skins[7] ? (ix += 0.009, tD(7)) : iH.length && j.skins[22] ? (tD(22), tD(11, 1)) : j.y2 > 6850 && j.y2 < 7550 && j.skins[31] ? (tD(31), tD(11, 1)) : nearestEnemy.length && 250 > iW(nearestEnemy, j) && j.skins[6] ? (tD(6), tD(11, 1)) : j.y2 < 2400 && j.skins[15] ? (tD(15), tD(11, 1)) : (tD(12), tD(11, 1)), r.send("2", i7));
    }, 0)) : clearInterval(this.interval);
  }};
  document.getElementById("gameCanvas").addEventListener("mousedown", e => {
    0 == e.button ? (tQ.status = !tQ.status, tQ.action(tQ.status)) : 2 == e.button && (ne.status = !ne.status, ne.action(ne.status));
  });
  var nt = !1;
  function nn() {
    if (!j) return nt = !1, 0;
    if (!0 == iE) return nt = !1, i7;
    if (!0 == i5 && !1 == nf.space) return iB == Number.MAX_VALUE ? (nt = !0, Number.MAX_VALUE) : (nt = !1, iB);
    if (!0 == tQ.status || !0 == nl.autogrind) return nt = !0, Number.MAX_VALUE;
    if (!0 == ne.status && nearestEnemy.length) return i7;
    if ("auto bull spam" == iA) return nt = !1, i7 || Math.atan2(es - q / 2, ei - z / 2);
    -1 != ea.id ? (nt = !1, tN = Math.atan2(ea.currentY - ea.startY, ea.currentX - ea.startX)) : j.lockDir || tX || (nt = !1, tN = Math.atan2(es - q / 2, ei - z / 2));
    return a.fixTo(tN || 0, 2);
  }
  window.addEventListener("resize", a.checkTrusted(t9)), t9(), tZ(!1), window.setUsingTouch = tZ, ek.addEventListener("touchmove", a.checkTrusted(function (e) {
    e.preventDefault(), e.stopPropagation(), tZ(!0);
    for (var t = 0; t < e.changedTouches.length; t++) {
      var n = e.changedTouches[t];
      n.identifier == er.id ? (er.currentX = n.pageX, er.currentY = n.pageY, ny()) : n.identifier == ea.id && (ea.currentX = n.pageX, ea.currentY = n.pageY, R = 1);
    }
  }), !1), ek.addEventListener("touchstart", a.checkTrusted(function (e) {
    e.preventDefault(), e.stopPropagation(), tZ(!0);
    for (var t = 0; t < e.changedTouches.length; t++) {
      var n = e.changedTouches[t];
      n.pageX < document.body.scrollWidth / 2 && -1 == er.id ? (er.id = n.identifier, er.startX = er.currentX = n.pageX, er.startY = er.currentY = n.pageY, ny()) : n.pageX > document.body.scrollWidth / 2 && -1 == ea.id && (ea.id = n.identifier, ea.startX = ea.currentX = n.pageX, ea.startY = ea.currentY = n.pageY, j.buildIndex < 0 && (R = 1));
    }
  }), !1), ek.addEventListener("touchend", a.checkTrusted(tK), !1), ek.addEventListener("touchcancel", a.checkTrusted(tK), !1), ek.addEventListener("touchleave", a.checkTrusted(tK), !1), ek.addEventListener("mousemove", function (e) {
    e.preventDefault(), e.stopPropagation(), tZ(!1), ei = e.clientX, es = e.clientY;
  }, !1), ek.addEventListener("mousedown", function (e) {
    tZ(!1), 1 != R && (R = 1);
  }, !1), ek.addEventListener("mouseup", function (e) {
    tZ(!1), 0 != R && (R = 0);
  }, !1);
  var ni = {}, ns = {87: [0, -1], 38: [0, -1], 83: [0, 1], 40: [0, 1], 65: [-1, 0], 37: [-1, 0], 68: [1, 0], 39: [1, 0]};
  function nr() {
    ni = {}, r.send("rmd");
  }
  function na() {
    return "block" != eD.style.display && "block" != tY.style.display;
  }
  function no() {
    j && j.alive && r.send("c", R, j.buildIndex >= 0 ? nn() : null);
  }
  var nl = {autogrind: !1, autoupgrade: !0, autobullspam: !0, texturepack: !1, darkmode: !1};
  window.toggles = nl;
  let nc = document.createElement("div");
  nc.style = `
    position: absolute;
    top: 20px;
    left: 20px;
    width: 350px;
    height: 250px;
    max-height: 250px;
    border: solid;
    background-color: rgb(0, 0, 0, 0.4);
    color: #fff;
    border-width: 10px;
    border-radius: 12px;
    border-color: #000;
    z-index: 15;
    display: block;
    `, nc.innerHTML = `
    <h1 style="font-size: 24px; text-align: center;">Chicken V1.4</h1>
    <hr>
    <center>
    <div style="width: 335px; height: 165px; font-size: 15px; text-align: left; margin-left: 10px; overflow-y: scroll;">
    Autogrind <button id="autogrind">Enable</button><br>
    Autoupgrade <select id="upgradetype"><option value="0">DH</option><option value="1">PH</option></select> <select id="sixbuilding"><option value = "tele" selected>TP</option><option value = "turret">Turret</option><option value = "block">Blocker</option><option value = "plat">Platform</option></select> <button id="autoupgrade">Disable</button><br>
    AutoBullSpam <button id="autobullspam">Disable</button><br>
    Texture Pack <button id="texturepack">Enable</button><br>
    Dark Mode <button id="darkmode">Enable</button><br>
    Map Ping Sync <button id="teamsync">Enable</button><br>
    Bot Settings <select id="botConfig"><option value="0">Map Ping Sync</option><option value="1">Spam Secondary</option></select> <select id="botWeapon" style="max-width: 75px;"><option value="15">Musket</option><option value="13">Repeater Crossbow</option></select>
    </div>
    </center>
    `, document.body.appendChild(nc);
  let nh = nc.getElementsByTagName("button");
  for (let nu = 0; nu < nh.length; nu++) nh[nu].addEventListener("click", () => {
    if ("Enable" == nh[nu].innerHTML) {
      if (nh[nu].innerHTML = "Disable", nl[nh[nu].id] = !0, "autogrind" == nh[nu].id) {
        for (let e = 0; e < 4; e++) iv(j.items[5] ? j.items[5] : j.items[3], iC(90 * e));
        ij.action(nl.autogrind);
      }
    } else nh[nu].innerHTML = "Enable", nl[nh[nu].id] = !1, "autogrind" == nh[nu].id && ij.action(nl.autogrind);
    nh[nu].blur();
  });
  var nf = {w: !1, a: !1, s: !1, d: !1, y: 0, x: 0, aim: 0, status: "moomoo.io" != location.hostname, space: !1};
  function nd(e, t, n) {
    let i = !1, s;
    return {start(r) {
      r == e && "chatbox" !== document.activeElement.id.toLowerCase() && j && (i = !0, void 0 === s && (s = setInterval(() => {
        t(), i || (clearInterval(s), s = void 0);
      }, n)));
    }, stop(t) {
      t == e && "chatbox" !== document.activeElement.id.toLowerCase() && (i = !1);
    }};
  }
  let n_ = nd(81, () => {
    iv(j.items[0]);
  }, 0), np = nd(86, () => {
    i5 || iv(j.items[2]);
  }, 0), n$ = nd(70, () => {
    15 != j.items[4] || (i5 || iv(j.items[4], nn() + iC(45)), i5 || iv(j.items[4], nn() - iC(45))), i5 || iv(j.items[4]);
  }, 0), ng = nd(72, () => {
    for (let e = 0; e < 2 * Math.PI; e += Math.PI / 4) i5 || iv(j.items[5], e);
  }, 0);
  document.getElementById("gameCanvas").addEventListener("wheel", function (e) {
    e.deltaY > 0 ? (el *= 0.95, ec *= 0.95) : (el /= 0.95, ec /= 0.95), t9();
  }), window.addEventListener("keydown", a.checkTrusted(function (e) {
    var t = e.which || e.keyCode || 0;
    if (j && (n_.start(t), ng.start(t), n$.start(t), np.start(t)), 27 == e.keyCode && j && ("block" == nc.style.display ? nc.style.display = "none" : nc.style.display = "block"), "=" == e.key && j && "chatbox" !== document.activeElement.id.toLowerCase() && (el = l.maxScreenWidth, ec = l.maxScreenHeight, t9()), "z" == e.key && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.status = !nf.status), (87 == t || 38 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.w = !0), (65 == t || 37 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.a = !0), (83 == t || 40 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.s = !0), (68 == t || 39 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.d = !0), 32 == t && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.space = !0), "Z" == e.key && j && "chatbox" !== document.activeElement.id.toLowerCase() && (iT = [], nearestEnemy = [], ib = [], iE = !1, tR.change(!1), t8.change(!1), tj.change(!1), tC = !1, tO = !1, ty = []), "G" == e.key && j && "chatbox" !== document.activeElement.id.toLowerCase()) {
      let n = ["s", "s2", "s3", "s4", "s2", "sff", "sas", "12s", "fds", "sas", "asd", "12", "vcx", "asd", "plds", "14ds", "dfgfd", "cxv", "asd", "sdfs", "s123", "asds", "2342s", "svds", "sdfg", "asds", "xcvs", "s sd", "_s", "23s", "ads", "dfss"];
      r.send("8", n[Math.floor(Math.random() * n.length)]);
      let i = [];
      for (let s = 0; s < 3; s++) i.push(grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {action: "homepage"}));
      Promise.all(i).then(e => {
        for (let t = 0; t < 3; t++) connectBot(e[t], t);
      });
    }
    190 == e.keyCode && j && !1 == iE && nearestEnemy.length && j.team && "chatbox" !== document.activeElement.id.toLowerCase() && r.send("14", 1), 27 == t ? tM() : j && j.alive && na() && (ni[t] || (ni[t] = 1, 69 == t ? r.send("7", 1) : 67 == t ? (tg || (tg = {}), tg.x = j.x, tg.y = j.y) : 143 == t ? (j.lockDir = j.lockDir ? 0 : 1, r.send("7", 0)) : null != j.weapons[t - 49] ? nv(j.weapons[t - 49], !0) : null != j.items[t - 49 - j.weapons.length] ? nv(j.items[t - 49 - j.weapons.length]) : 81 == t ? nv(j.items[0]) : 82 == t ? nk() : ns[t] ? ny() : 32 == t && (R = 1)));
  })), window.addEventListener("keyup", a.checkTrusted(function (e) {
    if (j && j.alive) {
      var t = e.which || e.keyCode || 0;
      n_.stop(t), ng.stop(t), n$.stop(t), np.stop(t), (87 == t || 38 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.w = !1), (65 == t || 37 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.a = !1), (83 == t || 40 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.s = !1), (68 == t || 39 == t) && j && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.d = !1), 32 == t && "chatbox" !== document.activeElement.id.toLowerCase() && (nf.space = !1), 13 == t ? tF() : na() && ni[t] && (ni[t] = 0, ns[t] ? ny() : 32 == t && (R = 0));
    }
  }));
  var nm = void 0;
  function ny() {
    var e = function () {
      var e = 0, t = 0;
      if (-1 != er.id) e += er.currentX - er.startX, t += er.currentY - er.startY; else for (var n in ns) {
        var i = ns[n];
        e += !!ni[n] * i[0], t += !!ni[n] * i[1];
      }
      return 0 == e && 0 == t ? void 0 : a.fixTo(Math.atan2(t, e), 2);
    }();
    (null == nm || null == e || Math.abs(e - nm) > 0.3) && (r.send("33", e), nm = e);
  }
  var n0 = !1;
  function nk() {
    n0 = !n0;
  }
  function nv(e, t) {
    r.send("5", e, t);
  }
  var nw = !0;
  function nb(e) {
    e6.style.display = "none", e4.style.display = "block", eu.style.display = "none", ni = {}, D = e, R = 0, eh = !0, nw && (nw = !1, G.length = 0);
  }
  function nx(e, t, n, i) {
    m.showText(e, t, 50, 0.18, 500, Math.abs(n), n >= 0 ? "#fff" : "#8ecc51");
  }
  var n3 = 99999;
  function n1() {
    eh = !1, eH.innerHTML = j.shameCount < 5 ? "YOU DIED" : "You Died";
    try {
      factorem.refreshAds([2], !0);
    } catch (e) {}
    eE.style.display = "none", tM(), tp = {x: j.x, y: j.y}, e6.style.display = "none", eH.style.display = "block", eH.style.fontSize = "0px", n3 = 0, setTimeout(function () {
      e4.style.display = "block", eu.style.display = "block", eH.style.display = "none";
    }, l.deathFadeout), tr();
  }
  function n4(e) {
    j && eN.removeAllItems(e);
  }
  function n2(e) {
    let t = iJ(e);
    if (!1 == nl.autogrind) {
      if (t && 300 > Math.hypot(t.y - j.y2, t.x - j.x2)) {
        if (nearestEnemy.length && 200 > iW(nearestEnemy, j)) {
          140 > iW(nearestEnemy, j) && !1 == iE && 1 == j.primary.reload && j.primary.dmg >= 40 ? (iv(j.items[2], Math.hypot(t.x - j.x, 0)), iv(j.items[2], Math.hypot(nearestEnemy[1] - j.x, 0)), iE = !0, tD(7, 0), tD(j.tails[21] ? 21 : 0, 1), tj.change(!1), nv(j.weapons[0], !0), t8.change(!0), r.send("7", 1), setTimeout(() => {
            r.send("7", 1), t8.change(!1), tj.change(!1), iE = !1;
          }, 240)) : iv(j.items[4], Math.hypot(t.x - j.x, 0)), iv(j.items[2], i7), iv(j.items[2], Math.hypot(t.x - j.x, 0));
          for (let n = i7 - Math.PI / 3 + Math.PI; n < i7 + Math.PI / 3 + Math.PI; n += Math.PI / 18 + Math.PI) iv(j.items[2], n);
        }
        if (nearestEnemy.length && 250 > iW(nearestEnemy, j)) for (let i = i7 - Math.PI / 3; i < i7 + Math.PI / 3; i += Math.PI / 16) iv(j.items[2], i);
        if (15 == j.items[4]) for (let s = 0; s < 2 * Math.PI; s += Math.PI / 12) iv(j.items[4], s), iv(j.items[4], -s);
      }
    } else if (300 > Math.hypot(t.y - j.y2, t.x - j.x2)) for (let a = 0; a < 2 * Math.PI; a += Math.PI / 2) iv(j.items[5] ? j.items[5] : j.items[3], a);
    eN.disableBySid(e);
  }
  function n6() {
    e5.innerText = j.food, eP.innerText = j.wood, eT.innerText = j.stone, eS.innerText = j.points, e7.innerText = j.kills;
  }
  var nE = {}, nI = ["crown", "skull", "crosshair"], nS = [];
  function n5(e, t) {
    if (j.upgradePoints = e, j.upgrAge = t, e > 0) {
      nS.length = 0, a.removeAllChildren(e8);
      for (var n = 0; n < h.weapons.length; ++n) h.weapons[n].age == t && (a.generateElement({id: "upgradeItem" + n, class: "actionBarItem", onmouseout: function () {
        t_();
      }, parent: e8}).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage, nS.push(n));
      for (n = 0; n < h.list.length; ++n) if (h.list[n].age == t) {
        var i = h.weapons.length + n;
        a.generateElement({id: "upgradeItem" + i, class: "actionBarItem", onmouseout: function () {
          t_();
        }, parent: e8}).style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage, nS.push(i);
      }
      for (n = 0; n < nS.length; n++) !function (e) {
        var t = document.getElementById("upgradeItem" + e);
        t.onmouseover = function () {
          h.weapons[e] ? t_(h.weapons[e], !0) : t_(h.list[e - h.weapons.length]);
        }, t.onclick = a.checkTrusted(function () {
          r.send("6", e);
        }), a.hookTouchEvents(t);
      }(nS[n]);
      nS.length ? (e8.style.display = "block", ej.style.display = "block", ej.innerHTML = "SELECT ITEMS (" + e + ")") : (e8.style.display = "none", ej.style.display = "none", t_());
    } else e8.style.display = "none", ej.style.display = "none", t_();
  }
  function nP(e, t, n) {
    null != e && (j.XP = e), null != t && (j.maxXP = t), null != n && (j.age = n), n == l.maxAge ? (eO.innerHTML = "MAX AGE", eR.style.width = "100%") : (eO.innerHTML = "AGE " + j.age, eR.style.width = j.XP / j.maxXP * 100 + "%");
  }
  function nT(e) {
    a.removeAllChildren(eB);
    for (var t, n = 1, i = 0; i < e.length; i += 3) t = i, a.generateElement({class: "leaderHolder", parent: eB, children: [a.generateElement({class: "leaderboardItem", style: "color:" + (e[t] == D ? "#fff" : "rgba(255,255,255,0.6)"), text: n + ". " + ("" != e[t + 1] ? e[t + 1] : "unknown")}), a.generateElement({class: "leaderScore", text: a.kFormat(e[t + 2]) || "0"})]}), n++;
  }
  function n7(e, t, n, i) {
    ev.save(), ev.setTransform(1, 0, 0, 1, 0, 0), ev.scale(F, F);
    var s = 50;
    ev.beginPath(), ev.arc(e, t, s, 0, 2 * Math.PI, !1), ev.closePath(), ev.fillStyle = "rgba(255, 255, 255, 0.3)", ev.fill(), s = 50;
    var r = n - e, a = i - t, o = Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)), l = o > s ? o / s : 1;
    r /= l, a /= l, ev.beginPath(), ev.arc(e + r, t + a, 0.5 * s, 0, 2 * Math.PI, !1), ev.closePath(), ev.fillStyle = "white", ev.fill(), ev.restore();
  }
  function nB(e, t, n) {
    for (var i = 0; i < J.length; ++i) (L = J[i]).active && L.layer == e && (L.update(A), L.active && ig(L.x - t, L.y - n, L.scale) && (ev.save(), ev.translate(L.x - t, L.y - n), ev.rotate(L.dir), nC(0, 0, L, ev, 1), ev.restore()));
  }
  var nA = {};
  function nC(e, t, n, i, s) {
    if (n.src) {
      var r = h.projectiles[n.indx].src, a = nA[r];
      a || ((a = new Image).onload = function () {
        this.isLoaded = !0;
      }, a.src = ".././img/weapons/" + r + ".png", nA[r] = a), a.isLoaded && i.drawImage(a, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale);
    } else 1 == n.indx && (i.fillStyle = "#939393", nK(e, t, n.scale, i));
  }
  function nO(e, t, n, i) {
    var s = l.riverWidth + i, r = l.mapScale / 2 - t - s / 2;
    r < ec && r + s > 0 && n.fillRect(0, r, el, s);
  }
  function nR(e, t, n) {
    for (var i, s, r, a = 0; a < G.length; ++a) (L = G[a]).active && (s = L.x + L.xWiggle - t, r = L.y + L.yWiggle - n, 0 == e && L.update(A), L.layer == e && ig(s, r, L.scale + (L.blocker || 0)) && (ev.globalAlpha = L.hideFromEnemy ? 0.6 : 1, L.isItem ? (i = nZ(L), ev.save(), ev.translate(s, r), ev.rotate(ev.rotate(Math.atan2(Math.sin(L.dir), Math.cos(L.dir)))), ev.drawImage(i, -i.width / 2, -i.height / 2), L.blocker && (ev.strokeStyle = "#db6e6e", ev.globalAlpha = 0.3, ev.lineWidth = 6, nK(0, 0, L.blocker, ev, !1, !0)), ev.restore()) : (i = nJ(L), ev.drawImage(i, s - i.width / 2, r - i.height / 2))));
  }
  var n8 = [];
  function nj(e, t, n) {
    let i = 40 == iN(e).skinIndex ? 3.3 : 1, s = h.weapons[n].dmg * (10 == n ? 7.5 : 1) * i;
    (L = iN(e)) && (L.startAnim(t, n), function e(t) {
      for (let n = 0; n < n8.length; n++) n8[n](t);
      n8 = [];
    }(s));
  }
  function nD(e, t, n) {
    ev.globalAlpha = 1;
    for (var i = 0; i < X.length; i++) (L = X[i]).zIndex == n && (L.animate(A), L.visible && (L.skinRot += 0.002 * A, H = (L == j ? Math.atan2(es - q / 2, ei - z / 2) : L.dir) + L.dirPlus, ev.save(), ev.translate(L.x - e, L.y - t), ev.rotate(H), nz(L, ev), ev.restore()));
  }
  var nL = {7: "https://i.imgur.com/vAOzlyY.png", 15: "https://i.imgur.com/YRQ8Ybq.png", 11: "https://i.imgur.com/yfqME8H.png", 12: "https://i.imgur.com/VSUId2s.png", 40: "https://i.imgur.com/Xzmg27N.png", 26: "https://i.imgur.com/I0xGtyZ.png", 6: "https://i.imgur.com/vM9Ri8g.png"}, nM = {18: "https://i.imgur.com/0rmN7L9.png", 21: "https://i.imgur.com/4ddZert.png"}, nU = {samurai_1: "https://i.imgur.com/mbDE77n.png", samurai_1_g: "https://cdn.discordapp.com/attachments/967213871267971072/1030852038948552724/image.png"};
  function nH(e, t) {
    if (nl.texturepack) {
      if (nL[e] && "hat" == t) return nL[e];
      if (nM[e] && "acc" == t) return nM[e];
      if (nU[e] && "weapons" == t) return nU[e];
    }
    return "acc" == t ? ".././img/accessories/access_" + e + ".png" : "hat" == t ? ".././img/hats/hat_" + e + ".png" : ".././img/weapons/" + e + ".png";
  }
  function nz(e, t) {
    (t = t || ev).lineWidth = 5.5, t.lineJoin = "miter";
    var n = Math.PI / 4 * (h.weapons[e.weaponIndex].armS || 1), i = e.buildIndex < 0 && h.weapons[e.weaponIndex].hndS || 1, s = e.buildIndex < 0 && h.weapons[e.weaponIndex].hndD || 1;
    if (e.tailIndex > 0 && function (e, t, n) {
      if (!(nq = nV[e + (nl.texturepack ? "lol" : 0)])) {
        var i = new Image;
        i.onload = function () {
          this.isLoaded = !0, this.onload = null;
        }, i.src = nH(e, "acc"), nV[e + (nl.texturepack ? "lol" : 0)] = i, nq = i;
      }
      var s = nW[e];
      if (!s) {
        for (var r = 0; r < eX.length; ++r) if (eX[r].id == e) {
          s = eX[r];
          break;
        }
        nW[e] = s;
      }
      nq.isLoaded && (t.save(), t.translate(-20 - (s.xOff || 0), 0), s.spin && t.rotate(n.skinRot), t.drawImage(nq, -s.scale / 2, -s.scale / 2, s.scale, s.scale), t.restore());
    }(e.tailIndex, t, e), e.buildIndex < 0 && !h.weapons[e.weaponIndex].aboveHand && (nN(h.weapons[e.weaponIndex], l.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == h.weapons[e.weaponIndex].projectile || h.weapons[e.weaponIndex].hideProjectile || nC(e.scale, 0, h.projectiles[h.weapons[e.weaponIndex].projectile], ev)), t.fillStyle = l.skinColors[e.skinColor], nK(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), nK(e.scale * s * Math.cos(-n * i), e.scale * s * Math.sin(-n * i), 14), e.buildIndex < 0 && h.weapons[e.weaponIndex].aboveHand && (nN(h.weapons[e.weaponIndex], l.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == h.weapons[e.weaponIndex].projectile || h.weapons[e.weaponIndex].hideProjectile || nC(e.scale, 0, h.projectiles[h.weapons[e.weaponIndex].projectile], ev)), e.buildIndex >= 0) {
      var r = nZ(h.list[e.buildIndex]);
      t.drawImage(r, e.scale - h.list[e.buildIndex].holdOffset, -r.width / 2);
    }
    nK(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function e(t, n, i, s) {
      if (!(nq = nY[t + (nl.texturepack ? "lol" : 0)])) {
        var r = new Image;
        r.onload = function () {
          this.isLoaded = !0, this.onload = null;
        }, r.src = nH(t, "hat"), nY[t + (nl.texturepack ? "lol" : 0)] = r, nq = r;
      }
      var a = i || nF[t];
      if (!a) {
        for (var o = 0; o < eW.length; ++o) if (eW[o].id == t) {
          a = eW[o];
          break;
        }
        nF[t] = a;
      }
      nq.isLoaded && n.drawImage(nq, -a.scale / 2, -a.scale / 2, a.scale, a.scale), !i && a.topSprite && (n.save(), n.rotate(s.skinRot), e(t + "_top", n, a, s), n.restore());
    }(e.skinIndex, t, null, e));
  }
  var nq, nY = {}, nF = {}, nV = {}, nW = {}, nX = {};
  function nN(e, t, n, i, s) {
    var r = e.src + (t || ""), a = nX[r + (nl.texturepack ? "lol" : 0)];
    a || ((a = new Image).onload = function () {
      this.isLoaded = !0;
    }, a.src = nH(r, "weapons"), nX[r + (nl.texturepack ? "lol" : 0)] = a), a.isLoaded && s.drawImage(a, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width);
  }
  var nG = {};
  function nJ(e) {
    var t = e.y >= l.mapScale - l.snowBiomeTop ? 2 : e.y <= l.snowBiomeTop ? 1 : 0, n = e.type + "_" + e.scale + "_" + t, i = nG[n];
    if (!i) {
      var s = document.createElement("canvas");
      s.width = s.height = 2.1 * e.scale + 5.5;
      var r = s.getContext("2d");
      if (r.translate(s.width / 2, s.height / 2), r.rotate(a.randFloat(0, Math.PI)), r.strokeStyle = eG, r.lineWidth = 5.5, 0 == e.type) for (var o, c = 0; c < 2; ++c) nQ(r, 7, o = L.scale * (c ? 0.5 : 1), 0.7 * o), r.fillStyle = t ? c ? "#fff" : "#e3f1f4" : c ? "#b4db62" : "#9ebf57", r.fill(), c || r.stroke(); else if (1 == e.type) {
        if (2 == t) r.fillStyle = "#606060", nQ(r, 6, 0.3 * e.scale, 0.71 * e.scale), r.fill(), r.stroke(), r.fillStyle = "#89a54c", nK(0, 0, 0.55 * e.scale, r), r.fillStyle = "#a5c65b", nK(0, 0, 0.3 * e.scale, r, !0); else {
          (function (e, t, n, i) {
            var s, r = Math.PI / 2 * 3, o = Math.PI / 6;
            e.beginPath(), e.moveTo(0, -i);
            for (var l = 0; l < 6; l++) s = a.randInt(n + 0.9, 1.2 * n), e.quadraticCurveTo(Math.cos(r + o) * s, Math.sin(r + o) * s, Math.cos(r + 2 * o) * i, Math.sin(r + 2 * o) * i), r += 2 * o;
            e.lineTo(0, -i), e.closePath();
          }(r, 0, L.scale, 0.7 * L.scale), r.fillStyle = t ? "#e3f1f4" : "#89a54c", r.fill(), r.stroke(), r.fillStyle = t ? "#6a64af" : "#c15555");
          var h, u = I / 4;
          for (c = 0; c < 4; ++c) nK((h = a.randInt(L.scale / 3.5, L.scale / 2.3)) * Math.cos(u * c), h * Math.sin(u * c), a.randInt(10, 12), r);
        }
      } else 2 != e.type && 3 != e.type || (r.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", nQ(r, 3, e.scale, e.scale), r.fill(), r.stroke(), r.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", nQ(r, 3, 0.55 * e.scale, 0.65 * e.scale), r.fill());
      i = s, nG[n] = i;
    }
    return i;
  }
  var n9 = [];
  function nZ(e, t) {
    var n = n9[e.id + (j && e.owner && e.owner.sid == j.sid ? 0 : j && j.team && e.owner && iI(e.owner.sid) ? 25 : 50)];
    if (!n || t) {
      var i, s, r, o, l, c = document.createElement("canvas");
      c.width = c.height = 2.5 * e.scale + 5.5 + (h.list[e.id].spritePadding || 0);
      var u = c.getContext("2d");
      if (u.translate(c.width / 2, c.height / 2), u.rotate(t ? 0 : Math.PI / 2), u.strokeStyle = eG, u.lineWidth = 5.5 * (t ? c.width / 81 : 1), "apple" == e.name) {
        u.fillStyle = "#c15555", nK(0, 0, e.scale, u), u.fillStyle = "#89a54c";
        var f, d, _, p, g, m, y = -Math.PI / 2;
        f = e.scale * Math.cos(y), d = e.scale * Math.sin(y), _ = y + Math.PI / 2, p = u, g = f + 25 * Math.cos(_), m = d + 25 * Math.sin(_), p.moveTo(f, d), p.beginPath(), p.quadraticCurveTo((f + g) / 2 + 10 * Math.cos(_ + Math.PI / 2), (d + m) / 2 + 10 * Math.sin(_ + Math.PI / 2), g, m), p.quadraticCurveTo((f + g) / 2 - 10 * Math.cos(_ + Math.PI / 2), (d + m) / 2 - 10 * Math.sin(_ + Math.PI / 2), f, d), p.closePath(), p.fill(), p.stroke();
      } else if ("cookie" == e.name) {
        u.fillStyle = "#cca861", nK(0, 0, e.scale, u), u.fillStyle = "#937c4b";
        for (var k = I / (o = 4), v = 0; v < o; ++v) nK((l = a.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(k * v), l * Math.sin(k * v), a.randInt(4, 5), u, !0);
      } else if ("cheese" == e.name) for (u.fillStyle = "#f4f3ac", nK(0, 0, e.scale, u), u.fillStyle = "#c3c28b", k = I / (o = 4), v = 0; v < o; ++v) nK((l = a.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(k * v), l * Math.sin(k * v), a.randInt(4, 5), u, !0); else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
        u.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
        var w = "castle wall" == e.name ? 4 : 3;
        nQ(u, w, 1.1 * e.scale, 1.1 * e.scale), u.fill(), u.stroke(), u.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", nQ(u, w, 0.65 * e.scale, 0.65 * e.scale), u.fill();
      } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
        u.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
        var b = 0.6 * e.scale;
        nQ(u, "spikes" == e.name ? 5 : 6, e.scale, b), u.fill(), u.stroke(), u.fillStyle = "#a5974c", nK(0, 0, b, u), u.fillStyle = "#c9b758", nK(0, 0, b / 2, u, !0);
      } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) u.fillStyle = "#a5974c", nK(0, 0, e.scale, u), u.fillStyle = "#c9b758", it(0, 0, 1.5 * e.scale, 29, 4, u), u.fillStyle = "#a5974c", nK(0, 0, 0.5 * e.scale, u); else if ("mine" == e.name) u.fillStyle = "#939393", nQ(u, 3, e.scale, e.scale), u.fill(), u.stroke(), u.fillStyle = "#bcbcbc", nQ(u, 3, 0.55 * e.scale, 0.65 * e.scale), u.fill(); else if ("sapling" == e.name) for (v = 0; v < 2; ++v) nQ(u, 7, b = e.scale * (v ? 0.5 : 1), 0.7 * b), u.fillStyle = v ? "#b4db62" : "#9ebf57", u.fill(), v || u.stroke(); else if ("pit trap" == e.name) u.fillStyle = "#a5974c", nQ(u, 3, 1.1 * e.scale, 1.1 * e.scale), u.fill(), u.stroke(), u.fillStyle = eG, nQ(u, 3, 0.65 * e.scale, 0.65 * e.scale), u.fill(); else if ("boost pad" == e.name) u.fillStyle = "#7e7f82", ie(0, 0, 2 * e.scale, 2 * e.scale, u), u.fill(), u.stroke(), u.fillStyle = "#dbd97d", i = 1 * e.scale, s = u, r = i * (Math.sqrt(3) / 2), (s = s || ev).beginPath(), s.moveTo(0, -r / 2), s.lineTo(-i / 2, r / 2), s.lineTo(i / 2, r / 2), s.lineTo(0, -r / 2), s.fill(), s.closePath(); else if ("turret" == e.name) u.fillStyle = "#a5974c", nK(0, 0, e.scale, u), u.fill(), u.stroke(), u.fillStyle = "#939393", ie(0, -25, 0.9 * e.scale, 50, u), nK(0, 0, 0.6 * e.scale, u), u.fill(), u.stroke(); else if ("platform" == e.name) {
        u.fillStyle = "#cebd5f";
        var x = 2 * e.scale, E = x / 4, S = -e.scale / 2;
        for (v = 0; v < 4; ++v) ie(S - E / 2, 0, E, 2 * e.scale, u), u.fill(), u.stroke(), S += x / 4;
      } else "healing pad" == e.name ? (u.fillStyle = "#7e7f82", ie(0, 0, 2 * e.scale, 2 * e.scale, u), u.fill(), u.stroke(), u.fillStyle = "#db6e6e", it(0, 0, 0.65 * e.scale, 20, 4, u, !0)) : "spawn pad" == e.name ? (u.fillStyle = "#7e7f82", ie(0, 0, 2 * e.scale, 2 * e.scale, u), u.fill(), u.stroke(), u.fillStyle = "#71aad6", nK(0, 0, 0.6 * e.scale, u)) : "blocker" == e.name ? (u.fillStyle = "#7e7f82", nK(0, 0, e.scale, u), u.fill(), u.stroke(), u.rotate(Math.PI / 4), u.fillStyle = "#db6e6e", it(0, 0, 0.65 * e.scale, 20, 4, u, !0)) : "teleporter" == e.name && (u.fillStyle = "#7e7f82", nK(0, 0, e.scale, u), u.fill(), u.stroke(), u.rotate(Math.PI / 4), u.fillStyle = "#d76edb", nK(0, 0, 0.5 * e.scale, u, !0));
      !t && (u.globalAlpha = 0.6, u.fillStyle = j && e.owner && e.owner.sid == j.sid ? "" : e.owner && j && j.team && iI(e.owner.sid) ? "" : "#780c0c", j && e.owner && e.owner.sid == j.sid || e.owner && j && j.team && iI(e.owner.sid) || (e.name.includes("spike") || e.name.includes("pit trap")) && (e.name.includes("spike") ? u.globalAlpha = 0.6 : u.globalAlpha = 1, u.fill())), n = c, t || (n9[e.id + (j && e.owner && e.owner.sid == j.sid ? 0 : j && j.team && e.owner && iI(e.owner.sid) ? 25 : 50)] = n);
    }
    return n;
  }
  function nK(e, t, n, i, s, r) {
    (i = i || ev).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), r || i.fill(), s || i.stroke();
  }
  function nQ(e, t, n, i, s) {
    var r, a, o = Math.PI / 2 * 3, l = Math.PI / t;
    e.beginPath(), e.moveTo(0, -n), s && e.rotate(Math.PI / 2);
    for (var c = 0; c < t; c++) r = Math.cos(o) * n, a = Math.sin(o) * n, e.lineTo(r, a), o += l, r = Math.cos(o) * i, a = Math.sin(o) * i, e.lineTo(r, a), o += l;
    e.lineTo(0, -n), e.closePath();
  }
  function ie(e, t, n, i, s, r) {
    s.fillRect(e - n / 2, t - i / 2, n, i), r || s.strokeRect(e - n / 2, t - i / 2, n, i);
  }
  function it(e, t, n, i, s, r, a) {
    r.save(), r.translate(e, t), s = Math.ceil(s / 2);
    for (var o = 0; o < s; o++) ie(0, 0, 2 * n, i, r, a), r.rotate(Math.PI / s);
    r.restore();
  }
  function ii(e, t, n) {
    if (15 == e && 80 >= Math.hypot(n - j.y2, t - j.x2)) {
      let i = Math.atan2(n - j.y2, t - j.x2) + iC(180);
      for (let s = i; s < 2 * Math.PI + i; s += Math.PI / 6 + i) iv(j.items[4], s);
      for (let r = i; r < 2 * Math.PI + i; r += Math.PI / 6 + i) iv(j.items[3], -r);
    }
  }
  function is(e) {
    for (var t = 0; t < e.length;) e[t + 7] && e[t + 7] != j.sid && !iI(e[t + 7]) && ii(e[t + 6], e[t + 1], e[t + 2]), eN.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], h.list[e[t + 6]], !0, e[t + 7] >= 0 ? {sid: e[t + 7]} : null), t += 8;
  }
  function ir(e, t) {
    let n;
    (n = iJ(t)) && (n.xWiggle += l.gatherWiggle * Math.cos(e), n.yWiggle += l.gatherWiggle * Math.sin(e), new Promise(function (e, t) {
      n8.push(e), setTimeout(function () {
        t();
      }, 50);
    }).then(function (e) {
      n.currentHealth -= e, n.currentHealth < 0 && n2(n.sid);
    }).catch(function (e) {
      n8 = [];
    }));
  }
  function ia(e, t) {
    (L = iJ(e)) && (L.dir = t, L.xWiggle += l.gatherWiggle * Math.cos(t + Math.PI), L.yWiggle += l.gatherWiggle * Math.sin(t + Math.PI));
  }
  var io = !1, il = [];
  function ic(e, t) {
    if (j.sid != e && !iI(e)) {
      let n = iN(e);
      "object" == typeof il[e] ? il[e].push(t) : il[e] = [t], 260 > iX(n, j) && (4 == n.primary.id || 5 == n.primary.id) && n.primary.variant > 1 && 1 == n.primary.reload && (io = !0, tD(6), setTimeout(() => {
        io = !1;
      }, 500));
      let i = 0;
      for (let s = 0; s < il[e].length; s++) i += il[e][s];
      i >= 75 && j.shameCount < 5 && Date.now() - i2 > 200 && (iw(), il[e] = []), setTimeout(() => {
        il[e] && il[e].shift();
      }, 500);
    }
  }
  function ih(e, t, n, i, s, r, a, o) {
    if (eQ) {
      Z.addProjectile(e, t, n, i, s, r, null, null, a).sid = o;
      let l = 1 / 0, c = -1;
      for (let u = 0; u < X.length; u++) (L = X[u]) && L.visible && L.secondary.id && void 0 !== h.weapons[L.secondary.id].projectile && h.projectiles[h.weapons[L.secondary.id].projectile].speed == s && l > (1.5 * L.x2 - L.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 80 * Math.sin(n)) ** 2 && (c = L, l = (1.5 * L.x2 - L.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 80 * Math.sin(n)) ** 2);
      if (Math.sqrt(l) > 60) {
        if (1.5 == s) {
          for (let f = 0; f < X.length; f++) (L = X[f]) && L.visible && l > (1.5 * L.x2 - L.x1 / 2 - e + 10 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 10 * Math.sin(n)) ** 2 && (c = L, l = (1.5 * L.x2 - L.x1 / 2 - e + 10 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 10 * Math.sin(n)) ** 2);
          60 > Math.sqrt(l) && (c.turret = -0.0444, ic(c.sid, 25));
        } else {
          for (let d = 0; d < X.length; d++) (L = X[d]) && L.visible && L.secondary.id && l > (1.5 * L.x2 - L.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 80 * Math.sin(n)) ** 2 && (c = L.sid, l = (1.5 * L.x2 - L.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * L.y2 - L.y1 / 2 - t + 80 * Math.sin(n)) ** 2);
          setTimeout(() => {
            ic(c.sid, c.secondary.dmg || 35), c.secondary.reload = 0;
          });
        }
      } else ic(c.sid, 50), c.secondary.reload = -111 / h.weapons[15].speed;
    }
  }
  function iu(e, t) {
    for (var n = 0; n < J.length; ++n) J[n].sid == e && (J[n].range = t);
  }
  function id(e) {
    (L = iG(e)) && L.startAnim();
  }
  function i_(e) {
    for (var t = 0; t < W.length; ++t) W[t].forcePos = !W[t].visible, W[t].visible = !1;
    if (e) {
      var n = Date.now();
      for (t = 0; t < e.length;) (L = iG(e[t])) ? (L.index = e[t + 1], L.t1 = void 0 === L.t2 ? n : L.t2, L.t2 = n, L.x1 = L.x, L.y1 = L.y, L.x2 = e[t + 2], L.y2 = e[t + 3], L.d1 = void 0 === L.d2 ? e[t + 4] : L.d2, L.d2 = e[t + 4], L.health = e[t + 5], L.dt = 0, L.visible = !0) : ((L = ee.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = L.x, L.y2 = L.y, L.d2 = L.dir, L.health = e[t + 5], ee.aiTypes[e[t + 1]].name || (L.name = l.cowNames[e[t + 6]]), L.forcePos = !0, L.sid = e[t], L.visible = !0), t += 7;
    }
  }
  var ip = {};
  function i$(e, t) {
    var n = e.index, i = ip[n];
    if (!i) {
      var s = new Image;
      s.onload = function () {
        this.isLoaded = !0, this.onload = null;
      }, s.src = ".././img/animals/" + e.src + ".png", i = s, ip[n] = i;
    }
    if (i.isLoaded) {
      var r = 1.2 * e.scale * (e.spriteMlt || 1);
      t.drawImage(i, -r, -r, 2 * r, 2 * r);
    }
  }
  function ig(e, t, n) {
    return e + n >= 0 && e - n <= el && t + n >= 0 && t - n <= ec;
  }
  function im(e, t) {
    var n = function (e) {
      for (var t = 0; t < X.length; ++t) if (X[t].id == e) return X[t];
      return null;
    }(e[0]);
    n || (n = new f(e[0], e[1], l, a, Z, eN, X, W, h, eW, eX), X.push(n)), n.spawn(t ? Y : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e), t && (M = (j = n).x, U = j.y, tU(), n6(), nP(), n5(0), eE.style.display = "block");
  }
  function iy(e) {
    for (var t = 0; t < X.length; t++) if (X[t].id == e) {
      X.splice(t, 1);
      break;
    }
  }
  function i0(e, t) {
    j && (j.itemCounts[e] = t);
  }
  function ik(e, t, n) {
    j && (j[e] = t, n && n6());
  }
  function iv(e, t = Math.atan2(es - q / 2, ei - z / 2)) {
    nv(e), r.send("c", 1, t), r.send("c", 0, t), nv(!0 == tj.status ? j.weapons[1] : !0 == t8.status ? j.weapons[0] : j.weaponIndex, !0);
  }
  function iw() {
    for (let e = 0; e < 4; e++) iv(j.items[0]);
  }
  window.place = iv, window.secondaryDmg = function (e) {
    return 15 == e ? 50 : 9 == e ? 25 : 12 == e ? 35 : 13 == e ? 30 : 0;
  }, window.variantMulti = function (e) {
    return 1 == e ? 1.1 : 2 == e || 3 == e ? 1.18 : 1;
  };
  var ib = [], ix = 0;
  function i3(e) {
    return 6 != j.skinIndex ? Math.round(e) : 75 == e ? 57 : Math.round(0.75 * e);
  }
  var i1 = [], i4 = !1, i2 = 0;
  function i6(e, t) {
    if (L = iN(e)) {
      let n = t - L.health;
      n >= 0 ? 3 == n && 13 == L.tailIndex ? L.bullTick = tick : 6 == n && 13 == L.tailIndex && 13 == L.skinIndex ? L.bullTick = tick : 1 == n && 17 == L.tailIndex ? L.bullTick = tick : L.buildItem() : (L.hitTime = tick, -2 == n && 7 == L.skinIndex && 13 == L.tailIndex ? (L.bullTick = tick, L == j && (ix = 0)) : -5 == n && (L.bullTick = tick, L == j && (ix = 0)), L == j && (i1.push(Math.abs(n)), function e(t) {
        let n = function e() {
          let t = [], n = 0;
          for (let i = 0; i < ib.length; i++) {
            let s = ib[i], r = 0;
            s.primary.reload > 0.8 && (r += Math.round(1.5 * s.primary.dmg)), s.secondary.reload > 0.8 && (r += s.secondary.dmg), s.turret > 0.8 && (r += 25), n += r, t.push(s.sid);
          }
          return [t, n];
        }();
        if (n[1] >= 100) {
          let i = function e(t, n) {
            if (t.length > 1) return "sync threat";
            for (let i = 0; i < t.length; i++) {
              let s = iN(t[i]);
              if (n == i3(1.5 * s.primary.dmg)) return [i3(1.5 * s.primary.dmg), !0, s];
              if (n == i3(s.primary.dmg)) return [i3(s.primary.dmg), !0, s];
              if (n == i3(1.2 * s.primary.dmg)) return [i3(1.2 * s.primary.dmg), !0, s];
              if (n == i3(s.secondary.dmg)) return [i3(s.secondary.dmg), !1, s];
              if (n == i3(s.secondary.dmg + 25)) return [i3(s.secondary.dmg + 25), !1, s];
              if (n == i3(1.5 * s.secondary.dmg)) return [i3(1.5 * s.secondary.dmg), !1, s]; else if (n == i3(25)) return [i3(25), !1, s];
            }
            return "unknown";
          }(n[0], t);
          if ("sync threat" == i || "unknown" == i) j.shameCount < 5 && t >= 10 && [20, 35, 34, 26, 15].includes(t) ? (iw(), i2 = Date.now()) : setTimeout(() => {
            iw();
          }, 100); else {
            let s = j.health - t, r = n[1] - i[0], a = (11 == i[2].skinIndex || 21 == i[2].tailIndex) && 0 == j.primary.variant;
            i[1] && !a && s - r + 25 > 1 && !1 == tC && !1 == io && !1 == i4 ? (tO = !0, tD(22), setTimeout(() => {
              iw(), tO = !1;
            }, 222)) : s - Math.round(0.75 * r) > 1 ? (tC = !0, tD(6), setTimeout(() => {
              iw(), tC = !1;
            }, 222)) : j.shameCount < 5 ? iw() : setTimeout(() => {
              iw();
            }, 100), i2 = Date.now();
          }
        } else {
          var o;
          o = t, iT.length ? 300 > iW(nearestEnemy, j) && [38, 19, 50, 25].includes(o) && Date.now() - i2 > 200 && j.shameCount < 5 ? (iw(), il = []) : Date.now() - i2 > 200 && 300 > iW(nearestEnemy, j) && L.shameCount < 6 && [12, 10, 11, 60, 66, 71, 68, 74, 80].includes(o) && !1 == tO && iN(nearestEnemy[0]).secondary.id ? (tC = !0, tD(6), setTimeout(() => {
            iw(), tC = !1;
          }, 222)) : [Math.round(0.675 * j.primary.dmg), Math.round(0.375 * j.primary.dmg)].includes(o) ? (tC = !0, tD(6), setTimeout(() => {
            iw(), tC = !1;
          }, 222)) : setTimeout(() => {
            iw();
          }, 100) : setTimeout(() => {
            iw();
          }, 100);
        }
      }(Math.abs(n)))), L.health = t;
    }
  }
  var iE = !1;
  function iI(e) {
    return ty.includes(e);
  }
  setInterval(() => {
    !0 == iE && (r.send("2", i7), r.send("2", i7));
  }, -1), window.isAlly = iI;
  var iS = {last: !1, health: 700, location: {x: 0, y: 0}}, i5 = !1;
  function iP(e) {
    n0 = !1, 2 == e ? (iE = !0, tD(j.tails[21] ? 21 : 0, 1), nv(j.weapons[1], !0), tj.change(!0), t8.change(!1), tD(53), tR.change(!0), setTimeout(() => {
      tD(j.tails[21] ? 21 : 0, 1), tj.change(!1), nv(j.weapons[0], !0), tD(7), t8.change(!0), setTimeout(() => {
        iE = !1, tR.change(!1), t8.change(!1), tj.change(!1);
      }, 160);
    }, 90)) : 1 == e ? (iE = !0, tD(j.tails[13] ? 13 : 0, 1), nv(j.weapons[0], !0), t8.change(!0), tj.change(!1), tD(6), tR.change(!0), setTimeout(() => {
      tD(6 == nearestEnemy[9] || 22 == nearestEnemy[9] ? 20 : 53), tD(11, 1), nv(j.weapons[1], !0), tj.change(!0), t8.change(!1), setTimeout(() => {
        iE = !1, tR.change(!1), t8.change(!1), tj.change(!1);
      }, 160);
    }, 90)) : (iE = !0, tD(j.tails[21] ? 21 : 0, 1), nv(j.weapons[0], !0), t8.change(!0), tj.change(!1), tD(7), tR.change(!0), setTimeout(() => {
      tD(22 == nearestEnemy[9] ? 20 : 53), tD(11, 1), nv(j.weapons[1], !0), tj.change(!0), t8.change(!1), setTimeout(() => {
        iE = !1, tR.change(!1), t8.change(!1), tj.change(!1);
      }, 160);
    }, 90));
  }
  var iT = [], i7 = 0, iB = 0, iA = "none";
  function iC(e) {
    return e / 180 * Math.PI;
  }
  var iO = [[11, !1], [15, !0], [6, !0], [7, !0], [22, !0], [40, !0], [53, !0], [31, !0], [12, !0], [11, !0], [26, !0], [21, !1], [20, !0]], iR = setInterval(() => {
    !0 == iO[0][1] ? eW.filter(e => e.id == iO[0][0]).forEach(e => {
      j && j.points >= e.price && (tL(e.id, 0), iO.shift());
    }) : !1 == iO[0][1] && eX.filter(e => e.id == iO[0][0]).forEach(e => {
      j && j.points >= e.price && (tL(e.id, 1), iO.shift());
    }), 0 == iO.length && clearInterval(iR);
  }, 500);
  function i8(e, t) {
    let n = h.list[e], i = 35 + n.scale, s = !0, r = j.x2 + Math.cos(t) * i, a = j.y2 + Math.sin(t) * i;
    if (31 != j.skinIndex) for (let o = 0; o < G.length; o++) {
      let l = G[o];
      if (l.active && Math.hypot(l.y - a, l.x - r) <= n.scale + l.scale) {
        s = !1;
        break;
      }
    } else s = !1;
    !0 == s && iv(e, t);
  }
  let ij = {interval: null, action: function (e) {
    !0 == e ? (clearInterval(this.interval), this.interval = setInterval(() => {
      !1 == iE && !1 == i5 && (iA = "autogrind", nv(j.weaponIndex, !0), (j.weaponIndex > 9 ? 1 == j.secondary.reload : 1 == j.primary.reload) ? (r.send("c", 1, Number.MAX_VALUE), r.send("c", 0, Number.MAX_VALUE), tD(40)) : tD(6), r.send("2", Number.MAX_VALUE));
    }, 0)) : clearInterval(this.interval);
  }};
  var iD = !1, iL = 0, iM = 0, iU = {amount: [], info: []}, iH = [], iz = [];
  function iq(e, t) {
    if ("clan" == e) for (let n = 0; n < modBots.length; n++) 1 == modBots[n].readyState && modBots[n].clan != t && (modBots[n].emit(["9", [null]]), modBots[n].emit(["10", [t]]));
  }
  function iY(e) {
    tick++, iT = [], nearestEnemy = [], i7 = 0, iz = ib, ib = [];
    for (var t = Date.now(), n = 0; n < X.length; n++) X[n].forcePos = !X[n].visible, X[n].visible = !1;
    for (n = 0; n < e.length;) (L = iN(e[n])) && (L.t1 = void 0 === L.t2 ? t : L.t2, L.t2 = t, L.x1 = L.x, L.y1 = L.y, L.x2 = e[n + 1], L.y2 = e[n + 2], L.d1 = void 0 === L.d2 ? e[n + 3] : L.d2, L.d2 = e[n + 3], L.dt = 0, L.speed = Math.hypot(L.y1 - L.y2, L.x1 - L.x2), L.buildIndex = e[n + 4], L.weaponIndex = e[n + 5], L.weaponVariant = e[n + 6], L.team = e[n + 7], L.isLeader = e[n + 8], L.skinIndex = e[n + 9], L.tailIndex = e[n + 10], L.iconIndex = e[n + 11], L.zIndex = e[n + 12], L.visible = !0, L.update(), L == j || L.team && L.team == j.team || iT.push(e.slice(n, n + 13)), L == j && (j.team && iq("clan", j.team), myPlayer = {x: j.x2, y: j.y2}, j.weapons[0] && j.primary.id != j.weapons[0] ? j.primary.id = j.primary.id = j.weapons[0] : j.weapons[1] && j.secondary.id != j.weapons[1] && (j.secondary.id = j.secondary.id = j.weapons[1]))), n += 13;
    if (nf.status && (nf.w || !nf.a || nf.s || nf.d ? !nf.w && nf.a && nf.s && !nf.d ? nf.aim = -0.77 : nf.w || nf.a || !nf.s || nf.d ? !nf.w && !nf.a && nf.s && nf.d ? nf.aim = -2.34 : nf.w || nf.a || nf.s || !nf.d ? nf.w && !nf.a && !nf.s && nf.d ? nf.aim = 2.35 : !nf.w || nf.a || nf.s || nf.d ? nf.w && nf.a && !nf.s && !nf.d && (nf.aim = 0.77) : nf.aim = 1.57 : nf.aim = 3.14 : nf.aim = -1.57 : nf.aim = 0), Math.sqrt(Math.pow(nf.y - j.y, 2) + Math.pow(nf.x - j.x, 2)) > 99 && (nf.status && (iv(j.items[3], nf.aim), iv(j.items[3], nf.aim - iC(69)), iv(j.items[3], nf.aim + iC(69)), r.send("2", nn())), nf.x = j.x, nf.y = j.y), iT.length) {
      nearestEnemy = (iT = iT.sort((e, t) => iW(e, j) - iW(t, j)))[0];
      for (let i = 0; i < iT.length; i++) {
        let s = iN(iT[i][0]);
        iX(s, j) / 1.7 <= h.weapons[s.primary.id].range + 35 && ib.push(s);
      }
    }
    if (iz.forEach(e => {
      if (!iT.find(t => t[0] == e[0])) {
        let t = iN(e[0]);
        t && (t.primary.reload = 1, t.secondary.reload = 1, t.turret = 1);
      }
    }), nearestEnemy.length ? i7 = Math.atan2(nearestEnemy[2] - j.y2, nearestEnemy[1] - j.x2) : (il = [], i7 = 0), nearestEnemy.length && (iL = iM, iM = iW(nearestEnemy, j)), j.skins[11] && j.tails[21] && nearestEnemy.length) {
      iU.amount = [];
      for (let a = 0; a < iU.info.length; a++) iU.info[a] && 1 == iU.info[a].primary.reload && iT.find(e => iU.info[a].sid == e[0]) && iU.amount.push(!0);
      iU.info = [];
      for (let o = 0; o < ib.length; o++) ib[o].primary.reload + 111 / h.weapons[ib[o].primary.id].speed >= 1 && Math.round((ib[o].primary.reload + 111 / h.weapons[ib[o].primary.id].speed) * 100) / 100 <= (5 == ib[o].primary.id ? 1.15 : 1.2) && iU.info.push(ib[o]);
    }
    iH = G.filter(e => "turret" == e.name && 700 >= Math.hypot(e.y - j.y2, e.x - j.x2) && e.active && e.owner.sid != j.sid && !iI(e.owner.sid)), !j.team && ty.length && (ty = []), nearestEnemy.length && !1 == iE && 15 == j.items[4] && !1 == nl.autogrind && !1 == i5 && function e() {
      if (nearestEnemy.length && !nf.status) {
        if (G.find(e => e.trap && (e.owner.sid == j.sid || iI(e.owner.sid)) && 70 > Math.hypot(e.y - nearestEnemy[2], e.x - nearestEnemy[1]))) {
          if (200 > iW(nearestEnemy, j)) {
            i8(j.items[2], i7), i8(j.items[2], Math.hypot(nearestEnemy[1] - j.x, nearestEnemy[2] - nearestEnemy[2]));
            for (let t = 0; t < 2 * Math.PI; t += Math.PI / 12) i8(j.items[2], t + i7), i8(j.items[2], t - i7);
          }
        } else i8(j.items[4], i7), i8(j.items[4], Math.hypot(nearestEnemy[1] - j.x, nearestEnemy[2] - nearestEnemy[2]));
        if (250 > iW(nearestEnemy, j)) {
          i8(j.items[2], i7);
          for (let n = i7 - Math.PI / 3; n < i7 + Math.PI / 3; n += Math.PI / 18) i8(j.items[2], n);
          for (let i = 0; i < 2 * Math.PI; i += Math.PI / 12) i8(j.items[4], i);
        } else for (let s = 0; s < 2 * Math.PI; s += Math.PI / 12) i8(j.items[4], s);
        r.send("2", nn());
      }
    }(), !0 == nl.autoupgrade && (0 == document.getElementById("upgradetype").value ? j.items[5] != h.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value)) && (r.send("6", 7), r.send("6", h.list.findIndex(e => e.name.includes("cookie")) + 16), r.send("6", h.list.findIndex(e => e.name.includes("pit")) + 16), r.send("6", h.list.findIndex(e => e.name.includes("greater")) + 16), r.send("6", 10), r.send("6", h.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value)) + 16)) : j.items[5] != h.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value)) && (r.send("6", 5), r.send("6", h.list.findIndex(e => e.name.includes("cookie")) + 16), r.send("6", h.list.findIndex(e => e.name.includes("pit")) + 16), r.send("6", h.list.findIndex(e => e.name.includes("greater")) + 16), r.send("6", 10), r.send("6", h.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value)) + 16))), iS.last = i5;
    let l = G.filter(e => e.trap && e.owner.sid != j.sid && !iI(e.owner.sid) && e.active && 80 > Math.hypot(e.y - j.y2, e.x - j.x2)).sort((e, t) => Math.hypot(e.y - j.y2, e.x - j.x2) - Math.hypot(t.y - j.y2, t.x - j.x2))[0];
    if (l) i5 = !0, iS.health = l.currentHealth, iS.location = {x: l.x, y: l.y}; else if (i5 = !1, !0 == iS.last) {
      i4 = !0, tD(6);
      let c = iN(nearestEnemy[0]);
      nearestEnemy.length && c.primary.dmg + c.secondary.dmg + 25 >= 100 && j.shameCount < 5 && (iw(), ix++), !0 == tO && (iw(), tO = !1), setTimeout(() => {
        i4 = !1;
      }, 200);
    }
    if (nearestEnemy.length && 1 == j.primary.reload && 1 == j.secondary.reload && 1 == j.turret && j.weapons[1]) {
      let u = G.some(e => iX(e, j) < iW(nearestEnemy, j) && Math.abs(Math.atan2(e.y - j.y, e.x - j.x) - i7) <= (e.scale + 10) / iX(e, j) && e.active && !e.ignoreCollision);
      !0 == n0 && ((179 > iW(nearestEnemy, j) || iM !== iL && iL >= 185 && iM < 185) && 10 != j.weapons[1] && !u ? iM !== iL && iL >= 185 && iM < 180 ? 6 != nearestEnemy[9] && 22 != nearestEnemy[9] && j.skins[53] && 13 != j.weapons[1] ? iP(1) : iP(0) : j.shameCount > 3 && (tick - j.bullTick) % 9 == 8 || 11 == nearestEnemy[9] && 0 == j.primary.variant ? iP(2) : 6 != nearestEnemy[9] && 22 != nearestEnemy[9] && j.skins[53] && 13 != j.weapons[1] ? iP(1) : iP(0) : 130 > iW(nearestEnemy, j) && 6 != nearestEnemy[9] && 22 != nearestEnemy[9] && 10 == j.weapons[1] && iP(2));
    }
    if (!0 == iE) iA = "instaing"; else if (!0 == i5 && !1 == nf.space) {
      iA = "autobreaking";
      let f = G.find(e => e.trap && nearestEnemy.length && (e.owner.sid == j.sid || iI(e.owner.sid)) && 70 > Math.hypot(e.y - nearestEnemy[2], e.x - nearestEnemy[1])), d = 10 == j.weapons[1] ? 1 == j.primary.reload && iS.health <= h.weapons[j.primary.id].dmg ? j.weapons[0] : 10 : j.weapons[0], _ = G.filter(e => e.dmg && e.dmg > 0 && e.sid != j.sid && !iI(e.sid) && 130 > Math.hypot(e.y - j.y, e.x - j.x) && e.active), p = G.filter(e => !e.ignoreCollision && !e.dmg && 200 > Math.hypot(e.y - j.y, e.x - j.x) && e.active && e.health);
      iB = !f && (_.length > 0 || p.length > 2) ? Number.MAX_VALUE : Math.atan2(iS.location.y - j.y2, iS.location.x - j.x2), nv(d, !0), (10 == d ? 1 == j.secondary.reload : 1 == j.primary.reload) ? (tD(iS.health <= h.weapons[d].dmg ? 6 : 40), tD(j.tails[21] ? 21 : 0, 1), r.send("c", 1, iB), r.send("c", 0, iB)) : iV() && j.skins[7] ? (ix++, tD(7)) : iH.length && j.skins[22] ? (tD(22), tD(11, 1)) : j.skins[26] && (_.length > 0 || p.length > 2) && !f ? (tD(26), tD(21, 1)) : nearestEnemy.length && j.skins[11] && j.tails[21] && (iL > 180 && iM < 180 || iU.amount.length) && 0 == iN(nearestEnemy[0]).primary.variant ? (iD = !0, tD(11), tD(21, 1)) : (tD(6), tD(21, 1)), r.send("2", iB);
    } else nearestEnemy.length && j.skins[11] && j.tails[21] && (iL > 180 && iM < 180 || iU.amount.length) && 0 == iN(nearestEnemy[0]).primary.variant ? (iA = "pab", iD = !0, tD(11), tD(21, 1)) : (nearestEnemy.length && !0 == nl.autobullspam && !1 == n0 && iW(nearestEnemy, j) / 1.7 < h.weapons[j.weapons[0]].range && 1 == j.secondary.reload || !0 == nf.space) && !1 == nl.autogrind ? (iA = "auto bull spam", nv(j.weapons[0], !0), 1 == j.primary.reload ? (tD(j.tails[21] ? 21 : 0, 1), j.weaponIndex != j.weapons[0] ? nv(j.weapons[0], !0) : 150 > iW(nearestEnemy, j) && i8(j.items[2], i7 || nn()), 0 == j.primary.variant && 11 == nearestEnemy[9] ? tD(6) : tD(7), r.send("c", 1, i7 || nn()), r.send("c", 0, i7 || nn())) : iH.length && j.skins[22] ? (tD(22), tD(11, 1)) : nearestEnemy.length && 11 == nearestEnemy[9] ? (tD(6), tD(21, 1)) : nearestEnemy.length && j.skins[11] && j.tails[21] && (iL > 180 && iM < 180 || iU.amount.length) && 0 == iN(nearestEnemy[0]).primary.variant ? (iD = !0, tD(11), tD(21, 1)) : (tD(6), tD(21, 1))) : !1 == tQ.status && !1 == ne.status && !1 == iE && !1 == nl.autogrind && (iD = !1, iA = "none", 1 != j.primary.reload ? (iF = !0, nv(j.weapons[0], 1)) : 1 != j.secondary.reload ? (iF = !0, nv(j.weapons[1], 1)) : iF && (iF = !1, 10 == j.weapons[1] && (4 == j.weapons[0] || 5 == j.weapons[0]) ? (tj.change(!0), setTimeout(() => {
      tj.change(!1);
    }, 111)) : (t8.change(!0), setTimeout(() => {
      t8.change(!1);
    }, 111))), iV() && j.skins[7] ? (ix++, tD(7), tD(11, 1)) : iH.length && j.skins[22] ? (tD(22), tD(11, 1)) : j.y2 > 6850 && j.y2 < 7550 && j.skins[31] ? (tD(31), tD(11, 1)) : nearestEnemy.length && 250 > iW(nearestEnemy, j) && j.skins[6] ? (tD(6), tD(11, 1)) : j.y2 < 2400 && j.skins[15] ? (tD(15), tD(11, 1)) : (tD(12), tD(11, 1)));
    nearestEnemy.length && !0 == iD && !1 == iE && 1 == j.primary.reload && (i1.includes(60) || i1.includes(68)) && (iE = !0, tD(7), tD(j.tails[21] ? 21 : 0, 1), nv(j.weapons[0], !0), tj.change(!1), t8.change(!0), r.send("7", 1), setTimeout(() => {
      r.send("7", 1), iE = !1, t8.change(!1), tj.change(!1);
    }, 111)), i1 = [];
  }
  var iF = !1;
  function iV(e) {
    return 45 != j.skinIndex && (!!(j.shameCount > 0) && (tick - j.bullTick) % 9 == 0 || !!(ix > 1));
  }
  function iW(e, t) {
    return Math.sqrt(Math.pow((t.y2 || t.y) - e[2], 2) + Math.pow((t.x2 || t.x) - e[1], 2));
  }
  function iX(e, t) {
    return Math.sqrt(Math.pow((t.y2 || t.y) - (e.y2 || e.y), 2) + Math.pow((t.x2 || t.x) - (e.x2 || e.x), 2));
  }
  function iN(e) {
    for (var t = 0; t < X.length; ++t) if (X[t].sid == e) return X[t];
    return null;
  }
  function iG(e) {
    for (var t = 0; t < W.length; ++t) if (W[t].sid == e) return W[t];
    return null;
  }
  function iJ(e) {
    for (var t = 0; t < G.length; ++t) if (G[t].sid == e) return G[t];
    return null;
  }
  var i9 = -1;
  function iZ() {
    var e = Date.now() - i9;
    window.pingTime = e, e3.innerText = "Ping: " + e + " ms";
  }
  var iK = !1;
  function iQ() {
    !1 == iK && (iK = !0, document.getElementById("ot-sdk-btn-floating").remove()), i9 = Date.now(), r.send("pp");
  }
  function se(e) {
    if (!(e < 0)) {
      var t = Math.floor(e / 60), n = e % 60;
      n = ("0" + n).slice(-2), e1.innerText = "Server restarting in " + t + ":" + n, e1.hidden = !1;
    }
  }
  function st(e) {
    window.open(e, "_blank");
  }
  window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  }, i = l.mapScale / 2, eN.add(0, i, i + 200, 0, l.treeScales[3], 0), eN.add(1, i, i - 480, 0, l.treeScales[3], 0), eN.add(2, i + 300, i + 450, 0, l.treeScales[3], 0), eN.add(3, i - 950, i - 130, 0, l.treeScales[2], 0), eN.add(4, i - 750, i - 400, 0, l.treeScales[3], 0), eN.add(5, i - 700, i + 400, 0, l.treeScales[2], 0), eN.add(6, i + 800, i - 200, 0, l.treeScales[3], 0), eN.add(7, i - 260, i + 340, 0, l.bushScales[3], 1), eN.add(8, i + 760, i + 310, 0, l.bushScales[3], 1), eN.add(9, i - 800, i + 100, 0, l.bushScales[3], 1), eN.add(10, i - 800, i + 300, 0, h.list[4].scale, h.list[4].id, h.list[10]), eN.add(11, i + 650, i - 390, 0, h.list[4].scale, h.list[4].id, h.list[10]), eN.add(12, i - 400, i - 450, 0, l.rockScales[2], 2), function e() {
    if (A = (C = Date.now()) - V, V = C, function () {
      if (j && (!O || C - O >= 1e3 / l.clientSendRate) && (O = C, r.send("2", nn())), n3 < 120 && (n3 += 0.1 * A, eH.style.fontSize = Math.min(Math.round(n3), 120) + "px"), j) {
        var e = a.getDistance(M, U, j.x, j.y), t = a.getDirection(j.x, j.y, M, U), n = Math.min(0.01 * e * A, e);
        e > 0.05 ? (M += n * Math.cos(t), U += n * Math.sin(t)) : (M = j.x, U = j.y);
      } else M = l.mapScale / 2, U = l.mapScale / 2;
      for (var i = C - 1e3 / l.serverUpdateRate, s = 0; s < X.length + W.length; ++s) if ((L = X[s] || W[s - X.length]) && L.visible) {
        if (L.forcePos) L.x = L.x2, L.y = L.y2, L.dir = L.d2; else {
          var o = L.t2 - L.t1, c = (i - L.t1) / o;
          L.dt += A;
          var h = Math.min(1.7, L.dt / 170), u = L.x2 - L.x1;
          L.x = L.x1 + u * h, u = L.y2 - L.y1, L.y = L.y1 + u * h, L.dir = Math.lerpAngle(L.d2, L.d1, Math.min(1.2, c));
        }
      }
      var f = M - el / 2, d = U - ec / 2;
      l.snowBiomeTop - d <= 0 && l.mapScale - l.snowBiomeTop - d >= ec ? (ev.fillStyle = "#b6db66", ev.fillRect(0, 0, el, ec)) : l.mapScale - l.snowBiomeTop - d <= 0 ? (ev.fillStyle = "#dbc666", ev.fillRect(0, 0, el, ec)) : l.snowBiomeTop - d >= ec ? (ev.fillStyle = "#fff", ev.fillRect(0, 0, el, ec)) : l.snowBiomeTop - d >= 0 ? (ev.fillStyle = "#fff", ev.fillRect(0, 0, el, l.snowBiomeTop - d), ev.fillStyle = "#b6db66", ev.fillRect(0, l.snowBiomeTop - d, el, ec - (l.snowBiomeTop - d))) : (ev.fillStyle = "#b6db66", ev.fillRect(0, 0, el, l.mapScale - l.snowBiomeTop - d), ev.fillStyle = "#dbc666", ev.fillRect(0, l.mapScale - l.snowBiomeTop - d, el, ec - (l.mapScale - l.snowBiomeTop - d))), nw || ((et += en * l.waveSpeed * A) >= l.waveMax ? (et = l.waveMax, en = -1) : et <= 1 && (et = en = 1), ev.globalAlpha = 1, ev.fillStyle = "#dbc666", nO(f, d, ev, l.riverPadding), ev.fillStyle = "#91b2db", nO(f, d, ev, 250 * (et - 1))), ev.lineWidth = 4, ev.strokeStyle = "#000", ev.globalAlpha = 0.06, ev.beginPath();
      for (var _ = (14400 - f) % 1440; _ < el; _ += 1440) _ > 0 && (ev.moveTo(_, 0), ev.lineTo(_, ec));
      for (var p = (14400 - d) % 1440; p < ec; p += 1440) _ > 0 && (ev.moveTo(0, p), ev.lineTo(el, p));
      for (ev.stroke(), ev.globalAlpha = 1, ev.strokeStyle = eG, nR(-1, f, d), ev.globalAlpha = 1, ev.lineWidth = 5.5, nB(0, f, d), nD(f, d, 0), ev.globalAlpha = 1, s = 0; s < W.length; ++s) (L = W[s]).active && L.visible && (L.animate(A), ev.save(), ev.translate(L.x - f, L.y - d), ev.rotate(L.dir + L.dirPlus - Math.PI / 2), i$(L, ev), ev.restore());
      if (nR(0, f, d), nB(1, f, d), nR(1, f, d), nD(f, d, 1), nR(2, f, d), nR(3, f, d), ev.fillStyle = "#000", ev.globalAlpha = 0.09, f <= 0 && ev.fillRect(0, 0, -f, ec), l.mapScale - f <= el) {
        var g = Math.max(0, -d);
        ev.fillRect(l.mapScale - f, g, el - (l.mapScale - f), ec - g);
      }
      if (d <= 0 && ev.fillRect(-f, 0, el + f, -d), l.mapScale - d <= ec) {
        var y = Math.max(0, -f), k = 0;
        l.mapScale - f <= el && (k = el - (l.mapScale - f)), ev.fillRect(y, l.mapScale - d, el - y - k, ec - (l.mapScale - d));
      }
      for (ev.globalAlpha = 1, ev.fillStyle = "rgba(0, 0, 70, 0.35)", ev.fillRect(0, 0, el, ec), ev.strokeStyle = eJ, s = 0; s < X.length + W.length; ++s) if ((L = X[s] || W[s - X.length]).visible && (10 != L.skinIndex || L == j || L.team && L.team == j.team)) {
        var v = (L.team ? "[" + L.team + "] " : "") + (L.name || "");
        if ("" != v) {
          if (ev.font = (L.nameScale || 30) + "px Hammersmith One", ev.fillStyle = "#fff", ev.textBaseline = "middle", ev.textAlign = "center", ev.lineWidth = L.nameScale ? 11 : 8, ev.lineJoin = "round", ev.strokeText(v, L.x - f, L.y - d - L.scale - l.nameY), ev.fillText(v, L.x - f, L.y - d - L.scale - l.nameY), L.isLeader && nE.crown.isLoaded) {
            var w = l.crownIconScale;
            y = L.x - f - w / 2 - ev.measureText(v).width / 2 - l.crownPad, ev.drawImage(nE.crown, y, L.y - d - L.scale - l.nameY - w / 2 - 5, w, w);
          }
          1 == L.iconIndex && nE.skull.isLoaded && (w = l.crownIconScale, y = L.x - f - w / 2 + ev.measureText(v).width / 2 + l.crownPad, ev.drawImage(nE.skull, y, L.y - d - L.scale - l.nameY - w / 2 - 5, w, w)), nE.crosshair.isLoaded && n0 && nearestEnemy.length && L.sid == nearestEnemy[0] && L.isPlayer && (w = 2 * l.playerScale - 10, ev.drawImage(nE.crosshair, L.x - f - w / 2, L.y - d - w / 2, w, w));
        }
        L == j && (ev.font = (L.nameScale || 30) + "px Hammersmith One", ev.fillStyle = "#808080", ev.textBaseline = "middle", ev.textAlign = "center", ev.lineWidth = L.nameScale ? 11 : 8, ev.lineJoin = "round", ev.strokeText(L.shameCount, L.x - f + ev.measureText(v).width / 2 + l.crownPad, L.y - d - L.scale - l.nameY), ev.fillText(L.shameCount, L.x - f + ev.measureText(v).width / 2 + l.crownPad, L.y - d - L.scale - l.nameY)), L.health > 0 && (l.healthBarWidth, ev.fillStyle = eJ, ev.roundRect(L.x - f - l.healthBarWidth - l.healthBarPad, L.y - d + L.scale + l.nameY, 2 * l.healthBarWidth + 2 * l.healthBarPad, 17, 8), ev.fill(), ev.fillStyle = L == j || L.team && L.team == j.team ? "#8ecc51" : "#cc5151", ev.roundRect(L.x - f - l.healthBarWidth, L.y - d + L.scale + l.nameY + l.healthBarPad, 2 * l.healthBarWidth * (L.health / L.maxHealth), 17 - 2 * l.healthBarPad, 7), ev.fill());
      }
      for (m.update(A, ev, f, d), s = 0; s < X.length; ++s) if ((L = X[s]).visible && L.chatCountdown > 0) {
        L.chatCountdown -= A, L.chatCountdown <= 0 && (L.chatCountdown = 0), ev.font = "32px Hammersmith One";
        var b = ev.measureText(L.chatMessage);
        ev.textBaseline = "middle", ev.textAlign = "center", y = L.x - f, g = L.y - L.scale - d - 90;
        var x = b.width + 17;
        ev.fillStyle = "rgba(0,0,0,0.2)", ev.roundRect(y - x / 2, g - 23.5, x, 47, 6), ev.fill(), ev.fillStyle = "#fff", ev.fillText(L.chatMessage, y, g);
      }
      (function (e) {
        if (j && j.alive) {
          eq.clearRect(0, 0, eU.width, eU.height), eq.strokeStyle = "#fff", eq.lineWidth = 4;
          for (var t = 0; t < t5.length; ++t) (tS = t5[t]).update(eq, e);
          if (eq.globalAlpha = 1, eq.fillStyle = "#fff", nK(j.x / l.mapScale * eU.width, j.y / l.mapScale * eU.height, 7, eq, !0), eq.fillStyle = "rgba(255,255,255,0.35)", j.team && t$) for (t = 0; t < t$.length; t += 2) nK(t$[t] / l.mapScale * eU.width, t$[t + 1] / l.mapScale * eU.height, 7, eq, !0);
          tp && (eq.fillStyle = "#fc5553", eq.font = "34px Hammersmith One", eq.textBaseline = "middle", eq.textAlign = "center", eq.fillText("x", tp.x / l.mapScale * eU.width, tp.y / l.mapScale * eU.height)), tg && (eq.fillStyle = "#fff", eq.font = "34px Hammersmith One", eq.textBaseline = "middle", eq.textAlign = "center", eq.fillText("x", tg.x / l.mapScale * eU.width, tg.y / l.mapScale * eU.height));
        }
      }(A), -1 !== er.id && n7(er.startX, er.startY, er.currentX, er.currentY), -1 !== ea.id && n7(ea.startX, ea.startY, ea.currentX, ea.currentY));
    }(), j && nl.darkmode) {
      let t = ev.getTransform(), n = ev.createRadialGradient(el / 2, ec / 2, 100, el / 2, ec / 2, 1e3);
      n.addColorStop(0, "rgb(0, 0, 0, 0)"), n.addColorStop(0.4, "rgb(0, 0, 0, 0.3)"), n.addColorStop(1, "rgb(0, 0, 0, 0.6)"), ev.fillStyle = n, ev.fillRect(0, 0, el, ec), ev.setTransform(t);
    }
    requestAnimFrame(e);
  }(), window.openLink = st, window.aJoinReq = t4, window.follmoo = function () {
    Y || (Y = !0, S("moofoll", 1));
  }, window.kickFromClan = t2, window.sendJoin = t6, window.leaveAlliance = tI, window.createAlliance = tE, window.storeBuy = tL, window.storeEquip = tD, window.showItemInfo = t_, window.selectSkinColor = function (e) {
    eo = e, tz();
  }, window.changeStoreIndex = function (e) {
    t7 != e && (t7 = e, tA());
  }, window.config = l;
}, function (e, t) {
  !function (e, t, n) {
    function i(e, t) {
      return typeof e === t;
    }
    var s = [], r = [], a = {_version: "3.5.0", _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0}, _q: [], on: function (e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    }, addTest: function (e, t, n) {
      r.push({name: e, fn: t, options: n});
    }, addAsyncTest: function (e) {
      r.push({name: null, fn: e});
    }}, o = function () {};
    o.prototype = a, o = new o;
    var l = t.documentElement, c = "svg" === l.nodeName.toLowerCase();
    o.addTest("passiveeventlisteners", function () {
      var t = !1;
      try {
        var n = Object.defineProperty({}, "passive", {get: function () {
          t = !0;
        }});
        e.addEventListener("test", null, n);
      } catch (i) {}
      return t;
    }), function () {
      var e, t, n, a, l, c;
      for (var h in r) if (r.hasOwnProperty(h)) {
        if (e = [], (t = r[h]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (a = i(t.fn, "function") ? t.fn() : t.fn, l = 0; l < e.length; l++) 1 === (c = e[l].split(".")).length ? o[c[0]] = a : (!o[c[0]] || o[c[0]] instanceof Boolean || (o[c[0]] = new Boolean(o[c[0]])), o[c[0]][c[1]] = a), s.push((a ? "" : "no-") + c.join("-"));
      }
    }(), function (e) {
      var t = l.className, n = o._config.classPrefix || "";
      if (c && (t = t.baseVal), o._config.enableJSClass) {
        var i = RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(i, "$1" + n + "js$2");
      }
      o._config.enableClasses && (t += " " + n + e.join(" " + n), c ? l.className.baseVal = t : l.className = t);
    }(s), delete a.addTest, delete a.addAsyncTest;
    for (var h = 0; h < o._q.length; h++) o._q[h]();
    e.Modernizr = o;
  }(window, document);
}, function (e, t, n) {
  var i = n(24);
  n(19), e.exports = {socket: null, connected: !1, socketId: -1, connect: function (e, t, n) {
    if (!this.socket) {
      var s = this;
      try {
        var r = !1;
        this.socket = new WebSocket(e), this.socket.binaryType = "arraybuffer", this.socket.onmessage = function (e) {
          var t = new Uint8Array(e.data), r = i.decode(t), a = r[0];
          t = r[1], "io-init" == a ? s.socketId = t[0] : n[a].apply(void 0, t);
        }, this.socket.onopen = function () {
          s.connected = !0, t();
        }, this.socket.onclose = function (e) {
          s.connected = !1, 4001 == e.code ? t("Invalid Connection") : r || t("disconnected");
        }, this.socket.onerror = function (e) {
          this.socket && this.socket.readyState != WebSocket.OPEN && (r = !0, console.error("Socket error", arguments), t("Socket error"));
        };
      } catch (a) {
        console.warn("Socket connection error:", a), t(a);
      }
    }
  }, send: function (e) {
    var t = Array.prototype.slice.call(arguments, 1), n = i.encode([e, t]);
    this.socket.send(n);
  }, socketReady: function () {
    return this.socket && this.connected;
  }, close: function () {
    this.socket && this.socket.close();
  }};
}, function (e, t, n) {
  t.encode = n(9).encode, t.decode = n(15).decode, t.Encoder = n(37).Encoder, t.Decoder = n(38).Decoder, t.createCodec = n(39).createCodec, t.codec = n(40).codec;
}, function (e, t, n) {
  (function (t) {
    function n(e) {
      return e && e.isBuffer && e;
    }
    e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer;
  }.call(this, n(11).Buffer));
}, function (e, t, n) {
  "use strict";
  t.byteLength = function (e) {
    var t = c(e), n = t[0], i = t[1];
    return 3 * (n + i) / 4 - i;
  }, t.toByteArray = function (e) {
    var t, n, i, a, o = c(e), l = o[0], h = o[1], u = new r((t = l, n = h, 3 * (t + n) / 4 - n)), f = 0, d = h > 0 ? l - 4 : l;
    for (a = 0; a < d; a += 4) i = s[e.charCodeAt(a)] << 18 | s[e.charCodeAt(a + 1)] << 12 | s[e.charCodeAt(a + 2)] << 6 | s[e.charCodeAt(a + 3)], u[f++] = i >> 16 & 255, u[f++] = i >> 8 & 255, u[f++] = 255 & i;
    return 2 === h && (i = s[e.charCodeAt(a)] << 2 | s[e.charCodeAt(a + 1)] >> 4, u[f++] = 255 & i), 1 === h && (i = s[e.charCodeAt(a)] << 10 | s[e.charCodeAt(a + 1)] << 4 | s[e.charCodeAt(a + 2)] >> 2, u[f++] = i >> 8 & 255, u[f++] = 255 & i), u;
  }, t.fromByteArray = function (e) {
    for (var t, n = e.length, s = n % 3, r = [], a = 0, o = n - s; a < o; a += 16383) r.push(u(e, a, a + 16383 > o ? o : a + 16383));
    return 1 === s ? r.push(i[(t = e[n - 1]) >> 2] + i[t << 4 & 63] + "==") : 2 === s && r.push(i[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="), r.join("");
  };
  for (var i = [], s = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, l = a.length; o < l; ++o) i[o] = a[o], s[a.charCodeAt(o)] = o;
  function c(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
  }
  function h(e) {
    return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e];
  }
  function u(e, t, n) {
    for (var i, s = [], r = t; r < n; r += 3) s.push(h(i = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2])));
    return s.join("");
  }
  s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
}, function (e, t) {
  var n = {}.toString;
  e.exports = Array.isArray || function (e) {
    return "[object Array]" == n.call(e);
  };
}, function (e, t, n) {
  var i = n(0);
  function s(e) {
    return Array(e);
  }
  (t = e.exports = s(0)).alloc = s, t.concat = i.concat, t.from = function (e) {
    if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e); else if (i.isArrayBuffer(e)) e = new Uint8Array(e); else {
      if ("string" == typeof e) return i.from.call(t, e);
      if ("number" == typeof e) throw TypeError('"value" argument must not be a number');
    }
    return Array.prototype.slice.call(e);
  };
}, function (e, t, n) {
  var i = n(0), s = i.global;
  function r(e) {
    return new s(e);
  }
  (t = e.exports = i.hasBuffer ? r(0) : []).alloc = i.hasBuffer && s.alloc || r, t.concat = i.concat, t.from = function (e) {
    if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e); else if (i.isArrayBuffer(e)) e = new Uint8Array(e); else {
      if ("string" == typeof e) return i.from.call(t, e);
      if ("number" == typeof e) throw TypeError('"value" argument must not be a number');
    }
    return s.from && 1 !== s.from.length ? s.from(e) : new s(e);
  };
}, function (e, t, n) {
  var i = n(0);
  function s(e) {
    return new Uint8Array(e);
  }
  (t = e.exports = i.hasArrayBuffer ? s(0) : []).alloc = s, t.concat = i.concat, t.from = function (e) {
    if (i.isView(e)) {
      var n = e.byteOffset, s = e.byteLength;
      (e = e.buffer).byteLength !== s && (e.slice ? e = e.slice(n, n + s) : (e = new Uint8Array(e)).byteLength !== s && (e = Array.prototype.slice.call(e, n, n + s)));
    } else {
      if ("string" == typeof e) return i.from.call(t, e);
      if ("number" == typeof e) throw TypeError('"value" argument must not be a number');
    }
    return new Uint8Array(e);
  };
}, function (e, t) {
  t.copy = function (e, t, n, i) {
    n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0);
    var s, r = i - n;
    if (e === this && n < t && t < i) for (s = r - 1; s >= 0; s--) e[s + t] = this[s + n]; else for (s = 0; s < r; s++) e[s + t] = this[s + n];
    return r;
  }, t.toString = function (e, t, n) {
    var i = 0 | t;
    n || (n = this.length);
    for (var s = "", r = 0; i < n;) (r = this[i++]) < 128 ? s += String.fromCharCode(r) : (192 == (224 & r) ? r = (31 & r) << 6 | 63 & this[i++] : 224 == (240 & r) ? r = (15 & r) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] : 240 == (248 & r) && (r = (7 & r) << 18 | (63 & this[i++]) << 12 | (63 & this[i++]) << 6 | 63 & this[i++]), r >= 65536 ? (r -= 65536, s += String.fromCharCode(55296 + (r >>> 10), 56320 + (1023 & r))) : s += String.fromCharCode(r));
    return s;
  }, t.write = function (e, t) {
    for (var n = t || (t |= 0), i = e.length, s = 0, r = 0; r < i;) (s = e.charCodeAt(r++)) < 128 ? this[n++] = s : s < 2048 ? (this[n++] = 192 | s >>> 6, this[n++] = 128 | 63 & s) : s < 55296 || s > 57343 ? (this[n++] = 224 | s >>> 12, this[n++] = 128 | s >>> 6 & 63, this[n++] = 128 | 63 & s) : (s = 65536 + (s - 55296 << 10 | e.charCodeAt(r++) - 56320), this[n++] = 240 | s >>> 18, this[n++] = 128 | s >>> 12 & 63, this[n++] = 128 | s >>> 6 & 63, this[n++] = 128 | 63 & s);
    return n - t;
  };
}, function (e, t, n) {
  t.setExtPackers = function (e) {
    e.addExtPacker(14, Error, [u, l]), e.addExtPacker(1, EvalError, [u, l]), e.addExtPacker(2, RangeError, [u, l]), e.addExtPacker(3, ReferenceError, [u, l]), e.addExtPacker(4, SyntaxError, [u, l]), e.addExtPacker(5, TypeError, [u, l]), e.addExtPacker(6, URIError, [u, l]), e.addExtPacker(10, RegExp, [h, l]), e.addExtPacker(11, Boolean, [c, l]), e.addExtPacker(12, String, [c, l]), e.addExtPacker(13, Date, [Number, l]), e.addExtPacker(15, Number, [c, l]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, a), e.addExtPacker(18, Uint8Array, a), e.addExtPacker(19, Int16Array, a), e.addExtPacker(20, Uint16Array, a), e.addExtPacker(21, Int32Array, a), e.addExtPacker(22, Uint32Array, a), e.addExtPacker(23, Float32Array, a), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, a), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, a), e.addExtPacker(26, ArrayBuffer, a), e.addExtPacker(29, DataView, a)), s.hasBuffer && e.addExtPacker(27, r, s.from);
  };
  var i, s = n(0), r = s.global, a = s.Uint8Array.from, o = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};
  function l(e) {
    return i || (i = n(9).encode), i(e);
  }
  function c(e) {
    return e.valueOf();
  }
  function h(e) {
    (e = RegExp.prototype.toString.call(e).split("/")).shift();
    var t = [e.pop()];
    return t.unshift(e.join("/")), t;
  }
  function u(e) {
    var t = {};
    for (var n in o) t[n] = e[n];
    return t;
  }
}, function (e, t, n) {
  var i = n(5), s = n(7), r = s.Uint64BE, a = s.Int64BE, o = n(0), l = n(6), c = n(34), h = n(13).uint8, u = n(3).ExtBuffer, f = "undefined" != typeof Uint8Array, d = "undefined" != typeof Map, _ = [];
  _[1] = 212, _[2] = 213, _[4] = 214, _[8] = 215, _[16] = 216, t.getWriteType = function (e) {
    var t, n = c.getWriteToken(e), s = e && e.useraw, p = f && e && e.binarraybuffer, g = p ? o.isArrayBuffer : o.isBuffer, m = p ? function (e, t) {
      w(e, new Uint8Array(t));
    } : w, y = d && e && e.usemap ? function (e, t) {
      if (!(t instanceof Map)) return b(e, t);
      var i = t.size;
      n[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
      var s = e.codec.encode;
      t.forEach(function (t, n, i) {
        s(e, n), s(e, t);
      });
    } : b;
    return {boolean: function (e, t) {
      n[t ? 195 : 194](e, t);
    }, function: v, number: function (e, t) {
      var i = 0 | t;
      t === i ? n[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e, i) : n[203](e, t);
    }, object: s ? function (e, t) {
      if (g(t)) {
        var i, s, r;
        return i = e, void (n[(r = (s = t).length) < 32 ? 160 + r : r <= 65535 ? 218 : 219](i, r), i.send(s));
      }
      k(e, t);
    } : k, string: (t = s ? function (e) {
      return e < 32 ? 1 : e <= 65535 ? 3 : 5;
    } : function (e) {
      return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
    }, function (e, i) {
      var s = i.length, r = 5 + 3 * s;
      e.offset = e.reserve(r);
      var a = e.buffer, o = t(s), c = e.offset + o, h = t(s = l.write.call(a, i, c));
      if (o !== h) {
        var u = c + s;
        l.copy.call(a, a, c + h - o, c, u);
      }
      n[1 === h ? 160 + s : h <= 3 ? 215 + h : 219](e, s), e.offset += s;
    }), symbol: v, undefined: v};
    function k(e, t) {
      if (null === t) return v(e, t);
      if (g(t)) return m(e, t);
      if (i(t)) return function (e, t) {
        var i = t.length;
        n[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
        for (var s = e.codec.encode, r = 0; r < i; r++) s(e, t[r]);
      }(e, t);
      if (r.isUint64BE(t)) return s = e, o = t, void n[207](s, o.toArray());
      if (a.isInt64BE(t)) return l = e, c = t, void n[211](l, c.toArray());
      var s, o, l, c, f, d, p, k, w = e.codec.getExtPacker(t);
      if (w && (t = w(t)), t instanceof u) return f = e, void (n[_[k = (p = (d = t).buffer).length] || (k < 255 ? 199 : k <= 65535 ? 200 : 201)](f, k), h[d.type](f), f.send(p));
      y(e, t);
    }
    function v(e, t) {
      n[192](e, t);
    }
    function w(e, t) {
      var i = t.length;
      n[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i), e.send(t);
    }
    function b(e, t) {
      var i = Object.keys(t), s = i.length;
      n[s < 16 ? 128 + s : s <= 65535 ? 222 : 223](e, s);
      var r = e.codec.encode;
      i.forEach(function (n) {
        r(e, n), r(e, t[n]);
      });
    }
  };
}, function (e, t, n) {
  var i = n(4), s = n(7), r = s.Uint64BE, a = s.Int64BE, o = n(13).uint8, l = n(0), c = l.global, h = l.hasBuffer && "TYPED_ARRAY_SUPPORT" in c && !c.TYPED_ARRAY_SUPPORT, u = l.hasBuffer && c.prototype || {};
  function f() {
    var e = o.slice();
    return e[196] = d(196), e[197] = _(197), e[198] = p(198), e[199] = d(199), e[200] = _(200), e[201] = p(201), e[202] = g(202, 4, u.writeFloatBE || k, !0), e[203] = g(203, 8, u.writeDoubleBE || v, !0), e[204] = d(204), e[205] = _(205), e[206] = p(206), e[207] = g(207, 8, m), e[208] = d(208), e[209] = _(209), e[210] = p(210), e[211] = g(211, 8, y), e[217] = d(217), e[218] = _(218), e[219] = p(219), e[220] = _(220), e[221] = p(221), e[222] = _(222), e[223] = p(223), e;
  }
  function d(e) {
    return function (t, n) {
      var i = t.reserve(2), s = t.buffer;
      s[i++] = e, s[i] = n;
    };
  }
  function _(e) {
    return function (t, n) {
      var i = t.reserve(3), s = t.buffer;
      s[i++] = e, s[i++] = n >>> 8, s[i] = n;
    };
  }
  function p(e) {
    return function (t, n) {
      var i = t.reserve(5), s = t.buffer;
      s[i++] = e, s[i++] = n >>> 24, s[i++] = n >>> 16, s[i++] = n >>> 8, s[i] = n;
    };
  }
  function g(e, t, n, i) {
    return function (s, r) {
      var a = s.reserve(t + 1);
      s.buffer[a++] = e, n.call(s.buffer, r, a, i);
    };
  }
  function m(e, t) {
    new r(this, t, e);
  }
  function y(e, t) {
    new a(this, t, e);
  }
  function k(e, t) {
    i.write(this, e, t, !1, 23, 4);
  }
  function v(e, t) {
    i.write(this, e, t, !1, 52, 8);
  }
  t.getWriteToken = function (e) {
    var t, n;
    return e && e.uint8array ? ((t = f())[202] = g(202, 4, k), t[203] = g(203, 8, v), t) : h || l.hasBuffer && e && e.safe ? ((n = o.slice())[196] = g(196, 1, c.prototype.writeUInt8), n[197] = g(197, 2, c.prototype.writeUInt16BE), n[198] = g(198, 4, c.prototype.writeUInt32BE), n[199] = g(199, 1, c.prototype.writeUInt8), n[200] = g(200, 2, c.prototype.writeUInt16BE), n[201] = g(201, 4, c.prototype.writeUInt32BE), n[202] = g(202, 4, c.prototype.writeFloatBE), n[203] = g(203, 8, c.prototype.writeDoubleBE), n[204] = g(204, 1, c.prototype.writeUInt8), n[205] = g(205, 2, c.prototype.writeUInt16BE), n[206] = g(206, 4, c.prototype.writeUInt32BE), n[207] = g(207, 8, m), n[208] = g(208, 1, c.prototype.writeInt8), n[209] = g(209, 2, c.prototype.writeInt16BE), n[210] = g(210, 4, c.prototype.writeInt32BE), n[211] = g(211, 8, y), n[217] = g(217, 1, c.prototype.writeUInt8), n[218] = g(218, 2, c.prototype.writeUInt16BE), n[219] = g(219, 4, c.prototype.writeUInt32BE), n[220] = g(220, 2, c.prototype.writeUInt16BE), n[221] = g(221, 4, c.prototype.writeUInt32BE), n[222] = g(222, 2, c.prototype.writeUInt16BE), n[223] = g(223, 4, c.prototype.writeUInt32BE), n) : f();
  };
}, function (e, t, n) {
  t.setExtUnpackers = function (e) {
    e.addExtUnpacker(14, [o, c(Error)]), e.addExtUnpacker(1, [o, c(EvalError)]), e.addExtUnpacker(2, [o, c(RangeError)]), e.addExtUnpacker(3, [o, c(ReferenceError)]), e.addExtUnpacker(4, [o, c(SyntaxError)]), e.addExtUnpacker(5, [o, c(TypeError)]), e.addExtUnpacker(6, [o, c(URIError)]), e.addExtUnpacker(10, [o, l]), e.addExtUnpacker(11, [o, h(Boolean)]), e.addExtUnpacker(12, [o, h(String)]), e.addExtUnpacker(13, [o, h(Date)]), e.addExtUnpacker(15, [o, h(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, h(Int8Array)), e.addExtUnpacker(18, h(Uint8Array)), e.addExtUnpacker(19, [u, h(Int16Array)]), e.addExtUnpacker(20, [u, h(Uint16Array)]), e.addExtUnpacker(21, [u, h(Int32Array)]), e.addExtUnpacker(22, [u, h(Uint32Array)]), e.addExtUnpacker(23, [u, h(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [u, h(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, h(Uint8ClampedArray)), e.addExtUnpacker(26, u), e.addExtUnpacker(29, [u, h(DataView)])), s.hasBuffer && e.addExtUnpacker(27, h(r));
  };
  var i, s = n(0), r = s.global, a = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};
  function o(e) {
    return i || (i = n(15).decode), i(e);
  }
  function l(e) {
    return RegExp.apply(null, e);
  }
  function c(e) {
    return function (t) {
      var n = new e;
      for (var i in a) n[i] = t[i];
      return n;
    };
  }
  function h(e) {
    return function (t) {
      return new e(t);
    };
  }
  function u(e) {
    return new Uint8Array(e).buffer;
  }
}, function (e, t, n) {
  var i = n(17);
  function s(e) {
    var t, n = Array(256);
    for (t = 0; t <= 127; t++) n[t] = r(t);
    for (t = 128; t <= 143; t++) n[t] = o(t - 128, e.map);
    for (t = 144; t <= 159; t++) n[t] = o(t - 144, e.array);
    for (t = 160; t <= 191; t++) n[t] = o(t - 160, e.str);
    for (n[192] = r(null), n[193] = null, n[194] = r(!1), n[195] = r(!0), n[196] = a(e.uint8, e.bin), n[197] = a(e.uint16, e.bin), n[198] = a(e.uint32, e.bin), n[199] = a(e.uint8, e.ext), n[200] = a(e.uint16, e.ext), n[201] = a(e.uint32, e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = o(1, e.ext), n[213] = o(2, e.ext), n[214] = o(4, e.ext), n[215] = o(8, e.ext), n[216] = o(16, e.ext), n[217] = a(e.uint8, e.str), n[218] = a(e.uint16, e.str), n[219] = a(e.uint32, e.str), n[220] = a(e.uint16, e.array), n[221] = a(e.uint32, e.array), n[222] = a(e.uint16, e.map), n[223] = a(e.uint32, e.map), t = 224; t <= 255; t++) n[t] = r(t - 256);
    return n;
  }
  function r(e) {
    return function () {
      return e;
    };
  }
  function a(e, t) {
    return function (n) {
      var i = e(n);
      return t(n, i);
    };
  }
  function o(e, t) {
    return function (n) {
      return t(n, e);
    };
  }
  t.getReadToken = function (e) {
    var t = i.getReadFormat(e);
    return e && e.useraw ? function (e) {
      var t, n = s(e).slice();
      for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) n[t] = o(t - 160, e.bin);
      return n;
    }(t) : s(t);
  };
}, function (e, t, n) {
  t.Encoder = r;
  var i = n(18), s = n(10).EncodeBuffer;
  function r(e) {
    if (!(this instanceof r)) return new r(e);
    s.call(this, e);
  }
  r.prototype = new s, i.mixin(r.prototype), r.prototype.encode = function (e) {
    this.write(e), this.emit("data", this.read());
  }, r.prototype.end = function (e) {
    arguments.length && this.encode(e), this.flush(), this.emit("end");
  };
}, function (e, t, n) {
  t.Decoder = r;
  var i = n(18), s = n(16).DecodeBuffer;
  function r(e) {
    if (!(this instanceof r)) return new r(e);
    s.call(this, e);
  }
  r.prototype = new s, i.mixin(r.prototype), r.prototype.decode = function (e) {
    arguments.length && this.write(e), this.flush();
  }, r.prototype.push = function (e) {
    this.emit("data", e);
  }, r.prototype.end = function (e) {
    this.decode(e), this.emit("end");
  };
}, function (e, t, n) {
  n(8), n(2), t.createCodec = n(1).createCodec;
}, function (e, t, n) {
  n(8), n(2), t.codec = {preset: n(1).preset};
}, function (e, t) {
  var n, i, s = e.exports = {};
  function r() {
    throw Error("setTimeout has not been defined");
  }
  function a() {
    throw Error("clearTimeout has not been defined");
  }
  function o(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (i) {
        return n.call(this, e, 0);
      }
    }
  }
  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : r;
    } catch (e) {
      n = r;
    }
    try {
      i = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (t) {
      i = a;
    }
  }();
  var l, c = [], h = !1, u = -1;
  function f() {
    h && l && (h = !1, l.length ? c = l.concat(c) : u = -1, c.length && d());
  }
  function d() {
    if (!h) {
      var e = o(f);
      h = !0;
      for (var t = c.length; t;) {
        for (l = c, c = []; ++u < t;) l && l[u].run();
        u = -1, t = c.length;
      }
      l = null, h = !1, function (e) {
        if (i === clearTimeout) return clearTimeout(e);
        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
        try {
          i(e);
        } catch (t) {
          try {
            return i.call(null, e);
          } catch (n) {
            return i.call(this, e);
          }
        }
      }(e);
    }
  }
  function _(e, t) {
    this.fun = e, this.array = t;
  }
  function p() {}
  s.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    c.push(new _(e, t)), 1 !== c.length || h || o(d);
  }, _.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = p, s.addListener = p, s.once = p, s.off = p, s.removeListener = p, s.removeAllListeners = p, s.emit = p, s.prependListener = p, s.prependOnceListener = p, s.listeners = function (e) {
    return [];
  }, s.binding = function (e) {
    throw Error("process.binding is not supported");
  }, s.cwd = function () {
    return "/";
  }, s.chdir = function (e) {
    throw Error("process.chdir is not supported");
  }, s.umask = function () {
    return 0;
  };
}, function (e, t) {
  var n = Math.abs, i = Math.sqrt, s = (n = Math.abs, Math.atan2), r = Math.PI;
  e.exports.randInt = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }, e.exports.randFloat = function (e, t) {
    return Math.random() * (t - e + 1) + e;
  }, e.exports.lerp = function (e, t, n) {
    return e + (t - e) * n;
  }, e.exports.decel = function (e, t) {
    return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e;
  }, e.exports.getDistance = function (e, t, n, s) {
    return i((n -= e) * n + (s -= t) * s);
  }, e.exports.getDirection = function (e, t, n, i) {
    return s(t - i, e - n);
  }, e.exports.getAngleDist = function (e, t) {
    var i = n(t - e) % (2 * r);
    return i > r ? 2 * r - i : i;
  }, e.exports.isNumber = function (e) {
    return "number" == typeof e && !isNaN(e) && isFinite(e);
  }, e.exports.isString = function (e) {
    return e && "string" == typeof e;
  }, e.exports.kFormat = function (e) {
    return e > 999 ? (e / 1e3).toFixed(1) + "k" : e;
  }, e.exports.capitalizeFirst = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, e.exports.fixTo = function (e, t) {
    return parseFloat(e.toFixed(t));
  }, e.exports.sortByPoints = function (e, t) {
    return parseFloat(t.points) - parseFloat(e.points);
  }, e.exports.lineInRect = function (e, t, n, i, s, r, a, o) {
    var l = s, c = a;
    if (s > a && (l = a, c = s), c > n && (c = n), l < e && (l = e), l > c) return !1;
    var h = r, u = o, f = a - s;
    if (Math.abs(f) > 1e-7) {
      var d = (o - r) / f, _ = r - d * s;
      h = d * l + _, u = d * c + _;
    }
    if (h > u) {
      var p = u;
      u = h, h = p;
    }
    return u > i && (u = i), h < t && (h = t), !(h > u);
  }, e.exports.containsPoint = function (e, t, n) {
    var i = e.getBoundingClientRect(), s = i.left + window.scrollX, r = i.top + window.scrollY, a = i.width, o = i.height;
    return t > s && t < s + a && n > r && n < r + o;
  }, e.exports.mousifyTouchEvent = function (e) {
    var t = e.changedTouches[0];
    e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY;
  }, e.exports.hookTouchEvents = function (t, n) {
    var i = !n, s = !1;
    function r(n) {
      e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), s && (t.onclick && t.onclick(n), t.onmouseout && t.onmouseout(n), s = !1);
    }
    t.addEventListener("touchstart", e.exports.checkTrusted(function (n) {
      e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), t.onmouseover && t.onmouseover(n), s = !0;
    }), !1), t.addEventListener("touchmove", e.exports.checkTrusted(function (n) {
      e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), e.exports.containsPoint(t, n.pageX, n.pageY) ? s || (t.onmouseover && t.onmouseover(n), s = !0) : s && (t.onmouseout && t.onmouseout(n), s = !1);
    }), !1), t.addEventListener("touchend", e.exports.checkTrusted(r), !1), t.addEventListener("touchcancel", e.exports.checkTrusted(r), !1), t.addEventListener("touchleave", e.exports.checkTrusted(r), !1);
  }, e.exports.removeAllChildren = function (e) {
    for (; e.hasChildNodes();) e.removeChild(e.lastChild);
  }, e.exports.generateElement = function (t) {
    var n = document.createElement(t.tag || "div");
    function i(e, i) {
      t[e] && (n[i] = t[e]);
    }
    for (var s in i("text", "textContent"), i("html", "innerHTML"), i("class", "className"), t) {
      switch (s) {
        case "tag":
        case "text":
        case "html":
        case "class":
        case "style":
        case "hookTouch":
        case "parent":
        case "children":
          continue;
      }
      n[s] = t[s];
    }
    if (n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)), n.onmouseover && (n.onmouseover = e.exports.checkTrusted(n.onmouseover)), n.onmouseout && (n.onmouseout = e.exports.checkTrusted(n.onmouseout)), t.style && (n.style.cssText = t.style), t.hookTouch && e.exports.hookTouchEvents(n), t.parent && t.parent.appendChild(n), t.children) for (var r = 0; r < t.children.length; r++) n.appendChild(t.children[r]);
    return n;
  }, e.exports.eventIsTrusted = function (e) {
    return !e || "boolean" != typeof e.isTrusted || e.isTrusted;
  }, e.exports.checkTrusted = function (t) {
    return function (n) {
      n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n);
    };
  }, e.exports.randomString = function (e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
    return t;
  }, e.exports.countInArray = function (e, t) {
    for (var n = 0, i = 0; i < e.length; i++) e[i] === t && n++;
    return n;
  };
}, function (e, t) {
  e.exports.AnimText = function () {
    this.init = function (e, t, n, i, s, r, a) {
      this.x = e, this.y = t, this.color = a, this.scale = n, this.startScale = this.scale, this.maxScale = 1.5 * n, this.scaleSpeed = 0.7, this.speed = i, this.life = s, this.text = r;
    }, this.update = function (e) {
      this.life && (this.life -= e, this.y -= this.speed * e, this.scale += this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0));
    }, this.render = function (e, t, n) {
      e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - n);
    };
  }, e.exports.TextManager = function () {
    this.texts = [], this.update = function (e, t, n, i) {
      t.textBaseline = "middle", t.textAlign = "center";
      for (var s = 0; s < this.texts.length; ++s) this.texts[s].life && (this.texts[s].update(e), this.texts[s].render(t, n, i));
    }, this.showText = function (t, n, i, s, r, a, o) {
      for (var l, c = 0; c < this.texts.length; ++c) if (!this.texts[c].life) {
        l = this.texts[c];
        break;
      }
      l || (l = new e.exports.AnimText, this.texts.push(l)), l.init(t, n, i, s, r, a, o);
    };
  };
}, function (e, t) {
  e.exports = function (e) {
    this.sid = e, this.init = function (e, t, n, i, s, r, a) {
      r = r || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = r.doUpdate, this.x = e, this.y = t, this.dir = n, this.xWiggle = 0, this.yWiggle = 0, this.scale = i, this.type = s, this.id = r.id, this.owner = a, this.name = r.name, this.isItem = null != this.id, this.group = r.group, this.health = r.health, this.currentHealth = this.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = r.colDiv || 1, this.blocker = r.blocker, this.ignoreCollision = r.ignoreCollision, this.dontGather = r.dontGather, this.hideFromEnemy = r.hideFromEnemy, this.friction = r.friction, this.projDmg = r.projDmg, this.dmg = r.dmg, this.pDmg = r.pDmg, this.pps = r.pps, this.zIndex = r.zIndex || 0, this.turnSpeed = r.turnSpeed, this.req = r.req, this.trap = r.trap, this.healCol = r.healCol, this.teleport = r.teleport, this.boostSpeed = r.boostSpeed, this.projectile = r.projectile, this.shootRange = r.shootRange, this.shootRate = r.shootRate, this.shootCount = this.shootRate, this.spawnPoint = r.spawnPoint;
    }, this.changeHealth = function (e, t) {
      return this.health += e, this.health <= 0;
    }, this.getScale = function (e, t) {
      return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : 0.6 * e) * (t ? 1 : this.colDiv);
    }, this.visibleToPlayer = function (e) {
      return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team);
    }, this.update = function (e) {
      this.active && (this.xWiggle && (this.xWiggle *= Math.pow(0.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(0.99, e)), this.turnSpeed && (this.dir += this.turnSpeed * e));
    };
  };
}, function (e, t) {
  e.exports.groups = [{id: 0, name: "food", layer: 0}, {id: 1, name: "walls", place: !0, limit: 30, layer: 0}, {id: 2, name: "spikes", place: !0, limit: 15, layer: 0}, {id: 3, name: "mill", place: !0, limit: 7, layer: 1}, {id: 4, name: "mine", place: !0, limit: 1, layer: 0}, {id: 5, name: "trap", place: !0, limit: 6, layer: -1}, {id: 6, name: "booster", place: !0, limit: 12, layer: -1}, {id: 7, name: "turret", place: !0, limit: 2, layer: 1}, {id: 8, name: "watchtower", place: !0, limit: 12, layer: 1}, {id: 9, name: "buff", place: !0, limit: 4, layer: -1}, {id: 10, name: "spawn", place: !0, limit: 1, layer: -1}, {id: 11, name: "sapling", place: !0, limit: 2, layer: 0}, {id: 12, name: "blocker", place: !0, limit: 3, layer: -1}, {id: 13, name: "teleporter", place: !0, limit: 2, layer: -1}], t.projectiles = [{indx: 0, layer: 0, src: "arrow_1", dmg: 25, speed: 1.6, scale: 103, range: 1e3}, {indx: 1, layer: 1, dmg: 25, scale: 20}, {indx: 0, layer: 0, src: "arrow_1", dmg: 35, speed: 2.5, scale: 103, range: 1200}, {indx: 0, layer: 0, src: "arrow_1", dmg: 30, speed: 2, scale: 103, range: 1200}, {indx: 1, layer: 1, dmg: 16, scale: 20}, {indx: 0, layer: 0, src: "bullet_1", dmg: 50, speed: 3.6, scale: 160, range: 1400}], t.weapons = window.weapons = [{id: 0, type: 0, name: "tool hammer", desc: "tool for gathering all resources", src: "hammer_1", length: 140, width: 140, xOff: -3, yOff: 18, dmg: 25, range: 65, gather: 1, speed: 300}, {id: 1, type: 0, age: 2, name: "hand axe", desc: "gathers resources at a higher rate", src: "axe_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 30, spdMult: 1, range: 70, gather: 2, speed: 400}, {id: 2, type: 0, age: 8, pre: 1, name: "great axe", desc: "deal more damage and gather more resources", src: "great_axe_1", length: 140, width: 140, xOff: -8, yOff: 25, dmg: 35, spdMult: 1, range: 75, gather: 4, speed: 400}, {id: 3, type: 0, age: 2, name: "short sword", desc: "increased heal power but slower move speed", src: "sword_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 46, dmg: 35, spdMult: 0.85, range: 110, gather: 1, speed: 300}, {id: 4, type: 0, age: 8, pre: 3, name: "katana", desc: "greater range and damage", src: "samurai_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 59, dmg: 40, spdMult: 0.8, range: 118, gather: 1, speed: 300}, {id: 5, type: 0, age: 2, name: "polearm", desc: "long range melee weapon", src: "spear_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 53, dmg: 45, knock: 0.2, spdMult: 0.82, range: 142, gather: 1, speed: 700}, {id: 6, type: 0, age: 2, name: "bat", desc: "fast long range melee weapon", src: "bat_1", iPad: 1.3, length: 110, width: 180, xOff: -8, yOff: 53, dmg: 20, knock: 0.7, range: 110, gather: 1, speed: 300}, {id: 7, type: 0, age: 2, name: "daggers", desc: "really fast short range weapon", src: "dagger_1", iPad: 0.8, length: 110, width: 110, xOff: 18, yOff: 0, dmg: 20, knock: 0.1, range: 65, gather: 1, hitSlow: 0.1, spdMult: 1.13, speed: 100}, {id: 8, type: 0, age: 2, name: "stick", desc: "great for gathering but very weak", src: "stick_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 1, spdMult: 1, range: 70, gather: 7, speed: 400}, {id: 9, type: 1, age: 6, name: "hunting bow", desc: "bow used for ranged combat and hunting", src: "bow_1", req: ["wood", 4], length: 120, width: 120, xOff: -6, yOff: 0, projectile: 0, spdMult: 0.75, speed: 600}, {id: 10, type: 1, age: 6, name: "great hammer", desc: "hammer used for destroying structures", src: "great_hammer_1", length: 140, width: 140, xOff: -9, yOff: 25, dmg: 10, spdMult: 0.88, range: 75, sDmg: 7.5, gather: 1, speed: 400}, {id: 11, type: 1, age: 6, name: "wooden shield", desc: "blocks projectiles and reduces melee damage", src: "shield_1", length: 120, width: 120, shield: 0.2, speed: 111, xOff: 6, yOff: 0, spdMult: 0.7}, {id: 12, type: 1, age: 8, pre: 9, name: "crossbow", desc: "deals more damage and has greater range", src: "crossbow_1", req: ["wood", 5], aboveHand: !0, armS: 0.75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 2, spdMult: 0.7, speed: 700}, {id: 13, type: 1, age: 9, pre: 12, name: "repeater crossbow", desc: "high firerate crossbow with reduced damage", src: "crossbow_2", req: ["wood", 10], aboveHand: !0, armS: 0.75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 3, spdMult: 0.7, speed: 230}, {id: 14, type: 1, age: 6, name: "mc grabby", desc: "steals resources from enemies", src: "grab_1", length: 130, width: 210, xOff: -8, yOff: 53, dmg: 0, steal: 250, knock: 0.2, spdMult: 1.05, range: 125, gather: 0, speed: 700}, {id: 15, type: 1, age: 9, pre: 12, name: "musket", desc: "slow firerate but high damage and range", src: "musket_1", req: ["stone", 10], aboveHand: !0, rec: 0.35, armS: 0.6, hndS: 0.3, hndD: 1.6, length: 205, width: 205, xOff: 25, yOff: 0, projectile: 5, hideProjectile: !0, spdMult: 0.6, speed: 1500}], e.exports.list = [{group: e.exports.groups[0], name: "apple", desc: "restores 20 health when consumed", req: ["food", 10], consume: function (e) {
    return e.changeHealth(20, e);
  }, scale: 22, holdOffset: 15}, {age: 3, group: e.exports.groups[0], name: "cookie", desc: "restores 40 health when consumed", req: ["food", 15], consume: function (e) {
    return e.changeHealth(40, e);
  }, scale: 27, holdOffset: 15}, {age: 7, group: e.exports.groups[0], name: "cheese", desc: "restores 30 health and another 50 over 5 seconds", req: ["food", 25], consume: function (e) {
    return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0);
  }, scale: 27, holdOffset: 15}, {group: e.exports.groups[1], name: "wood wall", desc: "provides protection for your village", req: ["wood", 10], projDmg: !0, health: 380, scale: 50, holdOffset: 20, placeOffset: -5}, {age: 3, group: e.exports.groups[1], name: "stone wall", desc: "provides improved protection for your village", req: ["stone", 25], health: 900, scale: 50, holdOffset: 20, placeOffset: -5}, {age: 7, pre: 1, group: e.exports.groups[1], name: "castle wall", desc: "provides powerful protection for your village", req: ["stone", 35], health: 1500, scale: 52, holdOffset: 20, placeOffset: -5}, {group: e.exports.groups[2], name: "spikes", desc: "damages enemies when they touch them", req: ["wood", 20, "stone", 5], health: 400, dmg: 20, scale: 49, spritePadding: -23, holdOffset: 8, placeOffset: -5}, {age: 5, group: e.exports.groups[2], name: "greater spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 10], health: 500, dmg: 35, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5}, {age: 9, pre: 1, group: e.exports.groups[2], name: "poison spikes", desc: "poisons enemies when they touch them", req: ["wood", 35, "stone", 15], health: 600, dmg: 30, pDmg: 5, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5}, {age: 9, pre: 2, group: e.exports.groups[2], name: "spinning spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 20], health: 500, dmg: 45, turnSpeed: 0.003, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5}, {group: e.exports.groups[3], name: "windmill", desc: "generates gold over time", req: ["wood", 50, "stone", 10], health: 400, pps: 1, spritePadding: 25, iconLineMult: 12, scale: 45, holdOffset: 20, placeOffset: 5}, {age: 5, pre: 1, group: e.exports.groups[3], name: "faster windmill", desc: "generates more gold over time", req: ["wood", 60, "stone", 20], health: 500, pps: 1.5, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5}, {age: 8, pre: 1, group: e.exports.groups[3], name: "power mill", desc: "generates more gold over time", req: ["wood", 100, "stone", 50], health: 800, pps: 2, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5}, {age: 5, group: e.exports.groups[4], type: 2, name: "mine", desc: "allows you to mine stone", req: ["wood", 20, "stone", 100], iconLineMult: 12, scale: 65, holdOffset: 20, placeOffset: 0}, {age: 5, group: e.exports.groups[11], type: 0, name: "sapling", desc: "allows you to farm wood", req: ["wood", 150], iconLineMult: 12, colDiv: 0.5, scale: 110, holdOffset: 50, placeOffset: -15}, {age: 4, group: e.exports.groups[5], name: "pit trap", desc: "pit that traps enemies if they walk over it", req: ["wood", 30, "stone", 30], trap: !0, ignoreCollision: !0, hideFromEnemy: !0, health: 500, colDiv: 0.2, scale: 50, holdOffset: 20, placeOffset: -5}, {age: 4, group: e.exports.groups[6], name: "boost pad", desc: "provides boost when stepped on", req: ["stone", 20, "wood", 5], ignoreCollision: !0, boostSpeed: 1.5, health: 150, colDiv: 0.7, scale: 45, holdOffset: 20, placeOffset: -5}, {age: 7, group: e.exports.groups[7], doUpdate: !0, name: "turret", desc: "defensive structure that shoots at enemies", req: ["wood", 200, "stone", 150], health: 800, projectile: 1, shootRange: 700, shootRate: 2200, scale: 43, holdOffset: 20, placeOffset: -5}, {age: 7, group: e.exports.groups[8], name: "platform", desc: "platform to shoot over walls and cross over water", req: ["wood", 20], ignoreCollision: !0, zIndex: 1, health: 300, scale: 43, holdOffset: 20, placeOffset: -5}, {age: 7, group: e.exports.groups[9], name: "healing pad", desc: "standing on it will slowly heal you", req: ["wood", 30, "food", 10], ignoreCollision: !0, healCol: 15, health: 400, colDiv: 0.7, scale: 45, holdOffset: 20, placeOffset: -5}, {age: 9, group: e.exports.groups[10], name: "spawn pad", desc: "you will spawn here when you die but it will dissapear", req: ["wood", 100, "stone", 100], health: 400, ignoreCollision: !0, spawnPoint: !0, scale: 45, holdOffset: 20, placeOffset: -5}, {age: 7, group: e.exports.groups[12], name: "blocker", desc: "blocks building in radius", req: ["wood", 30, "stone", 25], ignoreCollision: !0, blocker: 300, health: 400, colDiv: 0.7, scale: 45, holdOffset: 20, placeOffset: -5}, {age: 7, group: e.exports.groups[13], name: "teleporter", desc: "teleports you to a random point on the map", req: ["wood", 60, "stone", 60], ignoreCollision: !0, teleport: !0, health: 200, colDiv: 0.7, scale: 45, holdOffset: 20, placeOffset: -5}];
  for (var n = 0; n < e.exports.list.length; ++n) e.exports.list[n].id = n, e.exports.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre);
}, function (e, t) {
  e.exports = {};
}, function (e, t) {
  var n = Math.floor, i = Math.abs, s = Math.cos, r = Math.sin, a = Math.sqrt;
  e.exports = function (e, t, o, l, c, h) {
    this.objects = t, this.grids = {}, this.updateObjects = [];
    var u = l.mapScale / l.colGrid;
    this.setObjectGrids = function (e) {
      for (var t = Math.min(l.mapScale, Math.max(0, e.x)), n = Math.min(l.mapScale, Math.max(0, e.y)), i = 0; i < l.colGrid; ++i) {
        f = i * u;
        for (var s = 0; s < l.colGrid; ++s) d = s * u, t + e.scale >= f && t - e.scale <= f + u && n + e.scale >= d && n - e.scale <= d + u && (this.grids[i + "_" + s] || (this.grids[i + "_" + s] = []), this.grids[i + "_" + s].push(e), e.gridLocations.push(i + "_" + s));
      }
    }, this.removeObjGrid = function (e) {
      for (var t, n = 0; n < e.gridLocations.length; ++n) (t = this.grids[e.gridLocations[n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1);
    }, this.disableObj = function (e) {
      if (e.active = !1, h) {
        e.owner && e.pps && (e.owner.pps -= e.pps), this.removeObjGrid(e);
        var t = this.updateObjects.indexOf(e);
        t >= 0 && this.updateObjects.splice(t, 1);
      }
    }, this.hitObj = function (e, t) {
      for (var n = 0; n < c.length; ++n) c[n].active && (e.sentTo[c[n].id] && (e.active ? c[n].canSee(e) && h.send(c[n].id, "8", o.fixTo(t, 1), e.sid) : h.send(c[n].id, "12", e.sid)), e.active || e.owner != c[n] || c[n].changeItemCount(e.group.id, -1));
    };
    var f, d, _, p, g = [];
    this.getGridArrays = function (e, t, i) {
      f = n(e / u), d = n(t / u), g.length = 0;
      try {
        this.grids[f + "_" + d] && g.push(this.grids[f + "_" + d]), e + i >= (f + 1) * u && ((_ = this.grids[f + 1 + "_" + d]) && g.push(_), d && t - i <= d * u ? (_ = this.grids[f + 1 + "_" + (d - 1)]) && g.push(_) : t + i >= (d + 1) * u && (_ = this.grids[f + 1 + "_" + (d + 1)]) && g.push(_)), f && e - i <= f * u && ((_ = this.grids[f - 1 + "_" + d]) && g.push(_), d && t - i <= d * u ? (_ = this.grids[f - 1 + "_" + (d - 1)]) && g.push(_) : t + i >= (d + 1) * u && (_ = this.grids[f - 1 + "_" + (d + 1)]) && g.push(_)), t + i >= (d + 1) * u && (_ = this.grids[f + "_" + (d + 1)]) && g.push(_), d && t - i <= d * u && (_ = this.grids[f + "_" + (d - 1)]) && g.push(_);
      } catch (s) {}
      return g;
    }, this.add = function (n, i, s, r, a, o, l, c, u) {
      p = null;
      for (var f = 0; f < t.length; ++f) if (t[f].sid == n) {
        p = t[f];
        break;
      }
      if (!p) {
        for (f = 0; f < t.length; ++f) if (!t[f].active) {
          p = t[f];
          break;
        }
      }
      p || (p = new e(n), t.push(p)), c && (p.sid = n), p.init(i, s, r, a, o, l, u), h && (this.setObjectGrids(p), p.doUpdate && this.updateObjects.push(p));
    }, this.disableBySid = function (e) {
      for (var n = 0; n < t.length; ++n) if (t[n].sid == e) {
        this.disableObj(t[n]);
        break;
      }
    }, this.removeAllItems = function (e, n) {
      for (var i = 0; i < t.length; ++i) t[i].active && t[i].owner && t[i].owner.sid == e && this.disableObj(t[i]);
      n && n.broadcast("13", e);
    }, this.fetchSpawnObj = function (e) {
      for (var n = null, i = 0; i < t.length; ++i) if ((p = t[i]).active && p.owner && p.owner.sid == e && p.spawnPoint) {
        n = [p.x, p.y], this.disableObj(p), h.broadcast("12", p.sid), p.owner && p.owner.changeItemCount(p.group.id, -1);
        break;
      }
      return n;
    }, this.checkItemLocation = function (e, n, i, s, r, a, c) {
      for (var h = 0; h < t.length; ++h) {
        var u = t[h].blocker ? t[h].blocker : t[h].getScale(s, t[h].isItem);
        if (t[h].active && o.getDistance(e, n, t[h].x, t[h].y) < i + u) return !1;
      }
      return !(!a && 18 != r && n >= l.mapScale / 2 - l.riverWidth / 2 && n <= l.mapScale / 2 + l.riverWidth / 2);
    }, this.addProjectile = function (e, t, n, i, s) {
      for (var r, a = items.projectiles[s], l = 0; l < projectiles.length; ++l) if (!projectiles[l].active) {
        r = projectiles[l];
        break;
      }
      r || (r = new Projectile(c, o), projectiles.push(r)), r.init(s, e, t, n, a.speed, i, a.scale);
    }, this.checkCollision = function (e, t, n) {
      n = n || 1;
      var c = e.x - t.x, h = e.y - t.y, u = e.scale + t.scale;
      if (i(c) <= u || i(h) <= u) {
        u = e.scale + (t.getScale ? t.getScale() : t.scale);
        var f = a(c * c + h * h) - u;
        if (f <= 0) {
          if (t.ignoreCollision) !t.trap || e.noTrap || t.owner == e || t.owner && t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n * t.boostSpeed * (t.weightM || 1) * s(t.dir), e.yVel += n * t.boostSpeed * (t.weightM || 1) * r(t.dir)) : t.healCol ? e.healCol = t.healCol : t.teleport && (e.x = o.randInt(0, l.mapScale), e.y = o.randInt(0, l.mapScale)) : (e.lockMove = !0, t.hideFromEnemy = !1); else {
            var d = o.getDirection(e.x, e.y, t.x, t.y);
            if (o.getDistance(e.x, e.y, t.x, t.y), t.isPlayer ? (f = -1 * f / 2, e.x += f * s(d), e.y += f * r(d), t.x -= f * s(d), t.y -= f * r(d)) : (e.x = t.x + u * s(d), e.y = t.y + u * r(d), e.xVel *= 0.75, e.yVel *= 0.75), t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner.team != e.team)) {
              e.changeHealth(-t.dmg, t.owner, t);
              var _ = 1.5 * (t.weightM || 1);
              e.xVel += _ * s(d), e.yVel += _ * r(d), !t.pDmg || e.skin && e.skin.poisonRes || (e.dmgOverTime.dmg = t.pDmg, e.dmgOverTime.time = 5, e.dmgOverTime.doer = t.owner), e.colDmg && t.health && (t.changeHealth(-e.colDmg) && this.disableObj(t), this.hitObj(t, o.getDirection(e.x, e.y, t.x, t.y)));
            }
          }
          return t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0;
        }
      }
      return !1;
    };
  };
}, function (e, t, n) {
  var i = new (n(49));
  i.addWords("jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa");
  var s = Math.abs, r = Math.cos, a = Math.sin;
  e.exports = function (e, t, n, o, l, c, h, u, f, d, _, p, g, m) {
    this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
    for (var y = 0; y < _.length; ++y) _[y].price <= 0 && (this.tails[_[y].id] = 1);
    for (this.skins = {}, y = 0; y < d.length; ++y) d[y].price <= 0 && (this.skins[d[y].id] = 1);
    this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function (e) {
      this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = n.playerScale, this.speed = n.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}, this.primary = {reload: 1, id: 0, variant: 0, dmg: 25}, this.secondary = {reload: 1, id: void 0, variant: 0, dmg: 50}, this.turret = 1, this.bullTick = 0;
    }, this.resetMoveDir = function () {
      this.moveDir = void 0;
    }, this.resetResources = function (e) {
      for (var t = 0; t < n.resourceTypes.length; ++t) this[n.resourceTypes[t]] = e ? 100 : 0;
    }, this.addItem = function (e) {
      var t = f.list[e];
      if (t) {
        for (var n = 0; n < this.items.length; ++n) if (f.list[this.items[n]].group == t.group) return this.buildIndex == this.items[n] && (this.buildIndex = e), this.items[n] = e, !0;
        return this.items.push(e), !0;
      }
      return !1;
    }, this.setUserData = function (e) {
      if (e) {
        this.name = "unknown";
        var t = e.name + "", s = !1, r = (t = (t = (t = (t = t.slice(0, n.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
        for (var a of i.list) if (-1 != r.indexOf(a)) {
          s = !0;
          break;
        }
        t.length > 0 && !s && (this.name = t), this.skinColor = 0, n.skinColors[e.skin] && (this.skinColor = e.skin);
      }
    }, this.getData = function () {
      return [this.id, this.sid, this.name, o.fixTo(this.x, 2), o.fixTo(this.y, 2), o.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor];
    }, this.setData = function (e) {
      this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9];
    }, this.update = function (e) {
      this.alive && (-1 != this.buildIndex || (this.weaponIndex < 9 ? this.primary.id == this.weaponIndex ? (this.primary.variant = this.weaponVariant, this.primary.dmg = Math.round(window.weapons[this.weaponIndex].dmg * window.variantMulti(this.weaponVariant)), this.primary.reload = Math.min(this.primary.reload + 111 / (window.weapons[this.weaponIndex].speed * (!0 == this.primary.fastReload ? 0.78 : 1)), 1), !0 == this.primary.fastReload && 1 == this.primary.reload && (this.primary.fastReload = !1)) : (this.primary.id = this.weaponIndex, this.secondary.id = 15, this.secondary.variant = 0, this.secondary.dmg = 50) : this.secondary.id == this.weaponIndex ? (this.secondary.variant = this.weaponVariant, 10 == this.weaponIndex ? this.secondary.dmg = Math.round(window.weapons[this.weaponIndex].dmg * window.variantMulti(this.weaponVariant)) : this.secondary.dmg = window.secondaryDmg(this.weaponIndex), this.secondary.reload = Math.min(this.secondary.reload + 111 / (window.weapons[this.weaponIndex].speed * (!0 == this.secondary.fastReload ? 0.78 : 1)), 1), !0 == this.secondary.fastReload && 1 == this.secondary.reload && (this.secondary.fastReload = !1)) : (this.secondary.id = this.weaponIndex, this.primary.id || (this.primary.id = 5, this.primary.variant = 2, this.primary.dmg = 45))), this.turret = Math.min(this.turret + 0.0444, 1));
    }, this.addWeaponXP = function (e) {
      this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += e;
    }, this.earnXP = function (e) {
      this.age < n.maxAge && (this.XP += e, this.XP >= this.maxXP ? (this.age < n.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, p.send(this.id, "16", this.upgradePoints, this.upgrAge), p.send(this.id, "15", this.XP, o.fixTo(this.maxXP, 1), this.age)) : p.send(this.id, "15", this.XP));
    }, this.changeHealth = function (e, t) {
      if (e > 0 && this.health >= this.maxHealth) return !1;
      e < 0 && this.skin && (e *= this.skin.dmgMult || 1), e < 0 && this.tail && (e *= this.tail.dmgMult || 1), e < 0 && (this.hitTime = Date.now()), this.health += e, this.health > this.maxHealth && (e -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(t);
      for (var n = 0; n < h.length; ++n) this.sentTo[h[n].id] && p.send(h[n].id, "h", this.sid, Math.round(this.health));
      return t && t.canSee(this) && (t != this || !(e < 0)) && p.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0;
    }, this.kill = function (e) {
      e && e.alive && (e.kills++, e.skin && e.skin.goldSteal ? g(e, Math.round(this.points / 2)) : g(e, Math.round(100 * this.age * (e.skin && e.skin.kScrM ? e.skin.kScrM : 1))), p.send(e.id, "9", "kills", e.kills, 1)), this.alive = !1, p.send(this.id, "11"), m();
    }, this.addResource = function (e, t, i) {
      !i && t > 0 && this.addWeaponXP(t), 3 == e ? g(this, t, !0) : (this[n.resourceTypes[e]] += t, p.send(this.id, "9", n.resourceTypes[e], this[n.resourceTypes[e]], 1));
    }, this.changeItemCount = function (e, t) {
      this.itemCounts[e] = this.itemCounts[e] || 0, this.itemCounts[e] += t, p.send(this.id, "14", e, this.itemCounts[e]);
    }, this.buildItem = function () {
      if (this.hitTime) {
        let e = tick - this.hitTime;
        this.hitTime = 0, e < 2 ? this.shameCount++ : this.shameCount = Math.max(0, this.shameCount - 2);
      }
    }, this.hasRes = function (e, t) {
      for (var n = 0; n < e.req.length;) {
        if (this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1))) return !1;
        n += 2;
      }
      return !0;
    }, this.useRes = function (e, t) {
      if (!n.inSandbox) for (var i = 0; i < e.req.length;) this.addResource(n.resourceTypes.indexOf(e.req[i]), -Math.round(e.req[i + 1] * (t || 1))), i += 2;
    }, this.canBuild = function (e) {
      return !!n.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >= e.group.limit) && this.hasRes(e);
    }, this.gather = function () {
      this.noMovTimer = 0, this.slowMult -= f.weapons[this.weaponIndex].hitSlow || 0.3, this.slowMult < 0 && (this.slowMult = 0);
      for (var e, t, i, s = n.fetchVariant(this), l = s.poison, d = s.val, _ = {}, p = c.getGridArrays(this.x, this.y, f.weapons[this.weaponIndex].range), g = 0; g < p.length; ++g) for (var m = 0; m < p[g].length; ++m) if ((t = p[g][m]).active && !t.dontGather && !_[t.sid] && t.visibleToPlayer(this) && o.getDistance(this.x, this.y, t.x, t.y) - t.scale <= f.weapons[this.weaponIndex].range && (e = o.getDirection(t.x, t.y, this.x, this.y), o.getAngleDist(e, this.dir) <= n.gatherAngle)) {
        if (_[t.sid] = 1, t.health) {
          if (t.changeHealth(-f.weapons[this.weaponIndex].dmg * d * (f.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
            for (var y = 0; y < t.req.length;) this.addResource(n.resourceTypes.indexOf(t.req[y]), t.req[y + 1]), y += 2;
            c.disableObj(t);
          }
        } else {
          this.earnXP(4 * f.weapons[this.weaponIndex].gather);
          var k = f.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
          this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(t.type, k);
        }
        i = !0, c.hitObj(t, e);
      }
      for (m = 0; m < h.length + u.length; ++m) if ((t = h[m] || u[m - h.length]) != this && t.alive && (!t.team || t.team != this.team) && o.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= f.weapons[this.weaponIndex].range && (e = o.getDirection(t.x, t.y, this.x, this.y), o.getAngleDist(e, this.dir) <= n.gatherAngle)) {
        var v = f.weapons[this.weaponIndex].steal;
        v && t.addResource && (v = Math.min(t.points || 0, v), this.addResource(3, v), t.addResource(3, -v));
        var w = d;
        null != t.weaponIndex && f.weapons[t.weaponIndex].shield && o.getAngleDist(e + Math.PI, t.dir) <= n.shieldAngle && (w = f.weapons[t.weaponIndex].shield);
        var b = f.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1), x = 0.3 * (t.weightM || 1) + (f.weapons[this.weaponIndex].knock || 0);
        t.xVel += x * r(e), t.yVel += x * a(e), this.skin && this.skin.healD && this.changeHealth(b * w * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(b * w * this.tail.healD, this), t.skin && t.skin.dmg && 1 == w && this.changeHealth(-b * t.skin.dmg, t), t.tail && t.tail.dmg && 1 == w && this.changeHealth(-b * t.tail.dmg, t), !(t.dmgOverTime && this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = this.skin.poisonDmg, t.dmgOverTime.time = this.skin.poisonTime || 1, t.dmgOverTime.doer = this), !t.dmgOverTime || !l || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = 5, t.dmgOverTime.time = 5, t.dmgOverTime.doer = this), t.skin && t.skin.dmgK && (this.xVel -= t.skin.dmgK * r(e), this.yVel -= t.skin.dmgK * a(e)), t.changeHealth(-b * w, this, this);
      }
      this.sendAnimation(i ? 1 : 0);
    }, this.sendAnimation = function (e) {
      for (var t = 0; t < h.length; ++t) this.sentTo[h[t].id] && this.canSee(h[t]) && p.send(h[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex);
    };
    var k = 0, v = 0;
    this.animate = function (e) {
      this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, k = 0, v = 0) : 0 == v ? (k += e / (this.animSpeed * n.hitReturnRatio), this.dirPlus = o.lerp(0, this.targetAngle, Math.min(1, k)), k >= 1 && (k = 1, v = 1)) : (k -= e / (this.animSpeed * (1 - n.hitReturnRatio)), this.dirPlus = o.lerp(0, this.targetAngle, Math.max(0, k))));
    }, this.startAnim = function (e, t) {
      this.animTime = this.animSpeed = f.weapons[t].speed, this.targetAngle = e ? -n.hitAngle : -Math.PI, k = 0, v = 0, t > 9 ? setTimeout(() => {
        this.secondary.reload = 0, 20 == this.skinIndex && (this.secondary.fastReload = !0);
      }) : setTimeout(() => {
        this.primary.reload = 0, 20 == this.skinIndex && (this.primary.fastReload = !1);
      });
    }, this.canSee = function (e) {
      if (!e || e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
      var t = s(e.x - this.x) - e.scale, i = s(e.y - this.y) - e.scale;
      return t <= n.maxScreenWidth / 2 * 1.3 && i <= n.maxScreenHeight / 2 * 1.3;
    };
  };
}, function (e, t, n) {
  let i = n(50).words, s = n(51).array;
  e.exports = class {
    constructor(e = {}) {
      Object.assign(this, {list: e.emptyList && [] || Array.prototype.concat.apply(i, [s, e.list || []]), exclude: e.exclude || [], placeHolder: e.placeHolder || "*", regex: e.regex || /[^a-zA-Z0-9|\$|\@]|\^/g, replaceRegex: e.replaceRegex || /\w/g});
    }
    isProfane(e) {
      return this.list.filter(t => {
        let n = RegExp(`\\b${t.replace(/(\W)/g, "\\$1")}\\b`, "gi");
        return !this.exclude.includes(t.toLowerCase()) && n.test(e);
      }).length > 0;
    }
    replaceWord(e) {
      return e.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder);
    }
    clean(e) {
      return e.split(/\b/).map(e => this.isProfane(e) ? this.replaceWord(e) : e).join("");
    }
    addWords() {
      let e = Array.from(arguments);
      this.list.push(...e), e.map(e => e.toLowerCase()).forEach(e => {
        this.exclude.includes(e) && this.exclude.splice(this.exclude.indexOf(e), 1);
      });
    }
    removeWords() {
      this.exclude.push(...Array.from(arguments).map(e => e.toLowerCase()));
    }
  };
}, function (e) {
  e.exports = {words: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "potDmg", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]};
}, function (e, t, n) {
  e.exports = {object: n(52), array: n(53), regex: n(54)};
}, function (e, t) {
  e.exports = {"4r5e": 1, "5h1t": 1, "5hit": 1, a55: 1, anal: 1, anus: 1, ar5e: 1, arrse: 1, arse: 1, ass: 1, "ass-fucker": 1, asses: 1, assfucker: 1, assfukka: 1, asshole: 1, assholes: 1, asswhole: 1, a_s_s: 1, "b!tch": 1, b00bs: 1, b17ch: 1, b1tch: 1, ballbag: 1, balls: 1, ballsack: 1, bastard: 1, beastial: 1, beastiality: 1, bellend: 1, bestial: 1, bestiality: 1, "bi+ch": 1, biatch: 1, bitch: 1, bitcher: 1, bitchers: 1, bitches: 1, bitchin: 1, bitching: 1, bloody: 1, "blow job": 1, blowjob: 1, blowjobs: 1, boiolas: 1, bollock: 1, bollok: 1, boner: 1, boob: 1, boobs: 1, booobs: 1, boooobs: 1, booooobs: 1, booooooobs: 1, breasts: 1, buceta: 1, bugger: 1, bum: 1, "bunny fucker": 1, butt: 1, butthole: 1, buttmuch: 1, buttplug: 1, c0ck: 1, c0cksucker: 1, "carpet muncher": 1, cawk: 1, chink: 1, cipa: 1, cl1t: 1, clit: 1, clitoris: 1, clits: 1, cnut: 1, cock: 1, "cock-sucker": 1, cockface: 1, cockhead: 1, cockmunch: 1, cockmuncher: 1, cocks: 1, cocksuck: 1, cocksucked: 1, cocksucker: 1, cocksucking: 1, cocksucks: 1, cocksuka: 1, cocksukka: 1, cok: 1, cokmuncher: 1, coksucka: 1, coon: 1, cox: 1, crap: 1, cum: 1, cummer: 1, cumming: 1, cums: 1, cumshot: 1, cunilingus: 1, cunillingus: 1, cunnilingus: 1, cunt: 1, cuntlick: 1, cuntlicker: 1, cuntlicking: 1, cunts: 1, cyalis: 1, cyberfuc: 1, cyberfuck: 1, cyberfucked: 1, cyberfucker: 1, cyberfuckers: 1, cyberfucking: 1, d1ck: 1, damn: 1, dick: 1, dickhead: 1, dildo: 1, dildos: 1, dink: 1, dinks: 1, dirsa: 1, dlck: 1, "dog-fucker": 1, doggin: 1, dogging: 1, donkeyribber: 1, doosh: 1, duche: 1, dyke: 1, ejaculate: 1, ejaculated: 1, ejaculates: 1, ejaculating: 1, ejaculatings: 1, ejaculation: 1, ejakulate: 1, "f u c k": 1, "f u c k e r": 1, f4nny: 1, fag: 1, fagging: 1, faggitt: 1, faggot: 1, faggs: 1, fagot: 1, fagots: 1, fags: 1, fanny: 1, fannyflaps: 1, fannyfucker: 1, fanyy: 1, fatass: 1, fcuk: 1, fcuker: 1, fcuking: 1, feck: 1, fecker: 1, felching: 1, fellate: 1, fellatio: 1, fingerfuck: 1, fingerfucked: 1, fingerfucker: 1, fingerfuckers: 1, fingerfucking: 1, fingerfucks: 1, fistfuck: 1, fistfucked: 1, fistfucker: 1, fistfuckers: 1, fistfucking: 1, fistfuckings: 1, fistfucks: 1, flange: 1, fook: 1, fooker: 1, fuck: 1, fucka: 1, fucked: 1, fucker: 1, fuckers: 1, fuckhead: 1, fuckheads: 1, fuckin: 1, fucking: 1, fuckings: 1, fuckingshitmotherfucker: 1, fuckme: 1, fucks: 1, fuckwhit: 1, fuckwit: 1, "fudge packer": 1, fudgepacker: 1, fuk: 1, fuker: 1, fukker: 1, fukkin: 1, fuks: 1, fukwhit: 1, fukwit: 1, fux: 1, fux0r: 1, f_u_c_k: 1, gangbang: 1, gangbanged: 1, gangbangs: 1, gaylord: 1, gaysex: 1, goatse: 1, God: 1, "god-dam": 1, "god-damned": 1, goddamn: 1, goddamned: 1, hardcoresex: 1, hell: 1, heshe: 1, hoar: 1, hoare: 1, hoer: 1, homo: 1, hore: 1, horniest: 1, horny: 1, hotsex: 1, "jack-off": 1, jackoff: 1, jap: 1, "jerk-off": 1, jism: 1, jiz: 1, jizm: 1, jizz: 1, kawk: 1, knob: 1, knobead: 1, knobed: 1, knobend: 1, knobhead: 1, knobjocky: 1, knobjokey: 1, kock: 1, kondum: 1, kondums: 1, kum: 1, kummer: 1, kumming: 1, kums: 1, kunilingus: 1, "l3i+ch": 1, l3itch: 1, labia: 1, lust: 1, lusting: 1, m0f0: 1, m0fo: 1, m45terbate: 1, ma5terb8: 1, ma5terbate: 1, masochist: 1, "master-bate": 1, masterb8: 1, "masterbat*": 1, masterbat3: 1, masterbate: 1, masterbation: 1, masterbations: 1, masturbate: 1, "mo-fo": 1, mof0: 1, mofo: 1, mothafuck: 1, mothafucka: 1, mothafuckas: 1, mothafuckaz: 1, mothafucked: 1, mothafucker: 1, mothafuckers: 1, mothafuckin: 1, mothafucking: 1, mothafuckings: 1, mothafucks: 1, "mother fucker": 1, motherfuck: 1, motherfucked: 1, motherfucker: 1, motherfuckers: 1, motherfuckin: 1, motherfucking: 1, motherfuckings: 1, motherfuckka: 1, motherfucks: 1, muff: 1, mutha: 1, muthafecker: 1, muthafuckker: 1, muther: 1, mutherfucker: 1, n1gga: 1, n1gger: 1, nazi: 1, nigg3r: 1, nigg4h: 1, nigga: 1, niggah: 1, niggas: 1, niggaz: 1, nigger: 1, niggers: 1, nob: 1, "nob jokey": 1, nobhead: 1, nobjocky: 1, nobjokey: 1, numbnuts: 1, nutsack: 1, orgasim: 1, orgasims: 1, orgasm: 1, orgasms: 1, p0rn: 1, pawn: 1, pecker: 1, penis: 1, penisfucker: 1, phonesex: 1, phuck: 1, phuk: 1, phuked: 1, phuking: 1, phukked: 1, phukking: 1, phuks: 1, phuq: 1, pigfucker: 1, pimpis: 1, piss: 1, pissed: 1, pisser: 1, pissers: 1, pisses: 1, pissflaps: 1, pissin: 1, pissing: 1, pissoff: 1, poop: 1, porn: 1, porno: 1, pornography: 1, pornos: 1, prick: 1, pricks: 1, pron: 1, pube: 1, pusse: 1, pussi: 1, pussies: 1, pussy: 1, pussys: 1, rectum: 1, potDmg: 1, rimjaw: 1, rimming: 1, "s hit": 1, "s.o.b.": 1, sadist: 1, schlong: 1, screwing: 1, scroat: 1, scrote: 1, scrotum: 1, semen: 1, sex: 1, "sh!+": 1, "sh!t": 1, sh1t: 1, shag: 1, shagger: 1, shaggin: 1, shagging: 1, shemale: 1, "shi+": 1, shit: 1, shitdick: 1, shite: 1, shited: 1, shitey: 1, shitfuck: 1, shitfull: 1, shithead: 1, shiting: 1, shitings: 1, shits: 1, shitted: 1, shitter: 1, shitters: 1, shitting: 1, shittings: 1, shitty: 1, skank: 1, slut: 1, sluts: 1, smegma: 1, smut: 1, snatch: 1, "son-of-a-bitch": 1, spac: 1, spunk: 1, s_h_i_t: 1, t1tt1e5: 1, t1tties: 1, teets: 1, teez: 1, testical: 1, testicle: 1, tit: 1, titfuck: 1, tits: 1, titt: 1, tittie5: 1, tittiefucker: 1, titties: 1, tittyfuck: 1, tittywank: 1, titwank: 1, tosser: 1, turd: 1, tw4t: 1, twat: 1, twathead: 1, twatty: 1, twunt: 1, twunter: 1, v14gra: 1, v1gra: 1, vagina: 1, viagra: 1, vulva: 1, w00se: 1, wang: 1, wank: 1, wanker: 1, wanky: 1, whoar: 1, whore: 1, willies: 1, willy: 1, xrated: 1, xxx: 1};
}, function (e, t) {
  e.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "potDmg", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
}, function (e, t) {
  e.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|potDmg|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi;
}, function (e, t) {
  e.exports.hats = [{id: 45, name: "Shame!", price: 0, scale: 120, desc: "hacks are for losers"}, {id: 51, name: "Moo Cap", price: 0, scale: 120, desc: "coolest mooer around"}, {id: 50, name: "Apple Cap", price: 0, scale: 120, desc: "apple farms remembers"}, {id: 28, name: "Moo Head", price: 0, scale: 120, desc: "no effect"}, {id: 29, name: "Pig Head", price: 0, scale: 120, desc: "no effect"}, {id: 30, name: "Fluff Head", price: 0, scale: 120, desc: "no effect"}, {id: 36, name: "Pandou Head", price: 0, scale: 120, desc: "no effect"}, {id: 37, name: "Bear Head", price: 0, scale: 120, desc: "no effect"}, {id: 38, name: "Monkey Head", price: 0, scale: 120, desc: "no effect"}, {id: 44, name: "Polar Head", price: 0, scale: 120, desc: "no effect"}, {id: 35, name: "Fez Hat", price: 0, scale: 120, desc: "no effect"}, {id: 42, name: "Enigma Hat", price: 0, scale: 120, desc: "join the enigma army"}, {id: 43, name: "Blitz Hat", price: 0, scale: 120, desc: "hey everybody i'm blitz"}, {id: 49, name: "Bob XIII Hat", price: 0, scale: 120, desc: "like and subscribe"}, {id: 57, name: "Pumpkin", price: 50, scale: 120, desc: "Spooooky"}, {id: 8, name: "Bummle Hat", price: 100, scale: 120, desc: "no effect"}, {id: 2, name: "Straw Hat", price: 500, scale: 120, desc: "no effect"}, {id: 15, name: "Winter Cap", price: 600, scale: 120, desc: "allows you to move at normal speed in snow", coldM: 1}, {id: 5, name: "Cowboy Hat", price: 1e3, scale: 120, desc: "no effect"}, {id: 4, name: "Ranger Hat", price: 2e3, scale: 120, desc: "no effect"}, {id: 18, name: "Explorer Hat", price: 2e3, scale: 120, desc: "no effect"}, {id: 31, name: "Flipper Hat", price: 2500, scale: 120, desc: "have more control while in water", watrImm: !0}, {id: 1, name: "Marksman Cap", price: 3e3, scale: 120, desc: "increases arrow speed and range", aMlt: 1.3}, {id: 10, name: "Bush Gear", price: 3e3, scale: 160, desc: "allows you to disguise yourself as a bush"}, {id: 48, name: "Halo", price: 3e3, scale: 120, desc: "no effect"}, {id: 6, name: "Soldier Helmet", price: 4e3, scale: 120, desc: "reduces damage taken but slows movement", spdMult: 0.94, dmgMult: 0.75}, {id: 23, name: "Anti Venom Gear", price: 4e3, scale: 120, desc: "makes you immune to poison", poisonRes: 1}, {id: 13, name: "Medic Gear", price: 5e3, scale: 110, desc: "slowly regenerates health over time", healthRegen: 3}, {id: 9, name: "Miners Helmet", price: 5e3, scale: 120, desc: "earn 1 extra gold per resource", extraGold: 1}, {id: 32, name: "Musketeer Hat", price: 5e3, scale: 120, desc: "reduces cost of projectiles", projCost: 0.5}, {id: 7, name: "Bull Helmet", price: 6e3, scale: 120, desc: "increases damage done but drains health", healthRegen: -5, dmgMultO: 1.5, spdMult: 0.96}, {id: 22, name: "Emp Helmet", price: 6e3, scale: 120, desc: "Turrets won't attack but you move slower", antiTurret: 1, spdMult: 0.7}, {id: 12, name: "Booster Hat", price: 6e3, scale: 120, desc: "increases your movement speed", spdMult: 1.16}, {id: 26, name: "Barbarian Armor", price: 8e3, scale: 120, desc: "knocks back enemies that attack you", dmgK: 0.6}, {id: 21, name: "Plague Mask", price: 1e4, scale: 120, desc: "melee heals deal poison damage", poisonDmg: 5, poisonTime: 6}, {id: 46, name: "Bull Mask", price: 1e4, scale: 120, desc: "bulls won't target you unless you attack them", bullRepel: 1}, {id: 14, name: "Windmill Hat", topSprite: !0, price: 1e4, scale: 120, desc: "generates points while worn", pps: 1.5}, {id: 11, name: "Spike Gear", topSprite: !0, price: 1e4, scale: 120, desc: "deal damage to players that damage you", dmg: 0.45}, {id: 53, name: "Turret Gear", topSprite: !0, price: 1e4, scale: 120, desc: "you become a walking turret", turret: {proj: 1, range: 700, rate: 2500}, spdMult: 0.7}, {id: 20, name: "Samurai Armor", price: 12e3, scale: 120, desc: "increased heal speed and fire rate", atkSpd: 0.78}, {id: 58, name: "Dark Knight", price: 12e3, scale: 120, desc: "restores health when you deal damage", healD: 0.4}, {id: 27, name: "Scavenger Gear", price: 15e3, scale: 120, desc: "earn double points for each kill", kScrM: 2}, {id: 40, name: "Tank Gear", price: 15e3, scale: 120, desc: "increased damage to buildings but slower movement", spdMult: 0.3, bDmg: 3.3}, {id: 52, name: "Thief Gear", price: 15e3, scale: 120, desc: "steal half of a players gold when you kill them", goldSteal: 0.5}, {id: 55, name: "Bloodthirster", price: 2e4, scale: 120, desc: "Restore Health when dealing damage. And increased damage", healD: 0.25, dmgMultO: 1.2}, {id: 56, name: "Assassin Gear", price: 2e4, scale: 120, desc: "Go invisible when not moving. Can't eat. Increased speed", noEat: !0, spdMult: 1.1, invisTimer: 1e3}], e.exports.accessories = [{id: 12, name: "Snowball", price: 1e3, scale: 105, xOff: 18, desc: "no effect"}, {id: 9, name: "Tree Cape", price: 1e3, scale: 90, desc: "no effect"}, {id: 10, name: "Stone Cape", price: 1e3, scale: 90, desc: "no effect"}, {id: 3, name: "Cookie Cape", price: 1500, scale: 90, desc: "no effect"}, {id: 8, name: "Cow Cape", price: 2e3, scale: 90, desc: "no effect"}, {id: 11, name: "Monkey Tail", price: 2e3, scale: 97, xOff: 25, desc: "Super speed but reduced damage", spdMult: 1.35, dmgMultO: 0.2}, {id: 17, name: "Apple Basket", price: 3e3, scale: 80, xOff: 12, desc: "slowly regenerates health over time", healthRegen: 1}, {id: 6, name: "Winter Cape", price: 3e3, scale: 90, desc: "no effect"}, {id: 4, name: "Skull Cape", price: 4e3, scale: 90, desc: "no effect"}, {id: 5, name: "Dash Cape", price: 5e3, scale: 90, desc: "no effect"}, {id: 2, name: "Dragon Cape", price: 6e3, scale: 90, desc: "no effect"}, {id: 1, name: "Super Cape", price: 8e3, scale: 90, desc: "no effect"}, {id: 7, name: "Troll Cape", price: 8e3, scale: 90, desc: "no effect"}, {id: 14, name: "Thorns", price: 1e4, scale: 115, xOff: 20, desc: "no effect"}, {id: 15, name: "Blockades", price: 1e4, scale: 95, xOff: 15, desc: "no effect"}, {id: 20, name: "Devils Tail", price: 1e4, scale: 95, xOff: 20, desc: "no effect"}, {id: 16, name: "Sawblade", price: 12e3, scale: 90, spin: !0, xOff: 0, desc: "deal damage to players that damage you", dmg: 0.15}, {id: 13, name: "Angel Wings", price: 15e3, scale: 138, xOff: 22, desc: "slowly regenerates health over time", healthRegen: 3}, {id: 19, name: "Shadow Wings", price: 15e3, scale: 138, xOff: 22, desc: "increased movement speed", spdMult: 1.1}, {id: 18, name: "Blood Wings", price: 2e4, scale: 178, xOff: 26, desc: "restores health when you deal damage", healD: 0.2}, {id: 21, name: "Corrupt X Wings", price: 2e4, scale: 178, xOff: 26, desc: "deal damage to players that damage you", dmg: 0.25}];
}, function (e, t) {
  e.exports = function (e, t, n, i, s, r, a) {
    this.init = function (e, t, n, i, s, r, o, l, c) {
      this.active = !0, this.indx = e, this.x = t, this.y = n, this.dir = i, this.skipMov = !0, this.speed = s, this.dmg = r, this.scale = l, this.range = o, this.owner = c, a && (this.sentTo = {});
    };
    var o, l = [];
    this.update = function (c) {
      if (this.active) {
        var h, u = this.speed * c;
        if (this.skipMov ? this.skipMov = !1 : (this.x += u * Math.cos(this.dir), this.y += u * Math.sin(this.dir), this.range -= u, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), u = 1, this.range = 0, this.active = !1)), a) {
          for (var f = 0; f < e.length; ++f) !this.sentTo[e[f].id] && e[f].canSee(this) && (this.sentTo[e[f].id] = 1, a.send(e[f].id, "18", r.fixTo(this.x, 1), r.fixTo(this.y, 1), r.fixTo(this.dir, 2), r.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
          for (l.length = 0, f = 0; f < e.length + t.length; ++f) !(o = e[f] || t[f - e.length]).alive || o == this.owner || this.owner.team && o.team == this.owner.team || r.lineInRect(o.x - o.scale, o.y - o.scale, o.x + o.scale, o.y + o.scale, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && l.push(o);
          for (var d = n.getGridArrays(this.x, this.y, this.scale), _ = 0; _ < d.length; ++_) for (var p = 0; p < d[_].length; ++p) h = (o = d[_][p]).getScale(), o.active && this.ignoreObj != o.sid && this.layer <= o.layer && 0 > l.indexOf(o) && !o.ignoreCollision && r.lineInRect(o.x - h, o.y - h, o.x + h, o.y + h, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && l.push(o);
          if (l.length > 0) {
            var g = null, m = null, y = null;
            for (f = 0; f < l.length; ++f) y = r.getDistance(this.x, this.y, l[f].x, l[f].y), (null == m || y < m) && (m = y, g = l[f]);
            if (g.isPlayer || g.isAI) {
              var k = 0.3 * (g.weightM || 1);
              g.xVel += k * Math.cos(this.dir), g.yVel += k * Math.sin(this.dir), null != g.weaponIndex && i.weapons[g.weaponIndex].shield && r.getAngleDist(this.dir + Math.PI, g.dir) <= s.shieldAngle || g.changeHealth(-this.dmg, this.owner, this.owner);
            } else for (g.projDmg && g.health && g.changeHealth(-this.dmg) && n.disableObj(g), f = 0; f < e.length; ++f) e[f].active && (g.sentTo[e[f].id] && (g.active ? e[f].canSee(g) && a.send(e[f].id, "8", r.fixTo(this.dir, 2), g.sid) : a.send(e[f].id, "12", g.sid)), g.active || g.owner != e[f] || e[f].changeItemCount(g.group.id, -1));
            for (this.active = !1, f = 0; f < e.length; ++f) this.sentTo[e[f].id] && a.send(e[f].id, "19", this.sid, r.fixTo(m, 1));
          }
        }
      }
    };
  };
}, function (e, t) {
  e.exports = function (e, t, n, i, s, r, a, o, l) {
    this.addProjectile = function (c, h, u, f, d, _, p, g, m) {
      for (var y, k = r.projectiles[_], v = 0; v < t.length; ++v) if (!t[v].active) {
        y = t[v];
        break;
      }
      return y || ((y = new e(n, i, s, r, a, o, l)).sid = t.length, t.push(y)), y.init(_, c, h, u, d, k.dmg, f, k.scale, p), y.ignoreObj = g, y.layer = m || k.layer, y.src = k.src, y;
    };
  };
}, function (e, t) {
  e.exports.obj = function (e, t) {
    var n;
    this.sounds = [], this.active = !0, this.play = function (t, i, s) {
      i && this.active && ((n = this.sounds[t]) || (n = new Howl({src: ".././sound/" + t + ".mp3"}), this.sounds[t] = n), s && n.isPlaying || (n.isPlaying = !0, n.play(), n.volume((i || 1) * e.volumeMult), n.loop(s)));
    }, this.toggleMute = function (e, t) {
      (n = this.sounds[e]) && n.mute(t);
    }, this.stop = function (e) {
      (n = this.sounds[e]) && (n.stop(), n.isPlaying = !1);
    };
  };
}, function (e, t, n) {
  var i = n(60), s = n(67);
  function r(e, t, n, i, s) {
    "localhost" == location.hostname && (window.location.hostname = "127.0.0.1"), this.debugLog = !1, this.baseUrl = e, this.lobbySize = n, this.devPort = t, this.lobbySpread = i, this.rawIPs = !!s, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers);
  }
  r.prototype.regionInfo = {0: {name: "Local", latitude: 0, longitude: 0}, "vultr:1": {name: "New Jersey", latitude: 40.1393329, longitude: -75.8521818}, "vultr:2": {name: "Chicago", latitude: 41.8339037, longitude: -87.872238}, "vultr:3": {name: "Dallas", latitude: 32.8208751, longitude: -96.8714229}, "vultr:4": {name: "Seattle", latitude: 47.6149942, longitude: -122.4759879}, "vultr:5": {name: "Los Angeles", latitude: 34.0207504, longitude: -118.691914}, "vultr:6": {name: "Atlanta", latitude: 33.7676334, longitude: -84.5610332}, "vultr:7": {name: "Amsterdam", latitude: 52.3745287, longitude: 4.7581878}, "vultr:8": {name: "London", latitude: 51.5283063, longitude: -0.382486}, "vultr:9": {name: "Frankfurt", latitude: 50.1211273, longitude: 8.496137}, "vultr:12": {name: "Silicon Valley", latitude: 37.4024714, longitude: -122.3219752}, "vultr:19": {name: "Sydney", latitude: -33.8479715, longitude: 150.651084}, "vultr:24": {name: "Paris", latitude: 48.8588376, longitude: 2.2773454}, "vultr:25": {name: "Tokyo", latitude: 35.6732615, longitude: 139.569959}, "vultr:39": {name: "Miami", latitude: 25.7823071, longitude: -80.3012156}, "vultr:40": {name: "Singapore", latitude: 1.3147268, longitude: 103.7065876}}, r.prototype.start = function (e, t) {
    this.callback = e, this.errorCallback = t;
    var n = this.parseServerQuery();
    n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers());
  }, r.prototype.parseServerQuery = function () {
    var e = i.parse(location.href, !0), t = e.query.server;
    if ("string" == typeof t) {
      var n = t.split(":");
      if (3 == n.length) {
        var s = n[0], r = parseInt(n[1]), a = parseInt(n[2]);
        return "0" == s || s.startsWith("vultr:") || (s = "vultr:" + s), [s, r, a, e.query.password];
      }
      this.errorCallback("Invalid number of server parameters in " + t);
    }
  }, r.prototype.findServer = function (e, t) {
    var n = this.servers[e];
    if (Array.isArray(n)) {
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        if (s.index == t) return s;
      }
      console.warn("Could not find server in region " + e + " with index " + t + ".");
    } else this.errorCallback("No server list for region " + e);
  }, r.prototype.pingServers = function () {
    var e = this, t = [];
    for (var n in this.servers) if (this.servers.hasOwnProperty(n)) {
      var i = this.servers[n], s = i[Math.floor(Math.random() * i.length)];
      null != s ? function (i, s) {
        var r = new XMLHttpRequest;
        r.onreadystatechange = function (i) {
          var r = i.target;
          if (4 == r.readyState) {
            if (200 == r.status) {
              for (var a = 0; a < t.length; a++) t[a].abort();
              e.log("Connecting to region", s.region);
              var o = e.seekServer(s.region);
              e.connect(o[0], o[1], o[2]);
            } else console.warn("Error pinging " + s.ip + " in region " + n);
          }
        };
        var a = "//" + e.serverAddress(s.ip, !0) + ":" + e.serverPort(s) + "/ping";
        r.open("GET", a, !0), r.send(null), e.log("Pinging", a), t.push(r);
      }(0, s) : console.log("No target server for region " + n);
    }
  }, r.prototype.seekServer = function (e, t, n) {
    null == n && (n = "random"), null == t && (t = !1);
    let i = ["random"];
    var s = this.lobbySize, r = this.lobbySpread, a = this.servers[e].flatMap(function (e) {
      var t = 0;
      return e.games.map(function (n) {
        var i = t++;
        return {region: e.region, index: e.index * e.games.length + i, gameIndex: i, gameCount: e.games.length, playerCount: n.playerCount, isPrivate: n.isPrivate};
      });
    }).filter(function (e) {
      return !e.isPrivate;
    }).filter(function (e) {
      return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2;
    }).filter(function (e) {
      return "random" == n || i[e.index % i.length].key == n;
    }).sort(function (e, t) {
      return t.playerCount - e.playerCount;
    }).filter(function (e) {
      return e.playerCount < s;
    });
    if (t && a.reverse(), 0 != a.length) {
      var o = Math.floor(Math.random() * Math.min(r, a.length)), l = a[o = Math.min(o, a.length - 1)], c = l.region, h = (o = Math.floor(l.index / l.gameCount), l.index % l.gameCount);
      return this.log("Found server."), [c, o, h];
    }
    this.errorCallback("No open servers.");
  }, r.prototype.connect = function (e, t, n) {
    if (!this.connected) {
      var i = this.findServer(e, t);
      null != i ? (this.log("Connecting to server", i, "with game index", n), i.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (window.history.replaceState(document.title, document.title, this.generateHref(e, t, n, this.password)), this.server = i, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(i.ip), "on port", this.serverPort(i), "with game index", n), this.callback(this.serverAddress(i.ip), this.serverPort(i), n))) : this.errorCallback("Failed to find server for region " + e + " and index " + t);
    }
  }, r.prototype.switchServer = function (e, t, n, i) {
    this.switchingServers = !0, window.location.href = this.generateHref(e, t, n, i);
  }, r.prototype.generateHref = function (e, t, n, i) {
    var s = "/?server=" + (e = this.stripRegion(e)) + ":" + t + ":" + n;
    return i && (s += "&password=" + encodeURIComponent(i)), s;
  }, r.prototype.serverAddress = function (e, t) {
    return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e + "." + this.baseUrl;
  }, r.prototype.serverPort = function (e) {
    return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80;
  }, r.prototype.processServers = function (e) {
    for (var t = {}, n = 0; n < e.length; n++) {
      var i = e[n], s = t[i.region];
      null == s && (s = [], t[i.region] = s), s.push(i);
    }
    for (var r in t) t[r] = t[r].sort(function (e, t) {
      return e.index - t.index;
    });
    this.servers = t;
  }, r.prototype.ipToHex = function (e) {
    return e.split(".").map(e => ("00" + parseInt(e).toString(16)).substr(-2)).join("").toLowerCase();
  }, r.prototype.hashIP = function (e) {
    return s(this.ipToHex(e));
  }, r.prototype.log = function () {
    return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0;
  }, r.prototype.stripRegion = function (e) {
    return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)), e;
  }, window.testVultrClient = function () {
    var e = 1;
    function t(t, n) {
      (t = "" + t) == (n = "" + n) ? console.log(`Assert ${e} passed.`) : console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`), e++;
    }
    var n = new r("test.io", -1, 5, 1, !1);
    n.errorCallback = function (e) {}, n.processServers(function (e) {
      var t = [];
      for (var n in e) for (var i = e[n], s = 0; s < i.length; s++) t.push({ip: n + ":" + s, scheme: "testing", region: n, index: s, games: i[s].map(e => ({playerCount: e, isPrivate: !1}))});
      return t;
    }({1: [[0, 0, 0, 0], [0, 0, 0, 0]], 2: [[5, 1, 0, 0], [0, 0, 0, 0]], 3: [[5, 0, 1, 5], [0, 0, 0, 0]], 4: [[5, 1, 1, 5], [1, 0, 0, 0]], 5: [[5, 1, 1, 5], [1, 0, 4, 0]], 6: [[5, 5, 5, 5], [2, 3, 1, 4]], 7: [[5, 5, 5, 5], [5, 5, 5, 5]]})), t(n.seekServer(1, !1), [1, 0, 0]), t(n.seekServer(1, !0), [1, 1, 3]), t(n.seekServer(2, !1), [2, 0, 1]), t(n.seekServer(2, !0), [2, 1, 3]), t(n.seekServer(3, !1), [3, 0, 2]), t(n.seekServer(3, !0), [3, 1, 3]), t(n.seekServer(4, !1), [4, 0, 1]), t(n.seekServer(4, !0), [4, 1, 3]), t(n.seekServer(5, !1), [5, 1, 2]), t(n.seekServer(5, !0), [5, 1, 3]), t(n.seekServer(6, !1), [6, 1, 3]), t(n.seekServer(6, !0), void 0), t(n.seekServer(7, !1), void 0), t(n.seekServer(7, !0), void 0), console.log("Tests passed.");
  };
  var a = function (e, t) {
    return e.concat(t);
  };
  Array.prototype.flatMap = function (e) {
    var t, n;
    return t = e, n = this, n.map(t).reduce(a, []);
  }, e.exports = r;
}, function (e, t, n) {
  "use strict";
  var i = n(61), s = n(63);
  function r() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  t.parse = y, t.resolve = function (e, t) {
    return y(e, !1, !0).resolve(t);
  }, t.resolveObject = function (e, t) {
    return e ? y(e, !1, !0).resolveObject(t) : t;
  }, t.format = function (e) {
    return s.isString(e) && (e = y(e)), e instanceof r ? e.format() : r.prototype.format.call(e);
  }, t.Url = r;
  var a = /^([a-z0-9.+-]+:)/i, o = /:[0-9]*$/, l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])), h = ["%", "/", "?", ";", "#"].concat(c), u = ["/", "?", "#"], f = /^[+a-z0-9A-Z_-]{0,63}$/, d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, _ = {javascript: !0, "javascript:": !0}, p = {javascript: !0, "javascript:": !0}, g = {http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0}, m = n(64);
  function y(e, t, n) {
    if (e && s.isObject(e) && e instanceof r) return e;
    var i = new r;
    return i.parse(e, t, n), i;
  }
  r.prototype.parse = function (e, t, n) {
    if (!s.isString(e)) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var r = e.indexOf("?"), o = -1 !== r && r < e.indexOf("#") ? "?" : "#", y = e.split(o);
    y[0] = y[0].replace(/\\/g, "/");
    var k = e = y.join(o);
    if (k = k.trim(), !n && 1 === e.split("#").length) {
      var v = l.exec(k);
      if (v) return this.path = k, this.href = k, this.pathname = v[1], v[2] ? (this.search = v[2], this.query = t ? m.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
    }
    var w = a.exec(k);
    if (w) {
      var b = (w = w[0]).toLowerCase();
      this.protocol = b, k = k.substr(w.length);
    }
    if (n || w || k.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var x = "//" === k.substr(0, 2);
      !x || w && p[w] || (k = k.substr(2), this.slashes = !0);
    }
    if (!p[w] && (x || w && !g[w])) {
      for (var E, I, S, P = -1, T = 0; T < u.length; T++) -1 !== (E = k.indexOf(u[T])) && (-1 === P || E < P) && (P = E);
      for (-1 !== (S = -1 === P ? k.lastIndexOf("@") : k.lastIndexOf("@", P)) && (I = k.slice(0, S), k = k.slice(S + 1), this.auth = decodeURIComponent(I)), P = -1, T = 0; T < h.length; T++) -1 !== (E = k.indexOf(h[T])) && (-1 === P || E < P) && (P = E);
      -1 === P && (P = k.length), this.host = k.slice(0, P), k = k.slice(P), this.parseHost(), this.hostname = this.hostname || "";
      var B = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!B) for (var A = this.hostname.split(/\./), C = (T = 0, A.length); T < C; T++) {
        var O = A[T];
        if (O && !O.match(f)) {
          for (var R = "", j = 0, D = O.length; j < D; j++) O.charCodeAt(j) > 127 ? R += "x" : R += O[j];
          if (!R.match(f)) {
            var L = A.slice(0, T), M = A.slice(T + 1), U = O.match(d);
            U && (L.push(U[1]), M.unshift(U[2])), M.length && (k = "/" + M.join(".") + k), this.hostname = L.join(".");
            break;
          }
        }
      }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), B || (this.hostname = i.toASCII(this.hostname));
      var H = this.port ? ":" + this.port : "", z = this.hostname || "";
      this.host = z + H, this.href += this.host, B && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== k[0] && (k = "/" + k));
    }
    if (!_[b]) for (T = 0, C = c.length; T < C; T++) {
      var q = c[T];
      if (-1 !== k.indexOf(q)) {
        var Y = encodeURIComponent(q);
        Y === q && (Y = escape(q)), k = k.split(q).join(Y);
      }
    }
    var F = k.indexOf("#");
    -1 !== F && (this.hash = k.substr(F), k = k.slice(0, F));
    var V = k.indexOf("?");
    if (-1 !== V ? (this.search = k.substr(V), this.query = k.substr(V + 1), t && (this.query = m.parse(this.query)), k = k.slice(0, V)) : t && (this.search = "", this.query = {}), k && (this.pathname = k), g[b] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      H = this.pathname || "";
      var W = this.search || "";
      this.path = H + W;
    }
    return this.href = this.format(), this;
  }, r.prototype.format = function () {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "", n = this.pathname || "", i = this.hash || "", r = !1, a = "";
    this.host ? r = e + this.host : this.hostname && (r = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && s.isObject(this.query) && Object.keys(this.query).length && (a = m.stringify(this.query));
    var o = this.search || a && "?" + a || "";
    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || g[t]) && !1 !== r ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), o && "?" !== o.charAt(0) && (o = "?" + o), t + r + (n = n.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    })) + (o = o.replace("#", "%23")) + i;
  }, r.prototype.resolve = function (e) {
    return this.resolveObject(y(e, !1, !0)).format();
  }, r.prototype.resolveObject = function (e) {
    if (s.isString(e)) {
      var t = new r;
      t.parse(e, !1, !0), e = t;
    }
    for (var n = new r, i = Object.keys(this), a = 0; a < i.length; a++) {
      var o = i[a];
      n[o] = this[o];
    }
    if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
    if (e.slashes && !e.protocol) {
      for (var l = Object.keys(e), c = 0; c < l.length; c++) {
        var h = l[c];
        "protocol" !== h && (n[h] = e[h]);
      }
      return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
    }
    if (e.protocol && e.protocol !== n.protocol) {
      if (!g[e.protocol]) {
        for (var u = Object.keys(e), f = 0; f < u.length; f++) {
          var d = u[f];
          n[d] = e[d];
        }
        return n.href = n.format(), n;
      }
      if (n.protocol = e.protocol, e.host || p[e.protocol]) n.pathname = e.pathname; else {
        for (var _ = (e.pathname || "").split("/"); _.length && !(e.host = _.shift());) ;
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== _[0] && _.unshift(""), _.length < 2 && _.unshift(""), n.pathname = _.join("/");
      }
      if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
        var m = n.pathname || "", y = n.search || "";
        n.path = m + y;
      }
      return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
    }
    var k = n.pathname && "/" === n.pathname.charAt(0), v = e.host || e.pathname && "/" === e.pathname.charAt(0), w = v || k || n.host && e.pathname, b = w, x = n.pathname && n.pathname.split("/") || [], E = (_ = e.pathname && e.pathname.split("/") || [], n.protocol && !g[n.protocol]);
    if (E && (n.hostname = "", n.port = null, n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === _[0] ? _[0] = e.host : _.unshift(e.host)), e.host = null), w = w && ("" === _[0] || "" === x[0])), v) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, x = _; else if (_.length) x || (x = []), x.pop(), x = x.concat(_), n.search = e.search, n.query = e.query; else if (!s.isNullOrUndefined(e.search)) return E && (n.hostname = n.host = x.shift(), (B = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = B.shift(), n.host = n.hostname = B.shift())), n.search = e.search, n.query = e.query, s.isNull(n.pathname) && s.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
    if (!x.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
    for (var I = x.slice(-1)[0], S = (n.host || e.host || x.length > 1) && ("." === I || ".." === I) || "" === I, P = 0, T = x.length; T >= 0; T--) "." === (I = x[T]) ? x.splice(T, 1) : ".." === I ? (x.splice(T, 1), P++) : P && (x.splice(T, 1), P--);
    if (!w && !b) for (; P--; P) x.unshift("..");
    !w || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), S && "/" !== x.join("/").substr(-1) && x.push("");
    var B, A = "" === x[0] || x[0] && "/" === x[0].charAt(0);
    return E && (n.hostname = n.host = A ? "" : x.length ? x.shift() : "", (B = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = B.shift(), n.host = n.hostname = B.shift())), (w = w || n.host && x.length) && !A && x.unshift(""), x.length ? n.pathname = x.join("/") : (n.pathname = null, n.path = null), s.isNull(n.pathname) && s.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
  }, r.prototype.parseHost = function () {
    var e = this.host, t = o.exec(e);
    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
  };
}, function (e, t, n) {
  (function (e, i) {
    var s;
    !function (r) {
      t && t.nodeType, e && e.nodeType;
      var a = "object" == typeof i && i;
      a.global !== a && a.window !== a && a.self;
      var o, l = /^xn--/, c = /[^\x20-\x7E]/, h = /[\x2E\u3002\uFF0E\uFF61]/g, u = {overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input"}, f = Math.floor, d = String.fromCharCode;
      function _(e) {
        throw RangeError(u[e]);
      }
      function p(e, t) {
        for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
        return i;
      }
      function g(e, t) {
        var n = e.split("@"), i = "";
        return n.length > 1 && (i = n[0] + "@", e = n[1]), i + p((e = e.replace(h, ".")).split("."), t).join(".");
      }
      function m(e) {
        for (var t, n, i = [], s = 0, r = e.length; s < r;) (t = e.charCodeAt(s++)) >= 55296 && t <= 56319 && s < r ? 56320 == (64512 & (n = e.charCodeAt(s++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), s--) : i.push(t);
        return i;
      }
      function y(e) {
        return p(e, function (e) {
          var t = "";
          return e > 65535 && (t += d((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + d(e);
        }).join("");
      }
      function k(e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : 36;
      }
      function v(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
      }
      function w(e, t, n) {
        var i = 0;
        for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; i += 36) e = f(e / 35);
        return f(i + 36 * e / (e + 38));
      }
      function b(e) {
        var t, n, i, s, r, a, o, l, c, h, u = [], d = e.length, p = 0, g = 128, m = 72;
        for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && _("not-basic"), u.push(e.charCodeAt(i));
        for (s = n > 0 ? n + 1 : 0; s < d;) {
          for (r = p, a = 1, o = 36; s >= d && _("invalid-input"), ((l = k(e.charCodeAt(s++))) >= 36 || l > f((2147483647 - p) / a)) && _("overflow"), p += l * a, !(l < (c = o <= m ? 1 : o >= m + 26 ? 26 : o - m)); o += 36) a > f(2147483647 / (h = 36 - c)) && _("overflow"), a *= h;
          m = w(p - r, t = u.length + 1, 0 == r), f(p / t) > 2147483647 - g && _("overflow"), g += f(p / t), p %= t, u.splice(p++, 0, g);
        }
        return y(u);
      }
      function x(e) {
        var t, n, i, s, r, a, o, l, c, h, u, p, g, y, k, b = [];
        for (p = (e = m(e)).length, t = 128, n = 0, r = 72, a = 0; a < p; ++a) (u = e[a]) < 128 && b.push(d(u));
        for (i = s = b.length, s && b.push("-"); i < p;) {
          for (o = 2147483647, a = 0; a < p; ++a) (u = e[a]) >= t && u < o && (o = u);
          for (o - t > f((2147483647 - n) / (g = i + 1)) && _("overflow"), n += (o - t) * g, t = o, a = 0; a < p; ++a) if ((u = e[a]) < t && ++n > 2147483647 && _("overflow"), u == t) {
            for (l = n, c = 36; !(l < (h = c <= r ? 1 : c >= r + 26 ? 26 : c - r)); c += 36) k = l - h, y = 36 - h, b.push(d(v(h + k % y, 0))), l = f(k / y);
            b.push(d(v(l, 0))), r = w(n, g, i == s), n = 0, ++i;
          }
          ++n, ++t;
        }
        return b.join("");
      }
      o = {version: "1.4.1", ucs2: {decode: m, encode: y}, decode: b, encode: x, toASCII: function (e) {
        return g(e, function (e) {
          return c.test(e) ? "xn--" + x(e) : e;
        });
      }, toUnicode: function (e) {
        return g(e, function (e) {
          return l.test(e) ? b(e.slice(4).toLowerCase()) : e;
        });
      }}, void 0 === (s = function () {
        return o;
      }.call(t, n, t, e)) || (e.exports = s);
    }();
  }.call(this, n(62)(e), n(12)));
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {enumerable: !0, get: function () {
      return e.l;
    }}), Object.defineProperty(e, "id", {enumerable: !0, get: function () {
      return e.i;
    }}), e.webpackPolyfill = 1), e;
  };
}, function (e, t, n) {
  "use strict";
  e.exports = {isString: function (e) {
    return "string" == typeof e;
  }, isObject: function (e) {
    return "object" == typeof e && null !== e;
  }, isNull: function (e) {
    return null === e;
  }, isNullOrUndefined: function (e) {
    return null == e;
  }};
}, function (e, t, n) {
  "use strict";
  t.decode = t.parse = n(65), t.encode = t.stringify = n(66);
}, function (e, t, n) {
  "use strict";
  function i(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  e.exports = function (e, t, n, r) {
    t = t || "&", n = n || "=";
    var a = {};
    if ("string" != typeof e || 0 === e.length) return a;
    var o = /\+/g;
    e = e.split(t);
    var l = 1e3;
    r && "number" == typeof r.maxKeys && (l = r.maxKeys);
    var c = e.length;
    l > 0 && c > l && (c = l);
    for (var h = 0; h < c; ++h) {
      var u, f, d, _, p = e[h].replace(o, "%20"), g = p.indexOf(n);
      g >= 0 ? (u = p.substr(0, g), f = p.substr(g + 1)) : (u = p, f = ""), d = decodeURIComponent(u), _ = decodeURIComponent(f), i(a, d) ? s(a[d]) ? a[d].push(_) : a[d] = [a[d], _] : a[d] = _;
    }
    return a;
  };
  var s = Array.isArray || function (e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  };
}, function (e, t, n) {
  "use strict";
  var i = function (e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return "";
    }
  };
  e.exports = function (e, t, n, o) {
    return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(a(e), function (a) {
      var o = encodeURIComponent(i(a)) + n;
      return s(e[a]) ? r(e[a], function (e) {
        return o + encodeURIComponent(i(e));
      }).join(t) : o + encodeURIComponent(i(e[a]));
    }).join(t) : o ? encodeURIComponent(i(o)) + n + encodeURIComponent(i(e)) : "";
  };
  var s = Array.isArray || function (e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  };
  function r(e, t) {
    if (e.map) return e.map(t);
    for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
    return n;
  }
  var a = Object.keys || function (e) {
    var t = [];
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    return t;
  };
}, function (e, t, n) {
  var i, s, r, a, o;
  i = n(68), s = n(20).utf8, r = n(69), a = n(20).bin, (o = function (e, t) {
    e.constructor == String ? e = t && "binary" === t.encoding ? a.stringToBytes(e) : s.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    for (var n = i.bytesToWords(e), l = 8 * e.length, c = 1732584193, h = -271733879, u = -1732584194, f = 271733878, d = 0; d < n.length; d++) n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
    n[l >>> 5] |= 128 << l % 32, n[14 + (l + 64 >>> 9 << 4)] = l;
    var _ = o._ff, p = o._gg, g = o._hh, m = o._ii;
    for (d = 0; d < n.length; d += 16) {
      var y = c, k = h, v = u, w = f;
      h = m(h = m(h = m(h = m(h = g(h = g(h = g(h = g(h = p(h = p(h = p(h = p(h = _(h = _(h = _(h = _(h, u = _(u, f = _(f, c = _(c, h, u, f, n[d + 0], 7, -680876936), h, u, n[d + 1], 12, -389564586), c, h, n[d + 2], 17, 606105819), f, c, n[d + 3], 22, -1044525330), u = _(u, f = _(f, c = _(c, h, u, f, n[d + 4], 7, -176418897), h, u, n[d + 5], 12, 1200080426), c, h, n[d + 6], 17, -1473231341), f, c, n[d + 7], 22, -45705983), u = _(u, f = _(f, c = _(c, h, u, f, n[d + 8], 7, 1770035416), h, u, n[d + 9], 12, -1958414417), c, h, n[d + 10], 17, -42063), f, c, n[d + 11], 22, -1990404162), u = _(u, f = _(f, c = _(c, h, u, f, n[d + 12], 7, 1804603682), h, u, n[d + 13], 12, -40341101), c, h, n[d + 14], 17, -1502002290), f, c, n[d + 15], 22, 1236535329), u = p(u, f = p(f, c = p(c, h, u, f, n[d + 1], 5, -165796510), h, u, n[d + 6], 9, -1069501632), c, h, n[d + 11], 14, 643717713), f, c, n[d + 0], 20, -373897302), u = p(u, f = p(f, c = p(c, h, u, f, n[d + 5], 5, -701558691), h, u, n[d + 10], 9, 38016083), c, h, n[d + 15], 14, -660478335), f, c, n[d + 4], 20, -405537848), u = p(u, f = p(f, c = p(c, h, u, f, n[d + 9], 5, 568446438), h, u, n[d + 14], 9, -1019803690), c, h, n[d + 3], 14, -187363961), f, c, n[d + 8], 20, 1163531501), u = p(u, f = p(f, c = p(c, h, u, f, n[d + 13], 5, -1444681467), h, u, n[d + 2], 9, -51403784), c, h, n[d + 7], 14, 1735328473), f, c, n[d + 12], 20, -1926607734), u = g(u, f = g(f, c = g(c, h, u, f, n[d + 5], 4, -378558), h, u, n[d + 8], 11, -2022574463), c, h, n[d + 11], 16, 1839030562), f, c, n[d + 14], 23, -35309556), u = g(u, f = g(f, c = g(c, h, u, f, n[d + 1], 4, -1530992060), h, u, n[d + 4], 11, 1272893353), c, h, n[d + 7], 16, -155497632), f, c, n[d + 10], 23, -1094730640), u = g(u, f = g(f, c = g(c, h, u, f, n[d + 13], 4, 681279174), h, u, n[d + 0], 11, -358537222), c, h, n[d + 3], 16, -722521979), f, c, n[d + 6], 23, 76029189), u = g(u, f = g(f, c = g(c, h, u, f, n[d + 9], 4, -640364487), h, u, n[d + 12], 11, -421815835), c, h, n[d + 15], 16, 530742520), f, c, n[d + 2], 23, -995338651), u = m(u, f = m(f, c = m(c, h, u, f, n[d + 0], 6, -198630844), h, u, n[d + 7], 10, 1126891415), c, h, n[d + 14], 15, -1416354905), f, c, n[d + 5], 21, -57434055), u = m(u, f = m(f, c = m(c, h, u, f, n[d + 12], 6, 1700485571), h, u, n[d + 3], 10, -1894986606), c, h, n[d + 10], 15, -1051523), f, c, n[d + 1], 21, -2054922799), u = m(u, f = m(f, c = m(c, h, u, f, n[d + 8], 6, 1873313359), h, u, n[d + 15], 10, -30611744), c, h, n[d + 6], 15, -1560198380), f, c, n[d + 13], 21, 1309151649), u = m(u, f = m(f, c = m(c, h, u, f, n[d + 4], 6, -145523070), h, u, n[d + 11], 10, -1120210379), c, h, n[d + 2], 15, 718787259), f, c, n[d + 9], 21, -343485551), c = c + y >>> 0, h = h + k >>> 0, u = u + v >>> 0, f = f + w >>> 0;
    }
    return i.endian([c, h, u, f]);
  })._ff = function (e, t, n, i, s, r, a) {
    var o = e + (t & n | ~t & i) + (s >>> 0) + a;
    return (o << r | o >>> 32 - r) + t;
  }, o._gg = function (e, t, n, i, s, r, a) {
    var o = e + (t & i | n & ~i) + (s >>> 0) + a;
    return (o << r | o >>> 32 - r) + t;
  }, o._hh = function (e, t, n, i, s, r, a) {
    var o = e + (t ^ n ^ i) + (s >>> 0) + a;
    return (o << r | o >>> 32 - r) + t;
  }, o._ii = function (e, t, n, i, s, r, a) {
    var o = e + (n ^ (t | ~i)) + (s >>> 0) + a;
    return (o << r | o >>> 32 - r) + t;
  }, o._blocksize = 16, o._digestsize = 16, e.exports = function (e, t) {
    if (null == e) throw Error("Illegal argument " + e);
    var n = i.wordsToBytes(o(e, t));
    return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : i.bytesToHex(n);
  };
}, function (e, t) {
  var n, i;
  n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {rotl: function (e, t) {
    return e << t | e >>> 32 - t;
  }, rotr: function (e, t) {
    return e << 32 - t | e >>> t;
  }, endian: function (e) {
    if (e.constructor == Number) return 16711935 & i.rotl(e, 8) | 4278255360 & i.rotl(e, 24);
    for (var t = 0; t < e.length; t++) e[t] = i.endian(e[t]);
    return e;
  }, randomBytes: function (e) {
    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
    return t;
  }, bytesToWords: function (e) {
    for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) t[i >>> 5] |= e[n] << 24 - i % 32;
    return t;
  }, wordsToBytes: function (e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t;
  }, bytesToHex: function (e) {
    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
    return t.join("");
  }, hexToBytes: function (e) {
    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
    return t;
  }, bytesToBase64: function (e) {
    for (var t = [], i = 0; i < e.length; i += 3) for (var s = e[i] << 16 | e[i + 1] << 8 | e[i + 2], r = 0; r < 4; r++) 8 * i + 6 * r <= 8 * e.length ? t.push(n.charAt(s >>> 6 * (3 - r) & 63)) : t.push("=");
    return t.join("");
  }, base64ToBytes: function (e) {
    e = e.replace(/[^A-Z0-9+\/]/gi, "");
    for (var t = [], i = 0, s = 0; i < e.length; s = ++i % 4) 0 != s && t.push((n.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * s + 8) - 1) << 2 * s | n.indexOf(e.charAt(i)) >>> 6 - 2 * s);
    return t;
  }}, e.exports = i;
}, function (e, t) {
  function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }
  e.exports = function (e) {
    var t;
    return null != e && (n(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);
  };
}, function (e, t) {
  e.exports = function (e, t, n, i, s, r, a, o, l) {
    this.aiTypes = [{id: 0, src: "cow_1", killScore: 150, health: 500, weightM: 0.8, speed: 0.00095, turnSpeed: 0.001, scale: 72, drop: ["food", 50]}, {id: 1, src: "pig_1", killScore: 200, health: 800, weightM: 0.6, speed: 0.00085, turnSpeed: 0.001, scale: 72, drop: ["food", 80]}, {id: 2, name: "Bull", src: "bull_2", hostile: !0, dmg: 20, killScore: 1e3, health: 1800, weightM: 0.5, speed: 0.00094, turnSpeed: 0.00074, scale: 78, viewRange: 800, chargePlayer: !0, drop: ["food", 100]}, {id: 3, name: "Bully", src: "bull_1", hostile: !0, dmg: 20, killScore: 2e3, health: 2800, weightM: 0.45, speed: 0.001, turnSpeed: 0.0008, scale: 90, viewRange: 900, chargePlayer: !0, drop: ["food", 400]}, {id: 4, name: "Wolf", src: "wolf_1", hostile: !0, dmg: 8, killScore: 500, health: 300, weightM: 0.45, speed: 0.001, turnSpeed: 0.002, scale: 84, viewRange: 800, chargePlayer: !0, drop: ["food", 200]}, {id: 5, name: "nerfed duck man", src: "chicken_1", dmg: 8, killScore: 2e3, noTrap: !0, health: 300, weightM: 0.2, speed: 0.0018, turnSpeed: 0.006, scale: 70, drop: ["food", 100]}, {id: 6, name: "MOOSTAFA", nameScale: 50, src: "enemy", hostile: !0, dontRun: !0, fixedSpawn: !0, spawnDelay: 6e4, noTrap: !0, colDmg: 100, dmg: 40, killScore: 8e3, health: 18e3, weightM: 0.4, speed: 0.0007, turnSpeed: 0.01, scale: 80, spriteMlt: 1.8, leapForce: 0.9, viewRange: 1e3, hitRange: 210, hitDelay: 1e3, chargePlayer: !0, drop: ["food", 100]}, {id: 7, name: "Treasure", hostile: !0, nameScale: 35, src: "crate_1", fixedSpawn: !0, spawnDelay: 12e4, colDmg: 200, killScore: 5e3, health: 2e4, weightM: 0.1, speed: 0, turnSpeed: 0, scale: 70, spriteMlt: 1}, {id: 8, name: "MOOFIE", src: "wolf_2", hostile: !0, fixedSpawn: !0, dontRun: !0, hitScare: 4, spawnDelay: 3e4, noTrap: !0, nameScale: 35, dmg: 10, colDmg: 100, killScore: 3e3, health: 7e3, weightM: 0.45, speed: 0.0015, turnSpeed: 0.002, scale: 90, viewRange: 800, chargePlayer: !0, drop: ["food", 1e3]}], this.spawn = function (c, h, u, f) {
      for (var d, _ = 0; _ < e.length; ++_) if (!e[_].active) {
        d = e[_];
        break;
      }
      return d || (d = new t(e.length, s, n, i, a, r, o, l), e.push(d)), d.init(c, h, u, f, this.aiTypes[f]), d;
    };
  };
}, function (e, t) {
  var n = 2 * Math.PI;
  e.exports = function (e, t, i, s, r, a, o, l) {
    this.sid = e, this.isAI = !0, this.nameIndex = r.randInt(0, a.cowNames.length - 1), this.init = function (e, t, n, i, s) {
      this.x = e, this.y = t, this.startX = s.fixedSpawn ? e : null, this.startY = s.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.index = i, this.src = s.src, s.name && (this.name = s.name), this.weightM = s.weightM, this.speed = s.speed, this.killScore = s.killScore, this.turnSpeed = s.turnSpeed, this.scale = s.scale, this.maxHealth = s.health, this.leapForce = s.leapForce, this.health = this.maxHealth, this.chargePlayer = s.chargePlayer, this.viewRange = s.viewRange, this.drop = s.drop, this.dmg = s.dmg, this.hostile = s.hostile, this.dontRun = s.dontRun, this.hitRange = s.hitRange, this.hitDelay = s.hitDelay, this.hitScare = s.hitScare, this.spriteMlt = s.spriteMlt, this.nameScale = s.nameScale, this.colDmg = s.colDmg, this.noTrap = s.noTrap, this.spawnDelay = s.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {};
    };
    var c = 0;
    this.update = function (e) {
      if (this.active) {
        if (this.spawnCounter) return this.spawnCounter -= e, void (this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || r.randInt(0, a.mapScale), this.y = this.startY || r.randInt(0, a.mapScale)));
        (c -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), c = 1e3);
        var s = !1, o = 1;
        if (!this.zIndex && !this.lockMove && this.y >= a.mapScale / 2 - a.riverWidth / 2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (o = 0.33, this.xVel += a.waterCurrent * e), this.lockMove) this.xVel = 0, this.yVel = 0; else if (this.waitCount > 0) {
          if (this.waitCount -= e, this.waitCount <= 0) {
            if (this.chargePlayer) {
              for (var h, u, f, d = 0; d < i.length; ++d) !i[d].alive || i[d].skin && i[d].skin.bullRepel || (f = r.getDistance(this.x, this.y, i[d].x, i[d].y)) <= this.viewRange && (!h || f < u) && (u = f, h = i[d]);
              h ? (this.chargeTarget = h, this.moveCount = r.randInt(8e3, 12e3)) : (this.moveCount = r.randInt(1e3, 2e3), this.targetDir = r.randFloat(-Math.PI, Math.PI));
            } else this.moveCount = r.randInt(4e3, 1e4), this.targetDir = r.randFloat(-Math.PI, Math.PI);
          }
        } else if (this.moveCount > 0) {
          var _ = this.speed * o;
          if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = r.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), _ *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = r.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), _ *= 1.75, s = !0), this.hitWait && (_ *= 0.3), this.dir != this.targetDir) {
            this.dir %= n;
            var p = (this.dir - this.targetDir + n) % n, g = Math.min(Math.abs(p - n), p, this.turnSpeed * e), m = p - Math.PI >= 0 ? 1 : -1;
            this.dir += m * g + n;
          }
          this.dir %= n, this.xVel += _ * e * Math.cos(this.dir), this.yVel += _ * e * Math.sin(this.dir), this.moveCount -= e, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : r.randInt(1500, 6e3));
        }
        this.zIndex = 0, this.lockMove = !1;
        var y = Math.min(4, Math.max(1, Math.round(r.getDistance(0, 0, this.xVel * e, this.yVel * e) / 40))), k = 1 / y;
        for (d = 0; d < y; ++d) {
          this.xVel && (this.x += this.xVel * e * k), this.yVel && (this.y += this.yVel * e * k), S = t.getGridArrays(this.x, this.y, this.scale);
          for (var v = 0; v < S.length; ++v) for (var w = 0; w < S[v].length; ++w) S[v][w].active && t.checkCollision(this, S[v][w], k);
        }
        var b, x, E, I = !1;
        if (this.hitWait > 0 && (this.hitWait -= e, this.hitWait <= 0)) {
          I = !0, this.hitWait = 0, this.leapForce && !r.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
          for (var S = t.getGridArrays(this.x, this.y, this.hitRange), P = 0; P < S.length; ++P) for (v = 0; v < S[P].length; ++v) (b = S[P][v]).health && (x = r.getDistance(this.x, this.y, b.x, b.y)) < b.scale + this.hitRange && (b.changeHealth(-(5 * this.dmg)) && t.disableObj(b), t.hitObj(b, r.getDirection(this.x, this.y, b.x, b.y)));
          for (v = 0; v < i.length; ++v) i[v].canSee(this) && l.send(i[v].id, "aa", this.sid);
        }
        if (s || I) for (d = 0; d < i.length; ++d) (b = i[d]) && b.alive && (x = r.getDistance(this.x, this.y, b.x, b.y), this.hitRange ? !this.hitWait && x <= this.hitRange + b.scale && (I ? (E = r.getDirection(b.x, b.y, this.x, this.y), b.changeHealth(-this.dmg), b.xVel += 0.6 * Math.cos(E), b.yVel += 0.6 * Math.sin(E), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3e3, this.hitWait = r.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : x <= this.scale + b.scale && (E = r.getDirection(b.x, b.y, this.x, this.y), b.changeHealth(-this.dmg), b.xVel += 0.55 * Math.cos(E), b.yVel += 0.55 * Math.sin(E)));
        this.xVel && (this.xVel *= Math.pow(a.playerDecel, e)), this.yVel && (this.yVel *= Math.pow(a.playerDecel, e));
        var T = this.scale;
        this.x - T < 0 ? (this.x = T, this.xVel = 0) : this.x + T > a.mapScale && (this.x = a.mapScale - T, this.xVel = 0), this.y - T < 0 ? (this.y = T, this.yVel = 0) : this.y + T > a.mapScale && (this.y = a.mapScale - T, this.yVel = 0);
      }
    }, this.canSee = function (e) {
      if (!e || e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
      var t = Math.abs(e.x - this.x) - e.scale, n = Math.abs(e.y - this.y) - e.scale;
      return t <= a.maxScreenWidth / 2 * 1.3 && n <= a.maxScreenHeight / 2 * 1.3;
    };
    var h = 0, u = 0;
    this.animate = function (e) {
      this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, h = 0, u = 0) : 0 == u ? (h += e / (this.animSpeed * a.hitReturnRatio), this.dirPlus = r.lerp(0, this.targetAngle, Math.min(1, h)), h >= 1 && (h = 1, u = 1)) : (h -= e / (this.animSpeed * (1 - a.hitReturnRatio)), this.dirPlus = r.lerp(0, this.targetAngle, Math.max(0, h))));
    }, this.startAnim = function () {
      this.animTime = this.animSpeed = 600, this.targetAngle = 0.8 * Math.PI, h = 0, u = 0;
    }, this.changeHealth = function (e, t, n) {
      if (this.active && (this.health += e, n && (this.hitScare && !r.randInt(0, this.hitScare) ? (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget = n, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3)), e < 0 && this.hitRange && r.randInt(0, 1) && (this.hitWait = 500), t && t.canSee(this) && e < 0 && l.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6) : (this.x = this.startX || r.randInt(0, a.mapScale), this.y = this.startY || r.randInt(0, a.mapScale)), this.health = this.maxHealth, this.runFrom = null, t && (o(t, this.killScore), this.drop)))) for (var i = 0; i < this.drop.length;) t.addResource(a.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2;
    };
  };
}]);