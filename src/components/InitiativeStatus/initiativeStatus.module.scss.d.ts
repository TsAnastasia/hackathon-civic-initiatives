declare namespace InitiativeStatusModuleScssNamespace {
  export interface IInitiativeStatusModuleScss {
    closed: string;
    considered: string;
    root: string;
    working: string;
  }
}

declare const InitiativeStatusModuleScssModule: InitiativeStatusModuleScssNamespace.IInitiativeStatusModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeStatusModuleScssNamespace.IInitiativeStatusModuleScss;
};

export = InitiativeStatusModuleScssModule;
