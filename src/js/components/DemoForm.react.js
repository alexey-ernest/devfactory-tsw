/**
 * Demo form component.
 */

import React, {Component, PropTypes} from 'react';

import DemoActionCreators from '../actions/DemoActionCreators';

var ENTER_KEY_CODE = 13;

export default class DemoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.demo.name || '',
      email: this.props.demo.email || ''
    };

    this._onNameChange = this._onNameChange.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  render() {
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
  }

  /**
   * @param {object} event
   */
  _onNameChange(/*object*/ event) {
    var newState = assign({}, this.state, {
      name: event.target.value
    });

    this.setState(newState);
  }

  /**
   * @param {object} event
   */
  _onEmailChange(/*object*/ event) {
    var newState = assign({}, this.state, {
      email: event.target.value
    });

    this.setState(newState);
  }

  /**
   * @param  {object} event
   */
  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  }

  /**
   * Submits the demo form.
   *
   * @param {object} event
   */
  _onSubmit(/*object*/ event) {
    var state = {
      isRequested: true,
      name: this.state.name.trim(),
      email: this.state.email.trim()
    };

    DemoActionCreators.submitForm(state);
  }

}

DemoForm.propTypes = {
  demo: PropTypes.object.isRequired
}
