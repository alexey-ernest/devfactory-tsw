/**
 * Customer section component.
 */

var React = require('react');
var CustomerList = require('./CustomerList.react');

var ReactPropTypes = React.PropTypes;

var CustomerSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="customers">
        <h3>Some of the world's most respected companies trust DevFactory!</h3>
        <p>See who saved more than 50% on IT Services by leveraging DevFactory tools.</p>
        <CustomerList customers={this.props.data.customers} />
      </section>
    );
  }

});

module.exports = CustomerSection;
