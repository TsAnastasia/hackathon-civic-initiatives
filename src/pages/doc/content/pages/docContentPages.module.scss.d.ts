declare namespace DocContentPagesModuleScssNamespace {
  export interface IDocContentPagesModuleScss {
    back: string;
    button: string;
    next: string;
    pages: string;
    root: string;
  }
}

declare const DocContentPagesModuleScssModule: DocContentPagesModuleScssNamespace.IDocContentPagesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocContentPagesModuleScssNamespace.IDocContentPagesModuleScss;
};

export = DocContentPagesModuleScssModule;
