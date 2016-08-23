/**
 * Customer list component.
 */

import React, {Component, PropTypes} from 'react';
import CustomerListItem from './CustomerListItem.react';

export default class CustomerList extends Component {

  static propTypes = {
    customers: PropTypes.array.isRequired
  }

  render() {
    var customers = this.props.customers.map(function (customer) {
      return (
        <CustomerListItem key={customer.id} customer={customer} />
      );
    });

    return (
      <ul>
        {customers}
      </ul>
    );
  }

}
