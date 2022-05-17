declare namespace UserAvatarModuleScssNamespace {
  export interface IUserAvatarModuleScss {
    image: string;
  }
}

declare const UserAvatarModuleScssModule: UserAvatarModuleScssNamespace.IUserAvatarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: UserAvatarModuleScssNamespace.IUserAvatarModuleScss;
};

export = UserAvatarModuleScssModule;
