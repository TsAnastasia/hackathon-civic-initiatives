declare namespace CreateSuccessModuleScssNamespace {
  export interface ICreateSuccessModuleScss {
    section: string;
    title: string;
  }
}

declare const CreateSuccessModuleScssModule: CreateSuccessModuleScssNamespace.ICreateSuccessModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateSuccessModuleScssNamespace.ICreateSuccessModuleScss;
};

export = CreateSuccessModuleScssModule;
