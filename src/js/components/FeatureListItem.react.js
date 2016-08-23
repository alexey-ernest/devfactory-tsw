/**
 * Feature list item component.
 */

import React, {Component, PropTypes} from 'react';

export default class FeatureListItem extends Component {

  static propTypes = {
    feature: PropTypes.object.isRequired
  }

  render() {
    var feature = this.props.feature;
    return (
      <li>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </li>
    );
  }

}
