declare namespace InitaitveDataFilesModuleScssNamespace {
  export interface IInitaitveDataFilesModuleScss {
    button: string;
    modal: string;
    root: string;
  }
}

declare const InitaitveDataFilesModuleScssModule: InitaitveDataFilesModuleScssNamespace.IInitaitveDataFilesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitaitveDataFilesModuleScssNamespace.IInitaitveDataFilesModuleScss;
};

export = InitaitveDataFilesModuleScssModule;
