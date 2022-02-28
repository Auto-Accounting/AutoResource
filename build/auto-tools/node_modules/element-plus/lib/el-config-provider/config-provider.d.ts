export declare const ConfigProvider: import("vue").DefineComponent<{
    locale: {
        type: import("vue").PropType<import("../locale").Language>;
    };
    i18n: {
        type: import("vue").PropType<(...args: any[]) => string>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    locale?: import("../locale").Language;
    i18n?: (...args: any[]) => string;
}>, {}>;
