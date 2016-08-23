/**
 * CTA Urgency statement component.
 */

import React, {Component, PropTypes} from 'react';
import moment from 'moment';

var READY_DAYS = 3;

export default class UrgencyStatement extends Component {

  render() {
    var readyDate = moment().add(READY_DAYS, 'days');
    var thisOrNextWeek = +moment().format('E') + READY_DAYS > 7 ? 'next' : 'this';
    var readyDay = readyDate.format('dddd');

    return (
      <span>
        To have your quality tests running by <strong>{thisOrNextWeek} {readyDay}</strong>, start by requesting a quick demo today.
      </span>
    );
  }

}
