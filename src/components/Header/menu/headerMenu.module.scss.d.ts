declare namespace HeaderMenuModuleScssNamespace {
  export interface IHeaderMenuModuleScss {
    active: string;
    button: string;
    item: string;
    link: string;
    menu: string;
    modal: string;
    root: string;
  }
}

declare const HeaderMenuModuleScssModule: HeaderMenuModuleScssNamespace.IHeaderMenuModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderMenuModuleScssNamespace.IHeaderMenuModuleScss;
};

export = HeaderMenuModuleScssModule;
