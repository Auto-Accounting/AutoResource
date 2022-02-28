'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../utils/with-install');
var vue = require('vue');
var hooks = require('../hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var withInstall__default = /*#__PURE__*/_interopDefaultLegacy(withInstall);

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
const ConfigProvider = vue.defineComponent({
  name: "ElConfigProvider",
  props: __spreadValues({}, hooks.useLocaleProps),
  setup(_, { slots }) {
    hooks.useLocale();
    return () => slots.default();
  }
});

var index = withInstall__default['default'](ConfigProvider);

exports.default = index;
