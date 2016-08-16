/**
 * Feature list item component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var FeatureListItem = React.createClass({

  propTypes: {
    feature: ReactPropTypes.object.isRequired
  },

  render: function() {
    var feature = this.props.feature;
    return (
      <li>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </li>
    );
  }

});

module.exports = FeatureListItem;
