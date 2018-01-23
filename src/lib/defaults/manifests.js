export const manifests = {
  containers: {
    '/': {
      layout: {
        component: 'Fragment',
        children: [
          {
            component: 'Semantic.Segment',
            props: {
              style: { padding: '8em 0em', },
              vertical: true,
            },
            children: [
              {
                component: 'Semantic.Grid',
                props: {
                  container: true,
                  stackable: true,
                  verticalAlign:'middle',
                },
                children: [
                  {
                    component: 'Semantic.Grid.Row',
                    children: [
                      {
                        component: 'Semantic.Grid.Column',
                        props: {
                          width:8,
                        },
                        children: [
                          {
                            component: 'Semantic.Header',
                            props: {
                              as:'h3',
                            },
                            children:'We Help Companies and Companions',
                          },
                          {
                            component: 'p',
                            children:'We can give your company superpowers to do things that they never thought possible. Let us delight                             your customers and empower your needs... through pure data analytics.'
                          },
                          {
                            component: 'Semantic.Header',
                            props: {
                              as:'h3',
                            },
                            children:'We Make Bananas That Can Dance',
                          },
                          {
                            component: 'p',
                            children:'Yes that\'s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.'
                          },
                        ],
                      },
                      {
                        component: 'Semantic.Grid.Column',
                        props: {
                          floated: 'right',
                          width: 6,
                        },
                        children: [
                          {
                            component: 'Semantic.Image',
                            props: {
                              bordered: true,
                              rounded: true,
                              size: 'large',
                              src:'/favicon.png',
                            }
                          }
                        ]
                      }
                    ],
                  },
                  {
                    component: 'Semantic.Grid.Row',
                    children: [
                      {
                        component: 'Semantic.Grid.Column',
                        props: {
                          textAlign:'center',
                        },
                        children: [
                          {
                            component: 'Semantic.Button',
                            props: {
                              size:'huge',
                            },
                            children:'Check Them Out',
                          }
                        ]
                      }
                    ]
                  }
                ],
              },
            ],
          },
        ],
      },
      resources: {},
      pageData: {},
      callbacks:{},
    },
  },
};

/*
<Segment style={{ padding: '0em', }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', }}>
                  <Header as="h3" style={{ fontSize: '2em', }}>"What a Company"</Header>
                  <p style={{ fontSize: '1.33em', }}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', }}>
                  <Header as="h3" style={{ fontSize: '2em', }}>"I shouldn't have gone with their competitor."</Header>
                  <p style={{ fontSize: '1.33em', }}>
                    <Image avatar src="/assets/images/avatar/large/nan.jpg" />
                    <b>Nan</b> Chief Fun Officer Acme Toys
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '8em 0em', }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: '2em', }}>Breaking The Grid, Grabs Your Attention</Header>
              <p style={{ fontSize: '1.33em', }}>
                Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                and worth your attention.
              </p>
              <Button as="a" size="large">Read More</Button>

              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase', }}
              >
                <a href="">Case Studies</a>
              </Divider>

              <Header as="h3" style={{ fontSize: '2em', }}>Did We Tell You About Our Bananas?</Header>
              <p style={{ fontSize: '1.33em', }}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
                true.
                It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
              </p>
              <Button as="a" size="large">I'm Still Quite Interested</Button>
            </Container>
          </Segment>
*/