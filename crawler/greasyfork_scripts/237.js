// ==UserScript==
// @name               AdBlock Script for WebView
// @name:zh-CN         套壳油猴的广告拦截脚本
// @author             Lemon399
// @version            2.4.0
// @description        Parse ABP Cosmetic rules to CSS and apply it.
// @description:zh-CN  将 ABP 中的元素隐藏规则转换为 CSS 使用
// @require            https://greasyfork.org/scripts/452263-extended-css/code/extended-css.js?version=1130140
// @resource           jiekouAD https://code.gitlink.org.cn/damengzhu/banad/raw/branch/main/jiekouAD.txt
// @resource           CSSRule https://code.gitlink.org.cn/damengzhu/abpmerge/raw/branch/main/CSSRule.txt
// @match              https://*/*
// @match              http://*/*
// @run-at             document-start
// @grant              unsafeWindow
// @grant              GM_registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM_getValue
// @grant              GM_deleteValue
// @grant              GM_setValue
// @grant              GM_addStyle
// @grant              GM_xmlhttpRequest
// @grant              GM_getResourceText
// @namespace          https://lemon399-bitbucket-io.vercel.app/
// @source             https://gitee.com/lemon399/tampermonkey-cli/tree/master/projects/abp_parse
// @connect            code.gitlink.org.cn
// @copyright          GPL-3.0
// @license            GPL-3.0
// ==/UserScript==

(function (tm, ExtendedCss) {
  "use strict";

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  const onlineRules = [];
  onlineRules.push(
    {
      标识: "jiekouAD",
      地址: "https://code.gitlink.org.cn/damengzhu/banad/raw/branch/main/jiekouAD.txt",
      在线更新: !!1,
      筛选后存储: !!1,
    },
    {
      标识: "CSSRule",
      地址: "https://code.gitlink.org.cn/damengzhu/abpmerge/raw/branch/main/CSSRule.txt",
      在线更新: !!1,
      筛选后存储: !!0,
    }
  );
  let defaultRules = `
! 没有 ## #@# #?# #@?#
! #$# #@$# #$?# #@$?# 的行和
! 开头为 ! 的行会忽略
!
! 由于语法限制，内置规则中
! 一个反斜杠需要改成两个，像这样 \\
!
! 若要修改地址，请注意同步修改
! 头部的 @connect 和 @resource

`;

  const CRRE =
      /^(~?[\w-]+(?:\.[\w-]+)*(?:\.[\w-]+|\.\*)(?:,~?[\w-]+(?:\.[\w-]+)*(?:\.[\w-]+|\.\*))*)?(#@?\$?\??#)([^\s^+].*)/,
    BRRE =
      /^(?:@@?)(\|\|?)?(https?:\/\/)?([^\s"<>`]+?[|^]?)\$((?:~?[\w-]+(?:=[\s\w'":.-]+)?|_+)(?:,(?:~?[\w-]+(?:=[\s\w'":.-]+)?|_+))*)$/,
    CCRE = /^\/\* (.+?) \*\/ /,
    BROpts = [
      "elemhide",
      "ehide",
      "specifichide",
      "shide",
      "generichide",
      "ghide",
    ];
  const CRFlags = ["##", "#@#", "#?#", "#@?#", "#$#", "#@$#", "#$?#", "#@$?#"];
  function bRuleSpliter(rule) {
    const group = rule.match(BRRE),
      body = group[3],
      options = group[4].split(","),
      sepChar = "[!#&'()+,/:;=?@~|{}$]",
      anyChar = '([^\\s"<>`]*)',
      eh = hasSome(options, ["elemhide", "ehide"]),
      sh = hasSome(options, ["specifichide", "shide"]),
      gh = hasSome(options, ["generichide", "ghide"]);
    let urlres = "";
    urlres += group[1]
      ? group[2]
        ? `^${group[2]}`
        : `^https?://((${anyChar}:)?(${anyChar}@))?([\\w-]+\\.)*?`
      : `^${anyChar}`;
    urlres += body
      .replace(/[-\\$+.()[\]{}]/g, "\\$&")
      .replace(/\|$/, "$")
      .replace(/\|/g, "\\|")
      .replace(/\^$/, `(${sepChar}|$)`)
      .replace(/\^/g, sepChar)
      .replace(/\*$/g, "")
      .replace(/\*/g, anyChar);
    return {
      rule: rule,
      match: urlres,
      level: eh ? 3 : gh && sh ? 3 : sh ? 2 : gh ? 1 : 0,
    };
  }
  function isBasicRule(rule) {
    return BRRE.test(rule) && hasSome(rule, BROpts);
  }
  function bRuleParser(rule, url = location.href) {
    return new RegExp(rule.match).test(url) ? rule.level : 0;
  }
  function findMatches(string, res) {
    let result = [-1, null];
    res.forEach((re, i) => {
      const match = string.match(re);
      if (match) result = [i, match];
    });
    return result;
  }
  function getEtag(header) {
    const result = findMatches(header, [
      /(e|E)tag: \"(\w+)\"/,
      // WebMonkey 系
      /(e|E)tag: \[\"(\w+)\"\]/,
      // 书签地球
      /(e|E)tag=\"(\w+)\"/,
    ]);
    return result[1] ? result[1][2] : null;
  }
  function makeRuleBox() {
    return {
      black: [],
      white: [],
    };
  }
  function domainChecker(domains) {
    const results = [],
      invResults = [],
      urlSuffix = /\.+?[\w-]+$/.exec(location.hostname);
    let totalResult = [0, false],
      black = false,
      white = false,
      match = false;
    domains.forEach((domain) => {
      if (domain.endsWith(".*") && Array.isArray(urlSuffix)) {
        domain = domain.replace(".*", urlSuffix[0]);
      }
      const invert = domain[0] == "~";
      if (invert) domain = domain.slice(1);
      const result = location.hostname.endsWith(domain);
      if (invert) {
        if (result) white = true;
        invResults.push([domain.length, !result]);
      } else {
        if (result) black = true;
        results.push([domain.length, result]);
      }
    });
    if (results.length > 0 && !black) {
      match = false;
    } else if (invResults.length > 0 && !white) {
      match = true;
    } else {
      results.forEach((r) => {
        if (r[0] >= totalResult[0] && r[1]) {
          totalResult = r;
        }
      });
      invResults.forEach((r) => {
        if (r[0] >= totalResult[0] && !r[1]) {
          totalResult = r;
        }
      });
      match = totalResult[1];
    }
    return [match, results.length == 0];
  }
  function hasSome(str, arr) {
    return arr.some((word) => str.includes(word));
  }
  function ruleSpliter(rule) {
    var _a;
    const group = rule.match(CRRE);
    if (group) {
      const sel = group[3],
        type = CRFlags.indexOf(group[2]),
        matchResult = !group[1]
          ? [true, true]
          : domainChecker(group[1].split(","));
      if (sel && matchResult[0]) {
        return {
          black: type % 2 ? "white" : "black",
          type: Math.floor(type / 2),
          place: (_a = group[1]) !== null && _a !== void 0 ? _a : "*",
          generic: matchResult[1],
          sel,
        };
      }
    }
  }
  function ruleLoader(rule) {
    if (
      hasSome(rule, [
        ":matches-path(",
        ":min-text-length(",
        ":watch-attr(",
        ":-abp-properties(",
        ":matches-property(",
      ])
    )
      return;
    // 去掉开头空格
    rule = rule.replace(/^ +/, "");
    // 如果 #$# 不包含 {} 就排除
    // 可以尽量排除 Snippet Filters
    if (/(\w|^)#\$#/.test(rule) && !/{.+}/.test(rule)) return;
    // ## -> #?#
    if (
      /(\w|^)#@?#/.test(rule) &&
      hasSome(rule, [
        ":has(",
        ":-abp-has(",
        "[-ext-has=",
        ":has-text(",
        "contains(",
        "-abp-contains(",
        "[-ext-contains=",
        "matches-css(",
        "[-ext-matches-css=",
        "matches-css-before(",
        "[-ext-matches-css-before=",
        "matches-css-after(",
        "[-ext-matches-css-after=",
        "matches-attr(",
        "nth-ancestor(",
        "upward(",
        "xpath(",
        "remove()",
        "not(",
      ])
    ) {
      rule = rule.replace(/(\w|^)##/, "$1#?#").replace(/(\w|^)#@#/, "$1#@?#");
    }
    // :style(...) 转换
    // example.com#?##id:style(color: red)
    // example.com#$?##id { color: red }
    if (rule.includes(":style(")) {
      rule = rule
        .replace(/(\w|^)##/, "$1#$#")
        .replace(/(\w|^)#@#/, "$1#@$#")
        .replace(/(\w|^)#\?#/, "$1#$?#")
        .replace(/(\w|^)#@\?#/, "$1#@$?#")
        .replace(/:style\(/, " { ")
        .replace(/\)$/, " }");
    }
    return ruleSpliter(rule);
  }
  function textToBlobUrl(text) {
    return URL.createObjectURL(new Blob([text]));
  }
  function downUrl(url, name) {
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    Object.assign(a.style, {
      position: "fixed",
      top: "200%",
    });
    document.body.appendChild(a);
    setTimeout(() => {
      a.click();
      a.remove();
    }, 0);
  }

  const data = {
    disabled: false,
    saved: false,
    update: true,
    updating: false,
    receivedRules: "",
    customRules: defaultRules,
    allRules: "",
    presetCss:
      " {display: none !important;width: 0 !important;height: 0 !important;} ",
    genHideCss: "",
    genExtraCss: "",
    spcHideCss: "",
    spcExtraCss: "",
    bRules: {
      levels: [],
      rules: [],
    },
    appliedLevel: 0,
    appliedCount: 0,
    records: [],
    isFrame: tm.unsafeWindow.self !== tm.unsafeWindow.top,
    isClean: false,
    mutex: "__lemon__abp__parser__$__",
    timeout: 6000,
    xTimeout: 700,
    tryCount: 3,
    tryTimeout: 200,
  };

  const values = {
      get black() {
        const arrStr = gmValue("get", false, "ajs_disabled_domains", "");
        return typeof arrStr == "string" && arrStr.length > 0
          ? arrStr.split(",")
          : [];
      },
      set black(v) {
        gmValue(
          "set",
          false,
          "ajs_disabled_domains",
          v === null || v === void 0 ? void 0 : v.join()
        );
      },
      get rules() {
        return gmValue("get", true, "ajs_saved_abprules", {});
      },
      set rules(v) {
        gmValue("set", true, "ajs_saved_abprules", v);
      },
      get css() {
        return gmValue("get", true, `ajs_saved_styles_${location.hostname}`, {
          needUpdate: true,
          genHideCss: "",
          genExtraCss: "",
          spcHideCss: "",
          spcExtraCss: "",
        });
      },
      set css(v) {
        gmValue("set", true, `ajs_saved_styles_${location.hostname}`, v);
      },
      get hasSave() {
        const arrStr = gmValue("get", false, "ajs_hasSave_domains", "");
        return typeof arrStr == "string" && arrStr.length > 0
          ? arrStr.split(",")
          : [];
      },
      set hasSave(v) {
        gmValue(
          "set",
          false,
          "ajs_hasSave_domains",
          v === null || v === void 0 ? void 0 : v.join()
        );
      },
      get time() {
        return gmValue("get", false, "ajs_rules_ver", "0/0/0 0:0:0");
      },
      set time(v) {
        gmValue("set", false, "ajs_rules_ver", v);
      },
      get drlen() {
        return gmValue("get", false, "ajs_drule_length", 0);
      },
      set drlen(v) {
        gmValue("set", false, "ajs_drule_length", v);
      },
      get etags() {
        return gmValue("get", true, "ajs_rules_etags", {});
      },
      set etags(v) {
        gmValue("set", true, "ajs_rules_etags", v);
      },
      get brules() {
        return gmValue("get", true, "ajs_modifier_rules", []);
      },
      set brules(v) {
        gmValue("set", true, "ajs_modifier_rules", v);
      },
    },
    menus = {
      disable: {
        id: undefined,
        get text() {
          return data.disabled ? "在此网站启用拦截" : "在此网站禁用拦截";
        },
      },
      update: {
        id: undefined,
        get text() {
          const time = values.time;
          return data.updating
            ? "正在更新..."
            : `点击更新: ${time.slice(0, 1) === "0" ? "未知时间" : time}`;
        },
      },
      count: {
        id: undefined,
        get text() {
          var _a;
          let cssCount = "";
          if ((data.appliedLevel & 1) == 0)
            cssCount += data.genHideCss + data.genExtraCss;
          if ((data.appliedLevel & 2) == 0)
            cssCount += data.spcHideCss + data.spcExtraCss;
          return data.isClean
            ? "已清空，点击刷新重新加载规则"
            : `${
                data.saved
                  ? "CSS: " +
                    ((_a = cssCount.match(/{/g)) === null || _a === void 0
                      ? void 0
                      : _a.length)
                  : "规则: " +
                    data.appliedCount +
                    "/" +
                    data.allRules.split("\n").length
              }，点击清空规则`;
        },
      },
      export: {
        id: undefined,
        text: "下载统计报告",
      },
    };
  function gmMenu(name, cb) {
    var _a;
    const id = (_a = menus[name].id) !== null && _a !== void 0 ? _a : undefined;
    if (
      typeof tm.GM_registerMenuCommand != "function" ||
      typeof tm.GM_unregisterMenuCommand != "function" ||
      data.isFrame
    )
      return;
    if (typeof id !== "undefined") {
      tm.GM_unregisterMenuCommand(id);
      menus[name].id = undefined;
    }
    if (typeof cb == "function") {
      menus[name].id = tm.GM_registerMenuCommand(menus[name].text, cb);
    }
  }
  function gmValue(action, json, key, value) {
    switch (action) {
      case "get":
        let v;
        try {
          v = tm.GM_getValue(key, json ? JSON.stringify(value) : value);
        } catch (error) {
          return;
        }
        return json && typeof v == "string" ? JSON.parse(v) : v;
      case "set":
        try {
          value === null || value === undefined
            ? tm.GM_deleteValue(key)
            : tm.GM_setValue(key, json ? JSON.stringify(value) : value);
        } catch (error) {
          tm.GM_deleteValue(key);
        }
        break;
    }
  }
  function addStyle(css, pass = 0) {
    let el;
    if (pass >= data.tryCount) return;
    if (typeof tm.GM_addStyle == "function") {
      el = tm.GM_addStyle(css);
    } else {
      el = document.createElement("style");
      el.textContent = css;
      document.documentElement.appendChild(el);
    }
    if (el) {
      setTimeout(() => {
        if (!document.documentElement.contains(el)) {
          addStyle(css, pass + 1);
        }
      }, data.tryTimeout);
    }
  }

  var _a, _b, _c;
  const selectors = makeRuleBox(),
    extSelectors = makeRuleBox(),
    styles = makeRuleBox(),
    extStyles = makeRuleBox(),
    styleBoxes = ["genHideCss", "genExtraCss", "spcHideCss", "spcExtraCss"];
  data.customRules +=
    "\n" +
    ((_c =
      (_b =
        (_a = tm.GM_info.script) === null || _a === void 0
          ? void 0
          : _a.options) === null || _b === void 0
        ? void 0
        : _b.comment) !== null && _c !== void 0
      ? _c
      : "") +
    "\n";
  function promiseXhr(details) {
    return __awaiter(this, void 0, void 0, function* () {
      let loaded = false;
      try {
        return yield new Promise((resolve, reject) => {
          tm.GM_xmlhttpRequest(
            Object.assign(
              {
                onload(e) {
                  loaded = true;
                  resolve(e);
                },
                onabort: reject.bind(null, "abort"),
                onerror(e) {
                  reject({
                    error: "error",
                    resp: e,
                  });
                },
                ontimeout: reject.bind(null, "timeout"),
                onreadystatechange(e) {
                  // X 浏览器超时中断
                  if (e.readyState === 4) {
                    setTimeout(() => {
                      if (!loaded)
                        reject({
                          error: "X timeout",
                          resp: e,
                        });
                    }, data.xTimeout);
                  }
                  // Via 浏览器超时中断，不给成功状态...
                  if (e.readyState === 3) {
                    setTimeout(() => {
                      if (!loaded)
                        reject({
                          error: "Via timeout",
                          resp: e,
                        });
                    }, data.timeout);
                  }
                },
                timeout: data.timeout,
              },
              details
            )
          );
        });
      } catch (error) {}
    });
  }
  function storeRule(rule, resp) {
    const savedRules = values.rules,
      savedEtags = values.etags;
    if (resp.responseHeaders) {
      const etag = getEtag(resp.responseHeaders);
      if (etag) {
        savedEtags[rule.标识] = etag;
        values.etags = savedEtags;
      }
    }
    if (resp.responseText) {
      if (rule.筛选后存储) {
        let parsed = "";
        resp.responseText.split("\n").forEach((rule) => {
          if (CRRE.test(rule) || isBasicRule(rule)) parsed += rule + "\n";
        });
        savedRules[rule.标识] = parsed;
      } else {
        savedRules[rule.标识] = resp.responseText;
      }
      values.rules = savedRules;
      if (Object.keys(values.rules).length === 0) {
        data.receivedRules += "\n" + savedRules[rule.标识] + "\n";
      }
    }
  }
  function fetchRuleBody(rule) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const getResp = yield promiseXhr({
        method: "GET",
        responseType: "text",
        url: rule.地址,
      });
      if (
        getResp &&
        (getResp === null || getResp === void 0
          ? void 0
          : getResp.responseText) &&
        ((_a = getResp.responseText) === null || _a === void 0
          ? void 0
          : _a.length) > 0
      ) {
        storeRule(rule, getResp);
        return true;
      } else return false;
    });
  }
  function fetchRule(rule) {
    return new Promise((resolve, reject) =>
      __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _e;
        const headResp = yield promiseXhr({
          method: "HEAD",
          responseType: "text",
          url: rule.地址,
        });
        if (!headResp) {
          reject("HEAD 失败");
        } else {
          const etag = getEtag(
              typeof headResp.responseHeaders == "string"
                ? headResp.responseHeaders
                : (_b = (_a = headResp).getAllResponseHeaders) === null ||
                  _b === void 0
                ? void 0
                : _b.call(_a)
            ),
            savedEtags = values.etags;
          if (
            (headResp === null || headResp === void 0
              ? void 0
              : headResp.responseText) &&
            ((_e = headResp.responseText) === null || _e === void 0
              ? void 0
              : _e.length) > 0
          ) {
            storeRule(rule, headResp);
            !etag || etag !== savedEtags[rule.标识]
              ? resolve()
              : reject("ETag 一致");
          } else {
            if (!etag || etag !== savedEtags[rule.标识]) {
              (yield fetchRuleBody(rule)) ? resolve() : reject("GET 失败");
            } else reject("ETag 一致");
          }
        }
      })
    );
  }
  function fetchRules(apply) {
    return __awaiter(this, void 0, void 0, function* () {
      const has = values.hasSave;
      let hasUpdate = onlineRules.length;
      data.updating = true;
      gmMenu("update", () => undefined);
      for (const rule of onlineRules) {
        if (rule.在线更新) {
          yield fetchRule(rule).catch((error) => {
            hasUpdate--;
          });
        }
      }
      values.time = new Date().toLocaleString("zh-CN");
      if (has.length > 0 && hasUpdate > 0) {
        has.forEach((host) => {
          const save = gmValue("get", true, `ajs_saved_styles_${host}`);
          save.needUpdate = true;
          gmValue("set", true, `ajs_saved_styles_${host}`, save);
        });
      }
      initRules(apply);
    });
  }
  function performUpdate(force, apply) {
    if (data.isFrame) return Promise.reject();
    return force || new Date(values.time).getDate() !== new Date().getDate()
      ? fetchRules(apply)
      : Promise.resolve();
  }
  function switchDisabledStat() {
    const disaList = values.black;
    data.disabled = !disaList.includes(location.hostname);
    if (data.disabled) {
      disaList.push(location.hostname);
    } else {
      disaList.splice(disaList.indexOf(location.hostname), 1);
    }
    values.black = disaList;
    location.reload();
  }
  function makeInitMenu() {
    gmMenu("update", () =>
      __awaiter(this, void 0, void 0, function* () {
        yield performUpdate(true, false);
        location.reload();
      })
    );
    gmMenu("count", cleanRules);
  }
  function initRules(apply) {
    const abpRules = values.rules;
    if (typeof tm.GM_getResourceText == "function") {
      onlineRules.forEach((rule) => {
        let resRule;
        try {
          resRule = tm.GM_getResourceText(rule.标识);
        } catch (error) {
          resRule = "";
        }
        if (resRule && !abpRules[rule.标识]) abpRules[rule.标识] = resRule;
      });
    }
    const abpKeys = Object.keys(abpRules);
    abpKeys.forEach((name) => {
      data.receivedRules += "\n" + abpRules[name] + "\n";
    });
    values.drlen = data.customRules.length;
    data.allRules = data.customRules + data.receivedRules;
    data.updating = false;
    makeInitMenu();
    if (apply) splitRules();
    return data.receivedRules.length;
  }
  function styleInject(csss, extra) {
    if (extra) {
      csss.split("\n").forEach((css) => {
        new ExtendedCss({
          styleSheet: css.replace(CCRE, ""),
        }).apply();
      });
    } else {
      addStyle(csss);
    }
  }
  function styleApply() {
    if (data.appliedLevel === 3) return;
    if (data.genHideCss.length > 0 && data.appliedLevel !== 1) {
      styleInject(data.genHideCss, false);
    }
    if (data.spcHideCss.length > 0 && data.appliedLevel !== 2) {
      styleInject(data.spcHideCss, false);
    }
    if (data.genExtraCss.length > 0 && data.appliedLevel !== 1) {
      styleInject(data.genExtraCss, true);
    }
    if (data.spcExtraCss.length > 0 && data.appliedLevel !== 2) {
      styleInject(data.spcExtraCss, true);
    }
    gmMenu("export", reportRecord);
  }
  function reportRecord() {
    const flags = ["##", "#?#", "#$#", "#$?#"];
    let text = "! 应用地址: \n! " + location.href + "\n";
    function pushRecord(css) {
      if (css.match(CCRE) === null) return void 0;
      const extra = css.match(CCRE)[1],
        rule = css.replace(CCRE, ""),
        sel = rule.replace(/ {.+$/, ""),
        fi = parseInt(extra.slice(0, 1)),
        place = extra.slice(1),
        count =
          fi % 2 == 1
            ? ExtendedCss.query(sel).length
            : document.querySelectorAll(sel).length,
        item = (place == "*" ? "" : place) + flags[fi] + (fi >= 2 ? rule : sel);
      if (count > 0) {
        text += `\n! 匹配元素数量: ${count}\n${item}\n`;
        data.records.push([item, count]);
      }
    }
    if (data.bRules.levels.length > 0) {
      data.bRules.levels.forEach((l, i) => {
        if (l > 0) {
          text += `\n! 禁用${l == 2 ? "特定" : "通用"}元素隐藏\n${
            data.bRules.rules[i]
          }\n`;
        }
      });
    }
    styleBoxes.forEach((box, i) => {
      if ((data.appliedLevel & (i >= 2 ? 2 : 1)) == 0 && data[box].length > 0) {
        data[box].split("\n").forEach((css) => pushRecord(css));
      }
    });
    console.log("地址: " + location.href);
    console.table(data.records);
    downUrl(textToBlobUrl(text), `拦截报告_${location.hostname}.txt`);
  }
  function cleanRules() {
    if (confirm(`是否清空存储规则 (${Object.keys(values.rules).length}) ?`)) {
      const has = values.hasSave;
      values.rules = {};
      values.time = "0/0/0 0:0:0";
      values.drlen = 0;
      values.etags = {};
      values.brules = [];
      if (has.length > 0) {
        has.forEach((host) => {
          gmValue("set", true, `ajs_saved_styles_${host}`);
        });
        values.hasSave = null;
      }
      data.appliedCount = 0;
      data.allRules = "";
      data.isClean = true;
      gmMenu("update");
      gmMenu("export");
      gmMenu("count", () => location.reload());
    }
  }
  function parseRules() {
    styleBoxes.forEach((box) => {
      data[box] = "";
    });
    [styles, extStyles].forEach((r, t) => {
      r.black
        .filter((v) => !r.white.includes(v))
        .forEach((s) => {
          const checkResult = ExtendedCss.validate(s.sel.split("{")[0]);
          if (checkResult.ok) {
            data[
              styleBoxes[s.generic ? t : t + 2]
            ] += `/* ${s.type}${s.place} */ ${s.sel} \n`;
            data.appliedCount++;
          } else {
            console.error(
              "选择器检查错误:",
              s.sel.split("{")[0],
              checkResult.error
            );
          }
        });
    });
    [selectors, extSelectors].forEach((r, t) => {
      r.black
        .filter((v) => !r.white.includes(v))
        .forEach((s, i) => {
          const checkResult = ExtendedCss.validate(s.sel);
          if (checkResult.ok) {
            data[styleBoxes[s.generic ? t : t + 2]] += `${
              i == 0 ? "" : "\n"
            }/* ${s.type}${s.place} */ ${s.sel + data.presetCss}`;
            data.appliedCount++;
          } else {
            console.error("选择器检查错误:", s.sel, checkResult.error);
          }
        });
    });
    if (values.brules.length > 0) parseBRules();
    gmMenu("count", cleanRules);
    saveCss();
    if (!data.saved) styleApply();
  }
  function splitRules() {
    const bRules = [];
    data.allRules.split("\n").forEach((rule) => {
      const ruleObj = ruleLoader(rule),
        boxes = [selectors, extSelectors, styles, extStyles];
      if (typeof ruleObj != "undefined") {
        if (
          ruleObj.black == "black" &&
          boxes[ruleObj.type].white.includes(ruleObj)
        )
          return;
        boxes[ruleObj.type][ruleObj.black].push(ruleObj);
      } else if (isBasicRule(rule)) {
        bRules.push(bRuleSpliter(rule));
      }
    });
    values.brules = bRules;
    parseRules();
  }
  function parseBRules() {
    const mrules = values.brules;
    data.bRules.levels = [];
    data.bRules.rules = [];
    mrules.forEach((br) => {
      data.bRules.levels.push(bRuleParser(br));
      data.bRules.rules.push(br.rule);
    });
    data.appliedLevel = Math.max(...data.bRules.levels);
  }
  function saveCss() {
    const styles = {
        needUpdate: false,
        genHideCss: data.genHideCss,
        genExtraCss: data.genExtraCss,
        spcHideCss: data.spcHideCss,
        spcExtraCss: data.spcExtraCss,
      },
      has = values.hasSave;
    values.css = styles;
    if (!has.includes(location.hostname)) has.push(location.hostname);
    values.hasSave = has;
  }
  function readCss() {
    const styles = values.css;
    if (!hasSome(Object.keys(styles), styleBoxes)) {
      values.css = {
        needUpdate: true,
        genHideCss: "",
        genExtraCss: "",
        spcHideCss: "",
        spcExtraCss: "",
      };
      return false;
    }
    if (values.brules.length > 0) parseBRules();
    styleBoxes.forEach((sname) => {
      var _a;
      if (styles[sname].length > 0) {
        data.saved = true;
        data.update =
          (_a = styles.needUpdate) !== null && _a !== void 0 ? _a : true;
        data[sname] = styles[sname];
      }
    });
    return data.saved;
  }
  function main() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (
        location.protocol.indexOf("http") !== 0 ||
        location.hostname.length < 4
      )
        return;
      data.disabled = values.black.includes(location.hostname);
      gmMenu("disable", switchDisabledStat);
      if (data.disabled) return;
      if (
        ((_b =
          (_a = tm.unsafeWindow.mbrowser) === null || _a === void 0
            ? void 0
            : _a.getVersionCode) === null || _b === void 0
          ? void 0
          : _b.call(_a)) >= 662
      ) {
        const vars = [
            "ajs_disabled_domains",
            "ajs_saved_abprules",
            "ajs_rules_etags",
            "ajs_rules_ver",
          ],
          stor = tm.unsafeWindow.localStorage;
        vars.forEach((key) => {
          if (stor.getItem(key)) {
            stor.removeItem(key);
          }
        });
      }
      if (values.drlen === data.customRules.length) readCss();
      saved: {
        if (data.saved) {
          styleApply();
          makeInitMenu();
          if (!data.update) break saved;
        }
        if (initRules(false) === 0) yield performUpdate(true, true);
        splitRules();
      }
      try {
        yield performUpdate(false, false);
      } catch (_error) {
        console.warn("iframe: ", location.href, " 取消更新");
      }
    });
  }
  function runOnce(key, func) {
    return __awaiter(this, void 0, void 0, function* () {
      if (key in tm.unsafeWindow) return;
      tm.unsafeWindow[key] = true;
      return yield func();
    });
  }
  {
    runOnce(data.mutex, main);
  }
})(
  {
    GM_info: typeof GM_info == "object" ? GM_info : {},
    unsafeWindow: typeof unsafeWindow == "object" ? unsafeWindow : window,
    GM_registerMenuCommand:
      typeof GM_registerMenuCommand == "function"
        ? GM_registerMenuCommand
        : undefined,
    GM_unregisterMenuCommand:
      typeof GM_unregisterMenuCommand == "function"
        ? GM_unregisterMenuCommand
        : undefined,
    GM_getValue: typeof GM_getValue == "function" ? GM_getValue : undefined,
    GM_deleteValue:
      typeof GM_deleteValue == "function" ? GM_deleteValue : undefined,
    GM_setValue: typeof GM_setValue == "function" ? GM_setValue : undefined,
    GM_addStyle: typeof GM_addStyle == "function" ? GM_addStyle : undefined,
    GM_xmlhttpRequest:
      typeof GM_xmlhttpRequest == "function" ? GM_xmlhttpRequest : undefined,
    GM_getResourceText:
      typeof GM_getResourceText == "function" ? GM_getResourceText : undefined,
  },
  ExtendedCss
);
