/**
 * Cta component.
 */

import React, {Component, PropTypes} from 'react';

import DemoForm from './DemoForm.react';
import UrgencyStatement from './UrgencyStatement.react';

export default class Cta extends Component {

  render() {
    return (
      <div className="cta">
        <DemoForm demo={this.props.data.demo} />
        <UrgencyStatement />
      </div>
    );
  }

}

Cta.propTypes = {
  data: PropTypes.object.isRequired
}
