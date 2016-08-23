/**
 * Closing statement section component.
 */

import React, {Component, PropTypes} from 'react';
import ClosingCta from './ClosingCta.react';

export default class ClosingStatementSection extends Component {

  render() {
    return (
      <section className="closing-statement">
        <div className="closing-cta">
          <ClosingCta demo={this.props.data.demo} />
        </div>
      </section>
    );
  }

}

ClosingStatementSection.propTypes = {
  data: PropTypes.object.isRequired
};
