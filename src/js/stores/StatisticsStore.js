/**
 * Statistics store.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';
import EventEmitter from 'events';

var ActionTypes = TswConstants.ActionTypes;
var CHANGE_EVENT = 'change';

/**
 * Private storage.
 *
 * @type       {Array}
 */
var _data = [];

class StatisticsStore extends EventEmitter {

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
let store = new StatisticsStore();

// dispatch token
StatisticsStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_STATISTICS:
      _data = action.statistics;
      this.emitChange();
      break;

    default:
      // do nothing
  }

}.bind(store));

export default store;
