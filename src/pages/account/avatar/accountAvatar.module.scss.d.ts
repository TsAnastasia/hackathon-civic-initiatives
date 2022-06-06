declare namespace AccountAvatarModuleScssNamespace {
  export interface IAccountAvatarModuleScss {
    avatar: string;
    modal: string;
    modal_open: string;
  }
}

declare const AccountAvatarModuleScssModule: AccountAvatarModuleScssNamespace.IAccountAvatarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccountAvatarModuleScssNamespace.IAccountAvatarModuleScss;
};

export = AccountAvatarModuleScssModule;
