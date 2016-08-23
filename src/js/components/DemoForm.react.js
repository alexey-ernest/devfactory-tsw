/**
 * Demo form component.
 */

import React, {Component, PropTypes} from 'react';
import DemoActionCreators from '../actions/DemoActionCreators';

var ENTER_KEY_CODE = 13;

export default class DemoForm extends Component {

  static propTypes = {
    demo: PropTypes.object.isRequired
  }

  state = {
    name: this.props.demo.name || '',
    email: this.props.demo.email || ''
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

  _onNameChange = (event) => {
    var newState = assign({}, this.state, {
      name: event.target.value
    });

    this.setState(newState);
  }

  _onEmailChange = (event) => {
    var newState = assign({}, this.state, {
      email: event.target.value
    });

    this.setState(newState);
  }

  _onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  }

  _onSubmit = (event) => {
    var state = {
      isRequested: true,
      name: this.state.name.trim(),
      email: this.state.email.trim()
    };

    DemoActionCreators.submitForm(state);
  }

}
