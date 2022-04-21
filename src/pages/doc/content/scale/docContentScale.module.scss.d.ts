declare namespace DocContentScaleModuleScssNamespace {
  export interface IDocContentScaleModuleScss {
    button: string;
    root: string;
    scale: string;
    zoomin: string;
    zoomout: string;
  }
}

declare const DocContentScaleModuleScssModule: DocContentScaleModuleScssNamespace.IDocContentScaleModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocContentScaleModuleScssNamespace.IDocContentScaleModuleScss;
};

export = DocContentScaleModuleScssModule;
