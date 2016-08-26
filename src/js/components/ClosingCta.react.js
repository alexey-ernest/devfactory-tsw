/**
 * Closing Cta component.
 */
// CSS
import * as styles from '../../sass/modules/closing-cta.sass';

import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class ClosingCta extends Component {

  static propTypes = {
    demo: PropTypes.object.isRequired
  };

  render() {
    var isRequested = this.props.demo.isRequested;
    var isLoading = this.props.demo.isLoading;

    var demoButton = isRequested && !isLoading ?
      'Your request was sent. Thanks!' :
      'Request your free demo now';

    return (
      <div className="closing-cta">
        <FlatButton
          label={demoButton}
          primary={true}
          onClick={this._onClick}
          disabled={isRequested}
        />
      </div>
    );
  }

  /**
   * Click event handler.
   *
   * @param {object} event
   */
  _onClick = (event) => {
    document.getElementById('DemoFormName').focus();
  }

}
