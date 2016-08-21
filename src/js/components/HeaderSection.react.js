/**
 * Header section component.
 */

import React, {Component, PropTypes} from 'react';

import BenefitList from './BenefitList.react';
import Cta from './Cta.react';
import Screenshots from './Screenshots.react';

export default class HeaderSection extends Component {

  render() {
    return (
      <header className="header">
        <h1 className="ms-up-4">Instantly improve your product quality</h1>
        <p>Easily automate and continously improve your software quality checking by running smart functional test suites on daily basis.</p>
        <div className="benefits">
          <BenefitList benefits={this.props.data.benefits} />
        </div>
        <div className="cta">
          <Cta data={this.props.data} />
        </div>
        <div className="screenshots">
          <Screenshots />
        </div>
      </header>
    );
  }

}

HeaderSection.propTypes = {
  data: PropTypes.object.isRequired
}
