export interface jsonx {
  component: string;
  props?: any;
  children?: jsonx[] | string | null;
  thisprops: {
    [index: string]: string[];
  };
  __dangerouslyBindEvalProps: {
    [index: string]: string | function;
  };
}
