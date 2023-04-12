// ==UserScript==
// @name                 v2ex.min - V2EX 极简风格
// @name:en              v2ex.min - V2EX Minimalist (极简风格)
// @name:zh-CN           v2ex.min - V2EX 极简风格
// @namespace            https://github.com/v2hot/v2ex.min
// @homepage             https://github.com/v2hot/v2ex.min#readme
// @supportURL           https://github.com/v2hot/v2ex.min/issues
// @version              0.1.3
// @description          V2EX 极简风格，扁平化 UI，导航栏顶部固定，去除背景图片，支持黑暗模式，去除广告，去除不必要元素，支持隐藏头像，支持自定义样式。
// @description:en       V2EX minimalist style，扁平化 UI，导航栏顶部固定，去除背景图片，支持黑暗模式，去除广告，去除不必要元素，支持隐藏头像，支持自定义样式。
// @description:zh-CN    V2EX 极简风格，扁平化 UI，导航栏顶部固定，去除背景图片，支持黑暗模式，去除广告，去除不必要元素，支持隐藏头像，支持自定义样式。
// @icon                 https://www.v2ex.com/favicon.ico
// @author               Pipecraft
// @license              MIT
// @run-at               document-start
// @match                https://*.v2ex.com/*
// @match                https://v2hot.pipecraft.net/*
// @grant                GM_getValue
// @grant                GM_setValue
// @grant                GM_addValueChangeListener
// @grant                GM_removeValueChangeListener
// @grant                GM_addElement
// @grant                GM_addStyle
// @grant                GM_registerMenuCommand
// ==/UserScript==
//
//// Recent Updates
//// - 0.1.3 2023.04.12
////    - 隐藏最后回复者
//// - 0.1.1 2023.04.12
////    - 修改去除页面背景色逻辑
//// - 0.1.0 2023.04.11
////    - 添加自定义功能选项，自定义样式功能
////
;(() => {
  "use strict"
  var getValue = (key) => {
    const value = GM_getValue(key)
    return value && value !== "undefined" ? JSON.parse(value) : void 0
  }
  var setValue = (key, value) => {
    if (value !== void 0) GM_setValue(key, JSON.stringify(value))
  }
  var addValueChangeListener = (key, func) => {
    const listenerId = GM_addValueChangeListener(key, func)
    return () => {
      GM_removeValueChangeListener(listenerId)
    }
  }
  var doc = document
  var $ = (element, selectors) =>
    element && typeof element === "object"
      ? element.querySelector(selectors)
      : doc.querySelector(element)
  var $$ = (element, selectors) =>
    element && typeof element === "object"
      ? [...element.querySelectorAll(selectors)]
      : [...doc.querySelectorAll(element)]
  var createElement = (tagName, attributes) =>
    setAttributes(doc.createElement(tagName), attributes)
  var addEventListener = (element, type, listener, options) => {
    if (!element) {
      return
    }
    if (typeof type === "object") {
      for (const type1 in type) {
        if (Object.hasOwn(type, type1)) {
          element.addEventListener(type1, type[type1])
        }
      }
    } else if (typeof type === "string" && typeof listener === "function") {
      element.addEventListener(type, listener, options)
    }
  }
  var removeEventListener = (element, type, listener, options) => {
    if (!element) {
      return
    }
    if (typeof type === "object") {
      for (const type1 in type) {
        if (Object.hasOwn(type, type1)) {
          element.removeEventListener(type1, type[type1])
        }
      }
    } else if (typeof type === "string" && typeof listener === "function") {
      element.removeEventListener(type, listener, options)
    }
  }
  var setAttribute = (element, name, value) =>
    element ? element.setAttribute(name, value) : void 0
  var setAttributes = (element, attributes) => {
    if (element && attributes) {
      for (const name in attributes) {
        if (Object.hasOwn(attributes, name)) {
          const value = attributes[name]
          if (name === "textContent") {
            element[name] = value
          } else if (name === "style") {
            setStyle(element, value, true)
          } else if (/on\w+/.test(name)) {
            const type = name.slice(2)
            addEventListener(element, type, value)
          } else {
            setAttribute(element, name, value)
          }
        }
      }
    }
    return element
  }
  var setStyle = (element, values, overwrite) => {
    if (!element) {
      return
    }
    const style = element.style
    if (typeof values === "string") {
      style.cssText = overwrite ? values : style.cssText + ";" + values
      return
    }
    if (overwrite) {
      style.cssText = ""
    }
    for (const key in values) {
      if (Object.hasOwn(values, key)) {
        style[key] = values[key].replace("!important", "")
      }
    }
  }
  if (typeof Object.hasOwn !== "function") {
    Object.hasOwn = (instance, prop) =>
      Object.prototype.hasOwnProperty.call(instance, prop)
  }
  var addElement = (parentNode, tagName, attributes) => {
    if (typeof parentNode === "string" || typeof tagName === "string") {
      const element = GM_addElement(parentNode, tagName, attributes)
      setAttributes(element, attributes)
      return element
    }
    setAttributes(tagName, attributes)
    parentNode.append(tagName)
    return tagName
  }
  var addStyle = (styleText) => GM_addStyle(styleText)
  var registerMenuCommand = (name, callback, accessKey) =>
    window === top && GM_registerMenuCommand(name, callback, accessKey)
  var enhance_node_name_default =
    "#Main .box a.node{color:#1ba784}#Main td:has(.topic_info){display:flex;flex-direction:column-reverse}div.cell:has(.topic_info){border-bottom:5px solid var(--box-border-color)}"
  var hide_last_replier_default =
    "#Main .topic_info strong:nth-of-type(2),#Main .topic_info .last_replier_text{display:none}#Main .cell:hover .topic_info strong:nth-of-type(2),#Main .cell:hover .topic_info .last_replier_text{display:contents}"
  var hide_profile_photo_default =
    '#Main td:has(a>img.avatar),#Main td:has(a>img.avatar)+td[width="10"],#Main td[width="48"],#Main td[width="48"]+td[width="10"],#TopicsHot td:has(a>img.avatar),#TopicsHot td:has(a>img.avatar)+td,#my-recent-topics td:has(a>img),#my-recent-topics td:has(a>img)+td,#Main>box>div.cell[id] td:has(img.avatar),#Main>box>div.cell[id] td:has(img.avatar)+td{display:none !important}td>strong>.dark{color:#1ba784 !important}'
  var minimalist_default =
    '*{box-shadow:unset !important}.box,#Main .box,#Top,#Tabs,#Wrapper,#Bottom{background-image:unset !important;border:none !important}.cell,.box,.super.button,.topic_buttons,div[style*=border]{border:unset !important;background-image:unset !important}.count_livid{padding:0 !important;margin-right:0 !important;color:#999 !important;font-family:"Bender" !important;background-color:unset !important}body #Wrapper{background-color:#fff;--topic-link-color: #444444;--topic-link-hover-color: #217dfc}body #Wrapper.Night{background-color:var(--box-background-color);--topic-link-color: #9caec7;--topic-link-hover-color: #a9bcd6}a.topic-link:active,a.topic-link:link{color:var(--topic-link-color)}a.topic-link:hover{color:var(--topic-link-hover-color)}img{max-width:100%}'
  var no_ads_default =
    ".box:has(>style),div:has(>script),div:has(>.wwads-cn),.box:has(>.sidebar_compliance),div:has(>a>#DigitalOcean){display:none !important}"
  var sticky_header_default =
    '#Top{position:fixed;top:0;width:100%;box-sizing:border-box}#Top .content{max-width:unset !important;width:100% !important}.site-nav .tools{flex:unset}.site-nav a[name=top]{margin-right:auto}#Wrapper::before{content:"";display:block;height:44px}#placeholder{height:38px}#Tabs{position:fixed;top:1px;padding:9px;border:none}#search-container{width:100px}#search-container:has(input:focus){width:300px}body:has(input:focus) #Tabs{display:none}@media only screen and (max-width: 1300px){.site-nav a[name=top]{visibility:hidden}}'
  var content_default =
    "#v2min_settings{position:fixed;top:10px;right:30px;min-width:250px;max-height:90%;overflow-y:auto;overflow-x:hidden;display:none;box-sizing:border-box;padding:10px 15px;background-color:#f3f3f3;z-index:100000;border-radius:5px;-webkit-box-shadow:0px 10px 39px 10px rgba(62,66,66,.22);-moz-box-shadow:0px 10px 39px 10px rgba(62,66,66,.22);box-shadow:0px 10px 39px 10px rgba(62,66,66,.22) !important}#v2min_settings h2{text-align:center;margin:5px 0 0;font-size:18px;font-weight:600;border:none}#v2min_settings footer{text-align:center;font-size:11px;margin:10px auto 0px}#v2min_settings footer a{color:#217dfc}#v2min_settings .option_groups{background-color:#fff;padding:6px 0 6px 15px;border-radius:10px;display:flex;flex-direction:column;margin:10px 0 0}#v2min_settings .option_groups .action{font-size:14px;border-top:1px solid #ccc;padding:6px 15px 6px 0;color:#217dfc;cursor:pointer}#v2min_settings .option_groups:nth-of-type(2){display:none}#v2min_settings .option_groups textarea{margin:10px 15px 10px 0;height:200px;width:300px;border:1px solid #a9a9a9}#v2min_settings .switch_option{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ccc;padding:6px 15px 6px 0;font-size:14px}#v2min_settings .switch_option:first-of-type,#v2min_settings .option_groups .action:first-of-type{border-top:none}#v2min_settings .container{--button-width: 51px;--button-height: 24px;--toggle-diameter: 20px;--color-off: #e9e9eb;--color-on: #34c759;width:var(--button-width);height:var(--button-height);position:relative}#v2min_settings input[type=checkbox]{opacity:0;width:0;height:0;position:absolute}#v2min_settings .switch{width:100%;height:100%;display:block;background-color:var(--color-off);border-radius:calc(var(--button-height)/2);cursor:pointer;transition:all .2s ease-out}#v2min_settings .slider{width:var(--toggle-diameter);height:var(--toggle-diameter);position:absolute;left:2px;top:calc(50% - var(--toggle-diameter)/2);border-radius:50%;background:#fff;box-shadow:0px 3px 8px rgba(0,0,0,.15),0px 3px 1px rgba(0,0,0,.06);transition:all .2s ease-out;cursor:pointer}#v2min_settings input[type=checkbox]:checked+.switch{background-color:var(--color-on)}#v2min_settings input[type=checkbox]:checked+.switch .slider{left:calc(var(--button-width) - var(--toggle-diameter) - 2px)}"
  function createSwitch(options = {}) {
    const container = createElement("label", { class: "container" })
    const checkbox = createElement(
      "input",
      options.checked ? { type: "checkbox", checked: "" } : { type: "checkbox" }
    )
    addElement(container, checkbox)
    const switchElm = createElement("span", { class: "switch" })
    addElement(switchElm, "span", { class: "slider" })
    addElement(container, switchElm)
    if (options.onchange) {
      addEventListener(checkbox, "change", options.onchange)
    }
    return container
  }
  function createSwitchOption(text, options) {
    const div = createElement("div", { class: "switch_option" })
    addElement(div, "span", { textContent: text })
    div.append(createSwitch(options))
    return div
  }
  var settingsTable = {
    minimalist: {
      title: "\u6781\u7B80\u98CE\u683C",
      defaultValue: true,
    },
    stickyHeader: {
      title: "\u5BFC\u822A\u680F\u9876\u90E8\u56FA\u5B9A",
      defaultValue: true,
    },
    hideNodeList: {
      title: "\u9690\u85CF\u8282\u70B9\u5217\u8868",
      defaultValue: true,
    },
    enhanceNodeName: {
      title: "\u589E\u5F3A\u663E\u793A\u8282\u70B9\u540D",
      defaultValue: true,
    },
    bodyBackgroundColor: {
      title: "\u53BB\u9664\u9875\u9762\u80CC\u666F\u8272",
      defaultValue: false,
    },
    hidePinnedTopics: {
      title: "\u9690\u85CF\u7F6E\u9876\u5E16\u5B50",
      defaultValue: false,
    },
    hideProfilePhoto: {
      title: "\u9690\u85CF\u7528\u6237\u5934\u50CF",
      defaultValue: false,
    },
    hideLastReplier: {
      title: "\u9690\u85CF\u6700\u540E\u56DE\u590D\u8005",
      defaultValue: false,
    },
    customStyle: {
      title: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
      defaultValue: false,
    },
  }
  var settings = {}
  function getSettingsValue(key) {
    var _a
    return Object.hasOwn(settings, key)
      ? settings[key]
      : (_a = settingsTable[key]) == null
      ? void 0
      : _a.defaultValue
  }
  function registerMenuCommands() {
    registerMenuCommand("\u2699\uFE0F \u8BBE\u7F6E", showSettings, "o")
  }
  var modalHandler = (event) => {
    let target = event.target
    const settingsLayer = $("#v2min_settings")
    if (settingsLayer) {
      while (target !== settingsLayer && target) {
        target = target.parentNode
      }
      if (target === settingsLayer) {
        return
      }
      settingsLayer.style.display = "none"
      removeEventListener(document, "click", modalHandler)
    }
  }
  async function updateOptions() {
    if (!$("#v2min_settings")) {
      return
    }
    for (const key in settingsTable) {
      if (Object.hasOwn(settingsTable, key)) {
        const checkbox = $(
          `#v2min_settings .option_groups .switch_option[data-key=${key}] input`
        )
        if (checkbox) {
          checkbox.checked = getSettingsValue(key)
        }
      }
    }
    $(`#v2min_settings .option_groups:nth-of-type(2)`).style.display =
      getSettingsValue("customStyle") ? "block" : "none"
    const customStyleValue = $(`#v2min_settings .option_groups textarea`)
    customStyleValue.value = settings.customStyleValue || ""
  }
  async function showSettings() {
    let settingsLayer = $("#v2min_settings")
    if (!settingsLayer) {
      addStyle(content_default)
      settingsLayer = addElement(document.body, "div", {
        id: "v2min_settings",
      })
      addElement(settingsLayer, "h2", { textContent: "v2ex.min" })
      const options = addElement(settingsLayer, "div", {
        class: "option_groups",
      })
      for (const key in settingsTable) {
        if (Object.hasOwn(settingsTable, key)) {
          const item = settingsTable[key]
          const switchOption = createSwitchOption(item.title, {
            async onchange(event) {
              const settings2 = await getSettings()
              settings2[key] = event.target.checked
              await setValue("settings", settings2)
            },
          })
          switchOption.dataset.key = key
          addElement(options, switchOption)
        }
      }
      const options2 = addElement(settingsLayer, "div", {
        class: "option_groups",
      })
      let timeoutId
      addElement(options2, "textarea", {
        class: "custom_style",
        placeholder: `/* \u81EA\u5B9A\u4E49\u6837\u5F0F */
body #Wrapper {
  background-color: #f0f0f0;
}
body #Wrapper.Night {
  background-color: #22303f;
}`,
        onkeyup(event) {
          if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = null
          }
          timeoutId = setTimeout(async () => {
            const settings2 = await getSettings()
            settings2.customStyleValue = event.target.value
            await setValue("settings", settings2)
          }, 1e3)
        },
      })
      const options3 = addElement(settingsLayer, "div", {
        class: "option_groups",
      })
      addElement(options3, "a", {
        class: "action",
        textContent: "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E",
        async onclick() {
          await setValue("settings", {})
        },
      })
      addElement(options3, "a", {
        class: "action",
        textContent: "\u6062\u590D V2EX \u9ED8\u8BA4\u6837\u5F0F",
        async onclick() {
          await setValue("settings", {
            enhanceNodeName: false,
            hideNodeList: false,
            stickyHeader: false,
            bodyBackgroundColor: false,
            minimalist: false,
            hidePinnedTopics: false,
            hideProfilePhoto: false,
            customStyle: false,
          })
        },
      })
      const footer = addElement(settingsLayer, "footer")
      footer.innerHTML = `Made with \u2764\uFE0F by
    <a href="https://www.pipecraft.net/" target="_blank">
      Pipecraft
    </a>`
    }
    await updateOptions()
    settingsLayer.style.display = "block"
    addEventListener(document, "click", modalHandler)
  }
  async function addStyles() {
    const styles = []
    styles.push(no_ads_default)
    if (getSettingsValue("stickyHeader")) {
      styles.push(sticky_header_default)
    }
    if (getSettingsValue("minimalist")) {
      styles.push(minimalist_default)
    }
    if (!getSettingsValue("bodyBackgroundColor")) {
      styles.push(`
    body #Wrapper {
      background-color: #f0f0f0;
    }
    body #Wrapper.Night {
      background-color: #22303f;
    }
    `)
    }
    if (getSettingsValue("enhanceNodeName")) {
      styles.push(enhance_node_name_default)
    }
    if (getSettingsValue("hideProfilePhoto")) {
      styles.push(hide_profile_photo_default)
    }
    if (getSettingsValue("hideLastReplier")) {
      for (const element of $$("#Main .topic_info strong:nth-of-type(2)")) {
        if (element.previousSibling.nodeName === "SPAN") continue
        const span = createElement("span", { class: "last_replier_text" })
        span.append(element.previousSibling)
        element.before(span)
      }
      styles.push(hide_last_replier_default)
    }
    if (getSettingsValue("hidePinnedTopics")) {
      styles.push(`/* Hide pinned topics */
    #Main > div:nth-child(2) > div[style*="corner"] {
      display: none;
    }
    `)
    }
    if (getSettingsValue("hideNodeList")) {
      styles.push(`/* \u53F3\u4FA7\u680F\u4E00\u4E9B\u4E1C\u897F */
    #TopicsHot + div,
    #TopicsHot + div + div,
    #TopicsHot + div + div + div,
    #TopicsHot + div + div + div + div,
    #TopicsHot + div + div + div + div + div,
    #TopicsHot + div + div + div + div + div + div {
      display: none !important;
    }
    /* \u8282\u70B9\u5BFC\u822A */
    .box:has(a[href="/planes"]) {
      display: none;
    }
    `)
    }
    if (getSettingsValue("hideUnwantedTabs")) {
      styles.push(`/* Some tabs */
    #Tabs > a:nth-child(4),
    #Tabs > a:nth-child(5),
    #Tabs > a:nth-child(6),
    #Tabs > a:nth-child(7),
    #Tabs > a:nth-child(13) {
      display: none;
    }
    #Tabs > a {
      min-width: 3.5em;
    }
    `)
    }
    if ($("#v2min_style")) {
      $("#v2min_style").textContent = styles.join("")
    } else {
      addElement("style", {
        id: "v2min_style",
        textContent: styles.join(""),
      })
    }
    const customStyleValue = settings.customStyleValue || ""
    if (getSettingsValue("customStyle") && customStyleValue) {
      if ($("#v2min_custom_style")) {
        $("#v2min_custom_style").textContent = customStyleValue
      } else {
        addElement("style", {
          id: "v2min_custom_style",
          textContent: customStyleValue,
        })
      }
    } else if ($("#v2min_custom_style")) {
      $("#v2min_custom_style").remove()
    }
    if ($("#Tabs")) $("#Tabs").style.display = "block"
  }
  async function getSettings() {
    const settings2 = (await getValue("settings")) || {}
    return settings2
  }
  async function main() {
    if (document["v2ex.min"]) {
      return
    }
    document["v2ex.min"] = true
    registerMenuCommands()
    addValueChangeListener("settings", async () => {
      settings = await getSettings()
      await addStyles()
      await updateOptions()
    })
    settings = await getSettings()
    await addStyles()
    addEventListener(document, "DOMContentLoaded", addStyles)
  }
  main()
})()
