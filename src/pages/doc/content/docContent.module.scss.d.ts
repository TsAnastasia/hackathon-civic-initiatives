declare namespace DocContentModuleScssNamespace {
  export interface IDocContentModuleScss {
    doc: string;
    page: string;
  }
}

declare const DocContentModuleScssModule: DocContentModuleScssNamespace.IDocContentModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocContentModuleScssNamespace.IDocContentModuleScss;
};

export = DocContentModuleScssModule;
