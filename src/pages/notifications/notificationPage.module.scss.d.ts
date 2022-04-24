declare namespace NotificationPageModuleScssNamespace {
  export interface INotificationPageModuleScss {
    item: string;
    list: string;
    section: string;
    title: string;
  }
}

declare const NotificationPageModuleScssModule: NotificationPageModuleScssNamespace.INotificationPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotificationPageModuleScssNamespace.INotificationPageModuleScss;
};

export = NotificationPageModuleScssModule;
