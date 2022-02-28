import type { Ref } from 'vue';
export declare const useModelToggleProps: {
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    'onUpdate:modelValue': FunctionConstructor;
};
export declare const useModelToggleEmits: string[];
export declare type ModelToggleParams = {
    indicator: Ref<boolean>;
    shouldHideWhenRouteChanges?: Ref<boolean>;
    shouldProceed?: () => boolean;
    onShow?: () => void;
    onHide?: () => void;
};
export declare const useModelToggle: ({ indicator, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide, }: ModelToggleParams) => {
    hide: () => void;
    show: () => void;
    toggle: () => void;
};
