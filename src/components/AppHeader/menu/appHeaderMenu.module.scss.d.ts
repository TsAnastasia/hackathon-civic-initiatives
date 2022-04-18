declare namespace AppHeaderMenuModuleScssNamespace {
  export interface IAppHeaderMenuModuleScss {
    active: string;
    button: string;
    item: string;
    link: string;
    menu: string;
    modal: string;
    root: string;
  }
}

declare const AppHeaderMenuModuleScssModule: AppHeaderMenuModuleScssNamespace.IAppHeaderMenuModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppHeaderMenuModuleScssNamespace.IAppHeaderMenuModuleScss;
};

export = AppHeaderMenuModuleScssModule;
