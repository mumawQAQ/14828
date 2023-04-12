// ==UserScript==
// @name          Always on focus
// @namespace     https://github.com/daijro/always-on-focus
// @description   Prevent websites from knowing that you switched tabs
// @author        daijro
// @version       1.1
// @description   Trick websites into thinking the tab is always on focus
// @include       *
// @run-at        document-start
// ==/UserScript==

unsafeWindow.onblur = null;
unsafeWindow.blurred = false;

unsafeWindow.document.hasFocus = function () {return true;};
unsafeWindow.window.onFocus = function () {return true;};

Object.defineProperty(document, "hidden", { value : false});
Object.defineProperty(document, "mozHidden", { value : false});
Object.defineProperty(document, "msHidden", { value : false});
Object.defineProperty(document, "webkitHidden", { value : false});
Object.defineProperty(document, 'visibilityState', { get: function () { return "visible"; } });

unsafeWindow.document.onvisibilitychange = undefined;

for (event_name of ["visibilitychange",
                    "webkitvisibilitychange",
                    "blur", // may cause issues on some websites
                    "mozvisibilitychange",
                    "msvisibilitychange"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
}
