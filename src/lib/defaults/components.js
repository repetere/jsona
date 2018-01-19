const footer = {
  render: {
    body: {
      component: 'Semantic.Segment',
      props: {
        inverted: true,
        vertical: true,
        style: { padding: '5em 0em' }
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
                            content:'About'
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
                              children:'Sitemap'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  }
}


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
  }
};