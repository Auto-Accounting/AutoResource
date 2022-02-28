import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    to: {
        type: PropType<string | Record<string, unknown>>;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    link: any;
    separator: string;
    separatorClass: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    to: string | Record<string, unknown>;
    replace: boolean;
} & {}>, {
    to: string | Record<string, unknown>;
    replace: boolean;
}>;
export default _default;
