/**
 * News list item component.
 */

import React, {Component, PropTypes} from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

export default class NewsListItem extends Component {

  static propTypes = {
    news: PropTypes.object.isRequired
  };

  state = {
    visible: false
  };

  render() {
    let news = this.props.news;

    // enable raw html
    let textHtml = { __html: news.text };
    return (
      <li
        className={classNames({
          'animated': this.state.visible
        })}
        style={{
          opacity: 0
        }}
        >
        <Waypoint
          onEnter={this._handleWaypointEnter}
        />
        <h5>{news.title}</h5>
        <p dangerouslySetInnerHTML={textHtml}></p>
      </li>
    );
  }

  _handleWaypointEnter = () => {
    this.setState({visible: true});
  }

}
