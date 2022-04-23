declare namespace TextFieldModuleScssNamespace {
  export interface ITextFieldModuleScss {
    error: string;
    field: string;
    input: string;
    input_error: string;
    label: string;
    root: string;
  }
}

declare const TextFieldModuleScssModule: TextFieldModuleScssNamespace.ITextFieldModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextFieldModuleScssNamespace.ITextFieldModuleScss;
};

export = TextFieldModuleScssModule;
