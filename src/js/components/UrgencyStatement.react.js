/**
 * CTA Urgency statement component.
 */

var React = require('react');
var assign = require('object-assign');
var moment = require('moment');

var ReactPropTypes = React.PropTypes;

var READY_DAYS = 3;

var UrgencyStatement = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    var readyDate = moment().add(READY_DAYS, 'days');
    var thisOrNextWeek = +moment().format('E') + READY_DAYS > 7 ? 'next' : 'this';
    var readyDay = readyDate.format('dddd');

    return (
      <span>
        To have your quality tests running by <strong>{thisOrNextWeek} {readyDay}</strong>, start by requesting a quick demo today.
      </span>
    );
  }

});

module.exports = UrgencyStatement;
