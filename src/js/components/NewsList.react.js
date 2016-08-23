/**
 * News list component.
 */

import React, {Component, PropTypes} from 'react';
import NewsListItem from './NewsListItem.react';

export default class NewsList extends Component {

  static propTypes = {
    news: PropTypes.array.isRequired
  }

  render() {
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
  }

}
