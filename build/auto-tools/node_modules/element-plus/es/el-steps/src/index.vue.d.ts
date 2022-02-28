declare const _default: import("vue").DefineComponent<{
    space: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    finishStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    processStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    steps: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    space: string | number;
    active: number;
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
} & {}>, {
    space: string | number;
    active: number;
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
}>;
export default _default;
