
/**
 * App bar section component.
 */

// CSS
import * as styles from '../../sass/modules/appbar.sass';

import React, {Component, PropTypes} from 'react';

export default class AppBarSection extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  render() {
    return (
      <section
        className="app-bar"
        style={{
          backgroundColor: this.context.muiTheme.palette.primary1Color
        }}>
        <div className="app-bar__container">
          <a href="http://ts-portal.devfactory.com/" className="brand-image">Testing Service by DevFactory</a>
        </div>
      </section>
    );
  }

}
