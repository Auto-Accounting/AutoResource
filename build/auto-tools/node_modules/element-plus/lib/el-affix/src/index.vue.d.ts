import { PropType } from 'vue';
declare type Position = 'top' | 'bottom';
declare const _default: import("vue").DefineComponent<{
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    target: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<Position>;
        default: string;
    };
}, {
    root: any;
    state: {
        fixed: boolean;
        height: number;
        width: number;
        scrollTop: number;
        clientHeight: number;
        transform: number;
    };
    rootStyle: import("vue").ComputedRef<{
        height: string;
        width: string;
    }>;
    affixStyle: import("vue").ComputedRef<{
        height: string;
        width: string;
        top: string | number;
        bottom: string | number;
        transform: string;
        zIndex: number;
    }>;
    update: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    zIndex: number;
    target: string;
    offset: number;
    position: Position;
} & {}>, {
    zIndex: number;
    target: string;
    offset: number;
    position: Position;
}>;
export default _default;
