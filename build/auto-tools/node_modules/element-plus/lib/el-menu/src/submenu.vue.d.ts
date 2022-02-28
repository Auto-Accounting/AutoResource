import { ISubmenuProps } from './menu';
declare const _default: import("vue").DefineComponent<{
    index: {
        type: StringConstructor;
        required: true;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    popperClass: StringConstructor;
    disabled: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: any;
    };
}, {
    data: {
        popperJS: any;
        timeout: any;
        items: {};
        submenus: {};
        currentPlacement: string;
        mouseInChild: boolean;
        opened: boolean;
    };
    props: ISubmenuProps;
    mode: import("vue").ComputedRef<string>;
    active: import("vue").ComputedRef<boolean>;
    isMenuPopup: import("vue").Ref<boolean>;
    opened: import("vue").ComputedRef<boolean>;
    paddingStyle: import("vue").ComputedRef<{
        paddingLeft?: undefined;
    } | {
        paddingLeft: string;
    }>;
    titleStyle: import("vue").ComputedRef<{
        color: string;
        borderBottomColor?: undefined;
    } | {
        borderBottomColor: string;
        color: string;
    }>;
    backgroundColor: import("vue").ComputedRef<string>;
    rootProps: Readonly<Partial<import("./menu").RootMenuProps>>;
    menuTransitionName: import("vue").ComputedRef<"el-zoom-in-left" | "el-zoom-in-top">;
    submenuTitleIcon: import("vue").ComputedRef<"el-icon-arrow-down" | "el-icon-arrow-right">;
    appendToBody: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
    handleMouseenter: (event: any, showTimeout?: number) => void;
    handleMouseleave: (deepDispatch?: boolean) => void;
    handleTitleMouseenter: () => void;
    handleTitleMouseleave: () => void;
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
    addSubMenu: (item: any) => void;
    removeSubMenu: (item: any) => void;
    popperVnode: any;
    verticalTitleRef: import("vue").Ref<HTMLElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    index: string;
    showTimeout: number;
    hideTimeout: number;
    disabled: boolean;
} & {
    popperClass?: string;
    popperAppendToBody?: boolean;
}>, {
    showTimeout: number;
    hideTimeout: number;
    disabled: boolean;
    popperAppendToBody: boolean;
}>;
export default _default;
