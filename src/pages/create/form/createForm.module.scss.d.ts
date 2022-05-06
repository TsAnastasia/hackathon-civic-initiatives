declare namespace CreateFormModuleScssNamespace {
  export interface ICreateFormModuleScss {
    category: string;
    form: string;
    root: string;
    title: string;
  }
}

declare const CreateFormModuleScssModule: CreateFormModuleScssNamespace.ICreateFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateFormModuleScssNamespace.ICreateFormModuleScss;
};

export = CreateFormModuleScssModule;
