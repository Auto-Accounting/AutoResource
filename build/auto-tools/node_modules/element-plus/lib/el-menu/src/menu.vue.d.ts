import { ComputedRef } from 'vue';
import { IMenuProps } from './menu';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    defaultActive: {
        type: StringConstructor;
        default: string;
    };
    defaultOpeneds: ArrayConstructor;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    menuTrigger: {
        type: StringConstructor;
        default: string;
    };
    collapse: BooleanConstructor;
    backgroundColor: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    activeTextColor: {
        type: StringConstructor;
    };
    collapseTransition: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    hoverBackground: ComputedRef<string>;
    isMenuPopup: ComputedRef<boolean>;
    props: IMenuProps;
    open: (index: any) => void;
    close: (index: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "select")[], "close" | "open" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: string;
    defaultActive: string;
    uniqueOpened: boolean;
    router: boolean;
    menuTrigger: string;
    collapse: boolean;
    collapseTransition: boolean;
} & {
    defaultOpeneds?: unknown[];
    backgroundColor?: string;
    textColor?: string;
    activeTextColor?: string;
}>, {
    mode: string;
    defaultActive: string;
    uniqueOpened: boolean;
    router: boolean;
    menuTrigger: string;
    collapse: boolean;
    collapseTransition: boolean;
}>;
export default _default;
