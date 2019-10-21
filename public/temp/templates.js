var spreadPosts = {
  component: 'ReactBootstrap.Card',
  props: {
    style: { width: '18rem' }
  },
  thisprops: {
    key: [ '__item', 'id' ]
  },
  passprops: true,
  children: [
    {
      component: 'ReactBootstrap.Card.Header',
      thisprops: {
        _children: [ '__item', 'id' ]
      }
    },
    {
      component: 'ReactBootstrap.Card.Body',
      passprops: true,
      children: [
        {
          component: 'ReactBootstrap.Card.Title',
          thisprops: {
            _children: [ '__item', 'title' ]
          }
        },
        {
          component: 'ReactBootstrap.Card.Text',
          thisprops: {
            _children: [ '__item', 'body' ]
          }
        },
        {
          passprops: true,
          "component": "Link",
          
          // __dangerouslyEvalProps: {
          __dangerouslyEvalProps: {
            to: `(function({jsonx}){
                // console.log('__dangerouslyEvalProps this',this,{jsonx})
              return '/posts/'+jsonx.props.__item.id+'/comments';
            })`
          },
          children: [
            {

              component: 'ReactBootstrap.Button',
              props: {
                variant: "primary"
              },
              children: 'comments'

            }
          ]
        }
      ]
    },
  ],
};

window.placeholderTemplates = {
  "templates": {
    
    loading: {
      '/:catchall*': {
        jsonx: {
          component: 'div',
          children: 'loading...',
        }
      },
    },
    "header": {
			"/:catchall*": {
				"jsonx": {
					"component": "header",
          "children": [
            {
              "component": "ReactBootstrap.Navbar",
              props: {
                bg: 'dark',
                variant: 'dark',
                fixed: 'top',
                expand:'sm'
              },
                "children": [
                  {
                    component: 'ReactBootstrap.Navbar.Brand',
                    children: [
                      {

                        "component": "Link",
                        "props": {
                          "to": "/home"
                        },
                        children:'My Site'
                      }
                    ]
                  },
                  {
                    component: 'ReactBootstrap.Navbar.Toggle',
                    props: {
                      ariaControls:"basic-navbar-nav"
                    }
                  },
                  {
                    component: 'ReactBootstrap.Navbar.Collapse',
                    children: [
                      {
                        component: 'ReactBootstrap.ButtonToolbar',
                        children: [
                          {
                            "component": "ReactBootstrap.Button",
                            props: {
                              variant:'light'
                            },
                            "children": [
                              {
                                component: 'Fragment',
                                children:'Cart'
                              },
                              {
                                "component": "ReactBootstrap.Badge",
                                props: {
                                  variant:"secondary"
                                },
                                // thisprops: {
                                //   _children:['store','cartItems','length']
                                // }
                                thisstate: {
                                  _children:['cartItems','length']
                                }
                              }
                            ],
                            "__dangerouslyBindEvalProps": {
                              "onClick": "(function(){ console.log('Logout onClick this',this); this.viewx.Functions.logoutUser(/**/);   })"
                            },
                            "thisprops":{
                              "user":["user"]
                            },
                            
                          },
                          {
                            "component": "ReactBootstrap.Button",
                            "children": "Logout",
                            "__dangerouslyBindEvalProps": {
                    "onClick": "(function(){ console.log('Logout onClick this',this); this.viewx.Functions.logoutUser(/**/);   })"
                                  },
                            "thisprops":{
                              "user":["user"]
                            },
                            "comparisonprops": [{
                                "left": ["user","loggedIn"],
                                "operation":"==",
                                "right": true
                              }]
                          },
                          {
                            
                            "component": "ReactBootstrap.Button",
                            "children": "Login",
                            "__dangerouslyBindEvalProps": {
                              "onClick": "(function(){ console.log('Login onClick this',this); console.log('onClick arguments',arguments); this.props.history.push(this.viewx.settings.routes.login); })"
                            },
                            "thisprops":{
                              "user":["user"]
                            },
                            "comparisonprops": [{
                                "left": ["user","loggedIn"],
                                "operation":"==",
                                "right": false
                              }]
                          }
                        ]
                      },
                    ],
                },
              ]
            },
            {
              "component": "ReactBootstrap.Navbar",
              props: {
                bg: 'primary',
                variant: 'light',
                fixed: 'top',
                style: {
                  top:'56px'
                },
                expand: 'sm'
              },
              children: [
                {
                  "component": "Link",
                  "props": {
                    "to": "/posts"
                  },
                  children: [
                    {
                      component: 'ReactBootstrap.Button',
                      children:'Posts'
                    }
                  ]
                },
                {
                  "component": "Link",
                  "props": {
                    "to": "/albums"
                  },
                  children: [
                    {
                      component: 'ReactBootstrap.Button',
                      children:'Albums'
                    }
                  ]
                },
                {
                  component: 'ReactBootstrap.Form',
                  props: {
                    inline:true,
                  },
                  children: [
                    {
                      component: 'ReactBootstrap.Form.Control',
                      __dangerouslyBindEvalProps: {
                        onChange: `(function(e){
                          const update=(e)=>{
                            const updatedState = Object.assign({},this.state,{
                              searchUrl: e.target.value.length
                                ? "https://jsonplaceholder.typicode.com/posts/2/comments?_limit=96&name_like="+e.target.value
                                : ""
                            });
                            this.setState(updatedState);
                          }
                          debounce(update,200,true)(e);
                        })`,
                      }
                    }
                  ]
                }
              ]
            },
            {
              "component": "ReactBootstrap.Container",
              props: {
                style: {
                  marginTop:'10rem'
                }
              },
              children: [
                {
                  component: 'DynamicComponent',
                  props: {
                    jsonx: {
                      component: 'div',
                      children: [
                        {

                          component: 'ReactBootstrap.CardColumns',
                          resourceprops: {
                            __spread:['DynamicComponentData'],
                          },
                          __spreadComponent: spreadPosts,
                        }
                      ]
                    }
                  },
                  thisstate: {
                    fetchURL:['searchUrl']
                  }
                  /*
                  (props={}) {
                    const { useCache = true, cacheTimeout = 60 * 60 * 5, loadingJSONX= { component:'div', children:'...Loading', },
                    loadingErrorJSONX= { component:'div', children:[{component:'span',children:'Error: '},{ component:'span',  resourceprops:{_children:['error','message']}, }], }, cacheTimeoutFunction = () => { }, jsonx, transformFunction = data => data, fetchURL, fetchOptions, } = props;
                  */
                }
              ]
            }
          ]
				}
			}
		},
		"root": {
			"/home": {
				"jsonx": {
					"component": "div",
					"children": [{
							"component": "p",
							"children": "home page"
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
										"children": "about page"
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
						}
					]
				},
				"resources": {
					"posts": "https://jsonplaceholder.typicode.com/posts",
					"profile": {
						"fetchPath": "https://jsonplaceholder.typicode.com/users/1",
						"fetchOptions": {
							"headers": {
								"custom-header-one": "my header"
							}
						}
					}
				},
				"pageData": [{
						"tagName": "title",
						"attributes": {

						},
						"innerHTML": "My Home Page"
					},
					{
						"tagName": "meta",
						"attributes": {
							"name": "theme-color",
							"content": "#8b2d40"
						}
					}
				]
			},
			"/about": {
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
										"children": "about page"
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
						}
					]
				},
				"resources": {
					"album": "https://jsonplaceholder.typicode.com/albums/1",
					"photos": {
						"fetchPath": "https://jsonplaceholder.typicode.com/albums/1/photos"
					}
				},
				"preRenderFunctions": ["func:viewx.Functions.requireAuth"],
				"pageData": [{
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
						}
					}
				]
      },
      "/albums": {
				"jsonx": {
					"component": "ReactBootstrap.Container",
          "children": [
            {
							"component": "h1",
							"children": "Album page!"
            },
            {
              component: 'ReactBootstrap.CardColumns',
              resourceprops: {
                __spread:['albums'],
              },
              __spreadComponent: {
                component: 'ReactBootstrap.Card',
                props: {
                  style:{ width: '18rem' }
                },
                thisprops: {
                  key:['__item','id']
                },
                passprops:true,
                children: [
                  {
                    component: 'ReactBootstrap.Card.Header',
                    thisprops: {
                      _children:['__item','id']
                    }
                  },
                  {
                    component: 'ReactBootstrap.Card.Body',
                    passprops:true,
                    children: [
                      {
                        component: 'ReactBootstrap.Card.Title',
                        thisprops: {
                          _children:['__item','title']
                        }
                      },

                      {
                        component: 'ReactBootstrap.Image',
                        props: {
                          thumbnail:true,
                        },
                        thisprops: {
                          src:['__item','thumbnailUrl']
                        }
                      },
                      {
                        component: 'ReactBootstrap.Card.Text',
                        thisprops: {
                          _children:['__item','body']
                        }
                      },
                      
                      {
                        component: 'ReactBootstrap.Button',
                        // thisprops: {
                        //   __photoitem:['__item'],
                        // },
                        __dangerouslyBindEvalProps: {
                          onClick:`(function(__item){
                            const newState = Object.assign({},this.state,{
                              cartItems:[].concat(this.state.cartItems,[__item])
                            });
                            console.log('this',this,{newState});
                            this.setState(newState);
                            // this.props.dispatch({type:'setApplicationState',state:newState})
                          })`
                        },
                        children: 'Add to cart',
                      }
                    
                    ]
                  },
                ],
              }
            }
					]
				},
				"resources": {
					"albums": "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=12"
				},
				"pageData": [{
					"tagName": "title",
					"attributes": {
					},
					"innerHTML": "Albums"
				}]
			},
			"/posts": {
				"jsonx": {
					"component": "ReactBootstrap.Container",
          "children": [
            {
							"component": "h1",
							"children": "post page"
            },
            {
              component: 'ReactBootstrap.CardColumns',
              resourceprops: {
                __spread:['posts'],
              },
              __spreadComponent: spreadPosts,
            }
					]
				},
				"resources": {
					"posts": "https://jsonplaceholder.typicode.com/posts?_limit=10"
				},
				"pageData": [{
					"tagName": "title",
					"attributes": {
					},
					"innerHTML": "Posts"
				}]
			},
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
              __dangerouslyInsertFunctionComponents:{
                render: {
                  reactComponent: {
                    component: 'form',
                    thisprops: {
                      onSubmit:['handleSubmit']
                    },
                    children: [
                      {
                        component: 'Formik.Field',
                        props: {
                          type: 'text',
                          name: 'username',
                          placeholder:'username',
                        }
                      },
                      {
                        component: 'Formik.ErrorMessage',
                        props: {
                          name:'username'
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
                          type:'submit'
                        },
                        children:'Submit'
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
                  // else if (
                  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  // ) {
                  //   errors.email = 'Invalid email address';
                  // }
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
      // '/photo/:photoid': {
      //   jsonx: {
      //     component: 'div',
      //     children:'use bootstrap',
      //   },
      // },
      '/posts/:id/comments': {
				"resources": {
					"comments": "https://jsonplaceholder.typicode.com/posts/:id/comments"
				},
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
          children: [
            {
              "component": "ReactBootstrap.Container",
              children: [
                {
                  component: 'h2',
                  children:'Comments',
                  
                },
                {
                  component: 'div',
                  resourceprops: {
                    __spread:['comments'],
                  },
                  __spreadComponent: {
                    component: 'ReactBootstrap.Alert',
                    props: {
                      // style: { width: '18rem' }
                    },
                    passprops: true,
                    children: [
                      {
                        component: 'ReactBootstrap.Alert.Heading',
                        thisprops: {
                          _children: [ '__item', 'name' ]
                        }
                      },
                      {
                        component: 'p',
                        thisprops: {
                          _children: [ '__item', 'body' ]
                        }
                      },
                      {
                        component: 'hr',
                      },
                      {
                        component:'p',
                        thisprops: {
                          _children: [ '__item', 'email' ]
                        }
                      
                      }
                    ]
                  }
                }
              ]
            }
          ],

        }
      }
    }
	}
}
