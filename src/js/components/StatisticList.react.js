/**
 * Statistic list component.
 */

var React = require('react');
var StatisticListItem = require('./StatisticListItem.react');

var ReactPropTypes = React.PropTypes;

var StatisticList = React.createClass({

  propTypes: {
    statistics: ReactPropTypes.array.isRequired
  },

  render: function() {
    var statistics = this.props.statistics.map(function (stat) {
      return (
        <StatisticListItem key={stat.id} statistic={stat} />
      );
    });

    return (
      <ul>
        {statistics}
      </ul>
    );
  },

});

module.exports = StatisticList;
