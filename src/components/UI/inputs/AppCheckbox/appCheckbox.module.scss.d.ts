declare namespace AppCheckboxModuleScssNamespace {
  export interface IAppCheckboxModuleScss {
    box: string;
    box_checked: string;
    input: string;
    label: string;
    root: string;
  }
}

declare const AppCheckboxModuleScssModule: AppCheckboxModuleScssNamespace.IAppCheckboxModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppCheckboxModuleScssNamespace.IAppCheckboxModuleScss;
};

export = AppCheckboxModuleScssModule;
