/*
 * News action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  /**
   * @param      {Array}  news
   */
  receiveAll: function(news) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_NEWS,
      news: news
    });
  }

};
