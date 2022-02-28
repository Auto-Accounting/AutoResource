import { PropType } from 'vue';
declare type ILinkType = PropType<'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'>;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: ILinkType;
        default: string;
        validator: (val: string) => boolean;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}, {
    handleClick: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "primary" | "success" | "warning" | "info" | "danger" | "default";
    underline: boolean;
    disabled: boolean;
    href: string;
    icon: string;
} & {}>, {
    type: "primary" | "success" | "warning" | "info" | "danger" | "default";
    underline: boolean;
    disabled: boolean;
    href: string;
    icon: string;
}>;
export default _default;
