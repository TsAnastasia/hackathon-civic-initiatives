declare namespace CategoriesSwitcherTagModuleScssNamespace {
  export interface ICategoriesSwitcherTagModuleScss {
    active: string;
    tag: string;
  }
}

declare const CategoriesSwitcherTagModuleScssModule: CategoriesSwitcherTagModuleScssNamespace.ICategoriesSwitcherTagModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CategoriesSwitcherTagModuleScssNamespace.ICategoriesSwitcherTagModuleScss;
};

export = CategoriesSwitcherTagModuleScssModule;
