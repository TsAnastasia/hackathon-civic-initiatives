declare namespace FooterInfoModuleScssNamespace {
  export interface IFooterInfoModuleScss {
    button: string;
    modal: string;
    text: string;
    title: string;
  }
}

declare const FooterInfoModuleScssModule: FooterInfoModuleScssNamespace.IFooterInfoModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterInfoModuleScssNamespace.IFooterInfoModuleScss;
};

export = FooterInfoModuleScssModule;
