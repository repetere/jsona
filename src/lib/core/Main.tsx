// eslint-disable-next-line
import React, { useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { findMatchingRoutePath } from "test-matching-route";
// @ts-ignore
import * as JSONX from "jsonx/src/main";
// @ts-ignore
import Promisie from "promisie";

export default function getMainComponent(options = {}): FunctionComponent {
  // @ts-ignore
  const { dispatch, useGlobalState } = options;
  // @ts-ignore
  const dispatcher = action => dispatch(action);
  // @ts-ignore
  function Main(props) {
    const [templates] = useGlobalState("templates");
    const [views] = useGlobalState("views");
    const { pathname } = props.location;
    const getReactElement = JSONX.getReactElement.bind({
      props: Object.assign({ dispatch }, props),
      debug: true,
      componentLibraries: {},
      reactComponents: {
        Link
      }
    });
    // let body = null;

    let body = getReactElement(views.layout ? views.layout.viewx : null);
    useEffect(() => {
      async function loadRoute() {
        const template = findMatchingRoutePath(templates.layout, pathname, {
          return_matching_keys: true
        });
        if (template) {
          dispatcher({
            type: "setView",
            view: { layout: templates.layout[template.route] }
          });
        }
        console.log({ pathname, templates, template });
      }
      loadRoute();
      //   // return function cleanup(){}
    }, [pathname, templates]);
    return (
      <div>
        <h1 key="a">main app</h1>

        {body}
        <ul key="c">
          <li key={1}>
            <Link to="/some/path">Path1 </Link>
          </li>
          <li key={2}>
            <Link to="/two/again">Two </Link>
          </li>
          <li key={3}>
            <Link to="/home">home </Link>
          </li>
          <li key={4}>
            <Link to="/about">about </Link>
          </li>
          <li key={5}>
            <Link to="/page/3">page 3 </Link>
          </li>
        </ul>
      </div>
    );
  }
  return Main;
}

/**
 * // // import { Route, Switch, } from 'react-router';
// import * as Semantic from 'semantic-ui-react';
// import * as RJX from 'rjx/dist/rjx.esm';
// // eslint-disable-next-line
// import { ContentLoadingScreen, } from '../components/ContentLoadingScreen';
// import { utils, } from '../util';
// import { manifests, } from '../defaults/manifests';
// // const RJX = require('rjx');

 export default functoin getMainComponent(options={},returnClass){
 
  // const { settings = { application: { props: {}, html: {}, }, }, } = options;
  // const rjxThisObject = Object.assign({}, options.rjx);
  // rjxThisObject.componentLibraries = Object.assign({ Semantic, }, rjxThisObject.componentLibraries);
  // rjxThisObject.reactComponents = Object.assign({ Link, NavLink, }, rjxThisObject.reactComponents);
  /*
  class Main extends Component {
    // state = {}
    // rjxOptions = 
    constructor(props) {
      super(props);
      // // console.log('this.renderRJX', this.renderRJX);
      // // console.log('this.renderRJXComponent', this.renderRJXComponent);
      // const rjxThisObject = Object.assign({}, options.rjx);

      // this.reactComponents = Object.assign({ Link, NavLink, Fragment, }, rjxThisObject.reactComponents);
      // this.componentLibraries = Object.assign({ Semantic, }, rjxThisObject.componentLibraries);

      // this.renderRJX = RJX.getRenderedJSON.bind(this);
      // this.renderRJXComponent = RJX._rjxComponents.getReactComponent.bind(this);

      // //nav
      // this.loggedOutNav = this.renderRJXComponent.call(this, options.components.nav.loggedOut);
      // this.loggedInNav = this.renderRJXComponent.call(this, options.components.nav.loggedIn);
      // //footer
      // this.loggedOutFooter = this.renderRJXComponent.call(this, options.components.footer.loggedOut);
      // this.loggedInFooter = this.renderRJXComponent.call(this, options.components.footer.loggedIn);
      // //loader
      // this.loaderContent = this.renderRJXComponent.call(this, options.components.loading);
      // //body
      // this.body = this.renderRJX(manifests.containers[ '/' ].layout);

      // this.state = props;
    }

    componentWillReceiveProps(nextProps) {
      // this.setState(nextProps);
      // const pathname = utils.props.getPathname.call(this);
      // utils.html.setBodyPathnameId({ settings: options.settings, pathname, });
      // // this.handleComponentLifecycle();
    }
    componentDidMount() {
      // const pathname = utils.props.getPathname.call(this);
      // utils.html.setBodyPathnameId({ settings: options.settings, pathname, });
      // if (settings.application.props.useWindowPropsDebugging) {
      //   window.__rajaxProps = this.props;
      // }
      
      // setTimeout(() => {
      //   this.props.actions.reduxRouter.push('/company')
      // },2000)
      /**
       * <Switch>
          <Route path="/careers" component={Hello}/>
          <Route path="/company" component={Hello2}/>
        </Switch>  
       * /
    }
    render() {
      // const rajaxNav = this.state.store.user.loggedIn ? this.loggedInNav : this.loggedOutNav; 
      // const rajaxFooter = this.state.store.user.loggedIn ? this.loggedInFooter : this.loggedOutFooter; 
      // const body = this.body;
      // return (
      //   <div className={settings.application.html.rajaxAppContainerClass}>
      //     {settings.application.ui.useLoadingScreen
      //       ? (<ContentLoadingScreen
      //         {...options}
      //         {...this.state}
      //         renderRJX={this.renderRJX}
      //         renderRJXComponent={this.renderRJXComponent}
      //         header={rajaxNav(this.props)}
      //         footer={rajaxFooter(this.props)}
      //         loaderContent={this.loaderContent(this.props)}
      //       >
      //         {body}
      //       </ContentLoadingScreen>)
      //       : (<Fragment>
      //         {rajaxNav(this.props)}  
      //         {body}
      //         {options.settings.application.ui.showFooter ? rajaxFooter(this.props) : null}
      //       </Fragment>)}
      //   </div>
      // );
      return (<div>
        <h1>main app</h1>
        <Link to="/some/path">Path1</Link>
        <Link to="/two/again">Two</Link>
        </div>)
    }
  }
 
 */
