/*
 * Demo action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

/**
   * @param      {Object}  demo
   */
  receive: function(demo) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_DEMO,
      demo: demo
    });
  }

};
