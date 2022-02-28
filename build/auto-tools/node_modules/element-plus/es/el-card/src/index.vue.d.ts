declare const _default: import("vue").DefineComponent<{
    header: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        default: string;
    };
    shadow: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    header: string;
    bodyStyle: string;
    shadow: string;
} & {}>, {
    header: string;
    bodyStyle: string;
    shadow: string;
}>;
export default _default;
