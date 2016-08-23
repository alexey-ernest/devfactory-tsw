/**
 * News section component.
 */

import React, {Component, PropTypes} from 'react';
import NewsList from './NewsList.react';

export default class NewsSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="news">
        <h3>News from the Testing Service's Team</h3>
        <p>See how the service is continousely improving.</p>
        <NewsList news={this.props.data.news} />
      </section>
    );
  }

}
