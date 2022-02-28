import type { PropType } from 'vue';
import type { NotificationVM, Position } from './notification.type';
declare const _default: import("vue").DefineComponent<{
    customClass: {
        type: StringConstructor;
        default: string;
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
        type: PropType<string | NotificationVM>;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onClick: {
        type: PropType<() => void>;
        default: () => any;
    };
    onClose: {
        type: PropType<() => void>;
        required: true;
    };
    position: {
        type: PropType<Position>;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    horizontalClass: import("vue").ComputedRef<"right" | "left">;
    typeClass: import("vue").ComputedRef<string>;
    positionStyle: import("vue").ComputedRef<{
        [x: string]: string | number;
        'z-index': number;
    }>;
    visible: import("vue").Ref<boolean>;
    close: () => void;
    clearTimer: () => void;
    startTimer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "destroy"[], "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    customClass: string;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | NotificationVM;
    offset: number;
    onClose: () => void;
    position: Position;
    showClose: boolean;
    title: string;
    type: string;
    zIndex: number;
} & {
    onClick?: () => void;
}>, {
    customClass: string;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | NotificationVM;
    offset: number;
    onClick: () => void;
    position: Position;
    showClose: boolean;
    title: string;
    type: string;
    zIndex: number;
}>;
export default _default;
