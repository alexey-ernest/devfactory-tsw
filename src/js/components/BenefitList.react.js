/**
 * Benefit list component.
 */

// CSS
import * as styles from '../../sass/modules/benefit-list.sass';

import React, {Component, PropTypes} from 'react';

import BenefitListItem from './BenefitListItem.react';

export default class BenefitList extends Component {

  static propTypes = {
    benefits: PropTypes.array.isRequired
  };

  render() {
    var benefits = this.props.benefits.map(function (benefit) {
      return (
        <BenefitListItem key={benefit.id} text={benefit.text} />
      );
    });

    return (
      <ul className="benefit-list">
        {benefits}
      </ul>
    );
  }

}
