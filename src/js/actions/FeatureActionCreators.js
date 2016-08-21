/*
 * Feature action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

  /**
   * @param      {Array}  features
   */
  receiveAll: function(features) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_FEATURES,
      features: features
    });
  }

};
