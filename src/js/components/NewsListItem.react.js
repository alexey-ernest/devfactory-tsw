/**
 * News list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class NewsListItem extends Component {

  static propTypes = {
    news: PropTypes.object.isRequired
  }

  render() {
    var news = this.props.news;
    return (
      <li>
        <h5>{news.title}</h5>
        <p>{news.text}</p>
      </li>
    );
  }

}
