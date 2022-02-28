import type { PropType } from 'vue';
import type { Options } from '@popperjs/core';
export declare const DEFAULT_FALLBACK_PLACEMENTS: any[];
export declare const defaultModifiers: ({
    name: string;
    options: {
        offset: number[];
        padding?: undefined;
        fallbackPlacements?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        padding: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        offset?: undefined;
        fallbackPlacements?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        padding: number;
        fallbackPlacements: any[];
        offset?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        gpuAcceleration: boolean;
        adaptive: boolean;
        offset?: undefined;
        padding?: undefined;
        fallbackPlacements?: undefined;
    };
})[];
export declare const defaultPopperOptions: {
    type: PropType<Options>;
    default: () => {
        fallbackPlacements: any[];
        strategy: string;
        modifiers: ({
            name: string;
            options: {
                offset: number[];
                padding?: undefined;
                fallbackPlacements?: undefined;
                gpuAcceleration?: undefined;
                adaptive?: undefined;
            };
        } | {
            name: string;
            options: {
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
                offset?: undefined;
                fallbackPlacements?: undefined;
                gpuAcceleration?: undefined;
                adaptive?: undefined;
            };
        } | {
            name: string;
            options: {
                padding: number;
                fallbackPlacements: any[];
                offset?: undefined;
                gpuAcceleration?: undefined;
                adaptive?: undefined;
            };
        } | {
            name: string;
            options: {
                gpuAcceleration: boolean;
                adaptive: boolean;
                offset?: undefined;
                padding?: undefined;
                fallbackPlacements?: undefined;
            };
        })[];
    };
};
