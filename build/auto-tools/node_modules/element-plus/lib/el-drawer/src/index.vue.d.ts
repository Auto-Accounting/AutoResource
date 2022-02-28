import type { PropType } from 'vue';
declare type Hide = (cancel: boolean) => void;
declare type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: PropType<(hide: Hide) => void>;
    customClass: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<DrawerDirection>;
        default: string;
        validator: (val: DrawerDirection) => boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    withHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: NumberConstructor;
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalClass: StringConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "opened" | "close" | "closed" | "update:modelValue")[], "open" | "opened" | "close" | "closed" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: boolean;
    appendToBody: boolean;
    customClass: string;
    direction: DrawerDirection;
    showClose: boolean;
    size: string | number;
    title: string;
    closeOnClickModal: boolean;
    withHeader: boolean;
    openDelay: number;
    closeDelay: number;
    modal: boolean;
    modalFade: boolean;
    lockScroll: boolean;
    closeOnPressEscape: boolean;
    destroyOnClose: boolean;
} & {
    beforeClose?: (hide: Hide) => void;
    zIndex?: number;
    modalClass?: string;
}>, {
    appendToBody: boolean;
    customClass: string;
    direction: DrawerDirection;
    showClose: boolean;
    size: string | number;
    title: string;
    closeOnClickModal: boolean;
    withHeader: boolean;
    openDelay: number;
    closeDelay: number;
    modal: boolean;
    modalFade: boolean;
    lockScroll: boolean;
    closeOnPressEscape: boolean;
    destroyOnClose: boolean;
}>;
export default _default;
