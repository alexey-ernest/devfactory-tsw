/**
 * Statistic list component.
 */

import React, {Component, PropTypes} from 'react';
import StatisticListItem from './StatisticListItem.react';

export default class StatisticList extends Component {

  static propTypes = {
    statistics: PropTypes.array.isRequired
  }

  render() {
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
  }

}
