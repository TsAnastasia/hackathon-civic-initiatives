declare namespace InfoDocsModuleScssNamespace {
  export interface IInfoDocsModuleScss {
    item: string;
    link: string;
    list: string;
    root: string;
    title: string;
  }
}

declare const InfoDocsModuleScssModule: InfoDocsModuleScssNamespace.IInfoDocsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InfoDocsModuleScssNamespace.IInfoDocsModuleScss;
};

export = InfoDocsModuleScssModule;
