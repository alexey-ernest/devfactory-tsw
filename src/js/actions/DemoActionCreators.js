/*
 * Demo action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

var ActionTypes = TswConstants.ActionTypes;

export default {

  /**
   * Submits request for demo.
   *
   * @param      {Object}  demo
   */
  submitForm: function(demo) {
    AppDispatcher.dispatch({
      type: ActionTypes.SUBMIT_DEMO_FORM,
      demo: demo
    });
  },

  /**
   * Receives success response for demo request.
   */
  receiveSuccessResponse: function() {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SUCCESSFULL_DEMO_RESPONSE
    });
  }

};
