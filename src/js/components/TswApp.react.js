/**
 * Tsw App main component.
 */

var React = require('react');
var BenefitStore = require('../stores/BenefitStore');
var DemoStore = require('../stores/DemoStore');
var FeatureStore = require('../stores/FeatureStore');
var HeaderSection = require('./HeaderSection.react');
var FeatureSection = require('./FeatureSection.react');

function getStateFromStores() {
  return {
    benefits: BenefitStore.getAll(),
    demo: DemoStore.get(),
    features: FeatureStore.getAll()
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
