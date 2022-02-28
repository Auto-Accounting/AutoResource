declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    disabled: BooleanConstructor;
    hovering: BooleanConstructor;
    item: ObjectConstructor;
    index: NumberConstructor;
    style: ObjectConstructor;
    selected: BooleanConstructor;
}, {
    hoverItem: () => void;
    selectOptionClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "hover")[], "select" | "hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    selected: boolean;
    hovering: boolean;
} & {
    index?: number;
    item?: Record<string, any>;
    style?: Record<string, any>;
    data?: unknown[];
}>, {
    disabled: boolean;
    selected: boolean;
    hovering: boolean;
}>;
export default _default;
