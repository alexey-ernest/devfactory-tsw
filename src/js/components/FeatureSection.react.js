/**
 * Feature section component.
 */

var React = require('react');
var FeatureList = require('./FeatureList.react');

var ReactPropTypes = React.PropTypes;

var FeatureSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="features">
        <FeatureList features={this.props.data.features} />
      </section>
    );
  }

});

module.exports = FeatureSection;
