declare namespace AccountPageModuleScssNamespace {
  export interface IAccountPageModuleScss {
    container: string;
    link: string;
    notification: string;
    section: string;
    settings: string;
    title: string;
  }
}

declare const AccountPageModuleScssModule: AccountPageModuleScssNamespace.IAccountPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccountPageModuleScssNamespace.IAccountPageModuleScss;
};

export = AccountPageModuleScssModule;
