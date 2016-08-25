/**
 * News list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class NewsListItem extends Component {

  static propTypes = {
    news: PropTypes.object.isRequired
  }

  render() {
    let news = this.props.news;

    // enable raw html
    let textHtml = { __html: news.text };
    return (
      <li>
        <h5>{news.title}</h5>
        <p dangerouslySetInnerHTML={textHtml}></p>
      </li>
    );
  }

}
