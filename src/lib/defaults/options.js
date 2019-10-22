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
  // config: {
  //   Functions: {},
  //   componentLibraries: {},
  //   layers: [],
  //   querySelector: '',
  //   reactComponents: {},
  //   // settings: {},
  // },
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
      type: 'applicationRoot',
    },
  ],
  settings: {},
  application: {
    state: {
      name: 'My Application',
      version: '0.0.1',
    }
  },
  vxaState: {
    views: {},
    viewdata: {},
    ui: {},
    user: {},
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
              component: 'div',
              props: {
                style: {
                  padding: '1rem',
                  margin: '1rem',
                  border: '1px solid lightgrey'
                }
              },
              children: [{
                  component: 'pre',
                  resourceprops: {
                    _children: ['error', 'message']
                  }
                },
                {
                  component: 'pre',
                  resourceprops: {
                    _children: ['error', 'stack']
                  }
                }
              ]
            },

          ]
        },
        pageData: [{
          tagName: "title",
          attributes: {},
          innerHTML: "Error"
        }]
      },
      '/login': {
        jsonx: {
          component: 'div',
          children: [{
              component: 'h1',
              children: 'Login'
            },
            {
              component: 'Formik.Formik',
              props: {
                initialValues: {
                  username: '',
                  password: ''
                },
              },
              __dangerouslyInsertFunctionComponents: {
                render: {
                  reactComponent: {
                    component: 'form',
                    thisprops: {
                      onSubmit: ['handleSubmit']
                    },
                    children: [{
                        component: 'Formik.Field',
                        props: {
                          type: 'text',
                          name: 'username',
                          placeholder: 'username',
                        }
                      },
                      {
                        component: 'Formik.ErrorMessage',
                        props: {
                          name: 'username'
                        }
                      },
                      {
                        component: 'Formik.Field',
                        props: {
                          type: 'password',
                          name: 'password',
                        }
                      },
                      {
                        component: 'button',
                        props: {
                          type: 'submit'
                        },
                        children: 'Submit'
                      },
                    ]
                  }
                }
              },
              __dangerouslyBindEvalProps: {
                validate: `(function(values){
                  let errors = {};
                  if (!values.username) {
                    errors.username = 'Required';
                  } 
                  /* eslint-disable */
                  // else if (
                    // eslint-disable-next-line
                  // ) {
                  //   errors.email = 'Invalid email address';
                  // }
                  /* eslint-enable */
                  return errors;
                })`,
                onSubmit: `(function(values, { setSubmitting }){
                  // console.log({values},this)
                  this.viewx.Functions.loginUser(values);

                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                })`
              }
            }
          ]
        },
        pageData: [{
          tagName: "title",
          attributes: {},
          innerHTML: "User Login"
        }]
      },
      '/': {
        // '/:catchall*': {
        preRenderFunctions: [
          // 'func:viewx.Functions.passOne',
          // 'func:window.someWindowFunction',
          // 'func:viewx.Functions.passOne',
          // 'func:viewx.Functions.passTwo',
          // 'func:viewx.Functions.requireAuth',
          // 'func:viewx.Functions.passOne',
        ],
        pageData: [{
          tagName: "title",
          attributes: {},
          innerHTML: "Sample Simple App"
        }],
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
              component: 'sayHello',
            },
            {
              component: 'h2',
              thisstate: {
                _children: ['name']
              }
            },
            {
              component: 'div',
              props: {
                style: {
                  display: 'flex',
                }
              },
              children: [{
                  component: 'input',
                  props: {
                    style: {
                      padding: '5px',
                    },
                  },
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
                  },
                },
                {
                  component: 'Link',
                  props: {
                    to: '/modal/hello',
                    style: {
                      padding: '5px',
                    },
                  },
                  children: 'Hello Modal'
                },
                {
                  component: 'Link',
                  props: {
                    to: '/about',
                    style: {
                      padding: '5px',
                    }
                  },
                  children: 'About Page'
                },
                {
                  component: 'Link',
                  props: {
                    to: '/page/4',
                    style: {
                      padding: '5px',
                    },
                  },
                  children: 'Page 4'
                },
                {
                  component: 'button',
                  props: {
                    style: {
                      padding: '5px',
                    }
                  },
                  children: 'change header',
                  __dangerouslyBindEvalProps: {
                    onClick: `(function(){
                      // console.log('onClick this',this);
                      this.viewx.Functions.loadView({
                        layerName:'header',
                        view:{
                          jsonx:{
                            component:'h1',
                            resourceprops:{
                              style:['customStyle']
                            },
                            children:'NEW HEADER',
                          },
                        },
                        resourceprops:{
                          customStyle:{
                            color:'red',
                          }
                        }
                      });
                    })`
                  },

                }
              ]
            },
          ]
        }
      }
    },
    modal: {
      '/modal/hello': {
        jsonx: {
          component: 'ReactModal',
          props: {
            ariaHideApp: false,
          },
          thisprops: {
            isOpen: ['ui', 'isRouteLayer_modal_Matched'],
          },
          __dangerouslyBindEvalProps: {
            onRequestClose: `(function(){
              // console.log('onRequestClose this',this);
              this.props.dispatch({ type:'toggleMatchedRouteLayer_modal',});
              this.props.history.goBack();
            })`
          },
          // __functionProps: {
          //   onRequestClose:['func:this.props.toggleMatchedRouteLayer_modal']
          // },
          children: 'SAY HELLO MODAL',
        }
      }
    }
  },
};