import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import * as Semantic from 'semantic-ui-react';
import * as RJX from 'rjx/src/main';

class Hello extends Component{
  render() {
    return <p>hello</p>
  }
}

class Hello2 extends Component{
  render() {
    return <p>hellddooo2</p>
  }
}

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default function getMainComponent(options = {},returnClass) {
  const { settings = { application: { props: {}, html: {}, }, } } = options;
  const rjxThisObject = Object.assign({}, options.rjx);
  rjxThisObject.componentLibraries = Object.assign({ Semantic }, rjxThisObject.componentLibraries);
  rjxThisObject.reactComponents = Object.assign({ Link, NavLink, }, rjxThisObject.reactComponents);
  class Main extends Component {
    // state = {}
    // rjxOptions = 
    
    constructor(props) {
      super(props);
      // console.log('this.renderRJX', this.renderRJX);
      // console.log('this.renderRJXComponent', this.renderRJXComponent);
      const rjxThisObject = Object.assign({}, options.rjx);

      this.reactComponents = Object.assign({ Link, NavLink, }, rjxThisObject.reactComponents);
      this.componentLibraries = Object.assign({ Semantic }, rjxThisObject.componentLibraries);

      this.renderRJX = RJX.getRenderedJSON.bind(this);
      this.renderRJXComponent = RJX._rjxComponents.getReactComponent.bind(this);
      this.loggedOutFooter = this.renderRJXComponent.call(this,options.components.footer.loggedOut);
      this.loggedInFooter = this.renderRJXComponent.call(this,options.components.footer.loggedIn);
      this.state = {
        user: props.store.user || {},
      };
    }

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })
    componentWillReceiveProps(nextProps) {
      console.debug({ nextProps });
      // this.handleComponentLifecycle();
    }
    componentDidMount() {
      if (settings.application.props.useWindowPropsDebugging) {
        window.__rajaxProps = this.props;
      }
      // setTimeout(() => {
      //   this.props.actions.reduxRouter.push('/company')
      // },2000)
    }
    render() {
      const { visible } = this.state;
      const rajaxFooter = this.state.user.loggedIn ? this.loggedInFooter : this.loggedOutFooter; 
      // console.log(this.renderRJX({ component: 'p', children: 'hello', props: {ok:true}}));
      return (
        <div className={settings.application.html.rajaxAppContainerClass}>
          { visible ? <FixedMenu /> : null }
  
          <Visibility
            onBottomPassed={this.showFixedMenu}
            onBottomVisible={this.hideFixedMenu}
            once={false}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item as='a' active>Home</Menu.Item>
                  <Menu.Item as='a'>Work</Menu.Item>
                  <Menu.Item as={Link} to='/company'>Company</Menu.Item>
                  <Menu.Item as={Link} to="/careers">Careers</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
  
              <Container text>
                
              {this.props.children}
  
                <Header
                  as='h1'
                  content={options.title || 'Imagine-a-Company'}
                  inverted
                  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                />
                <Header
                  as='h2'
                  content='Do whatever you want when you want to.'
                  inverted
                  style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Button primary size='huge'>
                  Get Started
                  <Icon name='right arrow' />
                </Button>
              </Container>
            </Segment>
          </Visibility>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Switch>
                    <Route path='/careers' component={Hello}/>
                    <Route path='/company' component={Hello2}/>
                  </Switch>  
                  <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    We can give your company superpowers to do things that they never thought possible. Let us delight
                    your customers and empower your needs... through pure data analytics.
                  </p>
                  <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    bordered
                    rounded
                    size='large'
                    src='/assets/images/wireframe/white-image.png'
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge'>Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
  
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                  <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                    <b>Nan</b> Chief Fun Officer Acme Toys
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
  
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
              <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
              <p style={{ fontSize: '1.33em' }}>
                Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                and worth your attention.
              </p>
              <Button as='a' size='large'>Read More</Button>
  
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
                <a href=''>Case Studies</a>
              </Divider>
  
              <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
                true.
                It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
              </p>
              <Button as='a' size='large'>I'm Still Quite Interested</Button>
            </Container>
          </Segment>
  
          
          {options.settings.application.ui.showFooter ? rajaxFooter(this.props) : null}
        </div>
      )
    }
  }
  return (returnClass) ? Main : <Main />;
}
