/**
 * Closing statement section component.
 */

// CSS
import * as styles from '../../sass/modules/closing-statement.sass';

import React, {Component, PropTypes} from 'react';
import ClosingCta from './ClosingCta.react';

export default class ClosingStatementSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <section className="closing-statement">
        <h3>Instantly improve your product quality by automation</h3>
        <ClosingCta demo={this.props.data.demo} />
      </section>
    );
  }

}
