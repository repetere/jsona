# JSONA
[![Coverage Status](https://coveralls.io/repos/github/repetere/jsona/badge.svg?branch=main)](https://coveralls.io/github/repetere/jsona?branch=main) [![Build, Test, Release](https://github.com/repetere/jsona/actions/workflows/release.yml/badge.svg)](https://github.com/repetere/jsona/actions/workflows/release.yml)

## Description

**JSONA** is a module that constructs a single page react applciation (SPA) with JSON using Typescript.
### Jump right in

JSONA is designed so you can quickly build a React SPA by defining your layout, routes, and application functionality with JSON. The JSONA Library includes a JSONA UMD module with batteries included so you can use JSONA in the browser without transpilers or any additional setup/configuration. The JSONA UMD is ideal for JAMstack Applications and internal tools.

### Usage

The idea behind JSONA is to enable rapid SPA development. JSONA attempts to automate the routing, rendering, and compiling of a typical front end application. 

React developers who are more comfortable building custom components and elements can also configure JSONA to meet specific application requirements.

Although you could build a completely custom React App with JSONA, the ideal use case is for quickly building and prototyping internal tools.

### What's included
JSONA currently supports
- Defining custom components
- Using custom component libraries (React Bootstrap, Material UI, Ant Design, etc)
- Multiple layered views, and support for overlays and modals
- Custom authentication logic
- Dynamic routing and data loading
- Custom error handling
## Installation

```sh
$ npm i @jsonstack/jsona
```

<link id="viewx-style-style-0" rel="stylesheet" type="text/css" href="https://unpkg.com/highlight.js@9.18.1/styles/darkula.css">

---
### JSONA Manual
 - [Getting Started](https://repetere.github.io/jsona/manual/getting-started/index.html)
   - [Basic Views, Layers, and Routes](https://repetere.github.io/jsona/manual/data-fetching/index.html)
   - [Data Driven Views and Routing](https://repetere.github.io/jsona/manual/feature-engineering/index.html)
   - [Custom Components](https://repetere.github.io/jsona/manual/model-training/index.html)
   - [Managing Application and View States](https://repetere.github.io/jsona/manual/model-evaluation/index.html)
   - [JSONA & JVT Spec](https://repetere.github.io/jsona/manual/spec/index.html)
   - [Examples](https://repetere.github.io/jsona/manual/examples/index.html)
---

### Basic Usage
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SIMPLE JSONA TEST</title>
    <script type="text/javascript" src="https://unpkg.com/@jsonstack/jsona@0.6.6/dist/index.umd.js"></script>
  </head>
  <body>
    <div id="loading"></div>
    <div id="root"></div>
    <script type="text/javascript">
    const jsonaTemplates = {
      header:{
        __error_404:{
          jsonx:{
            component:"header",
            children:"error header"
          }
        },
        '/':{
          jsonx:{
            component:"header",
            children:"home header"
          }
        },
        '/:catchall*':{
          jsonx:{
            component:"header",
            children:"rest of pages header"
          }
        },
      },
      root:{
        __error_404: {
          jsonx: {
            component: "div",
            children: [
              {
                component: "h1",
                children: "Not Found"
              },
              {
                component: "div",
                thisprops: {
                  _children: ["location", "pathname"]
                }
              }
            ]
          },
          pageData: [
            {
              tagName: "title",
              attributes: {},
              innerHTML: "Not Found"
            }
          ]
        },
        '/':{
          preRenderFunctions:[],
          pageData:[
            {
              tagName:'title',
              attributes:{},
              innerHTML:"Basic JSONA App"
            }
          ],
          jsonx:{
            component:'main',
            children:[
              {div:'hello world!!!'},
              {
                ul:[
                  {li:[{Link:{props:{to:'/'},children:'index'}}]},
                  {li:[{Link:{props:{to:'/page-1'},children:'page1'}}]},
                  {li:[{Link:{props:{to:'/page-2'},children:'page2'}}]},
                  {li:[{Link:{props:{to:'/page-3'},children:'page3'}}]}
                ]
              }
            ]
          }
        },
        '/page-1':{
          preRenderFunctions:[
          ],
          postRenderFunctions:[
          ],
          pageData:[
            {
              tagName:'title',
              attributes:{},
              innerHTML:"Page 1"
            }
          ],
          jsonx:{
            component:'main',
            children:[
              {div:'page 1!!!'},
              {
                ul:[
                  {li:[{Link:{props:{to:'/'},children:'index'}}]},
                  {li:[{Link:{props:{to:'/page-1'},children:'page1'}}]},
                  {li:[{Link:{props:{to:'/page-2'},children:'page2'}}]},
                  {li:[{Link:{props:{to:'/page-3'},children:'page3'}}]}
                ]
              }
            ]
          },
          "resources": {
            "album": "https://jsonplaceholder.typicode.com/albums/1",
            "photos": "https://jsonplaceholder.typicode.com/albums/1/photos"
          },
        },
      },
    }
    const AppConfig = {
      templates: jsonaTemplates,
      settings: {
        // templatePath: 'https://my-json-server.typicode.com/repetere/mock-my-json-server/templates', //can also provide endpoint to pull templates
        router: "hash", //react router type
      },
      application: {
        state: {
          name: "Demo App",
          version: "0.0.1",
        }
      },
      initialScripts: [
        // "https://any-custom-scripts.js",
      ],
      customComponents: [
        // {
        //   name: "ReactModal",
        //   format: "umd",
        //   type: "component",
        //   umdFilePath:
        //     "https://unpkg.com/react-modal@3.10.1/dist/react-modal.js"
        //   // jsonx,
        //   // stylesheets:[url,],
        // },
      ],
      customScripts: [
        /*url,*/
        // "https://unpkg.com/scheduler@0.18.0/umd/scheduler.production.min.js"
      ],
      customStyles: [
      /*url,*/
        // "node_modules/spectre.css/dist/spectre.min.css"
      ],
      customFunctions: {
        /*Function, */
      },
      layers: [
        {
          order: 200,
          name: "modal",
          system: true,
          type: "overlay"
        },
        // overlay
        {
          order: 400,
          name: "header",
          system: true,
          type: "view"
        },
        {
          order: 900,
          name: "root",
          system: true,
          type: "applicationRoot"
        }
      ]
    };
    // void async function main(){
    //   const App = await jsona.App(AppConfig)
    // }()
    jsona.App(AppConfig) 
    </script>
  </body>
</html>

```

<!-- ## Example ##
<iframe width="100%" height="500" src="https://jsfiddle.net/yawetse/4ph1vwes/21/embedded/result,js,html,css,resources/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->

### Development

Note *Make sure you have typescript installed*

```sh
$ npm i -g typescript 
```

For generating documentation

```sh
$ npm run doc
```

### Notes

Check out [https://repetere.github.io/jsona/](https://repetere.github.io/jsona/) for the full jsona Documentation

### Testing

```sh
$ npm test
```

### Contributing

Fork, write tests and create a pull request!

License

----

MIT