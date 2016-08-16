/**
 * Customer list item component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var CustomerListItem = React.createClass({

  propTypes: {
    customer: ReactPropTypes.object.isRequired
  },

  render: function() {
    var customer = this.props.customer;
    return (
      <li>
        <img src={customer.image} alt={customer.title} />
      </li>
    );
  }

});

module.exports = CustomerListItem;
