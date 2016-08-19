/**
 * Closing statement section component.
 */

var React = require('react');
var ClosingCta = require('./ClosingCta.react');

var ReactPropTypes = React.PropTypes;

var ClosingStatementSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="closing-statement">
        <div className="closing-cta">
          <ClosingCta demo={this.props.data.demo} />
        </div>
      </section>
    );
  }

});

module.exports = ClosingStatementSection;
