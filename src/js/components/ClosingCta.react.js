/**
 * Closing Cta component.
 */

import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ClosingCta extends Component {

  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
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
  _onClick(/*object*/ event) {
    window.scrollTo(0, 150);
  }

}

ClosingCta.propTypes = {
  demo: PropTypes.object.isRequired
};
