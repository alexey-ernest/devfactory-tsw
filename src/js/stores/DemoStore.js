/**
 * Demo store.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';
import EventEmitter from 'events';
import DemoDataUtils from '../utils/DemoDataUtils';

var ActionTypes = TswConstants.ActionTypes;
var CHANGE_EVENT = 'change';

/**
 * Private storage.
 *
 * @type       {Object}
 */
var _data = {
  isRequested: false,
  isLoading: false,
  name: '',
  email: ''
};

class DemoStore extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * Adds a change listener.
   *
   * @param      {function}  callback  The callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * Removes a change listener.
   *
   * @param      {Function}  callback  The callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  get() {
    return _data;
  }

}

// single instance
let store = new DemoStore();

// dispatch token
DemoStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_DEMO:
      _data = action.demo;
      this.emitChange();
      break;

    case ActionTypes.SUBMIT_DEMO_FORM:
      _data.isRequested = true;
      _data.isLoading = true;
      _data.name = action.demo.name;
      _data.email = action.demo.email;

      // submit request
      var demoRequest = {
        name: _data.name,
        email: _data.email
      };
      DemoDataUtils.sendDemoRequest(demoRequest);

      this.emitChange();
      break;

    case ActionTypes.RECEIVE_SUCCESSFULL_DEMO_RESPONSE:
      _data.isLoading = false;
      this.emitChange();
      break;


    default:
      // do nothing
  }

}.bind(store));

export default store;
