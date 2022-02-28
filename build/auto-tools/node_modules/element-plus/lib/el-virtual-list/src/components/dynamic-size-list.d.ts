import type { ItemSize } from '../types';
declare const DynamicSizeList: import("vue").DefineComponent<{
    cache: {
        type: import("vue").PropType<number>;
        default: number;
    };
    className: {
        type: import("vue").PropType<string>;
        default: string;
    };
    containerElement: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => any[];
    };
    direction: {
        type: import("vue").PropType<import("../types").Direction>;
        default: string;
        validator: (val: import("../types").Direction) => boolean;
    };
    estimatedItemSize: {
        type: import("vue").PropType<number>;
    };
    height: {
        type: import("vue").PropType<string | number>;
        required: boolean;
    };
    layout: {
        type: import("vue").PropType<import("../types").LayoutDirection>;
        default: string;
    };
    initScrollOffset: {
        type: NumberConstructor;
        default: number;
    };
    innerElement: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    total: {
        type: import("vue").PropType<number>;
        required: boolean;
    };
    itemSize: {
        type: import("vue").PropType<number | ItemSize>;
        required: boolean;
    };
    style: {
        type: import("vue").PropType<import("../types").StyleValue>;
        default: () => {};
    };
    useIsScrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
        required: boolean;
    };
}, {
    clientSize: import("vue").ComputedRef<string | number>;
    estimatedTotalSize: import("vue").ComputedRef<number>;
    windowStyle: import("vue").ComputedRef<({
        position: string;
        overflow: string;
        WebkitOverflowScrolling: string;
        willChange: string;
    } | {
        direction: import("../types").Direction;
        height: string | number;
        width: string | number;
        position?: undefined;
        overflow?: undefined;
        WebkitOverflowScrolling?: undefined;
        willChange?: undefined;
    })[]>;
    windowRef: import("vue").Ref<HTMLElement>;
    innerRef: import("vue").Ref<HTMLElement>;
    innerStyle: import("vue").ComputedRef<{
        height: string;
        pointerEvents: string;
        width: string;
    }>;
    itemsToRender: import("vue").ComputedRef<number[]>;
    scrollbarRef: any;
    states: import("vue").Ref<{
        isScrolling: boolean;
        scrollDir: string;
        scrollOffset: number;
        updateRequested: boolean;
        isScrollbarDragging: boolean;
    }>;
    getItemStyle: (idx: number) => import("vue").CSSProperties;
    onScroll: (e: Event) => void;
    onScrollbarScroll: (distanceToGo: number, totalSteps: number) => void;
    onWheel: (e: WheelEvent) => void;
    scrollTo: (offset: number) => void;
    scrollToItem: (idx: number, alignment?: import("../types").Alignment) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-rendered" | "scroll")[], "item-rendered" | "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    cache: number;
    className: string;
    containerElement: string;
    data: any[];
    direction: import("../types").Direction;
    layout: import("../types").LayoutDirection;
    initScrollOffset: number;
    innerElement: string;
    style: {};
    useIsScrolling: boolean;
} & {
    estimatedItemSize?: number;
    height?: string | number;
    total?: number;
    itemSize?: number | ItemSize;
    width?: string | number;
}>, {
    cache: number;
    className: string;
    containerElement: string;
    data: any[];
    direction: import("../types").Direction;
    layout: import("../types").LayoutDirection;
    initScrollOffset: number;
    innerElement: string;
    style: {};
    useIsScrolling: boolean;
}>;
export default DynamicSizeList;
