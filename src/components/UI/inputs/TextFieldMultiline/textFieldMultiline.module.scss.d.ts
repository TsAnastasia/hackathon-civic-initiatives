declare namespace TextFieldMultilineModuleScssNamespace {
  export interface ITextFieldMultilineModuleScss {
    error: string;
    field: string;
    input: string;
    input_error: string;
    label: string;
    root: string;
  }
}

declare const TextFieldMultilineModuleScssModule: TextFieldMultilineModuleScssNamespace.ITextFieldMultilineModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextFieldMultilineModuleScssNamespace.ITextFieldMultilineModuleScss;
};

export = TextFieldMultilineModuleScssModule;
