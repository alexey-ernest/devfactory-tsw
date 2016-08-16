/**
 * Statistics section component.
 */

var React = require('react');
var StatisticList = require('./StatisticList.react');

var ReactPropTypes = React.PropTypes;

var StatisticsSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="statistics">
        <StatisticList statistics={this.props.data.statistics} />
      </section>
    );
  }

});

module.exports = StatisticsSection;
