import type { InjectionKey, PropType, Ref } from 'vue';
import type { Language } from '../../locale';
export declare const useLocaleProps: {
    locale: {
        type: PropType<Language>;
    };
    i18n: {
        type: PropType<Translator>;
    };
};
declare type Translator = (...args: any[]) => string;
export declare type LocaleContext = {
    locale: Ref<Language>;
    lang: Ref<string>;
    t: Translator;
};
export declare const LocaleInjectionKey: InjectionKey<LocaleContext>;
export declare const useLocale: () => void;
export declare const useLocaleInject: () => LocaleContext;
export {};
