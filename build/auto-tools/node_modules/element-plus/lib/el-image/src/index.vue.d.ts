import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    fit: {
        type: StringConstructor;
        default: string;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: (StringConstructor | ObjectConstructor)[];
        default: any;
    };
    previewSrcList: {
        type: PropType<string[]>;
        default: () => string[];
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    attrs: import("vue").Ref<{}>;
    loading: import("vue").Ref<boolean>;
    hasLoadError: import("vue").Ref<boolean>;
    showViewer: import("vue").Ref<boolean>;
    imgWidth: import("vue").Ref<number>;
    imgHeight: import("vue").Ref<number>;
    imageStyle: import("vue").ComputedRef<{
        width?: undefined;
        height?: undefined;
    } | {
        width: string;
        height: string;
    } | {
        width: string;
        height?: undefined;
    } | {
        height: string;
        width?: undefined;
    } | {
        'object-fit': string;
    }>;
    alignCenter: import("vue").ComputedRef<boolean>;
    preview: import("vue").ComputedRef<boolean>;
    imageIndex: import("vue").ComputedRef<number>;
    clickHandler: () => void;
    closeViewer: () => void;
    container: import("vue").Ref<HTMLElement>;
    handleError: (e: Event) => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    appendToBody: boolean;
    hideOnClickModal: boolean;
    src: string;
    fit: string;
    lazy: boolean;
    previewSrcList: string[];
    zIndex: number;
} & {
    scrollContainer?: any;
}>, {
    appendToBody: boolean;
    hideOnClickModal: boolean;
    src: string;
    fit: string;
    lazy: boolean;
    scrollContainer: any;
    previewSrcList: string[];
    zIndex: number;
}>;
export default _default;
