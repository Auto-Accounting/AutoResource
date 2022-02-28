declare const _default: import("vue").DefineComponent<{
    label: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    isGroup: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    value: import("vue").WritableComputedRef<string | number | boolean>;
    focus: import("vue").Ref<boolean>;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
        color: string;
    }>;
    radioRef: import("vue").Ref<HTMLInputElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    name: string;
    label: string | number | boolean;
} & {}>, {
    disabled: boolean;
    name: string;
    label: string | number | boolean;
}>;
export default _default;
