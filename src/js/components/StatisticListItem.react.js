/**
 * Statistic list item component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var StatisticListItem = React.createClass({

  propTypes: {
    statistic: ReactPropTypes.object.isRequired
  },

  render: function() {
    var statistic = this.props.statistic;
    return (
      <li>
        <h4>{statistic.title}</h4>
        <p>{statistic.value}</p>
      </li>
    );
  }

});

module.exports = StatisticListItem;
