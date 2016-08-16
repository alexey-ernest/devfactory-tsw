/*
 * Feature action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  receiveAll: function(features) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_FEATURES,
      features: features
    });
  }

};
