/**
 * Feature store.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = TswConstants.ActionTypes;
var CHANGE_EVENT = 'change';

/**
 * Private storage.
 *
 * @type       {Array}
 */
var _data = [];

class FeatureStore extends EventEmitter {

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

  getAll() {
    return _data;
  }

}

// single instance
let store = new FeatureStore();

// dispatch token
FeatureStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_FEATURES:
      _data = action.features;
      this.emitChange();
      break;

    default:
      // do nothing
  }

}.bind(store));

export default store;
