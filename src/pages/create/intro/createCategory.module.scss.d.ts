declare namespace CreateCategoryModuleScssNamespace {
  export interface ICreateCategoryModuleScss {
    list: string;
    root: string;
    title: string;
  }
}

declare const CreateCategoryModuleScssModule: CreateCategoryModuleScssNamespace.ICreateCategoryModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateCategoryModuleScssNamespace.ICreateCategoryModuleScss;
};

export = CreateCategoryModuleScssModule;
