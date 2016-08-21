/*
 * Statistics action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

  /**
   * @param      {Array}  statistics
   */
  receiveAll: function(statistics) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_STATISTICS,
      statistics: statistics
    });
  }

};
