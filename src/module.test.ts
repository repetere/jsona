
// @ts-ignore
import * as VXA from "./module";
import { expect, } from 'chai';
console.log({ VXA });

// export { ViewXApp, React, ReactDOM, JSONX };

describe('VXA module', function () {
  describe('module', () => {
    // it('should return useGlobalHook', () => {
    //   const ugh = jsonx.__getUseGlobalHook();
    //   console.log({ ugh });
    //   expect(jsonx.__getUseGlobalHook()).to.be.a('function');
    // });
    it('should return a VXA Object', () => {
      expect(VXA).to.be.a('object');
    });
  });
});