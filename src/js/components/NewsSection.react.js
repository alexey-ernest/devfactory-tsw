/**
 * News section component.
 */

var React = require('react');
var NewsList = require('./NewsList.react');

var ReactPropTypes = React.PropTypes;

var NewsSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="news">
        <h3>News from the Testing Service's Team</h3>
        <p>See how the service is continousely improving.</p>
        <NewsList news={this.props.data.news} />
      </section>
    );
  }

});

module.exports = NewsSection;
