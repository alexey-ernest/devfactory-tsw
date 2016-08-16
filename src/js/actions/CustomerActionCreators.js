/*
 * Customer action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  receiveAll: function(customers) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_CUSTOMERS,
      customers: customers
    });
  }

};
