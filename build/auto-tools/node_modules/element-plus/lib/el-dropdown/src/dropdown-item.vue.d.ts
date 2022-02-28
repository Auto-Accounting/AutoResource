declare const _default: import("vue").DefineComponent<{
    command: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: () => {};
    };
    disabled: BooleanConstructor;
    divided: BooleanConstructor;
    icon: StringConstructor;
}, {
    handleClick: (e: UIEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    command: {};
    disabled: boolean;
    divided: boolean;
} & {
    icon?: string;
}>, {
    command: {};
    disabled: boolean;
    divided: boolean;
}>;
export default _default;
