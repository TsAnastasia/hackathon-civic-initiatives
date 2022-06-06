declare namespace CreateErrorModuleScssNamespace {
  export interface ICreateErrorModuleScss {
    back: string;
    buttons: string;
    message: string;
    root: string;
    text: string;
    title: string;
  }
}

declare const CreateErrorModuleScssModule: CreateErrorModuleScssNamespace.ICreateErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateErrorModuleScssNamespace.ICreateErrorModuleScss;
};

export = CreateErrorModuleScssModule;
