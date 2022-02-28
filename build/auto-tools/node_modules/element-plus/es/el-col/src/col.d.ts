import type { PropType } from 'vue';
declare type SizeObject = {
    span: number;
    offset: number;
};
declare const ElCol: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    xs: {
        type: PropType<number | SizeObject>;
        default: () => SizeObject;
    };
    sm: {
        type: PropType<number | SizeObject>;
        default: () => SizeObject;
    };
    md: {
        type: PropType<number | SizeObject>;
        default: () => SizeObject;
    };
    lg: {
        type: PropType<number | SizeObject>;
        default: () => SizeObject;
    };
    xl: {
        type: PropType<number | SizeObject>;
        default: () => SizeObject;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag: string;
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number | SizeObject;
    sm: number | SizeObject;
    md: number | SizeObject;
    lg: number | SizeObject;
    xl: number | SizeObject;
} & {}>, {
    tag: string;
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number | SizeObject;
    sm: number | SizeObject;
    md: number | SizeObject;
    lg: number | SizeObject;
    xl: number | SizeObject;
}>;
export default ElCol;
