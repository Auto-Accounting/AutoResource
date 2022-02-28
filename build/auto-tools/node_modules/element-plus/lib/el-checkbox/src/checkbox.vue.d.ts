import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: () => any;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor | ObjectConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: any;
    };
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    controls: {
        type: StringConstructor;
        default: any;
    };
    border: BooleanConstructor;
    size: {
        type: PropType<any>;
        validator: (val: string) => boolean;
    };
}, {
    isChecked: import("vue").ComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    checkboxSize: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    indeterminate: boolean;
    disabled: boolean;
    checked: boolean;
    border: boolean;
} & {
    modelValue?: string | number | boolean;
    label?: unknown;
    name?: string;
    trueLabel?: string | number;
    falseLabel?: string | number;
    id?: string;
    controls?: string;
    size?: unknown;
}>, {
    modelValue: string | number | boolean;
    indeterminate: boolean;
    disabled: boolean;
    checked: boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
    id: string;
    controls: string;
    border: boolean;
}>;
export default _default;
