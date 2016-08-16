/**
 * Demo store.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = TswConstants.ActionTypes;
var CHANGE_EVENT = 'change';

/**
 * Private storage.
 *
 * @type       {Object}
 */
var _data = {
  isRequested: false,
  name: '',
  email: ''
};

var DemoStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Adds a change listener.
   *
   * @param      {function}  callback  The callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Removes a change listener.
   *
   * @param      {Function}  callback  The callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function() {
    return _data;
  },

});

DemoStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_DEMO:
      _data = action.demo;
      DemoStore.emitChange();
      break;

    case ActionTypes.SUBMIT_DEMO_FORM:
      _data.isRequested = true;
      _data.name = action.demo.name;
      _data.email = action.demo.email;
      DemoStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = DemoStore;
