import { PropType } from 'vue';
import type { MessageVM } from './types';
declare const _default: import("vue").DefineComponent<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    iconClass: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: PropType<string | MessageVM>;
        default: string;
    };
    onClose: {
        type: PropType<() => void>;
        required: true;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    typeClass: import("vue").ComputedRef<string>;
    customStyle: import("vue").ComputedRef<{
        top: string;
        zIndex: number;
    }>;
    visible: import("vue").Ref<boolean>;
    close: () => void;
    clearTimer: () => void;
    startTimer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "destroy"[], "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    offset: number;
    customClass: string;
    center: boolean;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | MessageVM;
    onClose: () => void;
    showClose: boolean;
    type: string;
    zIndex: number;
} & {}>, {
    offset: number;
    customClass: string;
    center: boolean;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | MessageVM;
    showClose: boolean;
    type: string;
    zIndex: number;
}>;
export default _default;
