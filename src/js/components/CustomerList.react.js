/**
 * Customer list component.
 */

// CSS
import * as styles from '../../sass/modules/customer-list.sass';

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
      <ul className="customer-list">
        {customers}
      </ul>
    );
  }

}
