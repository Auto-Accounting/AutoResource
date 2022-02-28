declare const _default: import("vue").DefineComponent<{
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    throttle: {
        type: NumberConstructor;
    };
}, {
    uiLoading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    animated: boolean;
    count: number;
    rows: number;
    loading: boolean;
} & {
    throttle?: number;
}>, {
    animated: boolean;
    count: number;
    rows: number;
    loading: boolean;
}>;
export default _default;
