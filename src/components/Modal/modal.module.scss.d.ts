declare namespace ModalModuleScssNamespace {
  export interface IModalModuleScss {
    blackout: string;
    content: string;
    content_open: string;
    root: string;
    root_open: string;
  }
}

declare const ModalModuleScssModule: ModalModuleScssNamespace.IModalModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalModuleScssNamespace.IModalModuleScss;
};

export = ModalModuleScssModule;
