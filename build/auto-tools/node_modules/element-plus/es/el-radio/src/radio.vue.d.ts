import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: string;
    };
    label: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    border: BooleanConstructor;
    size: {
        type: PropType<any>;
        validator: (val: string) => boolean;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<string | number | boolean>;
    tabIndex: import("vue").ComputedRef<-1 | 0>;
    radioSize: import("vue").ComputedRef<any>;
    handleChange: () => void;
    radioRef: import("vue").Ref<HTMLInputElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    label: string | number | boolean;
    disabled: boolean;
    name: string;
    border: boolean;
} & {
    size?: unknown;
}>, {
    modelValue: string | number | boolean;
    label: string | number | boolean;
    disabled: boolean;
    name: string;
    border: boolean;
}>;
export default _default;
