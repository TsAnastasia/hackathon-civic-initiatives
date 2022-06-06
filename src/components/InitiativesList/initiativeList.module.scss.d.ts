declare namespace InitiativeListModuleScssNamespace {
  export interface IInitiativeListModuleScss {
    content: string;
    list: string;
    message: string;
    root: string;
    title: string;
  }
}

declare const InitiativeListModuleScssModule: InitiativeListModuleScssNamespace.IInitiativeListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeListModuleScssNamespace.IInitiativeListModuleScss;
};

export = InitiativeListModuleScssModule;
