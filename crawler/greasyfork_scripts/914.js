// ==UserScript==
// @name         YouTube Mute and Skip Ads
// @namespace    https://github.com/ion1/userscripts
// @version      0.0.18
// @author       ion
// @description  Mutes, blurs and skips ads on YouTube. Speeds up ad playback. Clicks "yes" on "are you there?" on YouTube Music.
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepage     https://github.com/ion1/userscripts/tree/master/packages/youtube-mute-skip-ads
// @homepageURL  https://github.com/ion1/userscripts/tree/master/packages/youtube-mute-skip-ads
// @match        *://www.youtube.com/*
// @match        *://music.youtube.com/*
// @run-at       document-body
// ==/UserScript==

(n=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.textContent=n,document.head.append(e)})(` #movie_player.ad-showing video {
  filter: blur(100px) opacity(0.25) grayscale(0.5);
}

#movie_player.ad-showing .ytp-title,
#movie_player.ad-showing .ytp-title-channel,
.ytp-ad-visit-advertiser-button,
ytmusic-app:has(#movie_player.ad-showing)
  ytmusic-player-bar
  :is(.title, .subtitle) {
  filter: blur(4px) opacity(0.5) grayscale(0.5);
}

@media (prefers-reduced-motion: no-preference) {

#movie_player.ad-showing .ytp-title,
#movie_player.ad-showing .ytp-title-channel,
.ytp-ad-visit-advertiser-button,
ytmusic-app:has(#movie_player.ad-showing)
  ytmusic-player-bar
  :is(.title, .subtitle) {
    transition: 0.05s filter linear;
}
  }

:is(#movie_player.ad-showing .ytp-title,#movie_player.ad-showing .ytp-title-channel,.ytp-ad-visit-advertiser-button,ytmusic-app:has(#movie_player.ad-showing)
  ytmusic-player-bar
  :is(.title, .subtitle)):hover,
  :is(#movie_player.ad-showing .ytp-title,#movie_player.ad-showing .ytp-title-channel,.ytp-ad-visit-advertiser-button,ytmusic-app:has(#movie_player.ad-showing)
  ytmusic-player-bar
  :is(.title, .subtitle)):focus-within {
    filter: none;
  }

#movie_player.ad-showing .caption-window,
.ytp-ad-player-overlay-flyout-cta,
ytd-action-companion-ad-renderer,
ytd-display-ad-renderer,
ytd-ad-slot-renderer,
ytd-promoted-sparkles-web-renderer,
ytd-player-legacy-desktop-watch-ads-renderer,
ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"] {
  filter: blur(10px) opacity(0.25) grayscale(0.5);
}

@media (prefers-reduced-motion: no-preference) {

#movie_player.ad-showing .caption-window,
.ytp-ad-player-overlay-flyout-cta,
ytd-action-companion-ad-renderer,
ytd-display-ad-renderer,
ytd-ad-slot-renderer,
ytd-promoted-sparkles-web-renderer,
ytd-player-legacy-desktop-watch-ads-renderer,
ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"] {
    transition: 0.05s filter linear;
}
  }

:is(#movie_player.ad-showing .caption-window,.ytp-ad-player-overlay-flyout-cta,ytd-action-companion-ad-renderer,ytd-display-ad-renderer,ytd-ad-slot-renderer,ytd-promoted-sparkles-web-renderer,ytd-player-legacy-desktop-watch-ads-renderer,ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]):hover,
  :is(#movie_player.ad-showing .caption-window,.ytp-ad-player-overlay-flyout-cta,ytd-action-companion-ad-renderer,ytd-display-ad-renderer,ytd-ad-slot-renderer,ytd-promoted-sparkles-web-renderer,ytd-player-legacy-desktop-watch-ads-renderer,ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]):focus-within {
    filter: none;
  }
 `);

(function () {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  const logPrefix = "youtube-mute-skip-ads:";
  class Watcher {
    constructor(name, elem) {
      __publicField(this, "name");
      __publicField(this, "element");
      __publicField(this, "onCreated");
      __publicField(this, "onRemoved");
      __publicField(this, "nodeObserver");
      __publicField(this, "nodeWatchers");
      __publicField(this, "textObserver");
      __publicField(this, "onTextChanged");
      __publicField(this, "onAttrChanged");
      __publicField(this, "visibilityAncestor");
      __publicField(this, "visibilityObserver");
      __publicField(this, "isVisible");
      __publicField(this, "visibilityWatchers");
      this.name = name;
      this.element = null;
      this.onCreated = [];
      this.onRemoved = [];
      this.nodeObserver = null;
      this.nodeWatchers = [];
      this.textObserver = null;
      this.onTextChanged = [];
      this.onAttrChanged = [];
      this.visibilityAncestor = null;
      this.visibilityObserver = null;
      this.isVisible = null;
      this.visibilityWatchers = [];
      if (elem != null) {
        this.connect(elem);
      }
    }
    assertElement() {
      if (this.element == null) {
        throw new Error(`Watcher not connected to an element`);
      }
      return this.element;
    }
    assertVisibilityAncestor() {
      if (this.visibilityAncestor == null) {
        throw new Error(`Watcher is missing a visibilityAncestor`);
      }
      return this.visibilityAncestor;
    }
    isConnected() {
      return this.element != null;
    }
    connect(element, visibilityAncestor) {
      if (this.element != null) {
        if (this.element !== element) {
          console.error(
            logPrefix,
            `Watcher already connected to`,
            this.element,
            `while trying to connect to`,
            element
          );
        }
        return;
      }
      this.element = element;
      this.visibilityAncestor = visibilityAncestor ?? null;
      for (const callback of this.onCreated) {
        callback(this.element);
      }
      for (const { selector, name, watcher: watcher2 } of this.nodeWatchers) {
        for (const descElem of getDescendantsBy(this.element, selector, name)) {
          watcher2.connect(descElem, this.element);
        }
      }
      for (const callback of this.onTextChanged) {
        callback(this.element.textContent);
      }
      for (const { name, callback } of this.onAttrChanged) {
        callback(this.element.getAttribute(name));
      }
      this.registerNodeObserver();
      this.registerTextObserver();
      this.registerAttrObservers();
      this.registerVisibilityObserver();
    }
    disconnect() {
      if (this.element == null) {
        return;
      }
      for (const child of this.nodeWatchers) {
        child.watcher.disconnect();
      }
      for (const callback of this.onTextChanged) {
        callback(null);
      }
      for (const { callback } of this.onAttrChanged) {
        callback(null);
      }
      for (const child of this.visibilityWatchers) {
        child.disconnect();
      }
      this.deregisterNodeObserver();
      this.deregisterTextObserver();
      this.deregisterAttrObservers();
      this.deregisterVisibilityObserver();
      for (const callback of this.onRemoved) {
        callback(this.element);
      }
      this.element = null;
    }
    registerNodeObserver() {
      if (this.nodeObserver != null) {
        return;
      }
      if (this.nodeWatchers.length === 0) {
        return;
      }
      const elem = this.assertElement();
      this.nodeObserver = new MutationObserver((mutations) => {
        for (const mut of mutations) {
          for (const node of mut.addedNodes) {
            for (const { selector, name, watcher: watcher2 } of this.nodeWatchers) {
              for (const descElem of getSelfOrDescendantsBy(
                node,
                selector,
                name
              )) {
                watcher2.connect(descElem, elem);
              }
            }
          }
          for (const node of mut.removedNodes) {
            for (const { selector, name, watcher: watcher2 } of this.nodeWatchers) {
              for (const _descElem of getSelfOrDescendantsBy(
                node,
                selector,
                name
              )) {
                watcher2.disconnect();
              }
            }
          }
        }
      });
      this.nodeObserver.observe(elem, {
        subtree: true,
        childList: true
      });
    }
    registerTextObserver() {
      if (this.textObserver != null) {
        return;
      }
      if (this.onTextChanged.length === 0) {
        return;
      }
      const elem = this.assertElement();
      this.textObserver = new MutationObserver((_mutations) => {
        for (const callback of this.onTextChanged) {
          callback(elem.textContent);
        }
      });
      this.textObserver.observe(elem, {
        subtree: true,
        // This is needed when elements are replaced to update their text.
        childList: true,
        characterData: true
      });
    }
    registerAttrObservers() {
      const elem = this.assertElement();
      for (const handler of this.onAttrChanged) {
        if (handler.observer != null) {
          continue;
        }
        const { name, callback } = handler;
        handler.observer = new MutationObserver((_mutations) => {
          callback(elem.getAttribute(name));
        });
        handler.observer.observe(elem, {
          attributes: true,
          attributeFilter: [name]
        });
      }
    }
    registerVisibilityObserver() {
      if (this.visibilityObserver != null) {
        return;
      }
      if (this.visibilityWatchers.length === 0) {
        return;
      }
      this.isVisible = false;
      const elem = this.assertElement();
      const visibilityAncestor = this.assertVisibilityAncestor();
      this.visibilityObserver = new IntersectionObserver(
        (entries) => {
          const oldVisible = this.isVisible;
          for (const entry of entries) {
            this.isVisible = entry.isIntersecting;
          }
          if (this.isVisible !== oldVisible) {
            if (this.isVisible) {
              for (const watcher2 of this.visibilityWatchers) {
                watcher2.connect(elem, visibilityAncestor);
              }
            } else {
              for (const watcher2 of this.visibilityWatchers) {
                watcher2.disconnect();
              }
            }
          }
        },
        {
          root: visibilityAncestor
        }
      );
      this.visibilityObserver.observe(elem);
    }
    deregisterNodeObserver() {
      if (this.nodeObserver == null) {
        return;
      }
      this.nodeObserver.disconnect();
      this.nodeObserver = null;
    }
    deregisterTextObserver() {
      if (this.textObserver == null) {
        return;
      }
      this.textObserver.disconnect();
      this.textObserver = null;
    }
    deregisterAttrObservers() {
      for (const handler of this.onAttrChanged) {
        if (handler.observer == null) {
          continue;
        }
        handler.observer.disconnect();
        handler.observer = null;
      }
    }
    deregisterVisibilityObserver() {
      if (this.visibilityObserver == null) {
        return;
      }
      this.visibilityObserver.disconnect();
      this.visibilityObserver = null;
      this.isVisible = null;
    }
    lifecycle(onCreated, onRemoved) {
      this.onCreated.push(onCreated);
      if (onRemoved != null) {
        this.onRemoved.push(onRemoved);
      }
      if (this.element != null) {
        onCreated(this.element);
      }
      return this;
    }
    descendant(selector, name) {
      const watcher2 = new Watcher(`${this.name} → ${name}`);
      this.nodeWatchers.push({ selector, name, watcher: watcher2 });
      if (this.element != null) {
        for (const descElem of getDescendantsBy(this.element, selector, name)) {
          watcher2.connect(descElem, this.element);
        }
        this.registerNodeObserver();
      }
      return watcher2;
    }
    id(idName) {
      return this.descendant("id", idName);
    }
    klass(className) {
      return this.descendant("class", className);
    }
    tag(tagName) {
      return this.descendant("tag", tagName);
    }
    visible() {
      const watcher2 = new Watcher(`${this.name} (visible)`);
      this.visibilityWatchers.push(watcher2);
      if (this.element != null) {
        const visibilityAncestor = this.assertVisibilityAncestor();
        if (this.isVisible) {
          watcher2.connect(this.element, visibilityAncestor);
        }
        this.registerVisibilityObserver();
      }
      return watcher2;
    }
    text(callback) {
      this.onTextChanged.push(callback);
      if (this.element != null) {
        callback(this.element.textContent);
        this.registerTextObserver();
      }
      return this;
    }
    attr(name, callback) {
      this.onAttrChanged.push({ name, callback, observer: null });
      if (this.element != null) {
        callback(this.element.getAttribute(name));
        this.registerAttrObservers();
      }
      return this;
    }
  }
  function getSelfOrDescendantsBy(node, selector, name) {
    if (!(node instanceof HTMLElement)) {
      return [];
    }
    if (selector === "id" || selector === "class" || selector === "tag") {
      if (selector === "id" && node.id === name || selector === "class" && node.classList.contains(name) || selector === "tag" && node.tagName.toLowerCase() === name.toLowerCase()) {
        return [node];
      } else {
        return getDescendantsBy(node, selector, name);
      }
    } else {
      const impossible = selector;
      throw new Error(`Impossible selector type: ${JSON.stringify(impossible)}`);
    }
  }
  function getDescendantsBy(node, selector, name) {
    if (!(node instanceof HTMLElement)) {
      return [];
    }
    let cssSelector = "";
    if (selector === "id") {
      cssSelector += "#";
    } else if (selector === "class") {
      cssSelector += ".";
    } else if (selector === "tag")
      ;
    else {
      const impossible = selector;
      throw new Error(`Impossible selector type: ${JSON.stringify(impossible)}`);
    }
    cssSelector += CSS.escape(name);
    return Array.from(node.querySelectorAll(cssSelector));
  }
  const videoSelector = "#movie_player video";
  function getVideoElement() {
    const videoElem = document.querySelector(videoSelector);
    if (!(videoElem instanceof HTMLVideoElement)) {
      console.error(
        logPrefix,
        "Expected",
        JSON.stringify(videoSelector),
        "to be a video element, got:",
        videoElem == null ? void 0 : videoElem.cloneNode(true)
      );
      return null;
    }
    return videoElem;
  }
  function disableVisibilityChecks() {
    for (const eventName of ["visibilitychange", "blur", "focus"]) {
      document.addEventListener(
        eventName,
        (ev) => {
          ev.stopImmediatePropagation();
        },
        { capture: true }
      );
    }
    document.hasFocus = () => true;
    Object.defineProperties(document, {
      visibilityState: { value: "visible" },
      hidden: { value: false }
    });
  }
  function adUIAdded(_elem) {
    console.info(logPrefix, "An ad is playing, muting");
    const video = getVideoElement();
    if (video == null) {
      return;
    }
    video.muted = true;
    for (let rate = 16; rate >= 2; rate /= 2) {
      try {
        video.playbackRate = rate;
        break;
      } catch (e) {
        console.debug(logPrefix, `Setting playback rate to`, rate, `failed:`, e);
      }
    }
  }
  function adUIRemoved(_elem) {
    {
      return;
    }
  }
  function click(description) {
    return (elem) => {
      console.info(logPrefix, "Clicking:", description);
      elem.click();
    };
  }
  disableVisibilityChecks();
  const watcher = new Watcher("body", document.body);
  watcher.klass("ytp-ad-player-overlay").lifecycle(adUIAdded, adUIRemoved);
  watcher.id("movie_player").klass("ytp-ad-skip-button").visible().lifecycle(click("skip"));
  watcher.klass("ytp-ad-overlay-close-button").lifecycle(click("overlay close"));
  watcher.tag("ytmusic-you-there-renderer").tag("button").lifecycle(click("are-you-there"));

})();
