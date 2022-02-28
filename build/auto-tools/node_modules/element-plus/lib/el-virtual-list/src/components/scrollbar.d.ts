declare const ScrollBar: import("vue").DefineComponent<{
    layout: {
        type: import("vue").PropType<import("../types").LayoutDirection>;
        default: string;
    };
    total: NumberConstructor;
    ratio: NumberConstructor;
    clientSize: NumberConstructor;
    scrollFrom: NumberConstructor;
    visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "start-move" | "stop-move")[], "scroll" | "start-move" | "stop-move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    layout: import("../types").LayoutDirection;
    visible: boolean;
} & {
    total?: number;
    ratio?: number;
    clientSize?: number;
    scrollFrom?: number;
}>, {
    layout: import("../types").LayoutDirection;
    visible: boolean;
}>;
export default ScrollBar;
