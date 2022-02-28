import { ComputedRef, PropType } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
declare type DateType = 'prev-month' | 'today' | 'next-month';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: DateConstructor;
    };
    range: {
        type: PropType<Date[]>;
        validator: (range: Date) => boolean;
    };
}, {
    selectedDay: any;
    curMonthDatePrefix: ComputedRef<string>;
    i18nDate: ComputedRef<string>;
    realSelectedDay: import("vue").WritableComputedRef<any>;
    date: ComputedRef<dayjs.Dayjs>;
    validatedRange: ComputedRef<dayjs.Dayjs[][]>;
    pickDay: (day: Dayjs) => void;
    selectDate: (type: DateType) => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue")[], "input" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    range?: Date[];
    modelValue?: Date;
}>, {}>;
export default _default;
