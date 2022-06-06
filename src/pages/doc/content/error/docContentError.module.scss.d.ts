declare namespace DocContentErrorModuleScssNamespace {
  export interface IDocContentErrorModuleScss {
    title: string;
  }
}

declare const DocContentErrorModuleScssModule: DocContentErrorModuleScssNamespace.IDocContentErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocContentErrorModuleScssNamespace.IDocContentErrorModuleScss;
};

export = DocContentErrorModuleScssModule;
