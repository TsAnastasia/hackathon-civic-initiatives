declare namespace AppLoaderModuleScssNamespace {
  export interface IAppLoaderModuleScss {
    loader: string;
    loader_blackout: string;
    roller: string;
    root: string;
    root_fixed: string;
  }
}

declare const AppLoaderModuleScssModule: AppLoaderModuleScssNamespace.IAppLoaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppLoaderModuleScssNamespace.IAppLoaderModuleScss;
};

export = AppLoaderModuleScssModule;
