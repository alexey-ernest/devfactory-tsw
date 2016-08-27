/**
 * Header section component.
 */

// CSS
import * as styles from '../../sass/modules/header.sass';

import React, {Component, PropTypes} from 'react';

import BenefitList from './BenefitList.react';
import Cta from './Cta.react';
import Screenshots from './Screenshots.react';

export default class HeaderSection extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  render() {
    return (
      <header
        className="header"
        style={{
          backgroundColor: this.context.muiTheme.palette.primary1Color,
          color: this.context.muiTheme.palette.alternateTextColor
        }}>
        <div className="header__container">
          <h1 className="ms-up-4">Instantly improve your product quality</h1>
          <h2>Easily automate and continously improve your software quality by running smart functional test suites on daily basis.</h2>
          <div className="benefits">
            <BenefitList benefits={this.props.data.benefits} />
          </div>
          <div className="cta">
            <Cta data={this.props.data} />
          </div>
        </div>
        <div className="screenshots">
          <Screenshots />
        </div>
      </header>
    );
  }

}
