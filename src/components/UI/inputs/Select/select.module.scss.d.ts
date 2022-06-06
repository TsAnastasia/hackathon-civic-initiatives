declare namespace SelectModuleScssNamespace {
  export interface ISelectModuleScss {
    error: string;
    field: string;
    input: string;
    input_error: string;
    label: string;
    option: string;
    root: string;
  }
}

declare const SelectModuleScssModule: SelectModuleScssNamespace.ISelectModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SelectModuleScssNamespace.ISelectModuleScss;
};

export = SelectModuleScssModule;
