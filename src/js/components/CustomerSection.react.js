/**
 * Customer section component.
 */

// CSS
import * as styles from '../../sass/modules/customers.sass';

import React, {Component, PropTypes} from 'react';
import CustomerList from './CustomerList.react';

export default class CustomerSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <section className="customers">
        <div className="customer__container">
          <h3>Some of the world's most respected companies trust DevFactory!</h3>
          <p>See who saved more than 50% on IT Services by leveraging DevFactory tools.</p>
          <CustomerList customers={this.props.data.customers} />
        </div>
      </section>
    );
  }

}
