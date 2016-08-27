/**
 * Customer list item component.
 */

import React, {Component, PropTypes} from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

export default class CustomerListItem extends Component {

  static propTypes = {
    customer: PropTypes.object.isRequired,
    onVisible: PropTypes.func,
    visible: PropTypes.bool
  };

  render() {
    var customer = this.props.customer;
    return (
      <li
        className={classNames({
          'animated': this.props.visible
        })}
        style={{
          opacity: 0
        }}
        >
        <Waypoint
          onEnter={this._handleWaypointEnter}
        />
        <img src={customer.image} alt={customer.title} />
      </li>
    );
  }

  _handleWaypointEnter = () => {
    if (this.props.onVisible) {
      this.props.onVisible(this.props.customer);
    }
  }
}
