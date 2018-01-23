import React, { Component, Fragment, } from 'react';
import * as Semantic from 'semantic-ui-react';
import { styles,  } from '../styles/helpers';

export class ContentLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    const contentLoaded = !true;//this.state.ui.application_content_loaded;
    return (
      <Semantic.Dimmer.Dimmable as={Semantic.Segment}
        basic={true}  
        style={Object.assign({}, styles.noPadding, this.props.settings.application.layout.overlay.style)} dimmed={true}>
        <Semantic.Dimmer active={contentLoaded}>
          {this.props.loaderContent}
        </Semantic.Dimmer>
        <Fragment>
          {this.props.header}
          {this.props.children}
          {this.props.footer}
        </Fragment>
        {
          // options.settings.application.ui.showFooter ? rajaxFooter(this.props) : null
        }
      </Semantic.Dimmer.Dimmable>
    );
  }
}