declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}, {
    handleClick: () => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon: string;
    content: string;
} & {
    title?: string;
}>, {
    icon: string;
    content: string;
}>;
export default _default;
