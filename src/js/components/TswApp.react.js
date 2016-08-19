/**
 * Tsw App main component.
 */

var React = require('react');

var BenefitStore = require('../stores/BenefitStore');
var DemoStore = require('../stores/DemoStore');
var FeatureStore = require('../stores/FeatureStore');
var StatisticsStore = require('../stores/StatisticsStore');
var CustomerStore = require('../stores/CustomerStore');
var NewsStore = require('../stores/NewsStore');

var HeaderSection = require('./HeaderSection.react');
var FeatureSection = require('./FeatureSection.react');
var DemoVideoSection = require('./DemoVideoSection.react');
var StatisticsSection = require('./StatisticsSection.react');
var CustomerSection = require('./CustomerSection.react');
var NewsSection = require('./NewsSection.react');

function getStateFromStores() {
  return {
    benefits: BenefitStore.getAll(),
    demo: DemoStore.get(),
    features: FeatureStore.getAll(),
    statistics: StatisticsStore.getAll(),
    customers: CustomerStore.getAll(),
    news: NewsStore.getAll(),
  };
}

var TswApp = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    DemoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DemoStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="tswapp">
        <HeaderSection data={this.state} />
        <FeatureSection data={this.state} />
        <DemoVideoSection />
        <StatisticsSection data={this.state} />
        <CustomerSection data={this.state} />
        <NewsSection data={this.state} />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = TswApp;
