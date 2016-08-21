/*
 * Demo action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

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
