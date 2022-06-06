declare namespace FooterModuleScssNamespace {
  export interface IFooterModuleScss {
    copyright: string;
    footer: string;
    link: string;
  }
}

declare const FooterModuleScssModule: FooterModuleScssNamespace.IFooterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModuleScssNamespace.IFooterModuleScss;
};

export = FooterModuleScssModule;
