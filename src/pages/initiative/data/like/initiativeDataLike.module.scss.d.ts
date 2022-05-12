declare namespace InitiativeDataLikeModuleScssNamespace {
  export interface IInitiativeDataLikeModuleScss {
    active: string;
    root: string;
    scale: string;
  }
}

declare const InitiativeDataLikeModuleScssModule: InitiativeDataLikeModuleScssNamespace.IInitiativeDataLikeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeDataLikeModuleScssNamespace.IInitiativeDataLikeModuleScss;
};

export = InitiativeDataLikeModuleScssModule;
