import { DefaultGridProps } from '../defaults';
import type { CSSProperties } from 'vue';
import type { GridConstructorProps, Alignment } from '../types';
declare const createGrid: ({ name, clearCache, getColumnPosition, getColumnStartIndexForOffset, getColumnStopIndexForStartIndex, getEstimatedTotalHeight, getEstimatedTotalWidth, getColumnOffset, getRowOffset, getRowPosition, getRowStartIndexForOffset, getRowStopIndexForStartIndex, initCache, validateProps, }: GridConstructorProps<typeof DefaultGridProps>) => import("vue").DefineComponent<{
    className: {
        type: import("vue").PropType<string>;
        default: string;
    };
    columnCache: {
        type: import("vue").PropType<number>;
        default: number;
    };
    columnWidth: {
        type: import("vue").PropType<number | import("../types").ItemSize>;
        required: boolean;
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
    estimatedColumnWidth: {
        type: import("vue").PropType<number>;
    };
    estimatedRowHeight: {
        type: import("vue").PropType<number>;
    };
    height: {
        validator: (val: number) => boolean;
        type: import("vue").PropType<string | number>;
        required: boolean;
    };
    initScrollLeft: {
        type: NumberConstructor;
        default: number;
    };
    initScrollTop: {
        type: NumberConstructor;
        default: number;
    };
    innerElement: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    rowCache: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rowHeight: {
        type: import("vue").PropType<number | import("../types").ItemSize>;
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
        validator: (val: number) => boolean;
        type: import("vue").PropType<string | number>;
        required: boolean;
    };
    totalColumn: {
        type: import("vue").PropType<number>;
        required: boolean;
    };
    totalRow: {
        type: import("vue").PropType<number>;
        required: boolean;
    };
}, {
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
    columnsToRender: import("vue").ComputedRef<number[]>;
    innerRef: any;
    innerStyle: import("vue").ComputedRef<{
        height: string;
        pointerEvents: string;
        width: string;
    }>;
    states: import("vue").Ref<{
        isScrolling: boolean;
        scrollLeft: number;
        scrollTop: number;
        updateRequested: boolean;
        xAxisScrollDir: string;
        yAxisScrollDir: string;
    }>;
    rowsToRender: import("vue").ComputedRef<number[]>;
    getItemStyle: (rowIndex: number, columnIndex: number) => CSSProperties;
    onScroll: (e: Event) => void;
    scrollTo: ({ scrollLeft, scrollTop, }: {
        scrollLeft: any;
        scrollTop: any;
    }) => void;
    scrollToItem: (rowIndex?: number, columnIdx?: number, alignment?: Alignment) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-rendered" | "scroll")[], "item-rendered" | "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    className: string;
    columnCache: number;
    containerElement: string;
    data: any[];
    direction: import("../types").Direction;
    initScrollLeft: number;
    initScrollTop: number;
    innerElement: string;
    rowCache: number;
    style: {};
    useIsScrolling: boolean;
} & {
    columnWidth?: number | import("../types").ItemSize;
    estimatedColumnWidth?: number;
    estimatedRowHeight?: number;
    height?: string | number;
    rowHeight?: number | import("../types").ItemSize;
    width?: string | number;
    totalColumn?: number;
    totalRow?: number;
}>, {
    className: string;
    columnCache: number;
    containerElement: string;
    data: any[];
    direction: import("../types").Direction;
    initScrollLeft: number;
    initScrollTop: number;
    innerElement: string;
    rowCache: number;
    style: {};
    useIsScrolling: boolean;
}>;
export default createGrid;
