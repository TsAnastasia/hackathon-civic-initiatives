declare namespace InitiativeCommentsModuleScssNamespace {
  export interface IInitiativeCommentsModuleScss {
    comments: string;
    item: string;
    message: string;
    root: string;
    title: string;
  }
}

declare const InitiativeCommentsModuleScssModule: InitiativeCommentsModuleScssNamespace.IInitiativeCommentsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeCommentsModuleScssNamespace.IInitiativeCommentsModuleScss;
};

export = InitiativeCommentsModuleScssModule;
