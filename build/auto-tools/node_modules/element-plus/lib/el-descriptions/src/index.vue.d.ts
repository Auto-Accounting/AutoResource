import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: PropType<any>;
        validator: (val: string) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
}, {
    descriptionsSize: import("vue").ComputedRef<any>;
    getRows: () => any[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    border: boolean;
    column: number;
    direction: "horizontal" | "vertical";
    title: string;
    extra: string;
} & {
    size?: unknown;
}>, {
    border: boolean;
    column: number;
    direction: "horizontal" | "vertical";
    title: string;
    extra: string;
}>;
export default _default;
