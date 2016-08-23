/**
 * Statistics section component.
 */

import React, {Component, PropTypes} from 'react';
import StatisticList from './StatisticList.react';

export default class StatisticsSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="statistics">
        <StatisticList statistics={this.props.data.statistics} />
      </section>
    );
  }

}
