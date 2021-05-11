import { getFilePromise, getComponentPromise, getReactLibrariesAndComponents, } from './config'
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'
import jsdom from 'jsdom'
import { VXAComponentFormats, VXAComponentTypes } from '../../types';
import React,{FunctionComponent} from 'react';

describe('src/lib/util/config',()=>{
  const virtualConsole = new jsdom.VirtualConsole();
  const html = `<!DOCTYPE html>
<head></head>
<body>
<div>Foo</div>
</body>`
  describe('getFilePromise',()=>{
    it('should add javascript file to dom',async (done)=>{
      const window = new jsdom.JSDOM(html, { 
        runScripts: "dangerously", 
        resources: "usable",
        virtualConsole,
      }).window
      const file = 'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js';
      const output = await getFilePromise({ 
        type: 'script',
        file,
        i: 0,
        name: 'ReactBootstrap',
        timeoutMilliseconds: 10000,
        doc: window.document,
      })
      expect(output).toBe(file);
      done();
    },10000);
    it('should add css stylesheet file to dom',async (done)=>{
      const window = new jsdom.JSDOM(html, { 
        // runScripts: "dangerously", 
        resources: "usable",
        url: "https://example.org/",
        referrer: "https://example.com/",
        contentType: "text/html",
        includeNodeLocations: true,
        // virtualConsole,
      }).window
      const file = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
      const output = await getFilePromise({ 
        type: 'style',
        file,
        i: 0,
        name: 'ReactBootstrapCSS',
        timeoutMilliseconds: 10000,
        doc: window.document,
      })
      expect(output).toBe(file);
      done();
    },10000);
    it('should return true if not a stylesheet or a javascript file',async (done)=>{
      const output = await getFilePromise({ 
        type: 'invalid',
        file: 'http://dummyfile',
        i: 0,
        name: 'testFile0',
        timeoutMilliseconds: 5000,
      })
      expect(output).toBe(true);
      done();
    },10000);
    it('should handle unreachable files and timeout',async (done)=>{
      expect(getFilePromise({ 
        type: 'style',
        file: 'http://dummyfile',
        i: 0,
        name: 'timeoutFile0',
        timeoutMilliseconds: 500,
      })).resolves.toThrow(/Timeout loading file/g);
      done();
    },10000);
  });
  describe('getComponentPromise',()=>{
    it('should handle unreachable files and timeout',async(done)=>{
      expect(getComponentPromise({ 
        umdFilePath: 'http://dummyfile',
        name: 'timeoutFile2',
        timeoutMilliseconds: 500,
      })).resolves.toThrow(/Timeout loading file/g);
      done();
    });
    it('should handle creating a component without any files',async(done)=>{
      expect(getComponentPromise({ 
        name: 'jsonxcomponentTest',
        timeoutMilliseconds: 500,
      })).resolves.toBe(true)
      done();
    });
    it('should add JS and Stylesheets',async(done)=>{
      const window = new jsdom.JSDOM(html, { 
        runScripts: "dangerously", 
        resources: "usable",
        virtualConsole,
      }).window
      const file = 'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js';
      const css = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
      const output = await getComponentPromise({ 
        umdFilePath: file,
        name: 'ReactBootstrap',
        timeoutMilliseconds: 5000,
        stylesheets:[css],
        HTMLDocument: window.document,
      })
      expect(window.document.head.innerHTML).toMatch(file)
      expect(window.document.head.innerHTML).toMatch(css)
      expect(output).toBe(file);
      done();
    });
  });
  /*
  describe('getReactLibrariesAndComponents',()=>{
    const fnc_name = 'customFuncComponent';
    const fnc = {
      jsonx:{ 
        component:'div',
        children:'this is a function component',
       },
      functionBody: function funcComponent(){ console.log('some func body') },
      options:{
        name: fnc_name,
      }
    }
    const cc_name = 'customClassComponent';
    const cc = {
      componentDidMount: {
        body: 'console.log(\'mounted\',this.props)',
        arguments: [],
      },
      render: {
        body: {
          component: 'p',
          children: 'My Custom React Component Status:',
        },
      },
    }
    it('should create react functions with JSONX',async(done)=>{
      const {  reactComponents, } = await getReactLibrariesAndComponents({
        customComponents: [{
          type: VXAComponentTypes.function,
          name: fnc_name,
          format: VXAComponentFormats.jsonx,
          ...fnc,
        }]
      });
      expect(typeof reactComponents?.[fnc_name]).toBe('function');
      done();
    });
    it('should create react class components with JSONX',async(done)=>{
      console.warn = jest.fn();
      const {  reactComponents, } = await getReactLibrariesAndComponents({
        customComponents: [{
          type: VXAComponentTypes.component,
          name: cc_name,
          format: VXAComponentFormats.jsonx,
          jsonx: cc
        }]
      });
      expect(typeof reactComponents?.[cc_name]).toBe('function');
      done();
    });
    it('should create a component library',async(done)=>{
      const { componentLibraries, } = await getReactLibrariesAndComponents({
        customComponents: [{
          type: VXAComponentTypes.library,
          name: 'compLib',
          format: VXAComponentFormats.jsonx,
          jsonx: {
            [cc_name]: {
              type: VXAComponentTypes.component,
              name: cc_name,
              jsonxComponent: cc
            },
            [fnc_name]:{
              type: VXAComponentTypes.function,
              name: fnc_name,
              jsonxComponent: fnc.jsonx,
              ...fnc
            },
          }
        }]
      });
      expect(Object.keys(componentLibraries?.compLib)).toMatchObject([cc_name,fnc_name])
      done();
    });
  });
  */
});
