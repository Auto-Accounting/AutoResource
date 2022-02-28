declare const _default: import("vue").DefineComponent<{
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    pageCount: {
        type: NumberConstructor;
    };
    pagerCount: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
}, {
    showPrevMore: import("vue").Ref<boolean>;
    showNextMore: import("vue").Ref<boolean>;
    quicknextIconClass: import("vue").Ref<string>;
    quickprevIconClass: import("vue").Ref<string>;
    pagers: import("vue").ComputedRef<any[]>;
    onMouseenter: (direction: 'left' | 'right') => void;
    onPagerClick: (event: UIEvent) => void;
    onEnter: (e: UIEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    currentPage: number;
    pagerCount: number;
} & {
    pageCount?: number;
}>, {
    disabled: boolean;
    currentPage: number;
    pagerCount: number;
}>;
export default _default;
