declare namespace InitiaitveCardModuleScssNamespace {
  export interface IInitiaitveCardModuleScss {
    date: string;
    description: string;
    image: string;
    info: string;
    root: string;
    row: string;
    title: string;
  }
}

declare const InitiaitveCardModuleScssModule: InitiaitveCardModuleScssNamespace.IInitiaitveCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InitiaitveCardModuleScssNamespace.IInitiaitveCardModuleScss;
};

export = InitiaitveCardModuleScssModule;
