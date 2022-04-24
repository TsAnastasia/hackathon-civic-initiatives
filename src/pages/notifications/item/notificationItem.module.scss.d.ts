declare namespace NotificationItemModuleScssNamespace {
  export interface INotificationItemModuleScss {
    date: string;
    root: string;
    root_read: string;
    tag: string;
    title: string;
  }
}

declare const NotificationItemModuleScssModule: NotificationItemModuleScssNamespace.INotificationItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotificationItemModuleScssNamespace.INotificationItemModuleScss;
};

export = NotificationItemModuleScssModule;
