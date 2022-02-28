declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
}, {
    select: any;
    value: import("vue").ComputedRef<string>;
    items: import("vue").ComputedRef<any[]>;
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "blur" | "focus" | "update:modelValue")[], "change" | "blur" | "focus" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    editable: boolean;
    clearable: boolean;
    size: string;
    placeholder: string;
    start: string;
    end: string;
    step: string;
    minTime: string;
    maxTime: string;
    name: string;
    prefixIcon: string;
    clearIcon: string;
} & {
    modelValue?: string;
}>, {
    disabled: boolean;
    editable: boolean;
    clearable: boolean;
    size: string;
    placeholder: string;
    start: string;
    end: string;
    step: string;
    minTime: string;
    maxTime: string;
    name: string;
    prefixIcon: string;
    clearIcon: string;
}>;
export default _default;
