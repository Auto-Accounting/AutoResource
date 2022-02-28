import type { PropType, CSSProperties } from 'vue';
import type { ElFormContext } from './token';
import type { FormItemRule } from './form.type';
declare const _default: import("vue").DefineComponent<{
    label: StringConstructor;
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    prop: StringConstructor;
    required: {
        type: BooleanConstructor;
        default: any;
    };
    rules: PropType<FormItemRule | FormItemRule[]>;
    error: StringConstructor;
    validateStatus: StringConstructor;
    for: StringConstructor;
    inlineMessage: {
        type: (BooleanConstructor | StringConstructor)[];
        default: string;
    };
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        types: PropType<any>;
        validator: (val: string) => boolean;
    };
}, {
    formItemClass: import("vue").ComputedRef<(string | {
        'el-form-item--feedback': boolean;
        'is-error': boolean;
        'is-validating': boolean;
        'is-success': boolean;
        'is-required': boolean;
        'is-no-asterisk': boolean;
    })[]>;
    shouldShowError: import("vue").ComputedRef<boolean>;
    elForm: ElFormContext;
    labelStyle: import("vue").ComputedRef<CSSProperties>;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
    validateMessage: import("vue").Ref<string>;
    labelFor: import("vue").ComputedRef<string>;
    resetField: () => void;
    clearValidate: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labelWidth: string | number;
    inlineMessage: string | boolean;
    showMessage: boolean;
} & {
    label?: string;
    prop?: string;
    required?: boolean;
    rules?: unknown;
    error?: string;
    validateStatus?: string;
    for?: string;
    size?: unknown;
}>, {
    labelWidth: string | number;
    required: boolean;
    inlineMessage: string | boolean;
    showMessage: boolean;
}>;
export default _default;
