import { ICheckboxGroupInstance, ICheckboxProps } from './checkbox.type';
export declare const useCheckboxGroup: () => {
    isGroup: import("vue").ComputedRef<boolean>;
    checkboxGroup: ICheckboxGroupInstance;
    elForm: any;
    ELEMENT: any;
    elFormItemSize: import("vue").ComputedRef<any>;
    elFormItem: any;
};
export declare const useCheckbox: (props: ICheckboxProps) => {
    isChecked: import("vue").ComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    checkboxSize: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<string>;
};
