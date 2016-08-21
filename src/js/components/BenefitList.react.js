/**
 * Benefit list component.
 */

import React, {Component, PropTypes} from 'react';

import BenefitListItem from './BenefitListItem.react';

export default class BenefitList extends Component {

  render() {
    var benefits = this.props.benefits.map(function (benefit) {
      return (
        <BenefitListItem key={benefit.id} text={benefit.text} />
      );
    });

    return (
      <ul>
        {benefits}
      </ul>
    );
  }

}

BenefitList.propTypes = {
  benefits: PropTypes.array.isRequired
}
