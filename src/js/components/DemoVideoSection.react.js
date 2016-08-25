/**
 * Demo video section component.
 */

// CSS
import * as styles from '../../sass/modules/demo-video.sass';

import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

export default class DemoVideoSection extends Component {

  render() {
    return (
      <section className="demo-video">
        Check out
        <FloatingActionButton className="play-button">
          <FontIcon className="material-icons">play_arrow</FontIcon>
        </FloatingActionButton>
        5 min video
      </section>
    );
  }

}
