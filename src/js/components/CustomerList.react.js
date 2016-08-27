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
  };

  state = {
    visibleItems: {},
    lastIdx: 0
  };

  render() {
    var customers = this.props.customers.map((customer) => {
      return (
        <CustomerListItem
          key={customer.id}
          customer={customer}
          visible={!!this.state.visibleItems[customer.id]}
          onVisible={this._onVisible} />
      );
    });

    return (
      <ul className="customer-list">
        {customers}
      </ul>
    );
  }

  _onVisible = (customer) => {
    var idx = this.props.customers.indexOf(customer);
    var delay = (idx - this.state.lastIdx) * 100;

    setTimeout(() => {
      this.state.visibleItems[customer.id] = true;
      this.forceUpdate();
      this.state.lastIdx = idx;
    }, delay);
  }

}
