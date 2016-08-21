/*
 * Customer action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

  /**
   * @param      {Array}  customers
   */
  receiveAll: function(customers) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_CUSTOMERS,
      customers: customers
    });
  }

};
