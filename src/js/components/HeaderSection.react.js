/**
 * Header section component.
 */

var React = require('react');
var BenefitList = require('./BenefitList.react');
var Cta = require('./Cta.react');

var ReactPropTypes = React.PropTypes;

var HeaderSection = React.createClass({

  propTypes: {
    data: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <header className="header">
        <div className="brand-image">Testing Service by DevFactory</div>
        <h1>Instantly improve your product quality</h1>
        <p>Easily automate and continously improve your software quality checking by running smart functional test suites on daily basis.</p>
        <div className="benefits">
          <BenefitList benefits={this.props.data.benefits} />
        </div>
        <div className="cta">
          <Cta data={this.props.data} />
        </div>
        <div className="screenshots">

        </div>
      </header>
    );
  }

});

module.exports = HeaderSection;
