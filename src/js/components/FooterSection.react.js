/**
 * Footer section component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var FooterSection = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="brand-image">Testing Service by DevFactory</div>
        <div className="footer-menu">
          <a href="https://devfactory.zendesk.com/">Help Center</a>
        </div>
      </footer>
    );
  }

});

module.exports = FooterSection;
