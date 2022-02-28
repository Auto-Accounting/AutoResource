'use strict';

var globalNodes = require('../global-nodes');

describe('global-nodes', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });
    it('should create nodes to the root element', () => {
        const el = globalNodes.createGlobalNode();
        expect(el).not.toBeNull();
        expect(document.body.firstChild).toBe(el);
    });
    it('should remove the recent created element', () => {
        const el = globalNodes.createGlobalNode();
        expect(document.body.firstElementChild).toBe(el);
        globalNodes.removeGlobalNode(el);
        expect(document.body.children).toHaveLength(0);
    });
    it('should change the target of created element', () => {
        const target = globalNodes.createGlobalNode();
        expect(document.body.firstElementChild).toBe(target);
        const el = globalNodes.createGlobalNode();
        expect(el.parentElement).toBe(document.body);
        globalNodes.changeGlobalNodesTarget(target);
        expect(el.parentElement).toBe(target);
    });
});
