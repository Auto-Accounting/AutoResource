import type { Ref, InjectionKey } from 'vue';
declare type VarsType = Ref<Record<string, string>> | Record<string, string>;
export declare const themeVarsKey: InjectionKey<VarsType>;
export declare function useCssVar(vars: VarsType, target?: Ref<HTMLElement> | HTMLElement): void;
export declare const useThemeVars: () => VarsType;
export {};
