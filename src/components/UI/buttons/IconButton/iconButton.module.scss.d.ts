declare namespace IconButtonModuleScssNamespace {
  export interface IIconButtonModuleScss {
    root: string;
    size_small: string;
  }
}

declare const IconButtonModuleScssModule: IconButtonModuleScssNamespace.IIconButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconButtonModuleScssNamespace.IIconButtonModuleScss;
};

export = IconButtonModuleScssModule;
