
/**
 * App bar section component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var AppBarSection = React.createClass({

  contextTypes: {
    muiTheme: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {open: false};
  },

  render: function() {
    return (
      <section
        className="app-bar"
        style={{
          backgroundColor: this.context.muiTheme.palette.primary1Color
        }}>
        <div className="brand-image">Testing Service by DevFactory</div>
      </section>
    );
  }

});

module.exports = AppBarSection;
