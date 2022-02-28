import { FieldErrorList } from 'async-validator';
import type { FormRulesMap } from './form.type';
import type { PropType } from 'vue';
import type { ValidateFieldCallback } from './token';
interface Callback {
    (isValid?: boolean, invalidFields?: FieldErrorList): void;
}
declare const _default: import("vue").DefineComponent<{
    model: ObjectConstructor;
    rules: PropType<FormRulesMap>;
    labelPosition: StringConstructor;
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: PropType<any>;
    disabled: BooleanConstructor;
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRequiredAsterisk: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    validate: (callback?: Callback) => Promise<boolean>;
    resetFields: () => void;
    clearValidate: (props?: string | string[]) => void;
    validateField: (props: string | string[], cb: ValidateFieldCallback) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "validate"[], "validate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labelWidth: string | number;
    inlineMessage: boolean;
    showMessage: boolean;
    labelSuffix: string;
    inline: boolean;
    statusIcon: boolean;
    disabled: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
} & {
    rules?: FormRulesMap;
    size?: unknown;
    model?: Record<string, any>;
    labelPosition?: string;
}>, {
    labelWidth: string | number;
    inlineMessage: boolean;
    showMessage: boolean;
    labelSuffix: string;
    inline: boolean;
    statusIcon: boolean;
    disabled: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
}>;
export default _default;
