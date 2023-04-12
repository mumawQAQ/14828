// ==UserScript==
// @name            必应聊天页面优化
// @name:zh         必应聊天页面优化
// @name:en         New Bing Chat Helper
// @namespace       https://github.com/zhangnew
// @version         0.0.3
// @author          zhangnew
// @description     中文输入法写英文的时候按回车不发送对话; 新的对话开头自动加上一些提示; 对话被强制结束的时候,自动复制最后一个问题,并粘贴到下一次对话
// @description:zh  中文输入法写英文的时候按回车不发送对话; 新的对话开头自动加上一些提示; 对话被强制结束的时候,自动复制最后一个问题,并粘贴到下一次对话
// @description:en  Automatic input prompt for new session and Automatic copy the last question when the session is ended
// @license         MIT
// @icon            https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico
// @homepage        https://github.com/zhangnew/bing-chat-script
// @match           https://www.bing.com/search*
// @require         https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.prod.js
// @grant           GM_getValue
// @grant           GM_registerMenuCommand
// @grant           GM_setValue
// ==/UserScript==

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=t,document.head.appendChild(e)})(' #bing-chat-script-settings[data-v-b2fed112]{z-index:999;position:fixed;top:20%;left:80%;transform:translate(-50%,-50%);border:1px solid #000;padding:10px;background-color:#fff}button[data-v-b2fed112]{padding:.6em 1em;border:none;outline:none;color:#fff;background:#111;cursor:pointer;position:relative;z-index:0;border-radius:10px;user-select:none;-webkit-user-select:none;touch-action:manipulation}button[data-v-b2fed112]:before{content:"";background:linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000);position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);-webkit-filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:glowing-button-b2fed112 20s linear infinite;transition:opacity .3s ease-in-out;border-radius:10px}@keyframes glowing-button-b2fed112{0%{background-position:0 0}50%{background-position:400% 0}to{background-position:0 0}}button[data-v-b2fed112]:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#222;left:0;top:0;border-radius:10px} ');

(function(vue) {
  "use strict";
  const defaultPrompt = "请你后面的回答都用英文资料去思考,并翻译成中文回答,第一个问题是: ";
  const utils = {
    defaultPrompt,
    waitObj(selection, fn) {
      setTimeout(function loading() {
        let obj = document.querySelector(selection);
        if (obj) {
          fn(obj);
        } else {
          console.log("waiting for obj:" + selection);
          setTimeout(loading, 500);
        }
      }, 500);
    }
  };
  var monkeyWindow = window;
  var GM_setValue = /* @__PURE__ */ (() => monkeyWindow.GM_setValue)();
  var GM_registerMenuCommand = /* @__PURE__ */ (() => monkeyWindow.GM_registerMenuCommand)();
  var GM_getValue = /* @__PURE__ */ (() => monkeyWindow.GM_getValue)();
  const Settings_vue_vue_type_style_index_0_scoped_b2fed112_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _withScopeId = (n) => (vue.pushScopeId("data-v-b2fed112"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { id: "bing-chat-script-settings" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { style: { "font-weight": "bold", "position": "relative", "left": "30%" } }, "Bing Chat Settings", -1));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("label", null, "Prompt text: ", -1));
  const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _sfc_main$1 = {
    __name: "Settings",
    setup(__props) {
      let showSetting = vue.ref(false);
      GM_registerMenuCommand("Settings", function() {
        showSetting.value = true;
      });
      const prompt = vue.ref(GM_getValue("prompt", utils.defaultPrompt));
      function saveSettings() {
        console.log("save: " + prompt.value);
        GM_setValue("prompt", prompt.value);
        showSetting.value = false;
      }
      function resetPrompt() {
        prompt.value = utils.defaultPrompt;
        GM_setValue("prompt", prompt.value);
      }
      function clearPrompt() {
        prompt.value = "";
      }
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          _hoisted_3,
          _hoisted_4,
          _hoisted_5,
          vue.withDirectives(vue.createElementVNode("textarea", {
            style: { "height": "80px", "width": "98%" },
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => prompt.value = $event)
          }, null, 512), [
            [vue.vModelText, prompt.value]
          ]),
          _hoisted_6,
          _hoisted_7,
          vue.createElementVNode("button", { onClick: resetPrompt }, "Reset default prompt"),
          vue.createElementVNode("button", {
            style: { "float": "right" },
            onClick: clearPrompt
          }, "clear prompt"),
          _hoisted_8,
          _hoisted_9,
          vue.createElementVNode("button", { onClick: saveSettings }, "Save settings (Refresh the page to take effect)")
        ], 512)), [
          [vue.vShow, vue.unref(showSetting)]
        ]);
      };
    }
  };
  const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b2fed112"]]);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      function addEventListener(obj) {
        var input = obj.shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("#searchbox");
        function typePrompt() {
          let chat = obj.shadowRoot.querySelector("#cib-conversation-main").shadowRoot.querySelectorAll("#cib-chat-main > cib-chat-turn");
          let lastChat = chat[chat.length - 1];
          let response = lastChat.shadowRoot.querySelector("cib-message-group.response-message-group");
          var lastQ = "";
          if (response) {
            let lastA = response.shadowRoot.querySelectorAll("cib-message");
            if (lastA.length === 1) {
              lastQ = lastChat.shadowRoot.querySelector("cib-message-group:nth-child(1)").shadowRoot.querySelector("cib-message").shadowRoot.querySelector("cib-shared > div.content.text-message-content").innerText;
            }
          }
          input.value = "";
          input.value = GM_getValue("prompt", utils.defaultPrompt) + lastQ;
          var event = new Event("input", {
            bubbles: true,
            cancelable: true
          });
          input.dispatchEvent(event);
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
        var newTopicBtn = obj.shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.outside-left-container > div > button");
        newTopicBtn.addEventListener("click", typePrompt);
      }
      let searchBox = null;
      let sendMsgBtn = null;
      function resetEnterEvent() {
        var originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function(type, listener, options) {
          if (this instanceof HTMLTextAreaElement && this.id === "searchbox") {
            var newListener = function(event) {
              if (event.keyCode === 13) {
                if (searchBox.value.endsWith("\n")) {
                  searchBox.value = searchBox.value.replace("\n", "");
                  sendMsgBtn.click();
                  return;
                }
                return;
              }
            };
            if (type === "keydown" || type === "keyup") {
              originalAddEventListener.call(this, type, newListener, options);
            } else {
              originalAddEventListener.call(this, type, listener, options);
            }
          } else {
            originalAddEventListener.call(this, type, listener, options);
          }
        };
      }
      resetEnterEvent();
      utils.waitObj("#b_sydConvCont > cib-serp", function(obj) {
        addEventListener(obj);
        searchBox = obj.shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("#searchbox");
        sendMsgBtn = obj.shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div.input-container > div.controls-right > div > button");
        console.log("script loaded.");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Settings);
      };
    }
  };
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      const header = document.querySelector("#b_header");
      header.insertBefore(app, header.firstChild);
      return app;
    })()
  );
})(Vue);
