'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var util = require('../utils/util');
var dom = require('../utils/dom');
var getScrollBarWidth = require('../utils/scrollbar-width');
var throwError = require('../utils/error');
var aria = require('../utils/aria');
var isServer = require('../utils/isServer');
var globalNodes = require('../utils/global-nodes');
var constants = require('../utils/constants');
var core = require('@popperjs/core');
var directives = require('../directives');
var vnode = require('../utils/vnode');
var PopupManager = require('../utils/popup-manager');
var English = require('../locale/lang/en');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var getScrollBarWidth__default = /*#__PURE__*/_interopDefaultLegacy(getScrollBarWidth);
var throwError__default = /*#__PURE__*/_interopDefaultLegacy(throwError);
var isServer__default = /*#__PURE__*/_interopDefaultLegacy(isServer);
var PopupManager__default = /*#__PURE__*/_interopDefaultLegacy(PopupManager);
var English__default = /*#__PURE__*/_interopDefaultLegacy(English);

const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
var index = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const instance = vue.getCurrentInstance();
  const attrs = vue.shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance.attrs = vue.reactive(instance.attrs);
  vue.watchEffect(() => {
    const res = util.entries(instance.attrs).reduce((acm, [key, val]) => {
      if (!allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))) {
        acm[key] = val;
      }
      return acm;
    }, {});
    attrs.value = res;
  });
  return attrs;
};

var index$1 = (el, events) => {
  vue.watch(el, (val) => {
    if (val) {
      events.forEach(({ name, handler }) => {
        dom.on(el.value, name, handler);
      });
    } else {
      events.forEach(({ name, handler }) => {
        dom.off(el.value, name, handler);
      });
    }
  });
};

var index$2 = (trigger) => {
  if (!vue.isRef(trigger)) {
    throwError__default['default']("[useLockScreen]", "You need to pass a ref param to this function");
  }
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = "0";
  let computedBodyPaddingRight = 0;
  vue.onUnmounted(() => {
    cleanup();
  });
  const cleanup = () => {
    dom.removeClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  vue.watch(trigger, (val) => {
    if (val) {
      withoutHiddenClass = !dom.hasClass(document.body, "el-popup-parent--hidden");
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight;
        computedBodyPaddingRight = parseInt(dom.getStyle(document.body, "paddingRight"), 10);
      }
      scrollBarWidth = getScrollBarWidth__default['default']();
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
      const bodyOverflowY = dom.getStyle(document.body, "overflowY");
      if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
        document.body.style.paddingRight = computedBodyPaddingRight + scrollBarWidth + "px";
      }
      dom.addClass(document.body, "el-popup-parent--hidden");
    } else {
      cleanup();
    }
  });
};

var index$3 = (toggle, initialFocus) => {
  let previousActive;
  vue.watch(() => toggle.value, (val) => {
    var _a, _b;
    if (val) {
      previousActive = document.activeElement;
      if (vue.isRef(initialFocus)) {
        (_b = (_a = initialFocus.value).focus) == null ? void 0 : _b.call(_a);
      }
    } else {
      if (process.env.NODE_ENV === "testing") {
        previousActive.focus.call(previousActive);
      } else {
        previousActive.focus();
      }
    }
  });
};

const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === aria.EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
var index$4 = (instance, visibleRef) => {
  vue.watch(() => visibleRef.value, (val) => {
    if (val) {
      modalStack.push(instance);
    } else {
      modalStack.splice(modalStack.findIndex((modal) => modal === instance), 1);
    }
  });
};
if (!isServer__default['default']) {
  dom.on(document, "keydown", closeModal);
}

const useMigrating = function() {
  vue.onMounted(() => {
    const instance = vue.getCurrentInstance();
    if (process.env.NODE_ENV === "production")
      return;
    if (!instance.vnode)
      return;
    const { props = {} } = getMigratingConfig();
    const { data } = instance;
    const definedProps = data.attrs || {};
    for (let propName in definedProps) {
      propName = util.kebabCase(propName);
      if (props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
      }
    }
  });
  const getMigratingConfig = function() {
    return {
      props: {},
      events: {}
    };
  };
  return {
    getMigratingConfig
  };
};

var index$5 = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};

function index$6(loading, throttle = 0) {
  if (throttle === 0)
    return loading;
  const throttled = vue.ref(false);
  let timeoutHandle = 0;
  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value;
    }, throttle);
  };
  vue.onMounted(dispatchThrottling);
  vue.watch(() => loading.value, (val) => {
    if (val) {
      dispatchThrottling();
    } else {
      throttled.value = val;
    }
  });
  return throttled;
}

var index$7 = (indicator, evt, cb) => {
  const prevent = (e) => {
    if (cb(e)) {
      e.stopImmediatePropagation();
    }
  };
  vue.watch(() => indicator.value, (val) => {
    if (val) {
      dom.on(document, evt, prevent, true);
    } else {
      dom.off(document, evt, prevent, true);
    }
  }, { immediate: true });
};

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
const EMPTY_OBJ = (process.env.NODE_ENV !== 'production')
    ? Object.freeze({})
    : {};
const EMPTY_ARR = (process.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];
const NOOP = () => { };
const isFunction = (val) => typeof val === 'function';

var useTeleport = (contentRenderer, appendToBody) => {
  const isTeleportVisible = vue.ref(false);
  if (isServer__default['default']) {
    return {
      isTeleportVisible,
      showTeleport: NOOP,
      hideTeleport: NOOP,
      renderTeleport: NOOP
    };
  }
  let $el = null;
  const showTeleport = () => {
    isTeleportVisible.value = true;
    if ($el !== null)
      return;
    $el = globalNodes.createGlobalNode();
  };
  const hideTeleport = () => {
    isTeleportVisible.value = false;
    if ($el !== null) {
      globalNodes.removeGlobalNode($el);
      $el = null;
    }
  };
  const renderTeleport = () => {
    return appendToBody.value !== true ? contentRenderer() : isTeleportVisible.value ? [
      vue.h(vue.Teleport, { to: $el }, contentRenderer())
    ] : void 0;
  };
  vue.onUnmounted(hideTeleport);
  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport
  };
};

function useTimeout() {
  let timeoutHandle;
  vue.onBeforeUnmount(() => {
    clearTimeout(timeoutHandle);
  });
  return {
    registerTimeout: (fn, delay) => {
      clearTimeout(timeoutHandle);
      timeoutHandle = setTimeout(fn, delay);
    },
    cancelTimeout: () => {
      clearTimeout(timeoutHandle);
    }
  };
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": Function
};
const useModelToggleEmits = [constants.UPDATE_MODEL_EVENT];
const useModelToggle = ({
  indicator,
  shouldHideWhenRouteChanges,
  shouldProceed,
  onShow,
  onHide
}) => {
  const { appContext, props, proxy, emit } = vue.getCurrentInstance();
  const hasUpdateHandler = vue.computed(() => isFunction(props["onUpdate:modelValue"]));
  const isModelBindingAbsent = vue.computed(() => props.modelValue === null);
  const doShow = () => {
    if (indicator.value === true) {
      return;
    }
    indicator.value = true;
    if (isFunction(onShow)) {
      onShow();
    }
  };
  const doHide = () => {
    if (indicator.value === false) {
      return;
    }
    indicator.value = false;
    if (isFunction(onHide)) {
      onHide();
    }
  };
  const show = () => {
    if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer__default['default'];
    if (shouldEmit) {
      emit(constants.UPDATE_MODEL_EVENT, true);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doShow();
    }
  };
  const hide = () => {
    if (props.disabled === true || isServer__default['default'])
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer__default['default'];
    if (shouldEmit) {
      emit(constants.UPDATE_MODEL_EVENT, false);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doHide();
    }
  };
  const onChange = (val) => {
    if (!util.isBool(val))
      return;
    if (props.disabled && val) {
      if (hasUpdateHandler.value) {
        emit(constants.UPDATE_MODEL_EVENT, false);
      }
    } else if (indicator.value !== val) {
      if (val) {
        doShow();
      } else {
        doHide();
      }
    }
  };
  const toggle = () => {
    if (indicator.value) {
      hide();
    } else {
      show();
    }
  };
  vue.watch(() => props.modelValue, onChange);
  if (shouldHideWhenRouteChanges && appContext.config.globalProperties.$route !== void 0) {
    vue.watch(() => __spreadValues({}, proxy.$route), () => {
      if (shouldHideWhenRouteChanges.value && indicator.value) {
        hide();
      }
    });
  }
  vue.onMounted(() => {
    onChange(props.modelValue);
  });
  return {
    hide,
    show,
    toggle
  };
};

const AFTER_APPEAR = "after-appear";
const AFTER_ENTER = "after-enter";
const AFTER_LEAVE = "after-leave";
const APPEAR_CANCELLED = "appear-cancelled";
const BEFORE_ENTER = "before-enter";
const BEFORE_LEAVE = "before-leave";
const ENTER = "enter";
const ENTER_CANCELLED = "enter-cancelled";
const LEAVE = "leave";
const LEAVE_CANCELLED = "leave-cancelled";
const useTransitionFallthrough = () => {
  const { emit } = vue.getCurrentInstance();
  return {
    onAfterAppear: () => {
      emit(AFTER_APPEAR);
    },
    onAfterEnter: () => {
      emit(AFTER_ENTER);
    },
    onAfterLeave: () => {
      emit(AFTER_LEAVE);
    },
    onAppearCancelled: () => {
      emit(APPEAR_CANCELLED);
    },
    onBeforeEnter: () => {
      emit(BEFORE_ENTER);
    },
    onBeforeLeave: () => {
      emit(BEFORE_LEAVE);
    },
    onEnter: () => {
      emit(ENTER);
    },
    onEnterCancelled: () => {
      emit(ENTER_CANCELLED);
    },
    onLeave: () => {
      emit(LEAVE);
    },
    onLeaveCancelled: () => {
      emit(LEAVE_CANCELLED);
    }
  };
};

const DEFAULT_FALLBACK_PLACEMENTS = [];
const defaultModifiers = [
  {
    name: "offset",
    options: {
      offset: [0, 12]
    }
  },
  {
    name: "preventOverflow",
    options: {
      padding: {
        top: 2,
        bottom: 2,
        left: 5,
        right: 5
      }
    }
  },
  {
    name: "flip",
    options: {
      padding: 5,
      fallbackPlacements: []
    }
  },
  {
    name: "computeStyles",
    options: {
      gpuAcceleration: true,
      adaptive: true
    }
  }
];
const defaultPopperOptions = {
  type: Object,
  default: () => {
    return {
      fallbackPlacements: DEFAULT_FALLBACK_PLACEMENTS,
      strategy: "fixed",
      modifiers: defaultModifiers
    };
  }
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_TRIGGER = "hover";
const useTargetEvents = (onShow, onHide, onToggle) => {
  const { props } = vue.getCurrentInstance();
  let triggerFocused = false;
  const popperEventsHandler = (e) => {
    e.stopPropagation();
    switch (e.type) {
      case "click": {
        if (triggerFocused) {
          triggerFocused = false;
        } else {
          onToggle();
        }
        break;
      }
      case "mouseenter": {
        onShow();
        break;
      }
      case "mouseleave": {
        onHide();
        break;
      }
      case "focus": {
        triggerFocused = true;
        onShow();
        break;
      }
      case "blur": {
        triggerFocused = false;
        onHide();
        break;
      }
    }
  };
  const triggerEventsMap = {
    click: ["onClick"],
    hover: ["onMouseenter", "onMouseleave"],
    focus: ["onFocus", "onBlur"]
  };
  const mapEvents = (t) => {
    const events = {};
    triggerEventsMap[t].forEach((event) => {
      events[event] = popperEventsHandler;
    });
    return events;
  };
  return vue.computed(() => {
    if (util.isArray(props.trigger)) {
      return Object.values(props.trigger).reduce((pre, t) => {
        return __spreadValues$1(__spreadValues$1({}, pre), mapEvents(t));
      }, {});
    } else {
      return mapEvents(props.trigger);
    }
  });
};

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const DARK_EFFECT = "dark";
const LIGHT_EFFECT = "light";
const usePopperControlProps = {
  appendToBody: {
    type: Boolean,
    default: true
  },
  arrowOffset: {
    type: Number
  },
  popperOptions: defaultPopperOptions,
  popperClass: {
    type: String,
    default: ""
  }
};
const usePopperProps = __spreadProps(__spreadValues$2({}, usePopperControlProps), {
  autoClose: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    default: ""
  },
  class: String,
  style: Object,
  hideAfter: {
    type: Number,
    default: 200
  },
  disabled: {
    type: Boolean,
    default: false
  },
  effect: {
    type: String,
    default: DARK_EFFECT
  },
  enterable: {
    type: Boolean,
    default: true
  },
  manualMode: {
    type: Boolean,
    default: false
  },
  showAfter: {
    type: Number,
    default: 0
  },
  pure: {
    type: Boolean,
    default: false
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  trigger: {
    type: [String, Array],
    default: DEFAULT_TRIGGER
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  }
});
const usePopper = () => {
  const vm = vue.getCurrentInstance();
  const props = vm.props;
  const { slots } = vm;
  const arrowRef = vue.ref(null);
  const triggerRef = vue.ref(null);
  const popperRef = vue.ref(null);
  const popperStyle = vue.ref({ zIndex: PopupManager__default['default'].nextZIndex() });
  const visible = vue.ref(false);
  const isManual = vue.computed(() => props.manualMode || props.trigger === "manual");
  const popperId = `el-popper-${util.generateId()}`;
  let popperInstance = null;
  const {
    renderTeleport,
    showTeleport,
    hideTeleport
  } = useTeleport(popupRenderer, vue.toRef(props, "appendToBody"));
  const { show, hide } = useModelToggle({
    indicator: visible,
    onShow,
    onHide
  });
  const { registerTimeout, cancelTimeout } = useTimeout();
  function onShow() {
    popperStyle.value.zIndex = PopupManager__default['default'].nextZIndex();
    vue.nextTick(initializePopper);
  }
  function onHide() {
    hideTeleport();
    vue.nextTick(detachPopper);
  }
  function delayShow() {
    if (isManual.value || props.disabled)
      return;
    showTeleport();
    registerTimeout(show, props.showAfter);
  }
  function delayHide() {
    if (isManual.value)
      return;
    registerTimeout(hide, props.hideAfter);
  }
  function onToggle() {
    if (visible.value) {
      delayShow();
    } else {
      delayHide();
    }
  }
  function detachPopper() {
    var _a;
    (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
    popperInstance = null;
  }
  function onPopperMouseEnter() {
    if (props.enterable && props.trigger !== "click") {
      cancelTimeout();
    }
  }
  function onPopperMouseLeave() {
    const { trigger } = props;
    const shouldPrevent = util.isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    delayHide();
  }
  function initializePopper() {
    if (!visible.value || popperInstance !== null) {
      return;
    }
    const unwrappedTrigger = triggerRef.value;
    const $el = util.isHTMLElement(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = core.createPopper($el, popperRef.value, buildPopperOptions());
    popperInstance.update();
  }
  function buildPopperOptions() {
    const modifiers = [
      ...defaultModifiers,
      ...props.popperOptions.modifiers
    ];
    if (props.showArrow) {
      modifiers.push({
        name: "arrow",
        options: {
          padding: props.arrowOffset || 5,
          element: arrowRef.value
        }
      });
    }
    return __spreadProps(__spreadValues$2({}, props.popperOptions), {
      modifiers
    });
  }
  const {
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  } = useTransitionFallthrough();
  const events = useTargetEvents(delayShow, delayHide, onToggle);
  const arrowRefAttacher = util.refAttacher(arrowRef);
  const popperRefAttacher = util.refAttacher(popperRef);
  const triggerRefAttacher = util.refAttacher(triggerRef);
  function popupRenderer() {
    const mouseUpAndDown = props.stopPopperMouseEvent ? dom.stop : NOOP;
    return vue.h(vue.Transition, {
      name: props.transition,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave
    }, {
      default: () => () => visible.value ? vue.h("div", {
        "aria-hidden": false,
        class: [
          props.popperClass,
          "el-popper",
          `is-${props.effect}`,
          props.pure ? "is-pure" : ""
        ],
        style: popperStyle.value,
        id: popperId,
        ref: popperRefAttacher,
        role: "tooltip",
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onClick: dom.stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, [
        vue.renderSlot(slots, "default", {}, () => [vue.toDisplayString(props.content)]),
        arrowRenderer()
      ]) : null
    });
  }
  function arrowRenderer() {
    return props.showArrow ? vue.h("div", {
      ref: arrowRefAttacher,
      class: "el-popper__arrow",
      "data-popper-arrow": ""
    }, null) : null;
  }
  function triggerRenderer(triggerProps) {
    var _a;
    const trigger = (_a = slots.trigger) == null ? void 0 : _a.call(slots);
    const firstElement = vnode.getFirstValidNode(trigger, 1);
    if (!firstElement)
      throwError__default['default']("renderTrigger", "trigger expects single rooted node");
    return vue.cloneVNode(firstElement, triggerProps, true);
  }
  function render() {
    const trigger = triggerRenderer(__spreadValues$2({
      "aria-describedby": popperId,
      class: props.class,
      style: props.style,
      ref: triggerRefAttacher
    }, events));
    return vue.h(vue.Fragment, null, [
      isManual.value ? trigger : vue.withDirectives(trigger, [[directives.ClickOutside, delayHide]]),
      renderTeleport()
    ]);
  }
  return {
    render
  };
};

var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const VAR_PREFIX = "--el-";
const setVars = (target, val) => {
  Object.keys(val).forEach((key) => {
    if (key.startsWith(VAR_PREFIX)) {
      target == null ? void 0 : target.style.setProperty(key, val[key]);
    } else {
      target == null ? void 0 : target.style.setProperty(VAR_PREFIX + key, val[key]);
    }
  });
};
const themeVarsKey = "themeVars";
function useCssVar(vars, target) {
  let stopWatchCssVar = null;
  const elRef = vue.computed(() => {
    var _a;
    return vue.unref(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  const themeVars = useThemeVars();
  const customVars = __spreadValues$3(__spreadValues$3({}, themeVars), vue.unref(vars));
  vue.provide(themeVarsKey, vue.ref(customVars));
  vue.onMounted(() => {
    vue.isRef(vars) ? stopWatchCssVar = vue.watch(vars, (val) => {
      setVars(elRef.value, __spreadValues$3(__spreadValues$3({}, vue.unref(themeVars)), val));
    }, {
      immediate: true,
      deep: true
    }) : setVars(elRef.value, __spreadValues$3(__spreadValues$3({}, vue.unref(themeVars)), vars));
  });
  vue.onUnmounted(() => stopWatchCssVar && stopWatchCssVar());
}
const useThemeVars = () => {
  const themeVars = vue.inject(themeVarsKey, {});
  return themeVars;
};

const useLocaleProps = {
  locale: {
    type: Object
  },
  i18n: {
    type: Function
  }
};
const LocaleInjectionKey = "ElLocaleInjection";
let localeObjCache;
const useLocale = () => {
  const vm = vue.getCurrentInstance();
  const props = vm.props;
  const locale = vue.computed(() => props.locale || English__default['default']);
  const lang = vue.computed(() => locale.value.name);
  const _translator = (...args) => {
    const [path, option] = args;
    let value;
    const array = path.split(".");
    let current = locale.value;
    for (let i = 0, j = array.length; i < j; i++) {
      const property = array[i];
      value = current[property];
      if (i === j - 1)
        return template(value, option);
      if (!value)
        return "";
      current = value;
    }
  };
  const t = (...args) => {
    var _a;
    return ((_a = props.i18n) == null ? void 0 : _a.call(props, ...args)) || _translator(...args);
  };
  const provides = {
    locale,
    lang,
    t
  };
  localeObjCache = provides;
  vue.provide(LocaleInjectionKey, provides);
};
function template(str, option) {
  if (!str || !option)
    return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
}
const useLocaleInject = () => {
  return vue.inject(LocaleInjectionKey, localeObjCache || {
    lang: vue.ref(English__default['default'].name),
    locale: vue.ref(English__default['default']),
    t: (...args) => {
      const [path, option] = args;
      let value;
      const array = path.split(".");
      let current = English__default['default'];
      for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1)
          return template(value, option);
        if (!value)
          return "";
        current = value;
      }
    }
  });
};

exports.DARK_EFFECT = DARK_EFFECT;
exports.LIGHT_EFFECT = LIGHT_EFFECT;
exports.LocaleInjectionKey = LocaleInjectionKey;
exports.themeVarsKey = themeVarsKey;
exports.useAttrs = index;
exports.useCssVar = useCssVar;
exports.useEvents = index$1;
exports.useFocus = index$5;
exports.useLocale = useLocale;
exports.useLocaleInject = useLocaleInject;
exports.useLocaleProps = useLocaleProps;
exports.useLockScreen = index$2;
exports.useMigrating = useMigrating;
exports.useModal = index$4;
exports.useModelToggle = useModelToggle;
exports.useModelToggleEmits = useModelToggleEmits;
exports.useModelToggleProps = useModelToggleProps;
exports.usePopper = usePopper;
exports.usePopperControlProps = usePopperControlProps;
exports.usePopperProps = usePopperProps;
exports.usePreventGlobal = index$7;
exports.useRestoreActive = index$3;
exports.useTeleport = useTeleport;
exports.useThemeVars = useThemeVars;
exports.useThrottleRender = index$6;
exports.useTimeout = useTimeout;
