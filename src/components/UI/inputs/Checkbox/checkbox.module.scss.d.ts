declare namespace CheckboxModuleScssNamespace {
  export interface ICheckboxModuleScss {
    box: string;
    box_checked: string;
    input: string;
    label: string;
    root: string;
  }
}

declare const CheckboxModuleScssModule: CheckboxModuleScssNamespace.ICheckboxModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CheckboxModuleScssNamespace.ICheckboxModuleScss;
};

export = CheckboxModuleScssModule;
