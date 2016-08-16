/**
 * Feature list component.
 */

var React = require('react');
var FeatureListItem = require('./FeatureListItem.react');

var ReactPropTypes = React.PropTypes;

var FeatureList = React.createClass({

  propTypes: {
    features: ReactPropTypes.array.isRequired
  },

  render: function() {
    var features = this.props.features.map(function (feature) {
      return (
        <FeatureListItem key={feature.id} feature={feature} />
      );
    });

    return (
      <ul>
        {features}
      </ul>
    );
  },

});

module.exports = FeatureList;
