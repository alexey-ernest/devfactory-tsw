/**
 * Screenshots component.
 */

var React = require('react');

var Screenshots = React.createClass({

  render: function() {
    return (
      <div className="screenshots-wrapper">
        <img src="./images/screen3.png" className="screen-3" />
        <img src="./images/screen2.png" className="screen-2" />
        <img src="./images/screen1.png" className="screen-1" />
      </div>
    );
  }

});

module.exports = Screenshots;
