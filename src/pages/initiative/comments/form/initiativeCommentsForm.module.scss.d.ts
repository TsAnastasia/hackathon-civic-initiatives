declare namespace InitiativeCommentsFormModuleScssNamespace {
  export interface IInitiativeCommentsFormModuleScss {
    input: string;
    loaded: string;
    root: string;
    send: string;
    submit: string;
  }
}

declare const InitiativeCommentsFormModuleScssModule: InitiativeCommentsFormModuleScssNamespace.IInitiativeCommentsFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeCommentsFormModuleScssNamespace.IInitiativeCommentsFormModuleScss;
};

export = InitiativeCommentsFormModuleScssModule;
