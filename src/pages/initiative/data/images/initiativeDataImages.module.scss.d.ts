declare namespace InitiativeDataImagesModuleScssNamespace {
  export interface IInitiativeDataImagesModuleScss {
    button: string;
    close: string;
    image: string;
    list: string;
    message: string;
    modal: string;
    next: string;
    open: string;
    prev: string;
  }
}

declare const InitiativeDataImagesModuleScssModule: InitiativeDataImagesModuleScssNamespace.IInitiativeDataImagesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeDataImagesModuleScssNamespace.IInitiativeDataImagesModuleScss;
};

export = InitiativeDataImagesModuleScssModule;
