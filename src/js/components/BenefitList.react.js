/**
 * Benefit list component.
 */

var React = require('react');
var BenefitListItem = require('./BenefitListItem.react');

var ReactPropTypes = React.PropTypes;

var BenefitList = React.createClass({

  propTypes: {
    benefits: ReactPropTypes.array.isRequired
  },

  render: function() {
    var benefits = this.props.benefits.map(function (benefit) {
      return (
        <BenefitListItem key={benefit.id} text={benefit.text} />
      );
    });

    return (
      <ul>
        {benefits}
      </ul>
    );
  },

});

module.exports = BenefitList;
