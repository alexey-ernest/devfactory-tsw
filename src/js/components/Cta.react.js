/**
 * Cta component.
 */

var React = require('react');
var assign = require('object-assign');
var DemoForm = require('./DemoForm.react');
var UrgencyStatement = require('./UrgencyStatement.react');

var ReactPropTypes = React.PropTypes;

var Cta = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="cta">
        <DemoForm demo={this.props.data.demo} />
        <UrgencyStatement />
      </div>
    );
  }

});

module.exports = Cta;
