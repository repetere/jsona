// eslint-disable-next-line
import React, { Component, Fragment, } from 'react';
import { NavLink, Link, } from 'react-router-dom';
// import { Route, Switch, } from 'react-router';
import * as Semantic from 'semantic-ui-react';
import * as RJX from 'rjx/src/main';
// eslint-disable-next-line
import { ContentLoadingScreen, } from '../components/ContentLoadingScreen';
import { utils, } from '../util';
import { manifests, } from '../defaults/manifests';

export default function getMainComponent(options = {}, returnClass) {
  const { settings = { application: { props: {}, html: {}, }, }, } = options;
  const rjxThisObject = Object.assign({}, options.rjx);
  rjxThisObject.componentLibraries = Object.assign({ Semantic, }, rjxThisObject.componentLibraries);
  rjxThisObject.reactComponents = Object.assign({ Link, NavLink, }, rjxThisObject.reactComponents);
  class Main extends Component {
    // state = {}
    // rjxOptions = 
    constructor(props) {
      super(props);
      // console.log('this.renderRJX', this.renderRJX);
      // console.log('this.renderRJXComponent', this.renderRJXComponent);
      const rjxThisObject = Object.assign({}, options.rjx);

      this.reactComponents = Object.assign({ Link, NavLink, Fragment, }, rjxThisObject.reactComponents);
      this.componentLibraries = Object.assign({ Semantic, }, rjxThisObject.componentLibraries);

      this.renderRJX = RJX.getRenderedJSON.bind(this);
      this.renderRJXComponent = RJX._rjxComponents.getReactComponent.bind(this);

      //nav
      this.loggedOutNav = this.renderRJXComponent.call(this, options.components.nav.loggedOut);
      this.loggedInNav = this.renderRJXComponent.call(this, options.components.nav.loggedIn);
      //footer
      this.loggedOutFooter = this.renderRJXComponent.call(this, options.components.footer.loggedOut);
      this.loggedInFooter = this.renderRJXComponent.call(this, options.components.footer.loggedIn);
      //loader
      this.loaderContent = this.renderRJXComponent.call(this, options.components.loading);
      //body
      this.body = this.renderRJX(manifests.containers[ '/' ].layout);

      this.state = props;
    }

    componentWillReceiveProps(nextProps) {
      this.setState(nextProps);
      const pathname = utils.props.getPathname.call(this);
      utils.html.setBodyPathnameId({ settings: options.settings, pathname, });
      // this.handleComponentLifecycle();
    }
    componentDidMount() {
      const pathname = utils.props.getPathname.call(this);
      utils.html.setBodyPathnameId({ settings: options.settings, pathname, });
      if (settings.application.props.useWindowPropsDebugging) {
        window.__rajaxProps = this.props;
      }
      
      // setTimeout(() => {
      //   this.props.actions.reduxRouter.push('/company')
      // },2000)
      /**
       * <Switch>
          <Route path="/careers" component={Hello}/>
          <Route path="/company" component={Hello2}/>
        </Switch>  
       */
    }
    render() {
      const rajaxNav = this.state.store.user.loggedIn ? this.loggedInNav : this.loggedOutNav; 
      const rajaxFooter = this.state.store.user.loggedIn ? this.loggedInFooter : this.loggedOutFooter; 
      const body = this.body;
      return (
        <div className={settings.application.html.rajaxAppContainerClass}>
          {settings.application.ui.useLoadingScreen
            ? (<ContentLoadingScreen
              {...options}
              {...this.state}
              renderRJX={this.renderRJX}
              renderRJXComponent={this.renderRJXComponent}
              header={rajaxNav(this.props)}
              footer={rajaxFooter(this.props)}
              loaderContent={this.loaderContent(this.props)}
            >
              {body}
            </ContentLoadingScreen>)
            : (<Fragment>
              {rajaxNav(this.props)}  
              {body}
              {options.settings.application.ui.showFooter ? rajaxFooter(this.props) : null}
            </Fragment>)}
        </div>
      );
    }
  }
  return (returnClass) ? Main : <Main />;
}
