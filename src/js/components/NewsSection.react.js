/**
 * News section component.
 */

// CSS
import * as styles from '../../sass/modules/news.sass';

import React, {Component, PropTypes} from 'react';
import NewsList from './NewsList.react';

export default class NewsSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="news">
        <div className="news__container">
          <h3>News from the Team</h3>
          <p>See how the service is continousely improving.</p>
          <NewsList news={this.props.data.news} />
        </div>
      </section>
    );
  }

}
