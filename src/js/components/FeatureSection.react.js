/**
 * Feature section component.
 */

import React, {Component, PropTypes} from 'react';
import FeatureList from './FeatureList.react';

export default class FeatureSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="features">
        <FeatureList features={this.props.data.features} />
      </section>
    );
  }

}
