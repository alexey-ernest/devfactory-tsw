/**
 * Demo form component.
 */

// CSS
import * as styles from '../../sass/modules/demo-form.sass';

import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import assign from 'object-assign';

import DemoActionCreators from '../actions/DemoActionCreators';

var ENTER_KEY_CODE = 13;

// Client side validation
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validate = (values) => {
  const errors = {};

  if (!values.email || values.email.trim() === '' || !emailRegex.test(values.email.trim())) {
    return false
  }

  return true;
}

export default class DemoForm extends Component {

  static propTypes = {
    demo: PropTypes.object.isRequired
  };

  state = {
    name: this.props.demo.name || '',
    email: this.props.demo.email || ''
  };

  render() {
    var isFormValid = validate(this.state);

    var isRequested = this.props.demo.isRequested;
    var isLoading = this.props.demo.isLoading;

    var demoButton = isRequested && !isLoading ?
      'Your request was sent. Thanks!' :
      'Request your free demo now';

    return (
      <form onSubmit={this._onSubmit}>
        <TextField
          id="DemoFormName"
          name="demo-name"
          hintText="Your Name"
          defaultValue={this.state.name}
          onChange={this._onNameChange}
          onKeyDown={this._onKeyDown}
          disabled={isRequested}
          fullWidth={true}
        />
        <TextField
          id="DemoFormEmail"
          name="demo-email"
          hintText="Your Email*"
          defaultValue={this.state.email}
          onChange={this._onEmailChange}
          onKeyDown={this._onKeyDown}
          disabled={isRequested}
          fullWidth={true}
          required={true}
        />
        <div className="cta-wrapper">
          <RaisedButton
            className="cta-submit-button"
            label={demoButton}
            secondary={true}
            type="submit"
            disabled={isRequested || !isFormValid}
            onClick={this._onSubmit}
            fullWidth={true}
          />
          <div className="cta-arrow"></div>
        </div>
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
      name: this.state.name.trim(),
      email: this.state.email.trim()
    };

    DemoActionCreators.submitForm(state);
    event.preventDefault();
  }

}
