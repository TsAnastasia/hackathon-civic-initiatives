declare namespace InitiativeTypeModuleScssNamespace {
  export interface IInitiativeTypeModuleScss {
    complain: string;
    gratitude: string;
    icon: string;
    offer: string;
    root: string;
    title: string;
  }
}

declare const InitiativeTypeModuleScssModule: InitiativeTypeModuleScssNamespace.IInitiativeTypeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiativeTypeModuleScssNamespace.IInitiativeTypeModuleScss;
};

export = InitiativeTypeModuleScssModule;
