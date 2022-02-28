import type { VNode } from 'vue';
export declare type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export declare type NotificationType = 'success' | 'warning' | 'info' | 'error' | '';
export declare type TypedNotificationOptions = Omit<INotificationOptions, 'type'> | string;
export interface INotificationHandle {
    close: () => void;
}
export interface INotification {
    (options?: INotificationOptions): INotificationHandle;
    success?: (options: TypedNotificationOptions) => INotificationHandle;
    warning?: (options: TypedNotificationOptions) => INotificationHandle;
    error?: (options: TypedNotificationOptions) => INotificationHandle;
    info?: (options: TypedNotificationOptions) => INotificationHandle;
    closeAll: () => void;
}
export declare type INotificationOptions = {
    customClass?: string;
    dangerouslyUseHTMLString?: boolean;
    duration?: number;
    iconClass?: string;
    id?: string;
    message?: string | VNode;
    zIndex?: number;
    onClose?: () => void;
    onClick?: () => void;
    offset?: number;
    position?: Position;
    showClose?: boolean;
    type?: NotificationType;
    title?: string;
};
export declare type NotificationVM = VNode;
declare type NotificationQueueItem = {
    vm: NotificationVM;
};
export declare type NotificationQueue = Array<NotificationQueueItem>;
export {};
