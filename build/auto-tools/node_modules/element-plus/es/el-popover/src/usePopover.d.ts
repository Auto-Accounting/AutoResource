import type { SetupContext } from 'vue';
import type { IPopperOptions } from '../../el-popper';
export interface IUsePopover extends IPopperOptions {
    width: number | string;
}
export declare const SHOW_EVENT = "show";
export declare const HIDE_EVENT = "hide";
export default function usePopover(props: IUsePopover, ctx: SetupContext<string[]>): any;
