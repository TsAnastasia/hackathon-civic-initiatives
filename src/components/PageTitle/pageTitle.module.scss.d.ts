declare namespace PageTitleModuleScssNamespace {
  export interface IPageTitleModuleScss {
    title: string;
  }
}

declare const PageTitleModuleScssModule: PageTitleModuleScssNamespace.IPageTitleModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageTitleModuleScssNamespace.IPageTitleModuleScss;
};

export = PageTitleModuleScssModule;
