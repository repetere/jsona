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
  customScripts: [
    /*url,*/
  ],
  customStyles: [
    /*url,*/
  ],
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
      name: "root",
      type: "applicationRoot"
    }
  ],
  querySelector:"#root",
  settings: {},
  application: {
    state: {
      name: "My Application",
      version: "0.0.1"
    }
  },
  vxaState: {
    views: {},
    viewdata: {},
    ui: {},
    user: {}
  },
  templates: {
    loading: {
      "/:catchall*": {
        jsonx: {
          component: "div",
          children: "loading..."
        }
      }
    },
    root: {
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
      __error_500: {
        jsonx: {
          component: "div",
          children: [
            {
              component: "h1",
              children: "Error"
            },
            {
              component: "div",
              props: {
                style: {
                  padding: "1rem",
                  margin: "1rem",
                  border: "1px solid lightgrey"
                }
              },
              children: [
                {
                  component: "pre",
                  resourceprops: {
                    _children: ["error", "message"]
                  }
                },
                {
                  component: "pre",
                  resourceprops: {
                    _children: ["error", "stack"]
                  }
                }
              ]
            }
          ]
        },
        pageData: [
          {
            tagName: "title",
            attributes: {},
            innerHTML: "Error"
          }
        ]
      },
      "/about-un-auth-basic": {
				"jsonx": {
					"component": "div",
					"children": [{
							"component": "p",
							"children": "about page"
						},
						{
							"component": "ul",
							"children": [{
									"component": "li",
									"children": [{
										"component": "Link",
										"props": {
											"to": "/"
										},
										"children": "index"
									}]
								},
								{
									"component": "li",
									"children": [{
										"component": "Link",
										"props": {
											"to": "/home"
										},
										"children": "home page"
									}]
								},
								{
									"component": "li",
									"children": [{
										"component": "Link",
										"props": {
											"to": "/about"
										},
										"children": "about page "
									},
                  {
										"component": "Link",
										"props": {
											"to": "/about-un-auth"
										},
										"children": " about page (no auth)"
									}]
								},
								{
									"component": "li",
									"children": [{
										"component": "Link",
										"props": {
											"to": "/page/2"
										},
										"children": "Page two"
									}]
								}
							]
            },
            {
              component: 'ul',
              resourceprops: {
                __spread:['photos']
              },
              __spreadComponent:{
                component:'li',
                thisprops:{
                  _children:['__item','title']
                }
              },
            }
					]
				},
				"resources": {
					"album": "https://jsonplaceholder.typicode.com/albums/1",
					"photos": "https://jsonplaceholder.typicode.com/albums/1/photos"
				},
        "pageData": [
          {
						"tagName": "title",
						"attributes": {

						},
						"innerHTML": "My about Page"
					},
					{
            "tagName": "meta",
						"attributes": {
              "name": "theme-color",
							"content": "#9a1c5e"
						},
					}
				]
			},
      "/login": {
        jsonx: {
          component: "div",
          props: {
            key:902932
          },
          children: [
            {
              component: "h1",
              children: "Login",
              props: {
                key:31222,
              },
            },
            {
              component:'FormComponent',
              props: {
                formComponent: {
                  component: 'div',
                  props: {
                    key:3122,
                  },
                  children: [
                    {
                      component: 'div',
                      props: {
                        key:312,
                      },
                      children: [
                        {
                          component: 'label',
                          props: {
                            style: {
                              
                              display:'block'
                            }
                          },
                          children:'Username'
                        },
                        {
                          component: "input",
                          props: {
                            key:31,
                            type: "text",
                            name: "username",
                            placeholder: "username"
                          },
                          // thiscontext:{
                          //   ref:['reactHookForm','register']
                          // },
                          __dangerouslyEvalProps:{
                            ref:`(function(){
                              return this.reactHookForm.register({required:'required username'});
                            })`,
                          }
                        },
                        {
                          component: "ReactHookForm.ErrorMessage",
                          props: {
                            key:32,
                            name: "username"
                          },
                          thiscontext:{
                            errors:['reactHookForm','errors']
                          },
                          __dangerouslyInsertFunctionComponents: {
                            children:{
                              functionBody: `let exposeProps={}`,
                              reactComponent:{
                                component:'p',
                                thisprops:{
                                  _children:['message']
                                }
                                // children:'test functional component',
                              },
                              options: {
                                name:'testHookFormError'
                              }
                            }
                          }
                        },
                      ]
                    },
                    {
                      component: 'div',
                      props: {
                        key:412,
                      },
                      children: [
                        {
                          component: 'label',
                          props: {
                            style: {
                              
                              display:'block'
                            }
                          },
                          children:'Password'
                        },
                        {
                          component: "input",
                          props: {
                            key:41,
                            type: "password",
                            name: "password",
                            placeholder: "password"
                          },
                          __dangerouslyEvalProps:{
                            ref:`(function(){
                              return this.reactHookForm.register({required:'required password'});
                            })`,
                          }
                        },
                        {
                          component: "ReactHookForm.ErrorMessage",
                          props: {
                            key:42,
                            name: "password"
                          },
                          thiscontext:{
                            errors:['reactHookForm','errors']
                          },
                          __dangerouslyInsertFunctionComponents: {
                            children:{
                              functionBody: `let exposeProps={}`,
                              reactComponent:{
                                component: 'p',
                                props:{key:4552},
                                thisprops:{
                                  _children:['message']
                                }
                              },
                              options: {
                                name:'testHookFormError'
                              }
                            }
                          }
                        },
                      ]
                    },
                    {
                      component: 'div',
                      props: {
                        key:512
                      },
                      children: [
                        {
                          component: "button",
                          props: {
                            key:5432,
                            type: "submit"
                          },
                          children: "Submit"
                        }
                      ]
                    }
                  ],
                }
              },
              __dangerouslyBindEvalProps: {
                onSubmit: function(values){
                  console.log({ values }, this);
                  this.viewx.Functions.loginUser(values);

                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                }
              }
            }
          ]
        },
        pageData: [
          {
            tagName: "title",
            attributes: {},
            innerHTML: "User Login"
          }
        ]
      },
      

      "/": {
        // '/:catchall*': {
        preRenderFunctions: [
          // 'func:viewx.Functions.passOne',
          // 'func:window.someWindowFunction',
          // 'func:viewx.Functions.passOne',
          // 'func:viewx.Functions.passTwo',
          // 'func:viewx.Functions.requireAuth',
          // 'func:viewx.Functions.passOne',
        ],
        pageData: [
          {
            tagName: "title",
            attributes: {},
            innerHTML: "Sample Simple App"
          }
        ],
        jsonx: {
          component: "Fragment",
          props: {
            key: "catchall"
          },
          children: [
            {
              component: "div",
              thiscontext: {
                _children: ["state", "name"]
              }
              // children: 'hello world!',
            },
            {
              component: "sayHello"
            },
            {
              component: "h2",
              thisstate: {
                _children: ["name"]
              }
            },
            {
              component: "div",
              props: {
                style: {
                  display: "flex"
                }
              },
              children: [
                {
                  component: "input",
                  props: {
                    style: {
                      padding: "5px"
                    }
                  },
                  thisstate: {
                    value: ["name"]
                  },
                  __dangerouslyBindEvalProps: {
                    onChange: `(function(e){
                      //console.log({e});
                      console.log('this',this)
                      //console.log('e.target.value',e.target.value)
                      this.props.updateState({name:e.target.value})
                      // this.setState({name:e.target.value})
                    })`
                  }
                },
                {
                  component: "Link",
                  props: {
                    to: "/modal/hello",
                    style: {
                      padding: "5px"
                    }
                  },
                  children: "Hello Modal"
                },
                {
                  component: "Link",
                  props: {
                    to: "/about",
                    style: {
                      padding: "5px"
                    }
                  },
                  children: "About Page"
                },
                {
                  component: "Link",
                  props: {
                    to: "/page/4",
                    style: {
                      padding: "5px"
                    }
                  },
                  children: "Page 4"
                },
                {
                  component: "button",
                  props: {
                    style: {
                      padding: "5px"
                    }
                  },
                  children: "change header",
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
                  }
                }
              ]
            }
          ]
        }
      }
    },
    modal: {
      "/modal/hello": {
        jsonx: {
          component: "ReactModal",
          props: {
            ariaHideApp: false
          },
          thisprops: {
            isOpen: ["ui", "isRouteLayer_modal_Matched"]
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
          children: [
            {
              component:'div',
              children: "SAY HELLO MODAL!!"
            }
          ]
        }
      }
    }
  }
};
