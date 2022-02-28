import { PropType } from 'vue';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    visible: BooleanConstructor;
    actualVisible: BooleanConstructor;
    parsedValue: {
        type: PropType<string | dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    arrowControl: any;
    onSetOption: (e: any) => void;
    setMaxSelectionRange: (start: any, end: any) => void;
    setMinSelectionRange: (start: any, end: any) => void;
    btnConfirmDisabled: import("vue").ComputedRef<boolean>;
    handleCancel: () => void;
    handleConfirm: (visible?: boolean) => void;
    t: (...args: any[]) => string;
    showSeconds: import("vue").ComputedRef<boolean>;
    minDate: import("vue").ComputedRef<string | dayjs.Dayjs>;
    maxDate: import("vue").ComputedRef<string | dayjs.Dayjs>;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    handleMinChange: (date: any) => void;
    handleMaxChange: (date: any) => void;
    minSelectableRange: import("vue").Ref<any[]>;
    maxSelectableRange: import("vue").Ref<any[]>;
    disabledHours_: (role: any, compare: any) => any[];
    disabledMinutes_: (hour: any, role: any, compare: any) => any;
    disabledSeconds_: (hour: any, minute: any, role: any, compare: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-range" | "pick" | "set-picker-option")[], "select-range" | "pick" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    actualVisible: boolean;
    format: string;
} & {
    parsedValue?: string | dayjs.Dayjs[];
}>, {
    visible: boolean;
    actualVisible: boolean;
    format: string;
}>;
export default _default;
