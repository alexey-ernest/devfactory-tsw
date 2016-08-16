/*
 * Benefit action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  receiveAll: function(benefits) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_BENEFITS,
      benefits: benefits
    });
  }

};
