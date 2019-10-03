export const options = {
  customComponents: [
    // {
    // name:ComponentName,
    // format:umd|jsonx,
    // type:component|library,
    // umdFilePath:url,
    // jsonx,
    // stylesheets:[url,],
    // }
  ],
  customScripts: [ /*url,*/ ],
  customStyles: [ /*url,*/ ],
  customFunctions: {
    /*Function, */
  },
  layers: [
    // loading,
    // modal,
    // overlay,
    // header,
    // footer,
    // nav,
    // error,
    // root,
    {
      order: 100,
      name: 'root',
      type: 'viewpath',
    },
  ],
  settings: {},
  application: {
    state: {
      name: 'My Application',
      version: '0.0.1',
    }
  },
  templates: {
    loading: {
      '/:catchall*': {
        jsonx: {
          component: 'div',
          children: 'loading...',
        }
      },
    },
    root: {
      '__error_404': {
        jsonx: {
          component: 'div',
          children: [{
              component: 'h1',
              children: 'Not Found',
            },
            {
              component: 'div',
              thisprops: {
                _children: ['location', 'pathname']
              }
            }
          ]
        },
        pageData: [{
          tagName: "title",
          attributes: {},
          innerHTML: "Not Found"
        }]
      },
      '__error_500': {
        jsonx: {
          component: 'div',
          children: [{
              component: 'h1',
              children: 'Error',
            },
            {
              component: 'textarea',
              resourceprops: {
                _children: ['error']
              }
            }
          ]
        },
        pageData: [{
          tagName: "title",
          attributes: {},
          innerHTML: "Error"
        }]
      },
      '/:catchall*': {
        jsonx: {
          component: 'Fragment',
          props: {
            key: 'catchall'
          },
          children: [{
              component: 'div',
              children: 'hello world!',
            },
            {
              component: 'h2',
              thisstate: {
                _children: ['name']
              }
            },
            {
              component: 'input',
              thisstate: {
                value: ['name']
              },
              __dangerouslyBindEvalProps: {
                onChange: `(function(e){
                  //console.log({e});
                  //console.log('this',this)
                  //console.log('e.target.value',e.target.value)
                  this.setState({name:e.target.value})
                })`
              }
            },

          ]
        }
      }
    }
  },
};