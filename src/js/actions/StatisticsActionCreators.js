/*
 * Statistics action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  receiveAll: function(statistics) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_STATISTICS,
      statistics: statistics
    });
  }

};
