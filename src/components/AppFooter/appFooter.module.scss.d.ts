declare namespace AppFooterModuleScssNamespace {
  export interface IAppFooterModuleScss {
    copyright: string;
    footer: string;
    link: string;
  }
}

declare const AppFooterModuleScssModule: AppFooterModuleScssNamespace.IAppFooterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppFooterModuleScssNamespace.IAppFooterModuleScss;
};

export = AppFooterModuleScssModule;
