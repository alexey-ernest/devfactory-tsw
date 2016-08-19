/**
 * News store.
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
 * @type       {Array}
 */
var _data = [];

var NewsStore = assign({}, EventEmitter.prototype, {

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

  getAll: function() {
    return _data;
  },

});

NewsStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_NEWS:
      _data = action.news;
      NewsStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = NewsStore;
