declare namespace AccountFormModuleScssNamespace {
  export interface IAccountFormModuleScss {
    button: string;
    form: string;
    title: string;
  }
}

declare const AccountFormModuleScssModule: AccountFormModuleScssNamespace.IAccountFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccountFormModuleScssNamespace.IAccountFormModuleScss;
};

export = AccountFormModuleScssModule;
