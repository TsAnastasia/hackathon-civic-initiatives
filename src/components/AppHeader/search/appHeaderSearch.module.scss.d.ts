declare namespace AppHeaderSearchModuleScssNamespace {
  export interface IAppHeaderSearchModuleScss {
    blackout: string;
    button: string;
    close: string;
    panel: string;
    search: string;
    search_open: string;
  }
}

declare const AppHeaderSearchModuleScssModule: AppHeaderSearchModuleScssNamespace.IAppHeaderSearchModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppHeaderSearchModuleScssNamespace.IAppHeaderSearchModuleScss;
};

export = AppHeaderSearchModuleScssModule;
