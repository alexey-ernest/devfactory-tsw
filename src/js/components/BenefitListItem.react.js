/**
 * Benefit list item component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var BenefitListItem = React.createClass({

  propTypes: {
    text: ReactPropTypes.string.isRequired
  },

  render: function() {
    var text = this.props.text;
    return (
      <li>
        {text}
      </li>
    );
  }

});

module.exports = BenefitListItem;
