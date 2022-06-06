declare namespace InfoPageModuleScssNamespace {
  export interface IInfoPageModuleScss {
    root: string;
    title: string;
  }
}

declare const InfoPageModuleScssModule: InfoPageModuleScssNamespace.IInfoPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InfoPageModuleScssNamespace.IInfoPageModuleScss;
};

export = InfoPageModuleScssModule;
