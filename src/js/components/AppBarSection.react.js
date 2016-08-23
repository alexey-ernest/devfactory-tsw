
/**
 * App bar section component.
 */

import React, {Component, PropTypes} from 'react';

export default class AppBarSection extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  render() {
    return (
      <section
        className="app-bar"
        style={{
          backgroundColor: this.context.muiTheme.palette.primary1Color
        }}>
        <div className="brand-image">Testing Service by DevFactory</div>
      </section>
    );
  }

}
