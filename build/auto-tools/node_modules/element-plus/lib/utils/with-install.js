'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
};

exports.default = withInstall;
