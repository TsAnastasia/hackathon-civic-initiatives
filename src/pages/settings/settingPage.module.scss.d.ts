declare namespace SettingPageModuleScssNamespace {
  export interface ISettingPageModuleScss {
    form: string;
    item: string;
    section: string;
    title: string;
  }
}

declare const SettingPageModuleScssModule: SettingPageModuleScssNamespace.ISettingPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SettingPageModuleScssNamespace.ISettingPageModuleScss;
};

export = SettingPageModuleScssModule;
