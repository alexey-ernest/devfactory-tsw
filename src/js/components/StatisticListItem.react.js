/**
 * Statistic list item component.
 */

import React, {Component, PropTypes} from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

export default class StatisticListItem extends Component {

  static propTypes = {
    statistic: PropTypes.object.isRequired
  };

  state = {
    visible: false
  };

  render() {
    var statistic = this.props.statistic;
    return (
      <li
        className={classNames({
          'animated': this.state.visible
        })}
        style={{
          opacity: 0
        }}
        >
        <Waypoint
          onEnter={this._handleWaypointEnter}
        />
        <h4>{statistic.title}: <strong>{statistic.value}</strong></h4>
      </li>
    );
  }

  _handleWaypointEnter = () => {
    this.setState({visible: true});
  }
}
