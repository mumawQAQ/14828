// ==UserScript==
// @name              Touhou.AI | Manga Translator (Regular Edition)
// @name:zh-CN        Touhou.AI | 图片翻译器 (常规版)
// @namespace         https://github.com/VoileLabs/imgtrans-userscript#regular
// @version           0.7.16
// @description       (WIP) Translate texts in images on Pixiv, Twitter
// @description:zh-CN (WIP) 一键翻译图片内文字，支持 Pixiv、Twitter
// @author            QiroNT
// @license           MIT
// @contributionURL   https://ko-fi.com/voilelabs
// @supportURL        https://github.com/VoileLabs/imgtrans-userscript/issues
// @source            https://github.com/VoileLabs/imgtrans-userscript
// @require https://cdn.jsdelivr.net/combine/npm/vue@3.2.41/dist/vue.runtime.global.prod.js,npm/@vueuse/shared@9.4.0/index.iife.min.js,npm/@vueuse/core@9.4.0/index.iife.min.js
// @include http*://www.pixiv.net/*
// @match http://www.pixiv.net/
// @include http*://twitter.com/*
// @match http://twitter.com/
// @connect pixiv.net
// @connect pximg.net
// @connect twitter.com
// @connect twimg.com
// @connect touhou.ai
// @connect *
// @grant GM.xmlHttpRequest
// @grant GM_xmlhttpRequest
// @grant GM.setValue
// @grant GM_setValue
// @grant GM.getValue
// @grant GM_getValue
// @grant GM.deleteValue
// @grant GM_deleteValue
// @grant GM.addValueChangeListener
// @grant GM_addValueChangeListener
// @grant GM.removeValueChangeListener
// @grant GM_removeValueChangeListener
// @grant window.onurlchange
// @run-at document-end
// ==/UserScript==

/**
MIT License

Copyright (c) 2020-2022, VoileLabs

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

/* eslint-disable no-undef, @typescript-eslint/no-unused-vars */
const VERSION = '0.7.16'
const EDITION = 'regular'
let GMP
{
  // polyfill functions
  const GMPFunctionMap = {
    xmlHttpRequest: typeof GM_xmlhttpRequest !== 'undefined' ? GM_xmlhttpRequest : undefined,
    setValue: typeof GM_setValue !== 'undefined' ? GM_setValue : undefined,
    getValue: typeof GM_getValue !== 'undefined' ? GM_getValue : undefined,
    deleteValue: typeof GM_deleteValue !== 'undefined' ? GM_deleteValue : undefined,
    addValueChangeListener: typeof GM_addValueChangeListener !== 'undefined' ? GM_addValueChangeListener : undefined,
    removeValueChangeListener: typeof GM_removeValueChangeListener !== 'undefined' ? GM_removeValueChangeListener : undefined,
  }
  const xmlHttpRequest = GM.xmlHttpRequest.bind(GM) || GMPFunctionMap.xmlHttpRequest
  GMP = new Proxy(GM, {
    get(target, prop) {
      if (prop === 'xmlHttpRequest') {
        return (context) => {
          return new Promise((resolve, reject) => {
            xmlHttpRequest({
              ...context,
              onload(event) {
                context.onload?.()
                resolve(event)
              },
              onerror(event) {
                context.onerror?.()
                reject(event)
              },
            })
          })
        }
      }
      if (prop in target) {
        const v = target[prop]
        return typeof v === 'function' ? v.bind(target) : v
      }
      if (prop in GMPFunctionMap && typeof GMPFunctionMap[prop] === 'function')
        return GMPFunctionMap[prop]

      console.error(
        `[Touhou.AI | Manga Translator] GM.${prop} isn't supported in your userscript engine and it's required by this script. This may lead to unexpected behavior.`,
      )
    },
  })
}

(function (vue, shared) {
  'use strict';

  const css = `
@keyframes imgtrans-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
  const cssEl = document.createElement("style");
  cssEl.innerHTML = css;
  function checkCSS() {
    if (!document.head.contains(cssEl))
      document.head.appendChild(cssEl);
  }

  function useGMStorage(key, initialValue) {
    const data = vue.ref(initialValue);
    let listener;
    if (GMP.addValueChangeListener) {
      (async () => {
        listener = await GMP.addValueChangeListener(key, (name, oldValue, newValue, remote) => {
          if (name === key && (remote === void 0 || remote === true))
            read(newValue);
        });
      })();
    }
    const {
      pause: pauseWatch,
      resume: resumeWatch,
      stop: stopWatch
    } = shared.pausableWatch(
      data,
      async (newValue, oldValue) => {
        if (newValue == null) {
          await GMP.deleteValue(key);
          pauseWatch();
          data.value = initialValue;
          resumeWatch();
        } else {
          await GMP.setValue(key, newValue);
        }
      },
      { flush: "sync" }
    );
    async function read(newValue) {
      pauseWatch();
      const rawValue = newValue != null ? newValue : await GMP.getValue(key);
      if (rawValue == null)
        data.value = initialValue;
      else
        data.value = rawValue;
      resumeWatch();
    }
    data.ready = read().then(() => {
      data.isReady = true;
    });
    vue.onScopeDispose(() => {
      stopWatch();
      if (GMP.removeValueChangeListener && listener)
        GMP.removeValueChangeListener(listener);
    });
    return data;
  }
  const detectionResolution = useGMStorage("detectionResolution", "M");
  const textDetector = useGMStorage("textDetector", "auto");
  const translatorService = useGMStorage("translator", "youdao");
  const renderTextOrientation = useGMStorage("renderTextOrientation", "auto");
  const targetLang = useGMStorage("targetLang");
  const scriptLang = useGMStorage("scriptLanguage");
  const storageReady = Promise.all([
    detectionResolution.ready,
    textDetector.ready,
    translatorService.ready,
    renderTextOrientation.ready,
    targetLang.ready,
    scriptLang.ready
  ]);

  var data$1 = { common:{ source:{ "download-image":"正在拉取原图",
        "download-image-progress":"正在拉取原图({progress})",
        "download-image-error":"拉取原图出错" },
      client:{ submit:"正在提交翻译",
        "submit-progress":"正在提交翻译({progress})",
        "submit-error":"提交翻译出错",
        "download-image":"正在下载图片",
        "download-image-progress":"正在下载图片({progress})",
        "download-image-error":"下载图片出错",
        resize:"正在缩放图片" },
      status:{ "default":"未知状态",
        pending:"正在等待",
        pending_pos:"正在等待，列队还有 {pos} 张图片",
        detection:"正在检测文本",
        ocr:"正在识别文本",
        mask_generation:"正在生成文本掩码",
        inpainting:"正在修补图片",
        translating:"正在翻译文本",
        render:"正在渲染",
        error:"翻译出错",
        "error-lang":"不支持的语言" },
      control:{ translate:"翻译",
        batch:"翻译全部",
        reset:"还原" },
      batch:{ progress:"翻译中({count}/{total})",
        finish:"翻译完成",
        error:"翻译完成(有失败)" } },
    settings:{ title:"Touhou.AI | 图片翻译器设置",
      "inline-options-title":"设置当前翻译",
      "detection-resolution":"文本扫描清晰度",
      "text-detector":"文本扫描器",
      "text-detector-options":{ auto:"默认" },
      translator:"翻译服务",
      "render-text-orientation":"渲染字体方向",
      "render-text-orientation-options":{ auto:"跟随原文本",
        horizontal:"仅限水平" },
      "target-language":"翻译语言",
      "target-language-options":{ auto:"跟随网页语言" },
      "script-language":"用户脚本语言",
      "script-language-options":{ auto:"跟随网页语言" },
      reset:"重置所有设置",
      "detection-resolution-desc":"设置检测图片文本所用的清晰度，更高的清晰度会使文本检测时间更长但精准度更高。",
      "text-detector-desc":"设置使用的文本扫描器。",
      "translator-desc":"设置翻译图片所用的翻译服务。",
      "render-text-orientation-desc":"设置嵌字的文本方向。",
      "target-language-desc":"设置图片翻译后的语言。",
      "script-language-desc":"设置此用户脚本的语言。" },
    sponsor:{ text:"制作不易，请考虑赞助我们！" } };
  data$1.common;
  data$1.settings;
  data$1.sponsor;

  var data = { common:{ source:{ "download-image":"Downloading original image",
        "download-image-progress":"Downloading original image ({progress})",
        "download-image-error":"Error during original image download" },
      client:{ submit:"Submitting translation",
        "submit-progress":"Submitting translation ({progress})",
        "submit-error":"Error during translation submission",
        "download-image":"Downloading translated image",
        "download-image-progress":"Downloading translated image ({progress})",
        "download-image-error":"Error during translated image download",
        resize:"Resizing image" },
      status:{ "default":"Unknown status",
        pending:"Pending",
        pending_pos:"Pending, {pos} in queue",
        detection:"Detecting text",
        ocr:"Scanning text",
        mask_generation:"Generating mask",
        inpainting:"Inpainting",
        translating:"Translating",
        render:"Rendering",
        error:"Error during translation",
        "error-lang":"Unsupported language" },
      control:{ translate:"Translate",
        batch:"Translate all",
        reset:"Reset" },
      batch:{ progress:"Translating ({count}/{total} finished)",
        finish:"Translation finished",
        error:"Translation finished with errors" } },
    settings:{ "detection-resolution":"Text detection resolution",
      "render-text-orientation":"Render text orientation",
      "render-text-orientation-options":{ auto:"Follow original orientation",
        horizontal:"Horizontal only" },
      reset:"Reset Settings",
      "target-language":"Translate target language",
      "target-language-options":{ auto:"Follow website language" },
      "text-detector":"Text detector",
      "text-detector-options":{ auto:"Default" },
      title:"Touhou.AI | Manga Translator Settings",
      translator:"Translator",
      "script-language":"Userscript language",
      "script-language-options":{ auto:"Follow website language" },
      "inline-options-title":"Current Settings",
      "detection-resolution-desc":"The resolution used to scan texts on an image, higher value will result in a longer processing time with better accuracy.",
      "script-language-desc":"Language of this userscript.",
      "render-text-orientation-desc":"Overwrite the orientation of texts rendered in the translated image.",
      "target-language-desc":"The language that images are translated to.",
      "text-detector-desc":"The detector used to scan texts in an image.",
      "translator-desc":"The translate service used to translate texts." },
    sponsor:{ text:"If you find this script helpful, please consider supporting us!" } };
  data.common;
  data.settings;
  data.sponsor;

  const messages = {
    "zh-CN": data$1,
    "en-US": data
  };
  function tryMatchLang(lang2) {
    if (lang2.startsWith("zh"))
      return "zh-CN";
    if (lang2.startsWith("en"))
      return "en-US";
    return "en-US";
  }
  const realLang = vue.ref(navigator.language);
  const lang = vue.computed(() => scriptLang.value || tryMatchLang(realLang.value));
  const t = (key, props = {}) => {
    return { key, props };
  };
  const tt = ({ key, props }) => {
    const msg = key.split(".").reduce((obj, k) => obj[k], messages[lang.value]) || key.split(".").reduce((obj, k) => obj[k], messages["zh-CN"]);
    if (!msg)
      return key;
    return msg.replace(/\{([^}]+)\}/g, (_, k) => {
      var _a;
      return (_a = String(props[k])) != null ? _a : "";
    });
  };
  const untt = (state) => {
    if (typeof state === "string")
      return state;
    else
      return tt(state);
  };
  let langEL;
  let langObserver;
  const changeLangEl = (el) => {
    if (langEL === el)
      return;
    if (langObserver)
      langObserver.disconnect();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "lang") {
          const target = mutation.target;
          if (target.lang)
            realLang.value = target.lang;
          break;
        }
      }
    });
    observer.observe(el, { attributes: true });
    langObserver = observer;
    langEL = el;
    realLang.value = el.lang;
  };
  function BCP47ToISO639(code) {
    try {
      const lo = new Intl.Locale(code);
      switch (lo.language) {
        case "zh": {
          switch (lo.script) {
            case "Hans":
              return "CHS";
            case "Hant":
              return "CHT";
          }
          switch (lo.region) {
            case "CN":
              return "CHS";
            case "HK":
            case "TW":
              return "CHT";
          }
          return "CHS";
        }
        case "ja":
          return "JPN";
        case "en":
          return "ENG";
        case "ko":
          return "KOR";
        case "vi":
          return "VIE";
        case "cs":
          return "CSY";
        case "nl":
          return "NLD";
        case "fr":
          return "FRA";
        case "de":
          return "DEU";
        case "hu":
          return "HUN";
        case "it":
          return "ITA";
        case "pl":
          return "PLK";
        case "pt":
          return "PTB";
        case "ro":
          return "ROM";
        case "ru":
          return "RUS";
        case "es":
          return "ESP";
        case "tr":
          return "TRK";
        case "uk":
          return "UKR";
      }
      return "ENG";
    } catch (e) {
      return "ENG";
    }
  }

  function createScopedInstance(cb) {
    const scope = vue.effectScope();
    const i = scope.run(cb);
    scope.run(() => {
      vue.onScopeDispose(() => {
        var _a;
        (_a = i.stop) == null ? void 0 : _a.call(i);
      });
    });
    return { scope, i };
  }
  let currentURL;
  let translator$2;
  let settingsInjector$2;
  async function start(translators, settingsInjectors) {
    await storageReady;
    function onUpdate() {
      var _a, _b, _c, _d;
      if (currentURL !== location.href) {
        currentURL = location.href;
        checkCSS();
        changeLangEl(document.documentElement);
        if (!((_b = translator$2 == null ? void 0 : (_a = translator$2.i).canKeep) == null ? void 0 : _b.call(_a, currentURL))) {
          translator$2 == null ? void 0 : translator$2.scope.stop();
          translator$2 = void 0;
          const url = new URL(location.href);
          const matched = translators.find((t) => t.match(url));
          if (matched)
            translator$2 = createScopedInstance(matched.mount);
        }
        if (!((_d = settingsInjector$2 == null ? void 0 : (_c = settingsInjector$2.i).canKeep) == null ? void 0 : _d.call(_c, currentURL))) {
          settingsInjector$2 == null ? void 0 : settingsInjector$2.scope.stop();
          settingsInjector$2 = void 0;
          const url = new URL(location.href);
          const matched = settingsInjectors.find((t) => t.match(url));
          if (matched)
            settingsInjector$2 = createScopedInstance(matched.mount);
        }
      }
    }
    if (window.onurlchange === null) {
      window.addEventListener("urlchange", onUpdate);
    } else {
      const installObserver = new MutationObserver(shared.useThrottleFn(onUpdate, 200, true, false));
      installObserver.observe(document.body, { childList: true, subtree: true });
    }
    onUpdate();
  }

  function formatSize(bytes) {
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    if (bytes === 0)
      return "0B";
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / k ** i).toFixed(2)}${sizes[i]}`;
  }
  function formatProgress(loaded, total) {
    return `${formatSize(loaded)}/${formatSize(total)}`;
  }

  async function resizeToSubmit(blob, suffix) {
    const blobUrl = URL.createObjectURL(blob);
    const img = await new Promise((resolve, reject) => {
      const img2 = new Image();
      img2.onload = () => resolve(img2);
      img2.onerror = (err) => reject(err);
      img2.src = blobUrl;
    });
    URL.revokeObjectURL(blobUrl);
    const w = img.width;
    const h = img.height;
    if (w <= 4e3 && h <= 4e3)
      return { blob, suffix };
    const scale = Math.min(4e3 / w, 4e3 / h);
    const width = Math.floor(w * scale);
    const height = Math.floor(h * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, width, height);
    const newBlob = await new Promise((resolve, reject) => {
      canvas.toBlob((blob2) => {
        if (blob2)
          resolve(blob2);
        else
          reject(new Error("Canvas toBlob failed"));
      }, "image/png");
    });
    console.log(`resized from ${w}x${h}(${formatSize(blob.size)},${suffix}) to ${width}x${height}(${formatSize(newBlob.size)},png)`);
    return {
      blob: newBlob,
      suffix: "png"
    };
  }
  async function submitTranslate(blob, suffix, listeners = {}, optionsOverwrite) {
    var _a, _b, _c, _d;
    const { onProgress } = listeners;
    const formData = new FormData();
    formData.append("file", blob, `image.${suffix}`);
    formData.append("size", (_a = optionsOverwrite == null ? void 0 : optionsOverwrite.detectionResolution) != null ? _a : detectionResolution.value);
    formData.append("translator", (_b = optionsOverwrite == null ? void 0 : optionsOverwrite.translator) != null ? _b : translatorService.value);
    formData.append("tgt_lang", targetLang.value || BCP47ToISO639(realLang.value));
    formData.append("direction", (_c = optionsOverwrite == null ? void 0 : optionsOverwrite.renderTextOrientation) != null ? _c : renderTextOrientation.value);
    formData.append("detector", (_d = optionsOverwrite == null ? void 0 : optionsOverwrite.textDetector) != null ? _d : textDetector.value);
    const result = await GMP.xmlHttpRequest({
      method: "POST",
      url: "https://touhou.ai/imgtrans/submit",
      data: formData,
      upload: {
        onprogress: onProgress ? (e) => {
          if (e.lengthComputable) {
            const p = formatProgress(e.loaded, e.total);
            onProgress(p);
          }
        } : void 0
      }
    });
    console.log(result.responseText);
    const json = JSON.parse(result.responseText);
    const id = json.task_id;
    return id;
  }
  async function getTranslateStatus(id) {
    const result = await GMP.xmlHttpRequest({
      method: "GET",
      url: `https://touhou.ai/imgtrans/task-state?taskid=${id}`
    });
    const data = JSON.parse(result.responseText);
    return {
      state: data.state,
      waiting: data.waiting || 0
    };
  }
  function getStatusText(status) {
    switch (status.state) {
      case "pending":
        if (status.waiting > 0)
          return t("common.status.pending_pos", { pos: status.waiting });
        else
          return t("common.status.pending");
      case "detection":
        return t("common.status.detection");
      case "ocr":
        return t("common.status.ocr");
      case "mask_generation":
        return t("common.status.mask_generation");
      case "inpainting":
        return t("common.status.inpainting");
      case "translating":
        return t("common.status.translating");
      case "render":
        return t("common.status.render");
      case "error":
        return t("common.status.error");
      case "error-lang":
        return t("common.status.error-lang");
      default:
        return t("common.status.default");
    }
  }
  async function pullTransStatusUntilFinish(id, cb) {
    for (; ; ) {
      const timer = new Promise((resolve) => setTimeout(resolve, 500));
      const status = await getTranslateStatus(id);
      if (status.state === "finished")
        return;
      else if (status.state === "error")
        throw t("common.status.error");
      else if (status.state === "error-lang")
        throw t("common.status.error-lang");
      else
        cb(status);
      await timer;
    }
  }
  async function downloadResultBlob(id, listeners = {}) {
    const { onProgress } = listeners;
    const res = await GMP.xmlHttpRequest({
      method: "GET",
      responseType: "blob",
      url: `https://touhou.ai/imgtrans/result/${id}/final.png`,
      onprogress: onProgress ? (e) => {
        if (e.lengthComputable) {
          const p = formatProgress(e.loaded, e.total);
          onProgress(p);
        }
      } : void 0
    });
    return res.response;
  }

  const detectResOptionsMap = {
    S: "1024px",
    M: "1536px",
    L: "2048px",
    X: "2560px"
  };
  const detectResOptions = Object.keys(detectResOptionsMap);
  const renderTextDirOptionsMap = {
    auto: t("settings.render-text-orientation-options.auto"),
    horizontal: t("settings.render-text-orientation-options.horizontal")
  };
  const renderTextDirOptions = Object.keys(renderTextDirOptionsMap);
  const textDetectorOptionsMap = {
    auto: t("settings.text-detector-options.auto"),
    ctd: "CTD"
  };
  const textDetectorOptions = Object.keys(textDetectorOptionsMap);
  const translatorOptionsMap = {
    youdao: "Youdao",
    baidu: "Baidu",
    google: "Google",
    deepl: "DeepL",
    papago: "Papago",
    offline: "Sugoi / NLLB"
  };
  const translatorOptions = Object.keys(translatorOptionsMap);
  function renderSettings(options) {
    const { itemOrientation = "vertical", textStyle = {} } = options != null ? options : {};
    return vue.h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }
    }, [
      vue.h("div", {}, [
        `"${EDITION}" edition, v${VERSION}`
      ]),
      vue.h("div", {}, [
        tt(t("sponsor.text")),
        " ",
        vue.h("a", {
          href: "https://ko-fi.com/voilelabs",
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            color: "#2563EB",
            textDecoration: "none"
          }
        }, "ko-fi"),
        " ",
        vue.h("a", {
          href: "https://patreon.com/voilelabs",
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            color: "#2563EB",
            textDecoration: "none"
          }
        }, "Patreon"),
        " ",
        vue.h("a", {
          href: "https://afdian.net/@voilelabs",
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            color: "#2563EB",
            textDecoration: "none"
          }
        }, "爱发电")
      ]),
      ...[
        [
          t("settings.detection-resolution"),
          detectionResolution,
          detectResOptionsMap,
          t("settings.detection-resolution-desc")
        ],
        [
          t("settings.text-detector"),
          textDetector,
          textDetectorOptionsMap,
          t("settings.text-detector-desc")
        ],
        [
          t("settings.translator"),
          translatorService,
          translatorOptionsMap,
          t("settings.translator-desc")
        ],
        [
          t("settings.render-text-orientation"),
          renderTextOrientation,
          renderTextDirOptionsMap,
          t("settings.render-text-orientation-desc")
        ],
        [
          t("settings.target-language"),
          targetLang,
          {
            "": tt(t("settings.target-language-options.auto")),
            "CHS": "简体中文",
            "CHT": "繁體中文",
            "JPN": "日本語",
            "ENG": "English",
            "KOR": "한국어",
            "VIN": "Tiếng Việt",
            "CSY": "čeština",
            "NLD": "Nederlands",
            "FRA": "français",
            "DEU": "Deutsch",
            "HUN": "magyar nyelv",
            "ITA": "italiano",
            "PLK": "polski",
            "PTB": "português",
            "ROM": "limba română",
            "RUS": "русский язык",
            "UKR": "українська мова",
            "ESP": "español",
            "TRK": "Türk dili"
          },
          t("settings.target-language-desc")
        ],
        [
          t("settings.script-language"),
          scriptLang,
          {
            "": tt(t("settings.script-language-options.auto")),
            "zh-CN": "简体中文",
            "en-US": "English"
          },
          t("settings.script-language-desc")
        ]
      ].map(
        ([title, opt, optMap, desc]) => vue.h("div", {
          style: {
            ...itemOrientation === "horizontal" ? {
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            } : {}
          }
        }, [
          vue.h("div", {
            style: {
              ...textStyle
            }
          }, tt(title)),
          vue.h("div", {}, [
            vue.h("select", {
              value: opt.value,
              onChange(e) {
                opt.value = e.target.value;
              }
            }, Object.entries(optMap).map(([key, value]) => vue.h("option", {
              value: key
            }, untt(value)))),
            desc ? vue.h("div", {
              style: {
                fontSize: "13px"
              }
            }, tt(desc)) : void 0
          ])
        ])
      ),
      vue.h("div", [
        vue.h("button", {
          onClick: vue.withModifiers(() => {
            detectionResolution.value = null;
            textDetector.value = null;
            translatorService.value = null;
            renderTextOrientation.value = null;
            targetLang.value = null;
            scriptLang.value = null;
          }, ["stop", "prevent"])
        }, tt(t("settings.reset")))
      ])
    ]);
  }

  const _hoisted_1$3 = {
    viewBox: "0 0 32 32",
    width: "1.2em",
    height: "1.2em"
  };
  const _hoisted_2$3 = /*#__PURE__*/vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];

  function render$3(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3))
  }

  var IconCarbonTranslate = { name: 'carbon-translate', render: render$3 };
  /* vite-plugin-components disabled */

  const _hoisted_1$2 = {
    viewBox: "0 0 32 32",
    width: "1.2em",
    height: "1.2em"
  };
  const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];

  function render$2(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2))
  }

  var IconCarbonReset = { name: 'carbon-reset', render: render$2 };
  /* vite-plugin-components disabled */

  const _hoisted_1$1 = {
    viewBox: "0 0 32 32",
    width: "1.2em",
    height: "1.2em"
  };
  const _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];

  function render$1(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1))
  }

  var IconCarbonChevronLeft = { name: 'carbon-chevron-left', render: render$1 };
  /* vite-plugin-components disabled */

  const _hoisted_1 = {
    viewBox: "0 0 32 32",
    width: "1.2em",
    height: "1.2em"
  };
  const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
  }, null, -1 /* HOISTED */);
  const _hoisted_3 = [
    _hoisted_2
  ];

  function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3))
  }

  var IconCarbonChevronRight = { name: 'carbon-chevron-right', render };
  /* vite-plugin-components disabled */

  function mount$3() {
    const images = /* @__PURE__ */ new Set();
    const instances = /* @__PURE__ */ new Map();
    const translatedMap = /* @__PURE__ */ new Map();
    const translateEnabledMap = /* @__PURE__ */ new Map();
    function findImageNodes(node) {
      return Array.from(node.querySelectorAll("img")).filter(
        (node2) => {
          var _a, _b;
          return node2.hasAttribute("srcset") || node2.hasAttribute("data-trans") || ((_a = node2.parentElement) == null ? void 0 : _a.classList.contains("sc-1pkrz0g-1")) || ((_b = node2.parentElement) == null ? void 0 : _b.classList.contains("gtm-expand-full-size-illust"));
        }
      );
    }
    function rescanImages() {
      const imageNodes = findImageNodes(document.body);
      const removedImages = new Set(images);
      for (const node of imageNodes) {
        removedImages.delete(node);
        if (images.has(node))
          continue;
        try {
          instances.set(node, mountToNode(node));
          images.add(node);
        } catch (e) {
        }
      }
      for (const node of removedImages) {
        if (!instances.has(node))
          continue;
        const instance = instances.get(node);
        instance.stop();
        instances.delete(node);
        images.delete(node);
      }
    }
    function mountToNode(imageNode) {
      const src = imageNode.getAttribute("src");
      const srcset = imageNode.getAttribute("srcset");
      const parent = imageNode.parentElement;
      if (!parent)
        throw new Error("no parent");
      const originalSrc = parent.getAttribute("href") || src;
      const originalSrcSuffix = originalSrc.split(".").pop();
      let originalImage;
      let translatedImage = translatedMap.get(originalSrc);
      const translateMounted = vue.ref(false);
      let buttonDisabled = false;
      const buttonProcessing = vue.ref(false);
      const buttonTranslated = vue.ref(false);
      const buttonText = vue.ref();
      const buttonHint = vue.ref("");
      parent.style.position = "relative";
      const container = document.createElement("div");
      parent.appendChild(container);
      const buttonApp = vue.createApp(vue.defineComponent(() => {
        const content = vue.computed(() => (buttonText.value ? tt(buttonText.value) : "") + buttonHint.value);
        const advancedMenuOpen = vue.ref(false);
        const advDetectRes = vue.ref(detectionResolution.value);
        const advDetectResIndex = vue.computed(() => detectResOptions.indexOf(advDetectRes.value));
        const advRenderTextDir = vue.ref(renderTextOrientation.value);
        const advRenderTextDirIndex = vue.computed(() => renderTextDirOptions.indexOf(advRenderTextDir.value));
        const advTextDetector = vue.ref(textDetector.value);
        const advTextDetectorIndex = vue.computed(() => textDetectorOptions.indexOf(advTextDetector.value));
        const advTranslator = vue.ref(translatorService.value);
        const advTranslatorIndex = vue.computed(() => translatorOptions.indexOf(advTranslator.value));
        return () => vue.h(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: "1",
              bottom: "4px",
              left: "8px"
            }
          },
          [
            vue.h(
              "div",
              {
                style: {
                  position: "relative"
                }
              },
              [
                vue.h(
                  "div",
                  {
                    style: {
                      fontSize: "16px",
                      lineHeight: "16px",
                      padding: "2px",
                      paddingLeft: translateMounted.value ? "2px" : "24px",
                      border: "2px solid #D1D5DB",
                      borderRadius: "6px",
                      background: "#fff",
                      cursor: "default"
                    }
                  },
                  content.value ? content.value : !translateMounted.value ? advancedMenuOpen.value ? [
                    vue.h(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBottom: "2px"
                        },
                        onClick: vue.withModifiers(() => {
                          advancedMenuOpen.value = false;
                        }, ["stop", "prevent"])
                      },
                      [
                        vue.h("div", {}, tt(t("settings.inline-options-title"))),
                        vue.h(IconCarbonChevronLeft, {
                          style: {
                            verticalAlign: "middle",
                            cursor: "pointer"
                          }
                        })
                      ]
                    ),
                    vue.h("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px"
                      }
                    }, [
                      [
                        [
                          t("settings.detection-resolution"),
                          advDetectRes,
                          advDetectResIndex,
                          detectResOptions,
                          detectResOptionsMap
                        ],
                        [
                          t("settings.text-detector"),
                          advTextDetector,
                          advTextDetectorIndex,
                          textDetectorOptions,
                          textDetectorOptionsMap
                        ],
                        [
                          t("settings.translator"),
                          advTranslator,
                          advTranslatorIndex,
                          translatorOptions,
                          translatorOptionsMap
                        ],
                        [
                          t("settings.render-text-orientation"),
                          advRenderTextDir,
                          advRenderTextDirIndex,
                          renderTextDirOptions,
                          Object.fromEntries(
                            Object.entries(renderTextDirOptionsMap).map(([k, v]) => [k, tt(v)])
                          )
                        ]
                      ].map(
                        ([title, opt, optIndex, opts, optMap]) => vue.h("div", {}, [
                          vue.h(
                            "div",
                            {
                              style: {
                                fontSize: "12px"
                              }
                            },
                            tt(title)
                          ),
                          vue.h(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                userSelect: "none"
                              }
                            },
                            [
                              vue.h(optIndex.value <= 0 ? "div" : IconCarbonChevronLeft, {
                                style: {
                                  width: "1.2em",
                                  cursor: "pointer"
                                },
                                onClick: vue.withModifiers(() => {
                                  if (optIndex.value <= 0)
                                    return;
                                  opt.value = opts[optIndex.value - 1];
                                }, ["stop", "prevent"])
                              }),
                              vue.h("div", {}, untt(optMap[opt.value])),
                              vue.h(optIndex.value >= opts.length - 1 ? "div" : IconCarbonChevronRight, {
                                style: {
                                  width: "1.2em",
                                  cursor: "pointer"
                                },
                                onClick: vue.withModifiers(() => {
                                  if (optIndex.value >= opts.length - 1)
                                    return;
                                  opt.value = opts[optIndex.value + 1];
                                }, ["stop", "prevent"])
                              })
                            ]
                          )
                        ])
                      ),
                      vue.h("div", {
                        style: {
                          padding: "2px 0px 1px 0px",
                          border: "1px solid #A1A1AA",
                          borderRadius: "4px",
                          textAlign: "center",
                          cursor: "pointer"
                        },
                        onClick: vue.withModifiers(() => {
                          if (buttonDisabled)
                            return;
                          if (translateMounted.value)
                            return;
                          enable({
                            detectionResolution: advDetectRes.value,
                            renderTextOrientation: advRenderTextDir.value,
                            textDetector: advTextDetector.value,
                            translator: advTranslator.value
                          });
                          advancedMenuOpen.value = false;
                        }, ["stop", "prevent"])
                      }, tt(t("common.control.translate")))
                    ])
                  ] : vue.h(IconCarbonChevronRight, {
                    style: {
                      cursor: "pointer"
                    },
                    onClick: vue.withModifiers(() => {
                      advancedMenuOpen.value = true;
                    }, ["stop", "prevent"])
                  }) : vue.h("div", {
                    style: {
                      width: "1px",
                      height: "16px"
                    }
                  })
                ),
                vue.h("div", {
                  style: {
                    position: "absolute",
                    left: "-5px",
                    top: "-2px",
                    background: "#fff",
                    borderRadius: "24px"
                  }
                }, [
                  vue.h(buttonTranslated.value ? IconCarbonReset : IconCarbonTranslate, {
                    style: {
                      fontSize: "18px",
                      lineHeight: "18px",
                      width: "18px",
                      height: "18px",
                      padding: "6px",
                      cursor: "pointer"
                    },
                    onClick: vue.withModifiers(() => {
                      if (advancedMenuOpen.value)
                        return;
                      toggle();
                    }, ["stop", "prevent"]),
                    onContextmenu: vue.withModifiers(() => {
                      if (translateMounted.value)
                        advancedMenuOpen.value = false;
                      else
                        advancedMenuOpen.value = !advancedMenuOpen.value;
                    }, ["stop", "prevent"])
                  }),
                  vue.h("div", {
                    style: {
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      border: "2px solid #D1D5DB",
                      ...buttonProcessing.value ? {
                        borderTop: "2px solid #7DD3FC",
                        animation: "imgtrans-spin 1s linear infinite"
                      } : {},
                      borderRadius: "24px",
                      pointerEvents: "none"
                    }
                  })
                ])
              ]
            )
          ]
        );
      }));
      buttonApp.mount(container);
      async function getTranslatedImage(optionsOverwrite) {
        if (!optionsOverwrite && translatedImage)
          return translatedImage;
        buttonDisabled = true;
        const text = buttonText.value;
        buttonHint.value = "";
        buttonProcessing.value = true;
        buttonText.value = t("common.source.download-image");
        if (!originalImage) {
          const result = await GMP.xmlHttpRequest({
            method: "GET",
            responseType: "blob",
            url: originalSrc,
            headers: { referer: "https://www.pixiv.net/" },
            overrideMimeType: "text/plain; charset=x-user-defined",
            onprogress(e) {
              if (e.lengthComputable) {
                buttonText.value = t("common.source.download-image-progress", {
                  progress: formatProgress(e.loaded, e.total)
                });
              }
            }
          }).catch((e) => {
            buttonText.value = t("common.source.download-image-error");
            throw e;
          });
          originalImage = result.response;
        }
        buttonText.value = t("common.client.resize");
        await vue.nextTick();
        const { blob: resizedImage, suffix: resizedSuffix } = await resizeToSubmit(originalImage, originalSrcSuffix);
        buttonText.value = t("common.client.submit");
        const id = await submitTranslate(
          resizedImage,
          resizedSuffix,
          {
            onProgress(progress) {
              buttonText.value = t("common.client.submit-progress", { progress });
            }
          },
          optionsOverwrite
        ).catch((e) => {
          buttonText.value = t("common.client.submit-error");
          throw e;
        });
        buttonText.value = t("common.status.pending");
        await pullTransStatusUntilFinish(id, (status) => {
          buttonText.value = getStatusText(status);
        }).catch((e) => {
          buttonText.value = e;
          throw e;
        });
        buttonText.value = t("common.client.download-image");
        const image = await downloadResultBlob(id, {
          onProgress(progress) {
            buttonText.value = t("common.client.download-image-progress", { progress });
          }
        }).catch((e) => {
          buttonText.value = t("common.client.download-image-error");
          throw e;
        });
        const imageUri = URL.createObjectURL(image);
        translatedImage = imageUri;
        translatedMap.set(originalSrc, translatedImage);
        buttonText.value = text;
        buttonProcessing.value = false;
        buttonDisabled = false;
        return imageUri;
      }
      async function enable(optionsOverwrite) {
        try {
          const translated = await getTranslatedImage(optionsOverwrite);
          imageNode.setAttribute("data-trans", src);
          imageNode.setAttribute("src", translated);
          imageNode.removeAttribute("srcset");
          translateMounted.value = true;
          buttonTranslated.value = true;
        } catch (e) {
          buttonDisabled = false;
          translateMounted.value = false;
          throw e;
        }
      }
      function disable() {
        imageNode.setAttribute("src", src);
        if (srcset)
          imageNode.setAttribute("srcset", srcset);
        imageNode.removeAttribute("data-trans");
        translateMounted.value = false;
        buttonTranslated.value = false;
      }
      function toggle() {
        if (buttonDisabled)
          return;
        if (!translateMounted.value) {
          translateEnabledMap.set(originalSrc, true);
          enable();
        } else {
          translateEnabledMap.delete(originalSrc);
          disable();
        }
      }
      if (translateEnabledMap.get(originalSrc))
        enable();
      return {
        imageNode,
        stop: () => {
          buttonApp.unmount();
          parent.removeChild(container);
          if (translateMounted.value)
            disable();
        },
        async enable() {
          translateEnabledMap.set(originalSrc, true);
          return await enable();
        },
        disable() {
          translateEnabledMap.delete(originalSrc);
          return disable();
        },
        isEnabled() {
          return translateMounted.value;
        }
      };
    }
    const transAllComp = vue.defineComponent(() => {
      const started = vue.ref(false);
      const total = vue.ref(0);
      const finished = vue.ref(0);
      const erred = vue.ref(false);
      return () => vue.h("div", {
        "data-transall": "true",
        "style": {
          display: "inline-block",
          marginRight: "13px",
          padding: "0",
          color: "inherit",
          height: "32px",
          lineHeight: "32px",
          cursor: "pointer",
          fontWeight: "700"
        },
        "onClick": vue.withModifiers(() => {
          if (started.value)
            return;
          started.value = true;
          total.value = instances.size;
          const inc = () => {
            finished.value++;
          };
          const err = () => {
            erred.value = true;
            finished.value++;
          };
          for (const instance of instances.values()) {
            if (instance.isEnabled())
              inc();
            else
              instance.enable().then(inc).catch(err);
          }
        }, ["stop", "prevent"])
      }, [
        tt(
          started.value ? finished.value === total.value ? erred.value ? t("common.batch.error") : t("common.batch.finish") : t("common.batch.progress", {
            count: finished.value,
            total: total.value
          }) : t("common.control.batch")
        )
      ]);
    });
    let removeTransAll;
    function refreshTransAll() {
      if (document.querySelector(".sc-emr523-2"))
        return;
      const section = document.querySelector(".sc-181ts2x-0");
      if (section) {
        if (section.querySelector("[data-transall]"))
          return;
        const container = document.createElement("div");
        section.appendChild(container);
        const transAllApp = vue.createApp(transAllComp);
        transAllApp.mount(container);
        removeTransAll = () => {
          transAllApp.unmount();
          section.removeChild(container);
        };
      }
    }
    let removeMangaViewerTransAll;
    function refreshManagaViewerTransAll() {
      var _a, _b;
      const mangaViewer = (_b = (_a = document.querySelector(".gtm-manga-viewer-change-direction")) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
      if (mangaViewer) {
        if (removeMangaViewerTransAll)
          return;
        const container = document.createElement("div");
        mangaViewer.prepend(container);
        const transAllApp = vue.createApp(transAllComp);
        transAllApp.mount(container);
        removeMangaViewerTransAll = () => {
          transAllApp.unmount();
          mangaViewer.removeChild(container);
        };
      } else {
        if (removeMangaViewerTransAll) {
          removeMangaViewerTransAll();
          removeMangaViewerTransAll = void 0;
        }
      }
    }
    const imageObserver = new MutationObserver(
      shared.useThrottleFn(() => {
        rescanImages();
        refreshTransAll();
        refreshManagaViewerTransAll();
      }, 200, true, false)
    );
    imageObserver.observe(document.body, { childList: true, subtree: true });
    rescanImages();
    refreshTransAll();
    return {
      stop() {
        imageObserver.disconnect();
        instances.forEach((instance) => instance.stop());
        removeTransAll == null ? void 0 : removeTransAll();
        removeMangaViewerTransAll == null ? void 0 : removeMangaViewerTransAll();
      }
    };
  }
  const translator$1 = {
    match(url) {
      return url.hostname.endsWith("pixiv.net") && url.pathname.match(/\/artworks\//);
    },
    mount: mount$3
  };

  function mount$2() {
    const wrapper = document.getElementById("wrapper");
    if (!wrapper)
      return {};
    const adFooter = wrapper.querySelector(".ad-footer");
    if (!adFooter)
      return {};
    const settingsContainer = document.createElement("div");
    const settingsApp = vue.createApp(
      () => vue.h(
        "div",
        {
          style: {
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "15px",
            marginBottom: "10px",
            background: "#fff",
            border: "1px solid #d6dee5"
          }
        },
        [
          vue.h("h2", {
            style: {
              fontSize: "18px",
              fontWeight: "bold"
            }
          }, tt(t("settings.title"))),
          vue.h(
            "div",
            {
              style: {
                width: "665px",
                margin: "10px auto"
              }
            },
            renderSettings({
              itemOrientation: "horizontal",
              textStyle: {
                width: "185px",
                fontWeight: "bold"
              }
            })
          )
        ]
      )
    );
    settingsApp.mount(settingsContainer);
    wrapper.insertBefore(settingsContainer, adFooter);
    return {
      stop() {
        settingsApp.unmount();
        settingsContainer.remove();
      }
    };
  }
  const settingsInjector$1 = {
    match(url) {
      return url.hostname.endsWith("pixiv.net") && url.pathname.match(/\/setting_user\.php/);
    },
    mount: mount$2
  };

  function mount$1() {
    var _a;
    const statusId = (_a = location.pathname.match(/\/status\/(\d+)/)) == null ? void 0 : _a[1];
    const translatedMap = vue.reactive({});
    const translateStatusMap = vue.shallowReactive({});
    const translateEnabledMap = vue.reactive({});
    const originalImageMap = {};
    let initObserver;
    let layersObserver;
    let layers = document.getElementById("layers");
    let dialog;
    const createDialogInstance = () => {
      const active = vue.ref(0);
      const updateRef = vue.ref();
      const buttonParent = dialog.querySelector('[aria-labelledby="modal-header"][role="dialog"]').firstChild.firstChild;
      const images = vue.computed(() => {
        updateRef.value;
        return [].slice.call(buttonParent.firstChild.querySelectorAll("img"));
      });
      const currentImg = vue.computed(() => {
        const img = images.value[active.value];
        if (!img)
          return void 0;
        return img.getAttribute("data-transurl") || img.src;
      });
      const stopImageWatch = vue.watch(
        [images, translateEnabledMap, translatedMap],
        () => {
          for (const img of images.value) {
            const div = img.previousSibling;
            if (img.hasAttribute("data-transurl")) {
              const transurl = img.getAttribute("data-transurl");
              if (!translateEnabledMap[transurl]) {
                if (div)
                  div.style.backgroundImage = `url("${transurl}")`;
                img.src = transurl;
                img.removeAttribute("data-transurl");
              }
            } else if (translateEnabledMap[img.src] && translatedMap[img.src]) {
              const ori = img.src;
              img.setAttribute("data-transurl", ori);
              img.src = translatedMap[ori];
              if (div)
                div.style.backgroundImage = `url("${translatedMap[ori]}")`;
            }
          }
        }
      );
      const getTranslatedImage = async (url, optionsOverwrite) => {
        if (!optionsOverwrite && translatedMap[url])
          return translatedMap[url];
        translateStatusMap[url] = vue.computed(() => tt(t("common.source.download-image")));
        if (!originalImageMap[url]) {
          const result = await GMP.xmlHttpRequest({
            method: "GET",
            responseType: "blob",
            url,
            headers: { referer: "https://twitter.com/" },
            overrideMimeType: "text/plain; charset=x-user-defined",
            onprogress(e) {
              if (e.lengthComputable) {
                translateStatusMap[url] = vue.computed(() => tt(t("common.source.download-image-progress", {
                  progress: formatProgress(e.loaded, e.total)
                })));
              }
            }
          }).catch((e) => {
            translateStatusMap[url] = vue.computed(() => tt(t("common.source.download-image-error")));
            throw e;
          });
          originalImageMap[url] = result.response;
        }
        const originalImage = originalImageMap[url];
        const originalSrcSuffix = new URL(url).searchParams.get("format") || url.split(".")[1] || "jpg";
        translateStatusMap[url] = vue.computed(() => tt(t("common.client.resize")));
        await vue.nextTick();
        const { blob: resizedImage, suffix: resizedSuffix } = await resizeToSubmit(originalImage, originalSrcSuffix);
        translateStatusMap[url] = vue.computed(() => tt(t("common.client.submit")));
        const id = await submitTranslate(
          resizedImage,
          resizedSuffix,
          {
            onProgress(progress) {
              translateStatusMap[url] = vue.computed(() => tt(t("common.client.submit-progress", { progress })));
            }
          },
          optionsOverwrite
        ).catch((e) => {
          translateStatusMap[url] = vue.computed(() => tt(t("common.client.submit-error")));
          throw e;
        });
        translateStatusMap[url] = vue.computed(() => tt(t("common.status.pending")));
        await pullTransStatusUntilFinish(id, (status) => {
          translateStatusMap[url] = vue.computed(() => tt(getStatusText(status)));
        }).catch((e) => {
          translateStatusMap[url] = vue.computed(() => tt(e));
          throw e;
        });
        translateStatusMap[url] = vue.computed(() => tt(t("common.client.download-image")));
        const image = await downloadResultBlob(id, {
          onProgress(progress) {
          }
        }).catch((e) => {
          translateStatusMap[url] = vue.computed(() => tt(t("common.client.download-image-error")));
          throw e;
        });
        const imageUri = URL.createObjectURL(image);
        translatedMap[url] = imageUri;
        translateStatusMap[url] = vue.computed(() => void 0);
        return imageUri;
      };
      const enable = async (url, optionsOverwrite) => {
        await getTranslatedImage(url, optionsOverwrite);
        translateEnabledMap[url] = true;
      };
      const disable = (url) => {
        translateEnabledMap[url] = false;
      };
      const buttonProcessing = vue.computed(() => {
        var _a2;
        return currentImg.value && !!((_a2 = translateStatusMap[currentImg.value]) == null ? void 0 : _a2.value);
      });
      const buttonTranslated = vue.computed(() => currentImg.value && !!translateEnabledMap[currentImg.value]);
      const buttonContent = vue.computed(() => {
        var _a2;
        return currentImg.value ? (_a2 = translateStatusMap[currentImg.value]) == null ? void 0 : _a2.value : "";
      });
      const advancedMenuOpen = vue.ref(false);
      const referenceEl = buttonParent.children[2];
      const container = referenceEl.cloneNode(true);
      container.style.top = "48px";
      const stopDisplayWatch = vue.watchEffect(() => {
        container.style.display = currentImg.value ? "flex" : "none";
        container.style.alignItems = advancedMenuOpen.value ? "start" : "center";
      });
      container.style.flexDirection = "row";
      container.style.flexWrap = "nowrap";
      const child = container.firstChild;
      const referenceChild = referenceEl.firstChild;
      const backgroundColor = vue.ref(referenceChild.style.backgroundColor);
      buttonParent.appendChild(container);
      const submitTranslateTest = () => {
        var _a2;
        if (!currentImg.value)
          return false;
        if ((_a2 = translateStatusMap[currentImg.value]) == null ? void 0 : _a2.value)
          return false;
        return true;
      };
      container.onclick = vue.withModifiers(() => {
        if (advancedMenuOpen.value)
          return;
        if (!submitTranslateTest())
          return;
        if (translateEnabledMap[currentImg.value])
          disable(currentImg.value);
        else
          enable(currentImg.value);
      }, ["stop", "prevent"]);
      container.oncontextmenu = vue.withModifiers(() => {
        if (currentImg.value && translateEnabledMap[currentImg.value])
          advancedMenuOpen.value = false;
        else
          advancedMenuOpen.value = !advancedMenuOpen.value;
      }, ["stop", "prevent"]);
      const spinnerContainer = container.firstChild;
      const processingSpinner = document.createElement("div");
      processingSpinner.style.position = "absolute";
      processingSpinner.style.top = "0";
      processingSpinner.style.left = "0";
      processingSpinner.style.bottom = "0";
      processingSpinner.style.right = "0";
      processingSpinner.style.borderTop = "1px solid #A1A1AA";
      processingSpinner.style.animation = "imgtrans-spin 1s linear infinite";
      processingSpinner.style.borderRadius = "9999px";
      const stopSpinnerWatch = vue.watch(
        buttonProcessing,
        (p, o) => {
          if (p === o)
            return;
          if (p && !spinnerContainer.contains(processingSpinner))
            spinnerContainer.appendChild(processingSpinner);
          else if (spinnerContainer.contains(processingSpinner))
            spinnerContainer.removeChild(processingSpinner);
        },
        { immediate: true }
      );
      const svg = container.querySelector("svg");
      const svgParent = svg.parentElement;
      const buttonIconContainer = document.createElement("div");
      svgParent.insertBefore(buttonIconContainer, svg);
      svgParent.removeChild(svg);
      const buttonIconApp = vue.createApp(
        () => vue.h(buttonTranslated.value ? IconCarbonReset : IconCarbonTranslate, {
          style: {
            width: "20px",
            height: "20px",
            marginTop: "4px"
          }
        })
      );
      buttonIconApp.mount(buttonIconContainer);
      const buttonStatusContainer = document.createElement("div");
      container.insertBefore(buttonStatusContainer, container.firstChild);
      const buttonStatusApp = vue.createApp(vue.defineComponent(() => {
        const borderRadius = vue.computed(() => advancedMenuOpen.value || buttonContent.value ? "4px" : "16px");
        const advDetectRes = vue.ref(detectionResolution.value);
        const advDetectResIndex = vue.computed(() => detectResOptions.indexOf(advDetectRes.value));
        const advRenderTextDir = vue.ref(renderTextOrientation.value);
        const advRenderTextDirIndex = vue.computed(() => renderTextDirOptions.indexOf(advRenderTextDir.value));
        const advTextDetector = vue.ref(textDetector.value);
        const advTextDetectorIndex = vue.computed(() => textDetectorOptions.indexOf(advTextDetector.value));
        const advTranslator = vue.ref(translatorService.value);
        const advTranslatorIndex = vue.computed(() => translatorOptions.indexOf(advTranslator.value));
        vue.watch(currentImg, (n, o) => {
          if (n !== o) {
            advDetectRes.value = detectionResolution.value;
            advRenderTextDir.value = renderTextOrientation.value;
          }
        });
        return () => vue.h(
          "div",
          {
            style: {
              marginRight: "-12px",
              padding: "2px",
              paddingLeft: "4px",
              paddingRight: "8px",
              color: "#fff",
              backgroundColor: backgroundColor.value,
              borderRadius: "4px",
              borderTopLeftRadius: borderRadius.value,
              borderBottomLeftRadius: borderRadius.value,
              cursor: "default"
            }
          },
          buttonContent.value ? vue.h("div", {
            style: {
              paddingRight: "8px"
            }
          }, buttonContent.value) : currentImg.value && !translateEnabledMap[currentImg.value] ? advancedMenuOpen.value ? [
            vue.h("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingRight: "8px",
                paddingBottom: "2px"
              },
              onClick: vue.withModifiers(() => {
                advancedMenuOpen.value = false;
              }, ["stop", "prevent"])
            }, [
              vue.h(IconCarbonChevronRight, {
                style: {
                  verticalAlign: "middle",
                  cursor: "pointer"
                }
              }),
              vue.h("div", {}, tt(t("settings.inline-options-title")))
            ]),
            vue.h("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginLeft: "18px"
              }
            }, [
              [
                [
                  t("settings.detection-resolution"),
                  advDetectRes,
                  advDetectResIndex,
                  detectResOptions,
                  detectResOptionsMap
                ],
                [
                  t("settings.text-detector"),
                  advTextDetector,
                  advTextDetectorIndex,
                  textDetectorOptions,
                  textDetectorOptionsMap
                ],
                [
                  t("settings.translator"),
                  advTranslator,
                  advTranslatorIndex,
                  translatorOptions,
                  translatorOptionsMap
                ],
                [
                  t("settings.render-text-orientation"),
                  advRenderTextDir,
                  advRenderTextDirIndex,
                  renderTextDirOptions,
                  Object.fromEntries(Object.entries(renderTextDirOptionsMap).map(([k, v]) => [k, tt(v)]))
                ]
              ].map(
                ([title, opt, optIndex, opts, optMap]) => vue.h("div", {}, [
                  vue.h(
                    "div",
                    {
                      style: {
                        fontSize: "12px"
                      }
                    },
                    tt(title)
                  ),
                  vue.h("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      userSelect: "none"
                    }
                  }, [
                    vue.h(optIndex.value <= 0 ? "div" : IconCarbonChevronLeft, {
                      style: {
                        width: "1.2em",
                        cursor: "pointer"
                      },
                      onClick: vue.withModifiers(() => {
                        if (optIndex.value <= 0)
                          return;
                        opt.value = opts[optIndex.value - 1];
                      }, ["stop", "prevent"])
                    }),
                    vue.h("div", {}, untt(optMap[opt.value])),
                    vue.h(optIndex.value >= opts.length - 1 ? "div" : IconCarbonChevronRight, {
                      style: {
                        width: "1.2em",
                        cursor: "pointer"
                      },
                      onClick: vue.withModifiers(() => {
                        if (optIndex.value >= opts.length - 1)
                          return;
                        opt.value = opts[optIndex.value + 1];
                      }, ["stop", "prevent"])
                    })
                  ])
                ])
              ),
              vue.h("div", {
                style: {
                  padding: "2px 0px 1px 0px",
                  border: "1px solid #A1A1AA",
                  borderRadius: "2px",
                  textAlign: "center",
                  cursor: "pointer"
                },
                onClick: vue.withModifiers(() => {
                  if (!submitTranslateTest())
                    return;
                  if (translateEnabledMap[currentImg.value])
                    return;
                  enable(currentImg.value, {
                    detectionResolution: advDetectRes.value,
                    renderTextOrientation: advRenderTextDir.value,
                    textDetector: advTextDetector.value,
                    translator: advTranslator.value
                  });
                  advancedMenuOpen.value = false;
                }, ["stop", "prevent"])
              }, tt(t("common.control.translate")))
            ])
          ] : vue.h(IconCarbonChevronLeft, {
            style: {
              verticalAlign: "middle",
              paddingBottom: "3px",
              cursor: "pointer"
            },
            onClick: vue.withModifiers(() => {
              advancedMenuOpen.value = true;
            }, ["stop", "prevent"])
          }) : []
        );
      }));
      buttonStatusApp.mount(buttonStatusContainer);
      return {
        active,
        update() {
          vue.triggerRef(updateRef);
          if (referenceChild.style.backgroundColor)
            child.style.backgroundColor = backgroundColor.value = referenceChild.style.backgroundColor;
        },
        stop() {
          stopDisplayWatch();
          stopSpinnerWatch();
          stopImageWatch();
          buttonIconApp.unmount();
          buttonStatusApp.unmount();
          buttonParent.removeChild(container);
          for (const img of images.value) {
            if (img.hasAttribute("data-transurl")) {
              const transurl = img.getAttribute("data-transurl");
              img.src = transurl;
              img.removeAttribute("data-transurl");
            }
          }
        }
      };
    };
    let dialogInstance;
    const rescanLayers = () => {
      var _a2;
      const [newDialog] = Array.from(layers.children).filter((el) => {
        var _a3, _b, _c;
        return (_c = (_b = (_a3 = el.querySelector('[aria-labelledby="modal-header"][role="dialog"]')) == null ? void 0 : _a3.firstChild) == null ? void 0 : _b.firstChild) == null ? void 0 : _c.childNodes[2];
      });
      if (newDialog !== dialog || !newDialog) {
        dialogInstance == null ? void 0 : dialogInstance.stop();
        dialogInstance = void 0;
        dialog = newDialog;
        if (!dialog)
          return;
        dialogInstance = createDialogInstance();
      }
      const newIndex = Number((_a2 = location.pathname.match(/\/status\/\d+\/photo\/(\d+)/)) == null ? void 0 : _a2[1]) - 1;
      if (newIndex !== dialogInstance.active.value)
        dialogInstance.active.value = newIndex;
      dialogInstance.update();
    };
    const onLayersUpdate = () => {
      layersObserver = new MutationObserver(
        shared.useThrottleFn(() => {
          rescanLayers();
        }, 200, true, false)
      );
      layersObserver.observe(layers, { childList: true, subtree: true });
      rescanLayers();
    };
    if (layers) {
      onLayersUpdate();
    } else {
      initObserver = new MutationObserver(
        shared.useThrottleFn(() => {
          layers = document.getElementById("layers");
          if (layers) {
            onLayersUpdate();
            initObserver == null ? void 0 : initObserver.disconnect();
          }
        }, 200, true, false)
      );
      initObserver.observe(document.body, { childList: true, subtree: true });
    }
    return {
      canKeep(url) {
        var _a2;
        const urlStatusId = (_a2 = url.match(/\/status\/(\d+)/)) == null ? void 0 : _a2[1];
        return urlStatusId === statusId;
      },
      stop() {
        layersObserver == null ? void 0 : layersObserver.disconnect();
        initObserver == null ? void 0 : initObserver.disconnect();
      }
    };
  }
  const translator = {
    match(url) {
      return url.hostname.endsWith("twitter.com") && url.pathname.match(/\/status\//);
    },
    mount: mount$1
  };

  function mount() {
    let settingsTab;
    let textApp;
    const checkTab = () => {
      const tablist = document.querySelector('[role="tablist"]') || document.querySelector('[data-testid="loggedOutPrivacySection"]');
      if (!tablist) {
        if (textApp) {
          textApp.unmount();
          textApp = void 0;
        }
        return;
      }
      if (tablist.querySelector(`div[data-imgtrans-settings-${EDITION}]`))
        return;
      const inactiveRefrenceEl = Array.from(tablist.children).find((el) => el.children.length < 2 && el.querySelector("a"));
      if (!inactiveRefrenceEl)
        return;
      settingsTab = inactiveRefrenceEl.cloneNode(true);
      settingsTab.setAttribute(`data-imgtrans-settings-${EDITION}`, "true");
      const textEl = settingsTab.querySelector("span");
      if (textEl) {
        textApp = vue.createApp(() => tt(t("settings.title")));
        textApp.mount(textEl);
      }
      const linkEl = settingsTab.querySelector("a");
      if (linkEl)
        linkEl.href = `/settings/__imgtrans_${EDITION}`;
      tablist.appendChild(settingsTab);
    };
    let settingsApp;
    const checkSettings = () => {
      var _a, _b;
      const section = (_b = (_a = document.querySelector('[data-testid="error-detail"]')) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
      if (!(section == null ? void 0 : section.querySelector(`[data-imgtrans-settings-${EDITION}-section]`))) {
        if (settingsApp) {
          settingsApp.unmount();
          settingsApp = void 0;
        }
        if (!section)
          return;
      }
      const title = `${tt(t("settings.title"))} / Twitter`;
      if (document.title !== title)
        document.title = title;
      if (settingsApp)
        return;
      const errorPage = section.firstChild;
      errorPage.style.display = "none";
      const settingsContainer = document.createElement("div");
      settingsContainer.setAttribute(`data-imgtrans-settings-${EDITION}-section`, "true");
      section.appendChild(settingsContainer);
      settingsApp = vue.createApp(vue.defineComponent(() => {
        vue.onUnmounted(() => {
          errorPage.style.display = "";
        });
        return () => vue.h("div", {
          style: {
            paddingLeft: "16px",
            paddingRight: "16px"
          }
        }, [
          vue.h("div", {
            style: {
              display: "flex",
              height: "53px",
              alignItems: "center"
            }
          }, [
            vue.h("h2", {
              style: {
                fontSize: "20px",
                lineHeight: "24px"
              }
            }, tt(t("settings.title")))
          ]),
          renderSettings()
        ]);
      }));
      settingsApp.mount(settingsContainer);
    };
    const listObserver = new MutationObserver(
      shared.useThrottleFn(() => {
        checkTab();
        if (location.pathname.match(`/settings/__imgtrans_${EDITION}`)) {
          if (settingsTab && settingsTab.children.length < 2) {
            settingsTab.style.backgroundColor = "#F7F9F9";
            const activeIndicator = document.createElement("div");
            activeIndicator.style.position = "absolute";
            activeIndicator.style.zIndex = "1";
            activeIndicator.style.top = "0";
            activeIndicator.style.left = "0";
            activeIndicator.style.bottom = "0";
            activeIndicator.style.right = "0";
            activeIndicator.style.borderRight = "2px solid #1D9Bf0";
            activeIndicator.style.pointerEvents = "none";
            settingsTab.appendChild(activeIndicator);
          }
          checkSettings();
        } else {
          if (settingsTab && settingsTab.children.length > 1) {
            settingsTab.style.backgroundColor = "";
            settingsTab.removeChild(settingsTab.lastChild);
          }
          if (settingsApp) {
            settingsApp.unmount();
            settingsApp = void 0;
          }
        }
      }, 200, true, false)
    );
    listObserver.observe(document.body, { childList: true, subtree: true });
    return {
      canKeep(url) {
        return url.includes("twitter.com") && url.includes("settings/");
      },
      stop() {
        settingsApp == null ? void 0 : settingsApp.unmount();
        listObserver.disconnect();
      }
    };
  }
  const settingsInjector = {
    match(url) {
      return url.hostname.endsWith("twitter.com") && url.pathname.match(/\/settings\//);
    },
    mount
  };

  start([translator$1, translator], [settingsInjector$1, settingsInjector]);

})(Vue, VueUse);
