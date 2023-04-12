// ==UserScript==
// @name       max-amex-offer
// @namespace  mao
// @version    0.0.4
// @author     monkey
// @icon       https://www.uscardforum.com/uploads/default/original/3X/2/0/20854a782c784b51b8d7cf43a4b8075bbe4b9664.png?v=12
// @match      *://*.americanexpress.com/*
// @require    https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.20.0/plotly-basic.min.js
// @require    https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-min.min.js
// @description Find the best amex offer across your accounts
// ==/UserScript==

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.textContent=t,document.head.append(e)})(" #root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.card{padding:2em}.read-the-docs{color:#888}.offer-chart-container{display:flex;flex-direction:row;height:100%;width:100%}.offer-chart{flex:1;height:100%}.offer-details-container{width:250px;height:100%;overflow-y:auto;padding:10px}.offer-details{padding:20px;border-radius:10px;display:flex;flex-direction:column;text-align:left;margin:0}.offer-details-header{display:flex;justify-content:center;align-items:center;margin-bottom:20px}.offer-details-header img{max-height:100px;max-width:100%}.offer-details-body{flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;text-align:left}.offer-details-body h3{margin-top:0;margin-bottom:10px}.offer-details-body p{margin-top:0;margin-bottom:5px} ");

(function (require$$0, require$$0$1, _, Plotly) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntimeExports = {};
  var jsxRuntime = {
    get exports() {
      return jsxRuntimeExports;
    },
    set exports(v) {
      jsxRuntimeExports = v;
    }
  };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  (function(module) {
    {
      module.exports = reactJsxRuntime_production_min;
    }
  })(jsxRuntime);
  const Fragment = jsxRuntimeExports.Fragment;
  const jsx = jsxRuntimeExports.jsx;
  const jsxs = jsxRuntimeExports.jsxs;
  var client = {};
  var m = require$$0$1;
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  var factory = {};
  var propTypesExports = {};
  var propTypes = {
    get exports() {
      return propTypesExports;
    },
    set exports(v) {
      propTypesExports = v;
    }
  };
  var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  {
    propTypes.exports = factoryWithThrowingShims();
  }
  (function(exports) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = plotComponentFactory;
    var _react = _interopRequireWildcard(require$$0);
    var _propTypes = _interopRequireDefault(propTypesExports);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var eventNames = ["AfterExport", "AfterPlot", "Animated", "AnimatingFrame", "AnimationInterrupted", "AutoSize", "BeforeExport", "BeforeHover", "ButtonClicked", "Click", "ClickAnnotation", "Deselect", "DoubleClick", "Framework", "Hover", "LegendClick", "LegendDoubleClick", "Relayout", "Relayouting", "Restyle", "Redraw", "Selected", "Selecting", "SliderChange", "SliderEnd", "SliderStart", "SunburstClick", "Transitioning", "TransitionInterrupted", "Unhover", "WebGlContextLost"];
    var updateEvents = ["plotly_restyle", "plotly_redraw", "plotly_relayout", "plotly_relayouting", "plotly_doubleclick", "plotly_animated", "plotly_sunburstclick"];
    var isBrowser = typeof window !== "undefined";
    function plotComponentFactory(Plotly2) {
      var PlotlyComponent = /* @__PURE__ */ function(_Component) {
        _inherits(PlotlyComponent2, _Component);
        var _super = _createSuper(PlotlyComponent2);
        function PlotlyComponent2(props) {
          var _this;
          _classCallCheck(this, PlotlyComponent2);
          _this = _super.call(this, props);
          _this.p = Promise.resolve();
          _this.resizeHandler = null;
          _this.handlers = {};
          _this.syncWindowResize = _this.syncWindowResize.bind(_assertThisInitialized(_this));
          _this.syncEventHandlers = _this.syncEventHandlers.bind(_assertThisInitialized(_this));
          _this.attachUpdateEvents = _this.attachUpdateEvents.bind(_assertThisInitialized(_this));
          _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
          _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
          _this.figureCallback = _this.figureCallback.bind(_assertThisInitialized(_this));
          _this.updatePlotly = _this.updatePlotly.bind(_assertThisInitialized(_this));
          return _this;
        }
        _createClass(PlotlyComponent2, [{
          key: "updatePlotly",
          value: function updatePlotly(shouldInvokeResizeHandler, figureCallbackFunction, shouldAttachUpdateEvents) {
            var _this2 = this;
            this.p = this.p.then(function() {
              if (_this2.unmounting) {
                return;
              }
              if (!_this2.el) {
                throw new Error("Missing element reference");
              }
              return Plotly2.react(_this2.el, {
                data: _this2.props.data,
                layout: _this2.props.layout,
                config: _this2.props.config,
                frames: _this2.props.frames
              });
            }).then(function() {
              if (_this2.unmounting) {
                return;
              }
              _this2.syncWindowResize(shouldInvokeResizeHandler);
              _this2.syncEventHandlers();
              _this2.figureCallback(figureCallbackFunction);
              if (shouldAttachUpdateEvents) {
                _this2.attachUpdateEvents();
              }
            })["catch"](function(err) {
              if (_this2.props.onError) {
                _this2.props.onError(err);
              }
            });
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.unmounting = false;
            this.updatePlotly(true, this.props.onInitialized, true);
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            this.unmounting = false;
            var numPrevFrames = prevProps.frames && prevProps.frames.length ? prevProps.frames.length : 0;
            var numNextFrames = this.props.frames && this.props.frames.length ? this.props.frames.length : 0;
            var figureChanged = !(prevProps.layout === this.props.layout && prevProps.data === this.props.data && prevProps.config === this.props.config && numNextFrames === numPrevFrames);
            var revisionDefined = prevProps.revision !== void 0;
            var revisionChanged = prevProps.revision !== this.props.revision;
            if (!figureChanged && (!revisionDefined || revisionDefined && !revisionChanged)) {
              return;
            }
            this.updatePlotly(false, this.props.onUpdate, false);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unmounting = true;
            this.figureCallback(this.props.onPurge);
            if (this.resizeHandler && isBrowser) {
              window.removeEventListener("resize", this.resizeHandler);
              this.resizeHandler = null;
            }
            this.removeUpdateEvents();
            Plotly2.purge(this.el);
          }
        }, {
          key: "attachUpdateEvents",
          value: function attachUpdateEvents() {
            var _this3 = this;
            if (!this.el || !this.el.removeListener) {
              return;
            }
            updateEvents.forEach(function(updateEvent) {
              _this3.el.on(updateEvent, _this3.handleUpdate);
            });
          }
        }, {
          key: "removeUpdateEvents",
          value: function removeUpdateEvents() {
            var _this4 = this;
            if (!this.el || !this.el.removeListener) {
              return;
            }
            updateEvents.forEach(function(updateEvent) {
              _this4.el.removeListener(updateEvent, _this4.handleUpdate);
            });
          }
        }, {
          key: "handleUpdate",
          value: function handleUpdate() {
            this.figureCallback(this.props.onUpdate);
          }
        }, {
          key: "figureCallback",
          value: function figureCallback(callback) {
            if (typeof callback === "function") {
              var _this$el = this.el, data = _this$el.data, layout = _this$el.layout;
              var frames = this.el._transitionData ? this.el._transitionData._frames : null;
              var figure = {
                data,
                layout,
                frames
              };
              callback(figure, this.el);
            }
          }
        }, {
          key: "syncWindowResize",
          value: function syncWindowResize(invoke) {
            var _this5 = this;
            if (!isBrowser) {
              return;
            }
            if (this.props.useResizeHandler && !this.resizeHandler) {
              this.resizeHandler = function() {
                return Plotly2.Plots.resize(_this5.el);
              };
              window.addEventListener("resize", this.resizeHandler);
              if (invoke) {
                this.resizeHandler();
              }
            } else if (!this.props.useResizeHandler && this.resizeHandler) {
              window.removeEventListener("resize", this.resizeHandler);
              this.resizeHandler = null;
            }
          }
        }, {
          key: "getRef",
          value: function getRef(el) {
            this.el = el;
            if (this.props.debug && isBrowser) {
              window.gd = this.el;
            }
          }
          // Attach and remove event handlers as they're added or removed from props:
        }, {
          key: "syncEventHandlers",
          value: function syncEventHandlers() {
            var _this6 = this;
            eventNames.forEach(function(eventName) {
              var prop = _this6.props["on" + eventName];
              var handler = _this6.handlers[eventName];
              var hasHandler = Boolean(handler);
              if (prop && !hasHandler) {
                _this6.addEventHandler(eventName, prop);
              } else if (!prop && hasHandler) {
                _this6.removeEventHandler(eventName);
              } else if (prop && hasHandler && prop !== handler) {
                _this6.removeEventHandler(eventName);
                _this6.addEventHandler(eventName, prop);
              }
            });
          }
        }, {
          key: "addEventHandler",
          value: function addEventHandler(eventName, prop) {
            this.handlers[eventName] = prop;
            this.el.on(this.getPlotlyEventName(eventName), this.handlers[eventName]);
          }
        }, {
          key: "removeEventHandler",
          value: function removeEventHandler(eventName) {
            this.el.removeListener(this.getPlotlyEventName(eventName), this.handlers[eventName]);
            delete this.handlers[eventName];
          }
        }, {
          key: "getPlotlyEventName",
          value: function getPlotlyEventName(eventName) {
            return "plotly_" + eventName.toLowerCase();
          }
        }, {
          key: "render",
          value: function render() {
            return /* @__PURE__ */ _react["default"].createElement("div", {
              id: this.props.divId,
              style: this.props.style,
              ref: this.getRef,
              className: this.props.className
            });
          }
        }]);
        return PlotlyComponent2;
      }(_react.Component);
      PlotlyComponent.propTypes = {
        data: _propTypes["default"].arrayOf(_propTypes["default"].object),
        config: _propTypes["default"].object,
        layout: _propTypes["default"].object,
        frames: _propTypes["default"].arrayOf(_propTypes["default"].object),
        revision: _propTypes["default"].number,
        onInitialized: _propTypes["default"].func,
        onPurge: _propTypes["default"].func,
        onError: _propTypes["default"].func,
        onUpdate: _propTypes["default"].func,
        debug: _propTypes["default"].bool,
        style: _propTypes["default"].object,
        className: _propTypes["default"].string,
        useResizeHandler: _propTypes["default"].bool,
        divId: _propTypes["default"].string
      };
      eventNames.forEach(function(eventName) {
        PlotlyComponent.propTypes["on" + eventName] = _propTypes["default"].func;
      });
      PlotlyComponent.defaultProps = {
        debug: false,
        useResizeHandler: false,
        data: [],
        style: {
          position: "relative",
          display: "inline-block"
        }
      };
      return PlotlyComponent;
    }
  })(factory);
  const createPlotlyComponent = /* @__PURE__ */ getDefaultExportFromCjs(factory);
  class HTTPError extends Error {
    constructor(response, request, options) {
      const code = response.status || response.status === 0 ? response.status : "";
      const title = response.statusText || "";
      const status = `${code} ${title}`.trim();
      const reason = status ? `status code ${status}` : "an unknown error";
      super(`Request failed with ${reason}`);
      Object.defineProperty(this, "response", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.name = "HTTPError";
      this.response = response;
      this.request = request;
      this.options = options;
    }
  }
  class TimeoutError extends Error {
    constructor(request) {
      super("Request timed out");
      Object.defineProperty(this, "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.name = "TimeoutError";
      this.request = request;
    }
  }
  const isObject = (value) => value !== null && typeof value === "object";
  const validateAndMerge = (...sources) => {
    for (const source of sources) {
      if ((!isObject(source) || Array.isArray(source)) && typeof source !== "undefined") {
        throw new TypeError("The `options` argument must be an object");
      }
    }
    return deepMerge({}, ...sources);
  };
  const mergeHeaders = (source1 = {}, source2 = {}) => {
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()) {
      if (isHeadersInstance && value === "undefined" || value === void 0) {
        result.delete(key);
      } else {
        result.set(key, value);
      }
    }
    return result;
  };
  const deepMerge = (...sources) => {
    let returnValue = {};
    let headers = {};
    for (const source of sources) {
      if (Array.isArray(source)) {
        if (!Array.isArray(returnValue)) {
          returnValue = [];
        }
        returnValue = [...returnValue, ...source];
      } else if (isObject(source)) {
        for (let [key, value] of Object.entries(source)) {
          if (isObject(value) && key in returnValue) {
            value = deepMerge(returnValue[key], value);
          }
          returnValue = { ...returnValue, [key]: value };
        }
        if (isObject(source.headers)) {
          headers = mergeHeaders(headers, source.headers);
          returnValue.headers = headers;
        }
      }
    }
    return returnValue;
  };
  const supportsRequestStreams = (() => {
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === "function";
    if (supportsReadableStream) {
      hasContentType = new globalThis.Request("https://a.com", {
        body: new globalThis.ReadableStream(),
        method: "POST",
        // @ts-expect-error - Types are outdated.
        get duplex() {
          duplexAccessed = true;
          return "half";
        }
      }).headers.has("Content-Type");
    }
    return duplexAccessed && !hasContentType;
  })();
  const supportsAbortController = typeof globalThis.AbortController === "function";
  const supportsResponseStreams = typeof globalThis.ReadableStream === "function";
  const supportsFormData = typeof globalThis.FormData === "function";
  const requestMethods = ["get", "post", "put", "patch", "head", "delete"];
  const responseTypes = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*"
  };
  const maxSafeTimeout = 2147483647;
  const stop = Symbol("stop");
  const normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
  const retryMethods = ["get", "put", "head", "delete", "options", "trace"];
  const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
  const retryAfterStatusCodes = [413, 429, 503];
  const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY
  };
  const normalizeRetryOptions = (retry = {}) => {
    if (typeof retry === "number") {
      return {
        ...defaultRetryOptions,
        limit: retry
      };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
      throw new Error("retry.methods must be an array");
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
      throw new Error("retry.statusCodes must be an array");
    }
    return {
      ...defaultRetryOptions,
      ...retry,
      afterStatusCodes: retryAfterStatusCodes
    };
  };
  const timeout = async (request, abortController, options) => new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      if (abortController) {
        abortController.abort();
      }
      reject(new TimeoutError(request));
    }, options.timeout);
    void options.fetch(request).then(resolve).catch(reject).then(() => {
      clearTimeout(timeoutId);
    });
  });
  const delay = async (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
  class Ky {
    // eslint-disable-next-line complexity
    constructor(input, options = {}) {
      Object.defineProperty(this, "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "abortController", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_retryCount", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(this, "_input", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this._input = input;
      this._options = {
        // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
        credentials: this._input.credentials || "same-origin",
        ...options,
        headers: mergeHeaders(this._input.headers, options.headers),
        hooks: deepMerge({
          beforeRequest: [],
          beforeRetry: [],
          beforeError: [],
          afterResponse: []
        }, options.hooks),
        method: normalizeRequestMethod(options.method ?? this._input.method),
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        prefixUrl: String(options.prefixUrl || ""),
        retry: normalizeRetryOptions(options.retry),
        throwHttpErrors: options.throwHttpErrors !== false,
        timeout: typeof options.timeout === "undefined" ? 1e4 : options.timeout,
        fetch: options.fetch ?? globalThis.fetch.bind(globalThis)
      };
      if (typeof this._input !== "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
        throw new TypeError("`input` must be a string, URL, or Request");
      }
      if (this._options.prefixUrl && typeof this._input === "string") {
        if (this._input.startsWith("/")) {
          throw new Error("`input` must not begin with a slash when using `prefixUrl`");
        }
        if (!this._options.prefixUrl.endsWith("/")) {
          this._options.prefixUrl += "/";
        }
        this._input = this._options.prefixUrl + this._input;
      }
      if (supportsAbortController) {
        this.abortController = new globalThis.AbortController();
        if (this._options.signal) {
          this._options.signal.addEventListener("abort", () => {
            this.abortController.abort();
          });
        }
        this._options.signal = this.abortController.signal;
      }
      this.request = new globalThis.Request(this._input, this._options);
      if (supportsRequestStreams) {
        this.request.duplex = "half";
      }
      if (this._options.searchParams) {
        const textSearchParams = typeof this._options.searchParams === "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString();
        const searchParams = "?" + textSearchParams;
        const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
        if ((supportsFormData && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"])) {
          this.request.headers.delete("content-type");
        }
        this.request = new globalThis.Request(new globalThis.Request(url, this.request), this._options);
      }
      if (this._options.json !== void 0) {
        this._options.body = JSON.stringify(this._options.json);
        this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json");
        this.request = new globalThis.Request(this.request, { body: this._options.body });
      }
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    static create(input, options) {
      const ky2 = new Ky(input, options);
      const fn = async () => {
        if (ky2._options.timeout > maxSafeTimeout) {
          throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
        }
        await Promise.resolve();
        let response = await ky2._fetch();
        for (const hook of ky2._options.hooks.afterResponse) {
          const modifiedResponse = await hook(ky2.request, ky2._options, ky2._decorateResponse(response.clone()));
          if (modifiedResponse instanceof globalThis.Response) {
            response = modifiedResponse;
          }
        }
        ky2._decorateResponse(response);
        if (!response.ok && ky2._options.throwHttpErrors) {
          let error = new HTTPError(response, ky2.request, ky2._options);
          for (const hook of ky2._options.hooks.beforeError) {
            error = await hook(error);
          }
          throw error;
        }
        if (ky2._options.onDownloadProgress) {
          if (typeof ky2._options.onDownloadProgress !== "function") {
            throw new TypeError("The `onDownloadProgress` option must be a function");
          }
          if (!supportsResponseStreams) {
            throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
          }
          return ky2._stream(response.clone(), ky2._options.onDownloadProgress);
        }
        return response;
      };
      const isRetriableMethod = ky2._options.retry.methods.includes(ky2.request.method.toLowerCase());
      const result = isRetriableMethod ? ky2._retry(fn) : fn();
      for (const [type, mimeType] of Object.entries(responseTypes)) {
        result[type] = async () => {
          ky2.request.headers.set("accept", ky2.request.headers.get("accept") || mimeType);
          const awaitedResult = await result;
          const response = awaitedResult.clone();
          if (type === "json") {
            if (response.status === 204) {
              return "";
            }
            if (options.parseJson) {
              return options.parseJson(await response.text());
            }
          }
          return response[type]();
        };
      }
      return result;
    }
    _calculateRetryDelay(error) {
      this._retryCount++;
      if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
        if (error instanceof HTTPError) {
          if (!this._options.retry.statusCodes.includes(error.response.status)) {
            return 0;
          }
          const retryAfter = error.response.headers.get("Retry-After");
          if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
            let after = Number(retryAfter);
            if (Number.isNaN(after)) {
              after = Date.parse(retryAfter) - Date.now();
            } else {
              after *= 1e3;
            }
            if (typeof this._options.retry.maxRetryAfter !== "undefined" && after > this._options.retry.maxRetryAfter) {
              return 0;
            }
            return after;
          }
          if (error.response.status === 413) {
            return 0;
          }
        }
        const BACKOFF_FACTOR = 0.3;
        return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1e3;
      }
      return 0;
    }
    _decorateResponse(response) {
      if (this._options.parseJson) {
        response.json = async () => this._options.parseJson(await response.text());
      }
      return response;
    }
    async _retry(fn) {
      try {
        return await fn();
      } catch (error) {
        const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
        if (ms !== 0 && this._retryCount > 0) {
          await delay(ms);
          for (const hook of this._options.hooks.beforeRetry) {
            const hookResult = await hook({
              request: this.request,
              options: this._options,
              error,
              retryCount: this._retryCount
            });
            if (hookResult === stop) {
              return;
            }
          }
          return this._retry(fn);
        }
        throw error;
      }
    }
    async _fetch() {
      for (const hook of this._options.hooks.beforeRequest) {
        const result = await hook(this.request, this._options);
        if (result instanceof Request) {
          this.request = result;
          break;
        }
        if (result instanceof Response) {
          return result;
        }
      }
      if (this._options.timeout === false) {
        return this._options.fetch(this.request.clone());
      }
      return timeout(this.request.clone(), this.abortController, this._options);
    }
    /* istanbul ignore next */
    _stream(response, onDownloadProgress) {
      const totalBytes = Number(response.headers.get("content-length")) || 0;
      let transferredBytes = 0;
      if (response.status === 204) {
        if (onDownloadProgress) {
          onDownloadProgress({ percent: 1, totalBytes, transferredBytes }, new Uint8Array());
        }
        return new globalThis.Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      }
      return new globalThis.Response(new globalThis.ReadableStream({
        async start(controller) {
          const reader = response.body.getReader();
          if (onDownloadProgress) {
            onDownloadProgress({ percent: 0, transferredBytes: 0, totalBytes }, new Uint8Array());
          }
          async function read() {
            const { done, value } = await reader.read();
            if (done) {
              controller.close();
              return;
            }
            if (onDownloadProgress) {
              transferredBytes += value.byteLength;
              const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
              onDownloadProgress({ percent, transferredBytes, totalBytes }, value);
            }
            controller.enqueue(value);
            await read();
          }
          await read();
        }
      }), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    }
  }
  /*! MIT License © Sindre Sorhus */
  const createInstance = (defaults) => {
    const ky2 = (input, options) => Ky.create(input, validateAndMerge(defaults, options));
    for (const method of requestMethods) {
      ky2[method] = (input, options) => Ky.create(input, validateAndMerge(defaults, options, { method }));
    }
    ky2.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
    ky2.extend = (newDefaults) => createInstance(validateAndMerge(defaults, newDefaults));
    ky2.stop = stop;
    return ky2;
  };
  const ky = createInstance();
  const ky$1 = ky;
  const Plot = createPlotlyComponent(Plotly);
  const debug = (e) => {
    console.debug(e);
  };
  class AmexAPI {
    constructor(props) {
      __publicField(this, "API_V1_BASE_URL", "https://global.americanexpress.com/api/servicing/v1");
      // Assume the CCP.
      __publicField(this, "POINT_VALUE_CPP", { "Membership Rewards": 1, "mile": 1 });
      // POINT_VALUE_CPP = { 'Membership Rewards': 1.25, 'mile': 0.8 }
      __publicField(this, "commonHeaders", {
        "accept": "*/*",
        "accept-language": "en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7,ja;q=0.6",
        "sec-ch-ua": '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      });
    }
    inferDiscount(offerDescription) {
      const spendAmountMatch = offerDescription.match(/(?:spend)\s*\$([\d,\.]+)/i);
      const rewardAmountMatch = offerDescription.match(/(?:get)\s*\$([\d,\.]+)/i);
      const rewardPercentMatch = offerDescription.match(/(?:get)\s*([\d,\.]+)% back/i);
      const rewardPlusPointMatch = offerDescription.match(/(?:get)[\s\+]+([\d,\.]+)\s*(Membership Rewards|mile).*per eligible/i);
      const rewardPointMatch = offerDescription.match(/(?:get)[\s]+([\d,\.]+)\s*(Membership Rewards|mile)/i);
      const maxRewardAmountMatch = offerDescription.match(/(?:total of)\s*\$([\d,\.]+)/i);
      const maxRewardPointMatch = offerDescription.match(/(?:up to)\s*([\d,\.]+)\s*(mile|point)/i);
      const maxRepeatMatch = offerDescription.match(/(?:up to)\s*([\d,\.]+)\s*(time|month)/i);
      let spentAmount = spendAmountMatch && parseFloat(spendAmountMatch[1].replace(",", "")) || void 0;
      let rewardAmount = rewardAmountMatch && parseFloat(rewardAmountMatch[1].replace(",", "")) || void 0;
      let rewardPercent = rewardPercentMatch && parseFloat(rewardPercentMatch[1].replace(",", "")) || void 0;
      let rewardPoint = rewardPointMatch && parseFloat(rewardPointMatch[1].replace(",", "")) || void 0;
      let rewardExtraPointPerDollar = rewardPlusPointMatch && parseFloat(rewardPlusPointMatch[1].replace(",", "")) || void 0;
      let maxRewardAmount = maxRewardAmountMatch && parseFloat(maxRewardAmountMatch[1].replace(",", "")) || void 0;
      let maxRewardPoint = maxRewardPointMatch && parseFloat(maxRewardPointMatch[1].replace(",", "")) || void 0;
      let maxRepeat = maxRepeatMatch && parseFloat(maxRepeatMatch[1].replace(",", "")) || void 0;
      const getCpp = () => {
        var _a;
        const pointTypeMatch = (_a = rewardPlusPointMatch || rewardPointMatch || maxRewardPointMatch) == null ? void 0 : _a[2];
        const rewardType = pointTypeMatch && (pointTypeMatch == "mile" ? "mile" : "Membership Rewards") || void 0;
        return rewardType && this.POINT_VALUE_CPP[rewardType] || void 0;
      };
      const getPoint = () => {
        const basePoint = 1;
        if (rewardPoint) {
          return rewardPoint;
        }
        if (rewardExtraPointPerDollar) {
          return rewardExtraPointPerDollar + basePoint;
        }
        return void 0;
      };
      const getSpend = () => {
        if (spentAmount) {
          return spentAmount;
        }
        return 1;
      };
      const getReward = () => {
        if (rewardAmount) {
          return rewardAmount;
        }
        if (rewardPoint || rewardExtraPointPerDollar) {
          const point = getPoint();
          const cpp = getCpp();
          return point && cpp && point * cpp * 1 / 100;
        }
        if (rewardPercent && getSpend()) {
          return rewardPercent / 100 * getSpend();
        }
        return void 0;
      };
      const getRate = () => {
        if (rewardPercent) {
          return rewardPercent / 100;
        }
        if (spentAmount && rewardAmount) {
          return rewardAmount * 1 / spentAmount;
        }
        if (rewardPoint || rewardExtraPointPerDollar) {
          const reward = getReward();
          const spend = getSpend();
          return reward && spend && reward / spend || void 0;
        }
        return void 0;
      };
      const getMaxRepeat = () => {
        if (maxRepeat) {
          return maxRepeat;
        }
        return 1;
      };
      const getMaxReward = () => {
        if (maxRewardAmount) {
          return maxRewardAmount;
        }
        if (maxRewardPoint) {
          const cpp = getCpp();
          return cpp && maxRewardPoint * cpp / 100 || void 0;
        }
        const repeat = getMaxRepeat();
        const reward = getReward();
        return repeat && reward && repeat * reward || void 0;
      };
      return {
        rate: getRate(),
        reward: getReward(),
        spend: getSpend(),
        cpp: getCpp(),
        points: getPoint(),
        max_repeat: getMaxRepeat(),
        max_reward: getMaxReward()
      };
    }
    async getAccountOffer(account_token) {
      try {
        const response = await ky$1.get("offers?status=ELIGIBLE,ENROLLED", {
          prefixUrl: this.API_V1_BASE_URL,
          headers: {
            ...this.commonHeaders,
            "accept": "application/json",
            "account_token": account_token,
            "content-type": "application/json",
            "locale": "en-US",
            "timezone_offset": "-04:00"
          },
          credentials: "include",
          referrer: "https://global.americanexpress.com/dashboard?inav=menu_myacct_acctsum"
        });
        const data = await response.json();
        const offers = data.offers.map((offer) => ({
          ...offer,
          accounts: /* @__PURE__ */ new Set([account_token])
        }));
        return { offers, account_token };
      } catch (error) {
        console.error(`MaxAmexOffer: Error in getAccountOffer for account ${account_token}:`, error);
        return { offers: [], account_token };
      }
    }
    async getAccounts(include_sup = true) {
      const response = await ky$1.get("member", {
        prefixUrl: this.API_V1_BASE_URL,
        headers: this.commonHeaders,
        credentials: "include"
      });
      const data = await response.json();
      const accounts = data.accounts;
      const supAccounts = accounts.filter((a) => a.supplementary_accounts).flatMap((a) => a.supplementary_accounts);
      return [...accounts, ...include_sup && supAccounts || []];
    }
    async getAllOffer(accountTokens, concurrency = 5, wait = 2e3) {
      const accountOffersPromises = accountTokens.map(
        (accountToken) => () => this.getAccountOffer(accountToken)
      );
      const accountOffersResponses = [];
      let queue = accountOffersPromises.slice();
      while (queue.length) {
        const chunk = queue.slice(0, concurrency);
        queue = queue.slice(concurrency);
        const chunkResults = await Promise.all(chunk.map((task) => task()));
        accountOffersResponses.push(...chunkResults);
        wait && await new Promise((resolve) => setTimeout(resolve, wait));
      }
      const allAccountOffers = accountOffersResponses.map((result) => result.offers || []).flat();
      const uniqueOffers = _.chain(allAccountOffers).uniq((offer) => offer.source_id).value();
      const accountOfferIds = accountOffersResponses.map((result) => ({
        accountToken: result.account_token,
        offerIds: result.offers.map((offer) => ({ id: offer.id, source_id: offer.source_id }))
      }));
      const offerAccountMap = /* @__PURE__ */ new Map();
      accountOfferIds.forEach(({ accountToken, offerIds }) => {
        offerIds.forEach((offerId) => {
          if (offerAccountMap.has(offerId.source_id)) {
            offerAccountMap.get(offerId.source_id).add(accountToken);
          } else {
            offerAccountMap.set(offerId.source_id, /* @__PURE__ */ new Set([accountToken]));
          }
        });
      });
      uniqueOffers.forEach((offer) => {
        const accountIds = offerAccountMap.get(offer.source_id);
        offer.accounts = accountIds && [...accountIds] || [];
        offer.discount = this.inferDiscount(offer.short_description);
      });
      return {
        offers: uniqueOffers,
        accountsOfferMap: accountOfferIds,
        offerAccountMap
      };
    }
  }
  const OfferDetails = ({ offer, accountMap }) => {
    var _a, _b, _c;
    debug(offer);
    debug(accountMap);
    return /* @__PURE__ */ jsx("div", { className: "offer-details", children: offer ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "offer-logo", children: /* @__PURE__ */ jsx("img", { src: offer.logo_url, alt: offer.name }) }),
      /* @__PURE__ */ jsxs("div", { className: "offer-details-body", children: [
        /* @__PURE__ */ jsx("h3", { children: offer.name }),
        /* @__PURE__ */ jsx("h4", { children: offer.short_description }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Max Reward: $",
          (_a = offer.discount) == null ? void 0 : _a.max_reward
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Discount: ",
          (((_b = offer.discount) == null ? void 0 : _b.rate) || 0) * 100,
          "%"
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Expiry: ",
          new Date(offer.expiry_date).toLocaleDateString()
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "accounts-badge", children: [
          "Card(s):",
          (_c = offer.accounts) == null ? void 0 : _c.map((accountToken, index2) => {
            var _a2;
            return /* @__PURE__ */ jsx("span", { className: "badge", children: (_a2 = accountMap[accountToken]) == null ? void 0 : _a2.account.display_account_number }, index2);
          })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsx("p", { children: "No offer selected." }) });
  };
  const OfferChart = ({ offers, accountMap }) => {
    const [selectedOffer, setSelectedOffer] = require$$0.useState(null);
    const [zoom, setZoom] = require$$0.useState({});
    const handleHover = (event) => {
      debug(event);
      const { points } = event;
      if (points.length) {
        const selectedId = points[0].text;
        const offer = offers.find((o) => o.id === selectedId) || null;
        setSelectedOffer(offer);
      }
    };
    const handleRelayout = (event) => {
      const { xaxis, yaxis } = event;
      setZoom({ xaxis, yaxis });
    };
    const data = {
      x: offers.map((offer) => {
        var _a;
        return (((_a = offer.discount) == null ? void 0 : _a.rate) || 0) * 100;
      }),
      y: offers.map((offer) => {
        var _a;
        return ((_a = offer.discount) == null ? void 0 : _a.max_reward) || 0;
      }),
      mode: "markers",
      marker: {
        size: 20,
        opacity: 0.7
      },
      type: "scatter",
      text: offers.map((offer) => offer.id),
      hovertext: offers.map((offer) => offer.name),
      hovertemplate: "<b>%{hovertext}</b><extra></extra>"
    };
    const layout = {
      title: "Max Amex Offers",
      xaxis: { title: "Discount Percentage %" },
      yaxis: { title: "Max Total Reward ($)" },
      hovermode: "closest",
      margin: { t: 50, r: 10, b: 50, l: 80 },
      ...zoom
    };
    return /* @__PURE__ */ jsxs("div", { className: "offer-chart-container", children: [
      /* @__PURE__ */ jsx("div", { className: "offer-chart", children: /* @__PURE__ */ jsx(
        Plot,
        {
          data: [data],
          layout,
          onHover: handleHover,
          onRelayout: handleRelayout,
          style: { width: "100%", height: "100%" }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "offer-details-container", children: /* @__PURE__ */ jsx(OfferDetails, { offer: selectedOffer, accountMap }) })
    ] });
  };
  class App extends require$$0.Component {
    constructor(props) {
      super(props);
      __publicField(this, "amex", new AmexAPI({}));
      __publicField(this, "updateOffer", async () => {
        if (this.state.loading) {
          debug("Already in loading state, skip this call");
          return;
        }
        this.setState((prev) => ({ loading: true }));
        (async () => {
          const accounts = await this.amex.getAccounts();
          const tokens = accounts.map((a) => a.account_token);
          const accountMap = _.indexBy(accounts, "account_token");
          this.setState((prev) => ({
            accountMap
          }));
          return tokens;
        })().then(
          async (tokens) => {
            const allOffer = await this.amex.getAllOffer(tokens);
            debug(allOffer);
            this.setState((prev) => ({
              loading: false,
              offers: allOffer.offers
            }));
          }
        );
      });
      this.state = {
        loading: false,
        offers: [],
        accountMap: {}
      };
    }
    render() {
      window.amex = this.amex;
      const { loading, offers, accountMap } = this.state;
      const numOffers = offers.length;
      const numAccounts = Object.keys(accountMap).length;
      return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "pad-b", children: numOffers > 0 || loading ? /* @__PURE__ */ jsx(OfferChart, { offers, accountMap }) : /* @__PURE__ */ jsx("div", { className: "placeholder", children: "Max Amex Offer: No offers to display now, please click refresh" }) }),
        /* @__PURE__ */ jsx("div", { className: "pad-b", children: /* @__PURE__ */ jsx("button", { className: "btn", onClick: this.updateOffer, children: loading ? "Loading..." : "Load Amex Offer" }) }),
        /* @__PURE__ */ jsx("div", { className: "small-text", children: numOffers || numAccounts ? `含副卡账户数: ${numAccounts},   发现AmexOffer: ${numOffers}` : "" })
      ] }) });
    }
  }
  function renderWhenContainerUpdated(containerSelector, appSelector, render) {
    const containerUpdated = () => {
      const container = document.querySelector(containerSelector);
      return container && !container.querySelector(appSelector);
    };
    const observer = new MutationObserver(() => {
      if (containerUpdated()) {
        console.debug("Now need render as container updated and no app found");
        render();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  (async () => {
    const appId = "max-amex-offer";
    const appSelector = `div#${appId}`;
    const containerSelector = "body";
    const observer = renderWhenContainerUpdated(containerSelector, appSelector, async () => {
      client.createRoot(
        (() => {
          const container = document.querySelector('div[data-module-name^="axp-myca-dashboard"]');
          const app = document.createElement("div");
          app.id = "max-amex-offer";
          container == null ? void 0 : container.prepend(app);
          console.log("create a root");
          return app;
        })()
      ).render(
        /* @__PURE__ */ jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
      );
      console.debug("Render triggered");
    });
    return observer;
  })();

})(React, ReactDOM, _, Plotly);
