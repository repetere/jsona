import * as JSONX from 'jsonx/src/types/jsonx';

export type functionParam = (...params: any[]) => any;

export interface jsonx extends JSONX.jsonx {
  component: string;
  props?: any;
  children?: jsonx[] | string | null;
  thisprops: {
    [index: string]: string[];
  };
  __dangerouslyBindEvalProps: {
    [index: string]: string | functionParam;
  };
  [index: string]: any;
}

export interface jsonxResourceProps{
  [index: string]: any;
}

export type jsonxComponent = {
  [index:string]:  | React.FunctionComponent
  | React.PureComponent
  | React.Component
  | React.ReactElement
  | functionParam;
}

export interface jsonxLibrary{
  [index: string]: jsonxComponent;
}