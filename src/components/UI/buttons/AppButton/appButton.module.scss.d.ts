declare namespace AppButtonModuleScssNamespace {
  export interface IAppButtonModuleScss {
    button: string;
    button_blue: string;
  }
}

declare const AppButtonModuleScssModule: AppButtonModuleScssNamespace.IAppButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppButtonModuleScssNamespace.IAppButtonModuleScss;
};

export = AppButtonModuleScssModule;
