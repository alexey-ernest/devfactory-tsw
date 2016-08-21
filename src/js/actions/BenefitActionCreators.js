/*
 * Benefit action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

  /**
   * @param      {Array}  benefits
   */
  receiveAll(benefits) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_BENEFITS,
      benefits: benefits
    });
  }

};
