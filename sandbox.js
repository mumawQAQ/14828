((twod)=>{
    (()=>{
        "use strict";
        function e(e, t) {
            let n, o = !0;
            return "boolean" == typeof e ? (o = e,
            n = t) : n = e,
            Sn((e=>{
                const t = rn(Mn.document);
                "interactive" == t || "complete" == t ? (n && n(),
                e()) : Ln.addEventListener("DOMContentLoaded", (()=>{
                    n && n(),
                    e()
                }
                ), Et({
                    capture: o,
                    once: !0
                }))
            }
            ))
        }
        const t = e=>{
            const t = Object.call
              , n = t.bind(t)
              , o = Object.assign
              , s = Object.getOwnPropertyDescriptor
              , r = e=>o({
                __proto__: null
            }, e);
            return r({
                sourceWindow: e,
                cSO: r,
                F_c: n,
                F_a: Object.apply,
                F_b: Object.bind,
                F_tS: Function.toString,
                A_fE: [].forEach,
                A_so: [].some,
                A_sh: [].shift,
                A_j: [].join,
                A_po: [].pop,
                A_f: [].filter,
                A_iO: [].indexOf,
                A_iA: Array.isArray,
                O_a: o,
                O_k: Object.keys,
                O_v: Object.values,
                O_dP: Object.defineProperties,
                O_dPy: Object.defineProperty,
                O_hOP: Object.hasOwnProperty,
                O_gOPN: Object.getOwnPropertyNames,
                O_gOPD: s,
                O_gOPDs: Object.getOwnPropertyDescriptors,
                O_gPO: Object.getPrototypeOf,
                O_tS: {}.toString,
                J_p: JSON.parse,
                J_s: JSON.stringify,
                M_f: Math.floor,
                M_r: Math.random,
                M_m: Math.max,
                M_i: MutationEvent.prototype.initMutationEvent,
                M_pA: MutationEvent.prototype.ADDITION,
                M_pAT: MutationEvent.AT_TARGET,
                N_tS: (0).toString,
                N_MSI: Number.MAX_SAFE_INTEGER,
                P_t: Promise.prototype.then,
                P_c: Promise.prototype.catch,
                R_rABS: FileReader.prototype.readAsBinaryString,
                R_rAT: FileReader.prototype.readAsText,
                R_r: s(FileReader.prototype, "result").get,
                R_enq: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,
                R_cl: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,
                S_fCC: String.fromCharCode,
                S_sl: "".slice,
                S_su: "".substr,
                S_sp_nr: "".split,
                S_iO: "".indexOf,
                S_tr: "".trim,
                S_r_nr: "".replace,
                S_rA_nr: "".replaceAll,
                S_cCA: "".charCodeAt,
                S_tLC: "".toLowerCase,
                S_tUC: "".toUpperCase,
                Y_tST: Symbol.toStringTag,
                D_pFS: DOMParser.prototype.parseFromString,
                U_cOU: URL.createObjectURL,
                U_rOU: URL.revokeObjectURL,
                X_o: XMLHttpRequest.prototype.open,
                X_pSD: XMLHttpRequest.prototype.DONE,
                X_pSH: XMLHttpRequest.prototype.HEADERS_RECEIVED,
                X_pSL: XMLHttpRequest.prototype.LOADING,
                X_pSO: XMLHttpRequest.prototype.OPENED,
                X_pSU: XMLHttpRequest.prototype.UNSENT,
                X_s: XMLHttpRequest.prototype.send,
                D_n: Date.now,
                I_tS: e=>"" + e,
                E_r: Element.prototype.remove,
                E_s: Element.prototype.setAttribute,
                D_cS: s(Document.prototype, "currentScript").get,
                D_gRS: s(Document.prototype, "readyState").get,
                D_cE: Document.prototype.createElementNS,
                D_gEBT: Document.prototype.getElementsByTagName,
                M_aN: s(MutationEvent.prototype, "attrName").get,
                M_rN: s(MutationEvent.prototype, "relatedNode").get,
                C_d: s(CustomEvent.prototype, "detail").get,
                W_aEL: addEventListener,
                W_rEL: removeEventListener,
                parseInt,
                parseFloat,
                CustomEvent,
                CompositionEvent,
                KeyboardEvent,
                MouseEvent,
                MutationEvent,
                MutationObserver,
                console: Object.assign({}, console),
                Error,
                Uint8Array,
                Blob,
                ReadableStream,
                Number,
                String,
                Proxy,
                Window,
                FileReader,
                DOMParser,
                XMLHttpRequest,
                Function,
                RegExp,
                Promise,
                encodeURIComponent,
                decodeURIComponent,
                encodeURI,
                decodeURI,
                escape,
                unescape,
                atob,
                btoa,
                setTimeout,
                clearTimeout,
                setInterval,
                clearInterval,
                postMessage,
                dispatchEvent,
                alert,
                prompt,
                confirm,
                close,
                getElementById: e.Document.prototype.getElementById,
                createEvent: e.Document.prototype.createEvent,
                createElement: e.Document.prototype.createElement
            })
        }
          , n = "vault"in twod;
        if (n && void 0 === twod.vault)
            throw "Invalid vault";
        const o = twod.vault = twod.vault || t(twod.unsafeWindow)
          , {cSO: s, F_c: r, F_a: i, F_b: a, F_tS: c, A_fE: d, A_so: l, A_sh: u, A_j: p, A_po: m, A_f: g, A_iO: f, A_iA: _, O_a: v, O_k: h, O_v: b, O_dP: w, O_dPy: y, O_hOP: M, O_gOPN: E, O_gOPD: O, O_gOPDs: L, O_gPO: S, O_tS: x, J_p: R, J_s: I, M_f: D, M_r: C, M_m: j, M_i: P, M_pA: T, M_pAT: A, N_tS: $, N_MSI: U, P_t: N, P_c: B, R_rABS: F, R_rAT: X, R_r: k, R_enq: q, R_cl: W, S_fCC: H, S_sl: J, S_su: G, S_iO: K, S_sp_nr: z, S_tr: V, S_rA_nr: Y, S_cCA: Z, S_tLC: Q, S_tUC: ee, Y_tST: te, D_pFS: ne, D_cS: oe, D_gRS: se, D_cE: re, D_gEBT: ie, E_r: ae, E_s: ce, M_aN: de, M_rN: le, C_d: ue, U_cOU: pe, U_rOU: me, X_o: ge, X_s: fe, X_pSD: _e, X_pSH: ve, X_pSL: he, X_pSO: be, X_pSU: we, D_n: ye, I_tS: Me, W_aEL: Ee, W_rEL: Oe, parseInt: Le, parseFloat: Se, console: xe, encodeURIComponent: Re, decodeURIComponent: Ie, encodeURI: De, decodeURI: Ce, escape: je, unescape: Pe, atob: Te, btoa: Ae, postMessage: $e, dispatchEvent: Ue, alert: Ne, prompt: Be, confirm: Fe, close: Xe, getElementById: ke, createEvent: qe, createElement: We, CustomEvent: He, CompositionEvent: Je, KeyboardEvent: Ge, MouseEvent: Ke, MutationEvent: ze, MutationObserver: Ve, Uint8Array: Ye, FileReader: Ze, DOMParser: Qe, XMLHttpRequest: et, Function: tt, RegExp: nt, Promise: ot, Blob: st, ReadableStream: rt, Number: it, String: at, Proxy: ct, Window: dt} = o
          , lt = r
          , ut = i
          , pt = h
          , mt = b
          , gt = v
          , ft = y
          , _t = E
          , vt = O
          , ht = S
          , bt = _
          , wt = C
          , yt = j
          , Mt = (e,t,n)=>lt(ut, e, t, n)
          , Et = s
          , Ot = (e,t,n)=>(ft(e, t, Et({
            value: n,
            configurable: !0,
            enumerable: !0,
            writable: !0
        })),
        e)
          , Lt = (e,t)=>kt(e, t) ? e[t] : void 0
          , St = (e,t)=>{
            const n = vt(e, t);
            return n ? Et(n).value : void 0
        }
          , xt = (e,t)=>{
            const n = (e,t,o)=>{
                const s = vt(e, t)
                  , r = s ? Et(s) : void 0;
                let i;
                return r ? r.enumerable ? r.value : void 0 : --o >= 0 && (i = ht(e)) ? n(i, t, o) : void 0
            }
            ;
            return n(e, t, 5)
        }
          , Rt = e=>{
            const t = (t,...n)=>Mt(e, t, n);
            return Ot(t, "wrappedJSObject", e),
            t
        }
          , It = ()=>e=>Rt(e)
          , Dt = Rt(a)
          , Ct = R
          , jt = e=>{
            const t = (e,n)=>{
                let o;
                if (null === e)
                    o = "null";
                else if ("object" == typeof e) {
                    if (n) {
                        if (-1 != Bt(n, e))
                            throw "Converting circular structure to JSON";
                        Ot(n, n.length, e)
                    } else
                        n = [e];
                    if (bt(e)) {
                        let s = "";
                        for (let o = 0; o < e.length; o++) {
                            let r;
                            r = kt(e, o) ? Lt(e, o) : xt(e, o);
                            const i = t(r, n);
                            s += `${o ? "," : ""}${void 0 === i ? "null" : i}`
                        }
                        o = `[${s}]`
                    } else {
                        let s = "";
                        Ft(pt(e), (o=>{
                            const r = t(e[o], n);
                            void 0 !== r && (s += `${s ? "," : ""}${I(o)}: ${r}`)
                        }
                        )),
                        o = `{${s}}`
                    }
                    n.length -= 1
                } else
                    o = I(e);
                return o
            }
            ;
            return t(e)
        }
          , Pt = It()(l)
          , Tt = It()(u)
          , At = (It()(m),
        It()(g),
        (e,t,n)=>{
            const o = e.length;
            let s = t || 0;
            if (s >= o)
                return [];
            s < 0 && (s = yt(0, o + s));
            let r = void 0 === n ? o : n;
            r < 0 && (r = yt(0, o + r)),
            r > o && (r = o);
            const i = Et({});
            for (let t = s; t < r; t++)
                i[t] = St(e, t);
            return mt(i)
        }
        )
          , $t = It()(p)
          , Ut = (e,...t)=>{
            let n = e.length;
            const o = Et(e);
            for (let e = 0; e < t.length; e++) {
                const s = t[e]
                  , r = bt(s) ? s : [s];
                for (let e = 0; e < r.length; e++)
                    o[n + e] = St(r, e);
                n += r.length
            }
            return mt(o)
        }
          , Nt = (e,t)=>{
            let n = e.length || 0;
            return Ot(e, n, t),
            n++,
            e.length = n
        }
          , Bt = It()(f)
          , Ft = It()(d)
          , Xt = (e,t)=>{
            const n = [];
            return Ft(e, (e=>{
                Nt(n, t(e))
            }
            )),
            n
        }
          , kt = It()(M)
          , qt = It()(z)
          , Wt = It()(J)
          , Ht = Rt(x)
          , Jt = ht({})
          , Gt = e=>{
            const t = Et(e)
              , n = _t(t);
            for (let e = 0; e < n.length; e++) {
                const o = n[e]
                  , s = t[o];
                null !== s && "object" == typeof s && ht(s) === Jt && (t[o] = Gt(s))
            }
            return t
        }
          , Kt = e=>{
            const t = qt(Ht(e), " ");
            return Wt($t(At(t, 1), " "), 0, -1)
        }
          , zt = It()(c)
          , Vt = It()(P)
          , Yt = T
          , Zt = It()($)
          , Qt = It()(N)
          , en = (It()(B),
        It()(F),
        It()(X),
        It()(k),
        q && It()(q),
        W && It()(W),
        H)
          , tn = It()(G)
          , nn = It()(K)
          , on = (It()(V),
        It()(Y || function(e, t) {
            return $t(qt(this, e), t)
        }
        ))
          , sn = It()(Z)
          , rn = (It()(Q),
        It()(ee),
        Rt(ne),
        Rt(oe),
        Rt(se))
          , an = Rt(re)
          , cn = Rt(ie)
          , dn = (Rt(ae),
        Rt(ce),
        Rt(de))
          , ln = Rt(le)
          , un = Rt(ue)
          , pn = me
          , mn = (It()(ge),
        It()(fe),
        ye)
          , gn = He
          , fn = Ve
          , _n = st
          , vn = function(e, t) {
            return St(e, t)
        }
          , hn = Et({
            addEventListener: !1,
            Array: !0,
            Blob: !0,
            close: !1,
            CustomEvent: !0,
            Date: !0,
            DOMParser: !0,
            Error: !0,
            Event: !0,
            FileReader: !0,
            KeyboardEvent: !0,
            location: !0,
            Math: !0,
            MouseEvent: !0,
            MutationEvent: !0,
            Number: !0,
            Object: !0,
            Promise: !0,
            ReadableStream: !0,
            removeEventListener: !1,
            Uint8Array: !0,
            XMLHttpRequest: !0
        })
          , bn = (()=>{
            const e = Et({
                getElementById: ke,
                createEvent: qe,
                createElement: We,
                dispatchEvent: Ue,
                addEventListener,
                removeEventListener
            })
              , t = Et({});
            return Ft(pt(e), (n=>{
                try {
                    const o = e[n];
                    t[n] = function(...e) {
                        return Mt(o, Mn.document, e)
                    }
                } catch (e) {
                    t[n] = ((e,t)=>{
                        if (On.error(`Tampermonkey sandbox preparation ${t ? "(" + t + ") " : ""}failed. This usually is caused by a third-party extension.`, e),
                        t)
                            return ()=>{}
                    }
                    )(e, `document.${n}`)
                }
            }
            )),
            t
        }
        )()
          , wn = Et({
            top: !0,
            location: !0
        })
          , yn = twod
          , {unsafeWindow: Mn, unsafeThis: En} = yn;
        twod.bridges = twod.bridges || Et({});
        const On = twod.console = twod.console || Et({})
          , Ln = Et({
            addEventListener: Dt(Ee, Mn),
            removeEventListener: Dt(Oe, Mn)
        });
        Ft(pt(wn), (async e=>{
            if (!Ln[e])
                try {
                    const t = Mn[e];
                    if (null == t)
                        return;
                    Ln[e] = t
                } catch (e) {}
        }
        )),
        Ft(pt(hn), (async e=>{
            if (!Ln[e])
                try {
                    let t = St(Mn, e);
                    if (void 0 === t && (En === Mn || void 0 === (t = St(En, e))))
                        return;
                    const n = hn[e];
                    Ln[e] = !1 === n && "function" == typeof t ? Dt(t, En) : t
                } catch (e) {}
        }
        ));
        const Sn = e=>{
            let t, n = [], o = !1;
            e((e=>{
                if (!o) {
                    if (n.length) {
                        const t = n;
                        n = [],
                        Ft(t, (t=>t(e)))
                    } else
                        t = e;
                    o = !0
                }
            }
            ));
            const s = Et({
                then: e=>(o ? e(t) : Nt(n, e),
                s)
            });
            return s
        }
          , xn = ()=>Zt(mn() + 19831206 * wt() + 1, 36)
          , Rn = async e=>{
            await null,
            e()
        }
          , In = (()=>{
            const {console: e, bridges: t} = twod
              , n = Et({});
            let o;
            const s = (e,t)=>{
                let o = []
                  , s = [];
                const r = ()=>{
                    o = [],
                    s = [],
                    i = null,
                    delete n[e]
                }
                ;
                let i = Et({
                    postMessage: n=>{
                        t.send("port.message", Et({
                            response_id: e,
                            value: n
                        }))
                    }
                    ,
                    onMessage: Et({
                        addListener: e=>{
                            Nt(o, e)
                        }
                    }),
                    onDisconnect: Et({
                        addListener: e=>{
                            Nt(s, e)
                        }
                    }),
                    disconnect: ()=>{
                        t.send("port.message", Et({
                            response_id: e,
                            disconnect: !0
                        })),
                        r()
                    }
                });
                return n[e] = Et({
                    message: e=>{
                        o && Ft(o, (t=>t(e)))
                    }
                    ,
                    disconnect: ()=>{
                        s && Ft(s, (e=>e())),
                        r()
                    }
                }),
                i
            }
            ;
            return Et({
                message: (t,r)=>{
                    let i;
                    if (t.connect) {
                        if (!t.destination || !t.response_id)
                            throw "invalid message";
                        o && o(t.destination, s(t.response_id, r))
                    } else {
                        if (!t.response_id)
                            throw "invalid message";
                        if (!(i = n[t.response_id]))
                            return void e.warn("ports: unkown id", t.response_id, t);
                        t.disconnect ? i.disconnect() : i.message(t.value)
                    }
                }
                ,
                connect: e=>{
                    const n = xn();
                    return t.first.send("port.message", Et({
                        response_id: n,
                        connect: !0,
                        destination: e
                    })),
                    s(n, t.first)
                }
                ,
                onConnect: Et({
                    addListener: e=>{
                        o = e
                    }
                })
            })
        }
        )()
          , {setInterval: Dn, setTimeout: Cn, clearInterval: jn, clearTimeout: Pn, console: Tn, cloneInto: An} = Mn
          , $n = Object.assign({}, Tn)
          , Un = Dn.bind(Mn)
          , Nn = Cn.bind(Mn)
          , Bn = jn.bind(Mn)
          , Fn = (Pn.bind(Mn),
        En == Mn.top)
          , {arrayBuffer: Xn, blob: kn} = Mn.Response.prototype
          , {arrayBuffer: qn} = Mn.Blob.prototype
          , {then: Wn} = Mn.Promise.prototype
          , {fetch: Hn, location: Jn, document: Gn, Response: Kn} = Mn
          , zn = Rt(Xn)
          , Vn = Rt(kn)
          , Yn = Rt(qn)
          , Zn = An
          , Qn = (e,t)=>{
            const n = an(Mn.document, "http://www.w3.org/1999/xhtml", e);
            return "string" == typeof t ? n.append(t) : t && Ft(pt(t), (e=>{
                "textContent" == e ? n.textContent = t[e] : n.setAttribute(e, t[e])
            }
            )),
            n
        }
          , eo = t=>{
            const n = Mn.document;
            if (n.body || "text/xml" == n.contentType)
                t();
            else {
                let n = !1;
                const o = ()=>{
                    n = !0,
                    eo(t)
                }
                  , s = Et({
                    capture: !0,
                    once: !0
                });
                Ln.addEventListener("DOMNodeInserted", o, s),
                e((()=>{
                    n || (Ln.removeEventListener("DOMNodeInserted", o, s),
                    t())
                }
                ))
            }
        }
          , to = t=>{
            e((()=>{
                Nn((()=>t()), 1)
            }
            ))
        }
          , no = (Et({
            encode: e=>Pe(Re(e)),
            decode: e=>Ie(je(e))
        }),
        Et({
            encode: e=>{
                let t = "";
                for (let n = 0; n < e.length; n++)
                    t += en(255 & sn(e, n));
                return Ae(t)
            }
            ,
            decode: e=>Te(e)
        }),
        e=>void 0 !== St(e, "objUrl"))
          , oo = e=>void 0 !== St(e, "blob")
          , so = e=>void 0 !== St(e, "dataUri")
          , ro = ["chrome"];
        let io, ao, co, lo, uo, po;
        uo = ()=>{
            if (void 0 !== ao)
                return ao;
            try {
                ao = -1 != navigator.userAgent.indexOf("Mac OS X")
            } catch (e) {}
            return ao
        }
        ,
        lo = ()=>{
            if (void 0 !== io)
                return io;
            try {
                const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                e && (io = parseInt(e[2]))
            } catch (e) {}
            return io
        }
        ,
        po = ()=>{
            if (void 0 !== co)
                return co;
            try {
                co = -1 != navigator.userAgent.search(/Android|Mobile/)
            } catch (e) {}
            return co
        }
        ;
        const mo = (lo(),
        !1)
          , go = ["chrome-extension:"]
          , fo = globalThis
          , {chrome: _o, browser: vo} = fo
          , ho = ([].concat(["chrome"]),
        function(e) {
            {
                const t = document.createElementNS(document.lookupNamespaceURI(null) || "http://www.w3.org/1999/xhtml", "script");
                t.textContent = e,
                (document.head || document.body || document.documentElement || document).appendChild(t);
                const n = t.parentNode;
                n && n.removeChild(t)
            }
        }
        )
          , bo = (()=>{
            const e = {
                getInternalPathRegexp: function(e, t) {
                    const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")","g")
                      , o = go[0] + "//" + bo.id + "/";
                    return new RegExp(o.replace(n, "\\$1") + "([a-zA-Z" + (e ? "\\/" : "") + "]*)" + (t || "").replace(n, "\\$1"))
                },
                getInternalPageRegexp: function() {
                    return bo.getInternalPathRegexp(!1, ".html")
                }
            };
            return Object.defineProperty(e, "lastError", {
                get: ()=>_o.runtime.lastError,
                enumerable: !0
            }),
            Object.defineProperty(e, "id", {
                get: ()=>_o.runtime.id,
                enumerable: !0
            }),
            Object.defineProperty(e, "short_id", {
                get: ()=>e.id.replace(/[^0-9a-zA-Z]/g, "").substr(0, 4),
                enumerable: !0
            }),
            e
        }
        )()
          , wo = (()=>{
            const e = {
                getURL: function(e) {
                    return _o.runtime.getURL(e)
                },
                sendMessage: function(e, t) {
                    return _o.runtime.sendMessage(e, t)
                },
                onMessage: {
                    addListener: function(e) {
                        return _o.runtime.onMessage.addListener(e)
                    }
                },
                connect: function(e) {
                    return _o.runtime.connect({
                        name: e
                    })
                }
            };
            let t;
            return Object.defineProperty(e, "inIncognitoContext", {
                get: ()=>(void 0 === t && (t = _o.extension.inIncognitoContext),
                t),
                set: e=>{
                    t = e
                }
                ,
                enumerable: !0
            }),
            e
        }
        )();
        let yo;
        const {console: Mo} = twod
          , Eo = Et({
            setInterval: e=>{
                let t;
                e.onMessage.addListener((n=>{
                    "setInterval" == n.method && (t = Un(e.postMessage, n.t))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t && Bn(t),
                    t = null
                }
                ))
            }
            ,
            registerMenuCommand: e=>{
                const t = wo.connect("registerMenuCommand");
                t.onMessage.addListener((n=>{
                    if (null !== t) {
                        const {method: t, event: o} = n;
                        e.postMessage(Et({
                            method: t,
                            event: o
                        }))
                    }
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if ("register" !== e.method)
                        return;
                    const {name: n, uuid: o, accessKey: s} = e
                      , r = $t([yo, n, o], "#");
                    t.postMessage(Et({
                        method: "registerMenuCommand",
                        name: n,
                        uuid: o,
                        menuId: r,
                        accessKey: s
                    }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            openInTab: e=>{
                const t = wo.connect("openInTab");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if ("openTab" == e.method) {
                        let n = e.url;
                        const {active: o, loadInBackground: s, insert: r, incognito: i, setParent: a} = "boolean" == typeof e.options || void 0 === e.options ? Et({
                            loadInBackground: e.options
                        }) : e.options
                          , c = void 0 === o ? void 0 !== s && !s : o
                          , d = void 0 === r || r;
                        n && "//" == tn(n, 0, 2) && (n = Jn.protocol + n),
                        t.postMessage(Et({
                            method: "openInTab",
                            details: Et({
                                url: n,
                                options: Et({
                                    active: !!c,
                                    insert: !!d,
                                    incognito: !!i,
                                    setParent: !i && !!a
                                })
                            }),
                            uuid: e.uuid
                        }))
                    } else
                        void 0 !== e.name ? t.postMessage(Et({
                            name: e.name,
                            uuid: e.uuid
                        })) : e.focus ? t.postMessage(Et({
                            focus: !0,
                            uuid: e.uuid
                        })) : e.close && t.postMessage(Et({
                            close: !0,
                            uuid: e.uuid
                        }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            download: e=>{
                const t = wo.connect("download");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if (e.cancel)
                        t.postMessage(Et({
                            cancel: !0,
                            id: yo,
                            uuid: e.uuid
                        }));
                    else {
                        let {url: n, ...o} = e.details;
                        n && "/" === tn(n, 0, 1) && (n = Jn.origin + n),
                        t.postMessage(Et({
                            method: "download",
                            details: Et({
                                ...o,
                                from: Et({
                                    url: n
                                })
                            }),
                            id: yo,
                            uuid: e.uuid
                        }))
                    }
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            webRequest: e=>{
                const t = wo.connect("webRequest");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(Et({
                        method: "webRequest",
                        rules: e.rules,
                        uuid: e.uuid
                    }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            xhr: e=>{
                let t, n;
                const o = []
                  , s = async e=>{
                    if (e && Nt(o, e),
                    n)
                        await n,
                        s();
                    else {
                        const e = Tt(o);
                        e && e()
                    }
                }
                  , r = wo.connect("xhr");
                r.onMessage.addListener((t=>{
                    s((()=>{
                        const {onpartial: o, data: s, ...r} = t;
                        let i;
                        if (o && s) {
                            const {tfd: t} = s;
                            if (t) {
                                const s = (e=>e && (oo(e) || no(e) || so(e)) ? (e=>{
                                    let t, n, o;
                                    if (no(e))
                                        t = e.objUrl.url;
                                    else if (oo(e))
                                        n = e.blob;
                                    else {
                                        if (!so(e))
                                            throw "incompatible TransferableData";
                                        o = e.dataUri
                                    }
                                    return Et({
                                        toBlob: ()=>Sn((e=>{
                                            if (n)
                                                e(n);
                                            else if (t)
                                                try {
                                                    Qt(Hn(t), (t=>{
                                                        Qt(Vn(t), (t=>{
                                                            e(t)
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                } catch (t) {
                                                    e(void 0)
                                                }
                                            else {
                                                if (!o)
                                                    throw "incompatible Transferable";
                                                e((e=>{
                                                    let t;
                                                    const n = qt(e, ",")
                                                      , o = vn(n, 0)
                                                      , s = vn(n, 1);
                                                    t = -1 != nn(o, "base64") ? Te(s) : Pe(s);
                                                    const r = vn(qt(o, ":"), 1)
                                                      , i = vn(qt(r, ";"), 0);
                                                    return new _n([t],Et({
                                                        type: i
                                                    }))
                                                }
                                                )(o))
                                            }
                                        }
                                        )),
                                        dispose: ()=>{
                                            t && pn(t),
                                            t = n = o = void 0
                                        }
                                    })
                                }
                                )(e) : void 0)(t);
                                if (!s)
                                    return;
                                return void (n = Sn((async t=>{
                                    const a = ()=>{
                                        n = null,
                                        t(),
                                        s && s.dispose()
                                    }
                                    ;
                                    try {
                                        const t = await s.toBlob();
                                        if (!t)
                                            return void a();
                                        const n = t.type;
                                        let c;
                                        if (c = "arrayBuffer"in t ? await Yn(t) : await zn(new Kn(t)),
                                        !c)
                                            return void a();
                                        i = Et({
                                            nada: Et({
                                                buffer: c,
                                                type: n
                                            })
                                        }),
                                        e.postMessage(Et({
                                            ...r,
                                            onpartial: o,
                                            data: i
                                        })),
                                        a()
                                    } catch (e) {
                                        Mo.warn(e),
                                        a()
                                    }
                                }
                                )))
                            }
                            i = s
                        } else
                            i = s;
                        e.postMessage(Et({
                            ...r,
                            onpartial: o,
                            data: i
                        }))
                    }
                    ))
                }
                )),
                r.onDisconnect.addListener((()=>{
                    s((async()=>{
                        e.disconnect()
                    }
                    ))
                }
                )),
                e.onMessage.addListener((e=>{
                    t = t || e.details,
                    r.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    r.disconnect()
                }
                ))
            }
            ,
            onurlchange: e=>{
                const t = wo.connect("onurlchange");
                let n = ()=>{
                    e.postMessage(Et({
                        url: Mn.document.location.href
                    }))
                }
                ;
                const o = ()=>{
                    n && (Ln.removeEventListener("hashchange", n),
                    n = null)
                }
                ;
                Ln.addEventListener("hashchange", n),
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect(),
                    o()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect(),
                    o()
                }
                ))
            }
            ,
            values: e=>{
                const t = wo.connect("values");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
        })
          , Oo = Et({
            setTimeout: ({args: e, cb: t})=>{
                Nn(t, e.t)
            }
            ,
            setClipboard: ({args: e, cb: t})=>{
                const {content: n, info: o, uuid: s} = e;
                let r, i;
                "object" == typeof o ? (o.type && (r = o.type),
                o.mimetype && (i = o.mimetype)) : "string" == typeof o && (r = o);
                const a = i || ("html" == r ? "text/html" : "text/plain");
                mo ? wo.sendMessage(Et({
                    method: "clipboard",
                    mimetype: a,
                    content: n,
                    uuid: s
                }), (()=>t())) : (Mn.document.addEventListener("copy", (e=>{
                    e.stopImmediatePropagation(),
                    e.preventDefault(),
                    e.clipboardData && e.clipboardData.setData(a, n)
                }
                ), Et({
                    capture: !0,
                    once: !0
                })),
                Mn.document.execCommand("copy"),
                t())
            }
            ,
            notification: ({args: e, cb: t})=>{
                e.method = "notification",
                wo.sendMessage(e, (e=>t(e)))
            }
            ,
            closeTab: ({args: {uuid: e}, cb: t})=>{
                wo.sendMessage(Et({
                    method: "closeTab",
                    uuid: e,
                    id: yo
                }), (e=>{
                    e && e.error && Mo.warn(e.error),
                    t(e)
                }
                ))
            }
            ,
            focusTab: ({args: {uuid: e}, cb: t})=>{
                wo.sendMessage(Et({
                    method: "focusTab",
                    uuid: e,
                    id: yo
                }), (e=>{
                    e && e.error && Mo.warn(e.error),
                    t(e)
                }
                ))
            }
            ,
            addElement: async({args: t, node: n, cb: o})=>{
                try {
                    const s = Qn(t.tag, Et({
                        ...t.properties || Et({}),
                        ...t.id ? Et({
                            id: t.id
                        }) : Et({})
                    }));
                    let r;
                    if (n)
                        r = n;
                    else {
                        const t = Mn.document;
                        if (r = t.head || t.body || t.documentElement,
                        !r) {
                            const t = Mn.document;
                            r = await Sn((n=>e((()=>n(t.head || t.body)))))
                        }
                    }
                    r.appendChild(s),
                    o()
                } catch (e) {
                    Mo.warn("content: error adding script", e)
                }
            }
            ,
            tabs: ({args: e, cb: t})=>{
                e.method = "tabs",
                wo.sendMessage(e, (e=>e && t(e.data)))
            }
            ,
            cookie: ({args: e, cb: t})=>{
                e.method = "cookie",
                wo.sendMessage(e, (e=>e && t(e.data)))
            }
        })
          , Lo = Et({
            init: ()=>{
                yo = twod.contextId
            }
            ,
            processMessage: ({method: e, args: t, node: n},o)=>{
                let s;
                if (s = Oo[e])
                    return s(Et({
                        args: t,
                        node: n,
                        cb: o
                    }));
                o()
            }
            ,
            processConnect: (e,t)=>{
                let n;
                if (n = Eo[e])
                    return n(t)
            }
        })
          , So = ["GM_info", "GM.info"]
          , xo = ["unsafeWindow", ...So]
          , Ro = e=>on(on(e, '"', '\\"'), "'", "\\'")
          , Io = (t,n,o,s,r,i)=>{
            const {console: a} = twod
              , {measure_scripts: c, top_level_await: d, enforce_strict_mode: l, version: u, injectMode: p, inIncognitoContext: m, isFirstPartyIsolation: g, downloadMode: f, container: _, logLevel: v} = t
              , h = Et({
                version: u,
                injectMode: p,
                inIncognitoContext: m,
                isFirstPartyIsolation: g,
                downloadMode: f,
                container: _
            });
            Ft(n, (async t=>{
                const {source_url: n, script: u, code: p, storage: m} = t
                  , {name: g, uuid: f, options: {run_at: _}, grant: b} = u
                  , {requires: w, ...y} = u
                  , M = !u.options.unwrap
                  , E = Et({
                    ...h,
                    logLevel: v,
                    sandboxMode: r
                });
                let O, L;
                const S = $t(Xt(w, (e=>Lt(e, "textContent") || "")), "\n");
                if (M) {
                    let e = "";
                    const t = ["define", "module", "exports"]
                      , r = Xt(t, (()=>"undefined"))
                      , f = -1 !== Bt(u.grant, "none");
                    let _;
                    _ = f ? So : Ut(b, xo),
                    Ft(_, (e=>{
                        const n = vn(qt(e, "."), 0);
                        "window" !== n && -1 === Bt(t, n) && (Nt(t, n),
                        Nt(r, `p.${n}`))
                    }
                    ));
                    const v = $t([`with (${f ? "this.s" : "this"}) {`, "(async (u, { p, r, s }) => {", "try {", c ? `console.time("${e = `SCRIPT RUN TIME[${Ro(g)}]`}");\n` : "", "r(u, s, [", $t(r, ","), "]);", c ? `console.timeEnd("${e}");\n` : "", "} catch (e) {", "if (e.message && e.stack) {", "console.error(\"ERROR: Execution of script '", Ro(g), "' failed! \" + e.message);", "console.log(e.stack);", "} else {", "console.error(e);", "}", "}", "})", "(", (d ? "async " : "") + "function(", $t(t, ","), ") {", l ? '"use strict";\n' : "\n", S, p, "\n", `}, ${f ? "this" : "seed"})`, "}", "\n", n ? `//# sourceURL=${n}\n` : ""], "");
                    O = ()=>{
                        i && a.debug(`env: inject "${g}" now`);
                        const e = `__f__${xn()}`
                          , t = Et({
                            storage: m,
                            script: y
                        })
                          , n = `window["${e}"] = function(){${v}}`;
                        s.send("script", Et({
                            id: e,
                            bundle: t,
                            flags: E
                        })),
                        o(n)
                    }
                } else
                    L = ()=>{
                        i && a.debug(`env: inject @unwrap "${g}" now`);
                        const e = $t([S, p, "\n", n ? `//# sourceURL=${n}\n` : ""], "");
                        o(e)
                    }
                    ;
                let x;
                if ("document-start" == _) {
                    if (i && a.debug(`env: run "${g}" ASAP -> document-start`),
                    L)
                        return void L()
                } else
                    "document-body" == _ ? (i && a.debug(`env: schedule "${g}" for document-body`),
                    x = eo) : "context-menu" == _ ? i && a.debug(`env: run "${g}" ASAP -> context-menu`) : "document-end" == _ ? (i && a.debug(`env: schedule "${g}" for document-end`),
                    x = t=>e(!1, t)) : (i && a.debug(`env: schedule "${g}" for document-idle`),
                    x = to);
                O && O(),
                x && x((()=>{
                    L ? L() : (i && a.debug(`env: run "${g}" now`),
                    s.send("run", Et({
                        uuid: f
                    })))
                }
                ))
            }
            ))
        }
          , Do = _o.userScripts && _o.userScripts.onBeforeScript ? {
            supported: !0,
            onBeforeScript: {
                addListener: e=>_o.userScripts.onBeforeScript.addListener(e)
            }
        } : {
            supported: !1
        }
          , Co = ({sendPrefix: e, listenPrefix: t, send: n, onMessage: o})=>{
            if (void 0 === n || void 0 === o)
                throw "invalid args";
            let s, r, i = 1;
            const a = Et({})
              , c = e=>{
                e && (s = e)
            }
              , d = e=>{
                const t = ++i;
                return a[i] = e,
                t
            }
            ;
            o(((o,i)=>o == `${t}_${s}` ? (t=>{
                const {m: o, r: i, a: c} = t;
                if ("message.response" == o) {
                    if (null == i)
                        throw "Invalid Message";
                    ((e,t)=>{
                        let n;
                        e && (n = a[e]) && (n(t),
                        delete a[e])
                    }
                    )(i, c)
                } else if (r) {
                    const a = i ? t=>{
                        n(`${e}_${s}`, Et({
                            m: "message.response",
                            a: t,
                            r: i
                        }))
                    }
                    : ()=>{}
                    ;
                    r(Et({
                        method: o,
                        args: c,
                        node: "MutationEvent" === Kt(t) ? ln(t) : void 0
                    }), a)
                }
            }
            )(i) : null));
            const l = Et({
                init: async e=>{
                    s ? c() : c(e)
                }
                ,
                refresh: ()=>null,
                switchId: e=>{
                    s && l.cleanup(),
                    c(e)
                }
                ,
                send: (t,o,r,i)=>{
                    let a, c;
                    "function" != typeof r && null !== r ? (a = r,
                    c = i) : c = r,
                    n(`${e}_${s}`, Et({
                        m: t,
                        a: o,
                        r: c ? d(c) : null,
                        n: a
                    }))
                }
                ,
                sendToId: (t,o,s)=>{
                    n(`${e}_${t}`, Et({
                        m: o,
                        a: s,
                        r: null
                    }))
                }
                ,
                setMessageListener: e=>{
                    r = e
                }
                ,
                cleanup: ()=>null
            });
            return l
        }
          , jo = Do
          , Po = Do.supported && !Mn.pagejs;
        let To;
        const Ao = (e,t)=>{
            try {
                To(e),
                t && t(!0)
            } catch (e) {
                t && t(!1)
            }
        }
          , $o = "u" + xn()
          , {bridges: Uo} = twod;
        let No = [];
        const Bo = e=>{
            jo.onBeforeScript.addListener((o=>{
                const s = (e,n)=>{
                    Ft(t, (t=>t(e, n)))
                }
                  , r = e=>Nt(n, Et({
                    listener: e,
                    clone: o.export
                }));
                ft(o.global, "pagejs", Et({
                    set: o.export((t=>{
                        delete o.global.pagejs;
                        const n = o.metadata;
                        Ft(No, (e=>e(t, n))),
                        No = [],
                        n.js && (t(o.export(Et({
                            unsafeWindow: o.global,
                            unsafeThis: o.global.window,
                            pageWindow: void 0,
                            contextId: $o,
                            fSend: s,
                            fOnMessage: r,
                            cloneInto: void 0
                        }))),
                        Uo.js.sendToId($o, "commid", Et({
                            id: e
                        })))
                    }
                    )),
                    configurable: !0
                })),
                To = o.global.eval
            }
            ));
            const t = []
              , n = []
              , o = (e,t)=>{
                Ft(n, (({listener: n, clone: o})=>n(e, o(t))))
            }
              , s = e=>Nt(t, e);
            return Et({
                createBridge: ()=>{
                    const t = Co(Et({
                        sendPrefix: "2S",
                        listenPrefix: "2U",
                        cloneInto: Zn,
                        send: o,
                        onMessage: s
                    }));
                    return t.init(e),
                    t
                }
            })
        }
          , Fo = e=>{
            let t = n=>{
                delete Mn.pagejs,
                t = void 0,
                e(n)
            }
            ;
            ft(Mn, "pagejs", Et({
                set: t,
                configurable: !0
            })),
            Nn((()=>{
                t && t()
            }
            ), 1)
        }
          , Xo = (e,t)=>{
            const n = (e,t)=>{
                Ft(s, (n=>n(e, t)))
            }
              , o = e=>Nt(r, Et({
                listener: e,
                clone: e=>e
            }))
              , s = []
              , r = []
              , i = (e,t)=>{
                Ft(r, (({listener: n, clone: o})=>n(e, o(t))))
            }
              , a = e=>Nt(s, e)
              , c = "c" + xn();
            let d;
            return Et({
                createBridge: ()=>(d = Co(Et({
                    sendPrefix: "2S",
                    listenPrefix: "2U",
                    send: i,
                    onMessage: a
                })),
                d.init(e),
                d),
                inject: ()=>{
                    t(Et({
                        unsafeWindow: Mn,
                        unsafeThis: En,
                        pageWindow: void 0,
                        contextId: c,
                        fSend: n,
                        fOnMessage: o
                    })),
                    d.sendToId(c, "commid", Et({
                        id: e
                    }))
                }
            })
        }
          , ko = (e,t)=>{
            let n, o = !1;
            try {
                n = (0,
                eval)(e),
                o = !0
            } catch (e) {}
            return t && t(o),
            n
        }
        ;
        let qo = !1;
        const Wo = location.pathname + location.search
          , Ho = "TM_" + bo.short_id + window.btoa(Wo.length + Wo).substr(0, 255).replace(/[#=/]/g, "_")
          , Jo = ()=>{
            let e, t, n, o;
            try {
                o = document.cookie.split(";")
            } catch (e) {
                return
            }
            for (e = 0; e < o.length; e++)
                if (t = o[e].substr(0, o[e].indexOf("=")),
                n = o[e].substr(o[e].indexOf("=") + 1),
                t = t.replace(/^\s+|\s+$/g, ""),
                0 === t.indexOf(Ho)) {
                    document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    const e = Ie(n);
                    if (0 !== e.indexOf("blob:"))
                        continue;
                    let o;
                    try {
                        if (0 !== (new URL(e).origin + "/").indexOf(wo.getURL("/")))
                            continue;
                        if (o = new XMLHttpRequest,
                        o.open("GET", e, !1),
                        o.send(null),
                        200 === o.status || 0 === o.status)
                            return JSON.parse(o.responseText)
                    } catch (e) {
                        console.warn("content: unable to decode " + (o && o.responseText || "unknown"))
                    }
                }
        }
          , Go = document.contentType && "text/html" != document.contentType;
        let Ko = !1;
        const zo = (t,n)=>{
            const {contextId: o, bridges: s, console: r} = twod;
            Sn((e=>{
                const n = t=>{
                    let n = 1;
                    const s = ()=>{
                        qo && r.log('content: send "prepare" message'),
                        wo.sendMessage({
                            method: "prepare",
                            id: o,
                            topframe: Fn,
                            types: Po ? ["js"] : ["dom", "raw"],
                            url: window.location.href
                        }, (o=>{
                            if (!Ko) {
                                if (!o)
                                    return qo && r.log("content: _early_ execution, connection to bg failed -> retry!"),
                                    window.setTimeout(s, n),
                                    void (n *= 2);
                                Ko = !0,
                                pt(o.contexters).length || pt(o.scripts).length || o.external_connect ? (t && t(),
                                e({
                                    info: o,
                                    type: "complete" == rn(Mn.document) ? "late" : "normal"
                                })) : e({
                                    info: o
                                })
                            }
                        }
                        ))
                    }
                    ;
                    !function(e) {
                        const t = ()=>"prerender" !== document.webkitVisibilityState
                          , n = ()=>{
                            t() && (document.removeEventListener("webkitvisibilitychange", n, !1),
                            e())
                        }
                        ;
                        t() ? e() : document.addEventListener("webkitvisibilitychange", n, !1)
                    }(s)
                }
                  , s = ()=>{
                    let s;
                    if (qo && r.log("content: Started (" + o + ", " + window.location.origin + window.location.pathname + ")", En.tm_info),
                    (s = Jo()) || (s = En.tm_info)) {
                        if (delete En.tm_info,
                        pt(s.contexters).length || pt(s.scripts).length || s.external_connect) {
                            if (s.contexters.raw || s.scripts.raw) {
                                if (!t.raw)
                                    throw "raw inject missing";
                                t.raw()
                            }
                            e({
                                info: s,
                                type: "sync"
                            })
                        } else
                            e({
                                info: s
                            });
                        wo.sendMessage({
                            method: "prepare",
                            url: window.location.href,
                            cleanup: !0
                        }, (()=>null))
                    } else
                        Go ? n((()=>{
                            t.raw && t.raw()
                        }
                        )) : (t.raw && t.raw(),
                        n())
                }
                ;
                Go ? window.setTimeout((()=>s()), 1) : s()
            }
            )).then((({info: i, type: a})=>{
                const {external_connect: c} = i;
                if (c && Rn((()=>s.first.send("external.connect"))),
                a) {
                    qo = qo || i.logLevel >= 60;
                    const c = i.scripts;
                    if (c.js) {
                        if (!t.js)
                            throw "js inject missing";
                        t.js()
                    }
                    if (c.dom) {
                        if (!t.dom)
                            throw "dom inject missing";
                        t.dom()
                    }
                    if (e(!1, (()=>{
                        qo && r.log("content: DOMContentLoaded"),
                        Ft(pt(s), (e=>s[e].send("DOMContentLoaded")))
                    }
                    )),
                    d = ()=>{
                        qo && r.log("content: load"),
                        Ft(pt(s), (e=>s[e].send("load")))
                    }
                    ,
                    "complete" == rn(Mn.document) ? d() : Ln.addEventListener("load", (()=>d()), Et({
                        capture: !0,
                        once: !0
                    })),
                    qo) {
                        const e = (c.dom || []).length + (c.js || []).length + (c.raw || []).length;
                        r.log("content: " + (a || "normal") + " start event processing for " + o + " (" + e + " to run)")
                    }
                    Vo(i),
                    n()
                } else
                    n();
                var d
            }
            ))
        }
          , Vo = e=>{
            const {bridges: t} = twod
              , {scripts: n, ...o} = e;
            n.js && Io(o, n.js, Ao, t.js, "js", qo),
            n.dom && (Ft(ro, (e=>En[e] = void 0)),
            Io(o, n.dom, ko, t.dom, "dom", qo)),
            n.raw && Io(o, n.raw, ho, t.raw, "raw", qo)
        }
          , Yo = async()=>{
            const {contextId: e} = twod
              , {location: t} = Mn;
            Mn.document.addEventListener("mouseenter", (()=>{
                wo.sendMessage(Et({
                    method: "contextmenu",
                    url: t.href,
                    id: e
                }), (()=>{}
                ))
            }
            ), !1)
        }
          , {createEvent: Zo} = bn
          , Qo = ({sendPrefix: t, listenPrefix: o, cloneInto: s})=>{
            let r, i, a, c = 1;
            const d = Et({});
            let l = !1
              , u = [];
            const p = e=>{
                const t = ++c;
                return d[c] = e,
                t
            }
              , m = (e,t)=>{
                const {m: n, a: o, r, n: i} = t
                  , a = ((e,t,n)=>{
                    let o;
                    var r;
                    return n ? (o = Zo("MutationEvent"),
                    Vt(o, e, !1, !1, n || null, void 0, void 0, jt(t), Yt)) : o = new gn(e,Et({
                        detail: (r = t,
                        s ? s(r, Mn.document) : r)
                    })),
                    o
                }
                )(e, Et({
                    m: n,
                    a: o,
                    r
                }), i);
                Mt(Ue, Mn, [a])
            }
              , g = e=>{
                const {m: n, r: o, a: s} = Gt("CustomEvent" == Kt(c = e) ? un(c) : Ct(dn(c)));
                var c;
                if ("bridge.onpurge" == n)
                    Rn((()=>{
                        a !== Mn.document.documentElement && v.refresh()
                    }
                    ));
                else if ("unlock" == n) {
                    l = !1;
                    const e = u;
                    u = [],
                    Ft(e, (e=>e()))
                } else if ("message.response" == n) {
                    if (null == o)
                        throw "Invalid Message";
                    ((e,t)=>{
                        let n;
                        e && (n = d[e]) && (n(t),
                        delete d[e])
                    }
                    )(o, s)
                } else if (r) {
                    const a = o ? e=>{
                        m(`${t}_${i}`, Et({
                            m: "message.response",
                            a: e,
                            r: o
                        }))
                    }
                    : ()=>{}
                    ;
                    r(Et({
                        method: n,
                        args: s,
                        node: "MutationEvent" === Kt(e) ? ln(e) : void 0
                    }), a)
                }
            }
              , f = e=>{
                e && (i = e),
                i && (a = Mn.document.documentElement,
                Ln.addEventListener(`${o}_${i}`, g, !0))
            }
            ;
            let _ = ()=>{}
            ;
            const v = Et({
                init: async o=>{
                    i ? f() : f(o),
                    await e(),
                    n ? (a = Mn.document.documentElement,
                    _ = ()=>{
                        a !== Mn.document.documentElement && (v.refresh(),
                        m(`${t}_${i}`, Et({
                            m: "unlock",
                            a: void 0,
                            r: null
                        })))
                    }
                    ) : Sn((e=>{
                        if (n)
                            throw "not supported";
                        {
                            const t = new fn((n=>{
                                Pt(n, (e=>((e,t)=>{
                                    for (let n = 0, o = e.length; n < o; n++)
                                        if (vn(e, n) === t)
                                            return !0;
                                    return !1
                                }
                                )(e.addedNodes, Mn.document.documentElement))) && (e(Mn.document),
                                t.disconnect())
                            }
                            ));
                            t.observe(Mn.document, Et({
                                childList: !0
                            }))
                        }
                    }
                    )).then((()=>{
                        l = !0,
                        v.send("bridge.onpurge"),
                        v.refresh()
                    }
                    ))
                }
                ,
                refresh: ()=>{
                    const e = i;
                    e && (v.cleanup(),
                    v.init(e))
                }
                ,
                switchId: e=>{
                    i && v.cleanup(),
                    f(e)
                }
                ,
                send: (e,o,s,r)=>{
                    let a, c;
                    "function" != typeof s && null !== s ? (a = s,
                    c = r) : c = s,
                    n && _();
                    const d = ()=>m(`${t}_${i}`, Et({
                        m: e,
                        a: o,
                        r: c ? p(c) : null,
                        n: a
                    }));
                    l ? Nt(u, d) : d()
                }
                ,
                sendToId: (e,n,o)=>{
                    m(`${t}_${e}`, Et({
                        m: n,
                        a: o,
                        r: null
                    }))
                }
                ,
                setMessageListener: e=>{
                    r = e
                }
                ,
                cleanup: ()=>{
                    i && (Ln.removeEventListener(`${o}_${i}`, g, !0),
                    a = void 0,
                    i = void 0)
                }
            });
            return v
        }
          , es = (e,t,n)=>{
            ((e,t)=>{
                const n = vn(cn(Mn.document, "*"), 0) || Mn.document
                  , o = Qn("div")
                  , s = o.attachShadow(Et({
                    mode: "closed"
                }));
                s.appendChild(Qn("style", ":host { display: none }"));
                const r = Qn("iframe", Et({
                    sandbox: "allow-scripts allow-same-origin",
                    style: "display: none",
                    src: "javascript:void 0"
                }));
                let i = ()=>{
                    if (null === i)
                        return;
                    i = null;
                    let n = !1;
                    try {
                        const t = r.contentDocument;
                        if (t) {
                            const o = Qn("script", Et({
                                textContent: e
                            }));
                            vn(t.getElementsByTagName("*"), 0).appendChild(o),
                            n = !0
                        }
                    } catch (e) {}
                    t(o, n),
                    r.remove(),
                    o.remove()
                }
                ;
                r.addEventListener("load", i, Et({
                    once: !0,
                    capture: !0
                })),
                s.appendChild(r),
                n.appendChild(o),
                i && i()
            }
            )(e, ((e,o)=>{
                const s = Qn("script", Et({
                    textContent: t(o)
                }));
                e.appendChild(s),
                n()
            }
            ))
        }
        ;
        let ts;
        (async e=>{
            const {unsafeWindow: n, bridges: o} = twod
              , {location: s} = n;
            if (!Et({
                "http:": !0,
                "https:": !0,
                "file:": !0
            })[n.location.protocol])
                return;
            if (void 0 !== e._content)
                return;
            e._content = !0;
            const r = twod.contextId = xn();
            let i;
            const a = Et({});
            gt(twod.console, $n),
            Sn((e=>{
                if (Po) {
                    const {createBridge: t} = Bo(r);
                    Nt(No, ((n,s)=>{
                        ts = i = n,
                        s.js && (o.js = t(),
                        a.js = ()=>null),
                        e(s)
                    }
                    ))
                } else
                    Sn((e=>{
                        ts = i = n.pagejs,
                        delete n.pagejs,
                        ts ? e() : Fo((t=>{
                            if (!t)
                                throw "Error: pagejs missing. Please see http://tmnk.net/faq#Q208 for more information.";
                            ts = i = t,
                            e()
                        }
                        ))
                    }
                    )).then((()=>{
                        e(Et({
                            js: !1,
                            raw: !0,
                            dom: !0
                        }))
                    }
                    ))
            }
            )).then((({dom: e, raw: c})=>{
                if (e) {
                    const e = Po ? ko(`() => ${i};`)() : i
                      , {createBridge: t, inject: n} = Xo(r, e);
                    a.dom = n,
                    o.dom = t()
                }
                if (c) {
                    const {createBridge: e, inject: n} = ((e,n)=>{
                        let o;
                        return Et({
                            createBridge: ()=>(o = Qo(Et({
                                sendPrefix: "2P",
                                listenPrefix: "2C",
                                cloneInto: Zn
                            })),
                            o),
                            inject: ()=>{
                                o.init(e);
                                const s = xn()
                                  , r = "(" + zt(((e,t)=>{
                                    const n = window
                                      , o = t(n)
                                      , {O_dPy: s, cSO: r} = o;
                                    s(n.parent, e, r({
                                        value: o,
                                        enumerable: !1,
                                        writable: !1,
                                        configurable: !0
                                    }))
                                }
                                )) + ')("' + s + '", ' + zt(t) + ")";
                                es(r, (e=>`(${n})({ unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window, vault: ${e ? `window["${s}"]` : "null"}, contextId: "${s}", __proto__: null });delete window["${s}"]\n`), (()=>{
                                    o.sendToId(s, "commid", Et({
                                        id: e
                                    }))
                                }
                                ))
                            }
                        })
                    }
                    )(r, i);
                    a.raw = n,
                    o.raw = e()
                }
                o.first = o.js || o.raw || o.dom,
                wo.onMessage.addListener(((e,t,r)=>{
                    "executeScript" == e.method ? (e.url && 0 !== nn(s.href, e.url) || void 0 !== e.topframe && e.topframe != Fn || Vo(e.info),
                    r(Et({}))) : Fn && ("loadUrl" == e.method ? (n.location = e.url,
                    r(Et({}))) : "reload" == e.method ? (s.reload(),
                    r(Et({}))) : "setForeignAttr" == e.method ? (o.first.send(e.method, e),
                    r(Et({}))) : $n.log("content: unknown method " + jt(e)))
                }
                )),
                In.onConnect.addListener(((e,t)=>{
                    Lo.processConnect(e, t)
                }
                )),
                Lo.init(),
                Ft(pt(o), (e=>{
                    if ("first" == e)
                        return;
                    const t = o[e];
                    t.setMessageListener(((n,o)=>{
                        const {method: s, args: r} = n;
                        if ("port.message" == s)
                            In.message(r, t);
                        else if ("csp" == s)
                            "raw" == e ? ho(r.src) : "dom" == e ? ko(r.src) : Ao(r.src);
                        else if ("external.message" == s)
                            wo.sendMessage(Et({
                                method: "externalMessage",
                                request: r
                            }), (e=>{
                                o(e)
                            }
                            ));
                        else if ("console" == s) {
                            const e = r
                              , t = vn(e, 0)
                              , n = vn(e, 1)
                              , o = $n[t] || $n.log;
                            o && Mt(o, $n, Ut(["injected:"], Xt(n, (e=>"string" == typeof e ? Ct(e) : e))))
                        } else
                            Lo.processMessage(n, o)
                    }
                    ))
                }
                )),
                zo(a, (()=>ts = void 0)),
                Yo()
            }
            ))
        }
        )(window)
    }
    )();
}
)({
    __proto__: null,
    unsafeWindow: typeof globalThis === "undefined" ? window : globalThis,
    unsafeThis: window
})
