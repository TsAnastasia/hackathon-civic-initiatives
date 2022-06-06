declare namespace InitiativeDataFilesItemModuleScssNamespace {
  export interface IInitiativeDataFilesItemModuleScss {
    name: string;
    root: string;
    size: string;
    type: string;
  }
}

declare const InitiativeDataFilesItemModuleScssModule: InitiativeDataFilesItemModuleScssNamespace.IInitiativeDataFilesItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeDataFilesItemModuleScssNamespace.IInitiativeDataFilesItemModuleScss;
};

export = InitiativeDataFilesItemModuleScssModule;
