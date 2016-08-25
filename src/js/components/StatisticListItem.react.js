/**
 * Statistic list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class StatisticListItem extends Component {

  static propTypes = {
    statistic: PropTypes.object.isRequired
  }

  render() {
    var statistic = this.props.statistic;
    return (
      <li>
        <h4>{statistic.title}: <strong>{statistic.value}</strong></h4>
      </li>
    );
  }

}
