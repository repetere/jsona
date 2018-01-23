const footer = {
  render: {
    body: {
      component: 'Semantic.Segment',
      props: {
        inverted: true,
        vertical: true,
        style: { padding: '5em 0em', },
        className:'animated slideInUp Medium-Speed',
      },
      children: [
        {
          component: 'Semantic.Container',
          children: [
            {
              component: 'Semantic.Grid',
              props: {
                divided: true,
                inverted: true,
                stackable:true,
              },
              children: [
                {
                  component: 'Semantic.Grid.Row',
                  children: [
                    {
                      component: 'Semantic.Grid.Column',
                      props: {
                        width:3,
                      },
                      children: [
                        {
                          component: 'Semantic.Header',
                          props: {
                            inverted: true,
                            as: 'h4',
                            content:'About',
                          },
                        },
                        {
                          component: 'Semantic.List',
                          props: {
                            link: true,
                            inverted: true,
                          },
                          children: [
                            {
                              component: 'Semantic.List.Item',
                              props: {
                                as:'a',
                              },
                              children:'Sitemap',
                            },
                            {
                              component: 'Semantic.List.Item',
                              props: {
                                to:'/work',
                              },
                              __dangerouslyInsertReactComponents: {
                                as: 'Link',
                              },
                              children:'Works',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      component: 'Semantic.Grid.Column',
                      props: {
                        width:3,
                      },
                      children: [
                        {
                          component: 'Semantic.Header',
                          props: {
                            inverted: true,
                            as: 'h4',
                            content:'About',
                          },
                        },
                        {
                          component: 'Semantic.List',
                          props: {
                            link: true,
                            inverted: true,
                          },
                          children: [
                            {
                              component: 'Semantic.List.Item',
                              props: {
                                as:'a',
                              },
                              children:'Sitemap',
                            },
                            {
                              component: 'Semantic.List.Item',
                              props: {
                                to:'/work',
                              },
                              __dangerouslyInsertReactComponents: {
                                as: 'Link',
                              },
                              children:'Works',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      component: 'Semantic.Grid.Column',
                      props: {
                        width:7,
                      },
                      children: [
                        {
                          component: 'Semantic.Header',
                          props: {
                            inverted: true,
                            as: 'h4',
                            content:'About',
                          },
                        },
                        {
                          component: 'p',
                          props: {
                            
                          },
                          children: `© ${new Date().getFullYear()} All rights reserved.`,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const loading = {
  render: {
    body: {
      component: 'div',
      children: [
        {
          component: 'Semantic.IconGroup',
          children: [
            {
              component: 'Semantic.Icon',
              props: {
                size: 'huge',
                loading: true,
                name: 'refresh',
                inverted: true,
              },
            },
          ],
        },
        {
          component: 'p',
          children:'Loading',
        },
      ],
    },
  },
};

const nav = {
  render: {
    body: 
    {
      component: 'Semantic.Menu',
      props: {
        inverted: true,
        color:'black',
        // pointing: true,
        // secondary: true,
        size: 'large',
        fixed:'top',
      },
      children: [
        {
          component:'Semantic.Container',
          children: [
            {
              component: 'Semantic.Menu.Item',
              props: {
                to:'/',
              },
              __dangerouslyInsertReactComponents: {
                as: 'Link',
              },
              children:'Home',
            },
            {
              component: 'Semantic.Menu.Item',
              props: {
                to:'/about',
              },
              __dangerouslyInsertReactComponents: {
                as: 'Link',
              },
              children:'About',
            },
            {
              component: 'Semantic.Menu.Item',
              props: {
                position:'right',
              },
              children: [
                {
                  component: 'Semantic.Button',
                  props: {
                    to: '/login',
                    // inverted:true,
                    primary:true,
                  },
                  __dangerouslyInsertReactComponents: {
                    as: 'Link',
                  },
                  children:'Log In',
                },
              ],
            },
          ],
        }  
      ]
    },
  },
};

export const components = {
  loading,
  nav: {
    loggedIn: nav,
    loggedOut: nav,
  },
  footer: {
    loggedIn: footer,
    loggedOut: footer,
  },
};