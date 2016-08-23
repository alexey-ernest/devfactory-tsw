/**
 * Customer list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class CustomerListItem extends Component {

  static propTypes = {
    customer: PropTypes.object.isRequired
  }

  render() {
    var customer = this.props.customer;
    return (
      <li>
        <img src={customer.image} alt={customer.title} />
      </li>
    );
  }

}
