declare namespace SearchPageModuleScssNamespace {
  export interface ISearchPageModuleScss {
    message: string;
    section: string;
  }
}

declare const SearchPageModuleScssModule: SearchPageModuleScssNamespace.ISearchPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchPageModuleScssNamespace.ISearchPageModuleScss;
};

export = SearchPageModuleScssModule;
