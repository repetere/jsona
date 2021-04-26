
// @ts-ignore
import * as JSONA from "./module";
console.log({ JSONA });

// export { JSONA, React, ReactDOM, JSONX };

describe('JSONA module', function () {
  describe('module', () => {
    // it('should return useGlobalHook', () => {
    //   const ugh = jsonx.__getUseGlobalHook();
    //   console.log({ ugh });
    //   expect(jsonx.__getUseGlobalHook()).to.be.a('function');
    // });
    it('should return a JSONA Object', () => {
      expect(typeof JSONA).toBe('object');
    });
  });
});