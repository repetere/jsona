import { VXALayer, VXAConfig, } from "../types";

export enum customFileType{
  script = "script",
  style = "style"
}

export type VXALayerObject = {
  [index: string]: VXALayer;
}

export type librariesAndComponents = {
  componentLibraries: VXAConfig['componentLibraries'];
  reactComponents: VXAConfig['reactComponents'];
}

export interface insertScriptParams {
  src: string;
  name: string;
  async?: boolean;
  onload?: () => void;
  doc?: HTMLDocument;
}
