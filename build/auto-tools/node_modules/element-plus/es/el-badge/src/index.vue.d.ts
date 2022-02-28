declare const _default: import("vue").DefineComponent<{
    value: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    isDot: BooleanConstructor;
    hidden: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    content: import("vue").ComputedRef<string | number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string | number;
    max: number;
    isDot: boolean;
    hidden: boolean;
    type: string;
} & {}>, {
    value: string | number;
    max: number;
    isDot: boolean;
    hidden: boolean;
    type: string;
}>;
export default _default;
