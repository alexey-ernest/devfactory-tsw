/**
 * Demo form component.
 */

var React = require('react');
var assign = require('object-assign');
var DemoActionCreators = require('../actions/DemoActionCreators');

var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var DemoForm = React.createClass({

  propTypes: {
    demo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      name: this.props.demo.name || '',
      email: this.props.demo.email || ''
    };
  },

  render: function() {
    var isRequested = this.props.demo.isRequested;
    var demoButton = !isRequested ? 'Request your free demo now' : 'Your request was sent. Thanks!';
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Your Name"
          autoFocus={true}
          onChange={this._onNameChange}
          onKeyDown={this._onKeyDown}
          disabled={isRequested}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Your Email"
          required="required"
          onChange={this._onEmailChange}
          onKeyDown={this._onKeyDown}
          disabled={isRequested}
        />
        <button type="submit" disabled={isRequested} onClick={this._onSubmit}>{demoButton}</button>
      </form>
    );
  },

  /**
   * @param {object} event
   */
  _onNameChange: function(/*object*/ event) {
    var newState = assign({}, this.state, {
      name: event.target.value
    });

    this.setState(newState);
  },

  /**
   * @param {object} event
   */
  _onEmailChange: function(/*object*/ event) {
    var newState = assign({}, this.state, {
      email: event.target.value
    });

    this.setState(newState);
  },

  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  },

  /**
   * Submits the demo form.
   *
   * @param {object} event
   */
  _onSubmit: function (/*object*/ event) {
    var state = assign({}, this.state, {
      isRequested: true
    });
    DemoActionCreators.submitForm(state);
  }

});

module.exports = DemoForm;
