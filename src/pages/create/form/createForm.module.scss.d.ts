declare namespace CreateFormModuleScssNamespace {
  export interface ICreateFormModuleScss {
    add: string;
    back: string;
    button: string;
    category: string;
    file: string;
    footer: string;
    form: string;
    image: string;
    message: string;
    root: string;
    title: string;
  }
}

declare const CreateFormModuleScssModule: CreateFormModuleScssNamespace.ICreateFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateFormModuleScssNamespace.ICreateFormModuleScss;
};

export = CreateFormModuleScssModule;
