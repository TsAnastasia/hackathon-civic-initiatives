declare namespace AppHeaderModuleScssNamespace {
  export interface IAppHeaderModuleScss {
    header: string;
  }
}

declare const AppHeaderModuleScssModule: AppHeaderModuleScssNamespace.IAppHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppHeaderModuleScssNamespace.IAppHeaderModuleScss;
};

export = AppHeaderModuleScssModule;
