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


export const components = {
  nav: {
    loggedIn: {
    
    },
    loggedOut: {
      
    },
  },
  footer: {
    loggedIn: footer,
    loggedOut: footer,
  },
};