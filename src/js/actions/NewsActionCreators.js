/*
 * News action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

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
