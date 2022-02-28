declare const _default: import("vue").DefineComponent<{
    total: {
        type: NumberConstructor;
    };
    pageSize: {
        type: NumberConstructor;
    };
    defaultPageSize: {
        type: NumberConstructor;
    };
    currentPage: {
        type: NumberConstructor;
    };
    defaultCurrentPage: {
        type: NumberConstructor;
    };
    pageCount: {
        type: NumberConstructor;
    };
    pagerCount: {
        type: NumberConstructor;
        validator: (value: number) => boolean;
        default: number;
    };
    layout: {
        type: StringConstructor;
        default: string;
    };
    pageSizes: {
        type: ArrayConstructor;
        default: () => number[];
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    small: BooleanConstructor;
    background: BooleanConstructor;
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:current-page" | "update:page-size" | "size-change" | "current-change" | "prev-click" | "next-click")[], "update:current-page" | "update:page-size" | "size-change" | "current-change" | "prev-click" | "next-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    prevText: string;
    nextText: string;
    small: boolean;
    popperClass: string;
    pageSizes: unknown[];
    pagerCount: number;
    layout: string;
    background: boolean;
    hideOnSinglePage: boolean;
} & {
    currentPage?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    defaultCurrentPage?: number;
}>, {
    disabled: boolean;
    prevText: string;
    nextText: string;
    small: boolean;
    popperClass: string;
    pageSizes: unknown[];
    pagerCount: number;
    layout: string;
    background: boolean;
    hideOnSinglePage: boolean;
}>;
export default _default;
