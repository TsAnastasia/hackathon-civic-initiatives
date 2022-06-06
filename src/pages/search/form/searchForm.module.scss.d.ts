declare namespace SearchFormModuleScssNamespace {
  export interface ISearchFormModuleScss {
    form: string;
    input: string;
    loaded: string;
    root: string;
    search: string;
    submit: string;
    title: string;
  }
}

declare const SearchFormModuleScssModule: SearchFormModuleScssNamespace.ISearchFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchFormModuleScssNamespace.ISearchFormModuleScss;
};

export = SearchFormModuleScssModule;
