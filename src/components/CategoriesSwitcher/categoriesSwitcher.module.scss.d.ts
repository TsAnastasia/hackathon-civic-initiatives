declare namespace CategoriesSwitcherModuleScssNamespace {
  export interface ICategoriesSwitcherModuleScss {
    list: string;
    message: string;
    root: string;
  }
}

declare const CategoriesSwitcherModuleScssModule: CategoriesSwitcherModuleScssNamespace.ICategoriesSwitcherModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CategoriesSwitcherModuleScssNamespace.ICategoriesSwitcherModuleScss;
};

export = CategoriesSwitcherModuleScssModule;
