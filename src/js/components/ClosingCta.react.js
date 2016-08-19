/**
 * Closing Cta component.
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var ClosingCta = React.createClass({

  propTypes: {
    demo: ReactPropTypes.object.isRequired
  },

  render: function() {
    var isRequested = this.props.demo.isRequested;
    var demoButton = !isRequested ? 'Request your free demo now' : 'Your request was sent. Thanks!';
    return (
      <button disabled={isRequested} onClick={this._onClick}>{demoButton}</button>
    );
  },

  /**
   * Click event handler.
   *
   * @param {object} event
   */
  _onClick: function (/*object*/ event) {
    window.scrollTo(0, 150);
  }

});

module.exports = ClosingCta;
