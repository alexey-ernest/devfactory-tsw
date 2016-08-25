/**
 * Feature list component.
 */

// CSS
import * as styles from '../../sass/modules/feature-list.sass';

import React, {Component, PropTypes} from 'react';
import FeatureListItem from './FeatureListItem.react';

export default class FeatureList extends Component {

  static propTypes = {
    features: PropTypes.array.isRequired
  }

  render() {
    var features = this.props.features.map(function (feature) {
      return (
        <FeatureListItem key={feature.id} feature={feature} />
      );
    });

    return (
      <ul className="feature-list">
        {features}
      </ul>
    );
  }

}
