/**
 * Benefit list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class BenefitListItem extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    var text = this.props.text;
    return (
      <li>
        {text}
      </li>
    );
  }

}
