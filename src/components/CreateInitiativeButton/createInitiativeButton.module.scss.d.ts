declare namespace CreateInitiativeButtonModuleScssNamespace {
  export interface ICreateInitiativeButtonModuleScss {
    button: string;
    root: string;
  }
}

declare const CreateInitiativeButtonModuleScssModule: CreateInitiativeButtonModuleScssNamespace.ICreateInitiativeButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CreateInitiativeButtonModuleScssNamespace.ICreateInitiativeButtonModuleScss;
};

export = CreateInitiativeButtonModuleScssModule;
