declare namespace HeaderSearchModuleScssNamespace {
  export interface IHeaderSearchModuleScss {
    blackout: string;
    button: string;
    close: string;
    field: string;
    input: string;
    panel: string;
    panel_open: string;
    search: string;
    search_open: string;
  }
}

declare const HeaderSearchModuleScssModule: HeaderSearchModuleScssNamespace.IHeaderSearchModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderSearchModuleScssNamespace.IHeaderSearchModuleScss;
};

export = HeaderSearchModuleScssModule;
