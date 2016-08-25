/**
 * News list component.
 */

// CSS
import * as styles from '../../sass/modules/news-list.sass';

import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import NewsListItem from './NewsListItem.react';

export default class NewsList extends Component {

  static propTypes = {
    news: PropTypes.array.isRequired
  }

  render() {
    var news = this.props.news;

    var jsx;
    if (news.length > 0) {
      let newsJsx = news.map(function (news) {
        return (
          <NewsListItem key={news.id} news={news} />
        );
      });

      jsx = <ul className="news-list">{newsJsx}</ul>;
    } else {
      jsx = <CircularProgress size={1.5} />;
    }

    return jsx;
  }

}
