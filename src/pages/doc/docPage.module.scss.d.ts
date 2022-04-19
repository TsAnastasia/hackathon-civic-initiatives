declare namespace DocPageModuleScssNamespace {
  export interface IDocPageModuleScss {
    doc: string;
    page: string;
  }
}

declare const DocPageModuleScssModule: DocPageModuleScssNamespace.IDocPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocPageModuleScssNamespace.IDocPageModuleScss;
};

export = DocPageModuleScssModule;
