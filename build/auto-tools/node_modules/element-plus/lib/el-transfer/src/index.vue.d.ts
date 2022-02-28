import type { PropType, VNode } from 'vue';
import type { DataItem, Format, Key, Props, TargetOrder } from './transfer';
export declare const CHANGE_EVENT = "change";
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<DataItem[]>;
        default: () => any[];
    };
    titles: {
        type: PropType<[string, string]>;
        default: () => any[];
    };
    buttonTexts: {
        type: PropType<[string, string]>;
        default: () => any[];
    };
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterMethod: PropType<(query: string, item: DataItem) => boolean>;
    leftDefaultChecked: {
        type: PropType<Key[]>;
        default: () => any[];
    };
    rightDefaultChecked: {
        type: PropType<Key[]>;
        default: () => any[];
    };
    renderContent: PropType<(h: any, option: any) => VNode>;
    modelValue: {
        type: PropType<Key[]>;
        default: () => any[];
    };
    format: {
        type: PropType<Format>;
        default: () => {};
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: PropType<Props>;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    targetOrder: {
        type: PropType<TargetOrder>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    hasButtonTexts: import("vue").ComputedRef<boolean>;
    leftPanelTitle: import("vue").ComputedRef<string>;
    rightPanelTitle: import("vue").ComputedRef<string>;
    panelFilterPlaceholder: import("vue").ComputedRef<string>;
    clearQuery: (which: 'left' | 'right') => void;
    optionRender: import("vue").ComputedRef<(option: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    leftChecked: import("vue").Ref<any[]>;
    rightChecked: import("vue").Ref<any[]>;
    sourceData: import("vue").ComputedRef<DataItem[]>;
    targetData: import("vue").ComputedRef<any[]>;
    onSourceCheckedChange: (val: Key[], movedKeys: Key[]) => void;
    onTargetCheckedChange: (val: Key[], movedKeys: Key[]) => void;
    addToLeft: () => void;
    addToRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "left-check-change" | "right-check-change")[], "change" | "update:modelValue" | "left-check-change" | "right-check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: Key[];
    titles: [string, string];
    filterPlaceholder: string;
    data: DataItem[];
    buttonTexts: [string, string];
    leftDefaultChecked: Key[];
    rightDefaultChecked: Key[];
    format: Format;
    filterable: boolean;
    props: Props;
    targetOrder: TargetOrder;
} & {
    filterMethod?: (query: string, item: DataItem) => boolean;
    renderContent?: (h: any, option: any) => VNode;
}>, {
    modelValue: Key[];
    titles: [string, string];
    filterPlaceholder: string;
    data: DataItem[];
    buttonTexts: [string, string];
    leftDefaultChecked: Key[];
    rightDefaultChecked: Key[];
    format: Format;
    filterable: boolean;
    props: Props;
    targetOrder: TargetOrder;
}>;
export default _default;
