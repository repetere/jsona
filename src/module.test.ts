// @ts-ignore
import * as JSONA from "./module";
const { App, React, ReactDOM, JSONX } = JSONA

describe('JSONA module', function () {
  describe('module', () => {
    // it('should return useGlobalHook', () => {
    //   const ugh = JSONX.__getUseGlobalHook();
    //   console.log({ ugh });
    //   expect(JSONX.__getUseGlobalHook()).to.be.a('function');
    // });
    it('should return a JSONA Object', () => {
      expect(typeof JSONA).toBe('object');
    });
  });
});