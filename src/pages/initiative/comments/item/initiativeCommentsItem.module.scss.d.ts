declare namespace InitiativeCommentsItemModuleScssNamespace {
  export interface IInitiativeCommentsItemModuleScss {
    root: string;
  }
}

declare const InitiativeCommentsItemModuleScssModule: InitiativeCommentsItemModuleScssNamespace.IInitiativeCommentsItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeCommentsItemModuleScssNamespace.IInitiativeCommentsItemModuleScss;
};

export = InitiativeCommentsItemModuleScssModule;
