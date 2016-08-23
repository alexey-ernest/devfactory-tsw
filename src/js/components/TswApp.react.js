/**
 * Tsw App main component.
 */

import React, {Component, PropTypes} from 'react';

import {
  BenefitStore,
  DemoStore,
  FeatureStore,
  StatisticsStore,
  CustomerStore,
  NewsStore
} from '../stores';

import AppBarSection from './AppBarSection.react';
import HeaderSection from './HeaderSection.react';
import FeatureSection from './FeatureSection.react';
import DemoVideoSection from './DemoVideoSection.react';
import StatisticsSection from './StatisticsSection.react';
import CustomerSection from './CustomerSection.react';
import NewsSection from './NewsSection.react';
import ClosingStatementSection from './ClosingStatementSection.react';
import FooterSection from './FooterSection.react';


const getStateFromStores = () => {
  return {
    benefits: BenefitStore.getAll(),
    demo: DemoStore.get(),
    features: FeatureStore.getAll(),
    statistics: StatisticsStore.getAll(),
    customers: CustomerStore.getAll(),
    news: NewsStore.getAll(),
  };
};

export default class TswApp extends Component {

  state = getStateFromStores()

  componentDidMount() {
    DemoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    DemoStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="tswapp">
        <AppBarSection />
        <HeaderSection data={this.state} />
        <FeatureSection data={this.state} />
        <DemoVideoSection />
        <StatisticsSection data={this.state} />
        <CustomerSection data={this.state} />
        <NewsSection data={this.state} />
        <ClosingStatementSection data={this.state} />
        <FooterSection />
      </div>
    );
  }

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange = () => {
    this.setState(getStateFromStores());
  }

};
