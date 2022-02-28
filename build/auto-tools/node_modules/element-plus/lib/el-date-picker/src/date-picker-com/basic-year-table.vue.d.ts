import { PropType } from 'vue';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
}, {
    startYear: import("vue").ComputedRef<number>;
    getCellStyle: (year: any) => any;
    handleYearTableClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pick"[], "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    disabledDate?: (_: Date) => void;
    parsedValue?: dayjs.Dayjs;
    date?: dayjs.Dayjs;
}>, {}>;
export default _default;
