/**
 * Benefit list item component.
 */

import React, {Component, PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  color: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  verticalAlign: 'bottom'
};

export default class BenefitListItem extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    var text = this.props.text;
    return (
      <li>
        <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
        <span>{text}</span>
      </li>
    );
  }

}
