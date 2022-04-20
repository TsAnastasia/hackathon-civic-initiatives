declare namespace DocContentPanelModuleScssNamespace {
  export interface IDocContentPanelModuleScss {
    root: string;
  }
}

declare const DocContentPanelModuleScssModule: DocContentPanelModuleScssNamespace.IDocContentPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocContentPanelModuleScssNamespace.IDocContentPanelModuleScss;
};

export = DocContentPanelModuleScssModule;
