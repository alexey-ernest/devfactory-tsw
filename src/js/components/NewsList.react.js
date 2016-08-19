/**
 * News list component.
 */

var React = require('react');
var NewsListItem = require('./NewsListItem.react');

var ReactPropTypes = React.PropTypes;

var NewsList = React.createClass({

  propTypes: {
    news: ReactPropTypes.array.isRequired
  },

  render: function() {
    var news = this.props.news.map(function (news) {
      return (
        <NewsListItem key={news.id} news={news} />
      );
    });

    return (
      <ul>
        {news}
      </ul>
    );
  },

});

module.exports = NewsList;
