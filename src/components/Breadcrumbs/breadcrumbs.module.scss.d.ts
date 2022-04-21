declare namespace BreadcrumbsModuleScssNamespace {
  export interface IBreadcrumbsModuleScss {
    crumb: string;
    current: string;
    root: string;
    separator: string;
  }
}

declare const BreadcrumbsModuleScssModule: BreadcrumbsModuleScssNamespace.IBreadcrumbsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BreadcrumbsModuleScssNamespace.IBreadcrumbsModuleScss;
};

export = BreadcrumbsModuleScssModule;
