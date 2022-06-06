declare namespace CreateCategoryCardModuleScssNamespace {
  export interface ICreateCategoryCardModuleScss {
    caption: string;
    image: string;
    link: string;
    root: string;
  }
}

declare const CreateCategoryCardModuleScssModule: CreateCategoryCardModuleScssNamespace.ICreateCategoryCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateCategoryCardModuleScssNamespace.ICreateCategoryCardModuleScss;
};

export = CreateCategoryCardModuleScssModule;
