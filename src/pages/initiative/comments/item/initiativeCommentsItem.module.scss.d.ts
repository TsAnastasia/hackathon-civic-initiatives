declare namespace InitiativeCommentsItemModuleScssNamespace {
  export interface IInitiativeCommentsItemModuleScss {
    avatar: string;
    date: string;
    name: string;
    root: string;
    text: string;
  }
}

declare const InitiativeCommentsItemModuleScssModule: InitiativeCommentsItemModuleScssNamespace.IInitiativeCommentsItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeCommentsItemModuleScssNamespace.IInitiativeCommentsItemModuleScss;
};

export = InitiativeCommentsItemModuleScssModule;
