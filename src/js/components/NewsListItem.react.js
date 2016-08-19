/**
 * News list item component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var NewsListItem = React.createClass({

  propTypes: {
    news: ReactPropTypes.object.isRequired
  },

  render: function() {
    var news = this.props.news;
    return (
      <li>
        <h5>{news.title}</h5>
        <p>{news.text}</p>
      </li>
    );
  }

});

module.exports = NewsListItem;
