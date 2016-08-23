/**
 * Closing Cta component.
 */

import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ClosingCta extends Component {

  static propTypes = {
    demo: PropTypes.object.isRequired
  }

  render() {
    var isRequested = this.props.demo.isRequested;
    var demoButton = !isRequested ? 'Request your free demo now' : 'Your request was sent. Thanks!';
    return (
      <div>
      <RaisedButton label={demoButton} secondary={true} />
      <button disabled={isRequested} onClick={this._onClick}>{demoButton}</button>
      </div>
    );
  }

  /**
   * Click event handler.
   *
   * @param {object} event
   */
  _onClick = (event) => {
    window.scrollTo(0, 150);
  }

}
