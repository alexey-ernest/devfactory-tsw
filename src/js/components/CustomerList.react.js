/**
 * Customer list component.
 */

var React = require('react');
var CustomerListItem = require('./CustomerListItem.react');

var ReactPropTypes = React.PropTypes;

var CustomerList = React.createClass({

  propTypes: {
    customers: ReactPropTypes.array.isRequired
  },

  render: function() {
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
  },

});

module.exports = CustomerList;
