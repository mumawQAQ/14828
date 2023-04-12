// ==UserScript==
// @name        一帆视频去广告
// @description 一帆视频（曾用名 "iF 视频"、"多瑙"）去广告

// @name:en        iFVOD no AD
// @description:en Remove AD on ify.tv (a.k.a. dnvod, iF VOD)

// @match       https://*.iyf.tv/*
// @match       https://*.yifan.tv/*
// @grant       none
// @version     3.2.2
// @author      Jixun Moe<https://jixun.moe/>
// @license     BSD-3-Clause
// @supportURL  https://jixun.moe/userscript/ifun-noad#comments
// @homepageURL https://jixun.moe/userscript/ifun-noad
// @compatible  Chrome   ViolentMonkey
// @run-at      document-start
// @namespace moe.jixun.dn-noad
// ==/UserScript==

//// Injection Parameter ////
const __DEBUG__ = false;
const id = "jixun: have fun :D";

const M = {
  InitUser: "T1Vy",
  PermissionManager: "xMFu",
  StoreState: "AytR",
  Utility: "3My9",
  LegacyRouteLoader: "tyNb",
  RxJS: "lJxs",
  RequestHelper: "tWDZ",
};

const moduleLoadList = new Set(Object.values(M));

//// Injection Parameter ////

const ArrProto = Array.prototype;
const call = Function.prototype.call;
const each = call.bind(ArrProto.forEach);

const injectStyle = () => {
  const s = document.createElement("style");
  s.textContent = `
    .cloppe {
      display: block !important;
    }
    
    .video-player {
      height: unset!important;
    }
    
    .danmu-center {
      min-height: 1005px !important;
      max-width: 300px !important;
    }
    
    vg-pause-ads,
    .player-side.player-right > .ng-star-inserted,
    app-gg-block, app-gg-block.d-block, .overlay-logo
    {
      display: none !important;
    }
  `.replace(/\s+/g, " ");
  document.head.appendChild(s);
};

const defaultAvatar = "https://static.{Host}/upload/up/20170815000037.jpg";
const fakeIp = Array.from(new Array(4), () => (Math.random() * 255) | 0).join(".");
const fakeGid = 9527;
const gidRegex = new RegExp(`gid=${fakeGid}(&|$)`);

const always = (v) => ({
  get: () => v,
  set: () => {},
});

const hideCurrentModule = () => {
  const idx = webpackJsonp.findIndex((module) => module[1][id]);
  webpackJsonp.splice(idx, 1);
};

const myHooks = [
  [
    /* iF-vod 去广告 */
  ],
  {
    [id]: function (module, exports, require) {
      injectStyle();
      hideCurrentModule();

      const requireDefault = (name) => require(name).a;

      const PermissionManager = requireDefault(M.PermissionManager);
      const StoreState = requireDefault(M.StoreState);
      const RequestHelper = requireDefault(M.RequestHelper);
      const Utility = requireDefault(M.Utility);
      const InitUser = requireDefault(M.InitUser);

      PermissionManager.prototype.isValid = () => true;

      Object.defineProperty(StoreState, "allVip", always(true));
      Object.defineProperty(StoreState, "hideAds", always(true));
      Object.defineProperty(StoreState, "disableNotify", always(true));

      const utils = new Utility(window.document);

      const appendUserInfo = RequestHelper.prototype.appendUserInfo;
      RequestHelper.prototype.appendUserInfo = function (url) {
        const data = appendUserInfo.call(this, url);
        for (const [k, v] of Object.entries(data)) {
          data[k] = v.replace(gidRegex, "gid=0$1");
        }
        return data;
      };

      function updateUser(user) {
        if (!user) return;
        Object.defineProperty(user, "userName", always("某用户"));
        Object.defineProperty(user, "nickName", always("某用户"));
        Object.defineProperty(user, "endDays", always(1));

        Object.defineProperty(user, "vipImage", always("jixun:normal-vip.png"));
        Object.defineProperty(user, "sex", always(9));
        Object.defineProperty(user, "nickName", always(""));
        Object.defineProperty(user, "experience", always(0));
        Object.defineProperty(user, "gold", always(0));
        Object.defineProperty(user, "nextLevel", always(99));
        Object.defineProperty(user, "gid", always(99));

        Object.defineProperty(user, "lastIP", always(fakeIp));
        Object.defineProperty(user, "from", always("地球"));
        Object.defineProperty(user, "headImage", always(utils.GetHost(defaultAvatar)));
      }

      // 过部分检测，如 2.0x 倍速
      // 但也有一些 VIP 功能不会弹窗提示而直接报错。
      function fixUser(user) {
        Object.defineProperty(user, "daysOfMembership", always(1));

        // 若 gid 为 0 或 null，设定为预先设定好的 "假" gid。
        if (!user.token.gid) {
          user.token.gid = fakeGid;
        }

        return user;
      }

      const { fromValidateToken, fromGetAuthorizedUserInfo } = InitUser.prototype;

      InitUser.prototype.fromValidateToken = function (user) {
        updateUser(user);
        return fixUser(fromValidateToken.apply(this, arguments));
      };

      InitUser.prototype.fromGetAuthorizedUserInfo = function (user) {
        updateUser(user);
        return fixUser(fromGetAuthorizedUserInfo.apply(this, arguments));
      };

      if (__DEBUG__) {
        window.__require__ = require;
      }
    },
  },
];

const webpackJsonp = (window.webpackJsonp = window.webpackJsonp || []);
let prevPush = webpackJsonp.push;
function webpackPushFilter(args) {
  if (moduleLoadList.size === 0) return;
  const [nextModuleId, modules] = args;

  for (const key in modules) {
    moduleLoadList.delete(key);
  }

  if (moduleLoadList.size == 0) {
    prevPush.call(webpackJsonp, [...myHooks, [[id, nextModuleId]]]);

    // 还原环境
    window.webpackJsonp.push = prevPush;
  }
}
const myPush = function () {
  each(arguments, webpackPushFilter);
  return prevPush.apply(webpackJsonp, arguments);
}.bind(webpackJsonp);
if (Object.hasOwnProperty.call(webpackJsonp, "push")) {
  webpackJsonp.push = myPush;
} else {
  let prevSlice = webpackJsonp.slice;
  webpackJsonp.slice = function () {
    prevPush = webpackJsonp.push;
    webpackJsonp.push = myPush;
    delete window.webpackJsonp.slice;

    return prevSlice.apply(webpackJsonp, arguments);
  }.bind(webpackJsonp);
}

window.webpackJsonp.forEach(webpackPushFilter);

// 过广告屏蔽检测
try {
  Object.defineProperty(window, "isAdsBlocked", always(false));
} catch (err) {
  delete window.isAdsBlocked;
}
