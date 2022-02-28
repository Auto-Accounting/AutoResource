'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isServer = require('./isServer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isServer__default = /*#__PURE__*/_interopDefaultLegacy(isServer);

const globalNodes = [];
let target = isServer__default['default'] ? void 0 : document.body;
function createGlobalNode(id) {
    const el = document.createElement('div');
    if (id !== void 0) {
        el.id = id;
    }
    target.appendChild(el);
    globalNodes.push(el);
    return el;
}
function removeGlobalNode(el) {
    globalNodes.splice(globalNodes.indexOf(el), 1);
    el.remove();
}
function changeGlobalNodesTarget(el) {
    if (el !== target) {
        target = el;
        globalNodes.forEach(el => {
            if (el.contains(target) === false) {
                target.appendChild(el);
            }
        });
    }
}

exports.changeGlobalNodesTarget = changeGlobalNodesTarget;
exports.createGlobalNode = createGlobalNode;
exports.removeGlobalNode = removeGlobalNode;
