declare const _default: import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    contentPosition: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction: string;
    contentPosition: string;
} & {}>, {
    direction: string;
    contentPosition: string;
}>;
export default _default;
