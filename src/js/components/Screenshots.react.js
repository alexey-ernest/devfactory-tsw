/**
 * Screenshots component.
 */

// CSS
import * as styles from '../../sass/modules/screenshots.sass';

import React, {Component} from 'react';

export default class Screenshots extends Component {

  render() {
    return (
      <div className="screenshots-container">
        <img src="./images/screen3.png" className="screen-3" />
        <img src="./images/screen2.png" className="screen-2" />
        <img src="./images/screen1.png" className="screen-1" />
      </div>
    );
  }

}
