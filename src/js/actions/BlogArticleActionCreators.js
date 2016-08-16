/*
 * Blog article action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  /**
   * @param      {Array}  rawArticles
   */
  receiveLatest: function(rawArticles) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_BLOG_ARTICLES,
      rawArticles: rawArticles
    });
  }

};
