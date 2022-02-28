import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    closable: BooleanConstructor;
    type: {
        type: PropType<"" | "success" | "info" | "warning" | "danger">;
        default: string;
    };
    hit: BooleanConstructor;
    disableTransitions: BooleanConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<any>;
        validator: (val: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    tagSize: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<string[]>;
    handleClose: (event: any) => void;
    handleClick: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click")[], "close" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    closable: boolean;
    type: "" | "success" | "info" | "warning" | "danger";
    hit: boolean;
    disableTransitions: boolean;
    color: string;
    effect: string;
} & {
    size?: unknown;
}>, {
    closable: boolean;
    type: "" | "success" | "info" | "warning" | "danger";
    hit: boolean;
    disableTransitions: boolean;
    color: string;
    effect: string;
}>;
export default _default;
