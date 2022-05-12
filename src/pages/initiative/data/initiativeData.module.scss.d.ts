declare namespace InitiativeDataModuleScssNamespace {
  export interface IInitiativeDataModuleScss {
    adress: string;
    bold: string;
    buttons: string;
    description: string;
    image: string;
    info: string;
    list: string;
    rotate: string;
    row: string;
    section: string;
    share: string;
    social: string;
    text: string;
    title: string;
    type: string;
  }
}

declare const InitiativeDataModuleScssModule: InitiativeDataModuleScssNamespace.IInitiativeDataModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeDataModuleScssNamespace.IInitiativeDataModuleScss;
};

export = InitiativeDataModuleScssModule;
